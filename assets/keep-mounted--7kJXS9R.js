import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{j as r}from"./tooltip-DJNKKjxB.js";import{n as i}from"./provider-ViaVeHt0.js";import{t as a}from"./button-BE2IGfnk.js";import{t as o}from"./XLg-B7EiDI5m.js";import{a as s,i as c,n as l,r as u,t as d}from"./dist-DfMe8MU3.js";import{t as f}from"./checkbox-wAKJ5ym-.js";var p=e(t()),m=n(),h=({open:e,onOpenChange:t,placement:n=`right`,size:f=380,title:h,extra:g,closable:_=!0,footer:v,modal:y=!1,mask:b=!0,destroyOnHidden:x=!0,zIndex:S,className:C,style:w,children:T})=>{let E=i(`Drawer`),[D,O]=(0,p.useState)(e),[k,A]=(0,p.useState)(e),[j,M]=(0,p.useState)(!e),N=(0,p.useRef)(null),P=!x&&k,F=P&&j;(0,p.useEffect)(()=>(e?(O(!0),A(!0),M(!1),document.body.style.overflow=`hidden`):document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[e]),(0,p.useLayoutEffect)(()=>{if(e||!P)return;let t=N.current,n=t?getComputedStyle(t).animationName:``;(!n||n===`none`)&&M(!0)},[e,P]);let I=(0,p.useCallback)(t=>{e||t.target!==t.currentTarget||(x?O(!1):M(!0))},[e,x]),L=(0,p.useCallback)(n=>{!n&&e&&t(!1)},[t,e]),R=n===`left`||n===`right`,z=typeof f==`number`?`${f}px`:f,B=R?{width:z,maxWidth:`100vw`}:{height:z,maxHeight:`100vh`};return(0,m.jsx)(d,{open:e,onOpenChange:L,modal:!1,children:(0,m.jsxs)(c,{forceMount:P||void 0,children:[D&&b&&!F&&(0,m.jsx)(`div`,{className:r(`lg-drawer__overlay`,!e&&`lg-drawer__overlay--closing`),style:S?{zIndex:S}:void 0,onClick:()=>{y||t(!1)}}),(0,m.jsx)(u,{ref:N,className:r(`lg-drawer__content`,`lg-drawer__content--${n}`,F&&`lg-drawer__content--hidden`,C),style:{...B,...w,...S?{zIndex:S+1}:{}},"data-placement":n,onAnimationEnd:I,onInteractOutside:e=>{e.preventDefault()},onPointerDownOutside:e=>{e.preventDefault()},onFocusOutside:e=>{e.preventDefault()},children:D&&(0,m.jsxs)(m.Fragment,{children:[(h||g||_)&&(0,m.jsxs)(`div`,{className:`lg-drawer__header`,children:[h&&(0,m.jsx)(s,{className:`lg-drawer__title`,asChild:typeof h!=`string`,children:typeof h==`string`?(0,m.jsx)(`span`,{children:h}):h}),(0,m.jsxs)(`div`,{className:`lg-drawer__header-actions`,children:[g,_&&(0,m.jsx)(l,{asChild:!0,"aria-label":E.close,children:(0,m.jsx)(a,{className:`lg-drawer__close`,variant:`text`,size:`lg`,icon:(0,m.jsx)(o,{size:18})})})]})]}),(0,m.jsx)(`div`,{className:`lg-drawer__body`,children:T}),v!=null&&(0,m.jsx)(`div`,{className:`lg-drawer__footer`,children:v})]})})]})})};h.displayName=`Drawer`;function g(){let[e,t]=(0,p.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{onClick:()=>t(!0),children:`Open drawer`}),(0,m.jsxs)(h,{open:e,onOpenChange:t,title:`Basic drawer`,children:[(0,m.jsx)(`p`,{children:`This is the drawer content area.`}),(0,m.jsx)(`p`,{children:`Click the mask or the close button to dismiss it.`})]})]})}var _=`import { useState } from "react";
import { Drawer, Button } from "lingee-ui";

export default function BasicDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open drawer</Button>
      <Drawer open={open} onOpenChange={setOpen} title="Basic drawer">
        <p>This is the drawer content area.</p>
        <p>Click the mask or the close button to dismiss it.</p>
      </Drawer>
    </>
  );
}
`;function v(){let[e,t]=(0,p.useState)(!1),[n,r]=(0,p.useState)(`right`),i=e=>{r(e),t(!0)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,m.jsx)(a,{onClick:()=>i(`left`),children:`Left`}),(0,m.jsx)(a,{onClick:()=>i(`right`),children:`Right`}),(0,m.jsx)(a,{onClick:()=>i(`top`),children:`Top`}),(0,m.jsx)(a,{onClick:()=>i(`bottom`),children:`Bottom`})]}),(0,m.jsx)(h,{open:e,onOpenChange:t,title:`Drawer from ${n}`,placement:n,children:(0,m.jsxs)(`p`,{children:[`The drawer slides in from the `,n,`.`]})})]})}var y=`import { useState } from "react";
import { Drawer, Button } from "lingee-ui";

type Placement = "left" | "right" | "top" | "bottom";

export default function PlacementDemo() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<Placement>("right");

  const openDrawer = (p: Placement) => {
    setPlacement(p);
    setOpen(true);
  };

  return (
    <>
      <div style={{ display: "flex", gap: 12 }}>
        <Button onClick={() => openDrawer("left")}>Left</Button>
        <Button onClick={() => openDrawer("right")}>Right</Button>
        <Button onClick={() => openDrawer("top")}>Top</Button>
        <Button onClick={() => openDrawer("bottom")}>Bottom</Button>
      </div>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title={\`Drawer from \${placement}\`}
        placement={placement}
      >
        <p>The drawer slides in from the {placement}.</p>
      </Drawer>
    </>
  );
}
`;function b(){let[e,t]=(0,p.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{onClick:()=>t(!0),children:`Open drawer with footer`}),(0,m.jsxs)(h,{open:e,onOpenChange:t,title:`Edit profile`,footer:(0,m.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,m.jsx)(a,{onClick:()=>t(!1),children:`Cancel`}),(0,m.jsx)(a,{variant:`primary`,onClick:()=>t(!1),children:`Save`})]}),children:[(0,m.jsx)(`p`,{children:`A drawer with a footer action bar, useful for form editing.`}),(0,m.jsx)(`p`,{children:`The footer stays fixed so users can confirm or cancel easily.`})]})]})}var x=`import { useState } from "react";
import { Drawer, Button } from "lingee-ui";

export default function WithFooterDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open drawer with footer</Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Edit profile"
        footer={
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Save
            </Button>
          </div>
        }
      >
        <p>A drawer with a footer action bar, useful for form editing.</p>
        <p>The footer stays fixed so users can confirm or cancel easily.</p>
      </Drawer>
    </>
  );
}
`,S=`<!doctype html>
<html>
  <body style="margin: 16px; font: 14px/22px sans-serif">
    <p>Loaded at <span id="loaded-at"></span></p>
    <input placeholder="Type something, then close and reopen" style="width: 320px" />
    <script>document.getElementById("loaded-at").textContent = new Date().toLocaleTimeString();<\/script>
  </body>
</html>`;function C(){let[e,t]=(0,p.useState)(!1),[n,r]=(0,p.useState)(!0),[i,o]=(0,p.useState)(0);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,m.jsx)(a,{onClick:()=>t(!0),children:`Open drawer`}),(0,m.jsx)(f,{checked:n,onChange:r,children:`Keep mounted after close`}),(0,m.jsxs)(`span`,{style:{fontSize:12,color:`var(--lg-g-fg-color-black-faint)`},children:[`iframe loads: `,i]})]}),(0,m.jsx)(h,{open:e,onOpenChange:e=>{e||t(!1)},placement:`right`,size:`100%`,closable:!1,destroyOnHidden:!n,style:{borderRadius:0},children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,height:`100%`},children:[(0,m.jsx)(`div`,{children:(0,m.jsx)(a,{onClick:()=>t(!1),children:`Close`})}),(0,m.jsx)(`iframe`,{title:`Embedded page`,srcDoc:S,onLoad:()=>o(e=>e+1),style:{flex:1,border:`none`}})]})},String(n))]})}var w=`import { useState } from "react";
import { Button, Checkbox, Drawer } from "lingee-ui";

// 内嵌页面的输入内容与加载时间只会在页面重新加载时丢失，用来观察关闭后会话是否保留
const FRAME_DOCUMENT = \`<!doctype html>
<html>
  <body style="margin: 16px; font: 14px/22px sans-serif">
    <p>Loaded at <span id="loaded-at"></span></p>
    <input placeholder="Type something, then close and reopen" style="width: 320px" />
    <script>document.getElementById("loaded-at").textContent = new Date().toLocaleTimeString();<\/script>
  </body>
</html>\`;

export default function KeepMountedDemo() {
  const [open, setOpen] = useState(false);
  const [keepMounted, setKeepMounted] = useState(true);
  const [loadCount, setLoadCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
        <Checkbox checked={keepMounted} onChange={setKeepMounted}>
          Keep mounted after close
        </Checkbox>
        <span style={{ fontSize: 12, color: "var(--lg-g-fg-color-black-faint)" }}>
          iframe loads: {loadCount}
        </span>
      </div>
      <Drawer
        // 切换模式时重建抽屉，避免沿用上一种模式已挂载的内容
        key={String(keepMounted)}
        open={open}
        onOpenChange={(next) => {
          if (!next) setOpen(false);
        }}
        placement="right"
        size="100%"
        closable={false}
        destroyOnHidden={!keepMounted}
        style={{ borderRadius: 0 }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12, height: "100%" }}>
          <div>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </div>
          <iframe
            title="Embedded page"
            srcDoc={FRAME_DOCUMENT}
            onLoad={() => setLoadCount((count) => count + 1)}
            style={{ flex: 1, border: "none" }}
          />
        </div>
      </Drawer>
    </>
  );
}
`;export{y as a,g as c,b as i,C as n,v as o,x as r,_ as s,w as t};