import{x as e}from"./dist-DjLZdxEA.js";import{t}from"./DemoBox-DEznk3dE.js";import{t as n}from"./scroll-area-Drjrg7EP.js";var r=e(),i=Array.from({length:50},(e,t)=>`列表项 ${t+1}`);function a(){return(0,r.jsx)(`div`,{style:{width:280,border:`1px solid #e0e0e0`,borderRadius:8},children:(0,r.jsx)(n,{style:{maxHeight:300},children:(0,r.jsx)(`div`,{style:{padding:8},children:i.map(e=>(0,r.jsx)(`div`,{style:{padding:`8px 12px`,borderBottom:`1px solid #f0f0f0`,fontSize:14},children:e},e))})})})}var o=`import { ScrollArea } from "lingee-ui";

const items = Array.from({ length: 50 }, (_, i) => \`列表项 \${i + 1}\`);

export default function BasicDemo() {
  return (
    <div style={{ width: 280, border: "1px solid #e0e0e0", borderRadius: 8 }}>
      <ScrollArea style={{ maxHeight: 300 }}>
        <div style={{ padding: 8 }}>
          {items.map((item) => (
            <div
              key={item}
              style={{
                padding: "8px 12px",
                borderBottom: "1px solid #f0f0f0",
                fontSize: 14,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
`,s=Array.from({length:20},(e,t)=>`标签项 ${t+1}`);function c(){return(0,r.jsx)(`div`,{style:{width:300,border:`1px solid #e0e0e0`,borderRadius:8},children:(0,r.jsx)(n,{style:{maxWidth:300},scrollbars:`horizontal`,type:`always`,children:(0,r.jsx)(`div`,{style:{display:`flex`,gap:8,padding:12,width:`max-content`},children:s.map(e=>(0,r.jsx)(`span`,{style:{padding:`4px 12px`,borderRadius:4,background:`#f5f5f5`,fontSize:13,whiteSpace:`nowrap`},children:e},e))})})})}var l=`import { ScrollArea } from "lingee-ui";

const tags = Array.from({ length: 20 }, (_, i) => \`标签项 \${i + 1}\`);

export default function HorizontalDemo() {
  return (
    <div style={{ width: 300, border: "1px solid #e0e0e0", borderRadius: 8 }}>
      <ScrollArea style={{ maxWidth: 300 }} scrollbars="horizontal" type="always">
        <div style={{ display: "flex", gap: 8, padding: 12, width: "max-content" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "4px 12px",
                borderRadius: 4,
                background: "#f5f5f5",
                fontSize: 13,
                whiteSpace: "nowrap",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
`,u={title:`ScrollArea 自定义滚动区域`,description:`自定义样式的滚动容器组件，提供美观的滚动条体验。`};function d(e){let n={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:`基本用法`}),`
`,(0,r.jsx)(n.p,{children:`设置固定高度，内容超出时自动显示自定义滚动条。`}),`
`,(0,r.jsx)(t,{source:o,children:(0,r.jsx)(a,{})}),`
`,(0,r.jsx)(n.h2,{children:`水平滚动`}),`
`,(0,r.jsxs)(n.p,{children:[`设置 `,(0,r.jsx)(n.code,{children:`scrollbars="horizontal"`}),` 实现水平方向的滚动。`]}),`
`,(0,r.jsx)(t,{source:l,children:(0,r.jsx)(c,{})}),`
`,(0,r.jsx)(n.h2,{children:`API`}),`
`,(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:`属性`}),(0,r.jsx)(n.th,{children:`说明`}),(0,r.jsx)(n.th,{children:`类型`}),(0,r.jsx)(n.th,{children:`默认值`})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`type`})}),(0,r.jsx)(n.td,{children:`滚动条显示策略`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`"scroll" | "hover" | "auto" | "always"`})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`"scroll"`})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`scrollbars`})}),(0,r.jsx)(n.td,{children:`滚动条方向`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`"vertical" | "horizontal" | "both"`})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`"vertical"`})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`scrollbarSize`})}),(0,r.jsx)(n.td,{children:`滚动条默认宽度（px）`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`number`})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`4`})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`scrollbarHoverSize`})}),(0,r.jsx)(n.td,{children:`滚动条悬浮时宽度（px）`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`number`})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`6`})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`scrollHideDelay`})}),(0,r.jsx)(n.td,{children:`滚动条隐藏延迟（ms）`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`number`})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`1000`})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`className`})}),(0,r.jsx)(n.td,{children:`自定义类名`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`string`})}),(0,r.jsx)(n.td,{children:`-`})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`style`})}),(0,r.jsx)(n.td,{children:`自定义样式`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`CSSProperties`})}),(0,r.jsx)(n.td,{children:`-`})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`children`})}),(0,r.jsx)(n.td,{children:`子内容`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`ReactNode`})}),(0,r.jsx)(n.td,{children:`-`})]})]})]})]})}function f(e={}){let{wrapper:t}=e.components||{};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}export{f as default,u as frontmatter};