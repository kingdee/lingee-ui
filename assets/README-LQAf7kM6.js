import{C as e,M as t,k as n}from"./dist-DCLsKzkS.js";import{n as r,r as i,t as a}from"./Trash-BWkZFjHh.js";import{t as o}from"./Share-CiK_9wYm.js";import{t as s}from"./DemoBox-D1az5eCZ.js";import{t as c}from"./button-C8GWSUqU.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./dropdown-C0-8WmZ_.js";var b=e();function x(){return(0,b.jsx)(v,{items:[{key:`edit`,label:`编辑`},{key:`copy`,label:`复制`},{key:`share`,label:`分享`}],children:(0,b.jsx)(c,{children:`操作菜单`})})}var S=`import { Dropdown, Button } from "lingee-ui";

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
`;function C(){return(0,b.jsx)(v,{items:[{key:`edit`,label:`编辑`,icon:(0,b.jsx)(r,{})},{key:`copy`,label:`复制`,icon:(0,b.jsx)(i,{})},{type:`separator`},{key:`delete`,label:`删除`,icon:(0,b.jsx)(a,{}),danger:!0}],children:(0,b.jsx)(c,{children:`带图标菜单`})})}var w=`import { Dropdown, Button } from "lingee-ui";
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
`;function T(){return(0,b.jsx)(v,{items:[{key:`edit`,label:`编辑`,icon:(0,b.jsx)(r,{})},{type:`separator`},{key:`delete`,label:`删除`,icon:(0,b.jsx)(a,{}),danger:!0}],children:(0,b.jsx)(c,{children:`包含危险操作`})})}var E=`import { Dropdown, Button } from "lingee-ui";
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
`;function D(){return(0,b.jsx)(v,{items:[{key:`view`,label:`查看详情`},{key:`export`,label:`导出（无权限）`,disabled:!0},{type:`separator`},{key:`delete`,label:`删除`,icon:(0,b.jsx)(a,{}),danger:!0}],children:(0,b.jsx)(c,{children:`包含禁用项`})})}var O=`import { Dropdown, Button } from "lingee-ui";
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
`;function k(){return(0,b.jsx)(v,{items:[{type:`label`,label:`编辑操作`},{key:`edit`,label:`编辑`,icon:(0,b.jsx)(r,{})},{key:`copy`,label:`复制`,icon:(0,b.jsx)(i,{})},{type:`separator`},{type:`label`,label:`分享`},{key:`share`,label:`分享给同事`,icon:(0,b.jsx)(o,{})},{type:`separator`},{type:`label`,label:`危险操作`},{key:`delete`,label:`删除`,icon:(0,b.jsx)(a,{}),danger:!0}],children:(0,b.jsx)(c,{children:`分组菜单`})})}var A=`import { Dropdown, Button } from "lingee-ui";
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
`,j=t(n());function M(){let[e,t]=(0,j.useState)(`newest`);return(0,b.jsxs)(v,{children:[(0,b.jsx)(d,{children:(0,b.jsx)(c,{children:`排序与筛选`})}),(0,b.jsxs)(m,{style:{minWidth:180},children:[(0,b.jsx)(f,{children:`排序方式`}),(0,b.jsxs)(l,{value:e,onValueChange:t,children:[(0,b.jsx)(h,{value:`newest`,children:`最新优先`}),(0,b.jsx)(h,{value:`oldest`,children:`最早优先`}),(0,b.jsx)(h,{value:`name`,children:`按名称`})]}),(0,b.jsx)(_,{}),(0,b.jsx)(f,{children:`操作`}),(0,b.jsx)(g,{onSelect:()=>console.log(`刷新`),children:`刷新列表`}),(0,b.jsx)(g,{onSelect:()=>console.log(`导出`),children:`导出数据`})]})]})}var N=`import { useState } from "react";
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
`;function P(){let[e,t]=(0,j.useState)(`zh-CN`);return(0,b.jsxs)(v,{children:[(0,b.jsx)(d,{children:(0,b.jsx)(c,{children:`用户面板`})}),(0,b.jsxs)(m,{side:`bottom`,align:`start`,style:{minWidth:200},children:[(0,b.jsx)(g,{children:`个人设置`}),(0,b.jsxs)(u,{children:[(0,b.jsx)(y,{children:`语言切换`}),(0,b.jsx)(p,{children:(0,b.jsxs)(l,{value:e,onValueChange:t,children:[(0,b.jsx)(h,{value:`zh-CN`,children:`简体中文`}),(0,b.jsx)(h,{value:`en-US`,children:`English`}),(0,b.jsx)(h,{value:`ja-JP`,children:`日本語`})]})})]}),(0,b.jsxs)(u,{children:[(0,b.jsx)(y,{children:`更多设置`}),(0,b.jsxs)(p,{children:[(0,b.jsx)(g,{children:`主题偏好`}),(0,b.jsx)(g,{children:`通知设置`}),(0,b.jsx)(g,{children:`数据导出`})]})]}),(0,b.jsx)(_,{}),(0,b.jsx)(g,{danger:!0,children:`退出登录`})]})]})}var F=`import { useState } from "react";
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
`;function I(){let[e,t]=(0,j.useState)(!1);return(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,b.jsxs)(c,{size:`sm`,onClick:()=>t(!e),children:[`外部切换（`,e?`打开`:`关闭`,`）`]}),(0,b.jsx)(v,{items:[{key:`a`,label:`操作 A`},{key:`b`,label:`操作 B`},{key:`c`,label:`操作 C`}],open:e,onOpenChange:t,children:(0,b.jsx)(c,{variant:`primary`,children:`受控菜单`})})]})}var L=`import { useState } from "react";
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
`,R={title:`Dropdown 下拉菜单`,description:`向下弹出的操作菜单列表，支持图标、分组、危险操作、子菜单等。`};function z(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.h2,{children:`基本用法`}),`
`,(0,b.jsxs)(t.p,{children:[`通过 `,(0,b.jsx)(t.code,{children:`items`}),` 快捷方式创建简单的下拉菜单。`]}),`
`,(0,b.jsx)(s,{source:S,children:(0,b.jsx)(x,{})}),`
`,(0,b.jsx)(t.h2,{children:`带图标菜单项`}),`
`,(0,b.jsxs)(t.p,{children:[`菜单项支持 `,(0,b.jsx)(t.code,{children:`icon`}),` 和 `,(0,b.jsx)(t.code,{children:`danger`}),` 属性。`]}),`
`,(0,b.jsx)(s,{source:w,children:(0,b.jsx)(C,{})}),`
`,(0,b.jsx)(t.h2,{children:`危险操作项`}),`
`,(0,b.jsxs)(t.p,{children:[`菜单项设置 `,(0,b.jsx)(t.code,{children:`danger: true`}),` 以红色标识危险操作。`]}),`
`,(0,b.jsx)(s,{source:E,children:(0,b.jsx)(T,{})}),`
`,(0,b.jsx)(t.h2,{children:`禁用项`}),`
`,(0,b.jsxs)(t.p,{children:[`菜单项设置 `,(0,b.jsx)(t.code,{children:`disabled: true`}),` 禁止点击交互。`]}),`
`,(0,b.jsx)(s,{source:O,children:(0,b.jsx)(D,{})}),`
`,(0,b.jsx)(t.h2,{children:`分组 + 标题`}),`
`,(0,b.jsxs)(t.p,{children:[`通过 `,(0,b.jsx)(t.code,{children:`type: "label"`}),` 和 `,(0,b.jsx)(t.code,{children:`type: "separator"`}),` 对菜单项进行分组，增强结构化。`]}),`
`,(0,b.jsx)(s,{source:A,children:(0,b.jsx)(k,{})}),`
`,(0,b.jsx)(t.h2,{children:`单选组（RadioGroup）`}),`
`,(0,b.jsxs)(t.p,{children:[`使用 Compound Component 模式实现单选菜单，支持 `,(0,b.jsx)(t.code,{children:`DropdownRadioGroup`}),` + `,(0,b.jsx)(t.code,{children:`DropdownRadioItem`}),`。`]}),`
`,(0,b.jsx)(s,{source:N,children:(0,b.jsx)(M,{})}),`
`,(0,b.jsx)(t.h2,{children:`子菜单`}),`
`,(0,b.jsxs)(t.p,{children:[`支持多级嵌套子菜单（`,(0,b.jsx)(t.code,{children:`DropdownSub`}),` + `,(0,b.jsx)(t.code,{children:`DropdownSubTrigger`}),` + `,(0,b.jsx)(t.code,{children:`DropdownSubContent`}),`），hover 触发展开。`]}),`
`,(0,b.jsx)(s,{source:F,children:(0,b.jsx)(P,{})}),`
`,(0,b.jsx)(t.h2,{children:`受控模式`}),`
`,(0,b.jsxs)(t.p,{children:[`通过 `,(0,b.jsx)(t.code,{children:`open`}),` / `,(0,b.jsx)(t.code,{children:`onOpenChange`}),` 实现外部控制菜单开关。`]}),`
`,(0,b.jsx)(s,{source:L,children:(0,b.jsx)(I,{})}),`
`,(0,b.jsx)(t.h2,{children:`API`}),`
`,(0,b.jsx)(t.h3,{children:`Dropdown`}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`属性`}),(0,b.jsx)(t.th,{children:`说明`}),(0,b.jsx)(t.th,{children:`类型`}),(0,b.jsx)(t.th,{children:`默认值`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`items`})}),(0,b.jsx)(t.td,{children:`菜单项数据（快捷模式）`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`DropdownItemData[]`})}),(0,b.jsx)(t.td,{children:`-`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`open`})}),(0,b.jsx)(t.td,{children:`受控打开状态`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`boolean`})}),(0,b.jsx)(t.td,{children:`-`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`defaultOpen`})}),(0,b.jsx)(t.td,{children:`非受控默认打开状态`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`boolean`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`false`})})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`onOpenChange`})}),(0,b.jsx)(t.td,{children:`打开状态变化回调`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`(open: boolean) => void`})}),(0,b.jsx)(t.td,{children:`-`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`modal`})}),(0,b.jsx)(t.td,{children:`是否为模态弹出`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`boolean`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`true`})})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`disabled`})}),(0,b.jsx)(t.td,{children:`是否禁用`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`boolean`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`false`})})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`selectedKeys`})}),(0,b.jsx)(t.td,{children:`选中项 key 数组（显示勾选）`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`string[]`})}),(0,b.jsx)(t.td,{children:`-`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`children`})}),(0,b.jsx)(t.td,{children:`触发器元素`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`ReactNode`})}),(0,b.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,b.jsx)(t.h3,{children:`DropdownContent`}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`属性`}),(0,b.jsx)(t.th,{children:`说明`}),(0,b.jsx)(t.th,{children:`类型`}),(0,b.jsx)(t.th,{children:`默认值`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`side`})}),(0,b.jsx)(t.td,{children:`弹出方向`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`"top" | "bottom" | "left" | "right"`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`"bottom"`})})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`align`})}),(0,b.jsx)(t.td,{children:`对齐方式`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`"start" | "center" | "end"`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`"start"`})})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`sideOffset`})}),(0,b.jsx)(t.td,{children:`侧向偏移`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`number`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`4`})})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`header`})}),(0,b.jsx)(t.td,{children:`固定头部内容`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`ReactNode`})}),(0,b.jsx)(t.td,{children:`-`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`footer`})}),(0,b.jsx)(t.td,{children:`固定底部内容`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`ReactNode`})}),(0,b.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,b.jsx)(t.h3,{children:`DropdownItem`}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`属性`}),(0,b.jsx)(t.th,{children:`说明`}),(0,b.jsx)(t.th,{children:`类型`}),(0,b.jsx)(t.th,{children:`默认值`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`onSelect`})}),(0,b.jsx)(t.td,{children:`选中回调`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`(event: Event) => void`})}),(0,b.jsx)(t.td,{children:`-`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`disabled`})}),(0,b.jsx)(t.td,{children:`是否禁用`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`boolean`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`false`})})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`danger`})}),(0,b.jsx)(t.td,{children:`是否为危险操作（红色）`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`boolean`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`false`})})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`icon`})}),(0,b.jsx)(t.td,{children:`前缀图标`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`ReactNode`})}),(0,b.jsx)(t.td,{children:`-`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`selected`})}),(0,b.jsx)(t.td,{children:`是否选中（显示勾选）`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`boolean`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`false`})})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`children`})}),(0,b.jsx)(t.td,{children:`菜单项内容`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`ReactNode`})}),(0,b.jsx)(t.td,{children:`-`})]})]})]})]})}function B(e={}){let{wrapper:t}=e.components||{};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(z,{...e})}):z(e)}export{B as default,R as frontmatter};