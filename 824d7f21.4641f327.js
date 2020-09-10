(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{230:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),i=r(6),o=(r(0),r(378)),c={title:"bucketizer"},a={id:"pipeline/workflow/workspace/feature-engineering/bucketizer",isDocsHomePage:!1,title:"bucketizer",description:"Definition",source:"@site/docs/pipeline/workflow/workspace/feature-engineering/bucketizer.md",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/bucketizer",sidebar:"pipeline",previous:{title:"oneHotEncoder",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/oneHotEncoder"},next:{title:"PCA",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/PCA"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:p};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"\uc5f0\uc18d\ud615 \ud53c\ucc98\uc758 \uceec\ub7fc\uc744 Bucket\uc73c\ub85c \uad6c\ubd84\ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4. \uc88c\uce21 ","[\ud53c\ucc98\uc5d4\uc9c0\ub2c8\uc5b4\ub9c1]","\uc5d0\uc11c ","[bucketizer]","\ub178\ub4dc\ub97c Designer\ud654\uba74\uc5d0 drag & drop \ud55c \ud6c4 \uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c \ud56d\ubaa9\ubcc4 \ud544\uc694\uc815\ubcf4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.\nComponents \ud328\ub110\uc758 \ud0ed\ubcc4 \ud56d\ubaa9\uc5d0\uc11c ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h4",{id:"property"},"Property"),Object(o.b)("p",null,"\uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c Property\ud0ed\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.  "),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/feature-engineering/bucketizer001.png",alt:"bucketizer001"}))),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"columns : \ubcc0\uacbd\ud560 \uceec\ub7fc\uc744 \uc120\ud0dd\ud558\uace0 \uc0c8\ub85c\uc6b4 \uceec\ub7fc \uba85\uc744 \uc785\ub825",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"target Column : \ub300\uc0c1 \uceec\ub7fc \uc120\ud0dd(\uc22b\uc790\ud615 \ud0c0\uc785 \uceec\ub7fc\ub9cc \uc9c0\uc6d0)"),Object(o.b)("li",{parentName:"ul"},"new Column : \uacb0\uacfc \uceec\ub7fc\uba85 \uc785\ub825"),Object(o.b)("li",{parentName:"ul"},"splits : Bucket\uc758 \ubc94\uc704 \uc124\uc815 ex) 0, 0.5, 1.0"),Object(o.b)("li",{parentName:"ul"},"handleInvalid : \ube44\uc815\uc0c1 \ub370\uc774\ud130 \ucc98\ub9ac\ubc29\uc2dd",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"error"),Object(o.b)("li",{parentName:"ul"},"skip"),Object(o.b)("li",{parentName:"ul"},"keep")))))),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"[ICOS\ubd88\ub7ec\uc624\uae30]",", ","[bucketizer]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131"),Object(o.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/bucketizer002.png"})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"bucketizer\ub97c \uc801\uc6a9\ud560 \ub300\uc0c1 \uceec\ub7fc(target Column)\uc744 'price'\ub85c \uc120\ud0dd, 'new Column'\uba85\uc744 'bucket_price'\uc73c\ub85c \uc785\ub825 \ud6c4 splits\ub97c '0,100000,200000,300000,400000,500000,600000,700000'\uc73c\ub85c \uc785\ub825(price\uac00 0~70\ub9cc \uc0ac\uc774 \uc22b\uc790 \uc774\ubbc0\ub85c), handleInvalid\ub97c 'Skip'\ub85c \uc124\uc815 \ud6c4 \uc2e4\ud589 \uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\uc74c -> \uc0c8 \uceec\ub7fc bucket_price\uac00 \ubc94\uc704\uc5d0 \ub530\ub77c 1.0 ~ 7.0\uc73c\ub85c \ucd94\uac00"),Object(o.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/bucketizer003.png"}))))}u.isMDXComponent=!0},378:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(r),s=n,m=b["".concat(c,".").concat(s)]||b[s]||f[s]||o;return r?i.a.createElement(m,a(a({ref:t},l),{},{components:r})):i.a.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);