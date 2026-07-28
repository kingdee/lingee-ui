import{C as e}from"./dist-DCLsKzkS.js";import{n as t,r as n,t as r}from"./Trash-BWkZFjHh.js";import{t as i}from"./DemoBox-D1az5eCZ.js";import{t as a}from"./button-C8GWSUqU.js";import{t as o}from"./dropdown-CmIq85fW.js";var s=e();function c(){return(0,s.jsx)(o,{items:[{key:`edit`,label:`编辑`},{key:`copy`,label:`复制`},{key:`delete`,label:`删除`},{key:`delete12`,label:`删除`},{key:`delete11`,label:`删除`},{key:`delete0`,label:`删除`},{key:`delete9`,label:`删除`},{key:`delete8`,label:`删除`},{key:`delete7`,label:`删除`},{key:`delete6`,label:`删除`},{key:`delete5`,label:`删除`},{key:`delete4`,label:`删除`},{key:`delete3`,label:`删除`},{key:`delete2`,label:`删除`},{key:`delete1`,label:`删除`}],children:(0,s.jsx)(a,{children:`操作菜单`})})}var l=`import { Dropdown, Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <Dropdown
      items={[
        { key: "edit", label: "编辑" },
        { key: "copy", label: "复制" },
        { key: "delete", label: "删除" },
        { key: "delete12", label: "删除" },
        { key: "delete11", label: "删除" },
        { key: "delete0", label: "删除" },
        { key: "delete9", label: "删除" },
        { key: "delete8", label: "删除" },
        { key: "delete7", label: "删除" },
        { key: "delete6", label: "删除" },
        { key: "delete5", label: "删除" },
        { key: "delete4", label: "删除" },
        { key: "delete3", label: "删除" },
        { key: "delete2", label: "删除" },
        { key: "delete1", label: "删除" },
      ]}
    >
      <Button>操作菜单</Button>
    </Dropdown>
  );
}
`;function u(){return(0,s.jsx)(o,{items:[{key:`edit`,label:`编辑`,icon:(0,s.jsx)(t,{})},{key:`copy`,label:`复制`,icon:(0,s.jsx)(n,{})},{type:`separator`},{key:`delete`,label:`删除`,icon:(0,s.jsx)(r,{}),danger:!0}],children:(0,s.jsx)(a,{children:`带图标菜单`})})}var d=`import { Dropdown, Button } from "lingee-ui";
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
`;function f(){return(0,s.jsx)(o,{items:[{key:`edit`,label:`编辑`,icon:(0,s.jsx)(t,{})},{type:`separator`},{key:`delete`,label:`删除`,icon:(0,s.jsx)(r,{}),danger:!0}],children:(0,s.jsx)(a,{children:`包含危险操作`})})}var p=`import { Dropdown, Button } from "lingee-ui";
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
`,m={title:`Dropdown 下拉菜单`,description:`向下弹出的操作菜单列表，支持图标、分组、危险操作等。`};function h(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{children:`基本用法`}),`
`,(0,s.jsxs)(t.p,{children:[`通过 `,(0,s.jsx)(t.code,{children:`items`}),` 快捷方式创建简单的下拉菜单。`]}),`
`,(0,s.jsx)(i,{source:l,children:(0,s.jsx)(c,{})}),`
`,(0,s.jsx)(t.h2,{children:`带图标菜单项`}),`
`,(0,s.jsxs)(t.p,{children:[`菜单项支持 `,(0,s.jsx)(t.code,{children:`icon`}),` 和 `,(0,s.jsx)(t.code,{children:`danger`}),` 属性。`]}),`
`,(0,s.jsx)(i,{source:d,children:(0,s.jsx)(u,{})}),`
`,(0,s.jsx)(t.h2,{children:`危险操作项`}),`
`,(0,s.jsxs)(t.p,{children:[`菜单项设置 `,(0,s.jsx)(t.code,{children:`danger: true`}),` 以红色标识危险操作。`]}),`
`,(0,s.jsx)(i,{source:p,children:(0,s.jsx)(f,{})}),`
`,(0,s.jsx)(t.h2,{children:`API`}),`
`,(0,s.jsx)(t.h3,{children:`Dropdown`}),`
`,(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:`属性`}),(0,s.jsx)(t.th,{children:`说明`}),(0,s.jsx)(t.th,{children:`类型`}),(0,s.jsx)(t.th,{children:`默认值`})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`items`})}),(0,s.jsx)(t.td,{children:`菜单项数据（快捷模式）`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`DropdownItemData[]`})}),(0,s.jsx)(t.td,{children:`-`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`open`})}),(0,s.jsx)(t.td,{children:`受控打开状态`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`boolean`})}),(0,s.jsx)(t.td,{children:`-`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`onOpenChange`})}),(0,s.jsx)(t.td,{children:`打开状态变化回调`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`(open: boolean) => void`})}),(0,s.jsx)(t.td,{children:`-`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`children`})}),(0,s.jsx)(t.td,{children:`触发器元素`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`ReactNode`})}),(0,s.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,s.jsx)(t.h3,{children:`DropdownItem`}),`
`,(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:`属性`}),(0,s.jsx)(t.th,{children:`说明`}),(0,s.jsx)(t.th,{children:`类型`}),(0,s.jsx)(t.th,{children:`默认值`})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`onSelect`})}),(0,s.jsx)(t.td,{children:`选中回调`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`() => void`})}),(0,s.jsx)(t.td,{children:`-`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`disabled`})}),(0,s.jsx)(t.td,{children:`是否禁用`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`boolean`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`false`})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`danger`})}),(0,s.jsx)(t.td,{children:`是否为危险操作（红色）`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`boolean`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`false`})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`icon`})}),(0,s.jsx)(t.td,{children:`前缀图标`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`ReactNode`})}),(0,s.jsx)(t.td,{children:`-`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`children`})}),(0,s.jsx)(t.td,{children:`菜单项内容`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`ReactNode`})}),(0,s.jsx)(t.td,{children:`-`})]})]})]})]})}function g(e={}){let{wrapper:t}=e.components||{};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}export{g as default,m as frontmatter};