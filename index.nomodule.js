(()=>{var p=4,e={};e.a=e.e=e.i=e.o=e.u=e.y=0;e.b=e.f=e.p=e.v=1;e.c=e.g=e.j=e.k=e.q=e.s=e.x=e.z=2;e.d=e.t=3;e.l=4;e.m=e.n=5;e.r=6;function c(n,o){for(var r=String(n).toLowerCase(),u=[],i=-1,a,s,t;++i<r.length;)a=r.charAt(i),t=e[a],i===0?u.push(a.toUpperCase()):t&&t!==s?u.push(t):t===0?t=null:t=s,s=t;return d(u.join("")).slice(0,o||p)}function d(n){for(var o=p-n.length,r=-1;++r<o;)n+="0";return n}var l=document.querySelector("input"),h=document.querySelector("output");l.addEventListener("input",v);v();function v(){h.textContent=c(l.value)}})();