import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{T as r}from"./tooltip-provider-dm2KS5Gs.js";import{n as i}from"./SlashLg-BTRBk0C3.js";import{n as a,o}from"./provider-CqM94MZB.js";import{t as s}from"./ChevronRight-Byx0XyEe.js";import{n as c,t as l}from"./WindowX-ChNdHTR4.js";import{t as u}from"./Search-CNi-0GUv.js";import{t as d}from"./XLg-CdrW98bQ.js";import{n as f}from"./tooltip-Cfb1EdqL.js";import{t as p}from"./button-CsPKeZbr.js";import{t as m}from"./empty-Ol3N2eMO.js";import{t as h}from"./breadcrumb-CMGSb5PW.js";import{t as g}from"./tabs-DORW_kWa.js";import{t as _}from"./input-CY92lNBW.js";import{t as v}from"./dialog-B2fyBWsG.js";import{t as y}from"./select-CDOHuKxo.js";import{t as b}from"./checkbox-DBEB278V.js";import{t as x}from"./infinite-scroll-Cxf7JMFV.js";import{t as S}from"./skeleton-DQ-AjLJW.js";import{n as C}from"./avatar-Co64xWYL.js";var w=e(t()),T=n(),E=({entity:e,size:t})=>e.type===`org`?(0,T.jsx)(`span`,{className:`lg-person-picker__org-icon`,style:{width:t,height:t},"aria-hidden":!0,children:(0,T.jsx)(c,{size:Math.round(14/24*t)})}):(0,T.jsx)(C,{className:`lg-person-picker__avatar`,src:e.avatar,size:t});E.displayName=`PersonPickerEntityAvatar`;function D(e,t){let n=e.toLowerCase(),r=t.toLowerCase(),i=[],a=0;for(;a<e.length;){let t=n.indexOf(r,a);if(t===-1){i.push({text:e.slice(a),matched:!1});break}t>a&&i.push({text:e.slice(a,t),matched:!1}),i.push({text:e.slice(t,t+r.length),matched:!0}),a=t+r.length}return i}var O=({text:e,keyword:t,className:n})=>{let r=(0,w.useMemo)(()=>{let n=t?.trim();return n?D(e,n):null},[e,t]);return r?(0,T.jsx)(`span`,{className:n,children:r.map((e,t)=>e.matched?(0,T.jsx)(`mark`,{className:`lg-person-picker__highlight`,children:e.text},t):(0,T.jsx)(w.Fragment,{children:e.text},t))}):(0,T.jsx)(`span`,{className:n,children:e})};O.displayName=`PersonPickerHighlightText`;function k(e){return[e.name,e.code,e.deptName,e.desc].filter(Boolean).join(` · `)}function A({entity:e,keyword:t}){return(0,T.jsxs)(`span`,{className:`lg-person-picker__row-main`,title:k(e),children:[(0,T.jsx)(`span`,{className:`lg-person-picker__row-name`,children:(0,T.jsx)(O,{text:e.name,keyword:t})}),e.code&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`span`,{className:`lg-person-picker__row-divider`,"aria-hidden":!0}),(0,T.jsx)(`span`,{className:`lg-person-picker__row-meta`,children:(0,T.jsx)(O,{text:e.code,keyword:t})})]}),e.deptName&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`span`,{className:`lg-person-picker__row-divider`,"aria-hidden":!0}),(0,T.jsx)(`span`,{className:`lg-person-picker__row-meta`,children:e.deptName})]}),e.desc&&(0,T.jsx)(`span`,{className:`lg-person-picker__row-meta`,children:e.desc})]})}var j=({entity:e,variant:t,checked:n=!1,keyword:i,onToggle:a,onDrillDown:o,onRemove:c,removeLabel:l,drillDownLabel:u})=>{let f=t===`pick`,p=e.type!==`org`||!f,m=!!(e.hasChildren&&o),h=f?32:24,g=f&&m,_=(0,T.jsx)(b,{className:`lg-person-picker__row-check`,checked:n||!!e.locked,disabled:e.disabled||e.locked,onChange:t=>a?.(e,t),"aria-label":g?e.name:void 0,children:g?void 0:(0,T.jsxs)(T.Fragment,{children:[p&&(0,T.jsx)(E,{entity:e,size:h}),(0,T.jsx)(A,{entity:e,keyword:i})]})});return(0,T.jsxs)(`div`,{className:r(`lg-person-picker__row`,`lg-person-picker__row--${t}`,`lg-person-picker__row--${e.type}`,f&&n&&`lg-person-picker__row--checked`,e.disabled&&`lg-person-picker__row--disabled`,e.locked&&`lg-person-picker__row--locked`,g&&`lg-person-picker__row--drillable`),onClick:g?()=>o?.(e):void 0,children:[f?g?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`span`,{className:`lg-person-picker__row-check-slot`,onClick:e=>e.stopPropagation(),children:_}),p&&(0,T.jsx)(E,{entity:e,size:h}),(0,T.jsx)(A,{entity:e,keyword:i})]}):_:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(E,{entity:e,size:h}),(0,T.jsx)(A,{entity:e,keyword:i})]}),m&&(0,T.jsx)(`button`,{type:`button`,className:`lg-person-picker__row-action`,"aria-label":u,onClick:()=>o?.(e),children:(0,T.jsx)(s,{size:16})}),!f&&!e.locked&&c&&(0,T.jsx)(`button`,{type:`button`,className:`lg-person-picker__row-action lg-person-picker__row-action--remove`,"aria-label":l,onClick:()=>c(e),children:(0,T.jsx)(d,{size:14})})]})};j.displayName=`PersonPickerEntityRow`;var M=({rows:e=7})=>(0,T.jsx)(`div`,{className:`lg-person-picker__skeleton`,"aria-hidden":!0,children:Array.from({length:e},(e,t)=>(0,T.jsxs)(`div`,{className:`lg-person-picker__skeleton-row`,children:[(0,T.jsx)(S,{variant:`circle`,width:32,height:32}),(0,T.jsx)(S,{className:`lg-person-picker__skeleton-bar`,variant:`rect`,height:16,borderRadius:8})]},t))});M.displayName=`PersonPickerListSkeleton`;function N(e){return`${e.type}:${e.id}`}var P=[`person`,`group`,`org`];function F(e){let{value:t,defaultValue:n,mode:r,max:i,onChange:a,onExceed:o}=e,[s,c]=(0,w.useState)(()=>n??[]),l=t!==void 0,u=l?t:s,d=(0,w.useMemo)(()=>new Set(u.map(N)),[u]),f=(0,w.useMemo)(()=>{let e=new Map;for(let t of u){let n=e.get(t.type);n?n.push(t):e.set(t.type,[t])}return P.filter(t=>e.has(t)).map(t=>({type:t,items:e.get(t)}))},[u]),p=(0,w.useMemo)(()=>{let e={person:0,group:0,org:0};for(let t of u)e[t.type]+=1;return e},[u]),m=(0,w.useCallback)((e,t)=>{l||c(e),a?.(e,t)},[l,a]),h=(0,w.useCallback)((e,t)=>{if(e.locked&&!t||e.disabled)return;let n=N(e);if(!t){m(u.filter(e=>N(e)!==n),{entity:e,selected:!1});return}if(!d.has(n)){if(r===`single`){m([e],{entity:e,selected:!0});return}if(i!==void 0&&u.length>=i){o?.(i);return}m([...u,e],{entity:e,selected:!0})}},[m,i,r,o,u,d]);return{selected:u,selectedKeys:d,groups:f,count:p,toggle:h,toggleMany:(0,w.useCallback)((e,t)=>{let n=e.filter(e=>!e.disabled);if(n.length===0)return;if(!t){let e=new Set(n.filter(e=>!e.locked).map(N));if(e.size===0)return;m(u.filter(t=>!e.has(N(t))),{selected:!1});return}let a=n.filter(e=>!d.has(N(e)));if(a.length!==0){if(r===`single`){m([a[0]],{entity:a[0],selected:!0});return}if(i!==void 0&&u.length+a.length>i){o?.(i);return}m([...u,...a],{selected:!0})}},[m,i,r,o,u,d]),remove:(0,w.useCallback)(e=>h(e,!1),[h])}}function ee(e,t){let n=(0,w.useRef)(e);n.current=e;let r=(0,w.useRef)(null);return(0,w.useEffect)(()=>()=>{r.current!==null&&clearTimeout(r.current)},[]),(0,w.useCallback)(e=>{r.current!==null&&clearTimeout(r.current),r.current=setTimeout(()=>n.current(e),t)},[t])}function te(e,t){let[n,r]=(0,w.useState)(!1);return(0,w.useEffect)(()=>{if(!e){r(!1);return}if(t<=0){r(!0);return}let n=setTimeout(()=>r(!0),t);return()=>clearTimeout(n)},[e,t]),n}var I=({tabs:e,activeTab:t,onTabChange:n,tabLabels:r,data:o,loading:s,loadingDelay:c,loadError:d,onRetry:v,hasMore:y,onLoadMore:S,keyword:C,onSearch:E,searchDebounce:D,searchPlaceholder:O,orgPath:k,onOrgPathChange:A,selectedKeys:P,onToggle:F,onToggleMany:I})=>{let R=a(`PersonPicker`),z=(0,w.useRef)(null),[B,V]=(0,w.useState)(C??``);(0,w.useEffect)(()=>{C!==void 0&&V(C)},[C]);let H=ee(e=>E?.(e),D),U=e=>{let t=e.target.value;V(t),H(t)},W=B.trim().length>0,G=o.sections??[],K=o.orgNodes??[],q=(0,w.useMemo)(()=>G.flatMap(e=>e.items).filter(e=>!e.disabled),[G]),J=q.length>0&&q.every(e=>P.has(N(e))),Y=!J&&q.some(e=>P.has(N(e))),X=(0,w.useMemo)(()=>[{key:`__root__`,icon:(0,T.jsx)(i,{size:16}),onClick:()=>A?.([])},...k.map((e,t)=>({key:`${t}-${e.id}`,label:e.name,onClick:()=>A?.(k.slice(0,t+1))}))],[A,k]),re=(0,w.useCallback)(e=>{A?.([...k,{id:e.id,name:e.name}])},[A,k]),Z=e=>(0,T.jsx)(j,{entity:e,variant:`pick`,checked:P.has(N(e)),keyword:W?B:void 0,onToggle:F,onDrillDown:re,drillDownLabel:R.drillDown},N(e)),Q=G.every(e=>e.items.length===0)&&K.length===0,ie=te(!!s,c),$=!!s&&(Q||ie),ae=$||!!d||Q,oe=k.map(e=>e.id).join(`/`);return(0,w.useEffect)(()=>{let e=z.current;e&&(e.scrollTop=0)},[t,oe,B]),(0,T.jsxs)(`div`,{className:`lg-person-picker__left`,children:[(0,T.jsxs)(`div`,{className:`lg-person-picker__left-header`,children:[(0,T.jsx)(_,{className:`lg-person-picker__search`,value:B,onChange:U,placeholder:O??R.searchPlaceholder,suffix:(0,T.jsx)(u,{size:16}),allowClear:!0,"aria-label":O??R.searchPlaceholder}),!W&&e.length>1&&(0,T.jsx)(g,{className:`lg-person-picker__tabs`,variant:`underline`,size:`sm`,transparent:!0,activeKey:t,onChange:e=>n(e),items:e.map(e=>({key:e,label:r?.[e]??R[L[e]]}))})]}),!W&&ne.has(t)&&k.length>0&&(0,T.jsx)(`div`,{className:`lg-person-picker__breadcrumb`,children:(0,T.jsx)(h,{size:`md`,items:X,maxItems:3})}),(0,T.jsx)(`div`,{className:`lg-person-picker__list`,children:ae?$?(0,T.jsx)(M,{}):d?(0,T.jsx)(m,{className:`lg-person-picker__status`,size:`lg`,icon:l,description:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`span`,{className:`lg-person-picker__status-title`,children:R.loadFailed}),(0,T.jsx)(`span`,{className:`lg-person-picker__status-detail`,children:R.loadFailedDetail})]}),children:v&&(0,T.jsx)(p,{variant:`primary`,ghost:!0,size:`md`,onClick:v,children:R.retry})}):Q?(0,T.jsx)(m,{className:`lg-person-picker__status`,size:`md`,icon:W?u:void 0,description:(0,T.jsx)(`span`,{className:`lg-person-picker__status-title`,children:W?R.searchEmpty:R.empty})}):null:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(f,{fill:!0,viewportRef:z,children:(0,T.jsx)(`div`,{className:`lg-person-picker__list-inner`,children:(0,T.jsxs)(T.Fragment,{children:[o.selectAll&&q.length>0&&(0,T.jsx)(`div`,{className:`lg-person-picker__select-all`,children:(0,T.jsx)(b,{checked:J,indeterminate:Y,onChange:e=>I(q,e),children:(0,T.jsx)(`span`,{className:`lg-person-picker__select-all-label`,children:R.selectAll})})}),G.map(e=>(0,T.jsxs)(`div`,{className:`lg-person-picker__section`,children:[e.title&&(0,T.jsx)(`div`,{className:`lg-person-picker__section-title`,children:e.title}),(0,T.jsx)(`div`,{className:`lg-person-picker__rows`,children:e.items.map(Z)})]},e.key)),K.length>0&&(0,T.jsx)(`div`,{className:`lg-person-picker__rows`,children:K.map(Z)}),S&&(0,T.jsx)(x,{loadMore:S,hasMore:!!y,scrollTarget:()=>z.current,noMore:null})]})})}),(0,T.jsx)(`div`,{className:`lg-person-picker__fade`,"aria-hidden":!0})]})})]})},ne=new Set([`org`,`person`]),L={"recent-contacts":`tabRecentContacts`,"recent-groups":`tabRecentGroups`,org:`tabOrganization`,person:`tabPerson`};I.displayName=`PersonPickerLeftPane`;var R={person:`groupPerson`,group:`groupGroup`,org:`groupOrg`},z=({groups:e,count:t,onRemove:n})=>{let r=a(`PersonPicker`),i=(0,w.useRef)(null),o=(0,w.useRef)(new Map),s=(0,w.useCallback)(e=>t=>{t?o.current.set(e,t):o.current.delete(e)},[]),c=(0,w.useCallback)(e=>{let t=i.current,n=o.current.get(e);!t||!n||(t.scrollTop=n.offsetTop)},[]),l=t.person+t.group+t.org;return(0,T.jsxs)(`div`,{className:`lg-person-picker__right`,children:[(0,T.jsxs)(`div`,{className:`lg-person-picker__right-header`,children:[(0,T.jsx)(`span`,{className:`lg-person-picker__right-title`,children:r.selectedTitle}),l===0?(0,T.jsx)(`span`,{className:`lg-person-picker__count-empty`,children:`0`}):(0,T.jsx)(`span`,{className:`lg-person-picker__counts`,children:P.filter(e=>t[e]>0).map(e=>(0,T.jsxs)(`button`,{type:`button`,className:`lg-person-picker__count`,onClick:()=>c(e),"aria-label":`${r.jumpTo}${r[R[e]]}`,children:[r[R[e]],` `,t[e]]},e))})]}),(0,T.jsxs)(`div`,{className:`lg-person-picker__list`,children:[(0,T.jsx)(f,{fill:!0,viewportRef:i,children:(0,T.jsx)(`div`,{className:`lg-person-picker__list-inner`,children:e.map(e=>(0,T.jsxs)(`div`,{className:`lg-person-picker__section`,ref:s(e.type),children:[(0,T.jsxs)(`div`,{className:`lg-person-picker__section-title`,children:[r[R[e.type]],` `,e.items.length]}),(0,T.jsx)(`div`,{className:`lg-person-picker__rows`,children:e.items.map(e=>(0,T.jsx)(j,{entity:e,variant:`selected`,onRemove:n,removeLabel:r.remove},N(e)))})]},e.type))})}),(0,T.jsx)(`div`,{className:`lg-person-picker__fade`,"aria-hidden":!0})]})]})};z.displayName=`PersonPickerRightPane`;var B=[`org`,`person`],V={},H=(0,w.forwardRef)(({tabs:e=B,activeTab:t,defaultActiveTab:n,onTabChange:i,tabLabels:a,data:o=V,loading:s,loadingDelay:c=200,loadError:l,onRetry:u,hasMore:d,onLoadMore:f,value:p,defaultValue:m,onChange:h,keyword:g,onSearch:_,searchDebounce:v=300,searchPlaceholder:y,orgPath:b,onOrgPathChange:x,mode:S=`multiple`,max:C,onExceed:E,paneHeight:D,className:O,style:k},A)=>{let[j,M]=(0,w.useState)(()=>n??e[0]),N=t??j,P=(0,w.useCallback)(e=>{t===void 0&&M(e),i?.(e)},[t,i]),[ee,te]=(0,w.useState)([]),ne=b??ee,L=(0,w.useCallback)(e=>{b===void 0&&te(e),x?.(e)},[x,b]),R=F({value:p,defaultValue:m,mode:S,max:C,onChange:h,onExceed:E}),H=typeof D==`number`?{...k,"--_pp-panes-height":`${D}px`}:k;return(0,T.jsx)(`div`,{ref:A,className:r(`lg-person-picker`,D===`fill`&&`lg-person-picker--fill`,O),style:H,children:(0,T.jsxs)(`div`,{className:`lg-person-picker__panes`,children:[(0,T.jsx)(I,{tabs:e,activeTab:N,onTabChange:P,tabLabels:a,data:o,loading:s,loadingDelay:c,loadError:l,onRetry:u,hasMore:d,onLoadMore:f,keyword:g,onSearch:_,searchDebounce:v,searchPlaceholder:y,orgPath:ne,onOrgPathChange:L,selectedKeys:R.selectedKeys,onToggle:R.toggle,onToggleMany:R.toggleMany}),(0,T.jsx)(z,{groups:R.groups,count:R.count,onRemove:R.remove})]})})});H.displayName=`PersonPickerPanel`;var U=720,W=({open:e,onOpenChange:t,title:n,okText:r,cancelText:i,okLoading:o,okDisabledWhenEmpty:s=!0,onConfirm:c,onCancel:l,width:u=U,zIndex:d,hostModal:f,value:m,defaultValue:h,onChange:g,..._})=>{let y=a(`PersonPicker`),[b,x]=(0,w.useState)(!1),[S,C]=(0,w.useState)(()=>h??[]),E=m!==void 0,D=E?m:S,O=(0,w.useCallback)((e,t)=>{E||C(e),g?.(e,t)},[E,g]),k=(0,w.useCallback)(()=>{l?.(),t(!1)},[l,t]),A=(0,w.useCallback)(async()=>{let e=c?.(D);if(!(e instanceof Promise)){t(!1);return}x(!0);try{await e,t(!1)}finally{x(!1)}},[c,t,D]);return(0,T.jsx)(v,{className:`lg-person-picker-dialog`,open:e,onOpenChange:e=>e?t(!0):k(),title:n??y.title,width:u,zIndex:d,hostModal:f,footer:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(p,{variant:`text`,size:`lg`,onClick:k,children:i??y.cancel}),(0,T.jsx)(p,{variant:`primary`,size:`lg`,loading:o||b,disabled:s&&D.length===0,onClick:A,children:r??y.ok})]}),children:(0,T.jsx)(H,{..._,value:D,onChange:O})})};W.displayName=`PersonPicker`;var G={root:[{type:`org`,id:`eng`,name:`Engineering`,desc:`86`,hasChildren:!0},{type:`org`,id:`mkt`,name:`Marketing`,desc:`24`,hasChildren:!0},{type:`org`,id:`fin`,name:`Finance`,desc:`12`}],eng:[{type:`org`,id:`eng-web`,name:`Web Platform`,desc:`31`,hasChildren:!0},{type:`org`,id:`eng-api`,name:`API Services`,desc:`28`},{type:`org`,id:`eng-qa`,name:`Quality Assurance`,desc:`15`}],"eng-web":[{type:`org`,id:`eng-web-ui`,name:`Design System`,desc:`9`},{type:`org`,id:`eng-web-app`,name:`Application Shell`,desc:`11`}],mkt:[{type:`org`,id:`mkt-brand`,name:`Brand`,desc:`8`},{type:`org`,id:`mkt-growth`,name:`Growth`,desc:`10`}]},K={root:[{type:`person`,id:`p1`,name:`Avery Stone`,code:`10001`,deptName:`Executive`}],eng:[{type:`person`,id:`p2`,name:`Blake Rivers`,code:`10002`,deptName:`Engineering`},{type:`person`,id:`p3`,name:`Casey Lane`,code:`10003`,deptName:`Engineering`}],"eng-web":[{type:`person`,id:`p4`,name:`Devon Pike`,code:`10004`,deptName:`Web Platform`},{type:`person`,id:`p5`,name:`Ellis Ward`,code:`10005`,deptName:`Web Platform`},{type:`person`,id:`p6`,name:`Frankie Hale`,code:`10006`,deptName:`Web Platform`}],"eng-web-ui":[{type:`person`,id:`p7`,name:`Georgia Mills`,code:`10007`,deptName:`Design System`}],"eng-api":[{type:`person`,id:`p8`,name:`Harper Quinn`,code:`10008`,deptName:`API Services`},{type:`person`,id:`p9`,name:`Indigo Reese`,code:`10009`,deptName:`API Services`}],mkt:[{type:`person`,id:`p10`,name:`Jordan Vale`,code:`10010`,deptName:`Marketing`}],fin:[{type:`person`,id:`p11`,name:`Kai Monroe`,code:`10011`,deptName:`Finance`}]},q=Object.values(K).flat();function J(){let[e,t]=(0,w.useState)(!1),[n,r]=(0,w.useState)(`org`),[i,a]=(0,w.useState)([]),[o,s]=(0,w.useState)(``),[c,l]=(0,w.useState)([]),u=i.length>0?i[i.length-1].id:`root`,d=(0,w.useMemo)(()=>{if(o.trim())return{sections:[{key:`search`,items:q.filter(e=>e.name.toLowerCase().includes(o.trim().toLowerCase()))}]};let e=G[u]??[];return n===`org`?{orgNodes:e}:{selectAll:!0,sections:[{key:`members`,title:`Members`,items:K[u]??[]}],orgNodes:e}},[u,o,n]);return(0,T.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,T.jsx)(p,{variant:`primary`,onClick:()=>t(!0),children:`Open picker`}),(0,T.jsx)(`span`,{style:{color:`var(--lg-g-fg-color-black-default)`,fontSize:12},children:c.length>0?`Confirmed: ${c.length}`:`Nothing confirmed yet`}),(0,T.jsx)(W,{open:e,onOpenChange:t,tabs:[`org`,`person`],activeTab:n,onTabChange:r,orgPath:i,onOrgPathChange:a,keyword:o,onSearch:s,data:d,onConfirm:l})]})}var Y=`import { useMemo, useState } from "react";
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
`,X=[{type:`person`,id:`p1`,name:`Avery Stone`,code:`10001`,deptName:`Engineering`},{type:`person`,id:`p2`,name:`Blake Rivers`,code:`10002`,deptName:`Engineering`},{type:`person`,id:`p3`,name:`Casey Lane`,code:`10003`,deptName:`Marketing`,locked:!0},{type:`person`,id:`p4`,name:`Devon Pike`,code:`10004`,deptName:`Marketing`,disabled:!0}],re=[{type:`group`,id:`g1`,name:`Release Train`},{type:`group`,id:`g2`,name:`Design Review`}],Z=[{type:`org`,id:`eng`,name:`Engineering`,desc:`86`},{type:`org`,id:`mkt`,name:`Marketing`,desc:`24`}];function Q(){let[e,t]=(0,w.useState)(!1),[n,r]=(0,w.useState)(`recent-contacts`),[i,a]=(0,w.useState)([X[2]]),s=(0,w.useMemo)(()=>n===`recent-contacts`?{sections:[{key:`c`,items:X}]}:n===`recent-groups`?{sections:[{key:`g`,items:re}]}:n===`org`?{orgNodes:Z}:{selectAll:!0,sections:[{key:`owner`,title:`Owner`,items:X.slice(0,1)},{key:`member`,title:`Members`,items:X.slice(1)}],orgNodes:Z},[n]);return(0,T.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,T.jsx)(p,{variant:`primary`,onClick:()=>t(!0),children:`Open with all tabs`}),(0,T.jsxs)(`span`,{style:{color:`var(--lg-g-fg-color-black-default)`,fontSize:12},children:[`Selected: `,i.length,` / 5`]}),(0,T.jsx)(W,{open:e,onOpenChange:t,title:`Create group chat`,okText:`Create`,tabs:[`recent-contacts`,`recent-groups`,`org`,`person`],activeTab:n,onTabChange:r,data:s,value:i,onChange:a,max:5,onExceed:e=>o.warning(`At most ${e} items`)})]})}var ie=`import { useMemo, useState } from "react";
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
`,$={sections:[{key:`list`,items:[]}]};function ae(){let[e,t]=(0,w.useState)(null);return(0,T.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,T.jsx)(p,{onClick:()=>t(`loading`),children:`Loading`}),(0,T.jsx)(p,{onClick:()=>t(`error`),children:`Error`}),(0,T.jsx)(p,{onClick:()=>t(`empty`),children:`Empty`}),(0,T.jsx)(W,{open:e!==null,onOpenChange:e=>!e&&t(null),tabs:[`org`,`person`],data:$,loading:e===`loading`,loadError:e===`error`,onRetry:()=>t(`loading`)})]})}var oe=`import { useState } from "react";
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
`,se=20,ce={root:[{type:`org`,id:`u1`,name:`Sub Unit One`,desc:`28`,hasChildren:!0},{type:`org`,id:`u2`,name:`Sub Unit Two`,desc:`24`,hasChildren:!0}],u1:[{type:`org`,id:`u1-1`,name:`Nested Team`,desc:`12`,hasChildren:!0},{type:`org`,id:`u1-2`,name:`Another Team`,desc:`9`}],"u1-1":[{type:`org`,id:`u1-1-1`,name:`Deep Squad`,desc:`4`}],u2:[{type:`org`,id:`u2-1`,name:`Support Group`,desc:`6`}]},le={root:64,u1:28,u2:24,"u1-1":12,"u1-2":9,"u1-1-1":4,"u2-1":6};function ue(e,t){return new Promise(n=>setTimeout(()=>n(e),t))}function de(e,t){return ue(ce[e]??[],t)}async function fe(e,t,n){let r=le[e]??0,i=Array.from({length:se},(e,n)=>t+n).filter(e=>e<r).map(t=>({type:`person`,id:`${e}-p${t}`,name:`Member ${t+1}`,code:`${1e4+t}`,deptName:e===`root`?`Headquarters`:`Sub Unit`})),a=t+se;return ue({items:i,nextCursor:a<r?a:null},n)}function pe(){let[e,t]=(0,w.useState)(!1),[n,r]=(0,w.useState)(`org`),[i,a]=(0,w.useState)([]),[o,s]=(0,w.useState)({}),[c,l]=(0,w.useState)(!1),[u,d]=(0,w.useState)(!1),f=(0,w.useRef)(0),m=(0,w.useRef)(800),h=(0,w.useCallback)(async(e,t)=>{f.current=0,l(!0);try{let n=m.current;if(t===`org`){s({orgNodes:await de(e,n)}),d(!1);return}let[r,i]=await Promise.all([fe(e,0,n),de(e,n)]);s({selectAll:!0,sections:[{key:`members`,title:`Members`,items:r.items}],orgNodes:i}),f.current=r.nextCursor??0,d(r.nextCursor!==null)}finally{l(!1)}},[]),g=(0,w.useCallback)(async()=>{let e=await fe(i.length>0?i[i.length-1].id:`root`,f.current,m.current);s(t=>({...t,sections:[{key:`members`,title:`Members`,items:[...t.sections?.[0]?.items??[],...e.items]}]})),f.current=e.nextCursor??f.current,d(e.nextCursor!==null)},[i]),_=()=>i.length>0?i[i.length-1].id:`root`,v=e=>{m.current=e,r(`org`),a([]),s({}),t(!0),h(`root`,`org`)};return(0,T.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,flexWrap:`wrap`},children:[(0,T.jsx)(p,{onClick:()=>v(120),children:`Open with fast API`}),(0,T.jsx)(p,{onClick:()=>v(800),children:`Open with slow API`}),(0,T.jsx)(`span`,{style:{color:`var(--lg-g-fg-color-black-default)`,fontSize:12},children:`Drill into a sub unit, switch tabs, then scroll to the bottom`}),(0,T.jsx)(W,{open:e,onOpenChange:t,tabs:[`org`,`person`],activeTab:n,onTabChange:e=>{r(e),h(_(),e)},data:o,loading:c,hasMore:u,onLoadMore:g,orgPath:i,onOrgPathChange:e=>{a(e),h(e.length>0?e[e.length-1].id:`root`,n)}})]})}var me=`import { useCallback, useRef, useState } from "react";
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
`,he={root:[{type:`org`,id:`o1`,name:`Unit One`,hasChildren:!0},{type:`org`,id:`o2`,name:`Unit Two`}],o1:[{type:`org`,id:`o1-1`,name:`Team Alpha`}]},ge={root:[{type:`person`,id:`p1`,name:`Avery Stone`,code:`10001`,deptName:`Headquarters`},{type:`person`,id:`p2`,name:`Blake Rivers`,code:`10002`,deptName:`Headquarters`}],o1:[{type:`person`,id:`p3`,name:`Casey Lane`,code:`10003`,deptName:`Unit One`},{type:`person`,id:`p4`,name:`Devon Pike`,code:`10004`,deptName:`Unit One`},{type:`person`,id:`p5`,name:`Ellis Ward`,code:`10005`,deptName:`Unit One`}],"o1-1":[{type:`person`,id:`p6`,name:`Frankie Hale`,code:`10006`,deptName:`Team Alpha`}],o2:[{type:`person`,id:`p7`,name:`Georgia Mills`,code:`10007`,deptName:`Unit Two`}]},_e=Object.values(ge).flat(),ve=[{value:`view`,label:`Can view`},{value:`edit`,label:`Can edit`}];function ye(){let[e,t]=(0,w.useState)(`person`),[n,r]=(0,w.useState)([]),[i,a]=(0,w.useState)(``),[o,s]=(0,w.useState)([]),[c,l]=(0,w.useState)(`view`),u=n.length>0?n[n.length-1].id:`root`,d=(0,w.useMemo)(()=>{if(i.trim())return{sections:[{key:`search`,items:_e.filter(e=>e.name.toLowerCase().includes(i.trim().toLowerCase()))}]};let t=he[u]??[];return e===`org`?{orgNodes:t}:{selectAll:!0,sections:[{key:`members`,title:`Members`,items:ge[u]??[]}],orgNodes:t}},[u,i,e]);return(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,height:520,padding:20,borderRadius:16,background:`var(--lg-g-bg-color-white-heavy)`,border:`1px solid var(--lg-g-border-color-black-soft)`},children:[(0,T.jsx)(`div`,{style:{fontSize:16,fontWeight:500,color:`var(--lg-g-fg-color-black-intense)`},children:`Item 1`}),(0,T.jsx)(H,{paneHeight:`fill`,tabs:[`org`,`person`],activeTab:e,onTabChange:t,orgPath:n,onOrgPathChange:r,keyword:i,onSearch:a,data:d,value:o,onChange:s}),(0,T.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,T.jsx)(`span`,{style:{fontSize:12,color:`var(--lg-g-fg-color-black-default)`},children:`Permission`}),(0,T.jsx)(y,{value:c,onChange:e=>l(String(e)),options:ve,style:{width:160}}),(0,T.jsxs)(`div`,{style:{marginLeft:`auto`,display:`flex`,gap:8},children:[(0,T.jsx)(p,{variant:`text`,onClick:()=>s([]),children:`Reset`}),(0,T.jsxs)(p,{variant:`primary`,disabled:o.length===0,children:[`Confirm (`,o.length,`)`]})]})]})]})}var be=`import { useMemo, useState } from "react";
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
`;export{oe as a,Q as c,pe as i,Y as l,ye as n,ae as o,me as r,ie as s,be as t,J as u};