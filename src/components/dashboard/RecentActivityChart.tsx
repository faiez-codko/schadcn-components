import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { time: "00:00", visitors: 240 },
  { time: "03:00", visitors: 139 },
  { time: "06:00", visitors: 980 },
  { time: "09:00", visitors: 390 },
  { time: "12:00", visitors: 480 },
  { time: "15:00", visitors: 380 },
  { time: "18:00", visitors: 430 },
  { time: "21:00", visitors: 560 },
]

export function RecentActivityChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="time"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        />
        <Area
          type="monotone"
          dataKey="visitors"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorVisitors)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
