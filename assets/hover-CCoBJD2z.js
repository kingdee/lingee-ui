import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{t}from"./button-BA4Y5u4W.js";import{i as n,n as r,r as i,t as a}from"./popover-CXt9S_UA.js";var o=e();function s(){return(0,o.jsxs)(a,{children:[(0,o.jsx)(n,{children:(0,o.jsx)(t,{children:`Click me`})}),(0,o.jsx)(i,{className:`lg-popover--card`,children:(0,o.jsx)(`p`,{style:{margin:0},children:`This is the content of the popover.`})})]})}var c=`import { Popover, PopoverTrigger, PopoverContent, Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Click me</Button>
      </PopoverTrigger>
      <PopoverContent className="lg-popover--card">
        <p style={{ margin: 0 }}>This is the content of the popover.</p>
      </PopoverContent>
    </Popover>
  );
}
`,l=[{label:`TL`,side:`top`,align:`start`,gridColumn:2,gridRow:1},{label:`Top`,side:`top`,align:`center`,gridColumn:3,gridRow:1},{label:`TR`,side:`top`,align:`end`,gridColumn:4,gridRow:1},{label:`LT`,side:`left`,align:`start`,gridColumn:1,gridRow:2},{label:`Left`,side:`left`,align:`center`,gridColumn:1,gridRow:3},{label:`LB`,side:`left`,align:`end`,gridColumn:1,gridRow:4},{label:`RT`,side:`right`,align:`start`,gridColumn:5,gridRow:2},{label:`Right`,side:`right`,align:`center`,gridColumn:5,gridRow:3},{label:`RB`,side:`right`,align:`end`,gridColumn:5,gridRow:4},{label:`BL`,side:`bottom`,align:`start`,gridColumn:2,gridRow:5},{label:`Bottom`,side:`bottom`,align:`center`,gridColumn:3,gridRow:5},{label:`BR`,side:`bottom`,align:`end`,gridColumn:4,gridRow:5}];function u(){return(0,o.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(5, minmax(72px, 96px))`,gridTemplateRows:`repeat(5, 36px)`,justifyContent:`center`,gap:12,padding:`72px 24px`,overflowX:`auto`},children:l.map(({label:e,side:r,align:s,gridColumn:c,gridRow:l})=>(0,o.jsxs)(a,{children:[(0,o.jsx)(n,{children:(0,o.jsx)(t,{style:{width:`100%`,gridColumn:c,gridRow:l},children:e})}),(0,o.jsx)(i,{className:`lg-popover--card`,side:r,align:s,sideOffset:8,children:(0,o.jsxs)(`p`,{style:{margin:0},children:[e,` placement`]})})]},e))})}var d=`import { Button, Popover, PopoverContent, PopoverTrigger } from "lingee-ui";

const placements = [
  { label: "TL", side: "top", align: "start", gridColumn: 2, gridRow: 1 },
  { label: "Top", side: "top", align: "center", gridColumn: 3, gridRow: 1 },
  { label: "TR", side: "top", align: "end", gridColumn: 4, gridRow: 1 },
  { label: "LT", side: "left", align: "start", gridColumn: 1, gridRow: 2 },
  { label: "Left", side: "left", align: "center", gridColumn: 1, gridRow: 3 },
  { label: "LB", side: "left", align: "end", gridColumn: 1, gridRow: 4 },
  { label: "RT", side: "right", align: "start", gridColumn: 5, gridRow: 2 },
  { label: "Right", side: "right", align: "center", gridColumn: 5, gridRow: 3 },
  { label: "RB", side: "right", align: "end", gridColumn: 5, gridRow: 4 },
  { label: "BL", side: "bottom", align: "start", gridColumn: 2, gridRow: 5 },
  { label: "Bottom", side: "bottom", align: "center", gridColumn: 3, gridRow: 5 },
  { label: "BR", side: "bottom", align: "end", gridColumn: 4, gridRow: 5 },
] as const;

export default function PlacementDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, minmax(72px, 96px))",
        gridTemplateRows: "repeat(5, 36px)",
        justifyContent: "center",
        gap: 12,
        padding: "72px 24px",
        overflowX: "auto",
      }}
    >
      {placements.map(({ label, side, align, gridColumn, gridRow }) => (
        <Popover key={label}>
          <PopoverTrigger>
            <Button style={{ width: "100%", gridColumn, gridRow }}>{label}</Button>
          </PopoverTrigger>
          <PopoverContent
            className="lg-popover--card"
            side={side}
            align={align}
            sideOffset={8}
          >
            <p style={{ margin: 0 }}>{label} placement</p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
`;function f(){return(0,o.jsxs)(a,{trigger:`hover`,children:[(0,o.jsx)(n,{children:(0,o.jsx)(`button`,{type:`button`,style:{padding:`6px 12px`,borderRadius:8},children:`Hover to view`})}),(0,o.jsxs)(i,{className:`lg-popover--card`,sideOffset:8,children:[(0,o.jsx)(`div`,{style:{padding:`8px 12px`,maxWidth:220},children:`The pointer can cross the gap from the trigger into this panel.`}),(0,o.jsx)(r,{})]})]})}var p=`import { Popover, PopoverTrigger, PopoverContent, PopoverArrow } from "lingee-ui";

export default function Hover() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <button type="button" style={{ padding: "6px 12px", borderRadius: 8 }}>
          Hover to view
        </button>
      </PopoverTrigger>
      <PopoverContent className="lg-popover--card" sideOffset={8}>
        <div style={{ padding: "8px 12px", maxWidth: 220 }}>
          The pointer can cross the gap from the trigger into this panel.
        </div>
        <PopoverArrow />
      </PopoverContent>
    </Popover>
  );
}
`;export{c as a,u as i,f as n,s as o,d as r,p as t};