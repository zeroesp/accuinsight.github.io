(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));var r=n(1),a=(n(0),n(364));const c={title:"withColumn"},o={id:"pipeline/workflow/workspace/data-processing-basic/with-column",title:"withColumn",description:"### Definition\r",source:"@site/docs\\pipeline\\workflow\\workspace\\data-processing-basic\\with-column.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/with-column",sidebar:"pipeline",previous:{title:"unionAll",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/union-all"},next:{title:"addConditionCol",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/add-condition-col"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:l};function i({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"definition"},"Definition"),Object(a.b)("p",null,"\uc0c8\ub85c\uc6b4 \uceec\ub7fc\uc744 \ucd94\uac00\ud558\uac70\ub098, \ud55c \uceec\ub7fc\uc758 \uac12\uc744 \ub2e4\ub978 \uac12\uc73c\ub85c \ubcc0\uacbd\ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",Object(a.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[withColumn]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4."),Object(a.b)("h3",{id:"set"},"Set"),Object(a.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(a.b)("h4",{id:"property"},"Property"),Object(a.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic072_withcolumn_property.png",alt:"prebasic072"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"expresstion : \uc778\ub371\uc2a4\uceec\ub7fc\uc744 \ucd94\uac00\ud558\uac70\ub098, \uceec\ub7fc\uac04 \uc5f0\uc0b0\uacb0\uacfc\ub97c \uc800\uc7a5\ud560 \uc2e0\uaddc\uceec\ub7fc \ucd94\uac00 ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"selectType : index, column, numeric, const, custom \uc635\uc158 \uc120\ud0dd(\uc635\uc158\ubcc4 \uc785\ub825 \ud56d\ubaa9 \uc0c1\uc774)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"index : \ubaa9\ub85d\uc5d0\uc11c \uc9c0\uc815\ud55c \uceec\ub7fc\uac12\uc758 \uc778\ub371\uc2a4\ub97c \uc124\uc815\ud558\uc5ec \uc2e0\uaddc \uceec\ub7fc\uc5d0 \uc800\uc7a5 "),Object(a.b)("li",{parentName:"ul"},"column : \uceec\ub7fc 2\uac1c\ub97c \uc120\ud0dd\ud558\uace0, \uceec\ub7fc \uac04 \uc0ac\uce59\uc5f0\uc0b0 \uacb0\uacfc\ub97c \uc2e0\uaddc \uceec\ub7fc\uc5d0 \uc800\uc7a5 "),Object(a.b)("li",{parentName:"ul"},"numeric : \uceec\ub7fc 1\uac1c\uc640 \uace0\uc815 \uac12\uacfc\uc758 \uc0ac\uce59\uc5f0\uc0b0 \uacb0\uacfc\ub97c \uc2e0\uaddc \uceec\ub7fc\uc5d0 \uc800\uc7a5 "),Object(a.b)("li",{parentName:"ul"},"const : \ud2b9\uc815 \uace0\uc815 \ubb38\uc790\uc5f4 \ucd94\uac00"),Object(a.b)("li",{parentName:"ul"},"custom : selectType\uc5d0\uc11c \uc218\ud589\ud560 \uc218 \uc5c6\ub294 \ucee4\uc2a4\ud140 \uc791\uc5c5\uacb0\uacfc\ub97c \uc2e0\uaddc\uceec\ub7fc\uc5d0 \uc800\uc7a5")))))),Object(a.b)("h4",{id:"selecttype-\ubcc4-\uc635\uc158"},"selectType \ubcc4 \uc635\uc158"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"index \uc120\ud0dd \uc2dc targetColumn, newColumn \uc785\ub825\ud558\ub3c4\ub85d \ud654\uba74 \ubcc0\uacbd\ub418\uba70, targetColumn\uc5d0 \uc120\ud0dd\ud55c \uceec\ub7fc\uc758 index\ub97c newColumn\uc5d0 \uc800\uc7a5 ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"targetColumn : \ubaa9\ub85d \uc911 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd"),Object(a.b)("li",{parentName:"ul"},"newColumn : \uc2e0\uaddc \uceec\ub7fc \uba85 \uc785\ub825"))),Object(a.b)("li",{parentName:"ol"},"column \uc120\ud0dd \uc2dc col1, operator, col2, newColumn \uc785\ub825\ud558\ub3c4\ub85d \ud654\uba74 \ubcc0\uacbd\ub418\uba70, col1, col2 \uac04 \uc0ac\uce59\uc5f0\uc0b0 \uacb0\uacfc\ub97c newColumn\uc5d0 \uc800\uc7a5 ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"col1 : \ubaa9\ub85d \uc911 \uccab \ubc88\uc9f8 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd"),Object(a.b)("li",{parentName:"ul"},"operator : \uc0ac\uce59\uc5f0\uc0b0 (+, -, *, /) \uc120\ud0dd"),Object(a.b)("li",{parentName:"ul"},"col2 : \ubaa9\ub85d \uc911 \ub450 \ubc88\uc9f8 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd"),Object(a.b)("li",{parentName:"ul"},"newColumn : \uc2e0\uaddc \uceec\ub7fc \uba85 \uc785\ub825"))),Object(a.b)("li",{parentName:"ol"},"numeric \uc120\ud0dd \uc2dc col1, operator, col2, newColumn \uc785\ub825\ud558\ub3c4\ub85d \ud654\uba74 \ubcc0\uacbd\ub418\uba70, col1, value\uc5d0 \uc785\ub825\ud558\ub294 \uace0\uc815\uac12 \uac04 \uc0ac\uce59\uc5f0\uc0b0 \uacb0\uacfc\ub97c newColumn\uc5d0 \uc800\uc7a5 ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"col1 : \ubaa9\ub85d \uc911 \uccab \ubc88\uc9f8 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd"),Object(a.b)("li",{parentName:"ul"},"operator : \uc0ac\uce59\uc5f0\uc0b0 (+, -, *, /) \uc120\ud0dd"),Object(a.b)("li",{parentName:"ul"},"value : \uc0ac\uce59\uc5f0\uc0b0\uc744 \uc704\ud55c \uace0\uc815 \uac12"),Object(a.b)("li",{parentName:"ul"},"newColumn : \uc2e0\uaddc \uceec\ub7fc \uba85 \uc785\ub825 "))),Object(a.b)("li",{parentName:"ol"},"const \uc120\ud0dd \uc2dc newColumn, constantValue, valueType \uc785\ub825\ud558\ub3c4\ub85d \ud654\uba74 \ubcc0\uacbd\ub418\uba70, constantValue\uc5d0 \uc785\ub825\ud558\ub294 \uace0\uc815 \ubb38\uc790\uc5f4 \ub610\ub294 \uc22b\uc790\ub97c newColumn\uc5d0 \uc800\uc7a5 ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"newColumn : \uc2e0\uaddc \uceec\ub7fc \uba85"),Object(a.b)("li",{parentName:"ul"},"constantValue : \uace0\uc815 \ubb38\uc790\uc5f4, \uc22b\uc790"),Object(a.b)("li",{parentName:"ul"},"valueType : \uceec\ub7fc \ub370\uc774\ud130 \ud0c0\uc785 (String, Number)"))),Object(a.b)("li",{parentName:"ol"},"custom \uc120\ud0dd \uc2dc customExpr, newColumn \uc785\ub825\ud558\ub3c4\ub85d \ud654\uba74 \ubcc0\uacbd\ub418\uba70, customExpr\uc5d0 \uc785\ub825\ud55c \uc5f0\uc0b0\uacb0\uacfc\ub97c newColumn\uc5d0 \uc800\uc7a5 ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"customExpr : index, column, numeric, const\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 custom \uc5f0\uc0b0\uc2dd \uc785\ub825"),Object(a.b)("li",{parentName:"ul"},"newColumn : \uc2e0\uaddc \uceec\ub7fc \uba85 \uc785\ub825 ")))),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"[withColumn]","\ub178\ub4dc\uc758 selectType\ubcc4 \uc791\uc5c5\uc2e4\ud589\uacb0\uacfc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4.",Object(a.b)("br",{parentName:"p"}),"\n","1. ","[HDFS\ubd88\ub7ec\uc624\uae30]",", ","[withColumn]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131",Object(a.b)("br",{parentName:"p"}),"\n","",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic073_withcolumn_exampleworkflow.png",alt:"prebasic073"})),Object(a.b)("br",{parentName:"p"}),"\n","2. ","[withColumn]"," \ub178\ub4dc\uc758 selectType\uc744 index\ub85c \uc120\ud0dd \ubc0f Property \uc785\ub825 \ud6c4 snapshot \ud074\ub9ad",Object(a.b)("br",{parentName:"p"}),"\n","",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic074_withcolumn_exampleworkflow_index.png",alt:"prebasic074"})),"\n3. ","[withColumn]"," \ub178\ub4dc\uc758 selectType\uc744 column\uc73c\ub85c \uc120\ud0dd \ubc0f Property \uc785\ub825 \ud6c4 snapshot \ud074\ub9ad",Object(a.b)("br",{parentName:"p"}),"\n","",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic075_withcolumn_exampleworkflow_column.png",alt:"prebasic075"})),Object(a.b)("br",{parentName:"p"}),"\n","4. ","[withColumn]"," \ub178\ub4dc\uc758 selectType\uc744 numeric\uc73c\ub85c \uc120\ud0dd \ubc0f Property \uc785\ub825 \ud6c4 snapshot \ud074\ub9ad",Object(a.b)("br",{parentName:"p"}),"\n","",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic076_withcolumn_exampleworkflow_numeric.png",alt:"prebasic076"})),Object(a.b)("br",{parentName:"p"}),"\n","5. ","[withColumn]"," \ub178\ub4dc\uc758 selectType\uc744 const\uc73c\ub85c \uc120\ud0dd \ubc0f Property \uc785\ub825 \ud6c4 snapshot \ud074\ub9ad",Object(a.b)("br",{parentName:"p"}),"\n","",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic077_withcolumn_exampleworkflow_const.png",alt:"prebasic077"})),Object(a.b)("br",{parentName:"p"}),"\n","6. ","[withColumn]"," \ub178\ub4dc\uc758 selectType\uc744 custom\uc73c\ub85c \uc120\ud0dd \ubc0f Property \uc785\ub825 \ud6c4 snapshot \ud074\ub9ad",Object(a.b)("br",{parentName:"p"}),"\n","",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic078_withcolumn_exampleworkflow_custom.png",alt:"prebasic078"})),"  "))}i.isMDXComponent=!0},364:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return w}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},m=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=b(n),s=r,w=m["".concat(o,".").concat(s)]||m[s]||u[s]||c;return n?a.a.createElement(w,l({ref:t},i,{components:n})):a.a.createElement(w,l({ref:t},i))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);