import React, { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

type Props = {
  data: { time: string; price: number }[];
};

function AssetChart({ data }: Props) {
  const chartData = useMemo(() => data, [data]);

  return (
    <div className="w-full h-[320px] sm:h-[420px] md:h-[540px] bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-3xl shadow-xl border border-gray-100 p-2 sm:p-4 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 16, right: 16, left: 4, bottom: 32 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="time"
            tick={{ fontSize: 8, fill: '#6366f1' }}
            angle={-35}
            textAnchor="end"
            interval={0}
            height={60}
          />
          <YAxis
            tick={{ fontSize: 10, fill: '#6366f1' }}
            width={50}
            domain={[dataMin => Math.floor(dataMin * 0.98), dataMax => Math.ceil(dataMax * 1.02)]}
          />
          <Tooltip
            contentStyle={{ background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', color: '#111' }}
            labelStyle={{ fontWeight: 700, color: '#6366f1', fontSize: 13 }}
            itemStyle={{ fontWeight: 500, fontSize: 13 }}
            cursor={{ stroke: '#6366f1', strokeWidth: 2, opacity: 0.2 }}
          />
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

export default React.memo(AssetChart);
