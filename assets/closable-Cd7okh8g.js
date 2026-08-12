import{R as e}from"./i18n-DmENUXWN.js";import{t}from"./ExclamationCircle-D1N457eo.js";import{n,t as r}from"./Lightbulb-BhasicST.js";import{t as i}from"./tag-0WWPNPrs.js";var a=e();function o(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,a.jsx)(i,{children:`Default`}),(0,a.jsx)(i,{color:`primary`,children:`Primary`})]})}var s=`import { Tag } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag>Default</Tag>
      <Tag color="primary">Primary</Tag>
    </div>
  );
}
`;function c(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,a.jsx)(i,{color:`info`,children:`Info`}),(0,a.jsx)(i,{color:`primary`,children:`Primary`}),(0,a.jsx)(i,{color:`success`,children:`Success`}),(0,a.jsx)(i,{color:`warning`,children:`Warning`}),(0,a.jsx)(i,{color:`danger`,children:`Danger`}),(0,a.jsx)(i,{color:`amber`,children:`Amber`}),(0,a.jsx)(i,{color:`yellow`,children:`Yellow`}),(0,a.jsx)(i,{color:`cyan`,children:`Cyan`}),(0,a.jsx)(i,{color:`purple`,children:`Purple`})]})}var l=`import { Tag } from "lingee-ui";

export default function ColorsDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Tag color="info">Info</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="danger">Danger</Tag>
      <Tag color="amber">Amber</Tag>
      <Tag color="yellow">Yellow</Tag>
      <Tag color="cyan">Cyan</Tag>
      <Tag color="purple">Purple</Tag>
    </div>
  );
}
`;function u(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,a.jsx)(i,{variant:`gradient`,color:`danger`,icon:(0,a.jsx)(t,{}),children:`Warning`}),(0,a.jsx)(i,{variant:`gradient`,color:`warning`,icon:(0,a.jsx)(r,{}),children:`Suggestion`}),(0,a.jsx)(i,{variant:`gradient`,color:`amber`,icon:(0,a.jsx)(n,{}),children:`Tip`})]})}var d=`import { Tag } from "lingee-ui";
import { ExclamationCircle, Lightbulb, Information } from "lingee-icon";

export default function GradientDemo() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Tag variant="gradient" color="danger" icon={<ExclamationCircle />}>
        Warning
      </Tag>
      <Tag variant="gradient" color="warning" icon={<Lightbulb />}>
        Suggestion
      </Tag>
      <Tag variant="gradient" color="amber" icon={<Information />}>
        Tip
      </Tag>
    </div>
  );
}
`;function f(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,a.jsx)(i,{variant:`glow`,color:`purple`,children:`Diamond`}),(0,a.jsx)(i,{variant:`glow`,color:`yellow`,children:`Gold`}),(0,a.jsx)(i,{variant:`glow`,color:`cyan`,children:`Platinum`})]})}var p=`import { Tag } from "lingee-ui";

export default function GlowDemo() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Tag variant="glow" color="purple">
        Diamond
      </Tag>
      <Tag variant="glow" color="yellow">
        Gold
      </Tag>
      <Tag variant="glow" color="cyan">
        Platinum
      </Tag>
    </div>
  );
}
`;function m(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,a.jsx)(i,{color:`info`,closable:!0,children:`Closable`}),(0,a.jsx)(i,{color:`success`,closable:!0,children:`Tag`}),(0,a.jsx)(i,{color:`danger`,closable:!0,children:`Delete`})]})}var h=`import { Tag } from "lingee-ui";

export default function ClosableDemo() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag color="info" closable>Closable</Tag>
      <Tag color="success" closable>Tag</Tag>
      <Tag color="danger" closable>Delete</Tag>
    </div>
  );
}
`;export{d as a,c,f as i,s as l,m as n,u as o,p as r,l as s,h as t,o as u};