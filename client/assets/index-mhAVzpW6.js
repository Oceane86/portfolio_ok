import{r as e,j as X}from"./jsx-runtime-DexIYAB0.js";import{a as ge,r as he}from"./image-oJgo2LrI.js";import{W as xe,S as oe,P as ye,a as we,G as J,b as De,D as $,s as q,o as Ue,u as K,M as O,O as Me,v as Se,n as Q,r as Re,c as be,d as Te,t as ee,m as Ce,k as te,V as B,w as Pe}from"./three-B_s0NcTJ.js";import{u as ie,c as Le,a as Ae,n as ke}from"./heading-DyI8Xui0.js";import{M as re}from"./route-CIJM9vxl.js";import{t as ze}from"./throttle-BgiUmwhn.js";import{u as ne}from"./use-spring-KDm3mUsa.js";import{a as N}from"./animate-BQjo3Usf.js";import"./components-D1Eb6D8q.js";import"./slice-app-placeholder-BfRsQMSa.js";import"./yaspeez-screen-large-DTY4msaF.js";import"./spr-lesson-builder-dark-placeholder-CxlvWxWS.js";import"./meta-Cw2BFY6Y.js";import"./config-V0xTS1rb.js";import"./decoder-text-D_l7SzBd.js";import"./visually-hidden-W3ID0zqx.js";import"./useScrollToHash-eW_re39o.js";import"./divider-DbfiyrM1.js";import"./useWindowSize-mzNSXuUf.js";import"./index-BXn5pOIG.js";const Ee={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},_e={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},je="_model_fphsv_2",Be="_canvas_fphsv_11",ae={model:je,canvas:Be},se={Frame:"Frame",Logo:"Logo",Screen:"Screen"},ce={stiffness:40,damping:20,mass:1.4,restSpeed:.001},st=({models:L,show:D=!0,showDelay:A=0,cameraPosition:g={x:0,y:0,z:8},style:k,className:z,onLoad:G,alt:U,...E})=>{const[M,F]=e.useState(!1),p=e.useRef(),l=e.useRef(),o=e.useRef(),h=e.useRef(),r=e.useRef(),t=e.useRef(),v=e.useRef(),f=e.useRef(),d=e.useRef(),x=e.useRef(),c=e.useRef(),u=e.useRef(),n=e.useRef(),m=e.useRef(),y=e.useRef(),a=e.useRef(),_=e.useRef(),Y=ge(p,!1,{threshold:.2}),Z=ie(),S=ne(0,ce),R=ne(0,ce);e.useEffect(()=>{const{clientWidth:s,clientHeight:i}=p.current;t.current=new xe({canvas:l.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),t.current.setPixelRatio(2),t.current.setSize(s,i),t.current.outputColorSpace=oe,o.current=new ye(36,s/i,.1,100),o.current.position.set(g.x,g.y,g.z),r.current=new we,h.current=new J,r.current.add(h.current);const w=new De(16777215,1.2),T=new $(16777215,1.1),C=new $(16777215,.8);C.position.set(-6,2,2),T.position.set(.5,0,.866),y.current=[w,T,C],y.current.forEach(P=>r.current.add(P)),v.current=new J,r.current.add(v.current),v.current.position.set(0,0,-.8),v.current.rotateX(Math.PI/2);const j=512,I=8,V=8,ue=1.5,le=.8,ve=3;f.current=new q(j,j),f.current.texture.generateMipmaps=!1,d.current=new q(j,j),d.current.texture.generateMipmaps=!1;const H=new Ue(I,V).rotateX(Math.PI/2),fe=new K({map:f.current.texture,opacity:le,transparent:!0});m.current=new O(H,fe),m.current.scale.y=-1,v.current.add(m.current),a.current=new O(H),a.current.visible=!1,v.current.add(a.current);const me=new K({color:16777215,opacity:0,transparent:!0});_.current=new O(H,me),_.current.rotateX(Math.PI),_.current.position.y-=1e-5,v.current.add(_.current),x.current=new Me(-I/2,I/2,V/2,-V/2,0,ue),x.current.rotation.x=Math.PI/2,v.current.add(x.current),c.current=new Se,c.current.userData.darkness={value:ve},c.current.onBeforeCompile=P=>{P.uniforms.darkness=c.current.userData.darkness,P.fragmentShader=`
        uniform float darkness;
        ${P.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}
      `},c.current.depthTest=!1,c.current.depthWrite=!1,u.current=new Q(Ee),u.current.depthTest=!1,n.current=new Q(_e),n.current.depthTest=!1;const pe=S.on("change",b),de=R.on("change",b);return()=>{f.current.dispose(),d.current.dispose(),Re(y.current),be(r.current),Te(t.current),pe(),de()}},[]);const W=e.useCallback(s=>{a.current.visible=!0,a.current.material=u.current,a.current.material.uniforms.tDiffuse.value=f.current.texture,u.current.uniforms.h.value=s*(1/256),t.current.setRenderTarget(d.current),t.current.render(a.current,x.current),a.current.material=n.current,a.current.material.uniforms.tDiffuse.value=d.current.texture,n.current.uniforms.v.value=s*(1/256),t.current.setRenderTarget(f.current),t.current.render(a.current,x.current),a.current.visible=!1},[]),b=e.useCallback(()=>{const i=r.current.background;r.current.background=null,r.current.overrideMaterial=c.current,t.current.setRenderTarget(f.current),t.current.render(r.current,x.current),r.current.overrideMaterial=null,W(5),W(5*.4),t.current.setRenderTarget(null),r.current.background=i,h.current.rotation.x=S.get(),h.current.rotation.y=R.get(),t.current.render(r.current,o.current)},[W,S,R]);return e.useEffect(()=>{const s=ze(i=>{const{innerWidth:w,innerHeight:T}=window,C={x:(i.clientX-w/2)/w,y:(i.clientY-T/2)/T};R.set(C.x/2),S.set(C.y/2)},100);return Y&&!Z&&window.addEventListener("mousemove",s),()=>{window.removeEventListener("mousemove",s)}},[Y,Z,S,R]),e.useEffect(()=>{const s=()=>{if(!p.current)return;const{clientWidth:i,clientHeight:w}=p.current;t.current.setSize(i,w),o.current.aspect=i/w,o.current.updateProjectionMatrix(),b()};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[b]),X.jsxs("div",{className:Le(ae.model,z),"data-loaded":M,style:Ae({delay:ke(A)},k),ref:p,role:"img","aria-label":U,...E,children:[X.jsx("canvas",{className:ae.canvas,ref:l}),L.map((s,i)=>X.jsx(Ge,{renderer:t,modelGroup:h,show:D,showDelay:A,renderFrame:b,index:i,setLoaded:F,onLoad:G,model:s},JSON.stringify(s.position)))]})},Ge=({renderer:L,model:D,modelGroup:A,renderFrame:g,index:k,showDelay:z,setLoaded:G,onLoad:U,show:E})=>{const[M,F]=e.useState(),p=ie(),l=e.createRef();e.useEffect(()=>{const o=async(r,t)=>{r.colorSpace=oe,r.flipY=!1,r.anisotropy=L.current.capabilities.getMaxAnisotropy(),r.generateMipmaps=!1,await L.current.initTexture(r),t.material.color=new te(16777215),t.material.transparent=!0,t.material.map=r};F({start:async()=>{const{texture:r,position:t,url:v}=D;let f,d;const[x,c]=await Promise.all([await ee.loadAsync(r.placeholder),await Ce.loadAsync(v)]);A.current.add(c.scene),c.scene.traverse(async n=>{n.material&&(n.material.color=new te(2039845)),n.name===se.Screen&&(l.current=n.clone(),l.current.material=n.material.clone(),n.parent.add(l.current),l.current.material.opacity=1,l.current.position.z+=.001,o(x,l.current),f=async()=>{const m=await he(r),y=await ee.loadAsync(m);await o(y,n),N(1,0,{onUpdate:a=>{l.current.material.opacity=a,g()}})})});const u=new B(t.x,t.y,t.z);return p&&c.scene.position.set(...u.toArray()),D.animation===re.SpringUp&&(d=()=>{const n=new B(u.x,u.y-1,u.z);c.scene.position.set(...n.toArray()),N(n.y,u.y,{type:"spring",delay:(300*k+z)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:m=>{c.scene.position.y=m,g()}})}),D.animation===re.LaptopOpen&&(d=()=>{const n=c.scene.children.find(a=>a.name===se.Frame),m=new B(Pe.degToRad(90),0,0),y=new B(0,0,0);return c.scene.position.set(...u.toArray()),n.rotation.set(...m.toArray()),N(m.x,y.x,{type:"spring",delay:(300*k+z+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:a=>{n.rotation.x=a,g()}})}),{loadFullResTexture:f,playAnimation:d}}})},[]),e.useEffect(()=>{if(!M||!E)return;let o;const h=async()=>{const{loadFullResTexture:r,playAnimation:t}=await M.start();G(!0),U==null||U(),p||(o=t()),await r(),p&&g()};return e.startTransition(()=>{h()}),()=>{o==null||o.stop()}},[M,E])};export{st as Model};
