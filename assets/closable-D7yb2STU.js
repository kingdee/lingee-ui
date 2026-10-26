import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{n as t,r as n,t as r}from"./Lightbulb-Ze3dBprT.js";import{t as i}from"./ExclamationCircle-CYxcYci5.js";import{t as a}from"./tag-BRZVfZew.js";var o=e();function s(){return(0,o.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,o.jsx)(a,{variant:`text`,children:`Text`}),(0,o.jsx)(a,{variant:`tint`,children:`Tint`}),(0,o.jsx)(a,{variant:`filled`,children:`Filled`}),(0,o.jsx)(a,{variant:`line`,children:`Line`})]})}var c=`import { Tag } from "lingee-ui";
export default function BasicDemo() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag variant="text">Text</Tag>
      <Tag variant="tint">Tint</Tag>
      <Tag variant="filled">Filled</Tag>
      <Tag variant="line">Line</Tag>
    </div>
  );
}
`;function l(){return(0,o.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:12},children:[(0,o.jsx)(a,{icon:(0,o.jsx)(n,{}),children:`Status`}),(0,o.jsx)(a,{color:`primary`,variant:`filled`,icon:(0,o.jsx)(n,{}),children:`Status`}),(0,o.jsx)(a,{color:`success`,variant:`line`,icon:(0,o.jsx)(n,{}),children:`Status`})]})}var u=`import { Tag } from "lingee-ui";
import { Compass } from "lingee-icon";
export default function IconDemo() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
      <Tag icon={<Compass />}>Status</Tag>
      <Tag color="primary" variant="filled" icon={<Compass />}>
        Status
      </Tag>
      <Tag color="success" variant="line" icon={<Compass />}>
        Status
      </Tag>
    </div>
  );
}
`;function d(){return(0,o.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:12},children:[(0,o.jsx)(a,{size:`sm`,children:`Small`}),(0,o.jsx)(a,{size:`md`,children:`Default`}),(0,o.jsx)(a,{size:`lg`,children:`Large`})]})}var f=`import { Tag } from "lingee-ui";
export default function SizesDemo() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
      <Tag size="sm">Small</Tag>
      <Tag size="md">Default</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  );
}
`;function p(){return(0,o.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:12},children:[(0,o.jsx)(a,{color:`primary`,shape:`rounded`,children:`Rounded`}),(0,o.jsx)(a,{color:`primary`,shape:`pill`,children:`Pill`}),(0,o.jsx)(a,{color:`success`,variant:`line`,shape:`rounded`,children:`Rounded`}),(0,o.jsx)(a,{color:`success`,variant:`line`,shape:`pill`,children:`Pill`})]})}var m=`import { Tag } from "lingee-ui";
export default function ShapesDemo() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
      <Tag color="primary" shape="rounded">
        Rounded
      </Tag>
      <Tag color="primary" shape="pill">
        Pill
      </Tag>
      <Tag color="success" variant="line" shape="rounded">
        Rounded
      </Tag>
      <Tag color="success" variant="line" shape="pill">
        Pill
      </Tag>
    </div>
  );
}
`;function h(){return(0,o.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,o.jsx)(a,{color:`info`,children:`Info`}),(0,o.jsx)(a,{color:`primary`,children:`Primary`}),(0,o.jsx)(a,{color:`success`,children:`Success`}),(0,o.jsx)(a,{color:`warning`,children:`Warning`}),(0,o.jsx)(a,{color:`danger`,children:`Danger`}),(0,o.jsx)(a,{color:`amber`,children:`Amber`}),(0,o.jsx)(a,{color:`yellow`,children:`Yellow`}),(0,o.jsx)(a,{color:`cyan`,children:`Cyan`}),(0,o.jsx)(a,{color:`purple`,children:`Purple`})]})}var g=`import { Tag } from "lingee-ui";

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
`,_=[`text`,`tint`,`filled`,`line`],v=[`info`,`primary`,`success`,`warning`,`danger`,`amber`,`yellow`,`cyan`,`purple`];function y(){return(0,o.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:_.map(e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[(0,o.jsx)(`span`,{style:{width:48,fontSize:12,color:`var(--lg-g-fg-color-black-muted)`},children:e}),v.map(t=>(0,o.jsx)(a,{variant:e,color:t,children:t},t))]},e))})}var b=`import { Tag } from "lingee-ui";
const VARIANTS = ["text", "tint", "filled", "line"] as const;
const COLORS = [
  "info",
  "primary",
  "success",
  "warning",
  "danger",
  "amber",
  "yellow",
  "cyan",
  "purple",
] as const;
export default function VariantsDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {VARIANTS.map((variant) => (
        <div
          key={variant}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}
        >
          <span
            style={{
              width: 48,
              fontSize: 12,
              color: "var(--lg-g-fg-color-black-muted)",
            }}
          >
            {variant}
          </span>
          {COLORS.map((color) => (
            <Tag key={color} variant={variant} color={color}>
              {color}
            </Tag>
          ))}
        </div>
      ))}
    </div>
  );
}
`;function x(){return(0,o.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,o.jsx)(a,{variant:`gradient`,color:`danger`,icon:(0,o.jsx)(i,{}),children:`Warning`}),(0,o.jsx)(a,{variant:`gradient`,color:`warning`,icon:(0,o.jsx)(r,{}),children:`Suggestion`}),(0,o.jsx)(a,{variant:`gradient`,color:`amber`,icon:(0,o.jsx)(t,{}),children:`Tip`})]})}var S=`import { Tag } from "lingee-ui";
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
`;function C(){return(0,o.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,o.jsx)(a,{variant:`glow`,color:`purple`,children:`Diamond`}),(0,o.jsx)(a,{variant:`glow`,color:`yellow`,children:`Gold`}),(0,o.jsx)(a,{variant:`glow`,color:`cyan`,children:`Platinum`})]})}var w=`import { Tag } from "lingee-ui";

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
`;function T(){return(0,o.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,o.jsx)(a,{color:`info`,closable:!0,children:`Closable`}),(0,o.jsx)(a,{color:`success`,closable:!0,children:`Tag`}),(0,o.jsx)(a,{color:`danger`,closable:!0,children:`Delete`})]})}var E=`import { Tag } from "lingee-ui";

export default function ClosableDemo() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag color="info" closable>Closable</Tag>
      <Tag color="success" closable>Tag</Tag>
      <Tag color="danger" closable>Delete</Tag>
    </div>
  );
}
`;export{c as _,S as a,y as c,m as d,p as f,l as g,u as h,C as i,g as l,d as m,T as n,x as o,f as p,w as r,b as s,E as t,h as u,s as v};