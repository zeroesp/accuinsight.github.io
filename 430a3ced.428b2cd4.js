(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{162:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(6),c=(r(0),r(364)),o={title:"crosstab"},i={id:"batchpipeline/workflow/workspace/data-processing-basic/crosstab",title:"crosstab",description:"## crosstab",source:"@site/docs/batchpipeline/workflow/workspace/data-processing-basic/crosstab.md",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/crosstab",sidebar:"batchpipeline",previous:{title:"cast",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/cast"},next:{title:"dataJoin",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/data-join"}},p=[{value:"crosstab",id:"crosstab",children:[]}],s={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"crosstab"},"crosstab"),Object(c.b)("p",null,"\uc5f4\uc758 \ube48\ub3c4 \ud14c\uc774\ube14\uc744 \uacc4\uc0b0\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[crosstab]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"col1 : \ube48\ub3c4\ud45c \uc791\uc131\uc744 \uc704\ud55c \uccab \ubc88\uc9f8 \uae30\uc900\uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. \uacb0\uacfc\ud14c\uc774\ube14\uc5d0\uc11c \ud589\uc5d0 \uc704\uce58\ud55c\ub2e4. "),Object(c.b)("li",{parentName:"ol"},"col2 : \ube48\ub3c4\ud45c \uc791\uc131\uc744 \uc704\ud55c \ub450 \ubc88\uc9f8 \uae30\uc900\uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. \uacb0\uacfc\ud14c\uc774\ube14\uc5d0\uc11c \uc5f4\uc5d0 \uc704\uce58\ud55c\ub2e4. ")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic007_crosstab_property.png",alt:"prebasic007"}))),Object(c.b)("p",null,"hdfs\uc5d0 \uc800\uc7a5\ub41c \ud14c\uc774\ube14\uc5d0\uc11c co11=category, col2=group\uc744 \uac01\uac01 \uc120\ud0dd\ud560 \uacbd\uc6b0 \uacb0\uacfc\ub294 \uc544\ub798\uc640 \uac19\ub2e4. "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"hdfs\uc5d0 \uc800\uc7a5\ub41c \uc6d0\ud14c\uc774\ube14")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic008_crosstab_hdfs_raw.png",alt:"prebasic008"}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"crosstab \ub178\ub4dc\ub97c \ud65c\uc6a9\ud558\uc5ec \ube48\ub3c4\ud14c\uc774\ube14 \uacc4\uc0b0\ud55c \uacb0\uacfc \ud14c\uc774\ube14 : category \uae30\uc900\uc73c\ub85c group \ubcc4 \ube48\ub3c4\ud14c\uc774\ube14\uc774 \uacc4\uc0b0\ub428\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. ")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic009_crosstab_result.png",alt:"prebasic009"}))))}l.isMDXComponent=!0},364:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(r),f=n,d=b["".concat(o,".").concat(f)]||b[f]||u[f]||c;return r?a.a.createElement(d,i({ref:t},s,{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);