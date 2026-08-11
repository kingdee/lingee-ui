import{R as e}from"./i18n-C43t6VQe.js";var t=e();function n(){return(0,t.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{fontSize:14,color:`var(--lg-g-fg-color-black-muted)`},children:[(0,t.jsx)(`span`,{children:`Home`}),(0,t.jsx)(`span`,{style:{margin:`0 8px`},children:`/`}),(0,t.jsx)(`span`,{children:`List`}),(0,t.jsx)(`span`,{style:{margin:`0 8px`},children:`/`}),(0,t.jsx)(`span`,{style:{color:`var(--lg-g-fg-color-black-strong)`},children:`Detail`})]})}var r=`/**
 * Breadcrumb 基础用法（组件开发中）
 */
export default function BasicDemo() {
  return (
    <nav aria-label="breadcrumb" style={{ fontSize: 14, color: "var(--lg-g-fg-color-black-muted)" }}>
      <span>Home</span>
      <span style={{ margin: "0 8px" }}>/</span>
      <span>List</span>
      <span style={{ margin: "0 8px" }}>/</span>
      <span style={{ color: "var(--lg-g-fg-color-black-strong)" }}>Detail</span>
    </nav>
  );
}
`;function i(){return(0,t.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,fontSize:14},children:[(0,t.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{color:`var(--lg-g-fg-color-black-muted)`},children:[(0,t.jsx)(`span`,{children:`Home`}),(0,t.jsx)(`span`,{style:{margin:`0 8px`},children:`>`}),(0,t.jsx)(`span`,{children:`Category`}),(0,t.jsx)(`span`,{style:{margin:`0 8px`},children:`>`}),(0,t.jsx)(`span`,{style:{color:`var(--lg-g-fg-color-black-strong)`},children:`Details`})]}),(0,t.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{color:`var(--lg-g-fg-color-black-muted)`},children:[(0,t.jsx)(`span`,{children:`Home`}),(0,t.jsx)(`span`,{style:{margin:`0 8px`},children:`-`}),(0,t.jsx)(`span`,{children:`Settings`}),(0,t.jsx)(`span`,{style:{margin:`0 8px`},children:`-`}),(0,t.jsx)(`span`,{style:{color:`var(--lg-g-fg-color-black-strong)`},children:`Account settings`})]})]})}var a=`/**
 * Breadcrumb 自定义分隔符（组件开发中）
 */
export default function SeparatorDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 14 }}>
      <nav aria-label="breadcrumb" style={{ color: "var(--lg-g-fg-color-black-muted)" }}>
        <span>Home</span>
        <span style={{ margin: "0 8px" }}>&gt;</span>
        <span>Category</span>
        <span style={{ margin: "0 8px" }}>&gt;</span>
        <span style={{ color: "var(--lg-g-fg-color-black-strong)" }}>Details</span>
      </nav>
      <nav aria-label="breadcrumb" style={{ color: "var(--lg-g-fg-color-black-muted)" }}>
        <span>Home</span>
        <span style={{ margin: "0 8px" }}>-</span>
        <span>Settings</span>
        <span style={{ margin: "0 8px" }}>-</span>
        <span style={{ color: "var(--lg-g-fg-color-black-strong)" }}>Account settings</span>
      </nav>
    </div>
  );
}
`;export{n as i,i as n,r,a as t};