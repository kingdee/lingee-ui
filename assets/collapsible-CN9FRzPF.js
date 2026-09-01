import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./Search-Bp22Ei2B.js";import{t as i}from"./XLg-BMGwlHLt.js";import{t as a}from"./input-Bae9Ts2B.js";var o=n();function s(){return(0,o.jsx)(a,{placeholder:`Enter text`})}var c=`import { Input } from "lingee-ui";

export default function BasicDemo() {
  return <Input placeholder="Enter text" />;
}
`;function l(){return(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,o.jsx)(a,{size:`sm`,placeholder:`Small input`}),(0,o.jsx)(a,{size:`md`,placeholder:`Medium input`}),(0,o.jsx)(a,{size:`lg`,placeholder:`Large input`})]})}var u=`import { Input } from "lingee-ui";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  );
}
`;function d(){return(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,o.jsx)(a,{prefix:(0,o.jsx)(r,{}),placeholder:`Prefix icon`}),(0,o.jsx)(a,{suffix:(0,o.jsx)(i,{}),placeholder:`Suffix icon`})]})}var f=`import { Input } from "lingee-ui";
import { Search, XLg } from "lingee-icon";

export default function PrefixSuffixDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Input prefix={<Search />} placeholder="Prefix icon" />
      <Input suffix={<XLg />} placeholder="Suffix icon" />
    </div>
  );
}
`;function p(){return(0,o.jsx)(a,{defaultValue:`Clearable text`,allowClear:!0})}var m=`import { Input } from "lingee-ui";

export default function ClearableDemo() {
  return <Input defaultValue="Clearable text" allowClear />;
}
`;function h(){return(0,o.jsx)(a,{defaultValue:`Disabled`,disabled:!0})}var g=`import { Input } from "lingee-ui";

export default function DisabledDemo() {
  return <Input defaultValue="Disabled" disabled />;
}
`;function _(){return(0,o.jsx)(a,{defaultValue:`Invalid value`,error:!0})}var v=`import { Input } from "lingee-ui";

export default function ErrorDemo() {
  return <Input defaultValue="Invalid value" error />;
}
`,y=e(t()),b=[`sm`,`md`,`lg`];function x(){let[e,t]=(0,y.useState)({sm:!0,md:!0,lg:!0,suffix:!0}),[n,i]=(0,y.useState)({sm:``,md:``,lg:``}),s=(e,n)=>t(t=>({...t,[e]:n}));return(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[b.map(t=>(0,o.jsx)(a,{size:t,shape:`round`,collapsed:e[t],prefix:(0,o.jsx)(r,{}),placeholder:`${t} search`,allowClear:!0,value:n[t],onChange:e=>i(n=>({...n,[t]:e.target.value})),onClick:()=>s(t,!1),onBlur:()=>{n[t]||s(t,!0)}},t)),(0,o.jsx)(a,{collapsed:e.suffix,style:{width:200},suffix:(0,o.jsx)(r,{}),placeholder:`Collapses to suffix when no prefix`,onClick:()=>s(`suffix`,!1),onBlur:()=>s(`suffix`,!0)})]})}var S=`import { useState } from "react";
import { Input } from "lingee-ui";
import { Search } from "lingee-icon";

const SIZES = ["sm", "md", "lg"] as const;

export default function CollapsibleDemo() {
  // 每个实例必须持有独立的折叠状态：共用一份会导致多个输入框同时展开并抢焦点，
  // 失焦回调互相触发后一起被收起
  const [collapsedMap, setCollapsedMap] = useState<Record<string, boolean>>({
    sm: true,
    md: true,
    lg: true,
    suffix: true,
  });
  const [keywords, setKeywords] = useState<Record<string, string>>({
    sm: "",
    md: "",
    lg: "",
  });

  const setCollapsed = (key: string, collapsed: boolean) =>
    setCollapsedMap((prev) => ({ ...prev, [key]: collapsed }));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {SIZES.map((size) => (
        <Input
          key={size}
          size={size}
          shape="round"
          collapsed={collapsedMap[size]}
          prefix={<Search />}
          placeholder={\`\${size} search\`}
          allowClear
          value={keywords[size]}
          onChange={(e) =>
            setKeywords((prev) => ({ ...prev, [size]: e.target.value }))
          }
          onClick={() => setCollapsed(size, false)}
          // 失焦且无内容时收起，是搜索框的常见预期
          onBlur={() => {
            if (!keywords[size]) setCollapsed(size, true);
          }}
        />
      ))}
      {/* 无 prefix 时折叠展示 suffix；折叠态忽略自定义宽度，保证收起后仍是正方形 */}
      <Input
        collapsed={collapsedMap.suffix}
        style={{ width: 200 }}
        suffix={<Search />}
        placeholder="Collapses to suffix when no prefix"
        onClick={() => setCollapsed("suffix", false)}
        onBlur={() => setCollapsed("suffix", true)}
      />
    </div>
  );
}
`;export{g as a,p as c,u as d,l as f,_ as i,f as l,s as m,x as n,h as o,c as p,v as r,m as s,S as t,d as u};