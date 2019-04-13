!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=31)}([function(e,t,n){"use strict";var r=n(3),o=n(12),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===i.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(15),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:("undefined"!=typeof XMLHttpRequest?s=n(4):void 0!==t&&(s=n(4)),s),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){c.headers[e]={}}),r.forEach(["post","put","patch"],function(e){c.headers[e]=r.merge(i)}),e.exports=c}).call(this,n(14))},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0),o=n(16),i=n(18),a=n(19),s=n(20),c=n(5),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(21);e.exports=function(e){return new Promise(function(t,l){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||s(e.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var g=e.auth.username||"",y=e.auth.password||"";d.Authorization="Basic "+u(g+":"+y)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};o(t,l,r),p=null}},p.onerror=function(){l(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){l(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var w=n(22),v=(e.withCredentials||s(e.url))&&e.xsrfCookieName?w.read(e.xsrfCookieName):void 0;v&&(d[e.xsrfHeaderName]=v)}if("setRequestHeader"in p&&r.forEach(d,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),l(e),p=null)}),void 0===f&&(f=null),p.send(f)})}},function(e,t,n){"use strict";var r=n(17);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){(function(n){var r,o,i;o=[],void 0===(i="function"==typeof(r=function(){"use strict";function t(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){a(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function r(e){var t=new XMLHttpRequest;return t.open("HEAD",e,!1),t.send(),200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(e,n,a){var s=i.URL||i.webkitURL,c=document.createElement("a");n=n||e.name||"download",c.download=n,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?o(c):r(c.href)?t(e,n,a):o(c,c.target="_blank")):(c.href=s.createObjectURL(e),setTimeout(function(){s.revokeObjectURL(c.href)},4e4),setTimeout(function(){o(c)},0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,i),n);else if(r(e))t(e,n,i);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout(function(){o(a)})}}:function(e,n,r,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,r);var a="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||a&&s)&&"object"==typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var l=i.URL||i.webkitURL,f=l.createObjectURL(e);o?o.location=f:location.href=f,o=null,setTimeout(function(){l.revokeObjectURL(f)},4e4)}});i.saveAs=a.saveAs=a,e.exports=a})?r.apply(t,o):r)||(e.exports=i)}).call(this,n(30))},function(e,t,n){e.exports=function(){"use strict";function e(e){return String(e).split("").map(function(e){return e.charCodeAt(0)})}function t(t){return new Uint8Array(e(t))}function n(t){var n=new Uint8Array(2*t.length);return new Uint16Array(n.buffer).set(e(t)),n}return function(){var e=r.prototype;function r(e){if(!(e&&"object"==typeof e&&"byteLength"in e))throw new Error("First argument should be an instance of ArrayBuffer or Buffer");this.arrayBuffer=e,this.padding=4096,this.frames=[],this.url=""}return e._setIntegerFrame=function(e,t){var n,r=parseInt(t,10);this.frames.push({name:e,value:r,size:(n=r.toString().length,11+n)})},e._setStringFrame=function(e,t){var n,r=t.toString();this.frames.push({name:e,value:r,size:(n=r.length,13+2*n)})},e._setPictureFrame=function(e,t,n,r){var o,i,a,s,c=function(e){if(!e||!e.length)return null;if(255===e[0]&&216===e[1]&&255===e[2])return"image/jpeg";if(137===e[0]&&80===e[1]&&78===e[2]&&71===e[3])return"image/png";if(71===e[0]&&73===e[1]&&70===e[2])return"image/gif";if(87===e[8]&&69===e[9]&&66===e[10]&&80===e[11])return"image/webp";var t=73===e[0]&&73===e[1]&&42===e[2]&&0===e[3],n=77===e[0]&&77===e[1]&&0===e[2]&&42===e[3];return t||n?"image/tiff":66===e[0]&&77===e[1]?"image/bmp":0===e[0]&&0===e[1]&&1===e[2]&&0===e[3]?"image/x-icon":null}(new Uint8Array(t)),u=n.toString();if(!c)throw new Error("Unknown picture MIME type");n||(r=!1),this.frames.push({name:"APIC",value:t,pictureType:e,mimeType:c,useUnicodeEncoding:r,description:u,size:(o=t.byteLength,i=c.length,a=u.length,s=r,11+i+1+1+(s?2+2*(a+1):a+1)+o)})},e._setLyricsFrame=function(e,t){var n,r,o=e.toString(),i=t.toString();this.frames.push({name:"USLT",value:i,description:o,size:(n=o.length,r=i.length,16+2*n+2+2+2*r)})},e._setCommentFrame=function(e,t){var n,r,o=e.toString(),i=t.toString();this.frames.push({name:"COMM",value:i,description:o,size:(n=o.length,r=i.length,16+2*n+2+2+2*r)})},e._setUserStringFrame=function(e,t){var n,r,o=e.toString(),i=t.toString();this.frames.push({name:"TXXX",description:o,value:i,size:(n=o.length,r=i.length,13+2*n+2+2+2*r)})},e._setUrlLinkFrame=function(e,t){var n,r=t.toString();this.frames.push({name:e,value:r,size:(n=r.length,10+n)})},e.setFrame=function(e,t){switch(e){case"TPE1":case"TCOM":case"TCON":if(!Array.isArray(t))throw new Error(e+" frame value should be an array of strings");var n="TCON"===e?";":"/",r=t.join(n);this._setStringFrame(e,r);break;case"TIT2":case"TALB":case"TPE2":case"TPE3":case"TPE4":case"TRCK":case"TPOS":case"TMED":case"TPUB":case"TCOP":case"TSRC":this._setStringFrame(e,t);break;case"TBPM":case"TLEN":case"TDAT":case"TYER":this._setIntegerFrame(e,t);break;case"USLT":if(!("object"==typeof t&&"description"in t&&"lyrics"in t))throw new Error("USLT frame value should be an object with keys description and lyrics");this._setLyricsFrame(t.description,t.lyrics);break;case"APIC":if(!("object"==typeof t&&"type"in t&&"data"in t&&"description"in t))throw new Error("APIC frame value should be an object with keys type, data and description");if(t.type<0||20<t.type)throw new Error("Incorrect APIC frame picture type");this._setPictureFrame(t.type,t.data,t.description,!!t.useUnicodeEncoding);break;case"TXXX":if(!("object"==typeof t&&"description"in t&&"value"in t))throw new Error("TXXX frame value should be an object with keys description and value");this._setUserStringFrame(t.description,t.value);break;case"TKEY":if(!/^([A-G][#b]?m?|o)$/.test(t))throw new Error(e+" frame value should be like Dbm, C#, B or o");this._setStringFrame(e,t);break;case"WCOM":case"WCOP":case"WOAF":case"WOAR":case"WOAS":case"WORS":case"WPAY":case"WPUB":this._setUrlLinkFrame(e,t);break;case"COMM":if(!("object"==typeof t&&"description"in t&&"text"in t))throw new Error("COMM frame value should be an object with keys description and text");this._setCommentFrame(t.description,t.text);break;default:throw new Error("Unsupported frame "+e)}return this},e.removeTag=function(){if(!(this.arrayBuffer.byteLength<10)){var e,t,n=new Uint8Array(this.arrayBuffer),r=n[3],o=((e=[n[6],n[7],n[8],n[9]])[0]<<21)+(e[1]<<14)+(e[2]<<7)+e[3]+10;73!==(t=n)[0]||68!==t[1]||51!==t[2]||r<2||4<r||(this.arrayBuffer=new Uint8Array(n.subarray(o)).buffer)}},e.addTag=function(){this.removeTag();var e,r=[255,254],o=[101,110,103],i=10+this.frames.reduce(function(e,t){return e+t.size},0)+this.padding,a=new ArrayBuffer(this.arrayBuffer.byteLength+i),s=new Uint8Array(a),c=0,u=[];return u=[73,68,51,3],s.set(u,c),c+=u.length,c++,c++,u=[(e=i-10)>>>21&127,e>>>14&127,e>>>7&127,127&e],s.set(u,c),c+=u.length,this.frames.forEach(function(e){var i;switch(u=t(e.name),s.set(u,c),c+=u.length,i=e.size-10,u=[i>>>24&255,i>>>16&255,i>>>8&255,255&i],s.set(u,c),c+=u.length,c+=2,e.name){case"WCOM":case"WCOP":case"WOAF":case"WOAR":case"WOAS":case"WORS":case"WPAY":case"WPUB":u=t(e.value),s.set(u,c),c+=u.length;break;case"TPE1":case"TCOM":case"TCON":case"TIT2":case"TALB":case"TPE2":case"TPE3":case"TPE4":case"TRCK":case"TPOS":case"TKEY":case"TMED":case"TPUB":case"TCOP":case"TSRC":u=[1].concat(r),s.set(u,c),c+=u.length,u=n(e.value),s.set(u,c),c+=u.length;break;case"TXXX":case"USLT":case"COMM":u=[1],"USLT"!==e.name&&"COMM"!==e.name||(u=u.concat(o)),u=u.concat(r),s.set(u,c),c+=u.length,u=n(e.description),s.set(u,c),c+=u.length,u=[0,0].concat(r),s.set(u,c),c+=u.length,u=n(e.value),s.set(u,c),c+=u.length;break;case"TBPM":case"TLEN":case"TDAT":case"TYER":c++,u=t(e.value),s.set(u,c),c+=u.length;break;case"APIC":u=[e.useUnicodeEncoding?1:0],s.set(u,c),c+=u.length,u=t(e.mimeType),s.set(u,c),c+=u.length,u=[0,e.pictureType],s.set(u,c),c+=u.length,e.useUnicodeEncoding?(u=[].concat(r),s.set(u,c),c+=u.length,u=n(e.description),s.set(u,c),c+=u.length,c+=2):(u=t(e.description),s.set(u,c),c+=u.length,c++),s.set(new Uint8Array(e.value),c),c+=e.value.byteLength}}),c+=this.padding,s.set(new Uint8Array(this.arrayBuffer),c),this.arrayBuffer=a},e.getBlob=function(){return new Blob([this.arrayBuffer],{type:"audio/mpeg"})},e.getURL=function(){return this.url||(this.url=URL.createObjectURL(this.getBlob())),this.url},e.revokeURL=function(){URL.revokeObjectURL(this.url)},r}()}()},function(e,t,n){var r;!function(o){"use strict";function i(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function a(e,t,n,r,o,a){return i((s=i(i(t,e),i(r,a)))<<(c=o)|s>>>32-c,n);var s,c}function s(e,t,n,r,o,i,s){return a(t&n|~t&r,e,t,o,i,s)}function c(e,t,n,r,o,i,s){return a(t&r|n&~r,e,t,o,i,s)}function u(e,t,n,r,o,i,s){return a(t^n^r,e,t,o,i,s)}function l(e,t,n,r,o,i,s){return a(n^(t|~r),e,t,o,i,s)}function f(e,t){var n,r,o,a,f;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var d=1732584193,p=-271733879,h=-1732584194,m=271733878;for(n=0;n<e.length;n+=16)r=d,o=p,a=h,f=m,d=s(d,p,h,m,e[n],7,-680876936),m=s(m,d,p,h,e[n+1],12,-389564586),h=s(h,m,d,p,e[n+2],17,606105819),p=s(p,h,m,d,e[n+3],22,-1044525330),d=s(d,p,h,m,e[n+4],7,-176418897),m=s(m,d,p,h,e[n+5],12,1200080426),h=s(h,m,d,p,e[n+6],17,-1473231341),p=s(p,h,m,d,e[n+7],22,-45705983),d=s(d,p,h,m,e[n+8],7,1770035416),m=s(m,d,p,h,e[n+9],12,-1958414417),h=s(h,m,d,p,e[n+10],17,-42063),p=s(p,h,m,d,e[n+11],22,-1990404162),d=s(d,p,h,m,e[n+12],7,1804603682),m=s(m,d,p,h,e[n+13],12,-40341101),h=s(h,m,d,p,e[n+14],17,-1502002290),d=c(d,p=s(p,h,m,d,e[n+15],22,1236535329),h,m,e[n+1],5,-165796510),m=c(m,d,p,h,e[n+6],9,-1069501632),h=c(h,m,d,p,e[n+11],14,643717713),p=c(p,h,m,d,e[n],20,-373897302),d=c(d,p,h,m,e[n+5],5,-701558691),m=c(m,d,p,h,e[n+10],9,38016083),h=c(h,m,d,p,e[n+15],14,-660478335),p=c(p,h,m,d,e[n+4],20,-405537848),d=c(d,p,h,m,e[n+9],5,568446438),m=c(m,d,p,h,e[n+14],9,-1019803690),h=c(h,m,d,p,e[n+3],14,-187363961),p=c(p,h,m,d,e[n+8],20,1163531501),d=c(d,p,h,m,e[n+13],5,-1444681467),m=c(m,d,p,h,e[n+2],9,-51403784),h=c(h,m,d,p,e[n+7],14,1735328473),d=u(d,p=c(p,h,m,d,e[n+12],20,-1926607734),h,m,e[n+5],4,-378558),m=u(m,d,p,h,e[n+8],11,-2022574463),h=u(h,m,d,p,e[n+11],16,1839030562),p=u(p,h,m,d,e[n+14],23,-35309556),d=u(d,p,h,m,e[n+1],4,-1530992060),m=u(m,d,p,h,e[n+4],11,1272893353),h=u(h,m,d,p,e[n+7],16,-155497632),p=u(p,h,m,d,e[n+10],23,-1094730640),d=u(d,p,h,m,e[n+13],4,681279174),m=u(m,d,p,h,e[n],11,-358537222),h=u(h,m,d,p,e[n+3],16,-722521979),p=u(p,h,m,d,e[n+6],23,76029189),d=u(d,p,h,m,e[n+9],4,-640364487),m=u(m,d,p,h,e[n+12],11,-421815835),h=u(h,m,d,p,e[n+15],16,530742520),d=l(d,p=u(p,h,m,d,e[n+2],23,-995338651),h,m,e[n],6,-198630844),m=l(m,d,p,h,e[n+7],10,1126891415),h=l(h,m,d,p,e[n+14],15,-1416354905),p=l(p,h,m,d,e[n+5],21,-57434055),d=l(d,p,h,m,e[n+12],6,1700485571),m=l(m,d,p,h,e[n+3],10,-1894986606),h=l(h,m,d,p,e[n+10],15,-1051523),p=l(p,h,m,d,e[n+1],21,-2054922799),d=l(d,p,h,m,e[n+8],6,1873313359),m=l(m,d,p,h,e[n+15],10,-30611744),h=l(h,m,d,p,e[n+6],15,-1560198380),p=l(p,h,m,d,e[n+13],21,1309151649),d=l(d,p,h,m,e[n+4],6,-145523070),m=l(m,d,p,h,e[n+11],10,-1120210379),h=l(h,m,d,p,e[n+2],15,718787259),p=l(p,h,m,d,e[n+9],21,-343485551),d=i(d,r),p=i(p,o),h=i(h,a),m=i(m,f);return[d,p,h,m]}function d(e){var t,n="",r=32*e.length;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function p(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=8*e.length;for(t=0;t<r;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function h(e){var t,n,r="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),r+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return r}function m(e){return unescape(encodeURIComponent(e))}function g(e){return function(e){return d(f(p(e),8*e.length))}(m(e))}function y(e,t){return function(e,t){var n,r,o=p(e),i=[],a=[];for(i[15]=a[15]=void 0,o.length>16&&(o=f(o,8*e.length)),n=0;n<16;n+=1)i[n]=909522486^o[n],a[n]=1549556828^o[n];return r=f(i.concat(p(t)),512+8*t.length),d(f(a.concat(r),640))}(m(e),m(t))}function w(e,t,n){return t?n?y(t,e):h(y(t,e)):n?g(e):h(g(e))}void 0===(r=function(){return w}.call(t,n,t,e))||(e.exports=r)}()},function(e,t,n){"use strict";var r=n(0),o=n(3),i=n(13),a=n(2);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(a);c.Axios=i,c.create=function(e){return s(r.merge(a,e))},c.Cancel=n(7),c.CancelToken=n(28),c.isCancel=n(6),c.all=function(e){return Promise.all(e)},c.spread=n(29),e.exports=c,e.exports.default=c},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,n){"use strict";var r=n(2),o=n(0),i=n(23),a=n(24);function s(e){this.defaults=e,this.interceptors={request:new i,response:new i}}s.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){s.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=s},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(5);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))}))}),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}}),a):a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,i=String(e),a="",s=0,c=r;i.charAt(0|s)||(c="=",s%1);a+=c.charAt(63&t>>8-s%1*8)){if((n=i.charCodeAt(s+=.75))>255)throw new o;t=t<<8|n}return a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(25),i=n(6),a=n(2),s=n(26),c=n(27);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(7);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r);const i="f1917musicdownloader",a=`${i}-processed-track`,s=`${i}initialized`,c=`${i}-download-button`,u=`${i}-progress`,l="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyODYuMDU0IDI4Ni4wNTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4Ni4wNTQgMjg2LjA1NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHN0eWxlPSJmaWxsOiM1MDcyOTk7IiBkPSJNMTQzLjAyNywwQzY0LjA0LDAsMCw2NC4wNCwwLDE0My4wMjdjMCw3OC45OTYsNjQuMDQsMTQzLjAyNywxNDMuMDI3LDE0My4wMjdzMTQzLjAyNy02NC4wMzEsMTQzLjAyNy0xNDMuMDI3QzI4Ni4wNTQsNjQuMDQ5LDIyMi4wMTQsMCwxNDMuMDI3LDB6IE0xNDMuMDI3LDI1OS4yMzZjLTY0LjE4MywwLTExNi4yMDktNTIuMDI2LTExNi4yMDktMTE2LjIwOXM1Mi4wMjYtMTE2LjIsMTE2LjIwOS0xMTYuMnMxMTYuMjA5LDUyLjAxNywxMTYuMjA5LDExNi4yUzIwNy4yMSwyNTkuMjM2LDE0My4wMjcsMjU5LjIzNnogTTE5NC43MDQsMTM0LjA4OGgtMjQuODZWODkuMzkyYzAtNC45MzQtMy45OTYtOC45MzktOC45MzktOC45MzloLTM1Ljc1N2MtNC45MzQsMC04LjkzOSw0LjAwNS04LjkzOSw4LjkzOXY0NC42OTZIOTEuMzQxYy05LjY5OSwwLTEzLjY2OCw2LjQ2My04LjgyMywxNC4zMzhsNTEuNjg2LDUxLjA5NmM0Ljg0NSw3Ljg4NCwxMi43ODMsNy44ODQsMTcuNjM3LDBsNTEuNjc3LTUxLjA5NkMyMDguMzgxLDE0MC41NTEsMjA0LjQxMiwxMzQuMDg4LDE5NC43MDQsMTM0LjA4OHoiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+";var f=n(8),d=n(9),p=n.n(d);const h=document.createElement("textarea");function m({node:e,url:t,fileName:n,onDownloadClick:r,attributes:o,artist:i,title:a}){const s=document.createElement("a");if(s.setAttribute("download",n),s.href=t,s.className=`${c}`,s.dataset.artist=i,s.dataset.title=a,s.addEventListener("click",r||g),o)for(var u in o)s.setAttribute(u,o[u]);e.parentNode.insertBefore(s,e)}function g(e){const t=e.target;if(e.stopPropagation(),t.dataset.noUseAjax)return!0;if(e.preventDefault(),e.target.hasAttribute("disabled"))return!1;const n=e.target.href,r=t.getAttribute("download");return y(t),o.a.request({url:n,responseType:"arraybuffer",onDownloadProgress:n=>{if(n.lengthComputable){"none"!=t.style.backgroundImage&&(t.style.backgroundImage="none",t.className+=` ${u}`);const r=Math.floor(n.loaded/n.total*100);e.target.innerHTML=`${r}%`}}}).then(n=>{const o=new p.a(n.data);o.setFrame("TPE1",[t.dataset.artist]).setFrame("TIT2",t.dataset.title),o.addTag(),Object(f.saveAs)(o.getBlob(),function(e){return h.innerHTML=e,h.value}(r)),w(e.target)},e=>{w(t),t.dataset.noUseAjax="1",t.click()}),!1}function y(e){e.style.opacity="0.5",e.setAttribute("disabled","")}function w(e){e.style.opacity="1",e.innerHTML="",e.style.backgroundImage="",e.removeAttribute("disabled"),e.className=e.className.replace(` ${u}`,"")}function v(e){const t=document.createElement("style");t.type="text/css",t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t)}var b;function T(e){if((!window.wbopen||!~(window.open+"").indexOf("wbopen"))&&~e.indexOf("audio_api_unavailable")){var t=e.split("?extra=")[1].split("#"),n=""===t[1]?"":x(t[1]);if(t=x(t[0]),"string"!=typeof n||!t)return e;for(var r,o,i=(n=n?n.split(String.fromCharCode(9)):[]).length;i--;){if(r=(o=n[i].split(String.fromCharCode(11))).splice(0,1,t)[0],!j[r])return e;t=j[r].apply(null,o)}if(t&&"http"===t.substr(0,4))return t}return e}function x(e){if(!e||e.length%4==1)return!1;for(var t,n,r=0,o=0,i="";n=e.charAt(o++);)~(n=M.indexOf(n))&&(t=r%4?64*t+n:n,r++%4)&&(i+=String.fromCharCode(255&t>>(-2*r&6)));return i}(b=Element.prototype).closest=b.closest||function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null},String.prototype.includes||(String.prototype.includes=function(){return-1!==String.prototype.indexOf.apply(this,arguments)});var M="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN0PQRSTUVWXYZO123456789+/=",j={v:function(e){return e.split("").reverse().join("")},r:function(e,t){e=e.split("");for(var n,r=M+M,o=e.length;o--;)~(n=r.indexOf(e[o]))&&(e[o]=r.substr(n-t,1));return e.join("")},s:function(e,t){var n=e.length;if(n){var r=function(e,t){var n=e.length,r=[];if(n){var o=n;for(t=Math.abs(t);o--;)t=(n*(o+1)^t+o)%n,r[o]=t}return r}(e,t),o=0;for(e=e.split("");++o<n;)e[o]=e.splice(r[n-1-o],1,e[o])[0];e=e.join("")}return e},i:function(e,t){return j.s(e,t^vk.id)},x:function(e,t){var n=[];return t=t.charCodeAt(0),each(e.split(""),function(e,r){n.push(String.fromCharCode(r.charCodeAt(0)^t))}),n.join("")}};const L="/al_audio.php",E=10;function S(){var e,t;(function(){var e=[{}],t=0,n=0;return Array.from(document.querySelectorAll(`.audio_row:not(.${a})`)).forEach(r=>{n==E&&(e[++t]={},n=0);const o=JSON.parse(r.dataset.audio),i=o[13].split("/"),s={artist:o[4],title:o[3],node:r,idWithHash:`${r.dataset.fullId}_${i[2]}_${i[5]}`,id:r.dataset.fullId};r.className+=` ${a}`,e[t][s.id]=s,n++}),e})().forEach(e=>{(function(e){const t=new URLSearchParams;return t.append("act","reload_audio"),t.append("al","1"),t.append("ids",Object.keys(e).map(t=>e[t].idWithHash).join(",")),o.a.post(L,t)})(e).then(t=>{const n=function(e){const t=e.split("<!>").find(e=>e.startsWith("<!json>"));if(!t)return[];return JSON.parse(t.substr(7).trim()).reduce((e,t)=>{const n=T(t[2]),r=n.split("/");console.log(n),console.log(r);const o=7===r.length?`https://${r[2]}/${r[3]}/${r[5]}.mp3?${r[6].split("?",2)[1]}`:`https://${r[2]}/${r[3]}/${r[4]}/${r[6]}/${r[7]}.mp3?${r[8].split("?",2)[1]}`;return e[`${t[1]}_${t[0]}`]=o,e},{})}(t.data);!function(e,t){for(var n in e){const r=e[n];m({node:r.node.querySelector(".audio_row__performer_title"),url:t[n],fileName:`${r.artist} - ${r.title}.mp3`,artist:r.artist,title:r.title})}}(e,n)},e=>{console.log(e)})}),window[s]||(v(`\n        .${c} {\n            display: block;\n            float: left;\n            width: 24px;\n            height: 24px;\n            margin: 8px 8px 0 0;\n            background: url("${l}") no-repeat;\n            font-size: 11px;\n        }\n        \n        .${c}.${u} {\n            padding-top: 7px;\n            height: 17px;\n        }\n        \n        .${a} .audio_inline_player .audio_inline_player_left {\n            padding: 0 45px;\n        }`),e=0,t=location.toString(),window.addEventListener("scroll",()=>{clearTimeout(e),e=setTimeout(S,100)}),setInterval(()=>{const e=location.toString();e!==t&&(t=e,S())},1e3),window[s]=!0)}const C=`.audio_item.ai_has_btn:not(.${a})`;function A(){var e;window[s]||(v(`\n\t\t\t.${c} {\n\t\t\t\tdisplay: block;\n\t\t\t\tfloat: left;\n\t\t\t\twidth: 48px;\n\t\t\t\theight: 48px;\n\t\t\t\tmargin: 0px 5px 0px 5px;\n\t\t\t\tbackground-image: url("${l}");\n\t\t\t\tfont-size: 11px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\t\n            .${c}.${u} {\n                padding-top: 15px;\n                height: auto;\n\t\t\t}\n\t\t\t\n\t\t\t.ai_current .${c},\n\t\t\t.ai_playing .${c} {\n\t\t\t\twidth: 28px !important;\n\t\t\t\theight: 28px !important;\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 25px;\n\t\t\t}\t\t\t\n\t\t`),e=0,window.addEventListener("scroll",()=>{clearTimeout(e),e=setTimeout(A,100)}),window[s]=!0),Array.from(document.querySelectorAll(C)).forEach(e=>{e.className+=` ${a}`;const t=e.getElementsByClassName("ai_artist")[0].innerText,n=e.getElementsByClassName("ai_title")[0].innerText;m({fileName:`${t} - ${n}.mp3`,url:T(e.getElementsByTagName("input")[0].value),node:e.getElementsByClassName("ai_body")[0],title:n,artist:t})})}var N=n(10),O=n.n(N);const k="XGRlBW9FXlekgbPrRHuSiA";function P(){var e,t;window[s]||(v(`\n        .${c} {\n            display: inline-block;\n            vertical-align: top;\n            width: 24px;\n            height: 24px;\n            margin: 3px 10px;\n            background-image: url("${l}");\n        }\n\n        .${c}.${u} {\n            vertical-align: baseline;\n            margin: 0px 10px;\n            color: #507299;\n            text-decoration: none;\n        }`),e=0,t=location.toString(),document.addEventListener("click",function(t){var n=t.target;(n.parentNode.className.includes("album_selectable")||n.className.includes("album_selectable")||n.className.includes("d-hover__overlap")||n.parentNode.className.includes("artist__")||n.className.includes("playlist"))&&(clearTimeout(e),e=setTimeout(P,500))}),window.addEventListener("scroll",()=>{clearTimeout(e),e=setTimeout(P,100)}),setInterval(()=>{const e=location.toString();e!==t&&(t=e,P())},1e3),window[s]=!0),document.querySelectorAll(`.track__actions:not(.${a})`).forEach(e=>{const t=e.querySelector(".share");if(!t)return;const n=t.href.split("/"),r=n[n.length-1],o=e.parentNode.querySelector(".track__title").innerText,i=function(e){let t=e.parentNode.querySelector(".track__artists");if(!t&&e.closest(".sidebar-playlist")){const t=e.parentNode.querySelectorAll(".track__name-wrap .link.link_mute");return Array.from(t).map(e=>e.innerText).join(" & ")}if(!t){let n=e.closest(".page-album")||e.closest(".sidebar-album");n?t=n.querySelector(".album-summary__pregroup a"):(n=e.closest(".page-artist"))?t=n.querySelector(".page-artist__info .page-artist__title"):(n=e.closest(".sidebar-artist"),t=n?n.querySelector(".sidebar-artist__title"):null)}return t?t.innerText:null}(e);e.className+=` ${a}`,m({node:e.querySelector(".like"),url:"#",fileName:i?`${i} - ${o}.mp3`:`${o}.mp3`,onDownloadClick:_,attributes:{"data-id":r},title:o,artist:i})})}function _(e){const t=e.target;if(t.dataset.hasUrl)return g(e);e.preventDefault(),e.stopPropagation();const n=`https://music.yandex.ru/api/v2.1/handlers/track/${e.target.dataset.id}/track/download/m?hq=1`;y(t),o.a.request({url:n,headers:{"X-Retpath-Y":encodeURIComponent("https://music.yandex.ru/")}}).then(e=>o.a.get(`${e.data.src}&format=json`),e=>{D(e,t)}).then(n=>{const r=O()(k+n.data.path.substr(1)+n.data.s);t.href=`https://${n.data.host}/get-mp3/${r}/${n.data.ts+n.data.path}`,t.dataset.hasUrl="1",w(t),g(e)},e=>{D(e,t)})}function D(e,t){w(t),console.log(e),alert("Error. Cannot download track")}function U(){switch(location.hostname){case"vk.com":S();break;case"m.vk.com":A();break;case"music.yandex.ru":P();break;default:alert(`${location.hostname} is unsupported site for Music Download Plugin`)}}window.initMusicDownloader=U,U()}]);