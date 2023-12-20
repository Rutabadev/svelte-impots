var Et=Object.defineProperty;var Ct=(e,t,n)=>t in e?Et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Fe=(e,t,n)=>(Ct(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const a of u.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(r){if(r.ep)return;r.ep=!0;const u=n(r);fetch(r.href,u)}})();function oe(){}const ft=e=>e;function Xe(e,t){for(const n in t)e[n]=t[n];return e}function dt(e){return e()}function Ze(){return Object.create(null)}function Y(e){e.forEach(dt)}function Re(e){return typeof e=="function"}function Ae(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ft(e){return Object.keys(e).length===0}function et(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function tt(e){return e??""}const ht=typeof window<"u";let Nt=ht?()=>window.performance.now():()=>Date.now(),Me=ht?e=>requestAnimationFrame(e):oe;const ie=new Set;function mt(e){ie.forEach(t=>{t.c(e)||(ie.delete(t),t.f())}),ie.size!==0&&Me(mt)}function St(e){let t;return ie.size===0&&Me(mt),{promise:new Promise(n=>{ie.add(t={c:e,f:n})}),abort(){ie.delete(t)}}}const jt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function c(e,t){e.appendChild(t)}function pt(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function It(e){const t=y("style");return t.textContent="/* empty */",Ot(pt(e),t),t.sheet}function Ot(e,t){return c(e.head||e,t),t.sheet}function V(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function _t(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function ge(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function R(e){return document.createTextNode(e)}function F(){return R(" ")}function I(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function i(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ye(e){return e===""?null:+e}function $t(e){return Array.from(e.childNodes)}function Z(e,t){t=""+t,e.data!==t&&(e.data=t)}function U(e,t){e.value=t??""}function Pt(e,t,n,l){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function nt(e,t,n){for(let l=0;l<e.options.length;l+=1){const r=e.options[l];if(r.__value===t){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Rt(e){const t=e.querySelector(":checked");return t&&t.__value}function gt(e,t,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:l})}const we=new Map;let be=0;function At(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Mt(e,t){const n={stylesheet:It(t),rules:{}};return we.set(e,n),n}function lt(e,t,n,l,r,u,a,s=0){const h=16.666/l;let o=`{
`;for(let g=0;g<=1;g+=h){const b=t+(n-t)*u(g);o+=g*100+`%{${a(b,1-b)}}
`}const d=o+`100% {${a(n,1-n)}}
}`,f=`__svelte_${At(d)}_${s}`,m=pt(e),{stylesheet:E,rules:_}=we.get(m)||Mt(m,e);_[f]||(_[f]=!0,E.insertRule(`@keyframes ${f} ${d}`,E.cssRules.length));const w=e.style.animation||"";return e.style.animation=`${w?`${w}, `:""}${f} ${l}ms linear ${r}ms 1 both`,be+=1,f}function Tt(e,t){const n=(e.style.animation||"").split(", "),l=n.filter(t?u=>u.indexOf(t)<0:u=>u.indexOf("__svelte")===-1),r=n.length-l.length;r&&(e.style.animation=l.join(", "),be-=r,be||Lt())}function Lt(){Me(()=>{be||(we.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&T(t)}),we.clear())})}let pe;function me(e){pe=e}function vt(){if(!pe)throw new Error("Function called outside component initialization");return pe}function Dt(e){vt().$$.on_mount.push(e)}function qt(){const e=vt();return(t,n,{cancelable:l=!1}={})=>{const r=e.$$.callbacks[t];if(r){const u=gt(t,n,{cancelable:l});return r.slice().forEach(a=>{a.call(e,u)}),!u.defaultPrevented}return!0}}const re=[],je=[];let se=[];const Ie=[],yt=Promise.resolve();let Oe=!1;function wt(){Oe||(Oe=!0,yt.then(bt))}function Bt(){return wt(),yt}function J(e){se.push(e)}function zt(e){Ie.push(e)}const Ne=new Set;let le=0;function bt(){if(le!==0)return;const e=pe;do{try{for(;le<re.length;){const t=re[le];le++,me(t),Ht(t.$$)}}catch(t){throw re.length=0,le=0,t}for(me(null),re.length=0,le=0;je.length;)je.pop()();for(let t=0;t<se.length;t+=1){const n=se[t];Ne.has(n)||(Ne.add(n),n())}se.length=0}while(re.length);for(;Ie.length;)Ie.pop()();Oe=!1,Ne.clear(),me(e)}function Ht(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}function Kt(e){const t=[],n=[];se.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),se=t}let he;function Ut(){return he||(he=Promise.resolve(),he.then(()=>{he=null})),he}function Se(e,t,n){e.dispatchEvent(gt(`${t?"intro":"outro"}${n}`))}const ve=new Set;let H;function Te(){H={r:0,c:[],p:H}}function Le(){H.r||Y(H.c),H=H.p}function A(e,t){e&&e.i&&(ve.delete(e),e.i(t))}function Q(e,t,n,l){if(e&&e.o){if(ve.has(e))return;ve.add(e),H.c.push(()=>{ve.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}const Vt={duration:0};function ue(e,t,n,l){let u=t(e,n,{direction:"both"}),a=l?0:1,s=null,h=null,o=null,d;function f(){o&&Tt(e,o)}function m(_,w){const g=_.b-a;return w*=Math.abs(g),{a,b:_.b,d:g,duration:w,start:_.start,end:_.start+w,group:_.group}}function E(_){const{delay:w=0,duration:g=300,easing:b=ft,tick:p=oe,css:k}=u||Vt,C={start:Nt()+w,b:_};_||(C.group=H,H.r+=1),"inert"in e&&(_?d!==void 0&&(e.inert=d):(d=e.inert,e.inert=!0)),s||h?h=C:(k&&(f(),o=lt(e,a,_,g,w,b,k)),_&&p(0,1),s=m(C,g),J(()=>Se(e,_,"start")),St(D=>{if(h&&D>h.start&&(s=m(h,g),h=null,Se(e,s.b,"start"),k&&(f(),o=lt(e,a,s.b,s.duration,0,b,u.css))),s){if(D>=s.end)p(a=s.b,1-a),Se(e,s.b,"end"),h||(s.b?f():--s.group.r||Y(s.group.c)),s=null;else if(D>=s.start){const O=D-s.start;a=s.a+s.d*b(O/s.duration),p(a,1-a)}}return!!(s||h)}))}return{run(_){Re(u)?Ut().then(()=>{u=u({direction:_?"in":"out"}),E(_)}):E(_)},end(){f(),s=h=null}}}function ke(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Jt(e,t,n){const l=e.$$.props[t];l!==void 0&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function rt(e){e&&e.c()}function $e(e,t,n){const{fragment:l,after_update:r}=e.$$;l&&l.m(t,n),J(()=>{const u=e.$$.on_mount.map(dt).filter(Re);e.$$.on_destroy?e.$$.on_destroy.push(...u):Y(u),e.$$.on_mount=[]}),r.forEach(J)}function Pe(e,t){const n=e.$$;n.fragment!==null&&(Kt(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Qt(e,t){e.$$.dirty[0]===-1&&(re.push(e),wt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function De(e,t,n,l,r,u,a=null,s=[-1]){const h=pe;me(e);const o=e.$$={fragment:null,ctx:[],props:u,update:oe,not_equal:r,bound:Ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:Ze(),dirty:s,skip_bound:!1,root:t.target||h.$$.root};a&&a(o.root);let d=!1;if(o.ctx=n?n(e,t.props||{},(f,m,...E)=>{const _=E.length?E[0]:m;return o.ctx&&r(o.ctx[f],o.ctx[f]=_)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](_),d&&Qt(e,f)),m}):[],o.update(),d=!0,Y(o.before_update),o.fragment=l?l(o.ctx):!1,t.target){if(t.hydrate){const f=$t(t.target);o.fragment&&o.fragment.l(f),f.forEach(T)}else o.fragment&&o.fragment.c();t.intro&&A(e.$$.fragment),$e(e,t.target,t.anchor),bt()}me(h)}class qe{constructor(){Fe(this,"$$");Fe(this,"$$set")}$destroy(){Pe(this,1),this.$destroy=oe}$on(t,n){if(!Re(n))return oe;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!Ft(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Yt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Yt);function ae(e,{delay:t=0,duration:n=400,easing:l=ft}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:l,css:u=>`opacity: ${u*r}`}}function it(e,t,n){const l=e.slice();return l[2]=t[n],l[4]=n,l}function st(e){let t,n=e[2].due.toFixed(2)+"",l,r,u;return{c(){t=y("td"),l=R(n),i(t,"class","svelte-1yjnllh")},m(a,s){V(a,t,s),c(t,l),u=!0},p(a,s){(!u||s&1)&&n!==(n=a[2].due.toFixed(2)+"")&&Z(l,n)},i(a){u||(a&&J(()=>{u&&(r||(r=ue(t,ae,{},!0)),r.run(1))}),u=!0)},o(a){a&&(r||(r=ue(t,ae,{},!1)),r.run(0)),u=!1},d(a){a&&T(t),a&&r&&r.end()}}}function ot(e){let t,n,l=e[1].format((e[0][e[4]-1]||{limit:-1}).limit+1)+"",r,u,a=e[1].format(e[2].limit)+"",s,h,o,d=e[2].tax+"",f,m,E,_,w,g,b=e[2].due&&st(e);return{c(){t=y("tr"),n=y("td"),r=R(l),u=R(` -
          `),s=R(a),h=F(),o=y("td"),f=R(d),m=R(" %"),E=F(),b&&b.c(),_=F(),i(n,"class","svelte-1yjnllh"),i(o,"class","svelte-1yjnllh"),i(t,"class","svelte-1yjnllh")},m(p,k){V(p,t,k),c(t,n),c(n,r),c(n,u),c(n,s),c(t,h),c(t,o),c(o,f),c(o,m),c(t,E),b&&b.m(t,null),c(t,_),g=!0},p(p,k){(!g||k&1)&&l!==(l=p[1].format((p[0][p[4]-1]||{limit:-1}).limit+1)+"")&&Z(r,l),(!g||k&1)&&a!==(a=p[1].format(p[2].limit)+"")&&Z(s,a),(!g||k&1)&&d!==(d=p[2].tax+"")&&Z(f,d),p[2].due?b?(b.p(p,k),k&1&&A(b,1)):(b=st(p),b.c(),A(b,1),b.m(t,_)):b&&(Te(),Q(b,1,1,()=>{b=null}),Le())},i(p){g||(A(b),p&&J(()=>{g&&(w||(w=ue(t,ae,{},!0)),w.run(1))}),g=!0)},o(p){Q(b),p&&(w||(w=ue(t,ae,{},!1)),w.run(0)),g=!1},d(p){p&&T(t),b&&b.d(),p&&w&&w.end()}}}function xt(e){let t,n,l,r,u,a=ke(e[0]),s=[];for(let o=0;o<a.length;o+=1)s[o]=ot(it(e,a,o));const h=o=>Q(s[o],1,1,()=>{s[o]=null});return{c(){t=y("table"),n=y("thead"),n.innerHTML='<tr class="svelte-1yjnllh"><th class="svelte-1yjnllh">Tranche</th> <th class="svelte-1yjnllh">Taxe</th> <th class="svelte-1yjnllh">Montant à payer</th></tr>',l=F(),r=y("tbody");for(let o=0;o<s.length;o+=1)s[o].c();i(n,"class","svelte-1yjnllh"),i(r,"class","svelte-1yjnllh"),i(t,"class","svelte-1yjnllh")},m(o,d){V(o,t,d),c(t,n),c(t,l),c(t,r);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(r,null);u=!0},p(o,[d]){if(d&3){a=ke(o[0]);let f;for(f=0;f<a.length;f+=1){const m=it(o,a,f);s[f]?(s[f].p(m,d),A(s[f],1)):(s[f]=ot(m),s[f].c(),A(s[f],1),s[f].m(r,null))}for(Te(),f=a.length;f<s.length;f+=1)h(f);Le()}},i(o){if(!u){for(let d=0;d<a.length;d+=1)A(s[d]);u=!0}},o(o){s=s.filter(Boolean);for(let d=0;d<s.length;d+=1)Q(s[d]);u=!1},d(o){o&&T(t),_t(s,o)}}}function Gt(e,t,n){let{paliers:l}=t;const r=new Intl.NumberFormat("fr-FR");return e.$$set=u=>{"paliers"in u&&n(0,l=u.paliers)},[l,r]}class Wt extends qe{constructor(t){super(),De(this,t,Gt,xt,Ae,{paliers:0})}}function ut(e){let t,n,l;return{c(){t=ge("rect"),i(t,"x","1.5"),i(t,"y","1.5"),i(t,"width","57"),i(t,"height","33"),i(t,"rx","16.5"),i(t,"fill","none"),i(t,"stroke","orange"),i(t,"stroke-width","3"),i(t,"class","svelte-93bnpv")},m(r,u){V(r,t,u),l=!0},i(r){l||(r&&J(()=>{l&&(n||(n=ue(t,ae,{duration:50},!0)),n.run(1))}),l=!0)},o(r){r&&(n||(n=ue(t,ae,{duration:50},!1)),n.run(0)),l=!1},d(r){r&&T(t),r&&n&&n.end()}}}function Xt(e){let t,n,l,r,u,a,s,h,o,d,f,m,E,_,w,g,b,p=e[2]&&ut();return{c(){t=y("div"),n=y("span"),l=R(e[0]),u=F(),a=ge("svg"),s=ge("rect"),o=ge("circle"),p&&p.c(),f=F(),m=y("span"),E=R(e[1]),i(n,"color",r=e[4]?"white":"orange"),i(s,"x","6"),i(s,"y","6"),i(s,"width","48"),i(s,"height","24"),i(s,"rx","12"),i(s,"fill",h=e[4]?"orange":"gray"),i(s,"class","svelte-93bnpv"),i(o,"cx",d=e[4]?42:18),i(o,"cy","18"),i(o,"r","7.5"),i(o,"fill","white"),i(o,"class","svelte-93bnpv"),i(a,"width","60"),i(a,"height","36"),i(a,"aria-hidden","true"),Pt(a,"margin-rigth","4"),i(m,"color",_=e[4]?"orange":"white"),i(t,"class",w=tt(e[7].class)+" svelte-93bnpv"),i(t,"tabindex","0")},m(k,C){V(k,t,C),c(t,n),c(n,l),c(t,u),c(t,a),c(a,s),c(a,o),p&&p.m(a,null),c(t,f),c(t,m),c(m,E),g||(b=[I(t,"click",e[5]),I(t,"mouseenter",e[9]),I(t,"mouseleave",e[10]),I(t,"keydown",e[6]),I(t,"focus",e[11]),I(t,"blur",e[12])],g=!0)},p(k,[C]){C&1&&Z(l,k[0]),C&16&&r!==(r=k[4]?"white":"orange")&&i(n,"color",r),C&16&&h!==(h=k[4]?"orange":"gray")&&i(s,"fill",h),C&16&&d!==(d=k[4]?42:18)&&i(o,"cx",d),k[2]?p?C&4&&A(p,1):(p=ut(),p.c(),A(p,1),p.m(a,null)):p&&(Te(),Q(p,1,1,()=>{p=null}),Le()),C&2&&Z(E,k[1]),C&16&&_!==(_=k[4]?"orange":"white")&&i(m,"color",_),C&128&&w!==(w=tt(k[7].class)+" svelte-93bnpv")&&i(t,"class",w)},i(k){A(p)},o(k){Q(p)},d(k){k&&T(t),p&&p.d(),g=!1,Y(b)}}}function Zt(e,t,n){let l,{value:r}=t,{left:u="off"}=t,{right:a="on"}=t;const s=qt();let h=!1,o=!1;const d=()=>{n(4,l=!l),n(8,r=l),s("change")},f=({code:g})=>{if(o)switch(g){case"Enter":d();break;case"Space":d();break;case"ArrowLeft":l&&d();break;case"ArrowRight":!l&&d();break}},m=()=>n(2,h=!0),E=()=>n(2,h=!1),_=()=>n(3,o=!0),w=()=>n(3,o=!1);return e.$$set=g=>{n(7,t=Xe(Xe({},t),et(g))),"value"in g&&n(8,r=g.value),"left"in g&&n(0,u=g.left),"right"in g&&n(1,a=g.right)},e.$$.update=()=>{e.$$.dirty&258&&n(4,l=r===a||r===!0)},t=et(t),[u,a,h,o,l,d,f,t,r,m,E,_,w]}class en extends qe{constructor(t){super(),De(this,t,Zt,Xt,Ae,{value:8,left:0,right:1})}}const{document:tn}=jt;function at(e,t,n){const l=e.slice();return l[1]=t[n],l}function ct(e){let t,n=e[1]+"",l;return{c(){t=y("option"),l=R(n),t.__value=e[1],U(t,t.__value),i(t,"class","svelte-alw3rr")},m(r,u){V(r,t,u),c(t,l)},p:oe,d(r){r&&T(t)}}}function nn(e){let t,n,l,r,u,a,s,h,o,d,f,m,E,_,w,g,b,p,k,C,D,O,x,q,N,L,$,Be,ee,ce,ze,B,He,te,fe,Ke,z,Ue,K,M,Ve,de,Je,_e=new Intl.NumberFormat("fr-FR",{style:"percent",minimumFractionDigits:2}).format(e[0]/e[2]||0)+"",Ee,Qe,G,W,Ce,Ye;function kt(v){e[13](v)}let xe={class:"theme-switch",left:"☀️",right:"🌕"};e[5]!==void 0&&(xe.value=e[5]),r=new en({props:xe}),je.push(()=>Jt(r,"value",kt)),r.$on("change",e[10]);let ne=ke(Object.keys(e[9]).reverse()),S=[];for(let v=0;v<ne.length;v+=1)S[v]=ct(at(e,ne,v));return G=new Wt({props:{paliers:e[6]}}),{c(){t=y("meta"),n=F(),l=y("main"),rt(r.$$.fragment),a=F(),s=y("form"),h=y("div"),o=y("div"),d=y("label"),d.textContent="Revenu",f=F(),m=y("input"),E=F(),_=y("datalist"),w=y("option"),g=y("option"),b=y("option"),p=F(),k=y("div"),C=y("label"),C.textContent="En couple",D=F(),O=y("input"),x=F(),q=y("div"),N=y("label"),N.textContent="Nombre d'enfants",L=F(),$=y("input"),Be=F(),ee=y("div"),ce=y("label"),ce.textContent="Impôt",ze=F(),B=y("input"),He=F(),te=y("div"),fe=y("label"),fe.textContent="Après impôt",Ke=F(),z=y("input"),Ue=F(),K=y("div"),M=y("select");for(let v=0;v<S.length;v+=1)S[v].c();Ve=F(),de=y("div"),Je=R("Taux final: "),Ee=R(_e),Qe=F(),rt(G.$$.fragment),i(t,"name","color-scheme"),i(t,"content","light dark"),i(d,"for","revenu"),i(d,"class","svelte-alw3rr"),i(m,"id","revenu"),i(m,"type","number"),i(m,"min","0"),i(m,"step","1"),i(m,"list","defaultNumbers"),i(m,"class","svelte-alw3rr"),i(o,"class","subwrapper svelte-alw3rr"),w.__value="33000",U(w,w.__value),g.__value="55000",U(g,g.__value),b.__value="178000",U(b,b.__value),i(_,"id","defaultNumbers"),i(C,"for","inCouple"),i(C,"class","svelte-alw3rr"),i(O,"id","inCouple"),i(O,"type","checkbox"),i(O,"class","svelte-alw3rr"),i(k,"class","subwrapper checkbox svelte-alw3rr"),i(N,"for","nbChildren"),i(N,"class","svelte-alw3rr"),i($,"id","nbChildren"),i($,"type","number"),i($,"min","0"),i($,"class","svelte-alw3rr"),i(q,"class","subwrapper svelte-alw3rr"),i(h,"class","wrapper svelte-alw3rr"),i(ce,"for","impot"),i(ce,"class","svelte-alw3rr"),i(B,"id","impot"),i(B,"type","text"),B.readOnly=!0,B.value=e[8],i(B,"class","svelte-alw3rr"),i(ee,"class","subwrapper svelte-alw3rr"),i(fe,"for","net"),i(fe,"class","svelte-alw3rr"),i(z,"id","net"),i(z,"type","text"),z.readOnly=!0,z.value=e[7],i(z,"class","svelte-alw3rr"),i(te,"class","subwrapper svelte-alw3rr"),i(M,"class","year-select svelte-alw3rr"),i(M,"name","year"),e[1]===void 0&&J(()=>e[17].call(M)),i(de,"class","svelte-alw3rr"),i(K,"class","infos svelte-alw3rr"),i(l,"class","svelte-alw3rr")},m(v,j){c(tn.head,t),V(v,n,j),V(v,l,j),$e(r,l,null),c(l,a),c(l,s),c(s,h),c(h,o),c(o,d),c(o,f),c(o,m),U(m,e[2]),c(h,E),c(h,_),c(_,w),c(_,g),c(_,b),c(h,p),c(h,k),c(k,C),c(k,D),c(k,O),O.checked=e[3],c(h,x),c(h,q),c(q,N),c(q,L),c(q,$),U($,e[4]),c(s,Be),c(s,ee),c(ee,ce),c(ee,ze),c(ee,B),c(s,He),c(s,te),c(te,fe),c(te,Ke),c(te,z),c(l,Ue),c(l,K),c(K,M);for(let X=0;X<S.length;X+=1)S[X]&&S[X].m(M,null);nt(M,e[1],!0),c(K,Ve),c(K,de),c(de,Je),c(de,Ee),c(K,Qe),$e(G,K,null),W=!0,Ce||(Ye=[I(m,"input",e[14]),I(m,"input",e[11]),I(O,"change",e[15]),I(O,"change",e[11]),I($,"input",e[16]),I($,"input",e[11]),I(M,"change",e[17]),I(M,"change",e[11])],Ce=!0)},p(v,[j]){const X={};if(!u&&j&32&&(u=!0,X.value=v[5],zt(()=>u=!1)),r.$set(X),j&4&&ye(m.value)!==v[2]&&U(m,v[2]),j&8&&(O.checked=v[3]),j&16&&ye($.value)!==v[4]&&U($,v[4]),(!W||j&256&&B.value!==v[8])&&(B.value=v[8]),(!W||j&128&&z.value!==v[7])&&(z.value=v[7]),j&512){ne=ke(Object.keys(v[9]).reverse());let P;for(P=0;P<ne.length;P+=1){const We=at(v,ne,P);S[P]?S[P].p(We,j):(S[P]=ct(We),S[P].c(),S[P].m(M,null))}for(;P<S.length;P+=1)S[P].d(1);S.length=ne.length}j&514&&nt(M,v[1]),(!W||j&5)&&_e!==(_e=new Intl.NumberFormat("fr-FR",{style:"percent",minimumFractionDigits:2}).format(v[0]/v[2]||0)+"")&&Z(Ee,_e);const Ge={};j&64&&(Ge.paliers=v[6]),G.$set(Ge)},i(v){W||(A(r.$$.fragment,v),A(G.$$.fragment,v),W=!0)},o(v){Q(r.$$.fragment,v),Q(G.$$.fragment,v),W=!1},d(v){v&&(T(n),T(l)),T(t),Pe(r),_t(S,v),Pe(G),Ce=!1,Y(Ye)}}}function ln({inCouple:e,nbChildren:t}){let n=1;e&&(n+=1);for(let l=0;l<t;l++)l<3?n+=.5:n+=1;return n}function rn(e,t,n){let l,r,u,a=0;const s=new Intl.NumberFormat("fr-FR",{minimumFractionDigits:0,maximumFractionDigits:0,style:"currency",currency:"EUR"});let h=0,o=0,d=!1,f=0,m,E=!1;const _={2019:[{limit:10064,tax:0,due:0},{limit:27794,tax:14,due:0},{limit:74517,tax:30,due:0},{limit:157806,tax:41,due:0},{limit:1/0,tax:45,due:0}],2020:[{limit:10064,tax:0,due:0},{limit:25659,tax:11,due:0},{limit:73369,tax:30,due:0},{limit:157806,tax:41,due:0},{limit:1/0,tax:45,due:0}],2021:[{limit:10084,tax:0,due:0},{limit:25710,tax:11,due:0},{limit:73516,tax:30,due:0},{limit:158122,tax:41,due:0},{limit:1/0,tax:45,due:0}]};let w="2021";Dt(()=>{localStorage.getItem("darkTheme")?(n(5,m=JSON.parse(localStorage.getItem("darkTheme"))),document.documentElement.style.colorScheme=m?"dark":"light"):window.matchMedia("(prefers-color-scheme: dark)").matches&&n(5,m=!0),E=!0});function g(){E&&(document.documentElement.style.colorScheme=m?"dark":"light",localStorage.setItem("darkTheme",m.toString()))}async function b(){await Bt(),document.querySelector("form").reportValidity();const x=ln({inCouple:d,nbChildren:f}),q=a/x;n(6,u=u.map(N=>(N.due=0,N)));for(let N=0;N<u.filter(({limit:L})=>L<q).length+1;N++){const L=u[N],$=u[N-1]||{limit:-1};L.due=Math.max(Math.min(L.limit,q)-($.limit+1),0)*(L.tax/100)*x}n(0,h=Math.max(u.reduce((N,L)=>N+L.due,0)||0,0)),n(12,o=Math.max(a-h,0)||0)}function p(x){m=x,n(5,m)}function k(){a=ye(this.value),n(2,a)}function C(){d=this.checked,n(3,d)}function D(){f=ye(this.value),n(4,f)}function O(){w=Rt(this),n(1,w),n(9,_)}return e.$$.update=()=>{e.$$.dirty&1&&n(8,l=s.format(h)),e.$$.dirty&4096&&n(7,r=s.format(o)),e.$$.dirty&2&&n(6,u=_[w])},n(5,m=!1),g(),[h,w,a,d,f,m,u,r,l,_,g,b,o,p,k,C,D,O]}class sn extends qe{constructor(t){super(),De(this,t,rn,nn,Ae,{})}}new sn({target:document.getElementById("app")});
