import{cn}from'@/lib/utils';import type{ButtonHTMLAttributes}from'react';
export function Button({className,...p}:ButtonHTMLAttributes<HTMLButtonElement>){return <button className={cn('inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50',className)} {...p}/>}
