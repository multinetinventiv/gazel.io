(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{287:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},288:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(289)),o=r(n(290)),c=r(n(291)),f="twhZNwxI1aFG3r4";function h(e,...t){let n="";for(let i=0;i<e.length;i++)if(n+=e[i],i<t.length){let e=t[i],r=!1;if(c.default(e).value&&(e=c.default(e).value,r=!0),e&&e[f]||r){let t=n.split("\n"),l=t[t.length-1].search(/\S/),o=l>0?" ".repeat(l):"";(r?JSON.stringify(e,null,2):e[f]).split("\n").forEach(((e,t)=>{n+=t>0?"\n"+o+e:e}))}else if("string"==typeof e&&e.includes("\n")){let t=n.match(/(?:^|\n)( *)$/);if("string"==typeof e){let r=t?t[1]:"";n+=e.split("\n").map(((e,i)=>(e=f+e,0===i?e:`${r}${e}`))).join("\n")}else n+=e}else n+=e}return n=l.default(n),n.split(f).join("")}h.pretty=data=>o.default(data)?{[f]:JSON.stringify(data,null,2)}:data,t.default=h},289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t="string"==typeof e?[e]:e.raw,n="",i=0;i<t.length;i++)n+=t[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(n+=arguments.length<=i+1?void 0:arguments[i+1]);var r=n.split("\n"),l=null;r.forEach((function(e){var t=e.match(/^(\s+)\S+/);if(t){var n=t[1].length;l=l?Math.min(l,n):n}})),null!==l&&(o=l,n=r.map((function(e){return" "===e[0]?e.slice(o):e})).join("\n"));var o;n.startsWith("\n")&&(n=n.substr(1));return n.replace(/^((.|\n)*)\n[ \t]*?$/,"$1")},e.exports=t.default},290:function(e,t){e.exports=e=>null!=e&&"object"==typeof e&&e.constructor!==RegExp},291:function(e,t,n){"use strict";e.exports=function e(data){if(!(this instanceof e))return new e(data);this.err=null,this.value=null;try{this.value=JSON.parse(data)}catch(e){this.err=e}}},327:function(e,t,n){"use strict";n.r(t);var r,l=n(287),o=n(288),c=n.n(o);t.default={diagram:c()(r||(r=Object(l.a)(["\n  %%{init: {'theme':'base'}}%%\n  flowchart TD\n    subgraph LP[Layer Perspective]\n        direction LR\n        subgraph AL[A Layer]\n            direction LR\n            AL_XF([X Feature Configuration])\n        end\n        subgraph BL[B Layer]\n            direction LR\n            BL_XF([X Feature Configuration])\n            BL_YF([Y Feature Configuration])\n        end\n    end\n    AL -. depends on .-> BL\n"])))}}}]);