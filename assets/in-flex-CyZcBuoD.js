import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{n as t}from"./tooltip-BXt-o9j5.js";var n=e(),r=Array.from({length:50},(e,t)=>`Item ${t+1}`);function i(){return(0,n.jsx)(`div`,{style:{width:280,border:`1px solid #e0e0e0`,borderRadius:8},children:(0,n.jsx)(t,{style:{maxHeight:300},children:(0,n.jsx)(`div`,{style:{padding:8},children:r.map(e=>(0,n.jsx)(`div`,{style:{padding:`8px 12px`,borderBottom:`1px solid #f0f0f0`,fontSize:14},children:e},e))})})})}var a=`import { ScrollArea } from "lingee-ui";

const items = Array.from({ length: 50 }, (_, i) => \`Item \${i + 1}\`);

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
`,o=Array.from({length:20},(e,t)=>`Tag ${t+1}`);function s(){return(0,n.jsx)(`div`,{style:{width:300,border:`1px solid #e0e0e0`,borderRadius:8},children:(0,n.jsx)(t,{style:{maxWidth:300},scrollbars:`horizontal`,type:`always`,children:(0,n.jsx)(`div`,{style:{display:`flex`,gap:8,padding:12,width:`max-content`},children:o.map(e=>(0,n.jsx)(`span`,{style:{padding:`4px 12px`,borderRadius:4,background:`#f5f5f5`,fontSize:13,whiteSpace:`nowrap`},children:e},e))})})})}var c=`import { ScrollArea } from "lingee-ui";

const tags = Array.from({ length: 20 }, (_, i) => \`Tag \${i + 1}\`);

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
`,l=Array.from({length:30},(e,t)=>`Item ${t+1}`);function u(){return(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,width:280,maxHeight:300,border:`1px solid var(--lg-g-border-color-black-subtle)`,borderRadius:8,overflow:`hidden`},children:[(0,n.jsx)(`div`,{style:{flexShrink:0,padding:`10px 12px`,fontSize:13,borderBottom:`1px solid var(--lg-g-border-color-black-subtle)`},children:`固定头部`}),(0,n.jsx)(t,{fill:!0,style:{flex:1,minHeight:0},children:(0,n.jsx)(`div`,{style:{padding:8},children:l.map(e=>(0,n.jsx)(`div`,{style:{padding:`8px 12px`,fontSize:14},children:e},e))})}),(0,n.jsx)(`div`,{style:{flexShrink:0,padding:`10px 12px`,fontSize:13,borderTop:`1px solid var(--lg-g-border-color-black-subtle)`},children:`固定底部`})]})}var d=`import { ScrollArea } from "lingee-ui";

const items = Array.from({ length: 30 }, (_, i) => \`Item \${i + 1}\`);

/**
 * 上下有固定区块、中间滚动的典型布局。
 *
 * 关键点是 \`fill\`：不传时 viewport 走 height: inherit，拿到的是「含头尾的整高」，
 * 会比 ScrollArea 实际高度多出头尾的量，多出部分被裁掉且滚不到，列表末尾露不出来。
 *
 * \`flex: 1\` 与 \`minHeight: 0\` 仍需消费方自己给：前者分配剩余空间，
 * 后者抵消 flex item 默认的 min-height: auto（否则内容会顶穿外层限高）。
 */
export default function InFlexDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 280,
        maxHeight: 300,
        border: "1px solid var(--lg-g-border-color-black-subtle)",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          padding: "10px 12px",
          fontSize: 13,
          borderBottom: "1px solid var(--lg-g-border-color-black-subtle)",
        }}
      >
        固定头部
      </div>

      <ScrollArea fill style={{ flex: 1, minHeight: 0 }}>
        <div style={{ padding: 8 }}>
          {items.map((item) => (
            <div key={item} style={{ padding: "8px 12px", fontSize: 14 }}>
              {item}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div
        style={{
          flexShrink: 0,
          padding: "10px 12px",
          fontSize: 13,
          borderTop: "1px solid var(--lg-g-border-color-black-subtle)",
        }}
      >
        固定底部
      </div>
    </div>
  );
}
`;export{a,s as i,u as n,i as o,c as r,d as t};