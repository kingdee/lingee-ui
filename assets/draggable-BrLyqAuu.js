import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./button-BE2IGfnk.js";import{t as i}from"./dialog-BqegPPE2.js";var a=e(t()),o=n();function s(){let[e,t]=(0,a.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{variant:`primary`,onClick:()=>t(!0),children:`Open dialog`}),(0,o.jsx)(i,{open:e,onOpenChange:t,title:`Dialog title`,okText:`OK`,cancelText:`Cancel`,onOk:()=>t(!1),onCancel:()=>t(!1),children:(0,o.jsx)(`p`,{style:{padding:`0 20px`,color:`rgba(0,0,0,0.64)`},children:`This is the dialog content area. You can put anything here.`})})]})}var c=`import { useState } from "react";
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
`;function l(){return(0,o.jsx)(r,{danger:!0,onClick:async()=>{await i.confirm({title:`Confirm delete`,description:`This action cannot be undone. Are you sure you want to delete?`,okText:`Delete`,cancelText:`Cancel`,okDanger:!0})&&console.log(`Delete confirmed`)},children:`Delete`})}var u=`import { Dialog, Button } from "lingee-ui";

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
`;function d(){let[e,t]=(0,a.useState)(460),[n,s]=(0,a.useState)(!1),c=e=>{t(e),s(!0)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,o.jsx)(r,{onClick:()=>c(460),children:`Small (460px)`}),(0,o.jsx)(r,{onClick:()=>c(640),children:`Medium (640px)`}),(0,o.jsx)(r,{onClick:()=>c(720),children:`Large (720px)`})]}),(0,o.jsx)(i,{open:n,onOpenChange:s,title:`Dialog widths`,width:e,okText:`OK`,cancelText:`Cancel`,onOk:()=>s(!1),onCancel:()=>s(!1),children:(0,o.jsxs)(`p`,{style:{padding:`0 20px`,color:`rgba(0,0,0,0.64)`},children:[`Current width is `,e,`px, suitable for different content volumes.`]})})]})}var f=`import { useState } from "react";
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
`;function p(){return(0,o.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,o.jsx)(r,{danger:!0,onClick:async()=>{await i.confirm({title:`Delete project`,description:`This permanently deletes the project and all its data.`,okText:`Delete project`,cancelText:`Cancel`,okDanger:!0})&&console.log(`Project deleted`)},children:`Delete project`}),(0,o.jsx)(r,{danger:!0,onClick:async()=>{await i.confirm({title:`Reset all settings`,description:`Restore all settings to defaults? Your customizations will be lost.`,okText:`Reset`,cancelText:`Cancel`,okDanger:!0})&&console.log(`Settings reset`)},children:`Reset settings`})]})}var m=`import { Dialog, Button } from "lingee-ui";

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
`;function h(){let[e,t]=(0,a.useState)(!1),[n,s]=(0,a.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,o.jsx)(r,{variant:`primary`,onClick:()=>t(!0),children:`Draggable dialog`}),(0,o.jsx)(r,{onClick:()=>s(!0),children:`Custom drag handle`})]}),(0,o.jsx)(i,{open:e,onOpenChange:t,title:`Draggable dialog`,draggable:!0,okText:`OK`,cancelText:`Cancel`,onOk:()=>t(!1),onCancel:()=>t(!1),children:(0,o.jsx)(`p`,{style:{padding:`0 20px`,color:`var(--lg-g-fg-color-black-default)`},children:`Drag the title bar to move the dialog. Double-click it to move back.`})}),(0,o.jsxs)(i,{open:n,onOpenChange:s,width:360,mask:!1,draggable:!0,children:[(0,o.jsx)(`div`,{"data-lg-dialog-drag-handle":!0,style:{padding:`20px 56px 8px 20px`,fontWeight:500,color:`var(--lg-g-fg-color-black-strong)`},children:`Drag here`}),(0,o.jsx)(`p`,{style:{margin:0,padding:`0 20px 20px`,color:`var(--lg-g-fg-color-black-default)`},children:`Without a title bar, mark any element with data-lg-dialog-drag-handle.`})]})]})}var g=`import { useState } from "react";
import { Dialog, Button } from "lingee-ui";

export default function DraggableDemo() {
  const [open, setOpen] = useState(false);
  const [handleOpen, setHandleOpen] = useState(false);

  return (
    <>
      <div style={{ display: "flex", gap: 12 }}>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Draggable dialog
        </Button>
        <Button onClick={() => setHandleOpen(true)}>Custom drag handle</Button>
      </div>

      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Draggable dialog"
        draggable
        okText="OK"
        cancelText="Cancel"
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p style={{ padding: "0 20px", color: "var(--lg-g-fg-color-black-default)" }}>
          Drag the title bar to move the dialog. Double-click it to move back.
        </p>
      </Dialog>

      <Dialog open={handleOpen} onOpenChange={setHandleOpen} width={360} mask={false} draggable>
        <div
          data-lg-dialog-drag-handle
          style={{
            padding: "20px 56px 8px 20px",
            fontWeight: 500,
            color: "var(--lg-g-fg-color-black-strong)",
          }}
        >
          Drag here
        </div>
        <p
          style={{ margin: 0, padding: "0 20px 20px", color: "var(--lg-g-fg-color-black-default)" }}
        >
          Without a title bar, mark any element with data-lg-dialog-drag-handle.
        </p>
      </Dialog>
    </>
  );
}
`;export{f as a,l as c,p as i,c as l,h as n,d as o,m as r,u as s,g as t,s as u};