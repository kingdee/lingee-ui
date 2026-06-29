import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as r}from"./index-BqIVwv1J.js";import{M as o}from"./index-bZyivOAB.js";import"./index-D4H_InIO.js";import"./iframe-BgFgdv2k.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Overview/Introduction"}),`
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, Tooltip, Toast } from "lingee-ui";
import "lingee-ui/styles.css"; // 全局样式 + Token

function App() {
  return (
    <Tooltip content="点击操作">
      <Button variant="primary" onClick={() => Toast.success("完成")}>
        提交
      </Button>
    </Tooltip>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"组件列表",children:"组件列表"}),`
`,n.jsx(e.p,{children:`| 组件 | 说明 |
|------|------|
| Button | 按钮，支持 5 种变体 × 4 种尺寸 × 危险/加载/禁用状态 |
| Tabs | 选项卡，支持 line / pill / capsule 三种风格 |
| Tooltip | 文字提示气泡 |
| Popover | 弹出面板 |
| Dialog | 对话框 |
| Toast | 轻提示 |
| Input | 输入框 |
| Textarea | 多行文本输入 |
| Switch | 开关 |
| Tag | 标签 |`}),`
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
`})})]})}function u(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{u as default};
