const KEY='grade6-chinese-handwriting-v1';
export function load(){try{const x=JSON.parse(localStorage.getItem(KEY));return x&&x.version===1?x:{version:1,items:{},history:[]}}catch{return {version:1,items:{},history:[]}}}
export function save(data){localStorage.setItem(KEY,JSON.stringify(data))}
export function record(data,q,result,hinted,mode){const x=data.items[q.id]||{attempts:0,correct:0,wrong:0,unsure:0,hints:0,writes:0};x.attempts++;x.writes++;x[result]++;if(hinted)x.hints++;x.review=result!=='correct'||hinted;data.items[q.id]=x;data.history.push({date:new Date().toISOString(),id:q.id,lesson:q.lesson,result,hinted,mode,source:'self-check'});save(data)}
export function exportData(data){const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='國語手寫紀錄.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
export async function importData(file){const data=JSON.parse(await file.text());if(data.version!==1||!data.items||!Array.isArray(data.history))throw Error('紀錄格式不符');save(data);return data}
