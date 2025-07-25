// AssetChart: Renders a responsive line chart for asset price history
// Uses recharts for visualization and useMemo for performance
import React, { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

type Props = {
  data: { time: string; price: number }[]; // Array of time/price points
};

function AssetChart({ data }: Props) {
  // Memoize chart data for performance
  const chartData = useMemo(() => data, [data]);

  return (
    <div className="w-full h-[320px] sm:h-[420px] md:h-[540px] bg-gray-800 rounded-3xl shadow-xl border border-gray-800 p-2 sm:p-4 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 16, right: 16, left: 4, bottom: 32 }}>
          {/* Grid lines for readability */}
          <CartesianGrid strokeDasharray="3 3" stroke="white" />
          {/* X axis: time labels */}
          <XAxis
            dataKey="time"
            axisLine={{ stroke: "#6366f1" }}
            tick={{ fontSize: 8, fill: 'white' }}
            angle={-35}
            textAnchor="end"
            interval={0}
            height={60}
          />
          {/* Y axis: price values */}
          <YAxis
            axisLine={{ stroke: "#6366f1" }}
            tick={{ fontSize: 10, fill: 'white' }}
            width={50}
            domain={[dataMin => Math.floor(dataMin * 0.98), dataMax => Math.ceil(dataMax * 1.02)]}
          />
          {/* Tooltip for interactive data display */}
          <Tooltip
            contentStyle={{ background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', color: '#111' }}
            labelStyle={{ fontWeight: 700, color: '#6366f1', fontSize: 13 }}
            itemStyle={{ fontWeight: 500, fontSize: 13 }}
            cursor={{ stroke: '#6366f1', strokeWidth: 2, opacity: 0.2 }}
          />
          {/* Line for price data */}
          <Line
            type="monotone"
            dataKey="price"
            stroke="#a21caf"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: '#a21caf', stroke: '#fff', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Memoize component for performance
export default React.memo(AssetChart);
