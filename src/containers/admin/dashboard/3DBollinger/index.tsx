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

    // Create pie chart layout
    const radius = Math.min(innerWidth, innerHeight) / 2;
    const pie = d3.pie<DataPoint>().value((d) => d.value);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    // Create a group for the pie chart
    const g = svg
      .append("g")
      .attr("transform", `translate(${innerWidth / 2},${innerHeight / 2})`);

    // Create pie chart slices
    const slices = g
      .selectAll<SVGPathElement, DataPoint>("path")
      .data(pie(data))
      .join("path")
      .attr("d", arc as any) // Initially draw the arc with 0 size
      .attr("fill", (d, i) => d3.schemeCategory10[i % 10]) // Different colors for each slice
      .attr("opacity", 0.6);

    // Animate the pie chart slices
    slices
      .transition()
      .duration(1000)
      .ease(d3.easeBounceOut) // Bounce effect for the animation
      .attrTween("d", (d): any => {
        const i = d3.interpolate(d.startAngle, d.endAngle);
        return function (t: any) {
          d.endAngle = i(t); // Interpolate the end angle for animation
          return arc(d as any); // Return the updated arc
        };
      });
  }, [width, height]); // Re-render when width or height changes

  return (
    <div ref={containerRef} className="flex-[0_0_48%] rounded p-2 shadow">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default D3Chart;
