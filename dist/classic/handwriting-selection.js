function shuffle(items,random){const result=[...items];for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]]}return result}

// Draw unseen characters first. The small selection state is saved with the learning record.
export function selectRound(pool,count,scope,rounds,random=Math.random){
  const state=rounds[scope]||{serial:0,lastUsed:{},lastOrder:[]};
  const randomized=shuffle(pool,random);
  randomized.sort((a,b)=>(state.lastUsed[a.id]||0)-(state.lastUsed[b.id]||0));
  const chosen=randomized.slice(0,Math.min(count,pool.length));
  const ids=chosen.map(q=>q.id);
  if(ids.length>1&&ids.join('|')===state.lastOrder.join('|'))chosen.push(chosen.shift());
  state.serial++;
  for(const q of chosen)state.lastUsed[q.id]=state.serial;
  state.lastOrder=chosen.map(q=>q.id);
  rounds[scope]=state;
  return chosen;
}
