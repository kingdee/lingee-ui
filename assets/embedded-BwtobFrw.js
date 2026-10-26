import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./react-dom-Ccy8f0CG.js";import{j as i,r as a}from"./tooltip-DJNKKjxB.js";import{n as o}from"./SlashLg-DUwpE87z.js";import{n as s,o as c}from"./provider-CJgyrIyR.js";import{t as l}from"./ChevronRight-B_1Kogus.js";import{t as u}from"./button-BE2IGfnk.js";import{n as d,t as f}from"./WindowX-DhoQiMuS.js";import{t as p}from"./Search-BXvMwetA.js";import{t as m}from"./XLg-B7EiDI5m.js";import{t as h}from"./empty-BvWhFRgm.js";import{t as g}from"./breadcrumb-DQGbgm5c.js";import{t as _}from"./tabs-D0J80uMS.js";import{t as v}from"./input-BQaCj6dw.js";import{t as y}from"./dialog-DPM2d0HV.js";import{t as b}from"./select-s6_9NU7l.js";import{t as x}from"./checkbox-wAKJ5ym-.js";import{t as S}from"./spin-CSKQkfI1.js";import{t as C}from"./infinite-scroll-CBP0Hef1.js";import{t as w}from"./skeleton-BnLnZgbV.js";import{n as T}from"./avatar-D4QDHVbI.js";var E=e(t()),D=n(),O=({entity:e,size:t})=>e.type===`org`?(0,D.jsx)(`span`,{className:`lg-person-picker__org-icon`,style:{width:t,height:t},"aria-hidden":!0,children:(0,D.jsx)(d,{size:Math.round(14/24*t)})}):(0,D.jsx)(T,{className:`lg-person-picker__avatar`,src:e.avatar,size:t});O.displayName=`PersonPickerEntityAvatar`;function k(e,t){let n=e.toLowerCase(),r=t.toLowerCase(),i=[],a=0;for(;a<e.length;){let t=n.indexOf(r,a);if(t===-1){i.push({text:e.slice(a),matched:!1});break}t>a&&i.push({text:e.slice(a,t),matched:!1}),i.push({text:e.slice(t,t+r.length),matched:!0}),a=t+r.length}return i}var A=({text:e,keyword:t,className:n})=>{let r=(0,E.useMemo)(()=>{let n=t?.trim();return n?k(e,n):null},[e,t]);return r?(0,D.jsx)(`span`,{className:n,children:r.map((e,t)=>e.matched?(0,D.jsx)(`mark`,{className:`lg-person-picker__highlight`,children:e.text},t):(0,D.jsx)(E.Fragment,{children:e.text},t))}):(0,D.jsx)(`span`,{className:n,children:e})};A.displayName=`PersonPickerHighlightText`;function j(e){return[e.name,e.code,e.deptName,e.desc].filter(Boolean).join(` · `)}function M({entity:e,keyword:t}){return(0,D.jsxs)(`span`,{className:`lg-person-picker__row-main`,title:j(e),children:[(0,D.jsx)(`span`,{className:`lg-person-picker__row-name`,children:(0,D.jsx)(A,{text:e.name,keyword:t})}),e.code&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`span`,{className:`lg-person-picker__row-divider`,"aria-hidden":!0}),(0,D.jsx)(`span`,{className:`lg-person-picker__row-meta`,children:(0,D.jsx)(A,{text:e.code,keyword:t})})]}),e.deptName&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`span`,{className:`lg-person-picker__row-divider`,"aria-hidden":!0}),(0,D.jsx)(`span`,{className:`lg-person-picker__row-meta`,children:e.deptName})]}),e.desc&&(0,D.jsx)(`span`,{className:`lg-person-picker__row-meta`,children:e.desc})]})}var N=({entity:e,variant:t,checked:n=!1,indeterminate:r=!1,loading:a=!1,keyword:o,onToggle:s,onDrillDown:c,onRemove:u,removeLabel:d,drillDownLabel:f})=>{let p=t===`pick`,h=e.type!==`org`||!p,g=!!(e.hasChildren&&c),_=p?32:24,v=p&&g,y=v||a,b=(0,D.jsx)(M,{entity:e,keyword:o}),C=(0,D.jsx)(x,{className:`lg-person-picker__row-check`,checked:n||!!e.locked,indeterminate:!n&&!e.locked&&r,disabled:e.disabled||e.locked,onChange:t=>s?.(e,t),"aria-label":y?e.name:void 0,children:y?void 0:(0,D.jsxs)(D.Fragment,{children:[h&&(0,D.jsx)(O,{entity:e,size:_}),b]})}),w=a?(0,D.jsx)(S,{className:`lg-person-picker__row-spin`,size:`sm`,"aria-label":e.name}):C;return(0,D.jsxs)(`div`,{className:i(`lg-person-picker__row`,`lg-person-picker__row--${t}`,`lg-person-picker__row--${e.type}`,p&&n&&`lg-person-picker__row--checked`,e.disabled&&`lg-person-picker__row--disabled`,e.locked&&`lg-person-picker__row--locked`,v&&`lg-person-picker__row--drillable`,p&&a&&`lg-person-picker__row--loading`),onClick:v?()=>c?.(e):void 0,children:[p?y?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`span`,{className:`lg-person-picker__row-check-slot`,onClick:e=>e.stopPropagation(),children:w}),h&&(0,D.jsx)(O,{entity:e,size:_}),b]}):C:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(O,{entity:e,size:_}),b]}),g&&(0,D.jsx)(`button`,{type:`button`,className:`lg-person-picker__row-action`,"aria-label":f,onClick:()=>c?.(e),children:(0,D.jsx)(l,{size:16})}),!p&&!e.locked&&u&&(0,D.jsx)(`button`,{type:`button`,className:`lg-person-picker__row-action lg-person-picker__row-action--remove`,"aria-label":d,onClick:()=>u(e),children:(0,D.jsx)(m,{size:14})})]})};N.displayName=`PersonPickerEntityRow`;var P=({rows:e=7})=>(0,D.jsx)(`div`,{className:`lg-person-picker__skeleton`,"aria-hidden":!0,children:Array.from({length:e},(e,t)=>(0,D.jsxs)(`div`,{className:`lg-person-picker__skeleton-row`,children:[(0,D.jsx)(w,{variant:`circle`,width:32,height:32}),(0,D.jsx)(w,{className:`lg-person-picker__skeleton-bar`,variant:`rect`,height:16,borderRadius:8})]},t))});P.displayName=`PersonPickerListSkeleton`;function F(e){return`${e.type}:${e.id}`}var I=[`person`,`group`,`org`];function ee(e){let{value:t,defaultValue:n,mode:r,max:i,onChange:a,onExceed:o}=e,[s,c]=(0,E.useState)(()=>n??[]),l=t!==void 0,u=l?t:s,d=(0,E.useMemo)(()=>new Set(u.map(F)),[u]),f=(0,E.useMemo)(()=>{let e=new Map;for(let t of u){let n=e.get(t.type);n?n.push(t):e.set(t.type,[t])}return I.filter(t=>e.has(t)).map(t=>({type:t,items:e.get(t)}))},[u]),p=(0,E.useMemo)(()=>{let e={person:0,group:0,org:0};for(let t of u)e[t.type]+=1;return e},[u]),m=(0,E.useCallback)((e,t)=>{l||c(e),a?.(e,t)},[l,a]),h=(0,E.useCallback)((e,t)=>{if(e.locked&&!t||e.disabled)return;let n=F(e);if(!t){m(u.filter(e=>F(e)!==n),{entity:e,selected:!1});return}if(!d.has(n)){if(r===`single`){m([e],{entity:e,selected:!0});return}if(i!==void 0&&u.length>=i){o?.(i);return}m([...u,e],{entity:e,selected:!0})}},[m,i,r,o,u,d]);return{selected:u,selectedKeys:d,groups:f,count:p,toggle:h,toggleMany:(0,E.useCallback)((e,t)=>{let n=e.filter(e=>!e.disabled);if(n.length===0)return;if(!t){let e=new Set(n.filter(e=>!e.locked).map(F));if(e.size===0)return;m(u.filter(t=>!e.has(F(t))),{selected:!1});return}let a=n.filter(e=>!d.has(F(e)));if(a.length!==0){if(r===`single`){m([a[0]],{entity:a[0],selected:!0});return}if(i!==void 0&&u.length+a.length>i){o?.(i);return}m([...u,...a],{selected:!0})}},[m,i,r,o,u,d]),remove:(0,E.useCallback)(e=>h(e,!1),[h])}}function te({scopeKey:e,selectableItems:t,selectedKeys:n,onToggleMany:r,onSelectAll:i,onSelectAllError:a}){let o=(0,E.useRef)(null),s=(0,E.useRef)(e),[c,l]=(0,E.useState)(!1);s.current!==e&&(s.current=e,o.current=null);let u=(0,E.useRef)(r);u.current=r;let d=(0,E.useRef)(i);d.current=i;let f=(0,E.useRef)(a);f.current=a;let p=(0,E.useRef)(!0);(0,E.useEffect)(()=>()=>{p.current=!1},[]);let m=o.current??t,h=m.length>0&&m.every(e=>n.has(F(e)));return{checked:h,indeterminate:!h&&m.some(e=>n.has(F(e))),loading:c,toggle:(0,E.useCallback)(e=>{let n=n=>e?n:[...n,...t],r=o.current;if(r){u.current(n(r),e);return}let i=d.current;if(!i){u.current(t,e);return}let a=s.current;l(!0),i().then(t=>{!p.current||s.current!==a||(o.current=t,u.current(n(t),e))}).catch(e=>f.current?.(e)).finally(()=>{p.current&&l(!1)})},[t])}}function L(e,t){let n=(0,E.useRef)(e);n.current=e;let r=(0,E.useRef)(null);return(0,E.useEffect)(()=>()=>{r.current!==null&&clearTimeout(r.current)},[]),(0,E.useCallback)(e=>{r.current!==null&&clearTimeout(r.current),r.current=setTimeout(()=>n.current(e),t)},[t])}function ne(e,t){let[n,r]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{if(!e){r(!1);return}if(t<=0){r(!0);return}let n=setTimeout(()=>r(!0),t);return()=>clearTimeout(n)},[e,t]),n}var R=({tabs:e,activeTab:t,onTabChange:n,tabLabels:r,data:i,loading:c,loadingDelay:l,loadError:d,onRetry:m,hasMore:y,onLoadMore:b,keyword:w,onSearch:T,searchDebounce:O,searchPlaceholder:k,orgPath:A,onOrgPathChange:j,selectedKeys:M,onToggle:I,onToggleMany:ee,orgExpansion:R,onSelectAll:ie,onSelectAllError:B})=>{let V=s(`PersonPicker`),H=(0,E.useRef)(null),[U,W]=(0,E.useState)(w??``);(0,E.useEffect)(()=>{w!==void 0&&W(w)},[w]);let ae=L(e=>T?.(e),O),oe=e=>{let t=e.target.value;W(t),ae(t)},G=U.trim().length>0,K=i.sections??[],q=i.orgNodes??[],se=(0,E.useMemo)(()=>(K.length>0?K.flatMap(e=>e.items):q).filter(e=>!e.disabled),[q,K]),ce=`${t}|${A.map(e=>e.id).join(`/`)}|${U.trim()}`,J=te({scopeKey:ce,selectableItems:se,selectedKeys:M,onToggleMany:ee,onSelectAll:ie,onSelectAllError:B}),le=(0,E.useMemo)(()=>[{key:`__root__`,icon:(0,D.jsx)(o,{size:16}),onClick:()=>j?.([])},...A.map((e,t)=>({key:`${t}-${e.id}`,label:e.name,onClick:()=>j?.(A.slice(0,t+1))}))],[j,A]),Y=(0,E.useCallback)(e=>{j?.([...A,{id:e.id,name:e.name}])},[j,A]),ue=t===`person`&&R!==void 0,X=e=>{let t=G?U:void 0;if(ue&&R&&e.type===`org`){let n=R.getState(e);return(0,D.jsx)(N,{entity:e,variant:`pick`,checked:n.checked,indeterminate:n.indeterminate,loading:R.isExpanding(e),keyword:t,onToggle:R.toggle,onDrillDown:Y,drillDownLabel:V.drillDown},F(e))}return(0,D.jsx)(N,{entity:e,variant:`pick`,checked:M.has(F(e)),keyword:t,onToggle:I,onDrillDown:Y,drillDownLabel:V.drillDown},F(e))},Z=K.every(e=>e.items.length===0)&&q.length===0,de=ne(!!c,l),fe=!!c&&(Z||de),pe=fe||!!d||Z;return(0,E.useEffect)(()=>{let e=H.current;e&&(e.scrollTop=0)},[ce]),(0,D.jsxs)(`div`,{className:`lg-person-picker__left`,children:[(0,D.jsxs)(`div`,{className:`lg-person-picker__left-header`,children:[(0,D.jsx)(v,{className:`lg-person-picker__search`,value:U,onChange:oe,placeholder:k??V.searchPlaceholder,suffix:(0,D.jsx)(p,{size:16}),allowClear:!0,"aria-label":k??V.searchPlaceholder}),!G&&e.length>1&&(0,D.jsx)(_,{className:`lg-person-picker__tabs`,variant:`underline`,size:`sm`,transparent:!0,activeKey:t,onChange:e=>n(e),items:e.map(e=>({key:e,label:r?.[e]??V[z[e]]}))})]}),!G&&re.has(t)&&A.length>0&&(0,D.jsx)(`div`,{className:`lg-person-picker__breadcrumb`,children:(0,D.jsx)(g,{size:`md`,items:le,maxItems:3})}),(0,D.jsx)(`div`,{className:`lg-person-picker__list`,children:pe?fe?(0,D.jsx)(P,{}):d?(0,D.jsx)(h,{className:`lg-person-picker__status`,size:`lg`,icon:f,description:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`span`,{className:`lg-person-picker__status-title`,children:V.loadFailed}),(0,D.jsx)(`span`,{className:`lg-person-picker__status-detail`,children:V.loadFailedDetail})]}),children:m&&(0,D.jsx)(u,{variant:`primary`,ghost:!0,size:`md`,onClick:m,children:V.retry})}):Z?(0,D.jsx)(h,{className:`lg-person-picker__status`,size:`md`,icon:G?p:void 0,description:(0,D.jsx)(`span`,{className:`lg-person-picker__status-title`,children:G?V.searchEmpty:V.empty})}):null:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(a,{fill:!0,viewportRef:H,children:(0,D.jsx)(`div`,{className:`lg-person-picker__list-inner`,children:(0,D.jsxs)(D.Fragment,{children:[i.selectAll&&se.length>1&&(0,D.jsx)(`div`,{className:`lg-person-picker__select-all`,children:J.loading?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(S,{className:`lg-person-picker__row-spin`,size:`sm`,"aria-label":V.selectAll}),(0,D.jsx)(`span`,{className:`lg-person-picker__select-all-label`,children:V.selectAll})]}):(0,D.jsx)(x,{checked:J.checked,indeterminate:J.indeterminate,onChange:J.toggle,children:(0,D.jsx)(`span`,{className:`lg-person-picker__select-all-label`,children:V.selectAll})})}),K.map(e=>(0,D.jsxs)(`div`,{className:`lg-person-picker__section`,children:[e.title&&(0,D.jsx)(`div`,{className:`lg-person-picker__section-title`,children:e.title}),(0,D.jsx)(`div`,{className:`lg-person-picker__rows`,children:e.items.map(X)})]},e.key)),q.length>0&&(0,D.jsx)(`div`,{className:`lg-person-picker__rows`,children:q.map(X)}),b&&(0,D.jsx)(C,{loadMore:b,hasMore:!!y,scrollTarget:()=>H.current,noMore:null})]})})}),(0,D.jsx)(`div`,{className:`lg-person-picker__fade`,"aria-hidden":!0})]})})]})},re=new Set([`org`,`person`]),z={"recent-contacts":`tabRecentContacts`,"recent-groups":`tabRecentGroups`,org:`tabOrganization`,person:`tabPerson`};R.displayName=`PersonPickerLeftPane`;var ie=e(r(),1);function B(e,t,n){let r=n.initialDeps??[],i,a=!0;function o(){let o;n.key&&n.debug?.call(n)&&(o=Date.now());let s=e();if(!(s.length!==r.length||s.some((e,t)=>r[t]!==e)))return i;r=s;let c;if(n.key&&n.debug?.call(n)&&(c=Date.now()),i=t(...s),n.key&&n.debug?.call(n)){let e=Math.round((Date.now()-o)*100)/100,t=Math.round((Date.now()-c)*100)/100,r=t/16,i=(e,t)=>{for(e=String(e);e.length<t;)e=` `+e;return e};console.info(`%c⏱ ${i(t,5)} /${i(e,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*r,120))}deg 100% 31%);`,n?.key)}return n?.onChange&&!(a&&n.skipInitialOnChange)&&n.onChange(i),a=!1,i}return o.updateDeps=e=>{r=e},o}function V(e,t){if(e===void 0)throw Error(`Unexpected undefined${t?`: ${t}`:``}`);return e}var H=(e,t)=>Math.abs(e-t)<1.01,U=(e,t,n)=>{let r;return function(...i){e.clearTimeout(r),r=e.setTimeout(()=>t.apply(this,i),n)}},W=e=>{let{offsetWidth:t,offsetHeight:n}=e;return{width:t,height:n}},ae=e=>e,oe=e=>{let t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1),r=[];for(let e=t;e<=n;e++)r.push(e);return r},G=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=e=>{let{width:n,height:r}=e;t({width:Math.round(n),height:Math.round(r)})};if(i(W(n)),!r.ResizeObserver)return()=>{};let a=new r.ResizeObserver(t=>{let r=()=>{let e=t[0];if(e?.borderBoxSize){let t=e.borderBoxSize[0];if(t){i({width:t.inlineSize,height:t.blockSize});return}}i(W(n))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(r):r()});return a.observe(n,{box:`border-box`}),()=>{a.unobserve(n)}},K={passive:!0},q=typeof window>`u`||`onscrollend`in window,se=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=0,a=e.options.useScrollendEvent&&q?()=>void 0:U(r,()=>{t(i,!1)},e.options.isScrollingResetDelay),o=r=>()=>{let{horizontal:o,isRtl:s}=e.options;i=o?n.scrollLeft*(s&&-1||1):n.scrollTop,a(),t(i,r)},s=o(!0),c=o(!1);n.addEventListener(`scroll`,s,K);let l=e.options.useScrollendEvent&&q;return l&&n.addEventListener(`scrollend`,c,K),()=>{n.removeEventListener(`scroll`,s),l&&n.removeEventListener(`scrollend`,c)}},ce=(e,t,n)=>{if(t?.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?`inlineSize`:`blockSize`])}return e[n.options.horizontal?`offsetWidth`:`offsetHeight`]},J=(e,{adjustments:t=0,behavior:n},r)=>{var i,a;let o=e+t;(a=(i=r.scrollElement)?.scrollTo)==null||a.call(i,{[r.options.horizontal?`left`:`top`]:o,behavior:n})},le=class{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.laneAssignments=new Map,this.pendingMeasuredCacheIndexes=[],this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.now=()=>{var e;return((e=this.targetWindow?.performance)?.now)?.call(e)??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,n=this.indexFromElement(t);if(!t.isConnected){this.observer.unobserve(t);return}this.shouldMeasureDuringScroll(n)&&this.resizeItem(n,this.options.measureElement(t,e,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}));return{disconnect:()=>{var n;(n=t())==null||n.disconnect(),e=null},observe:e=>t()?.observe(e,{box:`border-box`}),unobserve:e=>t()?.unobserve(e)}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(([t,n])=>{n===void 0&&delete e[t]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:ae,rangeExtractor:oe,onChange:()=>{},measureElement:ce,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:`data-index`,initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,...e}},this.notify=e=>{var t,n;(n=(t=this.options).onChange)==null||n.call(t,this,e)},this.maybeNotify=B(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),this.rafId!=null&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{let e=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==e){if(this.cleanup(),!e){this.maybeNotify();return}this.scrollElement=e,this.targetWindow=this.scrollElement&&`ownerDocument`in this.scrollElement?this.scrollElement.ownerDocument.defaultView:this.scrollElement?.window??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{this.scrollAdjustments=0,this.scrollDirection=t?this.getScrollOffset()<e?`forward`:`backward`:null,this.scrollOffset=e,this.isScrolling=t,this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?`width`:`height`]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset==`function`?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let n=new Map,r=new Map;for(let i=t-1;i>=0;i--){let t=e[i];if(n.has(t.lane))continue;let a=r.get(t.lane);if(a==null||t.end>a.end?r.set(t.lane,t):t.end<a.end&&n.set(t.lane,!0),n.size===this.options.lanes)break}return r.size===this.options.lanes?Array.from(r.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=B(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes],(e,t,n,r,i,a)=>(this.prevLanes!==void 0&&this.prevLanes!==a&&(this.lanesChangedFlag=!0),this.prevLanes=a,this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i,lanes:a}),{key:!1}),this.getMeasurements=B(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i,lanes:a},o)=>{if(!i)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMeasuredCacheIndexes=[]),this.measurementsCache.length===0&&!this.lanesSettling&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let s=this.lanesSettling?0:this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[],this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1);let c=this.measurementsCache.slice(0,s),l=Array(a).fill(void 0);for(let e=0;e<s;e++){let t=c[e];t&&(l[t.lane]=e)}for(let i=s;i<e;i++){let e=r(i),a=this.laneAssignments.get(i),s,u;if(a!==void 0&&this.options.lanes>1){s=a;let e=l[s],r=e===void 0?void 0:c[e];u=r?r.end+this.options.gap:t+n}else{let e=this.options.lanes===1?c[i-1]:this.getFurthestMeasurement(c,i);u=e?e.end+this.options.gap:t+n,s=e?e.lane:i%this.options.lanes,this.options.lanes>1&&this.laneAssignments.set(i,s)}let d=o.get(e),f=typeof d==`number`?d:this.options.estimateSize(i),p=u+f;c[i]={index:i,start:u,size:f,end:p,key:e,lane:s},l[s]=i}return this.measurementsCache=c,c},{key:!1,debug:()=>this.options.debug}),this.calculateRange=B(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,n,r)=>this.range=e.length>0&&t>0?ue({measurements:e,outerSize:t,scrollOffset:n,lanes:r}):null,{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=B(()=>{let e=null,t=null,n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,n,r,i)=>r===null||i===null?[]:e({startIndex:r,endIndex:i,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{if(!this.scrollState||this.scrollState.behavior!==`smooth`)return!0;let t=this.scrollState.index??this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)?.index;if(t!==void 0&&this.range){let n=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),r=Math.max(0,t-n),i=Math.min(this.options.count-1,t+n);return e>=r&&e<=i}return!0},this.measureElement=e=>{if(!e){this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});return}let t=this.indexFromElement(e),n=this.options.getItemKey(t),r=this.elementsCache.get(n);r!==e&&(r&&this.observer.unobserve(r),this.observer.observe(e),this.elementsCache.set(n,e)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{let n=this.measurementsCache[e];if(!n)return;let r=t-(this.itemSizeCache.get(n.key)??n.size);r!==0&&(this.scrollState?.behavior!==`smooth`&&(this.shouldAdjustScrollPositionOnItemSizeChange===void 0?n.start<this.getScrollOffset()+this.scrollAdjustments:this.shouldAdjustScrollPositionOnItemSizeChange(n,r,this))&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=r,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(n.index),this.itemSizeCache=new Map(this.itemSizeCache.set(n.key,t)),this.notify(!1))},this.getVirtualItems=B(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let n=[];for(let r=0,i=e.length;r<i;r++){let i=t[e[r]];n.push(i)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(t.length!==0)return V(t[Y(0,t.length-1,e=>V(t[e]).start,e)])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if(`scrollHeight`in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getOffsetForAlignment=(e,t,n=0)=>{if(!this.scrollElement)return 0;let r=this.getSize(),i=this.getScrollOffset();t===`auto`&&(t=e>=i+r?`end`:`start`),t===`center`?e+=(n-r)/2:t===`end`&&(e-=r);let a=this.getMaxScrollOffset();return Math.max(Math.min(a,e),0)},this.getOffsetForIndex=(e,t=`auto`)=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getSize(),r=this.getScrollOffset(),i=this.measurementsCache[e];if(!i)return;if(t===`auto`){if(i.end>=r+n-this.options.scrollPaddingEnd)t=`end`;else if(i.start<=r+this.options.scrollPaddingStart)t=`start`;else return[r,t]}if(t===`end`&&e===this.options.count-1)return[this.getMaxScrollOffset(),t];let a=t===`end`?i.end+this.options.scrollPaddingEnd:i.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(a,t,i.size),t]},this.scrollToOffset=(e,{align:t=`start`,behavior:n=`auto`}={})=>{let r=this.getOffsetForAlignment(e,t),i=this.now();this.scrollState={index:null,align:t,behavior:n,startedAt:i,lastTargetOffset:r,stableFrames:0},this._scrollToOffset(r,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t=`auto`,behavior:n=`auto`}={})=>{e=Math.max(0,Math.min(e,this.options.count-1));let r=this.getOffsetForIndex(e,t);if(!r)return;let[i,a]=r,o=this.now();this.scrollState={index:e,align:a,behavior:n,startedAt:o,lastTargetOffset:i,stableFrames:0},this._scrollToOffset(i,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t=`auto`}={})=>{let n=this.getScrollOffset()+e,r=this.now();this.scrollState={index:null,align:`start`,behavior:t,startedAt:r,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.getTotalSize=()=>{let e=this.getMeasurements(),t;if(e.length===0)t=this.options.paddingStart;else if(this.options.lanes===1)t=e[e.length-1]?.end??0;else{let n=Array(this.options.lanes).fill(null),r=e.length-1;for(;r>=0&&n.some(e=>e===null);){let t=e[r];n[t.lane]===null&&(n[t.lane]=t.end),r--}t=Math.max(...n.filter(e=>e!==null))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(e,{adjustments:t,behavior:n})=>{this.options.scrollToFn(e,{behavior:n,adjustments:t},this)},this.measure=()=>{this.itemSizeCache=new Map,this.laneAssignments=new Map,this.notify(!1)},this.setOptions(e)}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}this.rafId??=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()})}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=this.scrollState.index==null?void 0:this.getOffsetForIndex(this.scrollState.index,this.scrollState.align),t=e?e[0]:this.scrollState.lastTargetOffset,n=t!==this.scrollState.lastTargetOffset;if(!n&&H(t,this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1){this.scrollState=null;return}}else this.scrollState.stableFrames=0,n&&(this.scrollState.lastTargetOffset=t,this.scrollState.behavior=`auto`,this._scrollToOffset(t,{adjustments:void 0,behavior:`auto`}));this.scheduleScrollReconcile()}},Y=(e,t,n,r)=>{for(;e<=t;){let i=(e+t)/2|0,a=n(i);if(a<r)e=i+1;else if(a>r)t=i-1;else return i}return e>0?e-1:0};function ue({measurements:e,outerSize:t,scrollOffset:n,lanes:r}){let i=e.length-1,a=t=>e[t].start;if(e.length<=r)return{startIndex:0,endIndex:i};let o=Y(0,i,a,n),s=o;if(r===1)for(;s<i&&e[s].end<n+t;)s++;else if(r>1){let a=Array(r).fill(0);for(;s<i&&a.some(e=>e<n+t);){let t=e[s];a[t.lane]=t.end,s++}let c=Array(r).fill(n+t);for(;o>=0&&c.some(e=>e>=n);){let t=e[o];c[t.lane]=t.start,o--}o=Math.max(0,o-o%r),s=Math.min(i,s+(r-1-s%r))}return{startIndex:o,endIndex:s}}var X=typeof document<`u`?E.useLayoutEffect:E.useEffect;function Z({useFlushSync:e=!0,...t}){let n=E.useReducer(()=>({}),{})[1],r={...t,onChange:(r,i)=>{var a;e&&i?(0,ie.flushSync)(n):n(),(a=t.onChange)==null||a.call(t,r,i)}},[i]=E.useState(()=>new le(r));return i.setOptions(r),X(()=>i._didMount(),[]),X(()=>i._willUpdate()),i}function de(e){return Z({observeElementRect:G,observeElementOffset:se,scrollToFn:J,...e})}var fe=32,pe=28;function me(e){let t=[];for(let n of e)t.push({kind:`title`,type:n.type,count:n.items.length,spaced:t.length>0}),n.items.forEach((e,r)=>{t.push({kind:`entity`,entity:e,last:r===n.items.length-1})});return t}function he(e){return e?.kind===`title`?e.spaced?36:pe:e?.last?fe:34}function ge(e,t){return e?e.kind===`title`?`title-${e.type}`:F(e.entity):`empty-${t}`}function _e(e){let t=new Map;return e.forEach((e,n)=>{e.kind===`title`&&t.set(e.type,n)}),t}var ve={person:`groupPerson`,group:`groupGroup`,org:`groupOrg`},ye=({groups:e,count:t,onRemove:n})=>{let r=s(`PersonPicker`),[o,c]=(0,E.useState)(null),l=(0,E.useRef)(new Map),u=(0,E.useMemo)(()=>me(e),[e]),d=u.length>200,f=de({count:d?u.length:0,getScrollElement:()=>o,estimateSize:e=>he(u[e]),getItemKey:e=>ge(u[e],e),overscan:12}),p=(0,E.useMemo)(()=>_e(u),[u]),m=(0,E.useCallback)(e=>t=>{t?l.current.set(e,t):l.current.delete(e)},[]),h=(0,E.useCallback)(e=>{if(d){let t=p.get(e);t!==void 0&&f.scrollToIndex(t,{align:`start`});return}let t=l.current.get(e);!o||!t||(o.scrollTop=t.offsetTop)},[p,o,d,f]),g=t.person+t.group+t.org,_=(e,t)=>(0,D.jsxs)(`div`,{className:`lg-person-picker__section-title`,children:[r[ve[e]],` `,t]}),v=e=>(0,D.jsx)(N,{entity:e,variant:`selected`,onRemove:n,removeLabel:r.remove}),y=e=>e.kind===`title`?_(e.type,e.count):v(e.entity);return(0,D.jsxs)(`div`,{className:`lg-person-picker__right`,children:[(0,D.jsxs)(`div`,{className:`lg-person-picker__right-header`,children:[(0,D.jsx)(`span`,{className:`lg-person-picker__right-title`,children:r.selectedTitle}),g===0?(0,D.jsx)(`span`,{className:`lg-person-picker__count-empty`,children:`0`}):(0,D.jsx)(`span`,{className:`lg-person-picker__counts`,children:I.filter(e=>t[e]>0).map(e=>(0,D.jsxs)(`button`,{type:`button`,className:`lg-person-picker__count`,onClick:()=>h(e),"aria-label":`${r.jumpTo}${r[ve[e]]}`,children:[r[ve[e]],` `,t[e]]},e))})]}),(0,D.jsxs)(`div`,{className:`lg-person-picker__list`,children:[(0,D.jsx)(a,{fill:!0,viewportRef:c,children:(0,D.jsx)(`div`,{className:`lg-person-picker__list-inner`,children:d?(0,D.jsx)(`div`,{className:`lg-person-picker__virtual`,style:{height:f.getTotalSize()},children:f.getVirtualItems().map(e=>{let t=u[e.index];return t?(0,D.jsx)(`div`,{ref:f.measureElement,"data-index":e.index,className:i(`lg-person-picker__virtual-row`,t.kind===`entity`&&!t.last&&`lg-person-picker__virtual-row--entity`,t.kind===`title`&&t.spaced&&`lg-person-picker__virtual-row--spaced`),style:{transform:`translateY(${e.start}px)`},children:y(t)},e.key):null})}):e.map(e=>(0,D.jsxs)(`div`,{className:`lg-person-picker__section`,ref:m(e.type),children:[_(e.type,e.items.length),(0,D.jsx)(`div`,{className:`lg-person-picker__rows`,children:e.items.map(e=>(0,D.jsx)(E.Fragment,{children:v(e)},F(e)))})]},e.type))})}),(0,D.jsx)(`div`,{className:`lg-person-picker__fade`,"aria-hidden":!0})]})]})};ye.displayName=`PersonPickerRightPane`;function be({onExpandOrg:e,onExpandOrgError:t,selectedKeys:n,onToggleMany:r}){let i=(0,E.useRef)(new Map),a=(0,E.useRef)(new Set),[o,s]=(0,E.useState)(()=>new Set),c=(0,E.useRef)(e);c.current=e;let l=(0,E.useRef)(t);l.current=t;let u=(0,E.useRef)(r);u.current=r;let d=(0,E.useRef)(!0);return(0,E.useEffect)(()=>()=>{d.current=!1},[]),{getState:(0,E.useCallback)(e=>{let t=i.current.get(F(e));if(!t||t.length===0)return{checked:!1,indeterminate:!1};let r=0;for(let e of t)n.has(F(e))&&(r+=1);return{checked:r===t.length,indeterminate:r>0&&r<t.length}},[n]),isExpanding:(0,E.useCallback)(e=>o.has(F(e)),[o]),toggle:(0,E.useCallback)((e,t)=>{let n=c.current;if(!n)return;let r=F(e),o=i.current.get(r);if(o){u.current(o,t);return}!t||a.current.has(r)||(a.current.add(r),s(new Set(a.current)),n(e).then(e=>{i.current.set(r,e),d.current&&u.current(e,!0)}).catch(t=>l.current?.(e,t)).finally(()=>{a.current.delete(r),d.current&&s(new Set(a.current))}))},[])}}var xe=[`org`,`person`],Se={},Ce=(0,E.forwardRef)(({tabs:e=xe,activeTab:t,defaultActiveTab:n,onTabChange:r,tabLabels:a,data:o=Se,loading:s,loadingDelay:c=200,loadError:l,onRetry:u,hasMore:d,onLoadMore:f,value:p,defaultValue:m,onChange:h,keyword:g,onSearch:_,searchDebounce:v=300,searchPlaceholder:y,orgPath:b,onOrgPathChange:x,resetPathOnTabChange:S=!0,onExpandOrg:C,onExpandOrgError:w,onSelectAll:T,onSelectAllError:O,mode:k=`multiple`,max:A,onExceed:j,paneHeight:M,className:N,style:P},F)=>{let[I,te]=(0,E.useState)(()=>n??e[0]),L=t??I,[ne,re]=(0,E.useState)([]),z=b??ne,ie=(0,E.useCallback)(e=>{t===void 0&&te(e),(typeof S==`function`?S({prevTab:L,nextTab:e,orgPath:z}):S)&&(b===void 0?re([]):b.length>0&&x?.([])),r?.(e)},[L,t,x,r,z,b,S]),B=(0,E.useCallback)(e=>{b===void 0&&re(e),x?.(e)},[x,b]),V=ee({value:p,defaultValue:m,mode:k,max:A,onChange:h,onExceed:j}),H=be({onExpandOrg:C,onExpandOrgError:w,selectedKeys:V.selectedKeys,onToggleMany:V.toggleMany}),U=typeof M==`number`?{...P,"--_pp-panes-height":`${M}px`}:P;return(0,D.jsx)(`div`,{ref:F,className:i(`lg-person-picker`,M===`fill`&&`lg-person-picker--fill`,N),style:U,children:(0,D.jsxs)(`div`,{className:`lg-person-picker__panes`,children:[(0,D.jsx)(R,{tabs:e,activeTab:L,onTabChange:ie,tabLabels:a,data:o,loading:s,loadingDelay:c,loadError:l,onRetry:u,hasMore:d,onLoadMore:f,keyword:g,onSearch:_,searchDebounce:v,searchPlaceholder:y,orgPath:z,onOrgPathChange:B,selectedKeys:V.selectedKeys,onToggle:V.toggle,onToggleMany:V.toggleMany,orgExpansion:C?H:void 0,onSelectAll:T,onSelectAllError:O}),(0,D.jsx)(ye,{groups:V.groups,count:V.count,onRemove:V.remove})]})})});Ce.displayName=`PersonPickerPanel`;var we=720,Q=({open:e,onOpenChange:t,title:n,okText:r,cancelText:i,okLoading:a,okDisabledWhenEmpty:o=!0,onConfirm:c,onCancel:l,width:d=we,zIndex:f,hostModal:p,value:m,defaultValue:h,onChange:g,..._})=>{let v=s(`PersonPicker`),[b,x]=(0,E.useState)(!1),[S,C]=(0,E.useState)(()=>h??[]),w=m!==void 0,T=w?m:S,O=(0,E.useCallback)((e,t)=>{w||C(e),g?.(e,t)},[w,g]),k=(0,E.useCallback)(()=>{l?.(),t(!1)},[l,t]),A=(0,E.useCallback)(async()=>{let e=c?.(T);if(!(e instanceof Promise)){t(!1);return}x(!0);try{await e,t(!1)}finally{x(!1)}},[c,t,T]);return(0,D.jsx)(y,{className:`lg-person-picker-dialog`,open:e,onOpenChange:e=>e?t(!0):k(),title:n??v.title,width:d,zIndex:f,hostModal:p,footer:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{variant:`text`,size:`lg`,onClick:k,children:i??v.cancel}),(0,D.jsx)(u,{variant:`primary`,size:`lg`,loading:a||b,disabled:o&&T.length===0,onClick:A,children:r??v.ok})]}),children:(0,D.jsx)(Ce,{..._,value:T,onChange:O})})};Q.displayName=`PersonPicker`;var Te={root:[{type:`org`,id:`eng`,name:`Engineering`,desc:`86`,hasChildren:!0},{type:`org`,id:`mkt`,name:`Marketing`,desc:`24`,hasChildren:!0},{type:`org`,id:`fin`,name:`Finance`,desc:`12`}],eng:[{type:`org`,id:`eng-web`,name:`Web Platform`,desc:`31`,hasChildren:!0},{type:`org`,id:`eng-api`,name:`API Services`,desc:`28`},{type:`org`,id:`eng-qa`,name:`Quality Assurance`,desc:`15`}],"eng-web":[{type:`org`,id:`eng-web-ui`,name:`Design System`,desc:`9`},{type:`org`,id:`eng-web-app`,name:`Application Shell`,desc:`11`}],mkt:[{type:`org`,id:`mkt-brand`,name:`Brand`,desc:`8`},{type:`org`,id:`mkt-growth`,name:`Growth`,desc:`10`}]},Ee={root:[{type:`person`,id:`p1`,name:`Avery Stone`,code:`10001`,deptName:`Executive`}],eng:[{type:`person`,id:`p2`,name:`Blake Rivers`,code:`10002`,deptName:`Engineering`},{type:`person`,id:`p3`,name:`Casey Lane`,code:`10003`,deptName:`Engineering`}],"eng-web":[{type:`person`,id:`p4`,name:`Devon Pike`,code:`10004`,deptName:`Web Platform`},{type:`person`,id:`p5`,name:`Ellis Ward`,code:`10005`,deptName:`Web Platform`},{type:`person`,id:`p6`,name:`Frankie Hale`,code:`10006`,deptName:`Web Platform`}],"eng-web-ui":[{type:`person`,id:`p7`,name:`Georgia Mills`,code:`10007`,deptName:`Design System`}],"eng-api":[{type:`person`,id:`p8`,name:`Harper Quinn`,code:`10008`,deptName:`API Services`},{type:`person`,id:`p9`,name:`Indigo Reese`,code:`10009`,deptName:`API Services`}],mkt:[{type:`person`,id:`p10`,name:`Jordan Vale`,code:`10010`,deptName:`Marketing`}],fin:[{type:`person`,id:`p11`,name:`Kai Monroe`,code:`10011`,deptName:`Finance`}]},De=Object.values(Ee).flat();function Oe(){let[e,t]=(0,E.useState)(!1),[n,r]=(0,E.useState)(`org`),[i,a]=(0,E.useState)([]),[o,s]=(0,E.useState)(``),[c,l]=(0,E.useState)([]),d=i.length>0?i[i.length-1].id:`root`,f=(0,E.useMemo)(()=>{if(o.trim())return{sections:[{key:`search`,items:De.filter(e=>e.name.toLowerCase().includes(o.trim().toLowerCase()))}]};let e=Te[d]??[];return n===`org`?{orgNodes:e}:{selectAll:!0,sections:[{key:`members`,title:`Members`,items:Ee[d]??[]}],orgNodes:e}},[d,o,n]);return(0,D.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,D.jsx)(u,{variant:`primary`,onClick:()=>t(!0),children:`Open picker`}),(0,D.jsx)(`span`,{style:{color:`var(--lg-g-fg-color-black-default)`,fontSize:12},children:c.length>0?`Confirmed: ${c.length}`:`Nothing confirmed yet`}),(0,D.jsx)(Q,{open:e,onOpenChange:t,tabs:[`org`,`person`],activeTab:n,onTabChange:r,orgPath:i,onOrgPathChange:a,keyword:o,onSearch:s,data:f,onConfirm:l})]})}var ke=`import { useMemo, useState } from "react";
import { Button, PersonPicker } from "lingee-ui";
import type { PickerEntity, PickerOrgPathItem, PickerPaneData, PickerTabKey } from "lingee-ui";

