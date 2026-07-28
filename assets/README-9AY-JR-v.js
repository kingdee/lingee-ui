import{C as e}from"./dist-DCLsKzkS.js";import{t}from"./Plus-CHBAcDIY.js";import{t as n}from"./Search-WaqXFOiJ.js";import{t as r}from"./DemoBox-D1az5eCZ.js";import{t as i}from"./button-C8GWSUqU.js";var a=e();function o(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,a.jsx)(i,{variant:`primary`,children:`主要按钮`}),(0,a.jsx)(i,{variant:`default`,children:`默认按钮`}),(0,a.jsx)(i,{variant:`text`,children:`文字按钮`})]})}var s=`import { Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary">主要按钮</Button>
      <Button variant="default">默认按钮</Button>
      <Button variant="text">文字按钮</Button>
    </div>
  );
}
`;function c(){return(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,a.jsx)(i,{variant:`primary`,size:`sm`,children:`小按钮`}),(0,a.jsx)(i,{variant:`primary`,size:`md`,children:`中按钮`}),(0,a.jsx)(i,{variant:`primary`,size:`lg`,children:`大按钮`})]})}var l=`import { Button } from "lingee-ui";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Button variant="primary" size="sm">小按钮</Button>
      <Button variant="primary" size="md">中按钮</Button>
      <Button variant="primary" size="lg">大按钮</Button>
    </div>
  );
}
`;function u(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,a.jsx)(i,{variant:`primary`,icon:(0,a.jsx)(t,{}),children:`新建`}),(0,a.jsx)(i,{variant:`default`,icon:(0,a.jsx)(n,{}),children:`搜索`}),(0,a.jsx)(i,{variant:`default`,icon:(0,a.jsx)(t,{}),iconPosition:`end`,children:`添加`})]})}var d=`import { Button } from "lingee-ui";
import { Plus, Search } from "lingee-icon";

export default function IconDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary" icon={<Plus />}>新建</Button>
      <Button variant="default" icon={<Search />}>搜索</Button>
      <Button variant="default" icon={<Plus />} iconPosition="end">添加</Button>
    </div>
  );
}
`;function f(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,a.jsx)(i,{variant:`primary`,danger:!0,children:`主要危险`}),(0,a.jsx)(i,{variant:`default`,danger:!0,children:`默认危险`}),(0,a.jsx)(i,{variant:`text`,danger:!0,children:`文字危险`})]})}var p=`import { Button } from "lingee-ui";

export default function DangerDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary" danger>主要危险</Button>
      <Button variant="default" danger>默认危险</Button>
      <Button variant="text" danger>文字危险</Button>
    </div>
  );
}
`;function m(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,a.jsx)(i,{variant:`primary`,loading:!0,children:`加载中`}),(0,a.jsx)(i,{variant:`default`,loading:!0,children:`加载中`})]})}var h=`import { Button } from "lingee-ui";

export default function LoadingDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary" loading>加载中</Button>
      <Button variant="default" loading>加载中</Button>
    </div>
  );
}
`;function g(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,a.jsx)(i,{variant:`primary`,disabled:!0,children:`主要按钮`}),(0,a.jsx)(i,{variant:`default`,disabled:!0,children:`默认按钮`}),(0,a.jsx)(i,{variant:`text`,disabled:!0,children:`文字按钮`})]})}var _=`import { Button } from "lingee-ui";

export default function DisabledDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary" disabled>主要按钮</Button>
      <Button variant="default" disabled>默认按钮</Button>
      <Button variant="text" disabled>文字按钮</Button>
    </div>
  );
}
`,v={title:`Button 按钮`,description:`用于触发一个操作，是用户与系统交互的基础元素。`};function y(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{children:`基本用法`}),`
`,(0,a.jsxs)(t.p,{children:[`按钮有三种基础变体：`,(0,a.jsx)(t.code,{children:`primary`}),`（主要）、`,(0,a.jsx)(t.code,{children:`default`}),`（默认）、`,(0,a.jsx)(t.code,{children:`text`}),`（文字）。`]}),`
`,(0,a.jsx)(r,{source:s,children:(0,a.jsx)(o,{})}),`
`,(0,a.jsx)(t.h2,{children:`按钮尺寸`}),`
`,(0,a.jsxs)(t.p,{children:[`提供 `,(0,a.jsx)(t.code,{children:`sm`}),`、`,(0,a.jsx)(t.code,{children:`md`}),`、`,(0,a.jsx)(t.code,{children:`lg`}),` 三种尺寸。`]}),`
`,(0,a.jsx)(r,{source:l,children:(0,a.jsx)(c,{})}),`
`,(0,a.jsx)(t.h2,{children:`图标按钮`}),`
`,(0,a.jsxs)(t.p,{children:[`通过 `,(0,a.jsx)(t.code,{children:`icon`}),` 属性设置图标，`,(0,a.jsx)(t.code,{children:`iconPosition`}),` 控制图标位置。`]}),`
`,(0,a.jsx)(r,{source:d,children:(0,a.jsx)(u,{})}),`
`,(0,a.jsx)(t.h2,{children:`危险按钮`}),`
`,(0,a.jsxs)(t.p,{children:[`设置 `,(0,a.jsx)(t.code,{children:`danger`}),` 属性呈现红色警示风格，用于删除等高风险操作。`]}),`
`,(0,a.jsx)(r,{source:p,children:(0,a.jsx)(f,{})}),`
`,(0,a.jsx)(t.h2,{children:`加载状态`}),`
`,(0,a.jsxs)(t.p,{children:[`设置 `,(0,a.jsx)(t.code,{children:`loading`}),` 展示加载中状态，阻止重复点击。`]}),`
`,(0,a.jsx)(r,{source:h,children:(0,a.jsx)(m,{})}),`
`,(0,a.jsx)(t.h2,{children:`禁用状态`}),`
`,(0,a.jsxs)(t.p,{children:[`设置 `,(0,a.jsx)(t.code,{children:`disabled`}),` 禁用按钮交互。`]}),`
`,(0,a.jsx)(r,{source:_,children:(0,a.jsx)(g,{})}),`
`,(0,a.jsx)(t.h2,{children:`API`}),`
`,(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:`属性`}),(0,a.jsx)(t.th,{children:`说明`}),(0,a.jsx)(t.th,{children:`类型`}),(0,a.jsx)(t.th,{children:`默认值`})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`variant`})}),(0,a.jsx)(t.td,{children:`按钮变体`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"primary" | "filled" | "default" | "text" | "link-plain" | "link"`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"default"`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`size`})}),(0,a.jsx)(t.td,{children:`按钮尺寸`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"sm" | "md" | "lg"`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"md"`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`shape`})}),(0,a.jsx)(t.td,{children:`按钮形状`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"default" | "round" | "circle"`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"default"`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`icon`})}),(0,a.jsx)(t.td,{children:`图标插槽`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`ReactNode`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`iconPosition`})}),(0,a.jsx)(t.td,{children:`图标位置`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"start" | "end"`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"start"`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`danger`})}),(0,a.jsx)(t.td,{children:`危险态`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`boolean`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`false`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`ghost`})}),(0,a.jsx)(t.td,{children:`透明背景`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`boolean`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`false`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`loading`})}),(0,a.jsx)(t.td,{children:`加载状态`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`boolean`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`false`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`disabled`})}),(0,a.jsx)(t.td,{children:`禁用状态`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`boolean`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`false`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`tooltip`})}),(0,a.jsx)(t.td,{children:`Tooltip 文字`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`string`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`onClick`})}),(0,a.jsx)(t.td,{children:`点击回调`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`(e: MouseEvent) => void`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`children`})}),(0,a.jsx)(t.td,{children:`子内容`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`ReactNode`})}),(0,a.jsx)(t.td,{children:`-`})]})]})]})]})}function b(e={}){let{wrapper:t}=e.components||{};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}export{b as default,v as frontmatter};