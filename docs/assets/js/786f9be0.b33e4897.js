(self.webpackChunkmiraicle_document=self.webpackChunkmiraicle_document||[]).push([[298],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),m=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=m(n),d=r,g=s["".concat(o,".").concat(d)]||s[d]||c[d]||a;return n?i.createElement(g,l(l({ref:t},u),{},{components:n})):i.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var m=2;m<a;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5170:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return u},default:function(){return s}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),l=["components"],p={sidebar_position:7},o="\u4f7f\u7528\u8fc7\u6ee4\u5668",m={unversionedId:"guides/use-filter",id:"guides/use-filter",isDocsHomePage:!1,title:"\u4f7f\u7528\u8fc7\u6ee4\u5668",description:"\u5728\u4e0a\u4e00\u8282\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u7f16\u5199\u4e86\u51e0\u4e2a\u63d2\u4ef6\u3002\u53ea\u8981\u4f60\u7684 bot \u6b63\u5728\u8fd0\u884c\uff0c\u8fd9\u51e0\u4e2a\u63d2\u4ef6\u90fd\u53ef\u4ee5\u88ab\u89e6\u53d1\u3002\u4f46\u662f\u6709\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u4f1a\u5e0c\u671b\u4e00\u4e9b\u63d2\u4ef6\u53ea\u5728\u67d0\u4e9b\u7279\u5b9a\u7684\u7fa4\u8fd0\u884c\uff0c\u6216\u8005\u4e0d\u5e0c\u671b\u67d0\u4e9b\u4eba\u4f7f\u7528\u4f60\u7684 bot\u3002\u5bf9\u4e8e\u8fd9\u4e2a\u95ee\u9898\uff0cmiraicle \u63d0\u4f9b\u4e86\u4e00\u5957\u65b9\u6848\uff1a\u8fc7\u6ee4\u5668\u3002",source:"@site/docs/guides/7-use-filter.md",sourceDirName:"guides",slug:"/guides/use-filter",permalink:"/miraicle/docs/guides/use-filter",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/7-use-filter.md",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guides",previous:{title:"\u672c\u7fa4\u8bcd\u4e91",permalink:"/miraicle/docs/guides/write-plugins/word-cloud"},next:{title:"\u6dfb\u52a0\u8ba1\u5212\u4efb\u52a1",permalink:"/miraicle/docs/guides/add-scheduled-job"}},u=[{value:"\u7fa4\u7ec4\u4ef6\u5f00\u5173",id:"\u7fa4\u7ec4\u4ef6\u5f00\u5173",children:[]},{value:"\u9ed1\u540d\u5355",id:"\u9ed1\u540d\u5355",children:[]}],c={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528\u8fc7\u6ee4\u5668"},"\u4f7f\u7528\u8fc7\u6ee4\u5668"),(0,a.kt)("p",null,"\u5728\u4e0a\u4e00\u8282\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u7f16\u5199\u4e86\u51e0\u4e2a\u63d2\u4ef6\u3002\u53ea\u8981\u4f60\u7684 bot \u6b63\u5728\u8fd0\u884c\uff0c\u8fd9\u51e0\u4e2a\u63d2\u4ef6\u90fd\u53ef\u4ee5\u88ab\u89e6\u53d1\u3002\u4f46\u662f\u6709\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u4f1a\u5e0c\u671b\u4e00\u4e9b\u63d2\u4ef6\u53ea\u5728\u67d0\u4e9b\u7279\u5b9a\u7684\u7fa4\u8fd0\u884c\uff0c\u6216\u8005\u4e0d\u5e0c\u671b\u67d0\u4e9b\u4eba\u4f7f\u7528\u4f60\u7684 bot\u3002\u5bf9\u4e8e\u8fd9\u4e2a\u95ee\u9898\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"miraicle")," \u63d0\u4f9b\u4e86\u4e00\u5957\u65b9\u6848\uff1a\u8fc7\u6ee4\u5668\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"miraicle")," \u5185\u7f6e\u4e86\u4e24\u79cd\u8fc7\u6ee4\u5668\uff1a\u7fa4\u7ec4\u4ef6\u5f00\u5173 ",(0,a.kt)("inlineCode",{parentName:"p"},"GroupSwitchFilter")," \u548c\u9ed1\u540d\u5355 ",(0,a.kt)("inlineCode",{parentName:"p"},"BlacklistFilter"),"\u3002\u5982\u679c\u4f60\u7684 bot \u4f7f\u7528\u4e86\u8fc7\u6ee4\u5668\uff0c\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"miraicle")," \u6536\u5230\u4e00\u6761\u6d88\u606f\u65f6\uff0c\u4f1a\u9996\u5148\u53d1\u9001\u7ed9\u8fc7\u6ee4\u5668\uff0c\u5224\u65ad\u5b83\u662f\u5426\u6ee1\u8db3\u67d0\u4e9b\u6761\u4ef6\uff0c\u53ea\u6709\u7b26\u5408\u6761\u4ef6\u7684\u6d88\u606f\u624d\u4f1a\u7ee7\u7eed\u88ab\u9001\u5f80\u4f60\u7f16\u5199\u7684\u7ec4\u4ef6\u63a5\u53d7\u8c03\u7528\u3002"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u8fc7\u6ee4\u5668\u9700\u8981\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," \u6587\u4ef6\u6765\u8bb0\u5f55\u5b83\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u5728\u4f60\u7684\u9879\u76ee\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," \u6587\u4ef6\u5939\u6765\u50a8\u5b58\u8fd9\u4e9b\u6587\u4ef6\uff0c\u73b0\u5728\u4f60\u7684\u76ee\u5f55\u7ed3\u6784\u662f\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"miraicle-example\n# highlight-start\n\u251c\u2500\u2500 config\n# highlight-end\n\u251c\u2500\u2500 database\n\u2502   \u2514\u2500\u2500 word_cloud.db\n\u251c\u2500\u2500 plugins\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 repeat.py\n\u2502   \u251c\u2500\u2500 hello.py\n\u2502   \u2514\u2500\u2500 word_cloud.py\n\u2514\u2500\u2500 bot.py\n")),(0,a.kt)("h2",{id:"\u7fa4\u7ec4\u4ef6\u5f00\u5173"},"\u7fa4\u7ec4\u4ef6\u5f00\u5173"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"bot.py")," \u4e2d\u6dfb\u52a0\u4e00\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='bot.py'",title:"'bot.py'"},"import miraicle\nfrom plugins import *\n\n\nqq = 123456789              # \u4f60\u767b\u5f55\u7684\u673a\u5668\u4eba QQ \u53f7\nverify_key = 'miraicle'     # \u4f60\u5728 setting.yml \u4e2d\u8bbe\u7f6e\u7684 verifyKey\nport = 8080                 # \u4f60\u5728 setting.yml \u4e2d\u8bbe\u7f6e\u7684 port (http)\n\nbot = miraicle.Mirai(qq=qq, verify_key=verify_key, port=port)\n# highlight-start\nbot.set_filter(miraicle.GroupSwitchFilter(r'config\\group_switch.json'))\n# highlight-end\nbot.run()\n")),(0,a.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u4f60\u7ed9 bot \u542f\u7528\u4e86\u7fa4\u7ec4\u4ef6\u5f00\u5173\u8fc7\u6ee4\u5668\uff0c\u5e76\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"config\\group_switch.json")," \u6587\u4ef6\u6765\u8bb0\u5f55\u5b83\u7684\u914d\u7f6e\u3002\u8fd0\u884c\u7a0b\u5e8f\uff0c\u7a0b\u5e8f\u4f1a\u81ea\u52a8\u5e2e\u4f60\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\uff0c\u76ee\u524d\u5b83\u91cc\u9762\u8fd8\u6ca1\u6709\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u5728\u7fa4\u91cc\u89e6\u53d1 bot \u7684\u529f\u80fd\uff0c\u4f60\u4f1a\u53d1\u73b0 bot \u6ca1\u6709\u53cd\u5e94\u4e86\uff0c\u800c\u53ea\u6709\u5f53\u4f60\u79c1\u804a bot \u7684\u65f6\u5019\u5b83\u624d\u4f1a\u5bf9\u4f60\u8fdb\u884c\u56de\u590d\u3002\u8fd9\u662f\u56e0\u4e3a\u521d\u59cb\u72b6\u51b5\u4e0b bot \u7684\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u662f\u5173\u95ed\u7684\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u6765\u5bf9\u8fd9\u4e9b\u7ec4\u4ef6\u7684\u5f00\u5173\u8fdb\u884c\u63a7\u5236\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin")," \u6587\u4ef6\u5939\u4e0b\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"group_switch.py")," \u6587\u4ef6\uff0c\u7528\u6765\u7f16\u5199\u7fa4\u7ec4\u4ef6\u5f00\u5173\u7684\u903b\u8f91\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"miraicle-example\n\u251c\u2500\u2500 config\n\u2502   \u2514\u2500\u2500 group_switch.json\n\u251c\u2500\u2500 database\n\u2502   \u2514\u2500\u2500 word_cloud.db\n\u251c\u2500\u2500 plugins\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 repeat.py\n\u2502   \u251c\u2500\u2500 hello.py\n\u2502   \u2514\u2500\u2500 word_cloud.py\n# highlight-start\n\u2502   \u2514\u2500\u2500 group_switch.py\n# highlight-end\n\u2514\u2500\u2500 bot.py\n")),(0,a.kt)("p",null,"\u5e76\u628a\u5b83\u52a0\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"__init__.py")," \u5f53\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='__init__.py'",title:"'__init__.py'"},"__all__ = ['hello', 'repeat', 'word_cloud', 'group_switch']\n")),(0,a.kt)("p",null,"\u9996\u5148\u5728\u6587\u4ef6\u4e2d\u7f16\u5199\u4ee5\u4e0b\u5185\u5bb9\u3002\u4e0e\u4e0a\u4e00\u8282\u4e2d\u6211\u4eec\u7f16\u5199\u7684\u63d2\u4ef6\u76f8\u6bd4\uff0c\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"group_switch")," \u589e\u52a0\u4e86\u4e00\u4e2a\u7528\u6765\u4f20\u9012\u8fc7\u6ee4\u5668\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"flt")," \u53c2\u6570\uff0c\u5e76\u4e14\u88c5\u9970\u5668\u4e5f\u4e0d\u540c\u4e86\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u4e2a\u51fd\u6570\u4e2d\u5bf9\u7fa4\u7ec4\u4ef6\u5f00\u5173\u8fc7\u6ee4\u5668 ",(0,a.kt)("inlineCode",{parentName:"p"},"GroupSwitchFilter")," \u8fdb\u884c\u63a7\u5236\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='group_switch.py'",title:"'group_switch.py'"},"import miraicle\n\n\n@miraicle.Mirai.filter('GroupSwitchFilter')\ndef group_switch(bot: miraicle.Mirai, msg: miraicle.GroupMessage, flt: miraicle.GroupSwitchFilter):\n    ...\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u53ea\u8981\u5bf9\u5e94\u7684\u8fc7\u6ee4\u5668\u88ab\u542f\u7528\uff0c\u5f53 bot \u6536\u5230\u7fa4\u6d88\u606f\u65f6\uff0c\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"@miraicle.Mirai.filter")," \u88c5\u9970\u7684\u51fd\u6570\u603b\u662f\u4f1a\u88ab\u8c03\u7528\uff0c\u5373\u4f7f\u6240\u6709\u7ec4\u4ef6\u90fd\u88ab\u5173\u95ed\u7684\u65f6\u5019\u4e5f\u662f\u5982\u6b64\u3002"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GroupSwitchFilter")," \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u51e0\u79cd\u65b9\u6cd5\u53ef\u4ee5\u7ed9\u4f60\u4f7f\u7528\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"enable(group, func_name)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u7fa4\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"td"},"group")," \u542f\u7528\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"func_name")," \u7684\u7ec4\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"disable(group, func_name)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u7fa4\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"td"},"group")," \u7981\u7528\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"func_name")," \u7684\u7ec4\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"enable_all(group)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u7fa4\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"td"},"group")," \u542f\u7528\u6240\u6709\u7ec4\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"disable_all(group)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u7fa4\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"td"},"group")," \u7981\u7528\u6240\u6709\u7ec4\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"funcs_info(group=None)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6240\u6709\u7ec4\u4ef6\u4fe1\u606f\uff1b",(0,a.kt)("inlineCode",{parentName:"td"},"group")," \u53c2\u6570\u53ef\u9009\uff0c\u5982\u679c\u4e0d\u4e3a\u7a7a\uff0c\u4f1a\u989d\u5916\u8fd4\u56de\u8be5\u7ec4\u4ef6\u5728\u6307\u5b9a\u7684\u7fa4\u662f\u5426\u88ab\u6253\u5f00")))),(0,a.kt)("p",null,"\u4e86\u89e3\u8fd9\u4e9b\u65b9\u6cd5\u4e4b\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"group_switch")," \u51fd\u6570\u4e2d\u5bf9\u5404\u7ec4\u4ef6\u8fdb\u884c\u5f00\u5173\u63a7\u5236\u4e86\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u7f16\u5199\u6253\u5f00\u548c\u5173\u95ed\u6240\u6709\u7ec4\u4ef6\u7684\u529f\u80fd\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='group_switch.py'",title:"'group_switch.py'"},"import miraicle\n\n\n# highlight-start\nmy_qq = 987654321           # \u4f60\u7684 QQ \u53f7\n# highlight-end\n\n\n@miraicle.Mirai.filter('GroupSwitchFilter')\ndef group_switch(bot: miraicle.Mirai, msg: miraicle.GroupMessage, flt: miraicle.GroupSwitchFilter):\n    # highlight-start\n    if msg.sender == my_qq:\n        if msg.plain == '\u542f\u7528\u6240\u6709\u7ec4\u4ef6':\n            flt.enable_all(group=msg.group)\n            bot.send_group_msg(group=msg.group, msg='\u5df2\u5728\u7fa4\u5185\u542f\u7528\u6240\u6709\u7ec4\u4ef6', quote=msg.id)\n        elif msg.plain == '\u7981\u7528\u6240\u6709\u7ec4\u4ef6':\n            flt.disable_all(group=msg.group)\n            bot.send_group_msg(group=msg.group, msg='\u5df2\u5728\u7fa4\u5185\u7981\u7528\u6240\u6709\u7ec4\u4ef6', quote=msg.id)\n    # highlight-end\n")),(0,a.kt)("p",null,"\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"my_qq")," \u6539\u4e3a\u4f60\u7684 QQ \u53f7\u3002\u8fd0\u884c\u7a0b\u5e8f\uff0c\u5728\u7fa4\u91cc\u53d1\u9001\u4e00\u6761\u6d88\u606f\uff1a\u201c\u542f\u7528\u6240\u6709\u7ec4\u4ef6\u201d\uff0cbot \u4f1a\u56de\u590d\u4f60\u5e76\u5728\u7fa4\u5185\u542f\u7528\u6240\u6709\u7ec4\u4ef6\u3002\u8fd9\u4e2a\u65f6\u5019\u4f60\u518d\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"group_switch.json")," \u6587\u4ef6\uff0c\u53ef\u4ee5\u770b\u5230\u5728\u8fd9\u4e2a\u7fa4\u4e2d\u88ab\u542f\u7528\u7684\u7ec4\u4ef6\u5217\u8868\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "12345678": [\n        "hello_to_group",\n        "repeat",\n        "word_cloud"\n    ]\n}\n')),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u624b\u52a8\u589e\u5220\u5217\u8868\u6765\u63a7\u5236\u7ec4\u4ef6\u7684\u5f00\u5173\uff0c\u4f46\u662f\u5f53\u4f60\u4fee\u6539\u8fc7\u540e\uff0c\u9700\u8981\u91cd\u542f bot \uff0c\u56e0\u4e3a\u8fc7\u6ee4\u5668\u5728\u88ab\u521d\u59cb\u5316\u7684\u65f6\u5019\u624d\u4f1a\u4ece\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bfb\u53d6\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u9ed1\u540d\u5355"},"\u9ed1\u540d\u5355"),(0,a.kt)("p",null,"\u9ed1\u540d\u5355\u8fc7\u6ee4\u5668\u7684\u7528\u6cd5\u4e0e\u7fa4\u7ec4\u4ef6\u5f00\u5173\u8fc7\u6ee4\u5668\u7c7b\u4f3c\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"bot.py")," \u4e2d\u6dfb\u52a0\u4e00\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='bot.py'",title:"'bot.py'"},"import miraicle\nfrom plugins import *\n\n\nqq = 123456789              # \u4f60\u767b\u5f55\u7684\u673a\u5668\u4eba QQ \u53f7\nverify_key = 'miraicle'     # \u4f60\u5728 setting.yml \u4e2d\u8bbe\u7f6e\u7684 verifyKey\nport = 8080                 # \u4f60\u5728 setting.yml \u4e2d\u8bbe\u7f6e\u7684 port (http)\n\nbot = miraicle.Mirai(qq=qq, verify_key=verify_key, port=port)\nbot.set_filter(miraicle.GroupSwitchFilter(r'config\\group_switch.json'))\n# highlight-start\nbot.set_filter(miraicle.BlacklistFilter(r'config\\blacklist.json'))\n# highlight-end\nbot.run()\n")),(0,a.kt)("p",null,"\u7a0b\u5e8f\u4f1a\u81ea\u52a8\u5e2e\u4f60\u521b\u5efa\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"config\\blacklist.json"),"\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin")," \u6587\u4ef6\u5939\u4e0b\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"blacklist.py")," \u6587\u4ef6\uff0c\u7528\u6765\u7f16\u5199\u7fa4\u7ec4\u4ef6\u5f00\u5173\u7684\u903b\u8f91\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"miraicle-example\n\u251c\u2500\u2500 config\n\u2502   \u251c\u2500\u2500 group_switch.json\n\u2502   \u2514\u2500\u2500 blacklist.json\n\u251c\u2500\u2500 database\n\u2502   \u2514\u2500\u2500 word_cloud.db\n\u251c\u2500\u2500 plugins\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 repeat.py\n\u2502   \u251c\u2500\u2500 hello.py\n\u2502   \u251c\u2500\u2500 word_cloud.py\n\u2502   \u251c\u2500\u2500 group_switch.py\n# highlight-start\n\u2502   \u2514\u2500\u2500 blacklist.py\n# highlight-end\n\u2514\u2500\u2500 bot.py\n")),(0,a.kt)("p",null,"\u5e76\u628a\u5b83\u52a0\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"__init__.py")," \u5f53\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='__init__.py'",title:"'__init__.py'"},"__all__ = ['hello', 'repeat', 'word_cloud', 'group_switch', 'blacklist']\n")),(0,a.kt)("p",null,"\u7a0b\u5e8f\u7684\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='blacklist.py'",title:"'blacklist.py'"},"import miraicle\n\n\n@miraicle.Mirai.filter('BlacklistFilter')\ndef blacklist(bot: miraicle.Mirai, msg: miraicle.GroupMessage, flt: miraicle.BlacklistFilter):\n    ...\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BlacklistFilter")," \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u51e0\u79cd\u65b9\u6cd5\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"append(qq)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5411\u9ed1\u540d\u5355\u4e2d\u6dfb\u52a0\u6210\u5458")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"remove(qq)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ece\u9ed1\u540d\u5355\u4e2d\u79fb\u9664\u6210\u5458")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"clear()")),(0,a.kt)("td",{parentName:"tr",align:null},"\u6e05\u7a7a\u9ed1\u540d\u5355")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"show()")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u9ed1\u540d\u5355\u5185\u5bb9")))),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"blacklist")," \u51fd\u6570\u4e2d\u7f16\u5199\u9ed1\u540d\u5355\u8fc7\u6ee4\u5668\u7684\u903b\u8f91\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='blacklist.py'",title:"'blacklist.py'"},"import miraicle\n\n\n@miraicle.Mirai.filter('BlacklistFilter')\ndef blacklist(bot: miraicle.Mirai, msg: miraicle.GroupMessage, flt: miraicle.BlacklistFilter):\n    # highlight-start\n    if msg.plain == '\u62c9\u9ed1\u6211':\n        flt.append(msg.sender)\n    elif msg.plain == '\u6211\u9519\u4e86':\n        flt.remove(msg.sender)\n    # highlight-end\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u7a0b\u5e8f\uff0c\u5728\u7fa4\u91cc\u8bf4\u4e00\u53e5\u201c\u62c9\u9ed1\u6211\u201d\uff0c\u4f60\u7684 bot \u5c06\u4f1a\u4e0d\u7406\u776c\u4f60\u4e86\uff0c\u5feb\u53bb\u8ddf\u4f60\u7684 bot \u9053\u6b49\u5427\uff01"))}s.isMDXComponent=!0}}]);