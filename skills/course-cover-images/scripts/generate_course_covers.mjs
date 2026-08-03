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
  const names = await fs.readdir(input);
  return names
    .filter(n => /\.(png|jpe?g)$/i.test(n))
    .filter(n => !prefix || n.startsWith(prefix))
    .filter(n => /(\d+)\.(png|jpe?g)$/i.test(n))
    .filter(n => !/(封面图|商品封面|商品图|分页图|上下两页|contact|collage)/i.test(n))
    .sort((a,b) => num(a)-num(b))
    .map(n => path.join(input,n));
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
  const comps = [{input:svg(W,H,`<defs><linearGradient id="bg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f7fbf8"/><stop offset=".55" stop-color="#edf9f8"/><stop offset="1" stop-color="#fff1d8"/></linearGradient></defs>${rect({x:0,y:0,w:W,h:H,fill:'url(#bg)'})}`),left:0,top:0}];
  const m=18,g=16,lw=286,rx=m+lw+g,rw=W-rx-m,ch=H-m*2;
  comps.push({input:svg(lw,ch,rect({x:0,y:0,w:lw,h:ch,r:10,fill:'#fffefa',stroke:'#fff',sw:3,opacity:.98})),left:m,top:m});
  const tw=248,th=Math.round(tw/R); let ty=m+8;
  for (const p of [1,2,3,4,5,6,8,12,16].map(x=>page(x,slides.length))) { await add(comps,slides,p,m+Math.round((lw-tw)/2),ty,tw,th,{stroke:'#cfe6df',sw:2}); ty += th+7; }
  const bh=Math.floor((ch-36)/3), pages=[{n:1,label:'P1 封面'},{n:page(3,slides.length),label:'P3 重点页'},{n:page(5,slides.length),label:'P5 活动页'}];
  for (let i=0;i<3;i++) { const y=m+i*(bh+18); comps.push({input:svg(rw,10,rect({x:0,y:0,w:rw,h:10,fill:'#75c7ce'})),left:rx,top:y}); await add(comps,slides,pages[i].n,rx,y+10,rw,bh-10,{label:pages[i].label,stroke:'#75c7ce'}); }
  comps.push({input:svg(120,64,`${rect({x:22,y:8,w:84,h:42,r:21,fill:'#000',opacity:.24})}${text({x:64,y:30,value:'1/5',size:28,fill:'#fff',weight:800})}`),left:W-136,top:12});
  await save(comps,out);
}
async function marketing(slides,out,title,subtitle) {
  const comps=[{input:svg(W,H,`<defs><linearGradient id="m" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#156f9b"/><stop offset=".55" stop-color="#39a8b2"/><stop offset="1" stop-color="#f3b448"/></linearGradient></defs>${rect({x:0,y:0,w:W,h:H,fill:'url(#m)'})}${text({x:540,y:64,value:title,size:50,fill:'#fff8b5',weight:900})}${text({x:540,y:126,value:subtitle,size:32,fill:'#fff',weight:900})}`),left:0,top:0}];
  const pad=24; await add(comps,slides,1,pad,170,W-pad*2,500,{fit:'cover',sw:0});
  const gy=704,cw=(W-pad*3)/2,ch=250, items=[['重点认知',3],['课堂活动',5],['方法练习',8],['总结提升',16]];
  for(let i=0;i<4;i++){const x=pad+(i%2)*(cw+pad), y=gy+Math.floor(i/2)*(ch+22); comps.push({input:svg(cw,ch,rect({x:0,y:0,w:cw,h:ch,fill:'#fff',stroke:'#fff',sw:5})),left:Math.round(x),top:Math.round(y)}); await add(comps,slides,page(items[i][1],slides.length),x+5,y+5,cw-10,ch-10,{fit:'cover',sw:0}); comps.push({input:svg(cw,42,`${rect({x:0,y:0,w:cw,h:42,fill:'#0a3340',opacity:.56})}${text({x:cw/2,y:22,value:items[i][0],size:21,fill:'#fff',weight:900})}`),left:Math.round(x),top:Math.round(y+ch-42)});}
  comps.push({input:svg(W,92,`${rect({x:0,y:0,w:W,h:92,fill:'#0b5e73',opacity:.96})}${text({x:540,y:42,value:'开箱即用，适合课堂教学/主题班会',size:28,fill:'#fff',weight:850})}`),left:0,top:1258});
  await save(comps,out,'#156f9b');
}
async function cards(slides,out,title,subtitle) {
  const comps=[{input:svg(W,H,`<defs><linearGradient id="bg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#dff6f3"/><stop offset="1" stop-color="#fff0d0"/></linearGradient></defs>${rect({x:0,y:0,w:W,h:H,fill:'url(#bg)'})}${circle({cx:150,cy:148,r:64,fill:'none',stroke:'#fff',sw:5,opacity:.55})}${circle({cx:900,cy:315,r:90,fill:'none',stroke:'#fff',sw:5,opacity:.45})}${text({x:540,y:76,value:title,size:42,fill:'#0c5875',weight:900})}`),left:0,top:0}];
  const cw=900,ch=340,x=(W-cw)/2, cards=[[1,134,'封面主视觉'],[3,510,'重点内容展示'],[5,886,'课堂活动预览']];
  for(const [p,y,label] of cards){ comps.push({input:svg(cw+20,ch+20,`${rect({x:10,y:12,w:cw,h:ch,r:26,fill:'#000',opacity:.15})}${rect({x:0,y:0,w:cw,h:ch,r:26,fill:'#fffefa',stroke:'#fff',sw:4})}`),left:x-10,top:y-10}); await add(comps,slides,page(p,slides.length),x+20,y+20,cw-40,ch-40,{fit:'contain',bg:'#fffefa',sw:0}); comps.push({input:svg(cw,46,`${rect({x:0,y:0,w:cw,h:46,fill:'#0a3340',opacity:.52})}${text({x:cw/2,y:24,value:label,size:23,fill:'#fff',weight:900})}`),left:x,top:y+ch-46}); }
  comps.push({input:svg(W,76,text({x:540,y:38,value:subtitle,size:27,fill:'#0a5870',weight:900})),left:0,top:1260}); await save(comps,out,'#dff6f3');
}

