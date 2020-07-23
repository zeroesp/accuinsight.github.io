(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{338:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return s}));var o=r(1),n=r(6),i=(r(0),r(366)),c={title:"hdfsToIcos"},p={id:"pipeline/workflow/workspace/job-processing/hdfs-to-icos",title:"hdfsToIcos",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/job-processing/hdfs-to-icos.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/hdfs-to-icos",sidebar:"pipeline",previous:{title:"hiveToHdfs",permalink:"/docs/pipeline/workflow/workspace/job-processing/hive-to-hdfs"},next:{title:"hdfsToS3",permalink:"/docs/pipeline/workflow/workspace/job-processing/hdfs-to-s3"}},a=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],l={rightToc:a};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"HDFS \ud30c\uc77c/\ud3f4\ub354\ub97c ICOS\uc5d0 \ubcf5\uc0ac \ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4.",Object(i.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[hdfsToIcos]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.\nProperty \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(i.b)("h4",{id:"property"},"property"),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/hdfstoicos01_property.png",alt:"hdfstoicos01"}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"HDFS \ud30c\uc77c \uacbd\ub85c(\ubd88\ub7ec\uc624\uae30) : \uc774\ub3d9 \ub300\uc0c1 \ud30c\uc77c\uc758 HDFS \uacbd\ub85c"),Object(i.b)("li",{parentName:"ol"},"ICOS \ud30c\uc77c \uacbd\ub85c(\uc800\uc7a5\uacbd\ub85c) : \uc800\uc7a5\ud560 \ud30c\uc77c\uc758 ICOS \uacbd\ub85c \uc120\ud0dd "),Object(i.b)("li",{parentName:"ol"},"ETL \uacb0\uacfc\ud30c\uc77c \uc5ec\ubd80 : ETL \ub178\ub4dc\ub97c \ud1b5\ud574 \uc0dd\uc131\ub41c \ubaa8\ub4e0 \ud30c\uc77c\uc744 \ub300\uc0c1\uc73c\ub85c \ud560\uc9c0 \uc5ec\ubd80",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"HDFS \ud30c\uc77c\uc744 \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825\ud55c\uacbd\uc6b0, \ud558\uc704 part*\ud574\ub2f9\ud30c\uc77c \ubaa8\ub450 \uc774\ub3d9"),Object(i.b)("li",{parentName:"ul"},"hdfs://OOO.OOO.OOO.OOO:8020/user/sample_user/source_data/"))),Object(i.b)("li",{parentName:"ol"},"Credential : ICOS \uc5d1\uc138\uc2a4 \uc815\ubcf4(ICOS \ud30c\uc77c\uacbd\ub85c \uc120\ud0dd \uc2dc \uc790\ub3d9 \uc124\uc815\ub428) ")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"hdfs\uc5d0 \uc800\uc7a5\ub41c csv\ud30c\uc77c\uc744 icos\ub85c \uc774\ub3d9\ud558\ub294 \uc608\uc81c\uc785\ub2c8\ub2e4. "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"setting \ud328\ub110\uc5d0\uc11c \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589 \ud074\ub7ec\uc2a4\ud130 \uc120\ud0dd ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"[1.HDFS \ud30c\uc77c \uacbd\ub85c(\ubd88\ub7ec\uc624\uae30)]"," property \uc124\uc815\n",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/hdfstoicos02_hdfs_path.png",alt:"hdfstoicos02"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"[2.ICOS \ud30c\uc77c \uacbd\ub85c(\uc800\uc7a5\uacbd\ub85c)]"," property \uc124\uc815\n",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/hdfstoicos03_icos_path.png",alt:"hdfstoicos03"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"[3.ETL \uacb0\uacfc\ud30c\uc77c\uc5ec\ubd80]","\ub294 FALSE\ub85c \uc120\ud0dd, ","[2.ICOS \ud30c\uc77c \uacbd\ub85c(\uc800\uc7a5\uacbd\ub85c)]"," \uc124\uc815\ud558\uba74 ","[4.credential]"," \ud56d\ubaa9\uc740 \uc790\ub3d9 \uc124\uc815\n",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/hdfstoicos04_property.png",alt:"hdfstoicos04"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc800\uc7a5 \ubc0f \uc2e4\ud589 \ud6c4 ICOS \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 csv\ud30c\uc77c \uc800\uc7a5 \ud655\uc778\n",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/hdfstoicos05_result.png",alt:"hdfstoicos05"})),"\n"))),Object(i.b)("h3",{id:"troubleshooting"},"Troubleshooting"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"ICOS \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc2a4\ud1a0\ub9ac\uc9c0 \ubaa9\ub85d\uc774 \uc870\ud68c\ub418\uc9c0 \uc54a\uc744 \uacbd\uc6b0\n",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/hdfstoicos06_icosbrowser_error.png",alt:"hdfstoicos06"})),Object(i.b)("br",{parentName:"p"}),"\n","- dpcore > core-module-common config\uc5d0\uc11c ","[icos.config.use=false]"," \uc778\uc9c0 \ud655\uc778",Object(i.b)("br",{parentName:"p"}),"\n","- ","[icos.config.use=true]","\ub85c \uc124\uc815\uc2dc ICOS \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc2a4\ud1a0\ub9ac\uc9c0 \ubaa9\ub85d \ud655\uc778 \uac00\ub2a5",Object(i.b)("br",{parentName:"p"}),"\n","- false \uc124\uc815\uc2dc true\ub85c \ubcc0\uacbd \ud6c4 core-module-common \ubaa8\ub4c8 \uc7ac\ubc30\ud3ec \ud544\uc694  ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"ICOS \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc2a4\ud1a0\ub9ac\uc9c0 \ubaa9\ub85d\uc774 \uc870\ud68c\ub418\uc9c0 \uc54a\uc744 \uacbd\uc6b0\n",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/hdfstoicos07_icosbrowser_bucketerror.png",alt:"hdfstoicos07"}))))))}s.isMDXComponent=!0},366:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},b=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),b=s(r),f=o,u=b["".concat(c,".").concat(f)]||b[f]||O[f]||i;return r?n.a.createElement(u,p({ref:t},l,{components:r})):n.a.createElement(u,p({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<i;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);