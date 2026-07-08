#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const W = 1080, H = 1350, R = 16 / 9;
const get = (k, d = null) => { const i = process.argv.indexOf(`--${k}`); return i >= 0 ? process.argv[i + 1] : d; };
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const rect = o => `<rect x="${o.x}" y="${o.y}" width="${o.w}" height="${o.h}" rx="${o.r||0}" fill="${o.fill||'none'}" stroke="${o.stroke||'none'}" stroke-width="${o.sw||1}" opacity="${o.opacity??1}"/>`;
const circle = o => `<circle cx="${o.cx}" cy="${o.cy}" r="${o.r}" fill="${o.fill}" stroke="${o.stroke||'none'}" stroke-width="${o.sw||1}" opacity="${o.opacity??1}"/>`;
const text = o => `<text x="${o.x}" y="${o.y}" text-anchor="${o.anchor||'middle'}" dominant-baseline="middle" font-family="Microsoft YaHei, SimHei, Arial, sans-serif" font-size="${o.size}" font-weight="${o.weight||700}" fill="${o.fill||'#111'}">${esc(o.value)}</text>`;
const svg = (w,h,b) => Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">${b}</svg>`);
const num = f => { const m = [...f.matchAll(/(\d+)/g)]; return m.length ? Number(m.at(-1)[1]) : 999999; };
const page = (n,total) => Math.min(Math.max(1,n), total);

async function slides(input, prefix='') {
  return (await fs.readdir(input)).filter(n => /\.(png|jpe?g)$/i.test(n)).filter(n => !prefix || n.startsWith(prefix)).sort((a,b) => num(a)-num(b)).map(n => path.join(input,n));
}
async function img(slides, n, w, h, fit='contain', bg='#fff') {
  return sharp(slides[page(n, slides.length)-1]).resize(w,h,{fit,position:'center',background:bg}).jpeg({quality:92}).toBuffer();
}
async function add(comps, slides, n, x, y, w, h, opts={}) {
  comps.push({input: await img(slides,n,w,h,opts.fit||'contain',opts.bg||'#fff'), left: Math.round(x), top: Math.round(y)});
  let body = rect({x:0,y:0,w,h,fill:'none',stroke:opts.stroke||'#55bcd2',sw:opts.sw??3});
  if (opts.label) {
    const tagW = Math.min(w-18, Math.max(96, opts.label.length*15+34));
    body += rect({x:12,y:12,w:tagW,h:34,r:17,fill:opts.tag||'#258fc1',stroke:'#fff',sw:2});
    body += circle({cx:30,cy:29,r:13,fill:'#fff8df',stroke:'#f3b84f',sw:2});
    body += text({x:30,y:30,value:'✓',size:17,fill:'#1885a8',weight:900});
    body += text({x:50,y:30,value:opts.label,size:15,fill:'#fff',weight:800,anchor:'start'});
  }
  comps.push({input: svg(w,h,body), left: Math.round(x), top: Math.round(y)});
}
async function save(comps,out,bg='#fff') { await sharp({create:{width:W,height:H,channels:4,background:bg}}).composite(comps).png({quality:95}).toFile(out); }

