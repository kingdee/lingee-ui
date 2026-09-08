import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{t}from"./button-WsNqWjZh.js";import{i as n,n as r,r as i,t as a}from"./popover-CHlYe0-m.js";var o=e();function s(){return(0,o.jsxs)(a,{children:[(0,o.jsx)(n,{children:(0,o.jsx)(t,{children:`Click me`})}),(0,o.jsx)(i,{children:(0,o.jsx)(`p`,{style:{margin:0},children:`This is the content of the popover.`})})]})}var c=`import { Popover, PopoverTrigger, PopoverContent, Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Click me</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p style={{ margin: 0 }}>This is the content of the popover.</p>
      </PopoverContent>
    </Popover>
  );
}
`;function l(){return(0,o.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,o.jsxs)(a,{children:[(0,o.jsx)(n,{children:(0,o.jsx)(t,{children:`Top`})}),(0,o.jsx)(i,{side:`top`,children:(0,o.jsx)(`p`,{style:{margin:0},children:`Content from top`})})]}),(0,o.jsxs)(a,{children:[(0,o.jsx)(n,{children:(0,o.jsx)(t,{children:`Bottom`})}),(0,o.jsx)(i,{side:`bottom`,children:(0,o.jsx)(`p`,{style:{margin:0},children:`Content from bottom`})})]}),(0,o.jsxs)(a,{children:[(0,o.jsx)(n,{children:(0,o.jsx)(t,{children:`Left`})}),(0,o.jsx)(i,{side:`left`,children:(0,o.jsx)(`p`,{style:{margin:0},children:`Content from left`})})]}),(0,o.jsxs)(a,{children:[(0,o.jsx)(n,{children:(0,o.jsx)(t,{children:`Right`})}),(0,o.jsx)(i,{side:`right`,children:(0,o.jsx)(`p`,{style:{margin:0},children:`Content from right`})})]})]})}var u=`import { Popover, PopoverTrigger, PopoverContent, Button } from "lingee-ui";

export default function PlacementDemo() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Popover>
        <PopoverTrigger>
          <Button>Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p style={{ margin: 0 }}>Content from top</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <Button>Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p style={{ margin: 0 }}>Content from bottom</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <Button>Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <p style={{ margin: 0 }}>Content from left</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <Button>Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <p style={{ margin: 0 }}>Content from right</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}
`;function d(){return(0,o.jsxs)(a,{trigger:`hover`,children:[(0,o.jsx)(n,{children:(0,o.jsx)(`button`,{type:`button`,style:{padding:`6px 12px`,borderRadius:8},children:`Hover to view`})}),(0,o.jsxs)(i,{className:`lg-popover--card`,sideOffset:8,children:[(0,o.jsx)(`div`,{style:{padding:`8px 12px`,maxWidth:220},children:`The pointer can cross the gap from the trigger into this panel.`}),(0,o.jsx)(r,{})]})]})}var f=`import { Popover, PopoverTrigger, PopoverContent, PopoverArrow } from "lingee-ui";

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
`;export{c as a,l as i,d as n,s as o,u as r,f as t};