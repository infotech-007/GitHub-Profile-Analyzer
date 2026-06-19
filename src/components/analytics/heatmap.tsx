'use client';import type{ContributionPoint}from'@/types/github';
export function Heatmap({data}:{data:ContributionPoint[]}){return <div className="mt-4 grid grid-cols-20 gap-1">{data.slice(-120).map(d=><div key={d.date} title={`${d.date}: ${d.count}`} className="h-4 rounded" style={{backgroundColor:d.count?'rgba(99,102,241,'+Math.min(1,.2+d.count/10)+')':'rgba(148,163,184,.2)'}}/> )}</div>}
