import{O as s,S as a,i as e,s as i,e as t,t as o,c,a as r,g as n,d as I,f as p,H as u,P as l,I as d}from"../../chunks/vendor-309190ea.js";const m=s("https://dlesnsqsssibdwrcckyc.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzE5MzIzOCwiZXhwIjoxOTQyNzY5MjM4fQ.AFibbQXFIrqWux9x1oLm5_pzviAAoO7CSr8gADUdJkI");function b(s){let a,e,i,m;return{c(){a=t("button"),e=o("Register")},l(s){a=c(s,"BUTTON",{});var i=r(a);e=n(i,"Register"),i.forEach(I)},m(t,o){p(t,a,o),u(a,e),i||(m=l(a,"Click",s[0]),i=!0)},p:d,i:d,o:d,d(s){s&&I(a),i=!1,m()}}}function f(s){return[async function(){await m.auth.signUp({email:"example@email.com",password:"example-password"})}]}export default class extends a{constructor(s){super(),e(this,s,f,b,i,{})}}
