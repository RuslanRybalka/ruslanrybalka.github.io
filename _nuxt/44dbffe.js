(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{205:function(e,t,r){"use strict";var n=r(9),o=r(5),c=r(87),f=r(15),l=r(12),d=r(39),h=r(160),v=r(64),m=r(6),N=r(66),I=r(65).f,_=r(28).f,E=r(14).f,k=r(206).trim,x="Number",A=o.Number,w=A.prototype,y=d(N(w))==x,S=function(e){var t,r,n,o,c,f,l,code,d=v(e,!1);if("string"==typeof d&&d.length>2)if(43===(t=(d=k(d)).charCodeAt(0))||45===t){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(f=(c=d.slice(2)).length,l=0;l<f;l++)if((code=c.charCodeAt(l))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(c(x,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var M,F=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof F&&(y?m((function(){w.valueOf.call(r)})):d(r)!=x)?h(new A(S(t)),r,F):S(t)},T=n?I(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;T.length>C;C++)l(A,M=T[C])&&!l(F,M)&&E(F,M,_(A,M));F.prototype=w,w.constructor=F,f(o,x,F)}},206:function(e,t,r){var n=r(19),o="["+r(207)+"]",c=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),l=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(c,"")),2&e&&(r=r.replace(f,"")),r}};e.exports={start:l(1),end:l(2),trim:l(3)}},207:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},225:function(e,t,r){var content=r(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(86).default)("38fbcb00",content,!0,{sourceMap:!1})},230:function(e,t,r){"use strict";r(225)},231:function(e,t,r){var n=r(85)(!1);n.push([e.i,"label[data-v-49718bb7]{display:flex;justify-content:center;align-items:center;width:40px;height:40px;background-color:#fff;font-size:24px;color:#000;transition:.3s cubic-bezier(.25,.46,.45,.94)}label.is-checked[data-v-49718bb7]{background-color:#009334;color:#fff}input[data-v-49718bb7]{position:absolute;opacity:0;visibility:hidden}",""]),e.exports=n},234:function(e,t,r){"use strict";r.r(t);r(205);var n={name:"ScienceModifier",props:{modifier:{type:Number,default:3}},data:function(){return{checked:!1}},methods:{toggle:function(){this.checked=!this.checked}}},o=(r(230),r(38)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{class:{"is-checked":e.checked}},[r("span",[e._v(e._s("+"+e.modifier))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"radio",name:"modifier"},domProps:{value:e.modifier,checked:e._q(e.value,e.modifier)},on:{change:[function(t){e.value=e.modifier},e.toggle]}})])}),[],!1,null,"49718bb7",null);t.default=component.exports}}]);