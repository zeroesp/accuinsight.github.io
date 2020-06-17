(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(1),o=(r(0),r(364));const c={title:"Rscript"},a={id:"batchpipeline/workflow/workspace/job-processing/r-script",title:"Rscript",description:"### Definition",source:"@site/docs\\batchpipeline\\workflow\\workspace\\job-processing\\r-script.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/r-script",sidebar:"batchpipeline",previous:{title:"Rcode",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/r-code"},next:{title:"serverToHdfs",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/server-to-hdfs"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],i={rightToc:p};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"R\uc2e4\ud589\ud658\uacbd \uad6c\uc131\ub41c \uc6d0\uaca9 \uc11c\ubc84 \ub0b4\uc758 R \ud30c\uc77c\uc744 \uc2e4\ud589\ud55c\ub2e4. ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[Rscript]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow018_rscript_property.png",alt:"flow018"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"appName : \uc571 \uc774\ub984 \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"R \uc2e4\ud589 IP : IP\uc8fc\uc18c \ubc0f PORT(\uc790\ub3d9\uc785\ub825) ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"IP\uc8fc\uc18c : \uc6d0\uaca9\uc11c\ubc84 \uc811\uc18d IP  "),Object(o.b)("li",{parentName:"ul"},"PORT : \uc6d0\uaca9\uc11c\ubc84 \uc811\uc18d PORT"))),Object(o.b)("li",{parentName:"ol"},"user : R\uc11c\ubc84 \uc0ac\uc6a9\uc790 \uc544\uc774\ub514 (\uc790\ub3d9\uc785\ub825)"),Object(o.b)("li",{parentName:"ol"},"password : R \uc11c\ubc84 \uc0ac\uc6a9\uc790 \ud328\uc2a4\uc6cc\ub4dc (\uc790\ub3d9\uc785\ub825)"),Object(o.b)("li",{parentName:"ol"},"\uc6d0\uaca9\uc11c\ubc84 ID : R \uc11c\ubc84 ID (\uc790\ub3d9\uc785\ub825)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"R \uc11c\ubc84 \uc815\ubcf4","[2~5]",'\ub294 "\uc124\uc815"->"\uc6d0\uaca9\uc11c\ubc84\uad00\ub9ac" \uc5d0 \ub4f1\ub85d\ub41c \uc6d0\uaca9\uc11c\ubc84 \ub9ac\uc2a4\ud2b8 \uc911 \uc120\ud0dd\ub41c \uc815\ubcf4\ub85c \uc790\ub3d9 \uc785\ub825\ub41c\ub2e4'),Object(o.b)("li",{parentName:"ul"},'"\ubaa9\ub85d\uc5f4\uae30" \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec \uae30 \ub4f1\ub85d\ub41c \uc6d0\uaca9\uc11c\ubc84\uc815\ubcf4\ub97c \uc801\uc6a9\ud55c\ub2e4.  '))),Object(o.b)("li",{parentName:"ol"},"sourcepath : \uc2e4\ud589\ud560 R \ucf54\ub4dc\uac00 \uc800\uc7a5\ub41c R \ud30c\uc77c path",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\uc6d0\uaca9\uc11c\ubc84\uc758 Filesystem \uc870\ud68c \ubc0f \uc120\ud0dd\uc744 \ud1b5\ud574 \uc2e4\ud589\ud558\uace0\uc790 \ud558\ub294 R \ud30c\uc77c \uacbd\ub85c\ub97c \uc9c0\uc815\ud55c\ub2e4."))),Object(o.b)("li",{parentName:"ol"},"source : \uc2e4\ud589\ub420 R \ucf54\ub4dc \uc870\ud68c",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"6\ubc88 sourcepath \uacbd\ub85c\uc758 R \ucf54\ub4dc \uc870\ud68c\uac00 \uac00\ub2a5\ud558\ub2e4. (\uc790\ub3d9\uc785\ub825, \ud3b8\uc9d1\uae30\ub2a5\uc740 \ubbf8\uc9c0\uc6d0)"))),Object(o.b)("li",{parentName:"ol"},"argument : \uc778\uc218 \uc124\uc815 (R \uc2e4\ud589 command)"),Object(o.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,'\uc22b\uc790\uc5f4\uc744 \ucd9c\ub825\ud558\ub294 rscript\ub97c \uc6d0\uaca9\uc9c0 R \uc11c\ubc84\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \uc608\uc81c\uc774\ub2e4. test.R \uc774\ub780 \uc2a4\ud06c\ub9bd\ud2b8\ub97c R\uc11c\ubc84\uc5d0 \ub4f1\ub85d \ud6c4 "6.sourcepath"\uc5d0 \uc9c0\uc815\ud558\uac70\ub098, "7.source"\uc5d0 \uc9c1\uc811 \ucf54\ub529\ud558\uc5ec \uc2e4\ud589\ud560 \uc218 \uc788\ub2e4. Source Editor \ubc84\ud2bc("7.source" \uc6b0\uce21 \uccab \ubc88\uc9f8 \ubc84\ud2bc) \ud074\ub9ad \uc2dc Editor\uac00 \ud31d\uc5c5\ub418\uba70 \ubcf4\ub2e4 \ud070 \ud654\uba74\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub2e4. '),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\uc5f0\uacb0\uad00\ub9ac\uc5d0\uc11c \uc6d0\uaca9\uc11c\ubc84\ub97c \uc120\ud0dd\ud55c\ub2e4. \uc120\ud0dd\uc2dc 2.R\uc2e4\ud589IP ~ 5.\uc6d0\uaca9\uc11c\ubc84ID\uae4c\uc9c0 \uc790\ub3d9\uc785\ub825\ub41c\ub2e4.\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow053_rscript_property_2.png",alt:"flow053"})))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"rscript\ub97c \uc791\uc131\ud55c\ub2e4. \ub610\ub294 sourcepath\uc5d0\uc11c \uc6d0\uaca9\uc11c\ubc84\uc5d0 \ubbf8\ub9ac \uc0dd\uc131\ud55c rscript\ub97c \uc2e4\ud589\ud55c\ub2e4. "))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow054_rscript_property_ex.png",alt:"flow054"}))))}l.isMDXComponent=!0},364:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,O=s["".concat(a,".").concat(m)]||s[m]||u[m]||c;return r?o.a.createElement(O,p({ref:t},l,{components:r})):o.a.createElement(O,p({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);