!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=36)}([function(t,e,n){"use strict";function r(t){return"[object Array]"===T.call(t)}function o(t){return"[object ArrayBuffer]"===T.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function a(t){var e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function u(t){return"string"==typeof t}function s(t){return"number"==typeof t}function c(t){return"undefined"==typeof t}function f(t){return null!==t&&"object"==typeof t}function l(t){return"[object Date]"===T.call(t)}function d(t){return"[object File]"===T.call(t)}function p(t){return"[object Blob]"===T.call(t)}function h(t){return"[object Function]"===T.call(t)}function m(t){return f(t)&&h(t.pipe)}function y(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function w(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function v(t,e){if(null!==t&&"undefined"!=typeof t)if("object"==typeof t||r(t)||(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function x(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=x(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)v(arguments[n],t);return e}function b(t,e,n){return v(e,function(e,r){n&&"function"==typeof e?t[r]=M(e,n):t[r]=e}),t}var M=n(10),T=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isFormData:i,isArrayBufferView:a,isString:u,isNumber:s,isObject:f,isUndefined:c,isDate:l,isFile:d,isBlob:p,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:g,forEach:v,merge:x,extend:b,trim:w}},function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"e",function(){return u}),n.d(e,"d",function(){return s});var r="f1917musicdownloader",o=r+"-processed-track",i=r+"initialized",a=r+"-download-button",u=r+"-progress",s="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyODYuMDU0IDI4Ni4wNTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4Ni4wNTQgMjg2LjA1NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHN0eWxlPSJmaWxsOiM1MDcyOTk7IiBkPSJNMTQzLjAyNywwQzY0LjA0LDAsMCw2NC4wNCwwLDE0My4wMjdjMCw3OC45OTYsNjQuMDQsMTQzLjAyNywxNDMuMDI3LDE0My4wMjdzMTQzLjAyNy02NC4wMzEsMTQzLjAyNy0xNDMuMDI3QzI4Ni4wNTQsNjQuMDQ5LDIyMi4wMTQsMCwxNDMuMDI3LDB6IE0xNDMuMDI3LDI1OS4yMzZjLTY0LjE4MywwLTExNi4yMDktNTIuMDI2LTExNi4yMDktMTE2LjIwOXM1Mi4wMjYtMTE2LjIsMTE2LjIwOS0xMTYuMnMxMTYuMjA5LDUyLjAxNywxMTYuMjA5LDExNi4yUzIwNy4yMSwyNTkuMjM2LDE0My4wMjcsMjU5LjIzNnogTTE5NC43MDQsMTM0LjA4OGgtMjQuODZWODkuMzkyYzAtNC45MzQtMy45OTYtOC45MzktOC45MzktOC45MzloLTM1Ljc1N2MtNC45MzQsMC04LjkzOSw0LjAwNS04LjkzOSw4LjkzOXY0NC42OTZIOTEuMzQxYy05LjY5OSwwLTEzLjY2OCw2LjQ2My04LjgyMywxNC4zMzhsNTEuNjg2LDUxLjA5NmM0Ljg0NSw3Ljg4NCwxMi43ODMsNy44ODQsMTcuNjM3LDBsNTEuNjc3LTUxLjA5NkMyMDguMzgxLDE0MC41NTEsMjA0LjQxMiwxMzQuMDg4LDE5NC43MDQsMTM0LjA4OHoiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+"},function(t,e,n){t.exports=n(14)},function(t,e,n){"use strict";(function(e){function r(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function o(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(6):"undefined"!=typeof e&&(t=n(6)),t}var i=n(0),a=n(28),u=/^\)\]\}',?\n/,s={"Content-Type":"application/x-www-form-urlencoded"},c={adapter:o(),transformRequest:[function(t,e){return a(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t){t=t.replace(u,"");try{t=JSON.parse(t)}catch(t){}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(t){c.headers[t]={}}),i.forEach(["post","put","patch"],function(t){c.headers[t]=i.merge(s)}),t.exports=c}).call(e,n(33))},function(t,e,n){"use strict";function r(t){var e=t.node,n=t.url,r=t.fileName,i=t.onDownloadClick,a=t.attributes,u=document.createElement("a");if(u.setAttribute("download",r),u.href=n,u.className=""+l.c,u.addEventListener("click",i?i:o),a)for(var s in a)u.setAttribute(s,a[s]);e.parentNode.insertBefore(u,e)}function o(t){var e=t.target;if(t.stopPropagation(),e.dataset.noUseAjax)return!0;if(t.preventDefault(),t.target.hasAttribute("disabled"))return!1;var r=t.target.href,o=e.getAttribute("download");return i(e),f.a.request({url:r,responseType:"blob",onDownloadProgress:function(n){if(n.lengthComputable){"none"!=e.style.backgroundImage&&(e.style.backgroundImage="none",e.className+=" "+l.e);var r=Math.floor(n.loaded/n.total*100);t.target.innerHTML=r+"%"}}}).then(function(e){a(t.target),n.i(s.saveAs)(e.data,u(o))},function(t){a(e),e.dataset.noUseAjax="1",e.click()}),!1}function i(t){t.style.opacity="0.5",t.setAttribute("disabled","")}function a(t){t.style.opacity="1",t.innerHTML="",t.style.backgroundImage="",t.removeAttribute("disabled"),t.className=t.className.replace(" "+l.e,"")}function u(t){return d.innerHTML=t,d.value}var s=n(32),c=(n.n(s),n(2)),f=n.n(c),l=n(1);e.a=r,e.b=o,e.c=i,e.d=a;var d=document.createElement("textarea")},function(t,e,n){"use strict";function r(t){XMLHttpRequest.callbacks?XMLHttpRequest.callbacks.push(t):!function(){var e=XMLHttpRequest.prototype.send;XMLHttpRequest.callbacks=[t],XMLHttpRequest.prototype.send=function(){var t=this,n=this.onreadystatechange;this.onreadystatechange=function(){"function"==typeof n&&n(t),""!==t.responseType&&"text"!==t.responseType||4!=t.readyState||XMLHttpRequest.callbacks.forEach(function(e){e(t)})},e.apply(this,arguments)}}()}function o(t){var e=document.createElement("style");e.type="text/css",e.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(e)}e.b=r,e.a=o,function(t){t.closest=t.closest||function(t){for(var e=this;e;){if(e.matches(t))return e;e=e.parentElement}return null}}(Element.prototype),function(){String.prototype.includes||(String.prototype.includes=function(){return String.prototype.indexOf.apply(this,arguments)!==-1})}()},function(t,e,n){"use strict";var r=n(0),o=n(20),i=n(23),a=n(29),u=n(27),s=n(9),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(22);t.exports=function(t){return new Promise(function(e,f){var l=t.data,d=t.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||u(t.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),t.auth){var y=t.auth.username||"",w=t.auth.password||"";d.Authorization="Basic "+c(y+":"+w)}if(p.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?p.response:p.responseText,i={data:r,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:t,request:p};o(e,f,i),p=null}},p.onerror=function(){f(s("Network Error",t)),p=null},p.ontimeout=function(){f(s("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED")),p=null},r.isStandardBrowserEnv()){var g=n(25),v=(t.withCredentials||u(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;v&&(d[t.xsrfHeaderName]=v)}if("setRequestHeader"in p&&r.forEach(d,function(t,e){"undefined"==typeof l&&"content-type"===e.toLowerCase()?delete d[e]:p.setRequestHeader(e,t)}),t.withCredentials&&(p.withCredentials=!0),t.responseType)try{p.responseType=t.responseType}catch(t){if("json"!==p.responseType)throw t}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),f(t),p=null)}),void 0===l&&(l=null),p.send(l)})}},function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";var r=n(19);t.exports=function(t,e,n,o){var i=new Error(t);return r(i,e,n,o)}},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e,n){"use strict";function r(){var t=i();t.forEach(function(t){a(t).then(function(e){var n=u(e.data);s(t,n)},function(t){console.log(t)})}),window[d.a]||(c(),o(),window[d.a]=!0)}function o(){var t=0,e=location.toString();n.i(h.b)(function(e){e.responseText.indexOf("audio_row")===-1&&e.responseText.indexOf(".mp3?extra=")===-1||(clearTimeout(t),t=setTimeout(r,500))}),window.addEventListener("scroll",function(){clearTimeout(t),t=setTimeout(r,100)}),setInterval(function(){var t=location.toString();t!==e&&(e=t,r())},1e3)}function i(){var t=[{}],e=0,n=0;return Array.from(document.querySelectorAll(".audio_row:not(."+d.b+")")).forEach(function(r){n==y&&(e++,t[e]={},n=0);var o=JSON.parse(r.dataset.audio),i={artist:o[4],title:o[3],node:r,id:r.id.substr(6)};r.className+=" "+d.b,t[e][i.id]=i,n++}),t}function a(t){var e=new URLSearchParams;return e.append("act","reload_audio"),e.append("al","1"),e.append("ids",Object.keys(t).join(",")),l.a.post(m,e)}function u(t){var e=t.split("<!>"),n=e.find(function(t){return t.startsWith("<!json>")});return n?JSON.parse(n.substr(7).trim()).reduce(function(t,e){return t[e[1]+"_"+e[0]]=e[2],t},{}):[]}function s(t,e){for(var r in t){var o=t[r];n.i(p.a)({node:o.node.querySelector(".audio_info"),url:e[r],fileName:o.artist+" - "+o.title+".mp3"})}}function c(){n.i(h.a)("\n        ."+d.c+' {\n            display: block;\n            float: left;\n            width: 24px;\n            height: 18px;\n            padding-top: 6px;\n            margin: 0px 5px 0px 10px;\n            background-image: url("'+d.d+'");\n            font-size: 11px;\n        }\n        \n        .'+d.b+" .audio_inline_player .audio_inline_player_left {\n            padding: 0 45px;\n        }")}var f=n(2),l=n.n(f),d=n(1),p=n(4),h=n(5);e.a=r;var m="/al_audio.php",y=10},function(t,e,n){"use strict";function r(){window[a.a]||(o(),i(),window[a.a]=!0),Array.from(document.querySelectorAll(".audio_item.ai_has_btn:not(."+a.b+")")).forEach(function(t){t.className+=" "+a.b;var e=t.getElementsByClassName("ai_artist")[0].innerText,r=t.getElementsByClassName("ai_title")[0].innerText,o=e+" - "+r+".mp3",i=t.getElementsByTagName("input")[0].value,s=t.getElementsByClassName("ai_del")[0];s||(s=t.getElementsByClassName("ai_body")[0]),n.i(u.a)({fileName:o,url:i,node:s})})}function o(){n.i(s.a)("\n\t\t\t."+a.c+' {\n\t\t\t\tdisplay: block;\n\t\t\t\tfloat: left;\n\t\t\t\twidth: 24px;\n\t\t\t\theight: 18px;\n\t\t\t\tpadding-top: 6px;\n\t\t\t\tmargin: 0px 5px 0px 5px;\n\t\t\t\tbackground-image: url("'+a.d+'");\n\t\t\t\tfont-size: 11px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\t\n\t\t\t.wall_item .'+a.c+" {\n\t\t\t\twidth: 40px;\n\t\t\t\theight: 30px;\n\t\t\t\tpadding-top: 10px;\n\t\t\t}\n\t\t\t\n\t\t\t.wall_item .ai_current ."+a.c+",\n\t\t\t.wall_item .ai_playing ."+a.c+" {\n\t\t\t\twidth: 24px !important;\n\t\t\t\theight: 18px !important;\n\t\t\t\tpadding-top: 6px;\n\t\t\t}\t\t\t\n\t\t")}function i(){var t=0;n.i(s.b)(function(e){e.responseText.indexOf(".mp3?extra=")!==-1&&(clearTimeout(t),t=setTimeout(r,100))}),window.addEventListener("scroll",function(){clearTimeout(t),t=setTimeout(r,100)})}var a=n(1),u=n(4),s=n(5);e.a=r},function(t,e,n){"use strict";function r(){window[l.a]||(a(),i(),window[l.a]=!0);var t=document.querySelectorAll(".track__actions:not(."+l.b+")");t.forEach(function(t){var e=t.querySelector(".share");if(e){var r=e.href.split("/"),i=r[r.length-1],a=t.parentNode.querySelector(".track__title").innerText,s=o(t);t.className+=" "+l.b,n.i(d.a)({node:t.querySelector(".like"),url:"#",fileName:s?s+" - "+a+".mp3":a+".mp3",onDownloadClick:u,attributes:{"data-id":i}})}})}function o(t){var e=t.parentNode.querySelector(".track__artists");if(!e&&t.closest(".sidebar-playlist")){var n=t.parentNode.querySelectorAll(".track__name-wrap .link.link_mute");return Array.from(n).map(function(t){return t.innerText}).join(" & ")}if(!e){var r=t.closest(".page-album")||t.closest(".sidebar-album");r?e=r.querySelector(".album-summary__pregroup a"):(r=t.closest(".page-artist"),r?e=r.querySelector(".page-artist__info .page-artist__title"):(r=t.closest(".sidebar-artist"),e=r?r.querySelector(".sidebar-artist__title"):null))}return e?e.innerText:null}function i(){var t=0,e=location.toString();document.addEventListener("click",function(e){var n=e.target;(n.parentNode.className.includes("album_selectable")||n.className.includes("album_selectable")||n.parentNode.className.includes("artist__")||n.className.includes("playlist"))&&(t=setTimeout(r,500))}),window.addEventListener("scroll",function(){clearTimeout(t),t=setTimeout(r,100)}),setInterval(function(){var t=location.toString();t!==e&&(e=t,r())},1e3)}function a(){n.i(p.a)("\n        ."+l.c+' {\n            display: inline-block;\n            vertical-align: top;\n            width: 24px;\n            height: 24px;\n            margin: 6px 10px;\n            background-image: url("'+l.d+'");\n        }\n        \n        .track_type_full .'+l.c+" {\n            margin: 18.5px 10px;        \n        }\n\n        ."+l.c+"."+l.e+" {\n            vertical-align: baseline;\n            margin: 0px 10px;\n            color: #507299;\n            text-decoration: none;\n        }")}function u(t){var e=t.target;if(e.dataset.hasUrl)return n.i(d.b)(t);t.preventDefault(),t.stopPropagation();var r=t.target.dataset.id,o="https://music.yandex.ru/api/v2.1/handlers/track/"+r+"/track/download/m?hq=1";n.i(d.c)(e),f.a.request({url:o,headers:{"X-Retpath-Y":encodeURIComponent("https://music.yandex.ru/")}}).then(function(t){return f.a.get(t.data.src+"&format=json")},function(t){s(t,e)}).then(function(r){var o=m()(y+r.data.path.substr(1)+r.data.s);e.href="https://"+r.data.host+"/get-mp3/"+o+"/"+(r.data.ts+r.data.path),e.dataset.hasUrl="1",n.i(d.d)(e),n.i(d.b)(t)},function(t){s(t,e)})}function s(t,e){n.i(d.d)(e),console.log(t),alert("Error. Cannot download track")}var c=n(2),f=n.n(c),l=n(1),d=n(4),p=n(5),h=n(31),m=n.n(h);e.a=r;var y="XGRlBW9FXlekgbPrRHuSiA"},function(t,e,n){"use strict";function r(t){var e=new a(t),n=i(a.prototype.request,e);return o.extend(n,a.prototype,e),o.extend(n,e),n}var o=n(0),i=n(10),a=n(16),u=n(3),s=r(u);s.Axios=a,s.create=function(t){return r(o.merge(u,t))},s.Cancel=n(7),s.CancelToken=n(15),s.isCancel=n(8),s.all=function(t){return Promise.all(t)},s.spread=n(30),t.exports=s,t.exports.default=s},function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(7);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t,e=new r(function(e){t=e});return{token:e,cancel:t}},t.exports=r},function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new a,response:new a}}var o=n(3),i=n(0),a=n(17),u=n(18),s=n(26),c=n(24);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.baseURL&&!s(t.url)&&(t.url=c(t.baseURL,t.url));var e=[u,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(0);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(0),i=n(21),a=n(8),u=n(3);t.exports=function(t){r(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var e=t.adapter||u.adapter;return e(t).then(function(e){return r(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return a(e)||(r(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";t.exports=function(t,e,n,r){return t.config=e,n&&(t.code=n),t.response=r,t}},function(t,e,n){"use strict";var r=n(9);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n)):t(n)}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function o(t){for(var e,n,o=String(t),a="",u=0,s=i;o.charAt(0|u)||(s="=",u%1);a+=s.charAt(63&e>>8-u%1*8)){if(n=o.charCodeAt(u+=.75),n>255)throw new r;e=e<<8|n}return a}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=o},function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(0);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var a=[];o.forEach(e,function(t,e){null!==t&&"undefined"!=typeof t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),a.push(r(e)+"="+r(t))}))}),i=a.join("&")}return i&&(t+=(t.indexOf("?")===-1?"?":"&")+i),t}},function(t,e,n){"use strict";t.exports=function(t,e){return t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,"")}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,a){var u=[];u.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){var e,n,o,i={};return t?(r.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){var r;!function(o){"use strict";function i(t,e){var n=(65535&t)+(65535&e),r=(t>>16)+(e>>16)+(n>>16);return r<<16|65535&n}function a(t,e){return t<<e|t>>>32-e}function u(t,e,n,r,o,u){return i(a(i(i(e,t),i(r,u)),o),n)}function s(t,e,n,r,o,i,a){return u(e&n|~e&r,t,e,o,i,a)}function c(t,e,n,r,o,i,a){return u(e&r|n&~r,t,e,o,i,a)}function f(t,e,n,r,o,i,a){return u(e^n^r,t,e,o,i,a)}function l(t,e,n,r,o,i,a){return u(n^(e|~r),t,e,o,i,a)}function d(t,e){t[e>>5]|=128<<e%32,t[(e+64>>>9<<4)+14]=e;var n,r,o,a,u,d=1732584193,p=-271733879,h=-1732584194,m=271733878;for(n=0;n<t.length;n+=16)r=d,o=p,a=h,u=m,d=s(d,p,h,m,t[n],7,-680876936),m=s(m,d,p,h,t[n+1],12,-389564586),h=s(h,m,d,p,t[n+2],17,606105819),p=s(p,h,m,d,t[n+3],22,-1044525330),d=s(d,p,h,m,t[n+4],7,-176418897),m=s(m,d,p,h,t[n+5],12,1200080426),h=s(h,m,d,p,t[n+6],17,-1473231341),p=s(p,h,m,d,t[n+7],22,-45705983),d=s(d,p,h,m,t[n+8],7,1770035416),m=s(m,d,p,h,t[n+9],12,-1958414417),h=s(h,m,d,p,t[n+10],17,-42063),p=s(p,h,m,d,t[n+11],22,-1990404162),d=s(d,p,h,m,t[n+12],7,1804603682),m=s(m,d,p,h,t[n+13],12,-40341101),h=s(h,m,d,p,t[n+14],17,-1502002290),p=s(p,h,m,d,t[n+15],22,1236535329),d=c(d,p,h,m,t[n+1],5,-165796510),m=c(m,d,p,h,t[n+6],9,-1069501632),h=c(h,m,d,p,t[n+11],14,643717713),p=c(p,h,m,d,t[n],20,-373897302),d=c(d,p,h,m,t[n+5],5,-701558691),m=c(m,d,p,h,t[n+10],9,38016083),h=c(h,m,d,p,t[n+15],14,-660478335),p=c(p,h,m,d,t[n+4],20,-405537848),d=c(d,p,h,m,t[n+9],5,568446438),m=c(m,d,p,h,t[n+14],9,-1019803690),h=c(h,m,d,p,t[n+3],14,-187363961),p=c(p,h,m,d,t[n+8],20,1163531501),d=c(d,p,h,m,t[n+13],5,-1444681467),m=c(m,d,p,h,t[n+2],9,-51403784),h=c(h,m,d,p,t[n+7],14,1735328473),p=c(p,h,m,d,t[n+12],20,-1926607734),d=f(d,p,h,m,t[n+5],4,-378558),m=f(m,d,p,h,t[n+8],11,-2022574463),h=f(h,m,d,p,t[n+11],16,1839030562),p=f(p,h,m,d,t[n+14],23,-35309556),d=f(d,p,h,m,t[n+1],4,-1530992060),m=f(m,d,p,h,t[n+4],11,1272893353),h=f(h,m,d,p,t[n+7],16,-155497632),p=f(p,h,m,d,t[n+10],23,-1094730640),d=f(d,p,h,m,t[n+13],4,681279174),m=f(m,d,p,h,t[n],11,-358537222),h=f(h,m,d,p,t[n+3],16,-722521979),p=f(p,h,m,d,t[n+6],23,76029189),d=f(d,p,h,m,t[n+9],4,-640364487),m=f(m,d,p,h,t[n+12],11,-421815835),h=f(h,m,d,p,t[n+15],16,530742520),p=f(p,h,m,d,t[n+2],23,-995338651),d=l(d,p,h,m,t[n],6,-198630844),m=l(m,d,p,h,t[n+7],10,1126891415),h=l(h,m,d,p,t[n+14],15,-1416354905),p=l(p,h,m,d,t[n+5],21,-57434055),d=l(d,p,h,m,t[n+12],6,1700485571),m=l(m,d,p,h,t[n+3],10,-1894986606),h=l(h,m,d,p,t[n+10],15,-1051523),p=l(p,h,m,d,t[n+1],21,-2054922799),d=l(d,p,h,m,t[n+8],6,1873313359),m=l(m,d,p,h,t[n+15],10,-30611744),h=l(h,m,d,p,t[n+6],15,-1560198380),p=l(p,h,m,d,t[n+13],21,1309151649),d=l(d,p,h,m,t[n+4],6,-145523070),m=l(m,d,p,h,t[n+11],10,-1120210379),h=l(h,m,d,p,t[n+2],15,718787259),p=l(p,h,m,d,t[n+9],21,-343485551),d=i(d,r),p=i(p,o),h=i(h,a),m=i(m,u);return[d,p,h,m]}function p(t){var e,n="",r=32*t.length;for(e=0;e<r;e+=8)n+=String.fromCharCode(t[e>>5]>>>e%32&255);return n}function h(t){var e,n=[];for(n[(t.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;var r=8*t.length;for(e=0;e<r;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return n}function m(t){return p(d(h(t),8*t.length))}function y(t,e){var n,r,o=h(t),i=[],a=[];for(i[15]=a[15]=void 0,o.length>16&&(o=d(o,8*t.length)),n=0;n<16;n+=1)i[n]=909522486^o[n],a[n]=1549556828^o[n];return r=d(i.concat(h(e)),512+8*e.length),p(d(a.concat(r),640))}function w(t){var e,n,r="0123456789abcdef",o="";for(n=0;n<t.length;n+=1)e=t.charCodeAt(n),o+=r.charAt(e>>>4&15)+r.charAt(15&e);return o}function g(t){return unescape(encodeURIComponent(t))}function v(t){return m(g(t))}function x(t){return w(v(t))}function b(t,e){return y(g(t),g(e))}function M(t,e){return w(b(t,e))}function T(t,e,n){return e?n?b(e,t):M(e,t):n?v(t):x(t)}r=function(){return T}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}(this)},function(t,e,n){var r,o=o||function(t){"use strict";if(!("undefined"==typeof t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=t.document,n=function(){return t.URL||t.webkitURL||t},r=e.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,i=function(t){var e=new MouseEvent("click");t.dispatchEvent(e)},a=/constructor/i.test(t.HTMLElement)||t.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent),s=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},c="application/octet-stream",f=4e4,l=function(t){var e=function(){"string"==typeof t?n().revokeObjectURL(t):t.remove()};setTimeout(e,f)},d=function(t,e,n){e=[].concat(e);for(var r=e.length;r--;){var o=t["on"+e[r]];if("function"==typeof o)try{o.call(t,n||t)}catch(t){s(t)}}},p=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},h=function(e,s,f){f||(e=p(e));var h,m=this,y=e.type,w=y===c,g=function(){d(m,"writestart progress write writeend".split(" "))},v=function(){if((u||w&&a)&&t.FileReader){var r=new FileReader;return r.onloadend=function(){var e=u?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;"),n=t.open(e,"_blank");n||(t.location.href=e),e=void 0,m.readyState=m.DONE,g()},r.readAsDataURL(e),void(m.readyState=m.INIT)}if(h||(h=n().createObjectURL(e)),w)t.location.href=h;else{var o=t.open(h,"_blank");o||(t.location.href=h)}m.readyState=m.DONE,g(),l(h)};return m.readyState=m.INIT,o?(h=n().createObjectURL(e),void setTimeout(function(){r.href=h,r.download=s,i(r),g(),l(h),m.readyState=m.DONE})):void v()},m=h.prototype,y=function(t,e,n){return new h(t,e||t.name||"download",n)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return e=e||t.name||"download",n||(t=p(t)),navigator.msSaveOrOpenBlob(t,e)}:(m.abort=function(){},m.readyState=m.INIT=0,m.WRITING=1,m.DONE=2,m.error=m.onwritestart=m.onprogress=m.onwrite=m.onabort=m.onerror=m.onwriteend=null,y)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof t&&t.exports?t.exports.saveAs=o:null!==n(34)&&null!==n(35)&&(r=function(){return o}.call(e,n,e,t),!(void 0!==r&&(t.exports=r)))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){m&&p&&(m=!1,p.length?h=p.concat(h):y=-1,h.length&&u())}function u(){if(!m){var t=o(a);m=!0;for(var e=h.length;e;){for(p=h,h=[];++y<e;)p&&p[y].run();y=-1,e=h.length}p=null,m=!1,i(t)}}function s(t,e){this.fun=t,this.array=e}function c(){}var f,l,d=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var p,h=[],m=!1,y=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new s(t,e)),1!==h.length||m||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e){(function(e){t.exports=e}).call(e,{})},function(t,e,n){"use strict";function r(){switch(location.hostname){case"vk.com":n.i(o.a)();break;case"m.vk.com":n.i(i.a)();break;case"music.yandex.ru":n.i(a.a)();break;default:alert(location.hostname+" is unsupported site for Music Download Plugin")}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),i=n(12),a=n(13);window.initMusicDownloader=r,function(){r()}()}]);