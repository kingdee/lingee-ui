import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./View-RSFJrgh5.js";import{t as i}from"./button-CCGJgCoQ.js";import{t as a}from"./Plus-BZpPu6gq.js";import{t as o}from"./Search-BWjeq8mP.js";import{t as s}from"./empty-DLTjsoi6.js";import{t as c}from"./select-tWBfZLYM.js";import{t as l}from"./divider-DFazOowB.js";import{n as u}from"./avatar-DwEjXPdF.js";var d=e(t()),f=n();function p(){let[e,t]=(0,d.useState)(``);return(0,f.jsx)(c,{options:[{label:`View only`,value:`view`},{label:`Can edit`,value:`edit`},{label:`Admin`,value:`admin`}],value:e,onChange:e=>t(e),placeholder:`Select a permission`})}var m=`import { useState } from "react";
import { Select } from "lingee-ui";

export default function BasicDemo() {
  const [value, setValue] = useState<string>("");

  return (
    <Select
      options={[
        { label: "View only", value: "view" },
        { label: "Can edit", value: "edit" },
        { label: "Admin", value: "admin" },
      ]}
      value={value}
      onChange={(v) => setValue(v as string)}
      placeholder="Select a permission"
    />
  );
}
`;function h(){let[e,t]=(0,d.useState)(``);return(0,f.jsx)(c,{showSearch:!0,options:[{label:`Alice Chen`,value:`zhangsan`},{label:`Bob Liu`,value:`lisi`},{label:`Carol Wang`,value:`wangwu`},{label:`David Zhao`,value:`zhaoliu`},{label:`Emma Qian`,value:`qianqi`}],value:e,onChange:e=>t(e),placeholder:`Search by name`})}var g=`import { useState } from "react";
import { Select } from "lingee-ui";

export default function SearchableDemo() {
  const [value, setValue] = useState<string>("");

  return (
    <Select
      showSearch
      options={[
        { label: "Alice Chen", value: "zhangsan" },
        { label: "Bob Liu", value: "lisi" },
        { label: "Carol Wang", value: "wangwu" },
        { label: "David Zhao", value: "zhaoliu" },
        { label: "Emma Qian", value: "qianqi" },
      ]}
      value={value}
      onChange={(v) => setValue(v as string)}
      placeholder="Search by name"
    />
  );
}
`;function _(){let[e,t]=(0,d.useState)(``),[n,i]=(0,d.useState)([]),[a,l]=(0,d.useState)(!1);return(0,f.jsx)(c,{showSearch:!0,filterOption:!1,options:n,value:e,onChange:e=>t(e),onSearch:e=>{l(!0),setTimeout(()=>{let t=[`Alice Chen`,`Bob Liu`,`Carol Wang`,`David Zhao`,`Emma Qian`,`Frank Sun`,`Grace Zhou`,`Henry Wu`,`Ivy Zheng`,`Jack Feng`],n=e?t.filter(t=>t.includes(e)):t;i(n.map(e=>({label:e,value:e}))),l(!1)},500)},loading:a,placeholder:`Search by name, ID or department`,suffixIcon:(0,f.jsx)(o,{size:16}),dropdown:{notFoundContent:a?void 0:(0,f.jsx)(s,{icon:r,description:`No matching users`})}})}var v=`import { useState } from "react";
import { Select, Empty } from "lingee-ui";
import { Search, View } from "lingee-icon";

