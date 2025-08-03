"use client";

import React from "react";

import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  className?: string;
};

const LineChartExample: React.FC<Props> = ({ className }) => {
  const t = useTranslations("month");

  const data = [
    { month: t("Jun"), orange: 95, green: 95 },
    { month: t("Jul"), orange: 75, green: 85 },
    { month: t("Aug"), orange: 65, green: 70 },
    { month: t("Sep"), orange: 85, green: 65 },
    { month: t("Oct"), orange: 95, green: 55 },
    { month: t("Nov"), orange: 75, green: 50 },
    { month: t("Dec"), orange: 90, green: 45 },
    { month: t("Jan"), orange: 70, green: 40 },
    { month: t("Feb"), orange: 65, green: 35 },
    { month: t("Mar"), orange: 60, green: 25 },
    { month: t("Apr"), orange: 55, green: 20 },
    { month: t("May"), orange: 65, green: 15 },
  ];

  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="none"
            stroke="#777777"
            horizontal={false}
            vertical={true}
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#ffffff", fontSize: 12 }}
            interval={0}
          />

          <YAxis axisLine={false} tickLine={false} tick={false} />

          <Line
            type="monotone"
            dataKey="orange"
            stroke="#FFA726"
            strokeWidth={2.5}
            dot={{ fill: "#FFCC21", strokeWidth: 0, r: 4 }}
            activeDot={{ r: 5, fill: "#FFCC21" }}
          />

          <Line
            type="monotone"
            dataKey="green"
            stroke="#26C6DA"
            strokeWidth={2.5}
            dot={{ fill: "#8FE9D0", strokeWidth: 0, r: 4 }}
            activeDot={{ r: 5, fill: "#8FE9D0" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartExample;
