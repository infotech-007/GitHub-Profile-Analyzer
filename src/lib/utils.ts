import { clsx, type ClassValue } from 'clsx';import { twMerge } from 'tailwind-merge';
export const cn=(...inputs:ClassValue[])=>twMerge(clsx(inputs));
export const compactNumber=(n:number)=>Intl.NumberFormat('en',{notation:'compact'}).format(n);
export const dateFmt=(d:string)=>new Intl.DateTimeFormat('en',{dateStyle:'medium'}).format(new Date(d));
