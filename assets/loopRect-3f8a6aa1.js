import{u as t}from"./useP5-e34c7c49.js";import{d as f,o as n,c as m,a as p}from"./index-27e8f055.js";import"./p5-1003a71f.js";const _=(o,r)=>{let i=0,a=0,e=0;o.setup=()=>{o.createCanvas((r==null?void 0:r.clientWidth)||400,(r==null?void 0:r.clientHeight)||400),o.background(0),o.noStroke(),o.frameRate(60)};const d=async()=>{if(a%2===0){i===0&&(a=Math.floor(o.random(255)));for(let l=0;l<o.height;l++)o.fill(a,l/o.height*255,255-a),o.rect(i,l,1,1);i++,i=i%o.width}else{e===0&&(a=Math.floor(o.random(255)));for(let l=0;l<o.width;l++)o.fill(a,l/o.width*255,255-a),o.rect(l,e,1,1);e++,e=e%o.height}};o.mouseClicked=()=>{i=Math.floor(o.random(o.width)),a=Math.floor(o.random(255)),e=Math.floor(o.random(o.height))},o.draw=async()=>{await d()}},u={class:"view"},s=f({__name:"loopRect",setup(o){const{container:r}=t(_);return(i,a)=>(n(),m("div",u,[p("div",{class:"container",ref_key:"container",ref:r},null,512)]))}});export{s as default};