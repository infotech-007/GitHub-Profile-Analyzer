'use client';import{PieChart,Pie,Tooltip,ResponsiveContainer,Cell,Legend}from'recharts';
const colors=['#6366f1','#ec4899','#06b6d4','#22c55e','#f59e0b','#ef4444','#8b5cf6'];
export function LanguageChart({data}:{data:{name:string;value:number;percent:number}[]}){return <div className="h-80"><ResponsiveContainer><PieChart><Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label={d=>`${d.name} ${d.percent}%`}>{data.map((_,i)=><Cell key={i} fill={colors[i%colors.length]}/>)}</Pie><Tooltip/><Legend/></PieChart></ResponsiveContainer></div>}
