(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{135:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(1),o=r(6),a=(r(0),r(366)),i={title:"topN"},p={id:"pipeline/workflow/workspace/data-processing-basic/top-n",title:"topN",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/data-processing-basic/top-n.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/top-n",sidebar:"pipeline",previous:{title:"sort",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/sort"},next:{title:"replace",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/replace"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"definition"},"Definition"),Object(a.b)("p",null,"\uc0c1\uc704 \uba87 %\uc758 \ub370\uc774\ud130\ub97c \ucd94\ucd9c\ud569\ub2c8\ub2e4.",Object(a.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[topN]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4."),Object(a.b)("h3",{id:"set"},"Set"),Object(a.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(a.b)("h4",{id:"property"},"Property"),Object(a.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic063_topn_property.png",alt:"prebasic063"})),"  "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\uc801\uc6a9\ud560 column \uc120\ud0dd : \uae30\uc900 \uceec\ub7fc \uc120\ud0dd "),Object(a.b)("li",{parentName:"ol"},"\uc0c1\uc704 % : \uc0c1\uc704 \uba87 \ud504\ub85c \ub370\uc774\ud130\ub97c \ucd94\ucd9c\ud560\uc9c0 \uc120\ud0dd(1-100) "),Object(a.b)("li",{parentName:"ol"},"\uc815\ub82c \uae30\uc900 : asc(\uc624\ub984\ucc28\uc21c), desc(\ub0b4\ub9bc\ucc28\uc21c)")),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"price\uceec\ub7fc\uc5d0\uc11c \uc911 \uc0c1\uc704 20%\uc778 \ub370\uc774\ud130\ub9cc \ubd88\ub7ec\uc624\ub294 \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.  "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"[HDFS\ubd88\ub7ec\uc624\uae30]",", ","[topN]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131\n",Object(a.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic064_topn_exampleworkflow.png",alt:"prebasic064"})),"  "),Object(a.b)("li",{parentName:"ol"},"[topN]"," \ub178\ub4dc\ub97c \uc544\ub798\uc640 \uac19\uc774 \uc124\uc815\ud558\uace0 snapshot \ud074\ub9ad",Object(a.b)("br",{parentName:"li"}),Object(a.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic065_topn_exampleworkflow_%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC.png",alt:"prebasic065"})))))}b.isMDXComponent=!0},366:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(r),f=n,m=s["".concat(i,".").concat(f)]||s[f]||u[f]||a;return r?o.a.createElement(m,p({ref:t},l,{components:r})):o.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);