import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{a as r,t as i}from"./provider-BWqppJYI.js";import{t as a}from"./button-B7wPs43G.js";import{t as o}from"./zh-CN-DXAM4KEV.js";import{o as s}from"./i18n-BkT3ZQ8C.js";import{n as c,t as l}from"./radio-37lwC9H5.js";import{t as u}from"./pagination-DE8Fk3UH.js";var d=n();function f(){return(0,d.jsx)(a,{variant:`primary`,onClick:()=>r.success(`Saved`),children:`Show toast`})}var p=`import { Button, toast } from "lingee-ui";

// 文档站已在根节点包裹 LingeeProvider，故此处不再嵌套（嵌套会重复挂载 Toaster）。
// 实际项目中需在应用入口包一次，否则下方的 toast 不会显示。
export default function BasicDemo() {
  return (
    <Button variant="primary" onClick={() => toast.success("Saved")}>
      Show toast
    </Button>
  );
}
`,m=e(t());function h(){let[e,t]=(0,m.useState)(`zh-CN`);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,d.jsxs)(l,{value:e,onChange:t,orientation:`horizontal`,children:[(0,d.jsx)(c,{value:`zh-CN`,children:`zhCN`}),(0,d.jsx)(c,{value:`en-US`,children:`enUS`})]}),(0,d.jsx)(i,{locale:e===`en-US`?s:o,children:(0,d.jsx)(u,{total:120,defaultPageSize:10,showTotal:!0,showQuickJumper:!0})})]})}var g=`import { useState } from "react";
import { LingeeProvider, Pagination, RadioGroup, RadioItem, zhCN, enUS } from "lingee-ui";

export default function LocaleDemo() {
  const [lang, setLang] = useState("zh-CN");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <RadioGroup value={lang} onChange={setLang} orientation="horizontal">
        <RadioItem value="zh-CN">zhCN</RadioItem>
        <RadioItem value="en-US">enUS</RadioItem>
      </RadioGroup>

      {/* 为在单页内演示切换效果，此处刻意嵌套一层 Provider 覆盖外层 locale；
          实际项目只需在应用入口包一次 */}
      <LingeeProvider locale={lang === "en-US" ? enUS : zhCN}>
        <Pagination total={120} defaultPageSize={10} showTotal showQuickJumper />
      </LingeeProvider>
    </div>
  );
}
`;export{f as i,h as n,p as r,g as t};