import{S as e,i as a,s,e as r,t,k as o,c as l,a as c,g as d,d as n,n as i,b as u,f as m,E as h,K as f,T as p,F as b}from"../../chunks/vendor-15b3601f.js";import{s as x}from"../../chunks/db-0bed5dc0.js";import"../../chunks/variables-dcdd2c72.js";function g(e){let a,s,x,g,w,v,y,k,E,I,j,N,P,T,q,D,F,V,B,S,U,A,C;return{c(){a=r("div"),s=r("div"),x=r("h1"),g=t("Welcome Back"),w=o(),v=r("form"),y=r("input"),k=o(),E=r("input"),I=o(),j=r("div"),N=r("a"),P=t("Forgot Your Password?"),T=o(),q=r("button"),D=t("Sign In"),F=o(),V=r("div"),B=t("Not registered?\r\n\t\t"),S=r("a"),U=t("Create an account"),this.h()},l(e){a=l(e,"DIV",{class:!0});var r=c(a);s=l(r,"DIV",{class:!0});var t=c(s);x=l(t,"H1",{class:!0});var o=c(x);g=d(o,"Welcome Back"),o.forEach(n),w=i(t),v=l(t,"FORM",{});var u=c(v);y=l(u,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0,autocomplete:!0}),k=i(u),E=l(u,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0}),I=i(u),j=l(u,"DIV",{class:!0});var m=c(j);N=l(m,"A",{href:!0,class:!0});var h=c(N);P=d(h,"Forgot Your Password?"),h.forEach(n),m.forEach(n),T=i(u),q=l(u,"BUTTON",{type:!0,class:!0});var f=c(q);D=d(f,"Sign In"),f.forEach(n),u.forEach(n),t.forEach(n),F=i(r),V=l(r,"DIV",{class:!0});var p=c(V);B=d(p,"Not registered?\r\n\t\t"),S=l(p,"A",{class:!0,href:!0});var b=c(S);U=d(b,"Create an account"),b.forEach(n),p.forEach(n),r.forEach(n),this.h()},h(){u(x,"class","mb-8 text-3xl text-center"),u(y,"id","email"),u(y,"type","email"),u(y,"class","block border border-orange-700 w-full p-3 rounded mb-4"),u(y,"name","email"),y.required="required",u(y,"placeholder","Email"),u(y,"autocomplete","email"),u(E,"id","password"),u(E,"type","password"),u(E,"class","block border border-orange-700 w-full p-3 rounded mb-4"),u(E,"name","password"),E.required="required",u(E,"placeholder","Password"),u(N,"href","../auth/resetpassword"),u(N,"class","text-sm text-gray-600 dark:text-gray-400 hover:underline"),u(j,"class","flex justify-between mt-4 mb-3"),u(q,"type","submit"),u(q,"class","w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"),u(s,"class","bg-white px-6 py-8 rounded shadow-md text-black w-full"),u(S,"class","no-underline border-b border-blue text-blue"),u(S,"href","../auth/register"),u(V,"class","text-grey-dark mt-6"),u(a,"class","container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2")},m(r,t){m(r,a,t),h(a,s),h(s,x),h(x,g),h(s,w),h(s,v),h(v,y),h(v,k),h(v,E),h(v,I),h(v,j),h(j,N),h(N,P),h(v,T),h(v,q),h(q,D),h(a,F),h(a,V),h(V,B),h(V,S),h(S,U),A||(C=f(v,"submit",p(e[0])),A=!0)},p:b,i:b,o:b,d(e){e&&n(a),A=!1,C()}}}function w(e){return[async function(){await x.auth.signIn({email:"example@email.com",password:"example-password"})}]}class v extends e{constructor(e){super(),a(this,e,w,g,s,{})}}export{v as default};
