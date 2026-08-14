import{z as e}from"./i18n-B4Rqn8un.js";import{t}from"./button-CAlrLsXM.js";import{n,r,t as i}from"./popover-CZTlAX2p.js";var a=e();function o(){return(0,a.jsxs)(i,{children:[(0,a.jsx)(r,{children:(0,a.jsx)(t,{children:`Click me`})}),(0,a.jsx)(n,{children:(0,a.jsx)(`p`,{style:{margin:0},children:`This is the content of the popover.`})})]})}var s=`import { Popover, PopoverTrigger, PopoverContent, Button } from "lingee-ui";

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
`;function c(){return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,a.jsxs)(i,{children:[(0,a.jsx)(r,{children:(0,a.jsx)(t,{children:`Top`})}),(0,a.jsx)(n,{side:`top`,children:(0,a.jsx)(`p`,{style:{margin:0},children:`Content from top`})})]}),(0,a.jsxs)(i,{children:[(0,a.jsx)(r,{children:(0,a.jsx)(t,{children:`Bottom`})}),(0,a.jsx)(n,{side:`bottom`,children:(0,a.jsx)(`p`,{style:{margin:0},children:`Content from bottom`})})]}),(0,a.jsxs)(i,{children:[(0,a.jsx)(r,{children:(0,a.jsx)(t,{children:`Left`})}),(0,a.jsx)(n,{side:`left`,children:(0,a.jsx)(`p`,{style:{margin:0},children:`Content from left`})})]}),(0,a.jsxs)(i,{children:[(0,a.jsx)(r,{children:(0,a.jsx)(t,{children:`Right`})}),(0,a.jsx)(n,{side:`right`,children:(0,a.jsx)(`p`,{style:{margin:0},children:`Content from right`})})]})]})}var l=`import { Popover, PopoverTrigger, PopoverContent, Button } from "lingee-ui";

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
`;export{o as i,c as n,s as r,l as t};