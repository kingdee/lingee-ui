import{C as e,M as t,k as n}from"./dist-DCLsKzkS.js";import{t as r}from"./select-DLp7jlrZ.js";import{t as i}from"./DemoBox-D1az5eCZ.js";var a=t(n()),o=e();function s(){let[e,t]=(0,a.useState)(``);return(0,o.jsx)(r,{options:[{label:`仅查看`,value:`view`},{label:`可编辑`,value:`edit`},{label:`管理员`,value:`admin`},{label:`管理员`,value:`6admin`},{label:`管理员`,value:`5admin`},{label:`管理员`,value:`4admin`},{label:`管理员`,value:`3admin`},{label:`管理员`,value:`2admin`},{label:`管理员`,value:`1admin`},{label:`管理员`,value:`kadmin`},{label:`管理员`,value:`jadmin`},{label:`管理员`,value:`hadmin`},{label:`管理员`,value:`gadmin`},{label:`管理员`,value:`fadmin`},{label:`管理员`,value:`dadmin`},{label:`管理员`,value:`sadmin`},{label:`管理员`,value:`aadmin`}],value:e,onChange:e=>t(e),placeholder:`请选择权限`})}var c=`import { useState } from "react";
import { Select } from "lingee-ui";

export default function BasicDemo() {
  const [value, setValue] = useState<string>("");

  return (
    <Select
      options={[
        { label: "仅查看", value: "view" },
        { label: "可编辑", value: "edit" },
        { label: "管理员", value: "admin" },
        { label: "管理员", value: "6admin" },
        { label: "管理员", value: "5admin" },
        { label: "管理员", value: "4admin" },
        { label: "管理员", value: "3admin" },
        { label: "管理员", value: "2admin" },
        { label: "管理员", value: "1admin" },
        { label: "管理员", value: "kadmin" },
        { label: "管理员", value: "jadmin" },
        { label: "管理员", value: "hadmin" },
        { label: "管理员", value: "gadmin" },
        { label: "管理员", value: "fadmin" },
        { label: "管理员", value: "dadmin" },
        { label: "管理员", value: "sadmin" },
        { label: "管理员", value: "aadmin" },
      ]}
      value={value}
      onChange={(v) => setValue(v as string)}
      placeholder="请选择权限"
    />
  );
}
`;function l(){let[e,t]=(0,a.useState)(``);return(0,o.jsx)(r,{showSearch:!0,options:[{label:`张三`,value:`zhangsan`},{label:`李四`,value:`lisi`},{label:`王五`,value:`wangwu`},{label:`赵六`,value:`zhaoliu`},{label:`钱七`,value:`qianqi`}],value:e,onChange:e=>t(e),placeholder:`搜索姓名`})}var u=`import { useState } from "react";
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
`;function d(){let[e,t]=(0,a.useState)([]);return(0,o.jsx)(r,{mode:`multiple`,options:[{label:`React`,value:`react`},{label:`Vue`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`},{label:`Solid`,value:`solid`}],value:e,onChange:e=>t(e),placeholder:`请选择技术栈（可多选）`})}var f=`import { useState } from "react";
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
`,p=[{label:`选项一`,value:`1`},{label:`选项二`,value:`2`},{label:`选项三`,value:`3`}];function m(){let[e,t]=(0,a.useState)(``),[n,i]=(0,a.useState)(``),[s,c]=(0,a.useState)(``);return(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,o.jsx)(r,{size:`sm`,options:p,value:e,onChange:e=>t(e),placeholder:`小尺寸 sm`}),(0,o.jsx)(r,{size:`md`,options:p,value:n,onChange:e=>i(e),placeholder:`中尺寸 md（默认）`}),(0,o.jsx)(r,{size:`lg`,options:p,value:s,onChange:e=>c(e),placeholder:`大尺寸 lg`})]})}var h=`import { useState } from "react";
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
`,g={title:`Select 选择器`,description:`下拉选择器，支持单选、多选、搜索和远程加载。`};function _(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{children:`基本用法`}),`
`,(0,o.jsx)(t.p,{children:`基础单选选择器。`}),`
`,(0,o.jsx)(i,{source:c,children:(0,o.jsx)(s,{})}),`
`,(0,o.jsx)(t.h2,{children:`带搜索`}),`
`,(0,o.jsxs)(t.p,{children:[`设置 `,(0,o.jsx)(t.code,{children:`showSearch`}),` 开启搜索过滤功能。`]}),`
`,(0,o.jsx)(i,{source:u,children:(0,o.jsx)(l,{})}),`
`,(0,o.jsx)(t.h2,{children:`多选模式`}),`
`,(0,o.jsxs)(t.p,{children:[`设置 `,(0,o.jsx)(t.code,{children:`mode="multiple"`}),` 开启多选，选中值为数组。`]}),`
`,(0,o.jsx)(i,{source:f,children:(0,o.jsx)(d,{})}),`
`,(0,o.jsx)(t.h2,{children:`三种尺寸`}),`
`,(0,o.jsxs)(t.p,{children:[`提供 `,(0,o.jsx)(t.code,{children:`sm`}),`、`,(0,o.jsx)(t.code,{children:`md`}),`、`,(0,o.jsx)(t.code,{children:`lg`}),` 三种尺寸，适配不同场景。`]}),`
`,(0,o.jsx)(i,{source:h,children:(0,o.jsx)(m,{})}),`
`,(0,o.jsx)(t.h2,{children:`API`}),`
`,(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:`属性`}),(0,o.jsx)(t.th,{children:`说明`}),(0,o.jsx)(t.th,{children:`类型`}),(0,o.jsx)(t.th,{children:`默认值`})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`options`})}),(0,o.jsx)(t.td,{children:`选项数据`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`Array<{ label: string; value: string | number }>`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`[]`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`value`})}),(0,o.jsx)(t.td,{children:`当前选中值`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`string | string[]`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`onChange`})}),(0,o.jsx)(t.td,{children:`选中值变化回调`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`(value: string | string[]) => void`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`placeholder`})}),(0,o.jsx)(t.td,{children:`占位文本`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`string`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`showSearch`})}),(0,o.jsx)(t.td,{children:`是否支持搜索`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`false`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`filterOption`})}),(0,o.jsx)(t.td,{children:`是否本地过滤`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`true`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`onSearch`})}),(0,o.jsx)(t.td,{children:`搜索回调（远程搜索时使用）`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`(keyword: string) => void`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`disabled`})}),(0,o.jsx)(t.td,{children:`是否禁用`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`false`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`mode`})}),(0,o.jsx)(t.td,{children:`多选模式`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`"multiple"`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`allowClear`})}),(0,o.jsx)(t.td,{children:`是否可清空`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`false`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`loading`})}),(0,o.jsx)(t.td,{children:`是否加载中`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`false`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`size`})}),(0,o.jsx)(t.td,{children:`尺寸`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`"sm" | "md" | "lg"`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`"md"`})})]})]})]})]})}function v(e={}){let{wrapper:t}=e.components||{};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(_,{...e})}):_(e)}export{v as default,g as frontmatter};