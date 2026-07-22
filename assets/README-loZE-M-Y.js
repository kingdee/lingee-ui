import{n as e}from"./utils-D3YijGPp.js";import{n as t,t as n}from"./checkbox-Dk22BCXi.js";import{t as r}from"./DemoBox-D5W_RP2Q.js";var i=e();function a(){return(0,i.jsx)(n,{defaultChecked:!0,children:`同意服务协议`})}var o=`import { Checkbox } from "lingee-ui";

export default function BasicDemo() {
  return <Checkbox defaultChecked>同意服务协议</Checkbox>;
}
`;function s(){return(0,i.jsxs)(t,{defaultValue:[`apple`,`orange`],children:[(0,i.jsx)(n,{value:`apple`,children:`苹果`}),(0,i.jsx)(n,{value:`banana`,children:`香蕉`}),(0,i.jsx)(n,{value:`orange`,children:`橙子`})]})}var c=`import { Checkbox, CheckboxGroup } from "lingee-ui";

export default function GroupDemo() {
  return (
    <CheckboxGroup defaultValue={["apple", "orange"]}>
      <Checkbox value="apple">苹果</Checkbox>
      <Checkbox value="banana">香蕉</Checkbox>
      <Checkbox value="orange">橙子</Checkbox>
    </CheckboxGroup>
  );
}
`;function l(){return(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,i.jsx)(n,{disabled:!0,children:`未选中禁用`}),(0,i.jsx)(n,{checked:!0,disabled:!0,children:`选中禁用`})]})}var u=`import { Checkbox } from "lingee-ui";

export default function DisabledDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Checkbox disabled>未选中禁用</Checkbox>
      <Checkbox checked disabled>选中禁用</Checkbox>
    </div>
  );
}
`,d={title:`Checkbox 多选框`,description:`在一组选项中进行多项选择。`};function f(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`基本用法`}),`
`,(0,i.jsx)(t.p,{children:`单个 Checkbox 的基本使用。`}),`
`,(0,i.jsx)(r,{source:o,children:(0,i.jsx)(a,{})}),`
`,(0,i.jsx)(t.h2,{children:`多选组`}),`
`,(0,i.jsxs)(t.p,{children:[`使用 `,(0,i.jsx)(t.code,{children:`CheckboxGroup`}),` 管理一组多选框。`]}),`
`,(0,i.jsx)(r,{source:c,children:(0,i.jsx)(s,{})}),`
`,(0,i.jsx)(t.h2,{children:`禁用状态`}),`
`,(0,i.jsxs)(t.p,{children:[`设置 `,(0,i.jsx)(t.code,{children:`disabled`}),` 禁用多选框。`]}),`
`,(0,i.jsx)(r,{source:u,children:(0,i.jsx)(l,{})}),`
`,(0,i.jsx)(t.h2,{children:`API`}),`
`,(0,i.jsx)(t.h3,{children:`Checkbox`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`属性`}),(0,i.jsx)(t.th,{children:`说明`}),(0,i.jsx)(t.th,{children:`类型`}),(0,i.jsx)(t.th,{children:`默认值`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`checked`})}),(0,i.jsx)(t.td,{children:`选中状态（受控）`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`boolean`})}),(0,i.jsx)(t.td,{children:`-`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`defaultChecked`})}),(0,i.jsx)(t.td,{children:`默认选中状态（非受控）`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`boolean`})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`false`})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`indeterminate`})}),(0,i.jsx)(t.td,{children:`半选状态`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`boolean`})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`false`})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`onChange`})}),(0,i.jsx)(t.td,{children:`选中变更回调`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`(checked: boolean) => void`})}),(0,i.jsx)(t.td,{children:`-`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`disabled`})}),(0,i.jsx)(t.td,{children:`禁用`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`boolean`})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`false`})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`children`})}),(0,i.jsx)(t.td,{children:`label 内容`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`ReactNode`})}),(0,i.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,i.jsx)(t.h3,{children:`CheckboxGroup`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`属性`}),(0,i.jsx)(t.th,{children:`说明`}),(0,i.jsx)(t.th,{children:`类型`}),(0,i.jsx)(t.th,{children:`默认值`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`value`})}),(0,i.jsx)(t.td,{children:`当前选中值（受控）`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`string[]`})}),(0,i.jsx)(t.td,{children:`-`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`defaultValue`})}),(0,i.jsx)(t.td,{children:`默认选中值（非受控）`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`string[]`})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`[]`})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`onChange`})}),(0,i.jsx)(t.td,{children:`选中值变更回调`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`(value: string[]) => void`})}),(0,i.jsx)(t.td,{children:`-`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`disabled`})}),(0,i.jsx)(t.td,{children:`禁用整组`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`boolean`})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`false`})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`orientation`})}),(0,i.jsx)(t.td,{children:`排列方向`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`"horizontal" | "vertical"`})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`"vertical"`})})]})]})]})]})}function p(e={}){let{wrapper:t}=e.components||{};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}export{p as default,d as frontmatter};