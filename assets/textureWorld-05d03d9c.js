import{r as u,b as f,n as V,l as _,d as v,o as h,c as z,a as l,f as n,w,j as b,t as y,u as t,s as g,L as U}from"./index-27e8f055.js";import{E as k}from"./el-input-number-9b9ae2f6.js";import{E as C}from"./el-button-d9e664f9.js";import"./world-8aeda606.js";import"./three-b6bfeeee.js";import"./runtime-60cf2155.js";import{t as p}from"./textureWorld-8a528eee.js";import"./p5-1003a71f.js";import"./index-f4a70435.js";import"./three.module-3e64dab6.js";import"./OrbitControls-dfe0b90a.js";import"./animationWorld-88208ed4.js";import"./light-b9170a66.js";const E=()=>{const d=p.prototype.animate,a=u({cpx:0,cpz:20,mpx:0,mpz:0,mrx:3,mrz:3,mry:3}),i=u(),r=u(!1);let e=f({});const c=()=>{e=new p(i.value),e instanceof p&&e.render(i.value)},o=()=>{r.value=!r.value,r.value?p.prototype.animate=function(){this.camera&&(this.camera.position.x=a.value.cpx,this.camera.position.z=a.value.cpz),this.cube&&(this.cube.position.x=a.value.mpx,this.cube.position.z=a.value.mpz,this.cube.rotation.x=a.value.mrx,this.cube.rotation.z=a.value.mrz,this.cube.rotation.y=a.value.mry)}:p.prototype.animate=d};return V(()=>{i.value&&c()}),_(()=>{e instanceof p&&(e.beforeDestroy(),e.stop())}),{container:i,world:e,customer:r,toggleCustomer:o,option:a}},B={class:"view"},D={class:"controller fixed right-0 top-5 flex flex-1 flex-col gap-2 min-w-1/4"},N={class:"grid grid-cols-2"},S=l("span",{class:"text-white"},"camera position x",-1),T=l("span",{class:"text-white"},"camera position z",-1),W=l("span",{class:"text-white"},"mesh position x",-1),j=l("span",{class:"text-white"},"mesh position z",-1),L=l("span",{class:"text-white"},"cube rotation x",-1),R=l("span",{class:"text-white"},"cube rotation y",-1),q=l("span",{class:"text-white"},"cube rotation z",-1),Z=v({__name:"textureWorld",setup(d){const{container:a,customer:i,toggleCustomer:r,option:e}=E();return(c,o)=>{const x=C,m=k;return h(),z("div",B,[l("div",{class:"container",ref_key:"container",ref:a},null,512),l("div",D,[n(x,{onClick:t(r)},{default:w(()=>[b(y(t(i)?"关闭":"打开")+"控制",1)]),_:1},8,["onClick"]),g(l("div",N,[S,n(m,{min:-12,max:12,step:.1,modelValue:t(e).cpx,"onUpdate:modelValue":o[0]||(o[0]=s=>t(e).cpx=s)},null,8,["step","modelValue"]),T,n(m,{min:0,max:50,step:.1,modelValue:t(e).cpz,"onUpdate:modelValue":o[1]||(o[1]=s=>t(e).cpz=s)},null,8,["step","modelValue"]),W,n(m,{min:-15,max:15,step:.1,modelValue:t(e).mpx,"onUpdate:modelValue":o[2]||(o[2]=s=>t(e).mpx=s)},null,8,["step","modelValue"]),j,n(m,{min:-15,max:15,step:.1,modelValue:t(e).mpz,"onUpdate:modelValue":o[3]||(o[3]=s=>t(e).mpz=s)},null,8,["step","modelValue"]),L,n(m,{min:0,max:6.28,step:.01,modelValue:t(e).mrx,"onUpdate:modelValue":o[4]||(o[4]=s=>t(e).mrx=s)},null,8,["max","step","modelValue"]),R,n(m,{min:0,max:6.28,step:.01,modelValue:t(e).mry,"onUpdate:modelValue":o[5]||(o[5]=s=>t(e).mry=s)},null,8,["max","step","modelValue"]),q,n(m,{min:0,max:6.28,step:.01,modelValue:t(e).mrz,"onUpdate:modelValue":o[6]||(o[6]=s=>t(e).mrz=s)},null,8,["max","step","modelValue"])],512),[[U,t(i)]])])])}}});export{Z as default};