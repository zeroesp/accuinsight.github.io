(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{296:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(2),i=t(6),o=(t(0),t(378)),a={title:"missingImputer"},p={id:"pipeline/workflow/workspace/feature-engineering/missingImputer",isDocsHomePage:!1,title:"missingImputer",description:"Definition",source:"@site/docs/pipeline/workflow/workspace/feature-engineering/missingImputer.md",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/missingImputer",sidebar:"pipeline",previous:{title:"restApi",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/restApi"},next:{title:"outlierRemover",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/outlierRemover"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"\uacb0\uce21\uac12 \ub300\uccb4\ub97c \uc218\ud589\ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4. \uc88c\uce21 ","[\ud53c\ucc98\uc5d4\uc9c0\ub2c8\uc5b4\ub9c1]","\uc5d0\uc11c ","[missingImputer]","\ub178\ub4dc\ub97c Designer\ud654\uba74\uc5d0 drag & drop \ud55c \ud6c4 \uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c \ud56d\ubaa9\ubcc4 \ud544\uc694\uc815\ubcf4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.\nComponents \ud328\ub110\uc758 \ud0ed\ubcc4 \ud56d\ubaa9\uc5d0\uc11c ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h4",{id:"property"},"Property"),Object(o.b)("p",null,"\uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c Property\ud0ed\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/feature-engineering/missingImputer001.png",alt:"missingImputer001"}))),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"col : \ub300\uc0c1 \uceec\ub7fc\ub4e4 \uc120\ud0dd(int, float, double \ud0c0\uc785\uceec\ub7fc\ub9cc \uc9c0\uc6d0)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Suggestion : missing Value Column \uc790\ub3d9\ucc3e\uae30"))),Object(o.b)("li",{parentName:"ol"},"strategy : mean, median, mode, constant \uc911 \uc120\ud0dd"),Object(o.b)("li",{parentName:"ol"},"missingValue : missing value \ub300\uccb4\uac12(1.0\uc744 \uc785\ub825 \uc2dc \ud0c0\uac9f \uceec\ub7fc \uac12 \uc911 1.0\uc744 \ubaa8\ub450 missing value\ub85c \uc778\uc2dd\ud568)"),Object(o.b)("li",{parentName:"ol"},"constValue : constant strategy\uc758 \uacbd\uc6b0 missing value\ub97c \ub300\uccb4\ud560 \ub370\uc774\ud130")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"[S3\ubd88\ub7ec\uc624\uae30]",", ","[missingImputer]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131"),Object(o.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/missingImputer002.png"})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\uacb0\uce21\uac12 \ub300\uccb4\ub97c \uc801\uc6a9\ud560 \ub300\uc0c1 \uceec\ub7fc(col)\uc744 'pageNo'\ub85c \uc120\ud0dd \ud6c4, strategy(\ucc44\uc6b8\ubc29\ubc95)\ub97c 'mean'\uc73c\ub85c \uc120\ud0dd \ud6c4 \uc2e4\ud589 \uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\uc74c -> pageNo\uceec\ub7fc\uc758 \uacb0\uce21\uac12\uc744 \ud3c9\uade0\uac12\uc73c\ub85c \ucc44\uc6c0 "),Object(o.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/missingImputer003.png"}))))}s.isMDXComponent=!0},378:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),s=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,g=u["".concat(a,".").concat(b)]||u[b]||m[b]||o;return t?i.a.createElement(g,p(p({ref:n},l),{},{components:t})):i.a.createElement(g,p({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);