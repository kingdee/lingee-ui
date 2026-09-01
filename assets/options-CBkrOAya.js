import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{i as t}from"./provider-B__qXksq.js";import{t as n}from"./button-DU-GfdHa.js";var r=e();function i(){return(0,r.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,r.jsx)(n,{onClick:()=>t.success(`Operation succeeded!`),children:`Success`}),(0,r.jsx)(n,{onClick:()=>t.error(`Something went wrong, please retry`),children:`Error`}),(0,r.jsx)(n,{onClick:()=>t.warning(`Heads up, this is a warning`),children:`Warning`}),(0,r.jsx)(n,{onClick:()=>t.info(`This is an informational message`),children:`Info`})]})}var a=`import { toast, Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button onClick={() => toast.success("Operation succeeded!")}>Success</Button>
      <Button onClick={() => toast.error("Something went wrong, please retry")}>Error</Button>
      <Button onClick={() => toast.warning("Heads up, this is a warning")}>Warning</Button>
      <Button onClick={() => toast.info("This is an informational message")}>Info</Button>
    </div>
  );
}
`;function o(){return(0,r.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,r.jsx)(n,{onClick:()=>t.success({content:`Saved successfully`,duration:5e3}),children:`Lasts 5 seconds`}),(0,r.jsx)(n,{onClick:()=>t.warning({content:`Please confirm the action`,duration:0,closable:!0}),children:`No auto dismiss + closable`}),(0,r.jsx)(n,{onClick:()=>t.info({content:`A closable message`,closable:!0}),children:`Closable`})]})}var s=`import { toast, Button } from "lingee-ui";

export default function OptionsDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button
        onClick={() =>
          toast.success({ content: "Saved successfully", duration: 5000 })
        }
      >
        Lasts 5 seconds
      </Button>
      <Button
        onClick={() =>
          toast.warning({ content: "Please confirm the action", duration: 0, closable: true })
        }
      >
        No auto dismiss + closable
      </Button>
      <Button
        onClick={() =>
          toast.info({ content: "A closable message", closable: true })
        }
      >
        Closable
      </Button>
    </div>
  );
}
`;export{i,o as n,a as r,s as t};