async function collage(slides, out) {
  const comps = [{input:svg(W,H,`<defs><linearGradient id="bg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f3fcff"/></linearGradient></defs>${rect({x:0,y:0,w:W,h:H,fill:'url(#bg)'})}`),left:0,top:0}];
  const m=18,g=16,lw=286,rx=m+lw+g,rw=W-rx-m,ch=H-m*2;
  comps.push({input:svg(lw,ch,rect({x:0,y:0,w:lw,h:ch,r:2,fill:'#f7fffd',stroke:'#d6eef1',sw:2})),left:m,top:m});
  const tw=248,th=Math.round(tw/R); let ty=m+8;
  for (const p of [1,2,3,4,5,6,8,12,16].map(x=>page(x,slides.length))) { await add(comps,slides,p,m+Math.round((lw-tw)/2),ty,tw,th,{stroke:'#c5e9ef',sw:2}); ty += th+7; }
  const bh=Math.floor((ch-36)/3), pages=[{n:1,label:'P1 封面'},{n:page(3,slides.length),label:'P3 结构页'},{n:page(5,slides.length),label:'P5 重点页'}];
  for (let i=0;i<3;i++) { const y=m+i*(bh+18); comps.push({input:svg(rw,10,rect({x:0,y:0,w:rw,h:10,fill:'#5fc6dd'})),left:rx,top:y}); await add(comps,slides,pages[i].n,rx,y+10,rw,bh-10,{label:pages[i].label}); }
  comps.push({input:svg(120,64,`${rect({x:22,y:8,w:84,h:42,r:21,fill:'#000',opacity:.28})}${text({x:64,y:30,value:'1/5',size:28,fill:'#fff',weight:800})}`),left:W-136,top:12});
  await save(comps,out);
}
async function marketing(slides,out,title,subtitle) {
  const comps=[{input:svg(W,H,`${rect({x:0,y:0,w:W,h:H,fill:'#a9282f'})}${text({x:540,y:64,value:title,size:54,fill:'#fff02b',weight:900})}${text({x:540,y:124,value:subtitle,size:36,fill:'#fff',weight:900})}`),left:0,top:0}];
  const pad=24; await add(comps,slides,1,pad,172,W-pad*2,500,{fit:'cover',sw:0});
  const gy=704,cw=(W-pad*3)/2,ch=250, items=[['课程结构',3],['重点知识',5],['情境案例',12],['方法总结',16]];
  for(let i=0;i<4;i++){const x=pad+(i%2)*(cw+pad), y=gy+Math.floor(i/2)*(ch+22); comps.push({input:svg(cw,ch,rect({x:0,y:0,w:cw,h:ch,fill:'#fff',stroke:'#fff',sw:5})),left:Math.round(x),top:Math.round(y)}); await add(comps,slides,page(items[i][1],slides.length),x+5,y+5,cw-10,ch-10,{fit:'cover',sw:0}); comps.push({input:svg(cw,42,`${rect({x:0,y:0,w:cw,h:42,fill:'#000',opacity:.45})}${text({x:cw/2,y:22,value:items[i][0],size:21,fill:'#fff',weight:900})}`),left:Math.round(x),top:Math.round(y+ch-42)});}
  comps.push({input:svg(W,92,`${rect({x:0,y:0,w:W,h:92,fill:'#8b1f26'})}${text({x:540,y:42,value:'适合课堂教学/主题班会，开箱即用',size:28,fill:'#fff',weight:800})}`),left:0,top:1258});
  await save(comps,out,'#a9282f');
}
async function cards(slides,out,title,subtitle) {
  const comps=[{input:svg(W,H,`<defs><linearGradient id="bg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#c9c1eb"/><stop offset="1" stop-color="#b7addd"/></linearGradient></defs>${rect({x:0,y:0,w:W,h:H,fill:'url(#bg)'})}${circle({cx:145,cy:155,r:56,fill:'none',stroke:'#fff',sw:4,opacity:.65})}${circle({cx:865,cy:330,r:82,fill:'none',stroke:'#fff',sw:4,opacity:.65})}${text({x:540,y:76,value:title,size:40,fill:'#111',weight:900})}`),left:0,top:0}];
  const cw=900,ch=340,x=(W-cw)/2, cards=[[1,134,'封面主视觉'],[3,510,'课程结构展示'],[5,886,'重点内容预览']];
  for(const [p,y,label] of cards){ comps.push({input:svg(cw+20,ch+20,`${rect({x:10,y:12,w:cw,h:ch,r:26,fill:'#000',opacity:.18})}${rect({x:0,y:0,w:cw,h:ch,r:26,fill:'#fffaf5',stroke:'#fff',sw:4})}`),left:x-10,top:y-10}); await add(comps,slides,page(p,slides.length),x+20,y+20,cw-40,ch-40,{fit:'contain',bg:'#fffaf5',sw:0}); comps.push({input:svg(cw,46,`${rect({x:0,y:0,w:cw,h:46,fill:'#000',opacity:.42})}${text({x:cw/2,y:24,value:label,size:23,fill:'#fff',weight:900})}`),left:x,top:y+ch-46}); }
  comps.push({input:svg(W,76,text({x:540,y:38,value:subtitle,size:28,fill:'#fff',weight:900})),left:0,top:1260}); await save(comps,out,'#c5bdea');
}
async function product(src,out,ratio='3:4') { const [w,h]=ratio==='1:1'?[800,800]:[750,1000]; await sharp(src).resize(w,h,{fit:'cover',position:'center'}).jpeg({quality:92}).toFile(out); }

async function main(){
  const prod=get('product'); if(prod){ const ratio=get('ratio','3:4'); await product(prod,get('out',prod.replace(/\.[^.]+$/,ratio==='1:1'?'_商品图_800x800.jpg':'_商品图_750x1000.jpg')),ratio); return; }
  const input=get('input'); if(!input) throw new Error('Missing --input'); const title=get('title','课件PPT'), subtitle=get('subtitle','可编辑 + 教案 + 讲稿'), mode=get('modes','collage,marketing,cards').split(','); const s=await slides(input,get('prefix','')); if(!s.length) throw new Error('No slide images found');
  if(mode.includes('collage')) await collage(s,path.join(input,`${title}_缩略图拼图风封面图.png`));
  if(mode.includes('marketing')) await marketing(s,path.join(input,`${title}_营销卖点风封面图.png`),title,subtitle);
  if(mode.includes('cards')) await cards(s,path.join(input,`${title}_竖向卡片风封面图.png`),title.replace(/PPT$/i,''),`${s.length}页完整课件 · 可配套教案/讲稿使用`);
}
main().catch(e=>{ console.error(e); process.exitCode=1; });
