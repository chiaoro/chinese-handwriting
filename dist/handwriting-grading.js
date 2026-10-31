// Future handwriting recognizer contract. OCR text is not evidence of stroke order.
export async function recognizeHandwriting(_image,_expected){return {text:null,confidence:0,matches:null,status:'unavailable'}}
export function points(result,hinted,mode,streak){if(result!=='correct')return 0;return Math.max(1,(mode==='advanced'?12:10)-(hinted?5:0)+(mode==='advanced'?Math.min(streak,5)*2:0))}
