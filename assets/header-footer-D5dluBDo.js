import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{T as r}from"./tooltip-provider-GvwhCTSR.js";import{n as i}from"./provider-DlMqOfiJ.js";import{t as a}from"./ChevronDown-BItiPvBB.js";import{t as o}from"./Copy-DBZa1ueb.js";import{a as s,i as c,n as l,r as u,t as d}from"./Share-BQ1yDoo9.js";import{t as f}from"./Edit-3bjSyu75.js";import{t as p}from"./LightningCharge-BWFYixe-.js";import{n as m,t as h}from"./Trash-D-Q_kkZc.js";import{t as g}from"./Search-Bp22Ei2B.js";import{t as _}from"./XLg-BMGwlHLt.js";import{t as v}from"./button-DU-GfdHa.js";import{a as y,c as b,d as x,i as S,l as C,n as w,o as T,r as E,s as D,t as O,u as k}from"./dropdown-S_4MYxRw.js";var A=e(t()),j=n(),M=(0,A.forwardRef)(({children:e,variant:t=`default`,size:n=`sm`,selectedVariant:o=`primary`,icon:s,selected:c=!1,open:l=!1,clearable:u=!1,hideArrow:d=!1,disabled:f=!1,className:p,onClick:m,onClear:h,...g},v)=>{let[y,b]=(0,A.useState)(!1),x=i(`Dropdown`),S=(0,A.useCallback)(e=>{e.stopPropagation(),e.preventDefault(),h?.(e)},[h]),C=c&&u&&y&&!l;return(0,j.jsxs)(`button`,{ref:v,type:`button`,disabled:f,className:r(`lg-dropdown-button`,t!=="default"&&`lg-dropdown-button--${t}`,n!==`sm`&&`lg-dropdown-button--${n}`,c&&`lg-dropdown-button--selected`,c&&o!==`primary`&&`lg-dropdown-button--selected-${o}`,l&&`lg-dropdown-button--open`,f&&`lg-dropdown-button--disabled`,p),onClick:m,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),...g,children:[s&&(0,j.jsx)(`span`,{className:`lg-dropdown-button__icon`,children:s}),e&&(0,j.jsx)(`span`,{className:`lg-dropdown-button__label`,children:e}),!d&&(C?(0,j.jsx)(`span`,{className:`lg-dropdown-button__clear`,onMouseDown:S,role:`button`,"aria-label":x.clear,children:(0,j.jsx)(_,{size:12})}):(0,j.jsx)(a,{size:16,className:`lg-dropdown-button__arrow`}))]})});M.displayName=`DropdownButton`;function N(){return(0,j.jsx)(O,{items:[{key:`edit`,label:`Edit`},{key:`copy`,label:`Copy`},{key:`share`,label:`Share`}],children:(0,j.jsx)(v,{children:`Actions`})})}var P=`import { Dropdown, Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <Dropdown
      items={[
        { key: "edit", label: "Edit" },
        { key: "copy", label: "Copy" },
        { key: "share", label: "Share" },
      ]}
    >
      <Button>Actions</Button>
    </Dropdown>
  );
}
`;function F(){return(0,j.jsx)(O,{items:[{key:`edit`,label:`Edit`,icon:(0,j.jsx)(f,{})},{key:`copy`,label:`Copy`,icon:(0,j.jsx)(o,{})},{type:`separator`},{key:`delete`,label:`Delete`,icon:(0,j.jsx)(h,{}),danger:!0}],children:(0,j.jsx)(v,{children:`Menu with icons`})})}var I=`import { Dropdown, Button } from "lingee-ui";
import { Edit, Copy, Trash } from "lingee-icon";

export default function WithIconDemo() {
  return (
    <Dropdown
      items={[
        { key: "edit", label: "Edit", icon: <Edit /> },
        { key: "copy", label: "Copy", icon: <Copy /> },
        { type: "separator" },
        { key: "delete", label: "Delete", icon: <Trash />, danger: true },
      ]}
    >
      <Button>Menu with icons</Button>
    </Dropdown>
  );
}
`;function ee(){return(0,j.jsx)(O,{items:[{key:`edit`,label:`Edit`,icon:(0,j.jsx)(f,{})},{type:`separator`},{key:`delete`,label:`Delete`,icon:(0,j.jsx)(h,{}),danger:!0}],children:(0,j.jsx)(v,{children:`With danger action`})})}var L=`import { Dropdown, Button } from "lingee-ui";
import { Edit, Trash } from "lingee-icon";

export default function DangerDemo() {
  return (
    <Dropdown
      items={[
        { key: "edit", label: "Edit", icon: <Edit /> },
        { type: "separator" },
        { key: "delete", label: "Delete", icon: <Trash />, danger: true },
      ]}
    >
      <Button>With danger action</Button>
    </Dropdown>
  );
}
`;function R(){return(0,j.jsx)(O,{items:[{key:`view`,label:`View details`},{key:`export`,label:`Export (no permission)`,disabled:!0},{type:`separator`},{key:`delete`,label:`Delete`,icon:(0,j.jsx)(h,{}),danger:!0}],children:(0,j.jsx)(v,{children:`With disabled item`})})}var z=`import { Dropdown, Button } from "lingee-ui";
import { Trash } from "lingee-icon";

export default function DisabledItemDemo() {
  return (
    <Dropdown
      items={[
        { key: "view", label: "View details" },
        { key: "export", label: "Export (no permission)", disabled: true },
        { type: "separator" },
        { key: "delete", label: "Delete", icon: <Trash />, danger: true },
      ]}
    >
      <Button>With disabled item</Button>
    </Dropdown>
  );
}
`;function B(){return(0,j.jsx)(O,{items:[{type:`label`,label:`Edit`},{key:`edit`,label:`Edit`,icon:(0,j.jsx)(f,{})},{key:`copy`,label:`Copy`,icon:(0,j.jsx)(o,{})},{type:`separator`},{type:`label`,label:`Share`},{key:`share`,label:`Share with team`,icon:(0,j.jsx)(d,{})},{type:`separator`},{type:`label`,label:`Danger zone`},{key:`delete`,label:`Delete`,icon:(0,j.jsx)(h,{}),danger:!0}],children:(0,j.jsx)(v,{children:`Grouped menu`})})}var V=`import { Dropdown, Button } from "lingee-ui";
import { Edit, Copy, Share, Trash } from "lingee-icon";

export default function GroupDemo() {
  return (
    <Dropdown
      items={[
        { type: "label", label: "Edit" },
        { key: "edit", label: "Edit", icon: <Edit /> },
        { key: "copy", label: "Copy", icon: <Copy /> },
        { type: "separator" },
        { type: "label", label: "Share" },
        { key: "share", label: "Share with team", icon: <Share /> },
        { type: "separator" },
        { type: "label", label: "Danger zone" },
        { key: "delete", label: "Delete", icon: <Trash />, danger: true },
      ]}
    >
      <Button>Grouped menu</Button>
    </Dropdown>
  );
}
`;function H(){let[e,t]=(0,A.useState)(`newest`);return(0,j.jsxs)(O,{children:[(0,j.jsx)(x,{children:(0,j.jsx)(v,{children:`Sort and filter`})}),(0,j.jsxs)(w,{style:{minWidth:180},children:[(0,j.jsx)(S,{children:`Sort by`}),(0,j.jsxs)(y,{value:e,onValueChange:t,children:[(0,j.jsx)(T,{value:`newest`,children:`Newest first`}),(0,j.jsx)(T,{value:`oldest`,children:`Oldest first`}),(0,j.jsx)(T,{value:`name`,children:`By name`})]}),(0,j.jsx)(D,{}),(0,j.jsx)(S,{children:`Actions`}),(0,j.jsx)(E,{onSelect:()=>console.log(`refresh`),children:`Refresh list`}),(0,j.jsx)(E,{onSelect:()=>console.log(`export`),children:`Export data`})]})]})}var U=`import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSeparator,
  DropdownItem,
  Button,
} from "lingee-ui";

export default function RadioGroupDemo() {
  const [sort, setSort] = useState("newest");

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button>Sort and filter</Button>
      </DropdownTrigger>
      <DropdownContent style={{ minWidth: 180 }}>
        <DropdownLabel>Sort by</DropdownLabel>
        <DropdownRadioGroup value={sort} onValueChange={setSort}>
          <DropdownRadioItem value="newest">Newest first</DropdownRadioItem>
          <DropdownRadioItem value="oldest">Oldest first</DropdownRadioItem>
          <DropdownRadioItem value="name">By name</DropdownRadioItem>
        </DropdownRadioGroup>
        <DropdownSeparator />
        <DropdownLabel>Actions</DropdownLabel>
        <DropdownItem onSelect={() => console.log("refresh")}>Refresh list</DropdownItem>
        <DropdownItem onSelect={() => console.log("export")}>Export data</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
`;function W(){let[e,t]=(0,A.useState)(`zh-CN`);return(0,j.jsxs)(O,{children:[(0,j.jsx)(x,{children:(0,j.jsx)(v,{children:`Account`})}),(0,j.jsxs)(w,{side:`bottom`,align:`start`,style:{minWidth:200},children:[(0,j.jsx)(E,{children:`Profile settings`}),(0,j.jsxs)(b,{children:[(0,j.jsx)(k,{children:`Language`}),(0,j.jsx)(C,{children:(0,j.jsxs)(y,{value:e,onValueChange:t,children:[(0,j.jsx)(T,{value:`zh-CN`,children:`Chinese (Simplified)`}),(0,j.jsx)(T,{value:`en-US`,children:`English`}),(0,j.jsx)(T,{value:`ja-JP`,children:`Japanese`})]})})]}),(0,j.jsxs)(b,{children:[(0,j.jsx)(k,{children:`More settings`}),(0,j.jsxs)(C,{children:[(0,j.jsx)(E,{children:`Theme`}),(0,j.jsx)(E,{children:`Notifications`}),(0,j.jsx)(E,{children:`Export data`})]})]}),(0,j.jsx)(D,{}),(0,j.jsx)(E,{danger:!0,children:`Log out`})]})]})}var G=`import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  DropdownRadioGroup,
  DropdownRadioItem,
  Button,
} from "lingee-ui";

export default function SubMenuDemo() {
  const [lang, setLang] = useState("zh-CN");

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button>Account</Button>
      </DropdownTrigger>
      <DropdownContent side="bottom" align="start" style={{ minWidth: 200 }}>
        <DropdownItem>Profile settings</DropdownItem>
        <DropdownSub>
          <DropdownSubTrigger>Language</DropdownSubTrigger>
          <DropdownSubContent>
            <DropdownRadioGroup value={lang} onValueChange={setLang}>
              <DropdownRadioItem value="zh-CN">Chinese (Simplified)</DropdownRadioItem>
              <DropdownRadioItem value="en-US">English</DropdownRadioItem>
              <DropdownRadioItem value="ja-JP">Japanese</DropdownRadioItem>
            </DropdownRadioGroup>
          </DropdownSubContent>
        </DropdownSub>
        <DropdownSub>
          <DropdownSubTrigger>More settings</DropdownSubTrigger>
          <DropdownSubContent>
            <DropdownItem>Theme</DropdownItem>
            <DropdownItem>Notifications</DropdownItem>
            <DropdownItem>Export data</DropdownItem>
          </DropdownSubContent>
        </DropdownSub>
        <DropdownSeparator />
        <DropdownItem danger>Log out</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
`;function K(){let[e,t]=(0,A.useState)(!1);return(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,j.jsxs)(v,{size:`sm`,onClick:()=>t(!e),children:[`Toggle externally (`,e?`Open`:`Closed`,`)`]}),(0,j.jsx)(O,{items:[{key:`a`,label:`Action A`},{key:`b`,label:`Action B`},{key:`c`,label:`Action C`}],open:e,onOpenChange:t,children:(0,j.jsx)(v,{variant:`primary`,children:`Controlled menu`})})]})}var q=`import { useState } from "react";
import { Dropdown, Button } from "lingee-ui";

export default function ControlledDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Button size="sm" onClick={() => setOpen(!open)}>
        Toggle externally ({open ? "Open" : "Closed"})
      </Button>
      <Dropdown
        items={[
          { key: "a", label: "Action A" },
          { key: "b", label: "Action B" },
          { key: "c", label: "Action C" },
        ]}
        open={open}
        onOpenChange={setOpen}
      >
        <Button variant="primary">Controlled menu</Button>
      </Dropdown>
    </div>
  );
}
`,J=[{key:`1`,label:`Expense Reviewer`},{key:`2`,label:`Data Analyst`},{key:`3`,label:`Doc Writing Assistant`}],Y=[{key:`fast`,label:`Fast`},{key:`auto`,label:`Auto`},{key:`precise`,label:`Precise`}];function X(){let[e,t]=(0,A.useState)(!1),[n,r]=(0,A.useState)(null),[i,a]=(0,A.useState)(!1),[o,s]=(0,A.useState)(`fast`),[l,u]=(0,A.useState)(!1),[d,f]=(0,A.useState)(`白话文`),[p,m]=(0,A.useState)(!1),[h,g]=(0,A.useState)(`fast`),[_,v]=(0,A.useState)(!1),[y,b]=(0,A.useState)(`1`),x=J.map(e=>({key:e.key,label:e.label,onSelect:()=>r(e.key)})),S=J.find(e=>e.key===n)?.label,C=[{key:`白话文`,label:`Plain Chinese`,onSelect:()=>f(`白话文`)},{key:`文言文`,label:`Classical Chinese`,onSelect:()=>f(`文言文`)}];return(0,j.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`,alignItems:`center`},children:[(0,j.jsx)(O,{open:e,onOpenChange:t,items:x,selectedKeys:n?[n]:[],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,j.jsx)(M,{icon:(0,j.jsx)(c,{size:16}),open:e,selected:!!n,clearable:!!n,onClear:()=>r(null),children:S??`Select an agent`})}),(0,j.jsx)(O,{open:i,onOpenChange:a,items:Y.map(e=>({...e,onSelect:()=>s(e.key)})),selectedKeys:[o],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,j.jsx)(M,{open:i,children:Y.find(e=>e.key===o)?.label})}),(0,j.jsx)(O,{open:l,onOpenChange:u,items:C,selectedKeys:[d],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,j.jsx)(M,{open:l,selected:!0,children:C.find(e=>e.key===d)?.label})}),(0,j.jsx)(`div`,{style:{background:`#F1F1F6`,padding:`12px 16px`,borderRadius:12},children:(0,j.jsx)(O,{open:p,onOpenChange:m,items:Y.map(e=>({...e,onSelect:()=>g(e.key)})),selectedKeys:[h],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,j.jsx)(M,{variant:`glassy`,open:p,children:Y.find(e=>e.key===h)?.label??`All sections`})})}),(0,j.jsx)(O,{open:_,onOpenChange:v,items:J.map(e=>({key:e.key,label:e.label,onSelect:()=>b(e.key)})),selectedKeys:y?[y]:[],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,j.jsx)(M,{icon:(0,j.jsx)(c,{size:16}),size:`lg`,selectedVariant:`purple`,open:_,selected:!!y,clearable:!!y,onClear:()=>b(null),children:J.find(e=>e.key===y)?.label??`Select an agent`})})]})}var Z=`/**
 * DropdownButton Demo — 统一下拉触发器按钮
 */
import { useState } from "react";
import { Effect } from "lingee-icon";
import { Dropdown, DropdownButton } from "../../../src";
import type { DropdownItemData } from "../../../src";

const agents = [
  { key: "1", label: "Expense Reviewer" },
  { key: "2", label: "Data Analyst" },
  { key: "3", label: "Doc Writing Assistant" },
];

const modeOptions = [
  { key: "fast", label: "Fast" },
  { key: "auto", label: "Auto" },
  { key: "precise", label: "Precise" },
];

export default function DropdownButtonDemo() {
  const [agentOpen, setAgentOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const [modeOpen, setModeOpen] = useState(false);
  const [mode, setMode] = useState("fast");

  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("白话文");

  const [glassyOpen, setGlassyOpen] = useState(false);
  const [glassyMode, setGlassyMode] = useState("fast");

  const [purpleOpen, setPurpleOpen] = useState(false);
  const [selectedPurple, setSelectedPurple] = useState<string | null>("1");

  const agentItems: DropdownItemData[] = agents.map((a) => ({
    key: a.key,
    label: a.label,
    onSelect: () => setSelectedAgent(a.key),
  }));

  const agentName = agents.find((a) => a.key === selectedAgent)?.label;

  const langItems: DropdownItemData[] = [
    { key: "白话文", label: "Plain Chinese", onSelect: () => setLang("白话文") },
    { key: "文言文", label: "Classical Chinese", onSelect: () => setLang("文言文") },
  ];

  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
      {/* 默认态：带前置图标 */}
      <Dropdown
        open={agentOpen}
        onOpenChange={setAgentOpen}
        items={agentItems}
        selectedKeys={selectedAgent ? [selectedAgent] : []}
        modal={false}
        contentProps={{ side: "bottom", align: "start", sideOffset: 8 }}
      >
        <DropdownButton
          icon={<Effect size={16} />}
          open={agentOpen}
          selected={!!selectedAgent}
          clearable={!!selectedAgent}
          onClear={() => setSelectedAgent(null)}
        >
          {agentName ?? "Select an agent"}
        </DropdownButton>
      </Dropdown>

      {/* 无图标 + 选中不可清除 */}
      <Dropdown
        open={modeOpen}
        onOpenChange={setModeOpen}
        items={modeOptions.map((item) => ({
          ...item,
          onSelect: () => setMode(item.key),
        }))}
        selectedKeys={[mode]}
        modal={false}
        contentProps={{ side: "bottom", align: "start", sideOffset: 8 }}
      >
        <DropdownButton open={modeOpen}>
          {modeOptions.find((o) => o.key === mode)?.label as string}
        </DropdownButton>
      </Dropdown>

      {/* 纯文本选中态 */}
      <Dropdown
        open={langOpen}
        onOpenChange={setLangOpen}
        items={langItems}
        selectedKeys={[lang]}
        modal={false}
        contentProps={{ side: "bottom", align: "start", sideOffset: 8 }}
      >
        <DropdownButton open={langOpen} selected>
          {langItems.find((o) => o.key === lang)?.label}
        </DropdownButton>
      </Dropdown>

      {/* glassy 变体：半透明白底+描边，适用于有色背景 */}
      <div style={{ background: "#F1F1F6", padding: "12px 16px", borderRadius: 12 }}>
        <Dropdown
          open={glassyOpen}
          onOpenChange={setGlassyOpen}
          items={modeOptions.map((item) => ({
            ...item,
            onSelect: () => setGlassyMode(item.key),
          }))}
          selectedKeys={[glassyMode]}
          modal={false}
          contentProps={{ side: "bottom", align: "start", sideOffset: 8 }}
        >
          <DropdownButton variant="glassy" open={glassyOpen}>
            {modeOptions.find((o) => o.key === glassyMode)?.label ?? "All sections"}
          </DropdownButton>
        </Dropdown>
      </div>

      {/* 紫色选中态（selectedVariant="purple"）：智能体场景 */}
      <Dropdown
        open={purpleOpen}
        onOpenChange={setPurpleOpen}
        items={agents.map((a) => ({
          key: a.key,
          label: a.label,
          onSelect: () => setSelectedPurple(a.key),
        }))}
        selectedKeys={selectedPurple ? [selectedPurple] : []}
        modal={false}
        contentProps={{ side: "bottom", align: "start", sideOffset: 8 }}
      >
        <DropdownButton
          icon={<Effect size={16} />}
          size="lg"
          selectedVariant="purple"
          open={purpleOpen}
          selected={!!selectedPurple}
          clearable={!!selectedPurple}
          onClear={() => setSelectedPurple(null)}
        >
          {agents.find((a) => a.key === selectedPurple)?.label ?? "Select an agent"}
        </DropdownButton>
      </Dropdown>
    </div>
  );
}
`,Q=[{key:`auto`,label:`Auto`,icon:(0,j.jsx)(l,{size:16}),description:`Balances performance and cost`},{key:`fast`,label:`Fast`,icon:(0,j.jsx)(p,{size:16}),description:`Quick responses for light tasks`},{key:`deep`,label:`Deep`,icon:(0,j.jsx)(s,{size:16}),description:`Deep reasoning for complex analysis`},{key:`expert`,label:`Expert`,icon:(0,j.jsx)(u,{size:16}),description:`Professional analysis and precise decisions`}],te={auto:(0,j.jsx)(l,{size:16}),fast:(0,j.jsx)(p,{size:16}),deep:(0,j.jsx)(s,{size:16}),expert:(0,j.jsx)(u,{size:16})};function ne(){let[e,t]=(0,A.useState)(!1),[n,r]=(0,A.useState)(`fast`),i=Q.map(e=>({...e,onSelect:()=>r(e.key)}));return(0,j.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,j.jsx)(O,{open:e,onOpenChange:t,items:i,selectedKeys:[n],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8,style:{minWidth:200}},children:(0,j.jsx)(M,{size:`lg`,icon:te[n],open:e,children:Q.find(e=>e.key===n)?.label??`Select a mode`})}),(0,j.jsx)(O,{items:i,selectedKeys:[n],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8,style:{minWidth:200}},children:(0,j.jsx)(M,{children:Q.find(e=>e.key===n)?.label??`Select a mode`})})]})}var re=`/**
 * DropdownItem description Demo — 带副标题描述的菜单项
 */
import { useState } from "react";
import { LightningCharge, DeepThinking, Compass, Node, Level } from "lingee-icon";
import { Dropdown, DropdownButton } from "../../../src";
import type { DropdownItemData } from "../../../src";

const modelOptions: DropdownItemData[] = [
  {
    key: "auto",
    label: "Auto",
    icon: <Node size={16} />,
    description: "Balances performance and cost",
  },
  {
    key: "fast",
    label: "Fast",
    icon: <LightningCharge size={16} />,
    description: "Quick responses for light tasks",
  },
  {
    key: "deep",
    label: "Deep",
    icon: <DeepThinking size={16} />,
    description: "Deep reasoning for complex analysis",
  },
  {
    key: "expert",
    label: "Expert",
    icon: <Level size={16} />,
    description: "Professional analysis and precise decisions",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  auto: <Node size={16} />,
  fast: <LightningCharge size={16} />,
  deep: <DeepThinking size={16} />,
  expert: <Level size={16} />,
};

export default function WithDescriptionDemo() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("fast");

  const items: DropdownItemData[] = modelOptions.map((item) => ({
    ...item,
    onSelect: () => setSelected(item.key),
  }));

  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      {/* size="lg" + 前置图标，模拟模型等级选择器 */}
      <Dropdown
        open={open}
        onOpenChange={setOpen}
        items={items}
        selectedKeys={[selected]}
        modal={false}
        contentProps={{ side: "bottom", align: "start", sideOffset: 8, style: { minWidth: 200 } }}
      >
        <DropdownButton size="lg" icon={iconMap[selected]} open={open}>
          {(modelOptions.find((o) => o.key === selected) as { label: string })?.label ?? "Select a mode"}
        </DropdownButton>
      </Dropdown>

      {/* 默认 size="sm"，不带前置图标 */}
      <Dropdown
        items={items}
        selectedKeys={[selected]}
        modal={false}
        contentProps={{ side: "bottom", align: "start", sideOffset: 8, style: { minWidth: 200 } }}
      >
        <DropdownButton>
          {(modelOptions.find((o) => o.key === selected) as { label: string })?.label ?? "Select a mode"}
        </DropdownButton>
      </Dropdown>
    </div>
  );
}
`;function ie(){let[e,t]=(0,A.useState)(!1);return(0,j.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,j.jsx)(O,{loading:!0,items:[],children:(0,j.jsx)(x,{children:(0,j.jsx)(v,{children:`加载中`})})}),(0,j.jsx)(O,{loading:e,loadError:!0,items:[],onRetry:()=>{t(!0),setTimeout(()=>t(!1),1e3)},children:(0,j.jsx)(x,{children:(0,j.jsx)(v,{children:`加载失败可重试`})})}),(0,j.jsx)(O,{items:[],children:(0,j.jsx)(x,{children:(0,j.jsx)(v,{children:`空态`})})}),(0,j.jsx)(O,{loading:!0,items:[],statusText:{loading:`正在加载租户...`},children:(0,j.jsx)(x,{children:(0,j.jsx)(v,{children:`自定义文案`})})})]})}var ae=`import { useState } from "react";
import { Button, Dropdown, DropdownTrigger } from "lingee-ui";

export default function Demo() {
  const [loading, setLoading] = useState(false);

  // 模拟一次失败的重试：点击占位后进入加载中，1s 后回到失败态
  const handleRetry = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Dropdown loading items={[]}>
        <DropdownTrigger>
          <Button>加载中</Button>
        </DropdownTrigger>
      </Dropdown>

      <Dropdown loading={loading} loadError items={[]} onRetry={handleRetry}>
        <DropdownTrigger>
          <Button>加载失败可重试</Button>
        </DropdownTrigger>
      </Dropdown>

      <Dropdown items={[]}>
        <DropdownTrigger>
          <Button>空态</Button>
        </DropdownTrigger>
      </Dropdown>

      <Dropdown
        loading
        items={[]}
        statusText={{ loading: "正在加载租户..." }}
      >
        <DropdownTrigger>
          <Button>自定义文案</Button>
        </DropdownTrigger>
      </Dropdown>
    </div>
  );
}
`,$=Array.from({length:14},(e,t)=>({key:`item-${t+1}`,label:`选项 ${t+1}`}));function oe(){return(0,j.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,j.jsx)(O,{items:$,header:(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,height:40,padding:`0 12px`,fontSize:13,color:`var(--lg-g-fg-color-black-medium)`},children:[(0,j.jsx)(g,{size:14}),`共 `,$.length,` 个选项`]}),children:(0,j.jsx)(v,{children:`带固定头部`})}),(0,j.jsx)(O,{items:$,footer:(0,j.jsx)(E,{icon:(0,j.jsx)(m,{size:16}),children:`新建选项`}),children:(0,j.jsx)(v,{children:`带固定底部`})}),(0,j.jsx)(O,{items:$,header:(0,j.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:40,padding:`0 12px`,fontSize:13,color:`var(--lg-g-fg-color-black-medium)`},children:`全部选项`}),footer:(0,j.jsx)(E,{icon:(0,j.jsx)(m,{size:16}),children:`新建选项`}),children:(0,j.jsx)(v,{children:`头部 + 底部`})})]})}var se=`import { Dropdown, Button, DropdownItem } from "lingee-ui";
import { Plus, Search } from "lingee-icon";

