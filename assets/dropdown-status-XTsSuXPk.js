import{G as e,J as t,z as n}from"./i18n-B4Rqn8un.js";import{t as r}from"./empty-BUouPpFy.js";import{n as i,t as a}from"./select-CHOaPqiF.js";import{t as o}from"./Search-BOIyofnS.js";var s=t(e()),c=n();function l(){let[e,t]=(0,s.useState)(``);return(0,c.jsx)(a,{options:[{label:`View only`,value:`view`},{label:`Can edit`,value:`edit`},{label:`Admin`,value:`admin`}],value:e,onChange:e=>t(e),placeholder:`Select a permission`})}var u=`import { useState } from "react";
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
`;function d(){let[e,t]=(0,s.useState)(``);return(0,c.jsx)(a,{showSearch:!0,options:[{label:`Alice Chen`,value:`zhangsan`},{label:`Bob Liu`,value:`lisi`},{label:`Carol Wang`,value:`wangwu`},{label:`David Zhao`,value:`zhaoliu`},{label:`Emma Qian`,value:`qianqi`}],value:e,onChange:e=>t(e),placeholder:`Search by name`})}var f=`import { useState } from "react";
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
`;function p(){let[e,t]=(0,s.useState)(``),[n,l]=(0,s.useState)([]),[u,d]=(0,s.useState)(!1);return(0,c.jsx)(a,{showSearch:!0,filterOption:!1,options:n,value:e,onChange:e=>t(e),onSearch:e=>{d(!0),setTimeout(()=>{let t=[`Alice Chen`,`Bob Liu`,`Carol Wang`,`David Zhao`,`Emma Qian`,`Frank Sun`,`Grace Zhou`,`Henry Wu`,`Ivy Zheng`,`Jack Feng`],n=e?t.filter(t=>t.includes(e)):t;l(n.map(e=>({label:e,value:e}))),d(!1)},500)},loading:u,placeholder:`Search by name, ID or department`,suffixIcon:(0,c.jsx)(o,{size:16}),dropdown:{notFoundContent:u?void 0:(0,c.jsx)(r,{icon:i,description:`No matching users`})}})}var m=`import { useState } from "react";
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
`;function h(){let[e,t]=(0,s.useState)([]);return(0,c.jsx)(a,{mode:`multiple`,options:[{label:`React`,value:`react`},{label:`Vue`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`},{label:`Solid`,value:`solid`}],value:e,onChange:e=>t(e),placeholder:`Select frameworks`})}var g=`import { useState } from "react";
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
`;function _(){let[e,t]=(0,s.useState)([]);return(0,c.jsx)(a,{mode:`multiple`,showSearch:!0,options:[{label:`Alice Chen`,value:`zhangsan`},{label:`Bob Liu`,value:`lisi`},{label:`Carol Wang`,value:`wangwu`},{label:`David Zhao`,value:`zhaoliu`},{label:`Emma Qian`,value:`qianqi`},{label:`Frank Sun`,value:`sunba`}],value:e,onChange:e=>t(e),placeholder:`Search and select`,suffixIcon:(0,c.jsx)(o,{size:16}),allowClear:!0})}var v=`import { useState } from "react";
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
`,y=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];function b(){let[e,t]=(0,s.useState)(``),[n,r]=(0,s.useState)(``),[i,o]=(0,s.useState)(``);return(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,c.jsx)(a,{size:`sm`,options:y,value:e,onChange:e=>t(e),placeholder:`Small (sm)`}),(0,c.jsx)(a,{size:`md`,options:y,value:n,onChange:e=>r(e),placeholder:`Medium (md, default)`}),(0,c.jsx)(a,{size:`lg`,options:y,value:i,onChange:e=>o(e),placeholder:`Large (lg)`})]})}var x=`import { useState } from "react";
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
`,S=[{label:`View only`,value:`view`},{label:`Can edit`,value:`edit`}];function C(){return(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,c.jsx)(a,{options:S,placeholder:`Disabled`,disabled:!0}),(0,c.jsx)(a,{options:S,placeholder:`Error`,error:!0}),(0,c.jsx)(a,{options:[{label:`Never expires`,value:`forever`}],value:`forever`,allowClear:!0,placeholder:`Clearable`})]})}var w=`import { Select } from "lingee-ui";

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
`;function T(){let[e,t]=(0,s.useState)(0);return(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,c.jsx)(a,{options:[],loading:!0,placeholder:`Loading`}),(0,c.jsx)(a,{options:[],loadError:!0,placeholder:`Failed to load`}),(0,c.jsx)(a,{options:[],loadError:!0,onRetry:()=>t(e=>e+1),placeholder:`Failed to load (retryable)`}),(0,c.jsxs)(`span`,{style:{fontSize:12,color:`var(--lg-g-fg-color-black-muted)`},children:[`onRetry called: `,e]}),(0,c.jsx)(a,{showSearch:!0,options:[],placeholder:`No results`})]})}var E=`import { useState } from "react";
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
`;export{x as a,_ as c,m as d,p as f,l as g,u as h,C as i,g as l,d as m,T as n,b as o,f as p,w as r,v as s,E as t,h as u};