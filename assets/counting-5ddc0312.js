import{b as C,d as b,o as V,c as x,a as c,f,u as _,j as S,t as A,p as j,k as I,_ as M}from"./index-27e8f055.js";import{E as B}from"./el-input-number-9b9ae2f6.js";import{u as E}from"./useP5-e34c7c49.js";import"./p5-1003a71f.js";const N=e=>{const i=new Map;function a(n){return n!=null&&typeof n=="object"}function t(n){if(a(n)){let l=Array.isArray(n)?[]:{};if(i.get(n))return i.get(n);i.set(n,l);for(const d in n)l[d]=t(n[d]);return l}else return n}return t(e)},W=(e,i,a)=>{let t=0,n=0,l=[],d,r=[];const u=(a==null?void 0:a.width)||1,g=(a==null?void 0:a.rate)||60;e.setup=()=>{e.createCanvas((i==null?void 0:i.clientWidth)||e.windowWidth,(i==null?void 0:i.clientHeight)||e.windowHeight),e.frameRate(g),r=new Array(Math.round(e.width/u));for(let o=0;o<r.length;o++)r[o]=Math.floor(e.random(e.height));w()};const w=()=>{t=r.length-1,n=r.length,l=N(r);let o=l[0];for(let s=1;s<n;s++){let p=l[s];p>o&&(o=p)}d=new Array(o+1),d.fill(0);for(let s=0;s<n;s++)d[l[s]]+=1;for(let s=1;s<=o;s++)d[s]+=d[s-1]},h=e.random(255),v=()=>{for(let o=0;o<r.length;o++){const s=o/r.length*255,p=255-s;e.stroke(h,p,s),e.strokeWeight(u);const y=e.height-r[o];e.line(o*u,e.height,o*u,y)}};e.keyPressed=()=>{e.key==="s"&&e.saveGif("CountingSort",2,{})},e.draw=()=>{if(e.translate(.5*u,0),e.background(0),v(),t>=0&&n>0){r[d[l[t]]-1]=l[t];{e.stroke(256,256,256);const o=e.height-r[t];e.line(t*u,e.height,t*u,o),a&&(a.count=r[t])}d[l[t]]--}else e.noLoop();t--}},H=()=>{const e=C({rate:60,width:3,count:0}),{container:i,p5_instance:a,update:t}=E(W,e);return{container:i,p5_instance:a,update:t,option:e}},m=e=>(j("data-v-2db0684b"),e=e(),I(),e),L={class:"view"},P={class:"control"},T=m(()=>c("span",null,"rate 迭代速度",-1)),U=m(()=>c("span",null,"width",-1)),D={class:"data-view"},G=b({__name:"counting",setup(e){const{container:i,update:a,option:t}=H();return(n,l)=>{const d=B;return V(),x("div",L,[c("div",P,[T,f(d,{min:1,max:120,step:1,modelValue:_(t).rate,"onUpdate:modelValue":l[0]||(l[0]=r=>_(t).rate=r),onChange:_(a)},null,8,["modelValue","onChange"]),U,f(d,{min:1,max:50,step:1,modelValue:_(t).width,"onUpdate:modelValue":l[1]||(l[1]=r=>_(t).width=r),onChange:_(a)},null,8,["modelValue","onChange"])]),c("div",D,[S(" 计数排序 "),c("p",null,"A[j]="+A(_(t).count),1)]),c("div",{class:"container",ref_key:"container",ref:i},null,512)])}}});const F=M(G,[["__scopeId","data-v-2db0684b"]]);export{F as default};