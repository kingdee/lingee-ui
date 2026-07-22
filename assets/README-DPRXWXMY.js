import{n as e}from"./utils-D3YijGPp.js";import{t}from"./Search-_SuXcQq-.js";import{t as n}from"./XLg-CzRsxE59.js";import{t as r}from"./input-9Vz3UNM9.js";import{t as i}from"./DemoBox-D5W_RP2Q.js";var a=e();function o(){return(0,a.jsx)(r,{placeholder:`请输入内容`})}var s=`import { Input } from "lingee-ui";

export default function BasicDemo() {
  return <Input placeholder="请输入内容" />;
}
`;function c(){return(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,a.jsx)(r,{size:`sm`,placeholder:`Small 输入框`}),(0,a.jsx)(r,{size:`md`,placeholder:`Medium 输入框`}),(0,a.jsx)(r,{size:`lg`,placeholder:`Large 输入框`})]})}var l=`import { Input } from "lingee-ui";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Input size="sm" placeholder="Small 输入框" />
      <Input size="md" placeholder="Medium 输入框" />
      <Input size="lg" placeholder="Large 输入框" />
    </div>
  );
}
`;function u(){return(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,a.jsx)(r,{prefix:(0,a.jsx)(t,{}),placeholder:`前缀图标`}),(0,a.jsx)(r,{suffix:(0,a.jsx)(n,{}),placeholder:`后缀图标`})]})}var d=`import { Input } from "lingee-ui";
import { Search, XLg } from "lingee-icon";

export default function PrefixSuffixDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Input prefix={<Search />} placeholder="前缀图标" />
      <Input suffix={<XLg />} placeholder="后缀图标" />
    </div>
  );
}
`;function f(){return(0,a.jsx)(r,{defaultValue:`可清空内容`,allowClear:!0})}var p=`import { Input } from "lingee-ui";

export default function ClearableDemo() {
  return <Input defaultValue="可清空内容" allowClear />;
}
`;function m(){return(0,a.jsx)(r,{defaultValue:`禁用状态`,disabled:!0})}var h=`import { Input } from "lingee-ui";

export default function DisabledDemo() {
  return <Input defaultValue="禁用状态" disabled />;
}
`;function g(){return(0,a.jsx)(r,{defaultValue:`错误内容`,error:!0})}var _=`import { Input } from "lingee-ui";

export default function ErrorDemo() {
  return <Input defaultValue="错误内容" error />;
}
`,v={title:`Input 输入框`,description:`用于接收用户的文本输入。`};function y(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{children:`基本用法`}),`
`,(0,a.jsx)(t.p,{children:`基础的输入框。`}),`
`,(0,a.jsx)(i,{source:s,children:(0,a.jsx)(o,{})}),`
`,(0,a.jsx)(t.h2,{children:`三种尺寸`}),`
`,(0,a.jsxs)(t.p,{children:[`提供 `,(0,a.jsx)(t.code,{children:`sm`}),`、`,(0,a.jsx)(t.code,{children:`md`}),`、`,(0,a.jsx)(t.code,{children:`lg`}),` 三种尺寸。`]}),`
`,(0,a.jsx)(i,{source:l,children:(0,a.jsx)(c,{})}),`
`,(0,a.jsx)(t.h2,{children:`前后缀图标`}),`
`,(0,a.jsxs)(t.p,{children:[`通过 `,(0,a.jsx)(t.code,{children:`prefix`}),` 和 `,(0,a.jsx)(t.code,{children:`suffix`}),` 属性设置前后缀内容。`]}),`
`,(0,a.jsx)(i,{source:d,children:(0,a.jsx)(u,{})}),`
`,(0,a.jsx)(t.h2,{children:`可清空`}),`
`,(0,a.jsxs)(t.p,{children:[`设置 `,(0,a.jsx)(t.code,{children:`allowClear`}),` 后，输入内容时显示清空按钮。`]}),`
`,(0,a.jsx)(i,{source:p,children:(0,a.jsx)(f,{})}),`
`,(0,a.jsx)(t.h2,{children:`禁用状态`}),`
`,(0,a.jsxs)(t.p,{children:[`设置 `,(0,a.jsx)(t.code,{children:`disabled`}),` 禁用输入框。`]}),`
`,(0,a.jsx)(i,{source:h,children:(0,a.jsx)(m,{})}),`
`,(0,a.jsx)(t.h2,{children:`错误状态`}),`
`,(0,a.jsxs)(t.p,{children:[`设置 `,(0,a.jsx)(t.code,{children:`error`}),` 展示错误样式，用于表单校验场景。`]}),`
`,(0,a.jsx)(i,{source:_,children:(0,a.jsx)(g,{})}),`
`,(0,a.jsx)(t.h2,{children:`API`}),`
`,(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:`属性`}),(0,a.jsx)(t.th,{children:`说明`}),(0,a.jsx)(t.th,{children:`类型`}),(0,a.jsx)(t.th,{children:`默认值`})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`size`})}),(0,a.jsx)(t.td,{children:`输入框尺寸`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"sm" | "md" | "lg"`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"md"`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`shape`})}),(0,a.jsx)(t.td,{children:`输入框形状`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"default" | "round"`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"default"`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`prefix`})}),(0,a.jsx)(t.td,{children:`前缀内容`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`ReactNode`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`suffix`})}),(0,a.jsx)(t.td,{children:`后缀内容`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`ReactNode`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`allowClear`})}),(0,a.jsx)(t.td,{children:`是否显示清空按钮`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`boolean`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`false`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`error`})}),(0,a.jsx)(t.td,{children:`错误状态`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`boolean`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`false`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`disabled`})}),(0,a.jsx)(t.td,{children:`禁用状态`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`boolean`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`false`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`onPressEnter`})}),(0,a.jsx)(t.td,{children:`按下 Enter 键回调`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`(e: KeyboardEvent) => void`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`placeholder`})}),(0,a.jsx)(t.td,{children:`占位提示文字`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`string`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`value`})}),(0,a.jsx)(t.td,{children:`输入值（受控）`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`string`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`onChange`})}),(0,a.jsx)(t.td,{children:`值变更回调`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`(e: ChangeEvent) => void`})}),(0,a.jsx)(t.td,{children:`-`})]})]})]})]})}function b(e={}){let{wrapper:t}=e.components||{};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}export{b as default,v as frontmatter};