// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__,c=t,f=function(e,r,t){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(e,r)||l.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},_=r()?c:f,p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=function(e){return Math.abs(e)},y=d,b=d,s=function(e,r,t,n,o,a){var u,i,l,c,f,_,p;if(e<=0)return o;for(u=n<0?(1-e)*n:0,i=a<0?(1-e)*a:0,l=r,_=0,p=0;p<e;p++)f=l+(c=t[u]),y(l)>=y(c)?_+=l-f+c:_+=c-f+l,l=f,o[i]=l+_,u+=n,i+=a;return o};p(s,"ndarray",(function(e,r,t,n,o,a,u,i){var l,c,f,_,p,d,y;if(e<=0)return a;for(l=o,c=i,f=r,d=0,y=0;y<e;y++)p=f+(_=t[l]),b(f)>=b(_)?d+=f-p+_:d+=_-p+f,f=p,a[c]=f+d,l+=n,c+=u;return a}));var v=s;function m(e,r,t,n,o,a){return v(e,r,t,n,o,a)}return p(m,"ndarray",(function(e,r,t,n,o,a,u,i){return v.ndarray(e,r,t,n,o,a,u,i)})),m},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gcusum=r();
//# sourceMappingURL=browser.js.map
