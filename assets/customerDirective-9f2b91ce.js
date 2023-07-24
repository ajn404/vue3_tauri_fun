import{T as u}from"./vue-codemirror.esm-fa5df2c6.js";import{d as n,_ as i,m as d,q as c,o as a,c as l,s as m,v as p,a as v,f}from"./index-27e8f055.js";import"./p5-1003a71f.js";const _=n({name:"customerDirective",components:{Codemirror:u},data(){return{input:"",code:`           //自定义指令
                 directives: {
        focus: {
          mounted: (el) => {
            el.focus();
          },
        },
      },
      `}},directives:{focus:{mounted:e=>{e.focus()}}}});const C={class:"view"};function V(e,o,D,F,$,y){const s=d("Codemirror"),r=c("focus");return a(),l("div",C,[m(v("input",{type:"text",placeholder:"自动聚焦，你值得拥有","onUpdate:modelValue":o[0]||(o[0]=t=>e.input=t)},null,512),[[r],[p,e.input]]),f(s,{disabled:!0,modelValue:e.code,"onUpdate:modelValue":o[1]||(o[1]=t=>e.code=t)},null,8,["modelValue"])])}const k=i(_,[["render",V]]);export{k as default};
