import{W as s,g as i,f as c}from"./world-8aeda606.js";import"./three-b6bfeeee.js";import"./runtime-60cf2155.js";import{c as l}from"./light-b9170a66.js";import{a5 as d,ag as m}from"./three.module-3e64dab6.js";import{r as u,b as p,n as f,l as h,d as _,o as b,c as g,a as x}from"./index-27e8f055.js";import"./OrbitControls-dfe0b90a.js";import"./p5-1003a71f.js";class a extends s{constructor(e){super(e)}appendRender(e){this.renderer=i(e.clientWidth,e.clientHeight),e.append(this.renderer.domElement)}addProject(){var n;const e=l();this.cube=c({material:"MeshStandardMaterial",color:"blue",cubeRotate:new d(1,1,1)});let r=new m;const o=[1,2,0,0,0,.866,.5,0,0,-.5,.866,0,0,0,0,1];r=r.fromArray(o),this.cube.setRotationFromMatrix(r),this.cube.updateMatrix(),console.log(this.cube.matrixWorld),(n=this.scene)==null||n.add(e,this.cube)}}const v=()=>{const t=u();let e=p({});const r=()=>{e instanceof a&&e.render(t.value)};return f(()=>{t.value&&(e=new a(t.value),r())}),h(()=>{e instanceof a&&e.beforeDestroy()}),{container:t,world:e}},W={class:"view"},C=_({__name:"transitionWorld",setup(t){let{container:e}=v();return(r,o)=>(b(),g("div",W,[x("div",{class:"container",ref_key:"container",ref:e},null,512)]))}});export{C as default};