export default function RemoteSearchDemo() {
  const [value, setValue] = useState<string>("");
  const [options, setOptions] = useState<{ label: string; value: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (keyword: string) => {
    setLoading(true);
    // 模拟远程搜索
    setTimeout(() => {
      const mockData = [
        "Alice Chen", "Bob Liu", "Carol Wang", "David Zhao", "Emma Qian", "Frank Sun",
        "Grace Zhou", "Henry Wu", "Ivy Zheng", "Jack Feng",
      ];
      const filtered = keyword
        ? mockData.filter((name) => name.includes(keyword))
        : mockData;
      setOptions(filtered.map((name) => ({ label: name, value: name })));
      setLoading(false);
    }, 500);
  };

  return (
    <Select
      showSearch
      filterOption={false}
      options={options}
      value={value}
      onChange={(v) => setValue(v as string)}
      onSearch={handleSearch}
      loading={loading}
      placeholder="Search by name, ID or department"
      suffixIcon={<Search size={16} />}
      dropdown={{
        notFoundContent: loading ? undefined : (
          <Empty icon={View} description="No matching users" />
        ),
      }}
    />
  );
}
`;function y(){let[e,t]=(0,d.useState)([]);return(0,f.jsx)(c,{mode:`multiple`,options:[{label:`React`,value:`react`},{label:`Vue`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`},{label:`Solid`,value:`solid`}],value:e,onChange:e=>t(e),placeholder:`Select frameworks`})}var b=`import { useState } from "react";
import { Select } from "lingee-ui";

export default function MultipleDemo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Select
      mode="multiple"
      options={[
        { label: "React", value: "react" },
        { label: "Vue", value: "vue" },
        { label: "Angular", value: "angular" },
        { label: "Svelte", value: "svelte" },
        { label: "Solid", value: "solid" },
      ]}
      value={value}
      onChange={(v) => setValue(v as string[])}
      placeholder="Select frameworks"
    />
  );
}
`;function x(){let[e,t]=(0,d.useState)([]);return(0,f.jsx)(c,{mode:`multiple`,showSearch:!0,options:[{label:`Alice Chen`,value:`zhangsan`},{label:`Bob Liu`,value:`lisi`},{label:`Carol Wang`,value:`wangwu`},{label:`David Zhao`,value:`zhaoliu`},{label:`Emma Qian`,value:`qianqi`},{label:`Frank Sun`,value:`sunba`}],value:e,onChange:e=>t(e),placeholder:`Search and select`,suffixIcon:(0,f.jsx)(o,{size:16}),allowClear:!0})}var S=`import { useState } from "react";
import { Select } from "lingee-ui";
import { Search } from "lingee-icon";

export default function MultipleSearchDemo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Select
      mode="multiple"
      showSearch
      options={[
        { label: "Alice Chen", value: "zhangsan" },
        { label: "Bob Liu", value: "lisi" },
        { label: "Carol Wang", value: "wangwu" },
        { label: "David Zhao", value: "zhaoliu" },
        { label: "Emma Qian", value: "qianqi" },
        { label: "Frank Sun", value: "sunba" },
      ]}
      value={value}
      onChange={(v) => setValue(v as string[])}
      placeholder="Search and select"
      suffixIcon={<Search size={16} />}
      allowClear
    />
  );
}
`,C=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];function w(){let[e,t]=(0,d.useState)(``),[n,r]=(0,d.useState)(``),[i,a]=(0,d.useState)(``);return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,f.jsx)(c,{size:`sm`,options:C,value:e,onChange:e=>t(e),placeholder:`Small (sm)`}),(0,f.jsx)(c,{size:`md`,options:C,value:n,onChange:e=>r(e),placeholder:`Medium (md, default)`}),(0,f.jsx)(c,{size:`lg`,options:C,value:i,onChange:e=>a(e),placeholder:`Large (lg)`})]})}var T=`import { useState } from "react";
import { Select } from "lingee-ui";

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

export default function SizesDemo() {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [value3, setValue3] = useState<string>("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Select
        size="sm"
        options={options}
        value={value1}
        onChange={(v) => setValue1(v as string)}
        placeholder="Small (sm)"
      />
      <Select
        size="md"
        options={options}
        value={value2}
        onChange={(v) => setValue2(v as string)}
        placeholder="Medium (md, default)"
      />
      <Select
        size="lg"
        options={options}
        value={value3}
        onChange={(v) => setValue3(v as string)}
        placeholder="Large (lg)"
      />
    </div>
  );
}
`,E=[{label:`View only`,value:`view`},{label:`Can edit`,value:`edit`}];function D(){return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,f.jsx)(c,{options:E,placeholder:`Disabled`,disabled:!0}),(0,f.jsx)(c,{options:E,placeholder:`Error`,error:!0}),(0,f.jsx)(c,{options:[{label:`Never expires`,value:`forever`}],value:`forever`,allowClear:!0,placeholder:`Clearable`})]})}var O=`import { Select } from "lingee-ui";

const options = [
  { label: "View only", value: "view" },
  { label: "Can edit", value: "edit" },
];

export default function StatesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Select options={options} placeholder="Disabled" disabled />
      <Select options={options} placeholder="Error" error />
      <Select
        options={[{ label: "Never expires", value: "forever" }]}
        value="forever"
        allowClear
        placeholder="Clearable"
      />
    </div>
  );
}
`;function k(){let[e,t]=(0,d.useState)(0);return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,f.jsx)(c,{options:[],loading:!0,placeholder:`Loading`}),(0,f.jsx)(c,{options:[],loadError:!0,placeholder:`Failed to load`}),(0,f.jsx)(c,{options:[],loadError:!0,onRetry:()=>t(e=>e+1),placeholder:`Failed to load (retryable)`}),(0,f.jsxs)(`span`,{style:{fontSize:12,color:`var(--lg-g-fg-color-black-muted)`},children:[`onRetry called: `,e]}),(0,f.jsx)(c,{showSearch:!0,options:[],placeholder:`No results`})]})}var A=`import { useState } from "react";
import { Select } from "lingee-ui";

export default function DropdownStatusDemo() {
  const [retryCount, setRetryCount] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Select options={[]} loading placeholder="Loading" />

      {/* 不传 onRetry：纯提示，文案自带「请重试」引导 */}
      <Select options={[]} loadError placeholder="Failed to load" />

      {/* 传 onRetry：失败缺省可点击，文案由组件追加「重试」 */}
      <Select
        options={[]}
        loadError
        onRetry={() => setRetryCount((v) => v + 1)}
        placeholder="Failed to load (retryable)"
      />
      <span style={{ fontSize: 12, color: "var(--lg-g-fg-color-black-muted)" }}>
        onRetry called: {retryCount}
      </span>

      <Select showSearch options={[]} placeholder="No results" />
    </div>
  );
}
`,j=[{id:`u1`,name:`Alice Chen`,email:`alice@example.com`},{id:`u2`,name:`Bob Liu`,email:`bob@example.com`},{id:`u3`,name:`Carol Wang`,email:`carol@example.com`},{id:`u4`,name:`David Zhao`,email:`david@example.com`}].map(e=>({value:e.id,textLabel:e.name,label:(0,f.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,f.jsx)(u,{size:20,alt:e.name[0]}),(0,f.jsx)(`span`,{children:e.name}),(0,f.jsx)(`span`,{style:{fontSize:12,color:`var(--lg-g-fg-color-black-muted)`},children:e.email})]})}));function M(){let[e,t]=(0,d.useState)(``);return(0,f.jsx)(c,{showSearch:!0,options:j,value:e,onChange:e=>t(e),labelRender:(e,t)=>t?.textLabel,filterOption:(e,t)=>(t.textLabel??``).toLowerCase().includes(e.toLowerCase()),placeholder:`Search by name`})}var N=`import { useState } from "react";
import { Select, Avatar } from "lingee-ui";

const users = [
  { id: "u1", name: "Alice Chen", email: "alice@example.com" },
  { id: "u2", name: "Bob Liu", email: "bob@example.com" },
  { id: "u3", name: "Carol Wang", email: "carol@example.com" },
  { id: "u4", name: "David Zhao", email: "david@example.com" },
];

const options = users.map((user) => ({
  value: user.id,
  textLabel: user.name,
  label: (
    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Avatar size={20} alt={user.name[0]} />
      <span>{user.name}</span>
      <span style={{ fontSize: 12, color: "var(--lg-g-fg-color-black-muted)" }}>{user.email}</span>
    </span>
  ),
}));

export default function RichOptionDemo() {
  const [value, setValue] = useState<string>("");
  return (
    <Select
      showSearch
      options={options}
      value={value}
      onChange={(v) => setValue(v as string)}
      // 不传时触发器会原样渲染整段富内容
      labelRender={(_, option) => option?.textLabel}
      // 默认过滤对 ReactNode label 只能拿到 "[object Object]"，需改按纯文本匹配
      filterOption={(keyword, option) =>
        (option.textLabel ?? "").toLowerCase().includes(keyword.toLowerCase())
      }
      placeholder="Search by name"
    />
  );
}
`,P=e=>({label:`Item ${e}`,value:`item-${e}`});function F(){let[e,t]=(0,d.useState)(()=>[1,2,3,4,5].map(P)),[n,r]=(0,d.useState)([]),o=n.length===e.length;return(0,f.jsx)(c,{mode:`multiple`,options:e,value:n,onChange:e=>r(e),placeholder:`Select items`,dropdown:{render:s=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,height:32,padding:`0 8px`,fontSize:12,color:`var(--lg-g-fg-color-black-muted)`},children:[(0,f.jsxs)(`span`,{children:[n.length,` / `,e.length,` selected`]}),(0,f.jsx)(i,{size:`sm`,variant:`link`,onClick:()=>r(o?[]:e.map(e=>e.value)),children:o?`Clear`:`Select all`})]}),s,(0,f.jsx)(l,{spacing:4}),(0,f.jsx)(i,{variant:`text`,icon:(0,f.jsx)(a,{size:16}),style:{width:`100%`,justifyContent:`flex-start`},onClick:()=>t(e=>[...e,P(e.length+1)]),children:`Add item`})]})}})}var I=`import { useState } from "react";
import { Select, Button, Divider } from "lingee-ui";
import { Plus } from "lingee-icon";

const createOption = (index: number) => ({ label: \`Item \${index}\`, value: \`item-\${index}\` });

export default function DropdownRenderDemo() {
  const [options, setOptions] = useState(() => [1, 2, 3, 4, 5].map(createOption));
  const [value, setValue] = useState<string[]>([]);
  const allSelected = value.length === options.length;

  return (
    <Select
      mode="multiple"
      options={options}
      value={value}
      onChange={(v) => setValue(v as string[])}
      placeholder="Select items"
      dropdown={{
        // menu 已包含加载中 / 无结果等缺省态，原样放回即可沿用
        render: (menu) => (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: 32,
                padding: "0 8px",
                fontSize: 12,
                color: "var(--lg-g-fg-color-black-muted)",
              }}
            >
              <span>
                {value.length} / {options.length} selected
              </span>
              <Button
                size="sm"
                variant="link"
                onClick={() => setValue(allSelected ? [] : options.map((o) => o.value))}
              >
                {allSelected ? "Clear" : "Select all"}
              </Button>
            </div>
            {menu}
            <Divider spacing={4} />
            <Button
              variant="text"
              icon={<Plus size={16} />}
              style={{ width: "100%", justifyContent: "flex-start" }}
              onClick={() => setOptions((prev) => [...prev, createOption(prev.length + 1)])}
            >
              Add item
            </Button>
          </>
        ),
      }}
    />
  );
}
`;export{g as _,A as a,p as b,D as c,S as d,x as f,_ as g,v as h,M as i,T as l,y as m,F as n,k as o,b as p,N as r,O as s,I as t,w as u,h as v,m as y};