"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=o(function(O,v){
var m=require('@stdlib/blas-ext-base-gcusumkbn/dist').ndarray;function x(e,r,t,u,n,a,s,i){return m(e,r,t,u,n,a,s,i)}v.exports=x
});var d=o(function(R,y){
var q=require('@stdlib/strided-base-stride2offset/dist'),g=c();function p(e,r,t,u,n,a){var s=q(e,u),i=q(e,a);return g(e,r,t,u,s,n,a,i)}y.exports=p
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=d(),k=c();b(f,"ndarray",k);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
