import{x as e}from"./dist-DjLZdxEA.js";import{t}from"./DemoBox-DEznk3dE.js";var n=e();function r(){return(0,n.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{fontSize:14,color:`var(--lg-g-fg-color-black-muted)`},children:[(0,n.jsx)(`span`,{children:`首页`}),(0,n.jsx)(`span`,{style:{margin:`0 8px`},children:`/`}),(0,n.jsx)(`span`,{children:`列表页`}),(0,n.jsx)(`span`,{style:{margin:`0 8px`},children:`/`}),(0,n.jsx)(`span`,{style:{color:`var(--lg-g-fg-color-black-strong)`},children:`详情页`})]})}var i=`/**
 * Breadcrumb 基础用法（组件开发中）
 */
export default function BasicDemo() {
  return (
    <nav aria-label="breadcrumb" style={{ fontSize: 14, color: "var(--lg-g-fg-color-black-muted)" }}>
      <span>首页</span>
      <span style={{ margin: "0 8px" }}>/</span>
      <span>列表页</span>
      <span style={{ margin: "0 8px" }}>/</span>
      <span style={{ color: "var(--lg-g-fg-color-black-strong)" }}>详情页</span>
    </nav>
  );
}
`;function a(){return(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,fontSize:14},children:[(0,n.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{color:`var(--lg-g-fg-color-black-muted)`},children:[(0,n.jsx)(`span`,{children:`首页`}),(0,n.jsx)(`span`,{style:{margin:`0 8px`},children:`>`}),(0,n.jsx)(`span`,{children:`分类`}),(0,n.jsx)(`span`,{style:{margin:`0 8px`},children:`>`}),(0,n.jsx)(`span`,{style:{color:`var(--lg-g-fg-color-black-strong)`},children:`详情`})]}),(0,n.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{color:`var(--lg-g-fg-color-black-muted)`},children:[(0,n.jsx)(`span`,{children:`首页`}),(0,n.jsx)(`span`,{style:{margin:`0 8px`},children:`-`}),(0,n.jsx)(`span`,{children:`设置`}),(0,n.jsx)(`span`,{style:{margin:`0 8px`},children:`-`}),(0,n.jsx)(`span`,{style:{color:`var(--lg-g-fg-color-black-strong)`},children:`账号设置`})]})]})}var o=`/**
 * Breadcrumb 自定义分隔符（组件开发中）
 */
export default function SeparatorDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 14 }}>
      <nav aria-label="breadcrumb" style={{ color: "var(--lg-g-fg-color-black-muted)" }}>
        <span>首页</span>
        <span style={{ margin: "0 8px" }}>&gt;</span>
        <span>分类</span>
        <span style={{ margin: "0 8px" }}>&gt;</span>
        <span style={{ color: "var(--lg-g-fg-color-black-strong)" }}>详情</span>
      </nav>
      <nav aria-label="breadcrumb" style={{ color: "var(--lg-g-fg-color-black-muted)" }}>
        <span>首页</span>
        <span style={{ margin: "0 8px" }}>-</span>
        <span>设置</span>
        <span style={{ margin: "0 8px" }}>-</span>
        <span style={{ color: "var(--lg-g-fg-color-black-strong)" }}>账号设置</span>
      </nav>
    </div>
  );
}
`,s={title:`Breadcrumb 面包屑`,description:`显示当前页面在系统层级结构中的位置，并提供返回之前层级的导航。`};function c(e){let s={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{children:`基本用法`}),`
`,(0,n.jsxs)(s.p,{children:[`通过 `,(0,n.jsx)(s.code,{children:`items`}),` 属性定义面包屑路径，最后一项为当前页面（无链接）。`]}),`
`,(0,n.jsx)(t,{source:i,children:(0,n.jsx)(r,{})}),`
`,(0,n.jsx)(s.h2,{children:`自定义分隔符`}),`
`,(0,n.jsxs)(s.p,{children:[`通过 `,(0,n.jsx)(s.code,{children:`separator`}),` 属性自定义面包屑项之间的分隔符。`]}),`
`,(0,n.jsx)(t,{source:o,children:(0,n.jsx)(a,{})}),`
`,(0,n.jsx)(s.h2,{children:`API`}),`
`,(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:`属性`}),(0,n.jsx)(s.th,{children:`说明`}),(0,n.jsx)(s.th,{children:`类型`}),(0,n.jsx)(s.th,{children:`默认值`})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`items`})}),(0,n.jsx)(s.td,{children:`面包屑数据`}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`Array<{ key: string; label?: ReactNode; icon?: ReactNode; href?: string; disabled?: boolean }>`})}),(0,n.jsx)(s.td,{children:`-`})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`separator`})}),(0,n.jsx)(s.td,{children:`自定义分隔符`}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`ReactNode`})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`/`})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`size`})}),(0,n.jsx)(s.td,{children:`尺寸`}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`"sm" | "md"`})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`"md"`})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`maxItems`})}),(0,n.jsx)(s.td,{children:`超过此数量则折叠中间项`}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`number`})}),(0,n.jsx)(s.td,{children:`-`})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`itemMaxWidth`})}),(0,n.jsx)(s.td,{children:`单项最大宽度，超出显示省略号`}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`number`})}),(0,n.jsx)(s.td,{children:`-`})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`onBack`})}),(0,n.jsx)(s.td,{children:`传入后显示返回箭头，点击触发`}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`() => void`})}),(0,n.jsx)(s.td,{children:`-`})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`children`})}),(0,n.jsx)(s.td,{children:`自定义内容（替代 items）`}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:`ReactNode`})}),(0,n.jsx)(s.td,{children:`-`})]})]})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{l as default,s as frontmatter};