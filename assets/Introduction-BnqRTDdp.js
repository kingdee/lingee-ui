import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as i}from"./index-BqIVwv1J.js";import{M as d}from"./index-B0wMEwUx.js";import"./index-D4H_InIO.js";import"./iframe-kONk301f.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Overview/Introduction"}),`
`,n.jsx(e.h1,{id:"lingee-ui",children:"lingee-ui"}),`
`,n.jsx(e.p,{children:"轻量级 React 企业级组件库，为金蝶灵基产品线提供统一的 UI 基础设施。"}),`
`,n.jsx(e.h2,{id:"特性",children:"特性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"React 18+"})," — 支持 React 18 和 19"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TypeScript"})," — 全量类型覆盖，组件 Props 开箱可用"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Design Token"})," — 双层 CSS 变量体系（Primitives → Semantic），支持主题切换"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"轻量无副作用"})," — 支持 tree-shaking，按需引入零冗余"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"BEM 样式"})," — ",n.jsx(e.code,{children:"lg-"})," 前缀类名，非 CSS Modules，消费方可覆盖"]}),`
`]}),`
`,n.jsx(e.h2,{id:"安装",children:"安装"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install lingee-ui
# or
pnpm add lingee-ui
`})}),`
`,n.jsx(e.h2,{id:"快速使用",children:"快速使用"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { LingeeProvider, Button, Tooltip, toast } from "lingee-ui";
import "lingee-ui/styles.css"; // 全局样式 + Token

function App() {
  return (
    <LingeeProvider>
      <Tooltip content="点击操作">
        <Button variant="primary" onClick={() => toast.success("完成")}>
          提交
        </Button>
      </Tooltip>
    </LingeeProvider>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"lingeeprovider",children:"LingeeProvider"}),`
`,n.jsxs(e.p,{children:["应用顶层必须包裹 ",n.jsx(e.code,{children:"<LingeeProvider>"}),"，它提供两个全局能力："]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Toast 容器"})," — 命令式调用 ",n.jsx(e.code,{children:"toast.success()"})," / ",n.jsx(e.code,{children:"toast.error()"})," 等需要 Provider 内部挂载的 ",n.jsx(e.code,{children:"<Toaster />"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"国际化"})," — 通过 ",n.jsx(e.code,{children:"locale"})," prop 切换组件内置文案语言"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { LingeeProvider, zhCN, enUS } from "lingee-ui";

// 默认中文
<LingeeProvider>
  <App />
</LingeeProvider>

// 切换英文
<LingeeProvider locale={enUS}>
  <App />
</LingeeProvider>
`})}),`
`,n.jsx(e.h3,{id:"toast-命令式-api",children:"Toast 命令式 API"}),`
`,n.jsxs(e.p,{children:["Toast 依赖 ",n.jsx(e.code,{children:"<LingeeProvider>"})," 内部的 ",n.jsx(e.code,{children:"<Toaster />"})," 渲染容器，使用时无需额外引入组件："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { toast } from "lingee-ui";

toast.success("操作成功");
toast.error("操作失败");
toast.warning("请注意");
toast.info("提示信息");
`})}),`
`,n.jsx(e.h3,{id:"国际化",children:"国际化"}),`
`,n.jsxs(e.p,{children:["组件库内置 ",n.jsx(e.code,{children:"zhCN"}),"（中文，默认）和 ",n.jsx(e.code,{children:"enUS"}),"（英文）两套语言包。语言包按组件名组织，覆盖 Select、Upload、DatePicker、Pagination、Dialog 等组件的内置文案。"]}),`
`,n.jsxs(e.p,{children:["自定义语言包只需传入与 ",n.jsx(e.code,{children:"zhCN"})," 同结构的对象："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { LingeeProvider } from "lingee-ui";

const customLocale = {
  locale: "ja-JP",
  Pagination: { total: "合計 {total} 件", ... },
  // ...其他组件翻译
};

<LingeeProvider locale={customLocale}>
  <App />
</LingeeProvider>
`})}),`
`,n.jsxs(e.p,{children:["组件内部通过 ",n.jsx(e.code,{children:"useComponentLocale"})," Hook 获取当前语言文案："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useComponentLocale } from "lingee-ui";

function MyComponent() {
  const locale = useComponentLocale("Pagination");
  return <span>{locale.total.replace("{total}", "100")}</span>;
}
`})}),`
`,n.jsx(e.h2,{id:"组件列表",children:"组件列表"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"组件"}),n.jsx("th",{children:"说明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"Button"}),n.jsx("td",{children:"按钮，支持 5 种变体 × 4 种尺寸 × 危险/加载/禁用状态"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Tabs"}),n.jsx("td",{children:"选项卡，支持 line / pill / capsule 三种风格"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Tooltip"}),n.jsx("td",{children:"文字提示气泡"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Popover"}),n.jsx("td",{children:"弹出面板"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Dropdown"}),n.jsx("td",{children:"下拉菜单，支持快捷 items 模式和组合式 API"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Dialog"}),n.jsx("td",{children:"对话框"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Drawer"}),n.jsx("td",{children:"抽屉面板"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Toast"}),n.jsx("td",{children:"轻提示（命令式 API）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Input"}),n.jsx("td",{children:"输入框"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Textarea"}),n.jsx("td",{children:"多行文本输入"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Select"}),n.jsx("td",{children:"选择器"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Switch"}),n.jsx("td",{children:"开关"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Checkbox"}),n.jsx("td",{children:"复选框"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Radio"}),n.jsx("td",{children:"单选框"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Slider"}),n.jsx("td",{children:"滑动条"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"DatePicker"}),n.jsx("td",{children:"日期选择器"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"RangePicker"}),n.jsx("td",{children:"日期范围选择器"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"TimePicker"}),n.jsx("td",{children:"时间选择器"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ColorPicker"}),n.jsx("td",{children:"颜色选择器"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Tag"}),n.jsx("td",{children:"标签"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Table"}),n.jsx("td",{children:"表格"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Pagination"}),n.jsx("td",{children:"分页"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ScrollArea"}),n.jsx("td",{children:"滚动区域，自定义跨浏览器滚动条"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Form"}),n.jsx("td",{children:"表单"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Upload"}),n.jsx("td",{children:"文件上传"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Image"}),n.jsx("td",{children:"图片预览"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Avatar"}),n.jsx("td",{children:"头像"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Alert"}),n.jsx("td",{children:"警告提示"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Skeleton"}),n.jsx("td",{children:"骨架屏"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Spin"}),n.jsx("td",{children:"加载中"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Empty"}),n.jsx("td",{children:"空状态"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Steps"}),n.jsx("td",{children:"步骤条"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Breadcrumb"}),n.jsx("td",{children:"面包屑"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Divider"}),n.jsx("td",{children:"分割线"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Flex"}),n.jsx("td",{children:"弹性布局容器"})]})]})]}),`
`,n.jsx(e.h2,{id:"token-体系",children:"Token 体系"}),`
`,n.jsx(e.p,{children:"组件样式全部基于 CSS 变量，分为两层："}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Primitives（原子值）"})," — 色板、固定圆角/间距/阴影的原始数值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Semantic Tokens（语义层）"})," — 按用途命名的变量，组件直接引用"]}),`
`]}),`
`,n.jsxs(e.p,{children:["通过覆盖 ",n.jsx(e.code,{children:":root"})," 中的语义变量即可实现主题切换，无需修改组件源码。"]}),`
`,n.jsxs(e.p,{children:["详细 Token 清单请查看左侧 ",n.jsx(e.strong,{children:"Overview / Design Tokens"})," 页面。"]}),`
`,n.jsx(e.h2,{id:"图标",children:"图标"}),`
`,n.jsxs(e.p,{children:["图标统一使用 ",n.jsx(e.a,{href:"https://kingdee.github.io/lingee-icon/",rel:"nofollow",children:n.jsx(e.code,{children:"lingee-icon"})})," 库，作为 peerDependency 按需引入。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Plus, Edit, Trash } from "lingee-icon";

<Button variant="primary" icon={<Plus size={18} />}>新建</Button>
`})})]})}function g(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{g as default};
