(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{263:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(6),i=(r(0),r(366)),a={title:"mlPipeline"},c={id:"pipeline/workflow/workspace/data-processing-advanced/ml-pipeline",title:"mlPipeline",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/data-processing-advanced/ml-pipeline.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/ml-pipeline",sidebar:"pipeline",previous:{title:"codeToMatrix",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/code-to-matrix"},next:{title:"customCode",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/custom-code"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]}],l={rightToc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"ML \ubaa8\ub378\uc744 \ubd88\ub7ec\uc640\uc11c \uc608\uce21 \uacb0\uacfc\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uace0\uae09)]","\ub178\ub4dc \uc911 ","[mlPipeline]","\ub178\ub4dc\ub97c drag & drop \ud569\ub2c8\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(i.b)("h4",{id:"property"},"property"),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"modelPath - ML \ubaa8\ub378 \uacbd\ub85c\ub97c \uc9c0\uc815"),Object(i.b)("li",{parentName:"ol"},"useLatestModel : mlTrain \ub178\ub4dc(\uc2a4\ucf00\uc904)\uc758 \ud559\uc2b5\uacb0\uacfc \ubaa8\ub378 \uc0ac\uc6a9 \uc5ec\ubd80. \uccb4\ud06c\uc2dc mlTrain\ub178\ub4dc\uc758 modelPath\uc640 \ub3d9\uc77c\ud55c \ud3f4\ub354\ub97c \uc120\ud0dd"),Object(i.b)("li",{parentName:"ol"},"overwriteSchema - ML\uacb0\uacfc\ub85c \ub370\uc774\ud130 \uc2a4\ud0a4\ub9c8 \uc800\uc7a5")))}u.isMDXComponent=!0},366:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,b=d["".concat(a,".").concat(f)]||d[f]||s[f]||i;return r?o.a.createElement(b,c({ref:t},l,{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);