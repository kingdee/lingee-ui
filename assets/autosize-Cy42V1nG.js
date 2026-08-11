import{I as e,R as t,W as n,q as r}from"./i18n-C43t6VQe.js";var i=r(n()),a=t(),o=i.forwardRef(({className:t,style:n,error:r=!1,disabled:o=!1,showCount:s=!1,maxLength:c,value:l,defaultValue:u,onChange:d,onFocus:f,onBlur:p,onPressEnter:m,onKeyDown:h,...g},_)=>{let[v,y]=(0,i.useState)(!1),[b,x]=(0,i.useState)(u?.toString()??``),S=l!==void 0,C=S?l?.toString()??``:b,w=(0,i.useCallback)(e=>{S||x(e.target.value),d?.(e)},[S,d]),T=(0,i.useCallback)(e=>{y(!0),f?.(e)},[f]),E=(0,i.useCallback)(e=>{y(!1),p?.(e)},[p]),D=(0,i.useCallback)(e=>{e.key===`Enter`&&!e.shiftKey&&m?.(e),h?.(e)},[m,h]),O=e(`lg-textarea`,v&&`lg-textarea--focused`,r&&`lg-textarea--error`,o&&`lg-textarea--disabled`,t);return(0,a.jsxs)(`div`,{className:`lg-textarea__wrapper`,style:n,children:[(0,a.jsx)(`div`,{className:O,children:(0,a.jsx)(`textarea`,{ref:_,className:`lg-textarea__inner`,disabled:o,maxLength:c,value:C,onChange:w,onFocus:T,onBlur:E,onKeyDown:D,...g})}),s&&c&&(0,a.jsxs)(`span`,{className:`lg-textarea__count`,children:[C.length,`/`,c]})]})});o.displayName=`Textarea`;function s(){return(0,a.jsx)(o,{placeholder:`Please enter content...`,rows:4})}var c=`import { Textarea } from "lingee-ui";

export default function BasicDemo() {
  return <Textarea placeholder="Please enter content..." rows={4} />;
}
`;function l(){let[e,t]=(0,i.useState)(``);return(0,a.jsx)(o,{placeholder:`Please enter a description`,rows:4,maxLength:200,showCount:!0,value:e,onChange:e=>t(e.target.value)})}var u=`import { useState } from "react";
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
`;function d(){return(0,a.jsx)(o,{placeholder:`Disabled`,rows:4,disabled:!0})}var f=`import { Textarea } from "lingee-ui";

export default function DisabledDemo() {
  return <Textarea placeholder="Disabled" rows={4} disabled />;
}
`;function p(){let[e,t]=(0,i.useState)(``);return(0,a.jsx)(o,{placeholder:`Height adapts as you type`,autoSize:{minRows:2,maxRows:6},value:e,onChange:e=>t(e.target.value)})}var m=`import { useState } from "react";
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
`;export{u as a,s as c,d as i,p as n,l as o,f as r,c as s,m as t};