import{I as e,R as t,W as n,q as r}from"./i18n-DmENUXWN.js";import{t as i}from"./client-CQ86fwun.js";import{n as a}from"./provider-BibnZ_0z.js";import{t as o}from"./ExclamationCircleFill-CEjmRpZ1.js";import{t as s}from"./XLg-FrzAEp-1.js";import{t as c}from"./button-Civ1Cgfe.js";import{a as l,i as u,n as d,r as f,t as p}from"./dist-CbZxtLAN.js";var m=r(n()),h=t(),g=({open:t,onOpenChange:n,width:r=460,height:i,title:o,extra:g,closable:_=!0,footer:v,okText:y,cancelText:b,onOk:x,onCancel:S,okDanger:C=!1,okProps:w,cancelProps:T,modal:E=!1,mask:D=!0,maskClassName:O,destroyOnHidden:k=!0,zIndex:A,maxHeight:j=640,autoHeight:M=!1,className:N,style:P,children:F})=>{let I=a(`Dialog`),[L,R]=(0,m.useState)(t),[z,B]=(0,m.useState)(!1);(0,m.useEffect)(()=>(t?(R(!0),document.body.style.overflow=`hidden`):document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[t]);let V=(0,m.useCallback)(()=>{!t&&k&&R(!1)},[t,k]),H=(0,m.useCallback)(e=>{e||n(!1)},[n]),U=(0,m.useCallback)(async()=>{if(!x){n(!1);return}let e=x();if(e instanceof Promise){B(!0);try{await e}finally{B(!1)}}},[x,n]),W=(0,m.useCallback)(()=>{S?.(),n(!1)},[S,n]),G=M?void 0:typeof j==`number`?j-68:`calc(${j} - 68px)`,K=M?typeof j==`number`?`${j}px`:j:void 0,q=typeof r==`number`?`${r}px`:r,J=i==null?void 0:typeof i==`number`?`${i}px`:i;return(0,h.jsx)(p,{open:t,onOpenChange:H,modal:!1,children:(0,h.jsxs)(u,{forceMount:void 0,children:[L&&D&&(0,h.jsx)(`div`,{className:e(`lg-dialog__overlay`,!t&&`lg-dialog__overlay--closing`,O),style:A?{zIndex:A}:void 0,onClick:()=>{E||n(!1)}}),(0,h.jsx)(f,{className:e(`lg-dialog__content`,N),style:{...P,width:q,maxWidth:q,...J?{height:J}:{},...K?{maxHeight:K}:{},...A?{zIndex:A+1}:{}},onAnimationEnd:V,onInteractOutside:e=>{e.preventDefault()},onPointerDownOutside:e=>{e.preventDefault()},onFocusOutside:e=>{e.preventDefault()},children:L&&(0,h.jsxs)(h.Fragment,{children:[_&&(0,h.jsx)(d,{asChild:!0,"aria-label":I.close,children:(0,h.jsx)(c,{className:`lg-dialog__close`,variant:`text`,size:`lg`,icon:(0,h.jsx)(s,{size:18})})}),(o||g)&&(0,h.jsxs)(`div`,{className:`lg-dialog__header`,children:[o&&(0,h.jsx)(l,{className:`lg-dialog__title`,asChild:typeof o!=`string`,children:typeof o==`string`?(0,h.jsx)(`span`,{children:o}):o}),g&&(0,h.jsx)(`div`,{className:`lg-dialog__header-actions`,children:g})]}),(0,h.jsx)(`div`,{className:`lg-dialog__body`,style:G===void 0?void 0:{maxHeight:G},children:F}),v==null?y||b?(0,h.jsxs)(`div`,{className:`lg-dialog__footer`,children:[b&&(0,h.jsx)(c,{variant:`text`,size:`lg`,onClick:W,...T,children:b}),y&&(0,h.jsx)(c,{variant:`primary`,size:`lg`,danger:C,loading:z,onClick:U,...w,children:y})]}):null:(0,h.jsx)(`div`,{className:`lg-dialog__footer`,children:v})]})})]})})};g.displayName=`Dialog`;var _=i(),v=null,y=null;function b(){v&&=(v.unmount(),null),y&&=(y.remove(),null)}function x({title:e,description:t,okText:n,cancelText:r,okDanger:i=!1,okProps:a,cancelProps:s,icon:l,content:u,contentRender:d,width:f=320,footer:p,onOk:_,onCancel:v,onResult:y,...x}){let[S,C]=m.useState(!0),[w,T]=m.useState(!1),[E,D]=m.useState(a?.disabled??!1),O=()=>{C(!1),v?.(),y(!1),setTimeout(b,200)},k=async()=>{if(_){let e=_();if(e instanceof Promise){T(!0);try{await e}catch{T(!1);return}T(!1)}}C(!1),y(!0),setTimeout(b,200)};return(0,h.jsx)(g,{...x,open:S,onOpenChange:e=>{e||O()},width:f,closable:x.closable??!1,modal:x.modal??!0,footer:p===void 0?(0,h.jsxs)(h.Fragment,{children:[r&&(0,h.jsx)(c,{variant:`text`,size:`lg`,...s,onClick:O,children:r}),n&&(0,h.jsx)(c,{variant:`primary`,size:`lg`,danger:i,loading:w,...a,disabled:E,onClick:k,children:n})]}):p,children:d?d({setOkDisabled:D}):u??(0,h.jsxs)(`div`,{className:`lg-dialog-confirm`,children:[(0,h.jsx)(`span`,{className:`lg-dialog-confirm__icon`,children:l??(0,h.jsx)(o,{className:`lg-dialog-confirm__icon-default lg-dialog-confirm__icon-default--${i?`danger`:`primary`}`})}),(0,h.jsxs)(`div`,{className:`lg-dialog-confirm__content`,children:[e&&(0,h.jsx)(`span`,{className:`lg-dialog-confirm__title`,children:e}),t&&(0,h.jsx)(`p`,{className:`lg-dialog-confirm__desc`,children:t})]})]})})}function S(e){return b(),new Promise(t=>{y=document.createElement(`div`),y.className=`lg-dialog-confirm-container`,document.body.appendChild(y),v=(0,_.createRoot)(y),v.render((0,h.jsx)(x,{...e,onResult:t}))})}function C(){b()}var w=g;w.confirm=S,w.closeConfirm=C;function T(){let[e,t]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{variant:`primary`,onClick:()=>t(!0),children:`Open dialog`}),(0,h.jsx)(w,{open:e,onOpenChange:t,title:`Dialog title`,okText:`OK`,cancelText:`Cancel`,onOk:()=>t(!1),onCancel:()=>t(!1),children:(0,h.jsx)(`p`,{style:{padding:`0 20px`,color:`rgba(0,0,0,0.64)`},children:`This is the dialog content area. You can put anything here.`})})]})}var E=`import { useState } from "react";
import { Dialog, Button } from "lingee-ui";

export default function BasicDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Dialog title"
        okText="OK"
        cancelText="Cancel"
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p style={{ padding: "0 20px", color: "rgba(0,0,0,0.64)" }}>
          This is the dialog content area. You can put anything here.
        </p>
      </Dialog>
    </>
  );
}
`;function D(){return(0,h.jsx)(c,{danger:!0,onClick:async()=>{await w.confirm({title:`Confirm delete`,description:`This action cannot be undone. Are you sure you want to delete?`,okText:`Delete`,cancelText:`Cancel`,okDanger:!0})&&console.log(`Delete confirmed`)},children:`Delete`})}var O=`import { Dialog, Button } from "lingee-ui";

export default function ConfirmDemo() {
  const handleDelete = async () => {
    const confirmed = await Dialog.confirm({
      title: "Confirm delete",
      description: "This action cannot be undone. Are you sure you want to delete?",
      okText: "Delete",
      cancelText: "Cancel",
      okDanger: true,
    });
    if (confirmed) {
      console.log("Delete confirmed");
    }
  };

  return (
    <Button danger onClick={handleDelete}>
      Delete
    </Button>
  );
}
`;function k(){let[e,t]=(0,m.useState)(460),[n,r]=(0,m.useState)(!1),i=e=>{t(e),r(!0)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,h.jsx)(c,{onClick:()=>i(460),children:`Small (460px)`}),(0,h.jsx)(c,{onClick:()=>i(640),children:`Medium (640px)`}),(0,h.jsx)(c,{onClick:()=>i(720),children:`Large (720px)`})]}),(0,h.jsx)(w,{open:n,onOpenChange:r,title:`Dialog widths`,width:e,okText:`OK`,cancelText:`Cancel`,onOk:()=>r(!1),onCancel:()=>r(!1),children:(0,h.jsxs)(`p`,{style:{padding:`0 20px`,color:`rgba(0,0,0,0.64)`},children:[`Current width is `,e,`px, suitable for different content volumes.`]})})]})}var A=`import { useState } from "react";
import { Dialog, Button } from "lingee-ui";

export default function SizesDemo() {
  const [width, setWidth] = useState<number>(460);
  const [open, setOpen] = useState(false);

  const openDialog = (w: number) => {
    setWidth(w);
    setOpen(true);
  };

  return (
    <>
      <div style={{ display: "flex", gap: 12 }}>
        <Button onClick={() => openDialog(460)}>Small (460px)</Button>
        <Button onClick={() => openDialog(640)}>Medium (640px)</Button>
        <Button onClick={() => openDialog(720)}>Large (720px)</Button>
      </div>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Dialog widths"
        width={width}
        okText="OK"
        cancelText="Cancel"
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p style={{ padding: "0 20px", color: "rgba(0,0,0,0.64)" }}>
          Current width is {width}px, suitable for different content volumes.
        </p>
      </Dialog>
    </>
  );
}
`;function j(){return(0,h.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,h.jsx)(c,{danger:!0,onClick:async()=>{await w.confirm({title:`Delete project`,description:`This permanently deletes the project and all its data.`,okText:`Delete project`,cancelText:`Cancel`,okDanger:!0})&&console.log(`Project deleted`)},children:`Delete project`}),(0,h.jsx)(c,{danger:!0,onClick:async()=>{await w.confirm({title:`Reset all settings`,description:`Restore all settings to defaults? Your customizations will be lost.`,okText:`Reset`,cancelText:`Cancel`,okDanger:!0})&&console.log(`Settings reset`)},children:`Reset settings`})]})}var M=`import { Dialog, Button } from "lingee-ui";

export default function DangerConfirmDemo() {
  const handleDelete = async () => {
    const confirmed = await Dialog.confirm({
      title: "Delete project",
      description: "This permanently deletes the project and all its data.",
      okText: "Delete project",
      cancelText: "Cancel",
      okDanger: true,
    });
    if (confirmed) {
      console.log("Project deleted");
    }
  };

  const handleReset = async () => {
    const confirmed = await Dialog.confirm({
      title: "Reset all settings",
      description: "Restore all settings to defaults? Your customizations will be lost.",
      okText: "Reset",
      cancelText: "Cancel",
      okDanger: true,
    });
    if (confirmed) {
      console.log("Settings reset");
    }
  };

  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button danger onClick={handleDelete}>
        Delete project
      </Button>
      <Button danger onClick={handleReset}>
        Reset settings
      </Button>
    </div>
  );
}
`;export{O as a,T as c,k as i,j as n,D as o,A as r,E as s,M as t};