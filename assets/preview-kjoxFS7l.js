import{j as e}from"./jsx-runtime-BO8uF4Og.js";/* empty css                */import{r as i}from"./index-D4H_InIO.js";import{T as s}from"./index-B-KPT3RT.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./utils-HnQPFlDo.js";import"./XLg-Buk6fdo7.js";import"./utils-YwZfuvH0-DLWngkAW.js";import"./ExclamationCircle-2GOVdgX_.js";const t={locale:"zh-CN",Button:{}},a=i.createContext(t);function r({locale:o=t,children:n}){return e.jsxs(a.Provider,{value:o,children:[n,e.jsx(s,{})]})}r.displayName="LingeeProvider";r.__docgenInfo={description:`组件库根 Provider

在应用顶层包裹一次，即可启用：
- 多语言（通过 locale prop 切换）
- 全局 Toast（toast.success/error/... 命令式调用）

\`\`\`tsx
import { LingeeProvider } from "lingee-ui";

<LingeeProvider>
  <App />
</LingeeProvider>
\`\`\``,methods:[],displayName:"LingeeProvider",props:{locale:{required:!1,tsType:{name:"zhCN"},description:"语言包，默认中文",defaultValue:{value:`{
  locale: "zh-CN",
  Button: {},
  // 后续组件在此扩展，如：
  // Modal: { okText: "确定", cancelText: "取消" },
}`,computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const h={parameters:{options:{storySort:{order:["Overview",["Introduction","Design Tokens"],"Components"]}},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[o=>e.jsx(r,{children:e.jsx(o,{})})]};export{h as default};
