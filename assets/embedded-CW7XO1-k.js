import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{T as r}from"./tooltip-provider-DeqArBrK.js";import{n as i}from"./SlashLg-CP1If2Bd.js";import{n as a,o}from"./provider-pMb8bCS5.js";import{t as s}from"./ChevronRight-DKCn-Rv7.js";import{n as c,t as l}from"./WindowX-DKhyyZNS.js";import{t as u}from"./Search-f0zW-cZ0.js";import{t as d}from"./XLg-o7qdnb-T.js";import{n as f}from"./tooltip-D5ypfcq7.js";import{t as p}from"./button-BA4Y5u4W.js";import{t as m}from"./empty-BAkwVxAt.js";import{t as h}from"./breadcrumb-DpQUvtng.js";import{t as g}from"./tabs-BEzxGXgC.js";import{t as _}from"./input-CaALYaEZ.js";import{t as v}from"./dialog-L6Y2LoL-.js";import{t as y}from"./select-BK6izny4.js";import{t as b}from"./checkbox-BTwuvwox.js";import{t as x}from"./spin-BAkv6maf.js";import{t as S}from"./infinite-scroll-Cras3wyz.js";import{t as C}from"./skeleton-qqTL4qnH.js";import{n as w}from"./avatar-COw5d5BX.js";var T=e(t()),E=n(),D=({entity:e,size:t})=>e.type===`org`?(0,E.jsx)(`span`,{className:`lg-person-picker__org-icon`,style:{width:t,height:t},"aria-hidden":!0,children:(0,E.jsx)(c,{size:Math.round(14/24*t)})}):(0,E.jsx)(w,{className:`lg-person-picker__avatar`,src:e.avatar,size:t});D.displayName=`PersonPickerEntityAvatar`;function O(e,t){let n=e.toLowerCase(),r=t.toLowerCase(),i=[],a=0;for(;a<e.length;){let t=n.indexOf(r,a);if(t===-1){i.push({text:e.slice(a),matched:!1});break}t>a&&i.push({text:e.slice(a,t),matched:!1}),i.push({text:e.slice(t,t+r.length),matched:!0}),a=t+r.length}return i}var k=({text:e,keyword:t,className:n})=>{let r=(0,T.useMemo)(()=>{let n=t?.trim();return n?O(e,n):null},[e,t]);return r?(0,E.jsx)(`span`,{className:n,children:r.map((e,t)=>e.matched?(0,E.jsx)(`mark`,{className:`lg-person-picker__highlight`,children:e.text},t):(0,E.jsx)(T.Fragment,{children:e.text},t))}):(0,E.jsx)(`span`,{className:n,children:e})};k.displayName=`PersonPickerHighlightText`;function A(e){return[e.name,e.code,e.deptName,e.desc].filter(Boolean).join(` · `)}function j({entity:e,keyword:t}){return(0,E.jsxs)(`span`,{className:`lg-person-picker__row-main`,title:A(e),children:[(0,E.jsx)(`span`,{className:`lg-person-picker__row-name`,children:(0,E.jsx)(k,{text:e.name,keyword:t})}),e.code&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`span`,{className:`lg-person-picker__row-divider`,"aria-hidden":!0}),(0,E.jsx)(`span`,{className:`lg-person-picker__row-meta`,children:(0,E.jsx)(k,{text:e.code,keyword:t})})]}),e.deptName&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`span`,{className:`lg-person-picker__row-divider`,"aria-hidden":!0}),(0,E.jsx)(`span`,{className:`lg-person-picker__row-meta`,children:e.deptName})]}),e.desc&&(0,E.jsx)(`span`,{className:`lg-person-picker__row-meta`,children:e.desc})]})}var M=({entity:e,variant:t,checked:n=!1,indeterminate:i=!1,loading:a=!1,keyword:o,onToggle:c,onDrillDown:l,onRemove:u,removeLabel:f,drillDownLabel:p})=>{let m=t===`pick`,h=e.type!==`org`||!m,g=!!(e.hasChildren&&l),_=m?32:24,v=m&&g,y=v||a,S=(0,E.jsx)(j,{entity:e,keyword:o}),C=(0,E.jsx)(b,{className:`lg-person-picker__row-check`,checked:n||!!e.locked,indeterminate:!n&&!e.locked&&i,disabled:e.disabled||e.locked,onChange:t=>c?.(e,t),"aria-label":y?e.name:void 0,children:y?void 0:(0,E.jsxs)(E.Fragment,{children:[h&&(0,E.jsx)(D,{entity:e,size:_}),S]})}),w=a?(0,E.jsx)(x,{className:`lg-person-picker__row-spin`,size:`sm`,"aria-label":e.name}):C;return(0,E.jsxs)(`div`,{className:r(`lg-person-picker__row`,`lg-person-picker__row--${t}`,`lg-person-picker__row--${e.type}`,m&&n&&`lg-person-picker__row--checked`,e.disabled&&`lg-person-picker__row--disabled`,e.locked&&`lg-person-picker__row--locked`,v&&`lg-person-picker__row--drillable`,m&&a&&`lg-person-picker__row--loading`),onClick:v?()=>l?.(e):void 0,children:[m?y?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`span`,{className:`lg-person-picker__row-check-slot`,onClick:e=>e.stopPropagation(),children:w}),h&&(0,E.jsx)(D,{entity:e,size:_}),S]}):C:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(D,{entity:e,size:_}),S]}),g&&(0,E.jsx)(`button`,{type:`button`,className:`lg-person-picker__row-action`,"aria-label":p,onClick:()=>l?.(e),children:(0,E.jsx)(s,{size:16})}),!m&&!e.locked&&u&&(0,E.jsx)(`button`,{type:`button`,className:`lg-person-picker__row-action lg-person-picker__row-action--remove`,"aria-label":f,onClick:()=>u(e),children:(0,E.jsx)(d,{size:14})})]})};M.displayName=`PersonPickerEntityRow`;var N=({rows:e=7})=>(0,E.jsx)(`div`,{className:`lg-person-picker__skeleton`,"aria-hidden":!0,children:Array.from({length:e},(e,t)=>(0,E.jsxs)(`div`,{className:`lg-person-picker__skeleton-row`,children:[(0,E.jsx)(C,{variant:`circle`,width:32,height:32}),(0,E.jsx)(C,{className:`lg-person-picker__skeleton-bar`,variant:`rect`,height:16,borderRadius:8})]},t))});N.displayName=`PersonPickerListSkeleton`;function P(e){return`${e.type}:${e.id}`}var F=[`person`,`group`,`org`];function ee(e){let{value:t,defaultValue:n,mode:r,max:i,onChange:a,onExceed:o}=e,[s,c]=(0,T.useState)(()=>n??[]),l=t!==void 0,u=l?t:s,d=(0,T.useMemo)(()=>new Set(u.map(P)),[u]),f=(0,T.useMemo)(()=>{let e=new Map;for(let t of u){let n=e.get(t.type);n?n.push(t):e.set(t.type,[t])}return F.filter(t=>e.has(t)).map(t=>({type:t,items:e.get(t)}))},[u]),p=(0,T.useMemo)(()=>{let e={person:0,group:0,org:0};for(let t of u)e[t.type]+=1;return e},[u]),m=(0,T.useCallback)((e,t)=>{l||c(e),a?.(e,t)},[l,a]),h=(0,T.useCallback)((e,t)=>{if(e.locked&&!t||e.disabled)return;let n=P(e);if(!t){m(u.filter(e=>P(e)!==n),{entity:e,selected:!1});return}if(!d.has(n)){if(r===`single`){m([e],{entity:e,selected:!0});return}if(i!==void 0&&u.length>=i){o?.(i);return}m([...u,e],{entity:e,selected:!0})}},[m,i,r,o,u,d]);return{selected:u,selectedKeys:d,groups:f,count:p,toggle:h,toggleMany:(0,T.useCallback)((e,t)=>{let n=e.filter(e=>!e.disabled);if(n.length===0)return;if(!t){let e=new Set(n.filter(e=>!e.locked).map(P));if(e.size===0)return;m(u.filter(t=>!e.has(P(t))),{selected:!1});return}let a=n.filter(e=>!d.has(P(e)));if(a.length!==0){if(r===`single`){m([a[0]],{entity:a[0],selected:!0});return}if(i!==void 0&&u.length+a.length>i){o?.(i);return}m([...u,...a],{selected:!0})}},[m,i,r,o,u,d]),remove:(0,T.useCallback)(e=>h(e,!1),[h])}}function te(e,t){let n=(0,T.useRef)(e);n.current=e;let r=(0,T.useRef)(null);return(0,T.useEffect)(()=>()=>{r.current!==null&&clearTimeout(r.current)},[]),(0,T.useCallback)(e=>{r.current!==null&&clearTimeout(r.current),r.current=setTimeout(()=>n.current(e),t)},[t])}function ne(e,t){let[n,r]=(0,T.useState)(!1);return(0,T.useEffect)(()=>{if(!e){r(!1);return}if(t<=0){r(!0);return}let n=setTimeout(()=>r(!0),t);return()=>clearTimeout(n)},[e,t]),n}var I=({tabs:e,activeTab:t,onTabChange:n,tabLabels:r,data:o,loading:s,loadingDelay:c,loadError:d,onRetry:v,hasMore:y,onLoadMore:x,keyword:C,onSearch:w,searchDebounce:D,searchPlaceholder:O,orgPath:k,onOrgPathChange:A,selectedKeys:j,onToggle:F,onToggleMany:ee,orgExpansion:I})=>{let L=a(`PersonPicker`),R=(0,T.useRef)(null),[z,B]=(0,T.useState)(C??``);(0,T.useEffect)(()=>{C!==void 0&&B(C)},[C]);let V=te(e=>w?.(e),D),H=e=>{let t=e.target.value;B(t),V(t)},U=z.trim().length>0,W=o.sections??[],G=o.orgNodes??[],K=(0,T.useMemo)(()=>(W.length>0?W.flatMap(e=>e.items):G).filter(e=>!e.disabled),[G,W]),q=K.length>0&&K.every(e=>j.has(P(e))),J=!q&&K.some(e=>j.has(P(e))),ae=(0,T.useMemo)(()=>[{key:`__root__`,icon:(0,E.jsx)(i,{size:16}),onClick:()=>A?.([])},...k.map((e,t)=>({key:`${t}-${e.id}`,label:e.name,onClick:()=>A?.(k.slice(0,t+1))}))],[A,k]),Y=(0,T.useCallback)(e=>{A?.([...k,{id:e.id,name:e.name}])},[A,k]),oe=t===`person`&&I!==void 0,X=e=>{let t=U?z:void 0;if(oe&&I&&e.type===`org`){let n=I.getState(e);return(0,E.jsx)(M,{entity:e,variant:`pick`,checked:n.checked,indeterminate:n.indeterminate,loading:I.isExpanding(e),keyword:t,onToggle:I.toggle,onDrillDown:Y,drillDownLabel:L.drillDown},P(e))}return(0,E.jsx)(M,{entity:e,variant:`pick`,checked:j.has(P(e)),keyword:t,onToggle:F,onDrillDown:Y,drillDownLabel:L.drillDown},P(e))},Z=W.every(e=>e.items.length===0)&&G.length===0,se=ne(!!s,c),Q=!!s&&(Z||se),ce=Q||!!d||Z,le=k.map(e=>e.id).join(`/`);return(0,T.useEffect)(()=>{let e=R.current;e&&(e.scrollTop=0)},[t,le,z]),(0,E.jsxs)(`div`,{className:`lg-person-picker__left`,children:[(0,E.jsxs)(`div`,{className:`lg-person-picker__left-header`,children:[(0,E.jsx)(_,{className:`lg-person-picker__search`,value:z,onChange:H,placeholder:O??L.searchPlaceholder,suffix:(0,E.jsx)(u,{size:16}),allowClear:!0,"aria-label":O??L.searchPlaceholder}),!U&&e.length>1&&(0,E.jsx)(g,{className:`lg-person-picker__tabs`,variant:`underline`,size:`sm`,transparent:!0,activeKey:t,onChange:e=>n(e),items:e.map(e=>({key:e,label:r?.[e]??L[ie[e]]}))})]}),!U&&re.has(t)&&k.length>0&&(0,E.jsx)(`div`,{className:`lg-person-picker__breadcrumb`,children:(0,E.jsx)(h,{size:`md`,items:ae,maxItems:3})}),(0,E.jsx)(`div`,{className:`lg-person-picker__list`,children:ce?Q?(0,E.jsx)(N,{}):d?(0,E.jsx)(m,{className:`lg-person-picker__status`,size:`lg`,icon:l,description:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`span`,{className:`lg-person-picker__status-title`,children:L.loadFailed}),(0,E.jsx)(`span`,{className:`lg-person-picker__status-detail`,children:L.loadFailedDetail})]}),children:v&&(0,E.jsx)(p,{variant:`primary`,ghost:!0,size:`md`,onClick:v,children:L.retry})}):Z?(0,E.jsx)(m,{className:`lg-person-picker__status`,size:`md`,icon:U?u:void 0,description:(0,E.jsx)(`span`,{className:`lg-person-picker__status-title`,children:U?L.searchEmpty:L.empty})}):null:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{fill:!0,viewportRef:R,children:(0,E.jsx)(`div`,{className:`lg-person-picker__list-inner`,children:(0,E.jsxs)(E.Fragment,{children:[o.selectAll&&K.length>1&&(0,E.jsx)(`div`,{className:`lg-person-picker__select-all`,children:(0,E.jsx)(b,{checked:q,indeterminate:J,onChange:e=>ee(K,e),children:(0,E.jsx)(`span`,{className:`lg-person-picker__select-all-label`,children:L.selectAll})})}),W.map(e=>(0,E.jsxs)(`div`,{className:`lg-person-picker__section`,children:[e.title&&(0,E.jsx)(`div`,{className:`lg-person-picker__section-title`,children:e.title}),(0,E.jsx)(`div`,{className:`lg-person-picker__rows`,children:e.items.map(X)})]},e.key)),G.length>0&&(0,E.jsx)(`div`,{className:`lg-person-picker__rows`,children:G.map(X)}),x&&(0,E.jsx)(S,{loadMore:x,hasMore:!!y,scrollTarget:()=>R.current,noMore:null})]})})}),(0,E.jsx)(`div`,{className:`lg-person-picker__fade`,"aria-hidden":!0})]})})]})},re=new Set([`org`,`person`]),ie={"recent-contacts":`tabRecentContacts`,"recent-groups":`tabRecentGroups`,org:`tabOrganization`,person:`tabPerson`};I.displayName=`PersonPickerLeftPane`;var L={person:`groupPerson`,group:`groupGroup`,org:`groupOrg`},R=({groups:e,count:t,onRemove:n})=>{let r=a(`PersonPicker`),i=(0,T.useRef)(null),o=(0,T.useRef)(new Map),s=(0,T.useCallback)(e=>t=>{t?o.current.set(e,t):o.current.delete(e)},[]),c=(0,T.useCallback)(e=>{let t=i.current,n=o.current.get(e);!t||!n||(t.scrollTop=n.offsetTop)},[]),l=t.person+t.group+t.org;return(0,E.jsxs)(`div`,{className:`lg-person-picker__right`,children:[(0,E.jsxs)(`div`,{className:`lg-person-picker__right-header`,children:[(0,E.jsx)(`span`,{className:`lg-person-picker__right-title`,children:r.selectedTitle}),l===0?(0,E.jsx)(`span`,{className:`lg-person-picker__count-empty`,children:`0`}):(0,E.jsx)(`span`,{className:`lg-person-picker__counts`,children:F.filter(e=>t[e]>0).map(e=>(0,E.jsxs)(`button`,{type:`button`,className:`lg-person-picker__count`,onClick:()=>c(e),"aria-label":`${r.jumpTo}${r[L[e]]}`,children:[r[L[e]],` `,t[e]]},e))})]}),(0,E.jsxs)(`div`,{className:`lg-person-picker__list`,children:[(0,E.jsx)(f,{fill:!0,viewportRef:i,children:(0,E.jsx)(`div`,{className:`lg-person-picker__list-inner`,children:e.map(e=>(0,E.jsxs)(`div`,{className:`lg-person-picker__section`,ref:s(e.type),children:[(0,E.jsxs)(`div`,{className:`lg-person-picker__section-title`,children:[r[L[e.type]],` `,e.items.length]}),(0,E.jsx)(`div`,{className:`lg-person-picker__rows`,children:e.items.map(e=>(0,E.jsx)(M,{entity:e,variant:`selected`,onRemove:n,removeLabel:r.remove},P(e)))})]},e.type))})}),(0,E.jsx)(`div`,{className:`lg-person-picker__fade`,"aria-hidden":!0})]})]})};R.displayName=`PersonPickerRightPane`;function z({onExpandOrg:e,onExpandOrgError:t,selectedKeys:n,onToggleMany:r}){let i=(0,T.useRef)(new Map),a=(0,T.useRef)(new Set),[o,s]=(0,T.useState)(()=>new Set),c=(0,T.useRef)(e);c.current=e;let l=(0,T.useRef)(t);l.current=t;let u=(0,T.useRef)(r);u.current=r;let d=(0,T.useRef)(!0);return(0,T.useEffect)(()=>()=>{d.current=!1},[]),{getState:(0,T.useCallback)(e=>{let t=i.current.get(P(e));if(!t||t.length===0)return{checked:!1,indeterminate:!1};let r=0;for(let e of t)n.has(P(e))&&(r+=1);return{checked:r===t.length,indeterminate:r>0&&r<t.length}},[n]),isExpanding:(0,T.useCallback)(e=>o.has(P(e)),[o]),toggle:(0,T.useCallback)((e,t)=>{let n=c.current;if(!n)return;let r=P(e),o=i.current.get(r);if(o){u.current(o,t);return}!t||a.current.has(r)||(a.current.add(r),s(new Set(a.current)),n(e).then(e=>{i.current.set(r,e),d.current&&u.current(e,!0)}).catch(t=>l.current?.(e,t)).finally(()=>{a.current.delete(r),d.current&&s(new Set(a.current))}))},[])}}var B=[`org`,`person`],V={},H=(0,T.forwardRef)(({tabs:e=B,activeTab:t,defaultActiveTab:n,onTabChange:i,tabLabels:a,data:o=V,loading:s,loadingDelay:c=200,loadError:l,onRetry:u,hasMore:d,onLoadMore:f,value:p,defaultValue:m,onChange:h,keyword:g,onSearch:_,searchDebounce:v=300,searchPlaceholder:y,orgPath:b,onOrgPathChange:x,onExpandOrg:S,onExpandOrgError:C,mode:w=`multiple`,max:D,onExceed:O,paneHeight:k,className:A,style:j},M)=>{let[N,P]=(0,T.useState)(()=>n??e[0]),F=t??N,te=(0,T.useCallback)(e=>{t===void 0&&P(e),i?.(e)},[t,i]),[ne,re]=(0,T.useState)([]),ie=b??ne,L=(0,T.useCallback)(e=>{b===void 0&&re(e),x?.(e)},[x,b]),H=ee({value:p,defaultValue:m,mode:w,max:D,onChange:h,onExceed:O}),U=z({onExpandOrg:S,onExpandOrgError:C,selectedKeys:H.selectedKeys,onToggleMany:H.toggleMany}),W=typeof k==`number`?{...j,"--_pp-panes-height":`${k}px`}:j;return(0,E.jsx)(`div`,{ref:M,className:r(`lg-person-picker`,k===`fill`&&`lg-person-picker--fill`,A),style:W,children:(0,E.jsxs)(`div`,{className:`lg-person-picker__panes`,children:[(0,E.jsx)(I,{tabs:e,activeTab:F,onTabChange:te,tabLabels:a,data:o,loading:s,loadingDelay:c,loadError:l,onRetry:u,hasMore:d,onLoadMore:f,keyword:g,onSearch:_,searchDebounce:v,searchPlaceholder:y,orgPath:ie,onOrgPathChange:L,selectedKeys:H.selectedKeys,onToggle:H.toggle,onToggleMany:H.toggleMany,orgExpansion:S?U:void 0}),(0,E.jsx)(R,{groups:H.groups,count:H.count,onRemove:H.remove})]})})});H.displayName=`PersonPickerPanel`;var U=720,W=({open:e,onOpenChange:t,title:n,okText:r,cancelText:i,okLoading:o,okDisabledWhenEmpty:s=!0,onConfirm:c,onCancel:l,width:u=U,zIndex:d,hostModal:f,value:m,defaultValue:h,onChange:g,..._})=>{let y=a(`PersonPicker`),[b,x]=(0,T.useState)(!1),[S,C]=(0,T.useState)(()=>h??[]),w=m!==void 0,D=w?m:S,O=(0,T.useCallback)((e,t)=>{w||C(e),g?.(e,t)},[w,g]),k=(0,T.useCallback)(()=>{l?.(),t(!1)},[l,t]),A=(0,T.useCallback)(async()=>{let e=c?.(D);if(!(e instanceof Promise)){t(!1);return}x(!0);try{await e,t(!1)}finally{x(!1)}},[c,t,D]);return(0,E.jsx)(v,{className:`lg-person-picker-dialog`,open:e,onOpenChange:e=>e?t(!0):k(),title:n??y.title,width:u,zIndex:d,hostModal:f,footer:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{variant:`text`,size:`lg`,onClick:k,children:i??y.cancel}),(0,E.jsx)(p,{variant:`primary`,size:`lg`,loading:o||b,disabled:s&&D.length===0,onClick:A,children:r??y.ok})]}),children:(0,E.jsx)(H,{..._,value:D,onChange:O})})};W.displayName=`PersonPicker`;var G={root:[{type:`org`,id:`eng`,name:`Engineering`,desc:`86`,hasChildren:!0},{type:`org`,id:`mkt`,name:`Marketing`,desc:`24`,hasChildren:!0},{type:`org`,id:`fin`,name:`Finance`,desc:`12`}],eng:[{type:`org`,id:`eng-web`,name:`Web Platform`,desc:`31`,hasChildren:!0},{type:`org`,id:`eng-api`,name:`API Services`,desc:`28`},{type:`org`,id:`eng-qa`,name:`Quality Assurance`,desc:`15`}],"eng-web":[{type:`org`,id:`eng-web-ui`,name:`Design System`,desc:`9`},{type:`org`,id:`eng-web-app`,name:`Application Shell`,desc:`11`}],mkt:[{type:`org`,id:`mkt-brand`,name:`Brand`,desc:`8`},{type:`org`,id:`mkt-growth`,name:`Growth`,desc:`10`}]},K={root:[{type:`person`,id:`p1`,name:`Avery Stone`,code:`10001`,deptName:`Executive`}],eng:[{type:`person`,id:`p2`,name:`Blake Rivers`,code:`10002`,deptName:`Engineering`},{type:`person`,id:`p3`,name:`Casey Lane`,code:`10003`,deptName:`Engineering`}],"eng-web":[{type:`person`,id:`p4`,name:`Devon Pike`,code:`10004`,deptName:`Web Platform`},{type:`person`,id:`p5`,name:`Ellis Ward`,code:`10005`,deptName:`Web Platform`},{type:`person`,id:`p6`,name:`Frankie Hale`,code:`10006`,deptName:`Web Platform`}],"eng-web-ui":[{type:`person`,id:`p7`,name:`Georgia Mills`,code:`10007`,deptName:`Design System`}],"eng-api":[{type:`person`,id:`p8`,name:`Harper Quinn`,code:`10008`,deptName:`API Services`},{type:`person`,id:`p9`,name:`Indigo Reese`,code:`10009`,deptName:`API Services`}],mkt:[{type:`person`,id:`p10`,name:`Jordan Vale`,code:`10010`,deptName:`Marketing`}],fin:[{type:`person`,id:`p11`,name:`Kai Monroe`,code:`10011`,deptName:`Finance`}]},q=Object.values(K).flat();function J(){let[e,t]=(0,T.useState)(!1),[n,r]=(0,T.useState)(`org`),[i,a]=(0,T.useState)([]),[o,s]=(0,T.useState)(``),[c,l]=(0,T.useState)([]),u=i.length>0?i[i.length-1].id:`root`,d=(0,T.useMemo)(()=>{if(o.trim())return{sections:[{key:`search`,items:q.filter(e=>e.name.toLowerCase().includes(o.trim().toLowerCase()))}]};let e=G[u]??[];return n===`org`?{orgNodes:e}:{selectAll:!0,sections:[{key:`members`,title:`Members`,items:K[u]??[]}],orgNodes:e}},[u,o,n]);return(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,E.jsx)(p,{variant:`primary`,onClick:()=>t(!0),children:`Open picker`}),(0,E.jsx)(`span`,{style:{color:`var(--lg-g-fg-color-black-default)`,fontSize:12},children:c.length>0?`Confirmed: ${c.length}`:`Nothing confirmed yet`}),(0,E.jsx)(W,{open:e,onOpenChange:t,tabs:[`org`,`person`],activeTab:n,onTabChange:r,orgPath:i,onOrgPathChange:a,keyword:o,onSearch:s,data:d,onConfirm:l})]})}var ae=`import { useMemo, useState } from "react";
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
`,Y=[{type:`person`,id:`p1`,name:`Avery Stone`,code:`10001`,deptName:`Engineering`},{type:`person`,id:`p2`,name:`Blake Rivers`,code:`10002`,deptName:`Engineering`},{type:`person`,id:`p3`,name:`Casey Lane`,code:`10003`,deptName:`Marketing`,locked:!0},{type:`person`,id:`p4`,name:`Devon Pike`,code:`10004`,deptName:`Marketing`,disabled:!0}],oe=[{type:`group`,id:`g1`,name:`Release Train`},{type:`group`,id:`g2`,name:`Design Review`}],X=[{type:`org`,id:`eng`,name:`Engineering`,desc:`86`},{type:`org`,id:`mkt`,name:`Marketing`,desc:`24`}];function Z(){let[e,t]=(0,T.useState)(!1),[n,r]=(0,T.useState)(`recent-contacts`),[i,a]=(0,T.useState)([Y[2]]),s=(0,T.useMemo)(()=>n===`recent-contacts`?{sections:[{key:`c`,items:Y}]}:n===`recent-groups`?{sections:[{key:`g`,items:oe}]}:n===`org`?{orgNodes:X}:{selectAll:!0,sections:[{key:`owner`,title:`Owner`,items:Y.slice(0,1)},{key:`member`,title:`Members`,items:Y.slice(1)}],orgNodes:X},[n]);return(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,E.jsx)(p,{variant:`primary`,onClick:()=>t(!0),children:`Open with all tabs`}),(0,E.jsxs)(`span`,{style:{color:`var(--lg-g-fg-color-black-default)`,fontSize:12},children:[`Selected: `,i.length,` / 5`]}),(0,E.jsx)(W,{open:e,onOpenChange:t,title:`Create group chat`,okText:`Create`,tabs:[`recent-contacts`,`recent-groups`,`org`,`person`],activeTab:n,onTabChange:r,data:s,value:i,onChange:a,max:5,onExceed:e=>o.warning(`At most ${e} items`)})]})}var se=`import { useMemo, useState } from "react";
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
`,Q={sections:[{key:`list`,items:[]}]};function ce(){let[e,t]=(0,T.useState)(null);return(0,E.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,E.jsx)(p,{onClick:()=>t(`loading`),children:`Loading`}),(0,E.jsx)(p,{onClick:()=>t(`error`),children:`Error`}),(0,E.jsx)(p,{onClick:()=>t(`empty`),children:`Empty`}),(0,E.jsx)(W,{open:e!==null,onOpenChange:e=>!e&&t(null),tabs:[`org`,`person`],data:Q,loading:e===`loading`,loadError:e===`error`,onRetry:()=>t(`loading`)})]})}var le=`import { useState } from "react";
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
`,$=20,ue={root:[{type:`org`,id:`u1`,name:`Sub Unit One`,desc:`28`,hasChildren:!0},{type:`org`,id:`u2`,name:`Sub Unit Two`,desc:`24`,hasChildren:!0}],u1:[{type:`org`,id:`u1-1`,name:`Nested Team`,desc:`12`,hasChildren:!0},{type:`org`,id:`u1-2`,name:`Another Team`,desc:`9`}],"u1-1":[{type:`org`,id:`u1-1-1`,name:`Deep Squad`,desc:`4`}],u2:[{type:`org`,id:`u2-1`,name:`Support Group`,desc:`6`}]},de={root:64,u1:28,u2:24,"u1-1":12,"u1-2":9,"u1-1-1":4,"u2-1":6};function fe(e,t){return new Promise(n=>setTimeout(()=>n(e),t))}function pe(e,t){return fe(ue[e]??[],t)}async function me(e,t,n){let r=de[e]??0,i=Array.from({length:$},(e,n)=>t+n).filter(e=>e<r).map(t=>({type:`person`,id:`${e}-p${t}`,name:`Member ${t+1}`,code:`${1e4+t}`,deptName:e===`root`?`Headquarters`:`Sub Unit`})),a=t+$;return fe({items:i,nextCursor:a<r?a:null},n)}function he(){let[e,t]=(0,T.useState)(!1),[n,r]=(0,T.useState)(`org`),[i,a]=(0,T.useState)([]),[o,s]=(0,T.useState)({}),[c,l]=(0,T.useState)(!1),[u,d]=(0,T.useState)(!1),f=(0,T.useRef)(0),m=(0,T.useRef)(800),h=(0,T.useCallback)(async(e,t)=>{f.current=0,l(!0);try{let n=m.current;if(t===`org`){s({orgNodes:await pe(e,n)}),d(!1);return}let[r,i]=await Promise.all([me(e,0,n),pe(e,n)]);s({selectAll:!0,sections:[{key:`members`,title:`Members`,items:r.items}],orgNodes:i}),f.current=r.nextCursor??0,d(r.nextCursor!==null)}finally{l(!1)}},[]),g=(0,T.useCallback)(async()=>{let e=await me(i.length>0?i[i.length-1].id:`root`,f.current,m.current);s(t=>({...t,sections:[{key:`members`,title:`Members`,items:[...t.sections?.[0]?.items??[],...e.items]}]})),f.current=e.nextCursor??f.current,d(e.nextCursor!==null)},[i]),_=()=>i.length>0?i[i.length-1].id:`root`,v=e=>{m.current=e,r(`org`),a([]),s({}),t(!0),h(`root`,`org`)};return(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,flexWrap:`wrap`},children:[(0,E.jsx)(p,{onClick:()=>v(120),children:`Open with fast API`}),(0,E.jsx)(p,{onClick:()=>v(800),children:`Open with slow API`}),(0,E.jsx)(`span`,{style:{color:`var(--lg-g-fg-color-black-default)`,fontSize:12},children:`Drill into a sub unit, switch tabs, then scroll to the bottom`}),(0,E.jsx)(W,{open:e,onOpenChange:t,tabs:[`org`,`person`],activeTab:n,onTabChange:e=>{r(e),h(_(),e)},data:o,loading:c,hasMore:u,onLoadMore:g,orgPath:i,onOrgPathChange:e=>{a(e),h(e.length>0?e[e.length-1].id:`root`,n)}})]})}var ge=`import { useCallback, useRef, useState } from "react";
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
`,_e={root:[{type:`org`,id:`o1`,name:`Unit One`,hasChildren:!0},{type:`org`,id:`o2`,name:`Unit Two`}],o1:[{type:`org`,id:`o1-1`,name:`Team Alpha`}]},ve={root:[{type:`person`,id:`p1`,name:`Avery Stone`,code:`10001`,deptName:`Headquarters`},{type:`person`,id:`p2`,name:`Blake Rivers`,code:`10002`,deptName:`Headquarters`}],o1:[{type:`person`,id:`p3`,name:`Casey Lane`,code:`10003`,deptName:`Unit One`},{type:`person`,id:`p4`,name:`Devon Pike`,code:`10004`,deptName:`Unit One`},{type:`person`,id:`p5`,name:`Ellis Ward`,code:`10005`,deptName:`Unit One`}],"o1-1":[{type:`person`,id:`p6`,name:`Frankie Hale`,code:`10006`,deptName:`Team Alpha`}],o2:[{type:`person`,id:`p7`,name:`Georgia Mills`,code:`10007`,deptName:`Unit Two`}]},ye=Object.values(ve).flat(),be=[{value:`view`,label:`Can view`},{value:`edit`,label:`Can edit`}];function xe(){let[e,t]=(0,T.useState)(`person`),[n,r]=(0,T.useState)([]),[i,a]=(0,T.useState)(``),[o,s]=(0,T.useState)([]),[c,l]=(0,T.useState)(`view`),u=n.length>0?n[n.length-1].id:`root`,d=(0,T.useMemo)(()=>{if(i.trim())return{sections:[{key:`search`,items:ye.filter(e=>e.name.toLowerCase().includes(i.trim().toLowerCase()))}]};let t=_e[u]??[];return e===`org`?{orgNodes:t}:{selectAll:!0,sections:[{key:`members`,title:`Members`,items:ve[u]??[]}],orgNodes:t}},[u,i,e]);return(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,height:520,padding:20,borderRadius:16,background:`var(--lg-g-bg-color-white-heavy)`,border:`1px solid var(--lg-g-border-color-black-soft)`},children:[(0,E.jsx)(`div`,{style:{fontSize:16,fontWeight:500,color:`var(--lg-g-fg-color-black-intense)`},children:`Item 1`}),(0,E.jsx)(H,{paneHeight:`fill`,tabs:[`org`,`person`],activeTab:e,onTabChange:t,orgPath:n,onOrgPathChange:r,keyword:i,onSearch:a,data:d,value:o,onChange:s}),(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,E.jsx)(`span`,{style:{fontSize:12,color:`var(--lg-g-fg-color-black-default)`},children:`Permission`}),(0,E.jsx)(y,{value:c,onChange:e=>l(String(e)),options:be,style:{width:160}}),(0,E.jsxs)(`div`,{style:{marginLeft:`auto`,display:`flex`,gap:8},children:[(0,E.jsx)(p,{variant:`text`,onClick:()=>s([]),children:`Reset`}),(0,E.jsxs)(p,{variant:`primary`,disabled:o.length===0,children:[`Confirm (`,o.length,`)`]})]})]})]})}var Se=`import { useMemo, useState } from "react";
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
    { type: "org", id: "o2", name: "Unit Two" },
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
  o2: [{ type: "person", id: "p7", name: "Georgia Mills", code: "10007", deptName: "Unit Two" }],
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
      selectAll: true,
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
`;export{le as a,Z as c,he as i,ae as l,xe as n,ce as o,ge as r,se as s,Se as t,J as u};