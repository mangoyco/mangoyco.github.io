(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0835d8d6"],{"14c3":function(t,n,e){var r=e("c6b6"),i=e("9263");t.exports=function(t,n){var e=t.exec;if("function"===typeof e){var a=e.call(t,n);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},"38d6":function(t,n,e){},5319:function(t,n,e){"use strict";var r=e("d784"),i=e("825a"),a=e("7b0b"),o=e("50c4"),c=e("a691"),l=e("1d80"),u=e("8aa5"),s=e("14c3"),d=Math.max,f=Math.min,g=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,n,e,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=r.REPLACE_KEEPS_$0,m=x?"$":"$0";return[function(e,r){var i=l(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i,r):n.call(String(i),e,r)},function(t,r){if(!x&&E||"string"===typeof r&&-1===r.indexOf(m)){var a=e(n,t,this,r);if(a.done)return a.value}var l=i(t),g=String(this),v="function"===typeof r;v||(r=String(r));var p=l.global;if(p){var y=l.unicode;l.lastIndex=0}var w=[];while(1){var I=s(l,g);if(null===I)break;if(w.push(I),!p)break;var _=String(I[0]);""===_&&(l.lastIndex=u(g,o(l.lastIndex),y))}for(var R="",T=0,S=0;S<w.length;S++){I=w[S];for(var $=String(I[0]),k=d(f(c(I.index),g.length),0),A=[],P=1;P<I.length;P++)A.push(h(I[P]));var C=I.groups;if(v){var U=[$].concat(A,k,g);void 0!==C&&U.push(C);var M=String(r.apply(void 0,U))}else M=b($,g,k,A,C,r);k>=T&&(R+=g.slice(T,k)+M,T=k+$.length)}return R+g.slice(T)}];function b(t,e,r,i,o,c){var l=r+t.length,u=i.length,s=p;return void 0!==o&&(o=a(o),s=v),n.call(c,s,(function(n,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(l);case"<":c=o[a.slice(1,-1)];break;default:var s=+a;if(0===s)return n;if(s>u){var d=g(s/10);return 0===d?n:d<=u?void 0===i[d-1]?a.charAt(1):i[d-1]+a.charAt(1):n}c=i[s-1]}return void 0===c?"":c}))}}))},"8aa5":function(t,n,e){"use strict";var r=e("6547").charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},9263:function(t,n,e){"use strict";var r=e("ad6d"),i=e("9f7f"),a=RegExp.prototype.exec,o=String.prototype.replace,c=a,l=function(){var t=/a/,n=/b*/g;return a.call(t,"a"),a.call(n,"a"),0!==t.lastIndex||0!==n.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],d=l||s||u;d&&(c=function(t){var n,e,i,c,d=this,f=u&&d.sticky,g=r.call(d),v=d.source,p=0,h=t;return f&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),h=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,p++),e=new RegExp("^(?:"+v+")",g)),s&&(e=new RegExp("^"+v+"$(?!\\s)",g)),l&&(n=d.lastIndex),i=a.call(f?e:d,h),f?i?(i.input=i.input.slice(p),i[0]=i[0].slice(p),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:l&&i&&(d.lastIndex=d.global?i.index+i[0].length:n),s&&i&&i.length>1&&o.call(i[0],e,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"9f7f":function(t,n,e){"use strict";var r=e("d039");function i(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,n,e){"use strict";var r=e("23e7"),i=e("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,n,e){"use strict";var r=e("825a");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},c740:function(t,n,e){"use strict";var r=e("23e7"),i=e("b727").findIndex,a=e("44d2"),o=e("ae40"),c="findIndex",l=!0,u=o(c);c in[]&&Array(1)[c]((function(){l=!1})),r({target:"Array",proto:!0,forced:l||!u},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(c)},d784:function(t,n,e){"use strict";e("ac1f");var r=e("6eeb"),i=e("d039"),a=e("b622"),o=e("9263"),c=e("9112"),l=a("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),g=!i((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,d){var v=a(t),p=!i((function(){var n={};return n[v]=function(){return 7},7!=""[t](n)})),h=p&&!i((function(){var n=!1,e=/a/;return"split"===t&&(e={},e.constructor={},e.constructor[l]=function(){return e},e.flags="",e[v]=/./[v]),e.exec=function(){return n=!0,null},e[v](""),!n}));if(!p||!h||"replace"===t&&(!u||!s||f)||"split"===t&&!g){var x=/./[v],E=e(v,""[t],(function(t,n,e,r,i){return n.exec===o?p&&!i?{done:!0,value:x.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),m=E[0],b=E[1];r(String.prototype,t,m),r(RegExp.prototype,v,2==n?function(t,n){return b.call(t,this,n)}:function(t){return b.call(t,this)})}d&&c(RegExp.prototype[v],"sham",!0)}},da02:function(t,n,e){"use strict";var r=e("38d6"),i=e.n(r);i.a},fd3f:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"blog_router"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"blog",staticClass:"blog typo markdown-body",attrs:{id:"blog_warp"},domProps:{innerHTML:t._s(t.doms)}}),e("div",{staticClass:"direct"},[e("h3",[t._v(t._s(t.mdTitle))]),e("ul",t._l(t.catalogs,(function(n,r){return e("li",{key:r,class:{active:t.aIndex===r},attrs:{title:n.innerText},on:{click:function(e){return t.articalHash(n)}}},[t._v(t._s(n.innerText))])})),0)])])},i=[],a=(e("c740"),e("a630"),e("b0c0"),e("ac1f"),e("3ca3"),e("5319"),{data:function(){return{doms:"",loading:!1,mdTitle:null,catalogs:[],aIndex:0}},created:function(){var t=this;this.appendMarked(),window.debug=function(){t.loading=!t.loading}},mounted:function(){var t=this;window.debug=function(){console.log(t.catalogs)}},methods:{appendMarked:function(){var t=this;if(this.loading=!0,window.hasOwnProperty("marked"))this.initMd();else{var n=/\/$/,e=document.createElement("script");e.id="marked",e.src="/wyc/".replace(n,"")+"/static/source/marked.min.js",e.onload=function(){t.initMd()},document.body.append(e)}},initMd:function(){var t=this,n="//mangoyco.github.io/docs/".concat(this.$route.params.pathMatch,".md");this.$axios.get(n).then((function(n){"Blog"===t.$route.name&&(t.doms=window.marked(n.data),t.$nextTick((function(){window.scrollTo(0,0),t.loading=!1,t.initCatalog()})))}))},initCatalog:function(){var t=document.getElementsByTagName("h1");this.mdTitle=t[0]&&t[0].innerText||"",this.catalogs=Array.from(this.$refs.blog.querySelectorAll("h2,h3")),document.addEventListener("scroll",this.blogScroll)},blogScroll:function(t){var n=this.catalogs.findIndex((function(t){return t.getBoundingClientRect().top>24})),e=0===n?0:n-1;this.aIndex=e},articalHash:function(t){t.scrollIntoView&&t.scrollIntoView({behavior:"smooth",block:"start"})}}}),o=a,c=(e("da02"),e("2877")),l=Object(c["a"])(o,r,i,!1,null,"672dd3e4",null);n["default"]=l.exports}}]);