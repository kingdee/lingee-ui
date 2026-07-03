import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as l}from"./index-BqIVwv1J.js";import{M as r}from"./index-BlhKbsxv.js";import"./index-D4H_InIO.js";import"./iframe-CMJXjbSj.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function c(d){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Overview/Design Tokens"}),`
`,e.jsx(n.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsxs(n.p,{children:["lingee-ui 的样式体系基于 ",e.jsx(n.strong,{children:"CSS 变量（Custom Properties）"})," 构建，采用两层结构："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Primitives（色板 / 原始值）
  └── Semantic Tokens（语义层 → 组件直接引用）
`})}),`
`,e.jsxs(n.p,{children:["组件源码中只引用语义层变量，通过覆盖 ",e.jsx(n.code,{children:":root"})," 即可切换主题。"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"命名规则",children:"命名规则"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`--lg-g-{类别}-{语义角色}-{状态}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"类别"}),"：",e.jsx(n.code,{children:"fg-color"}),"（前景）/ ",e.jsx(n.code,{children:"border-color"}),"（边框）/ ",e.jsx(n.code,{children:"bg-color"}),"（背景）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"语义角色"}),"：",e.jsx(n.code,{children:"primary"})," / ",e.jsx(n.code,{children:"danger"})," / ",e.jsx(n.code,{children:"warning"})," / ",e.jsx(n.code,{children:"success"})," / ",e.jsx(n.code,{children:"progress"})," / ",e.jsx(n.code,{children:"link"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"状态"}),"：",e.jsx(n.code,{children:"default"})," / ",e.jsx(n.code,{children:"hover"})," / ",e.jsx(n.code,{children:"pressed"})," / ",e.jsx(n.code,{children:"disabled"})," / ",e.jsx(n.code,{children:"muted"})," / ",e.jsx(n.code,{children:"emphasis"})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"前景色文本--图标",children:"前景色（文本 / 图标）"}),`
`,e.jsx(n.p,{children:"用于文本、图标等前景元素。"}),`
`,e.jsxs(n.p,{children:[`| Token | 用途 | 引用值 |
|-------|------|--------|
| `,e.jsx(n.code,{children:"--lg-g-fg-color-white"})," | 白色文本（深色背景上） | ",e.jsx(n.code,{children:"--lg-white-100"}),` |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-attention"})," | 强调标题 | ",e.jsx(n.code,{children:"--lg-black-94"}),` |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-default"})," | 默认正文 | ",e.jsx(n.code,{children:"--lg-black-82"}),` |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-muted"})," | 次要文本 | ",e.jsx(n.code,{children:"--lg-black-64"}),` |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-description"})," | 辅助说明 | ",e.jsx(n.code,{children:"--lg-black-46"}),` |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-disabled"})," | 禁用状态 | ",e.jsx(n.code,{children:"--lg-black-28"})," |"]}),`
`,e.jsx(n.h3,{id:"品牌色primary",children:"品牌色（Primary）"}),`
`,e.jsxs(n.p,{children:[`| Token | 用途 |
|-------|------|
| `,e.jsx(n.code,{children:"--lg-g-fg-color-primary-default"}),` | 品牌色文本/图标 |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-primary-hover"}),` | 悬停态 |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-primary-pressed"}),` | 按下态 |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-primary-disabled"})," | 禁用态 |"]}),`
`,e.jsx(n.h3,{id:"危险色danger",children:"危险色（Danger）"}),`
`,e.jsxs(n.p,{children:[`| Token | 用途 |
|-------|------|
| `,e.jsx(n.code,{children:"--lg-g-fg-color-danger-default"}),` | 错误/危险文本 |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-danger-hover"}),` | 悬停态 |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-danger-pressed"}),` | 按下态 |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-danger-disabled"})," | 禁用态 |"]}),`
`,e.jsx(n.h3,{id:"其它语义色",children:"其它语义色"}),`
`,e.jsxs(n.p,{children:[`| Token | 用途 |
|-------|------|
| `,e.jsx(n.code,{children:"--lg-g-fg-color-warning-default"}),` | 警示色 |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-success-default"}),` | 成功色 |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-progress-default"}),` | 进行中 |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-link-default"}),` | 链接默认色 |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-link-hover"}),` | 链接悬停 |
| `,e.jsx(n.code,{children:"--lg-g-fg-color-link-pressed"})," | 链接按下 |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"边框色",children:"边框色"}),`
`,e.jsx(n.p,{children:"用于输入框边框、分割线、卡片描边等。"}),`
`,e.jsxs(n.p,{children:[`| Token | 用途 |
|-------|------|
| `,e.jsx(n.code,{children:"--lg-g-border-color-emphasis"}),` | 强调边框 |
| `,e.jsx(n.code,{children:"--lg-g-border-color-default"}),` | 默认边框 |
| `,e.jsx(n.code,{children:"--lg-g-border-color-muted"}),` | 弱化边框 |
| `,e.jsx(n.code,{children:"--lg-g-border-color-leaf"})," | 叶子层边框 |"]}),`
`,e.jsxs(n.p,{children:["各语义色同样提供 ",e.jsx(n.code,{children:"default"})," / ",e.jsx(n.code,{children:"muted"})," / ",e.jsx(n.code,{children:"hover"})," / ",e.jsx(n.code,{children:"pressed"})," / ",e.jsx(n.code,{children:"disabled"})," 变体，命名模式："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`--lg-g-border-color-{primary|danger|warning|success|progress}-{状态}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"背景色",children:"背景色"}),`
`,e.jsxs(n.p,{children:[`| Token | 用途 |
|-------|------|
| `,e.jsx(n.code,{children:"--lg-g-bg-color-default"}),` | 页面/卡片默认白底 |
| `,e.jsx(n.code,{children:"--lg-g-bg-color-emphasis"}),` | 强调背景（半透明白） |
| `,e.jsx(n.code,{children:"--lg-g-bg-color-subtle"}),` | 极浅底（black 2%） |
| `,e.jsx(n.code,{children:"--lg-g-bg-color-muted"}),` | 浅底（black 3%） |
| `,e.jsx(n.code,{children:"--lg-g-bg-color-inset"}),` | 嵌入区域 |
| `,e.jsx(n.code,{children:"--lg-g-bg-color-neutral-emphasis"}),` | 中性强调底 |
| `,e.jsx(n.code,{children:"--lg-g-bg-color-neutral-muted"})," | 中性弱底 |"]}),`
`,e.jsx(n.h3,{id:"品牌色背景",children:"品牌色背景"}),`
`,e.jsxs(n.p,{children:[`| Token | 用途 |
|-------|------|
| `,e.jsx(n.code,{children:"--lg-g-bg-color-primary-emphasis"}),` | 实色品牌底（按钮等） |
| `,e.jsx(n.code,{children:"--lg-g-bg-color-primary-muted"}),` | 浅底品牌色（选中行、标签底） |
| `,e.jsx(n.code,{children:"--lg-g-bg-color-primary-hover"}),` | 悬停态 |
| `,e.jsx(n.code,{children:"--lg-g-bg-color-primary-pressed"}),` | 按下态 |
| `,e.jsx(n.code,{children:"--lg-g-bg-color-primary-disabled"}),` | 禁用态 |
| `,e.jsx(n.code,{children:"--lg-g-bg-color-primary-gradient-from"}),` | 渐变起始 |
| `,e.jsx(n.code,{children:"--lg-g-bg-color-primary-gradient-to"})," | 渐变结束 |"]}),`
`,e.jsx(n.p,{children:"各语义色（danger / warning / success / progress）均提供相同模式的背景变体。"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"圆角",children:"圆角"}),`
`,e.jsxs(n.p,{children:[`| Token | 值 | 场景 |
|-------|-----|------|
| `,e.jsx(n.code,{children:"--lg-radius-small"}),` | 4px | 小元素（标签、徽章） |
| `,e.jsx(n.code,{children:"--lg-radius-medium"}),` | 6px | 输入框、按钮默认 |
| `,e.jsx(n.code,{children:"--lg-radius-x-medium"}),` | 8px | 卡片、面板 |
| `,e.jsx(n.code,{children:"--lg-radius-large"}),` | 12px | 对话框 |
| `,e.jsx(n.code,{children:"--lg-radius-x-large"}),` | 16px | 大型面板 |
| `,e.jsx(n.code,{children:"--lg-radius-2x-large"}),` | 20px | — |
| `,e.jsx(n.code,{children:"--lg-radius-3x-large"}),` | 24px | — |
| `,e.jsx(n.code,{children:"--lg-radius-4x-large"}),` | 28px | — |
| `,e.jsx(n.code,{children:"--lg-radius-5x-large"}),` | 32px | — |
| `,e.jsx(n.code,{children:"--lg-radius-circle"}),` | 50% | 圆形头像 |
| `,e.jsx(n.code,{children:"--lg-radius-pill"})," | 999px | 胶囊按钮 |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"间距",children:"间距"}),`
`,e.jsxs(n.p,{children:[`| Token | 值 | 用途 |
|-------|-----|------|
| `,e.jsx(n.code,{children:"--lg-spacing-3x-small"}),` | 2px | 极小内边距 |
| `,e.jsx(n.code,{children:"--lg-spacing-2x-small"}),` | 4px | 图标与文字间距 |
| `,e.jsx(n.code,{children:"--lg-spacing-1-5x-small"}),` | 6px | — |
| `,e.jsx(n.code,{children:"--lg-spacing-x-small"}),` | 8px | 紧凑间距 |
| `,e.jsx(n.code,{children:"--lg-spacing-0-5x-small"}),` | 10px | — |
| `,e.jsx(n.code,{children:"--lg-spacing-small"}),` | 12px | 组件内边距 |
| `,e.jsx(n.code,{children:"--lg-spacing-medium"}),` | 16px | 标准间距 |
| `,e.jsx(n.code,{children:"--lg-spacing-large"}),` | 20px | 区块间距 |
| `,e.jsx(n.code,{children:"--lg-spacing-x-large"}),` | 28px | 大区块 |
| `,e.jsx(n.code,{children:"--lg-spacing-2x-large"}),` | 36px | — |
| `,e.jsx(n.code,{children:"--lg-spacing-3x-large"}),` | 48px | — |
| `,e.jsx(n.code,{children:"--lg-spacing-4x-large"})," | 72px | — |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"阴影",children:"阴影"}),`
`,e.jsxs(n.p,{children:[`| Token | 值 | 场景 |
|-------|-----|------|
| `,e.jsx(n.code,{children:"--lg-shadow-sm"})," | ",e.jsx(n.code,{children:"0 1px 2px …, 0 1px 4px …"}),` | 卡片、输入框 |
| `,e.jsx(n.code,{children:"--lg-shadow-md"})," | ",e.jsx(n.code,{children:"0 4px 12px …, 0 2px 4px …"}),` | 弹出面板 |
| `,e.jsx(n.code,{children:"--lg-shadow-lg"})," | ",e.jsx(n.code,{children:"0 8px 24px …, 0 4px 8px …"})," | 对话框 |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"字号",children:"字号"}),`
`,e.jsxs(n.p,{children:[`| Token | 值 |
|-------|-----|
| `,e.jsx(n.code,{children:"--lg-font-size-sm"}),` | 12px |
| `,e.jsx(n.code,{children:"--lg-font-size"}),` | 14px |
| `,e.jsx(n.code,{children:"--lg-font-size-lg"})," | 16px |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"动画",children:"动画"}),`
`,e.jsxs(n.p,{children:[`| Token | 值 | 说明 |
|-------|-----|------|
| `,e.jsx(n.code,{children:"--lg-transition-duration"}),` | 0.2s | 统一过渡时长 |
| `,e.jsx(n.code,{children:"--lg-transition-timing"})," | ",e.jsx(n.code,{children:"cubic-bezier(0.645, 0.045, 0.355, 1)"})," | 缓动曲线 |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"主题切换示例",children:"主题切换示例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* 暗黑模式覆盖 */
[data-theme="dark"] {
  --lg-g-fg-color-default: rgba(255, 255, 255, 0.82);
  --lg-g-fg-color-muted: rgba(255, 255, 255, 0.64);
  --lg-g-bg-color-default: #1a1a1a;
  /* ... 其余变量覆盖 */
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"色板参考primitives",children:"色板参考（Primitives）"}),`
`,e.jsx(n.p,{children:"设计稿全量色板共 18 色系，每色系 11 阶（50–950）+ 透明度系列。"}),`
`,e.jsxs(n.p,{children:[`| 色系 | 主色（600） | 用途 |
|------|------------|------|
| Primary / 灵基蓝 | `,e.jsx(n.code,{children:"#495DFF"}),` | 品牌色 |
| Red / 红 | `,e.jsx(n.code,{children:"#F12234"}),` | 错误/危险 |
| Orange / 橙 | `,e.jsx(n.code,{children:"#F05513"}),` | 警示 |
| Green / 绿 | `,e.jsx(n.code,{children:"#04B545"}),` | 成功 |
| Blue / 蔚蓝 | `,e.jsx(n.code,{children:"#2970FF"}),` | 进行中/链接 |
| Amber / 琥珀 | `,e.jsx(n.code,{children:"#E28800"}),` | — |
| Yellow / 黄 | `,e.jsx(n.code,{children:"#D1A600"}),` | — |
| Lime / 青柠 | `,e.jsx(n.code,{children:"#5FBA04"}),` | — |
| Emerald / 翠绿 | `,e.jsx(n.code,{children:"#009D72"}),` | — |
| Teal / 青 | `,e.jsx(n.code,{children:"#00BFB8"}),` | — |
| Cyan / 蓝绿 | `,e.jsx(n.code,{children:"#0083D4"}),` | — |
| Indigo / 靛蓝 | `,e.jsx(n.code,{children:"#4343F5"}),` | — |
| Violet / 紫罗兰 | `,e.jsx(n.code,{children:"#572FF7"}),` | — |
| Purple / 紫 | `,e.jsx(n.code,{children:"#7F2AF3"}),` | — |
| Fuchsia / 海棠红 | `,e.jsx(n.code,{children:"#ED1DB9"}),` | — |
| Pink / 粉 | `,e.jsx(n.code,{children:"#ED1165"}),` | — |
| Gray-blue / 蓝灰 | `,e.jsx(n.code,{children:"#B3B8C5"}),` | 中性辅助 |
| Black / 黑 | 透明度系列 | 中性前景 |
| White / 白 | 透明度系列 | 中性背景 |`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["完整色值定义见源码 ",e.jsx(n.code,{children:"config/primitives-color.less"}),"。"]}),`
`,e.jsxs(n.p,{children:["Figma 设计稿参考：",e.jsx(n.a,{href:"https://www.figma.com/design/O2sfceEPza33dTUQxbRYVV/Test?node-id=438-187",rel:"nofollow",children:"Design Tokens"})]}),`
`]})]})}function t(d={}){const{wrapper:n}={...l(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(c,{...d})}):c(d)}export{t as default};
