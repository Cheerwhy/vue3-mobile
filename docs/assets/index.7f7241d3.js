import{o as r,c as u,r as m,a as I,b as _,w as d,d as c,T as w,K as F,e as B,f as h,g as E,u as v,h as D,F as L,i as p,p as N,j as V,C as g,I as H,k as O,l as y,m as S,n as A,q as P}from"./vendor.a914ed7e.js";const K=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};K();var i=(n,o)=>{const s=n.__vccOpts||n;for(const[a,e]of o)s[a]=e;return s};const T={},j={class:"page-container"};function q(n,o){return r(),u("div",j,[m(n.$slots,"default",{},void 0,!0)])}var M=i(T,[["render",q],["__scopeId","data-v-d0bc9e2e"]]);const R={};function z(n,o){const s=M,a=I("router-view");return r(),_(a,null,{default:d(({Component:e,route:t})=>[c(w,{name:t.meta.transition},{default:d(()=>[(r(),_(F,null,[(r(),_(s,{key:t.path},{default:d(()=>[(r(),_(B(e)))]),_:2},1024))],1024))]),_:2},1032,["name"])]),_:1})}var U=i(R,[["render",z]]);const $=n=>(N("data-v-687cb229"),n=n(),V(),n),W={class:"main"},G=$(()=>p("header",{class:"header"},"Header",-1)),J={class:"body"},Q=$(()=>p("footer",{class:"footer"},"Footer",-1)),X=h({setup(n){const o=E(""),s=v(),a=()=>{s.push("/detail")};return D(()=>{window.addEventListener("resize",()=>{const e=document.body||document.documentElement;console.log(e.clientHeight)})}),(e,t)=>{const l=L,x=g;return r(),u("section",W,[G,p("section",J,[c(l,{id:"sb",modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=C=>o.value=C),label:"\u6587\u672C",placeholder:"\u8BF7\u8F93\u5165\u4E00\u4E9B\u5185\u5BB9"},null,8,["modelValue"]),c(x,{title:"\u8DF3\u8F6C","is-link":"",onClick:a})]),Q])}}});var Y=i(X,[["__scopeId","data-v-687cb229"]]);const Z={class:"page-header"},ee={class:"page-title"},te=h({props:{title:{default:""}},setup(n){const o=v(),s=()=>{o.go(-1)};return(a,e)=>{const t=H;return r(),u("div",Z,[c(t,{name:"arrow-left",class:"back-icon",onClick:s}),p("span",ee,[m(a.$slots,"default",{},void 0,!0)])])}}});var b=i(te,[["__scopeId","data-v-db2fc9dc"]]);const ne={},oe=y("detail-page1");function se(n,o){const s=b,a=g;return r(),u(O,null,[c(s,null,{default:d(()=>[oe]),_:1}),c(a,{title:"\u8BE6\u60C5\u98752","is-link":"",onClick:o[0]||(o[0]=e=>n.$router.push("/detail/detail2"))})],64)}var ae=i(ne,[["render",se]]);const re={},ce=y("detail-page2");function ie(n,o){const s=b;return r(),_(s,null,{default:d(()=>[ce]),_:1})}var le=i(re,[["render",ie]]);const _e=[{path:"/",component:Y,meta:{transition:""}},{path:"/detail",component:ae,meta:{transition:""}},{path:"/detail/detail2",component:le,meta:{transition:""}}],f=S({history:A(),routes:_e});f.beforeEach((n,o)=>{const s=n.path.split("/").filter(e=>!!e).length,a=o.path.split("/").filter(e=>!!e).length;n.meta.transition=s>a?"slide-left":"slide-right"});f.afterEach(()=>{});const k=P(U);k.use(f);k.mount("#app");
