const e={},n=function(n,r){return r&&0!==r.length?Promise.all(r.map((n=>{if((n=`/mulligans-lane/_app/${n}`)in e)return;e[n]=!0;const r=n.endsWith(".css"),t=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const s=document.createElement("link");return s.rel=r?"stylesheet":"modulepreload",r||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),r?new Promise(((e,n)=>{s.addEventListener("load",e),s.addEventListener("error",n)})):void 0}))).then((()=>n())):n()};export{n as _};
