import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{t}from"./alert-CIxaBMi3.js";var n=e();function r(){return(0,n.jsx)(t,{type:`info`,children:`This is an informational message.`})}var i=`import { Alert } from "lingee-ui";

export default function BasicDemo() {
  return <Alert type="info">This is an informational message.</Alert>;
}
`;function a(){return(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,n.jsx)(t,{type:`info`,children:`This is an info message.`}),(0,n.jsx)(t,{type:`success`,children:`This is a success message.`}),(0,n.jsx)(t,{type:`warning`,children:`This is a warning message.`}),(0,n.jsx)(t,{type:`error`,children:`This is an error message.`})]})}var o=`import { Alert } from "lingee-ui";

export default function TypesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Alert type="info">This is an info message.</Alert>
      <Alert type="success">This is a success message.</Alert>
      <Alert type="warning">This is a warning message.</Alert>
      <Alert type="error">This is an error message.</Alert>
    </div>
  );
}
`;function s(){return(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,n.jsx)(t,{type:`info`,title:`Note`,children:`This is a supporting description that gives users more context.`}),(0,n.jsx)(t,{type:`success`,title:`Success`,children:`Your changes have been saved.`})]})}var c=`import { Alert } from "lingee-ui";

export default function WithTitleDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Alert type="info" title="Note">
        This is a supporting description that gives users more context.
      </Alert>
      <Alert type="success" title="Success">
        Your changes have been saved.
      </Alert>
    </div>
  );
}
`;function l(){return(0,n.jsx)(t,{type:`warning`,closable:!1,children:`This alert cannot be closed.`})}var u=`import { Alert } from "lingee-ui";

export default function NotClosableDemo() {
  return <Alert type="warning" closable={false}>This alert cannot be closed.</Alert>;
}
`;function d(){return(0,n.jsx)(t,{type:`info`,icon:!1,children:`An alert without an icon.`})}var f=`import { Alert } from "lingee-ui";

export default function NoIconDemo() {
  return <Alert type="info" icon={false}>An alert without an icon.</Alert>;
}
`;export{c as a,a as c,l as i,i as l,d as n,s as o,u as r,o as s,f as t,r as u};