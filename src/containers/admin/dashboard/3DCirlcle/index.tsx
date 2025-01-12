// src/components/D3FanChart.tsx
"use client";

import { useEffect, useRef, useState } from "react";

import * as d3 from "d3";

interface DataPoint {
  date: Date;
  median: number;
  lower95: number;
  upper95: number;
  lower50: number;
  upper50: number;
}

interface D3FanChartProps {
  height?: number;
}

const D3FanChart: React.FC<D3FanChartProps> = ({ height = 400 }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [width, setWidth] = useState(0);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!svgRef.current || width === 0) return;

    // Sample data - 12 months of forecasted values with confidence intervals
    const data: DataPoint[] = Array.from({ length: 12 }, (_, i) => {
      const date = new Date(2024, i, 1);
      const baseValue = 100 + i * 5;
      const uncertainty = i * 2; // Uncertainty increases over time

      return {
        date,
        median: baseValue,
        lower95: baseValue - uncertainty * 2,
        upper95: baseValue + uncertainty * 2,
        lower50: baseValue - uncertainty,
        upper50: baseValue + uncertainty,
      };
    });

    // Clear existing content
    d3.select(svgRef.current).selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create scales
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date) as [Date, Date])
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([
        d3.min(data, (d) => d.lower95) || 0,
        d3.max(data, (d) => d.upper95) || 100,
      ])
      .range([innerHeight, 0])
      .nice();

    // Create areas
    const area95 = d3
      .area<DataPoint>()
      .x((d) => xScale(d.date))
      .y0((d) => yScale(d.lower95))
      .y1((d) => yScale(d.upper95))
      .curve(d3.curveMonotoneX);

    const area50 = d3
      .area<DataPoint>()
      .x((d) => xScale(d.date))
      .y0((d) => yScale(d.lower50))
      .y1((d) => yScale(d.upper50))
      .curve(d3.curveMonotoneX);

    const medianLine = d3
      .line<DataPoint>()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.median))
      .curve(d3.curveMonotoneX);

    // Add the 95% confidence area
    g.append("path").datum(data).attr("fill", "#e3f2fd").attr("d", area95);

    // Add the 50% confidence area
    g.append("path").datum(data).attr("fill", "#90caf9").attr("d", area50);

    // Add the median line
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#1976d2")
      .attr("stroke-width", 2)
      .attr("d", medianLine);

    // Add axes
    const xAxis = d3
      .axisBottom(xScale)
      .tickFormat(d3.timeFormat("%b %Y") as any);

    const yAxis = d3.axisLeft(yScale);

    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(xAxis)
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

    g.append("g").call(yAxis);

    // Add legend
    const legend = svg
      .append("g")
      .attr("transform", `translate(${margin.left + 10},${margin.top + 10})`);

    // 95% confidence interval
    legend
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", "#e3f2fd");

    legend.append("text").attr("x", 20).attr("y", 12).text("95% Confidence");

    // 50% confidence interval
    legend
      .append("rect")
      .attr("x", 0)
      .attr("y", 20)
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", "#90caf9");

    legend.append("text").attr("x", 20).attr("y", 32).text("50% Confidence");

    // Median line
    legend
      .append("line")
      .attr("x1", 0)
      .attr("x2", 15)
      .attr("y1", 47)
      .attr("y2", 47)
      .attr("stroke", "#1976d2")
      .attr("stroke-width", 2);

    legend.append("text").attr("x", 20).attr("y", 50).text("Median");
  }, [width, height]);

  return (
    <div ref={containerRef} className="flex-[0_0_48%] rounded p-2 shadow">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default D3FanChart;
