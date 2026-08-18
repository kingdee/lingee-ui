import{z as e}from"./i18n-B4Rqn8un.js";import{n as t,t as n}from"./checkbox-CoYLagEX.js";var r=e();function i(){return(0,r.jsx)(n,{defaultChecked:!0,children:`I agree to the terms of service`})}var a=`import { Checkbox } from "lingee-ui";

export default function BasicDemo() {
  return <Checkbox defaultChecked>I agree to the terms of service</Checkbox>;
}
`;function o(){return(0,r.jsxs)(t,{defaultValue:[`apple`,`orange`],children:[(0,r.jsx)(n,{value:`apple`,children:`Apple`}),(0,r.jsx)(n,{value:`banana`,children:`Banana`}),(0,r.jsx)(n,{value:`orange`,children:`Orange`})]})}var s=`import { Checkbox, CheckboxGroup } from "lingee-ui";

export default function GroupDemo() {
  return (
    <CheckboxGroup defaultValue={["apple", "orange"]}>
      <Checkbox value="apple">Apple</Checkbox>
      <Checkbox value="banana">Banana</Checkbox>
      <Checkbox value="orange">Orange</Checkbox>
    </CheckboxGroup>
  );
}
`;function c(){return(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,r.jsx)(n,{disabled:!0,children:`Unchecked disabled`}),(0,r.jsx)(n,{checked:!0,disabled:!0,children:`Checked disabled`})]})}var l=`import { Checkbox } from "lingee-ui";

export default function DisabledDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Checkbox disabled>Unchecked disabled</Checkbox>
      <Checkbox checked disabled>Checked disabled</Checkbox>
    </div>
  );
}
`;export{a,o as i,c as n,i as o,s as r,l as t};