"use client";

import React, { useEffect, useRef, useState } from "react";

import * as d3 from "d3";
import _ from "lodash";

interface SunburstData {
  name: string;
  value?: number;
  children?: SunburstData[];
}

interface D3SunburstChartProps {
  height?: number;
}

const data = {
  name: "Root",
  children: [
    {
      name: "Branch 1",
      value: 100,
      children: [
        { name: "Leaf 1", value: 50 },
        { name: "Leaf 2", value: 50 },
      ],
    },
    {
      name: "Branch 2",
      value: 100,
      children: [
        { name: "Leaf 3", value: 30 },
        { name: "Leaf 4", value: 70 },
      ],
    },
  ],
};

const D3SunburstChart: React.FC<D3SunburstChartProps> = ({ height = 400 }) => {
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

    // Clear existing content
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Dimensions
    const radius = Math.min(width, height) / 2;

    // Partition data
    const root = d3
      .hierarchy(data)
      .sum((d) => _.get(d, "value") || 0)
      .sort((a, b) => b.value! - a.value!);

    const partition = d3.partition<SunburstData>().size([2 * Math.PI, radius]);
    partition(root as any);

    const color = d3.scaleOrdinal(
      d3.quantize(d3.interpolateRainbow, root.descendants().length),
    );

    const arc = d3
      .arc<d3.HierarchyRectangularNode<SunburstData>>()
      .startAngle((d) => d.x0)
      .endAngle((d) => d.x1)
      .innerRadius((d) => d.y0)
      .outerRadius((d) => d.y1);

    // Draw chart
    const g = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    g.selectAll("path")
      .data(root.descendants())
      .join("path")
      .attr("d", arc as any)
      .attr("fill", (d) =>
        color(
          d
            .ancestors()
            .map((d) => d.data.name)
            .join("/"),
        ),
      )
      .on("mouseover", function () {
        d3.select(this).attr("opacity", 0.7);
      })
      .on("mouseout", function () {
        d3.select(this).attr("opacity", 1);
      })
      .append("title")
      .text(
        (d) =>
          `${d
            .ancestors()
            .map((d) => d.data.name)
            .reverse()
            .join("/")}\n${d.value}`,
      );

    // Add labels
    g.selectAll("text")
      .data(
        root
          .descendants()
          .filter((d) => _.get(d, "x1")! - _.get(d, "x0")! > 0.05),
      ) // Show labels for larger segments
      .join("text")
      .attr("transform", (d) => {
        return `translate(${arc.centroid(d as any)}))`;
      })
      .attr("text-anchor", "middle")
      .text((d) => d.data.name);
  }, [data, width, height]);

  return (
    <div ref={containerRef} className="flex-[0_0_48%] rounded p-2 shadow">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default D3SunburstChart;
