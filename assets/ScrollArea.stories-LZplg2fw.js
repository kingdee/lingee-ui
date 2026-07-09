import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{r as a}from"./index-D4H_InIO.js";import{P as z}from"./index-ByVle3jd.js";import{a as te,u as E,d as C}from"./index-TiaNR8H-.js";import{c as Ze,a as T,b as er}from"./index-C2ovSOE3.js";import{u as rr}from"./index-YtIeenAn.js";import{a as We}from"./utils-HnQPFlDo.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";function tr(e,r){return a.useReducer((t,l)=>r[t][l]??t,e)}var L=e=>{const{present:r,children:t}=e,l=or(r),o=typeof t=="function"?t({present:l.isPresent}):a.Children.only(t),s=nr(l.ref,lr(o));return typeof t=="function"||l.isPresent?a.cloneElement(o,{ref:s}):null};L.displayName="Presence";function or(e){const[r,t]=a.useState(),l=a.useRef(null),o=a.useRef(e),s=a.useRef("none"),i=a.useRef(void 0),c=e?"mounted":"unmounted",[u,m]=tr(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{u==="mounted"?(s.current=i.current??H(l.current),i.current=void 0):s.current="none"},[u]),te(()=>{const d=l.current,h=o.current;if(h!==e){const f=s.current,v=H(d);e?(i.current=v,m("MOUNT")):v==="none"||(d==null?void 0:d.display)==="none"?m("UNMOUNT"):m(h&&f!==v?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,m]),te(()=>{if(r){let d;const h=r.ownerDocument.defaultView??window,p=v=>{const j=H(l.current).includes(CSS.escape(v.animationName));if(v.target===r&&j&&(m("ANIMATION_END"),!o.current)){const A=r.style.animationFillMode;r.style.animationFillMode="forwards",d=h.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=A)})}},f=v=>{v.target===r&&(s.current=H(l.current))};return r.addEventListener("animationstart",f),r.addEventListener("animationcancel",p),r.addEventListener("animationend",p),()=>{h.clearTimeout(d),r.removeEventListener("animationstart",f),r.removeEventListener("animationcancel",p),r.removeEventListener("animationend",p)}}else m("ANIMATION_END")},[r,m]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:a.useCallback(d=>{if(d){const h=getComputedStyle(d);l.current=h,i.current=H(h)}else l.current=null;t(d)},[])}}function se(e,r){if(typeof e=="function")return e(r);e!=null&&(e.current=r)}function nr(...e){const r=a.useRef(e);return r.current=e,a.useCallback(t=>{const l=r.current;let o=!1;const s=l.map(i=>{const c=se(i,t);return!o&&typeof c=="function"&&(o=!0),c});if(o)return()=>{for(let i=0;i<s.length;i++){const c=s[i];typeof c=="function"?c():se(l[i],null)}}},[])}function H(e){return(e==null?void 0:e.animationName)||"none"}function lr(e){var l,o;let r=(l=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:l.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(r=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,t=r&&"isReactWarning"in r&&r.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function sr(e,r){return a.useReducer((t,l)=>r[t][l]??t,e)}var oe="ScrollArea",[Ie]=Ze(oe),[ar,x]=Ie(oe),Ue=a.forwardRef((e,r)=>{const{__scopeScrollArea:t,type:l="hover",dir:o,scrollHideDelay:s=600,...i}=e,[c,u]=a.useState(null),[m,d]=a.useState(null),[h,p]=a.useState(null),[f,v]=a.useState(null),[R,j]=a.useState(null),[A,_]=a.useState(0),[re,D]=a.useState(0),[O,N]=a.useState(!1),[M,W]=a.useState(!1),b=E(r,u),y=rr(o);return n.jsx(ar,{scope:t,type:l,dir:y,scrollHideDelay:s,scrollArea:c,viewport:m,onViewportChange:d,content:h,onContentChange:p,scrollbarX:f,onScrollbarXChange:v,scrollbarXEnabled:O,onScrollbarXEnabledChange:N,scrollbarY:R,onScrollbarYChange:j,scrollbarYEnabled:M,onScrollbarYEnabledChange:W,onCornerWidthChange:_,onCornerHeightChange:D,children:n.jsx(z.div,{dir:y,...i,ref:b,style:{position:"relative","--radix-scroll-area-corner-width":A+"px","--radix-scroll-area-corner-height":re+"px",...e.style}})})});Ue.displayName=oe;var Ve="ScrollAreaViewport",Be=a.forwardRef((e,r)=>{const{__scopeScrollArea:t,children:l,nonce:o,...s}=e,i=x(Ve,t),c=a.useRef(null),u=E(r,c,i.onViewportChange);return n.jsxs(n.Fragment,{children:[n.jsx(ir,{nonce:o}),n.jsx(z.div,{"data-radix-scroll-area-viewport":"",...s,ref:u,style:{overflowX:i.scrollbarXEnabled?"scroll":"hidden",overflowY:i.scrollbarYEnabled?"scroll":"hidden",...e.style},children:n.jsx("div",{ref:i.onContentChange,style:{minWidth:"100%",display:"table"},children:l})})]})});Be.displayName=Ve;var ir=a.memo(({nonce:e})=>n.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:e}),(e,r)=>e.nonce===r.nonce),g="ScrollAreaScrollbar",Fe=a.forwardRef((e,r)=>{const{forceMount:t,...l}=e,o=x(g,e.__scopeScrollArea),{onScrollbarXEnabledChange:s,onScrollbarYEnabledChange:i}=o,c=e.orientation==="horizontal";return a.useEffect(()=>(c?s(!0):i(!0),()=>{c?s(!1):i(!1)}),[c,s,i]),o.type==="hover"?n.jsx(cr,{...l,ref:r,forceMount:t}):o.type==="scroll"?n.jsx(dr,{...l,ref:r,forceMount:t}):o.type==="auto"?n.jsx(Xe,{...l,ref:r,forceMount:t}):o.type==="always"?n.jsx(ne,{...l,ref:r,"data-state":"visible"}):null});Fe.displayName=g;var cr=a.forwardRef((e,r)=>{const{forceMount:t,...l}=e,o=x(g,e.__scopeScrollArea),[s,i]=a.useState(!1);return a.useEffect(()=>{const c=o.scrollArea;let u=0;if(c){const m=()=>{window.clearTimeout(u),i(!0)},d=()=>{u=window.setTimeout(()=>i(!1),o.scrollHideDelay)};return c.addEventListener("pointerenter",m),c.addEventListener("pointerleave",d),()=>{window.clearTimeout(u),c.removeEventListener("pointerenter",m),c.removeEventListener("pointerleave",d)}}},[o.scrollArea,o.scrollHideDelay]),n.jsx(L,{present:t||s,children:n.jsx(Xe,{"data-state":s?"visible":"hidden",...l,ref:r})})}),dr=a.forwardRef((e,r)=>{const{forceMount:t,...l}=e,o=x(g,e.__scopeScrollArea),s=e.orientation==="horizontal",i=ee(()=>u("SCROLL_END"),100),[c,u]=sr("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return a.useEffect(()=>{if(c==="idle"){const m=window.setTimeout(()=>u("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(m)}},[c,o.scrollHideDelay,u]),a.useEffect(()=>{const m=o.viewport,d=s?"scrollLeft":"scrollTop";if(m){let h=m[d];const p=()=>{const f=m[d];h!==f&&(u("SCROLL"),i()),h=f};return m.addEventListener("scroll",p),()=>m.removeEventListener("scroll",p)}},[o.viewport,s,u,i]),n.jsx(L,{present:t||c!=="hidden",children:n.jsx(ne,{"data-state":c==="hidden"?"hidden":"visible",...l,ref:r,onPointerEnter:T(e.onPointerEnter,()=>u("POINTER_ENTER")),onPointerLeave:T(e.onPointerLeave,()=>u("POINTER_LEAVE"))})})}),Xe=a.forwardRef((e,r)=>{const t=x(g,e.__scopeScrollArea),{forceMount:l,...o}=e,[s,i]=a.useState(!1),c=e.orientation==="horizontal",u=ee(()=>{if(t.viewport){const m=t.viewport.offsetWidth<t.viewport.scrollWidth,d=t.viewport.offsetHeight<t.viewport.scrollHeight;i(c?m:d)}},10);return P(t.viewport,u),P(t.content,u),n.jsx(L,{present:l||s,children:n.jsx(ne,{"data-state":s?"visible":"hidden",...o,ref:r})})}),ne=a.forwardRef((e,r)=>{const{orientation:t="vertical",...l}=e,o=x(g,e.__scopeScrollArea),s=a.useRef(null),i=a.useRef(0),[c,u]=a.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),m=Ge(c.viewport,c.content),d={...l,sizes:c,onSizesChange:u,hasThumb:m>0&&m<1,onThumbChange:p=>s.current=p,onThumbPointerUp:()=>i.current=0,onThumbPointerDown:p=>i.current=p};function h(p,f){return vr(p,i.current,c,f)}return t==="horizontal"?n.jsx(ur,{...d,ref:r,onThumbPositionChange:()=>{if(o.viewport&&s.current){const p=o.viewport.scrollLeft,f=ae(p,c,o.dir);s.current.style.transform=`translate3d(${f}px, 0, 0)`}},onWheelScroll:p=>{o.viewport&&(o.viewport.scrollLeft=p)},onDragScroll:p=>{o.viewport&&(o.viewport.scrollLeft=h(p,o.dir))}}):t==="vertical"?n.jsx(pr,{...d,ref:r,onThumbPositionChange:()=>{if(o.viewport&&s.current){const p=o.viewport.scrollTop,f=ae(p,c);s.current.style.transform=`translate3d(0, ${f}px, 0)`}},onWheelScroll:p=>{o.viewport&&(o.viewport.scrollTop=p)},onDragScroll:p=>{o.viewport&&(o.viewport.scrollTop=h(p))}}):null}),ur=a.forwardRef((e,r)=>{const{sizes:t,onSizesChange:l,...o}=e,s=x(g,e.__scopeScrollArea),[i,c]=a.useState(),u=a.useRef(null),m=E(r,u,s.onScrollbarXChange);return a.useEffect(()=>{u.current&&c(getComputedStyle(u.current))},[u]),n.jsx(ke,{"data-orientation":"horizontal",...o,ref:m,sizes:t,style:{bottom:0,left:s.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:s.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Z(t)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.x),onDragScroll:d=>e.onDragScroll(d.x),onWheelScroll:(d,h)=>{if(s.viewport){const p=s.viewport.scrollLeft+d.deltaX;e.onWheelScroll(p),Ke(p,h)&&d.preventDefault()}},onResize:()=>{u.current&&s.viewport&&i&&l({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:K(i.paddingLeft),paddingEnd:K(i.paddingRight)}})}})}),pr=a.forwardRef((e,r)=>{const{sizes:t,onSizesChange:l,...o}=e,s=x(g,e.__scopeScrollArea),[i,c]=a.useState(),u=a.useRef(null),m=E(r,u,s.onScrollbarYChange);return a.useEffect(()=>{u.current&&c(getComputedStyle(u.current))},[u]),n.jsx(ke,{"data-orientation":"vertical",...o,ref:m,sizes:t,style:{top:0,right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Z(t)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.y),onDragScroll:d=>e.onDragScroll(d.y),onWheelScroll:(d,h)=>{if(s.viewport){const p=s.viewport.scrollTop+d.deltaY;e.onWheelScroll(p),Ke(p,h)&&d.preventDefault()}},onResize:()=>{u.current&&s.viewport&&i&&l({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:K(i.paddingTop),paddingEnd:K(i.paddingBottom)}})}})}),[mr,Ye]=Ie(g),ke=a.forwardRef((e,r)=>{const{__scopeScrollArea:t,sizes:l,hasThumb:o,onThumbChange:s,onThumbPointerUp:i,onThumbPointerDown:c,onThumbPositionChange:u,onDragScroll:m,onWheelScroll:d,onResize:h,...p}=e,f=x(g,t),[v,R]=a.useState(null),j=E(r,R),A=a.useRef(null),_=a.useRef(""),re=f.viewport,D=l.content-l.viewport,O=C(d),N=C(u),M=ee(h,10);function W(b){if(A.current){const y=b.clientX-A.current.left,I=b.clientY-A.current.top;m({x:y,y:I})}}return a.useEffect(()=>{const b=y=>{const I=y.target;(v==null?void 0:v.contains(I))&&O(y,D)};return document.addEventListener("wheel",b,{passive:!1}),()=>document.removeEventListener("wheel",b,{passive:!1})},[re,v,D,O]),a.useEffect(N,[l,N]),P(v,M),P(f.content,M),n.jsx(mr,{scope:t,scrollbar:v,hasThumb:o,onThumbChange:C(s),onThumbPointerUp:C(i),onThumbPositionChange:N,onThumbPointerDown:C(c),children:n.jsx(z.div,{...p,ref:j,style:{position:"absolute",...p.style},onPointerDown:T(e.onPointerDown,b=>{b.button===0&&(b.target.setPointerCapture(b.pointerId),A.current=v.getBoundingClientRect(),_.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",f.viewport&&(f.viewport.style.scrollBehavior="auto"),W(b))}),onPointerMove:T(e.onPointerMove,W),onPointerUp:T(e.onPointerUp,b=>{const y=b.target;y.hasPointerCapture(b.pointerId)&&y.releasePointerCapture(b.pointerId),document.body.style.webkitUserSelect=_.current,f.viewport&&(f.viewport.style.scrollBehavior=""),A.current=null})})})}),J="ScrollAreaThumb",qe=a.forwardRef((e,r)=>{const{forceMount:t,...l}=e,o=Ye(J,e.__scopeScrollArea);return n.jsx(L,{present:t||o.hasThumb,children:n.jsx(hr,{ref:r,...l})})}),hr=a.forwardRef((e,r)=>{const{__scopeScrollArea:t,style:l,...o}=e,s=x(J,t),i=Ye(J,t),{onThumbPositionChange:c}=i,u=E(r,i.onThumbChange),m=a.useRef(void 0),d=ee(()=>{m.current&&(m.current(),m.current=void 0)},100);return a.useEffect(()=>{const h=s.viewport;if(h){const p=()=>{if(d(),!m.current){const f=br(h,c);m.current=f,c()}};return c(),h.addEventListener("scroll",p),()=>h.removeEventListener("scroll",p)}},[s.viewport,d,c]),n.jsx(z.div,{"data-state":i.hasThumb?"visible":"hidden",...o,ref:u,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:T(e.onPointerDownCapture,h=>{const f=h.target.getBoundingClientRect(),v=h.clientX-f.left,R=h.clientY-f.top;i.onThumbPointerDown({x:v,y:R})}),onPointerUp:T(e.onPointerUp,i.onThumbPointerUp)})});qe.displayName=J;var le="ScrollAreaCorner",$e=a.forwardRef((e,r)=>{const t=x(le,e.__scopeScrollArea),l=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&l?n.jsx(fr,{...e,ref:r}):null});$e.displayName=le;var fr=a.forwardRef((e,r)=>{const{__scopeScrollArea:t,...l}=e,o=x(le,t),[s,i]=a.useState(0),[c,u]=a.useState(0),m=!!(s&&c),{onCornerWidthChange:d,onCornerHeightChange:h}=o;return P(o.scrollbarX,()=>{var f;const p=((f=o.scrollbarX)==null?void 0:f.offsetHeight)||0;o.onCornerHeightChange(p),u(p)}),P(o.scrollbarY,()=>{var f;const p=((f=o.scrollbarY)==null?void 0:f.offsetWidth)||0;o.onCornerWidthChange(p),i(p)}),a.useEffect(()=>()=>{d(0),h(0)},[d,h]),m?n.jsx(z.div,{...l,ref:r,style:{width:s,height:c,position:"absolute",right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function K(e){return e?parseInt(e,10):0}function Ge(e,r){const t=e/r;return isNaN(t)?0:t}function Z(e){const r=Ge(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,l=(e.scrollbar.size-t)*r;return Math.max(l,18)}function vr(e,r,t,l="ltr"){const o=Z(t),s=o/2,i=r||s,c=o-i,u=t.scrollbar.paddingStart+i,m=t.scrollbar.size-t.scrollbar.paddingEnd-c,d=t.content-t.viewport,h=l==="ltr"?[0,d]:[d*-1,0];return Je([u,m],h)(e)}function ae(e,r,t="ltr"){const l=Z(r),o=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,s=r.scrollbar.size-o,i=r.content-r.viewport,c=s-l,u=t==="ltr"?[0,i]:[i*-1,0],m=er(e,u);return Je([0,i],[0,c])(m)}function Je(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];const l=(r[1]-r[0])/(e[1]-e[0]);return r[0]+l*(t-e[0])}}function Ke(e,r){return e>0&&e<r}var br=(e,r=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},l=0;return(function o(){const s={left:e.scrollLeft,top:e.scrollTop},i=t.left!==s.left,c=t.top!==s.top;(i||c)&&r(),t=s,l=window.requestAnimationFrame(o)})(),()=>window.cancelAnimationFrame(l)};function ee(e,r){const t=C(e),l=a.useRef(0);return a.useEffect(()=>()=>window.clearTimeout(l.current),[]),a.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(t,r)},[t,r])}function P(e,r){const t=C(r);te(()=>{let l=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(l),l=window.requestAnimationFrame(t)});return o.observe(e),()=>{window.cancelAnimationFrame(l),o.unobserve(e)}}},[e,t])}var Sr=Ue,xr=Be,yr=Fe,wr=qe,gr=$e;const S=a.forwardRef(({children:e,className:r,style:t,type:l="scroll",scrollHideDelay:o=600,scrollbars:s="vertical",scrollbarSize:i=4,scrollbarHoverSize:c=6,onScroll:u},m)=>{const d={"--_scrollbar-size":`${i}px`,"--_scrollbar-hover-size":`${c}px`,...t};return n.jsxs(Sr,{ref:m,className:We("lg-scroll-area",r),style:d,type:l,scrollHideDelay:o,children:[n.jsx(xr,{className:"lg-scroll-area__viewport",onScroll:u,children:e}),(s==="vertical"||s==="both")&&n.jsx(Q,{orientation:"vertical"}),(s==="horizontal"||s==="both")&&n.jsx(Q,{orientation:"horizontal"}),s==="both"&&n.jsx(gr,{className:"lg-scroll-area__corner"})]})});S.displayName="ScrollArea";const Q=a.forwardRef(({orientation:e="vertical",className:r},t)=>n.jsx(yr,{ref:t,className:We("lg-scroll-area__scrollbar",r),orientation:e,children:n.jsx(wr,{className:"lg-scroll-area__thumb"})}));Q.displayName="ScrollBar";S.__docgenInfo={description:`ScrollArea 滚动区域组件

增强原生滚动功能，提供自定义跨浏览器滚动条样式：
- 滚动条悬浮在内容上方，不占用布局空间
- 保留原生滚动行为，键盘/触摸不受影响
- 支持多种显示策略：scroll / hover / auto / always

\`\`\`tsx
<ScrollArea style={{ height: 300 }}>
  <LongList />
</ScrollArea>
\`\`\``,methods:[],displayName:"ScrollArea",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"子内容"},className:{required:!1,tsType:{name:"string"},description:"自定义类名（应用于 Root）"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式（应用于 Root）"},type:{required:!1,tsType:{name:"union",raw:'"scroll" | "hover" | "auto" | "always"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"auto"'},{name:"literal",value:'"always"'}]},description:`滚动条显示策略
- scroll: 滚动时显示，停止后隐藏（默认）
- hover: 鼠标悬浮时显示
- auto: 内容溢出时显示
- always: 始终显示`,defaultValue:{value:'"scroll"',computed:!1}},scrollHideDelay:{required:!1,tsType:{name:"number"},description:'停止滚动/移出后滚动条隐藏延迟（ms），仅 type="scroll"|"hover" 时生效',defaultValue:{value:"600",computed:!1}},scrollbars:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal" | "both"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'},{name:"literal",value:'"both"'}]},description:`滚动条方向
- vertical: 仅垂直（默认）
- horizontal: 仅水平
- both: 双向`,defaultValue:{value:'"vertical"',computed:!1}},scrollbarSize:{required:!1,tsType:{name:"number"},description:"滚动条默认尺寸（px）",defaultValue:{value:"4",computed:!1}},scrollbarHoverSize:{required:!1,tsType:{name:"number"},description:"滚动条悬浮时尺寸（px）",defaultValue:{value:"6",computed:!1}},onScroll:{required:!1,tsType:{name:"UIEventHandler",elements:[{name:"HTMLDivElement"}],raw:"UIEventHandler<HTMLDivElement>"},description:"Viewport 滚动事件回调（用于触底加载等场景）"}}};Q.__docgenInfo={description:`ScrollBar 滚动条子组件

通常由 ScrollArea 内部自动渲染，也可单独使用以获得更精细的控制。`,methods:[],displayName:"ScrollBar",props:{orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"滚动条方向",defaultValue:{value:'"vertical"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}}};const Lr={title:"Components/ScrollArea",component:S,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:"select",options:["scroll","hover","auto","always"],description:"滚动条显示策略"},scrollbars:{control:"select",options:["vertical","horizontal","both"],description:"滚动条方向"},scrollbarSize:{control:{type:"number",min:1,max:12},description:"滚动条默认宽度（px）"},scrollbarHoverSize:{control:{type:"number",min:1,max:16},description:"滚动条悬浮时宽度（px）"},scrollHideDelay:{control:{type:"number",min:0,max:3e3,step:100},description:"滚动条隐藏延迟（ms）"}}},Qe=Array.from({length:50},(e,r)=>`列表项 ${r+1}`);function w(){return n.jsx("div",{style:{padding:8},children:Qe.map(e=>n.jsx("div",{style:{padding:"8px 12px",borderBottom:"1px solid #f0f0f0",fontSize:14},children:e},e))})}const U={render:e=>n.jsx("div",{style:{width:280,border:"1px solid #e0e0e0",borderRadius:8},children:n.jsx(S,{style:{maxHeight:300},...e,children:n.jsx(w,{})})})},V={name:'type="scroll"（滚动时显示）',render:()=>n.jsx("div",{style:{width:280,border:"1px solid #e0e0e0",borderRadius:8},children:n.jsx(S,{style:{maxHeight:250},children:n.jsx(w,{})})})},B={name:'type="hover"（悬浮时显示）',render:()=>n.jsx("div",{style:{width:280,border:"1px solid #e0e0e0",borderRadius:8},children:n.jsx(S,{style:{maxHeight:250},type:"hover",children:n.jsx(w,{})})})},F={name:'type="auto"（溢出时显示）',render:()=>n.jsx("div",{style:{width:280,border:"1px solid #e0e0e0",borderRadius:8},children:n.jsx(S,{style:{maxHeight:250},type:"auto",children:n.jsx(w,{})})})},X={name:'type="always"（始终显示）',render:()=>n.jsx("div",{style:{width:280,border:"1px solid #e0e0e0",borderRadius:8},children:n.jsx(S,{style:{maxHeight:250},type:"always",children:n.jsx(w,{})})})},Y={name:"不同滚动条尺寸",render:()=>n.jsxs("div",{style:{display:"flex",gap:24},children:[n.jsxs("div",{children:[n.jsx("p",{style:{fontSize:12,color:"#666",margin:"0 0 8px"},children:"2px"}),n.jsx("div",{style:{width:200,border:"1px solid #e0e0e0",borderRadius:8},children:n.jsx(S,{style:{maxHeight:200},type:"always",scrollbarSize:2,scrollbarHoverSize:2,children:n.jsx(w,{})})})]}),n.jsxs("div",{children:[n.jsx("p",{style:{fontSize:12,color:"#666",margin:"0 0 8px"},children:"4px → 6px"}),n.jsx("div",{style:{width:200,border:"1px solid #e0e0e0",borderRadius:8},children:n.jsx(S,{style:{maxHeight:200},type:"always",scrollbarSize:4,scrollbarHoverSize:6,children:n.jsx(w,{})})})]}),n.jsxs("div",{children:[n.jsx("p",{style:{fontSize:12,color:"#666",margin:"0 0 8px"},children:"6px → 8px"}),n.jsx("div",{style:{width:200,border:"1px solid #e0e0e0",borderRadius:8},children:n.jsx(S,{style:{maxHeight:200},type:"always",scrollbarSize:6,scrollbarHoverSize:8,children:n.jsx(w,{})})})]})]})},k={name:"水平滚动",render:()=>n.jsx("div",{style:{width:300,border:"1px solid #e0e0e0",borderRadius:8},children:n.jsx(S,{style:{maxWidth:300},type:"always",scrollbars:"horizontal",children:n.jsx("div",{style:{width:600,padding:16},children:n.jsx("p",{style:{whiteSpace:"nowrap",margin:0},children:"这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本，需要水平滚动才能看完。"})})})})},q={name:"双向滚动",render:()=>n.jsx("div",{style:{width:300,border:"1px solid #e0e0e0",borderRadius:8},children:n.jsx(S,{style:{maxHeight:200},type:"always",scrollbars:"both",children:n.jsx("div",{style:{width:600,padding:8},children:Qe.slice(0,30).map(e=>n.jsxs("div",{style:{padding:"8px 12px",borderBottom:"1px solid #f0f0f0",whiteSpace:"nowrap",fontSize:14},children:[e," — 附加的较长文本用于触发水平滚动"]},e))})})})},$={name:"固定高度",render:()=>n.jsx("div",{style:{width:280,border:"1px solid #e0e0e0",borderRadius:8},children:n.jsx(S,{style:{height:200},type:"always",children:n.jsx(w,{})})})},G={name:"Flex 布局中使用",render:()=>n.jsxs("div",{style:{width:280,height:300,border:"1px solid #e0e0e0",borderRadius:8,display:"flex",flexDirection:"column"},children:[n.jsx("div",{style:{padding:"12px 16px",borderBottom:"1px solid #e0e0e0",fontWeight:600,fontSize:14,flexShrink:0},children:"固定头部"}),n.jsx(S,{style:{flex:1,minHeight:0},type:"always",children:n.jsx(w,{})})]})};var ie,ce,de;U.parameters={...U.parameters,docs:{...(ie=U.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      maxHeight: 300
    }} {...args}>
        <ListContent />
      </ScrollArea>
    </div>
}`,...(de=(ce=U.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,me;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'type="scroll"（滚动时显示）',
  render: () => <div style={{
    width: 280,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      maxHeight: 250
    }}>
        <ListContent />
      </ScrollArea>
    </div>
}`,...(me=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,fe,ve;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'type="hover"（悬浮时显示）',
  render: () => <div style={{
    width: 280,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      maxHeight: 250
    }} type="hover">
        <ListContent />
      </ScrollArea>
    </div>
}`,...(ve=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var be,Se,xe;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'type="auto"（溢出时显示）',
  render: () => <div style={{
    width: 280,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      maxHeight: 250
    }} type="auto">
        <ListContent />
      </ScrollArea>
    </div>
}`,...(xe=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var ye,we,ge;X.parameters={...X.parameters,docs:{...(ye=X.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'type="always"（始终显示）',
  render: () => <div style={{
    width: 280,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      maxHeight: 250
    }} type="always">
        <ListContent />
      </ScrollArea>
    </div>
}`,...(ge=(we=X.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var Ae,Re,Ce;Y.parameters={...Y.parameters,docs:{...(Ae=Y.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: "不同滚动条尺寸",
  render: () => <div style={{
    display: "flex",
    gap: 24
  }}>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        margin: "0 0 8px"
      }}>2px</p>
        <div style={{
        width: 200,
        border: "1px solid #e0e0e0",
        borderRadius: 8
      }}>
          <ScrollArea style={{
          maxHeight: 200
        }} type="always" scrollbarSize={2} scrollbarHoverSize={2}>
            <ListContent />
          </ScrollArea>
        </div>
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        margin: "0 0 8px"
      }}>4px → 6px</p>
        <div style={{
        width: 200,
        border: "1px solid #e0e0e0",
        borderRadius: 8
      }}>
          <ScrollArea style={{
          maxHeight: 200
        }} type="always" scrollbarSize={4} scrollbarHoverSize={6}>
            <ListContent />
          </ScrollArea>
        </div>
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        margin: "0 0 8px"
      }}>6px → 8px</p>
        <div style={{
        width: 200,
        border: "1px solid #e0e0e0",
        borderRadius: 8
      }}>
          <ScrollArea style={{
          maxHeight: 200
        }} type="always" scrollbarSize={6} scrollbarHoverSize={8}>
            <ListContent />
          </ScrollArea>
        </div>
      </div>
    </div>
}`,...(Ce=(Re=Y.parameters)==null?void 0:Re.docs)==null?void 0:Ce.source}}};var Te,Pe,Ee;k.parameters={...k.parameters,docs:{...(Te=k.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: "水平滚动",
  render: () => <div style={{
    width: 300,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      maxWidth: 300
    }} type="always" scrollbars="horizontal">
        <div style={{
        width: 600,
        padding: 16
      }}>
          <p style={{
          whiteSpace: "nowrap",
          margin: 0
        }}>
            这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本，需要水平滚动才能看完。
          </p>
        </div>
      </ScrollArea>
    </div>
}`,...(Ee=(Pe=k.parameters)==null?void 0:Pe.docs)==null?void 0:Ee.source}}};var je,Ne,He;q.parameters={...q.parameters,docs:{...(je=q.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: "双向滚动",
  render: () => <div style={{
    width: 300,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      maxHeight: 200
    }} type="always" scrollbars="both">
        <div style={{
        width: 600,
        padding: 8
      }}>
          {items.slice(0, 30).map(item => <div key={item} style={{
          padding: "8px 12px",
          borderBottom: "1px solid #f0f0f0",
          whiteSpace: "nowrap",
          fontSize: 14
        }}>
              {item} — 附加的较长文本用于触发水平滚动
            </div>)}
        </div>
      </ScrollArea>
    </div>
}`,...(He=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:He.source}}};var ze,Le,_e;$.parameters={...$.parameters,docs:{...(ze=$.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: "固定高度",
  render: () => <div style={{
    width: 280,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      height: 200
    }} type="always">
        <ListContent />
      </ScrollArea>
    </div>
}`,...(_e=(Le=$.parameters)==null?void 0:Le.docs)==null?void 0:_e.source}}};var De,Oe,Me;G.parameters={...G.parameters,docs:{...(De=G.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: "Flex 布局中使用",
  render: () => <div style={{
    width: 280,
    height: 300,
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column"
  }}>
      <div style={{
      padding: "12px 16px",
      borderBottom: "1px solid #e0e0e0",
      fontWeight: 600,
      fontSize: 14,
      flexShrink: 0
    }}>
        固定头部
      </div>
      <ScrollArea style={{
      flex: 1,
      minHeight: 0
    }} type="always">
        <ListContent />
      </ScrollArea>
    </div>
}`,...(Me=(Oe=G.parameters)==null?void 0:Oe.docs)==null?void 0:Me.source}}};const _r=["Default","TypeScroll","TypeHover","TypeAuto","TypeAlways","ScrollbarSizes","HorizontalScroll","BothDirections","FixedHeight","FlexLayout"];export{q as BothDirections,U as Default,$ as FixedHeight,G as FlexLayout,k as HorizontalScroll,Y as ScrollbarSizes,X as TypeAlways,F as TypeAuto,B as TypeHover,V as TypeScroll,_r as __namedExportsOrder,Lr as default};
