import{r as y,j as s}from"./jsx-runtime-DexIYAB0.js";import{c as p,T as j}from"./heading-DyI8Xui0.js";import{L as k}from"./components-D1Eb6D8q.js";import{c as d}from"./config-DwugsCvJ.js";const $="_link_1h1qj_2",b={link:$},v=["txt","png","jpg"];function E(t){const e=v.includes(t==null?void 0:t.split(".").pop());return(t==null?void 0:t.includes("://"))||(t==null?void 0:t[0])==="#"||e}const L=y.forwardRef(({rel:t,target:e,children:r,secondary:i,className:n,href:o,...u},_)=>{const m=o==null?void 0:o.includes("://"),x=t||(m?"noreferrer noopener":void 0),w=e||(m?"_blank":void 0),g={className:p(b.link,n),"data-secondary":i,rel:x,href:o,target:w,ref:_,...u};return E(o)?s.jsx("a",{...g,href:o,children:r}):s.jsx(k,{unstable_viewTransition:!0,prefetch:"intent",...g,to:o,children:r})}),N="_footer_gmxrz_2",T="_link_gmxrz_16",z="_date_gmxrz_20",a={footer:N,link:T,date:z},q=({className:t})=>s.jsx("footer",{className:p(a.footer,t),children:s.jsxs(j,{size:"s",align:"center",children:[s.jsx("span",{className:a.date,children:`© ${new Date().getFullYear()} ${d.name}.`}),s.jsx(L,{secondary:!0,className:a.link,href:"/humans.txt",target:"_self",children:"Crafted by yours truly"})]})}),V="_section_cvvm4_2",f={section:V},C=y.forwardRef(({as:t="div",children:e,className:r,...i},n)=>s.jsx(t,{className:p(f.section,r),ref:n,...i,children:e})),{name:c,url:l,twitter:F}=d,R=`${l}/social-image.png`;function I({title:t,description:e,prefix:r=c,ogImage:i=R}){const n=[r,t].filter(Boolean).join(" | ");return[{title:n},{name:"description",content:e},{name:"author",content:c},{property:"og:image",content:i},{property:"og:image:alt",content:"Banner for the site"},{property:"og:image:width",content:"1280"},{property:"og:image:height",content:"800"},{property:"og:title",content:n},{property:"og:site_name",content:c},{property:"og:type",content:"website"},{property:"og:url",content:l},{property:"og:description",content:e},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:description",content:e},{property:"twitter:title",content:n},{property:"twitter:site",content:l},{property:"twitter:creator",content:F},{property:"twitter:image",content:i}]}export{q as F,L,C as S,I as b};