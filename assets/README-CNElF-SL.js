import{I as e,R as t,W as n,q as r,s as i}from"./i18n-DmENUXWN.js";import{_ as a,a as o,c as s,d as c,f as l,g as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x}from"./Threedots-KLUUz8_V.js";import{t as S}from"./ChevronDown-CrJiypz-.js";import{t as C}from"./empty-BKsw4Wy3.js";import{t as w}from"./FolderOpen-CVYnr2Jl.js";import{t as T}from"./Plus-DKYdLUYq.js";import{t as E}from"./Trash-D2LoRvg0.js";import{n as ee,t as D}from"./DemoBox-Cs0jgQZJ.js";import{t as O}from"./button-Civ1Cgfe.js";import{t as te}from"./tag-0WWPNPrs.js";import{c as ne,d as k,l as re,n as A,r as j,s as ie,t as M,u as ae}from"./dropdown-VTSu-ViN.js";import{t as oe}from"./divider-QBG5jZW0.js";var N=r(n()),P=t(),F=N.forwardRef(({width:t=280,collapsed:n,safeAreaTop:r,children:i,className:a,style:o,...s},c)=>{let l=n!==void 0,u={"--_sidebar-width":`${t}px`,...r===void 0?{}:{"--_sidebar-safe-area-top":`${r}px`}};return l?(0,P.jsx)(`div`,{ref:c,className:e(`lg-sidebar-wrapper`,n&&`lg-sidebar-wrapper--collapsed`,a),style:{...u,...o},...s,children:(0,P.jsx)(`div`,{className:e(`lg-sidebar`,`lg-sidebar--floating`,n&&`lg-sidebar--collapsed`),children:i})}):(0,P.jsx)(`div`,{ref:c,className:e(`lg-sidebar`,a),style:{...u,...o},...s,children:i})});F.displayName=`Sidebar.Root`;var I=N.forwardRef(({children:t,className:n,style:r,...i},a)=>(0,P.jsx)(`div`,{ref:a,className:e(`lg-sidebar-header`,n),style:r,...i,children:t}));I.displayName=`Sidebar.Header`;var se=typeof window<`u`?N.useLayoutEffect:N.useEffect,L=N.forwardRef(({items:t,activeKey:n,onChange:r,className:i,style:a,...o},s)=>{let c=(0,N.useRef)(null),l=(0,N.useRef)(new Map),[u,d]=(0,N.useState)({opacity:0}),f=(0,N.useRef)(!1),p=(0,N.useCallback)(e=>{c.current=e,typeof s==`function`?s(e):s&&(s.current=e)},[s]),m=(0,N.useCallback)(e=>t=>{t?l.current.set(e,t):l.current.delete(e)},[]),h=(0,N.useCallback)(()=>{let e=c.current,t=l.current.get(n);if(!e||!t){d(e=>e.opacity===0?e:{...e,opacity:0});return}let r=e.getBoundingClientRect(),i=t.getBoundingClientRect();d({width:i.width,transform:`translateX(${i.left-r.left}px)`,opacity:1,transition:f.current?`transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)`:`none`}),f.current=!0},[n]);return se(()=>{h()},[h,t.map(e=>`${e.key}:${+!!e.disabled}`).join(`|`)]),(0,N.useEffect)(()=>{let e=c.current;if(!e||typeof ResizeObserver>`u`)return;let t=new ResizeObserver(()=>h());return t.observe(e),()=>t.disconnect()},[h]),(0,P.jsxs)(`div`,{ref:p,className:e(`lg-sidebar-tab-bar`,i),role:`tablist`,style:a,...o,children:[(0,P.jsx)(`div`,{className:`lg-sidebar-tab-bar__slider`,style:u,"aria-hidden":!0}),t.map(t=>{let i=t.key===n;return(0,P.jsxs)(`button`,{ref:m(t.key),type:`button`,role:`tab`,"aria-selected":i,disabled:t.disabled,"aria-label":t.ariaLabel,className:e(`lg-sidebar-tab-bar__tab`,i&&`lg-sidebar-tab-bar__tab--active`,t.disabled&&`lg-sidebar-tab-bar__tab--disabled`),onClick:()=>{t.disabled||r(t.key)},children:[t.icon&&(0,P.jsx)(`span`,{className:`lg-sidebar-tab-bar__tab-icon`,children:t.icon}),(0,P.jsx)(`span`,{className:`lg-sidebar-tab-bar__tab-label`,children:t.label})]},t.key)})]})});L.displayName=`Sidebar.TabBar`;function R({children:e,className:t,placement:n=`top`}){let[r,i]=(0,N.useState)(!1),a=(0,N.useRef)(null),o=(0,N.useCallback)(e=>{if(!e){i(!1);return}let t=a.current;if(!t){i(!1);return}i(t.scrollWidth-t.clientWidth>1)},[]);return typeof e!=`string`&&typeof e!=`number`?(0,P.jsx)(`span`,{className:t,children:e}):(0,P.jsx)(ee,{content:e,placement:n,open:r,onOpenChange:o,children:(0,P.jsx)(`span`,{ref:a,className:t,children:e})})}var z=N.forwardRef(({icon:t,label:n,active:r=!1,disabled:i=!1,badge:a,onClick:o,className:s,style:c,...l},u)=>(0,P.jsxs)(`button`,{ref:u,type:`button`,disabled:i,"aria-current":r?`page`:void 0,className:e(`lg-sidebar-nav-item`,r&&`lg-sidebar-nav-item--active`,i&&`lg-sidebar-nav-item--disabled`,s),style:c,onClick:()=>{i||o?.()},...l,children:[t&&(0,P.jsx)(`span`,{className:`lg-sidebar-nav-item__icon`,children:t}),(0,P.jsx)(R,{className:`lg-sidebar-nav-item__label`,children:n}),a!=null&&(0,P.jsx)(`span`,{className:`lg-sidebar-nav-item__badge`,children:a})]}));z.displayName=`Sidebar.NavItem`;function B({open:t,children:n,className:r}){return(0,P.jsx)(`div`,{className:e(`lg-sidebar-collapse`,t&&`lg-sidebar-collapse--open`,r),"aria-hidden":!t,children:(0,P.jsx)(`div`,{className:`lg-sidebar-collapse__clip`,children:(0,P.jsx)(`div`,{className:`lg-sidebar-collapse__inner`,children:n})})})}var V=N.forwardRef(({icon:t,label:n,active:r=!1,open:i,defaultOpen:a=!1,onOpenChange:o,onLabelClick:s,items:c,extra:l,disabled:u=!1,expandLabel:d,collapseLabel:f,className:p,style:m,...h},g)=>{let _=i!==void 0,[v,y]=(0,N.useState)(a),b=_?i:v,x=c.some(e=>e.active),C=r&&!x,w=()=>{if(u)return;let e=!b;_||y(e),o?.(e)},T=!!s;return(0,P.jsxs)(`div`,{ref:g,className:e(`lg-sidebar-collapsible-nav-item`,p),style:m,...h,children:[(0,P.jsxs)(`button`,{type:`button`,disabled:u,"aria-expanded":b,className:e(`lg-sidebar-nav-item`,`lg-sidebar-collapsible-nav-item__header`,C&&`lg-sidebar-nav-item--active`,u&&`lg-sidebar-nav-item--disabled`),onClick:()=>{u||(T?s?.():w())},children:[t&&(0,P.jsx)(`span`,{className:`lg-sidebar-nav-item__icon`,children:t}),(0,P.jsx)(R,{className:`lg-sidebar-nav-item__label`,children:n}),l!=null&&(0,P.jsx)(`span`,{className:`lg-sidebar-collapsible-nav-item__extra`,children:l}),T?(0,P.jsx)(`span`,{role:`button`,tabIndex:u?-1:0,"aria-label":b?f:d,"aria-expanded":b,className:`lg-sidebar-collapsible-nav-item__caret-hit`,onClick:e=>{e.stopPropagation(),w()},onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),e.stopPropagation(),w())},children:(0,P.jsx)(S,{size:16,className:e(`lg-sidebar-collapsible-nav-item__caret`,b&&`lg-sidebar-collapsible-nav-item__caret--open`)})}):(0,P.jsx)(S,{size:16,className:e(`lg-sidebar-collapsible-nav-item__caret`,b&&`lg-sidebar-collapsible-nav-item__caret--open`)})]}),(0,P.jsx)(B,{open:b,children:(0,P.jsx)(`div`,{className:`lg-sidebar-collapsible-nav-item__items`,children:c.map(t=>(0,P.jsx)(`button`,{type:`button`,disabled:t.disabled,tabIndex:b?0:-1,className:e(`lg-sidebar-collapsible-nav-item__item`,t.active&&`lg-sidebar-collapsible-nav-item__item--active`,t.disabled&&`lg-sidebar-collapsible-nav-item__item--disabled`),onClick:()=>{t.disabled||t.onClick?.()},children:(0,P.jsx)(`span`,{className:`lg-sidebar-collapsible-nav-item__item-inner`,children:(0,P.jsx)(R,{className:`lg-sidebar-collapsible-nav-item__item-text`,children:t.label})})},t.key))})})]})});V.displayName=`Sidebar.CollapsibleNavItem`;var H=N.forwardRef(({title:t,collapsible:n=!1,expanded:r=!0,onToggle:i,actions:a,className:o,style:s,...c},l)=>n?(0,P.jsxs)(`div`,{ref:l,className:e(`lg-sidebar-group-header`,o),style:s,...c,children:[(0,P.jsxs)(`button`,{type:`button`,className:`lg-sidebar-group-header__toggle`,"aria-expanded":r,onClick:()=>i?.(),children:[(0,P.jsx)(`span`,{className:`lg-sidebar-group-header__label`,children:t}),(0,P.jsx)(S,{size:16,className:e(`lg-sidebar-group-header__arrow`,r&&`lg-sidebar-group-header__arrow--open`)})]}),a!=null&&(0,P.jsx)(`div`,{className:`lg-sidebar-group-header__actions`,children:a})]}):(0,P.jsxs)(`div`,{ref:l,className:e(`lg-sidebar-group-header`,o),style:s,...c,children:[(0,P.jsx)(`span`,{className:`lg-sidebar-group-header__label`,children:t}),a!=null&&(0,P.jsx)(`div`,{className:`lg-sidebar-group-header__actions`,children:a})]}));H.displayName=`Sidebar.GroupHeader`;var U=N.forwardRef(({title:t,active:n=!1,indicator:r,prefix:i,onSelect:a,menu:o,className:s,style:c,...l},u)=>(0,P.jsxs)(`div`,{ref:u,className:e(`lg-sidebar-list-item`,n&&`lg-sidebar-list-item--active`,s),style:c,...l,children:[(0,P.jsxs)(`button`,{type:`button`,className:`lg-sidebar-list-item__btn`,onClick:()=>a?.(),children:[r&&(0,P.jsx)(`span`,{className:e(`lg-sidebar-list-item__indicator`,`lg-sidebar-list-item__indicator--${r}`),"aria-hidden":!0}),i!=null&&(0,P.jsx)(`span`,{className:`lg-sidebar-list-item__prefix`,children:i}),(0,P.jsx)(R,{className:`lg-sidebar-list-item__title`,children:t})]}),o!=null&&(0,P.jsx)(`div`,{className:`lg-sidebar-list-item__menu`,onClick:e=>e.stopPropagation(),children:o})]}));U.displayName=`Sidebar.ListItem`;var W=N.forwardRef(({icon:t,title:n,expanded:r=!1,onToggle:i,caretPlacement:a=`title`,actions:o,actionsVisible:s=!1,active:c=!1,children:l,expandLabel:u,collapseLabel:d,className:f,style:p,...m},h)=>{let g=(0,P.jsx)(S,{size:16,className:e(`lg-sidebar-collapsible-list-item__caret`,`lg-sidebar-collapsible-list-item__caret--${a}`,r&&`lg-sidebar-collapsible-list-item__caret--open`),"aria-hidden":!0});return(0,P.jsxs)(`div`,{ref:h,className:e(`lg-sidebar-collapsible-list-item`,f),style:p,...m,children:[(0,P.jsxs)(`div`,{className:e(`lg-sidebar-collapsible-list-item__header`,c&&`lg-sidebar-collapsible-list-item__header--active`,s&&`lg-sidebar-collapsible-list-item__header--actions-visible`),role:`button`,tabIndex:0,"aria-expanded":r,"aria-label":r?d:u,onClick:()=>i?.(),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i?.())},children:[(0,P.jsxs)(`div`,{className:`lg-sidebar-collapsible-list-item__title-wrap`,children:[t&&(0,P.jsx)(`span`,{className:`lg-sidebar-collapsible-list-item__icon`,children:t}),(0,P.jsx)(R,{className:`lg-sidebar-collapsible-list-item__title`,children:n}),a===`title`&&g]}),a===`end`&&g,o!=null&&(0,P.jsx)(`div`,{className:`lg-sidebar-collapsible-list-item__actions`,onClick:e=>e.stopPropagation(),children:o})]}),(0,P.jsx)(B,{open:r,children:(0,P.jsx)(`div`,{className:`lg-sidebar-collapsible-list-item__body`,children:l})})]})});W.displayName=`Sidebar.CollapsibleListItem`;var G=N.forwardRef(({avatar:t,name:n,nameSuffix:r,menuOpen:i=!1,onTriggerClick:a,actions:o,className:s,style:c,...l},u)=>(0,P.jsxs)(`div`,{ref:u,className:e(`lg-sidebar-footer`,s),style:c,...l,children:[(0,P.jsxs)(`div`,{className:e(`lg-sidebar-footer__trigger`,i&&`lg-sidebar-footer__trigger--active`),role:`button`,tabIndex:0,"aria-expanded":i,onClick:e=>a?.(e.currentTarget.getBoundingClientRect()),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),a?.(e.currentTarget.getBoundingClientRect()))},children:[t!=null&&(0,P.jsx)(`span`,{className:`lg-sidebar-footer__avatar`,children:t}),n!=null&&n!==``&&(0,P.jsxs)(`span`,{className:`lg-sidebar-footer__identity`,children:[(0,P.jsx)(`span`,{className:`lg-sidebar-footer__name`,children:n}),r!=null&&(0,P.jsx)(`span`,{className:`lg-sidebar-footer__name-suffix`,children:r})]}),(0,P.jsx)(`span`,{className:e(`lg-sidebar-footer__caret`,i&&`lg-sidebar-footer__caret--open`),"aria-hidden":!0,children:(0,P.jsx)(S,{size:16})})]}),o!=null&&(0,P.jsx)(`div`,{className:`lg-sidebar-footer__actions`,children:o})]}));G.displayName=`Sidebar.Footer`;var K=N.forwardRef(({icon:t,children:n,className:r,style:i,...a},o)=>(0,P.jsxs)(`div`,{ref:o,className:e(`lg-sidebar-footer-menu__static-row`,r),style:i,...a,children:[t!=null&&(0,P.jsx)(`span`,{"aria-hidden":!0,children:t}),(0,P.jsx)(`span`,{children:n})]}));K.displayName=`Sidebar.FooterMenuStaticRow`;var q=N.forwardRef(({dot:t=!1,children:n,className:r,style:i,...a},o)=>(0,P.jsxs)(`span`,{ref:o,className:e(`lg-sidebar-footer__badge-wrap`,r),style:i,...a,children:[n,t&&(0,P.jsx)(`span`,{className:`lg-sidebar-footer__badge-dot`,"aria-hidden":!0})]}));q.displayName=`Sidebar.FooterBadge`;var J=54;function ce(e,t){return t<=0?0:Math.min(100,Math.max(0,Math.round(e/t*100)))}function le(e){return e>=100?`exhausted`:e>=85?`warning`:`normal`}var Y=N.forwardRef(({used:t,total:n,formatNumber:r=e=>String(e),percentSuffix:i,remainingPrefix:a,ariaLabel:o,className:s,style:c,...l},u)=>{let d=ce(t,n),f=Math.round(d/100*J),p=Math.max(0,n-t),m=le(d);return(0,P.jsxs)(`div`,{ref:u,className:e(`lg-sidebar-usage`,s),style:c,...l,children:[(0,P.jsx)(`div`,{className:e(`lg-sidebar-usage__bar`,`lg-sidebar-usage__bar--${m}`),role:`progressbar`,"aria-label":o,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":d,children:Array.from({length:J},(t,n)=>(0,P.jsx)(`div`,{className:e(`lg-sidebar-usage__segment`,n<f&&`lg-sidebar-usage__segment--filled`)},n))}),(0,P.jsxs)(`div`,{className:`lg-sidebar-usage__labels`,children:[(0,P.jsxs)(`span`,{className:`lg-sidebar-usage__used`,children:[(0,P.jsx)(`strong`,{children:r(t)}),(0,P.jsx)(`span`,{className:`lg-sidebar-usage__separator`,children:`/`}),(0,P.jsxs)(`span`,{className:`lg-sidebar-usage__total`,children:[r(n),i]})]}),(0,P.jsxs)(`span`,{className:`lg-sidebar-usage__remaining`,children:[a,(0,P.jsx)(`strong`,{children:r(p)})]})]})]})});Y.displayName=`Sidebar.UsageBar`;var X=N.forwardRef(({title:t,loading:n=!1,children:r,className:i,style:a,...o},s)=>(0,P.jsxs)(`div`,{ref:s,className:e(`lg-sidebar-usage-panel`,i),style:a,...o,children:[t!=null&&(0,P.jsx)(`div`,{className:`lg-sidebar-usage-panel__header`,children:(0,P.jsx)(`span`,{className:`lg-sidebar-usage-panel__title`,children:t})}),n?(0,P.jsxs)(`div`,{className:`lg-sidebar-usage-panel__loading`,role:`status`,children:[(0,P.jsx)(`div`,{className:`lg-sidebar-usage-panel__skeleton`}),(0,P.jsx)(`div`,{className:e(`lg-sidebar-usage-panel__skeleton`,`lg-sidebar-usage-panel__skeleton--short`)})]}):(0,P.jsx)(`div`,{className:`lg-sidebar-usage-panel__body`,children:r})]}));X.displayName=`Sidebar.UsagePanel`;var Z=N.forwardRef(({title:t,extra:n,children:r,className:i,style:a,...o},s)=>(0,P.jsxs)(`div`,{ref:s,className:e(`lg-sidebar-usage-panel__section`,i),style:a,...o,children:[(0,P.jsxs)(`div`,{className:`lg-sidebar-usage-panel__section-header`,children:[(0,P.jsx)(`span`,{className:`lg-sidebar-usage-panel__section-title`,children:t}),n!=null&&(0,P.jsx)(`span`,{className:`lg-sidebar-usage-panel__section-extra`,children:n})]}),r]}));Z.displayName=`Sidebar.UsagePanelSection`;var Q={Root:F,Header:I,TabBar:L,NavItem:z,CollapsibleNavItem:V,GroupHeader:H,ListItem:U,CollapsibleListItem:W,Footer:G,FooterMenuStaticRow:K,FooterBadge:q,UsageBar:Y,UsagePanel:X,UsagePanelSection:Z};function ue(){let[e,t]=(0,N.useState)(`work`),[n,r]=(0,N.useState)(`new-task`);return(0,P.jsxs)(Q.Root,{style:{height:320,borderRadius:12,paddingTop:10},children:[(0,P.jsx)(Q.TabBar,{items:[{key:`work`,label:`工作`,icon:(0,P.jsx)(g,{size:20})},{key:`manage`,label:`管理`,icon:(0,P.jsx)(l,{size:20})}],activeKey:e,onChange:t}),(0,P.jsx)(i,{className:`lg-sidebar__scroll`,children:(0,P.jsxs)(`div`,{className:`lg-sidebar__section`,children:[(0,P.jsx)(Q.NavItem,{icon:(0,P.jsx)(o,{size:18}),label:`新任务`,active:n===`new-task`,onClick:()=>r(`new-task`)}),(0,P.jsx)(Q.NavItem,{icon:(0,P.jsx)(u,{size:18}),label:`定时任务`,active:n===`scheduled`,onClick:()=>r(`scheduled`)}),(0,P.jsx)(Q.NavItem,{icon:(0,P.jsx)(a,{size:18}),label:`智能体`,active:n===`agent`,onClick:()=>r(`agent`)})]})})]})}var de=`import { useState } from "react";
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
`;function fe(){let[e,t]=(0,N.useState)(`new-task`),[n,r]=(0,N.useState)(!0),[i,a]=(0,N.useState)(`ceo-summary`);return(0,P.jsx)(Q.Root,{width:264,style:{height:`auto`,borderRadius:12},children:(0,P.jsxs)(`div`,{className:`lg-sidebar__section`,style:{paddingBottom:8},children:[(0,P.jsx)(Q.NavItem,{icon:(0,P.jsx)(o,{size:18}),label:`新任务`,active:e===`new-task`,onClick:()=>t(`new-task`)}),(0,P.jsx)(Q.NavItem,{icon:(0,P.jsx)(f,{size:18}),label:`技能`,active:e===`skills`,onClick:()=>t(`skills`)}),(0,P.jsx)(Q.NavItem,{icon:(0,P.jsx)(s,{size:18}),label:`分析`,badge:`新`,active:e===`abi`,onClick:()=>t(`abi`)}),(0,P.jsx)(Q.NavItem,{icon:(0,P.jsx)(f,{size:18}),label:`暂不可用`,disabled:!0}),(0,P.jsx)(Q.CollapsibleNavItem,{icon:(0,P.jsx)(l,{size:18}),label:`CEO 助理`,open:n,onOpenChange:r,onLabelClick:()=>a(`ceo-home`),active:i.startsWith(`ceo`),expandLabel:`展开`,collapseLabel:`收起`,items:[{key:`ceo-summary`,label:`今日摘要`,active:i===`ceo-summary`,onClick:()=>a(`ceo-summary`)},{key:`ceo-decision`,label:`决策支持`,active:i===`ceo-decision`,onClick:()=>a(`ceo-decision`)}]})]})})}var pe=`import { useState } from "react";
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
`;function $(){return(0,P.jsxs)(M,{modal:!1,children:[(0,P.jsx)(k,{children:(0,P.jsx)(O,{variant:`text`,size:`sm`,icon:(0,P.jsx)(b,{size:16})})}),(0,P.jsxs)(A,{side:`bottom`,align:`start`,sideOffset:4,children:[(0,P.jsx)(j,{icon:(0,P.jsx)(x,{size:16}),children:`置顶`}),(0,P.jsx)(j,{icon:(0,P.jsx)(h,{size:16}),children:`重命名`}),(0,P.jsx)(j,{icon:(0,P.jsx)(E,{size:16}),danger:!0,children:`删除`})]})]})}function me(){let[e,t]=(0,N.useState)(`s1`),[n,r]=(0,N.useState)(!0);return(0,P.jsx)(Q.Root,{width:264,style:{height:`auto`,borderRadius:12},children:(0,P.jsxs)(`div`,{className:`lg-sidebar__section`,style:{paddingBottom:8},children:[(0,P.jsx)(Q.GroupHeader,{title:`置顶`,collapsible:!0,expanded:n,onToggle:()=>r(e=>!e),actions:(0,P.jsx)(O,{variant:`text`,size:`sm`,icon:(0,P.jsx)(h,{size:16})})}),n&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Q.ListItem,{title:`季度经营分析报告`,active:e===`s1`,indicator:`running`,prefix:(0,P.jsx)(x,{size:12}),onSelect:()=>t(`s1`),menu:(0,P.jsx)($,{})}),(0,P.jsx)(Q.ListItem,{title:`需要补充信息的会话`,active:e===`s2`,indicator:`clarification`,onSelect:()=>t(`s2`),menu:(0,P.jsx)($,{})}),(0,P.jsx)(Q.ListItem,{title:`已完成但未查看`,active:e===`s3`,indicator:`unread`,onSelect:()=>t(`s3`),menu:(0,P.jsx)($,{})}),(0,P.jsx)(Q.ListItem,{title:`标题很长很长很长很长的会话会被截断并在悬停时显示完整内容`,active:e===`s4`,onSelect:()=>t(`s4`),menu:(0,P.jsx)($,{})})]})]})})}var he=`import { useState } from "react";
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
`;function ge(){let[e,t]=(0,N.useState)(!0),[n,r]=(0,N.useState)(!1),[i,a]=(0,N.useState)(!1),[o,s]=(0,N.useState)(`f1`);return(0,P.jsx)(Q.Root,{width:264,style:{height:`auto`,borderRadius:12},children:(0,P.jsxs)(`div`,{className:`lg-sidebar__section`,style:{paddingBottom:8},children:[(0,P.jsxs)(Q.CollapsibleListItem,{icon:e?(0,P.jsx)(p,{size:16}):(0,P.jsx)(w,{size:16}),title:`经营分析`,expanded:e,onToggle:()=>t(e=>!e),actions:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(O,{variant:`text`,size:`sm`,icon:(0,P.jsx)(T,{size:16})}),(0,P.jsx)(O,{variant:`text`,size:`sm`,icon:(0,P.jsx)(b,{size:16})})]}),children:[(0,P.jsx)(Q.ListItem,{title:`上半年营收拆解`,active:o===`f1`,onSelect:()=>s(`f1`)}),(0,P.jsx)(Q.ListItem,{title:`成本结构对比`,active:o===`f2`,onSelect:()=>s(`f2`)})]}),(0,P.jsx)(Q.CollapsibleListItem,{icon:n?(0,P.jsx)(p,{size:16}):(0,P.jsx)(w,{size:16}),title:`空分组`,expanded:n,onToggle:()=>r(e=>!e),actions:(0,P.jsx)(O,{variant:`text`,size:`sm`,icon:(0,P.jsx)(T,{size:16})}),children:(0,P.jsx)(C.Card,{status:`empty`,description:`暂无对话`})}),(0,P.jsxs)(Q.CollapsibleListItem,{icon:(0,P.jsx)(u,{size:16}),title:`每日经营简报`,expanded:i,caretPlacement:`end`,onToggle:()=>a(e=>!e),children:[(0,P.jsx)(Q.ListItem,{title:`2026-08-11 09:00`,onSelect:()=>void 0}),(0,P.jsx)(Q.ListItem,{title:`2026-08-10 09:00`,onSelect:()=>void 0})]})]})})}var _e=`import { useState } from "react";
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
`,ve=e=>e.toLocaleString(`zh-CN`,{minimumFractionDigits:2,maximumFractionDigits:2});function ye(){let[e,t]=(0,N.useState)(!1);return(0,P.jsx)(Q.Root,{style:{height:`auto`,borderRadius:12},children:(0,P.jsxs)(M,{open:e,onOpenChange:t,children:[(0,P.jsx)(k,{children:(0,P.jsx)(Q.Footer,{avatar:(0,P.jsx)(d,{size:20}),name:`张三`,nameSuffix:(0,P.jsx)(te,{size:`sm`,shape:`pill`,children:`专业版`}),menuOpen:e,actions:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(O,{variant:`text`,size:`lg`,icon:(0,P.jsx)(y,{size:16}),children:`反馈`}),(0,P.jsx)(Q.FooterBadge,{dot:!0,children:(0,P.jsx)(O,{variant:`text`,size:`lg`,icon:(0,P.jsx)(w,{size:16}),tooltip:`产物管理`})})]})})}),(0,P.jsxs)(A,{side:`top`,align:`start`,sideOffset:4,className:`lg-sidebar-footer-menu`,children:[(0,P.jsx)(Q.FooterMenuStaticRow,{icon:(0,P.jsx)(_,{size:16}),children:`金蝶软件（中国）`}),(0,P.jsx)(ie,{}),(0,P.jsxs)(ne,{children:[(0,P.jsx)(ae,{icon:(0,P.jsx)(v,{size:16}),children:`点数用量`}),(0,P.jsx)(re,{children:(0,P.jsxs)(Q.UsagePanel,{title:`点数用量`,children:[(0,P.jsx)(Q.UsagePanelSection,{title:`套餐内`,extra:`2026年12月31日到期`,children:(0,P.jsx)(Q.UsageBar,{used:6480,total:1e4,formatNumber:ve,percentSuffix:`（65%）`,remainingPrefix:`剩余 `,ariaLabel:`套餐内已用 65%`})}),(0,P.jsx)(Q.UsagePanelSection,{title:`共享资源包`,children:(0,P.jsx)(Q.UsageBar,{used:1900,total:2e3,formatNumber:ve,percentSuffix:`（95%）`,remainingPrefix:`剩余 `,ariaLabel:`共享资源包已用 95%`})})]})})]}),(0,P.jsx)(j,{icon:(0,P.jsx)(m,{size:16}),children:`设置`}),(0,P.jsx)(ie,{}),(0,P.jsx)(j,{icon:(0,P.jsx)(c,{size:16}),danger:!0,children:`退出登录`})]})]})})}var be=`import { useState } from "react";
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
import {
  Avatar,
  Inquire,
  FolderOpen,
  BasicSettings,
  Export,
  Correlation,
  Scan,
} from "lingee-icon";

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
      <Dropdown open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownTrigger>
          <Sidebar.Footer
            avatar={<Avatar size={20} />}
            name="张三"
            nameSuffix={
              <Tag size="sm" shape="pill">
                专业版
              </Tag>
            }
            menuOpen={menuOpen}
            actions={
              <>
                <Button variant="text" size="lg" icon={<Inquire size={16} />}>
                  反馈
                </Button>
                {/* 未读角标包裹按钮，绝对定位不撑开底栏布局 */}
                <Sidebar.FooterBadge dot>
                  <Button
                    variant="text"
                    size="lg"
                    icon={<FolderOpen size={16} />}
                    tooltip="产物管理"
                  />
                </Sidebar.FooterBadge>
              </>
            }
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
            <DropdownSubTrigger icon={<Scan size={16} />}>
              点数用量
            </DropdownSubTrigger>
            <DropdownSubContent>
              <Sidebar.UsagePanel title="点数用量">
                <Sidebar.UsagePanelSection
                  title="套餐内"
                  extra="2026年12月31日到期"
                >
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
    </Sidebar.Root>
  );
}
`;function xe(){let[e,t]=(0,N.useState)(`work`),[n,r]=(0,N.useState)(`new-task`),[s,c]=(0,N.useState)(null),[m,h]=(0,N.useState)(!0),[_,v]=(0,N.useState)(!1),[b,x]=(0,N.useState)(!1),S=e=>{r(e),c(null)},E=e=>{c(e),r(``)};return(0,P.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`flex-start`},children:[(0,P.jsxs)(Q.Root,{collapsed:b,style:{height:480},children:[(0,P.jsx)(Q.Header,{style:{height:44,padding:`0 16px`},children:(0,P.jsx)(`strong`,{style:{fontSize:16},children:`Lingee`})}),(0,P.jsx)(Q.TabBar,{items:[{key:`work`,label:`工作`,icon:(0,P.jsx)(g,{size:20})},{key:`manage`,label:`管理`,icon:(0,P.jsx)(l,{size:20})}],activeKey:e,onChange:t}),(0,P.jsxs)(i,{className:`lg-sidebar__scroll`,children:[(0,P.jsxs)(`div`,{className:`lg-sidebar__section`,children:[(0,P.jsx)(Q.NavItem,{icon:(0,P.jsx)(o,{size:18}),label:`新任务`,active:n===`new-task`,onClick:()=>S(`new-task`)}),(0,P.jsx)(Q.NavItem,{icon:(0,P.jsx)(u,{size:18}),label:`定时任务`,active:n===`scheduled`,onClick:()=>S(`scheduled`)}),(0,P.jsx)(Q.NavItem,{icon:(0,P.jsx)(a,{size:18}),label:`智能体`,active:n===`agent`,onClick:()=>S(`agent`)}),(0,P.jsx)(Q.NavItem,{icon:(0,P.jsx)(f,{size:18}),label:`技能`,active:n===`skills`,onClick:()=>S(`skills`)}),(0,P.jsx)(oe,{className:`lg-sidebar__divider`})]}),(0,P.jsxs)(`div`,{className:`lg-sidebar__section`,children:[(0,P.jsx)(Q.GroupHeader,{title:`置顶`,collapsible:!0,expanded:m,onToggle:()=>h(e=>!e)}),m&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Q.ListItem,{title:`季度经营分析`,indicator:`running`,active:s===`s1`,onSelect:()=>E(`s1`)}),(0,P.jsx)(Q.ListItem,{title:`供应链风险排查`,indicator:`unread`,active:s===`s2`,onSelect:()=>E(`s2`)})]}),(0,P.jsx)(Q.GroupHeader,{title:`默认对话`}),(0,P.jsx)(Q.ListItem,{title:`上月费用明细核对`,active:s===`s3`,onSelect:()=>E(`s3`)}),(0,P.jsx)(Q.GroupHeader,{title:`分组`,collapsible:!0,expanded:!0,actions:(0,P.jsx)(O,{variant:`text`,size:`sm`,icon:(0,P.jsx)(T,{size:16})})}),(0,P.jsx)(Q.CollapsibleListItem,{icon:_?(0,P.jsx)(p,{size:16}):(0,P.jsx)(w,{size:16}),title:`财务专题`,expanded:_,onToggle:()=>v(e=>!e),actions:(0,P.jsx)(O,{variant:`text`,size:`sm`,icon:(0,P.jsx)(T,{size:16})}),children:(0,P.jsx)(C.Card,{status:`empty`,description:`暂无对话`})}),(0,P.jsx)(C.Card,{status:`loading`,description:`加载中...`,variant:`inline`})]})]}),(0,P.jsx)(Q.Footer,{avatar:(0,P.jsx)(d,{size:20}),name:`张三`,actions:(0,P.jsx)(O,{variant:`text`,size:`lg`,icon:(0,P.jsx)(y,{size:16}),children:`反馈`})})]}),(0,P.jsx)(O,{onClick:()=>x(e=>!e),children:b?`展开`:`收起`})]})}var Se=`import { useState } from "react";
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
`,Ce={title:`Sidebar 侧边栏`,description:`侧边栏复合组件，提供根容器、页签、导航项、分组、列表项、占位项与底栏，通过 Sidebar.xxx 组合使用。`};function we(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(t.h2,{children:`设计边界`}),`
`,(0,P.jsx)(t.p,{children:`Sidebar 只负责视觉与基础交互：`}),`
`,(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsx)(t.li,{children:`所有状态受控，组件不持有业务状态`}),`
`,(0,P.jsx)(t.li,{children:`不含数据请求、路由跳转与内置文案，文案一律由 props 传入`}),`
`,(0,P.jsx)(t.li,{children:`菜单、徽标、操作区、展开区内容全部以插槽注入`}),`
`]}),`
`,(0,P.jsxs)(t.p,{children:[`滚动容器、分隔线、图标按钮、下拉菜单直接复用 `,(0,P.jsx)(t.code,{children:`ScrollArea`}),`、`,(0,P.jsx)(t.code,{children:`Divider`}),`、`,(0,P.jsx)(t.code,{children:`Button`}),`、`,(0,P.jsx)(t.code,{children:`Dropdown`}),`，Sidebar 不重复提供。`]}),`
`,(0,P.jsx)(t.h2,{children:`基本用法`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`Sidebar.Root`}),` 作为根容器，内部按需组合各子组件。`]}),`
`,(0,P.jsx)(D,{source:de,children:(0,P.jsx)(ue,{})}),`
`,(0,P.jsx)(t.h2,{children:`导航项与可折叠分组`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`Sidebar.NavItem`}),` 是单层导航项；`,(0,P.jsx)(t.code,{children:`Sidebar.CollapsibleNavItem`}),` 用于带子项的分组。`]}),`
`,(0,P.jsxs)(t.p,{children:[`传入 `,(0,P.jsx)(t.code,{children:`onLabelClick`}),` 时标签区与箭头区分离命中：点标签导航、点箭头才展开。分组本身可跳转时需要这个行为，否则用户想跳转却只会展开。`]}),`
`,(0,P.jsx)(D,{source:pe,children:(0,P.jsx)(fe,{})}),`
`,(0,P.jsx)(t.h2,{children:`列表项`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`Sidebar.ListItem`}),` 用于会话行、执行记录行。`,(0,P.jsx)(t.code,{children:`indicator`}),` 提供三种状态指示器：`,(0,P.jsx)(t.code,{children:`running`}),`、`,(0,P.jsx)(t.code,{children:`clarification`}),` 带呼吸动画，`,(0,P.jsx)(t.code,{children:`unread`}),` 为静态点。`]}),`
`,(0,P.jsxs)(t.p,{children:[`菜单以 `,(0,P.jsx)(t.code,{children:`menu`}),` 插槽传入，可自由选择 `,(0,P.jsx)(t.code,{children:`Dropdown`}),` 或自有实现。`]}),`
`,(0,P.jsx)(D,{source:he,children:(0,P.jsx)(me,{})}),`
`,(0,P.jsx)(t.h2,{children:`可折叠列表项`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`Sidebar.CollapsibleListItem`}),` 用于文件夹节点与定时任务分组 —— 两者结构一致，共用同一组件。展开区内容完全由业务渲染。`]}),`
`,(0,P.jsxs)(t.p,{children:[`操作区悬停才显现。菜单打开期间需传 `,(0,P.jsx)(t.code,{children:`actionsVisible`}),` 锁定显示，否则指针移到浮层后按钮会消失。`]}),`
`,(0,P.jsxs)(t.p,{children:[`箭头位置由 `,(0,P.jsx)(t.code,{children:`caretPlacement`}),` 控制，两种用法视觉规则不同：`]}),`
`,(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.code,{children:`title`}),`（默认）—— 箭头紧跟标题，常态隐藏、悬停显现。用于文件夹节点`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.code,{children:`end`}),` —— 箭头恒在行尾且常显。用于定时任务分组`]}),`
`]}),`
`,(0,P.jsx)(D,{source:_e,children:(0,P.jsx)(ge,{})}),`
`,(0,P.jsx)(t.h2,{children:`占位项`}),`
`,(0,P.jsxs)(t.p,{children:[`列表内「加载中 / 无数据 / 加载失败」三态占位使用 `,(0,P.jsx)(t.a,{href:`/components/empty`,children:(0,P.jsx)(t.code,{children:`Empty.Card`})}),`，
同档位下三态等高，状态切换时列表不跳动。`]}),`
`,(0,P.jsx)(t.h2,{children:`底栏`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`Sidebar.Footer`}),` 是一行左右结构：左侧用户区（头像 + 名称 + 后缀徽标 + 展开箭头）占满剩余宽度，右侧动作区靠右贴边，整体高度固定 40px。`]}),`
`,(0,P.jsx)(t.p,{children:`用户菜单与动作按钮均以插槽传入 —— 各业务的菜单项集合差异极大，组件只收敛骨架。`}),`
`,(0,P.jsx)(t.p,{children:`宽度不足时只压缩名称，后缀徽标与动作区始终完整可见。名称与头像、徽标之间的间距由名称自身的左右 padding 提供而非 flex gap：用 gap 会在头像/名称/箭头三处都产生固定间隙，压缩名称的可用宽度。`}),`
`,(0,P.jsx)(t.p,{children:`菜单浮层的尺寸规格与两处通用视觉也已收敛：`}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`用法`}),(0,P.jsx)(t.th,{children:`说明`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`lg-sidebar-footer-menu`})}),(0,P.jsxs)(t.td,{children:[`加在 `,(0,P.jsx)(t.code,{children:`DropdownContent`}),` 上，提供 220px 宽度与 32px 项高等规格，消费方只需填菜单项`]})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`Sidebar.FooterMenuStaticRow`})}),(0,P.jsxs)(t.td,{children:[`只读信息行（如当前租户）。与 `,(0,P.jsx)(t.code,{children:`DropdownItem`}),` 等高，使「可切换→二级菜单 / 不可切换→静态行」两种形态不产生跳动`]})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`Sidebar.FooterBadge`})}),(0,P.jsx)(t.td,{children:`包裹动作按钮显示未读红点。绝对定位不占位，避免撑开按钮导致底栏位移`})]})]})]}),`
`,(0,P.jsx)(t.h2,{children:`用量面板`}),`
`,(0,P.jsxs)(t.p,{children:[`底栏菜单的二级浮层（如「点数用量」）由 `,(0,P.jsx)(t.code,{children:`Sidebar.UsagePanel`}),` + `,(0,P.jsx)(t.code,{children:`UsagePanelSection`}),` + `,(0,P.jsx)(t.code,{children:`UsageBar`}),` 组合。`]}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`UsageBar`}),` 是分段式用量条 —— 用离散色块而非连续进度条，额度类数据需要「格子」的计量意味。固定 54 段，按已用比例填充，并按比例切换三档色阶：`]}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`已用比例`}),(0,P.jsx)(t.th,{children:`色阶`}),(0,P.jsx)(t.th,{children:`颜色`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:`< 85%`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`normal`})}),(0,P.jsx)(t.td,{children:`成功色`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:`85% ~ 99%`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`warning`})}),(0,P.jsx)(t.td,{children:`警示橙`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:`= 100%`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`exhausted`})}),(0,P.jsx)(t.td,{children:`灰`})]})]})]}),`
`,(0,P.jsxs)(t.p,{children:[`数字格式化通过 `,(0,P.jsx)(t.code,{children:`formatNumber`}),` 注入 —— 千分位与小数位依赖语言环境，组件库不持有 locale。文案（百分比后缀、剩余量前缀）同样由 props 传入。`]}),`
`,(0,P.jsx)(t.pre,{children:(0,P.jsx)(t.code,{className:`language-tsx`,children:`<DropdownSub>
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
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`total`}),` 为 0 时进度按 0 处理（不产生 NaN）；`,(0,P.jsx)(t.code,{children:`used`}),` 超过 `,(0,P.jsx)(t.code,{children:`total`}),` 时按满值处理且剩余量不为负。作为 `,(0,P.jsx)(t.code,{children:`DropdownSubContent`}),` 内容使用时，面板会自动消掉自身圆角以避免与外层浮层双层描边。`]}),`
`,(0,P.jsx)(D,{source:be,children:(0,P.jsx)(ye,{})}),`
`,(0,P.jsx)(t.h2,{children:`完整组合`}),`
`,(0,P.jsx)(t.p,{children:`包含折叠、页签、导航、分组、会话列表、文件夹与底栏。`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`Sidebar.Root`}),` 传入 `,(0,P.jsx)(t.code,{children:`collapsed`}),` 后启用双层结构（外层收缩宽度、内层脱离文档流），内容不会随宽度收缩被压扁。`]}),`
`,(0,P.jsx)(D,{source:Se,children:(0,P.jsx)(xe,{})}),`
`,(0,P.jsx)(t.h2,{children:`作用域工具类`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`Sidebar.Root`}),` 内提供两个类，供内部元素复用，无需消费方重复实现：`]}),`
`,(0,P.jsxs)(t.p,{children:[`这些类由 `,(0,P.jsx)(t.code,{children:`Sidebar`}),` 提供，消费方直接使用即可，无需自行补样式：`]}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`类名`}),(0,P.jsx)(t.th,{children:`用途`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`lg-sidebar__scroll`})}),(0,P.jsxs)(t.td,{children:[`滚动容器：隐藏滚动条 + 底部渐变遮罩。加在 `,(0,P.jsx)(t.code,{children:`ScrollArea`}),` 上`]})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`lg-sidebar__sticky`})}),(0,P.jsx)(t.td,{children:`吸顶元素：铺满整行背景并内缩，避免吸顶时两侧透出下方内容`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`lg-sidebar__section`})}),(0,P.jsxs)(t.td,{children:[`内容区块：统一左右内缩。`,(0,P.jsx)(t.strong,{children:`不要再加 flex gap`}),` —— 项间距已由各项自带`]})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`lg-sidebar__divider`})}),(0,P.jsxs)(t.td,{children:[`侧边栏内 `,(0,P.jsx)(t.code,{children:`Divider`}),` 的间距`]})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`lg-sidebar__gradient-badge`})}),(0,P.jsx)(t.td,{children:`渐变文字徽标，用于分组头的营销类标识（如「限时试用」）`})]})]})]}),`
`,(0,P.jsx)(t.h2,{children:`脱离 Root 单独使用`}),`
`,(0,P.jsxs)(t.p,{children:[`各子组件都可以独立使用，不要求外层包 `,(0,P.jsx)(t.code,{children:`Sidebar.Root`}),` —— 例如在设置页里只用一组 `,(0,P.jsx)(t.code,{children:`Sidebar.NavItem`}),` 做左侧导航：`]}),`
`,(0,P.jsx)(t.pre,{children:(0,P.jsx)(t.code,{className:`language-tsx`,children:`<div style={{ width: 200 }}>
  <Sidebar.NavItem icon={<BasicSettings size={18} />} label="通用" active />
  <Sidebar.NavItem icon={<Enterprise size={18} />} label="账号" />
</div>
`})}),`
`,(0,P.jsxs)(t.p,{children:[`尺寸、配色、悬停/选中态、折叠动画均内置默认值，无 `,(0,P.jsx)(t.code,{children:`Root`}),` 祖先时同样完整生效。若外层是 `,(0,P.jsx)(t.code,{children:`Sidebar.Root`}),` 或任意祖先覆盖了 Token，子组件会自动跟随。`]}),`
`,(0,P.jsx)(t.p,{children:`需要注意两点：`}),`
`,(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`底色需自备`}),` —— `,(0,P.jsx)(t.code,{children:`--_sidebar-bg`}),` 只作用在 `,(0,P.jsx)(t.code,{children:`Sidebar.Root`}),` 自身，独立使用时容器背景由业务决定`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsxs)(t.strong,{children:[(0,P.jsx)(t.code,{children:`lg-sidebar__scroll`}),` 的遮罩终点色`]}),`默认取 `,(0,P.jsx)(t.code,{children:`--_sidebar-bg`}),`。若容器底色不同，需覆盖 `,(0,P.jsx)(t.code,{children:`--_sidebar-scroll-mask-color`}),`，否则遮罩边缘会露出色差`]}),`
`]}),`
`,(0,P.jsx)(t.h2,{children:`Token 覆盖`}),`
`,(0,P.jsxs)(t.p,{children:[`尺寸与配色由组件级 Token 派生，覆盖 Token 即可整体调整。Token 在 `,(0,P.jsx)(t.code,{children:`.lg-sidebar`}),` 上显式声明，同时每处使用点都带同值 fallback，因此在 `,(0,P.jsx)(t.code,{children:`Root`}),`、任意祖先或子组件自身上覆盖都会生效：`]}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`Token`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`--_sidebar-width`})}),(0,P.jsx)(t.td,{children:`展开宽度`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`280px`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`--_sidebar-item-height`})}),(0,P.jsx)(t.td,{children:`项高度`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`32px`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`--_sidebar-item-radius`})}),(0,P.jsx)(t.td,{children:`项圆角`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`20px`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`--_sidebar-item-color`})}),(0,P.jsx)(t.td,{children:`项文字色`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`--lg-g-fg-color-black-strong`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`--_sidebar-item-active-color`})}),(0,P.jsx)(t.td,{children:`选中文字色`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`--lg-g-fg-color-black-intense`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`--_sidebar-item-hover-bg`})}),(0,P.jsx)(t.td,{children:`悬停底色`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`--lg-g-bg-color-black-faint`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`--_sidebar-item-active-bg`})}),(0,P.jsx)(t.td,{children:`选中底色`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`--lg-g-bg-color-black-subtle`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`--_sidebar-bg`})}),(0,P.jsxs)(t.td,{children:[`侧边栏底色。暗色下自动切换为 `,(0,P.jsx)(t.code,{children:`#12121c`})]}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`#f1f1f6`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`--_sidebar-scroll-mask-color`})}),(0,P.jsxs)(t.td,{children:[`底部遮罩终点色，默认跟随 `,(0,P.jsx)(t.code,{children:`--_sidebar-bg`})]}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`var(--_sidebar-bg)`})})]})]})]}),`
`,(0,P.jsxs)(t.p,{children:[`用 `,(0,P.jsx)(t.code,{children:`Sidebar.Root`}),` 时底色已内置，消费方无需自行设置背景；遮罩色也会自动跟随，不必手动同步。`]}),`
`,(0,P.jsx)(t.h2,{children:`API`}),`
`,(0,P.jsx)(t.h3,{children:`Sidebar.Root`}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`属性`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`类型`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`width`})}),(0,P.jsx)(t.td,{children:`展开宽度（px）`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`number`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`280`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`collapsed`})}),(0,P.jsx)(t.td,{children:`折叠态。传入即启用双层结构与宽度过渡；不传则宽度恒定`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`safeAreaTop`})}),(0,P.jsx)(t.td,{children:`顶部安全区高度（px），用于让位固定顶栏`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`number`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`0`})})]})]})]}),`
`,(0,P.jsx)(t.h3,{children:`Sidebar.Header`}),`
`,(0,P.jsxs)(t.p,{children:[`纯插槽容器。平台相关处理（窗口拖拽区、系统按钮避让）由消费方通过 `,(0,P.jsx)(t.code,{children:`children`}),` 与 `,(0,P.jsx)(t.code,{children:`style`}),` 注入。`]}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`属性`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`类型`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsx)(t.tbody,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`children`})}),(0,P.jsx)(t.td,{children:`内容`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]})})]}),`
`,(0,P.jsx)(t.h3,{children:`Sidebar.TabBar`}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`属性`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`类型`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`items`})}),(0,P.jsxs)(t.td,{children:[`页签列表 `,(0,P.jsx)(t.code,{children:`{ key, label, icon?, disabled?, ariaLabel? }`})]}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`SidebarTabItem[]`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`activeKey`})}),(0,P.jsx)(t.td,{children:`当前选中 key`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`string`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`onChange`})}),(0,P.jsx)(t.td,{children:`切换回调`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`(key: string) => void`})}),(0,P.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,P.jsxs)(t.p,{children:[`页签显隐过滤（如权限控制）请在传入 `,(0,P.jsx)(t.code,{children:`items`}),` 前完成，组件不介入。`]}),`
`,(0,P.jsx)(t.h3,{children:`Sidebar.NavItem`}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`属性`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`类型`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`icon`})}),(0,P.jsx)(t.td,{children:`左侧图标`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`label`})}),(0,P.jsx)(t.td,{children:`文本`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`active`})}),(0,P.jsx)(t.td,{children:`选中态`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`false`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`disabled`})}),(0,P.jsx)(t.td,{children:`禁用态`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`false`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`badge`})}),(0,P.jsx)(t.td,{children:`右侧徽章插槽。传纯文本即得药丸样式；传自带样式的节点可覆盖`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`onClick`})}),(0,P.jsx)(t.td,{children:`点击回调`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`() => void`})}),(0,P.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,P.jsx)(t.p,{children:`文本溢出时自动显示 Tooltip，无需外层包裹。`}),`
`,(0,P.jsx)(t.h3,{children:`Sidebar.CollapsibleNavItem`}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`属性`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`类型`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`icon`})}),(0,P.jsx)(t.td,{children:`左侧图标`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`label`})}),(0,P.jsx)(t.td,{children:`分组标题`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`active`})}),(0,P.jsx)(t.td,{children:`头部高亮。内部与子项 active 互斥`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`false`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`open`})}),(0,P.jsx)(t.td,{children:`受控展开态`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`defaultOpen`})}),(0,P.jsx)(t.td,{children:`非受控初始展开态`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`false`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`onOpenChange`})}),(0,P.jsx)(t.td,{children:`展开态变化回调`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`(next: boolean) => void`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`onLabelClick`})}),(0,P.jsx)(t.td,{children:`标签区点击。传入后标签与箭头分离命中`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`() => void`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`items`})}),(0,P.jsxs)(t.td,{children:[`子项列表 `,(0,P.jsx)(t.code,{children:`{ key, label, active?, disabled?, onClick? }`})]}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`SidebarCollapsibleNavItemChild[]`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`extra`})}),(0,P.jsx)(t.td,{children:`头部右侧插槽`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`disabled`})}),(0,P.jsx)(t.td,{children:`禁用态`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`false`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsxs)(t.td,{children:[(0,P.jsx)(t.code,{children:`expandLabel`}),` / `,(0,P.jsx)(t.code,{children:`collapseLabel`})]}),(0,P.jsx)(t.td,{children:`箭头无障碍标签`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`string`})}),(0,P.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,P.jsx)(t.h3,{children:`Sidebar.GroupHeader`}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`属性`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`类型`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`title`})}),(0,P.jsx)(t.td,{children:`标题`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`collapsible`})}),(0,P.jsx)(t.td,{children:`可折叠`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`false`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`expanded`})}),(0,P.jsxs)(t.td,{children:[`展开态，仅 `,(0,P.jsx)(t.code,{children:`collapsible`}),` 时生效`]}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`true`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`onToggle`})}),(0,P.jsx)(t.td,{children:`切换回调`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`() => void`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`actions`})}),(0,P.jsx)(t.td,{children:`右侧操作区插槽`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,P.jsx)(t.p,{children:`折叠箭头与操作区悬停显现，展开态箭头常显。`}),`
`,(0,P.jsx)(t.h3,{children:`Sidebar.ListItem`}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`属性`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`类型`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`title`})}),(0,P.jsx)(t.td,{children:`标题`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`active`})}),(0,P.jsx)(t.td,{children:`选中态`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`false`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`indicator`})}),(0,P.jsx)(t.td,{children:`状态指示器`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`"running" | "clarification" | "unread" | null`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`prefix`})}),(0,P.jsx)(t.td,{children:`标题前插槽`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`onSelect`})}),(0,P.jsx)(t.td,{children:`点击回调`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`() => void`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`menu`})}),(0,P.jsx)(t.td,{children:`右侧菜单插槽（需自带触发按钮）`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,P.jsx)(t.h3,{children:`Sidebar.CollapsibleListItem`}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`属性`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`类型`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`icon`})}),(0,P.jsx)(t.td,{children:`头部图标。需随展开态切换时由消费方传入对应图标`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`title`})}),(0,P.jsx)(t.td,{children:`标题`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`expanded`})}),(0,P.jsx)(t.td,{children:`展开态`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`false`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`onToggle`})}),(0,P.jsx)(t.td,{children:`切换回调`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`() => void`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`caretPlacement`})}),(0,P.jsxs)(t.td,{children:[`箭头位置。`,(0,P.jsx)(t.code,{children:`title`}),` 紧跟标题、悬停才显现；`,(0,P.jsx)(t.code,{children:`end`}),` 恒在行尾且常显`]}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`"title" | "end"`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`"title"`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`actions`})}),(0,P.jsx)(t.td,{children:`头部操作区插槽`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`actionsVisible`})}),(0,P.jsxs)(t.td,{children:[`操作区常显。菜单打开时置 `,(0,P.jsx)(t.code,{children:`true`})]}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`false`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`active`})}),(0,P.jsx)(t.td,{children:`头部高亮`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`false`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`children`})}),(0,P.jsx)(t.td,{children:`展开区内容`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsxs)(t.td,{children:[(0,P.jsx)(t.code,{children:`expandLabel`}),` / `,(0,P.jsx)(t.code,{children:`collapseLabel`})]}),(0,P.jsx)(t.td,{children:`无障碍标签`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`string`})}),(0,P.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,P.jsx)(t.h3,{children:`Sidebar.Footer`}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`属性`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`类型`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`avatar`})}),(0,P.jsx)(t.td,{children:`头像插槽`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`name`})}),(0,P.jsx)(t.td,{children:`名称，为空时不渲染身份区`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`nameSuffix`})}),(0,P.jsx)(t.td,{children:`名称后插槽（套餐标签等）`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`menuOpen`})}),(0,P.jsx)(t.td,{children:`菜单展开态，驱动触发区高亮与箭头旋转`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`false`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`onTriggerClick`})}),(0,P.jsxs)(t.td,{children:[`点击触发区，回传 `,(0,P.jsx)(t.code,{children:`DOMRect`}),` 供手动定位浮层`]}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`(rect: DOMRect) => void`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`actions`})}),(0,P.jsx)(t.td,{children:`右侧动作区插槽`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,P.jsx)(t.h3,{children:`Sidebar.FooterMenuStaticRow`}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`属性`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`类型`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`icon`})}),(0,P.jsx)(t.td,{children:`行首图标`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`children`})}),(0,P.jsx)(t.td,{children:`行内容`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,P.jsx)(t.h3,{children:`Sidebar.FooterBadge`}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`属性`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`类型`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`dot`})}),(0,P.jsx)(t.td,{children:`是否显示未读红点`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`false`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`children`})}),(0,P.jsx)(t.td,{children:`被包裹的按钮`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,P.jsx)(t.h3,{children:`Sidebar.UsageBar`}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`属性`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`类型`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`used`})}),(0,P.jsx)(t.td,{children:`已用量`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`number`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`total`})}),(0,P.jsx)(t.td,{children:`总量。为 0 时进度按 0 处理`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`number`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`formatNumber`})}),(0,P.jsx)(t.td,{children:`数字格式化（千分位/小数位依赖 locale）`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`(n: number) => string`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`String`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`percentSuffix`})}),(0,P.jsx)(t.td,{children:`总量后缀，如「（65%）」`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`remainingPrefix`})}),(0,P.jsx)(t.td,{children:`剩余量前缀，如「剩余 」`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ariaLabel`})}),(0,P.jsx)(t.td,{children:`进度条无障碍标签`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`string`})}),(0,P.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,P.jsx)(t.h3,{children:`Sidebar.UsagePanel`}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`属性`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`类型`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`title`})}),(0,P.jsx)(t.td,{children:`面板标题，为空时不渲染头部`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`loading`})}),(0,P.jsx)(t.td,{children:`加载态，展示骨架屏并隐藏内容`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`boolean`})}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`false`})})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`children`})}),(0,P.jsx)(t.td,{children:`各额度分区`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,P.jsx)(t.h3,{children:`Sidebar.UsagePanelSection`}),`
`,(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`属性`}),(0,P.jsx)(t.th,{children:`说明`}),(0,P.jsx)(t.th,{children:`类型`}),(0,P.jsx)(t.th,{children:`默认值`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`title`})}),(0,P.jsx)(t.td,{children:`分区标题`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`extra`})}),(0,P.jsx)(t.td,{children:`标题行右侧附加信息，如到期日`}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`children`})}),(0,P.jsxs)(t.td,{children:[`分区内容，通常是一个 `,(0,P.jsx)(t.code,{children:`UsageBar`})]}),(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`ReactNode`})}),(0,P.jsx)(t.td,{children:`-`})]})]})]})]})}function Te(e={}){let{wrapper:t}=e.components||{};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(we,{...e})}):we(e)}export{Te as default,Ce as frontmatter};