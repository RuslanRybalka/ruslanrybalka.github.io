(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4,5],{204:function(t,e,n){var content=n(213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(85).default)("20eafb7a",content,!0,{sourceMap:!1})},205:function(t,e,n){var content=n(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(85).default)("dd55a97a",content,!0,{sourceMap:!1})},206:function(t,e,n){"use strict";var o=n(10),r=n(5),c=n(86),l=n(14),d=n(12),f=n(39),v=n(159),_=n(62),m=n(6),h=n(64),y=n(63).f,x=n(29).f,O=n(13).f,C=n(207).trim,E="Number",S=r.Number,N=S.prototype,w=f(h(N))==E,A=function(t){var e,n,o,r,c,l,d,code,f=_(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=C(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>r)return NaN;return parseInt(c,o)}return+f};if(c(E,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var L,T=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof T&&(w?m((function(){N.valueOf.call(n)})):f(n)!=E)?v(new S(A(e)),n,T):A(e)},k=o?y(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;k.length>j;j++)d(S,L=k[j])&&!d(T,L)&&O(T,L,x(S,L));T.prototype=N,N.constructor=T,l(r,E,T)}},207:function(t,e,n){var o=n(18),r="["+n(208)+"]",c=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},208:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},209:function(t,e,n){"use strict";n.r(e);n(206);var o={name:"ScienceCalculatorType",props:{typeClass:{type:String,default:""},type:{type:String,default:""},total:{type:Number,default:0}}},r=(n(212),n(38)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("button",{staticClass:"button",on:{click:function(e){return t.$emit("subtract")}}},[t._v("-")]),t._v(" "),n("div",{staticClass:"type",class:t.typeClass}),t._v(" "),n("button",{staticClass:"button",on:{click:function(e){return t.$emit("add")}}},[t._v("+")]),t._v(" "),n("div",{staticClass:"total"},[t._v(t._s(t.total))])])}),[],!1,null,"0da2188d",null);e.default=component.exports},210:function(t,e,n){"use strict";n.r(e);var o={},r=(n(214),n(38)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"button",attrs:{type:"submit"},on:{click:function(e){return t.$emit("clickEvent")}}},[t._v("Add")])}),[],!1,null,"d72be898",null);e.default=component.exports},211:function(t,e,n){var content=n(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(85).default)("290fc854",content,!0,{sourceMap:!1})},212:function(t,e,n){"use strict";n(204)},213:function(t,e,n){var o=n(84)(!1);o.push([t.i,'.row[data-v-0da2188d]{display:grid;width:100%;grid-template-columns:40px 1fr 40px 40px;grid-column-gap:16px;-moz-column-gap:16px;column-gap:16px}.button[data-v-0da2188d]{border:none;width:40px;height:40px;display:flex;justify-content:center;align-items:center;font-size:24px;line-height:100%;color:#fff;border-radius:50%;padding:0;margin:0}.button[data-v-0da2188d],.type[data-v-0da2188d]{background-color:#009334}.type[data-v-0da2188d]{border-radius:4px;position:relative}.type[data-v-0da2188d]:after{content:"";display:block;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:24px;height:24px;background-color:#f9f871}.type_square[data-v-0da2188d]:after{width:20px;border-radius:4px}.type_circle[data-v-0da2188d]:after{border-radius:50%}.type_triangle[data-v-0da2188d]:after{-webkit-clip-path:polygon(50% 0,100% 100%,95% 100%,50% 5%,5% 100%,0 100%);clip-path:polygon(50% 0,100% 100%,95% 100%,50% 5%,5% 100%,0 100%)}.total[data-v-0da2188d]{font-size:24px;line-height:40px;height:40px;display:flex;justify-content:center;align-items:center}',""]),t.exports=o},214:function(t,e,n){"use strict";n(205)},215:function(t,e,n){var o=n(84)(!1);o.push([t.i,".button[data-v-d72be898]{display:block;border:none;outline:none;font-size:14px;background-color:#0085ff;border-radius:4px;padding:.5em 2em;color:#fff;display:flex;box-shadow:0 5px 10px hsla(0,0%,50.2%,.3);transition:opacity .2s cubic-bezier(.25,.46,.45,.94)}",""]),t.exports=o},216:function(t,e,n){"use strict";n.r(e);n(37),n(23),n(36),n(49),n(28),n(50);var o=n(2),r=n(51),c=n(209),l=n(210),d=n(22),f=n(9);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"ScienceCalculator",components:{ScienceCalculatorType:c.default,ButtonBlue:l.default},computed:_(_({},Object(r.d)("science",{squareCount:function(t){return t.square.count},circleCount:function(t){return t.circle.count},triangleCount:function(t){return t.triangle.count}})),{},{getResult:function(){return this.GET_SCIENCE_RESULT()}}),methods:_(_(_({addScienceResult:function(){this.SET_SELECTED_POINTS_VALUE(this.getResult),this.CLOSE_MODALS(),this.RESET_SCIENCE_CALCULATOR()}},Object(r.c)("science",[d.ADD_CIRCLE,d.ADD_SQUARE,d.ADD_TRIANGLE,d.SUBTRACT_CIRCLE,d.SUBTRACT_SQUARE,d.SUBTRACT_TRIANGLE,d.RESET_SCIENCE_CALCULATOR])),Object(r.c)([f.CLOSE_MODALS,f.SET_SELECTED_POINTS_VALUE])),Object(r.b)("science",[d.GET_SCIENCE_RESULT]))},h=(n(217),n(38)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calculator",on:{click:function(e){return e.target!==e.currentTarget?null:t.CLOSE_MODALS(e)}}},[n("div",{staticClass:"calculator__inner"},[n("ScienceCalculatorType",{attrs:{"type-class":"type_square",type:"square",total:t.squareCount},on:{add:t.ADD_SQUARE,subtract:t.SUBTRACT_SQUARE}}),t._v(" "),n("ScienceCalculatorType",{attrs:{"type-class":"type_circle",type:"circle",total:t.circleCount},on:{add:t.ADD_CIRCLE,subtract:t.SUBTRACT_CIRCLE}}),t._v(" "),n("ScienceCalculatorType",{attrs:{"type-class":"type_triangle",type:"triangle",total:t.triangleCount},on:{add:t.ADD_TRIANGLE,subtract:t.SUBTRACT_TRIANGLE}})],1),t._v(" "),n("div",{staticClass:"calculator__result"},[t._v("\n    Result: "),n("span",[t._v(t._s(t.getResult))]),t._v(" "),n("div",{staticClass:"calculator__result-button"},[n("ButtonBlue",{on:{clickEvent:t.addScienceResult}})],1)])])}),[],!1,null,"013d4dd4",null);e.default=component.exports;installComponents(component,{ScienceCalculatorType:n(209).default,ButtonBlue:n(210).default})},217:function(t,e,n){"use strict";n(211)},218:function(t,e,n){var o=n(84)(!1);o.push([t.i,".calculator[data-v-013d4dd4]{width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:rgba(0,0,0,.8);padding:18px;position:fixed;top:0;left:0}.calculator__inner[data-v-013d4dd4]{width:100%;max-width:425px;padding:24px 32px;background-color:#fff;display:grid;grid-row-gap:16px;row-gap:16px;grid-template-columns:1fr}.calculator__result[data-v-013d4dd4]{padding:8px 16px;width:100%;display:flex;justify-content:flex-start;background-color:#fff;font-size:24px;margin-top:32px}.calculator__result span[data-v-013d4dd4]{margin-left:auto}.calculator__result-button[data-v-013d4dd4]{margin-left:16px}",""]),t.exports=o},219:function(t,e,n){var content=n(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(85).default)("03c78c92",content,!0,{sourceMap:!1})},220:function(t,e,n){"use strict";n(219)},221:function(t,e,n){var o=n(84)(!1);o.push([t.i,".modal[data-v-7def7b84]{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;position:fixed;left:0;top:0;background-color:rgba(0,0,0,.8)}.table[data-v-7def7b84]{display:grid;grid-column-gap:2px;-moz-column-gap:2px;column-gap:2px;grid-row-gap:2px;row-gap:2px;position:absolute}.table.d-1[data-v-7def7b84]{grid-template-columns:repeat(1,1fr)}.table.d-2[data-v-7def7b84]{grid-template-columns:repeat(2,1fr)}.table.d-3[data-v-7def7b84]{grid-template-columns:repeat(3,1fr)}.table.d-4[data-v-7def7b84]{grid-template-columns:repeat(4,1fr)}.table.d-5[data-v-7def7b84]{grid-template-columns:repeat(5,1fr)}.table.d-6[data-v-7def7b84]{grid-template-columns:repeat(6,1fr)}.table.d-7[data-v-7def7b84]{grid-template-columns:repeat(7,1fr)}.table.d-8[data-v-7def7b84]{grid-template-columns:repeat(8,1fr)}.table.d-9[data-v-7def7b84]{grid-template-columns:repeat(9,1fr)}.point-cell[data-v-7def7b84]{width:40px;height:40px;background-color:#fff;background-size:38px 38px;background-position:50%;display:flex;justify-content:center;align-items:center;font-size:24px;cursor:pointer;border:none}.button_less[data-v-7def7b84],.button_more[data-v-7def7b84],.button_norm[data-v-7def7b84],.button_science[data-v-7def7b84]{position:absolute;bottom:calc(100% + 20px);font-size:14px}.button_more[data-v-7def7b84]{right:0}.button_less[data-v-7def7b84]{left:0}.button_norm[data-v-7def7b84]{left:50%;transform:translateX(-50%)}.button_science[data-v-7def7b84]{width:100%;bottom:calc(100% + 82px);background:#009334;color:#fff}",""]),t.exports=o},222:function(t,e,n){"use strict";n.r(e);n(37),n(23),n(36),n(49),n(28),n(50);var o=n(2),r=(n(206),n(51)),c=n(9);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"PointsModal",data:function(){return{points:[]}},props:{dimension:{type:Number,default:0},start:{type:Number,default:0},hasLessButton:{type:Boolean,default:!0},hasNormButton:{type:Boolean,default:!0},hasBigButton:{type:Boolean,default:!0},hasScienceButton:{type:Boolean,default:!1}},created:function(){this.points=new Array(this.dimension*this.dimension)},computed:d({dimensionClass:function(){return"d-"+this.dimension}},Object(r.d)({selectedPointsValue:function(t){return t.selectedPointsValue}})),methods:d({selectPointsValue:function(t){this.SET_SELECTED_POINTS_VALUE(t),this.CLOSE_MODALS()},openScienceCalculator:function(){this.OPEN_SCIENCE_CALCULATOR_MODAL()}},Object(r.c)([c.OPEN_MODAL,c.CLOSE_MODALS,c.SET_SELECTED_POINTS_VALUE,c.OPEN_NEGATIVE_NUMBERS_MODAL,c.OPEN_BIG_NUMBERS_MODAL,c.OPEN_SCIENCE_CALCULATOR_MODAL]))},v=(n(220),n(38)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",on:{click:function(e){return e.target!==e.currentTarget?null:t.CLOSE_MODALS(e)}}},[n("div",{staticClass:"table",class:t.dimensionClass},[t.hasLessButton?n("button",{staticClass:"point-cell button_less",on:{click:t.OPEN_NEGATIVE_NUMBERS_MODAL}},[t._v("\n      less\n    ")]):t._e(),t._v(" "),t.hasNormButton?n("button",{staticClass:"point-cell button_norm",on:{click:t.OPEN_MODAL}},[t._v("\n      ...\n    ")]):t._e(),t._v(" "),t.hasBigButton?n("button",{staticClass:"point-cell button_more",on:{click:t.OPEN_BIG_NUMBERS_MODAL}},[t._v("\n      more\n    ")]):t._e(),t._v(" "),t.hasScienceButton?n("button",{staticClass:"point-cell button_science",on:{click:t.openScienceCalculator}},[t._v("\n      Calculator\n    ")]):t._e(),t._v(" "),t._l(t.points,(function(e,o){return n("div",{key:o,staticClass:"point-cell",attrs:{"data-value":t.start+o},on:{click:function(e){return t.selectPointsValue(t.start+o)}}},[t._v("\n      "+t._s(t.start+o)+"\n    ")])}))],2)])}),[],!1,null,"7def7b84",null);e.default=component.exports},223:function(t,e,n){var content=n(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(85).default)("e52ea134",content,!0,{sourceMap:!1})},224:function(t,e,n){"use strict";var o=n(3),r=n(207).trim;o({target:"String",proto:!0,forced:n(225)("trim")},{trim:function(){return r(this)}})},225:function(t,e,n){var o=n(6),r=n(208);t.exports=function(t){return o((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},226:function(t,e,n){var content=n(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(85).default)("7a09a252",content,!0,{sourceMap:!1})},227:function(t,e,n){var o=n(84)(!1);o.push([t.i,"body{background-color:hsla(0,0%,50.2%,.1);display:flex;justify-content:center;align-items:center;width:100vw;height:100vh}",""]),t.exports=o},228:function(t,e,n){"use strict";n(223)},229:function(t,e,n){var o=n(84)(!1);o.push([t.i,'.container[data-v-1756d10d]{width:100vw;padding:40px 18px;margin:0 auto;align-items:center;flex-direction:column}.container[data-v-1756d10d],.input-container[data-v-1756d10d]{display:flex;justify-content:flex-start}.input-container[data-v-1756d10d]{margin-bottom:24px;flex-direction:row;width:100%}.input-container input[data-v-1756d10d]{flex-grow:1;outline:none;font-size:14px;background-color:hsla(0,0%,100%,0);border:none;border-bottom:1px solid #1f1f1f;padding:.5em 2em .5em 0}.button_add[data-v-1756d10d]{margin-left:16px}.button_add[data-v-1756d10d]:disabled{opacity:.7}.table[data-v-1756d10d]{height:auto;max-width:calc(100vw - 36px);background-color:#000;box-shadow:10px 10px 10px hsla(0,0%,50.2%,.3);display:grid;grid-template-columns:48px;grid-auto-columns:minmax(48px,1fr);grid-auto-flow:column;grid-column-gap:2px;-moz-column-gap:2px;column-gap:2px;align-self:flex-start;overflow:auto}.table .column[data-v-1756d10d]:first-child{position:sticky;left:0}.column[data-v-1756d10d]{display:grid;grid-row-gap:2px;row-gap:2px;position:relative}.column .cell[data-v-1756d10d]:first-child{font-size:14px}.cell[data-v-1756d10d]{height:40px;display:flex;justify-content:center;align-items:center;font-size:24px;line-height:40px;cursor:pointer}.cell[data-v-1756d10d]:nth-of-type(odd){background-color:#fff}.cell[data-v-1756d10d]:nth-of-type(2n){background-color:#d6d6d6}.cell.war[data-v-1756d10d]{background-color:#da4747}.cell.coins[data-v-1756d10d]{background-color:#fff}.cell.coins[data-v-1756d10d]:after{content:"";display:block;border-radius:50%;width:28px;height:28px;background-color:#f9f871;border:2px solid #dc6200}.cell.wonders[data-v-1756d10d]{background-color:#fff}.cell.wonders[data-v-1756d10d]:after{content:"";display:block;width:0;height:0;border:24px solid hsla(0,0%,100%,0);border-bottom-color:#aa7f00;transform:translateY(-30%) scaleX(.7)}.cell.culture[data-v-1756d10d]{background-color:#0085ff}.cell.science[data-v-1756d10d]{background-color:#009334}.cell.trade[data-v-1756d10d]{background-color:#f9f871}.cell.black[data-v-1756d10d]{background-color:#1f1f1f}.cell.leaders[data-v-1756d10d]{background-color:#99aae0}.cell.guilds[data-v-1756d10d]{background-color:#9268ff}.cell.result[data-v-1756d10d]{background-color:#ceffdf}.fade-enter-active[data-v-1756d10d],.fade-leave-active[data-v-1756d10d]{transition:.3s cubic-bezier(.25,.46,.45,.94)}.fade-enter-from[data-v-1756d10d],.fade-leave-to[data-v-1756d10d]{opacity:0}.fade-enter-to[data-v-1756d10d],.fade-leave-from[data-v-1756d10d]{opacity:1}.button[data-v-1756d10d]{display:block;border:none;outline:none;font-size:14px;background-color:#0085ff;border-radius:4px;padding:.5em 2em;color:#fff;display:flex;box-shadow:0 5px 10px hsla(0,0%,50.2%,.3);transition:opacity .2s cubic-bezier(.25,.46,.45,.94)}.button_total[data-v-1756d10d]{font-size:24px;margin-top:32px}.button_total[data-v-1756d10d]:hover{opacity:.7}',""]),t.exports=o},231:function(t,e,n){"use strict";n.r(e);n(37),n(23),n(36),n(49),n(28),n(50);var o=n(2),r=(n(224),n(30),n(51)),c=n(9),l=(n(226),n(222)),d=n(216);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{PointsModal:l.default,ScienceCalculator:d.default},data:function(){return{isReady:!1,isAddButtonDisabled:!0,inputName:"",isScienceCell:!1}},computed:v({},Object(r.d)({players:function(t){return t.players},isModalOpen:function(t){return t.isModalOpen},isBigNumbersModalOpen:function(t){return t.isBigNumbersModalOpen},isNegativeNumbersModalOpen:function(t){return t.isNegativeNumbersModalOpen},isScienceCalculatorModalOpen:function(t){return t.isScienceCalculatorModalOpen}})),watch:{inputName:function(){this.inputName=this.inputName.trim(),this.isAddButtonDisabled=""===this.inputName.trim()}},methods:v(v({selectPoints:function(t){var e=t.target.dataset;"science"===e.name?this.isScienceCell=!0:this.isScienceCell=!1,this.SET_SELECTED_CELL(e),this.OPEN_MODAL()},showResults:function(){},addPlayer:function(){this.ADD_PLAYER(this.inputName),this.inputName=""}},Object(r.c)([c.OPEN_MODAL,c.CLOSE_MODAL,c.SET_SELECTED_CELL,c.ADD_PLAYER])),Object(r.b)([c.GET_PLAYER,c.GET_RESULTS]))},m=(n(228),n(38)),component=Object(m.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("form",{staticClass:"input-container",on:{submit:function(e){return e.preventDefault(),t.addPlayer(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputName,expression:"inputName"}],attrs:{type:"text"},domProps:{value:t.inputName},on:{input:function(e){e.target.composing||(t.inputName=e.target.value)}}}),t._v(" "),n("button",{staticClass:"button button_add",attrs:{disabled:t.isAddButtonDisabled,type:"submit"}},[t._v("\n      Add\n    ")])]),t._v(" "),n("div",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.players,(function(e){return n("div",{key:e.id,staticClass:"column"},[n("div",{staticClass:"cell"},[t._v(t._s(e.name.slice(0,4)))]),t._v(" "),t._l(e.points,(function(o,r){return n("div",{key:r,staticClass:"cell",attrs:{"data-value":o,"data-name":r,"data-player":e.name,"data-player-id":e.id},on:{click:function(e){return t.selectPoints(e)}}},[t._v("\n        "+t._s(o)+"\n      ")])})),t._v(" "),n("div",{staticClass:"cell result"},[t._v("\n        "+t._s(e.result)+"\n      ")])],2)}))],2),t._v(" "),t._e(),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.isModalOpen?n("PointsModal",{attrs:{dimension:6,"has-norm-button":!1,"has-science-button":t.isScienceCell}}):t._e()],1),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.isBigNumbersModalOpen?n("PointsModal",{attrs:{dimension:6,start:36,"has-big-button":!1,"has-science-button":t.isScienceCell}}):t._e()],1),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.isNegativeNumbersModalOpen?n("PointsModal",{attrs:{dimension:4,start:-16,"has-less-button":!1,"has-science-button":t.isScienceCell}}):t._e()],1),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.isScienceCalculatorModalOpen?n("ScienceCalculator"):t._e()],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column fields"},[n("div",{staticClass:"cell"}),t._v(" "),n("div",{staticClass:"cell war"}),t._v(" "),n("div",{staticClass:"cell coins"}),t._v(" "),n("div",{staticClass:"cell wonders"}),t._v(" "),n("div",{staticClass:"cell culture"}),t._v(" "),n("div",{staticClass:"cell science"}),t._v(" "),n("div",{staticClass:"cell trade"}),t._v(" "),n("div",{staticClass:"cell guilds"}),t._v(" "),n("div",{staticClass:"cell black"}),t._v(" "),n("div",{staticClass:"cell leaders"}),t._v(" "),n("div",{staticClass:"cell result"})])}],!1,null,"1756d10d",null);e.default=component.exports;installComponents(component,{PointsModal:n(222).default,ScienceCalculator:n(216).default})}}]);