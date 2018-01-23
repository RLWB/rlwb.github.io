// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      localRequire.resolve = function (x) {
        return modules[name][1][x] || x;
      };

      var module = cache[name] = new newRequire.Module;
      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({4:[function(require,module,exports) {

},{}],7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={foo:function(){}};
},{}],30:[function(require,module,exports) {
"use strict";module.exports=function(r,n){return function(){for(var t=new Array(arguments.length),e=0;e<t.length;e++)t[e]=arguments[e];return r.apply(n,t)}};
},{}],52:[function(require,module,exports) {
function t(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(n){return"function"==typeof n.readFloatLE&&"function"==typeof n.slice&&t(n.slice(0,0))}module.exports=function(o){return null!=o&&(t(o)||n(o)||!!o._isBuffer)};
},{}],28:[function(require,module,exports) {
"use strict";function e(e){return"[object Array]"===g.call(e)}function r(e){return"[object ArrayBuffer]"===g.call(e)}function n(e){return"undefined"!=typeof FormData&&e instanceof FormData}function t(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function i(e){return"string"==typeof e}function o(e){return"number"==typeof e}function f(e){return void 0===e}function u(e){return null!==e&&"object"==typeof e}function c(e){return"[object Date]"===g.call(e)}function a(e){return"[object File]"===g.call(e)}function l(e){return"[object Blob]"===g.call(e)}function s(e){return"[object Function]"===g.call(e)}function p(e){return u(e)&&s(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function d(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function b(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function j(r,n){if(null!==r&&void 0!==r)if("object"!=typeof r&&(r=[r]),e(r))for(var t=0,i=r.length;t<i;t++)n.call(null,r[t],t,r);else for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&n.call(null,r[o],o,r)}function m(){function e(e,n){"object"==typeof r[n]&&"object"==typeof e?r[n]=m(r[n],e):r[n]=e}for(var r={},n=0,t=arguments.length;n<t;n++)j(arguments[n],e);return r}function B(e,r,n){return j(r,function(r,t){e[t]=n&&"function"==typeof r?v(r,n):r}),e}var v=require("./helpers/bind"),A=require("is-buffer"),g=Object.prototype.toString;module.exports={isArray:e,isArrayBuffer:r,isBuffer:A,isFormData:n,isArrayBufferView:t,isString:i,isNumber:o,isObject:u,isUndefined:f,isDate:c,isFile:a,isBlob:l,isFunction:s,isStream:p,isURLSearchParams:y,isStandardBrowserEnv:b,forEach:j,merge:m,extend:B,trim:d};
},{"./helpers/bind":30,"is-buffer":52}],36:[function(require,module,exports) {

function t(){throw new Error("setTimeout has not been defined")}function e(){throw new Error("clearTimeout has not been defined")}function n(e){if(s===setTimeout)return setTimeout(e,0);if((s===t||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function r(t){if(l===clearTimeout)return clearTimeout(t);if((l===e||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function o(){m&&f&&(m=!1,f.length?h=f.concat(h):p=-1,h.length&&i())}function i(){if(!m){var t=n(o);m=!0;for(var e=h.length;e;){for(f=h,h=[];++p<e;)f&&f[p].run();p=-1,e=h.length}f=null,m=!1,r(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var s,l,a=module.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:t}catch(e){s=t}try{l="function"==typeof clearTimeout?clearTimeout:e}catch(t){l=e}}();var f,h=[],m=!1,p=-1;a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];h.push(new u(t,e)),1!==h.length||m||n(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=c,a.addListener=c,a.once=c,a.off=c,a.removeListener=c,a.removeAllListeners=c,a.emit=c,a.prependListener=c,a.prependOnceListener=c,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0};
},{}],51:[function(require,module,exports) {
"use strict";module.exports=function(e,o,r,s,t){return e.config=o,r&&(e.code=r),e.request=s,e.response=t,e};
},{}],46:[function(require,module,exports) {
"use strict";var r=require("./enhanceError");module.exports=function(e,n,o,t,u){var a=new Error(e);return r(a,n,o,t,u)};
},{"./enhanceError":51}],41:[function(require,module,exports) {
"use strict";var t=require("./createError");module.exports=function(e,s,u){var a=u.config.validateStatus;u.status&&a&&!a(u.status)?s(t("Request failed with status code "+u.status,u.config,null,u.request,u)):e(u)};
},{"./createError":46}],42:[function(require,module,exports) {
"use strict";function e(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var r=require("./../utils");module.exports=function(i,n,t){if(!n)return i;var a;if(t)a=t(n);else if(r.isURLSearchParams(n))a=n.toString();else{var c=[];r.forEach(n,function(i,n){null!==i&&void 0!==i&&(r.isArray(i)&&(n+="[]"),r.isArray(i)||(i=[i]),r.forEach(i,function(i){r.isDate(i)?i=i.toISOString():r.isObject(i)&&(i=JSON.stringify(i)),c.push(e(n)+"="+e(i))}))}),a=c.join("&")}return a&&(i+=(-1===i.indexOf("?")?"?":"&")+a),i};
},{"./../utils":28}],43:[function(require,module,exports) {
"use strict";var e=require("./../utils"),t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];module.exports=function(r){var i,o,n,s={};return r?(e.forEach(r.split("\n"),function(r){if(n=r.indexOf(":"),i=e.trim(r.substr(0,n)).toLowerCase(),o=e.trim(r.substr(n+1)),i){if(s[i]&&t.indexOf(i)>=0)return;s[i]="set-cookie"===i?(s[i]?s[i]:[]).concat([o]):s[i]?s[i]+", "+o:o}}),s):s};
},{"./../utils":28}],44:[function(require,module,exports) {
"use strict";var t=require("./../utils");module.exports=t.isStandardBrowserEnv()?function(){function r(t){var r=t;return o&&(a.setAttribute("href",r),r=a.href),a.setAttribute("href",r),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}var e,o=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");return e=r(window.location.href),function(o){var a=t.isString(o)?r(o):o;return a.protocol===e.protocol&&a.host===e.host}}():function(){return!0};
},{"./../utils":28}],45:[function(require,module,exports) {
"use strict";function r(){this.message="String contains an invalid character"}function t(t){for(var e,a,n=String(t),c="",i=0,h=o;n.charAt(0|i)||(h="=",i%1);c+=h.charAt(63&e>>8-i%1*8)){if((a=n.charCodeAt(i+=.75))>255)throw new r;e=e<<8|a}return c}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",module.exports=t;
},{}],47:[function(require,module,exports) {
"use strict";var e=require("./../utils");module.exports=e.isStandardBrowserEnv()?{write:function(n,t,o,r,i,u){var s=[];s.push(n+"="+encodeURIComponent(t)),e.isNumber(o)&&s.push("expires="+new Date(o).toGMTString()),e.isString(r)&&s.push("path="+r),e.isString(i)&&s.push("domain="+i),!0===u&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};
},{"./../utils":28}],37:[function(require,module,exports) {
"use strict";var e=require("./../utils"),r=require("./../core/settle"),o=require("./../helpers/buildURL"),t=require("./../helpers/parseHeaders"),n=require("./../helpers/isURLSameOrigin"),s=require("../core/createError"),i="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||require("./../helpers/btoa");module.exports=function(a){return new Promise(function(u,d){var l=a.data,p=a.headers;e.isFormData(l)&&delete p["Content-Type"];var f=new XMLHttpRequest,c="onreadystatechange",w=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in f||n(a.url)||(f=new window.XDomainRequest,c="onload",w=!0,f.onprogress=function(){},f.ontimeout=function(){}),a.auth){var h=a.auth.username||"",m=a.auth.password||"";p.Authorization="Basic "+i(h+":"+m)}if(f.open(a.method.toUpperCase(),o(a.url,a.params,a.paramsSerializer),!0),f.timeout=a.timeout,f[c]=function(){if(f&&(4===f.readyState||w)&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in f?t(f.getAllResponseHeaders()):null,o={data:a.responseType&&"text"!==a.responseType?f.response:f.responseText,status:1223===f.status?204:f.status,statusText:1223===f.status?"No Content":f.statusText,headers:e,config:a,request:f};r(u,d,o),f=null}},f.onerror=function(){d(s("Network Error",a,null,f)),f=null},f.ontimeout=function(){d(s("timeout of "+a.timeout+"ms exceeded",a,"ECONNABORTED",f)),f=null},e.isStandardBrowserEnv()){var y=require("./../helpers/cookies"),q=(a.withCredentials||n(a.url))&&a.xsrfCookieName?y.read(a.xsrfCookieName):void 0;q&&(p[a.xsrfHeaderName]=q)}if("setRequestHeader"in f&&e.forEach(p,function(e,r){void 0===l&&"content-type"===r.toLowerCase()?delete p[r]:f.setRequestHeader(r,e)}),a.withCredentials&&(f.withCredentials=!0),a.responseType)try{f.responseType=a.responseType}catch(e){if("json"!==a.responseType)throw e}"function"==typeof a.onDownloadProgress&&f.addEventListener("progress",a.onDownloadProgress),"function"==typeof a.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",a.onUploadProgress),a.cancelToken&&a.cancelToken.promise.then(function(e){f&&(f.abort(),d(e),f=null)}),void 0===l&&(l=null),f.send(l)})};
},{"./../utils":28,"./../core/settle":41,"./../helpers/buildURL":42,"./../helpers/parseHeaders":43,"./../helpers/isURLSameOrigin":44,"./../helpers/btoa":45,"../core/createError":46,"./../helpers/cookies":47}],38:[function(require,module,exports) {
"use strict";var e=require("../utils");module.exports=function(t,r){e.forEach(t,function(e,o){o!==r&&o.toUpperCase()===r.toUpperCase()&&(t[r]=e,delete t[o])})};
},{"../utils":28}],29:[function(require,module,exports) {
var process = require("process");
function e(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function t(){var e;return"undefined"!=typeof XMLHttpRequest?e=require("./adapters/xhr"):void 0!==r&&(e=require("./adapters/http")),e}var r=require("process"),n=require("./utils"),a=require("./helpers/normalizeHeaderName"),i={"Content-Type":"application/x-www-form-urlencoded"},o={adapter:t(),transformRequest:[function(t,r){return a(r,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(e(r,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)?(e(r,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};o.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],function(e){o.headers[e]={}}),n.forEach(["post","put","patch"],function(e){o.headers[e]=n.merge(i)}),module.exports=o;
},{"./utils":28,"process":36,"./adapters/http":37,"./helpers/normalizeHeaderName":38,"./adapters/xhr":37}],48:[function(require,module,exports) {
"use strict";var r=require("./../utils");module.exports=function(t,u,e){return r.forEach(e,function(r){t=r(t,u)}),t};
},{"./../utils":28}],34:[function(require,module,exports) {
"use strict";module.exports=function(t){return!(!t||!t.__CANCEL__)};
},{}],49:[function(require,module,exports) {
"use strict";module.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)};
},{}],50:[function(require,module,exports) {
"use strict";module.exports=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e};
},{}],39:[function(require,module,exports) {
"use strict";function e(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var r=require("./../utils"),a=require("./transformData"),s=require("../cancel/isCancel"),t=require("../defaults"),n=require("./../helpers/isAbsoluteURL"),o=require("./../helpers/combineURLs");module.exports=function(d){e(d),d.baseURL&&!n(d.url)&&(d.url=o(d.baseURL,d.url)),d.headers=d.headers||{},d.data=a(d.data,d.headers,d.transformRequest),d.headers=r.merge(d.headers.common||{},d.headers[d.method]||{},d.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete d.headers[e]});return(d.adapter||t.adapter)(d).then(function(r){return e(d),r.data=a(r.data,r.headers,d.transformResponse),r},function(r){return s(r)||(e(d),r&&r.response&&(r.response.data=a(r.response.data,r.response.headers,d.transformResponse))),Promise.reject(r)})};
},{"./../utils":28,"../defaults":29,"./transformData":48,"../cancel/isCancel":34,"./../helpers/isAbsoluteURL":49,"./../helpers/combineURLs":50}],40:[function(require,module,exports) {
"use strict";function t(){this.handlers=[]}var e=require("./../utils");t.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},t.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},t.prototype.forEach=function(t){e.forEach(this.handlers,function(e){null!==e&&t(e)})},module.exports=t;
},{"./../utils":28}],31:[function(require,module,exports) {
"use strict";function e(e){this.defaults=e,this.interceptors={request:new o,response:new o}}var t=require("./../defaults"),r=require("./../utils"),o=require("./InterceptorManager"),s=require("./dispatchRequest");e.prototype.request=function(e){"string"==typeof e&&(e=r.merge({url:arguments[0]},arguments[1])),(e=r.merge(t,this.defaults,{method:"get"},e)).method=e.method.toLowerCase();var o=[s,void 0],u=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){o.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){o.push(e.fulfilled,e.rejected)});o.length;)u=u.then(o.shift(),o.shift());return u},r.forEach(["delete","get","head","options"],function(t){e.prototype[t]=function(e,o){return this.request(r.merge(o||{},{method:t,url:e}))}}),r.forEach(["post","put","patch"],function(t){e.prototype[t]=function(e,o,s){return this.request(r.merge(s||{},{method:t,url:e,data:o}))}}),module.exports=e;
},{"./../defaults":29,"./../utils":28,"./dispatchRequest":39,"./InterceptorManager":40}],32:[function(require,module,exports) {
"use strict";function t(t){this.message=t}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,module.exports=t;
},{}],33:[function(require,module,exports) {
"use strict";function e(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var o;this.promise=new Promise(function(e){o=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),o(r.reason))})}var n=require("./Cancel");e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.source=function(){var n;return{token:new e(function(e){n=e}),cancel:n}},module.exports=e;
},{"./Cancel":32}],35:[function(require,module,exports) {
"use strict";module.exports=function(n){return function(t){return n.apply(null,t)}};
},{}],27:[function(require,module,exports) {
"use strict";function e(e){var u=new t(e),l=n(t.prototype.request,u);return r.extend(l,t.prototype,u),r.extend(l,u),l}var r=require("./utils"),n=require("./helpers/bind"),t=require("./core/Axios"),u=require("./defaults"),l=e(u);l.Axios=t,l.create=function(n){return e(r.merge(u,n))},l.Cancel=require("./cancel/Cancel"),l.CancelToken=require("./cancel/CancelToken"),l.isCancel=require("./cancel/isCancel"),l.all=function(e){return Promise.all(e)},l.spread=require("./helpers/spread"),module.exports=l,module.exports.default=l;
},{"./utils":28,"./defaults":29,"./helpers/bind":30,"./core/Axios":31,"./cancel/Cancel":32,"./cancel/CancelToken":33,"./cancel/isCancel":34,"./helpers/spread":35}],8:[function(require,module,exports) {
module.exports=require("./lib/axios");
},{"./lib/axios":27}],3:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var t=require("./js/mock"),i=e(t),r=require("axios"),s=e(r),u=require("fs"),n="https://news-at.zhihu.com/api/4/news/latest";window.onload=function(){};
},{"fs":4,"./js/mock":7,"axios":8}]},{},[3])