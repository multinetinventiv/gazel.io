import{u as C}from"./states.c4a11c4c.js";import{e as b,V as q,o as s,f as l,W as w,h as c,b as h,X as m,Y as g,Z as k,g as f,n as B,p as N,j as V,$ as x,I,N as R,c as S}from"./entry.ef08e1a7.js";import z from"./ContentRenderer.e76a7133.js";import{u as O}from"./composables.81b9ca2f.js";import"./app.config.4734e3a3.js";import{q as A}from"./query.7ea06dd1.js";import"./ContentRendererMarkdown.18bf65ab.js";import"./index.a6ef77ff.js";import"./utils.58685aca.js";const P=["id"],W=b({__name:"Section",props:{data:null,index:{type:Boolean}},setup(p){var n;const e=p,o=(n=e.data._path)==null?void 0:n.split("/").pop();if(q("sectionId",o),e.index){const t=`Gazel - ${e.data.title}`,i=r(a(e.data.description),150);O({meta:[{hid:"og:title",property:"og:title",content:t},{hid:"og:description",property:"og:description",content:i},{name:"description",content:i}]})}function a(t){return t.replaceAll(`
`," ").replaceAll("	"," ").replaceAll("\r"," ").replaceAll("!",".").replaceAll("?",".").replaceAll("...",".").split(".").shift()}function r(t,i){return t.length>=i?`${t.substring(0,i-3)}...`:`${t}.`}return(t,i)=>{const $=z;return s(),l("section",{id:c(o)},[w($,{value:p.data},null,8,["value"])],8,P)}}}),j={class:"nav flex-column"},D=["href"],E={class:"nav flex-column"},F=["href"],G=b({__name:"Sidebar",props:{sections:{default:()=>[]}},setup(p){const e=C();function o(a){var r;return(r=a._path)==null?void 0:r.split("/").pop()}return(a,r)=>(s(),l("div",{class:B(["idocs-navigation bg-light",{active:c(e)}])},[h("ul",j,[(s(!0),l(m,null,g(p.sections,n=>(s(),l("li",{key:n.title,class:"nav-item"},[h("a",{class:"nav-link",href:`#${o(n)==a.$route.params.slug[0]?"":o(n)}`},k(n.title),9,D),h("ul",E,[(s(!0),l(m,null,g(n.body.toc.links,t=>(s(),l(m,null,[n.body.toc.depth<3&&t.id!=="footnote-label"?(s(),l("li",{key:t.id,class:"nav-item"},[h("a",{class:"nav-link",href:`#${o(n)}-${t.id}`},k(t.text),9,F)])):f("",!0)],64))),256))])]))),128))])],2))}}),H={key:0},U={__name:"[...slug]",async setup(p){let e,o;const a=N(),r=a.path!=="/"&&a.path.endsWith("/");let n=null,t=[];const i=V(()=>a.path!=="/");r||(n=([e,o]=x(()=>A(a.path).where({_path:{$eq:a.path}}).findOne()),e=await e,o(),e),t=([e,o]=x(()=>A(a.path).where({_path:{$ne:a.path}}).sort($(n.section)).find()),e=await e,o(),e)),I(async()=>{if(r){const{path:u,query:d,hash:v}=a,_={path:u.replace(/\/+$/,""),query:d,hash:v};await R(_,{replace:!0})}});function $({sortBy:u="position",order:d="asc"}={}){return{[u]:d==="asc"?1:-1,$numeric:u==="position"}}return(u,d)=>{const v=G,y=W;return c(r)?f("",!0):(s(),l("div",H,[c(i)?(s(),S(v,{key:0,sections:[c(n),...c(t)]},null,8,["sections"])):f("",!0),w(y,{data:c(n),index:!0},null,8,["data"]),c(i)?(s(!0),l(m,{key:1},g(c(t),_=>(s(),S(y,{key:_.title,data:_},null,8,["data"]))),128)):f("",!0)]))}}};export{U as default};
