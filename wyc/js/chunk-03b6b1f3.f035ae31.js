(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03b6b1f3"],{c740:function(t,n,i){"use strict";var e=i("23e7"),o=i("b727").findIndex,a=i("44d2"),r=i("ae40"),c="findIndex",d=!0,s=r(c);c in[]&&Array(1)[c]((function(){d=!1})),e({target:"Array",proto:!0,forced:d||!s},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a(c)},da02:function(t,n,i){"use strict";var e=i("e9ce"),o=i.n(e);o.a},e9ce:function(t,n,i){},fd3f:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"blog_router"},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"blog",staticClass:"blog typo markdown-body",attrs:{id:"blog_warp"},domProps:{innerHTML:t._s(t.doms)}}),i("div",{staticClass:"direct"},[i("h3",[t._v(t._s(t.mdTitle))]),i("ul",t._l(t.catalogs,(function(n,e){return i("li",{key:e,class:{active:t.aIndex===e},attrs:{title:n.innerText},on:{click:function(i){return t.articalHash(n)}}},[t._v(t._s(n.innerText))])})),0)])])},o=[],a=(i("c740"),i("a630"),i("b0c0"),i("ac1f"),i("3ca3"),i("5319"),{data:function(){return{doms:"",loading:!1,mdTitle:null,catalogs:[],aIndex:0}},created:function(){var t=this;this.appendMarked(),window.debug=function(){t.loading=!t.loading}},mounted:function(){var t=this;window.debug=function(){console.log(t.catalogs)}},methods:{appendMarked:function(){var t=this;if(this.loading=!0,window.hasOwnProperty("marked"))this.initMd();else{var n=/\/$/,i=document.createElement("script");i.id="marked",i.src="/wyc/".replace(n,"")+"/static/source/marked.min.js",i.onload=function(){t.initMd()},document.body.append(i)}},initMd:function(){var t=this,n="//mangoyco.github.io/docs/".concat(this.$route.params.pathMatch,".md");this.$axios.get(n).then((function(n){"Blog"===t.$route.name&&(t.doms=window.marked(n.data),t.$nextTick((function(){window.scrollTo(0,0),t.loading=!1,t.initCatalog()})))}))},initCatalog:function(){var t=document.getElementsByTagName("h1");this.mdTitle=t[0]&&t[0].innerText||"",this.catalogs=Array.from(this.$refs.blog.querySelectorAll("h2,h3")),document.addEventListener("scroll",this.blogScroll)},blogScroll:function(t){var n=this.catalogs.findIndex((function(t){return t.getBoundingClientRect().top>24})),i=0===n?0:n-1;this.aIndex=i},articalHash:function(t){t.scrollIntoView&&t.scrollIntoView({behavior:"smooth",block:"start"})}}}),r=a,c=(i("da02"),i("2877")),d=Object(c["a"])(r,e,o,!1,null,"672dd3e4",null);n["default"]=d.exports}}]);