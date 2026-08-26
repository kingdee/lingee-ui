import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{t}from"./Copy-DBZa1ueb.js";import{t as n}from"./Edit-3bjSyu75.js";import{n as r,t as i}from"./Trash-D-Q_kkZc.js";import{t as a}from"./Search-Bp22Ei2B.js";import{t as o}from"./button-DU-GfdHa.js";var s=e();function c(){return(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,s.jsx)(o,{variant:`primary`,children:`Primary`}),(0,s.jsx)(o,{variant:`default`,children:`Default`}),(0,s.jsx)(o,{variant:`text`,children:`Text`})]})}var l=`import { Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="default">Default</Button>
      <Button variant="text">Text</Button>
    </div>
  );
}
`,u=({label:e,children:t})=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:16},children:[(0,s.jsx)(`span`,{style:{fontSize:12,fontFamily:`monospace`,color:`rgba(0,0,0,0.46)`,minWidth:100},children:e}),(0,s.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:t})]});function d(){return(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(u,{label:`primary`,children:[(0,s.jsx)(o,{variant:`primary`,children:`Primary`}),(0,s.jsx)(o,{variant:`primary`,disabled:!0,children:`Disabled`}),(0,s.jsx)(o,{variant:`primary`,loading:!0,children:`Loading`}),(0,s.jsx)(o,{variant:`primary`,icon:(0,s.jsx)(a,{}),children:`With Icon`})]}),(0,s.jsxs)(u,{label:`filled`,children:[(0,s.jsx)(o,{variant:`filled`,children:`Filled`}),(0,s.jsx)(o,{variant:`filled`,disabled:!0,children:`Disabled`}),(0,s.jsx)(o,{variant:`filled`,loading:!0,children:`Loading`}),(0,s.jsx)(o,{variant:`filled`,icon:(0,s.jsx)(a,{}),children:`With Icon`})]}),(0,s.jsxs)(u,{label:`default`,children:[(0,s.jsx)(o,{variant:`default`,children:`Default`}),(0,s.jsx)(o,{variant:`default`,disabled:!0,children:`Disabled`}),(0,s.jsx)(o,{variant:`default`,loading:!0,children:`Loading`}),(0,s.jsx)(o,{variant:`default`,icon:(0,s.jsx)(a,{}),children:`With Icon`})]}),(0,s.jsxs)(u,{label:`text`,children:[(0,s.jsx)(o,{variant:`text`,children:`Text`}),(0,s.jsx)(o,{variant:`text`,disabled:!0,children:`Disabled`}),(0,s.jsx)(o,{variant:`text`,loading:!0,children:`Loading`}),(0,s.jsx)(o,{variant:`text`,icon:(0,s.jsx)(a,{}),children:`With Icon`})]}),(0,s.jsxs)(u,{label:`link-plain`,children:[(0,s.jsx)(o,{variant:`link-plain`,children:`Link Plain`}),(0,s.jsx)(o,{variant:`link-plain`,disabled:!0,children:`Disabled`}),(0,s.jsx)(o,{variant:`link-plain`,icon:(0,s.jsx)(a,{}),children:`With Icon`})]}),(0,s.jsxs)(u,{label:`link`,children:[(0,s.jsx)(o,{variant:`link`,children:`Link`}),(0,s.jsx)(o,{variant:`link`,disabled:!0,children:`Disabled`}),(0,s.jsx)(o,{variant:`link`,icon:(0,s.jsx)(a,{}),children:`With Icon`})]})]})}var f=`import { Button } from "lingee-ui";
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
        <Button variant="primary" icon={<Search />}>With Icon</Button>
      </Row>
      <Row label="filled">
        <Button variant="filled">Filled</Button>
        <Button variant="filled" disabled>Disabled</Button>
        <Button variant="filled" loading>Loading</Button>
        <Button variant="filled" icon={<Search />}>With Icon</Button>
      </Row>
      <Row label="default">
        <Button variant="default">Default</Button>
        <Button variant="default" disabled>Disabled</Button>
        <Button variant="default" loading>Loading</Button>
        <Button variant="default" icon={<Search />}>With Icon</Button>
      </Row>
      <Row label="text">
        <Button variant="text">Text</Button>
        <Button variant="text" disabled>Disabled</Button>
        <Button variant="text" loading>Loading</Button>
        <Button variant="text" icon={<Search />}>With Icon</Button>
      </Row>
      <Row label="link-plain">
        <Button variant="link-plain">Link Plain</Button>
        <Button variant="link-plain" disabled>Disabled</Button>
        <Button variant="link-plain" icon={<Search />}>With Icon</Button>
      </Row>
      <Row label="link">
        <Button variant="link">Link</Button>
        <Button variant="link" disabled>Disabled</Button>
        <Button variant="link" icon={<Search />}>With Icon</Button>
      </Row>
    </div>
  );
}
`;function p(){return(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,s.jsx)(o,{variant:`primary`,size:`sm`,children:`Small 24px`}),(0,s.jsx)(o,{variant:`primary`,size:`md`,children:`Medium 28px`}),(0,s.jsx)(o,{variant:`primary`,size:`std`,children:`Standard 32px`}),(0,s.jsx)(o,{variant:`primary`,size:`lg`,children:`Large 36px`})]})}var m=`import { Button } from "../../../src";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Button variant="primary" size="sm">Small 24px</Button>
      <Button variant="primary" size="md">Medium 28px</Button>
      <Button variant="primary" size="std">Standard 32px</Button>
      <Button variant="primary" size="lg">Large 36px</Button>
    </div>
  );
}
`;function h(){return(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,s.jsx)(o,{variant:`primary`,children:`Default`}),(0,s.jsx)(o,{variant:`primary`,shape:`round`,children:`Round`}),(0,s.jsx)(o,{variant:`primary`,shape:`circle`,icon:(0,s.jsx)(r,{}),"aria-label":`New`}),(0,s.jsx)(o,{variant:`default`,shape:`circle`,icon:(0,s.jsx)(a,{}),"aria-label":`Search`})]})}var g=`import { Button } from "lingee-ui";
import { Plus, Search } from "lingee-icon";

export default function ShapeDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Button variant="primary">Default</Button>
      <Button variant="primary" shape="round">Round</Button>
      <Button variant="primary" shape="circle" icon={<Plus />} aria-label="New" />
      <Button variant="default" shape="circle" icon={<Search />} aria-label="Search" />
    </div>
  );
}
`;function _(){return(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,s.jsx)(o,{variant:`primary`,icon:(0,s.jsx)(r,{}),children:`New`}),(0,s.jsx)(o,{variant:`default`,icon:(0,s.jsx)(a,{}),children:`Search`}),(0,s.jsx)(o,{variant:`default`,icon:(0,s.jsx)(r,{}),iconPosition:`end`,children:`Add`})]})}var v=`import { Button } from "lingee-ui";
import { Plus, Search } from "lingee-icon";

export default function IconDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary" icon={<Plus />}>New</Button>
      <Button variant="default" icon={<Search />}>Search</Button>
      <Button variant="default" icon={<Plus />} iconPosition="end">Add</Button>
    </div>
  );
}
`,y=({label:e,children:t})=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:16},children:[(0,s.jsx)(`span`,{style:{fontSize:12,fontFamily:`monospace`,color:`rgba(0,0,0,0.46)`,minWidth:100},children:e}),(0,s.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:t})]});function b(){return(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(y,{label:`primary`,children:[(0,s.jsx)(o,{variant:`primary`,danger:!0,children:`Primary`}),(0,s.jsx)(o,{variant:`primary`,danger:!0,disabled:!0,children:`Disabled`}),(0,s.jsx)(o,{variant:`primary`,danger:!0,icon:(0,s.jsx)(i,{}),children:`Delete`})]}),(0,s.jsxs)(y,{label:`filled`,children:[(0,s.jsx)(o,{variant:`filled`,danger:!0,children:`Filled`}),(0,s.jsx)(o,{variant:`filled`,danger:!0,disabled:!0,children:`Disabled`}),(0,s.jsx)(o,{variant:`filled`,danger:!0,icon:(0,s.jsx)(i,{}),children:`Delete`})]}),(0,s.jsxs)(y,{label:`default`,children:[(0,s.jsx)(o,{variant:`default`,danger:!0,children:`Default`}),(0,s.jsx)(o,{variant:`default`,danger:!0,disabled:!0,children:`Disabled`}),(0,s.jsx)(o,{variant:`default`,danger:!0,icon:(0,s.jsx)(i,{}),children:`Delete`})]}),(0,s.jsxs)(y,{label:`text`,children:[(0,s.jsx)(o,{variant:`text`,danger:!0,children:`Text`}),(0,s.jsx)(o,{variant:`text`,danger:!0,disabled:!0,children:`Disabled`}),(0,s.jsx)(o,{variant:`text`,danger:!0,icon:(0,s.jsx)(i,{}),children:`Delete`})]}),(0,s.jsxs)(y,{label:`link-plain`,children:[(0,s.jsx)(o,{variant:`link-plain`,danger:!0,children:`Link Plain`}),(0,s.jsx)(o,{variant:`link-plain`,danger:!0,disabled:!0,children:`Disabled`})]}),(0,s.jsxs)(y,{label:`link`,children:[(0,s.jsx)(o,{variant:`link`,danger:!0,children:`Link`}),(0,s.jsx)(o,{variant:`link`,danger:!0,disabled:!0,children:`Disabled`})]})]})}var x=`import { Button } from "lingee-ui";
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
        <Button variant="primary" danger icon={<Trash />}>Delete</Button>
      </Row>
      <Row label="filled">
        <Button variant="filled" danger>Filled</Button>
        <Button variant="filled" danger disabled>Disabled</Button>
        <Button variant="filled" danger icon={<Trash />}>Delete</Button>
      </Row>
      <Row label="default">
        <Button variant="default" danger>Default</Button>
        <Button variant="default" danger disabled>Disabled</Button>
        <Button variant="default" danger icon={<Trash />}>Delete</Button>
      </Row>
      <Row label="text">
        <Button variant="text" danger>Text</Button>
        <Button variant="text" danger disabled>Disabled</Button>
        <Button variant="text" danger icon={<Trash />}>Delete</Button>
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
`,S=({label:e,children:t})=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:16},children:[(0,s.jsx)(`span`,{style:{fontSize:12,fontFamily:`monospace`,color:`rgba(0,0,0,0.46)`,minWidth:100},children:e}),(0,s.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:t})]});function C(){return(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(S,{label:`primary`,children:[(0,s.jsx)(o,{variant:`primary`,ghost:!0,children:`Primary`}),(0,s.jsx)(o,{variant:`primary`,ghost:!0,disabled:!0,children:`Disabled`}),(0,s.jsx)(o,{variant:`primary`,ghost:!0,icon:(0,s.jsx)(a,{}),children:`Search`})]}),(0,s.jsxs)(S,{label:`filled`,children:[(0,s.jsx)(o,{variant:`filled`,ghost:!0,children:`Filled`}),(0,s.jsx)(o,{variant:`filled`,ghost:!0,disabled:!0,children:`Disabled`})]}),(0,s.jsxs)(S,{label:`default`,children:[(0,s.jsx)(o,{variant:`default`,ghost:!0,children:`Default`}),(0,s.jsx)(o,{variant:`default`,ghost:!0,disabled:!0,children:`Disabled`}),(0,s.jsx)(o,{variant:`default`,ghost:!0,icon:(0,s.jsx)(a,{}),children:`Search`})]}),(0,s.jsxs)(S,{label:`text`,children:[(0,s.jsx)(o,{variant:`text`,ghost:!0,children:`Text`}),(0,s.jsx)(o,{variant:`text`,ghost:!0,disabled:!0,children:`Disabled`})]}),(0,s.jsxs)(S,{label:`danger + ghost`,children:[(0,s.jsx)(o,{variant:`primary`,ghost:!0,danger:!0,children:`Primary`}),(0,s.jsx)(o,{variant:`default`,ghost:!0,danger:!0,children:`Default`}),(0,s.jsx)(o,{variant:`text`,ghost:!0,danger:!0,children:`Text`})]})]})}var w=`import { Button } from "lingee-ui";
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
        <Button variant="primary" ghost icon={<Search />}>Search</Button>
      </Row>
      <Row label="filled">
        <Button variant="filled" ghost>Filled</Button>
        <Button variant="filled" ghost disabled>Disabled</Button>
      </Row>
      <Row label="default">
        <Button variant="default" ghost>Default</Button>
        <Button variant="default" ghost disabled>Disabled</Button>
        <Button variant="default" ghost icon={<Search />}>Search</Button>
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

`;function T(){return(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,s.jsx)(o,{variant:`text`,icon:(0,s.jsx)(n,{}),tooltip:`Edit`,"aria-label":`Edit`}),(0,s.jsx)(o,{variant:`text`,icon:(0,s.jsx)(t,{}),tooltip:`Copy`,"aria-label":`Copy`}),(0,s.jsx)(o,{variant:`text`,icon:(0,s.jsx)(i,{}),danger:!0,tooltip:`Delete`,"aria-label":`Delete`})]})}var E=`import { Button } from "lingee-ui";
import { Edit, Copy, Trash } from "lingee-icon";

export default function TooltipDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="text" icon={<Edit />} tooltip="Edit" aria-label="Edit" />
      <Button variant="text" icon={<Copy />} tooltip="Copy" aria-label="Copy" />
      <Button variant="text" icon={<Trash />} danger tooltip="Delete" aria-label="Delete" />
    </div>
  );
}
`;function D(){return(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,s.jsx)(o,{variant:`primary`,loading:!0,children:`Loading`}),(0,s.jsx)(o,{variant:`default`,loading:!0,children:`Loading`})]})}var O=`import { Button } from "lingee-ui";

export default function LoadingDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary" loading>Loading</Button>
      <Button variant="default" loading>Loading</Button>
    </div>
  );
}
`;function k(){return(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,s.jsx)(o,{variant:`primary`,disabled:!0,children:`Primary`}),(0,s.jsx)(o,{variant:`default`,disabled:!0,children:`Default`}),(0,s.jsx)(o,{variant:`text`,disabled:!0,children:`Text`})]})}var A=`import { Button } from "lingee-ui";

export default function DisabledDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="default" disabled>Default</Button>
      <Button variant="text" disabled>Text</Button>
    </div>
  );
}
`;export{f as _,E as a,c as b,C as c,v as d,_ as f,p as g,m as h,D as i,x as l,h as m,k as n,T as o,g as p,O as r,w as s,A as t,b as u,d as v,l as y};