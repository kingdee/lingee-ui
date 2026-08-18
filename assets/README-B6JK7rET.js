import{G as e,J as t,L as n,c as r,z as i}from"./i18n-B4Rqn8un.js";import{_ as a,a as o,c as s,d as c,f as l,g as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x,v as S,y as C}from"./Upload-B5FIRppH.js";import{t as w}from"./alert-3klXH_kA.js";import{t as T}from"./ChevronDown-C3c_9h67.js";import{t as ee}from"./ChevronLeft-B6kubIeT.js";import{t as te}from"./ChevronRight-Ddodr-A_.js";import{r as ne,t as E}from"./empty-BUouPpFy.js";import{t as D}from"./FolderOpen-ostFTMKN.js";import{t as O}from"./Plus-j15MjwxC.js";import{t as re}from"./Trash-C2piaaNY.js";import{t as k}from"./XLg-DHc3GHyp.js";import{t as A}from"./DemoBox-DAY78r0t.js";import{t as j}from"./button-CAlrLsXM.js";import{t as ie}from"./ellipsis-tooltip-CSDHFLuy.js";import{t as ae}from"./tabs-QkI_3k34.js";import{t as oe}from"./input-B9ImyLwK.js";import{t as se}from"./textarea-BWqvs301.js";import{t as ce}from"./tag-DXAjh_Kt.js";import{t as le}from"./dialog-Ja1iFcTz.js";import{c as ue,d as M,l as de,n as N,r as P,s as F,t as I,u as fe}from"./dropdown-COZwYvKy.js";import{t as pe}from"./divider-D-hZEVpK.js";import{t as me}from"./checkbox-CoYLagEX.js";import{t as L}from"./spin-Sw89oU45.js";import{t as he}from"./image-BrwlhxiJ.js";import{t as ge}from"./upload-WC4wtH_l.js";var R=t(e()),z=i(),B=R.forwardRef(({width:e=280,collapsed:t,safeAreaTop:r,children:i,className:a,style:o,...s},c)=>{let l=t!==void 0,u={"--_sidebar-width":`${e}px`,...r===void 0?{}:{"--_sidebar-safe-area-top":`${r}px`}};return l?(0,z.jsx)(`div`,{ref:c,className:n(`lg-sidebar-wrapper`,t&&`lg-sidebar-wrapper--collapsed`,a),style:{...u,...o},...s,children:(0,z.jsx)(`div`,{className:n(`lg-sidebar`,`lg-sidebar--floating`,t&&`lg-sidebar--collapsed`),children:i})}):(0,z.jsx)(`div`,{ref:c,className:n(`lg-sidebar`,a),style:{...u,...o},...s,children:i})});B.displayName=`Sidebar.Root`;var V=R.forwardRef(({children:e,className:t,style:r,...i},a)=>(0,z.jsx)(`div`,{ref:a,className:n(`lg-sidebar-header`,t),style:r,...i,children:e}));V.displayName=`Sidebar.Header`;var _e=typeof window<`u`?R.useLayoutEffect:R.useEffect,H=R.forwardRef(({items:e,activeKey:t,onChange:r,className:i,style:a,...o},s)=>{let c=(0,R.useRef)(null),l=(0,R.useRef)(new Map),[u,d]=(0,R.useState)({opacity:0}),f=(0,R.useRef)(!1),p=(0,R.useCallback)(e=>{c.current=e,typeof s==`function`?s(e):s&&(s.current=e)},[s]),m=(0,R.useCallback)(e=>t=>{t?l.current.set(e,t):l.current.delete(e)},[]),h=(0,R.useCallback)(()=>{let e=c.current,n=l.current.get(t);if(!e||!n){d(e=>e.opacity===0?e:{...e,opacity:0});return}let r=e.getBoundingClientRect(),i=n.getBoundingClientRect();d({width:i.width,transform:`translateX(${i.left-r.left}px)`,opacity:1,transition:f.current?`transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)`:`none`}),f.current=!0},[t]);return _e(()=>{h()},[h,e.map(e=>`${e.key}:${+!!e.disabled}`).join(`|`)]),(0,R.useEffect)(()=>{let e=c.current;if(!e||typeof ResizeObserver>`u`)return;let t=new ResizeObserver(()=>h());return t.observe(e),()=>t.disconnect()},[h]),(0,z.jsxs)(`div`,{ref:p,className:n(`lg-sidebar-tab-bar`,i),role:`tablist`,style:a,...o,children:[(0,z.jsx)(`div`,{className:`lg-sidebar-tab-bar__slider`,style:u,"aria-hidden":!0}),e.map(e=>{let i=e.key===t;return(0,z.jsxs)(`button`,{ref:m(e.key),type:`button`,role:`tab`,"aria-selected":i,disabled:e.disabled,"aria-label":e.ariaLabel,className:n(`lg-sidebar-tab-bar__tab`,i&&`lg-sidebar-tab-bar__tab--active`,e.disabled&&`lg-sidebar-tab-bar__tab--disabled`),onClick:()=>{e.disabled||r(e.key)},children:[e.icon&&(0,z.jsx)(`span`,{className:`lg-sidebar-tab-bar__tab-icon`,children:e.icon}),(0,z.jsx)(`span`,{className:`lg-sidebar-tab-bar__tab-label`,children:e.label})]},e.key)})]})});H.displayName=`Sidebar.TabBar`;function U({children:e,className:t,placement:n=`top`}){return typeof e!=`string`&&typeof e!=`number`?(0,z.jsx)(`span`,{className:t,children:e}):(0,z.jsx)(ie,{content:e,placement:n,className:t,ellipsis:!1,children:e})}var W=R.forwardRef(({icon:e,label:t,active:r=!1,disabled:i=!1,badge:a,onClick:o,className:s,style:c,...l},u)=>(0,z.jsxs)(`button`,{ref:u,type:`button`,disabled:i,"aria-current":r?`page`:void 0,className:n(`lg-sidebar-nav-item`,r&&`lg-sidebar-nav-item--active`,i&&`lg-sidebar-nav-item--disabled`,s),style:c,onClick:()=>{i||o?.()},...l,children:[e&&(0,z.jsx)(`span`,{className:`lg-sidebar-nav-item__icon`,children:e}),(0,z.jsx)(U,{className:`lg-sidebar-nav-item__label`,children:t}),a!=null&&(0,z.jsx)(`span`,{className:`lg-sidebar-nav-item__badge`,children:a})]}));W.displayName=`Sidebar.NavItem`;function G({open:e,children:t,className:r}){return(0,z.jsx)(`div`,{className:n(`lg-sidebar-collapse`,e&&`lg-sidebar-collapse--open`,r),"aria-hidden":!e,children:(0,z.jsx)(`div`,{className:`lg-sidebar-collapse__clip`,children:(0,z.jsx)(`div`,{className:`lg-sidebar-collapse__inner`,children:t})})})}var K=R.forwardRef(({icon:e,label:t,active:r=!1,open:i,defaultOpen:a=!1,onOpenChange:o,onLabelClick:s,items:c,extra:l,disabled:u=!1,expandLabel:d,collapseLabel:f,className:p,style:m,...h},g)=>{let _=i!==void 0,[v,y]=(0,R.useState)(a),b=_?i:v,x=c.some(e=>e.active),S=r&&!x,C=()=>{if(u)return;let e=!b;_||y(e),o?.(e)},w=!!s;return(0,z.jsxs)(`div`,{ref:g,className:n(`lg-sidebar-collapsible-nav-item`,p),style:m,...h,children:[(0,z.jsxs)(`button`,{type:`button`,disabled:u,"aria-expanded":b,className:n(`lg-sidebar-nav-item`,`lg-sidebar-collapsible-nav-item__header`,S&&`lg-sidebar-nav-item--active`,u&&`lg-sidebar-nav-item--disabled`),onClick:()=>{u||(w?s?.():C())},children:[e&&(0,z.jsx)(`span`,{className:`lg-sidebar-nav-item__icon`,children:e}),(0,z.jsx)(U,{className:`lg-sidebar-nav-item__label`,children:t}),l!=null&&(0,z.jsx)(`span`,{className:`lg-sidebar-collapsible-nav-item__extra`,children:l}),w?(0,z.jsx)(`span`,{role:`button`,tabIndex:u?-1:0,"aria-label":b?f:d,"aria-expanded":b,className:`lg-sidebar-collapsible-nav-item__caret-hit`,onClick:e=>{e.stopPropagation(),C()},onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),e.stopPropagation(),C())},children:(0,z.jsx)(T,{size:16,className:n(`lg-sidebar-collapsible-nav-item__caret`,b&&`lg-sidebar-collapsible-nav-item__caret--open`)})}):(0,z.jsx)(T,{size:16,className:n(`lg-sidebar-collapsible-nav-item__caret`,b&&`lg-sidebar-collapsible-nav-item__caret--open`)})]}),(0,z.jsx)(G,{open:b,children:(0,z.jsx)(`div`,{className:`lg-sidebar-collapsible-nav-item__items`,children:c.map(e=>(0,z.jsx)(`button`,{type:`button`,disabled:e.disabled,tabIndex:b?0:-1,className:n(`lg-sidebar-collapsible-nav-item__item`,e.active&&`lg-sidebar-collapsible-nav-item__item--active`,e.disabled&&`lg-sidebar-collapsible-nav-item__item--disabled`),onClick:()=>{e.disabled||e.onClick?.()},children:(0,z.jsx)(`span`,{className:`lg-sidebar-collapsible-nav-item__item-inner`,children:(0,z.jsx)(U,{className:`lg-sidebar-collapsible-nav-item__item-text`,children:e.label})})},e.key))})})]})});K.displayName=`Sidebar.CollapsibleNavItem`;var q=R.forwardRef(({title:e,collapsible:t=!1,expanded:r=!0,onToggle:i,actions:a,className:o,style:s,...c},l)=>t?(0,z.jsxs)(`div`,{ref:l,className:n(`lg-sidebar-group-header`,o),style:s,...c,children:[(0,z.jsxs)(`button`,{type:`button`,className:`lg-sidebar-group-header__toggle`,"aria-expanded":r,onClick:()=>i?.(),children:[(0,z.jsx)(`span`,{className:`lg-sidebar-group-header__label`,children:e}),(0,z.jsx)(T,{size:16,className:n(`lg-sidebar-group-header__arrow`,r&&`lg-sidebar-group-header__arrow--open`)})]}),a!=null&&(0,z.jsx)(`div`,{className:`lg-sidebar-group-header__actions`,children:a})]}):(0,z.jsxs)(`div`,{ref:l,className:n(`lg-sidebar-group-header`,o),style:s,...c,children:[(0,z.jsx)(`span`,{className:`lg-sidebar-group-header__label`,children:e}),a!=null&&(0,z.jsx)(`div`,{className:`lg-sidebar-group-header__actions`,children:a})]}));q.displayName=`Sidebar.GroupHeader`;var J=R.forwardRef(({title:e,active:t=!1,indicator:r,prefix:i,onSelect:a,menu:o,className:s,style:c,...l},u)=>(0,z.jsxs)(`div`,{ref:u,className:n(`lg-sidebar-list-item`,t&&`lg-sidebar-list-item--active`,s),style:c,...l,children:[(0,z.jsxs)(`button`,{type:`button`,className:`lg-sidebar-list-item__btn`,onClick:()=>a?.(),children:[r&&(0,z.jsx)(`span`,{className:n(`lg-sidebar-list-item__indicator`,`lg-sidebar-list-item__indicator--${r}`),"aria-hidden":!0}),i!=null&&(0,z.jsx)(`span`,{className:`lg-sidebar-list-item__prefix`,children:i}),(0,z.jsx)(U,{className:`lg-sidebar-list-item__title`,children:e})]}),o!=null&&(0,z.jsx)(`div`,{className:`lg-sidebar-list-item__menu`,onClick:e=>e.stopPropagation(),children:o})]}));J.displayName=`Sidebar.ListItem`;var Y=R.forwardRef(({icon:e,title:t,expanded:r=!1,onToggle:i,caretPlacement:a=`title`,actions:o,actionsVisible:s=!1,active:c=!1,children:l,expandLabel:u,collapseLabel:d,className:f,style:p,...m},h)=>{let g=(0,z.jsx)(T,{size:16,className:n(`lg-sidebar-collapsible-list-item__caret`,`lg-sidebar-collapsible-list-item__caret--${a}`,r&&`lg-sidebar-collapsible-list-item__caret--open`),"aria-hidden":!0});return(0,z.jsxs)(`div`,{ref:h,className:n(`lg-sidebar-collapsible-list-item`,f),style:p,...m,children:[(0,z.jsxs)(`div`,{className:n(`lg-sidebar-collapsible-list-item__header`,c&&`lg-sidebar-collapsible-list-item__header--active`,s&&`lg-sidebar-collapsible-list-item__header--actions-visible`),role:`button`,tabIndex:0,"aria-expanded":r,"aria-label":r?d:u,onClick:()=>i?.(),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i?.())},children:[(0,z.jsxs)(`div`,{className:`lg-sidebar-collapsible-list-item__title-wrap`,children:[e&&(0,z.jsx)(`span`,{className:`lg-sidebar-collapsible-list-item__icon`,children:e}),(0,z.jsx)(U,{className:`lg-sidebar-collapsible-list-item__title`,children:t}),a===`title`&&g]}),a===`end`&&g,o!=null&&(0,z.jsx)(`div`,{className:`lg-sidebar-collapsible-list-item__actions`,onClick:e=>e.stopPropagation(),children:o})]}),(0,z.jsx)(G,{open:r,children:(0,z.jsx)(`div`,{className:`lg-sidebar-collapsible-list-item__body`,children:l})})]})});Y.displayName=`Sidebar.CollapsibleListItem`;var X=R.forwardRef(({avatar:e,name:t,nameSuffix:r,menuOpen:i=!1,showCaret:a=!1,nameTooltip:o=!0,onTriggerClick:s,className:c,style:l,onClick:u,onKeyDown:d,role:f,tabIndex:p,"aria-expanded":m,...h},g)=>(0,z.jsxs)(`div`,{ref:g,className:n(`lg-sidebar-footer__trigger`,i&&`lg-sidebar-footer__trigger--active`,c),style:l,role:f??`button`,tabIndex:p??0,"aria-expanded":m??i,...h,onClick:e=>{u?.(e),s?.(e.currentTarget.getBoundingClientRect())},onKeyDown:e=>{d?.(e),(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),e.currentTarget.click())},children:[e!=null&&(0,z.jsx)(`span`,{className:`lg-sidebar-footer__avatar`,children:e}),t!=null&&t!==``&&(0,z.jsxs)(`span`,{className:`lg-sidebar-footer__identity`,children:[o&&!i?(0,z.jsx)(U,{className:`lg-sidebar-footer__name`,children:t}):(0,z.jsx)(`span`,{className:`lg-sidebar-footer__name`,children:t}),r!=null&&(0,z.jsx)(`span`,{className:`lg-sidebar-footer__name-suffix`,children:r})]}),a&&(0,z.jsx)(`span`,{className:n(`lg-sidebar-footer__caret`,i&&`lg-sidebar-footer__caret--open`),"aria-hidden":!0,children:(0,z.jsx)(T,{size:16})})]}));X.displayName=`Sidebar.FooterUser`;var Z=R.forwardRef(({avatar:e,name:t,nameSuffix:r,menuOpen:i,showCaret:a,nameTooltip:o,onTriggerClick:s,actions:c,children:l,className:u,style:d,...f},p)=>(0,z.jsxs)(`div`,{ref:p,className:n(`lg-sidebar-footer`,u),style:d,...f,children:[l??(0,z.jsx)(X,{avatar:e,name:t,nameSuffix:r,menuOpen:i,showCaret:a,nameTooltip:o,onTriggerClick:s}),c!=null&&(0,z.jsx)(`div`,{className:`lg-sidebar-footer__actions`,children:c})]}));Z.displayName=`Sidebar.Footer`;var ve=R.forwardRef(({icon:e,children:t,className:r,style:i,...a},o)=>(0,z.jsxs)(`div`,{ref:o,className:n(`lg-sidebar-footer-menu__static-row`,r),style:i,...a,children:[e!=null&&(0,z.jsx)(`span`,{"aria-hidden":!0,children:e}),(0,z.jsx)(`span`,{children:t})]}));ve.displayName=`Sidebar.FooterMenuStaticRow`;var ye=R.forwardRef(({dot:e=!1,children:t,className:r,style:i,...a},o)=>(0,z.jsxs)(`span`,{ref:o,className:n(`lg-sidebar-footer__badge-wrap`,r),style:i,...a,children:[t,e&&(0,z.jsx)(`span`,{className:`lg-sidebar-footer__badge-dot`,"aria-hidden":!0})]}));ye.displayName=`Sidebar.FooterBadge`;var be=54;function xe(e,t){return t<=0?0:Math.min(100,Math.max(0,Math.round(e/t*100)))}function Se(e){return e>=100?`exhausted`:e>=85?`warning`:`normal`}var Ce=R.forwardRef(({used:e,total:t,formatNumber:r=e=>String(e),percentSuffix:i,remainingPrefix:a,ariaLabel:o,className:s,style:c,...l},u)=>{let d=xe(e,t),f=Math.round(d/100*be),p=Math.max(0,t-e),m=Se(d);return(0,z.jsxs)(`div`,{ref:u,className:n(`lg-sidebar-usage`,s),style:c,...l,children:[(0,z.jsx)(`div`,{className:n(`lg-sidebar-usage__bar`,`lg-sidebar-usage__bar--${m}`),role:`progressbar`,"aria-label":o,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":d,children:Array.from({length:be},(e,t)=>(0,z.jsx)(`div`,{className:n(`lg-sidebar-usage__segment`,t<f&&`lg-sidebar-usage__segment--filled`)},t))}),(0,z.jsxs)(`div`,{className:`lg-sidebar-usage__labels`,children:[(0,z.jsxs)(`span`,{className:`lg-sidebar-usage__used`,children:[(0,z.jsx)(`strong`,{children:r(e)}),(0,z.jsx)(`span`,{className:`lg-sidebar-usage__separator`,children:`/`}),(0,z.jsxs)(`span`,{className:`lg-sidebar-usage__total`,children:[r(t),i]})]}),(0,z.jsxs)(`span`,{className:`lg-sidebar-usage__remaining`,children:[a,(0,z.jsx)(`strong`,{children:r(p)})]})]})]})});Ce.displayName=`Sidebar.UsageBar`;var we=R.forwardRef(({title:e,loading:t=!1,children:r,className:i,style:a,...o},s)=>(0,z.jsxs)(`div`,{ref:s,className:n(`lg-sidebar-usage-panel`,i),style:a,...o,children:[e!=null&&(0,z.jsx)(`div`,{className:`lg-sidebar-usage-panel__header`,children:(0,z.jsx)(`span`,{className:`lg-sidebar-usage-panel__title`,children:e})}),t?(0,z.jsxs)(`div`,{className:`lg-sidebar-usage-panel__loading`,role:`status`,children:[(0,z.jsx)(`div`,{className:`lg-sidebar-usage-panel__skeleton`}),(0,z.jsx)(`div`,{className:n(`lg-sidebar-usage-panel__skeleton`,`lg-sidebar-usage-panel__skeleton--short`)})]}):(0,z.jsx)(`div`,{className:`lg-sidebar-usage-panel__body`,children:r})]}));we.displayName=`Sidebar.UsagePanel`;var Te=R.forwardRef(({title:e,extra:t,children:r,className:i,style:a,...o},s)=>(0,z.jsxs)(`div`,{ref:s,className:n(`lg-sidebar-usage-panel__section`,i),style:a,...o,children:[(0,z.jsxs)(`div`,{className:`lg-sidebar-usage-panel__section-header`,children:[(0,z.jsx)(`span`,{className:`lg-sidebar-usage-panel__section-title`,children:e}),t!=null&&(0,z.jsx)(`span`,{className:`lg-sidebar-usage-panel__section-extra`,children:t})]}),r]}));Te.displayName=`Sidebar.UsagePanelSection`;var Ee=R.forwardRef(({open:e,onClose:t,activeTab:r,onTabChange:i,submitTabLabel:a,historyTabLabel:o,historyUnread:s=!1,closeLabel:c,submitPanel:l,historyPanel:u,className:d,style:f},p)=>(0,z.jsx)(le,{open:e,onOpenChange:e=>{e||t()},closable:!1,modal:!0,footer:null,width:900,height:`calc(100vh - 160px)`,maxHeight:800,className:n(`lg-sidebar-feedback`,d),style:f,children:(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback__shell`,ref:p,children:[(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback__header`,children:[(0,z.jsx)(ae,{variant:`segmented`,activeKey:r,onChange:e=>i(e),items:[{key:`submit`,label:a},{key:`history`,label:(0,z.jsxs)(`span`,{className:`lg-sidebar-feedback__tab-label`,children:[o,s&&(0,z.jsx)(`span`,{className:`lg-sidebar-feedback__tab-dot`})]})}]}),(0,z.jsx)(j,{variant:`text`,size:`lg`,icon:(0,z.jsx)(k,{size:18}),"aria-label":c,onClick:t})]}),(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback__content`,children:[(0,z.jsx)(`div`,{className:`lg-sidebar-feedback__pane`,style:{display:r===`submit`?`flex`:`none`},children:l}),u!=null&&(0,z.jsx)(`div`,{className:`lg-sidebar-feedback__pane`,style:{display:r===`history`?`flex`:`none`},children:u})]})]})}));Ee.displayName=`Sidebar.FeedbackModal`;var De=R.forwardRef(({notice:e,children:t,footer:r,dragOver:i=!1,className:a,style:o,...s},c)=>(0,z.jsxs)(`div`,{className:n(`lg-sidebar-feedback-submit`,a),style:o,children:[(0,z.jsxs)(`div`,{ref:c,className:n(`lg-sidebar-feedback-submit__scroll`,i&&`lg-sidebar-feedback-submit__scroll--drag-over`),...s,children:[e,t]}),r!=null&&(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-submit__footer`,children:r})]}));De.displayName=`Sidebar.FeedbackSubmitPanel`;var Oe=R.forwardRef(({label:e,required:t=!1,labelExtra:r,hint:i,children:a,className:o,style:s,...c},l)=>(0,z.jsxs)(`div`,{ref:l,className:n(`lg-sidebar-feedback-field`,o),style:s,...c,children:[(e!=null||r!=null)&&(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-field__label-row`,children:[e!=null&&(0,z.jsxs)(`label`,{className:`lg-sidebar-feedback-field__label`,children:[e,t&&(0,z.jsx)(`span`,{className:`lg-sidebar-feedback-field__required`,children:`*`})]}),r]}),a,i!=null&&(0,z.jsx)(`p`,{className:`lg-sidebar-feedback-field__hint`,children:i})]}));Oe.displayName=`Sidebar.FeedbackField`;function ke(e){return e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:`${(e/1024/1024).toFixed(1)} MB`}var Ae=R.forwardRef(({items:e,onRemove:t,onPreview:r,capturing:i=!1,capturingText:a,addSlot:o,formatSize:s=ke,className:c,style:l,...u},d)=>(0,z.jsxs)(`div`,{ref:d,className:n(`lg-sidebar-feedback-wall`,c),style:l,...u,children:[i&&(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-wall__capturing`,children:[(0,z.jsx)(L,{size:`sm`}),a!=null&&(0,z.jsx)(`span`,{className:`lg-sidebar-feedback-wall__capturing-text`,children:a})]}),e.map(e=>e.kind===`image`?(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-wall__image`,children:[(0,z.jsx)(`img`,{src:e.url,alt:e.name,draggable:!1,onClick:()=>r?.(e.uid)}),(0,z.jsx)(`span`,{className:`lg-sidebar-feedback-wall__remove`,role:`button`,tabIndex:0,onClick:n=>{n.stopPropagation(),t?.(e.uid)},onKeyDown:n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),n.stopPropagation(),t?.(e.uid))},children:(0,z.jsx)(k,{size:10})})]},e.uid):(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-wall__file`,children:[(0,z.jsx)(`span`,{className:`lg-sidebar-feedback-wall__remove`,role:`button`,tabIndex:0,onClick:()=>t?.(e.uid),onKeyDown:n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),t?.(e.uid))},children:(0,z.jsx)(k,{size:8})}),e.iconUrl&&(0,z.jsx)(`img`,{src:e.iconUrl,alt:``,className:`lg-sidebar-feedback-wall__file-icon`,draggable:!1}),(0,z.jsx)(`span`,{className:`lg-sidebar-feedback-wall__file-name`,title:e.name,children:e.name}),typeof e.size==`number`&&(0,z.jsx)(`span`,{className:`lg-sidebar-feedback-wall__file-size`,children:s(e.size)})]},e.uid)),o]}));Ae.displayName=`Sidebar.FeedbackFileWall`;var je=R.forwardRef(({toolbar:e,list:t,detail:r,listRef:i,className:a,style:o,...s},c)=>(0,z.jsxs)(`div`,{ref:c,className:n(`lg-sidebar-feedback-history`,a),style:o,...s,children:[(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-history__list-pane`,children:[e!=null&&(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-history__toolbar`,children:e}),(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-history__list`,ref:i,children:t})]}),(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-history__divider`}),(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-history__detail-pane`,children:r})]}));je.displayName=`Sidebar.FeedbackHistoryPanel`;var Me=R.forwardRef(({item:e,selected:t=!1,onSelect:r,statusLabel:i,meta:a,unreadLabel:o,className:s,style:c,...l},u)=>{let d=e.status===`replied`,f=d&&e.replyRead===!1;return(0,z.jsxs)(`button`,{ref:u,type:`button`,className:n(`lg-sidebar-feedback-history__card`,t&&`lg-sidebar-feedback-history__card--active`,s),style:c,onClick:r,...l,children:[(0,z.jsxs)(`span`,{className:`lg-sidebar-feedback-history__card-top`,children:[(0,z.jsx)(`span`,{className:n(`lg-sidebar-feedback-history__status`,d?`lg-sidebar-feedback-history__status--replied`:`lg-sidebar-feedback-history__status--pending`),children:i}),f&&(0,z.jsx)(`span`,{className:`lg-sidebar-feedback-history__unread-dot`,"aria-label":o})]}),(0,z.jsx)(`span`,{className:`lg-sidebar-feedback-history__title`,children:e.title}),a!=null&&(0,z.jsx)(`span`,{className:`lg-sidebar-feedback-history__meta`,children:a})]})});Me.displayName=`Sidebar.FeedbackHistoryItem`;var Ne=R.forwardRef(({title:e,meta:t,description:r,attachments:i,attachmentsLabel:a,notice:o,reply:s,similar:c,className:l,style:u,...d},f)=>(0,z.jsxs)(`div`,{ref:f,className:n(`lg-sidebar-feedback-detail`,l),style:u,...d,children:[(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-detail__header`,children:[(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-detail__title`,children:e}),t!=null&&(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-detail__meta`,children:t})]}),(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-detail__section`,children:[r!=null&&(0,z.jsx)(`p`,{className:`lg-sidebar-feedback-detail__desc`,children:r}),i!=null&&(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-detail__field`,children:[a!=null&&(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-detail__field-label`,children:a}),i]}),o!=null&&(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-detail__notice`,children:[(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-detail__notice-title`,children:o.title}),(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-detail__notice-desc`,children:o.description})]})]}),s!=null&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-detail__divider`}),(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-detail__section`,children:s})]}),c!=null&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-detail__divider`}),(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-detail__section`,children:c})]})]}));Ne.displayName=`Sidebar.FeedbackDetail`;var Pe=R.forwardRef(({items:e,onPreviewImage:t,onDownload:r,resolveIcon:i,formatSize:a=ke,className:o,style:s,...c},l)=>{let u=e.filter(e=>e.isImage&&e.url).map(e=>e.url);return(0,z.jsx)(`div`,{ref:l,className:n(`lg-sidebar-feedback-attach`,o),style:s,...c,children:e.map((e,n)=>e.isImage&&e.url?(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-attach__image`,role:`button`,tabIndex:0,onClick:()=>t?.(u,Math.max(0,u.indexOf(e.url))),onKeyDown:n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),t?.(u,Math.max(0,u.indexOf(e.url))))},children:(0,z.jsx)(`img`,{src:e.url,alt:e.name})},`${e.name}-${n}`):(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-attach__file`,role:e.url?`button`:void 0,tabIndex:e.url?0:void 0,title:e.name,onClick:e.url?()=>r?.(e):void 0,onKeyDown:e.url?t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),r?.(e))}:void 0,children:[i?.(e)&&(0,z.jsx)(`img`,{src:i(e),alt:``,className:`lg-sidebar-feedback-attach__file-icon`}),(0,z.jsx)(`span`,{className:`lg-sidebar-feedback-attach__file-name`,children:e.name}),(0,z.jsx)(`span`,{className:`lg-sidebar-feedback-attach__file-size`,children:typeof e.size==`number`?a(e.size):``})]},`${e.name}-${n}`))})});Pe.displayName=`Sidebar.FeedbackAttachmentRow`;var Fe=R.forwardRef(({item:e,expanded:t,onExpandedChange:r,onVote:i,voteLabel:a,attachments:o,attachmentsLabel:s,className:c,style:l,...u},f)=>{let p=t!==void 0,[m,h]=(0,R.useState)(!!e.description),g=p?t:m,_=!!e.description||(e.attachments?.length??0)>0,v=()=>{if(!_)return;let e=!g;p||h(e),r?.(e)};return(0,z.jsxs)(`div`,{ref:f,className:n(`lg-sidebar-feedback-similar`,c),style:l,...u,children:[(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-similar__head`,role:_?`button`:void 0,tabIndex:_?0:void 0,"aria-expanded":_?g:void 0,onClick:v,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),v())},children:[(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-similar__title`,children:[_&&(0,z.jsx)(d,{size:16,className:n(`lg-sidebar-feedback-similar__caret`,g&&`lg-sidebar-feedback-similar__caret--open`)}),(0,z.jsx)(`span`,{children:e.title})]}),(0,z.jsxs)(`button`,{type:`button`,className:n(`lg-sidebar-feedback-similar__vote`,e.voted&&`lg-sidebar-feedback-similar__vote--active`),onClick:t=>{t.stopPropagation(),e.voted||i?.()},children:[(0,z.jsx)(`span`,{children:a}),(0,z.jsx)(`span`,{children:e.voteCount})]})]}),g&&_&&(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-similar__body`,children:[e.description&&(0,z.jsx)(`p`,{className:`lg-sidebar-feedback-similar__desc`,children:e.description}),o!=null&&(0,z.jsxs)(z.Fragment,{children:[s!=null&&(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-detail__field-label`,children:s}),o]})]})]})});Fe.displayName=`Sidebar.FeedbackSimilarItem`;var Ie=R.forwardRef(({src:e,alt:t,token:r,headers:i,onLoaded:a,onImageClick:o,className:s,style:c,...l},u)=>{let[d,f]=(0,R.useState)(),[p,m]=(0,R.useState)(!1),[h,g]=(0,R.useState)(!1),_=(0,R.useRef)(void 0),v=(0,R.useRef)(a);v.current=a,(0,R.useEffect)(()=>{if(!e){f(void 0);return}let t=!1;return m(!0),g(!1),(async()=>{try{let n=await fetch(e,{headers:{...r?{Authorization:`Bearer ${r}`}:{},...i}});if(t)return;if(!n.ok){g(!0);return}let a=await n.blob();if(t)return;_.current&&URL.revokeObjectURL(_.current);let o=URL.createObjectURL(a);_.current=o,f(o),v.current?.(o)}catch{t||g(!0)}finally{t||m(!1)}})(),()=>{t=!0}},[e,r,i]),(0,R.useEffect)(()=>()=>{_.current&&URL.revokeObjectURL(_.current)},[]);let y=(0,R.useCallback)(()=>{d&&o?.(d)},[d,o]);return p?(0,z.jsx)(`span`,{className:n(`lg-sidebar-auth-image__placeholder`,s),children:(0,z.jsx)(L,{size:`sm`})}):h||!d?(0,z.jsx)(`img`,{ref:u,alt:t,className:s,style:c,...l}):(0,z.jsx)(`img`,{ref:u,src:d,alt:t,className:s,style:c,onClick:y,...l})});Ie.displayName=`Sidebar.AuthImage`;var Q={Root:B,Header:V,TabBar:H,NavItem:W,CollapsibleNavItem:K,GroupHeader:q,ListItem:J,CollapsibleListItem:Y,Footer:Z,FooterUser:X,FooterMenuStaticRow:ve,FooterBadge:ye,UsageBar:Ce,UsagePanel:we,UsagePanelSection:Te,FeedbackModal:Ee,FeedbackSubmitPanel:De,FeedbackField:Oe,FeedbackFileWall:Ae,FeedbackHistoryPanel:je,FeedbackHistoryItem:Me,FeedbackDetail:Ne,FeedbackAttachmentRow:Pe,FeedbackSimilarItem:Fe,AuthImage:Ie};function Le(){let[e,t]=(0,R.useState)(`work`),[n,i]=(0,R.useState)(`new-task`);return(0,z.jsxs)(Q.Root,{style:{height:320,borderRadius:12,paddingTop:10},children:[(0,z.jsx)(Q.TabBar,{items:[{key:`work`,label:`工作`,icon:(0,z.jsx)(y,{size:20})},{key:`manage`,label:`管理`,icon:(0,z.jsx)(_,{size:20})}],activeKey:e,onChange:t}),(0,z.jsx)(r,{className:`lg-sidebar__scroll`,children:(0,z.jsxs)(`div`,{className:`lg-sidebar__section`,children:[(0,z.jsx)(Q.NavItem,{icon:(0,z.jsx)(g,{size:18}),label:`新任务`,active:n===`new-task`,onClick:()=>i(`new-task`)}),(0,z.jsx)(Q.NavItem,{icon:(0,z.jsx)(S,{size:18}),label:`定时任务`,active:n===`scheduled`,onClick:()=>i(`scheduled`)}),(0,z.jsx)(Q.NavItem,{icon:(0,z.jsx)(C,{size:18}),label:`智能体`,active:n===`agent`,onClick:()=>i(`agent`)})]})})]})}var Re=`import { useState } from "react";
import { Sidebar, ScrollArea } from "lingee-ui";
import { List, Enterprise, NewChat, AlarmClock, Agent } from "lingee-icon";

export default function BasicDemo() {
  const [tab, setTab] = useState("work");
  const [active, setActive] = useState("new-task");

  return (
    <Sidebar.Root style={{ height: 320, borderRadius: 12, paddingTop: 10 }}>
      <Sidebar.TabBar
        items={[
          { key: "work", label: "工作", icon: <List size={20} /> },
          { key: "manage", label: "管理", icon: <Enterprise size={20} /> },
        ]}
        activeKey={tab}
        onChange={setTab}
      />

      <ScrollArea className="lg-sidebar__scroll">
        {/* 区块内缩用 lg-sidebar__section，无需自行写 padding */}
        <div className="lg-sidebar__section">
          <Sidebar.NavItem
            icon={<NewChat size={18} />}
            label="新任务"
            active={active === "new-task"}
            onClick={() => setActive("new-task")}
          />
          <Sidebar.NavItem
            icon={<AlarmClock size={18} />}
            label="定时任务"
            active={active === "scheduled"}
            onClick={() => setActive("scheduled")}
          />
          <Sidebar.NavItem
            icon={<Agent size={18} />}
            label="智能体"
            active={active === "agent"}
            onClick={() => setActive("agent")}
          />
        </div>
      </ScrollArea>
    </Sidebar.Root>
  );
}
`;function ze(){let[e,t]=(0,R.useState)(`new-task`),[n,r]=(0,R.useState)(!0),[i,a]=(0,R.useState)(`ceo-summary`);return(0,z.jsx)(Q.Root,{width:264,style:{height:`auto`,borderRadius:12},children:(0,z.jsxs)(`div`,{className:`lg-sidebar__section`,style:{paddingBottom:8},children:[(0,z.jsx)(Q.NavItem,{icon:(0,z.jsx)(g,{size:18}),label:`新任务`,active:e===`new-task`,onClick:()=>t(`new-task`)}),(0,z.jsx)(Q.NavItem,{icon:(0,z.jsx)(o,{size:18}),label:`技能`,active:e===`skills`,onClick:()=>t(`skills`)}),(0,z.jsx)(Q.NavItem,{icon:(0,z.jsx)(p,{size:18}),label:`分析`,badge:`新`,active:e===`abi`,onClick:()=>t(`abi`)}),(0,z.jsx)(Q.NavItem,{icon:(0,z.jsx)(o,{size:18}),label:`暂不可用`,disabled:!0}),(0,z.jsx)(Q.CollapsibleNavItem,{icon:(0,z.jsx)(_,{size:18}),label:`CEO 助理`,open:n,onOpenChange:r,onLabelClick:()=>a(`ceo-home`),active:i.startsWith(`ceo`),expandLabel:`展开`,collapseLabel:`收起`,items:[{key:`ceo-summary`,label:`今日摘要`,active:i===`ceo-summary`,onClick:()=>a(`ceo-summary`)},{key:`ceo-decision`,label:`决策支持`,active:i===`ceo-decision`,onClick:()=>a(`ceo-decision`)}]})]})})}var Be=`import { useState } from "react";
import { Sidebar } from "lingee-ui";
import { NewChat, Plugin, Index, Enterprise } from "lingee-icon";

export default function NavItemsDemo() {
  const [active, setActive] = useState("new-task");
  const [ceoOpen, setCeoOpen] = useState(true);
  const [activeChild, setActiveChild] = useState("ceo-summary");

  return (
    // 用 Sidebar.Root 而非裸 div：底色、宽度、组件级 Token 均由 Root 提供，
    // 贴合真实使用形态。height auto 让容器随内容收缩，避免示例区大片留白
    <Sidebar.Root width={264} style={{ height: "auto", borderRadius: 12 }}>
      <div className="lg-sidebar__section" style={{ paddingBottom: 8 }}>
        {/* 单层导航项 */}
        <Sidebar.NavItem
          icon={<NewChat size={18} />}
          label="新任务"
          active={active === "new-task"}
          onClick={() => setActive("new-task")}
        />
        <Sidebar.NavItem
          icon={<Plugin size={18} />}
          label="技能"
          active={active === "skills"}
          onClick={() => setActive("skills")}
        />
        {/* 带徽章：传纯文本即可获得药丸样式 */}
        <Sidebar.NavItem
          icon={<Index size={18} />}
          label="分析"
          badge="新"
          active={active === "abi"}
          onClick={() => setActive("abi")}
        />
        {/* 禁用态 */}
        <Sidebar.NavItem icon={<Plugin size={18} />} label="暂不可用" disabled />

        {/* 可折叠分组：标签区与箭头区分离命中 */}
        <Sidebar.CollapsibleNavItem
          icon={<Enterprise size={18} />}
          label="CEO 助理"
          open={ceoOpen}
          onOpenChange={setCeoOpen}
          onLabelClick={() => setActiveChild("ceo-home")}
          active={activeChild.startsWith("ceo")}
          expandLabel="展开"
          collapseLabel="收起"
          items={[
            {
              key: "ceo-summary",
              label: "今日摘要",
              active: activeChild === "ceo-summary",
              onClick: () => setActiveChild("ceo-summary"),
            },
            {
              key: "ceo-decision",
              label: "决策支持",
              active: activeChild === "ceo-decision",
              onClick: () => setActiveChild("ceo-decision"),
            },
          ]}
        />
      </div>
    </Sidebar.Root>
  );
}
`;function $(){return(0,z.jsxs)(I,{modal:!1,children:[(0,z.jsx)(M,{children:(0,z.jsx)(j,{variant:`text`,size:`sm`,icon:(0,z.jsx)(h,{size:16})})}),(0,z.jsxs)(N,{side:`bottom`,align:`start`,sideOffset:4,children:[(0,z.jsx)(P,{icon:(0,z.jsx)(c,{size:16}),children:`置顶`}),(0,z.jsx)(P,{icon:(0,z.jsx)(v,{size:16}),children:`重命名`}),(0,z.jsx)(P,{icon:(0,z.jsx)(re,{size:16}),danger:!0,children:`删除`})]})]})}function Ve(){let[e,t]=(0,R.useState)(`s1`),[n,r]=(0,R.useState)(!0);return(0,z.jsx)(Q.Root,{width:264,style:{height:`auto`,borderRadius:12},children:(0,z.jsxs)(`div`,{className:`lg-sidebar__section`,style:{paddingBottom:8},children:[(0,z.jsx)(Q.GroupHeader,{title:`置顶`,collapsible:!0,expanded:n,onToggle:()=>r(e=>!e),actions:(0,z.jsx)(j,{variant:`text`,size:`sm`,icon:(0,z.jsx)(v,{size:16})})}),n&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Q.ListItem,{title:`季度经营分析报告`,active:e===`s1`,indicator:`running`,prefix:(0,z.jsx)(c,{size:12}),onSelect:()=>t(`s1`),menu:(0,z.jsx)($,{})}),(0,z.jsx)(Q.ListItem,{title:`需要补充信息的会话`,active:e===`s2`,indicator:`clarification`,onSelect:()=>t(`s2`),menu:(0,z.jsx)($,{})}),(0,z.jsx)(Q.ListItem,{title:`已完成但未查看`,active:e===`s3`,indicator:`unread`,onSelect:()=>t(`s3`),menu:(0,z.jsx)($,{})}),(0,z.jsx)(Q.ListItem,{title:`标题很长很长很长很长的会话会被截断并在悬停时显示完整内容`,active:e===`s4`,onSelect:()=>t(`s4`),menu:(0,z.jsx)($,{})})]})]})})}var He=`import { useState } from "react";
import {
  Sidebar,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "lingee-ui";
import { Threedots, Fixed, SquareEdit, Trash } from "lingee-icon";

/** 会话行的「更多」菜单，以插槽形式传入 ListItem */
function SessionMenu() {
  return (
    <Dropdown modal={false}>
      <DropdownTrigger>
        <Button variant="text" size="sm" icon={<Threedots size={16} />} />
      </DropdownTrigger>
      <DropdownContent side="bottom" align="start" sideOffset={4}>
        <DropdownItem icon={<Fixed size={16} />}>置顶</DropdownItem>
        <DropdownItem icon={<SquareEdit size={16} />}>重命名</DropdownItem>
        <DropdownItem icon={<Trash size={16} />} danger>
          删除
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}

export default function ListItemsDemo() {
  const [selected, setSelected] = useState("s1");
  const [pinnedOpen, setPinnedOpen] = useState(true);

  return (
    <Sidebar.Root width={264} style={{ height: "auto", borderRadius: 12 }}>
      <div className="lg-sidebar__section" style={{ paddingBottom: 8 }}>
        <Sidebar.GroupHeader
          title="置顶"
          collapsible
          expanded={pinnedOpen}
          onToggle={() => setPinnedOpen((v) => !v)}
          actions={
            <Button variant="text" size="sm" icon={<SquareEdit size={16} />} />
          }
        />

        {pinnedOpen && (
          <>
            <Sidebar.ListItem
              title="季度经营分析报告"
              active={selected === "s1"}
              indicator="running"
              prefix={<Fixed size={12} />}
              onSelect={() => setSelected("s1")}
              menu={<SessionMenu />}
            />
            <Sidebar.ListItem
              title="需要补充信息的会话"
              active={selected === "s2"}
              indicator="clarification"
              onSelect={() => setSelected("s2")}
              menu={<SessionMenu />}
            />
            <Sidebar.ListItem
              title="已完成但未查看"
              active={selected === "s3"}
              indicator="unread"
              onSelect={() => setSelected("s3")}
              menu={<SessionMenu />}
            />
            <Sidebar.ListItem
              title="标题很长很长很长很长的会话会被截断并在悬停时显示完整内容"
              active={selected === "s4"}
              onSelect={() => setSelected("s4")}
              menu={<SessionMenu />}
            />
          </>
        )}
      </div>
    </Sidebar.Root>
  );
}
`;function Ue(){let[e,t]=(0,R.useState)(!0),[n,r]=(0,R.useState)(!1),[i,a]=(0,R.useState)(!1),[o,s]=(0,R.useState)(`f1`);return(0,z.jsx)(Q.Root,{width:264,style:{height:`auto`,borderRadius:12},children:(0,z.jsxs)(`div`,{className:`lg-sidebar__section`,style:{paddingBottom:8},children:[(0,z.jsxs)(Q.CollapsibleListItem,{icon:e?(0,z.jsx)(x,{size:16}):(0,z.jsx)(D,{size:16}),title:`经营分析`,expanded:e,onToggle:()=>t(e=>!e),actions:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(j,{variant:`text`,size:`sm`,icon:(0,z.jsx)(O,{size:16})}),(0,z.jsx)(j,{variant:`text`,size:`sm`,icon:(0,z.jsx)(h,{size:16})})]}),children:[(0,z.jsx)(Q.ListItem,{title:`上半年营收拆解`,active:o===`f1`,onSelect:()=>s(`f1`)}),(0,z.jsx)(Q.ListItem,{title:`成本结构对比`,active:o===`f2`,onSelect:()=>s(`f2`)})]}),(0,z.jsx)(Q.CollapsibleListItem,{icon:n?(0,z.jsx)(x,{size:16}):(0,z.jsx)(D,{size:16}),title:`空分组`,expanded:n,onToggle:()=>r(e=>!e),actions:(0,z.jsx)(j,{variant:`text`,size:`sm`,icon:(0,z.jsx)(O,{size:16})}),children:(0,z.jsx)(E.Card,{status:`empty`,description:`暂无对话`})}),(0,z.jsxs)(Q.CollapsibleListItem,{icon:(0,z.jsx)(S,{size:16}),title:`每日经营简报`,expanded:i,caretPlacement:`end`,onToggle:()=>a(e=>!e),children:[(0,z.jsx)(Q.ListItem,{title:`2026-08-11 09:00`,onSelect:()=>void 0}),(0,z.jsx)(Q.ListItem,{title:`2026-08-10 09:00`,onSelect:()=>void 0})]})]})})}var We=`import { useState } from "react";
import { Sidebar, Button, Empty } from "lingee-ui";
import {
  FolderOpen,
  FolderUnwrap,
  Plus,
  Threedots,
  AlarmClock,
} from "lingee-icon";

export default function CollapsibleListDemo() {
  const [folderOpen, setFolderOpen] = useState(true);
  const [emptyFolderOpen, setEmptyFolderOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(false);
  const [selected, setSelected] = useState("f1");

  return (
    <Sidebar.Root width={264} style={{ height: "auto", borderRadius: 12 }}>
      <div className="lg-sidebar__section" style={{ paddingBottom: 8 }}>
        {/* 文件夹节点：图标随展开态切换，操作区悬停显现 */}
        <Sidebar.CollapsibleListItem
          icon={
            folderOpen ? <FolderUnwrap size={16} /> : <FolderOpen size={16} />
          }
          title="经营分析"
          expanded={folderOpen}
          onToggle={() => setFolderOpen((v) => !v)}
          actions={
            <>
              <Button variant="text" size="sm" icon={<Plus size={16} />} />
              <Button variant="text" size="sm" icon={<Threedots size={16} />} />
            </>
          }
        >
          <Sidebar.ListItem
            title="上半年营收拆解"
            active={selected === "f1"}
            onSelect={() => setSelected("f1")}
          />
          <Sidebar.ListItem
            title="成本结构对比"
            active={selected === "f2"}
            onSelect={() => setSelected("f2")}
          />
        </Sidebar.CollapsibleListItem>

        {/* 空文件夹：展开区放 Empty.Card */}
        <Sidebar.CollapsibleListItem
          icon={
            emptyFolderOpen ? (
              <FolderUnwrap size={16} />
            ) : (
              <FolderOpen size={16} />
            )
          }
          title="空分组"
          expanded={emptyFolderOpen}
          onToggle={() => setEmptyFolderOpen((v) => !v)}
          actions={<Button variant="text" size="sm" icon={<Plus size={16} />} />}
        >
          <Empty.Card status="empty" description="暂无对话" />
        </Sidebar.CollapsibleListItem>

        {/* 定时任务分组：与文件夹共用同一组件，箭头改为恒在行尾 */}
        <Sidebar.CollapsibleListItem
          icon={<AlarmClock size={16} />}
          title="每日经营简报"
          expanded={taskOpen}
          caretPlacement="end"
          onToggle={() => setTaskOpen((v) => !v)}
        >
          <Sidebar.ListItem title="2026-08-11 09:00" onSelect={() => undefined} />
          <Sidebar.ListItem title="2026-08-10 09:00" onSelect={() => undefined} />
        </Sidebar.CollapsibleListItem>
      </div>
    </Sidebar.Root>
  );
}
`,Ge=[{id:`1`,title:`登录后偶发白屏`,status:`replied`,replyRead:!1},{id:`2`,title:`导出报表缺少表头`,status:`pending`},{id:`3`,title:`定时任务未按时触发`,status:`replied`,replyRead:!0}];function Ke(){let[e,t]=(0,R.useState)(!1),[n,r]=(0,R.useState)(`submit`),[i,a]=(0,R.useState)(!1),[o,s]=(0,R.useState)(``),[c,l]=(0,R.useState)(!0),[u,d]=(0,R.useState)([]),[f,p]=(0,R.useState)(`1`),m=(0,R.useMemo)(()=>u.map(e=>{let t=(e.type??``).startsWith(`image/`);return{uid:e.uid,kind:t?`image`:`attachment`,name:e.name,size:e.size,url:t&&e.originFile?URL.createObjectURL(e.originFile):void 0}}),[u]),h=(0,z.jsxs)(Q.FeedbackSubmitPanel,{notice:(0,z.jsx)(w,{type:`info`,closable:!1,style:{marginBottom:20},children:`将同时提交当前会话信息，便于定位问题`}),footer:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(j,{variant:`text`,size:`lg`,onClick:()=>t(!1),children:`取消`}),(0,z.jsx)(j,{variant:`primary`,size:`lg`,disabled:!o.trim(),children:`提交`})]}),children:[(0,z.jsx)(Q.FeedbackField,{label:`问题描述`,required:!0,children:(0,z.jsx)(se,{value:o,onChange:e=>s(e.target.value),placeholder:`请描述遇到的问题`,maxLength:500,showCount:!0,rows:4})}),(0,z.jsx)(Q.FeedbackField,{label:`截图与附件`,hint:`图片限 jpg/png/gif，单个文件不超过 5MB，最多 5 个`,labelExtra:m.length>=3?(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-wall-arrows`,children:[(0,z.jsx)(`button`,{type:`button`,className:`lg-sidebar-feedback-wall-arrows__btn`,children:(0,z.jsx)(ee,{size:14})}),(0,z.jsx)(`button`,{type:`button`,className:`lg-sidebar-feedback-wall-arrows__btn`,children:(0,z.jsx)(te,{size:14})})]}):void 0,children:(0,z.jsx)(he.PreviewGroup,{children:(0,z.jsx)(Q.FeedbackFileWall,{items:m,onRemove:e=>d(t=>t.filter(t=>t.uid!==e)),addSlot:m.length<5?(0,z.jsx)(ge,{fileList:u,onChange:d,multiple:!0,accept:`.jpg,.jpeg,.png,.gif,.pdf,.txt`,validateAccept:!0,pasteable:!0,maxCount:5,maxSize:5242880,showFileList:!1,children:(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-wall__add`,children:[(0,z.jsx)(b,{size:24}),(0,z.jsx)(`span`,{className:`lg-sidebar-feedback-wall__add-text`,children:`点击添加，或拖拽 / 粘贴图片到此区域`})]})}):void 0})})}),(0,z.jsx)(Q.FeedbackField,{label:`联系邮箱`,children:(0,z.jsx)(oe,{placeholder:`请输入联系邮箱`,style:{height:40,borderRadius:10}})}),(0,z.jsx)(`div`,{style:{margin:`20px 0 16px`},children:(0,z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,cursor:`pointer`},onClick:()=>l(e=>!e),children:[(0,z.jsx)(me,{checked:c}),(0,z.jsx)(`span`,{style:{fontSize:14},children:`允许读取您当前的对话信息`})]})})]}),g=(0,z.jsx)(Q.FeedbackDetail,{title:`反馈描述`,meta:`提交于 2026-08-10 14:20`,description:`登录成功后偶发白屏，刷新可恢复。`,attachmentsLabel:`附件`,attachments:(0,z.jsx)(Q.FeedbackAttachmentRow,{items:[{name:`log.txt`,url:`/log.txt`,size:4096}]}),notice:{title:`已允许读取对话信息`,description:`内容仅用于定位问题，将严格保密。`},reply:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-detail__section-title-row`,children:[(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-detail__section-title`,children:`官方回复`}),(0,z.jsx)(`span`,{className:`lg-sidebar-feedback-detail__new-tag`,children:`新回复`})]}),(0,z.jsxs)(`div`,{className:`lg-sidebar-feedback-detail__field`,children:[(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-detail__field-label`,children:`答复内容`}),(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-detail__reply-box`,children:`已在 1.2.3 版本修复，请更新后重试。`})]})]}),similar:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-detail__section-title`,children:`相似问题（1）`}),(0,z.jsx)(`p`,{className:`lg-sidebar-feedback-similar-tip`,children:`如果与你的问题相同，可点击赞同帮助我们优先处理`}),(0,z.jsx)(`div`,{className:`lg-sidebar-feedback-similar-list`,children:(0,z.jsx)(Q.FeedbackSimilarItem,{item:{id:`s1`,title:`切换租户后页面空白`,description:`与本问题同源，均为路由守卫时序导致。`,voteCount:12},voteLabel:`赞同`})})]})}),_=(0,z.jsx)(Q.FeedbackHistoryPanel,{toolbar:(0,z.jsx)(oe,{placeholder:`搜索反馈`,style:{flex:1}}),list:Ge.map(e=>(0,z.jsx)(Q.FeedbackHistoryItem,{item:e,selected:e.id===f,onSelect:()=>p(e.id),statusLabel:e.status===`replied`?`已回复`:`待处理`,meta:`更新于 2026-08-11 09:30`,unreadLabel:`有未读回复`},e.id)),detail:f?g:(0,z.jsx)(E,{size:`md`,icon:ne,description:`请选择一条反馈`})});return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(j,{onClick:()=>t(!0),children:`打开反馈弹窗`}),(0,z.jsx)(Q.FeedbackModal,{open:e,onClose:()=>t(!1),activeTab:n,onTabChange:e=>{r(e),e===`history`&&a(!0)},submitTabLabel:`提交反馈`,historyTabLabel:`反馈历史`,historyUnread:!0,closeLabel:`关闭`,submitPanel:h,historyPanel:i?_:void 0})]})}var qe=`import { useMemo, useState } from "react";
import {
  Sidebar,
  Button,
  Alert,
  Input,
  Textarea,
  Checkbox,
  Upload,
  Image,
  Empty,
} from "lingee-ui";
import type { UploadFile, FeedbackFileWallItem } from "lingee-ui";
import { Upload as UploadIcon, ChevronLeft, ChevronRight, DocumentLibrary } from "lingee-icon";

const HISTORY = [
  { id: "1", title: "登录后偶发白屏", status: "replied" as const, replyRead: false },
  { id: "2", title: "导出报表缺少表头", status: "pending" as const },
  { id: "3", title: "定时任务未按时触发", status: "replied" as const, replyRead: true },
];

export default function FeedbackModalDemo() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"submit" | "history">("submit");
  // 历史面板首次切到后才挂载，避免弹窗一打开就发请求
  const [historyVisited, setHistoryVisited] = useState(false);

  const [content, setContent] = useState("");
  const [allowSessionView, setAllowSessionView] = useState(true);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [selectedId, setSelectedId] = useState("1");

  // UploadFile → 文件墙条目：图片取 blob 预览地址，附件给图标
  const wallItems = useMemo<FeedbackFileWallItem[]>(
    () =>
      fileList.map((f) => {
        const isImage = (f.type ?? "").startsWith("image/");
        return {
          uid: f.uid,
          kind: isImage ? "image" : "attachment",
          name: f.name,
          size: f.size,
          url: isImage && f.originFile ? URL.createObjectURL(f.originFile) : undefined,
        };
      }),
    [fileList],
  );

  const submitPanel = (
    <Sidebar.FeedbackSubmitPanel
      notice={
        <Alert type="info" closable={false} style={{ marginBottom: 20 }}>
          将同时提交当前会话信息，便于定位问题
        </Alert>
      }
      footer={
        <>
          <Button variant="text" size="lg" onClick={() => setOpen(false)}>
            取消
          </Button>
          <Button variant="primary" size="lg" disabled={!content.trim()}>
            提交
          </Button>
        </>
      }
    >
      <Sidebar.FeedbackField label="问题描述" required>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="请描述遇到的问题"
          maxLength={500}
          showCount
          rows={4}
        />
      </Sidebar.FeedbackField>

      <Sidebar.FeedbackField
        label="截图与附件"
        hint="图片限 jpg/png/gif，单个文件不超过 5MB，最多 5 个"
        labelExtra={
          wallItems.length >= 3 ? (
            <div className="lg-sidebar-feedback-wall-arrows">
              <button type="button" className="lg-sidebar-feedback-wall-arrows__btn">
                <ChevronLeft size={14} />
              </button>
              <button type="button" className="lg-sidebar-feedback-wall-arrows__btn">
                <ChevronRight size={14} />
              </button>
            </div>
          ) : undefined
        }
      >
        <Image.PreviewGroup>
          <Sidebar.FeedbackFileWall
            items={wallItems}
            onRemove={(uid) =>
              setFileList((prev) => prev.filter((f) => f.uid !== uid))
            }
            addSlot={
              wallItems.length < 5 ? (
                // 仅收集不上传：文件随表单一次性提交
                <Upload
                  fileList={fileList}
                  onChange={setFileList}
                  multiple
                  accept=".jpg,.jpeg,.png,.gif,.pdf,.txt"
                  validateAccept
                  pasteable
                  maxCount={5}
                  maxSize={5 * 1024 * 1024}
                  showFileList={false}
                >
                  <div className="lg-sidebar-feedback-wall__add">
                    <UploadIcon size={24} />
                    <span className="lg-sidebar-feedback-wall__add-text">
                      点击添加，或拖拽 / 粘贴图片到此区域
                    </span>
                  </div>
                </Upload>
              ) : undefined
            }
          />
        </Image.PreviewGroup>
      </Sidebar.FeedbackField>

      <Sidebar.FeedbackField label="联系邮箱">
        <Input placeholder="请输入联系邮箱" style={{ height: 40, borderRadius: 10 }} />
      </Sidebar.FeedbackField>

      <div style={{ margin: "20px 0 16px" }}>
        <div
          style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}
          onClick={() => setAllowSessionView((v) => !v)}
        >
          <Checkbox checked={allowSessionView} />
          <span style={{ fontSize: 14 }}>允许读取您当前的对话信息</span>
        </div>
      </div>
    </Sidebar.FeedbackSubmitPanel>
  );

  const detail = (
    <Sidebar.FeedbackDetail
      title="反馈描述"
      meta="提交于 2026-08-10 14:20"
      description="登录成功后偶发白屏，刷新可恢复。"
      attachmentsLabel="附件"
      attachments={
        <Sidebar.FeedbackAttachmentRow
          items={[{ name: "log.txt", url: "/log.txt", size: 4096 }]}
        />
      }
      notice={{
        title: "已允许读取对话信息",
        description: "内容仅用于定位问题，将严格保密。",
      }}
      reply={
        <>
          <div className="lg-sidebar-feedback-detail__section-title-row">
            <div className="lg-sidebar-feedback-detail__section-title">官方回复</div>
            <span className="lg-sidebar-feedback-detail__new-tag">新回复</span>
          </div>
          <div className="lg-sidebar-feedback-detail__field">
            <div className="lg-sidebar-feedback-detail__field-label">答复内容</div>
            <div className="lg-sidebar-feedback-detail__reply-box">
              已在 1.2.3 版本修复，请更新后重试。
            </div>
          </div>
        </>
      }
      similar={
        <>
          <div className="lg-sidebar-feedback-detail__section-title">相似问题（1）</div>
          <p className="lg-sidebar-feedback-similar-tip">
            如果与你的问题相同，可点击赞同帮助我们优先处理
          </p>
          <div className="lg-sidebar-feedback-similar-list">
            <Sidebar.FeedbackSimilarItem
              item={{
                id: "s1",
                title: "切换租户后页面空白",
                description: "与本问题同源，均为路由守卫时序导致。",
                voteCount: 12,
              }}
              voteLabel="赞同"
            />
          </div>
        </>
      }
    />
  );

  const historyPanel = (
    <Sidebar.FeedbackHistoryPanel
      toolbar={<Input placeholder="搜索反馈" style={{ flex: 1 }} />}
      list={HISTORY.map((item) => (
        <Sidebar.FeedbackHistoryItem
          key={item.id}
          item={item}
          selected={item.id === selectedId}
          onSelect={() => setSelectedId(item.id)}
          statusLabel={item.status === "replied" ? "已回复" : "待处理"}
          meta="更新于 2026-08-11 09:30"
          unreadLabel="有未读回复"
        />
      ))}
      detail={
        selectedId ? (
          detail
        ) : (
          <Empty size="md" icon={DocumentLibrary} description="请选择一条反馈" />
        )
      }
    />
  );

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开反馈弹窗</Button>

      <Sidebar.FeedbackModal
        open={open}
        onClose={() => setOpen(false)}
        activeTab={tab}
        onTabChange={(key) => {
          setTab(key);
          if (key === "history") setHistoryVisited(true);
        }}
        submitTabLabel="提交反馈"
        historyTabLabel="反馈历史"
        historyUnread
        closeLabel="关闭"
        submitPanel={submitPanel}
        historyPanel={historyVisited ? historyPanel : undefined}
      />
    </>
  );
}
`,Je=e=>e.toLocaleString(`zh-CN`,{minimumFractionDigits:2,maximumFractionDigits:2});function Ye(){let[e,t]=(0,R.useState)(!1);return(0,z.jsx)(Q.Root,{style:{height:`auto`,borderRadius:12},children:(0,z.jsx)(Q.Footer,{actions:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(j,{variant:`text`,size:`lg`,icon:(0,z.jsx)(s,{size:16}),children:`反馈`}),(0,z.jsx)(Q.FooterBadge,{dot:!0,children:(0,z.jsx)(j,{variant:`text`,size:`lg`,icon:(0,z.jsx)(D,{size:16}),tooltip:`产物管理`})})]}),children:(0,z.jsxs)(I,{open:e,onOpenChange:t,children:[(0,z.jsx)(M,{children:(0,z.jsx)(Q.FooterUser,{avatar:(0,z.jsx)(a,{size:20}),name:`张三`,nameSuffix:(0,z.jsx)(ce,{size:`sm`,shape:`pill`,children:`专业版`}),menuOpen:e})}),(0,z.jsxs)(N,{side:`top`,align:`start`,sideOffset:4,className:`lg-sidebar-footer-menu`,children:[(0,z.jsx)(Q.FooterMenuStaticRow,{icon:(0,z.jsx)(m,{size:16}),children:`金蝶软件（中国）`}),(0,z.jsx)(F,{}),(0,z.jsxs)(ue,{children:[(0,z.jsx)(fe,{icon:(0,z.jsx)(f,{size:16}),children:`点数用量`}),(0,z.jsx)(de,{className:`lg-sidebar-usage-panel-host`,children:(0,z.jsxs)(Q.UsagePanel,{title:`点数用量`,children:[(0,z.jsx)(Q.UsagePanelSection,{title:`套餐内`,extra:`2026年12月31日到期`,children:(0,z.jsx)(Q.UsageBar,{used:6480,total:1e4,formatNumber:Je,percentSuffix:`（65%）`,remainingPrefix:`剩余 `,ariaLabel:`套餐内已用 65%`})}),(0,z.jsx)(Q.UsagePanelSection,{title:`共享资源包`,children:(0,z.jsx)(Q.UsageBar,{used:1900,total:2e3,formatNumber:Je,percentSuffix:`（95%）`,remainingPrefix:`剩余 `,ariaLabel:`共享资源包已用 95%`})})]})})]}),(0,z.jsx)(P,{icon:(0,z.jsx)(u,{size:16}),children:`设置`}),(0,z.jsx)(F,{}),(0,z.jsx)(P,{icon:(0,z.jsx)(l,{size:16}),danger:!0,children:`退出登录`})]})]})})})}var Xe=`import { useState } from "react";
import {
  Sidebar,
  Button,
  Tag,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
} from "lingee-ui";
import { Avatar, Inquire, FolderOpen, BasicSettings, Export, Correlation, Scan } from "lingee-icon";

/** 千分位 + 两位小数。格式化依赖语言环境，故由消费方提供 */
const formatNumber = (n: number) =>
  n.toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function FooterDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // 用默认 280px 宽度：底栏宽度分配是按此设计的，
    // 收窄会让用户名提前出现省略号，无法反映真实效果
    <Sidebar.Root style={{ height: "auto", borderRadius: 12 }}>
      <Sidebar.Footer
        actions={
          <>
            <Button variant="text" size="lg" icon={<Inquire size={16} />}>
              反馈
            </Button>
            {/* 未读角标包裹按钮，绝对定位不撑开底栏布局 */}
            <Sidebar.FooterBadge dot>
              <Button variant="text" size="lg" icon={<FolderOpen size={16} />} tooltip="产物管理" />
            </Sidebar.FooterBadge>
          </>
        }
      >
        {/* Dropdown 只包用户区：包住整个 Footer 会让右侧动作按钮
            也成为菜单触发器 */}
        <Dropdown open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownTrigger>
            <Sidebar.FooterUser
              avatar={<Avatar size={20} />}
              name="张三"
              nameSuffix={
                <Tag size="sm" shape="pill">
                  专业版
                </Tag>
              }
              menuOpen={menuOpen}
            />
          </DropdownTrigger>

          {/* 菜单尺寸规格由 lg-sidebar-footer-menu 提供，消费方只填菜单项 */}
          <DropdownContent
            side="top"
            align="start"
            sideOffset={4}
            className="lg-sidebar-footer-menu"
          >
            {/* 只读信息行：与 DropdownItem 等高，切换态与静态态之间不跳动 */}
            <Sidebar.FooterMenuStaticRow icon={<Correlation size={16} />}>
              金蝶软件（中国）
            </Sidebar.FooterMenuStaticRow>

            <DropdownSeparator />

            {/* 点数用量：二级浮层放用量面板 */}
            <DropdownSub>
              <DropdownSubTrigger icon={<Scan size={16} />}>点数用量</DropdownSubTrigger>
              {/* 消掉菜单为菜单项预留的内边距，使浮层宽度等于面板设计宽度 */}
              <DropdownSubContent className="lg-sidebar-usage-panel-host">
                <Sidebar.UsagePanel title="点数用量">
                  <Sidebar.UsagePanelSection title="套餐内" extra="2026年12月31日到期">
                    <Sidebar.UsageBar
                      used={6480}
                      total={10000}
                      formatNumber={formatNumber}
                      percentSuffix="（65%）"
                      remainingPrefix="剩余 "
                      ariaLabel="套餐内已用 65%"
                    />
                  </Sidebar.UsagePanelSection>

                  <Sidebar.UsagePanelSection title="共享资源包">
                    <Sidebar.UsageBar
                      used={1900}
                      total={2000}
                      formatNumber={formatNumber}
                      percentSuffix="（95%）"
                      remainingPrefix="剩余 "
                      ariaLabel="共享资源包已用 95%"
                    />
                  </Sidebar.UsagePanelSection>
                </Sidebar.UsagePanel>
              </DropdownSubContent>
            </DropdownSub>

            <DropdownItem icon={<BasicSettings size={16} />}>设置</DropdownItem>
            <DropdownSeparator />
            <DropdownItem icon={<Export size={16} />} danger>
              退出登录
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
      </Sidebar.Footer>
    </Sidebar.Root>
  );
}
`;function Ze(){let[e,t]=(0,R.useState)(`work`),[n,i]=(0,R.useState)(`new-task`),[c,l]=(0,R.useState)(null),[u,d]=(0,R.useState)(!0),[f,p]=(0,R.useState)(!1),[m,h]=(0,R.useState)(!1),v=e=>{i(e),l(null)},b=e=>{l(e),i(``)};return(0,z.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`flex-start`},children:[(0,z.jsxs)(Q.Root,{collapsed:m,style:{height:480},children:[(0,z.jsx)(Q.Header,{style:{height:44,padding:`0 16px`},children:(0,z.jsx)(`strong`,{style:{fontSize:16},children:`Lingee`})}),(0,z.jsx)(Q.TabBar,{items:[{key:`work`,label:`工作`,icon:(0,z.jsx)(y,{size:20})},{key:`manage`,label:`管理`,icon:(0,z.jsx)(_,{size:20})}],activeKey:e,onChange:t}),(0,z.jsxs)(r,{className:`lg-sidebar__scroll`,children:[(0,z.jsxs)(`div`,{className:`lg-sidebar__section`,children:[(0,z.jsx)(Q.NavItem,{icon:(0,z.jsx)(g,{size:18}),label:`新任务`,active:n===`new-task`,onClick:()=>v(`new-task`)}),(0,z.jsx)(Q.NavItem,{icon:(0,z.jsx)(S,{size:18}),label:`定时任务`,active:n===`scheduled`,onClick:()=>v(`scheduled`)}),(0,z.jsx)(Q.NavItem,{icon:(0,z.jsx)(C,{size:18}),label:`智能体`,active:n===`agent`,onClick:()=>v(`agent`)}),(0,z.jsx)(Q.NavItem,{icon:(0,z.jsx)(o,{size:18}),label:`技能`,active:n===`skills`,onClick:()=>v(`skills`)}),(0,z.jsx)(pe,{className:`lg-sidebar__divider`})]}),(0,z.jsxs)(`div`,{className:`lg-sidebar__section`,children:[(0,z.jsx)(Q.GroupHeader,{title:`置顶`,collapsible:!0,expanded:u,onToggle:()=>d(e=>!e)}),u&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Q.ListItem,{title:`季度经营分析`,indicator:`running`,active:c===`s1`,onSelect:()=>b(`s1`)}),(0,z.jsx)(Q.ListItem,{title:`供应链风险排查`,indicator:`unread`,active:c===`s2`,onSelect:()=>b(`s2`)})]}),(0,z.jsx)(Q.GroupHeader,{title:`默认对话`}),(0,z.jsx)(Q.ListItem,{title:`上月费用明细核对`,active:c===`s3`,onSelect:()=>b(`s3`)}),(0,z.jsx)(Q.GroupHeader,{title:`分组`,collapsible:!0,expanded:!0,actions:(0,z.jsx)(j,{variant:`text`,size:`sm`,icon:(0,z.jsx)(O,{size:16})})}),(0,z.jsx)(Q.CollapsibleListItem,{icon:f?(0,z.jsx)(x,{size:16}):(0,z.jsx)(D,{size:16}),title:`财务专题`,expanded:f,onToggle:()=>p(e=>!e),actions:(0,z.jsx)(j,{variant:`text`,size:`sm`,icon:(0,z.jsx)(O,{size:16})}),children:(0,z.jsx)(E.Card,{status:`empty`,description:`暂无对话`})}),(0,z.jsx)(E.Card,{status:`loading`,description:`加载中...`,variant:`inline`})]})]}),(0,z.jsx)(Q.Footer,{avatar:(0,z.jsx)(a,{size:20}),name:`张三`,actions:(0,z.jsx)(j,{variant:`text`,size:`lg`,icon:(0,z.jsx)(s,{size:16}),children:`反馈`})})]}),(0,z.jsx)(j,{onClick:()=>h(e=>!e),children:m?`展开`:`收起`})]})}var Qe=`import { useState } from "react";
import { Sidebar, ScrollArea, Button, Divider, Empty } from "lingee-ui";
import {
  List,
  Enterprise,
  NewChat,
  AlarmClock,
  Agent,
  Plugin,
  FolderOpen,
  FolderUnwrap,
  Plus,
  Avatar,
  Inquire,
} from "lingee-icon";

/** 完整侧边栏组合：页签 + 导航 + 分组 + 会话列表 + 文件夹 + 底栏 */
export default function FullDemo() {
  const [tab, setTab] = useState("work");
  const [nav, setNav] = useState("new-task");
  const [selected, setSelected] = useState<string | null>(null);
  const [pinnedOpen, setPinnedOpen] = useState(true);
  const [folderOpen, setFolderOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const selectNav = (key: string) => {
    setNav(key);
    setSelected(null);
  };
  const selectSession = (id: string) => {
    setSelected(id);
    setNav("");
  };

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <Sidebar.Root collapsed={collapsed} style={{ height: 480 }}>
        <Sidebar.Header style={{ height: 44, padding: "0 16px" }}>
          <strong style={{ fontSize: 16 }}>Lingee</strong>
        </Sidebar.Header>

        <Sidebar.TabBar
          items={[
            { key: "work", label: "工作", icon: <List size={20} /> },
            { key: "manage", label: "管理", icon: <Enterprise size={20} /> },
          ]}
          activeKey={tab}
          onChange={setTab}
        />

        <ScrollArea className="lg-sidebar__scroll">
          {/* 区块内缩与分隔线间距均由 lg-sidebar__* 工具类提供 */}
          <div className="lg-sidebar__section">
            <Sidebar.NavItem
              icon={<NewChat size={18} />}
              label="新任务"
              active={nav === "new-task"}
              onClick={() => selectNav("new-task")}
            />
            <Sidebar.NavItem
              icon={<AlarmClock size={18} />}
              label="定时任务"
              active={nav === "scheduled"}
              onClick={() => selectNav("scheduled")}
            />
            <Sidebar.NavItem
              icon={<Agent size={18} />}
              label="智能体"
              active={nav === "agent"}
              onClick={() => selectNav("agent")}
            />
            <Sidebar.NavItem
              icon={<Plugin size={18} />}
              label="技能"
              active={nav === "skills"}
              onClick={() => selectNav("skills")}
            />
            <Divider className="lg-sidebar__divider" />
          </div>

          <div className="lg-sidebar__section">
            <Sidebar.GroupHeader
              title="置顶"
              collapsible
              expanded={pinnedOpen}
              onToggle={() => setPinnedOpen((v) => !v)}
            />
            {pinnedOpen && (
              <>
                <Sidebar.ListItem
                  title="季度经营分析"
                  indicator="running"
                  active={selected === "s1"}
                  onSelect={() => selectSession("s1")}
                />
                <Sidebar.ListItem
                  title="供应链风险排查"
                  indicator="unread"
                  active={selected === "s2"}
                  onSelect={() => selectSession("s2")}
                />
              </>
            )}

            <Sidebar.GroupHeader title="默认对话" />
            <Sidebar.ListItem
              title="上月费用明细核对"
              active={selected === "s3"}
              onSelect={() => selectSession("s3")}
            />

            <Sidebar.GroupHeader
              title="分组"
              collapsible
              expanded
              actions={<Button variant="text" size="sm" icon={<Plus size={16} />} />}
            />
            <Sidebar.CollapsibleListItem
              icon={
                folderOpen ? <FolderUnwrap size={16} /> : <FolderOpen size={16} />
              }
              title="财务专题"
              expanded={folderOpen}
              onToggle={() => setFolderOpen((v) => !v)}
              actions={<Button variant="text" size="sm" icon={<Plus size={16} />} />}
            >
              <Empty.Card status="empty" description="暂无对话" />
            </Sidebar.CollapsibleListItem>

            <Empty.Card
              status="loading"
              description="加载中..."
              variant="inline"
            />
          </div>
        </ScrollArea>

        <Sidebar.Footer
          avatar={<Avatar size={20} />}
          name="张三"
          actions={
            <Button variant="text" size="lg" icon={<Inquire size={16} />}>
              反馈
            </Button>
          }
        />
      </Sidebar.Root>

      <Button onClick={() => setCollapsed((v) => !v)}>
        {collapsed ? "展开" : "收起"}
      </Button>
    </div>
  );
}
`,$e={title:`Sidebar 侧边栏`,description:`侧边栏复合组件，提供根容器、页签、导航项、分组、列表项、占位项与底栏，通过 Sidebar.xxx 组合使用。`};function et(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(t.h2,{children:`设计边界`}),`
`,(0,z.jsx)(t.p,{children:`Sidebar 只负责视觉与基础交互：`}),`
`,(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsx)(t.li,{children:`所有状态受控，组件不持有业务状态`}),`
`,(0,z.jsx)(t.li,{children:`不含数据请求、路由跳转与内置文案，文案一律由 props 传入`}),`
`,(0,z.jsx)(t.li,{children:`菜单、徽标、操作区、展开区内容全部以插槽注入`}),`
`]}),`
`,(0,z.jsxs)(t.p,{children:[`滚动容器、分隔线、图标按钮、下拉菜单直接复用 `,(0,z.jsx)(t.code,{children:`ScrollArea`}),`、`,(0,z.jsx)(t.code,{children:`Divider`}),`、`,(0,z.jsx)(t.code,{children:`Button`}),`、`,(0,z.jsx)(t.code,{children:`Dropdown`}),`，Sidebar 不重复提供。`]}),`
`,(0,z.jsx)(t.h2,{children:`基本用法`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`Sidebar.Root`}),` 作为根容器，内部按需组合各子组件。`]}),`
`,(0,z.jsx)(A,{source:Re,children:(0,z.jsx)(Le,{})}),`
`,(0,z.jsx)(t.h2,{children:`导航项与可折叠分组`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`Sidebar.NavItem`}),` 是单层导航项；`,(0,z.jsx)(t.code,{children:`Sidebar.CollapsibleNavItem`}),` 用于带子项的分组。`]}),`
`,(0,z.jsxs)(t.p,{children:[`传入 `,(0,z.jsx)(t.code,{children:`onLabelClick`}),` 时标签区与箭头区分离命中：点标签导航、点箭头才展开。分组本身可跳转时需要这个行为，否则用户想跳转却只会展开。`]}),`
`,(0,z.jsx)(A,{source:Be,children:(0,z.jsx)(ze,{})}),`
`,(0,z.jsx)(t.h2,{children:`列表项`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`Sidebar.ListItem`}),` 用于会话行、执行记录行。`,(0,z.jsx)(t.code,{children:`indicator`}),` 提供三种状态指示器：`,(0,z.jsx)(t.code,{children:`running`}),`、`,(0,z.jsx)(t.code,{children:`clarification`}),` 带呼吸动画，`,(0,z.jsx)(t.code,{children:`unread`}),` 为静态点。`]}),`
`,(0,z.jsxs)(t.p,{children:[`菜单以 `,(0,z.jsx)(t.code,{children:`menu`}),` 插槽传入，可自由选择 `,(0,z.jsx)(t.code,{children:`Dropdown`}),` 或自有实现。`]}),`
`,(0,z.jsx)(A,{source:He,children:(0,z.jsx)(Ve,{})}),`
`,(0,z.jsx)(t.h2,{children:`可折叠列表项`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`Sidebar.CollapsibleListItem`}),` 用于文件夹节点与定时任务分组 —— 两者结构一致，共用同一组件。展开区内容完全由业务渲染。`]}),`
`,(0,z.jsxs)(t.p,{children:[`操作区悬停才显现。菜单打开期间需传 `,(0,z.jsx)(t.code,{children:`actionsVisible`}),` 锁定显示，否则指针移到浮层后按钮会消失。`]}),`
`,(0,z.jsxs)(t.p,{children:[`箭头位置由 `,(0,z.jsx)(t.code,{children:`caretPlacement`}),` 控制，两种用法视觉规则不同：`]}),`
`,(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.code,{children:`title`}),`（默认）—— 箭头紧跟标题，常态隐藏、悬停显现。用于文件夹节点`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.code,{children:`end`}),` —— 箭头恒在行尾且常显。用于定时任务分组`]}),`
`]}),`
`,(0,z.jsx)(A,{source:We,children:(0,z.jsx)(Ue,{})}),`
`,(0,z.jsx)(t.h2,{children:`占位项`}),`
`,(0,z.jsxs)(t.p,{children:[`列表内「加载中 / 无数据 / 加载失败」三态占位使用 `,(0,z.jsx)(t.a,{href:`/components/empty`,children:(0,z.jsx)(t.code,{children:`Empty.Card`})}),`，
同档位下三态等高，状态切换时列表不跳动。`]}),`
`,(0,z.jsx)(t.h2,{children:`底栏`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`Sidebar.Footer`}),` 是一行左右结构：左侧用户区（头像 + 名称 + 后缀徽标 + 展开箭头）占满剩余宽度，右侧动作区靠右贴边，整体高度固定 40px。`]}),`
`,(0,z.jsx)(t.p,{children:`用户菜单与动作按钮均以插槽传入 —— 各业务的菜单项集合差异极大，组件只收敛骨架。`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsxs)(t.strong,{children:[`挂用户菜单时必须用 `,(0,z.jsx)(t.code,{children:`Sidebar.FooterUser`})]}),`，把 `,(0,z.jsx)(t.code,{children:`DropdownTrigger`}),` 只包在它上面：`]}),`
`,(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-tsx`,children:`<Sidebar.Footer actions={<>{/* 反馈、产物管理等按钮 */}</>}>
  <Dropdown open={open} onOpenChange={setOpen}>
    <DropdownTrigger>
      <Sidebar.FooterUser avatar={avatar} name={name} menuOpen={open} />
    </DropdownTrigger>
    <DropdownContent className="lg-sidebar-footer-menu">…</DropdownContent>
  </Dropdown>
</Sidebar.Footer>
`})}),`
`,(0,z.jsxs)(t.p,{children:[`若把 `,(0,z.jsx)(t.code,{children:`DropdownTrigger`}),` 包在整个 `,(0,z.jsx)(t.code,{children:`Footer`}),` 上，右侧动作按钮会一并成为菜单触发器 —— 点「反馈」「产物管理」时会连带弹出用户菜单。`]}),`
`,(0,z.jsxs)(t.p,{children:[`不需要外挂菜单时，直接给 `,(0,z.jsx)(t.code,{children:`Footer`}),` 传 `,(0,z.jsx)(t.code,{children:`avatar`}),`/`,(0,z.jsx)(t.code,{children:`name`}),` 即可，内部会自行渲染用户区。`]}),`
`,(0,z.jsx)(t.p,{children:`宽度不足时只压缩名称，后缀徽标与动作区始终完整可见。名称与头像、徽标之间的间距由名称自身的左右 padding 提供而非 flex gap：用 gap 会在各元素之间都产生固定间隙，压缩名称的可用宽度。`}),`
`,(0,z.jsxs)(t.p,{children:[`名称超长时默认 hover 出全称提示，仅在真正溢出时弹出（`,(0,z.jsx)(t.code,{children:`nameTooltip={false}`}),` 可关闭）；菜单展开期间自动收起，避免与菜单浮层叠加。`]}),`
`,(0,z.jsxs)(t.p,{children:[`展开箭头默认不显示 —— 触发区整体可点，箭头属冗余提示。需要显式指示可展开时传 `,(0,z.jsx)(t.code,{children:`showCaret`}),`，此时箭头常态隐藏、hover 或菜单打开时显现，并随 `,(0,z.jsx)(t.code,{children:`menuOpen`}),` 旋转。`]}),`
`,(0,z.jsx)(t.p,{children:`菜单浮层的尺寸规格与两处通用视觉也已收敛：`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`用法`}),(0,z.jsx)(t.th,{children:`说明`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`lg-sidebar-footer-menu`})}),(0,z.jsxs)(t.td,{children:[`加在 `,(0,z.jsx)(t.code,{children:`DropdownContent`}),` 上，提供 220px 宽度与 32px 项高等规格，消费方只需填菜单项`]})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`Sidebar.FooterMenuStaticRow`})}),(0,z.jsxs)(t.td,{children:[`只读信息行（如当前租户）。与 `,(0,z.jsx)(t.code,{children:`DropdownItem`}),` 等高，使「可切换→二级菜单 / 不可切换→静态行」两种形态不产生跳动`]})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`Sidebar.FooterBadge`})}),(0,z.jsx)(t.td,{children:`包裹动作按钮显示未读红点。绝对定位不占位，避免撑开按钮导致底栏位移`})]})]})]}),`
`,(0,z.jsxs)(t.p,{children:[`套餐标签的 5 档配色也已收敛，加在 `,(0,z.jsx)(t.code,{children:`Tag`}),` 上使用（`,(0,z.jsx)(t.code,{children:`nameSuffix`}),` 插槽）：`]}),`
`,(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-tsx`,children:`<Tag
  size="sm"
  shape="pill"
  className={\`lg-sidebar-footer__plan-tag lg-sidebar-footer__plan-tag--\${tier}\`}
>
  {tierLabel}
</Tag>
`})}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`tier`}),` 取 `,(0,z.jsx)(t.code,{children:`basic`}),` / `,(0,z.jsx)(t.code,{children:`standard`}),` / `,(0,z.jsx)(t.code,{children:`professional`}),` / `,(0,z.jsx)(t.code,{children:`ultra`}),` / `,(0,z.jsx)(t.code,{children:`trial`}),`，各档为浅底 + 同色文字。档位如何从后端编码推导属业务逻辑，留在消费方。`]}),`
`,(0,z.jsx)(t.h2,{children:`反馈弹窗`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`Sidebar.FeedbackModal`}),` 收敛「问题反馈」弹窗的整个视觉层 —— 两端此前各写一份，客户端还手绘了 Dialog、Tabs、Input、Checkbox、Image 等已有组件。`]}),`
`,(0,z.jsx)(t.p,{children:`弹窗只提供「双页签 + 未读红点 + 关闭」外壳，两个面板由消费方注入：`}),`
`,(0,z.jsx)(A,{source:qe,children:(0,z.jsx)(Ke,{})}),`
`,(0,z.jsx)(t.h3,{children:`组合方式`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`组件`}),(0,z.jsx)(t.th,{children:`用途`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`Sidebar.FeedbackModal`})}),(0,z.jsx)(t.td,{children:`弹窗骨架、页签切换、未读红点`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`Sidebar.FeedbackSubmitPanel`})}),(0,z.jsx)(t.td,{children:`提交面板：内容滚动 + 底部按钮固定`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`Sidebar.FeedbackField`})}),(0,z.jsx)(t.td,{children:`表单字段容器（标签 / 必填星号 / 右侧插槽 / 提示）`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`Sidebar.FeedbackFileWall`})}),(0,z.jsx)(t.td,{children:`横向文件墙：图片缩略图与附件卡片同排`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`Sidebar.FeedbackHistoryPanel`})}),(0,z.jsx)(t.td,{children:`历史面板双栏骨架`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`Sidebar.FeedbackHistoryItem`})}),(0,z.jsx)(t.td,{children:`历史列表卡片（状态标签 + 未读红点）`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`Sidebar.FeedbackDetail`})}),(0,z.jsx)(t.td,{children:`详情：描述 / 附件 / 授权告知 / 回复 / 相似问题`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`Sidebar.FeedbackAttachmentRow`})}),(0,z.jsx)(t.td,{children:`附件行：图片聚合预览、附件下载`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`Sidebar.FeedbackSimilarItem`})}),(0,z.jsx)(t.td,{children:`相似问题卡片（可折叠 + 赞同）`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`Sidebar.AuthImage`})}),(0,z.jsxs)(t.td,{children:[`带 token 的图片（Electron 中 `,(0,z.jsx)(t.code,{children:`<img>`}),` 不自带鉴权头）`]})]})]})]}),`
`,(0,z.jsx)(t.h3,{children:`留在业务侧的部分`}),`
`,(0,z.jsx)(t.p,{children:`组件库不含取数、提交、路由、i18n 与环境能力。以下需消费方提供：`}),`
`,(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`接口调用`}),` —— 提交、列表分页、详情、投票`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`截图`}),` —— 客户端走 Electron IPC、Web 走 `,(0,z.jsx)(t.code,{children:`dom-to-image`}),`，组件只接收「截图中」状态与产出的文件`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`文案`}),` —— 全部通过 props 传入，组件库不含中文`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`附件图标`}),` —— 通过 `,(0,z.jsx)(t.code,{children:`resolveIcon`}),` 注入，图标资源属业务资产`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`未读数与分页状态`}),` —— 组件只吃 `,(0,z.jsx)(t.code,{children:`items`}),` / `,(0,z.jsx)(t.code,{children:`loading`}),` 这类结果`]}),`
`]}),`
`,(0,z.jsx)(t.h3,{children:`几处约定`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`FeedbackModal`}),` 用 `,(0,z.jsx)(t.code,{children:`display`}),` 切换面板而非卸载，提交页签的表单内容在来回切换后不丢失。历史面板建议首次切到后才传入（`,(0,z.jsx)(t.code,{children:`historyPanel={visited ? panel : undefined}`}),`），避免弹窗一打开就发请求。`]}),`
`,(0,z.jsx)(t.p,{children:`遮罩点击关闭已禁用 —— 表单填写中误点遮罩会丢失内容，只保留右上角关闭与取消按钮。`}),`
`,(0,z.jsxs)(t.p,{children:[`文件墙的翻页箭头需要读取滚动状态，故不内置，由消费方放在 `,(0,z.jsx)(t.code,{children:`FeedbackField`}),` 的 `,(0,z.jsx)(t.code,{children:`labelExtra`}),` 插槽（样式类 `,(0,z.jsx)(t.code,{children:`lg-sidebar-feedback-wall-arrows`}),` 已提供）。`]}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`AuthImage`}),` 的 token 由 props 注入而非组件内读取环境。Web 端若靠 cookie 鉴权则不需要它，直接用 `,(0,z.jsx)(t.code,{children:`<img>`}),`。`]}),`
`,(0,z.jsx)(t.h2,{children:`用量面板`}),`
`,(0,z.jsxs)(t.p,{children:[`底栏菜单的二级浮层（如「点数用量」）由 `,(0,z.jsx)(t.code,{children:`Sidebar.UsagePanel`}),` + `,(0,z.jsx)(t.code,{children:`UsagePanelSection`}),` + `,(0,z.jsx)(t.code,{children:`UsageBar`}),` 组合。`]}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`UsageBar`}),` 是分段式用量条 —— 用离散色块而非连续进度条，额度类数据需要「格子」的计量意味。固定 54 段，按已用比例填充，并按比例切换三档色阶：`]}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`已用比例`}),(0,z.jsx)(t.th,{children:`色阶`}),(0,z.jsx)(t.th,{children:`颜色`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:`< 85%`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`normal`})}),(0,z.jsx)(t.td,{children:`成功色`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:`85% ~ 99%`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`warning`})}),(0,z.jsx)(t.td,{children:`警示橙`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:`= 100%`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`exhausted`})}),(0,z.jsx)(t.td,{children:`灰`})]})]})]}),`
`,(0,z.jsxs)(t.p,{children:[`数字格式化通过 `,(0,z.jsx)(t.code,{children:`formatNumber`}),` 注入 —— 千分位与小数位依赖语言环境，组件库不持有 locale。文案（百分比后缀、剩余量前缀）同样由 props 传入。`]}),`
`,(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-tsx`,children:`<DropdownSub>
  <DropdownSubTrigger icon={<Scan size={16} />}>点数用量</DropdownSubTrigger>
  <DropdownSubContent>
    <Sidebar.UsagePanel title="点数用量" loading={loading}>
      <Sidebar.UsagePanelSection title="套餐内" extra="2026年12月31日到期">
        <Sidebar.UsageBar
          used={6480}
          total={10000}
          formatNumber={formatNumber}
          percentSuffix="（65%）"
          remainingPrefix="剩余 "
        />
      </Sidebar.UsagePanelSection>
      <Sidebar.UsagePanelSection title="共享资源包">
        <Sidebar.UsageBar used={1900} total={2000} formatNumber={formatNumber} />
      </Sidebar.UsagePanelSection>
    </Sidebar.UsagePanel>
  </DropdownSubContent>
</DropdownSub>
`})}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`total`}),` 为 0 时进度按 0 处理（不产生 NaN）；`,(0,z.jsx)(t.code,{children:`used`}),` 超过 `,(0,z.jsx)(t.code,{children:`total`}),` 时按满值处理且剩余量不为负。`]}),`
`,(0,z.jsxs)(t.p,{children:[`放进 `,(0,z.jsx)(t.code,{children:`DropdownSubContent`}),` 时给它加 `,(0,z.jsx)(t.code,{children:`lg-sidebar-usage-panel-host`}),` —— 菜单默认有 4px 内边距（为菜单项预留），与面板自带的 16px 叠加会让浮层比面板设计宽度多出 8px。面板自身圆角也会在二级浮层内归零，避免与外层双层描边。`]}),`
`,(0,z.jsxs)(t.p,{children:[`面板内容高度在 346px 以内，不会触到 `,(0,z.jsx)(t.code,{children:`DropdownSubContent`}),` 的默认限高；若分区数量增加导致超出，改 `,(0,z.jsx)(t.code,{children:`--lg-dropdown-sub-max-height`}),` 放开即可。`]}),`
`,(0,z.jsx)(A,{source:Xe,children:(0,z.jsx)(Ye,{})}),`
`,(0,z.jsx)(t.h2,{children:`完整组合`}),`
`,(0,z.jsx)(t.p,{children:`包含折叠、页签、导航、分组、会话列表、文件夹与底栏。`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`Sidebar.Root`}),` 传入 `,(0,z.jsx)(t.code,{children:`collapsed`}),` 后启用双层结构（外层收缩宽度、内层脱离文档流），内容不会随宽度收缩被压扁。`]}),`
`,(0,z.jsx)(A,{source:Qe,children:(0,z.jsx)(Ze,{})}),`
`,(0,z.jsx)(t.h2,{children:`作用域工具类`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`Sidebar.Root`}),` 内提供两个类，供内部元素复用，无需消费方重复实现：`]}),`
`,(0,z.jsxs)(t.p,{children:[`这些类由 `,(0,z.jsx)(t.code,{children:`Sidebar`}),` 提供，消费方直接使用即可，无需自行补样式：`]}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`类名`}),(0,z.jsx)(t.th,{children:`用途`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`lg-sidebar__scroll`})}),(0,z.jsxs)(t.td,{children:[`滚动容器：隐藏滚动条 + 底部渐变遮罩。加在 `,(0,z.jsx)(t.code,{children:`ScrollArea`}),` 上`]})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`lg-sidebar__sticky`})}),(0,z.jsx)(t.td,{children:`吸顶元素：铺满整行背景并内缩，避免吸顶时两侧透出下方内容`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`lg-sidebar__section`})}),(0,z.jsxs)(t.td,{children:[`内容区块：统一左右内缩。`,(0,z.jsx)(t.strong,{children:`不要再加 flex gap`}),` —— 项间距已由各项自带`]})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`lg-sidebar__divider`})}),(0,z.jsxs)(t.td,{children:[`侧边栏内 `,(0,z.jsx)(t.code,{children:`Divider`}),` 的间距`]})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`lg-sidebar__gradient-badge`})}),(0,z.jsx)(t.td,{children:`渐变文字徽标，用于分组头的营销类标识（如「限时试用」）`})]})]})]}),`
`,(0,z.jsx)(t.h2,{children:`脱离 Root 单独使用`}),`
`,(0,z.jsxs)(t.p,{children:[`各子组件都可以独立使用，不要求外层包 `,(0,z.jsx)(t.code,{children:`Sidebar.Root`}),` —— 例如在设置页里只用一组 `,(0,z.jsx)(t.code,{children:`Sidebar.NavItem`}),` 做左侧导航：`]}),`
`,(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-tsx`,children:`<div style={{ width: 200 }}>
  <Sidebar.NavItem icon={<BasicSettings size={18} />} label="通用" active />
  <Sidebar.NavItem icon={<Enterprise size={18} />} label="账号" />
</div>
`})}),`
`,(0,z.jsxs)(t.p,{children:[`尺寸、配色、悬停/选中态、折叠动画均内置默认值，无 `,(0,z.jsx)(t.code,{children:`Root`}),` 祖先时同样完整生效。若外层是 `,(0,z.jsx)(t.code,{children:`Sidebar.Root`}),` 或任意祖先覆盖了 Token，子组件会自动跟随。`]}),`
`,(0,z.jsx)(t.p,{children:`需要注意两点：`}),`
`,(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`底色需自备`}),` —— `,(0,z.jsx)(t.code,{children:`--_sidebar-bg`}),` 只作用在 `,(0,z.jsx)(t.code,{children:`Sidebar.Root`}),` 自身，独立使用时容器背景由业务决定`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsxs)(t.strong,{children:[(0,z.jsx)(t.code,{children:`lg-sidebar__scroll`}),` 的遮罩终点色`]}),`默认取 `,(0,z.jsx)(t.code,{children:`--_sidebar-bg`}),`。若容器底色不同，需覆盖 `,(0,z.jsx)(t.code,{children:`--_sidebar-scroll-mask-color`}),`，否则遮罩边缘会露出色差`]}),`
`]}),`
`,(0,z.jsx)(t.h2,{children:`Token 覆盖`}),`
`,(0,z.jsxs)(t.p,{children:[`尺寸与配色由组件级 Token 派生，覆盖 Token 即可整体调整。Token 在 `,(0,z.jsx)(t.code,{children:`.lg-sidebar`}),` 上显式声明，同时每处使用点都带同值 fallback，因此在 `,(0,z.jsx)(t.code,{children:`Root`}),`、任意祖先或子组件自身上覆盖都会生效：`]}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`Token`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`--_sidebar-width`})}),(0,z.jsx)(t.td,{children:`展开宽度`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`280px`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`--_sidebar-item-height`})}),(0,z.jsx)(t.td,{children:`项高度`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`32px`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`--_sidebar-item-radius`})}),(0,z.jsx)(t.td,{children:`项圆角`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`20px`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`--_sidebar-item-color`})}),(0,z.jsx)(t.td,{children:`项文字色`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`--lg-g-fg-color-black-strong`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`--_sidebar-item-active-color`})}),(0,z.jsx)(t.td,{children:`选中文字色`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`--lg-g-fg-color-black-intense`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`--_sidebar-item-hover-bg`})}),(0,z.jsx)(t.td,{children:`悬停底色`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`--lg-g-bg-color-black-faint`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`--_sidebar-item-active-bg`})}),(0,z.jsx)(t.td,{children:`选中底色`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`--lg-g-bg-color-black-subtle`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`--_sidebar-bg`})}),(0,z.jsxs)(t.td,{children:[`侧边栏底色。暗色下自动切换为 `,(0,z.jsx)(t.code,{children:`#12121c`})]}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`#f1f1f6`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`--_sidebar-scroll-mask-color`})}),(0,z.jsxs)(t.td,{children:[`底部遮罩终点色，默认跟随 `,(0,z.jsx)(t.code,{children:`--_sidebar-bg`})]}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`var(--_sidebar-bg)`})})]})]})]}),`
`,(0,z.jsxs)(t.p,{children:[`用 `,(0,z.jsx)(t.code,{children:`Sidebar.Root`}),` 时底色已内置，消费方无需自行设置背景；遮罩色也会自动跟随，不必手动同步。`]}),`
`,(0,z.jsx)(t.h2,{children:`API`}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.Root`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`width`})}),(0,z.jsx)(t.td,{children:`展开宽度（px）`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`number`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`280`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`collapsed`})}),(0,z.jsx)(t.td,{children:`折叠态。传入即启用双层结构与宽度过渡；不传则宽度恒定`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`safeAreaTop`})}),(0,z.jsx)(t.td,{children:`顶部安全区高度（px），用于让位固定顶栏`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`number`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`0`})})]})]})]}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.Header`}),`
`,(0,z.jsxs)(t.p,{children:[`纯插槽容器。平台相关处理（窗口拖拽区、系统按钮避让）由消费方通过 `,(0,z.jsx)(t.code,{children:`children`}),` 与 `,(0,z.jsx)(t.code,{children:`style`}),` 注入。`]}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsx)(t.tbody,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`children`})}),(0,z.jsx)(t.td,{children:`内容`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]})})]}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.TabBar`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`items`})}),(0,z.jsxs)(t.td,{children:[`页签列表 `,(0,z.jsx)(t.code,{children:`{ key, label, icon?, disabled?, ariaLabel? }`})]}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`SidebarTabItem[]`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`activeKey`})}),(0,z.jsx)(t.td,{children:`当前选中 key`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`string`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`onChange`})}),(0,z.jsx)(t.td,{children:`切换回调`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`(key: string) => void`})}),(0,z.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,z.jsxs)(t.p,{children:[`页签显隐过滤（如权限控制）请在传入 `,(0,z.jsx)(t.code,{children:`items`}),` 前完成，组件不介入。`]}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.NavItem`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`icon`})}),(0,z.jsx)(t.td,{children:`左侧图标`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`label`})}),(0,z.jsx)(t.td,{children:`文本`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`active`})}),(0,z.jsx)(t.td,{children:`选中态`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`false`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`disabled`})}),(0,z.jsx)(t.td,{children:`禁用态`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`false`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`badge`})}),(0,z.jsx)(t.td,{children:`右侧徽章插槽。传纯文本即得药丸样式；传自带样式的节点可覆盖`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`onClick`})}),(0,z.jsx)(t.td,{children:`点击回调`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`() => void`})}),(0,z.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,z.jsx)(t.p,{children:`文本溢出时自动显示 Tooltip，无需外层包裹。`}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.CollapsibleNavItem`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`icon`})}),(0,z.jsx)(t.td,{children:`左侧图标`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`label`})}),(0,z.jsx)(t.td,{children:`分组标题`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`active`})}),(0,z.jsx)(t.td,{children:`头部高亮。内部与子项 active 互斥`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`false`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`open`})}),(0,z.jsx)(t.td,{children:`受控展开态`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`defaultOpen`})}),(0,z.jsx)(t.td,{children:`非受控初始展开态`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`false`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`onOpenChange`})}),(0,z.jsx)(t.td,{children:`展开态变化回调`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`(next: boolean) => void`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`onLabelClick`})}),(0,z.jsx)(t.td,{children:`标签区点击。传入后标签与箭头分离命中`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`() => void`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`items`})}),(0,z.jsxs)(t.td,{children:[`子项列表 `,(0,z.jsx)(t.code,{children:`{ key, label, active?, disabled?, onClick? }`})]}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`SidebarCollapsibleNavItemChild[]`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`extra`})}),(0,z.jsx)(t.td,{children:`头部右侧插槽`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`disabled`})}),(0,z.jsx)(t.td,{children:`禁用态`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`false`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsxs)(t.td,{children:[(0,z.jsx)(t.code,{children:`expandLabel`}),` / `,(0,z.jsx)(t.code,{children:`collapseLabel`})]}),(0,z.jsx)(t.td,{children:`箭头无障碍标签`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`string`})}),(0,z.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.GroupHeader`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`title`})}),(0,z.jsx)(t.td,{children:`标题`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`collapsible`})}),(0,z.jsx)(t.td,{children:`可折叠`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`false`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`expanded`})}),(0,z.jsxs)(t.td,{children:[`展开态，仅 `,(0,z.jsx)(t.code,{children:`collapsible`}),` 时生效`]}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`true`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`onToggle`})}),(0,z.jsx)(t.td,{children:`切换回调`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`() => void`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`actions`})}),(0,z.jsx)(t.td,{children:`右侧操作区插槽`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,z.jsx)(t.p,{children:`折叠箭头与操作区均仅悬停显现，展开态也不常显。`}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.ListItem`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`title`})}),(0,z.jsx)(t.td,{children:`标题`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`active`})}),(0,z.jsx)(t.td,{children:`选中态`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`false`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`indicator`})}),(0,z.jsx)(t.td,{children:`状态指示器`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`"running" | "clarification" | "unread" | null`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`prefix`})}),(0,z.jsx)(t.td,{children:`标题前插槽`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`onSelect`})}),(0,z.jsx)(t.td,{children:`点击回调`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`() => void`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`menu`})}),(0,z.jsx)(t.td,{children:`右侧菜单插槽（需自带触发按钮）`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.CollapsibleListItem`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`icon`})}),(0,z.jsx)(t.td,{children:`头部图标。需随展开态切换时由消费方传入对应图标`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`title`})}),(0,z.jsx)(t.td,{children:`标题`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`expanded`})}),(0,z.jsx)(t.td,{children:`展开态`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`false`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`onToggle`})}),(0,z.jsx)(t.td,{children:`切换回调`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`() => void`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`caretPlacement`})}),(0,z.jsxs)(t.td,{children:[`箭头位置。`,(0,z.jsx)(t.code,{children:`title`}),` 紧跟标题、悬停才显现；`,(0,z.jsx)(t.code,{children:`end`}),` 恒在行尾且常显`]}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`"title" | "end"`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`"title"`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`actions`})}),(0,z.jsx)(t.td,{children:`头部操作区插槽`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`actionsVisible`})}),(0,z.jsxs)(t.td,{children:[`操作区常显。菜单打开时置 `,(0,z.jsx)(t.code,{children:`true`})]}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`false`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`active`})}),(0,z.jsx)(t.td,{children:`头部高亮`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`false`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`children`})}),(0,z.jsx)(t.td,{children:`展开区内容`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsxs)(t.td,{children:[(0,z.jsx)(t.code,{children:`expandLabel`}),` / `,(0,z.jsx)(t.code,{children:`collapseLabel`})]}),(0,z.jsx)(t.td,{children:`无障碍标签`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`string`})}),(0,z.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.Footer`}),`
`,(0,z.jsxs)(t.p,{children:[`继承 `,(0,z.jsx)(t.code,{children:`Sidebar.FooterUser`}),` 的全部属性（不传 `,(0,z.jsx)(t.code,{children:`children`}),` 时透传给内建用户区），另有：`]}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`actions`})}),(0,z.jsx)(t.td,{children:`右侧动作区插槽`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`children`})}),(0,z.jsxs)(t.td,{children:[`自定义左侧内容，传入时忽略 `,(0,z.jsx)(t.code,{children:`avatar`}),`/`,(0,z.jsx)(t.code,{children:`name`}),` 等`]}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.FooterUser`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`avatar`})}),(0,z.jsx)(t.td,{children:`头像插槽`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`name`})}),(0,z.jsx)(t.td,{children:`名称，为空时不渲染身份区`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`nameSuffix`})}),(0,z.jsx)(t.td,{children:`名称后插槽（套餐标签等）`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`menuOpen`})}),(0,z.jsx)(t.td,{children:`菜单展开态，驱动触发区高亮与箭头旋转`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`false`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`showCaret`})}),(0,z.jsx)(t.td,{children:`是否显示展开箭头`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`false`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`nameTooltip`})}),(0,z.jsx)(t.td,{children:`姓名超长时 hover 出全称提示`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`true`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`onTriggerClick`})}),(0,z.jsxs)(t.td,{children:[`点击触发区，回传 `,(0,z.jsx)(t.code,{children:`DOMRect`}),` 供手动定位浮层`]}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`(rect: DOMRect) => void`})}),(0,z.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.FooterMenuStaticRow`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`icon`})}),(0,z.jsx)(t.td,{children:`行首图标`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`children`})}),(0,z.jsx)(t.td,{children:`行内容`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.FooterBadge`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`dot`})}),(0,z.jsx)(t.td,{children:`是否显示未读红点`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`false`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`children`})}),(0,z.jsx)(t.td,{children:`被包裹的按钮`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.UsageBar`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`used`})}),(0,z.jsx)(t.td,{children:`已用量`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`number`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`total`})}),(0,z.jsx)(t.td,{children:`总量。为 0 时进度按 0 处理`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`number`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`formatNumber`})}),(0,z.jsx)(t.td,{children:`数字格式化（千分位/小数位依赖 locale）`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`(n: number) => string`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`String`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`percentSuffix`})}),(0,z.jsx)(t.td,{children:`总量后缀，如「（65%）」`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`remainingPrefix`})}),(0,z.jsx)(t.td,{children:`剩余量前缀，如「剩余 」`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ariaLabel`})}),(0,z.jsx)(t.td,{children:`进度条无障碍标签`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`string`})}),(0,z.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.UsagePanel`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`title`})}),(0,z.jsx)(t.td,{children:`面板标题，为空时不渲染头部`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`loading`})}),(0,z.jsx)(t.td,{children:`加载态，展示骨架屏并隐藏内容`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`boolean`})}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`false`})})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`children`})}),(0,z.jsx)(t.td,{children:`各额度分区`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,z.jsx)(t.h3,{children:`Sidebar.UsagePanelSection`}),`
`,(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`属性`}),(0,z.jsx)(t.th,{children:`说明`}),(0,z.jsx)(t.th,{children:`类型`}),(0,z.jsx)(t.th,{children:`默认值`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`title`})}),(0,z.jsx)(t.td,{children:`分区标题`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`extra`})}),(0,z.jsx)(t.td,{children:`标题行右侧附加信息，如到期日`}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`children`})}),(0,z.jsxs)(t.td,{children:[`分区内容，通常是一个 `,(0,z.jsx)(t.code,{children:`UsageBar`})]}),(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`ReactNode`})}),(0,z.jsx)(t.td,{children:`-`})]})]})]})]})}function tt(e={}){let{wrapper:t}=e.components||{};return t?(0,z.jsx)(t,{...e,children:(0,z.jsx)(et,{...e})}):et(e)}export{tt as default,$e as frontmatter};