async function smartTrim(file) {
  const base = sharp(file).rotate();
  const meta = await base.metadata();
  for (const threshold of [54,42,30]) {
    try {
      const trimmed = base.clone().trim({background:'#ffffff',threshold});
      const m = await trimmed.metadata();
      if (m.width && m.height && m.width*m.height > meta.width*meta.height*0.20 && m.width > meta.width*0.34 && m.height > meta.height*0.34) {
        return trimmed.extend({top:8,bottom:8,left:8,right:8,background:'#ffffff'}).png().toBuffer();
      }
    } catch {}
  }
  return base.png().toBuffer();
}
async function strongCard(file, cardW, cardH, innerW, innerH) {
  const bgOverlay = svg(cardW, cardH, rect({x:0,y:0,w:cardW,h:cardH,fill:'#12363d',opacity:.28}));
  const bg = await sharp(file).resize(cardW, cardH, {fit:'cover', position:'center'}).blur(18).modulate({brightness:0.92,saturation:1.15}).composite([{input:bgOverlay,left:0,top:0}]).png().toBuffer();
  const fgSrc = await smartTrim(file);
  const fg = await sharp(fgSrc).resize(innerW, innerH, {fit:'contain', position:'center', background:{r:255,g:255,b:255,alpha:0}}).png().toBuffer();
  return sharp({create:{width:cardW,height:cardH,channels:4,background:{r:0,g:0,b:0,alpha:0}}})
    .composite([
      {input:bg,left:0,top:0},
      {input:svg(cardW,cardH,`${rect({x:0,y:0,w:cardW,h:cardH,r:26,fill:'none',stroke:'#ffffff',sw:5,opacity:.95})}${rect({x:10,y:10,w:cardW-20,h:cardH-20,r:20,fill:'none',stroke:'#52c6c3',sw:2,opacity:.75})}`),left:0,top:0},
      {input:fg,left:Math.round((cardW-innerW)/2),top:Math.round((cardH-innerH)/2)}
    ]).png().toBuffer();
}
async function cardsBatchStrong(slides, input, title) {
  const outDir = path.join(input, `${title}_竖向卡片分页图_强展示版`);
  await fs.mkdir(outDir,{recursive:true});
  for (let i=0;i<slides.length;i+=3) {
    const start=i+1,end=Math.min(i+3,slides.length),count=end-start+1;
    const comps=[{input:svg(W,H,`<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0d7e91"/><stop offset=".5" stop-color="#35b9b1"/><stop offset="1" stop-color="#f5c55b"/></linearGradient></defs>${rect({x:0,y:0,w:W,h:H,fill:'url(#bg)'})}${circle({cx:110,cy:105,r:86,fill:'#ffffff',opacity:.18})}${circle({cx:980,cy:1232,r:156,fill:'#fff4b9',opacity:.25})}${circle({cx:920,cy:160,r:118,fill:'#94f0e1',opacity:.18})}`),left:0,top:0}];
    let cardW, cardH, innerW, innerH, ys;
    if(count===3){ cardW=1032; cardH=400; innerW=990; innerH=360; ys=[38,475,912]; }
    else if(count===2){ cardW=1032; cardH=470; innerW=990; innerH=430; ys=[154,724]; }
    else { cardW=1032; cardH=560; innerW=990; innerH=520; ys=[395]; }
    const x=Math.round((W-cardW)/2);
    for(let j=start;j<=end;j++){
      const y=ys[j-start];
      comps.push({input:svg(cardW+24,cardH+24,rect({x:12,y:14,w:cardW,h:cardH,r:28,fill:'#07323a',opacity:.28})),left:x-12,top:y-12});
      comps.push({input:await strongCard(slides[j-1],cardW,cardH,innerW,innerH),left:x,top:y});
    }
    await save(comps, path.join(outDir, `${title}_竖向卡片图_强展示_${String(i/3+1).padStart(2,'0')}_P${start}-P${end}.png`), '#27aaa7');
  }
}
async function stackedBatch(slides,input,title){
  const outDir=path.join(input,`${title}_上下两页图`); await fs.mkdir(outDir,{recursive:true});
  for(let i=0;i<slides.length;i+=2){
    const start=i+1,end=Math.min(i+2,slides.length);
    const comps=[{input:svg(W,H,`<defs><linearGradient id="bg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f6fbf8"/><stop offset="1" stop-color="#fff0d5"/></linearGradient></defs>${rect({x:0,y:0,w:W,h:H,fill:'url(#bg)'})}`),left:0,top:0}];
    const sw=1010,sh=Math.round(sw/R),x=(W-sw)/2,ys=end-start+1===1?[(H-sh)/2]:[82,696];
    for(let j=start;j<=end;j++){const y=ys[j-start]; comps.push({input:svg(sw+18,sh+18,`${rect({x:9,y:11,w:sw,h:sh,r:12,fill:'#000',opacity:.12})}${rect({x:0,y:0,w:sw,h:sh,r:12,fill:'#fff',stroke:'#fff',sw:4})}`),left:x-9,top:y-9}); comps.push({input:await img(slides,j,sw,sh,'contain','#fff'),left:Math.round(x),top:Math.round(y)}); comps.push({input:svg(sw,sh,rect({x:0,y:0,w:sw,h:sh,fill:'none',stroke:'#cfe1dd',sw:2})),left:Math.round(x),top:Math.round(y)});}
    await save(comps,path.join(outDir,`${title}_上下图封面图_${String(i/2+1).padStart(2,'0')}_P${start}-P${end}.png`),'#f6fbf8');
  }
}
async function product(src,out,size='750x1000') {
  const [w,h] = /1:1|800x800/.test(size) ? [800,800] : [750,1000];
  await sharp(src).resize(w,h,{fit:'cover',position:'center'}).jpeg({quality:92,mozjpeg:true}).toFile(out);
}

