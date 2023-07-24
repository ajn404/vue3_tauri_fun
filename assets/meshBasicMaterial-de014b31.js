import{d as Se,r as ne,b as Fe,n as Le,ag as He,A as ke,l as Te,o as se,c as oe,a as ae,f as re,w as De,F as Re,g as Be}from"./index-27e8f055.js";import{E as Oe,b as Ve}from"./el-radio-group-765ee731.js";import"./three-b6bfeeee.js";import{d as ze}from"./world-8aeda606.js";import{S as he,B as Ie,a as X,b as ce,P,c as _,d as ue,T as Pe,e as Ye,f as Ne,R as T,N as I,W as Ge,g as We,h as le,i as je,A as Ke,j as Ue,F as Xe,k as Je,L as Ze,l as qe,m as Qe,n as et,o as tt,p as it,q as nt,r as st,s as ot,t as at,u as rt,v as lt,w as dt,D as ht,x as ct,y as ut,z as pt,E as gt,G as ft,H as mt,I as vt,J as bt,K as wt,Z as At,O as Mt,Q as Et,U as Ct,V as xt,X as _t,Y as yt,_ as $t,$ as St,a0 as Ft,a1 as Lt}from"./three.module-3e64dab6.js";import{O as Ht}from"./OrbitControls-dfe0b90a.js";import"./p5-1003a71f.js";/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class H{constructor(e,n,a,h,u="div"){this.parent=e,this.object=n,this.property=a,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(h),this.$name=document.createElement("div"),this.$name.classList.add("name"),H.nextNameID=H.nextNameID||0,this.$name.id=`lil-gui-name-${++H.nextNameID}`,this.$widget=document.createElement(u),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(a)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const n=this.parent.add(this.object,this.property,e);return n.name(this._name),this.destroy(),n}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class kt extends H{constructor(e,n,a){super(e,n,a,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function J(c){let e,n;return(e=c.match(/(#|0x)?([a-f0-9]{6})/i))?n=e[2]:(e=c.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=c.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),n?"#"+n:!1}const Tt={isPrimitive:!0,match:c=>typeof c=="string",fromHexString:J,toHexString:J},B={isPrimitive:!0,match:c=>typeof c=="number",fromHexString:c=>parseInt(c.substring(1),16),toHexString:c=>"#"+c.toString(16).padStart(6,0)},Dt={isPrimitive:!1,match:c=>Array.isArray(c),fromHexString(c,e,n=1){const a=B.fromHexString(c);e[0]=(a>>16&255)/255*n,e[1]=(a>>8&255)/255*n,e[2]=(a&255)/255*n},toHexString([c,e,n],a=1){a=255/a;const h=c*a<<16^e*a<<8^n*a<<0;return B.toHexString(h)}},Rt={isPrimitive:!1,match:c=>Object(c)===c,fromHexString(c,e,n=1){const a=B.fromHexString(c);e.r=(a>>16&255)/255*n,e.g=(a>>8&255)/255*n,e.b=(a&255)/255*n},toHexString({r:c,g:e,b:n},a=1){a=255/a;const h=c*a<<16^e*a<<8^n*a<<0;return B.toHexString(h)}},Bt=[Tt,B,Dt,Rt];function Ot(c){return Bt.find(e=>e.match(c))}class Vt extends H{constructor(e,n,a,h){super(e,n,a,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Ot(this.initialValue),this._rgbScale=h,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const u=J(this.$text.value);u&&this._setValueFromHexString(u)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const n=this._format.fromHexString(e);this.setValue(n)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class U extends H{constructor(e,n,a){super(e,n,a,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",h=>{h.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class zt extends H{constructor(e,n,a,h,u,p){super(e,n,a,"number"),this._initInput(),this.min(h),this.max(u);const m=p!==void 0;this.step(m?p:this._getImplicitStep(),m),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,n=!0){return this._step=e,this._stepExplicit=n,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let n=(e-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=n*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let l=parseFloat(this.$input.value);isNaN(l)||(this._stepExplicit&&(l=this._snap(l)),this.setValue(this._clamp(l)))},n=l=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+l),this.$input.value=this.getValue())},a=l=>{l.code==="Enter"&&this.$input.blur(),l.code==="ArrowUp"&&(l.preventDefault(),n(this._step*this._arrowKeyMultiplier(l))),l.code==="ArrowDown"&&(l.preventDefault(),n(this._step*this._arrowKeyMultiplier(l)*-1))},h=l=>{this._inputFocused&&(l.preventDefault(),n(this._step*this._normalizeMouseWheel(l)))};let u=!1,p,m,E,g,f;const x=5,A=l=>{p=l.clientX,m=E=l.clientY,u=!0,g=this.getValue(),f=0,window.addEventListener("mousemove",$),window.addEventListener("mouseup",b)},$=l=>{if(u){const M=l.clientX-p,S=l.clientY-m;Math.abs(S)>x?(l.preventDefault(),this.$input.blur(),u=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>x&&b()}if(!u){const M=l.clientY-E;f-=M*this._step*this._arrowKeyMultiplier(l),g+f>this._max?f=this._max-g:g+f<this._min&&(f=this._min-g),this._snapClampSetValue(g+f)}E=l.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",b)},y=()=>{this._inputFocused=!0},F=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",h,{passive:!1}),this.$input.addEventListener("mousedown",A),this.$input.addEventListener("focus",y),this.$input.addEventListener("blur",F)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(l,M,S,O,C)=>(l-M)/(S-M)*(C-O)+O,n=l=>{const M=this.$slider.getBoundingClientRect();let S=e(l,M.left,M.right,this._min,this._max);this._snapClampSetValue(S)},a=l=>{this._setDraggingStyle(!0),n(l.clientX),window.addEventListener("mousemove",h),window.addEventListener("mouseup",u)},h=l=>{n(l.clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",u)};let p=!1,m,E;const g=l=>{l.preventDefault(),this._setDraggingStyle(!0),n(l.touches[0].clientX),p=!1},f=l=>{l.touches.length>1||(this._hasScrollBar?(m=l.touches[0].clientX,E=l.touches[0].clientY,p=!0):g(l),window.addEventListener("touchmove",x,{passive:!1}),window.addEventListener("touchend",A))},x=l=>{if(p){const M=l.touches[0].clientX-m,S=l.touches[0].clientY-E;Math.abs(M)>Math.abs(S)?g(l):(window.removeEventListener("touchmove",x),window.removeEventListener("touchend",A))}else l.preventDefault(),n(l.touches[0].clientX)},A=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",x),window.removeEventListener("touchend",A)},$=this._callOnFinishChange.bind(this),b=400;let y;const F=l=>{if(Math.abs(l.deltaX)<Math.abs(l.deltaY)&&this._hasScrollBar)return;l.preventDefault();const S=this._normalizeMouseWheel(l)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(y),y=setTimeout($,b)};this.$slider.addEventListener("mousedown",a),this.$slider.addEventListener("touchstart",f,{passive:!1}),this.$slider.addEventListener("wheel",F,{passive:!1})}_setDraggingStyle(e,n="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${n}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:n,deltaY:a}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(n=0,a=-e.wheelDelta/120,a*=this._stepExplicit?1:10),n+-a}_arrowKeyMultiplier(e){let n=this._stepExplicit?1:10;return e.shiftKey?n*=10:e.altKey&&(n/=10),n}_snap(e){const n=Math.round(e/this._step)*this._step;return parseFloat(n.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class It extends H{constructor(e,n,a,h){super(e,n,a,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(h)?h:Object.values(h),this._names=Array.isArray(h)?h:Object.keys(h),this._names.forEach(u=>{const p=document.createElement("option");p.innerHTML=u,this.$select.appendChild(p)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),n=this._values.indexOf(e);return this.$select.selectedIndex=n,this.$display.innerHTML=n===-1?e:this._names[n],this}}class Pt extends H{constructor(e,n,a){super(e,n,a,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",h=>{h.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Yt=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Nt(c){const e=document.createElement("style");e.innerHTML=c;const n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(e,n):document.head.appendChild(e)}let de=!1;class Z{constructor({parent:e,autoPlace:n=e===void 0,container:a,width:h,title:u="Controls",closeFolders:p=!1,injectStyles:m=!0,touchStyles:E=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",g=>{(g.code==="Enter"||g.code==="Space")&&(g.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(u),E&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!de&&m&&(Nt(Yt),de=!0),a?a.appendChild(this.domElement):n&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),h&&this.domElement.style.setProperty("--width",h+"px"),this._closeFolders=p,this.domElement.addEventListener("keydown",g=>g.stopPropagation()),this.domElement.addEventListener("keyup",g=>g.stopPropagation())}add(e,n,a,h,u){if(Object(a)===a)return new It(this,e,n,a);const p=e[n];switch(typeof p){case"number":return new zt(this,e,n,a,h,u);case"boolean":return new kt(this,e,n);case"string":return new Pt(this,e,n);case"function":return new U(this,e,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,e,`
	value:`,p)}addColor(e,n,a=1){return new Vt(this,e,n,a)}addFolder(e){const n=new Z({parent:this,title:e});return this.root._closeFolders&&n.close(),n}load(e,n=!0){return e.controllers&&this.controllers.forEach(a=>{a instanceof U||a._name in e.controllers&&a.load(e.controllers[a._name])}),n&&e.folders&&this.folders.forEach(a=>{a._title in e.folders&&a.load(e.folders[a._title])}),this}save(e=!0){const n={controllers:{},folders:{}};return this.controllers.forEach(a=>{if(!(a instanceof U)){if(a._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${a._name}"`);n.controllers[a._name]=a.save()}}),e&&this.folders.forEach(a=>{if(a._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${a._title}"`);n.folders[a._title]=a.save()}),n}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("transition");const a=u=>{u.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",a))};this.$children.addEventListener("transitionend",a);const h=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=h+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(a=>a.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(n=>{e=e.concat(n.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(n=>{e=e.concat(n.foldersRecursive())}),e}}class Gt extends he{constructor(){super();const e=new Ie;e.deleteAttribute("uv");const n=new X({side:ce}),a=new X,h=new P(16777215,5,28,2);h.position.set(.418,16.199,.3),this.add(h);const u=new _(e,n);u.position.set(-.757,13.219,.717),u.scale.set(31.713,28.305,28.591),this.add(u);const p=new _(e,a);p.position.set(-10.906,2.009,1.846),p.rotation.set(0,-.195,0),p.scale.set(2.328,7.905,4.651),this.add(p);const m=new _(e,a);m.position.set(-5.607,-.754,-.758),m.rotation.set(0,.994,0),m.scale.set(1.97,1.534,3.955),this.add(m);const E=new _(e,a);E.position.set(6.167,.857,7.803),E.rotation.set(0,.561,0),E.scale.set(3.927,6.285,3.687),this.add(E);const g=new _(e,a);g.position.set(-2.017,.018,6.124),g.rotation.set(0,.333,0),g.scale.set(2.002,4.566,2.064),this.add(g);const f=new _(e,a);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);const x=new _(e,a);x.position.set(-2.193,-.369,-5.547),x.rotation.set(0,.516,0),x.scale.set(3.875,3.487,2.986),this.add(x);const A=new _(e,D(50));A.position.set(-16.116,14.37,8.208),A.scale.set(.1,2.428,2.739),this.add(A);const $=new _(e,D(50));$.position.set(-16.109,18.021,-8.207),$.scale.set(.1,2.425,2.751),this.add($);const b=new _(e,D(17));b.position.set(14.904,12.198,-1.832),b.scale.set(.15,4.265,6.331),this.add(b);const y=new _(e,D(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);const F=new _(e,D(20));F.position.set(3.235,11.486,-12.541),F.scale.set(2.5,2,.1),this.add(F);const l=new _(e,D(100));l.position.set(0,20,0),l.scale.set(1,.1,1),this.add(l)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function D(c){const e=new ue;return e.color.setScalar(c),e}const Wt={class:"view"},jt={class:"absolute left-1 w-1/5 top-0"},ti=Se({__name:"meshBasicMaterial",setup(c){const e={combine:{"THREE.MultiplyOperation":at,"THREE.MixOperation":rt,"THREE.AddOperation":lt},side:{"THREE.FrontSide":dt,"THREE.BackSide":ce,"THREE.DoubleSide":ht},blendingMode:{"THREE.NoBlending":ct,"THREE.NormalBlending":ut,"THREE.AdditiveBlending":pt,"THREE.SubtractiveBlending":gt,"THREE.MultiplyBlending":ft,"THREE.CustomBlending":mt},equations:{"THREE.AddEquation":vt,"THREE.SubtractEquation":bt,"THREE.ReverseSubtractEquation":wt},destinationFactors:{"THREE.ZeroFactor":At,"THREE.OneFactor":Mt,"THREE.SrcColorFactor":Et,"THREE.OneMinusSrcColorFactor":Ct,"THREE.SrcAlphaFactor":xt,"THREE.OneMinusSrcAlphaFactor":_t,"THREE.DstAlphaFactor":yt,"THREE.OneMinusDstAlphaFactor":$t},sourceFactors:{"THREE.DstColorFactor":St,"THREE.OneMinusDstColorFactor":Ft,"THREE.SrcAlphaSaturateFactor":Lt}},n=o=>{const r=[];for(const t in o)o.hasOwnProperty(t)&&r.push(t);return r},a=new Pe,h=new Ye,u="/vue3_tauri_fun/imgs/textures/",p=()=>{const o=`${u}cube/SwedishRoyalCastle/`,r=".jpg",t=[o+"px"+r,o+"nx"+r,o+"py"+r,o+"ny"+r,o+"pz"+r,o+"nz"+r],d=h.load(t),s=h.load(t);return s.mapping=Ne,{none:null,reflection:d,refraction:s}},m=function(){const o=a.load(`${u}brick_diffuse.jpg`);return o.wrapS=T,o.wrapT=T,o.repeat.set(9,1),{none:null,bricks:o}},E=function(){const o=a.load(`${u}brick_roughness.jpg`);return o.wrapT=T,o.wrapS=T,o.repeat.set(9,1),{none:null,bricks:o}},g=function(){return{none:null,porcelainWhite:a.load(`${u}matcaps/matcap-porcelain-white.jpg`)}},f=function(){const o=a.load(`${u}alphaMap.jpg`);return o.wrapT=T,o.wrapS=T,o.repeat.set(9,1),{none:null,fibers:o}},x=function(){const o=a.load(`${u}gradientMaps/threeTone.jpg`);o.minFilter=I,o.magFilter=I;const r=a.load(`${u}gradientMaps/fiveTone.jpg`);return r.minFilter=I,r.magFilter=I,{none:null,threeTone:o,fiveTone:r}},A=n(p()),$=A.slice(0,2),b=n(m()),y=n(E()),F=n(g()),l=n(f()),M=n(x());function S(o,r,t){const d=o.addFolder("Scene"),s={background:"#000000","ambient light":t.color.getHex()};d.addColor(s,"ambient light").onChange(C(t.color)),O(d,r)}function O(o,r){const t=o.addFolder("scene.fog"),d=new Xe(4160413,0,60),s={fog:{"THREE.Fog()":!1,"scene.fog.color":d.color.getHex()}};t.add(s.fog,"THREE.Fog()").onChange(function(i){i?r.fog=d:r.fog=null}),t.addColor(s.fog,"scene.fog.color").onChange(C(d.color))}function C(o){return function(r){typeof r=="string"&&(r=r.replace("#","0x")),o.setHex(r)}}function pe(o){const r=o.attributes.position,t=[],d=new le;for(let s=0,i=r.count;s<i;s++)d.setHSL(s/i*Math.random(),.5,.5),t.push(d.r,d.g,d.b);o.setAttribute("color",new Je(t,3))}function Y(o){return function(r){o.combine=parseInt(r),o.needsUpdate=!0}}function v(o,r,t){return function(d){o[r]=t[d],o.needsUpdate=!0}}function L(o,r,t,d){const s=o.addFolder("THREE.Material");s.add(t,"transparent").onChange(w(t,d)),s.add(t,"opacity",0,1).step(.01),s.add(t,"depthTest"),s.add(t,"depthWrite"),s.add(t,"alphaTest",0,1).step(.01).onChange(w(t,d)),s.add(t,"visible"),s.add(t,"side",e.side).onChange(w(t,d))}function w(o,r){return function(){o.side=parseInt(o.side.toString()),o.needsUpdate=!0,r.attributes.position.needsUpdate=!0,r.attributes.normal.needsUpdate=!0,r.attributes.color.needsUpdate=!0}}function ge(o,r,t,d){const s={color:t.color.getHex(),envMaps:A[0],map:b[0],alphaMap:l[0]},i=o.addFolder("THREE.MeshBasicMaterial");i.addColor(s,"color").onChange(C(t.color)),i.add(t,"wireframe"),i.add(t,"vertexColors").onChange(w(t,d)),i.add(t,"fog").onChange(w(t,d)),i.add(s,"envMaps",A).onChange(v(t,"envMap",p)),i.add(s,"map",b).onChange(v(t,"map",m)),i.add(s,"alphaMap",l).onChange(v(t,"alphaMap",f)),i.add(t,"combine",e.combine).onChange(Y(t)),i.add(t,"reflectivity",0,1),i.add(t,"refractionRatio",0,1)}function fe(o,r,t){const d={alphaMap:l[0]},s=o.addFolder("THREE.MeshDepthMaterial");s.add(t,"wireframe"),s.add(d,"alphaMap",l).onChange(v(t,"alphaMap",f))}function me(o,r,t,d){const s=o.addFolder("THREE.MeshNormalMaterial");s.add(t,"flatShading").onChange(w(t,d)),s.add(t,"wireframe")}function ve(o,r,t,d){const s={color:t.color.getHex()},i=o.addFolder("THREE.LineBasicMaterial");i.addColor(s,"color").onChange(C(t.color)),i.add(t,"linewidth",0,10),i.add(t,"linecap",["butt","round","square"]),i.add(t,"linejoin",["round","bevel","miter"]),i.add(t,"vertexColors").onChange(w(t,d)),i.add(t,"fog").onChange(w(t,d))}function be(o,r,t,d){const s={color:t.color.getHex(),emissive:t.emissive.getHex(),envMaps:A[0],map:b[0],alphaMap:l[0]},i=o.addFolder("THREE.MeshLambertMaterial");i.addColor(s,"color").onChange(C(t.color)),i.addColor(s,"emissive").onChange(C(t.emissive)),i.add(t,"wireframe"),i.add(t,"vertexColors").onChange(w(t,d)),i.add(t,"fog").onChange(w(t,d)),i.add(s,"envMaps",A).onChange(v(t,"envMap",p)),i.add(s,"map",b).onChange(v(t,"map",m)),i.add(s,"alphaMap",l).onChange(v(t,"alphaMap",f)),i.add(t,"combine",e.combine).onChange(Y(t)),i.add(t,"reflectivity",0,1),i.add(t,"refractionRatio",0,1)}function we(o,r,t,d){const s={color:t.color.getHex(),matcap:F[1],alphaMap:l[0]},i=o.addFolder("THREE.MeshMatcapMaterial");i.addColor(s,"color").onChange(C(t.color)),i.add(t,"flatShading").onChange(w(t,d)),i.add(s,"matcap",F).onChange(v(t,"matcap",g)),i.add(s,"alphaMap",l).onChange(v(t,"alphaMap",f))}function Ae(o,r,t,d){const s={color:t.color.getHex(),emissive:t.emissive.getHex(),specular:t.specular.getHex(),envMaps:A[0],map:b[0],alphaMap:l[0]},i=o.addFolder("THREE.MeshPhongMaterial");i.addColor(s,"color").onChange(C(t.color)),i.addColor(s,"emissive").onChange(C(t.emissive)),i.addColor(s,"specular").onChange(C(t.specular)),i.add(t,"shininess",0,100),i.add(t,"flatShading").onChange(w(t,d)),i.add(t,"wireframe"),i.add(t,"vertexColors").onChange(w(t,d)),i.add(t,"fog").onChange(w(t,d)),i.add(s,"envMaps",A).onChange(v(t,"envMap",p)),i.add(s,"map",b).onChange(v(t,"map",m)),i.add(s,"alphaMap",l).onChange(v(t,"alphaMap",f)),i.add(t,"combine",e.combine).onChange(Y(t)),i.add(t,"reflectivity",0,1),i.add(t,"refractionRatio",0,1)}function Me(o,r,t){const d={color:t.color.getHex(),map:b[0],gradientMap:M[1],alphaMap:l[0]},s=o.addFolder("THREE.MeshToonMaterial");s.addColor(d,"color").onChange(C(t.color)),s.add(d,"map",b).onChange(v(t,"map",m)),s.add(d,"gradientMap",M).onChange(v(t,"gradientMap",x)),s.add(d,"alphaMap",l).onChange(v(t,"alphaMap",f))}function Ee(o,r,t,d){const s={color:t.color.getHex(),emissive:t.emissive.getHex(),envMaps:$[0],map:b[0],roughnessMap:y[0],alphaMap:l[0]},i=o.addFolder("THREE.MeshStandardMaterial");i.addColor(s,"color").onChange(C(t.color)),i.addColor(s,"emissive").onChange(C(t.emissive)),i.add(t,"roughness",0,1),i.add(t,"metalness",0,1),i.add(t,"flatShading").onChange(w(t,d)),i.add(t,"wireframe"),i.add(t,"vertexColors").onChange(w(t,d)),i.add(t,"fog").onChange(w(t,d)),i.add(s,"envMaps",$).onChange(v(t,"envMap",p)),i.add(s,"map",b).onChange(v(t,"map",m)),i.add(s,"roughnessMap",y).onChange(v(t,"roughnessMap",E)),i.add(s,"alphaMap",l).onChange(v(t,"alphaMap",f))}function Ce(o,r,t,d){const s={color:t.color.getHex(),emissive:t.emissive.getHex(),envMaps:A[0],map:b[0],roughnessMap:y[0],alphaMap:l[0]},i=o.addFolder("THREE.MeshPhysicalMaterial");i.addColor(s,"color").onChange(C(t.color)),i.addColor(s,"emissive").onChange(C(t.emissive)),i.add(t,"roughness",0,1),i.add(t,"metalness",0,1),i.add(t,"reflectivity",0,1),i.add(t,"clearcoat",0,1).step(.01),i.add(t,"clearcoatRoughness",0,1).step(.01),i.add(t,"flatShading").onChange(w(t,d)),i.add(t,"wireframe"),i.add(t,"vertexColors").onChange(w(t,d)),i.add(t,"fog").onChange(w(t,d)),i.add(s,"envMaps",$).onChange(v(t,"envMap",p)),i.add(s,"map",b).onChange(v(t,"map",m)),i.add(s,"roughnessMap",y).onChange(v(t,"roughnessMap",E)),i.add(s,"alphaMap",l).onChange(v(t,"alphaMap",f))}function xe(o,r,t,d,s){let i;switch(d){case"MeshBasicMaterial":return i=new ue({color:302836}),L(o,r,i,t),ge(o,r,i,t),i;case"MeshLambertMaterial":return i=new st({color:302836}),L(o,r,i,t),be(o,r,i,t),i;case"MeshMatcapMaterial":return i=new nt({matcap:g().porcelainWhite}),L(o,r,i,t),we(o,r,i,t),s[0].visible=!1,s[1].visible=!1,s[2].visible=!1,i;case"MeshPhongMaterial":return i=new it({color:302836}),L(o,r,i,t),Ae(o,r,i,t),i;case"MeshToonMaterial":return i=new tt({color:302836,gradientMap:x().threeTone}),L(o,r,i,t),Me(o,r,i),s[0].visible=!1,s[2].visible=!1,i;case"MeshStandardMaterial":return i=new X({color:302836}),L(o,r,i,t),Ee(o,r,i,t),s[0].visible=!1,s[1].visible=!1,s[2].visible=!1,i;case"MeshPhysicalMaterial":return i=new et({color:302836}),L(o,r,i,t),Ce(o,r,i,t),s[0].visible=!1,s[1].visible=!1,s[2].visible=!1,i;case"MeshDepthMaterial":return i=new Qe,L(o,r,i,t),fe(o,r,i),i;case"MeshNormalMaterial":return i=new qe,L(o,r,i,t),me(o,r,i,t),i;case"LineBasicMaterial":return i=new Ze({color:2200782}),L(o,r,i,t),ve(o,r,i,t),i}}function _e(o,r){o instanceof HTMLElement||console.error(`Expect "${r}" to be a HTMLElement`)}const k=ne(null),V=ne("MeshToonMaterial"),ye=["MeshBasicMaterial","MeshLambertMaterial","MeshMatcapMaterial","MeshPhongMaterial","MeshToonMaterial","MeshStandardMaterial","MeshPhysicalMaterial","MeshDepthMaterial","MeshNormalMaterial","LineBasicMaterial"];let q=0;Fe({percent:0,splineSceneUrl:"/vue3_tauri_fun/data/models/room.splinecode"});const N=o=>{const r=new Ge({antialias:!0});r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),_e(k.value,"container"),k.value.innerHTML="",k.value.appendChild(r.domElement);const t=new Z({});t.domElement.classList.add("absolute"),t.domElement.classList.add("right-2"),t.domElement.classList.add("top-0");const d=new We(r);let s=new he;s.background=new le(4473924),s.environment=d.fromScene(new Gt,.04).texture;const i=new je(70,k.value.clientWidth/k.value.clientHeight,10,100);i.position.z=35,new Ht(i,k.value);const Q=new Ke(0);s.add(Q);const G=new P(16777215,1,0);G.position.set(0,200,0),s.add(G);const W=new P(16777215,1,0);W.position.set(100,200,100),s.add(W);const j=new P(16777215,1,0);j.position.set(-100,-200,-100),s.add(j),S(t,s,Q);const K=new Ue(10,3,200,32).toNonIndexed();pe(K);const z=new _(K);z.material=xe(t,z,K,o||V.value,[G,W,j]),s.add(z);let ee=!1;function te(){q=requestAnimationFrame(te),ee!==s.fog&&(z.material.needsUpdate=!0,ee=s.fog),r.render(s,i)}const ie=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};return addEventListener("resize",ie,!1),te(),{beforeDestroy:()=>{removeEventListener("resize",ie,!1),cancelAnimationFrame(q),s.traverse($e=>{ze($e)}),ot.clear(),s.clear(),r.dispose(),r.forceContextLoss(),t.destroy()}}};let R=()=>{};return k.value&&(R=N().beforeDestroy),Le(()=>{R=N().beforeDestroy}),He(()=>{R()}),ke(()=>V.value,o=>{R(),N(o)}),Te(()=>{R()}),(o,r)=>{const t=Ve,d=Oe;return se(),oe("div",Wt,[ae("div",{class:"container",ref_key:"container",ref:k},null,512),ae("div",jt,[re(d,{modelValue:V.value,"onUpdate:modelValue":r[0]||(r[0]=s=>V.value=s),size:"large"},{default:De(()=>[(se(),oe(Re,null,Be(ye,s=>re(t,{key:s,label:s},null,8,["label"])),64))]),_:1},8,["modelValue"])])])}}});export{ti as default};
