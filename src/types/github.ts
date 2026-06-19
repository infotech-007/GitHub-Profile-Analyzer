export type GitHubUser={login:string;id:number;avatar_url:string;html_url:string;name:string|null;company:string|null;blog:string|null;location:string|null;bio:string|null;twitter_username:string|null;public_repos:number;public_gists:number;followers:number;following:number;created_at:string};
export type GitHubRepo={id:number;name:string;full_name:string;html_url:string;description:string|null;stargazers_count:number;forks_count:number;watchers_count:number;open_issues_count:number;language:string|null;updated_at:string;created_at:string;size:number;archived:boolean;private:boolean;fork:boolean};
export type ContributionPoint={date:string;count:number};
export type ContributionSummary={total:number;weekly:number;monthly:number;heatmap:ContributionPoint[]};
export type GitHubEvent={id:string;type:string;created_at:string;repo:{name:string};payload:Record<string,unknown>};
