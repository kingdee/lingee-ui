import{i as e,n as t,s as n,t as r}from"./utils-D3YijGPp.js";import{t as i}from"./dist-Bb8vu4X3.js";import{t as a}from"./DemoBox-D5W_RP2Q.js";var o=n(e()),s=t(),c=i(`lg-skeleton`,{variants:{variant:{text:`lg-skeleton--text`,circle:`lg-skeleton--circle`,rect:`lg-skeleton--rect`},animation:{shimmer:`lg-skeleton--shimmer`,pulse:`lg-skeleton--pulse`,none:``}},defaultVariants:{variant:`text`,animation:`shimmer`}}),l=o.forwardRef(({className:e,variant:t=`text`,animation:n=`shimmer`,width:i,height:a,borderRadius:o,size:l,style:u,...d},f)=>{let p={...u};return l!==void 0&&(p.width=typeof l==`number`?`${l}px`:l,p.height=typeof l==`number`?`${l}px`:l),i!==void 0&&(p.width=typeof i==`number`?`${i}px`:i),a!==void 0&&(p.height=typeof a==`number`?`${a}px`:a),o!==void 0&&(p.borderRadius=typeof o==`number`?`${o}px`:o),(0,s.jsx)(`div`,{ref:f,className:r(c({variant:t,animation:n===!1?`none`:n}),e),style:p,"aria-hidden":`true`,...d})});l.displayName=`Skeleton`;function u(){return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,s.jsx)(l,{variant:`text`,width:`100%`}),(0,s.jsx)(l,{variant:`text`,width:`80%`}),(0,s.jsx)(l,{variant:`text`,width:`60%`})]}),(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,s.jsx)(l,{variant:`circle`,size:40}),(0,s.jsx)(l,{variant:`rect`,width:120,height:36})]})]})}var d=`import { Skeleton } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Skeleton variant="circle" size={40} />
        <Skeleton variant="rect" width={120} height={36} />
      </div>
    </div>
  );
}
`;function f(){return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`shimmer 动画（默认）`}),(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,s.jsx)(l,{variant:`text`,width:`100%`,animation:`shimmer`}),(0,s.jsx)(l,{variant:`text`,width:`75%`,animation:`shimmer`})]})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`pulse 动画`}),(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,s.jsx)(l,{variant:`circle`,size:48,animation:`pulse`}),(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,flex:1},children:[(0,s.jsx)(l,{variant:`text`,width:`60%`,animation:`pulse`}),(0,s.jsx)(l,{variant:`text`,width:`40%`,animation:`pulse`})]})]})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`无动画`}),(0,s.jsx)(l,{variant:`rect`,width:200,height:100,animation:!1})]})]})}var p=`import { Skeleton } from "lingee-ui";

export default function ActiveDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          shimmer 动画（默认）
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Skeleton variant="text" width="100%" animation="shimmer" />
          <Skeleton variant="text" width="75%" animation="shimmer" />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          pulse 动画
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Skeleton variant="circle" size={48} animation="pulse" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
            <Skeleton variant="text" width="60%" animation="pulse" />
            <Skeleton variant="text" width="40%" animation="pulse" />
          </div>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          无动画
        </p>
        <Skeleton variant="rect" width={200} height={100} animation={false} />
      </div>
    </div>
  );
}
`,m={title:`Skeleton 骨架屏`,description:`在数据加载完成前通过占位图形展示页面结构，降低用户等待焦虑。`};function h(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{children:`基本用法`}),`
`,(0,s.jsxs)(t.p,{children:[`支持 `,(0,s.jsx)(t.code,{children:`text`}),`（条形）、`,(0,s.jsx)(t.code,{children:`circle`}),`（圆形）、`,(0,s.jsx)(t.code,{children:`rect`}),`（方形）三种形状预设。`]}),`
`,(0,s.jsx)(a,{source:d,children:(0,s.jsx)(u,{})}),`
`,(0,s.jsx)(t.h2,{children:`动画效果`}),`
`,(0,s.jsxs)(t.p,{children:[`支持 `,(0,s.jsx)(t.code,{children:`shimmer`}),`（闪烁）和 `,(0,s.jsx)(t.code,{children:`pulse`}),`（脉冲）两种动画，也可设置 `,(0,s.jsx)(t.code,{children:`animation={false}`}),` 关闭动画。`]}),`
`,(0,s.jsx)(a,{source:p,children:(0,s.jsx)(f,{})}),`
`,(0,s.jsx)(t.h2,{children:`API`}),`
`,(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:`属性`}),(0,s.jsx)(t.th,{children:`说明`}),(0,s.jsx)(t.th,{children:`类型`}),(0,s.jsx)(t.th,{children:`默认值`})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`variant`})}),(0,s.jsx)(t.td,{children:`形状预设`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`"text" | "circle" | "rect"`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`"text"`})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`width`})}),(0,s.jsx)(t.td,{children:`宽度`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`string | number`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`"100%"`})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`height`})}),(0,s.jsx)(t.td,{children:`高度`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`string | number`})}),(0,s.jsx)(t.td,{children:`-`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`size`})}),(0,s.jsx)(t.td,{children:`圆形/方形尺寸（同时设置宽高）`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`number`})}),(0,s.jsx)(t.td,{children:`-`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`borderRadius`})}),(0,s.jsx)(t.td,{children:`圆角`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`string | number`})}),(0,s.jsx)(t.td,{children:`-`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`animation`})}),(0,s.jsx)(t.td,{children:`动画类型`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`"shimmer" | "pulse" | false`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`"shimmer"`})})]})]})]})]})}function g(e={}){let{wrapper:t}=e.components||{};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}export{g as default,m as frontmatter};