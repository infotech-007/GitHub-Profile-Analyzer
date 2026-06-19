import axios from 'axios';import { z } from 'zod';import type{GitHubEvent,GitHubRepo,GitHubUser}from'@/types/github';
const usernameSchema=z.string().min(1).max(39).regex(/^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/);
const api=axios.create({baseURL:'https://api.github.com',headers:{Accept:'application/vnd.github+json',...(process.env.GITHUB_TOKEN?{Authorization:`Bearer ${process.env.GITHUB_TOKEN}`}:{})}});
export async function getUser(username:string){const login=usernameSchema.parse(username);const{data}=await api.get<GitHubUser>(`/users/${login}`,{next:{revalidate:300} as never});return data}
export async function getRepos(username:string){const login=usernameSchema.parse(username);let page=1,repos:GitHubRepo[]=[];while(page<11){const{data}=await api.get<GitHubRepo[]>(`/users/${login}/repos`,{params:{per_page:100,page,sort:'updated'}});repos=repos.concat(data);if(data.length<100)break;page++}return repos}
export async function getEvents(username:string){const login=usernameSchema.parse(username);const{data}=await api.get<GitHubEvent[]>(`/users/${login}/events/public`,{params:{per_page:50}});return data}
export {usernameSchema};
