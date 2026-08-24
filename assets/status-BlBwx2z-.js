import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./utils-BEZlSqlY.js";import{n as i}from"./provider-BWqppJYI.js";import{t as a}from"./ChevronDown-BhRBglOD.js";import{t as o}from"./Copy-BTN27AzH.js";import{a as s,i as c,n as l,r as u,t as d}from"./Share-CZN1q8Kr.js";import{t as f}from"./Edit-Jm0Cr2sA.js";import{t as p}from"./LightningCharge-B8hub4Ff.js";import{t as m}from"./Trash-gEfh42ac.js";import{t as h}from"./XLg-CbEnWsB1.js";import{t as g}from"./button-B7wPs43G.js";import{a as _,c as v,d as y,i as b,l as x,n as S,o as C,r as w,s as T,t as E,u as D}from"./dropdown-BImXv3RD.js";var O=e(t()),k=n(),A=(0,O.forwardRef)(({children:e,variant:t=`default`,size:n=`sm`,selectedVariant:o=`primary`,icon:s,selected:c=!1,open:l=!1,clearable:u=!1,hideArrow:d=!1,disabled:f=!1,className:p,onClick:m,onClear:g,..._},v)=>{let[y,b]=(0,O.useState)(!1),x=i(`Dropdown`),S=(0,O.useCallback)(e=>{e.stopPropagation(),e.preventDefault(),g?.(e)},[g]),C=c&&u&&y&&!l;return(0,k.jsxs)(`button`,{ref:v,type:`button`,disabled:f,className:r(`lg-dropdown-button`,t!=="default"&&`lg-dropdown-button--${t}`,n!==`sm`&&`lg-dropdown-button--${n}`,c&&`lg-dropdown-button--selected`,c&&o!==`primary`&&`lg-dropdown-button--selected-${o}`,l&&`lg-dropdown-button--open`,f&&`lg-dropdown-button--disabled`,p),onClick:m,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),..._,children:[s&&(0,k.jsx)(`span`,{className:`lg-dropdown-button__icon`,children:s}),e&&(0,k.jsx)(`span`,{className:`lg-dropdown-button__label`,children:e}),!d&&(C?(0,k.jsx)(`span`,{className:`lg-dropdown-button__clear`,onMouseDown:S,role:`button`,"aria-label":x.clear,children:(0,k.jsx)(h,{size:12})}):(0,k.jsx)(a,{size:16,className:`lg-dropdown-button__arrow`}))]})});A.displayName=`DropdownButton`;function j(){return(0,k.jsx)(E,{items:[{key:`edit`,label:`Edit`},{key:`copy`,label:`Copy`},{key:`share`,label:`Share`}],children:(0,k.jsx)(g,{children:`Actions`})})}var M=`import { Dropdown, Button } from "lingee-ui";

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
`;function N(){return(0,k.jsx)(E,{items:[{key:`edit`,label:`Edit`,icon:(0,k.jsx)(f,{})},{key:`copy`,label:`Copy`,icon:(0,k.jsx)(o,{})},{type:`separator`},{key:`delete`,label:`Delete`,icon:(0,k.jsx)(m,{}),danger:!0}],children:(0,k.jsx)(g,{children:`Menu with icons`})})}var P=`import { Dropdown, Button } from "lingee-ui";
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
`;function F(){return(0,k.jsx)(E,{items:[{key:`edit`,label:`Edit`,icon:(0,k.jsx)(f,{})},{type:`separator`},{key:`delete`,label:`Delete`,icon:(0,k.jsx)(m,{}),danger:!0}],children:(0,k.jsx)(g,{children:`With danger action`})})}var I=`import { Dropdown, Button } from "lingee-ui";
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
`;function L(){return(0,k.jsx)(E,{items:[{key:`view`,label:`View details`},{key:`export`,label:`Export (no permission)`,disabled:!0},{type:`separator`},{key:`delete`,label:`Delete`,icon:(0,k.jsx)(m,{}),danger:!0}],children:(0,k.jsx)(g,{children:`With disabled item`})})}var R=`import { Dropdown, Button } from "lingee-ui";
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
`;function z(){return(0,k.jsx)(E,{items:[{type:`label`,label:`Edit`},{key:`edit`,label:`Edit`,icon:(0,k.jsx)(f,{})},{key:`copy`,label:`Copy`,icon:(0,k.jsx)(o,{})},{type:`separator`},{type:`label`,label:`Share`},{key:`share`,label:`Share with team`,icon:(0,k.jsx)(d,{})},{type:`separator`},{type:`label`,label:`Danger zone`},{key:`delete`,label:`Delete`,icon:(0,k.jsx)(m,{}),danger:!0}],children:(0,k.jsx)(g,{children:`Grouped menu`})})}var B=`import { Dropdown, Button } from "lingee-ui";
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
`;function V(){let[e,t]=(0,O.useState)(`newest`);return(0,k.jsxs)(E,{children:[(0,k.jsx)(y,{children:(0,k.jsx)(g,{children:`Sort and filter`})}),(0,k.jsxs)(S,{style:{minWidth:180},children:[(0,k.jsx)(b,{children:`Sort by`}),(0,k.jsxs)(_,{value:e,onValueChange:t,children:[(0,k.jsx)(C,{value:`newest`,children:`Newest first`}),(0,k.jsx)(C,{value:`oldest`,children:`Oldest first`}),(0,k.jsx)(C,{value:`name`,children:`By name`})]}),(0,k.jsx)(T,{}),(0,k.jsx)(b,{children:`Actions`}),(0,k.jsx)(w,{onSelect:()=>console.log(`refresh`),children:`Refresh list`}),(0,k.jsx)(w,{onSelect:()=>console.log(`export`),children:`Export data`})]})]})}var H=`import { useState } from "react";
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
`;function U(){let[e,t]=(0,O.useState)(`zh-CN`);return(0,k.jsxs)(E,{children:[(0,k.jsx)(y,{children:(0,k.jsx)(g,{children:`Account`})}),(0,k.jsxs)(S,{side:`bottom`,align:`start`,style:{minWidth:200},children:[(0,k.jsx)(w,{children:`Profile settings`}),(0,k.jsxs)(v,{children:[(0,k.jsx)(D,{children:`Language`}),(0,k.jsx)(x,{children:(0,k.jsxs)(_,{value:e,onValueChange:t,children:[(0,k.jsx)(C,{value:`zh-CN`,children:`Chinese (Simplified)`}),(0,k.jsx)(C,{value:`en-US`,children:`English`}),(0,k.jsx)(C,{value:`ja-JP`,children:`Japanese`})]})})]}),(0,k.jsxs)(v,{children:[(0,k.jsx)(D,{children:`More settings`}),(0,k.jsxs)(x,{children:[(0,k.jsx)(w,{children:`Theme`}),(0,k.jsx)(w,{children:`Notifications`}),(0,k.jsx)(w,{children:`Export data`})]})]}),(0,k.jsx)(T,{}),(0,k.jsx)(w,{danger:!0,children:`Log out`})]})]})}var W=`import { useState } from "react";
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
`;function G(){let[e,t]=(0,O.useState)(!1);return(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,k.jsxs)(g,{size:`sm`,onClick:()=>t(!e),children:[`Toggle externally (`,e?`Open`:`Closed`,`)`]}),(0,k.jsx)(E,{items:[{key:`a`,label:`Action A`},{key:`b`,label:`Action B`},{key:`c`,label:`Action C`}],open:e,onOpenChange:t,children:(0,k.jsx)(g,{variant:`primary`,children:`Controlled menu`})})]})}var K=`import { useState } from "react";
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
`,q=[{key:`1`,label:`Expense Reviewer`},{key:`2`,label:`Data Analyst`},{key:`3`,label:`Doc Writing Assistant`}],J=[{key:`fast`,label:`Fast`},{key:`auto`,label:`Auto`},{key:`precise`,label:`Precise`}];function Y(){let[e,t]=(0,O.useState)(!1),[n,r]=(0,O.useState)(null),[i,a]=(0,O.useState)(!1),[o,s]=(0,O.useState)(`fast`),[l,u]=(0,O.useState)(!1),[d,f]=(0,O.useState)(`白话文`),[p,m]=(0,O.useState)(!1),[h,g]=(0,O.useState)(`fast`),[_,v]=(0,O.useState)(!1),[y,b]=(0,O.useState)(`1`),x=q.map(e=>({key:e.key,label:e.label,onSelect:()=>r(e.key)})),S=q.find(e=>e.key===n)?.label,C=[{key:`白话文`,label:`Plain Chinese`,onSelect:()=>f(`白话文`)},{key:`文言文`,label:`Classical Chinese`,onSelect:()=>f(`文言文`)}];return(0,k.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`,alignItems:`center`},children:[(0,k.jsx)(E,{open:e,onOpenChange:t,items:x,selectedKeys:n?[n]:[],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,k.jsx)(A,{icon:(0,k.jsx)(c,{size:16}),open:e,selected:!!n,clearable:!!n,onClear:()=>r(null),children:S??`Select an agent`})}),(0,k.jsx)(E,{open:i,onOpenChange:a,items:J.map(e=>({...e,onSelect:()=>s(e.key)})),selectedKeys:[o],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,k.jsx)(A,{open:i,children:J.find(e=>e.key===o)?.label})}),(0,k.jsx)(E,{open:l,onOpenChange:u,items:C,selectedKeys:[d],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,k.jsx)(A,{open:l,selected:!0,children:C.find(e=>e.key===d)?.label})}),(0,k.jsx)(`div`,{style:{background:`#F1F1F6`,padding:`12px 16px`,borderRadius:12},children:(0,k.jsx)(E,{open:p,onOpenChange:m,items:J.map(e=>({...e,onSelect:()=>g(e.key)})),selectedKeys:[h],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,k.jsx)(A,{variant:`glassy`,open:p,children:J.find(e=>e.key===h)?.label??`All sections`})})}),(0,k.jsx)(E,{open:_,onOpenChange:v,items:q.map(e=>({key:e.key,label:e.label,onSelect:()=>b(e.key)})),selectedKeys:y?[y]:[],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,k.jsx)(A,{icon:(0,k.jsx)(c,{size:16}),size:`lg`,selectedVariant:`purple`,open:_,selected:!!y,clearable:!!y,onClear:()=>b(null),children:q.find(e=>e.key===y)?.label??`Select an agent`})})]})}var X=`/**
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
`,Z=[{key:`auto`,label:`Auto`,icon:(0,k.jsx)(l,{size:16}),description:`Balances performance and cost`},{key:`fast`,label:`Fast`,icon:(0,k.jsx)(p,{size:16}),description:`Quick responses for light tasks`},{key:`deep`,label:`Deep`,icon:(0,k.jsx)(s,{size:16}),description:`Deep reasoning for complex analysis`},{key:`expert`,label:`Expert`,icon:(0,k.jsx)(u,{size:16}),description:`Professional analysis and precise decisions`}],Q={auto:(0,k.jsx)(l,{size:16}),fast:(0,k.jsx)(p,{size:16}),deep:(0,k.jsx)(s,{size:16}),expert:(0,k.jsx)(u,{size:16})};function $(){let[e,t]=(0,O.useState)(!1),[n,r]=(0,O.useState)(`fast`),i=Z.map(e=>({...e,onSelect:()=>r(e.key)}));return(0,k.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,k.jsx)(E,{open:e,onOpenChange:t,items:i,selectedKeys:[n],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8,style:{minWidth:200}},children:(0,k.jsx)(A,{size:`lg`,icon:Q[n],open:e,children:Z.find(e=>e.key===n)?.label??`Select a mode`})}),(0,k.jsx)(E,{items:i,selectedKeys:[n],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8,style:{minWidth:200}},children:(0,k.jsx)(A,{children:Z.find(e=>e.key===n)?.label??`Select a mode`})})]})}var ee=`/**
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
`;function te(){let[e,t]=(0,O.useState)(!1);return(0,k.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,k.jsx)(E,{loading:!0,items:[],children:(0,k.jsx)(y,{children:(0,k.jsx)(g,{children:`加载中`})})}),(0,k.jsx)(E,{loading:e,loadError:!0,items:[],onRetry:()=>{t(!0),setTimeout(()=>t(!1),1e3)},children:(0,k.jsx)(y,{children:(0,k.jsx)(g,{children:`加载失败可重试`})})}),(0,k.jsx)(E,{items:[],children:(0,k.jsx)(y,{children:(0,k.jsx)(g,{children:`空态`})})}),(0,k.jsx)(E,{loading:!0,items:[],statusText:{loading:`正在加载租户...`},children:(0,k.jsx)(y,{children:(0,k.jsx)(g,{children:`自定义文案`})})})]})}var ne=`import { useState } from "react";
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
`;export{j as S,I as _,X as a,N as b,G as c,H as d,V as f,L as g,R as h,$ as i,W as l,z as m,te as n,Y as o,B as p,ee as r,K as s,ne as t,U as u,F as v,M as x,P as y};