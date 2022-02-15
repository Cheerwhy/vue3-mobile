import{i as he,e as j,a as be,b as ve,c as ye,d as we,n as M,m as C,f as _e,u as xe,g as Ie,h as T,j as Se,I as V,w as Ce}from"./index.7694ac42.js";import{c as ke,C as H}from"./index.0e49a8a1.js";import{i as Ee,j as Te,k as v,l as b,m as p,n as q,p as Ve,q as Be,s as Fe,t as U,u as I,d as c,v as Me,x as pe,o as Pe,c as Le,y as P,z as Oe,A as Ae,B as Re}from"./vendor.9c6b151c.js";import{_ as ze}from"./index.ea08a6c7.js";var Ne=typeof window!="undefined";function De(e){const n=Ee(e,null);if(n){const o=p(),{link:l,unlink:r,internalChildren:s}=n;l(o),Te(()=>r(o));const h=v(()=>s.indexOf(o));return{parent:n,index:h}}return{parent:null,index:b(-1)}}var S,B;function We(){if(!S&&(S=b(0),B=b(0),Ne)){const e=()=>{S.value=window.innerWidth,B.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:S,height:B}}var $e=Symbol("van-field");function N(e,n){"scrollTop"in e?e.scrollTop=n:e.scrollTo(e.scrollX,n)}function K(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function Y(e){N(window,e),N(document.body,e)}const je=he();function He(){je&&Y(K())}const qe=e=>e.stopPropagation();function D(e,n){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),n&&qe(e)}We();const Ue=Symbol("van-form");function Ke(e){const n=p();n&&j(n.proxy,e)}function Ye(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function Je(e,n){return!(n.required&&Ye(e)||n.pattern&&!n.pattern.test(String(e)))}function Xe(e,n){return new Promise(o=>{const l=n.validator(e,n);if(be(l)){l.then(o);return}o(l)})}function W(e,n){const{message:o}=n;return ve(o)?o(e,n):o||""}function Ge({target:e}){e.composing=!0}function $({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function Qe(e,n){const o=K();e.style.height="auto";let l=e.scrollHeight;if(ye(n)){const{maxHeight:r,minHeight:s}=n;r!==void 0&&(l=Math.min(l,r)),s!==void 0&&(l=Math.max(l,s))}l&&(e.style.height=`${l}px`,Y(o))}function Ze(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function F(e){return[...e].length}function et(e,n){return[...e].slice(0,n).join("")}let tt=0;function nt(){const e=p(),{name:n="unknown"}=(e==null?void 0:e.type)||{};return`${n}-${++tt}`}const[ot,f]=we("field"),at={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:M,formatter:Function,clearIcon:C("clear"),modelValue:_e(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,clearTrigger:C("focus"),formatTrigger:C("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},it=j({},ke,at,{rows:M,type:C("text"),rules:Array,autosize:[Boolean,Object],labelWidth:M,labelClass:xe,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var rt=q({name:ot,props:it,emits:["blur","focus","clear","keypress","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:n,slots:o}){const l=nt(),r=Ve({focused:!1,validateFailed:!1,validateMessage:""}),s=b(),h=b(),{parent:u}=De(Ue),m=()=>{var t;return String((t=e.modelValue)!=null?t:"")},g=t=>{if(T(e[t]))return e[t];if(u&&T(u.props[t]))return u.props[t]},X=v(()=>{const t=g("readonly");if(e.clearable&&!t){const a=m()!=="",i=e.clearTrigger==="always"||e.clearTrigger==="focus"&&r.focused;return a&&i}return!1}),L=v(()=>h.value&&o.input?h.value():e.modelValue),G=t=>t.reduce((a,i)=>a.then(()=>{if(r.validateFailed)return;let{value:d}=L;if(i.formatter&&(d=i.formatter(d,i)),!Je(d,i)){r.validateFailed=!0,r.validateMessage=W(d,i);return}if(i.validator)return Xe(d,i).then(x=>{x&&typeof x=="string"?(r.validateFailed=!0,r.validateMessage=x):x===!1&&(r.validateFailed=!0,r.validateMessage=W(d,i))})}),Promise.resolve()),y=()=>{r.validateFailed&&(r.validateFailed=!1,r.validateMessage="")},O=(t=e.rules)=>new Promise(a=>{y(),t?G(t).then(()=>{r.validateFailed?a({name:e.name,message:r.validateMessage}):a()}):a()}),k=t=>{if(u&&e.rules){const a=u.props.validateTrigger===t,i=e.rules.filter(d=>d.trigger?d.trigger===t:a);i.length&&O(i)}},Q=t=>{const{maxlength:a}=e;if(T(a)&&F(t)>a){const i=m();return i&&F(i)===+a?i:et(t,+a)}return t},w=(t,a="onChange")=>{if(t=Q(t),e.type==="number"||e.type==="digit"){const i=e.type==="number";t=Se(t,i,i)}e.formatter&&a===e.formatTrigger&&(t=e.formatter(t)),s.value&&s.value.value!==t&&(s.value.value=t),t!==e.modelValue&&n("update:modelValue",t)},Z=t=>{t.target.composing||w(t.target.value)},E=()=>{var t;return(t=s.value)==null?void 0:t.blur()},ee=()=>{var t;return(t=s.value)==null?void 0:t.focus()},_=()=>{const t=s.value;e.type==="textarea"&&e.autosize&&t&&Qe(t,e.autosize)},te=t=>{r.focused=!0,n("focus",t),I(_),g("readonly")&&E()},ne=t=>{g("readonly")||(r.focused=!1,w(m(),"onBlur"),n("blur",t),k("onBlur"),I(_),He())},A=t=>n("click-input",t),oe=t=>n("click-left-icon",t),ae=t=>n("click-right-icon",t),ie=t=>{D(t),n("update:modelValue",""),n("clear",t)},R=v(()=>{if(typeof e.error=="boolean")return e.error;if(u&&u.props.showError&&r.validateFailed)return!0}),re=v(()=>{const t=g("labelWidth");if(t)return{width:Ie(t)}}),le=t=>{t.keyCode===13&&(!(u&&u.props.submitOnEnter)&&e.type!=="textarea"&&D(t),e.type==="search"&&E()),n("keypress",t)},z=()=>e.id||`${l}-input`,ce=()=>{const t=f("control",[g("inputAlign"),{error:R.value,custom:!!o.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(o.input)return c("div",{class:t,onClick:A},[o.input()]);const a={id:z(),ref:s,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,value:e.modelValue,disabled:g("disabled"),readonly:g("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,"aria-labelledby":e.label?`${l}-label`:void 0,onBlur:ne,onFocus:te,onInput:Z,onClick:A,onChange:$,onKeypress:le,onCompositionend:$,onCompositionstart:Ge};return e.type==="textarea"?c("textarea",a,null):c("input",Me(Ze(e.type),a),null)},se=()=>{const t=o["left-icon"];if(e.leftIcon||t)return c("div",{class:f("left-icon"),onClick:oe},[t?t():c(V,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},ue=()=>{const t=o["right-icon"];if(e.rightIcon||t)return c("div",{class:f("right-icon"),onClick:ae},[t?t():c(V,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},de=()=>{if(e.showWordLimit&&e.maxlength){const t=F(m());return c("div",{class:f("word-limit")},[c("span",{class:f("word-num")},[t]),pe("/"),e.maxlength])}},fe=()=>{if(u&&u.props.showErrorMessage===!1)return;const t=e.errorMessage||r.validateMessage;if(t){const a=o["error-message"],i=g("errorMessageAlign");return c("div",{class:f("error-message",i)},[a?a({message:t}):t])}},ge=()=>{const t=g("colon")?":":"";if(o.label)return[o.label(),t];if(e.label)return c("label",{id:`${l}-label`,for:z()},[e.label+t])},me=()=>[c("div",{class:f("body")},[ce(),X.value&&c(V,{name:e.clearIcon,class:f("clear"),onTouchstart:ie},null),ue(),o.button&&c("div",{class:f("button")},[o.button()])]),de(),fe()];return Ke({blur:E,focus:ee,validate:O,formValue:L,resetValidation:y}),Be($e,{customValue:h,resetValidation:y,validateWithTrigger:k}),Fe(()=>e.modelValue,()=>{w(m()),y(),k("onChange"),I(_)}),U(()=>{w(m(),e.formatTrigger),I(_)}),()=>{const t=g("disabled"),a=g("labelAlign"),i=ge(),d=se();return c(H,{size:e.size,icon:e.leftIcon,class:f({error:R.value,disabled:t,[`label-${a}`]:a}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:re.value,valueClass:f("value"),titleClass:[f("label",[a,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:d?()=>d:null,title:i?()=>i:null,value:me,extra:o.extra})}}});const lt=Ce(rt);const J=e=>(Oe("data-v-687cb229"),e=e(),Ae(),e),ct={class:"main"},st=J(()=>P("header",{class:"header"},"Header",-1)),ut={class:"body"},dt=J(()=>P("footer",{class:"footer"},"Footer",-1)),ft=q({setup(e){const n=b(""),o=Re(),l=()=>{o.push("/detail")};return U(()=>{window.addEventListener("resize",()=>{const r=document.body||document.documentElement;console.log(r.clientHeight)})}),(r,s)=>{const h=lt,u=H;return Pe(),Le("section",ct,[st,P("section",ut,[c(h,{id:"sb",modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=m=>n.value=m),label:"\u6587\u672C",placeholder:"\u8BF7\u8F93\u5165\u4E00\u4E9B\u5185\u5BB9"},null,8,["modelValue"]),c(u,{title:"\u8DF3\u8F6C","is-link":"",onClick:l})]),dt])}}});var vt=ze(ft,[["__scopeId","data-v-687cb229"]]);export{vt as default};