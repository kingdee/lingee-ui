import{i as e,n as t,s as n,t as r}from"./utils-D3YijGPp.js";import{t as i}from"./DemoBox-D5W_RP2Q.js";var a=n(e()),o=t(),s=a.forwardRef(({className:e,variant:t=`default`,orientation:n=`horizontal`,spacing:i,style:a,...s},c)=>(0,o.jsx)(`div`,{ref:c,role:`separator`,"aria-orientation":n,className:r(`lg-divider`,`lg-divider--${n}`,`lg-divider--${t}`,e),style:i?n===`horizontal`?{marginTop:i,marginBottom:i,...a}:{marginLeft:i,marginRight:i,...a}:a,...s}));s.displayName=`Divider`;function c(){return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{children:`上方内容`}),(0,o.jsx)(s,{}),(0,o.jsx)(`p`,{children:`下方内容`})]})}var l=`import { Divider } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div>
      <p>上方内容</p>
      <Divider />
      <p>下方内容</p>
    </div>
  );
}
`;function u(){return(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,o.jsx)(`span`,{children:`首页`}),(0,o.jsx)(s,{orientation:`vertical`}),(0,o.jsx)(`span`,{children:`文档`}),(0,o.jsx)(s,{orientation:`vertical`}),(0,o.jsx)(`span`,{children:`组件`})]})}var d=`import { Divider } from "lingee-ui";

export default function VerticalDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span>首页</span>
      <Divider orientation="vertical" />
      <span>文档</span>
      <Divider orientation="vertical" />
      <span>组件</span>
    </div>
  );
}
`;function f(){return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(s,{variant:`muted`}),(0,o.jsx)(`p`,{children:`muted — 最浅分隔`}),(0,o.jsx)(s,{variant:`default`}),(0,o.jsx)(`p`,{children:`default — 默认分隔`}),(0,o.jsx)(s,{variant:`emphasis`}),(0,o.jsx)(`p`,{children:`emphasis — 最深分隔`})]})}var p=`import { Divider } from "lingee-ui";

export default function WithTextDemo() {
  return (
    <div>
      <Divider variant="muted" />
      <p>muted — 最浅分隔</p>
      <Divider variant="default" />
      <p>default — 默认分隔</p>
      <Divider variant="emphasis" />
      <p>emphasis — 最深分隔</p>
    </div>
  );
}
`,m={title:`Divider 分割线`,description:`用于分隔内容区块，使页面结构更清晰。`};function h(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{children:`基本用法`}),`
`,(0,o.jsx)(t.p,{children:`水平分割线，用于上下内容之间的分隔。`}),`
`,(0,o.jsx)(i,{source:l,children:(0,o.jsx)(c,{})}),`
`,(0,o.jsx)(t.h2,{children:`垂直分割线`}),`
`,(0,o.jsxs)(t.p,{children:[`设置 `,(0,o.jsx)(t.code,{children:`orientation="vertical"`}),` 用于行内元素间的分隔。`]}),`
`,(0,o.jsx)(i,{source:d,children:(0,o.jsx)(u,{})}),`
`,(0,o.jsx)(t.h2,{children:`颜色变体`}),`
`,(0,o.jsxs)(t.p,{children:[`提供 `,(0,o.jsx)(t.code,{children:`muted`}),`（最浅）、`,(0,o.jsx)(t.code,{children:`default`}),`（默认）、`,(0,o.jsx)(t.code,{children:`emphasis`}),`（最深）三种变体。`]}),`
`,(0,o.jsx)(i,{source:p,children:(0,o.jsx)(f,{})}),`
`,(0,o.jsx)(t.h2,{children:`API`}),`
`,(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:`属性`}),(0,o.jsx)(t.th,{children:`说明`}),(0,o.jsx)(t.th,{children:`类型`}),(0,o.jsx)(t.th,{children:`默认值`})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`orientation`})}),(0,o.jsx)(t.td,{children:`分割线方向`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`"horizontal" | "vertical"`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`"horizontal"`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`variant`})}),(0,o.jsx)(t.td,{children:`颜色变体`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`"default" | "muted" | "emphasis"`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`"default"`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`spacing`})}),(0,o.jsx)(t.td,{children:`外间距（px）`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`number`})}),(0,o.jsx)(t.td,{children:`-`})]})]})]})]})}function g(e={}){let{wrapper:t}=e.components||{};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}export{g as default,m as frontmatter};