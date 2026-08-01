"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var c=o(function(O,v){
var m=require('@stdlib/blas-ext-base-gcusumkbn/dist').ndarray;function x(e,r,u,a,n,t,s,i){return m(e,r,u,a,n,t,s,i)}v.exports=x
});var d=o(function(R,y){
var q=require('@stdlib/strided-base-stride2offset/dist'),g=c();function p(e,r,u,a,n,t){var s=q(e,a),i=q(e,t);return g(e,r,u,a,s,n,t,i)}y.exports=p
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=d(),k=c();b(f,"ndarray",k);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
