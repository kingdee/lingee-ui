import{c as e,z as t}from"./i18n-B4Rqn8un.js";var n=t(),r=Array.from({length:50},(e,t)=>`Item ${t+1}`);function i(){return(0,n.jsx)(`div`,{style:{width:280,border:`1px solid #e0e0e0`,borderRadius:8},children:(0,n.jsx)(e,{style:{maxHeight:300},children:(0,n.jsx)(`div`,{style:{padding:8},children:r.map(e=>(0,n.jsx)(`div`,{style:{padding:`8px 12px`,borderBottom:`1px solid #f0f0f0`,fontSize:14},children:e},e))})})})}var a=`import { ScrollArea } from "lingee-ui";

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
`,o=Array.from({length:20},(e,t)=>`Tag ${t+1}`);function s(){return(0,n.jsx)(`div`,{style:{width:300,border:`1px solid #e0e0e0`,borderRadius:8},children:(0,n.jsx)(e,{style:{maxWidth:300},scrollbars:`horizontal`,type:`always`,children:(0,n.jsx)(`div`,{style:{display:`flex`,gap:8,padding:12,width:`max-content`},children:o.map(e=>(0,n.jsx)(`span`,{style:{padding:`4px 12px`,borderRadius:4,background:`#f5f5f5`,fontSize:13,whiteSpace:`nowrap`},children:e},e))})})})}var c=`import { ScrollArea } from "lingee-ui";

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
`;export{i,s as n,a as r,c as t};