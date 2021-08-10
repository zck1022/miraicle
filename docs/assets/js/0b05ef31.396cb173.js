(self.webpackChunkmiraicle_document=self.webpackChunkmiraicle_document||[]).push([[291],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return o},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),N=d(a),u=r,c=N["".concat(p,".").concat(u)]||N[u]||k[u]||l;return a?n.createElement(c,i(i({ref:t},o),{},{components:a})):n.createElement(c,i({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=N;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},1129:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return o},default:function(){return N}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=["components"],m={sidebar_position:5},p="\u6d88\u606f\u94fe",d={unversionedId:"guides/message-chain",id:"guides/message-chain",isDocsHomePage:!1,title:"\u6d88\u606f\u94fe",description:"\u6211\u4eec\u5df2\u7ecf\u6210\u529f\u5730\u8ba9 bot \u53d1\u9001\u6587\u5b57\u6d88\u606f\u3002\u90a3\u4e48\uff0c\u5982\u4f55\u8ba9 bot \u53d1\u9001\u5e26\u6709\u8868\u60c5\u3001\u56fe\u7247\u7684\u66f4\u52a0\u590d\u6742\u7684\u6d88\u606f\u5462\uff1f\u770b\u5b8c\u672c\u8282\u4e4b\u540e\uff0c\u4f60\u4f1a\u5f97\u5230\u7b54\u6848\u3002",source:"@site/docs/guides/5-message-chain.md",sourceDirName:"guides",slug:"/guides/message-chain",permalink:"/miraicle/docs/guides/message-chain",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/5-message-chain.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guides",previous:{title:"\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f",permalink:"/miraicle/docs/guides/what-happened"},next:{title:"\u9879\u76ee\u7ed3\u6784",permalink:"/miraicle/docs/guides/write-plugins/project-structure"}},o=[{value:"\u6587\u5b57 (Plain)",id:"\u6587\u5b57-plain",children:[]},{value:"At",id:"at",children:[]},{value:"At \u5168\u4f53\u6210\u5458 (AtAll)",id:"at-\u5168\u4f53\u6210\u5458-atall",children:[]},{value:"\u8868\u60c5 (Face)",id:"\u8868\u60c5-face",children:[]},{value:"\u56fe\u7247 (Image)",id:"\u56fe\u7247-image",children:[]},{value:"\u95ea\u7167 (FlashImage)",id:"\u95ea\u7167-flashimage",children:[]},{value:"\u8bed\u97f3 (Voice)",id:"\u8bed\u97f3-voice",children:[]},{value:"Xml",id:"xml",children:[]},{value:"Json",id:"json",children:[]},{value:"App",id:"app",children:[]},{value:"Poke",id:"poke",children:[]},{value:"\u9ab0\u5b50 (Dice)",id:"\u9ab0\u5b50-dice",children:[]},{value:"\u6587\u4ef6 (File)",id:"\u6587\u4ef6-file",children:[]},{value:"mirai \u7801 (MiraiCode)",id:"mirai-\u7801-miraicode",children:[]}],k={toc:o};function N(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6d88\u606f\u94fe"},"\u6d88\u606f\u94fe"),(0,l.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u6210\u529f\u5730\u8ba9 bot \u53d1\u9001\u6587\u5b57\u6d88\u606f\u3002\u90a3\u4e48\uff0c\u5982\u4f55\u8ba9 bot \u53d1\u9001\u5e26\u6709\u8868\u60c5\u3001\u56fe\u7247\u7684\u66f4\u52a0\u590d\u6742\u7684\u6d88\u606f\u5462\uff1f\u770b\u5b8c\u672c\u8282\u4e4b\u540e\uff0c\u4f60\u4f1a\u5f97\u5230\u7b54\u6848\u3002"),(0,l.kt)("p",null,"\u53ef\u80fd\u4f60\u6ce8\u610f\u5230\u4e86\uff0c\u4e0a\u4e00\u8282\u4e2d\u5df2\u7ecf\u63d0\u5230\u4e86\u201c\u6d88\u606f\u94fe\u201d\u8fd9\u4e2a\u540d\u8bcd\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"mirai")," \u7684\u8bbe\u8ba1\u4e2d\uff0c\u6d88\u606f\u4e0d\u662f\u4e00\u4e32\u5b57\u7b26\uff0c\u800c\u662f\u7531\u6587\u5b57\u3001\u8868\u60c5\u3001\u56fe\u7247\u7b49\u6d88\u606f\u5143\u7d20\u7ec4\u6210\u7684\u5217\u8868\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"miraicle")," \u4e5f\u6cbf\u7528\u4e86\u8fd9\u6837\u7684\u8bbe\u8ba1\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"msg.chain")," \u6765\u8bbf\u95ee\u6d88\u606f\u5bf9\u8c61\u5bf9\u5e94\u7684\u6d88\u606f\u94fe\uff0c\u5b83\u662f\u4e00\u4e2a\u88c5\u6709\u5404\u79cd\u6d88\u606f\u5143\u7d20\u7684\u5217\u8868\uff0c\u8fd9\u4e9b\u6d88\u606f\u5143\u7d20\u5747\u7ee7\u627f\u81ea ",(0,l.kt)("inlineCode",{parentName:"p"},"Element"),"\u3002"),(0,l.kt)("p",null,"\u5f53\u4f60\u8ba9 bot \u53d1\u9001\u6d88\u606f\u65f6\uff0c\u4e5f\u53ef\u4ee5\u6784\u9020\u4e00\u4e2a\u8fd9\u6837\u7684\u5217\u8868\u3002\u8ba9\u6211\u4eec\u6765\u628a\u4e0a\u4e00\u8282\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"hello_to_group")," \u51fd\u6570\u6539\u5199\u4e00\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@miraicle.Mirai.receiver('GroupMessage')\ndef hello_to_group(bot: miraicle.Mirai, msg: miraicle.GroupMessage):\n    if msg.plain in ['Hello', 'hello']:\n        bot.send_group_msg(group=msg.group, msg=[miraicle.Plain('Hello world!'),\n                                                 miraicle.Face().from_face_id(74),\n                                                 miraicle.At(qq=msg.sender)])\n")),(0,l.kt)("p",null,"\u6211\u4eec\u4e0d\u5e0c\u671b bot \u5bf9\u7fa4\u91cc\u6bcf\u4e00\u6761\u6d88\u606f\u90fd\u505a\u56de\u5e94\uff0c\u9020\u6210\u5237\u5c4f\uff0c\u6240\u4ee5\u6211\u4eec\u4f7f\u7528\u4e86\u4e00\u6761\u9009\u62e9\u8bed\u53e5\u3002\u73b0\u5728\uff0c\u53ea\u6709\u5f53\u6d88\u606f\u7684\u6587\u5b57\u5185\u5bb9\u4e3a 'Hello' \u6216 'hello' \u7684\u65f6\u5019\uff0cbot \u624d\u4f1a\u54cd\u5e94\u3002"),(0,l.kt)("p",null,"\u8fd0\u884c\u7a0b\u5e8f\uff0c\u8bd5\u7740\u5728\u7fa4\u91cc\u5411 bot \u95ee\u597d\u3002bot \u4f1a\u53d1\u9001\u5e26\u6709\u8868\u60c5\u7684 'Hello world!'\uff0c\u5e76 at \u4f60\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u5bf9\u5404\u79cd\u6d88\u606f\u5143\u7d20\u8fdb\u884c\u4ecb\u7ecd\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u6d88\u606f\u5143\u7d20\uff0c\u6784\u9020\u66f4\u52a0\u590d\u6742\u7684\u6d88\u606f\u94fe\u3002"),(0,l.kt)("h2",{id:"\u6587\u5b57-plain"},"\u6587\u5b57 (Plain)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"text")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")))),(0,l.kt)("p",null,"\u6784\u9020\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"miraicle.Plain('Hello world!')\n")),(0,l.kt)("h2",{id:"at"},"At"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"qq")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"at \u7684\u7fa4\u5458\u7684 QQ \u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"display")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"at \u65f6\u663e\u793a\u7684\u6587\u5b57\uff0c\u53ef\u9009\uff0c\u4ec5\u63a5\u6536\u6d88\u606f\u65f6\u6709\u6548\uff1b\u53d1\u9001\u6d88\u606f\u65f6\u65e0\u6548\uff0c\u81ea\u52a8\u663e\u793a\u7fa4\u540d\u7247")))),(0,l.kt)("p",null,"\u6784\u9020\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"miraicle.At('Hello world!')\n")),(0,l.kt)("h2",{id:"at-\u5168\u4f53\u6210\u5458-atall"},"At \u5168\u4f53\u6210\u5458 (AtAll)"),(0,l.kt)("p",null,"\u6784\u9020\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"miraicle.AtAll()\n")),(0,l.kt)("h2",{id:"\u8868\u60c5-face"},"\u8868\u60c5 (Face)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"face_id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"QQ \u8868\u60c5\u7f16\u53f7\uff0c\u53ef\u9009\uff0c\u4f18\u5148\u9ad8\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"name"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"QQ \u8868\u60c5\u540d\u79f0\uff0c\u53ef\u9009")))),(0,l.kt)("p",null,"\u6784\u9020\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"miraicle.Face(face_id=74)\nmiraicle.Face(name='\u592a\u9633')\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Face")," \u7c7b\u63d0\u4f9b\u7684\u9759\u6001\u5de5\u5382\u65b9\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"from_face_id")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"from_name")," \u6765\u6784\u9020 ",(0,l.kt)("inlineCode",{parentName:"p"},"Face")," \u5bf9\u8c61\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"miraicle.Face.from_face_id(74)\nmiraicle.Face.from_name('\u592a\u9633')\n")),(0,l.kt)("h2",{id:"\u56fe\u7247-image"},"\u56fe\u7247 (Image)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684\u8def\u5f84\uff0c\u53d1\u9001\u672c\u5730\u56fe\u7247\uff0c\u76f8\u5bf9\u8def\u5f84\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"data\\net.mamoe.mirai-api-http\\images"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"url")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"url"),"\uff0c\u53d1\u9001\u65f6\u53ef\u4f5c\u7f51\u7edc\u56fe\u7247\u7684\u94fe\u63a5\uff1b\u63a5\u6536\u65f6\u4e3a\u817e\u8baf\u56fe\u7247\u670d\u52a1\u5668\u7684\u94fe\u63a5\uff0c\u53ef\u7528\u4e8e\u56fe\u7247\u4e0b\u8f7d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image_id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"image_id"),"\uff0c\u7fa4\u56fe\u7247\u4e0e\u597d\u53cb\u56fe\u7247\u683c\u5f0f\u4e0d\u540c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"base64")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u662f ",(0,l.kt)("inlineCode",{parentName:"td"},"bytes")," \u5219\u4e3a\u56fe\u7247\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"base64")," \u7f16\u7801\uff0c\u5982\u679c\u662f ",(0,l.kt)("inlineCode",{parentName:"td"},"str")," \u5219\u4e3a\u56fe\u7247\u8def\u5f84\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"miraicle")," \u4f1a\u8bfb\u53d6\u56fe\u7247\u5e76\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"td"},"base64")," \u7684\u5f62\u5f0f\u7f16\u7801\uff1b\u63a5\u6536\u65f6\u4e3a\u7a7a")))),(0,l.kt)("p",null,"\u6784\u9020\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"miraicle.Image(path='a.png')                # \u8be5\u6587\u4ef6\u5728 `data\\net.mamoe.mirai-api-http\\images` \u76ee\u5f55\u4e0b\nmiraicle.Image(url='https://github.com/mamoe/mirai/blob/dev/docs/mirai.png')    # \u53d1\u9001\u7f51\u7edc\u56fe\u7247\nmiraicle.Image(url=r'file:\\\\\\D:\\b.gif')     # \u53d1\u9001\u672c\u5730\u56fe\u7247\uff0c\u53ea\u80fd\u7528\u7edd\u5bf9\u8def\u5f84\uff0c\u524d\u7f00 `file:\\\\\\` \u4e0d\u53ef\u7701\u7565\nmiraicle.Image(image_id='{B407F708-A2C6-A506-3420-98DF7CAC4A57}.jpg')           # \u4f7f\u7528 image_id \u53d1\u9001\u56fe\u7247\nmiraicle.Image(base64=base64.b64encode(open('c.png', 'rb').read()))             # \u4f7f\u7528 base64 \u53d1\u9001\u56fe\u7247\nmiraicle.Image(base64='c.png')              # miraicle \u8bfb\u53d6\u56fe\u7247\u5e76\u4ee5 base64 \u7684\u5f62\u5f0f\u7f16\u7801\u53d1\u9001\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")," \u7c7b\u63d0\u4f9b\u7684\u9759\u6001\u5de5\u5382\u65b9\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"from_file"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"from_url"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"from_id")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"from_base64")," \u6765\u6784\u9020 ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")," \u5bf9\u8c61\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"miraicle.Image.from_file('a.jpg')\nmiraicle.Image.from_url('https://github.com/mamoe/mirai/blob/dev/docs/mirai.png')\nmiraicle.Image.from_url(r'file:\\\\\\D:\\b.gif')\nmiraicle.Image.from_id('{B407F708-A2C6-A506-3420-98DF7CAC4A57}.jpg')\nmiraicle.Image.from_base64(base64.b64encode(open('c.png', 'rb').read()))\nmiraicle.Image.from_base64('c.png')\n")),(0,l.kt)("h2",{id:"\u95ea\u7167-flashimage"},"\u95ea\u7167 (FlashImage)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684\u8def\u5f84\uff0c\u53d1\u9001\u672c\u5730\u56fe\u7247\uff0c\u76f8\u5bf9\u8def\u5f84\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"data\\net.mamoe.mirai-api-http\\images"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"url")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"url"),"\uff0c\u53d1\u9001\u65f6\u53ef\u4f5c\u7f51\u7edc\u56fe\u7247\u7684\u94fe\u63a5\uff1b\u63a5\u6536\u65f6\u4e3a\u817e\u8baf\u56fe\u7247\u670d\u52a1\u5668\u7684\u94fe\u63a5\uff0c\u53ef\u7528\u4e8e\u56fe\u7247\u4e0b\u8f7d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image_id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"image_id"),"\uff0c\u7fa4\u56fe\u7247\u4e0e\u597d\u53cb\u56fe\u7247\u683c\u5f0f\u4e0d\u540c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"base64")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u662f ",(0,l.kt)("inlineCode",{parentName:"td"},"bytes")," \u5219\u4e3a\u56fe\u7247\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"base64")," \u7f16\u7801\uff0c\u5982\u679c\u662f ",(0,l.kt)("inlineCode",{parentName:"td"},"str")," \u5219\u4e3a\u56fe\u7247\u8def\u5f84\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"miraicle")," \u4f1a\u8bfb\u53d6\u56fe\u7247\u5e76\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"td"},"base64")," \u7684\u5f62\u5f0f\u7f16\u7801\uff1b\u63a5\u6536\u65f6\u4e3a\u7a7a")))),(0,l.kt)("p",null,"\u6784\u9020\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"miraicle.FlashImage(path='a.png')                # \u8be5\u6587\u4ef6\u5728 `data\\net.mamoe.mirai-api-http\\images` \u76ee\u5f55\u4e0b\nmiraicle.FlashImage(url='https://github.com/mamoe/mirai/blob/dev/docs/mirai.png')    # \u53d1\u9001\u7f51\u7edc\u56fe\u7247\nmiraicle.FlashImage(url=r'file:\\\\\\D:\\b.gif')     # \u53d1\u9001\u672c\u5730\u56fe\u7247\uff0c\u53ea\u80fd\u7528\u7edd\u5bf9\u8def\u5f84\uff0c\u524d\u7f00 `file:\\\\\\` \u4e0d\u53ef\u7701\u7565\nmiraicle.FlashImage(image_id='{B407F708-A2C6-A506-3420-98DF7CAC4A57}.jpg')           # \u4f7f\u7528 image_id \u53d1\u9001\u56fe\u7247\nmiraicle.FlashImage(base64=base64.b64encode(open('c.png', 'rb').read()))             # \u4f7f\u7528 base64 \u53d1\u9001\u56fe\u7247\nmiraicle.FlashImage(base64='c.png')              # miraicle \u8bfb\u53d6\u56fe\u7247\u5e76\u4ee5 base64 \u7684\u5f62\u5f0f\u7f16\u7801\u53d1\u9001\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"FlashImage")," \u7c7b\u63d0\u4f9b\u7684\u9759\u6001\u5de5\u5382\u65b9\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"from_file"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"from_url"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"from_id")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"from_base64")," \u6765\u6784\u9020 ",(0,l.kt)("inlineCode",{parentName:"p"},"FlashImage")," \u5bf9\u8c61\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"miraicle.FlashImage.from_file('a.jpg')\nmiraicle.FlashImage.from_url('https://github.com/mamoe/mirai/blob/dev/docs/mirai.png')\nmiraicle.FlashImage.from_url(r'file:\\\\\\D:\\b.gif')\nmiraicle.FlashImage.from_id('{B407F708-A2C6-A506-3420-98DF7CAC4A57}.jpg')\nmiraicle.FlashImage.from_base64(base64.b64encode(open('c.png', 'rb').read()))\nmiraicle.FlashImage.from_base64('c.png')\n")),(0,l.kt)("h2",{id:"\u8bed\u97f3-voice"},"\u8bed\u97f3 (Voice)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bed\u97f3\u7684\u8def\u5f84\uff0c\u53d1\u9001\u672c\u5730\u8bed\u97f3\uff0c\u76f8\u5bf9\u8def\u5f84\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"data\\net.mamoe.mirai-api-http\\voices"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"url")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bed\u97f3\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"url"),"\uff0c\u53d1\u9001\u65f6\u53ef\u4f5c\u7f51\u7edc\u8bed\u97f3\u7684\u94fe\u63a5\uff1b\u63a5\u6536\u65f6\u4e3a\u817e\u8baf\u8bed\u97f3\u670d\u52a1\u5668\u7684\u94fe\u63a5\uff0c\u53ef\u7528\u4e8e\u8bed\u97f3\u4e0b\u8f7d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"voice_id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bed\u97f3\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"voice_id"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"base64")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u662f ",(0,l.kt)("inlineCode",{parentName:"td"},"bytes")," \u5219\u4e3a\u8bed\u97f3\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"base64")," \u7f16\u7801\uff0c\u5982\u679c\u662f ",(0,l.kt)("inlineCode",{parentName:"td"},"str")," \u5219\u4e3a\u8bed\u97f3\u8def\u5f84\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"miraicle")," \u4f1a\u8bfb\u53d6\u8bed\u97f3\u5e76\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"td"},"base64")," \u7684\u5f62\u5f0f\u7f16\u7801\uff1b\u63a5\u6536\u65f6\u4e3a\u7a7a")))),(0,l.kt)("p",null,"\u6784\u9020\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"miraicle.Voice(path='a.amr')                # \u8be5\u6587\u4ef6\u5728 `data\\net.mamoe.mirai-api-http\\voices` \u76ee\u5f55\u4e0b\nmiraicle.Voice(url='https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')               # \u53d1\u9001\u7f51\u7edc\u8bed\u97f3\nmiraicle.Voice(url=r'file:\\\\\\D:\\b.amr')     # \u53d1\u9001\u672c\u5730\u8bed\u97f3\uff0c\u53ea\u80fd\u7528\u7edd\u5bf9\u8def\u5f84\uff0c\u524d\u7f00 `file:\\\\\\` \u4e0d\u53ef\u7701\u7565\nmiraicle.Voice(voice_id='23C477720A37FEB6A9EE4BCCF654014F.amr')             # \u4f7f\u7528 image_id \u53d1\u9001\u8bed\u97f3\nmiraicle.Voice(base64=base64.b64encode(open('c.wav', 'rb').read()))         # \u4f7f\u7528 base64 \u53d1\u9001\u8bed\u97f3\nmiraicle.Voice(base64='c.wav')              # miraicle \u8bfb\u53d6\u8bed\u97f3\u5e76\u4ee5 base64 \u7684\u5f62\u5f0f\u7f16\u7801\u53d1\u9001\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Voice")," \u7c7b\u63d0\u4f9b\u7684\u9759\u6001\u5de5\u5382\u65b9\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"from_file"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"from_url"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"from_id")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"from_base64")," \u6765\u6784\u9020 ",(0,l.kt)("inlineCode",{parentName:"p"},"Voice")," \u5bf9\u8c61\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"miraicle.Voice.from_file('a.amr')\nmiraicle.Voice.from_url('https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')\nmiraicle.Voice.from_url(r'file:\\\\\\D:\\b.amr')\nmiraicle.Voice.from_id('23C477720A37FEB6A9EE4BCCF654014F.amr')\nmiraicle.Voice.from_base64(base64.b64encode(open('c.wav', 'rb').read()))\nmiraicle.Voice.from_base64('c.wav')\n")),(0,l.kt)("h2",{id:"xml"},"Xml"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"xml")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"xml")," \u6587\u672c")))),(0,l.kt)("h2",{id:"json"},"Json"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"json")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"json")," \u6587\u672c")))),(0,l.kt)("h2",{id:"app"},"App"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"content")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u5bb9")))),(0,l.kt)("h2",{id:"poke"},"Poke"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6233\u4e00\u6233\u7684\u7c7b\u578b")))),(0,l.kt)("h2",{id:"\u9ab0\u5b50-dice"},"\u9ab0\u5b50 (Dice)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ab0\u5b50\u70b9\u6570\uff0c\u8303\u56f4 1 ~ 6\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u5219\u968f\u673a\u751f\u6210")))),(0,l.kt)("p",null,"\u6784\u9020\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"miraicle.Dice()\nmiraicle.Dice(6)\n")),(0,l.kt)("h2",{id:"\u6587\u4ef6-file"},"\u6587\u4ef6 (File)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"file_id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u8bc6\u522b id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"size")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u5927\u5c0f")))),(0,l.kt)("h2",{id:"mirai-\u7801-miraicode"},"mirai \u7801 (MiraiCode)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"code")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"mirai \u7801")))),(0,l.kt)("p",null,"\u6784\u9020\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"mirai.MiraiCode('Hello world![mirai:face:74][mirai:atall]')\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u9605\u8bfb ",(0,l.kt)("inlineCode",{parentName:"p"},"mirai")," \u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mamoe/mirai/blob/dev/docs/Messages.md#mirai-%E7%A0%81"},"\u6587\u6863")," \u6765\u4e86\u89e3 mirai \u7801\u7684\u7ec4\u6210\u3002"))}N.isMDXComponent=!0}}]);