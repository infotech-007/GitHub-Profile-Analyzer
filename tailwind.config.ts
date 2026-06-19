import type { Config } from 'tailwindcss';
const config: Config = { darkMode: 'class', content: ['./src/**/*.{ts,tsx}'], theme: { extend: { colors: { border: 'hsl(var(--border))', background: 'hsl(var(--background))', foreground: 'hsl(var(--foreground))', primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' }, card: 'hsl(var(--card))' }, boxShadow: { glow: '0 0 60px rgba(99,102,241,.25)' }, gridTemplateColumns:{20:'repeat(20,minmax(0,1fr))'} } }, plugins: [] };
export default config;
