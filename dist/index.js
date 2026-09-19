"use strict";var n=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var p=n(function(m,s){
function L(r){return r===0?.6931471824645996:.6931471824645996+r*.24022650718688965}s.exports=L
});var q=n(function(w,E){
function W(r){return r===0?.055505409836769104:.055505409836769104+r*.009618354961276054}E.exports=W
});var I=n(function(z,O){
var y=require('@stdlib/math-base-assert-is-nanf/dist'),B=require('@stdlib/number-float32-base-to-word/dist'),F=require('@stdlib/number-float64-base-from-words/dist'),a=require('@stdlib/number-float64-base-to-float32/dist'),l=require('@stdlib/constants-float32-pinf/dist'),T=require('@stdlib/constants-float32-ninf/dist'),D=p(),Z=q(),N=16,_=4,d=[.7071067811865476,.7384130729697497,.7711054127039704,.8052451659746271,.8408964152537145,.8781260801866497,.9170040432046712,.9576032806985737,1,1.0442737824274138,1.0905077326652577,1.1387886347566916,1.189207115002721,1.241857812073484,1.2968395546510096,1.3542555469368927],R=a(786432),A=128,G=-150,c=a(1/(1<<25)),H=a(-c),S=1072693248;function U(r){var e,v,u,o,i,f,t;return r=a(r),y(r)||r===l?r:r===T?0:r>=A?l:r<=G?0:r>H&&r<c?a(1+r):(i=a(r+R),v=B(i)>>>0,v+=N/2,o=S+(v>>>_<<20)>>>0,v&=N-1,i=a(i-R),t=r-i,e=F(o,0),u=d[v],f=u*t,u=u+f*D(t)+f*(t*t)*Z(t),a(u*e))}O.exports=U
});var h=I();module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
