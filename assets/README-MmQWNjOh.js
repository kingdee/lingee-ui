import{n as e}from"./utils-D3YijGPp.js";import{t}from"./tooltip-DgKXD-vZ.js";import{t as n}from"./button-uswttEhB.js";import{t as r}from"./DemoBox-D5W_RP2Q.js";var i=e();function a(){return(0,i.jsx)(t,{content:`这是一条提示信息`,children:(0,i.jsx)(n,{children:`鼠标悬停`})})}var o=`import { Tooltip, Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <Tooltip content="这是一条提示信息">
      <Button>鼠标悬停</Button>
    </Tooltip>
  );
}
`;function s(){return(0,i.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,i.jsx)(t,{content:`顶部提示`,placement:`top`,children:(0,i.jsx)(n,{children:`Top`})}),(0,i.jsx)(t,{content:`底部提示`,placement:`bottom`,children:(0,i.jsx)(n,{children:`Bottom`})}),(0,i.jsx)(t,{content:`左侧提示`,placement:`left`,children:(0,i.jsx)(n,{children:`Left`})}),(0,i.jsx)(t,{content:`右侧提示`,placement:`right`,children:(0,i.jsx)(n,{children:`Right`})})]})}var c=`import { Tooltip, Button } from "lingee-ui";

export default function PlacementDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Tooltip content="顶部提示" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="底部提示" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="左侧提示" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="右侧提示" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  );
}
`,l={title:`Tooltip 文字提示`,description:`鼠标悬停时显示的简短提示信息。`};function u(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`基本用法`}),`
`,(0,i.jsx)(t.p,{children:`鼠标悬停在触发元素上时，显示提示文字。`}),`
`,(0,i.jsx)(r,{source:o,children:(0,i.jsx)(a,{})}),`
`,(0,i.jsx)(t.h2,{children:`弹出方向`}),`
`,(0,i.jsxs)(t.p,{children:[`通过 `,(0,i.jsx)(t.code,{children:`placement`}),` 属性设置弹出方向。`]}),`
`,(0,i.jsx)(r,{source:c,children:(0,i.jsx)(s,{})}),`
`,(0,i.jsx)(t.h2,{children:`API`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`属性`}),(0,i.jsx)(t.th,{children:`说明`}),(0,i.jsx)(t.th,{children:`类型`}),(0,i.jsx)(t.th,{children:`默认值`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`content`})}),(0,i.jsx)(t.td,{children:`提示内容`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`ReactNode`})}),(0,i.jsx)(t.td,{children:`-`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`placement`})}),(0,i.jsx)(t.td,{children:`弹出方向`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`"top" | "bottom" | "left" | "right" | "top-start" | "top-end" | ...`})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`"top"`})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`delayDuration`})}),(0,i.jsx)(t.td,{children:`hover 延迟展示时间（ms）`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`number`})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`200`})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`arrow`})}),(0,i.jsx)(t.td,{children:`是否显示箭头`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`boolean`})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`true`})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`children`})}),(0,i.jsx)(t.td,{children:`触发元素`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`ReactNode`})}),(0,i.jsx)(t.td,{children:`-`})]})]})]})]})}function d(e={}){let{wrapper:t}=e.components||{};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}export{d as default,l as frontmatter};