async function main(){
  const prod=get('product');
  if(prod){ const size=get('size',get('ratio','750x1000')); const title=get('title','课件'); const out=get('out', path.join(path.dirname(prod), `${title}_小红书商品封面_${/1:1|800x800/.test(size)?'800x800':'750x1000'}.jpg`)); await product(prod,out,size); return; }
  const input=get('input'); if(!input) throw new Error('Missing --input');
  const title=get('title','课件PPT'), subtitle=get('subtitle','可编辑 + 教案 + 讲稿'), mode=get('modes','collage,marketing,cards,cards-batch-strong,stacked-batch').split(',');
  const s=await slides(input,get('prefix','')); if(!s.length) throw new Error('No slide images found');
  if(mode.includes('collage')) await collage(s,path.join(input,`${title}_缩略图拼图风封面图.png`));
  if(mode.includes('marketing')) await marketing(s,path.join(input,`${title}_营销卖点风封面图.png`),title,subtitle);
  if(mode.includes('cards')) await cards(s,path.join(input,`${title}_竖向卡片风封面图.png`),title,`${s.length}页完整课件 · 可配套教案/讲稿使用`);
  if(mode.includes('cards-batch-strong') || mode.includes('cards-batch')) await cardsBatchStrong(s,input,title);
  if(mode.includes('stacked-batch')) await stackedBatch(s,input,title);
}
main().catch(e=>{ console.error(e); process.exitCode=1; });
