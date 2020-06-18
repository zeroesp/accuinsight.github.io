(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{298:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(6),c=(r(0),r(364)),o={title:"agg"},p={id:"batchpipeline/workflow/workspace/data-processing-basic/agg",title:"agg",description:"## agg",source:"@site/docs/batchpipeline/workflow/workspace/data-processing-basic/agg.md",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/agg",sidebar:"batchpipeline",previous:{title:"S3 \ubd88\ub7ec\uc624\uae30",permalink:"/docs/batchpipeline/workflow/workspace/import-data/s3"},next:{title:"appendString",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/append-string"}},i=[{value:"agg",id:"agg",children:[]}],b={rightToc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"agg"},"agg"),Object(c.b)("p",null,"\uc9d1\uacc4\ud568\uc218\ub97c \uc218\ud589\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[agg]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic001_agg_workflow.png",alt:"prebasic001"}))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"aggcol : \uadf8\ub8f9\ud551 \uae30\uc900 \uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. \ub300\uc0c1 \uceec\ub7fc\uc774 \uc5ec\ub7ec \uac1c\uc77c \uacbd\uc6b0 \uc624\ub978\ucabd ","[+]","\ubc84\ud2bc\uc744 \uc120\ud0dd\ud55c\ub2e4. ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"target : \uc9d1\uacc4\uae30\uc900 \uceec\ub7fc \ubc0f \uc9d1\uacc4\ud568\uc218\ub97c \uc120\ud0dd\ud55c\ub2e4. "),Object(c.b)("table",{parentName:"li"},Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\uc9d1\uacc4\ud568\uc218 \uc885\ub958"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"max")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"min")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"avg")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"count")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sum")))))),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic002_agg_property.png",alt:"prebasic002"}))))}l.isMDXComponent=!0},364:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=l(r),g=n,m=s["".concat(o,".").concat(g)]||s[g]||u[g]||c;return r?a.a.createElement(m,p({ref:t},b,{components:r})):a.a.createElement(m,p({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);