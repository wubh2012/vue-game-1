(function(t){function l(l){for(var n,c,u=l[0],s=l[1],o=l[2],f=0,d=[];f<u.length;f++)c=u[f],r[c]&&d.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);a&&a(l);while(d.length)d.shift()();return i.push.apply(i,o||[]),e()}function e(){for(var t,l=0;l<i.length;l++){for(var e=i[l],n=!0,u=1;u<e.length;u++){var s=e[u];0!==r[s]&&(n=!1)}n&&(i.splice(l--,1),t=c(c.s=e[0]))}return t}var n={},r={app:0},i=[];function c(l){if(n[l])return n[l].exports;var e=n[l]={i:l,l:!1,exports:{}};return t[l].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=n,c.d=function(t,l,e){c.o(t,l)||Object.defineProperty(t,l,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,l){if(1&l&&(t=c(t)),8&l)return t;if(4&l&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&l&&"string"!=typeof t)for(var n in t)c.d(e,n,function(l){return t[l]}.bind(null,n));return e},c.n=function(t){var l=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(l,"a",l),l},c.o=function(t,l){return Object.prototype.hasOwnProperty.call(t,l)},c.p="/vue-game-1/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=l,u=u.slice();for(var o=0;o<u.length;o++)l(u[o]);var a=s;i.push([0,"chunk-vendors"]),e()})({0:function(t,l,e){t.exports=e("56d7")},"034f":function(t,l,e){"use strict";var n=e("64a9"),r=e.n(n);r.a},"4bbb":function(t,l,e){},"56d7":function(t,l,e){"use strict";e.r(l);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),r=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{attrs:{id:"app"}},[e("HelloWorld",{attrs:{msg:"井字棋游戏"}}),e("div",{staticClass:"row"},[e("Cell",{attrs:{index:"0",result:t.result},on:{click:t.clickCell}}),e("Cell",{attrs:{index:"1",result:t.result},on:{click:t.clickCell}}),e("Cell",{attrs:{index:"2",result:t.result},on:{click:t.clickCell}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{index:"3",result:t.result},on:{click:t.clickCell}}),e("Cell",{attrs:{index:"4",result:t.result},on:{click:t.clickCell}}),e("Cell",{attrs:{index:"5",result:t.result},on:{click:t.clickCell}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{index:"6",result:t.result},on:{click:t.clickCell}}),e("Cell",{attrs:{index:"7",result:t.result},on:{click:t.clickCell}}),e("Cell",{attrs:{index:"8",result:t.result},on:{click:t.clickCell}})],1),e("div",{staticClass:"result"},[t._v(t._s(t.result))])],1)},i=[],c=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))])])},u=[],s={name:"helloworld",props:{msg:String}},o=s,a=(e("8766"),e("2877")),f=Object(a["a"])(o,c,u,!1,null,"84f38aea",null),d=f.exports,p=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[e("div",{staticClass:"cell",on:{click:t.onClickCell}},[t._v(t._s(t.text))])])},h=[],v={name:"cell",props:{index:String,result:String},data:function(){return{text:null}},methods:{onClickCell:function(){null===this.text&&null===this.result&&(this.text=this.$parent.count%2===0?"X":"O",this.$parent.count+=1,this.$emit("click",this.index,this.text))}}},b=v,C=(e("7977"),Object(a["a"])(b,p,h,!1,null,"a00b7360",null)),k=C.exports,x={name:"app",data:function(){return{count:0,mapdata:[[null,null,null],[null,null,null],[null,null,null]],result:null}},components:{HelloWorld:d,Cell:k},methods:{clickCell:function(t,l){var e=Math.floor(t/3),n=t%3;this.mapdata[e][n]=l,this.calcResult()},calcResult:function(){for(var t=this.mapdata,l=0;l<3;l++)if(null!==t[l][0]&&t[l][0]===t[l][1]&&t[l][1]===t[l][2]){this.result="游戏结束，获胜的是：".concat(t[l][0]);break}for(var e=0;e<3;e++)if(null!==t[0][e]&&t[0][e]===t[1][e]&&t[1][e]===t[2][e]){this.result="游戏结束，获胜的是：".concat(t[0][e]);break}null!==t[0][0]&&t[0][0]===t[1][1]&&t[1][1]===t[2][2]&&(this.result="游戏结束，获胜的是：".concat(t[0][0])),null!==t[0][2]&&t[0][2]===t[1][1]&&t[1][1]===t[2][0]&&(this.result="游戏结束，获胜的是：".concat(t[0][2])),9===this.count&&null===this.result&&(console.log("gg"),this.result="游戏结束，打成平手")}}},m=x,g=(e("034f"),Object(a["a"])(m,r,i,!1,null,null,null)),_=g.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(_)}}).$mount("#app")},"64a9":function(t,l,e){},7977:function(t,l,e){"use strict";var n=e("4bbb"),r=e.n(n);r.a},8766:function(t,l,e){"use strict";var n=e("aef3"),r=e.n(n);r.a},aef3:function(t,l,e){}});
//# sourceMappingURL=app.7c80bc40.js.map