import{S as r,i as s,s as a,e as t,t as e,c as n,a as o,g as c,d as u,f,H as l,h as p,k as m,l as d,n as i,I as h}from"./chunks/vendor-309190ea.js";function E(r){let s,a,m=r[1].frame+"";return{c(){s=t("pre"),a=e(m)},l(r){s=n(r,"PRE",{});var t=o(s);a=c(t,m),t.forEach(u)},m(r,t){f(r,s,t),l(s,a)},p(r,s){2&s&&m!==(m=r[1].frame+"")&&p(a,m)},d(r){r&&u(s)}}}function k(r){let s,a,m=r[1].stack+"";return{c(){s=t("pre"),a=e(m)},l(r){s=n(r,"PRE",{});var t=o(s);a=c(t,m),t.forEach(u)},m(r,t){f(r,s,t),l(s,a)},p(r,s){2&s&&m!==(m=r[1].stack+"")&&p(a,m)},d(r){r&&u(s)}}}function v(r){let s,a,v,g,x,P,R,H,N=r[1].message+"",$=r[1].frame&&E(r),j=r[1].stack&&k(r);return{c(){s=t("h1"),a=e(r[0]),v=m(),g=t("pre"),x=e(N),P=m(),$&&$.c(),R=m(),j&&j.c(),H=d()},l(t){s=n(t,"H1",{});var e=o(s);a=c(e,r[0]),e.forEach(u),v=i(t),g=n(t,"PRE",{});var f=o(g);x=c(f,N),f.forEach(u),P=i(t),$&&$.l(t),R=i(t),j&&j.l(t),H=d()},m(r,t){f(r,s,t),l(s,a),f(r,v,t),f(r,g,t),l(g,x),f(r,P,t),$&&$.m(r,t),f(r,R,t),j&&j.m(r,t),f(r,H,t)},p(r,[s]){1&s&&p(a,r[0]),2&s&&N!==(N=r[1].message+"")&&p(x,N),r[1].frame?$?$.p(r,s):($=E(r),$.c(),$.m(R.parentNode,R)):$&&($.d(1),$=null),r[1].stack?j?j.p(r,s):(j=k(r),j.c(),j.m(H.parentNode,H)):j&&(j.d(1),j=null)},i:h,o:h,d(r){r&&u(s),r&&u(v),r&&u(g),r&&u(P),$&&$.d(r),r&&u(R),j&&j.d(r),r&&u(H)}}}function g({error:r,status:s}){return{props:{error:r,status:s}}}function x(r,s,a){let{status:t}=s,{error:e}=s;return r.$$set=r=>{"status"in r&&a(0,t=r.status),"error"in r&&a(1,e=r.error)},[t,e]}export default class extends r{constructor(r){super(),s(this,r,x,v,a,{status:0,error:1})}}export{g as load};
