import{u as y}from"./useP5-e34c7c49.js";import{m as v,r as C}from"./index-73167fa0.js";import{k as B}from"./k-c4390e2d.js";import{d as E,o as b,c,a as P}from"./index-27e8f055.js";import"./p5-1003a71f.js";const R=(o,r)=>{let m=20,i=20;const _=1;let t,n=!0,d;const f=p=>{t.forEach(u=>{u.forEach(a=>{const w=o.random(0,o.width),g=o.random(0,o.width),l=o.random(0,o.height),x=o.random(0,o.height);a.x<w&&a.x>g&&a.y<l&&a.y>x&&(o.fill(C(o)),p?o.rect(a.x,a.y,m,i):o.image(d,a.x,a.y,m,i))})})};o.setup=()=>{o.createCanvas((r==null?void 0:r.clientWidth)||400,(r==null?void 0:r.clientHeight)||400),o.background(0).noStroke(),m=o.width/20,i=o.height/20,o.frameRate(_),t=v(20,20,m,i)},o.preload=()=>{d=o.loadImage(B)},o.mouseClicked=()=>{n=!n},o.mousePressed=()=>{},o.draw=()=>{f(n)}},A=()=>{const{container:o,p5_instance:r}=y(R);return{container:o,p5_instance:r}},D={class:"view"},V=E({__name:"grid",setup(o){const{container:r}=A();return(e,s)=>(b(),c("div",D,[P("div",{class:"container",ref_key:"container",ref:r},null,512)]))}});export{V as default};