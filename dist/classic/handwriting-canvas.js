export class WritingCanvas{
 constructor(canvas,onChange){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.strokes=[];this.active=null;this.onChange=onChange;this.resize();new ResizeObserver(()=>this.resize()).observe(canvas)}
 resize(){const box=this.canvas.getBoundingClientRect(),dpr=window.devicePixelRatio||1;if(!box.width||!box.height)return;this.canvas.width=Math.round(box.width*dpr);this.canvas.height=Math.round(box.height*dpr);this.ctx.setTransform(dpr,0,0,dpr,0,0);this.draw()}
 point(e){const r=this.canvas.getBoundingClientRect();return {x:Math.max(.015,Math.min(.985,(e.clientX-r.left)/r.width)),y:Math.max(.015,Math.min(.985,(e.clientY-r.top)/r.height))}}
 start(e){if(this.active)return;e.preventDefault();this.canvas.setPointerCapture(e.pointerId);this.active={id:e.pointerId,points:[this.point(e)]};this.strokes.push(this.active.points);this.draw();this.onChange()}
 move(e){if(!this.active||this.active.id!==e.pointerId)return;e.preventDefault();for(const p of e.getCoalescedEvents?.()||[e])this.active.points.push(this.point(p));this.draw()}
 end(e){if(!this.active||this.active.id!==e.pointerId)return;e.preventDefault();this.active=null;this.onChange()}
 draw(){const c=this.ctx,w=this.canvas.clientWidth,h=this.canvas.clientHeight;c.clearRect(0,0,w,h);c.strokeStyle='#b9d4ef';c.lineWidth=1;c.setLineDash([7,6]);c.beginPath();c.moveTo(w/2,0);c.lineTo(w/2,h);c.moveTo(0,h/2);c.lineTo(w,h/2);c.moveTo(0,0);c.lineTo(w,h);c.moveTo(w,0);c.lineTo(0,h);c.stroke();c.setLineDash([]);c.strokeStyle='#173b75';c.fillStyle='#173b75';c.lineWidth=Math.max(4,Math.min(w,h)*.018);c.lineCap='round';c.lineJoin='round';for(const stroke of this.strokes){if(!stroke.length)continue;c.beginPath();c.moveTo(stroke[0].x*w,stroke[0].y*h);for(const p of stroke.slice(1))c.lineTo(p.x*w,p.y*h);c.stroke();if(stroke.length===1){c.beginPath();c.arc(stroke[0].x*w,stroke[0].y*h,c.lineWidth/2,0,Math.PI*2);c.fill()}}}
 undo(){this.strokes.pop();this.draw();this.onChange()}
 clear(){this.strokes=[];this.active=null;this.draw();this.onChange()}
 get hasInk(){return this.strokes.some(s=>s.length>0)}
 exportImage(){return this.canvas.toDataURL('image/png')}
}
