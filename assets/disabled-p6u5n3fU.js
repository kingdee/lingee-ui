import{I as e,R as t,W as n,q as r}from"./i18n-C43t6VQe.js";var i=r(n()),a=t(),o=i.forwardRef(({checked:t,defaultChecked:n=!1,size:r=`md`,disabled:o=!1,onChange:c,className:l,style:u,id:d,"aria-label":f,...p},m)=>{let[h,g]=(0,i.useState)(n),_=t!==void 0,v=_?t:h,y=s(m,(0,i.useRef)(null)),b=(0,i.useCallback)(()=>{if(o)return;let e=!v;_||g(e),c?.(e)},[o,v,_,c]),x=(0,i.useCallback)(e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),b())},[b]),S=e(`lg-switch`,`lg-switch--${r}`,v&&`lg-switch--checked`,o&&`lg-switch--disabled`,l);return(0,a.jsxs)(`button`,{type:`button`,role:`switch`,"aria-checked":v,"aria-label":f,disabled:o,className:S,style:u,onClick:b,onKeyDown:x,children:[(0,a.jsx)(`input`,{ref:y,type:`checkbox`,id:d,checked:v,disabled:o,className:`lg-switch__input`,tabIndex:-1,onChange:()=>{},...p}),(0,a.jsx)(`span`,{className:`lg-switch__thumb`})]})});o.displayName=`Switch`;function s(...e){return(0,i.useCallback)(t=>{e.forEach(e=>{e&&(typeof e==`function`?e(t):e.current=t)})},e)}function c(){return(0,a.jsx)(o,{defaultChecked:!0})}var l=`import { Switch } from "lingee-ui";

export default function BasicDemo() {
  return <Switch defaultChecked />;
}
`;function u(){return(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,a.jsx)(o,{size:`sm`,defaultChecked:!0}),(0,a.jsx)(o,{size:`md`,defaultChecked:!0}),(0,a.jsx)(o,{size:`lg`,defaultChecked:!0})]})}var d=`import { Switch } from "lingee-ui";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Switch size="sm" defaultChecked />
      <Switch size="md" defaultChecked />
      <Switch size="lg" defaultChecked />
    </div>
  );
}
`;function f(){return(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,a.jsx)(o,{disabled:!0}),(0,a.jsx)(o,{checked:!0,disabled:!0})]})}var p=`import { Switch } from "lingee-ui";

export default function DisabledDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Switch disabled />
      <Switch checked disabled />
    </div>
  );
}
`;export{l as a,u as i,f as n,c as o,d as r,p as t};