import{A as e,D as t,x as n}from"./dist-DjLZdxEA.js";import{t as r}from"./empty-D-rf5kcY.js";import{n as i,t as a}from"./select-C7kuu3K4.js";import{t as o}from"./Search-Dp6UwMqT.js";import{t as s}from"./DemoBox-DEznk3dE.js";var c=e(t()),l=n();function u(){let[e,t]=(0,c.useState)(``);return(0,l.jsx)(a,{options:[{label:`仅查看`,value:`view`},{label:`可编辑`,value:`edit`},{label:`管理员`,value:`admin`}],value:e,onChange:e=>t(e),placeholder:`请选择权限`})}var d=`import { useState } from "react";
import { Select } from "lingee-ui";

export default function BasicDemo() {
  const [value, setValue] = useState<string>("");

  return (
    <Select
      options={[
        { label: "仅查看", value: "view" },
        { label: "可编辑", value: "edit" },
        { label: "管理员", value: "admin" },
      ]}
      value={value}
      onChange={(v) => setValue(v as string)}
      placeholder="请选择权限"
    />
  );
}
`;function f(){let[e,t]=(0,c.useState)(``);return(0,l.jsx)(a,{showSearch:!0,options:[{label:`张三`,value:`zhangsan`},{label:`李四`,value:`lisi`},{label:`王五`,value:`wangwu`},{label:`赵六`,value:`zhaoliu`},{label:`钱七`,value:`qianqi`}],value:e,onChange:e=>t(e),placeholder:`搜索姓名`})}var p=`import { useState } from "react";
import { Select } from "lingee-ui";

export default function SearchableDemo() {
  const [value, setValue] = useState<string>("");

  return (
    <Select
      showSearch
      options={[
        { label: "张三", value: "zhangsan" },
        { label: "李四", value: "lisi" },
        { label: "王五", value: "wangwu" },
        { label: "赵六", value: "zhaoliu" },
        { label: "钱七", value: "qianqi" },
      ]}
      value={value}
      onChange={(v) => setValue(v as string)}
      placeholder="搜索姓名"
    />
  );
}
`;function m(){let[e,t]=(0,c.useState)(``),[n,s]=(0,c.useState)([]),[u,d]=(0,c.useState)(!1);return(0,l.jsx)(a,{showSearch:!0,filterOption:!1,options:n,value:e,onChange:e=>t(e),onSearch:e=>{d(!0),setTimeout(()=>{let t=[`张三`,`李四`,`王五`,`赵六`,`钱七`,`孙八`,`周九`,`吴十`,`郑一`,`冯二`],n=e?t.filter(t=>t.includes(e)):t;s(n.map(e=>({label:e,value:e}))),d(!1)},500)},loading:u,placeholder:`搜索姓名/工号/部门`,suffixIcon:(0,l.jsx)(o,{size:16}),dropdown:{notFoundContent:u?void 0:(0,l.jsx)(r,{icon:i,description:`未找到匹配用户`})}})}var h=`import { useState } from "react";
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
        "张三", "李四", "王五", "赵六", "钱七", "孙八",
        "周九", "吴十", "郑一", "冯二",
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
      placeholder="搜索姓名/工号/部门"
      suffixIcon={<Search size={16} />}
      dropdown={{
        notFoundContent: loading ? undefined : (
          <Empty icon={View} description="未找到匹配用户" />
        ),
      }}
    />
  );
}
`;function g(){let[e,t]=(0,c.useState)([]);return(0,l.jsx)(a,{mode:`multiple`,options:[{label:`React`,value:`react`},{label:`Vue`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`},{label:`Solid`,value:`solid`}],value:e,onChange:e=>t(e),placeholder:`请选择技术栈（可多选）`})}var _=`import { useState } from "react";
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
      placeholder="请选择技术栈（可多选）"
    />
  );
}
`;function v(){let[e,t]=(0,c.useState)([]);return(0,l.jsx)(a,{mode:`multiple`,showSearch:!0,options:[{label:`张三`,value:`zhangsan`},{label:`李四`,value:`lisi`},{label:`王五`,value:`wangwu`},{label:`赵六`,value:`zhaoliu`},{label:`钱七`,value:`qianqi`},{label:`孙八`,value:`sunba`}],value:e,onChange:e=>t(e),placeholder:`搜索并选择（可多选）`,suffixIcon:(0,l.jsx)(o,{size:16}),allowClear:!0})}var y=`import { useState } from "react";
import { Select } from "lingee-ui";
import { Search } from "lingee-icon";

export default function MultipleSearchDemo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Select
      mode="multiple"
      showSearch
      options={[
        { label: "张三", value: "zhangsan" },
        { label: "李四", value: "lisi" },
        { label: "王五", value: "wangwu" },
        { label: "赵六", value: "zhaoliu" },
        { label: "钱七", value: "qianqi" },
        { label: "孙八", value: "sunba" },
      ]}
      value={value}
      onChange={(v) => setValue(v as string[])}
      placeholder="搜索并选择（可多选）"
      suffixIcon={<Search size={16} />}
      allowClear
    />
  );
}
`,b=[{label:`选项一`,value:`1`},{label:`选项二`,value:`2`},{label:`选项三`,value:`3`}];function x(){let[e,t]=(0,c.useState)(``),[n,r]=(0,c.useState)(``),[i,o]=(0,c.useState)(``);return(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,l.jsx)(a,{size:`sm`,options:b,value:e,onChange:e=>t(e),placeholder:`小尺寸 sm`}),(0,l.jsx)(a,{size:`md`,options:b,value:n,onChange:e=>r(e),placeholder:`中尺寸 md（默认）`}),(0,l.jsx)(a,{size:`lg`,options:b,value:i,onChange:e=>o(e),placeholder:`大尺寸 lg`})]})}var S=`import { useState } from "react";
import { Select } from "lingee-ui";

const options = [
  { label: "选项一", value: "1" },
  { label: "选项二", value: "2" },
  { label: "选项三", value: "3" },
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
        placeholder="小尺寸 sm"
      />
      <Select
        size="md"
        options={options}
        value={value2}
        onChange={(v) => setValue2(v as string)}
        placeholder="中尺寸 md（默认）"
      />
      <Select
        size="lg"
        options={options}
        value={value3}
        onChange={(v) => setValue3(v as string)}
        placeholder="大尺寸 lg"
      />
    </div>
  );
}
`,C=[{label:`仅查看`,value:`view`},{label:`可编辑`,value:`edit`}];function w(){return(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,l.jsx)(a,{options:C,placeholder:`禁用态`,disabled:!0}),(0,l.jsx)(a,{options:C,placeholder:`错误态`,error:!0}),(0,l.jsx)(a,{options:[{label:`永久有效`,value:`forever`}],value:`forever`,allowClear:!0,placeholder:`可清空`})]})}var T=`import { Select } from "lingee-ui";

