import{j as $,g as H,k as Rt,l as ne}from"./heading-DyI8Xui0.js";const se={skipAnimations:!1,useManualTiming:!1},fn=t=>!!(t&&t.getVelocity),Pt=t=>e=>typeof e=="string"&&e.startsWith(t),hn=Pt("--"),re=Pt("var(--"),ie=t=>re(t)&&oe.test(t),oe=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i,E=(t,e,n)=>n>e?e:n<t?t:n,ct={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Et={...ct,transform:t=>E(0,1,t)},pn={...ct,default:1},G=t=>Math.round(t*1e5)/1e5,Nt=/(-)?([\d]*\.?[\d])+/g,ae=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,ce=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function U(t){return typeof t=="string"}const K=t=>({test:e=>U(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),dn=K("deg"),_=K("%"),mn=K("px"),gn=K("vh"),bn=K("vw"),yn={..._,parse:t=>_.parse(t)/100,transform:t=>_.transform(t*100)},le=(t,e)=>n=>e(t(n)),lt=(...t)=>t.reduce(le);let kt=$;const Bt=t=>t*1e3,P=t=>t/1e3,Gt=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,ue=1e-7,fe=12;function he(t,e,n,s,r){let i,o,a=0;do o=e+(n-e)/2,i=Gt(o,s,r)-t,i>0?n=o:e=o;while(Math.abs(i)>ue&&++a<fe);return o}function W(t,e,n,s){if(t===e&&n===s)return $;const r=i=>he(i,0,1,t,n);return i=>i===0||i===1?i:Gt(r(i),e,s)}const pe=W(.42,0,1,1),de=W(0,0,.58,1),_t=W(.42,0,.58,1),me=t=>Array.isArray(t)&&typeof t[0]!="number",qt=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Lt=t=>e=>1-t(1-e),ut=t=>1-Math.sin(Math.acos(t)),ge=Lt(ut),be=qt(ut),Ut=W(.33,1.53,.69,.99),ft=Lt(Ut),ye=qt(ft),ve=t=>(t*=2)<1?.5*ft(t):.5*(2-Math.pow(2,-10*(t-1))),xe={linear:$,easeIn:pe,easeInOut:_t,easeOut:de,circIn:ut,circInOut:be,circOut:ge,backIn:ft,backInOut:ye,backOut:Ut,anticipate:ve},At=t=>{if(Array.isArray(t)){kt(t.length===4);const[e,n,s,r]=t;return W(e,n,s,r)}else if(typeof t=="string")return xe[t];return t},Kt=(t,e,n)=>{const s=e-t;return s===0?1:(n-t)/s},J=(t,e,n)=>t+(e-t)*n;function et(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Me({hue:t,saturation:e,lightness:n,alpha:s}){t/=360,e/=100,n/=100;let r=0,i=0,o=0;if(!e)r=i=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=et(l,a,t+1/3),i=et(l,a,t),o=et(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:s}}const ht=(t,e)=>n=>!!(U(n)&&ce.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Wt=(t,e,n)=>s=>{if(!U(s))return s;const[r,i,o,a]=s.match(Nt);return{[t]:parseFloat(r),[e]:parseFloat(i),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Ae=t=>E(0,255,t),nt={...ct,transform:t=>Math.round(Ae(t))},S={test:ht("rgb","red"),parse:Wt("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+nt.transform(t)+", "+nt.transform(e)+", "+nt.transform(n)+", "+G(Et.transform(s))+")"};function Te(t){let e="",n="",s="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),s=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),s=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,s+=s,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const it={test:ht("#"),parse:Te,transform:S.transform},R={test:ht("hsl","hue"),parse:Wt("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+_.transform(G(e))+", "+_.transform(G(n))+", "+G(Et.transform(s))+")"},st=(t,e,n)=>{const s=t*t,r=n*(e*e-s)+s;return r<0?0:Math.sqrt(r)},Fe=[it,S,R],Oe=t=>Fe.find(e=>e.test(t));function Tt(t){const e=Oe(t);let n=e.parse(t);return e===R&&(n=Me(n)),n}const Ft=(t,e)=>{const n=Tt(t),s=Tt(e),r={...n};return i=>(r.red=st(n.red,s.red,i),r.green=st(n.green,s.green,i),r.blue=st(n.blue,s.blue,i),r.alpha=J(n.alpha,s.alpha,i),S.transform(r))},L={test:t=>S.test(t)||it.test(t)||R.test(t),parse:t=>S.test(t)?S.parse(t):R.test(t)?R.parse(t):it.parse(t),transform:t=>U(t)?t:t.hasOwnProperty("red")?S.transform(t):R.transform(t)};function Ve(t){var e,n;return isNaN(t)&&U(t)&&(((e=t.match(Nt))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(ae))===null||n===void 0?void 0:n.length)||0)>0}const jt="number",zt="color",Ie="var",De="var(",Ot="${}",Vt=/(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;function X(t){const e=t.toString(),n=e.match(Vt)||[],s=[],r={color:[],number:[],var:[]},i=[];for(let l=0;l<n.length;l++){const c=n[l];L.test(c)?(r.color.push(l),i.push(zt),s.push(L.parse(c))):c.startsWith(De)?(r.var.push(l),i.push(Ie),s.push(c)):(r.number.push(l),i.push(jt),s.push(parseFloat(c)))}const a=e.replace(Vt,Ot).split(Ot);return{values:s,split:a,indexes:r,types:i}}function Ht(t){return X(t).values}function Xt(t){const{split:e,types:n}=X(t),s=e.length;return r=>{let i="";for(let o=0;o<s;o++)if(i+=e[o],r[o]!==void 0){const a=n[o];a===jt?i+=G(r[o]):a===zt?i+=L.transform(r[o]):i+=r[o]}return i}}const Se=t=>typeof t=="number"?0:t;function we(t){const e=Ht(t);return Xt(t)(e.map(Se))}const Ce={test:Ve,parse:Ht,createTransformer:Xt,getAnimatableNone:we};function ot(t,e){return n=>n>0?e:t}function Re(t,e){return n=>J(t,e,n)}function pt(t){return typeof t=="number"?Re:typeof t=="string"?ie(t)?ot:L.test(t)?Ft:Ne:Array.isArray(t)?Zt:typeof t=="object"?L.test(t)?Ft:Pe:ot}function Zt(t,e){const n=[...t],s=n.length,r=t.map((i,o)=>pt(i)(i,e[o]));return i=>{for(let o=0;o<s;o++)n[o]=r[o](i);return n}}function Pe(t,e){const n={...t,...e},s={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(s[r]=pt(t[r])(t[r],e[r]));return r=>{for(const i in s)n[i]=s[i](r);return n}}function Ee(t,e){var n;const s=[],r={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const o=e.types[i],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;s[i]=l,r[o]++}return s}const Ne=(t,e)=>{const n=Ce.createTransformer(e),s=X(t),r=X(e);return s.indexes.var.length===r.indexes.var.length&&s.indexes.color.length===r.indexes.color.length&&s.indexes.number.length>=r.indexes.number.length?lt(Zt(Ee(s,r),r.values),n):ot(t,e)};function $t(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?J(t,e,n):pt(t)(t,e)}function ke(t,e,n){const s=[],r=n||$t,i=t.length-1;for(let o=0;o<i;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||$:e;a=lt(l,a)}s.push(a)}return s}function Be(t,e,{clamp:n=!0,ease:s,mixer:r}={}){const i=t.length;if(kt(i===e.length),i===1)return()=>e[0];t[0]>t[i-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=ke(e,s,r),a=o.length,l=c=>{let p=0;if(a>1)for(;p<t.length-2&&!(c<t[p+1]);p++);const g=Kt(t[p],t[p+1],c);return o[p](g)};return n?c=>l(E(t[0],t[i-1],c)):l}function Ge(t,e){const n=t[t.length-1];for(let s=1;s<=e;s++){const r=Kt(0,e,s);t.push(J(n,1,r))}}function _e(t){const e=[0];return Ge(e,t.length-1),e}function qe(t,e){return t.map(n=>n*e)}function Le(t,e){return t.map(()=>e||_t).splice(0,t.length-1)}function Z({duration:t=300,keyframes:e,times:n,ease:s="easeInOut"}){const r=me(s)?s.map(At):At(s),i={done:!1,value:e[0]},o=qe(n&&n.length===e.length?n:_e(e),t),a=Be(o,e,{ease:Array.isArray(r)?r:Le(e,r)});return{calculatedDuration:t,next:l=>(i.value=a(l),i.done=l>=t,i)}}function Jt(t,e){return e?t*(1e3/e):0}const Ue=5;function Qt(t,e,n){const s=Math.max(e-Ue,0);return Jt(n-t(s),e-s)}const rt=.001,Ke=.01,We=10,je=.05,ze=1;function He({duration:t=800,bounce:e=.25,velocity:n=0,mass:s=1}){let r,i,o=1-e;o=E(je,ze,o),t=E(Ke,We,P(t)),o<1?(r=c=>{const p=c*o,g=p*t,b=p-n,f=at(c,o),y=Math.exp(-g);return rt-b/f*y},i=c=>{const g=c*o*t,b=g*n+n,f=Math.pow(o,2)*Math.pow(c,2)*t,y=Math.exp(-g),A=at(Math.pow(c,2),o);return(-r(c)+rt>0?-1:1)*((b-f)*y)/A}):(r=c=>{const p=Math.exp(-c*t),g=(c-n)*t+1;return-rt+p*g},i=c=>{const p=Math.exp(-c*t),g=(n-c)*(t*t);return p*g});const a=5/t,l=Ze(r,i,a);if(t=Bt(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*s;return{stiffness:c,damping:o*2*Math.sqrt(s*c),duration:t}}}const Xe=12;function Ze(t,e,n){let s=n;for(let r=1;r<Xe;r++)s=s-t(s)/e(s);return s}function at(t,e){return t*Math.sqrt(1-e*e)}const $e=["duration","bounce"],Je=["stiffness","damping","mass"];function It(t,e){return e.some(n=>t[n]!==void 0)}function Qe(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!It(t,Je)&&It(t,$e)){const n=He(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function Yt({keyframes:t,restDelta:e,restSpeed:n,...s}){const r=t[0],i=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:c,duration:p,velocity:g,isResolvedFromDuration:b}=Qe({...s,velocity:-P(s.velocity||0)}),f=g||0,y=l/(2*Math.sqrt(a*c)),A=i-r,F=P(Math.sqrt(a/c)),V=Math.abs(A)<5;n||(n=V?.01:2),e||(e=V?.005:.5);let v;if(y<1){const d=at(F,y);v=T=>{const m=Math.exp(-y*F*T);return i-m*((f+y*F*A)/d*Math.sin(d*T)+A*Math.cos(d*T))}}else if(y===1)v=d=>i-Math.exp(-F*d)*(A+(f+F*A)*d);else{const d=F*Math.sqrt(y*y-1);v=T=>{const m=Math.exp(-y*F*T),I=Math.min(d*T,300);return i-m*((f+y*F*A)*Math.sinh(I)+d*A*Math.cosh(I))/d}}return{calculatedDuration:b&&p||null,next:d=>{const T=v(d);if(b)o.done=d>=p;else{let m=f;d!==0&&(y<1?m=Qt(v,d,T):m=0);const I=Math.abs(m)<=n,x=Math.abs(i-T)<=e;o.done=I&&x}return o.value=o.done?i:T,o}}}function Dt({keyframes:t,velocity:e=0,power:n=.8,timeConstant:s=325,bounceDamping:r=10,bounceStiffness:i=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:p}){const g=t[0],b={done:!1,value:g},f=u=>a!==void 0&&u<a||l!==void 0&&u>l,y=u=>a===void 0?l:l===void 0||Math.abs(a-u)<Math.abs(l-u)?a:l;let A=n*e;const F=g+A,V=o===void 0?F:o(F);V!==F&&(A=V-g);const v=u=>-A*Math.exp(-u/s),d=u=>V+v(u),T=u=>{const M=v(u),w=d(u);b.done=Math.abs(M)<=c,b.value=b.done?V:w};let m,I;const x=u=>{f(b.value)&&(m=u,I=Yt({keyframes:[b.value,y(b.value)],velocity:Qt(d,u,b.value),damping:r,stiffness:i,restDelta:c,restSpeed:p}))};return x(0),{calculatedDuration:null,next:u=>{let M=!1;return!I&&m===void 0&&(M=!0,T(u),x(u)),m!==void 0&&u>m?I.next(u-m):(!M&&T(u),b)}}}let z;function Ye(){z=void 0}const q={now:()=>(z===void 0&&q.set(H.isProcessing||se.useManualTiming?H.timestamp:performance.now()),z),set:t=>{z=t,queueMicrotask(Ye)}},tn=t=>{const e=({timestamp:n})=>t(n);return{start:()=>Rt.update(e,!0),stop:()=>ne(e),now:()=>H.isProcessing?H.timestamp:q.now()}},St=2e4;function wt(t){let e=0;const n=50;let s=t.next(e);for(;!s.done&&e<St;)e+=n,s=t.next(e);return e>=St?1/0:e}const en={decay:Dt,inertia:Dt,tween:Z,keyframes:Z,spring:Yt},nn=t=>t/100;function vn({autoplay:t=!0,delay:e=0,driver:n=tn,keyframes:s,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:p,onUpdate:g,...b}){let f=1,y=!1,A,F;const V=()=>{F=new Promise(h=>{A=h})};V();let v;const d=en[r]||Z;let T;d!==Z&&typeof s[0]!="number"&&(T=lt(nn,$t(s[0],s[1])),s=[0,100]);const m=d({...b,keyframes:s});let I;a==="mirror"&&(I=d({...b,keyframes:[...s].reverse(),velocity:-(b.velocity||0)}));let x="idle",u=null,M=null,w=null;m.calculatedDuration===null&&i&&(m.calculatedDuration=wt(m));const{calculatedDuration:Q}=m;let N=1/0,C=1/0;Q!==null&&(N=Q+o,C=N*(i+1)-o);let O=0;const Y=h=>{if(M===null)return;f>0&&(M=Math.min(M,h)),f<0&&(M=Math.min(h-C/f,M)),u!==null?O=u:O=Math.round(h-M)*f;const k=O-e*(f>=0?1:-1),yt=f>=0?k<0:k>C;O=Math.max(k,0),x==="finished"&&u===null&&(O=C);let vt=O,xt=m;if(i){const tt=Math.min(O,C)/N;let j=Math.floor(tt),D=tt%1;!D&&tt>=1&&(D=1),D===1&&j--,j=Math.min(j,i+1),!!(j%2)&&(a==="reverse"?(D=1-D,o&&(D-=o/N)):a==="mirror"&&(xt=I)),vt=E(0,1,D)*N}const B=yt?{done:!1,value:s[0]}:xt.next(vt);T&&(B.value=T(B.value));let{done:Mt}=B;!yt&&Q!==null&&(Mt=f>=0?O>=C:O<=0);const ee=u===null&&(x==="finished"||x==="running"&&Mt);return g&&g(B.value),ee&&te(),B},dt=()=>{v&&v.stop(),v=void 0},mt=()=>{x="idle",dt(),A(),V(),M=w=null},te=()=>{x="finished",p&&p(),dt(),A()},gt=()=>{if(y)return;v||(v=n(Y));const h=v.now();l&&l(),u!==null?M=h-u:(!M||x==="finished")&&(M=h),x==="finished"&&V(),w=M,u=null,x="running",v.start()};t&&gt();const bt={then(h,k){return F.then(h,k)},get time(){return P(O)},set time(h){h=Bt(h),O=h,u!==null||!v||f===0?u=h:M=v.now()-h/f},get duration(){const h=m.calculatedDuration===null?wt(m):m.calculatedDuration;return P(h)},get speed(){return f},set speed(h){h===f||!v||(f=h,bt.time=P(O))},get state(){return x},play:gt,pause:()=>{x="paused",u=O},stop:()=>{y=!0,x!=="idle"&&(x="idle",c&&c(),mt())},cancel:()=>{w!==null&&Y(w),mt()},complete:()=>{x="finished"},sample:h=>(M=0,Y(h))};return bt}function sn(t,e){t.indexOf(e)===-1&&t.push(e)}function rn(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class on{constructor(){this.subscriptions=[]}add(e){return sn(this.subscriptions,e),()=>rn(this.subscriptions,e)}notify(e,n,s){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,s);else for(let i=0;i<r;i++){const o=this.subscriptions[i];o&&o(e,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ct=30,an=t=>!isNaN(parseFloat(t));class cn{constructor(e,n={}){this.version="11.0.5",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(s,r=!0)=>{const i=q.now();this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.canTrackVelocity=an(this.current),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=q.now()}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new on);const s=this.events[e].add(n);return e==="change"?()=>{s(),Rt.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-s}jump(e){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=q.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ct)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Ct);return Jt(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function xn(t,e){return new cn(t,e)}export{Kt as A,_e as B,Ge as C,se as M,on as S,vn as a,Et as b,yn as c,dn as d,hn as e,P as f,Bt as g,Ce as h,fn as i,Nt as j,L as k,_ as l,xn as m,ct as n,gn as o,mn as p,ie as q,kt as r,pn as s,Yt as t,wt as u,bn as v,St as w,me as x,J as y,rn as z};