/**
 * 子部门。键为父级 id，值为该层级下的子部门。
 *
 * 带 hasChildren 的行点击整行即进入下一级，只有最前面的勾选框才是选中。
 */
const CHILD_DEPARTMENTS: Record<string, PickerEntity[]> = {
  root: [
    { type: "org", id: "eng", name: "Engineering", desc: "86", hasChildren: true },
    { type: "org", id: "mkt", name: "Marketing", desc: "24", hasChildren: true },
    { type: "org", id: "fin", name: "Finance", desc: "12" },
  ],
  eng: [
    { type: "org", id: "eng-web", name: "Web Platform", desc: "31", hasChildren: true },
    { type: "org", id: "eng-api", name: "API Services", desc: "28" },
    { type: "org", id: "eng-qa", name: "Quality Assurance", desc: "15" },
  ],
  "eng-web": [
    { type: "org", id: "eng-web-ui", name: "Design System", desc: "9" },
    { type: "org", id: "eng-web-app", name: "Application Shell", desc: "11" },
  ],
  mkt: [
    { type: "org", id: "mkt-brand", name: "Brand", desc: "8" },
    { type: "org", id: "mkt-growth", name: "Growth", desc: "10" },
  ],
};

/** 各层级的直属成员 */
const MEMBERS: Record<string, PickerEntity[]> = {
  root: [{ type: "person", id: "p1", name: "Avery Stone", code: "10001", deptName: "Executive" }],
  eng: [
    { type: "person", id: "p2", name: "Blake Rivers", code: "10002", deptName: "Engineering" },
    { type: "person", id: "p3", name: "Casey Lane", code: "10003", deptName: "Engineering" },
  ],
  "eng-web": [
    { type: "person", id: "p4", name: "Devon Pike", code: "10004", deptName: "Web Platform" },
    { type: "person", id: "p5", name: "Ellis Ward", code: "10005", deptName: "Web Platform" },
    { type: "person", id: "p6", name: "Frankie Hale", code: "10006", deptName: "Web Platform" },
  ],
  "eng-web-ui": [
    { type: "person", id: "p7", name: "Georgia Mills", code: "10007", deptName: "Design System" },
  ],
  "eng-api": [
    { type: "person", id: "p8", name: "Harper Quinn", code: "10008", deptName: "API Services" },
    { type: "person", id: "p9", name: "Indigo Reese", code: "10009", deptName: "API Services" },
  ],
  mkt: [{ type: "person", id: "p10", name: "Jordan Vale", code: "10010", deptName: "Marketing" }],
  fin: [{ type: "person", id: "p11", name: "Kai Monroe", code: "10011", deptName: "Finance" }],
};

