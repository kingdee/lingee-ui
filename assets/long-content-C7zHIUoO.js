import{R as e}from"./i18n-C43t6VQe.js";import{n as t}from"./DemoBox-C3fXWtGv.js";import{t as n}from"./button-8AVe2tg2.js";var r=e();function i(){return(0,r.jsx)(t,{content:`This is a tooltip.`,children:(0,r.jsx)(n,{children:`Hover me`})})}var a=`import { Tooltip, Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <Tooltip content="This is a tooltip.">
      <Button>Hover me</Button>
    </Tooltip>
  );
}
`;function o(){return(0,r.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,r.jsx)(t,{content:`Tooltip on top`,placement:`top`,children:(0,r.jsx)(n,{children:`Top`})}),(0,r.jsx)(t,{content:`Tooltip on bottom`,placement:`bottom`,children:(0,r.jsx)(n,{children:`Bottom`})}),(0,r.jsx)(t,{content:`Tooltip on left`,placement:`left`,children:(0,r.jsx)(n,{children:`Left`})}),(0,r.jsx)(t,{content:`Tooltip on right`,placement:`right`,children:(0,r.jsx)(n,{children:`Right`})})]})}var s=`import { Tooltip, Button } from "lingee-ui";

export default function PlacementDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Tooltip content="Tooltip on top" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip on bottom" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip on left" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="Tooltip on right" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  );
}
`,c=Array.from({length:60},(e,t)=>`Line ${t+1}: demonstrates max height and scrolling for long tooltip text. `).join(``);function l(){return(0,r.jsx)(t,{content:c,children:(0,r.jsx)(n,{children:`Long content`})})}var u=`import { Tooltip, Button } from "lingee-ui";

const LONG_TEXT = Array.from(
  { length: 60 },
  (_, i) => \`Line \${i + 1}: demonstrates max height and scrolling for long tooltip text. \`,
).join("");

export default function LongContentDemo() {
  return (
    <Tooltip content={LONG_TEXT}>
      <Button>Long content</Button>
    </Tooltip>
  );
}
`;export{a,o as i,l as n,i as o,s as r,u as t};