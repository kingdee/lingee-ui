import{n as e}from"./utils-D3YijGPp.js";import{t}from"./progress-_ePCcRAN.js";import{t as n}from"./DemoBox-D5W_RP2Q.js";var r=e();function i(){return(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,maxWidth:400},children:[(0,r.jsx)(t,{percent:30}),(0,r.jsx)(t,{percent:70}),(0,r.jsx)(t,{percent:100,status:`success`})]})}var a=`import { Progress } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
      <Progress percent={30} />
      <Progress percent={70} />
      <Progress percent={100} status="success" />
    </div>
  );
}
`;function o(){return(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,maxWidth:400},children:[(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{style:{fontSize:12,marginBottom:8,color:`#666`},children:`sm（size=4）`}),(0,r.jsx)(t,{percent:60,size:4})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{style:{fontSize:12,marginBottom:8,color:`#666`},children:`md（size=8，默认）`}),(0,r.jsx)(t,{percent:60})]})]})}var s=`import { Progress } from "lingee-ui";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
      <div>
        <p style={{ fontSize: 12, marginBottom: 8, color: "#666" }}>sm（size=4）</p>
        <Progress percent={60} size={4} />
      </div>
      <div>
        <p style={{ fontSize: 12, marginBottom: 8, color: "#666" }}>md（size=8，默认）</p>
        <Progress percent={60} />
      </div>
    </div>
  );
}
`;function c(){return(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,maxWidth:400},children:[(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{style:{fontSize:12,marginBottom:8,color:`#666`},children:`normal`}),(0,r.jsx)(t,{percent:50,status:`normal`})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{style:{fontSize:12,marginBottom:8,color:`#666`},children:`success`}),(0,r.jsx)(t,{percent:100,status:`success`})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{style:{fontSize:12,marginBottom:8,color:`#666`},children:`exception（error）`}),(0,r.jsx)(t,{percent:70,status:`error`})]})]})}var l=`import { Progress } from "lingee-ui";

export default function StatusDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
      <div>
        <p style={{ fontSize: 12, marginBottom: 8, color: "#666" }}>normal</p>
        <Progress percent={50} status="normal" />
      </div>
      <div>
        <p style={{ fontSize: 12, marginBottom: 8, color: "#666" }}>success</p>
        <Progress percent={100} status="success" />
      </div>
      <div>
        <p style={{ fontSize: 12, marginBottom: 8, color: "#666" }}>exception（error）</p>
        <Progress percent={70} status="error" />
      </div>
    </div>
  );
}
`,u={title:`Progress 进度条`,description:`展示操作的当前进度，支持线性和环形两种形态。`};function d(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`基本用法`}),`
`,(0,r.jsx)(t.p,{children:`展示不同百分比的进度条。`}),`
`,(0,r.jsx)(n,{source:a,children:(0,r.jsx)(i,{})}),`
`,(0,r.jsx)(t.h2,{children:`不同尺寸`}),`
`,(0,r.jsxs)(t.p,{children:[`通过 `,(0,r.jsx)(t.code,{children:`size`}),` 属性控制进度条粗细，支持 sm（4px）和 md（8px，默认）两种尺寸。`]}),`
`,(0,r.jsx)(n,{source:s,children:(0,r.jsx)(o,{})}),`
`,(0,r.jsx)(t.h2,{children:`不同状态`}),`
`,(0,r.jsxs)(t.p,{children:[`通过 `,(0,r.jsx)(t.code,{children:`status`}),` 属性展示进度条的 normal、success、exception 三种状态。`]}),`
`,(0,r.jsx)(n,{source:l,children:(0,r.jsx)(c,{})}),`
`,(0,r.jsx)(t.h2,{children:`API`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`属性`}),(0,r.jsx)(t.th,{children:`说明`}),(0,r.jsx)(t.th,{children:`类型`}),(0,r.jsx)(t.th,{children:`默认值`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`percent`})}),(0,r.jsx)(t.td,{children:`进度百分比，-1 为不确定进度`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`number`})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`0`})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`type`})}),(0,r.jsx)(t.td,{children:`类型`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`"line" | "circle"`})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`"line"`})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`size`})}),(0,r.jsx)(t.td,{children:`线性进度条高度 / 环形进度条直径`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`number`})}),(0,r.jsxs)(t.td,{children:[`线性 `,(0,r.jsx)(t.code,{children:`8`}),`，环形 `,(0,r.jsx)(t.code,{children:`80`})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`status`})}),(0,r.jsx)(t.td,{children:`状态`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`"normal" | "success" | "error" | "active"`})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`"normal"`})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`showInfo`})}),(0,r.jsx)(t.td,{children:`是否显示进度数值`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`boolean`})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`true`})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`strokeColor`})}),(0,r.jsx)(t.td,{children:`进度条颜色`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`string`})}),(0,r.jsx)(t.td,{children:`-`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`trailColor`})}),(0,r.jsx)(t.td,{children:`轨道颜色`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`string`})}),(0,r.jsx)(t.td,{children:`-`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`strokeWidth`})}),(0,r.jsx)(t.td,{children:`环形进度条线宽`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`number`})}),(0,r.jsx)(t.td,{children:`-`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`format`})}),(0,r.jsx)(t.td,{children:`自定义格式化显示`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`(percent: number) => ReactNode`})}),(0,r.jsx)(t.td,{children:`-`})]})]})]})]})}function f(e={}){let{wrapper:t}=e.components||{};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}export{f as default,u as frontmatter};