const ALL_MEMBERS = Object.values(MEMBERS).flat();

export default function Basic() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<PickerTabKey>("org");
  const [path, setPath] = useState<PickerOrgPathItem[]>([]);
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState<PickerEntity[]>([]);

  const currentId = path.length > 0 ? path[path.length - 1].id : "root";

  // 组件不持有数据：页签、层级与搜索词变化后由此处换出新的 data
  const data = useMemo<PickerPaneData>(() => {
    if (keyword.trim()) {
      const hit = ALL_MEMBERS.filter((item) =>
        item.name.toLowerCase().includes(keyword.trim().toLowerCase()),
      );
      return { sections: [{ key: "search", items: hit }] };
    }

    const children = CHILD_DEPARTMENTS[currentId] ?? [];
    if (tab === "org") return { orgNodes: children };

    return {
      selectAll: true,
      sections: [{ key: "members", title: "Members", items: MEMBERS[currentId] ?? [] }],
      orgNodes: children,
    };
  }, [currentId, keyword, tab]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open picker
      </Button>
      <span style={{ color: "var(--lg-g-fg-color-black-default)", fontSize: 12 }}>
        {result.length > 0 ? \`Confirmed: \${result.length}\` : "Nothing confirmed yet"}
      </span>

      <PersonPicker
        open={open}
        onOpenChange={setOpen}
        tabs={["org", "person"]}
        activeTab={tab}
        onTabChange={setTab}
        orgPath={path}
        onOrgPathChange={setPath}
        keyword={keyword}
        onSearch={setKeyword}
        data={data}
        onConfirm={setResult}
      />
    </div>
  );
}
`,$=[{type:`person`,id:`p1`,name:`Avery Stone`,code:`10001`,deptName:`Engineering`},{type:`person`,id:`p2`,name:`Blake Rivers`,code:`10002`,deptName:`Engineering`},{type:`person`,id:`p3`,name:`Casey Lane`,code:`10003`,deptName:`Marketing`,locked:!0},{type:`person`,id:`p4`,name:`Devon Pike`,code:`10004`,deptName:`Marketing`,disabled:!0}],Ae=[{type:`group`,id:`g1`,name:`Release Train`},{type:`group`,id:`g2`,name:`Design Review`}],je=[{type:`org`,id:`eng`,name:`Engineering`,desc:`86`},{type:`org`,id:`mkt`,name:`Marketing`,desc:`24`}];function Me(){let[e,t]=(0,E.useState)(!1),[n,r]=(0,E.useState)(`recent-contacts`),[i,a]=(0,E.useState)([$[2]]),o=(0,E.useMemo)(()=>n===`recent-contacts`?{sections:[{key:`c`,items:$}]}:n===`recent-groups`?{sections:[{key:`g`,items:Ae}]}:n===`org`?{orgNodes:je}:{selectAll:!0,sections:[{key:`owner`,title:`Owner`,items:$.slice(0,1)},{key:`member`,title:`Members`,items:$.slice(1)}],orgNodes:je},[n]);return(0,D.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,D.jsx)(u,{variant:`primary`,onClick:()=>t(!0),children:`Open with all tabs`}),(0,D.jsxs)(`span`,{style:{color:`var(--lg-g-fg-color-black-default)`,fontSize:12},children:[`Selected: `,i.length,` / 5`]}),(0,D.jsx)(Q,{open:e,onOpenChange:t,title:`Create group chat`,okText:`Create`,tabs:[`recent-contacts`,`recent-groups`,`org`,`person`],activeTab:n,onTabChange:r,data:o,value:i,onChange:a,max:5,onExceed:e=>c.warning(`At most ${e} items`)})]})}var Ne=`import { useMemo, useState } from "react";
import { Button, PersonPicker, toast } from "lingee-ui";
import type { PickerEntity, PickerPaneData, PickerTabKey } from "lingee-ui";

const CONTACTS: PickerEntity[] = [
  { type: "person", id: "p1", name: "Avery Stone", code: "10001", deptName: "Engineering" },
  { type: "person", id: "p2", name: "Blake Rivers", code: "10002", deptName: "Engineering" },
  // locked 项恒为选中且不可取消，用于「已在群内的成员」这类场景
  {
    type: "person",
    id: "p3",
    name: "Casey Lane",
    code: "10003",
    deptName: "Marketing",
    locked: true,
  },
  {
    type: "person",
    id: "p4",
    name: "Devon Pike",
    code: "10004",
    deptName: "Marketing",
    disabled: true,
  },
];

const GROUPS: PickerEntity[] = [
  { type: "group", id: "g1", name: "Release Train" },
  { type: "group", id: "g2", name: "Design Review" },
];

// 不给 hasChildren：本示例聚焦页签与选择规则，层级下钻见「基本用法」
const DEPARTMENTS: PickerEntity[] = [
  { type: "org", id: "eng", name: "Engineering", desc: "86" },
  { type: "org", id: "mkt", name: "Marketing", desc: "24" },
];

export default function AllTabs() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<PickerTabKey>("recent-contacts");
  // locked 项须由消费方一并放进已选 —— 组件只负责把它渲染成不可取消，不会自动并入
  const [selected, setSelected] = useState<PickerEntity[]>([CONTACTS[2]]);

  const data = useMemo<PickerPaneData>(() => {
    if (tab === "recent-contacts") return { sections: [{ key: "c", items: CONTACTS }] };
    if (tab === "recent-groups") return { sections: [{ key: "g", items: GROUPS }] };
    if (tab === "org") return { orgNodes: DEPARTMENTS };
    return {
      selectAll: true,
      sections: [
        { key: "owner", title: "Owner", items: CONTACTS.slice(0, 1) },
        { key: "member", title: "Members", items: CONTACTS.slice(1) },
      ],
      orgNodes: DEPARTMENTS,
    };
  }, [tab]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open with all tabs
      </Button>
      <span style={{ color: "var(--lg-g-fg-color-black-default)", fontSize: 12 }}>
        Selected: {selected.length} / 5
      </span>

      <PersonPicker
        open={open}
        onOpenChange={setOpen}
        title="Create group chat"
        okText="Create"
        tabs={["recent-contacts", "recent-groups", "org", "person"]}
        activeTab={tab}
        onTabChange={setTab}
        data={data}
        value={selected}
        onChange={setSelected}
        max={5}
        onExceed={(max) => toast.warning(\`At most \${max} items\`)}
      />
    </div>
  );
}
`,Pe={sections:[{key:`list`,items:[]}]};function Fe(){let[e,t]=(0,E.useState)(null);return(0,D.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,D.jsx)(u,{onClick:()=>t(`loading`),children:`Loading`}),(0,D.jsx)(u,{onClick:()=>t(`error`),children:`Error`}),(0,D.jsx)(u,{onClick:()=>t(`empty`),children:`Empty`}),(0,D.jsx)(Q,{open:e!==null,onOpenChange:e=>!e&&t(null),tabs:[`org`,`person`],data:Pe,loading:e===`loading`,loadError:e===`error`,onRetry:()=>t(`loading`)})]})}var Ie=`import { useState } from "react";
import { Button, PersonPicker } from "lingee-ui";
import type { PickerPaneData } from "lingee-ui";

type Status = "loading" | "error" | "empty";

const EMPTY_DATA: PickerPaneData = { sections: [{ key: "list", items: [] }] };

export default function States() {
  const [status, setStatus] = useState<Status | null>(null);

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Button onClick={() => setStatus("loading")}>Loading</Button>
      <Button onClick={() => setStatus("error")}>Error</Button>
      <Button onClick={() => setStatus("empty")}>Empty</Button>

      <PersonPicker
        open={status !== null}
        onOpenChange={(next) => !next && setStatus(null)}
        tabs={["org", "person"]}
        data={EMPTY_DATA}
        loading={status === "loading"}
        loadError={status === "error"}
        // 传入 onRetry 后失败态才出现重试入口
        onRetry={() => setStatus("loading")}
      />
    </div>
  );
}
`,Le=20,Re={root:[{type:`org`,id:`u1`,name:`Sub Unit One`,desc:`28`,hasChildren:!0},{type:`org`,id:`u2`,name:`Sub Unit Two`,desc:`24`,hasChildren:!0}],u1:[{type:`org`,id:`u1-1`,name:`Nested Team`,desc:`12`,hasChildren:!0},{type:`org`,id:`u1-2`,name:`Another Team`,desc:`9`}],"u1-1":[{type:`org`,id:`u1-1-1`,name:`Deep Squad`,desc:`4`}],u2:[{type:`org`,id:`u2-1`,name:`Support Group`,desc:`6`}]},ze={root:64,u1:28,u2:24,"u1-1":12,"u1-2":9,"u1-1-1":4,"u2-1":6};function Be(e,t){return new Promise(n=>setTimeout(()=>n(e),t))}function Ve(e,t){return Be(Re[e]??[],t)}async function He(e,t,n){let r=ze[e]??0,i=Array.from({length:Le},(e,n)=>t+n).filter(e=>e<r).map(t=>({type:`person`,id:`${e}-p${t}`,name:`Member ${t+1}`,code:`${1e4+t}`,deptName:e===`root`?`Headquarters`:`Sub Unit`})),a=t+Le;return Be({items:i,nextCursor:a<r?a:null},n)}function Ue(){let[e,t]=(0,E.useState)(!1),[n,r]=(0,E.useState)(`org`),[i,a]=(0,E.useState)([]),[o,s]=(0,E.useState)({}),[c,l]=(0,E.useState)(!1),[d,f]=(0,E.useState)(!1),p=(0,E.useRef)(0),m=(0,E.useRef)(800),h=(0,E.useCallback)(async(e,t)=>{p.current=0,l(!0);try{let n=m.current;if(t===`org`){s({orgNodes:await Ve(e,n)}),f(!1);return}let[r,i]=await Promise.all([He(e,0,n),Ve(e,n)]);s({selectAll:!0,sections:[{key:`members`,title:`Members`,items:r.items}],orgNodes:i}),p.current=r.nextCursor??0,f(r.nextCursor!==null)}finally{l(!1)}},[]),g=(0,E.useCallback)(async()=>{let e=await He(i.length>0?i[i.length-1].id:`root`,p.current,m.current);s(t=>({...t,sections:[{key:`members`,title:`Members`,items:[...t.sections?.[0]?.items??[],...e.items]}]})),p.current=e.nextCursor??p.current,f(e.nextCursor!==null)},[i]),_=()=>i.length>0?i[i.length-1].id:`root`,v=e=>{m.current=e,r(`org`),a([]),s({}),t(!0),h(`root`,`org`)};return(0,D.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,flexWrap:`wrap`},children:[(0,D.jsx)(u,{onClick:()=>v(120),children:`Open with fast API`}),(0,D.jsx)(u,{onClick:()=>v(800),children:`Open with slow API`}),(0,D.jsx)(`span`,{style:{color:`var(--lg-g-fg-color-black-default)`,fontSize:12},children:`Drill into a sub unit, switch tabs, then scroll to the bottom`}),(0,D.jsx)(Q,{open:e,onOpenChange:t,tabs:[`org`,`person`],activeTab:n,onTabChange:e=>{r(e),h(_(),e)},data:o,loading:c,hasMore:d,onLoadMore:g,orgPath:i,onOrgPathChange:e=>{a(e),h(e.length>0?e[e.length-1].id:`root`,n)}})]})}var We=`import { useCallback, useRef, useState } from "react";
import { Button, PersonPicker } from "lingee-ui";
import type { PickerEntity, PickerOrgPathItem, PickerPaneData, PickerTabKey } from "lingee-ui";

const PAGE_SIZE = 20;

/** 各层级的子部门 */
const CHILDREN: Record<string, PickerEntity[]> = {
  root: [
    { type: "org", id: "u1", name: "Sub Unit One", desc: "28", hasChildren: true },
    { type: "org", id: "u2", name: "Sub Unit Two", desc: "24", hasChildren: true },
  ],
  u1: [
    { type: "org", id: "u1-1", name: "Nested Team", desc: "12", hasChildren: true },
    { type: "org", id: "u1-2", name: "Another Team", desc: "9" },
  ],
  "u1-1": [{ type: "org", id: "u1-1-1", name: "Deep Squad", desc: "4" }],
  u2: [{ type: "org", id: "u2-1", name: "Support Group", desc: "6" }],
};

/** 各层级的直属成员数，与子部门的 desc 对齐 */
const MEMBER_TOTAL: Record<string, number> = {
  root: 64,
  u1: 28,
  u2: 24,
  "u1-1": 12,
  "u1-2": 9,
  "u1-1-1": 4,
  "u2-1": 6,
};

function delay<T>(value: T, ms: number) {
  return new Promise<T>((resolve) => setTimeout(() => resolve(value), ms));
}

/** 模拟后端：取某层的子部门 */
function fetchChildren(parentId: string, latency: number) {
  return delay(CHILDREN[parentId] ?? [], latency);
}

/** 模拟后端：按游标取某层的一页成员 */
async function fetchMembers(parentId: string, cursor: number, latency: number) {
  const total = MEMBER_TOTAL[parentId] ?? 0;
  const items = Array.from({ length: PAGE_SIZE }, (_, i) => cursor + i)
    .filter((n) => n < total)
    .map<PickerEntity>((n) => ({
      type: "person",
      id: \`\${parentId}-p\${n}\`,
      name: \`Member \${n + 1}\`,
      code: \`\${10000 + n}\`,
      deptName: parentId === "root" ? "Headquarters" : "Sub Unit",
    }));
  const next = cursor + PAGE_SIZE;
  return delay({ items, nextCursor: next < total ? next : null }, latency);
}

export default function Async() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<PickerTabKey>("org");
  const [path, setPath] = useState<PickerOrgPathItem[]>([]);
  const [data, setData] = useState<PickerPaneData>({});
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  // 游标与接口速度由消费方持有，组件只在触底时发信号
  const cursorRef = useRef(0);
  const latencyRef = useRef(800);

  /** 换批：首次打开、切页签、下钻都走这里 */
  const load = useCallback(async (parentId: string, nextTab: PickerTabKey) => {
    cursorRef.current = 0;
    setLoading(true);
    try {
      const latency = latencyRef.current;

      // 选部门：只列子部门，没有成员也就没有分页
      if (nextTab === "org") {
        setData({ orgNodes: await fetchChildren(parentId, latency) });
        setHasMore(false);
        return;
      }

      // 选人员：当前层的成员 + 可继续下钻的子部门
      const [page, children] = await Promise.all([
        fetchMembers(parentId, 0, latency),
        fetchChildren(parentId, latency),
      ]);
      setData({
        selectAll: true,
        sections: [{ key: "members", title: "Members", items: page.items }],
        orgNodes: children,
      });
      cursorRef.current = page.nextCursor ?? 0;
      setHasMore(page.nextCursor !== null);
    } finally {
      setLoading(false);
    }
  }, []);

  /** 追加下一页：不动 loading，否则已加载的内容会整片换成骨架 */
  const loadMore = useCallback(async () => {
    const parentId = path.length > 0 ? path[path.length - 1].id : "root";
    const page = await fetchMembers(parentId, cursorRef.current, latencyRef.current);
    setData((prev) => ({
      ...prev,
      sections: [
        {
          key: "members",
          title: "Members",
          items: [...(prev.sections?.[0]?.items ?? []), ...page.items],
        },
      ],
    }));
    cursorRef.current = page.nextCursor ?? cursorRef.current;
    setHasMore(page.nextCursor !== null);
  }, [path]);

  const currentId = () => (path.length > 0 ? path[path.length - 1].id : "root");

  const openWith = (latency: number) => {
    latencyRef.current = latency;
    setTab("org");
    setPath([]);
    setData({});
    setOpen(true);
    void load("root", "org");
  };

  // 切页签与下钻都是换批，层级路径在两个页签间共享
  const handleTabChange = (next: PickerTabKey) => {
    setTab(next);
    void load(currentId(), next);
  };

  const handlePathChange = (next: PickerOrgPathItem[]) => {
    setPath(next);
    void load(next.length > 0 ? next[next.length - 1].id : "root", tab);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
      {/* 120ms 落在 loadingDelay（200ms）之内，换批时看不到骨架；800ms 则会看到 */}
      <Button onClick={() => openWith(120)}>Open with fast API</Button>
      <Button onClick={() => openWith(800)}>Open with slow API</Button>
      <span style={{ color: "var(--lg-g-fg-color-black-default)", fontSize: 12 }}>
        Drill into a sub unit, switch tabs, then scroll to the bottom
      </span>

      <PersonPicker
        open={open}
        onOpenChange={setOpen}
        tabs={["org", "person"]}
        activeTab={tab}
        onTabChange={handleTabChange}
        data={data}
        loading={loading}
        hasMore={hasMore}
        onLoadMore={loadMore}
        orgPath={path}
        onOrgPathChange={handlePathChange}
      />
    </div>
  );
}
`,Ge={root:[{type:`org`,id:`o1`,name:`Unit One`,hasChildren:!0},{type:`org`,id:`o2`,name:`Unit Two`,hasChildren:!0}],o1:[{type:`org`,id:`o1-1`,name:`Team Alpha`}]},Ke={root:[{type:`person`,id:`p1`,name:`Avery Stone`,code:`10001`,deptName:`Headquarters`},{type:`person`,id:`p2`,name:`Blake Rivers`,code:`10002`,deptName:`Headquarters`}],o1:[{type:`person`,id:`p3`,name:`Casey Lane`,code:`10003`,deptName:`Unit One`},{type:`person`,id:`p4`,name:`Devon Pike`,code:`10004`,deptName:`Unit One`},{type:`person`,id:`p5`,name:`Ellis Ward`,code:`10005`,deptName:`Unit One`}],"o1-1":[{type:`person`,id:`p6`,name:`Frankie Hale`,code:`10006`,deptName:`Team Alpha`}],o2:[{type:`person`,id:`p7`,name:`Georgia Mills`,code:`10007`,deptName:`Unit Two`},{type:`person`,id:`p8`,name:`Harper Quinn`,code:`10008`,deptName:`Unit Two`},{type:`person`,id:`p9`,name:`Indigo Vale`,code:`10009`,deptName:`Unit Two`}]},qe=Object.values(Ke).flat(),Je=[{value:`view`,label:`Can view`},{value:`edit`,label:`Can edit`}];function Ye(){let[e,t]=(0,E.useState)(`person`),[n,r]=(0,E.useState)([]),[i,a]=(0,E.useState)(``),[o,s]=(0,E.useState)([]),[c,l]=(0,E.useState)(`view`),d=n.length>0?n[n.length-1].id:`root`,f=(0,E.useMemo)(()=>{if(i.trim())return{sections:[{key:`search`,items:qe.filter(e=>e.name.toLowerCase().includes(i.trim().toLowerCase()))}]};let t=Ge[d]??[];return e===`org`?{orgNodes:t}:{selectAll:t.length===0,sections:[{key:`members`,title:`Members`,items:Ke[d]??[]}],orgNodes:t}},[d,i,e]);return(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,height:520,padding:20,borderRadius:16,background:`var(--lg-g-bg-color-white-heavy)`,border:`1px solid var(--lg-g-border-color-black-soft)`},children:[(0,D.jsx)(`div`,{style:{fontSize:16,fontWeight:500,color:`var(--lg-g-fg-color-black-intense)`},children:`Item 1`}),(0,D.jsx)(Ce,{paneHeight:`fill`,tabs:[`org`,`person`],activeTab:e,onTabChange:t,orgPath:n,onOrgPathChange:r,keyword:i,onSearch:a,data:f,value:o,onChange:s}),(0,D.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,D.jsx)(`span`,{style:{fontSize:12,color:`var(--lg-g-fg-color-black-default)`},children:`Permission`}),(0,D.jsx)(b,{value:c,onChange:e=>l(String(e)),options:Je,style:{width:160}}),(0,D.jsxs)(`div`,{style:{marginLeft:`auto`,display:`flex`,gap:8},children:[(0,D.jsx)(u,{variant:`text`,onClick:()=>s([]),children:`Reset`}),(0,D.jsxs)(u,{variant:`primary`,disabled:o.length===0,children:[`Confirm (`,o.length,`)`]})]})]})]})}var Xe=`import { useMemo, useState } from "react";
import { Button, PersonPickerPanel, Select } from "lingee-ui";
import type { PickerEntity, PickerOrgPathItem, PickerPaneData, PickerTabKey } from "lingee-ui";

/**
 * 嵌入形态：内容体作为别人面板里的一个区域，上下还有自己的表单。
 *
 * 关键是 \`paneHeight="fill"\` —— 面板高度交给外层布局决定，不写死像素值。
 * 外层容器必须有确定高度（这里是固定 520），否则 fill 会塌成 0。
 */

const CHILD_ORGS: Record<string, PickerEntity[]> = {
  root: [
    { type: "org", id: "o1", name: "Unit One", hasChildren: true },
    // 无子组织却给 hasChildren —— 人员页签下「下一级」指的是成员，不只是子组织。
    // 不给的话这个部门的成员就只能整批勾选、看不到具体是谁
    { type: "org", id: "o2", name: "Unit Two", hasChildren: true },
  ],
  o1: [{ type: "org", id: "o1-1", name: "Team Alpha" }],
};

const MEMBERS: Record<string, PickerEntity[]> = {
  root: [
    { type: "person", id: "p1", name: "Avery Stone", code: "10001", deptName: "Headquarters" },
    { type: "person", id: "p2", name: "Blake Rivers", code: "10002", deptName: "Headquarters" },
  ],
  o1: [
    { type: "person", id: "p3", name: "Casey Lane", code: "10003", deptName: "Unit One" },
    { type: "person", id: "p4", name: "Devon Pike", code: "10004", deptName: "Unit One" },
    { type: "person", id: "p5", name: "Ellis Ward", code: "10005", deptName: "Unit One" },
  ],
  "o1-1": [
    { type: "person", id: "p6", name: "Frankie Hale", code: "10006", deptName: "Team Alpha" },
  ],
  // 末级部门，刻意多给几人 —— 它没有子组织，是本 demo 里唯一会出现全选行的层级
  o2: [
    { type: "person", id: "p7", name: "Georgia Mills", code: "10007", deptName: "Unit Two" },
    { type: "person", id: "p8", name: "Harper Quinn", code: "10008", deptName: "Unit Two" },
    { type: "person", id: "p9", name: "Indigo Vale", code: "10009", deptName: "Unit Two" },
  ],
};

const ALL_MEMBERS = Object.values(MEMBERS).flat();

const PERMISSION_OPTIONS = [
  { value: "view", label: "Can view" },
  { value: "edit", label: "Can edit" },
];

export default function Embedded() {
  const [tab, setTab] = useState<PickerTabKey>("person");
  const [path, setPath] = useState<PickerOrgPathItem[]>([]);
  const [keyword, setKeyword] = useState("");
  const [selected, setSelected] = useState<PickerEntity[]>([]);
  const [permission, setPermission] = useState("view");

  const currentId = path.length > 0 ? path[path.length - 1].id : "root";

  const data = useMemo<PickerPaneData>(() => {
    if (keyword.trim()) {
      const hit = ALL_MEMBERS.filter((item) =>
        item.name.toLowerCase().includes(keyword.trim().toLowerCase()),
      );
      return { sections: [{ key: "search", items: hit }] };
    }
    const children = CHILD_ORGS[currentId] ?? [];
    if (tab === "org") return { orgNodes: children };
    return {
      // 同层还有子组织时不给全选：全选只覆盖 sections，统领两类行却只作用于人员，
      // 用户无从判断它管了哪些行。叶子层级列表全是人，不存在这个歧义
      selectAll: children.length === 0,
      sections: [{ key: "members", title: "Members", items: MEMBERS[currentId] ?? [] }],
      orgNodes: children,
    };
  }, [currentId, keyword, tab]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        // 外层的确定高度 —— fill 依赖它
        height: 520,
        padding: 20,
        borderRadius: 16,
        background: "var(--lg-g-bg-color-white-heavy)",
        border: "1px solid var(--lg-g-border-color-black-soft)",
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 500, color: "var(--lg-g-fg-color-black-intense)" }}>
        Item 1
      </div>

      {/* 选人区占据剩余空间 */}
      <PersonPickerPanel
        paneHeight="fill"
        tabs={["org", "person"]}
        activeTab={tab}
        onTabChange={setTab}
        orgPath={path}
        onOrgPathChange={setPath}
        keyword={keyword}
        onSearch={setKeyword}
        data={data}
        value={selected}
        onChange={setSelected}
      />

      {/* 消费方自己的表单与操作区，不属于选人组件 */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 12, color: "var(--lg-g-fg-color-black-default)" }}>
          Permission
        </span>
        <Select
          value={permission}
          onChange={(next) => setPermission(String(next))}
          options={PERMISSION_OPTIONS}
          style={{ width: 160 }}
        />
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <Button variant="text" onClick={() => setSelected([])}>
            Reset
          </Button>
          <Button variant="primary" disabled={selected.length === 0}>
            Confirm ({selected.length})
          </Button>
        </div>
      </div>
    </div>
  );
}
`;export{Ie as a,Me as c,Ue as i,ke as l,Ye as n,Fe as o,We as r,Ne as s,Xe as t,Oe as u};