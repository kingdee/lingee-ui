import{i as e,n as t,s as n,t as r}from"./utils-D3YijGPp.js";import{t as i}from"./DemoBox-D5W_RP2Q.js";var a=n(e()),o=t(),s=a.forwardRef(({className:e,style:t,error:n=!1,disabled:i=!1,showCount:s=!1,maxLength:c,value:l,defaultValue:u,onChange:d,onFocus:f,onBlur:p,onPressEnter:m,onKeyDown:h,...g},_)=>{let[v,y]=(0,a.useState)(!1),[b,x]=(0,a.useState)(u?.toString()??``),S=l!==void 0,C=S?l?.toString()??``:b,w=(0,a.useCallback)(e=>{S||x(e.target.value),d?.(e)},[S,d]),T=(0,a.useCallback)(e=>{y(!0),f?.(e)},[f]),E=(0,a.useCallback)(e=>{y(!1),p?.(e)},[p]),D=(0,a.useCallback)(e=>{e.key===`Enter`&&!e.shiftKey&&m?.(e),h?.(e)},[m,h]);return(0,o.jsxs)(`div`,{className:`lg-textarea__wrapper`,style:t,children:[(0,o.jsx)(`div`,{className:r(`lg-textarea`,v&&`lg-textarea--focused`,n&&`lg-textarea--error`,i&&`lg-textarea--disabled`,e),children:(0,o.jsx)(`textarea`,{ref:_,className:`lg-textarea__inner`,disabled:i,maxLength:c,value:C,onChange:w,onFocus:T,onBlur:E,onKeyDown:D,...g})}),s&&c&&(0,o.jsxs)(`span`,{className:`lg-textarea__count`,children:[C.length,`/`,c]})]})});s.displayName=`Textarea`;function c(){return(0,o.jsx)(s,{placeholder:`请输入内容...`,rows:4})}var l=`import { Textarea } from "lingee-ui";

export default function BasicDemo() {
  return <Textarea placeholder="请输入内容..." rows={4} />;
}
`;function u(){let[e,t]=(0,a.useState)(``);return(0,o.jsx)(s,{placeholder:`请输入描述`,rows:4,maxLength:200,showCount:!0,value:e,onChange:e=>t(e.target.value)})}var d=`import { useState } from "react";
import { Textarea } from "lingee-ui";

export default function CountDemo() {
  const [value, setValue] = useState("");

  return (
    <Textarea
      placeholder="请输入描述"
      rows={4}
      maxLength={200}
      showCount
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
`;function f(){return(0,o.jsx)(s,{placeholder:`禁用状态`,rows:4,disabled:!0})}var p=`import { Textarea } from "lingee-ui";

export default function DisabledDemo() {
  return <Textarea placeholder="禁用状态" rows={4} disabled />;
}
`;function m(){let[e,t]=(0,a.useState)(``);return(0,o.jsx)(s,{placeholder:`输入内容后高度自动适应`,autoSize:{minRows:2,maxRows:6},value:e,onChange:e=>t(e.target.value)})}var h=`import { useState } from "react";
import { Textarea } from "lingee-ui";

export default function AutosizeDemo() {
  const [value, setValue] = useState("");

  return (
    <Textarea
      placeholder="输入内容后高度自动适应"
      autoSize={{ minRows: 2, maxRows: 6 }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
`,g={title:`Textarea 多行文本框`,description:`多行纯文本编辑控件，支持字数统计和自动高度。`};function _(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{children:`基本用法`}),`
`,(0,o.jsx)(t.p,{children:`最简单的多行输入框。`}),`
`,(0,o.jsx)(i,{source:l,children:(0,o.jsx)(c,{})}),`
`,(0,o.jsx)(t.h2,{children:`字数统计`}),`
`,(0,o.jsxs)(t.p,{children:[`通过 `,(0,o.jsx)(t.code,{children:`showCount`}),` 和 `,(0,o.jsx)(t.code,{children:`maxLength`}),` 展示字数统计。`]}),`
`,(0,o.jsx)(i,{source:d,children:(0,o.jsx)(u,{})}),`
`,(0,o.jsx)(t.h2,{children:`禁用状态`}),`
`,(0,o.jsxs)(t.p,{children:[`通过 `,(0,o.jsx)(t.code,{children:`disabled`}),` 属性禁用文本框。`]}),`
`,(0,o.jsx)(i,{source:p,children:(0,o.jsx)(f,{})}),`
`,(0,o.jsx)(t.h2,{children:`自适应高度`}),`
`,(0,o.jsxs)(t.p,{children:[`通过 `,(0,o.jsx)(t.code,{children:`autoSize`}),` 属性使文本框根据内容自动调整高度。`]}),`
`,(0,o.jsx)(i,{source:h,children:(0,o.jsx)(m,{})}),`
`,(0,o.jsx)(t.h2,{children:`API`}),`
`,(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:`属性`}),(0,o.jsx)(t.th,{children:`说明`}),(0,o.jsx)(t.th,{children:`类型`}),(0,o.jsx)(t.th,{children:`默认值`})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`placeholder`})}),(0,o.jsx)(t.td,{children:`占位文本`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`string`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`rows`})}),(0,o.jsx)(t.td,{children:`显示行数`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`number`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`maxLength`})}),(0,o.jsx)(t.td,{children:`最大字符数`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`number`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`showCount`})}),(0,o.jsx)(t.td,{children:`是否显示字数统计`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`false`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`autoSize`})}),(0,o.jsx)(t.td,{children:`自适应高度`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean | { minRows: number; maxRows: number }`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`disabled`})}),(0,o.jsx)(t.td,{children:`是否禁用`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`false`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`error`})}),(0,o.jsx)(t.td,{children:`是否为错误状态`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`false`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`value`})}),(0,o.jsx)(t.td,{children:`受控值`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`string`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`onChange`})}),(0,o.jsx)(t.td,{children:`值变化回调`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`(e: ChangeEvent) => void`})}),(0,o.jsx)(t.td,{children:`-`})]})]})]})]})}function v(e={}){let{wrapper:t}=e.components||{};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(_,{...e})}):_(e)}export{v as default,g as frontmatter};