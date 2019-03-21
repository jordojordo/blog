(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{65:function(n,a,s){"use strict";function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}s.d(a,"a",function(){return t})},66:function(n,a,s){"use strict";function t(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function p(n,a,s){return a&&t(n.prototype,a),s&&t(n,s),n}s.d(a,"a",function(){return p})},67:function(n,a,s){"use strict";function t(n){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}s.d(a,"a",function(){return t})},68:function(n,a,s){"use strict";function t(n){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n){return(p="function"===typeof Symbol&&"symbol"===t(Symbol.iterator)?function(n){return t(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":t(n)})(n)}function e(n,a){return!a||"object"!==p(a)&&"function"!==typeof a?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):a}s.d(a,"a",function(){return e})},69:function(n,a,s){"use strict";function t(n,a){return(t=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n})(n,a)}function p(n,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),a&&t(n,a)}s.d(a,"a",function(){return p})},77:function(n,a,s){"use strict";s.r(a),s.d(a,"readingTime",function(){return b}),s.d(a,"default",function(){return w}),s.d(a,"tableOfContents",function(){return E}),s.d(a,"frontMatter",function(){return M});var t=s(15),p=s(65),e=s(66),o=s(68),c=s(67),l=s(69),u=s(0),i=s.n(u),r=s(21),k=s(78),m=s.n(k),g=s(79),h=s.n(g),f=s(80),d=s.n(f),v=s(81),y=s.n(v),b={text:"5 min read",minutes:4.5,time:27e4,words:900},w=function(n){function a(n){var s;return Object(p.a)(this,a),(s=Object(o.a)(this,Object(c.a)(a).call(this,n))).layout=null,s}return Object(l.a)(a,n),Object(e.a)(a,[{key:"render",value:function(){var n=this.props,a=n.components;Object(t.a)(n,["components"]);return i.a.createElement(r.MDXTag,{name:"wrapper",components:a},i.a.createElement("div",null,i.a.createElement("h1",null,"How to transform certain parts of an SVG"),"I'll start with my basic html template",i.a.createElement(r.MDXTag,{name:"pre",components:a},i.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-markup","data-language":"markup","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en-us<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>x-ua-compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>manifest<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>site.webmanifest<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>css/stylesheet.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Transform your SVG<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n'}}})),i.a.createElement(r.MDXTag,{name:"p",components:a},"Let\u2019s create a stylesheet and give the body a nice background radial-gradient to accent the SVG."),i.a.createElement(r.MDXTag,{name:"pre",components:a},i.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-css","data-language":"css","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token selector">body</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>\n    ellipse at center,\n    <span class="token function">rgba</span><span class="token punctuation">(</span>165, 146, 191, 1<span class="token punctuation">)</span> 0%,\n    <span class="token function">rgba</span><span class="token punctuation">(</span>219, 195, 255, 1<span class="token punctuation">)</span> 0%,\n    <span class="token function">rgba</span><span class="token punctuation">(</span>110, 97, 127, 1<span class="token punctuation">)</span> 99.9%,\n    <span class="token function">rgba</span><span class="token punctuation">(</span>198, 175, 229, 1<span class="token punctuation">)</span> 100%\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(r.MDXTag,{name:"p",components:a},"Don\u2019t be alarmed if it looks a bit off, it will fix itself when we add the container.\n",i.a.createElement("h5",null,"It should look something like this:")),i.a.createElement("div",{className:y.a["svg-1"]},i.a.createElement("img",{src:m.a,alt:"svg1"})),i.a.createElement(r.MDXTag,{name:"p",components:a},"Next, create a container for our SVG, then add the content of the SVG straight into the container. You can use my SVG as an example, or your own SVG will fit here."),i.a.createElement(r.MDXTag,{name:"pre",components:a},i.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-markup","data-language":"markup","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span>\n      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span>\n      <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1.0<span class="token punctuation">"</span></span>\n      <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span>\n      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>700.000000pt<span class="token punctuation">"</span></span>\n      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>700.000000pt<span class="token punctuation">"</span></span>\n      <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0 0 700.000000 700.000000<span class="token punctuation">"</span></span>\n      <span class="token attr-name">preserveAspectRatio</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xMidYMid meet<span class="token punctuation">"</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span>\n        <span class="token attr-name">transform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>translate(0.000000,700.000000) scale(0.100000,-0.100000)<span class="token punctuation">"</span></span>\n        <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#EBDCFF<span class="token punctuation">"</span></span>\n        <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span>\n          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tri<span class="token punctuation">"</span></span>\n          <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>M2384 5219 c-15 -30 -432 -754 -1019 -1769 -681 -1179 -825 -1429\n        -831 -1444 -6 -15 70 -16 1046 -14 l1053 3 238 413 c132 228 239 420 239 428\n        0 8 -4 14 -9 14 -5 0 -41 25 -80 56 l-71 55 -57 -50 c-69 -62 -191 -124 -297\n        -151 -100 -25 -270 -27 -365 -4 -270 66 -490 282 -562 551 -29 108 -29 278 0\n        386 72 270 291 485 565 552 97 24 258 22 361 -4 105 -27 229 -90 299 -153 l56\n        -50 48 38 c26 20 51 41 55 44 8 7 -610 1089 -638 1119 -11 11 -16 8 -31 -20z\n        m337 -550 c164 -282 298 -522 298 -531 1 -18 -44 -58 -65 -58 -8 0 -39 20 -68\n        44 -127 103 -291 157 -478 157 -142 0 -221 -17 -343 -76 -204 -99 -358 -284\n        -417 -502 -29 -109 -29 -297 0 -406 59 -218 213 -403 417 -502 122 -59 196\n        -75 342 -75 191 0 351 52 480 157 65 53 76 52 147 -10 l49 -43 -21 -41 c-12\n        -23 -59 -106 -105 -185 -46 -78 -139 -239 -207 -356 -88 -153 -130 -216 -147\n        -223 -14 -5 -443 -9 -1019 -9 -865 0 -995 2 -1000 15 -3 8 29 75 74 152 166\n        288 916 1587 1312 2273 227 393 417 721 423 728 5 7 15 11 20 9 6 -2 144 -235\n        308 -518z<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span>\n          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cir1<span class="token punctuation">"</span></span>\n          <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>M2285 4206 c-438 -85 -694 -518 -555 -937 33 -99 96 -196 180 -280\n      61 -61 96 -86 171 -123 126 -62 200 -80 329 -80 161 0 287 41 426 139 92 66\n      92 66 49 122 -194 254 -194 652 0 906 31 40 35 50 24 63 -20 25 -129 99 -186\n      128 -124 62 -306 88 -438 62z<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span>\n          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cir2<span class="token punctuation">"</span></span>\n          <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>M3415 4214 c-102 -20 -133 -29 -188 -51 -156 -63 -288 -186 -363\n      -338 -60 -122 -78 -197 -78 -325 0 -129 18 -203 80 -328 37 -75 61 -110 127\n      -176 68 -68 98 -91 177 -129 52 -26 124 -55 160 -64 87 -22 253 -22 340 0 86\n      22 234 97 289 145 l44 38 -40 55 c-59 79 -88 134 -119 224 -26 74 -28 92 -28\n      235 0 144 1 160 27 235 31 88 71 162 125 233 l35 46 -39 34 c-92 80 -226 141\n      -355 161 -63 11 -154 13 -194 5z<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span>\n          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cir3<span class="token punctuation">"</span></span>\n          <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>M4440 4206 c-351 -76 -583 -357 -583 -706 0 -332 218 -612 543 -697\n      76 -19 249 -22 325 -4 264 61 473 264 540 522 100 383 -132 773 -520 874 -85\n      23 -226 27 -305 11z m290 -32 c36 -8 103 -33 150 -56 70 -33 101 -57 176 -132\n      75 -75 99 -106 132 -176 52 -108 75 -202 75 -310 0 -297 -193 -563 -478 -658\n      -141 -47 -276 -47 -425 0 -207 65 -377 235 -446 444 -26 81 -29 101 -28 219 0\n      113 4 141 27 211 67 203 241 376 447 443 127 42 231 46 370 15z<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n'}}})),i.a.createElement(r.MDXTag,{name:"p",components:a},i.a.createElement("h5",null,"Note:\nFor the sake of simplicity, I\u2019m placing the SVG directly in the html to give the CSS an easy path for the classes.\n")),i.a.createElement(r.MDXTag,{name:"p",components:a},"Now we\u2019ll need to give some styling to the container and SVG."),i.a.createElement(r.MDXTag,{name:"pre",components:a},i.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-css","data-language":"css","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token selector">.container</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token property">margin-right</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.icon</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(r.MDXTag,{name:"p",components:a},i.a.createElement("h5",null,"With our styles in place, things are starting to come together nicely:")),i.a.createElement("div",{className:y.a["svg-2"]},i.a.createElement("img",{src:h.a,alt:"svg2"})),i.a.createElement(r.MDXTag,{name:"p",components:a},i.a.createElement("h3",null,"On to the fun part!"),"\nWe are going to create some styles for classes we have given the path tags of the SVG."),i.a.createElement(r.MDXTag,{name:"pre",components:a},i.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-css","data-language":"css","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token selector">.tri,\n.cir1,\n.cir2,\n.cir3</span> <span class="token punctuation">{</span>\n  <span class="token property">transition</span><span class="token punctuation">:</span> all 1s ease-in-out<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.tri:hover,\n.cir1:hover,\n.cir2:hover,\n.cir3:hover</span> <span class="token punctuation">{</span>\n  <span class="token property">fill</span><span class="token punctuation">:</span> #fdd0ff<span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate3d</span><span class="token punctuation">(</span>1, 2, 3, 10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(r.MDXTag,{name:"p",components:a},"First we are giving all of the objects a nice transition to give a smooter animation.\nThen when we hover over those objects, we are changing the fill color while rotating the object around."),i.a.createElement(r.MDXTag,{name:"p",components:a},i.a.createElement("h2",null,"Here\u2019s our finished product:")),i.a.createElement("div",null,i.a.createElement("video",{src:d.a,width:"500",height:"500",controls:!0,type:"video/mp4"})),i.a.createElement(r.MDXTag,{name:"p",components:a},"Thank you for reading!")))}}]),a}(i.a.Component),E=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[]},M={}},78:function(n,a,s){n.exports=s.p+"static/media/svg1.89a79dca.png"},79:function(n,a,s){n.exports=s.p+"static/media/svg2.9fd3bc5a.png"},80:function(n,a,s){n.exports=s.p+"static/media/svg-transition.ac9be5e3.MP4"},81:function(n,a,s){n.exports={"svg-1":"document_svg-1__IKIxc","svg-2":"document_svg-2__t4rpe"}}}]);
//# sourceMappingURL=5.45cb1d23.chunk.js.map