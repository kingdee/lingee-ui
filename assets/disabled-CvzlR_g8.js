import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./slider-BtCRR4ft.js";var i=e(t()),a=n();function o(){let[e,t]=(0,i.useState)([50]);return(0,a.jsxs)(`div`,{style:{width:300},children:[(0,a.jsx)(r,{value:e,onChange:t}),(0,a.jsxs)(`p`,{style:{marginTop:12,fontSize:14,color:`#666`},children:[`Current value: `,e[0]]})]})}var s=`import { useState } from "react";
import { Slider } from "lingee-ui";

export default function BasicDemo() {
  const [value, setValue] = useState([50]);

  return (
    <div style={{ width: 300 }}>
      <Slider value={value} onChange={setValue} />
      <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
        Current value: {value[0]}
      </p>
    </div>
  );
}
`;function c(){let[e,t]=(0,i.useState)([20,80]);return(0,a.jsxs)(`div`,{style:{width:300},children:[(0,a.jsx)(r,{value:e,onChange:t}),(0,a.jsxs)(`p`,{style:{marginTop:12,fontSize:14,color:`#666`},children:[`Range: `,e[0],` - `,e[1]]})]})}var l=`import { useState } from "react";
import { Slider } from "lingee-ui";

export default function RangeDemo() {
  const [value, setValue] = useState([20, 80]);

  return (
    <div style={{ width: 300 }}>
      <Slider value={value} onChange={setValue} />
      <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
        Range: {value[0]} - {value[1]}
      </p>
    </div>
  );
}
`;function u(){return(0,a.jsx)(`div`,{style:{width:300},children:(0,a.jsx)(r,{defaultValue:[40],disabled:!0})})}var d=`import { Slider } from "lingee-ui";

export default function DisabledDemo() {
  return (
    <div style={{ width: 300 }}>
      <Slider defaultValue={[40]} disabled />
    </div>
  );
}
`;export{s as a,c as i,u as n,o,l as r,d as t};