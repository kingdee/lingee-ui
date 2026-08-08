import{A as e,D as t,x as n,y as r}from"./dist-DjLZdxEA.js";import{t as i}from"./DemoBox-DEznk3dE.js";var a=e(t()),o=n(),s=a.forwardRef(({checked:e,defaultChecked:t=!1,size:n=`md`,disabled:i=!1,onChange:s,className:l,style:u,id:d,"aria-label":f,...p},m)=>{let[h,g]=(0,a.useState)(t),_=e!==void 0,v=_?e:h,y=c(m,(0,a.useRef)(null)),b=(0,a.useCallback)(()=>{if(i)return;let e=!v;_||g(e),s?.(e)},[i,v,_,s]),x=(0,a.useCallback)(e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),b())},[b]),S=r(`lg-switch`,`lg-switch--${n}`,v&&`lg-switch--checked`,i&&`lg-switch--disabled`,l);return(0,o.jsxs)(`button`,{type:`button`,role:`switch`,"aria-checked":v,"aria-label":f,disabled:i,className:S,style:u,onClick:b,onKeyDown:x,children:[(0,o.jsx)(`input`,{ref:y,type:`checkbox`,id:d,checked:v,disabled:i,className:`lg-switch__input`,tabIndex:-1,onChange:()=>{},...p}),(0,o.jsx)(`span`,{className:`lg-switch__thumb`})]})});s.displayName=`Switch`;function c(...e){return(0,a.useCallback)(t=>{e.forEach(e=>{e&&(typeof e==`function`?e(t):e.current=t)})},e)}function l(){return(0,o.jsx)(s,{defaultChecked:!0})}var u=`import { Switch } from "lingee-ui";

export default function BasicDemo() {
  return <Switch defaultChecked />;
}
`;function d(){return(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,o.jsx)(s,{size:`sm`,defaultChecked:!0}),(0,o.jsx)(s,{size:`md`,defaultChecked:!0}),(0,o.jsx)(s,{size:`lg`,defaultChecked:!0})]})}var f=`import { Switch } from "lingee-ui";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Switch size="sm" defaultChecked />
      <Switch size="md" defaultChecked />
      <Switch size="lg" defaultChecked />
    </div>
  );
}
`;function p(){return(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,o.jsx)(s,{disabled:!0}),(0,o.jsx)(s,{checked:!0,disabled:!0})]})}var m=`import { Switch } from "lingee-ui";

export default function DisabledDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Switch disabled />
      <Switch checked disabled />
    </div>
  );
}
`,h={title:`Switch 开关`,description:`用于在两个互斥状态之间切换，如启用/禁用。`};function g(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{children:`基本用法`}),`
`,(0,o.jsx)(t.p,{children:`最基本的开关用法。`}),`
`,(0,o.jsx)(i,{source:u,children:(0,o.jsx)(l,{})}),`
`,(0,o.jsx)(t.h2,{children:`三种尺寸`}),`
`,(0,o.jsxs)(t.p,{children:[`提供 `,(0,o.jsx)(t.code,{children:`sm`}),`、`,(0,o.jsx)(t.code,{children:`md`}),`、`,(0,o.jsx)(t.code,{children:`lg`}),` 三种尺寸。`]}),`
`,(0,o.jsx)(i,{source:f,children:(0,o.jsx)(d,{})}),`
`,(0,o.jsx)(t.h2,{children:`禁用状态`}),`
`,(0,o.jsxs)(t.p,{children:[`设置 `,(0,o.jsx)(t.code,{children:`disabled`}),` 禁用开关交互。`]}),`
`,(0,o.jsx)(i,{source:m,children:(0,o.jsx)(p,{})}),`
`,(0,o.jsx)(t.h2,{children:`API`}),`
`,(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:`属性`}),(0,o.jsx)(t.th,{children:`说明`}),(0,o.jsx)(t.th,{children:`类型`}),(0,o.jsx)(t.th,{children:`默认值`})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`checked`})}),(0,o.jsx)(t.td,{children:`开关状态（受控）`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`defaultChecked`})}),(0,o.jsx)(t.td,{children:`默认开关状态（非受控）`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`false`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`onChange`})}),(0,o.jsx)(t.td,{children:`状态变更回调`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`(checked: boolean) => void`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`size`})}),(0,o.jsx)(t.td,{children:`开关尺寸`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`"sm" | "md" | "lg"`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`"md"`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`disabled`})}),(0,o.jsx)(t.td,{children:`禁用状态`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`false`})})]})]})]})]})}function _(e={}){let{wrapper:t}=e.components||{};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}export{_ as default,h as frontmatter};