import{S as e,i as s,s as a,e as t,t as o,k as r,c as l,a as c,g as n,d as i,n as u,b as d,f as p,E as m,K as h,T as f,F as x,V as g}from"../../chunks/vendor-4d9d5a42.js";import{s as w}from"../../chunks/db-571d1704.js";function v(e){let s,a,g,w,v,y,b,E,k,R,P,I;return{c(){s=t("div"),a=t("div"),g=t("form"),w=t("h1"),v=o("Reset Password"),y=r(),b=t("input"),E=r(),k=t("button"),R=o("Send Password Reset Link"),this.h()},l(e){s=l(e,"DIV",{class:!0});var t=c(s);a=l(t,"DIV",{class:!0});var o=c(a);g=l(o,"FORM",{});var r=c(g);w=l(r,"H1",{class:!0});var d=c(w);v=n(d,"Reset Password"),d.forEach(i),y=u(r),b=l(r,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0,autocomplete:!0}),E=u(r),k=l(r,"BUTTON",{type:!0,class:!0});var p=c(k);R=n(p,"Send Password Reset Link"),p.forEach(i),r.forEach(i),o.forEach(i),t.forEach(i),this.h()},h(){d(w,"class","mb-8 text-3xl text-center"),d(b,"id","email"),d(b,"type","email"),d(b,"class","block border border-orange-700 w-full p-3 rounded mb-4"),d(b,"name","email"),b.required="required",d(b,"placeholder","Email"),d(b,"autocomplete","email"),d(k,"type","submit"),d(k,"class","w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"),d(a,"class","bg-white px-6 py-8 rounded shadow-md text-black w-full"),d(s,"class","container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2")},m(t,o){p(t,s,o),m(s,a),m(a,g),m(g,w),m(w,v),m(g,y),m(g,b),m(g,E),m(g,k),m(k,R),P||(I=h(g,"submit",f(e[0])),P=!0)},p:x,i:x,o:x,d(e){e&&i(s),P=!1,I()}}}async function y({fetch:e}){let s;const a=process.env.GOOGLE_API_KEY,t=`https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}?fields=properties.title,sheets.properties.title&key=${a}`;console.log(a),console.log(t);try{s=await e(t),s=await s.json(),console.log(s)}catch(o){console.log(o)}return{props:{survey:s}}}function b(e,s,a){return g.config(),[async function(){await w.auth.signIn({email:"example@email.com",password:"example-password"})},y]}class E extends e{constructor(e){super(),s(this,e,b,v,a,{surveyResult:1})}get surveyResult(){return y}}export{E as default};