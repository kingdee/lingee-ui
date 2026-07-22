import{n as e}from"./utils-D3YijGPp.js";import{t}from"./spin-DBgYNO7j.js";import{t as n}from"./DemoBox-D5W_RP2Q.js";var r=e();function i(){return(0,r.jsx)(t,{spinning:!0,size:`lg`})}var a=`import { Spin } from "lingee-ui";

export default function BasicDemo() {
  return <Spin spinning size="lg" />;
}
`;function o(){return(0,r.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:32},children:[(0,r.jsx)(t,{size:`sm`}),(0,r.jsx)(t,{size:`md`}),(0,r.jsx)(t,{size:`lg`})]})}var s=`import { Spin } from "lingee-ui";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
      <Spin size="sm" />
      <Spin size="md" />
      <Spin size="lg" />
    </div>
  );
}
`;function c(){return(0,r.jsx)(t,{spinning:!0,tip:`加载中...`,children:(0,r.jsxs)(`div`,{style:{padding:24,border:`1px solid #e0e0e0`,borderRadius:8,fontSize:14},children:[(0,r.jsx)(`p`,{style:{margin:`0 0 8px`},children:`这是一段被包裹的内容区域。`}),(0,r.jsx)(`p`,{style:{margin:0},children:`加载时会显示遮罩层覆盖在内容上方。`})]})})}var l=`import { Spin } from "lingee-ui";

export default function WrapDemo() {
  return (
    <Spin spinning tip="加载中...">
      <div
        style={{
          padding: 24,
          border: "1px solid #e0e0e0",
          borderRadius: 8,
          fontSize: 14,
        }}
      >
        <p style={{ margin: "0 0 8px" }}>这是一段被包裹的内容区域。</p>
        <p style={{ margin: 0 }}>加载时会显示遮罩层覆盖在内容上方。</p>
      </div>
    </Spin>
  );
}
`,u={title:`Spin 加载中`,description:`用于页面和区域的加载中状态指示器。`};function d(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`基本用法`}),`
`,(0,r.jsx)(t.p,{children:`一个简单的加载指示器。`}),`
`,(0,r.jsx)(n,{source:a,children:(0,r.jsx)(i,{})}),`
`,(0,r.jsx)(t.h2,{children:`不同尺寸`}),`
`,(0,r.jsxs)(t.p,{children:[`提供 `,(0,r.jsx)(t.code,{children:`sm`}),`、`,(0,r.jsx)(t.code,{children:`md`}),`、`,(0,r.jsx)(t.code,{children:`lg`}),` 三种尺寸。`]}),`
`,(0,r.jsx)(n,{source:s,children:(0,r.jsx)(o,{})}),`
`,(0,r.jsx)(t.h2,{children:`包裹内容`}),`
`,(0,r.jsxs)(t.p,{children:[`作为容器包裹内容，`,(0,r.jsx)(t.code,{children:`spinning`}),` 时在内容上方显示加载遮罩。`]}),`
`,(0,r.jsx)(n,{source:l,children:(0,r.jsx)(c,{})}),`
`,(0,r.jsx)(t.h2,{children:`API`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`属性`}),(0,r.jsx)(t.th,{children:`说明`}),(0,r.jsx)(t.th,{children:`类型`}),(0,r.jsx)(t.th,{children:`默认值`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`size`})}),(0,r.jsx)(t.td,{children:`尺寸`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`"sm" | "md" | "lg"`})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`"md"`})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`spinning`})}),(0,r.jsx)(t.td,{children:`是否显示加载`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`boolean`})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`true`})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`tip`})}),(0,r.jsx)(t.td,{children:`加载提示文本`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`string`})}),(0,r.jsx)(t.td,{children:`-`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`children`})}),(0,r.jsx)(t.td,{children:`包裹内容（容器模式）`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`ReactNode`})}),(0,r.jsx)(t.td,{children:`-`})]})]})]})]})}function f(e={}){let{wrapper:t}=e.components||{};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}export{f as default,u as frontmatter};