(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var o={},n={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"310e8af3"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,o){r=n[t]=[e,o]}));e.push(r[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var r=n[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,r[1](l)}n[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(r,o,function(e){return t[e]}.bind(null,o));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/reporter/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"2f1d":function(t,e,r){t.exports=r.p+"img/qr-code.065b4181.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i=(r("034f"),r("2877")),s={},c=Object(i["a"])(s,n,a,!1,null,null,null),l=c.exports,u=r("9483");Object(u["a"])("".concat("/reporter/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7");var p=r("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("div",{staticClass:"privacy-notice noPrint"},[t._v("本站不收集個資，但還是提醒您：為保護個資安全，請先斷開網路再貼照片和輸入真實姓名")]),t._m(0),r("table",{attrs:{id:"main",border:"3px"}},[t._m(1),r("tr",[r("td",[r("table",{attrs:{id:"in"}},[r("tr",[r("td",{attrs:{id:"left"}},[r("img",{directives:[{name:"show",rawName:"v-show",value:t.root.photo,expression:"root.photo"}],staticClass:"face",attrs:{src:t.root.photo,alt:"face"},on:{click:function(e){t.root.photo=""}}}),r("h2",{directives:[{name:"show",rawName:"v-show",value:!t.root.photo,expression:"!root.photo"}]},[t._v("每位公民都有新聞採訪權")]),r("span",{directives:[{name:"show",rawName:"v-show",value:!t.root.photo,expression:"!root.photo"}]},[t._m(2),t._m(3),r("hr"),r("span",{staticStyle:{"font-size":"22px"}},[t._v("請上傳一張照片：")]),r("image-uploader",{on:{input:t.setImage}})],1)])]),r("tr",[r("td",{attrs:{id:"right"}},[r("span",[r("span",{staticClass:"noPrint"},[t._v("請輸入您的名字：")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.root.name,expression:"root.name"}],domProps:{value:t.root.name},on:{focus:function(e){t.editing=1},keypress:function(e){return t.maybeDone(e)},input:function(e){e.target.composing||t.$set(t.root,"name",e.target.value)}}})])])])]),t._v(" "),r("br"),r("br"),r("h3",{attrs:{id:"foot"}},[t._v(" 公民攝影記者 ")])]),t._m(4)])]),r("a",{directives:[{name:"show",rawName:"v-show",value:t.root.photo&&t.root.name,expression:"root.photo && root.name"}],staticClass:"noPrint",attrs:{id:"doPrint",onclick:" window.print()"}},[t._v(" 列印! ")])])},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar navbar-inverse navbar-fixed-bottom noPrint",attrs:{role:"navigation"}},[r("div",{staticClass:"navbar-container"},[r("ul",{staticClass:"nav-list"},[r("li",{staticClass:"nav-item"},[r("a",{attrs:{href:"https://www.facebook.com/sharer/sharer.php?u=https://g0v.github.io/reporter/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 分享到 Facebook ")])]),r("li",{staticClass:"nav-item"},[r("a",{attrs:{href:"https://line.me/R/msg/text/?https://g0v.github.io/reporter/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 分享到 Line ")])]),r("li",{staticClass:"nav-item"},[r("a",{attrs:{href:"https://github.com/g0v/reporter/wiki/%E9%9A%B1%E7%A7%81%E6%AC%8A%E6%94%BF%E7%AD%96",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 隱私政策 ")])]),r("li",{staticClass:"nav-item"},[r("a",{attrs:{href:"https://github.com/g0v/reporter",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 專案原始碼 ")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("div",{attrs:{id:"titleBar"}},[r("span",[r("img",{attrs:{src:"https://g0v.github.io/reporter/images/r2.png",alt:"logo"}})])])]),r("td",[r("h3",{attrs:{id:"rt"}},[t._v("憲法保障公民記者採訪自由")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[t._v("「貼」照片")]),r("li",[t._v("「印」記者證")]),r("li",[t._v("「前」往現場採訪")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"note left-align"},[t._v(" 記者證是公民新聞採訪權的保障。 "),r("br"),t._v(" 上傳照片、輸入名字後，即可列印，請妥善保存，並在採訪時隨身攜帶。 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("td",{attrs:{id:"r"}},[t._v(" 司法院釋字第 613 號： 憲法第十一條所保障之言論自由，其內容包括通訊傳播自由，亦即經營或使用廣播、電視與其他通訊傳播網路等設施，以取得資訊及發表言論之自由。 "),o("br"),o("br"),t._v(" 司法院釋字第 689 號： 新聞自由所保障之新聞採訪自由並非僅保障隸屬於新聞機構之新聞記者之採訪行為，亦保障一般人為提供具新聞價值之資訊於眾，或為促進公共事務討論以監督政府，而從事之新聞採訪行為。 "),o("br"),o("br"),o("a",{attrs:{href:"https://cons.judicial.gov.tw/docdata.aspx?fid=100&id=310870&rn=20084"}},[o("img",{staticClass:"qr",attrs:{src:r("2f1d"),alt:"qr"}})]),o("br"),t._v(" 大法官解釋全文"),o("br"),t._v(" https://gov.tw/KKt ")])}],m={name:"HelloWorld",props:{msg:String},data:function(){return{editing:1,hasImage:!1,root:{photo:"",name:""}}},methods:{setImage:function(t){this.hasImage=!0,this.root.photo=t},maybeDone:function(t){13==t.keyCode&&(this.editing=0)}}},g=m,b=(r("ca66"),Object(i["a"])(g,v,h,!1,null,"51a6d1c8",null)),_=b.exports,w={name:"Home",components:{HelloWorld:_}},y=w,k=Object(i["a"])(y,f,d,!1,null,null,null),x=k.exports;o["a"].use(p["a"]);var C=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],j=new p["a"]({routes:C}),E=j,O=r("4c7d"),P=r.n(O);o["a"].use(P.a),o["a"].config.productionTip=!1,new o["a"]({router:E,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,r){},a377:function(t,e,r){},ca66:function(t,e,r){"use strict";r("a377")}});
//# sourceMappingURL=app.92852db4.js.map