import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{n as t}from"./SlashLg-CP1If2Bd.js";import{t as n}from"./ChevronRight-DKCn-Rv7.js";import{t as r}from"./breadcrumb-DpQUvtng.js";var i=e();function a(){return(0,i.jsx)(r,{items:[{key:`home`,label:`Home`,icon:(0,i.jsx)(t,{}),onClick:()=>{}},{key:`list`,label:`List`,onClick:()=>{}},{key:`detail`,label:`Detail`}]})}var o=`import { Breadcrumb } from "lingee-ui";
import { House } from "lingee-icon";

/**
 * Breadcrumb 基础用法
 *
 * 最后一项为当前页，自动加粗且不可点击。其余项传 onClick 做路由跳转
 * （示例内为空实现），需要整页导航时改传 href。
 */
export default function BasicDemo() {
  return (
    <Breadcrumb
      items={[
        { key: "home", label: "Home", icon: <House />, onClick: () => {} },
        { key: "list", label: "List", onClick: () => {} },
        { key: "detail", label: "Detail" },
      ]}
    />
  );
}
`,s=[{key:`home`,label:`Home`,onClick:()=>{}},{key:`list`,label:`List`,onClick:()=>{}},{key:`detail`,label:`Detail`}];function c(){return(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,i.jsx)(r,{size:`md`,items:s}),(0,i.jsx)(r,{size:`sm`,items:s})]})}var l=`import { Breadcrumb } from "lingee-ui";

const items = [
  { key: "home", label: "Home", onClick: () => {} },
  { key: "list", label: "List", onClick: () => {} },
  { key: "detail", label: "Detail" },
];

/**
 * Breadcrumb 尺寸
 *
 * 默认分隔符随尺寸变化：md 为斜杠，sm 为尖括号。
 */
export default function SizesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Breadcrumb size="md" items={items} />
      <Breadcrumb size="sm" items={items} />
    </div>
  );
}
`,u=[{key:`home`,label:`Home`,onClick:()=>{}},{key:`category`,label:`Category`,onClick:()=>{}},{key:`details`,label:`Details`}];function d(){return(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,i.jsx)(r,{items:u,separator:(0,i.jsx)(n,{})}),(0,i.jsx)(r,{items:u,separator:`›`})]})}var f=`import { Breadcrumb } from "lingee-ui";
import { ChevronRight } from "lingee-icon";

const items = [
  { key: "home", label: "Home", onClick: () => {} },
  { key: "category", label: "Category", onClick: () => {} },
  { key: "details", label: "Details" },
];

/**
 * Breadcrumb 自定义分隔符
 *
 * separator 接受任意 ReactNode，图标与纯文本均可。
 */
export default function SeparatorDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Breadcrumb items={items} separator={<ChevronRight />} />
      <Breadcrumb items={items} separator="›" />
    </div>
  );
}
`,p=[{key:`home`,label:`Home`,onClick:()=>{}},{key:`level-1`,label:`Level 1`,onClick:()=>{}},{key:`level-2`,label:`Level 2`,onClick:()=>{}},{key:`level-3`,label:`Level 3`,onClick:()=>{}},{key:`current`,label:`Current page`}];function m(){return(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,i.jsx)(r,{items:p,maxItems:3}),(0,i.jsx)(r,{items:[{key:`home`,label:`Home`,onClick:()=>{}},{key:`long`,label:`A folder name long enough to be truncated`,onClick:()=>{}},{key:`current`,label:`Current page`}],itemMaxWidth:160}),(0,i.jsx)(r,{items:p,maxItems:3,onBack:()=>{}})]})}var h=`import { Breadcrumb } from "lingee-ui";

const longPath = [
  { key: "home", label: "Home", onClick: () => {} },
  { key: "level-1", label: "Level 1", onClick: () => {} },
  { key: "level-2", label: "Level 2", onClick: () => {} },
  { key: "level-3", label: "Level 3", onClick: () => {} },
  { key: "current", label: "Current page" },
];

/**
 * Breadcrumb 长路径处理
 *
 * maxItems 把中间项收进下拉菜单，itemMaxWidth 限制单项宽度并打点，
 * onBack 在最前面补一个返回箭头。三者可独立使用。
 */
export default function CollapseDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Breadcrumb items={longPath} maxItems={3} />
      <Breadcrumb
        items={[
          { key: "home", label: "Home", onClick: () => {} },
          { key: "long", label: "A folder name long enough to be truncated", onClick: () => {} },
          { key: "current", label: "Current page" },
        ]}
        itemMaxWidth={160}
      />
      <Breadcrumb items={longPath} maxItems={3} onBack={() => {}} />
    </div>
  );
}
`;export{l as a,a as c,d as i,m as n,c as o,f as r,o as s,h as t};