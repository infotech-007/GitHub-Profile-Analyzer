export function downloadJson(name:string,data:unknown){download(`${name}.json`,JSON.stringify(data,null,2),'application/json')}
export function toCsv(rows:Record<string,unknown>[]){if(!rows.length)return'';const keys=Object.keys(rows[0]);return[keys.join(','),...rows.map(r=>keys.map(k=>JSON.stringify(r[k]??'')).join(','))].join('\n')}
export function downloadCsv(name:string,rows:Record<string,unknown>[]){download(`${name}.csv`,toCsv(rows),'text/csv')}
export function printPdf(){window.print()}
function download(filename:string,content:string,type:string){const blob=new Blob([content],{type});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;a.click();URL.revokeObjectURL(a.href)}
