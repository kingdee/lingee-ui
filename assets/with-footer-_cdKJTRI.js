import{I as e,R as t,W as n,q as r}from"./i18n-DmENUXWN.js";import{n as i}from"./provider-BibnZ_0z.js";import{t as a}from"./XLg-FrzAEp-1.js";import{t as o}from"./button-Civ1Cgfe.js";import{a as s,i as c,n as l,r as u,t as d}from"./dist-CbZxtLAN.js";var f=r(n()),p=t(),m=({open:t,onOpenChange:n,placement:r=`right`,size:m=380,title:h,extra:g,closable:_=!0,footer:v,modal:y=!1,mask:b=!0,destroyOnHidden:x=!0,zIndex:S,className:C,style:w,children:T})=>{let E=i(`Drawer`),[D,O]=(0,f.useState)(t);(0,f.useEffect)(()=>(t?(O(!0),document.body.style.overflow=`hidden`):document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[t]);let k=(0,f.useCallback)(()=>{!t&&x&&O(!1)},[t,x]),A=(0,f.useCallback)(e=>{e||n(!1)},[n]),j=r===`left`||r===`right`,M=typeof m==`number`?`${m}px`:m,N=j?{width:M,maxWidth:`100vw`}:{height:M,maxHeight:`100vh`};return(0,p.jsx)(d,{open:t,onOpenChange:A,modal:!1,children:(0,p.jsxs)(c,{forceMount:void 0,children:[D&&b&&(0,p.jsx)(`div`,{className:e(`lg-drawer__overlay`,!t&&`lg-drawer__overlay--closing`),style:S?{zIndex:S}:void 0,onClick:()=>{y||n(!1)}}),(0,p.jsx)(u,{className:e(`lg-drawer__content`,`lg-drawer__content--${r}`,C),style:{...N,...w,...S?{zIndex:S+1}:{}},"data-placement":r,onAnimationEnd:k,onInteractOutside:e=>{e.preventDefault()},onPointerDownOutside:e=>{e.preventDefault()},onFocusOutside:e=>{e.preventDefault()},children:D&&(0,p.jsxs)(p.Fragment,{children:[(h||g||_)&&(0,p.jsxs)(`div`,{className:`lg-drawer__header`,children:[h&&(0,p.jsx)(s,{className:`lg-drawer__title`,asChild:typeof h!=`string`,children:typeof h==`string`?(0,p.jsx)(`span`,{children:h}):h}),(0,p.jsxs)(`div`,{className:`lg-drawer__header-actions`,children:[g,_&&(0,p.jsx)(l,{asChild:!0,"aria-label":E.close,children:(0,p.jsx)(o,{className:`lg-drawer__close`,variant:`text`,size:`lg`,icon:(0,p.jsx)(a,{size:18})})})]})]}),(0,p.jsx)(`div`,{className:`lg-drawer__body`,children:T}),v!=null&&(0,p.jsx)(`div`,{className:`lg-drawer__footer`,children:v})]})})]})})};m.displayName=`Drawer`;function h(){let[e,t]=(0,f.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{onClick:()=>t(!0),children:`Open drawer`}),(0,p.jsxs)(m,{open:e,onOpenChange:t,title:`Basic drawer`,children:[(0,p.jsx)(`p`,{children:`This is the drawer content area.`}),(0,p.jsx)(`p`,{children:`Click the mask or the close button to dismiss it.`})]})]})}var g=`import { useState } from "react";
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
`;function _(){let[e,t]=(0,f.useState)(!1),[n,r]=(0,f.useState)(`right`),i=e=>{r(e),t(!0)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,p.jsx)(o,{onClick:()=>i(`left`),children:`Left`}),(0,p.jsx)(o,{onClick:()=>i(`right`),children:`Right`}),(0,p.jsx)(o,{onClick:()=>i(`top`),children:`Top`}),(0,p.jsx)(o,{onClick:()=>i(`bottom`),children:`Bottom`})]}),(0,p.jsx)(m,{open:e,onOpenChange:t,title:`Drawer from ${n}`,placement:n,children:(0,p.jsxs)(`p`,{children:[`The drawer slides in from the `,n,`.`]})})]})}var v=`import { useState } from "react";
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
`;function y(){let[e,t]=(0,f.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{onClick:()=>t(!0),children:`Open drawer with footer`}),(0,p.jsxs)(m,{open:e,onOpenChange:t,title:`Edit profile`,footer:(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,p.jsx)(o,{onClick:()=>t(!1),children:`Cancel`}),(0,p.jsx)(o,{variant:`primary`,onClick:()=>t(!1),children:`Save`})]}),children:[(0,p.jsx)(`p`,{children:`A drawer with a footer action bar, useful for form editing.`}),(0,p.jsx)(`p`,{children:`The footer stays fixed so users can confirm or cancel easily.`})]})]})}var b=`import { useState } from "react";
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
`;export{g as a,_ as i,y as n,h as o,v as r,b as t};