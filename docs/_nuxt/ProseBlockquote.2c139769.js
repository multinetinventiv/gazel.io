import{e as y,u as h,o as r,f as p,h as s,b as f,n as d,g as C,r as k,i as v,j as l,c as m,w as g,k as B}from"./entry.ef08e1a7.js";import"./app.config.4734e3a3.js";/* empty css                  */const L={key:0,class:"alert-message col"},$={class:"col"},b=y({__name:"Alert",props:{type:{default:"none"}},setup(i){const o=i,n=h().public.components.alert.types,c=n[o.type].alertClass,t=n[o.type].icon;return(e,u)=>(r(),p("div",{class:d(`alert ${s(c)} row`)},[s(t)?(r(),p("div",L,[f("i",{class:d(`fa-solid ${s(t)}`)},null,2)])):C("",!0),f("div",$,[k(e.$slots,"default")])],2))}}),S={__name:"ProseBlockquote",setup(i){const o=v(),a=l(()=>o.default()),n=l(()=>{const e=t(a.value);return e.startsWith(":")?e.replaceAll(":",""):"none"}),c=l(()=>{let e=a.value;return t(e).startsWith(":")&&(e=e.slice(1)),e});function t(e){return e[0].children.default()[0].children}return(e,u)=>{const _=b;return r(),m(_,{type:s(n)},{default:g(()=>[(r(),m(B(()=>s(c))))]),_:1},8,["type"])}}};export{S as default};