import{_ as i}from"./appeal-f9a92345.js";import{d as u,r as n,Y as d,e as m,l as v,o as f,c as g,f as _,w as x,j as b,_ as w}from"./index-27e8f055.js";import{E as C}from"./el-button-d9e664f9.js";import"./p5-1003a71f.js";import"./index-f4a70435.js";const k=u({__name:"gsap",setup(y){const s=n(null),t=n(),a=n(),c=d();m(()=>{if(c){let o=c.appContext.config.globalProperties.$gsap;a.value=o.context(r=>{const e=r.selector(".box");t.value=o.timeline().to(e[0],{x:200,rotation:1200}).to(e[0],{x:0,rotation:0}).reverse()},s.value)}}),v(()=>{a.value.revert()});const l=()=>{t.value.reversed(!t.value.reversed())};return(o,r)=>{const e=C,p=i;return f(),g("div",{class:"view",ref_key:"view",ref:s},[_(e,{onClick:l},{default:x(()=>[b("toggle")]),_:1}),_(p,{class:"box"})],512)}}});const V=w(k,[["__scopeId","data-v-a79cb0ad"]]);export{V as default};