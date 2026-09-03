import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{t}from"./DemoBox-BZeiswLE.js";import{i as n,n as r,r as i,t as a}from"./locale-Be_c7ox8.js";var o=e(),s={title:`LingeeProvider 全局配置`,description:`组件库统一根 Provider，提供多语言上下文与全局 Toast 挂载点，需在应用顶层包裹一次。`};function c(e){let s={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{children:`使用场景`}),`
`,(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:`LingeeProvider`}),` 是组件库的根 Provider，`,(0,o.jsx)(s.strong,{children:`在应用顶层包裹一次`}),`即可启用两个全局能力：`]}),`
`,(0,o.jsxs)(s.ul,{children:[`
`,(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:`全局 Toast`}),` — 内置 `,(0,o.jsx)(s.code,{children:`Toaster`}),` 挂载点，未包裹时 `,(0,o.jsx)(s.code,{children:`toast.success()`}),` 等命令式调用不会显示任何内容`]}),`
`,(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:`多语言`}),` — 通过 `,(0,o.jsx)(s.code,{children:`locale`}),` 注入语言包，组件内置文案（分页的「共 N 条」、上传的「点击上传」、各组件的 `,(0,o.jsx)(s.code,{children:`aria-label`}),` 等）随之切换`]}),`
`,(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:`组件级基线配置`}),` — 按组件名传入配置对象，如 `,(0,o.jsx)(s.code,{children:`dialog={{ zIndex: 10000 }}`}),` 统一设置 Dialog 层级`]}),`
`]}),`
`,(0,o.jsx)(s.p,{children:`不包裹 Provider 时，组件仍可正常渲染，但上述能力失效。`}),`
`,(0,o.jsx)(s.h2,{children:`基本用法`}),`
`,(0,o.jsx)(s.p,{children:`在应用入口包裹一次即可，无需逐页包裹：`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`import { LingeeProvider } from "lingee-ui";
import "lingee-ui/styles.css";

createRoot(document.getElementById("root")!).render(
  <LingeeProvider>
    <App />
  </LingeeProvider>,
);
`})}),`
`,(0,o.jsxs)(s.p,{children:[`包裹之后，应用内任意位置的命令式 `,(0,o.jsx)(s.code,{children:`toast`}),` 调用都能正常显示：`]}),`
`,(0,o.jsx)(t,{source:i,children:(0,o.jsx)(n,{})}),`
`,(0,o.jsx)(s.h2,{children:`组件级基线配置`}),`
`,(0,o.jsxs)(s.p,{children:[`配置按组件拆成对象，避免不同组件的同名属性互相影响。下面的配置同时作用于声明式 `,(0,o.jsx)(s.code,{children:`Dialog`}),` 与命令式 `,(0,o.jsx)(s.code,{children:`Dialog.confirm()`}),`；单次调用传入的 `,(0,o.jsx)(s.code,{children:`zIndex`}),` 优先于基线。`]}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`<LingeeProvider dialog={{ zIndex: 10000 }}>
  <App />
</LingeeProvider>
`})}),`
`,(0,o.jsxs)(s.p,{children:[`嵌套 Provider 时按组件对象浅合并，内层只覆盖自己声明的字段，未声明的继承外层。如上例内层写 `,(0,o.jsx)(s.code,{children:`dialog={{}}`}),` 仍会拿到 `,(0,o.jsx)(s.code,{children:`zIndex: 10000`}),`。`]}),`
`,(0,o.jsxs)(s.p,{children:[`配置对象可以直接内联，无需在调用侧 `,(0,o.jsx)(s.code,{children:`useMemo`}),` —— Provider 内部按字段做依赖，不会因为对象引用每次变化而触发下游重渲染。`]}),`
`,(0,o.jsx)(s.h2,{children:`切换语言`}),`
`,(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:`locale`}),` 接收`,(0,o.jsx)(s.strong,{children:`语言包对象`}),`而非语言代码字符串，组件库导出 `,(0,o.jsx)(s.code,{children:`zhCN`}),` 与 `,(0,o.jsx)(s.code,{children:`enUS`}),` 两个内置语言包，默认中文。`]}),`
`,(0,o.jsx)(t,{source:a,children:(0,o.jsx)(r,{})}),`
`,(0,o.jsx)(s.h2,{children:`在业务代码中读取文案`}),`
`,(0,o.jsx)(s.p,{children:`需要复用组件库内置文案时，用两个 Hook 取值，避免在业务侧重复维护翻译：`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`import { useLocale, useComponentLocale } from "lingee-ui";

// 取完整语言包
const locale = useLocale();

// 取单个组件的文案片段
const paginationLocale = useComponentLocale("Pagination");
console.log(paginationLocale.total); // "共 {total} 条"
`})}),`
`,(0,o.jsx)(s.h2,{children:`API`}),`
`,(0,o.jsx)(s.h3,{children:`LingeeProvider`}),`
`,(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:`属性`}),(0,o.jsx)(s.th,{children:`说明`}),(0,o.jsx)(s.th,{children:`类型`}),(0,o.jsx)(s.th,{children:`默认值`})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`locale`})}),(0,o.jsxs)(s.td,{children:[`语言包对象，传 `,(0,o.jsx)(s.code,{children:`zhCN`}),` 或 `,(0,o.jsx)(s.code,{children:`enUS`})]}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`Locale`})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`zhCN`})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`dialog`})}),(0,o.jsxs)(s.td,{children:[`Dialog 组件基线配置，当前支持 `,(0,o.jsx)(s.code,{children:`zIndex`})]}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`DialogConfig`})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`{}`})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`children`})}),(0,o.jsx)(s.td,{children:`应用内容`}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`ReactNode`})}),(0,o.jsx)(s.td,{children:`-`})]})]})]}),`
`,(0,o.jsx)(s.h3,{children:`Hooks`}),`
`,(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:`方法`}),(0,o.jsx)(s.th,{children:`说明`}),(0,o.jsx)(s.th,{children:`类型`})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`useLocale`})}),(0,o.jsx)(s.td,{children:`获取当前完整语言包`}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`() => Locale`})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`useComponentLocale`})}),(0,o.jsx)(s.td,{children:`获取指定组件的语言包片段`}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`(componentName: keyof Locale) => Locale[K]`})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`useComponentConfig`})}),(0,o.jsx)(s.td,{children:`获取当前生效的组件级配置（已按嵌套合并）`}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`() => ComponentConfig`})})]})]})]}),`
`,(0,o.jsx)(s.h3,{children:`导出的语言包`}),`
`,(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:`导出名`}),(0,o.jsx)(s.th,{children:`说明`})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`zhCN`})}),(0,o.jsx)(s.td,{children:`中文语言包（默认）`})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`enUS`})}),(0,o.jsx)(s.td,{children:`英文语言包`})]})]})]}),`
`,(0,o.jsx)(s.h2,{children:`注意事项`}),`
`,(0,o.jsxs)(s.ul,{children:[`
`,(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:`locale`}),` 传的是对象，写成 `,(0,o.jsx)(s.code,{children:`locale="zh-CN"`}),` 会导致类型错误与文案失效`]}),`
`,(0,o.jsxs)(s.li,{children:[`自定义语言包需符合 `,(0,o.jsx)(s.code,{children:`Locale`}),` 类型（结构与 `,(0,o.jsx)(s.code,{children:`zhCN`}),` 一致），建议基于 `,(0,o.jsx)(s.code,{children:`zhCN`}),` 展开覆盖需要改的字段`]}),`
`,(0,o.jsxs)(s.li,{children:[`Provider 通常只需在入口包一次；确有局部覆盖需求时可嵌套，`,(0,o.jsx)(s.code,{children:`locale`}),` 与组件配置以最内层为准，`,(0,o.jsx)(s.code,{children:`Toaster`}),` 与 Tooltip 容器仍只由最外层挂载，不会重复`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}export{l as default,s as frontmatter};