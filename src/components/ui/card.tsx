import{cn}from'@/lib/utils';import type{HTMLAttributes}from'react';
export function Card({className,...p}:HTMLAttributes<HTMLDivElement>){return <div className={cn('rounded-3xl border border-border bg-card p-6 shadow-sm',className)} {...p}/>}
