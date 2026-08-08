import{A as e,D as t,b as n,x as r,y as i}from"./dist-DjLZdxEA.js";import{t as a}from"./ChevronDown-DkD3e0uA.js";import{i as o,n as s,r as c,t as l}from"./Share-DbVZN58p.js";import{n as u,r as d,t as f}from"./Trash-ujZdFd2W.js";import{t as p}from"./XLg-BVUzbMOA.js";import{t as m}from"./DemoBox-DEznk3dE.js";import{t as h}from"./button-hSCyyIv7.js";import{a as g,c as _,d as v,i as y,l as b,n as x,o as S,r as C,s as w,t as T,u as E}from"./dropdown-CmOC4fGA.js";var D=e(t()),O=r(),k=(0,D.forwardRef)(({children:e,variant:t=`default`,icon:n,selected:r=!1,open:o=!1,clearable:s=!1,hideArrow:c=!1,disabled:l=!1,className:u,onClick:d,onClear:f,...m},h)=>{let[g,_]=(0,D.useState)(!1),v=(0,D.useCallback)(e=>{e.stopPropagation(),e.preventDefault(),f?.(e)},[f]),y=r&&s&&g&&!o;return(0,O.jsxs)(`button`,{ref:h,type:`button`,disabled:l,className:i(`lg-dropdown-button`,t!=="default"&&`lg-dropdown-button--${t}`,r&&`lg-dropdown-button--selected`,o&&`lg-dropdown-button--open`,l&&`lg-dropdown-button--disabled`,u),onClick:d,onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),...m,children:[n&&(0,O.jsx)(`span`,{className:`lg-dropdown-button__icon`,children:n}),e&&(0,O.jsx)(`span`,{className:`lg-dropdown-button__label`,children:e}),!c&&(y?(0,O.jsx)(`span`,{className:`lg-dropdown-button__clear`,onMouseDown:v,role:`button`,"aria-label":`清除`,children:(0,O.jsx)(p,{size:12})}):(0,O.jsx)(a,{size:16,className:`lg-dropdown-button__arrow`}))]})});k.displayName=`DropdownButton`;function A(){return(0,O.jsx)(T,{items:[{key:`edit`,label:`编辑`},{key:`copy`,label:`复制`},{key:`share`,label:`分享`}],children:(0,O.jsx)(h,{children:`操作菜单`})})}var j=`import { Dropdown, Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <Dropdown
      items={[
        { key: "edit", label: "编辑" },
        { key: "copy", label: "复制" },
        { key: "share", label: "分享" },
      ]}
    >
      <Button>操作菜单</Button>
    </Dropdown>
  );
}
`;function M(){return(0,O.jsx)(T,{items:[{key:`edit`,label:`编辑`,icon:(0,O.jsx)(u,{})},{key:`copy`,label:`复制`,icon:(0,O.jsx)(d,{})},{type:`separator`},{key:`delete`,label:`删除`,icon:(0,O.jsx)(f,{}),danger:!0}],children:(0,O.jsx)(h,{children:`带图标菜单`})})}var N=`import { Dropdown, Button } from "lingee-ui";
import { Edit, Copy, Trash } from "lingee-icon";

export default function WithIconDemo() {
  return (
    <Dropdown
      items={[
        { key: "edit", label: "编辑", icon: <Edit /> },
        { key: "copy", label: "复制", icon: <Copy /> },
        { type: "separator" },
        { key: "delete", label: "删除", icon: <Trash />, danger: true },
      ]}
    >
      <Button>带图标菜单</Button>
    </Dropdown>
  );
}
`;function P(){return(0,O.jsx)(T,{items:[{key:`edit`,label:`编辑`,icon:(0,O.jsx)(u,{})},{type:`separator`},{key:`delete`,label:`删除`,icon:(0,O.jsx)(f,{}),danger:!0}],children:(0,O.jsx)(h,{children:`包含危险操作`})})}var F=`import { Dropdown, Button } from "lingee-ui";
import { Edit, Trash } from "lingee-icon";

export default function DangerDemo() {
  return (
    <Dropdown
      items={[
        { key: "edit", label: "编辑", icon: <Edit /> },
        { type: "separator" },
        { key: "delete", label: "删除", icon: <Trash />, danger: true },
      ]}
    >
      <Button>包含危险操作</Button>
    </Dropdown>
  );
}
`;function I(){return(0,O.jsx)(T,{items:[{key:`view`,label:`查看详情`},{key:`export`,label:`导出（无权限）`,disabled:!0},{type:`separator`},{key:`delete`,label:`删除`,icon:(0,O.jsx)(f,{}),danger:!0}],children:(0,O.jsx)(h,{children:`包含禁用项`})})}var L=`import { Dropdown, Button } from "lingee-ui";
import { Trash } from "lingee-icon";

export default function DisabledItemDemo() {
  return (
    <Dropdown
      items={[
        { key: "view", label: "查看详情" },
        { key: "export", label: "导出（无权限）", disabled: true },
        { type: "separator" },
        { key: "delete", label: "删除", icon: <Trash />, danger: true },
      ]}
    >
      <Button>包含禁用项</Button>
    </Dropdown>
  );
}
`;function R(){return(0,O.jsx)(T,{items:[{type:`label`,label:`编辑操作`},{key:`edit`,label:`编辑`,icon:(0,O.jsx)(u,{})},{key:`copy`,label:`复制`,icon:(0,O.jsx)(d,{})},{type:`separator`},{type:`label`,label:`分享`},{key:`share`,label:`分享给同事`,icon:(0,O.jsx)(l,{})},{type:`separator`},{type:`label`,label:`危险操作`},{key:`delete`,label:`删除`,icon:(0,O.jsx)(f,{}),danger:!0}],children:(0,O.jsx)(h,{children:`分组菜单`})})}var z=`import { Dropdown, Button } from "lingee-ui";
import { Edit, Copy, Share, Trash } from "lingee-icon";

export default function GroupDemo() {
  return (
    <Dropdown
      items={[
        { type: "label", label: "编辑操作" },
        { key: "edit", label: "编辑", icon: <Edit /> },
        { key: "copy", label: "复制", icon: <Copy /> },
        { type: "separator" },
        { type: "label", label: "分享" },
        { key: "share", label: "分享给同事", icon: <Share /> },
        { type: "separator" },
        { type: "label", label: "危险操作" },
        { key: "delete", label: "删除", icon: <Trash />, danger: true },
      ]}
    >
      <Button>分组菜单</Button>
    </Dropdown>
  );
}
`;function B(){let[e,t]=(0,D.useState)(`newest`);return(0,O.jsxs)(T,{children:[(0,O.jsx)(v,{children:(0,O.jsx)(h,{children:`排序与筛选`})}),(0,O.jsxs)(x,{style:{minWidth:180},children:[(0,O.jsx)(y,{children:`排序方式`}),(0,O.jsxs)(g,{value:e,onValueChange:t,children:[(0,O.jsx)(S,{value:`newest`,children:`最新优先`}),(0,O.jsx)(S,{value:`oldest`,children:`最早优先`}),(0,O.jsx)(S,{value:`name`,children:`按名称`})]}),(0,O.jsx)(w,{}),(0,O.jsx)(y,{children:`操作`}),(0,O.jsx)(C,{onSelect:()=>console.log(`刷新`),children:`刷新列表`}),(0,O.jsx)(C,{onSelect:()=>console.log(`导出`),children:`导出数据`})]})]})}var V=`import { useState } from "react";
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
        <Button>排序与筛选</Button>
      </DropdownTrigger>
      <DropdownContent style={{ minWidth: 180 }}>
        <DropdownLabel>排序方式</DropdownLabel>
        <DropdownRadioGroup value={sort} onValueChange={setSort}>
          <DropdownRadioItem value="newest">最新优先</DropdownRadioItem>
          <DropdownRadioItem value="oldest">最早优先</DropdownRadioItem>
          <DropdownRadioItem value="name">按名称</DropdownRadioItem>
        </DropdownRadioGroup>
        <DropdownSeparator />
        <DropdownLabel>操作</DropdownLabel>
        <DropdownItem onSelect={() => console.log("刷新")}>刷新列表</DropdownItem>
        <DropdownItem onSelect={() => console.log("导出")}>导出数据</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
`;function H(){let[e,t]=(0,D.useState)(`zh-CN`);return(0,O.jsxs)(T,{children:[(0,O.jsx)(v,{children:(0,O.jsx)(h,{children:`用户面板`})}),(0,O.jsxs)(x,{side:`bottom`,align:`start`,style:{minWidth:200},children:[(0,O.jsx)(C,{children:`个人设置`}),(0,O.jsxs)(_,{children:[(0,O.jsx)(E,{children:`语言切换`}),(0,O.jsx)(b,{children:(0,O.jsxs)(g,{value:e,onValueChange:t,children:[(0,O.jsx)(S,{value:`zh-CN`,children:`简体中文`}),(0,O.jsx)(S,{value:`en-US`,children:`English`}),(0,O.jsx)(S,{value:`ja-JP`,children:`日本語`})]})})]}),(0,O.jsxs)(_,{children:[(0,O.jsx)(E,{children:`更多设置`}),(0,O.jsxs)(b,{children:[(0,O.jsx)(C,{children:`主题偏好`}),(0,O.jsx)(C,{children:`通知设置`}),(0,O.jsx)(C,{children:`数据导出`})]})]}),(0,O.jsx)(w,{}),(0,O.jsx)(C,{danger:!0,children:`退出登录`})]})]})}var U=`import { useState } from "react";
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
        <Button>用户面板</Button>
      </DropdownTrigger>
      <DropdownContent side="bottom" align="start" style={{ minWidth: 200 }}>
        <DropdownItem>个人设置</DropdownItem>
        <DropdownSub>
          <DropdownSubTrigger>语言切换</DropdownSubTrigger>
          <DropdownSubContent>
            <DropdownRadioGroup value={lang} onValueChange={setLang}>
              <DropdownRadioItem value="zh-CN">简体中文</DropdownRadioItem>
              <DropdownRadioItem value="en-US">English</DropdownRadioItem>
              <DropdownRadioItem value="ja-JP">日本語</DropdownRadioItem>
            </DropdownRadioGroup>
          </DropdownSubContent>
        </DropdownSub>
        <DropdownSub>
          <DropdownSubTrigger>更多设置</DropdownSubTrigger>
          <DropdownSubContent>
            <DropdownItem>主题偏好</DropdownItem>
            <DropdownItem>通知设置</DropdownItem>
            <DropdownItem>数据导出</DropdownItem>
          </DropdownSubContent>
        </DropdownSub>
        <DropdownSeparator />
        <DropdownItem danger>退出登录</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
`;function W(){let[e,t]=(0,D.useState)(!1);return(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,O.jsxs)(h,{size:`sm`,onClick:()=>t(!e),children:[`外部切换（`,e?`打开`:`关闭`,`）`]}),(0,O.jsx)(T,{items:[{key:`a`,label:`操作 A`},{key:`b`,label:`操作 B`},{key:`c`,label:`操作 C`}],open:e,onOpenChange:t,children:(0,O.jsx)(h,{variant:`primary`,children:`受控菜单`})})]})}var G=`import { useState } from "react";
import { Dropdown, Button } from "lingee-ui";

export default function ControlledDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Button size="sm" onClick={() => setOpen(!open)}>
        外部切换（{open ? "打开" : "关闭"}）
      </Button>
      <Dropdown
        items={[
          { key: "a", label: "操作 A" },
          { key: "b", label: "操作 B" },
          { key: "c", label: "操作 C" },
        ]}
        open={open}
        onOpenChange={setOpen}
      >
        <Button variant="primary">受控菜单</Button>
      </Dropdown>
    </div>
  );
}
`,K=[{key:`1`,label:`报销审核专员`},{key:`2`,label:`数据分析师`},{key:`3`,label:`文档撰写助手`}],q=[{key:`fast`,label:`快速`},{key:`auto`,label:`自动`},{key:`precise`,label:`精准`}];function J(){let[e,t]=(0,D.useState)(!1),[n,r]=(0,D.useState)(null),[i,a]=(0,D.useState)(!1),[o,c]=(0,D.useState)(`fast`),[l,u]=(0,D.useState)(!1),[d,f]=(0,D.useState)(`白话文`),[p,m]=(0,D.useState)(!1),[h,g]=(0,D.useState)(`fast`),_=K.map(e=>({key:e.key,label:e.label,onSelect:()=>r(e.key)})),v=K.find(e=>e.key===n)?.label;return(0,O.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`,alignItems:`center`},children:[(0,O.jsx)(T,{open:e,onOpenChange:t,items:_,selectedKeys:n?[n]:[],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,O.jsx)(k,{icon:(0,O.jsx)(s,{size:16}),open:e,selected:!!n,clearable:!!n,onClear:()=>r(null),children:v??`选择智能体`})}),(0,O.jsx)(T,{open:i,onOpenChange:a,items:q.map(e=>({...e,onSelect:()=>c(e.key)})),selectedKeys:[o],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,O.jsx)(k,{open:i,children:q.find(e=>e.key===o)?.label})}),(0,O.jsx)(T,{open:l,onOpenChange:u,items:[{key:`白话文`,label:`白话文`,onSelect:()=>f(`白话文`)},{key:`文言文`,label:`文言文`,onSelect:()=>f(`文言文`)}],selectedKeys:[d],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,O.jsx)(k,{open:l,selected:!0,children:d})}),(0,O.jsx)(`div`,{style:{background:`#F1F1F6`,padding:`12px 16px`,borderRadius:12},children:(0,O.jsx)(T,{open:p,onOpenChange:m,items:q.map(e=>({...e,onSelect:()=>g(e.key)})),selectedKeys:[h],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,O.jsx)(k,{variant:`glassy`,open:p,children:q.find(e=>e.key===h)?.label??`全部板块`})})})]})}var Y=`/**
 * DropdownButton Demo — 统一下拉触发器按钮
 */
import { useState } from "react";
import { Effect } from "lingee-icon";
import { Dropdown, DropdownButton } from "../../../src";
import type { DropdownItemData } from "../../../src";

const agents = [
  { key: "1", label: "报销审核专员" },
  { key: "2", label: "数据分析师" },
  { key: "3", label: "文档撰写助手" },
];

const modeOptions = [
  { key: "fast", label: "快速" },
  { key: "auto", label: "自动" },
  { key: "precise", label: "精准" },
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

  const agentItems: DropdownItemData[] = agents.map((a) => ({
    key: a.key,
    label: a.label,
    onSelect: () => setSelectedAgent(a.key),
  }));

  const agentName = agents.find((a) => a.key === selectedAgent)?.label;

  const langItems: DropdownItemData[] = [
    { key: "白话文", label: "白话文", onSelect: () => setLang("白话文") },
    { key: "文言文", label: "文言文", onSelect: () => setLang("文言文") },
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
          {agentName ?? "选择智能体"}
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
          {lang}
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
            {modeOptions.find((o) => o.key === glassyMode)?.label ?? "全部板块"}
          </DropdownButton>
        </Dropdown>
      </div>
    </div>
  );
}
`,X=[{key:`fast`,label:`快速`,icon:(0,O.jsx)(n,{size:16}),description:`快速响应，适合轻量任务`},{key:`deep`,label:`深度`,icon:(0,O.jsx)(c,{size:16}),description:`深度思考，适合复杂推理`},{key:`explore`,label:`探索`,icon:(0,O.jsx)(o,{size:16}),description:`创意发散，适合头脑风暴`}];function Z(){let[e,t]=(0,D.useState)(!1),[n,r]=(0,D.useState)(`fast`),i=X.map(e=>({...e,onSelect:()=>r(e.key)}));return(0,O.jsx)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:(0,O.jsx)(T,{open:e,onOpenChange:t,items:i,selectedKeys:[n],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8,style:{minWidth:200}},children:(0,O.jsx)(k,{open:e,children:X.find(e=>e.key===n)?.label??`选择模式`})})})}var Q=`/**
 * DropdownItem description Demo — 带副标题描述的菜单项
 */
import { useState } from "react";
import { LightningCharge, DeepThinking, Compass } from "lingee-icon";
import { Dropdown, DropdownButton } from "../../../src";
import type { DropdownItemData } from "../../../src";

const modelOptions: DropdownItemData[] = [
  {
    key: "fast",
    label: "快速",
    icon: <LightningCharge size={16} />,
    description: "快速响应，适合轻量任务",
  },
  {
    key: "deep",
    label: "深度",
    icon: <DeepThinking size={16} />,
    description: "深度思考，适合复杂推理",
  },
  {
    key: "explore",
    label: "探索",
    icon: <Compass size={16} />,
    description: "创意发散，适合头脑风暴",
  },
];

export default function WithDescriptionDemo() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("fast");

  const items: DropdownItemData[] = modelOptions.map((item) => ({
    ...item,
    onSelect: () => setSelected(item.key),
  }));

  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Dropdown
        open={open}
        onOpenChange={setOpen}
        items={items}
        selectedKeys={[selected]}
        modal={false}
        contentProps={{ side: "bottom", align: "start", sideOffset: 8, style: { minWidth: 200 } }}
      >
        <DropdownButton open={open}>
          {modelOptions.find((o) => o.key === selected)?.label ?? "选择模式"}
        </DropdownButton>
      </Dropdown>
    </div>
  );
}
`,ee={title:`Dropdown 下拉菜单`,description:`向下弹出的操作菜单列表，支持图标、分组、危险操作、子菜单等。`};function $(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(t.h2,{children:`基本用法`}),`
`,(0,O.jsxs)(t.p,{children:[`通过 `,(0,O.jsx)(t.code,{children:`items`}),` 快捷方式创建简单的下拉菜单。`]}),`
`,(0,O.jsx)(m,{source:j,children:(0,O.jsx)(A,{})}),`
`,(0,O.jsx)(t.h2,{children:`带图标菜单项`}),`
`,(0,O.jsxs)(t.p,{children:[`菜单项支持 `,(0,O.jsx)(t.code,{children:`icon`}),` 和 `,(0,O.jsx)(t.code,{children:`danger`}),` 属性。`]}),`
`,(0,O.jsx)(m,{source:N,children:(0,O.jsx)(M,{})}),`
`,(0,O.jsx)(t.h2,{children:`危险操作项`}),`
`,(0,O.jsxs)(t.p,{children:[`菜单项设置 `,(0,O.jsx)(t.code,{children:`danger: true`}),` 以红色标识危险操作。`]}),`
`,(0,O.jsx)(m,{source:F,children:(0,O.jsx)(P,{})}),`
`,(0,O.jsx)(t.h2,{children:`禁用项`}),`
`,(0,O.jsxs)(t.p,{children:[`菜单项设置 `,(0,O.jsx)(t.code,{children:`disabled: true`}),` 禁止点击交互。`]}),`
`,(0,O.jsx)(m,{source:L,children:(0,O.jsx)(I,{})}),`
`,(0,O.jsx)(t.h2,{children:`分组 + 标题`}),`
`,(0,O.jsxs)(t.p,{children:[`通过 `,(0,O.jsx)(t.code,{children:`type: "label"`}),` 和 `,(0,O.jsx)(t.code,{children:`type: "separator"`}),` 对菜单项进行分组，增强结构化。`]}),`
`,(0,O.jsx)(m,{source:z,children:(0,O.jsx)(R,{})}),`
`,(0,O.jsx)(t.h2,{children:`单选组（RadioGroup）`}),`
`,(0,O.jsxs)(t.p,{children:[`使用 Compound Component 模式实现单选菜单，支持 `,(0,O.jsx)(t.code,{children:`DropdownRadioGroup`}),` + `,(0,O.jsx)(t.code,{children:`DropdownRadioItem`}),`。`]}),`
`,(0,O.jsx)(m,{source:V,children:(0,O.jsx)(B,{})}),`
`,(0,O.jsx)(t.h2,{children:`子菜单`}),`
`,(0,O.jsxs)(t.p,{children:[`支持多级嵌套子菜单（`,(0,O.jsx)(t.code,{children:`DropdownSub`}),` + `,(0,O.jsx)(t.code,{children:`DropdownSubTrigger`}),` + `,(0,O.jsx)(t.code,{children:`DropdownSubContent`}),`），hover 触发展开。`]}),`
`,(0,O.jsx)(m,{source:U,children:(0,O.jsx)(H,{})}),`
`,(0,O.jsx)(t.h2,{children:`受控模式`}),`
`,(0,O.jsxs)(t.p,{children:[`通过 `,(0,O.jsx)(t.code,{children:`open`}),` / `,(0,O.jsx)(t.code,{children:`onOpenChange`}),` 实现外部控制菜单开关。`]}),`
`,(0,O.jsx)(m,{source:G,children:(0,O.jsx)(W,{})}),`
`,(0,O.jsx)(t.h2,{children:`带描述菜单项`}),`
`,(0,O.jsxs)(t.p,{children:[`菜单项支持 `,(0,O.jsx)(t.code,{children:`description`}),` 属性，在主文本下方显示辅助描述文字。`]}),`
`,(0,O.jsx)(m,{source:Q,children:(0,O.jsx)(Z,{})}),`
`,(0,O.jsx)(t.h2,{children:`API`}),`
`,(0,O.jsx)(t.h3,{children:`Dropdown`}),`
`,(0,O.jsxs)(t.table,{children:[(0,O.jsx)(t.thead,{children:(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.th,{children:`属性`}),(0,O.jsx)(t.th,{children:`说明`}),(0,O.jsx)(t.th,{children:`类型`}),(0,O.jsx)(t.th,{children:`默认值`})]})}),(0,O.jsxs)(t.tbody,{children:[(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`items`})}),(0,O.jsx)(t.td,{children:`菜单项数据（快捷模式）`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`DropdownItemData[]`})}),(0,O.jsx)(t.td,{children:`-`})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`open`})}),(0,O.jsx)(t.td,{children:`受控打开状态`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`boolean`})}),(0,O.jsx)(t.td,{children:`-`})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`defaultOpen`})}),(0,O.jsx)(t.td,{children:`非受控默认打开状态`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`boolean`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`false`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`onOpenChange`})}),(0,O.jsx)(t.td,{children:`打开状态变化回调`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`(open: boolean) => void`})}),(0,O.jsx)(t.td,{children:`-`})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`modal`})}),(0,O.jsx)(t.td,{children:`是否为模态弹出`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`boolean`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`true`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`disabled`})}),(0,O.jsx)(t.td,{children:`是否禁用`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`boolean`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`false`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`selectedKeys`})}),(0,O.jsx)(t.td,{children:`选中项 key 数组（显示勾选）`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`string[]`})}),(0,O.jsx)(t.td,{children:`-`})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`children`})}),(0,O.jsx)(t.td,{children:`触发器元素`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`ReactNode`})}),(0,O.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,O.jsx)(t.h3,{children:`DropdownContent`}),`
`,(0,O.jsxs)(t.table,{children:[(0,O.jsx)(t.thead,{children:(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.th,{children:`属性`}),(0,O.jsx)(t.th,{children:`说明`}),(0,O.jsx)(t.th,{children:`类型`}),(0,O.jsx)(t.th,{children:`默认值`})]})}),(0,O.jsxs)(t.tbody,{children:[(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`side`})}),(0,O.jsx)(t.td,{children:`弹出方向`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`"top" | "bottom" | "left" | "right"`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`"bottom"`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`align`})}),(0,O.jsx)(t.td,{children:`对齐方式`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`"start" | "center" | "end"`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`"start"`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`sideOffset`})}),(0,O.jsx)(t.td,{children:`侧向偏移`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`number`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`4`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`header`})}),(0,O.jsx)(t.td,{children:`固定头部内容`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`ReactNode`})}),(0,O.jsx)(t.td,{children:`-`})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`footer`})}),(0,O.jsx)(t.td,{children:`固定底部内容`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`ReactNode`})}),(0,O.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,O.jsx)(t.h3,{children:`DropdownItem`}),`
`,(0,O.jsxs)(t.table,{children:[(0,O.jsx)(t.thead,{children:(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.th,{children:`属性`}),(0,O.jsx)(t.th,{children:`说明`}),(0,O.jsx)(t.th,{children:`类型`}),(0,O.jsx)(t.th,{children:`默认值`})]})}),(0,O.jsxs)(t.tbody,{children:[(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`onSelect`})}),(0,O.jsx)(t.td,{children:`选中回调`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`(event: Event) => void`})}),(0,O.jsx)(t.td,{children:`-`})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`disabled`})}),(0,O.jsx)(t.td,{children:`是否禁用`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`boolean`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`false`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`danger`})}),(0,O.jsx)(t.td,{children:`是否为危险操作（红色）`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`boolean`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`false`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`icon`})}),(0,O.jsx)(t.td,{children:`前缀图标`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`ReactNode`})}),(0,O.jsx)(t.td,{children:`-`})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`description`})}),(0,O.jsx)(t.td,{children:`副标题描述（显示在主文本下方）`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`ReactNode`})}),(0,O.jsx)(t.td,{children:`-`})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`selected`})}),(0,O.jsx)(t.td,{children:`是否选中（显示勾选）`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`boolean`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`false`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`children`})}),(0,O.jsx)(t.td,{children:`菜单项内容`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`ReactNode`})}),(0,O.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,O.jsx)(t.h2,{children:`DropdownButton 触发器按钮`}),`
`,(0,O.jsx)(t.p,{children:`统一的下拉触发器按钮组件，提供两种视觉态：`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`Default`}),`：透明背景 + 深色文字，hover 时浅灰底`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`Selected`}),`：蓝色浅底 + 蓝色文字，支持 hover 显示清除图标`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`Glassy`}),`：半透明白底 + 描边，适用于有色背景`]}),`
`]}),`
`,(0,O.jsx)(t.p,{children:`适用于所有 Dropdown / Popover 的触发按钮，替代各处手写的 trigger button，确保高度、间距、hover 背景色统一。`}),`
`,(0,O.jsx)(m,{source:Y,children:(0,O.jsx)(J,{})}),`
`,(0,O.jsx)(t.h3,{children:`DropdownButton`}),`
`,(0,O.jsxs)(t.table,{children:[(0,O.jsx)(t.thead,{children:(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.th,{children:`属性`}),(0,O.jsx)(t.th,{children:`说明`}),(0,O.jsx)(t.th,{children:`类型`}),(0,O.jsx)(t.th,{children:`默认值`})]})}),(0,O.jsxs)(t.tbody,{children:[(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`children`})}),(0,O.jsx)(t.td,{children:`按钮文本`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`ReactNode`})}),(0,O.jsx)(t.td,{children:`-`})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`variant`})}),(0,O.jsx)(t.td,{children:`按钮变体`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`"default" | "glassy"`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`"default"`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`icon`})}),(0,O.jsx)(t.td,{children:`前置图标`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`ReactNode`})}),(0,O.jsx)(t.td,{children:`-`})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`selected`})}),(0,O.jsx)(t.td,{children:`是否已有选中内容（蓝色态）`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`boolean`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`false`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`open`})}),(0,O.jsx)(t.td,{children:`是否展开态（箭头旋转 180°）`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`boolean`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`false`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`clearable`})}),(0,O.jsx)(t.td,{children:`hover 时是否显示清除图标`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`boolean`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`false`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`hideArrow`})}),(0,O.jsx)(t.td,{children:`隐藏箭头（用于纯 toggle 按钮）`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`boolean`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`false`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`disabled`})}),(0,O.jsx)(t.td,{children:`是否禁用`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`boolean`})}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`false`})})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`onClear`})}),(0,O.jsx)(t.td,{children:`清除回调`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`(e: MouseEvent) => void`})}),(0,O.jsx)(t.td,{children:`-`})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`onClick`})}),(0,O.jsx)(t.td,{children:`点击回调`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`(e: MouseEvent) => void`})}),(0,O.jsx)(t.td,{children:`-`})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`className`})}),(0,O.jsx)(t.td,{children:`额外类名`}),(0,O.jsx)(t.td,{children:(0,O.jsx)(t.code,{children:`string`})}),(0,O.jsx)(t.td,{children:`-`})]})]})]})]})}function te(e={}){let{wrapper:t}=e.components||{};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)($,{...e})}):$(e)}export{te as default,ee as frontmatter};