const options = [
  { label: "仅查看", value: "view" },
  { label: "可编辑", value: "edit" },
];

export default function StatesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Select options={options} placeholder="禁用态" disabled />
      <Select options={options} placeholder="错误态" error />
      <Select
        options={[{ label: "永久有效", value: "forever" }]}
        value="forever"
        allowClear
        placeholder="可清空"
      />
    </div>
  );
}
`;function E(){return(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,l.jsx)(a,{options:[],loading:!0,placeholder:`加载中`}),(0,l.jsx)(a,{options:[],loadError:!0,placeholder:`加载失败`}),(0,l.jsx)(a,{showSearch:!0,options:[],placeholder:`搜索无结果`})]})}var D=`import { Select } from "lingee-ui";

export default function DropdownStatusDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Select options={[]} loading placeholder="加载中" />
      <Select options={[]} loadError placeholder="加载失败" />
      <Select showSearch options={[]} placeholder="搜索无结果" />
    </div>
  );
}
`,O={title:`Select 选择器`,description:`下拉选择器，支持单选、多选、搜索和远程加载。`};function k(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{children:`基本用法`}),`
`,(0,l.jsx)(t.p,{children:`基础单选选择器。`}),`
`,(0,l.jsx)(s,{source:d,children:(0,l.jsx)(u,{})}),`
`,(0,l.jsx)(t.h2,{children:`带搜索`}),`
`,(0,l.jsxs)(t.p,{children:[`设置 `,(0,l.jsx)(t.code,{children:`showSearch`}),` 开启搜索过滤功能，输入时自动匹配选项。`]}),`
`,(0,l.jsx)(s,{source:p,children:(0,l.jsx)(f,{})}),`
`,(0,l.jsx)(t.h2,{children:`远程搜索`}),`
`,(0,l.jsxs)(t.p,{children:[`设置 `,(0,l.jsx)(t.code,{children:`filterOption={false}`}),` 关闭本地过滤，通过 `,(0,l.jsx)(t.code,{children:`onSearch`}),` 回调实现服务端搜索。`]}),`
`,(0,l.jsx)(s,{source:h,children:(0,l.jsx)(m,{})}),`
`,(0,l.jsx)(t.h2,{children:`多选模式`}),`
`,(0,l.jsxs)(t.p,{children:[`设置 `,(0,l.jsx)(t.code,{children:`mode="multiple"`}),` 开启多选，选中值为数组，以 Tag 形式展示。`]}),`
`,(0,l.jsx)(s,{source:_,children:(0,l.jsx)(g,{})}),`
`,(0,l.jsx)(t.h2,{children:`多选 + 搜索`}),`
`,(0,l.jsx)(t.p,{children:`多选模式下开启搜索，输入框跟在 Tag 后面。`}),`
`,(0,l.jsx)(s,{source:y,children:(0,l.jsx)(v,{})}),`
`,(0,l.jsx)(t.h2,{children:`三种尺寸`}),`
`,(0,l.jsxs)(t.p,{children:[`提供 `,(0,l.jsx)(t.code,{children:`sm`}),`、`,(0,l.jsx)(t.code,{children:`md`}),`、`,(0,l.jsx)(t.code,{children:`lg`}),` 三种尺寸，适配不同场景。`]}),`
`,(0,l.jsx)(s,{source:S,children:(0,l.jsx)(x,{})}),`
`,(0,l.jsx)(t.h2,{children:`状态`}),`
`,(0,l.jsx)(t.p,{children:`禁用、错误、可清空等状态。`}),`
`,(0,l.jsx)(s,{source:T,children:(0,l.jsx)(w,{})}),`
`,(0,l.jsx)(t.h2,{children:`下拉缺省态`}),`
`,(0,l.jsx)(t.p,{children:`加载中、加载失败、搜索无结果的不同缺省展示。`}),`
`,(0,l.jsx)(s,{source:D,children:(0,l.jsx)(E,{})}),`
`,(0,l.jsx)(t.h2,{children:`API`}),`
`,(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:`属性`}),(0,l.jsx)(t.th,{children:`说明`}),(0,l.jsx)(t.th,{children:`类型`}),(0,l.jsx)(t.th,{children:`默认值`})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`options`})}),(0,l.jsx)(t.td,{children:`选项数据`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`Array<{ label: string; value: T }>`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`[]`})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`value`})}),(0,l.jsx)(t.td,{children:`当前选中值`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`T | T[]`})}),(0,l.jsx)(t.td,{children:`-`})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`onChange`})}),(0,l.jsx)(t.td,{children:`选中值变化回调`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`(value: T | T[]) => void`})}),(0,l.jsx)(t.td,{children:`-`})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`placeholder`})}),(0,l.jsx)(t.td,{children:`占位文本`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`string`})}),(0,l.jsx)(t.td,{children:`-`})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`showSearch`})}),(0,l.jsx)(t.td,{children:`是否支持搜索`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`boolean`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`false`})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`filterOption`})}),(0,l.jsx)(t.td,{children:`是否本地过滤（设为 false 配合 onSearch 远程搜索）`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`boolean`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`true`})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`onSearch`})}),(0,l.jsx)(t.td,{children:`搜索回调`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`(keyword: string) => void`})}),(0,l.jsx)(t.td,{children:`-`})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`disabled`})}),(0,l.jsx)(t.td,{children:`是否禁用`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`boolean`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`false`})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`error`})}),(0,l.jsx)(t.td,{children:`是否错误态`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`boolean`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`false`})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`mode`})}),(0,l.jsx)(t.td,{children:`选择模式`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`"single" | "multiple"`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`"single"`})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`allowClear`})}),(0,l.jsx)(t.td,{children:`是否可清空`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`boolean`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`false`})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`loading`})}),(0,l.jsx)(t.td,{children:`是否加载中`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`boolean`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`false`})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`loadError`})}),(0,l.jsx)(t.td,{children:`是否加载失败`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`boolean`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`false`})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`size`})}),(0,l.jsx)(t.td,{children:`尺寸`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`"sm" | "md" | "lg"`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`"md"`})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`suffixIcon`})}),(0,l.jsx)(t.td,{children:`后缀图标`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`ReactNode`})}),(0,l.jsx)(t.td,{children:`-`})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`maxTagCount`})}),(0,l.jsx)(t.td,{children:`多选模式最多显示 Tag 数`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`number`})}),(0,l.jsx)(t.td,{children:`-`})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`dropdown`})}),(0,l.jsx)(t.td,{children:`下拉面板配置`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`SelectDropdownProps`})}),(0,l.jsx)(t.td,{children:`-`})]})]})]})]})}function A(e={}){let{wrapper:t}=e.components||{};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(k,{...e})}):k(e)}export{A as default,O as frontmatter};