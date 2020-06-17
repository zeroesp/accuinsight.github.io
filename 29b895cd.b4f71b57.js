(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{141:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(1),o=(r(0),r(364));const i={title:"distcp"},c={id:"pipeline/workflow/workspace/job-processing/distcp",title:"distcp",description:"### Definition\r",source:"@site/docs\\pipeline\\workflow\\workspace\\job-processing\\distcp.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/distcp",sidebar:"pipeline",previous:{title:"decision",permalink:"/docs/pipeline/workflow/workspace/job-processing/decision"},next:{title:"executeHive",permalink:"/docs/pipeline/workflow/workspace/job-processing/execute-hive"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],a={rightToc:p};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},a,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"HDFS\uc5d0 \uc800\uc7a5\ub41c \ud30c\uc77c\uc744 \ub2e4\ub978 HDFS\ub85c \ubcf5\uc0ac\ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[distcp]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.\nProperty \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/distcp01_property.png",alt:"flow060"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"retry",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"max : \uc7ac\uc218\ud589 \ud69f \uc218"),Object(o.b)("li",{parentName:"ul"},"period : \uc7ac\uc218\ud589 \uac04\uaca9"))),Object(o.b)("li",{parentName:"ol"},"argument : \uc778\uc218 \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"kbtest \ud074\ub7ec\uc2a4\ud130\uc758 HR_Retention.csv\ud30c\uc77c\uc744 test1234 \ud074\ub7ec\uc2a4\ud130\uc5d0 ","[distcp]"," \ub178\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubcf5\uc0ac\ud569\ub2c8\ub2e4. "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\uccab \ubc88\uc9f8 arg\uc5d0 HR_Retention.csv\ud30c\uc77c\uc774 \uc800\uc7a5\ub41c path\ub97c, \ub450 \ubc88\uc9f8 arg\uc5d0 target path\ub97c \uc785\ub825",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"source : hdfs://kbtest-accu-hdfs-nn.suka:9000/tmp/test"),Object(o.b)("li",{parentName:"ul"},"target : hdfs://test1234-accu-hdfs-nn.suka:9000/tmp")))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/distcp02_property.png",alt:"flow050"}))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"distcp \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589 \ud6c4 test1234 \ud074\ub7ec\uc2a4\ud130\uc5d0 ./test/HR_retention.csv\ud30c\uc77c \uc0dd\uc131")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/distcp03_result.png",alt:"flow051"}))))}l.isMDXComponent=!0},364:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),b=s(r),f=n,d=b["".concat(c,".").concat(f)]||b[f]||u[f]||i;return r?o.a.createElement(d,p({ref:t},l,{components:r})):o.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=f;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<i;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);