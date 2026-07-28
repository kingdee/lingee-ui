import{C as e}from"./dist-DCLsKzkS.js";import{n as t,r as n,t as r}from"./Trash-BWkZFjHh.js";import{t as i}from"./Plus-CHBAcDIY.js";import{t as a}from"./Search-WaqXFOiJ.js";import{t as o}from"./DemoBox-D1az5eCZ.js";import{t as s}from"./button-C8GWSUqU.js";var c=e();function l(){return(0,c.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,c.jsx)(s,{variant:`primary`,children:`主要按钮`}),(0,c.jsx)(s,{variant:`default`,children:`默认按钮`}),(0,c.jsx)(s,{variant:`text`,children:`文字按钮`})]})}var u=`import { Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary">主要按钮</Button>
      <Button variant="default">默认按钮</Button>
      <Button variant="text">文字按钮</Button>
    </div>
  );
}
`,d=({label:e,children:t})=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:16},children:[(0,c.jsx)(`span`,{style:{fontSize:12,fontFamily:`monospace`,color:`rgba(0,0,0,0.46)`,minWidth:100},children:e}),(0,c.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:t})]});function f(){return(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(d,{label:`primary`,children:[(0,c.jsx)(s,{variant:`primary`,children:`Primary`}),(0,c.jsx)(s,{variant:`primary`,disabled:!0,children:`Disabled`}),(0,c.jsx)(s,{variant:`primary`,loading:!0,children:`Loading`}),(0,c.jsx)(s,{variant:`primary`,icon:(0,c.jsx)(a,{}),children:`带图标`})]}),(0,c.jsxs)(d,{label:`filled`,children:[(0,c.jsx)(s,{variant:`filled`,children:`Filled`}),(0,c.jsx)(s,{variant:`filled`,disabled:!0,children:`Disabled`}),(0,c.jsx)(s,{variant:`filled`,loading:!0,children:`Loading`}),(0,c.jsx)(s,{variant:`filled`,icon:(0,c.jsx)(a,{}),children:`带图标`})]}),(0,c.jsxs)(d,{label:`default`,children:[(0,c.jsx)(s,{variant:`default`,children:`Default`}),(0,c.jsx)(s,{variant:`default`,disabled:!0,children:`Disabled`}),(0,c.jsx)(s,{variant:`default`,loading:!0,children:`Loading`}),(0,c.jsx)(s,{variant:`default`,icon:(0,c.jsx)(a,{}),children:`带图标`})]}),(0,c.jsxs)(d,{label:`text`,children:[(0,c.jsx)(s,{variant:`text`,children:`Text`}),(0,c.jsx)(s,{variant:`text`,disabled:!0,children:`Disabled`}),(0,c.jsx)(s,{variant:`text`,loading:!0,children:`Loading`}),(0,c.jsx)(s,{variant:`text`,icon:(0,c.jsx)(a,{}),children:`带图标`})]}),(0,c.jsxs)(d,{label:`link-plain`,children:[(0,c.jsx)(s,{variant:`link-plain`,children:`Link Plain`}),(0,c.jsx)(s,{variant:`link-plain`,disabled:!0,children:`Disabled`}),(0,c.jsx)(s,{variant:`link-plain`,icon:(0,c.jsx)(a,{}),children:`带图标`})]}),(0,c.jsxs)(d,{label:`link`,children:[(0,c.jsx)(s,{variant:`link`,children:`Link`}),(0,c.jsx)(s,{variant:`link`,disabled:!0,children:`Disabled`}),(0,c.jsx)(s,{variant:`link`,icon:(0,c.jsx)(a,{}),children:`带图标`})]})]})}var p=`import { Button } from "lingee-ui";
import { Search } from "lingee-icon";

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
    <span style={{ fontSize: 12, fontFamily: "monospace", color: "rgba(0,0,0,0.46)", minWidth: 100 }}>
      {label}
    </span>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {children}
    </div>
  </div>
);

export default function VariantsDemo() {
  return (
    <div>
      <Row label="primary">
        <Button variant="primary">Primary</Button>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="primary" loading>Loading</Button>
        <Button variant="primary" icon={<Search />}>带图标</Button>
      </Row>
      <Row label="filled">
        <Button variant="filled">Filled</Button>
        <Button variant="filled" disabled>Disabled</Button>
        <Button variant="filled" loading>Loading</Button>
        <Button variant="filled" icon={<Search />}>带图标</Button>
      </Row>
      <Row label="default">
        <Button variant="default">Default</Button>
        <Button variant="default" disabled>Disabled</Button>
        <Button variant="default" loading>Loading</Button>
        <Button variant="default" icon={<Search />}>带图标</Button>
      </Row>
      <Row label="text">
        <Button variant="text">Text</Button>
        <Button variant="text" disabled>Disabled</Button>
        <Button variant="text" loading>Loading</Button>
        <Button variant="text" icon={<Search />}>带图标</Button>
      </Row>
      <Row label="link-plain">
        <Button variant="link-plain">Link Plain</Button>
        <Button variant="link-plain" disabled>Disabled</Button>
        <Button variant="link-plain" icon={<Search />}>带图标</Button>
      </Row>
      <Row label="link">
        <Button variant="link">Link</Button>
        <Button variant="link" disabled>Disabled</Button>
        <Button variant="link" icon={<Search />}>带图标</Button>
      </Row>
    </div>
  );
}
`;function m(){return(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,c.jsx)(s,{variant:`primary`,size:`sm`,children:`小按钮`}),(0,c.jsx)(s,{variant:`primary`,size:`md`,children:`中按钮`}),(0,c.jsx)(s,{variant:`primary`,size:`lg`,children:`大按钮`})]})}var h=`import { Button } from "lingee-ui";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Button variant="primary" size="sm">小按钮</Button>
      <Button variant="primary" size="md">中按钮</Button>
      <Button variant="primary" size="lg">大按钮</Button>
    </div>
  );
}
`;function g(){return(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,c.jsx)(s,{variant:`primary`,children:`默认形状`}),(0,c.jsx)(s,{variant:`primary`,shape:`round`,children:`圆角按钮`}),(0,c.jsx)(s,{variant:`primary`,shape:`circle`,icon:(0,c.jsx)(i,{}),"aria-label":`新建`}),(0,c.jsx)(s,{variant:`default`,shape:`circle`,icon:(0,c.jsx)(a,{}),"aria-label":`搜索`})]})}var _=`import { Button } from "lingee-ui";
import { Plus, Search } from "lingee-icon";

export default function ShapeDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Button variant="primary">默认形状</Button>
      <Button variant="primary" shape="round">圆角按钮</Button>
      <Button variant="primary" shape="circle" icon={<Plus />} aria-label="新建" />
      <Button variant="default" shape="circle" icon={<Search />} aria-label="搜索" />
    </div>
  );
}
`;function v(){return(0,c.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,c.jsx)(s,{variant:`primary`,icon:(0,c.jsx)(i,{}),children:`新建`}),(0,c.jsx)(s,{variant:`default`,icon:(0,c.jsx)(a,{}),children:`搜索`}),(0,c.jsx)(s,{variant:`default`,icon:(0,c.jsx)(i,{}),iconPosition:`end`,children:`添加`})]})}var y=`import { Button } from "lingee-ui";
import { Plus, Search } from "lingee-icon";

export default function IconDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary" icon={<Plus />}>新建</Button>
      <Button variant="default" icon={<Search />}>搜索</Button>
      <Button variant="default" icon={<Plus />} iconPosition="end">添加</Button>
    </div>
  );
}
`,b=({label:e,children:t})=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:16},children:[(0,c.jsx)(`span`,{style:{fontSize:12,fontFamily:`monospace`,color:`rgba(0,0,0,0.46)`,minWidth:100},children:e}),(0,c.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:t})]});function x(){return(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(b,{label:`primary`,children:[(0,c.jsx)(s,{variant:`primary`,danger:!0,children:`Primary`}),(0,c.jsx)(s,{variant:`primary`,danger:!0,disabled:!0,children:`Disabled`}),(0,c.jsx)(s,{variant:`primary`,danger:!0,icon:(0,c.jsx)(r,{}),children:`删除`})]}),(0,c.jsxs)(b,{label:`filled`,children:[(0,c.jsx)(s,{variant:`filled`,danger:!0,children:`Filled`}),(0,c.jsx)(s,{variant:`filled`,danger:!0,disabled:!0,children:`Disabled`}),(0,c.jsx)(s,{variant:`filled`,danger:!0,icon:(0,c.jsx)(r,{}),children:`删除`})]}),(0,c.jsxs)(b,{label:`default`,children:[(0,c.jsx)(s,{variant:`default`,danger:!0,children:`Default`}),(0,c.jsx)(s,{variant:`default`,danger:!0,disabled:!0,children:`Disabled`}),(0,c.jsx)(s,{variant:`default`,danger:!0,icon:(0,c.jsx)(r,{}),children:`删除`})]}),(0,c.jsxs)(b,{label:`text`,children:[(0,c.jsx)(s,{variant:`text`,danger:!0,children:`Text`}),(0,c.jsx)(s,{variant:`text`,danger:!0,disabled:!0,children:`Disabled`}),(0,c.jsx)(s,{variant:`text`,danger:!0,icon:(0,c.jsx)(r,{}),children:`删除`})]}),(0,c.jsxs)(b,{label:`link-plain`,children:[(0,c.jsx)(s,{variant:`link-plain`,danger:!0,children:`Link Plain`}),(0,c.jsx)(s,{variant:`link-plain`,danger:!0,disabled:!0,children:`Disabled`})]}),(0,c.jsxs)(b,{label:`link`,children:[(0,c.jsx)(s,{variant:`link`,danger:!0,children:`Link`}),(0,c.jsx)(s,{variant:`link`,danger:!0,disabled:!0,children:`Disabled`})]})]})}var S=`import { Button } from "lingee-ui";
import { Trash } from "lingee-icon";

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
    <span style={{ fontSize: 12, fontFamily: "monospace", color: "rgba(0,0,0,0.46)", minWidth: 100 }}>
      {label}
    </span>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {children}
    </div>
  </div>
);

export default function DangerDemo() {
  return (
    <div>
      <Row label="primary">
        <Button variant="primary" danger>Primary</Button>
        <Button variant="primary" danger disabled>Disabled</Button>
        <Button variant="primary" danger icon={<Trash />}>删除</Button>
      </Row>
      <Row label="filled">
        <Button variant="filled" danger>Filled</Button>
        <Button variant="filled" danger disabled>Disabled</Button>
        <Button variant="filled" danger icon={<Trash />}>删除</Button>
      </Row>
      <Row label="default">
        <Button variant="default" danger>Default</Button>
        <Button variant="default" danger disabled>Disabled</Button>
        <Button variant="default" danger icon={<Trash />}>删除</Button>
      </Row>
      <Row label="text">
        <Button variant="text" danger>Text</Button>
        <Button variant="text" danger disabled>Disabled</Button>
        <Button variant="text" danger icon={<Trash />}>删除</Button>
      </Row>
      <Row label="link-plain">
        <Button variant="link-plain" danger>Link Plain</Button>
        <Button variant="link-plain" danger disabled>Disabled</Button>
      </Row>
      <Row label="link">
        <Button variant="link" danger>Link</Button>
        <Button variant="link" danger disabled>Disabled</Button>
      </Row>
    </div>
  );
}
`,C=({label:e,children:t})=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:16},children:[(0,c.jsx)(`span`,{style:{fontSize:12,fontFamily:`monospace`,color:`rgba(0,0,0,0.46)`,minWidth:100},children:e}),(0,c.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:t})]});function w(){return(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(C,{label:`primary`,children:[(0,c.jsx)(s,{variant:`primary`,ghost:!0,children:`Primary`}),(0,c.jsx)(s,{variant:`primary`,ghost:!0,disabled:!0,children:`Disabled`}),(0,c.jsx)(s,{variant:`primary`,ghost:!0,icon:(0,c.jsx)(a,{}),children:`搜索`})]}),(0,c.jsxs)(C,{label:`filled`,children:[(0,c.jsx)(s,{variant:`filled`,ghost:!0,children:`Filled`}),(0,c.jsx)(s,{variant:`filled`,ghost:!0,disabled:!0,children:`Disabled`})]}),(0,c.jsxs)(C,{label:`default`,children:[(0,c.jsx)(s,{variant:`default`,ghost:!0,children:`Default`}),(0,c.jsx)(s,{variant:`default`,ghost:!0,disabled:!0,children:`Disabled`}),(0,c.jsx)(s,{variant:`default`,ghost:!0,icon:(0,c.jsx)(a,{}),children:`搜索`})]}),(0,c.jsxs)(C,{label:`text`,children:[(0,c.jsx)(s,{variant:`text`,ghost:!0,children:`Text`}),(0,c.jsx)(s,{variant:`text`,ghost:!0,disabled:!0,children:`Disabled`})]}),(0,c.jsxs)(C,{label:`danger + ghost`,children:[(0,c.jsx)(s,{variant:`primary`,ghost:!0,danger:!0,children:`Primary`}),(0,c.jsx)(s,{variant:`default`,ghost:!0,danger:!0,children:`Default`}),(0,c.jsx)(s,{variant:`text`,ghost:!0,danger:!0,children:`Text`})]})]})}var T=`import { Button } from "lingee-ui";
import { Search } from "lingee-icon";

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
    <span style={{ fontSize: 12, fontFamily: "monospace", color: "rgba(0,0,0,0.46)", minWidth: 100 }}>
      {label}
    </span>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {children}
    </div>
  </div>
);

export default function GhostDemo() {
  return (
    <div>
      <Row label="primary">
        <Button variant="primary" ghost>Primary</Button>
        <Button variant="primary" ghost disabled>Disabled</Button>
        <Button variant="primary" ghost icon={<Search />}>搜索</Button>
      </Row>
      <Row label="filled">
        <Button variant="filled" ghost>Filled</Button>
        <Button variant="filled" ghost disabled>Disabled</Button>
      </Row>
      <Row label="default">
        <Button variant="default" ghost>Default</Button>
        <Button variant="default" ghost disabled>Disabled</Button>
        <Button variant="default" ghost icon={<Search />}>搜索</Button>
      </Row>
      <Row label="text">
        <Button variant="text" ghost>Text</Button>
        <Button variant="text" ghost disabled>Disabled</Button>
      </Row>
      <Row label="danger + ghost">
        <Button variant="primary" ghost danger>Primary</Button>
        <Button variant="default" ghost danger>Default</Button>
        <Button variant="text" ghost danger>Text</Button>
      </Row>
    </div>
  );
}

`;function E(){return(0,c.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,c.jsx)(s,{variant:`text`,icon:(0,c.jsx)(t,{}),tooltip:`编辑`,"aria-label":`编辑`}),(0,c.jsx)(s,{variant:`text`,icon:(0,c.jsx)(n,{}),tooltip:`复制`,"aria-label":`复制`}),(0,c.jsx)(s,{variant:`text`,icon:(0,c.jsx)(r,{}),danger:!0,tooltip:`删除`,"aria-label":`删除`})]})}var D=`import { Button } from "lingee-ui";
import { Edit, Copy, Trash } from "lingee-icon";

export default function TooltipDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="text" icon={<Edit />} tooltip="编辑" aria-label="编辑" />
      <Button variant="text" icon={<Copy />} tooltip="复制" aria-label="复制" />
      <Button variant="text" icon={<Trash />} danger tooltip="删除" aria-label="删除" />
    </div>
  );
}
`;function O(){return(0,c.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,c.jsx)(s,{variant:`primary`,loading:!0,children:`加载中`}),(0,c.jsx)(s,{variant:`default`,loading:!0,children:`加载中`})]})}var k=`import { Button } from "lingee-ui";

export default function LoadingDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary" loading>加载中</Button>
      <Button variant="default" loading>加载中</Button>
    </div>
  );
}
`;function A(){return(0,c.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,c.jsx)(s,{variant:`primary`,disabled:!0,children:`主要按钮`}),(0,c.jsx)(s,{variant:`default`,disabled:!0,children:`默认按钮`}),(0,c.jsx)(s,{variant:`text`,disabled:!0,children:`文字按钮`})]})}var j=`import { Button } from "lingee-ui";

export default function DisabledDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary" disabled>主要按钮</Button>
      <Button variant="default" disabled>默认按钮</Button>
      <Button variant="text" disabled>文字按钮</Button>
    </div>
  );
}
`,M={title:`Button 按钮`,description:`用于触发一个操作，是用户与系统交互的基础元素。`};function N(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{children:`基本用法`}),`
`,(0,c.jsxs)(t.p,{children:[`按钮有三种基础变体：`,(0,c.jsx)(t.code,{children:`primary`}),`（主要）、`,(0,c.jsx)(t.code,{children:`default`}),`（默认）、`,(0,c.jsx)(t.code,{children:`text`}),`（文字）。`]}),`
`,(0,c.jsx)(o,{source:u,children:(0,c.jsx)(l,{})}),`
`,(0,c.jsx)(t.h2,{children:`全部变体`}),`
`,(0,c.jsx)(t.p,{children:`六种按钮变体平铺展示，含 Default / Disabled / Loading / 带图标四态。`}),`
`,(0,c.jsx)(o,{source:p,children:(0,c.jsx)(f,{})}),`
`,(0,c.jsx)(t.h2,{children:`按钮尺寸`}),`
`,(0,c.jsxs)(t.p,{children:[`提供 `,(0,c.jsx)(t.code,{children:`sm`}),`、`,(0,c.jsx)(t.code,{children:`md`}),`、`,(0,c.jsx)(t.code,{children:`lg`}),` 三种尺寸。`]}),`
`,(0,c.jsx)(o,{source:h,children:(0,c.jsx)(m,{})}),`
`,(0,c.jsx)(t.h2,{children:`按钮形状`}),`
`,(0,c.jsxs)(t.p,{children:[`通过 `,(0,c.jsx)(t.code,{children:`shape`}),` 设置按钮形状：`,(0,c.jsx)(t.code,{children:`default`}),`（默认）、`,(0,c.jsx)(t.code,{children:`round`}),`（圆角）、`,(0,c.jsx)(t.code,{children:`circle`}),`（圆形，适用于纯图标按钮）。`]}),`
`,(0,c.jsx)(o,{source:_,children:(0,c.jsx)(g,{})}),`
`,(0,c.jsx)(t.h2,{children:`图标按钮`}),`
`,(0,c.jsxs)(t.p,{children:[`通过 `,(0,c.jsx)(t.code,{children:`icon`}),` 属性设置图标，`,(0,c.jsx)(t.code,{children:`iconPosition`}),` 控制图标位置。`]}),`
`,(0,c.jsx)(o,{source:y,children:(0,c.jsx)(v,{})}),`
`,(0,c.jsx)(t.h2,{children:`危险按钮`}),`
`,(0,c.jsxs)(t.p,{children:[`所有变体 + `,(0,c.jsx)(t.code,{children:`danger`}),` 的平铺展示，含 Default / Disabled / 带图标。`]}),`
`,(0,c.jsx)(o,{source:S,children:(0,c.jsx)(x,{})}),`
`,(0,c.jsx)(t.h2,{children:`幽灵按钮`}),`
`,(0,c.jsxs)(t.p,{children:[`所有变体 + `,(0,c.jsx)(t.code,{children:`ghost`}),` 的平铺展示，含 `,(0,c.jsx)(t.code,{children:`danger + ghost`}),` 组合。`]}),`
`,(0,c.jsx)(o,{source:T,children:(0,c.jsx)(w,{})}),`
`,(0,c.jsx)(t.h2,{children:`图标按钮 + Tooltip`}),`
`,(0,c.jsxs)(t.p,{children:[`纯图标按钮可通过 `,(0,c.jsx)(t.code,{children:`tooltip`}),` 属性添加文字提示。`]}),`
`,(0,c.jsx)(o,{source:D,children:(0,c.jsx)(E,{})}),`
`,(0,c.jsx)(t.h2,{children:`加载状态`}),`
`,(0,c.jsxs)(t.p,{children:[`设置 `,(0,c.jsx)(t.code,{children:`loading`}),` 展示加载中状态，阻止重复点击。`]}),`
`,(0,c.jsx)(o,{source:k,children:(0,c.jsx)(O,{})}),`
`,(0,c.jsx)(t.h2,{children:`禁用状态`}),`
`,(0,c.jsxs)(t.p,{children:[`设置 `,(0,c.jsx)(t.code,{children:`disabled`}),` 禁用按钮交互。`]}),`
`,(0,c.jsx)(o,{source:j,children:(0,c.jsx)(A,{})}),`
`,(0,c.jsx)(t.h2,{children:`API`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`属性`}),(0,c.jsx)(t.th,{children:`说明`}),(0,c.jsx)(t.th,{children:`类型`}),(0,c.jsx)(t.th,{children:`默认值`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`variant`})}),(0,c.jsx)(t.td,{children:`按钮变体`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"primary" | "filled" | "default" | "text" | "link-plain" | "link"`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"default"`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`size`})}),(0,c.jsx)(t.td,{children:`按钮尺寸`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"sm" | "md" | "lg"`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"md"`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`shape`})}),(0,c.jsx)(t.td,{children:`按钮形状`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"default" | "round" | "circle"`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"default"`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`icon`})}),(0,c.jsx)(t.td,{children:`图标插槽`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`ReactNode`})}),(0,c.jsx)(t.td,{children:`-`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`iconPosition`})}),(0,c.jsx)(t.td,{children:`图标位置`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"start" | "end"`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"start"`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`danger`})}),(0,c.jsx)(t.td,{children:`危险态`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`ghost`})}),(0,c.jsx)(t.td,{children:`透明背景`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`loading`})}),(0,c.jsx)(t.td,{children:`加载状态`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`disabled`})}),(0,c.jsx)(t.td,{children:`禁用状态`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`tooltip`})}),(0,c.jsx)(t.td,{children:`Tooltip 文字`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`onClick`})}),(0,c.jsx)(t.td,{children:`点击回调`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(e: MouseEvent) => void`})}),(0,c.jsx)(t.td,{children:`-`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`children`})}),(0,c.jsx)(t.td,{children:`子内容`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`ReactNode`})}),(0,c.jsx)(t.td,{children:`-`})]})]})]})]})}function P(e={}){let{wrapper:t}=e.components||{};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(N,{...e})}):N(e)}export{P as default,M as frontmatter};