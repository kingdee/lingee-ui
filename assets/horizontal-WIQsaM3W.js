import{z as e}from"./i18n-f4fS4CFJ.js";import{n as t,t as n}from"./radio-S3gprZJ4.js";var r=e();function i(){return(0,r.jsxs)(n,{defaultValue:`a`,children:[(0,r.jsx)(t,{value:`a`,children:`Option A`}),(0,r.jsx)(t,{value:`b`,children:`Option B`}),(0,r.jsx)(t,{value:`c`,children:`Option C`})]})}var a=`import { RadioGroup, RadioItem } from "lingee-ui";

export default function BasicDemo() {
  return (
    <RadioGroup defaultValue="a">
      <RadioItem value="a">Option A</RadioItem>
      <RadioItem value="b">Option B</RadioItem>
      <RadioItem value="c">Option C</RadioItem>
    </RadioGroup>
  );
}
`;function o(){return(0,r.jsxs)(n,{defaultValue:`a`,disabled:!0,children:[(0,r.jsx)(t,{value:`a`,children:`Option A`}),(0,r.jsx)(t,{value:`b`,children:`Option B`}),(0,r.jsx)(t,{value:`c`,children:`Option C`})]})}var s=`import { RadioGroup, RadioItem } from "lingee-ui";

export default function DisabledDemo() {
  return (
    <RadioGroup defaultValue="a" disabled>
      <RadioItem value="a">Option A</RadioItem>
      <RadioItem value="b">Option B</RadioItem>
      <RadioItem value="c">Option C</RadioItem>
    </RadioGroup>
  );
}
`;function c(){return(0,r.jsxs)(n,{defaultValue:`a`,orientation:`horizontal`,children:[(0,r.jsx)(t,{value:`a`,children:`Option A`}),(0,r.jsx)(t,{value:`b`,children:`Option B`}),(0,r.jsx)(t,{value:`c`,children:`Option C`})]})}var l=`import { RadioGroup, RadioItem } from "lingee-ui";

export default function HorizontalDemo() {
  return (
    <RadioGroup defaultValue="a" orientation="horizontal">
      <RadioItem value="a">Option A</RadioItem>
      <RadioItem value="b">Option B</RadioItem>
      <RadioItem value="c">Option C</RadioItem>
    </RadioGroup>
  );
}
`;export{a,o as i,c as n,i as o,s as r,l as t};