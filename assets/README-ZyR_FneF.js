import{C as e,M as t,k as n,x as r}from"./dist-DCLsKzkS.js";import{t as i}from"./ChevronDown-CVngeaDp.js";import{n as a,r as o,t as s}from"./Trash-BWkZFjHh.js";import{n as c,t as l}from"./Share-6-UoXtGK.js";import{t as u}from"./XLg-BjLaNPLw.js";import{t as d}from"./DemoBox-D1az5eCZ.js";import{t as f}from"./button-BYTxzV6M.js";import{a as p,c as m,d as h,i as g,l as _,n as v,o as y,r as b,s as x,t as S,u as C}from"./dropdown-nfyQ3SDd.js";var w=t(n()),T=e(),E=(0,w.forwardRef)(({children:e,icon:t,selected:n=!1,open:a=!1,clearable:o=!1,hideArrow:s=!1,disabled:c=!1,className:l,onClick:d,onClear:f,...p},m)=>{let[h,g]=(0,w.useState)(!1),_=(0,w.useCallback)(e=>{e.stopPropagation(),e.preventDefault(),f?.(e)},[f]),v=n&&o&&h&&!a;return(0,T.jsxs)(`button`,{ref:m,type:`button`,disabled:c,className:r(`lg-dropdown-button`,n&&`lg-dropdown-button--selected`,a&&`lg-dropdown-button--open`,c&&`lg-dropdown-button--disabled`,l),onClick:d,onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),...p,children:[t&&(0,T.jsx)(`span`,{className:`lg-dropdown-button__icon`,children:t}),e&&(0,T.jsx)(`span`,{className:`lg-dropdown-button__label`,children:e}),!s&&(v?(0,T.jsx)(`span`,{className:`lg-dropdown-button__clear`,onMouseDown:_,role:`button`,"aria-label":`清除`,children:(0,T.jsx)(u,{size:12})}):(0,T.jsx)(i,{size:14,className:`lg-dropdown-button__arrow`}))]})});E.displayName=`DropdownButton`;function D(){return(0,T.jsx)(S,{items:[{key:`edit`,label:`编辑`},{key:`copy`,label:`复制`},{key:`share`,label:`分享`}],children:(0,T.jsx)(f,{children:`操作菜单`})})}var O=`import { Dropdown, Button } from "lingee-ui";

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
`;function k(){return(0,T.jsx)(S,{items:[{key:`edit`,label:`编辑`,icon:(0,T.jsx)(a,{})},{key:`copy`,label:`复制`,icon:(0,T.jsx)(o,{})},{type:`separator`},{key:`delete`,label:`删除`,icon:(0,T.jsx)(s,{}),danger:!0}],children:(0,T.jsx)(f,{children:`带图标菜单`})})}var A=`import { Dropdown, Button } from "lingee-ui";
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
`;function j(){return(0,T.jsx)(S,{items:[{key:`edit`,label:`编辑`,icon:(0,T.jsx)(a,{})},{type:`separator`},{key:`delete`,label:`删除`,icon:(0,T.jsx)(s,{}),danger:!0}],children:(0,T.jsx)(f,{children:`包含危险操作`})})}var M=`import { Dropdown, Button } from "lingee-ui";
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
`;function N(){return(0,T.jsx)(S,{items:[{key:`view`,label:`查看详情`},{key:`export`,label:`导出（无权限）`,disabled:!0},{type:`separator`},{key:`delete`,label:`删除`,icon:(0,T.jsx)(s,{}),danger:!0}],children:(0,T.jsx)(f,{children:`包含禁用项`})})}var P=`import { Dropdown, Button } from "lingee-ui";
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
`;function F(){return(0,T.jsx)(S,{items:[{type:`label`,label:`编辑操作`},{key:`edit`,label:`编辑`,icon:(0,T.jsx)(a,{})},{key:`copy`,label:`复制`,icon:(0,T.jsx)(o,{})},{type:`separator`},{type:`label`,label:`分享`},{key:`share`,label:`分享给同事`,icon:(0,T.jsx)(l,{})},{type:`separator`},{type:`label`,label:`危险操作`},{key:`delete`,label:`删除`,icon:(0,T.jsx)(s,{}),danger:!0}],children:(0,T.jsx)(f,{children:`分组菜单`})})}var I=`import { Dropdown, Button } from "lingee-ui";
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
`;function L(){let[e,t]=(0,w.useState)(`newest`);return(0,T.jsxs)(S,{children:[(0,T.jsx)(h,{children:(0,T.jsx)(f,{children:`排序与筛选`})}),(0,T.jsxs)(v,{style:{minWidth:180},children:[(0,T.jsx)(g,{children:`排序方式`}),(0,T.jsxs)(p,{value:e,onValueChange:t,children:[(0,T.jsx)(y,{value:`newest`,children:`最新优先`}),(0,T.jsx)(y,{value:`oldest`,children:`最早优先`}),(0,T.jsx)(y,{value:`name`,children:`按名称`})]}),(0,T.jsx)(x,{}),(0,T.jsx)(g,{children:`操作`}),(0,T.jsx)(b,{onSelect:()=>console.log(`刷新`),children:`刷新列表`}),(0,T.jsx)(b,{onSelect:()=>console.log(`导出`),children:`导出数据`})]})]})}var R=`import { useState } from "react";
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
`;function z(){let[e,t]=(0,w.useState)(`zh-CN`);return(0,T.jsxs)(S,{children:[(0,T.jsx)(h,{children:(0,T.jsx)(f,{children:`用户面板`})}),(0,T.jsxs)(v,{side:`bottom`,align:`start`,style:{minWidth:200},children:[(0,T.jsx)(b,{children:`个人设置`}),(0,T.jsxs)(m,{children:[(0,T.jsx)(C,{children:`语言切换`}),(0,T.jsx)(_,{children:(0,T.jsxs)(p,{value:e,onValueChange:t,children:[(0,T.jsx)(y,{value:`zh-CN`,children:`简体中文`}),(0,T.jsx)(y,{value:`en-US`,children:`English`}),(0,T.jsx)(y,{value:`ja-JP`,children:`日本語`})]})})]}),(0,T.jsxs)(m,{children:[(0,T.jsx)(C,{children:`更多设置`}),(0,T.jsxs)(_,{children:[(0,T.jsx)(b,{children:`主题偏好`}),(0,T.jsx)(b,{children:`通知设置`}),(0,T.jsx)(b,{children:`数据导出`})]})]}),(0,T.jsx)(x,{}),(0,T.jsx)(b,{danger:!0,children:`退出登录`})]})]})}var B=`import { useState } from "react";
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
`;function V(){let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,T.jsxs)(f,{size:`sm`,onClick:()=>t(!e),children:[`外部切换（`,e?`打开`:`关闭`,`）`]}),(0,T.jsx)(S,{items:[{key:`a`,label:`操作 A`},{key:`b`,label:`操作 B`},{key:`c`,label:`操作 C`}],open:e,onOpenChange:t,children:(0,T.jsx)(f,{variant:`primary`,children:`受控菜单`})})]})}var H=`import { useState } from "react";
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
`,U=[{key:`1`,label:`报销审核专员`},{key:`2`,label:`数据分析师`},{key:`3`,label:`文档撰写助手`}],W=[{key:`fast`,label:`快速`},{key:`auto`,label:`自动`},{key:`precise`,label:`精准`}];function G(){let[e,t]=(0,w.useState)(!1),[n,r]=(0,w.useState)(null),[i,a]=(0,w.useState)(!1),[o,s]=(0,w.useState)(`fast`),[l,u]=(0,w.useState)(!1),[d,f]=(0,w.useState)(`白话文`),p=U.map(e=>({key:e.key,label:e.label,onSelect:()=>r(e.key)})),m=U.find(e=>e.key===n)?.label;return(0,T.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`,alignItems:`center`},children:[(0,T.jsx)(S,{open:e,onOpenChange:t,items:p,selectedKeys:n?[n]:[],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,T.jsx)(E,{icon:(0,T.jsx)(c,{size:16}),open:e,selected:!!n,clearable:!!n,onClear:()=>r(null),children:m??`选择智能体`})}),(0,T.jsx)(S,{open:i,onOpenChange:a,items:W.map(e=>({...e,onSelect:()=>s(e.key)})),selectedKeys:[o],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,T.jsx)(E,{open:i,children:W.find(e=>e.key===o)?.label})}),(0,T.jsx)(S,{open:l,onOpenChange:u,items:[{key:`白话文`,label:`白话文`,onSelect:()=>f(`白话文`)},{key:`文言文`,label:`文言文`,onSelect:()=>f(`文言文`)}],selectedKeys:[d],modal:!1,contentProps:{side:`bottom`,align:`start`,sideOffset:8},children:(0,T.jsx)(E,{open:l,selected:!0,children:d})})]})}var K=`/**
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
    </div>
  );
}
`,q={title:`Dropdown 下拉菜单`,description:`向下弹出的操作菜单列表，支持图标、分组、危险操作、子菜单等。`};function J(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(t.h2,{children:`基本用法`}),`
`,(0,T.jsxs)(t.p,{children:[`通过 `,(0,T.jsx)(t.code,{children:`items`}),` 快捷方式创建简单的下拉菜单。`]}),`
`,(0,T.jsx)(d,{source:O,children:(0,T.jsx)(D,{})}),`
`,(0,T.jsx)(t.h2,{children:`带图标菜单项`}),`
`,(0,T.jsxs)(t.p,{children:[`菜单项支持 `,(0,T.jsx)(t.code,{children:`icon`}),` 和 `,(0,T.jsx)(t.code,{children:`danger`}),` 属性。`]}),`
`,(0,T.jsx)(d,{source:A,children:(0,T.jsx)(k,{})}),`
`,(0,T.jsx)(t.h2,{children:`危险操作项`}),`
`,(0,T.jsxs)(t.p,{children:[`菜单项设置 `,(0,T.jsx)(t.code,{children:`danger: true`}),` 以红色标识危险操作。`]}),`
`,(0,T.jsx)(d,{source:M,children:(0,T.jsx)(j,{})}),`
`,(0,T.jsx)(t.h2,{children:`禁用项`}),`
`,(0,T.jsxs)(t.p,{children:[`菜单项设置 `,(0,T.jsx)(t.code,{children:`disabled: true`}),` 禁止点击交互。`]}),`
`,(0,T.jsx)(d,{source:P,children:(0,T.jsx)(N,{})}),`
`,(0,T.jsx)(t.h2,{children:`分组 + 标题`}),`
`,(0,T.jsxs)(t.p,{children:[`通过 `,(0,T.jsx)(t.code,{children:`type: "label"`}),` 和 `,(0,T.jsx)(t.code,{children:`type: "separator"`}),` 对菜单项进行分组，增强结构化。`]}),`
`,(0,T.jsx)(d,{source:I,children:(0,T.jsx)(F,{})}),`
`,(0,T.jsx)(t.h2,{children:`单选组（RadioGroup）`}),`
`,(0,T.jsxs)(t.p,{children:[`使用 Compound Component 模式实现单选菜单，支持 `,(0,T.jsx)(t.code,{children:`DropdownRadioGroup`}),` + `,(0,T.jsx)(t.code,{children:`DropdownRadioItem`}),`。`]}),`
`,(0,T.jsx)(d,{source:R,children:(0,T.jsx)(L,{})}),`
`,(0,T.jsx)(t.h2,{children:`子菜单`}),`
`,(0,T.jsxs)(t.p,{children:[`支持多级嵌套子菜单（`,(0,T.jsx)(t.code,{children:`DropdownSub`}),` + `,(0,T.jsx)(t.code,{children:`DropdownSubTrigger`}),` + `,(0,T.jsx)(t.code,{children:`DropdownSubContent`}),`），hover 触发展开。`]}),`
`,(0,T.jsx)(d,{source:B,children:(0,T.jsx)(z,{})}),`
`,(0,T.jsx)(t.h2,{children:`受控模式`}),`
`,(0,T.jsxs)(t.p,{children:[`通过 `,(0,T.jsx)(t.code,{children:`open`}),` / `,(0,T.jsx)(t.code,{children:`onOpenChange`}),` 实现外部控制菜单开关。`]}),`
`,(0,T.jsx)(d,{source:H,children:(0,T.jsx)(V,{})}),`
`,(0,T.jsx)(t.h2,{children:`API`}),`
`,(0,T.jsx)(t.h3,{children:`Dropdown`}),`
`,(0,T.jsxs)(t.table,{children:[(0,T.jsx)(t.thead,{children:(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.th,{children:`属性`}),(0,T.jsx)(t.th,{children:`说明`}),(0,T.jsx)(t.th,{children:`类型`}),(0,T.jsx)(t.th,{children:`默认值`})]})}),(0,T.jsxs)(t.tbody,{children:[(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`items`})}),(0,T.jsx)(t.td,{children:`菜单项数据（快捷模式）`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`DropdownItemData[]`})}),(0,T.jsx)(t.td,{children:`-`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`open`})}),(0,T.jsx)(t.td,{children:`受控打开状态`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:`-`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`defaultOpen`})}),(0,T.jsx)(t.td,{children:`非受控默认打开状态`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`false`})})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`onOpenChange`})}),(0,T.jsx)(t.td,{children:`打开状态变化回调`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`(open: boolean) => void`})}),(0,T.jsx)(t.td,{children:`-`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`modal`})}),(0,T.jsx)(t.td,{children:`是否为模态弹出`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`true`})})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`disabled`})}),(0,T.jsx)(t.td,{children:`是否禁用`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`false`})})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`selectedKeys`})}),(0,T.jsx)(t.td,{children:`选中项 key 数组（显示勾选）`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`string[]`})}),(0,T.jsx)(t.td,{children:`-`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`children`})}),(0,T.jsx)(t.td,{children:`触发器元素`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`ReactNode`})}),(0,T.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,T.jsx)(t.h3,{children:`DropdownContent`}),`
`,(0,T.jsxs)(t.table,{children:[(0,T.jsx)(t.thead,{children:(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.th,{children:`属性`}),(0,T.jsx)(t.th,{children:`说明`}),(0,T.jsx)(t.th,{children:`类型`}),(0,T.jsx)(t.th,{children:`默认值`})]})}),(0,T.jsxs)(t.tbody,{children:[(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`side`})}),(0,T.jsx)(t.td,{children:`弹出方向`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`"top" | "bottom" | "left" | "right"`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`"bottom"`})})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`align`})}),(0,T.jsx)(t.td,{children:`对齐方式`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`"start" | "center" | "end"`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`"start"`})})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`sideOffset`})}),(0,T.jsx)(t.td,{children:`侧向偏移`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`number`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`4`})})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`header`})}),(0,T.jsx)(t.td,{children:`固定头部内容`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`ReactNode`})}),(0,T.jsx)(t.td,{children:`-`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`footer`})}),(0,T.jsx)(t.td,{children:`固定底部内容`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`ReactNode`})}),(0,T.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,T.jsx)(t.h3,{children:`DropdownItem`}),`
`,(0,T.jsxs)(t.table,{children:[(0,T.jsx)(t.thead,{children:(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.th,{children:`属性`}),(0,T.jsx)(t.th,{children:`说明`}),(0,T.jsx)(t.th,{children:`类型`}),(0,T.jsx)(t.th,{children:`默认值`})]})}),(0,T.jsxs)(t.tbody,{children:[(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`onSelect`})}),(0,T.jsx)(t.td,{children:`选中回调`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`(event: Event) => void`})}),(0,T.jsx)(t.td,{children:`-`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`disabled`})}),(0,T.jsx)(t.td,{children:`是否禁用`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`false`})})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`danger`})}),(0,T.jsx)(t.td,{children:`是否为危险操作（红色）`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`false`})})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`icon`})}),(0,T.jsx)(t.td,{children:`前缀图标`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`ReactNode`})}),(0,T.jsx)(t.td,{children:`-`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`selected`})}),(0,T.jsx)(t.td,{children:`是否选中（显示勾选）`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`false`})})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`children`})}),(0,T.jsx)(t.td,{children:`菜单项内容`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`ReactNode`})}),(0,T.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,T.jsx)(t.h2,{children:`DropdownButton 触发器按钮`}),`
`,(0,T.jsx)(t.p,{children:`统一的下拉触发器按钮组件，提供两种视觉态：`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:`Default`}),`：透明背景 + 深色文字，hover 时浅灰底`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:`Selected`}),`：蓝色浅底 + 蓝色文字，支持 hover 显示清除图标`]}),`
`]}),`
`,(0,T.jsx)(t.p,{children:`适用于所有 Dropdown / Popover 的触发按钮，替代各处手写的 trigger button，确保高度、间距、hover 背景色统一。`}),`
`,(0,T.jsx)(d,{source:K,children:(0,T.jsx)(G,{})}),`
`,(0,T.jsx)(t.h3,{children:`DropdownButton`}),`
`,(0,T.jsxs)(t.table,{children:[(0,T.jsx)(t.thead,{children:(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.th,{children:`属性`}),(0,T.jsx)(t.th,{children:`说明`}),(0,T.jsx)(t.th,{children:`类型`}),(0,T.jsx)(t.th,{children:`默认值`})]})}),(0,T.jsxs)(t.tbody,{children:[(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`children`})}),(0,T.jsx)(t.td,{children:`按钮文本`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`ReactNode`})}),(0,T.jsx)(t.td,{children:`-`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`icon`})}),(0,T.jsx)(t.td,{children:`前置图标`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`ReactNode`})}),(0,T.jsx)(t.td,{children:`-`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`selected`})}),(0,T.jsx)(t.td,{children:`是否已有选中内容（蓝色态）`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`false`})})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`open`})}),(0,T.jsx)(t.td,{children:`是否展开态（箭头旋转 180°）`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`false`})})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`clearable`})}),(0,T.jsx)(t.td,{children:`hover 时是否显示清除图标`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`false`})})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`hideArrow`})}),(0,T.jsx)(t.td,{children:`隐藏箭头（用于纯 toggle 按钮）`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`false`})})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`disabled`})}),(0,T.jsx)(t.td,{children:`是否禁用`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`false`})})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`onClear`})}),(0,T.jsx)(t.td,{children:`清除回调`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`(e: MouseEvent) => void`})}),(0,T.jsx)(t.td,{children:`-`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`onClick`})}),(0,T.jsx)(t.td,{children:`点击回调`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`(e: MouseEvent) => void`})}),(0,T.jsx)(t.td,{children:`-`})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`className`})}),(0,T.jsx)(t.td,{children:`额外类名`}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`string`})}),(0,T.jsx)(t.td,{children:`-`})]})]})]})]})}function Y(e={}){let{wrapper:t}=e.components||{};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(J,{...e})}):J(e)}export{Y as default,q as frontmatter};