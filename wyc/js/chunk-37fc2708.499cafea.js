(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37fc2708"],{3684:function(t,n,i){"use strict";var o=i("ec0a"),e=i.n(o);e.a},c740:function(t,n,i){"use strict";var o=i("23e7"),e=i("b727").findIndex,a=i("44d2"),r=i("ae40"),c="findIndex",s=!0,d=r(c);c in[]&&Array(1)[c]((function(){s=!1})),o({target:"Array",proto:!0,forced:s||!d},{findIndex:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),a(c)},ec0a:function(t,n,i){},fd3f:function(t,n,i){"use strict";i.r(n);var o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"blog_router"},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"blog",staticClass:"blog typo markdown-body",attrs:{id:"blog_warp"},domProps:{innerHTML:t._s(t.doms)}}),i("div",{staticClass:"direct"},[i("h3",[t._v(t._s(t.mdTitle))]),i("ul",t._l(t.catalogs,(function(n,o){return i("li",{key:o,class:{active:t.aIndex===o},attrs:{title:n.innerText},on:{click:function(i){return t.articalHash(n)}}},[t._v(t._s(n.innerText))])})),0)])])},e=[],a=(i("c740"),i("a630"),i("b0c0"),i("3ca3"),{data:function(){return{doms:"",loading:!1,mdTitle:null,catalogs:[],aIndex:0}},created:function(){var t=this;this.appendMarked(),window.debug=function(){t.loading=!t.loading}},mounted:function(){var t=this;window.debug=function(){console.log(t.catalogs)}},methods:{appendMarked:function(){var t=this;if(this.loading=!0,window.hasOwnProperty("marked"))this.initMd();else{var n=document.createElement("script");n.id="marked",n.src="/static/source/marked.min.js",n.onload=function(){t.initMd()},document.body.append(n)}},initMd:function(){var t=this,n="//mangoyco.github.io/docs/".concat(this.$route.params.pathMatch,".md");this.$axios.get(n).then((function(n){"Blog"===t.$route.name&&(t.doms=window.marked(n.data),t.$nextTick((function(){window.scrollTo(0,0),t.loading=!1,t.initCatalog()})))}))},initCatalog:function(){var t=document.getElementsByTagName("h1");this.mdTitle=t[0]&&t[0].innerText||"",this.catalogs=Array.from(this.$refs.blog.querySelectorAll("h2,h3")),document.addEventListener("scroll",this.blogScroll)},blogScroll:function(t){var n=this.catalogs.findIndex((function(t){return t.getBoundingClientRect().top>24})),i=0===n?0:n-1;this.aIndex=i},articalHash:function(t){t.scrollIntoView&&t.scrollIntoView({behavior:"smooth",block:"start"})}}}),r=a,c=(i("3684"),i("2877")),s=Object(c["a"])(r,o,e,!1,null,"4e7a03cb",null);n["default"]=s.exports}}]);