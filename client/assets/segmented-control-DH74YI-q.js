import{r as t,j as r}from"./jsx-runtime-DexIYAB0.js";import{V as b}from"./visually-hidden-W3ID0zqx.js";import{a as H}from"./heading-DyI8Xui0.js";const y="/assets/spr-background-large-nYeU3Kau.jpg",v="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wgARCAAQABgDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFCP/EABgBAQADAQAAAAAAAAAAAAAAAAMBAgQF/9oADAMBAAIQAxAAAADJ1+YyYzk2GgjwSltH/8QAHxAAAAUFAQEAAAAAAAAAAAAAAAECAwQFERITMSFh/9oACAEBAAE/AI8S7dyCqdm19D8TT0NzNasS4DqSkiVJN70x/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAIBEgMRE//aAAgBAgEBPwCxOQVtlTmKtT//xAAaEQACAgMAAAAAAAAAAAAAAAAAAQMSAgQR/9oACAEDAQE/AM5uMWzxmE1hw2QtVMjiof/Z",_="/assets/spr-background-BYcr6wKu.jpg",C="_container_vdycn_2",R="_options_vdycn_6",m="_button_vdycn_26",S="_indicator_vdycn_67",u={container:C,options:R,button:m,indicator:S},p=t.createContext({}),F=({children:g,currentIndex:n,onChange:c,label:h,...E})=>{const a=`${t.useId()}segmented-control-label`,A=t.useRef([]),[i,l]=t.useState(),x=e=>{const{length:o}=A.current,d=(n-1+o)%o,s=(n+1)%o;["ArrowLeft","ArrowUp"].includes(e.key)?(c(d),A.current[d].current.focus()):["ArrowRight","ArrowDown"].includes(e.key)&&(c(s),A.current[s].current.focus())},B=t.useCallback(e=>{A.current=[...A.current,e]},[]),Q=t.useCallback(e=>{A.current=A.current.filter(o=>o!==e)},[]);return t.useEffect(()=>{var d;const e=(d=A.current[n])==null?void 0:d.current,o=new ResizeObserver(()=>{const s=e==null?void 0:e.getBoundingClientRect(),f=e==null?void 0:e.offsetLeft;l({width:s==null?void 0:s.width,left:f})});return o.observe(e),()=>{o.disconnect()}},[n]),r.jsx(p.Provider,{value:{optionRefs:A,currentIndex:n,onChange:c,registerOption:B,unRegisterOption:Q},children:r.jsxs("div",{className:u.container,role:"radiogroup",tabIndex:"0","aria-labelledby":a,onKeyDown:x,...E,children:[r.jsx(b,{as:"label",id:a,children:h}),r.jsxs("div",{className:u.options,children:[!!i&&r.jsx("div",{className:u.indicator,"data-last":n===A.current.length-1,style:H(i)}),g]})]})})},I=({children:g,...n})=>{const{optionRefs:c,currentIndex:h,onChange:E,registerOption:w,unRegisterOption:a}=t.useContext(p),A=t.useRef(),i=c.current.indexOf(A),l=h===i;return t.useEffect(()=>(w(A),()=>{a(A)}),[w,a]),r.jsx("button",{className:u.button,tabIndex:l?0:-1,role:"radio","aria-checked":l,onClick:()=>E(i),ref:A,...n,children:g})};export{F as S,y as a,_ as b,v as c,I as d};