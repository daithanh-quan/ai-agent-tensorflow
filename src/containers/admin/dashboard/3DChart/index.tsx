"use client";

import React, { useEffect, useRef, useState } from "react";

import * as d3 from "d3";

interface DataPoint {
  name: string;
  value: number;
}

interface D3ChartProps {
  height?: number;
}

const D3Chart: React.FC<D3ChartProps> = ({ height = 400 }) => {
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

    // Initial width
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // D3 rendering effect
  useEffect(() => {
    if (!svgRef.current || width === 0) return;

    const data: DataPoint[] = [
      { name: "A", value: 10 },
      { name: "B", value: 20 },
      { name: "C", value: 30 },
      { name: "D", value: 40 },
    ];

    // Clear existing content
    d3.select(svgRef.current).selectAll("*").remove();

    const margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40,
    };

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Create scales
    const xScale = d3
      .scaleBand<string>()
      .domain(data.map((d) => d.name))
      .range([margin.left, innerWidth + margin.left])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) || 0])
      .range([innerHeight + margin.top, margin.top]);

    // Create bars
    svg
      .selectAll<SVGRectElement, DataPoint>("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => xScale(d.name) || 0)
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => innerHeight + margin.top - yScale(d.value))
      .attr("fill", "steelblue");

    // Add axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .attr("transform", `translate(0,${innerHeight + margin.top})`)
      .call(xAxis);

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(yAxis);
  }, [width, height]); // Re-render when width or height changes

  return (
    <div ref={containerRef} className="flex-[0_0_48%] rounded p-2 shadow">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default D3Chart;
