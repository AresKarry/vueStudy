(function(){"use strict";var t={1965:function(t,e,n){var i=n(6369),r=function(){var t=this,e=t._self._c;return e("div",[e("BannerKai"),e("div",{staticClass:"row"}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:"/about"}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])],1)},a=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")]),e("button",{on:{click:t.back}},[t._v("后退")]),e("button",{on:{click:t.forward}},[t._v("前进")]),e("button",{on:{click:t.go}},[t._v("gogogo")])])])},s=[],l={name:"BannerKai",methods:{back(){this.$router.back()},forward(){this.$router.forward()},go(){this.$router.go(3)}}},u=l,c=n(1001),v=(0,c.Z)(u,o,s,!1,null,null,null),p=v.exports,f={name:"App",template:"<App></App>",components:{BannerKai:p}},h=f,d=(0,c.Z)(h,r,a,!1,null,null,null),m=d.exports,_=n(2631),g=function(){var t=this,e=t._self._c;return e("h2",[t._v("我是About的内容")])},w=[],b={name:"AboutKai",beforeRouteEnter(t,e,n){t.meta.isAuth?"karry"===localStorage.getItem("star")?n():alert("你不是大明星王俊凯，不放行！！！"):n()},beforeRouteLeave(t,e,n){n()}},y=b,x=(0,c.Z)(y,g,w,!1,null,null,null),k=x.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Home组件内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:"NewsKai"}},[e("router-view")],1)],1)])},Z=[],O={name:"HomeKai"},A=O,q=(0,c.Z)(A,C,Z,!1,null,null,null),K=q.exports,j=function(){var t=this,e=t._self._c;return e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("我是王俊凯的亲亲妈咪")]),t._m(0),t._m(1),t._m(2)])},$=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003 "),e("input",{attrs:{type:"text"}})])}],P={name:"NewsKai",data(){return{opacity:1}},activated(){this.timer=setInterval((()=>{this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){clearInterval(this.timer)}},S=P,B=(0,c.Z)(S,j,$,!1,null,null,null),H=B.exports,I=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messageList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"xiangqing",query:{id:n.id,title:n.title}}}},[t._v(" "+t._s(n.title)+" ")]),t._v("   "),e("button",{on:{click:function(e){return t.pushShow(n)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(n)}}},[t._v("replace查看")])],1)})),0),e("router-view")],1)},L=[],M={name:"MessageKai",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{pushShow(t){this.$router.push({name:"xiangqing",query:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"xiangqing",query:{id:t.id,title:t.title}})}}},N=M,R=(0,c.Z)(N,I,L,!1,null,null,null),T=R.exports,D=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号："+t._s(t.id))]),e("li",[t._v("消息标题："+t._s(t.title))])])},E=[],z={name:"DetailKai",props:["id","title"],mounted(){}},F=z,V=(0,c.Z)(F,D,E,!1,null,null,null),G=V.exports;const J=new _.Z({mode:"history",routes:[{name:"guanyu",path:"/about",component:k,meta:{isAuth:!0,title:"关于"}},{name:"zhuye",path:"/home",component:K,meta:{title:"主页"},children:[{name:"xinwen",path:"news",component:H,meta:{isAuth:!0,title:"新闻"}},{name:"xiaoxi",path:"message",component:T,meta:{isAuth:!0,title:"消息"},children:[{name:"xiangqing",path:"detail",component:G,props(t){return{id:t.query.id,title:t.query.title}}}]}]}]});var Q=J;i.ZP.config.productionTip=!1,i.ZP.use(_.Z),new i.ZP({render:t=>t(m),router:Q}).$mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,a){if(!i){var o=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],a=t[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(s=!1,a<o&&(o=a));if(s){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[i,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,a,o=i[0],s=i[1],l=i[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var c=l(n)}for(e&&e(i);u<o.length;u++)a=o[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},i=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(1965)}));i=n.O(i)})();
//# sourceMappingURL=app.c8e12d36.js.map