const items = Array.from({ length: 14 }, (_, i) => ({
  key: \`item-\${i + 1}\`,
  label: \`选项 \${i + 1}\`,
}));

export default function HeaderFooterDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Dropdown
        items={items}
        header={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              height: 40,
              padding: "0 12px",
              fontSize: 13,
              color: "var(--lg-g-fg-color-black-medium)",
            }}
          >
            <Search size={14} />
            共 {items.length} 个选项
          </div>
        }
      >
        <Button>带固定头部</Button>
      </Dropdown>

      <Dropdown
        items={items}
        footer={
          <DropdownItem icon={<Plus size={16} />}>新建选项</DropdownItem>
        }
      >
        <Button>带固定底部</Button>
      </Dropdown>

      <Dropdown
        items={items}
        header={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: 40,
              padding: "0 12px",
              fontSize: 13,
              color: "var(--lg-g-fg-color-black-medium)",
            }}
          >
            全部选项
          </div>
        }
        footer={
          <DropdownItem icon={<Plus size={16} />}>新建选项</DropdownItem>
        }
      >
        <Button>头部 + 底部</Button>
      </Dropdown>
    </div>
  );
}
`;export{P as C,F as S,z as _,re as a,ee as b,X as c,G as d,W as f,B as g,V as h,ie as i,q as l,H as m,oe as n,ne as o,U as p,ae as r,Z as s,se as t,K as u,R as v,N as w,I as x,L as y};