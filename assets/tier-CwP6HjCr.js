import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{t}from"./tooltip-BXt-o9j5.js";import{t as n}from"./button-DU-GfdHa.js";var r=e();function i(){return(0,r.jsx)(t,{content:`This is a tooltip.`,children:(0,r.jsx)(n,{children:`Hover me`})})}var a=`import { Tooltip, Button } from "lingee-ui";

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
`,d=`灵基是一款面向企业的 AI 原生智能协同平台，连接人、AI 与企业业务系统，让员工通过自然语言完成信息获取、任务执行和业务协作。`;function f(){return(0,r.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,r.jsx)(t,{content:`复制`,children:(0,r.jsx)(n,{children:`单行`})}),(0,r.jsx)(t,{content:`此处是可自定义的说明文字内容并按照上述规则定义最大宽度`,children:(0,r.jsx)(n,{children:`多行（≤4 行）`})}),(0,r.jsx)(t,{content:d,children:(0,r.jsx)(n,{children:`复杂内容 A`})}),(0,r.jsx)(t,{content:d.repeat(4),children:(0,r.jsx)(n,{children:`复杂内容 B（超长滚动）`})})]})}var p=`import { Tooltip, Button } from "lingee-ui";

const BASE =
  "灵基是一款面向企业的 AI 原生智能协同平台，连接人、AI 与企业业务系统，让员工通过自然语言完成信息获取、任务执行和业务协作。";

export default function TierDemo() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Tooltip content="复制">
        <Button>单行</Button>
      </Tooltip>
      <Tooltip content="此处是可自定义的说明文字内容并按照上述规则定义最大宽度">
        <Button>多行（≤4 行）</Button>
      </Tooltip>
      <Tooltip content={BASE}>
        <Button>复杂内容 A</Button>
      </Tooltip>
      <Tooltip content={BASE.repeat(4)}>
        <Button>复杂内容 B（超长滚动）</Button>
      </Tooltip>
    </div>
  );
}
`;export{s as a,i as c,l as i,f as n,o,u as r,a as s,p as t};