import{h,u as g,m as w,p as y,q as C,e as v,i as D,s as q,t as r}from"./entry.ef08e1a7.js";import"./app.config.4734e3a3.js";import{u as S}from"./composables.81b9ca2f.js";import _ from"./ContentRenderer.e76a7133.js";import x from"./ContentQuery.d9917949.js";import"./ContentRendererMarkdown.18bf65ab.js";import"./index.a6ef77ff.js";import"./asyncData.ed6daade.js";import"./query.7ea06dd1.js";import"./utils.58685aca.js";const a=(p,e=y())=>{const c=h(p),u=g();w(()=>h(p),(t=c)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const m=n.title||(t==null?void 0:t.title);m&&(n.title=m),u.public.content.host;const s=(n==null?void 0:n.description)||(t==null?void 0:t.description);s&&n.meta.filter(i=>i.name==="description").length===0&&n.meta.push({name:"description",content:s}),n!=null&&n.image||(t==null||t.image),C(()=>S(n))},{immediate:!0})},J=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(p){const e=D(),{tag:c,excerpt:u,path:f,query:t,head:n}=p,m={...t||{},path:f||(t==null?void 0:t.path)||q(y().path),find:"one"},s=(i,o)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return r(x,m,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:d})=>{var l;return n&&a(i),(l=e.default)==null?void 0:l.call(e,{doc:i,refresh:o,isPartial:d,excerpt:u,...this.$attrs})}:({data:i})=>(n&&a(i),r(_,{value:i,excerpt:u,tag:c,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):s("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{J as default};