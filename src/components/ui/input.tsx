import{cn}from'@/lib/utils';import type{InputHTMLAttributes}from'react';
export function Input({className,...p}:InputHTMLAttributes<HTMLInputElement>){return <input className={cn('w-full rounded-xl border border-border bg-background px-4 py-3 outline-none ring-primary/30 focus:ring-4',className)} {...p}/>}
