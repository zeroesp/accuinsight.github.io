(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{349:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),o=(n(0),n(364));const i={title:"timeMove"},a={id:"pipeline/workflow/workspace/data-processing-advanced/time-move",title:"timeMove",description:"### Definition\r",source:"@site/docs\\pipeline\\workflow\\workspace\\data-processing-advanced\\time-move.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/time-move",sidebar:"pipeline",previous:{title:"SQL",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/sql"},next:{title:"missingImputer",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/missingImputer"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]}],p={rightToc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"timestamp \uceec\ub7fc\uc758 \uc2dc\uac04\uc744 \uc124\uc815\ub41c \uac12\ub9cc\ud07c \uc774\ub3d9\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uace0\uae09)]","\ub178\ub4dc \uc911 ","[timeMove]","\ub178\ub4dc\ub97c drag & drop \ud55c\ub2e4."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/timeMove.png",alt:"timeMove"}))),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-advanced/preadv025_timemove_property.png",alt:"preadv025"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"targetColumn\t: \ubaa9\ub85d \uc911 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd(\uc120\ud0dd \uceec\ub7fc\uc740 timestamp data type\uc774\uc5b4\uc57c \ud568)"),Object(o.b)("li",{parentName:"ol"},"newColumn : \uc2e0\uaddc \uceec\ub7fc \uba85"),Object(o.b)("li",{parentName:"ol"},"time\t: \uc774\ub3d9\ud560 \uc2dc\uac04(ex. 3600(1\uc2dc\uac04 \ud6c4), -3600(1\uc2dc\uac04 \uc804)")))}l.isMDXComponent=!0},364:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,b=s["".concat(a,".").concat(d)]||s[d]||m[d]||i;return n?o.a.createElement(b,c({ref:t},l,{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);