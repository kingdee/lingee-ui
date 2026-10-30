import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{j as r,r as i}from"./tooltip-DJNKKjxB.js";import{n as a}from"./provider-ViaVeHt0.js";import{t as o}from"./ChevronRight-B_1Kogus.js";import{t as s}from"./button-BE2IGfnk.js";import{i as c,r as l,t as u}from"./popover-Bn-puzws.js";import{t as ee}from"./empty-Crrpg7I8.js";import{t as te}from"./ellipsis-tooltip-BWbEJOH7.js";import{t as d}from"./input-CHscQFzF.js";import{t as f}from"./dialog-BmYsK6tY.js";import{t as p}from"./style-8aFUjQwH.js";var m=e(t()),h=n(),g=()=>{},_=[],v=346,y=e=>!!e.children?.length;function b(e,t){let n=[],r=e;for(let e of t){let t=r?.find(t=>t.value===e);if(!t)break;n.push(t),r=t.children}return n}function x(e){let t=e.findIndex(e=>!e.disabled);return t===-1?0:t}var S=m.forwardRef((e,t)=>{let{options:n,value:s,defaultValue:d,onChange:f,placeholder:S,disabled:C=!1,error:w=!1,allowClear:T=!1,size:E=`md`,separator:D=` / `,notFoundContent:O,dropdown:k,className:A,style:j}=e,M=a(`Cascader`),[N,P]=(0,m.useState)(!1),[F,I]=(0,m.useState)(d??_),L=(0,m.useRef)(null),R=(0,m.useRef)(null),z=`value`in e,B=(z?s:F)??_,[V,H]=(0,m.useState)(B),U=(0,m.useMemo)(()=>b(n,B),[n,B]),W=B.join(`\0`),G=(0,m.useMemo)(()=>B.length>0?[W]:[],[B.length,W]),ne=(0,m.useMemo)(()=>B.length>0?[{value:W,label:(0,h.jsx)(h.Fragment,{children:B.map((e,t)=>(0,h.jsxs)(m.Fragment,{children:[t>0&&D,U[t]?.label??e]},`${t}-${e}`))})}]:[],[B,U,D,W]),K=(0,m.useMemo)(()=>{let e=[n],t=n;for(let n of V){let r=t.find(e=>e.value===n);if(!r?.children?.length)break;t=r.children,e.push(t)}return e},[n,V]),q=(0,m.useCallback)(e=>{z||I(e),f?.(e,b(n,e))},[z,f,n]),J=(0,m.useCallback)(e=>{C||(e&&H(B),P(e))},[C,B]),Y=(e,t)=>{((R.current?.querySelectorAll(`.lg-cascader__menu`)[e])?.children[t])?.focus()},X={maxHeight:`min(calc(var(--radix-popover-content-available-height, 70vh) - 2px), ${k?.maxHeight??v}px)`},Z=k?.container,re=Z?()=>Z:void 0,Q=(e,t)=>{if(e.disabled)return!1;let n=[...V.slice(0,t),e.value];return y(e)?(H(n),!0):(q(n),P(!1),!1)},$=(e,t)=>{Q(e,t)&&requestAnimationFrame(()=>Y(t+1,x(e.children)))},ie=(e,t)=>{let n=K[t],r=Number(e.target.closest(`[data-index]`)?.getAttribute(`data-index`)??-1),i=n[r],a=e=>{for(let i=1;i<=n.length;i+=1){let a=(r+e*i+n.length)%n.length;if(!n[a].disabled){Y(t,a);return}}};switch(e.key){case`ArrowDown`:e.preventDefault(),a(1);break;case`ArrowUp`:e.preventDefault(),a(-1);break;case`ArrowRight`:i&&y(i)&&(e.preventDefault(),$(i,t));break;case`ArrowLeft`:t>0&&(e.preventDefault(),Y(t-1,K[t-1].findIndex(e=>e.value===V[t-1])));break;case`Enter`:case` `:i&&(e.preventDefault(),$(i,t))}};return(0,h.jsx)(`div`,{ref:t,className:r(`lg-select`,`lg-cascader`,A),style:j,children:(0,h.jsxs)(u,{open:N,onOpenChange:J,children:[(0,h.jsx)(c,{children:(0,h.jsx)(p,{mode:`single`,size:E,open:N,disabled:C,error:w,placeholder:S,allowClear:T,showSearch:!1,searchValue:``,searchInputRef:L,onSearchChange:g,selectedValues:G,options:ne,onRemove:g,onClear:()=>q(_),onClick:e=>{e.preventDefault(),J(!N)},onKeyDown:e=>{(e.key===`Enter`||e.key===` `||e.key===`ArrowDown`)&&(e.preventDefault(),J(!0))}})}),(0,h.jsx)(l,{className:r(`lg-select-popover`,`lg-cascader__popover`,k?.className),side:`bottom`,align:`start`,sideOffset:4,collisionPadding:8,container:k?.container,onOpenAutoFocus:e=>{e.preventDefault(),requestAnimationFrame(()=>{let e=Math.max(0,Math.min(V.length,K.length)-1),t=K[e].findIndex(t=>t.value===V[e]);Y(e,t===-1?x(K[e]):t)})},children:n.length>0?(0,h.jsx)(`div`,{ref:R,className:`lg-cascader__menus`,children:K.map((e,t)=>(0,h.jsx)(i,{className:`lg-cascader__column`,style:X,scrollbarSize:2,scrollbarHoverSize:2,children:(0,h.jsx)(`ul`,{className:`lg-cascader__menu`,role:`menu`,onKeyDown:e=>ie(e,t),children:e.map((e,n)=>{let i=y(e),a=V[t]===e.value,s=B[t]===e.value&&B.slice(0,t).every((e,t)=>e===V[t]);return(0,h.jsxs)(`li`,{"data-index":n,role:`menuitem`,tabIndex:-1,"aria-disabled":e.disabled||void 0,"aria-haspopup":i||void 0,"aria-expanded":i?a:void 0,className:r(`lg-cascader__option`,a&&`lg-cascader__option--active`,s&&`lg-cascader__option--selected`,e.disabled&&`lg-cascader__option--disabled`),onClick:()=>Q(e,t),children:[(0,h.jsx)(te,{as:`span`,ellipsis:!1,content:e.label,className:`lg-cascader__option-label`,getPopupContainer:re,children:e.label}),i&&(0,h.jsx)(o,{size:16,className:`lg-cascader__option-arrow`})]},e.value)})})},t))}):(0,h.jsx)(`div`,{className:`lg-select-dropdown__status`,children:O??(0,h.jsx)(ee.Card,{size:`md`,status:`empty`,description:M.empty})})})]})})});S.displayName=`Cascader`;var C=[{value:`a`,label:`Level A`,children:[{value:`a-1`,label:`Level A-1`,children:[{value:`a-1-1`,label:`Level A-1-1`},{value:`a-1-2`,label:`Level A-1-2`}]},{value:`a-2`,label:`Level A-2`}]},{value:`b`,label:`Level B`,children:[{value:`b-1`,label:`Level B-1`}]}];function w(){let[e,t]=(0,m.useState)([]);return(0,h.jsx)(`div`,{style:{width:280},children:(0,h.jsx)(S,{options:C,value:e,onChange:t,placeholder:`Select a path`,allowClear:!0})})}var T=`import { useState } from "react";
import { Cascader } from "lingee-ui";
import type { CascaderOption } from "lingee-ui";

const options: CascaderOption[] = [
  {
    value: "a",
    label: "Level A",
    children: [
      {
        value: "a-1",
        label: "Level A-1",
        children: [
          { value: "a-1-1", label: "Level A-1-1" },
          { value: "a-1-2", label: "Level A-1-2" },
        ],
      },
      { value: "a-2", label: "Level A-2" },
    ],
  },
  {
    value: "b",
    label: "Level B",
    children: [{ value: "b-1", label: "Level B-1" }],
  },
];

export default function BasicDemo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div style={{ width: 280 }}>
      <Cascader
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Select a path"
        allowClear
      />
    </div>
  );
}
`,E=[{value:`a`,label:`Level A`,children:[{value:`a-1`,label:`Level A-1`},{value:`a-2`,label:`Level A-2 (disabled)`,disabled:!0}]},{value:`b`,label:`Level B (disabled)`,disabled:!0}];function D(){return(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,width:280},children:[(0,h.jsx)(S,{options:E,defaultValue:[`a`,`a-1`],separator:` > `}),(0,h.jsx)(S,{options:E,defaultValue:[`a`,`a-1`],disabled:!0}),(0,h.jsx)(S,{options:E,placeholder:`Error state`,error:!0})]})}var O=`import { Cascader } from "lingee-ui";
import type { CascaderOption } from "lingee-ui";

const options: CascaderOption[] = [
  {
    value: "a",
    label: "Level A",
    children: [
      { value: "a-1", label: "Level A-1" },
      { value: "a-2", label: "Level A-2 (disabled)", disabled: true },
    ],
  },
  { value: "b", label: "Level B (disabled)", disabled: true },
];

export default function DisabledDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 280 }}>
      <Cascader options={options} defaultValue={["a", "a-1"]} separator=" > " />
      <Cascader options={options} defaultValue={["a", "a-1"]} disabled />
      <Cascader options={options} placeholder="Error state" error />
    </div>
  );
}
`,k=[{value:`a`,label:`Level A`,children:[{value:`a-1`,label:`Level A-1`},{value:`a-2`,label:`Level A-2`}]}],A=[`sm`,`md`,`lg`];function j(){return(0,h.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,width:280},children:A.map(e=>(0,h.jsx)(S,{size:e,options:k,defaultValue:[`a`,`a-1`],allowClear:!0},e))})}var M=`import { Cascader } from "lingee-ui";
import type { CascaderOption, CascaderSize } from "lingee-ui";

const options: CascaderOption[] = [
  {
    value: "a",
    label: "Level A",
    children: [
      { value: "a-1", label: "Level A-1" },
      { value: "a-2", label: "Level A-2" },
    ],
  },
];

const SIZES: CascaderSize[] = ["sm", "md", "lg"];

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 280 }}>
      {SIZES.map((size) => (
        <Cascader key={size} size={size} options={options} defaultValue={["a", "a-1"]} allowClear />
      ))}
    </div>
  );
}
`,N=[`1`,`2`,`3`].map(e=>({value:`l${e}`,label:`Level ${e}`,children:[`1`,`2`].map(t=>({value:`l${e}-${t}`,label:`Level ${e}-${t}`,children:[`1`,`2`,`3`].map(n=>({value:`l${e}-${t}-${n}`,label:`Level ${e}-${t}-${n}`}))}))})),P={"--_select-height-md":`48px`,"--_select-padding-x":`16px`,"--_select-radius":`16px`,width:`100%`},F=1040;function I(){let[e,t]=(0,m.useState)(!1),[n,r]=(0,m.useState)(``),[i,a]=(0,m.useState)(void 0),[o,c]=(0,m.useState)(),l=!n.trim()||!i?.length;return(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,h.jsx)(s,{onClick:()=>t(!0),children:`Open dialog`}),(0,h.jsxs)(`span`,{style:{fontSize:12,color:`var(--lg-g-fg-color-black-faint)`},children:[`Submitted: `,o?o.join(` / `):`none`]}),(0,h.jsx)(f,{open:e,onOpenChange:t,title:`Form`,width:428,zIndex:F,footer:(0,h.jsx)(s,{variant:`primary`,disabled:l,onClick:()=>{c(i??[]),t(!1)},children:`Submit`}),children:(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:`0 20px`},children:[(0,h.jsx)(d,{placeholder:`Name`,value:n,onChange:e=>r(e.target.value)}),(0,h.jsx)(S,{style:P,placeholder:`Region`,options:N,value:i,onChange:e=>a(e),allowClear:!0})]})})]})}var L=`import { useState } from "react";
import type { CSSProperties } from "react";
import { Button, Cascader, Dialog, Input } from "lingee-ui";
import type { CascaderOption } from "lingee-ui";

// 三级数据，子级 value 带上父级前缀，与常见的地区数据形态一致
const options: CascaderOption[] = ["1", "2", "3"].map((a) => ({
  value: \`l\${a}\`,
  label: \`Level \${a}\`,
  children: ["1", "2"].map((b) => ({
    value: \`l\${a}-\${b}\`,
    label: \`Level \${a}-\${b}\`,
    children: ["1", "2", "3"].map((c) => ({
      value: \`l\${a}-\${b}-\${c}\`,
      label: \`Level \${a}-\${b}-\${c}\`,
    })),
  })),
}));

// 表单字段规格：48 高、水平 padding 16、圆角 16；改 Select 的尺寸变量，不覆盖内部结构
const FIELD_STYLE = {
  "--_select-height-md": "48px",
  "--_select-padding-x": "16px",
  "--_select-radius": "16px",
  width: "100%",
} as CSSProperties;

// 弹窗层级高于默认值时，级联下拉仍需显示在面板之上
const DIALOG_Z_INDEX = 1040;

export default function InDialogDemo() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [path, setPath] = useState<string[] | undefined>(undefined);
  const [submitted, setSubmitted] = useState<string[]>();

  // 必填项未齐时禁用提交
  const submitDisabled = !name.trim() || !path?.length;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <span style={{ fontSize: 12, color: "var(--lg-g-fg-color-black-faint)" }}>
        Submitted: {submitted ? submitted.join(" / ") : "none"}
      </span>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Form"
        width={428}
        zIndex={DIALOG_Z_INDEX}
        footer={
          <Button
            variant="primary"
            disabled={submitDisabled}
            onClick={() => {
              setSubmitted(path ?? []);
              setOpen(false);
            }}
          >
            Submit
          </Button>
        }
      >
        {/* Dialog 内容区不带内边距，与标题栏、底栏的 20px 对齐 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 20px" }}>
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Cascader
            style={FIELD_STYLE}
            placeholder="Region"
            options={options}
            value={path}
            onChange={(value) => setPath(value)}
            allowClear
          />
        </div>
      </Dialog>
    </div>
  );
}
`,R=Array.from({length:20},(e,t)=>({value:`item-${t+1}`,label:t===0?`A very long option label that exceeds the column width`:`Item ${t+1}`,children:[{value:`item-${t+1}-1`,label:`Item ${t+1}-1 with a long label that is truncated`,children:[{value:`item-${t+1}-1-1`,label:`Item ${t+1}-1-1`},{value:`item-${t+1}-1-2`,label:`Item ${t+1}-1-2`}]},{value:`item-${t+1}-2`,label:`Item ${t+1}-2`}]}));function z(){let[e,t]=(0,m.useState)([]);return(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,width:280},children:[(0,h.jsx)(S,{options:R,value:e,onChange:t,placeholder:`Default`}),(0,h.jsx)(S,{options:R,value:e,onChange:t,placeholder:`maxHeight: 200`,dropdown:{maxHeight:200}})]})}var B=`import { useState } from "react";
import { Cascader } from "lingee-ui";
import type { CascaderOption } from "lingee-ui";

// 第一列 20 项，超过默认限高后滚动；每级都有一项超长文本，被截断后悬浮可看完整内容
const options: CascaderOption[] = Array.from({ length: 20 }, (_, i) => ({
  value: \`item-\${i + 1}\`,
  label: i === 0 ? "A very long option label that exceeds the column width" : \`Item \${i + 1}\`,
  children: [
    {
      value: \`item-\${i + 1}-1\`,
      label: \`Item \${i + 1}-1 with a long label that is truncated\`,
      children: [
        { value: \`item-\${i + 1}-1-1\`, label: \`Item \${i + 1}-1-1\` },
        { value: \`item-\${i + 1}-1-2\`, label: \`Item \${i + 1}-1-2\` },
      ],
    },
    { value: \`item-\${i + 1}-2\`, label: \`Item \${i + 1}-2\` },
  ],
}));

export default function OverflowDemo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 280 }}>
      <Cascader options={options} value={value} onChange={setValue} placeholder="Default" />
      <Cascader
        options={options}
        value={value}
        onChange={setValue}
        placeholder="maxHeight: 200"
        dropdown={{ maxHeight: 200 }}
      />
    </div>
  );
}
`;export{M as a,D as c,I as i,T as l,z as n,j as o,L as r,O as s,B as t,w as u};