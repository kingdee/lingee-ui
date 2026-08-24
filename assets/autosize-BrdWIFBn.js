import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./textarea-PAWQ-03O.js";var i=n();function a(){return(0,i.jsx)(r,{placeholder:`Please enter content...`,rows:4})}var o=`import { Textarea } from "lingee-ui";

export default function BasicDemo() {
  return <Textarea placeholder="Please enter content..." rows={4} />;
}
`,s=e(t());function c(){let[e,t]=(0,s.useState)(``);return(0,i.jsx)(r,{placeholder:`Please enter a description`,rows:4,maxLength:200,showCount:!0,value:e,onChange:e=>t(e.target.value)})}var l=`import { useState } from "react";
import { Textarea } from "lingee-ui";

export default function CountDemo() {
  const [value, setValue] = useState("");

  return (
    <Textarea
      placeholder="Please enter a description"
      rows={4}
      maxLength={200}
      showCount
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
`;function u(){return(0,i.jsx)(r,{placeholder:`Disabled`,rows:4,disabled:!0})}var d=`import { Textarea } from "lingee-ui";

export default function DisabledDemo() {
  return <Textarea placeholder="Disabled" rows={4} disabled />;
}
`;function f(){let[e,t]=(0,s.useState)(``);return(0,i.jsx)(r,{placeholder:`Height adapts as you type`,autoSize:{minRows:2,maxRows:6},value:e,onChange:e=>t(e.target.value)})}var p=`import { useState } from "react";
import { Textarea } from "lingee-ui";

export default function AutosizeDemo() {
  const [value, setValue] = useState("");

  return (
    <Textarea
      placeholder="Height adapts as you type"
      autoSize={{ minRows: 2, maxRows: 6 }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
`;export{l as a,a as c,u as i,f as n,c as o,d as r,o as s,p as t};