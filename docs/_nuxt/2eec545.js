(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{292:function(t,r,e){(function(t){function e(t,r){for(var e=0,i=t.length-1;i>=0;i--){var n=t[i];"."===n?t.splice(i,1):".."===n?(t.splice(i,1),e++):e&&(t.splice(i,1),e--)}if(r)for(;e--;e)t.unshift("..");return t}function filter(t,r){if(t.filter)return t.filter(r);for(var e=[],i=0;i<t.length;i++)r(t[i],i,t)&&e.push(t[i]);return e}r.resolve=function(){for(var r="",n=!1,i=arguments.length-1;i>=-1&&!n;i--){var path=i>=0?arguments[i]:t.cwd();if("string"!=typeof path)throw new TypeError("Arguments to path.resolve must be strings");path&&(r=path+"/"+r,n="/"===path.charAt(0))}return(n?"/":"")+(r=e(filter(r.split("/"),(function(p){return!!p})),!n).join("/"))||"."},r.normalize=function(path){var t=r.isAbsolute(path),o="/"===n(path,-1);return(path=e(filter(path.split("/"),(function(p){return!!p})),!t).join("/"))||t||(path="."),path&&o&&(path+="/"),(t?"/":"")+path},r.isAbsolute=function(path){return"/"===path.charAt(0)},r.join=function(){var t=Array.prototype.slice.call(arguments,0);return r.normalize(filter(t,(function(p,t){if("string"!=typeof p)throw new TypeError("Arguments to path.join must be strings");return p})).join("/"))},r.relative=function(t,e){function n(t){for(var r=0;r<t.length&&""===t[r];r++);for(var e=t.length-1;e>=0&&""===t[e];e--);return r>e?[]:t.slice(r,e-r+1)}t=r.resolve(t).substr(1),e=r.resolve(e).substr(1);for(var o=n(t.split("/")),c=n(e.split("/")),l=Math.min(o.length,c.length),f=l,i=0;i<l;i++)if(o[i]!==c[i]){f=i;break}var m=[];for(i=f;i<o.length;i++)m.push("..");return(m=m.concat(c.slice(f))).join("/")},r.sep="/",r.delimiter=":",r.dirname=function(path){if("string"!=typeof path&&(path+=""),0===path.length)return".";for(var code=path.charCodeAt(0),t=47===code,r=-1,e=!0,i=path.length-1;i>=1;--i)if(47===(code=path.charCodeAt(i))){if(!e){r=i;break}}else e=!1;return-1===r?t?"/":".":t&&1===r?"/":path.slice(0,r)},r.basename=function(path,t){var r=function(path){"string"!=typeof path&&(path+="");var i,t=0,r=-1,e=!0;for(i=path.length-1;i>=0;--i)if(47===path.charCodeAt(i)){if(!e){t=i+1;break}}else-1===r&&(e=!1,r=i+1);return-1===r?"":path.slice(t,r)}(path);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},r.extname=function(path){"string"!=typeof path&&(path+="");for(var t=-1,r=0,e=-1,n=!0,o=0,i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(47!==code)-1===e&&(n=!1,e=i+1),46===code?-1===t?t=i:1!==o&&(o=1):-1!==t&&(o=-1);else if(!n){r=i+1;break}}return-1===t||-1===e||0===o||1===o&&t===e-1&&t===r+1?"":path.slice(t,e)};var n="b"==="ab".substr(-1)?function(t,r,e){return t.substr(r,e)}:function(t,r,e){return r<0&&(r=t.length+r),t.substr(r,e)}}).call(this,e(203))},308:function(t,r,e){var map={"./content/-diagrams/architecture/api-application.mermaid.js":[320,12],"./content/-diagrams/architecture/application-perspective.mermaid.js":[321,13],"./content/-diagrams/architecture/command-line-application.mermaid.js":[322,14],"./content/-diagrams/architecture/feature-perspective.mermaid.js":[323,15],"./content/-diagrams/architecture/gateway-application.mermaid.js":[324,16],"./content/-diagrams/architecture/layer-perspective.mermaid.js":[325,17],"./content/-diagrams/architecture/middleware-application.mermaid.js":[326,18],"./content/-diagrams/architecture/service-application.mermaid.js":[327,19],"./content/-diagrams/features/authentication-sequence-diagram.mermaid.js":[328,20]};function n(t){if(!e.o(map,t))return Promise.resolve().then((function(){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=map[t],n=r[0];return e.e(r[1]).then((function(){return e(n)}))}n.keys=function(){return Object.keys(map)},n.id=308,t.exports=n},333:function(t,r,e){"use strict";e.r(r);var n=e(9),path=(e(48),e(29),e(144),e(114),e(15),e(30),e(31),e(292)),o={props:["src"],data:function(){return{diagram:this.src}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return"/"!=(n=t.src)[0]&&(n="/".concat(n)),o=n.split("/").length>1?n:path.join($nuxt.$route.path,n),r.next=6,e(308)("./content".concat(o,".js"));case 6:c=r.sent,t.diagram=c.default.diagram;case 8:case"end":return r.stop()}}),r)})))()}},c=e(47),component=Object(c.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"diagram px-6 py-10"},[e("vue-mermaid-string",{attrs:{value:t.diagram}})],1)}),[],!1,null,null,null);r.default=component.exports}}]);