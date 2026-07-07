import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{r}from"./index-D4H_InIO.js";import{T as s}from"./index-Cv8F486c.js";const t={locale:"zh-CN",Button:{},Breadcrumb:{more:"更多",back:"返回"}},a=r.createContext(t);function i({locale:e=t,children:o}){return n.jsxs(a.Provider,{value:e,children:[o,n.jsx(s,{})]})}i.displayName="LingeeProvider";function c(){return r.useContext(a)}function p(e){return c()[e]}i.__docgenInfo={description:`组件库根 Provider

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
  Breadcrumb: {
    more: "更多",
    back: "返回",
  },
  // 后续组件在此扩展，如：
  // Modal: { okText: "确定", cancelText: "取消" },
}`,computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{i as L,p as u};
