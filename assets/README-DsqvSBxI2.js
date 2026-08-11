import{I as e,R as t,W as n,q as r,s as i}from"./i18n-C43t6VQe.js";import{_ as a,a as o,c as s,d as c,f as l,g as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x,v as S}from"./Threedots-C8m_wqdI.js";import{s as C}from"./provider-sxHNE1gl.js";import{t as w}from"./ChevronDown-CJ-CtgiB.js";import{t as T}from"./LoaderCircle-CIh_4ubB.js";import{t as E}from"./Plus-DeGvFHHj.js";import{t as ee}from"./Trash-y8e3A2uP.js";import{n as D,t as O}from"./DemoBox-C3fXWtGv.js";import{t as k}from"./button-8AVe2tg2.js";import{t as A}from"./tag-BBFQkdYR.js";import{d as j,n as M,r as N,s as te,t as P}from"./dropdown-CEteQUJm.js";import{t as F}from"./divider-BW_g4tXi.js";var I=r(n()),L=t(),R=I.forwardRef(({width:t=280,collapsed:n,safeAreaTop:r,children:i,className:a,style:o,...s},c)=>{let l=n!==void 0,u={"--_sidebar-width":`${t}px`,...r===void 0?{}:{"--_sidebar-safe-area-top":`${r}px`}};return l?(0,L.jsx)(`div`,{ref:c,className:e(`lg-sidebar-wrapper`,n&&`lg-sidebar-wrapper--collapsed`,a),style:{...u,...o},...s,children:(0,L.jsx)(`div`,{className:e(`lg-sidebar`,`lg-sidebar--floating`,n&&`lg-sidebar--collapsed`),children:i})}):(0,L.jsx)(`div`,{ref:c,className:e(`lg-sidebar`,a),style:{...u,...o},...s,children:i})});R.displayName=`Sidebar.Root`;var z=I.forwardRef(({children:t,className:n,style:r,...i},a)=>(0,L.jsx)(`div`,{ref:a,className:e(`lg-sidebar-header`,n),style:r,...i,children:t}));z.displayName=`Sidebar.Header`;var ne=typeof window<`u`?I.useLayoutEffect:I.useEffect,B=I.forwardRef(({items:t,activeKey:n,onChange:r,className:i,style:a,...o},s)=>{let c=(0,I.useRef)(null),l=(0,I.useRef)(new Map),[u,d]=(0,I.useState)({opacity:0}),f=(0,I.useRef)(!1),p=(0,I.useCallback)(e=>{c.current=e,typeof s==`function`?s(e):s&&(s.current=e)},[s]),m=(0,I.useCallback)(e=>t=>{t?l.current.set(e,t):l.current.delete(e)},[]),h=(0,I.useCallback)(()=>{let e=c.current,t=l.current.get(n);if(!e||!t){d(e=>e.opacity===0?e:{...e,opacity:0});return}let r=e.getBoundingClientRect(),i=t.getBoundingClientRect();d({width:i.width,transform:`translateX(${i.left-r.left}px)`,opacity:1,transition:f.current?`transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)`:`none`}),f.current=!0},[n]);return ne(()=>{h()},[h,t.map(e=>`${e.key}:${+!!e.disabled}`).join(`|`)]),(0,I.useEffect)(()=>{let e=c.current;if(!e||typeof ResizeObserver>`u`)return;let t=new ResizeObserver(()=>h());return t.observe(e),()=>t.disconnect()},[h]),(0,L.jsxs)(`div`,{ref:p,className:e(`lg-sidebar-tab-bar`,i),role:`tablist`,style:a,...o,children:[(0,L.jsx)(`div`,{className:`lg-sidebar-tab-bar__slider`,style:u,"aria-hidden":!0}),t.map(t=>{let i=t.key===n;return(0,L.jsxs)(`button`,{ref:m(t.key),type:`button`,role:`tab`,"aria-selected":i,disabled:t.disabled,"aria-label":t.ariaLabel,className:e(`lg-sidebar-tab-bar__tab`,i&&`lg-sidebar-tab-bar__tab--active`,t.disabled&&`lg-sidebar-tab-bar__tab--disabled`),onClick:()=>{t.disabled||r(t.key)},children:[t.icon&&(0,L.jsx)(`span`,{className:`lg-sidebar-tab-bar__tab-icon`,children:t.icon}),(0,L.jsx)(`span`,{className:`lg-sidebar-tab-bar__tab-label`,children:t.label})]},t.key)})]})});B.displayName=`Sidebar.TabBar`;function V({children:e,className:t,placement:n=`top`}){let[r,i]=(0,I.useState)(!1),a=(0,I.useRef)(null),o=(0,I.useCallback)(e=>{if(!e){i(!1);return}let t=a.current;if(!t){i(!1);return}i(t.scrollWidth-t.clientWidth>1)},[]);return typeof e!=`string`&&typeof e!=`number`?(0,L.jsx)(`span`,{className:t,children:e}):(0,L.jsx)(D,{content:e,placement:n,open:r,onOpenChange:o,children:(0,L.jsx)(`span`,{ref:a,className:t,children:e})})}var H=I.forwardRef(({icon:t,label:n,active:r=!1,disabled:i=!1,badge:a,onClick:o,className:s,style:c,...l},u)=>(0,L.jsxs)(`button`,{ref:u,type:`button`,disabled:i,"aria-current":r?`page`:void 0,className:e(`lg-sidebar-nav-item`,r&&`lg-sidebar-nav-item--active`,i&&`lg-sidebar-nav-item--disabled`,s),style:c,onClick:()=>{i||o?.()},...l,children:[t&&(0,L.jsx)(`span`,{className:`lg-sidebar-nav-item__icon`,children:t}),(0,L.jsx)(V,{className:`lg-sidebar-nav-item__label`,children:n}),a!=null&&(0,L.jsx)(`span`,{className:`lg-sidebar-nav-item__badge`,children:a})]}));H.displayName=`Sidebar.NavItem`;function U({open:t,children:n,className:r}){return(0,L.jsx)(`div`,{className:e(`lg-sidebar-collapse`,t&&`lg-sidebar-collapse--open`,r),"aria-hidden":!t,children:(0,L.jsx)(`div`,{className:`lg-sidebar-collapse__clip`,children:(0,L.jsx)(`div`,{className:`lg-sidebar-collapse__inner`,children:n})})})}var W=I.forwardRef(({icon:t,label:n,active:r=!1,open:i,defaultOpen:a=!1,onOpenChange:o,onLabelClick:s,items:c,extra:l,disabled:u=!1,expandLabel:d,collapseLabel:f,className:p,style:m,...h},g)=>{let _=i!==void 0,[v,y]=(0,I.useState)(a),b=_?i:v,x=c.some(e=>e.active),S=r&&!x,C=()=>{if(u)return;let e=!b;_||y(e),o?.(e)},T=!!s;return(0,L.jsxs)(`div`,{ref:g,className:e(`lg-sidebar-collapsible-nav-item`,p),style:m,...h,children:[(0,L.jsxs)(`button`,{type:`button`,disabled:u,"aria-expanded":b,className:e(`lg-sidebar-nav-item`,`lg-sidebar-collapsible-nav-item__header`,S&&`lg-sidebar-nav-item--active`,u&&`lg-sidebar-nav-item--disabled`),onClick:()=>{u||(T?s?.():C())},children:[t&&(0,L.jsx)(`span`,{className:`lg-sidebar-nav-item__icon`,children:t}),(0,L.jsx)(V,{className:`lg-sidebar-nav-item__label`,children:n}),l!=null&&(0,L.jsx)(`span`,{className:`lg-sidebar-collapsible-nav-item__extra`,children:l}),T?(0,L.jsx)(`span`,{role:`button`,tabIndex:u?-1:0,"aria-label":b?f:d,"aria-expanded":b,className:`lg-sidebar-collapsible-nav-item__caret-hit`,onClick:e=>{e.stopPropagation(),C()},onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),e.stopPropagation(),C())},children:(0,L.jsx)(w,{size:16,className:e(`lg-sidebar-collapsible-nav-item__caret`,b&&`lg-sidebar-collapsible-nav-item__caret--open`)})}):(0,L.jsx)(w,{size:16,className:e(`lg-sidebar-collapsible-nav-item__caret`,b&&`lg-sidebar-collapsible-nav-item__caret--open`)})]}),(0,L.jsx)(U,{open:b,children:(0,L.jsx)(`div`,{className:`lg-sidebar-collapsible-nav-item__items`,children:c.map(t=>(0,L.jsx)(`button`,{type:`button`,disabled:t.disabled,tabIndex:b?0:-1,className:e(`lg-sidebar-collapsible-nav-item__item`,t.active&&`lg-sidebar-collapsible-nav-item__item--active`,t.disabled&&`lg-sidebar-collapsible-nav-item__item--disabled`),onClick:()=>{t.disabled||t.onClick?.()},children:(0,L.jsx)(`span`,{className:`lg-sidebar-collapsible-nav-item__item-inner`,children:(0,L.jsx)(V,{className:`lg-sidebar-collapsible-nav-item__item-text`,children:t.label})})},t.key))})})]})});W.displayName=`Sidebar.CollapsibleNavItem`;var G=I.forwardRef(({title:t,collapsible:n=!1,expanded:r=!0,onToggle:i,actions:a,className:o,style:s,...c},l)=>n?(0,L.jsxs)(`div`,{ref:l,className:e(`lg-sidebar-group-header`,o),style:s,...c,children:[(0,L.jsxs)(`button`,{type:`button`,className:`lg-sidebar-group-header__toggle`,"aria-expanded":r,onClick:()=>i?.(),children:[(0,L.jsx)(`span`,{className:`lg-sidebar-group-header__label`,children:t}),(0,L.jsx)(w,{size:16,className:e(`lg-sidebar-group-header__arrow`,r&&`lg-sidebar-group-header__arrow--open`)})]}),a!=null&&(0,L.jsx)(`div`,{className:`lg-sidebar-group-header__actions`,children:a})]}):(0,L.jsxs)(`div`,{ref:l,className:e(`lg-sidebar-group-header`,o),style:s,...c,children:[(0,L.jsx)(`span`,{className:`lg-sidebar-group-header__label`,children:t}),a!=null&&(0,L.jsx)(`div`,{className:`lg-sidebar-group-header__actions`,children:a})]}));G.displayName=`Sidebar.GroupHeader`;var K=I.forwardRef(({title:t,active:n=!1,indicator:r,prefix:i,onSelect:a,menu:o,className:s,style:c,...l},u)=>(0,L.jsxs)(`div`,{ref:u,className:e(`lg-sidebar-list-item`,n&&`lg-sidebar-list-item--active`,s),style:c,...l,children:[(0,L.jsxs)(`button`,{type:`button`,className:`lg-sidebar-list-item__btn`,onClick:()=>a?.(),children:[r&&(0,L.jsx)(`span`,{className:e(`lg-sidebar-list-item__indicator`,`lg-sidebar-list-item__indicator--${r}`),"aria-hidden":!0}),i!=null&&(0,L.jsx)(`span`,{className:`lg-sidebar-list-item__prefix`,children:i}),(0,L.jsx)(V,{className:`lg-sidebar-list-item__title`,children:t})]}),o!=null&&(0,L.jsx)(`div`,{className:`lg-sidebar-list-item__menu`,onClick:e=>e.stopPropagation(),children:o})]}));K.displayName=`Sidebar.ListItem`;var q=I.forwardRef(({icon:t,title:n,expanded:r=!1,onToggle:i,actions:a,actionsVisible:o=!1,active:s=!1,children:c,expandLabel:l,collapseLabel:u,className:d,style:f,...p},m)=>(0,L.jsxs)(`div`,{ref:m,className:e(`lg-sidebar-collapsible-list-item`,d),style:f,...p,children:[(0,L.jsxs)(`div`,{className:e(`lg-sidebar-collapsible-list-item__header`,s&&`lg-sidebar-collapsible-list-item__header--active`,o&&`lg-sidebar-collapsible-list-item__header--actions-visible`),role:`button`,tabIndex:0,"aria-expanded":r,"aria-label":r?u:l,onClick:()=>i?.(),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i?.())},children:[(0,L.jsxs)(`div`,{className:`lg-sidebar-collapsible-list-item__title-wrap`,children:[t&&(0,L.jsx)(`span`,{className:`lg-sidebar-collapsible-list-item__icon`,children:t}),(0,L.jsx)(V,{className:`lg-sidebar-collapsible-list-item__title`,children:n}),(0,L.jsx)(w,{size:16,className:e(`lg-sidebar-collapsible-list-item__caret`,r&&`lg-sidebar-collapsible-list-item__caret--open`),"aria-hidden":!0})]}),a!=null&&(0,L.jsx)(`div`,{className:`lg-sidebar-collapsible-list-item__actions`,onClick:e=>e.stopPropagation(),children:a})]}),(0,L.jsx)(U,{open:r,children:(0,L.jsx)(`div`,{className:`lg-sidebar-collapsible-list-item__body`,children:c})})]}));q.displayName=`Sidebar.CollapsibleListItem`;var re={block:16,inline:14};function ie(e,t){switch(e){case`loading`:return(0,L.jsx)(T,{size:t,spin:!0});case`error`:return(0,L.jsx)(C,{size:t});default:return(0,L.jsx)(s,{size:t})}}var J=I.forwardRef(({status:t,text:n,icon:r,variant:i=`block`,spacing:a=`normal`,onRetry:o,className:s,style:c,...l},u)=>{let d=re[i],f=r===null?null:r??ie(t,d),p=t===`error`&&typeof o==`function`,m=e(`lg-sidebar-skeleton-item`,`lg-sidebar-skeleton-item--${i}`,`lg-sidebar-skeleton-item--${t}`,`lg-sidebar-skeleton-item--spacing-${a}`,p&&`lg-sidebar-skeleton-item--retryable`,s),h=(0,L.jsxs)(L.Fragment,{children:[f&&(0,L.jsx)(`span`,{className:`lg-sidebar-skeleton-item__icon`,"aria-hidden":`true`,children:f}),(0,L.jsx)(`span`,{className:`lg-sidebar-skeleton-item__text`,children:n})]});return p?(0,L.jsx)(`button`,{ref:u,type:`button`,className:m,style:c,onClick:o,...l,children:h}):(0,L.jsx)(`div`,{ref:u,className:m,style:c,role:t===`empty`?void 0:`status`,"aria-live":t===`empty`?void 0:`polite`,...l,children:h})});J.displayName=`Sidebar.SkeletonItem`;var Y=I.forwardRef(({avatar:t,name:n,nameSuffix:r,menuOpen:i=!1,onTriggerClick:a,actions:o,className:s,style:c,...l},u)=>(0,L.jsxs)(`div`,{ref:u,className:e(`lg-sidebar-footer`,s),style:c,...l,children:[(0,L.jsxs)(`div`,{className:e(`lg-sidebar-footer__trigger`,i&&`lg-sidebar-footer__trigger--active`),role:`button`,tabIndex:0,"aria-expanded":i,onClick:e=>a?.(e.currentTarget.getBoundingClientRect()),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),a?.(e.currentTarget.getBoundingClientRect()))},children:[t!=null&&(0,L.jsx)(`span`,{className:`lg-sidebar-footer__avatar`,children:t}),n!=null&&n!==``&&(0,L.jsxs)(`span`,{className:`lg-sidebar-footer__identity`,children:[(0,L.jsx)(`span`,{className:`lg-sidebar-footer__name`,children:n}),r!=null&&(0,L.jsx)(`span`,{className:`lg-sidebar-footer__name-suffix`,children:r})]}),(0,L.jsx)(`span`,{className:e(`lg-sidebar-footer__caret`,i&&`lg-sidebar-footer__caret--open`),"aria-hidden":!0,children:(0,L.jsx)(w,{size:16})})]}),o!=null&&(0,L.jsx)(`div`,{className:`lg-sidebar-footer__actions`,children:o})]}));Y.displayName=`Sidebar.Footer`;var X={Root:R,Header:z,TabBar:B,NavItem:H,CollapsibleNavItem:W,GroupHeader:G,ListItem:K,CollapsibleListItem:q,SkeletonItem:J,Footer:Y};function ae(){let[e,t]=(0,I.useState)(`work`),[n,r]=(0,I.useState)(`new-task`);return(0,L.jsxs)(X.Root,{style:{height:420,borderRadius:12},children:[(0,L.jsx)(X.TabBar,{items:[{key:`work`,label:`工作`,icon:(0,L.jsx)(o,{size:20})},{key:`manage`,label:`管理`,icon:(0,L.jsx)(_,{size:20})}],activeKey:e,onChange:t}),(0,L.jsx)(i,{className:`lg-sidebar__scroll`,children:(0,L.jsxs)(`div`,{className:`lg-sidebar__section`,children:[(0,L.jsx)(X.NavItem,{icon:(0,L.jsx)(f,{size:18}),label:`新任务`,active:n===`new-task`,onClick:()=>r(`new-task`)}),(0,L.jsx)(X.NavItem,{icon:(0,L.jsx)(a,{size:18}),label:`定时任务`,active:n===`scheduled`,onClick:()=>r(`scheduled`)}),(0,L.jsx)(X.NavItem,{icon:(0,L.jsx)(S,{size:18}),label:`智能体`,active:n===`agent`,onClick:()=>r(`agent`)})]})})]})}var oe=`import { useState } from "react";
import { Sidebar, ScrollArea } from "lingee-ui";
import { List, Enterprise, NewChat, AlarmClock, Agent } from "lingee-icon";

export default function BasicDemo() {
  const [tab, setTab] = useState("work");
  const [active, setActive] = useState("new-task");

  return (
    <Sidebar.Root
      style={{ height: 420, borderRadius: 12 }}
    >
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
`;function se(){let[e,t]=(0,I.useState)(`new-task`),[n,r]=(0,I.useState)(!0),[i,a]=(0,I.useState)(`ceo-summary`);return(0,L.jsxs)(`div`,{style:{width:264,padding:8,background:`#f1f1f6`,borderRadius:12},children:[(0,L.jsx)(X.NavItem,{icon:(0,L.jsx)(f,{size:18}),label:`新任务`,active:e===`new-task`,onClick:()=>t(`new-task`)}),(0,L.jsx)(X.NavItem,{icon:(0,L.jsx)(v,{size:18}),label:`技能`,active:e===`skills`,onClick:()=>t(`skills`)}),(0,L.jsx)(X.NavItem,{icon:(0,L.jsx)(y,{size:18}),label:`分析`,badge:(0,L.jsx)(A,{size:`sm`,shape:`pill`,children:`新`}),active:e===`abi`,onClick:()=>t(`abi`)}),(0,L.jsx)(X.NavItem,{icon:(0,L.jsx)(v,{size:18}),label:`暂不可用`,disabled:!0}),(0,L.jsx)(X.CollapsibleNavItem,{icon:(0,L.jsx)(_,{size:18}),label:`CEO 助理`,open:n,onOpenChange:r,onLabelClick:()=>a(`ceo-home`),active:i.startsWith(`ceo`),expandLabel:`展开`,collapseLabel:`收起`,items:[{key:`ceo-summary`,label:`今日摘要`,active:i===`ceo-summary`,onClick:()=>a(`ceo-summary`)},{key:`ceo-decision`,label:`决策支持`,active:i===`ceo-decision`,onClick:()=>a(`ceo-decision`)}]})]})}var ce=`import { useState } from "react";
import { Sidebar, Tag } from "lingee-ui";
import { NewChat, Plugin, Index, Enterprise } from "lingee-icon";

export default function NavItemsDemo() {
  const [active, setActive] = useState("new-task");
  const [ceoOpen, setCeoOpen] = useState(true);
  const [activeChild, setActiveChild] = useState("ceo-summary");

  return (
    <div style={{ width: 264, padding: 8, background: "#f1f1f6", borderRadius: 12 }}>
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
      {/* 带徽章 */}
      <Sidebar.NavItem
        icon={<Index size={18} />}
        label="分析"
        badge={<Tag size="sm" shape="pill">新</Tag>}
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
  );
}
`;function Z(){return(0,L.jsxs)(P,{modal:!1,children:[(0,L.jsx)(j,{children:(0,L.jsx)(k,{variant:`text`,size:`sm`,icon:(0,L.jsx)(b,{size:16})})}),(0,L.jsxs)(M,{side:`bottom`,align:`start`,sideOffset:4,children:[(0,L.jsx)(N,{icon:(0,L.jsx)(c,{size:16}),children:`置顶`}),(0,L.jsx)(N,{icon:(0,L.jsx)(h,{size:16}),children:`重命名`}),(0,L.jsx)(N,{icon:(0,L.jsx)(ee,{size:16}),danger:!0,children:`删除`})]})]})}function le(){let[e,t]=(0,I.useState)(`s1`),[n,r]=(0,I.useState)(!0);return(0,L.jsxs)(`div`,{style:{width:264,padding:8,background:`#f1f1f6`,borderRadius:12},children:[(0,L.jsx)(X.GroupHeader,{title:`置顶`,collapsible:!0,expanded:n,onToggle:()=>r(e=>!e),actions:(0,L.jsx)(k,{variant:`text`,size:`sm`,icon:(0,L.jsx)(h,{size:16})})}),n&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(X.ListItem,{title:`季度经营分析报告`,active:e===`s1`,indicator:`running`,prefix:(0,L.jsx)(c,{size:12}),onSelect:()=>t(`s1`),menu:(0,L.jsx)(Z,{})}),(0,L.jsx)(X.ListItem,{title:`需要补充信息的会话`,active:e===`s2`,indicator:`clarification`,onSelect:()=>t(`s2`),menu:(0,L.jsx)(Z,{})}),(0,L.jsx)(X.ListItem,{title:`已完成但未查看`,active:e===`s3`,indicator:`unread`,onSelect:()=>t(`s3`),menu:(0,L.jsx)(Z,{})}),(0,L.jsx)(X.ListItem,{title:`标题很长很长很长很长的会话会被截断并在悬停时显示完整内容`,active:e===`s4`,onSelect:()=>t(`s4`),menu:(0,L.jsx)(Z,{})})]})]})}var ue=`import { useState } from "react";
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
    <div style={{ width: 264, padding: 8, background: "#f1f1f6", borderRadius: 12 }}>
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
  );
}
`;function de(){let[e,t]=(0,I.useState)(!0),[n,r]=(0,I.useState)(!1),[i,o]=(0,I.useState)(!1),[s,c]=(0,I.useState)(`f1`);return(0,L.jsxs)(`div`,{style:{width:264,padding:8,background:`#f1f1f6`,borderRadius:12},children:[(0,L.jsxs)(X.CollapsibleListItem,{icon:e?(0,L.jsx)(p,{size:16}):(0,L.jsx)(x,{size:16}),title:`经营分析`,expanded:e,onToggle:()=>t(e=>!e),actions:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(k,{variant:`text`,size:`sm`,icon:(0,L.jsx)(E,{size:16})}),(0,L.jsx)(k,{variant:`text`,size:`sm`,icon:(0,L.jsx)(b,{size:16})})]}),children:[(0,L.jsx)(X.ListItem,{title:`上半年营收拆解`,active:s===`f1`,onSelect:()=>c(`f1`)}),(0,L.jsx)(X.ListItem,{title:`成本结构对比`,active:s===`f2`,onSelect:()=>c(`f2`)})]}),(0,L.jsx)(X.CollapsibleListItem,{icon:n?(0,L.jsx)(p,{size:16}):(0,L.jsx)(x,{size:16}),title:`空分组`,expanded:n,onToggle:()=>r(e=>!e),actions:(0,L.jsx)(k,{variant:`text`,size:`sm`,icon:(0,L.jsx)(E,{size:16})}),children:(0,L.jsx)(X.SkeletonItem,{status:`empty`,text:`暂无对话`})}),(0,L.jsxs)(X.CollapsibleListItem,{icon:(0,L.jsx)(a,{size:16}),title:`每日经营简报`,expanded:i,onToggle:()=>o(e=>!e),children:[(0,L.jsx)(X.ListItem,{title:`2026-08-11 09:00`,onSelect:()=>void 0}),(0,L.jsx)(X.ListItem,{title:`2026-08-10 09:00`,onSelect:()=>void 0})]})]})}var Q=`import { useState } from "react";
import { Sidebar, Button } from "lingee-ui";
import { FolderOpen, FolderUnwrap, Plus, Threedots, AlarmClock } from "lingee-icon";

export default function CollapsibleListDemo() {
  const [folderOpen, setFolderOpen] = useState(true);
  const [emptyFolderOpen, setEmptyFolderOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(false);
  const [selected, setSelected] = useState("f1");

  return (
    <div style={{ width: 264, padding: 8, background: "#f1f1f6", borderRadius: 12 }}>
      {/* 文件夹节点：图标随展开态切换，操作区悬停显现 */}
      <Sidebar.CollapsibleListItem
        icon={folderOpen ? <FolderUnwrap size={16} /> : <FolderOpen size={16} />}
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

      {/* 空文件夹：展开区放 SkeletonItem */}
      <Sidebar.CollapsibleListItem
        icon={
          emptyFolderOpen ? <FolderUnwrap size={16} /> : <FolderOpen size={16} />
        }
        title="空分组"
        expanded={emptyFolderOpen}
        onToggle={() => setEmptyFolderOpen((v) => !v)}
        actions={<Button variant="text" size="sm" icon={<Plus size={16} />} />}
      >
        <Sidebar.SkeletonItem status="empty" text="暂无对话" />
      </Sidebar.CollapsibleListItem>

      {/* 定时任务分组：与文件夹共用同一组件 */}
      <Sidebar.CollapsibleListItem
        icon={<AlarmClock size={16} />}
        title="每日经营简报"
        expanded={taskOpen}
        onToggle={() => setTaskOpen((v) => !v)}
      >
        <Sidebar.ListItem title="2026-08-11 09:00" onSelect={() => undefined} />
        <Sidebar.ListItem title="2026-08-10 09:00" onSelect={() => undefined} />
      </Sidebar.CollapsibleListItem>
    </div>
  );
}
`;function fe(){let[e,t]=(0,I.useState)(0);return(0,L.jsxs)(`div`,{style:{width:264,padding:8,background:`#f1f1f6`,borderRadius:12},children:[(0,L.jsx)(X.SkeletonItem,{status:`loading`,text:`加载中...`}),(0,L.jsx)(X.SkeletonItem,{status:`empty`,text:`暂无内容`}),(0,L.jsx)(X.SkeletonItem,{status:`error`,text:`加载失败`}),(0,L.jsx)(X.SkeletonItem,{status:`error`,text:e>0?`已重试 ${e} 次`:`加载失败，点击重试`,onRetry:()=>t(e=>e+1)}),(0,L.jsx)(X.SkeletonItem,{status:`loading`,text:`加载中...`,variant:`inline`}),(0,L.jsx)(X.SkeletonItem,{status:`empty`,text:`暂无对话`,icon:(0,L.jsx)(m,{size:24})})]})}var pe=`import { useState } from "react";
import { Sidebar } from "lingee-ui";
import { Dialog } from "lingee-icon";

export default function SkeletonItemDemo() {
  const [retryCount, setRetryCount] = useState(0);

  return (
    <div style={{ width: 264, padding: 8, background: "#f1f1f6", borderRadius: 12 }}>
      {/* 三态：仅图标与文案不同 */}
      <Sidebar.SkeletonItem status="loading" text="加载中..." />
      <Sidebar.SkeletonItem status="empty" text="暂无内容" />
      <Sidebar.SkeletonItem status="error" text="加载失败" />

      {/* 错误态可重试 */}
      <Sidebar.SkeletonItem
        status="error"
        text={
          retryCount > 0 ? \`已重试 \${retryCount} 次\` : "加载失败，点击重试"
        }
        onRetry={() => setRetryCount((v) => v + 1)}
      />

      {/* inline 形态：列表底部加载更多 */}
      <Sidebar.SkeletonItem status="loading" text="加载中..." variant="inline" />

      {/* 自定义图标贴合业务语义 */}
      <Sidebar.SkeletonItem
        status="empty"
        text="暂无对话"
        icon={<Dialog size={24} />}
      />
    </div>
  );
}
`;function me(){let[e,t]=(0,I.useState)(!1);return(0,L.jsx)(`div`,{style:{width:264,background:`#f1f1f6`,borderRadius:12},children:(0,L.jsxs)(P,{open:e,onOpenChange:t,children:[(0,L.jsx)(j,{children:(0,L.jsx)(X.Footer,{avatar:(0,L.jsx)(u,{size:24}),name:`张三`,nameSuffix:(0,L.jsx)(A,{size:`sm`,shape:`pill`,children:`专业版`}),menuOpen:e,actions:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(k,{variant:`text`,size:`lg`,icon:(0,L.jsx)(g,{size:16}),children:`反馈`}),(0,L.jsx)(k,{variant:`text`,size:`lg`,icon:(0,L.jsx)(x,{size:16}),tooltip:`产物管理`})]})})}),(0,L.jsxs)(M,{side:`top`,align:`start`,sideOffset:4,style:{width:220},children:[(0,L.jsx)(N,{icon:(0,L.jsx)(d,{size:16}),children:`设置`}),(0,L.jsx)(te,{}),(0,L.jsx)(N,{icon:(0,L.jsx)(l,{size:16}),danger:!0,children:`退出登录`})]})]})})}var he=`import { useState } from "react";
import {
  Sidebar,
  Button,
  Tag,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
} from "lingee-ui";
import { Avatar, Inquire, FolderOpen, BasicSettings, Export } from "lingee-icon";

export default function FooterDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ width: 264, background: "#f1f1f6", borderRadius: 12 }}>
      <Dropdown open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownTrigger>
          <Sidebar.Footer
            avatar={<Avatar size={24} />}
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
                <Button
                  variant="text"
                  size="lg"
                  icon={<FolderOpen size={16} />}
                  tooltip="产物管理"
                />
              </>
            }
          />
        </DropdownTrigger>
        <DropdownContent side="top" align="start" sideOffset={4} style={{ width: 220 }}>
          <DropdownItem icon={<BasicSettings size={16} />}>设置</DropdownItem>
          <DropdownSeparator />
          <DropdownItem icon={<Export size={16} />} danger>
            退出登录
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  );
}
`;function ge(){let[e,t]=(0,I.useState)(`work`),[n,r]=(0,I.useState)(`new-task`),[s,c]=(0,I.useState)(null),[l,d]=(0,I.useState)(!0),[m,h]=(0,I.useState)(!1),[y,b]=(0,I.useState)(!1),C=e=>{r(e),c(null)},w=e=>{c(e),r(``)};return(0,L.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`flex-start`},children:[(0,L.jsxs)(X.Root,{collapsed:y,style:{height:560},children:[(0,L.jsx)(X.Header,{style:{height:44,padding:`0 16px`},children:(0,L.jsx)(`strong`,{style:{fontSize:16},children:`Lingee`})}),(0,L.jsx)(X.TabBar,{items:[{key:`work`,label:`工作`,icon:(0,L.jsx)(o,{size:20})},{key:`manage`,label:`管理`,icon:(0,L.jsx)(_,{size:20})}],activeKey:e,onChange:t}),(0,L.jsxs)(i,{className:`lg-sidebar__scroll`,children:[(0,L.jsxs)(`div`,{className:`lg-sidebar__section`,children:[(0,L.jsx)(X.NavItem,{icon:(0,L.jsx)(f,{size:18}),label:`新任务`,active:n===`new-task`,onClick:()=>C(`new-task`)}),(0,L.jsx)(X.NavItem,{icon:(0,L.jsx)(a,{size:18}),label:`定时任务`,active:n===`scheduled`,onClick:()=>C(`scheduled`)}),(0,L.jsx)(X.NavItem,{icon:(0,L.jsx)(S,{size:18}),label:`智能体`,active:n===`agent`,onClick:()=>C(`agent`)}),(0,L.jsx)(X.NavItem,{icon:(0,L.jsx)(v,{size:18}),label:`技能`,active:n===`skills`,onClick:()=>C(`skills`)}),(0,L.jsx)(F,{className:`lg-sidebar__divider`})]}),(0,L.jsxs)(`div`,{className:`lg-sidebar__section`,children:[(0,L.jsx)(X.GroupHeader,{title:`置顶`,collapsible:!0,expanded:l,onToggle:()=>d(e=>!e)}),l&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(X.ListItem,{title:`季度经营分析`,indicator:`running`,active:s===`s1`,onSelect:()=>w(`s1`)}),(0,L.jsx)(X.ListItem,{title:`供应链风险排查`,indicator:`unread`,active:s===`s2`,onSelect:()=>w(`s2`)})]}),(0,L.jsx)(X.GroupHeader,{title:`默认对话`}),(0,L.jsx)(X.ListItem,{title:`上月费用明细核对`,active:s===`s3`,onSelect:()=>w(`s3`)}),(0,L.jsx)(X.GroupHeader,{title:`分组`,collapsible:!0,expanded:!0,actions:(0,L.jsx)(k,{variant:`text`,size:`sm`,icon:(0,L.jsx)(E,{size:16})})}),(0,L.jsx)(X.CollapsibleListItem,{icon:m?(0,L.jsx)(p,{size:16}):(0,L.jsx)(x,{size:16}),title:`财务专题`,expanded:m,onToggle:()=>h(e=>!e),actions:(0,L.jsx)(k,{variant:`text`,size:`sm`,icon:(0,L.jsx)(E,{size:16})}),children:(0,L.jsx)(X.SkeletonItem,{status:`empty`,text:`暂无对话`})}),(0,L.jsx)(X.SkeletonItem,{status:`loading`,text:`加载中...`,variant:`inline`})]})]}),(0,L.jsx)(X.Footer,{avatar:(0,L.jsx)(u,{size:24}),name:`张三`,actions:(0,L.jsx)(k,{variant:`text`,size:`lg`,icon:(0,L.jsx)(g,{size:16}),children:`反馈`})})]}),(0,L.jsx)(k,{onClick:()=>b(e=>!e),children:y?`展开`:`收起`})]})}var _e=`import { useState } from "react";
import { Sidebar, ScrollArea, Button, Divider } from "lingee-ui";
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
      <Sidebar.Root
        collapsed={collapsed}
        style={{ height: 560 }}
      >
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
              <Sidebar.SkeletonItem status="empty" text="暂无对话" />
            </Sidebar.CollapsibleListItem>

            <Sidebar.SkeletonItem
              status="loading"
              text="加载中..."
              variant="inline"
            />
          </div>
        </ScrollArea>

        <Sidebar.Footer
          avatar={<Avatar size={24} />}
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
`,ve={title:`Sidebar 侧边栏`,description:`侧边栏复合组件，提供根容器、页签、导航项、分组、列表项、占位项与底栏，通过 Sidebar.xxx 组合使用。`};function $(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(t.h2,{children:`设计边界`}),`
`,(0,L.jsx)(t.p,{children:`Sidebar 只负责视觉与基础交互：`}),`
`,(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsx)(t.li,{children:`所有状态受控，组件不持有业务状态`}),`
`,(0,L.jsx)(t.li,{children:`不含数据请求、路由跳转与内置文案，文案一律由 props 传入`}),`
`,(0,L.jsx)(t.li,{children:`菜单、徽标、操作区、展开区内容全部以插槽注入`}),`
`]}),`
`,(0,L.jsxs)(t.p,{children:[`滚动容器、分隔线、图标按钮、下拉菜单直接复用 `,(0,L.jsx)(t.code,{children:`ScrollArea`}),`、`,(0,L.jsx)(t.code,{children:`Divider`}),`、`,(0,L.jsx)(t.code,{children:`Button`}),`、`,(0,L.jsx)(t.code,{children:`Dropdown`}),`，Sidebar 不重复提供。`]}),`
`,(0,L.jsx)(t.h2,{children:`基本用法`}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`Sidebar.Root`}),` 作为根容器，内部按需组合各子组件。`]}),`
`,(0,L.jsx)(O,{source:oe,children:(0,L.jsx)(ae,{})}),`
`,(0,L.jsx)(t.h2,{children:`导航项与可折叠分组`}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`Sidebar.NavItem`}),` 是单层导航项；`,(0,L.jsx)(t.code,{children:`Sidebar.CollapsibleNavItem`}),` 用于带子项的分组。`]}),`
`,(0,L.jsxs)(t.p,{children:[`传入 `,(0,L.jsx)(t.code,{children:`onLabelClick`}),` 时标签区与箭头区分离命中：点标签导航、点箭头才展开。分组本身可跳转时需要这个行为，否则用户想跳转却只会展开。`]}),`
`,(0,L.jsx)(O,{source:ce,children:(0,L.jsx)(se,{})}),`
`,(0,L.jsx)(t.h2,{children:`列表项`}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`Sidebar.ListItem`}),` 用于会话行、执行记录行。`,(0,L.jsx)(t.code,{children:`indicator`}),` 提供三种状态指示器：`,(0,L.jsx)(t.code,{children:`running`}),`、`,(0,L.jsx)(t.code,{children:`clarification`}),` 带呼吸动画，`,(0,L.jsx)(t.code,{children:`unread`}),` 为静态点。`]}),`
`,(0,L.jsxs)(t.p,{children:[`菜单以 `,(0,L.jsx)(t.code,{children:`menu`}),` 插槽传入，可自由选择 `,(0,L.jsx)(t.code,{children:`Dropdown`}),` 或自有实现。`]}),`
`,(0,L.jsx)(O,{source:ue,children:(0,L.jsx)(le,{})}),`
`,(0,L.jsx)(t.h2,{children:`可折叠列表项`}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`Sidebar.CollapsibleListItem`}),` 用于文件夹节点与定时任务分组 —— 两者结构一致，共用同一组件。展开区内容完全由业务渲染。`]}),`
`,(0,L.jsxs)(t.p,{children:[`操作区悬停才显现。菜单打开期间需传 `,(0,L.jsx)(t.code,{children:`actionsVisible`}),` 锁定显示，否则指针移到浮层后按钮会消失。`]}),`
`,(0,L.jsx)(O,{source:Q,children:(0,L.jsx)(de,{})}),`
`,(0,L.jsx)(t.h2,{children:`占位项`}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`Sidebar.SkeletonItem`}),` 统一「加载中 / 无数据 / 加载失败」三态，三态间仅图标与文案不同。`]}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`variant="inline"`}),` 用于列表底部「加载更多」这类轻量提示。错误态传 `,(0,L.jsx)(t.code,{children:`onRetry`}),` 后整体渲染为可点击按钮。`]}),`
`,(0,L.jsx)(O,{source:pe,children:(0,L.jsx)(fe,{})}),`
`,(0,L.jsx)(t.h2,{children:`底栏`}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`Sidebar.Footer`}),` 只收敛「头像 + 名称 + 后缀徽标 + 展开箭头 + 动作区」骨架，用户菜单与动作按钮均以插槽传入。`]}),`
`,(0,L.jsx)(O,{source:he,children:(0,L.jsx)(me,{})}),`
`,(0,L.jsx)(t.h2,{children:`完整组合`}),`
`,(0,L.jsx)(t.p,{children:`包含折叠、页签、导航、分组、会话列表、文件夹与底栏。`}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`Sidebar.Root`}),` 传入 `,(0,L.jsx)(t.code,{children:`collapsed`}),` 后启用双层结构（外层收缩宽度、内层脱离文档流），内容不会随宽度收缩被压扁。`]}),`
`,(0,L.jsx)(O,{source:_e,children:(0,L.jsx)(ge,{})}),`
`,(0,L.jsx)(t.h2,{children:`作用域工具类`}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`Sidebar.Root`}),` 内提供两个类，供内部元素复用，无需消费方重复实现：`]}),`
`,(0,L.jsxs)(t.p,{children:[`这些类由 `,(0,L.jsx)(t.code,{children:`Sidebar`}),` 提供，消费方直接使用即可，无需自行补样式：`]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`类名`}),(0,L.jsx)(t.th,{children:`用途`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`lg-sidebar__scroll`})}),(0,L.jsxs)(t.td,{children:[`滚动容器：隐藏滚动条 + 底部渐变遮罩。加在 `,(0,L.jsx)(t.code,{children:`ScrollArea`}),` 上`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`lg-sidebar__sticky`})}),(0,L.jsx)(t.td,{children:`吸顶元素：铺满整行背景并内缩，避免吸顶时两侧透出下方内容`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`lg-sidebar__section`})}),(0,L.jsxs)(t.td,{children:[`内容区块：统一左右内缩。`,(0,L.jsx)(t.strong,{children:`不要再加 flex gap`}),` —— 项间距已由各项自带`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`lg-sidebar__divider`})}),(0,L.jsxs)(t.td,{children:[`侧边栏内 `,(0,L.jsx)(t.code,{children:`Divider`}),` 的间距`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`lg-sidebar__gradient-badge`})}),(0,L.jsx)(t.td,{children:`渐变文字徽标，用于分组头的营销类标识（如「限时试用」）`})]})]})]}),`
`,(0,L.jsx)(t.h2,{children:`Token 覆盖`}),`
`,(0,L.jsxs)(t.p,{children:[`尺寸与配色由 `,(0,L.jsx)(t.code,{children:`.lg-sidebar`}),` 上的组件级 Token 派生，覆盖 Token 即可整体调整：`]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Token`}),(0,L.jsx)(t.th,{children:`说明`}),(0,L.jsx)(t.th,{children:`默认值`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`--_sidebar-width`})}),(0,L.jsx)(t.td,{children:`展开宽度`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`280px`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`--_sidebar-item-height`})}),(0,L.jsx)(t.td,{children:`项高度`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`32px`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`--_sidebar-item-radius`})}),(0,L.jsx)(t.td,{children:`项圆角`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`20px`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`--_sidebar-item-color`})}),(0,L.jsx)(t.td,{children:`项文字色`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`--lg-g-fg-color-black-strong`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`--_sidebar-item-active-color`})}),(0,L.jsx)(t.td,{children:`选中文字色`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`--lg-g-fg-color-black-intense`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`--_sidebar-item-hover-bg`})}),(0,L.jsx)(t.td,{children:`悬停底色`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`--lg-g-bg-color-black-faint`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`--_sidebar-item-active-bg`})}),(0,L.jsx)(t.td,{children:`选中底色`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`--lg-g-bg-color-black-subtle`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`--_sidebar-bg`})}),(0,L.jsxs)(t.td,{children:[`侧边栏底色。暗色下自动切换为 `,(0,L.jsx)(t.code,{children:`#12121c`})]}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`#f1f1f6`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`--_sidebar-scroll-mask-color`})}),(0,L.jsxs)(t.td,{children:[`底部遮罩终点色，默认跟随 `,(0,L.jsx)(t.code,{children:`--_sidebar-bg`})]}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`var(--_sidebar-bg)`})})]})]})]}),`
`,(0,L.jsx)(t.p,{children:`底色已内置，消费方无需自行设置背景；遮罩色也会自动跟随，不必手动同步。`}),`
`,(0,L.jsx)(t.h2,{children:`API`}),`
`,(0,L.jsx)(t.h3,{children:`Sidebar.Root`}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`属性`}),(0,L.jsx)(t.th,{children:`说明`}),(0,L.jsx)(t.th,{children:`类型`}),(0,L.jsx)(t.th,{children:`默认值`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`width`})}),(0,L.jsx)(t.td,{children:`展开宽度（px）`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`number`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`280`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`collapsed`})}),(0,L.jsx)(t.td,{children:`折叠态。传入即启用双层结构与宽度过渡；不传则宽度恒定`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`boolean`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`safeAreaTop`})}),(0,L.jsx)(t.td,{children:`顶部安全区高度（px），用于让位固定顶栏`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`number`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`0`})})]})]})]}),`
`,(0,L.jsx)(t.h3,{children:`Sidebar.Header`}),`
`,(0,L.jsxs)(t.p,{children:[`纯插槽容器。平台相关处理（窗口拖拽区、系统按钮避让）由消费方通过 `,(0,L.jsx)(t.code,{children:`children`}),` 与 `,(0,L.jsx)(t.code,{children:`style`}),` 注入。`]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`属性`}),(0,L.jsx)(t.th,{children:`说明`}),(0,L.jsx)(t.th,{children:`类型`}),(0,L.jsx)(t.th,{children:`默认值`})]})}),(0,L.jsx)(t.tbody,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`children`})}),(0,L.jsx)(t.td,{children:`内容`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]})})]}),`
`,(0,L.jsx)(t.h3,{children:`Sidebar.TabBar`}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`属性`}),(0,L.jsx)(t.th,{children:`说明`}),(0,L.jsx)(t.th,{children:`类型`}),(0,L.jsx)(t.th,{children:`默认值`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`items`})}),(0,L.jsxs)(t.td,{children:[`页签列表 `,(0,L.jsx)(t.code,{children:`{ key, label, icon?, disabled?, ariaLabel? }`})]}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`SidebarTabItem[]`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`activeKey`})}),(0,L.jsx)(t.td,{children:`当前选中 key`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`string`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`onChange`})}),(0,L.jsx)(t.td,{children:`切换回调`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`(key: string) => void`})}),(0,L.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,L.jsxs)(t.p,{children:[`页签显隐过滤（如权限控制）请在传入 `,(0,L.jsx)(t.code,{children:`items`}),` 前完成，组件不介入。`]}),`
`,(0,L.jsx)(t.h3,{children:`Sidebar.NavItem`}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`属性`}),(0,L.jsx)(t.th,{children:`说明`}),(0,L.jsx)(t.th,{children:`类型`}),(0,L.jsx)(t.th,{children:`默认值`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`icon`})}),(0,L.jsx)(t.td,{children:`左侧图标`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`label`})}),(0,L.jsx)(t.td,{children:`文本`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`active`})}),(0,L.jsx)(t.td,{children:`选中态`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`boolean`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`false`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`disabled`})}),(0,L.jsx)(t.td,{children:`禁用态`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`boolean`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`false`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`badge`})}),(0,L.jsx)(t.td,{children:`右侧徽章插槽。传纯文本即得药丸样式；传自带样式的节点可覆盖`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`onClick`})}),(0,L.jsx)(t.td,{children:`点击回调`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`() => void`})}),(0,L.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,L.jsx)(t.p,{children:`文本溢出时自动显示 Tooltip，无需外层包裹。`}),`
`,(0,L.jsx)(t.h3,{children:`Sidebar.CollapsibleNavItem`}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`属性`}),(0,L.jsx)(t.th,{children:`说明`}),(0,L.jsx)(t.th,{children:`类型`}),(0,L.jsx)(t.th,{children:`默认值`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`icon`})}),(0,L.jsx)(t.td,{children:`左侧图标`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`label`})}),(0,L.jsx)(t.td,{children:`分组标题`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`active`})}),(0,L.jsx)(t.td,{children:`头部高亮。内部与子项 active 互斥`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`boolean`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`false`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`open`})}),(0,L.jsx)(t.td,{children:`受控展开态`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`boolean`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`defaultOpen`})}),(0,L.jsx)(t.td,{children:`非受控初始展开态`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`boolean`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`false`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`onOpenChange`})}),(0,L.jsx)(t.td,{children:`展开态变化回调`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`(next: boolean) => void`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`onLabelClick`})}),(0,L.jsx)(t.td,{children:`标签区点击。传入后标签与箭头分离命中`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`() => void`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`items`})}),(0,L.jsxs)(t.td,{children:[`子项列表 `,(0,L.jsx)(t.code,{children:`{ key, label, active?, disabled?, onClick? }`})]}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`SidebarCollapsibleNavItemChild[]`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`extra`})}),(0,L.jsx)(t.td,{children:`头部右侧插槽`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`disabled`})}),(0,L.jsx)(t.td,{children:`禁用态`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`boolean`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`false`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsxs)(t.td,{children:[(0,L.jsx)(t.code,{children:`expandLabel`}),` / `,(0,L.jsx)(t.code,{children:`collapseLabel`})]}),(0,L.jsx)(t.td,{children:`箭头无障碍标签`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`string`})}),(0,L.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,L.jsx)(t.h3,{children:`Sidebar.GroupHeader`}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`属性`}),(0,L.jsx)(t.th,{children:`说明`}),(0,L.jsx)(t.th,{children:`类型`}),(0,L.jsx)(t.th,{children:`默认值`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`title`})}),(0,L.jsx)(t.td,{children:`标题`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`collapsible`})}),(0,L.jsx)(t.td,{children:`可折叠`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`boolean`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`false`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`expanded`})}),(0,L.jsxs)(t.td,{children:[`展开态，仅 `,(0,L.jsx)(t.code,{children:`collapsible`}),` 时生效`]}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`boolean`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`true`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`onToggle`})}),(0,L.jsx)(t.td,{children:`切换回调`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`() => void`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`actions`})}),(0,L.jsx)(t.td,{children:`右侧操作区插槽`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,L.jsx)(t.p,{children:`折叠箭头与操作区悬停显现，展开态箭头常显。`}),`
`,(0,L.jsx)(t.h3,{children:`Sidebar.ListItem`}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`属性`}),(0,L.jsx)(t.th,{children:`说明`}),(0,L.jsx)(t.th,{children:`类型`}),(0,L.jsx)(t.th,{children:`默认值`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`title`})}),(0,L.jsx)(t.td,{children:`标题`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`active`})}),(0,L.jsx)(t.td,{children:`选中态`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`boolean`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`false`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`indicator`})}),(0,L.jsx)(t.td,{children:`状态指示器`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`"running" | "clarification" | "unread" | null`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`prefix`})}),(0,L.jsx)(t.td,{children:`标题前插槽`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`onSelect`})}),(0,L.jsx)(t.td,{children:`点击回调`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`() => void`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`menu`})}),(0,L.jsx)(t.td,{children:`右侧菜单插槽（需自带触发按钮）`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,L.jsx)(t.h3,{children:`Sidebar.CollapsibleListItem`}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`属性`}),(0,L.jsx)(t.th,{children:`说明`}),(0,L.jsx)(t.th,{children:`类型`}),(0,L.jsx)(t.th,{children:`默认值`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`icon`})}),(0,L.jsx)(t.td,{children:`头部图标。需随展开态切换时由消费方传入对应图标`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`title`})}),(0,L.jsx)(t.td,{children:`标题`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`expanded`})}),(0,L.jsx)(t.td,{children:`展开态`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`boolean`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`false`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`onToggle`})}),(0,L.jsx)(t.td,{children:`切换回调`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`() => void`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`actions`})}),(0,L.jsx)(t.td,{children:`头部操作区插槽`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`actionsVisible`})}),(0,L.jsxs)(t.td,{children:[`操作区常显。菜单打开时置 `,(0,L.jsx)(t.code,{children:`true`})]}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`boolean`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`false`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`active`})}),(0,L.jsx)(t.td,{children:`头部高亮`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`boolean`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`false`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`children`})}),(0,L.jsx)(t.td,{children:`展开区内容`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsxs)(t.td,{children:[(0,L.jsx)(t.code,{children:`expandLabel`}),` / `,(0,L.jsx)(t.code,{children:`collapseLabel`})]}),(0,L.jsx)(t.td,{children:`无障碍标签`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`string`})}),(0,L.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,L.jsx)(t.h3,{children:`Sidebar.SkeletonItem`}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`属性`}),(0,L.jsx)(t.th,{children:`说明`}),(0,L.jsx)(t.th,{children:`类型`}),(0,L.jsx)(t.th,{children:`默认值`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`status`})}),(0,L.jsx)(t.td,{children:`状态，决定默认图标与无障碍语义`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`"loading" | "empty" | "error"`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`text`})}),(0,L.jsx)(t.td,{children:`提示文案`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`icon`})}),(0,L.jsxs)(t.td,{children:[`覆盖默认图标；传 `,(0,L.jsx)(t.code,{children:`null`}),` 不渲染图标`]}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode | null`})}),(0,L.jsxs)(t.td,{children:[`按 `,(0,L.jsx)(t.code,{children:`status`}),` 取`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`variant`})}),(0,L.jsxs)(t.td,{children:[`布局：`,(0,L.jsx)(t.code,{children:`block`}),` 区块级 / `,(0,L.jsx)(t.code,{children:`inline`}),` 行内轻量`]}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`"block" | "inline"`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`"block"`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`spacing`})}),(0,L.jsxs)(t.td,{children:[`留白档位。`,(0,L.jsx)(t.code,{children:`loose`}),` 为顶部大留白（列表级空态）`]}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`"none" | "normal" | "loose"`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`"normal"`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`onRetry`})}),(0,L.jsxs)(t.td,{children:[`重试回调。仅 `,(0,L.jsx)(t.code,{children:`status="error"`}),` 生效，传入后整体可点击`]}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`() => void`})}),(0,L.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,L.jsxs)(t.p,{children:[`默认图标：`,(0,L.jsx)(t.code,{children:`loading`}),` 用旋转的 `,(0,L.jsx)(t.code,{children:`LoaderCircle`}),`，`,(0,L.jsx)(t.code,{children:`empty`}),` 用 `,(0,L.jsx)(t.code,{children:`Inbox`}),`，`,(0,L.jsx)(t.code,{children:`error`}),` 用 `,(0,L.jsx)(t.code,{children:`ExclamationCircle`}),`。`]}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.strong,{children:`三态等高`}),`：组件按 `,(0,L.jsx)(t.code,{children:`variant`}),` + `,(0,L.jsx)(t.code,{children:`spacing`}),` 设定 `,(0,L.jsx)(t.code,{children:`min-height`}),`，同档位下
`,(0,L.jsx)(t.code,{children:`loading`}),` / `,(0,L.jsx)(t.code,{children:`empty`}),` / `,(0,L.jsx)(t.code,{children:`error`}),` 高度完全一致，因此「加载中 → 空态 / 错误态」
切换时容器高度不变，列表不会跳动。`]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`variant`}),(0,L.jsx)(t.th,{children:`spacing`}),(0,L.jsx)(t.th,{children:`高度`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`block`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`none`})}),(0,L.jsx)(t.td,{children:`24px`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`block`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`normal`})}),(0,L.jsx)(t.td,{children:`48px`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`block`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`loose`})}),(0,L.jsx)(t.td,{children:`80px（顶部 44 + 内容 24 + 底部 12）`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`inline`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`normal`})}),(0,L.jsx)(t.td,{children:`26px`})]})]})]}),`
`,(0,L.jsx)(t.h3,{children:`Sidebar.Footer`}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`属性`}),(0,L.jsx)(t.th,{children:`说明`}),(0,L.jsx)(t.th,{children:`类型`}),(0,L.jsx)(t.th,{children:`默认值`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`avatar`})}),(0,L.jsx)(t.td,{children:`头像插槽`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`name`})}),(0,L.jsx)(t.td,{children:`名称，为空时不渲染身份区`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`nameSuffix`})}),(0,L.jsx)(t.td,{children:`名称后插槽（套餐标签等）`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`menuOpen`})}),(0,L.jsx)(t.td,{children:`菜单展开态，驱动触发区高亮与箭头旋转`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`boolean`})}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`false`})})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`onTriggerClick`})}),(0,L.jsxs)(t.td,{children:[`点击触发区，回传 `,(0,L.jsx)(t.code,{children:`DOMRect`}),` 供手动定位浮层`]}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`(rect: DOMRect) => void`})}),(0,L.jsx)(t.td,{children:`-`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`actions`})}),(0,L.jsx)(t.td,{children:`右侧动作区插槽`}),(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ReactNode`})}),(0,L.jsx)(t.td,{children:`-`})]})]})]})]})}function ye(e={}){let{wrapper:t}=e.components||{};return t?(0,L.jsx)(t,{...e,children:(0,L.jsx)($,{...e})}):$(e)}export{ye as default,ve as frontmatter};