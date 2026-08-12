import{R as e}from"./i18n-DmENUXWN.js";import{t}from"./progress-CWqy8K9a.js";var n=e();function r(){return(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,maxWidth:400},children:[(0,n.jsx)(t,{percent:30}),(0,n.jsx)(t,{percent:70}),(0,n.jsx)(t,{percent:100,status:`success`})]})}var i=`import { Progress } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
      <Progress percent={30} />
      <Progress percent={70} />
      <Progress percent={100} status="success" />
    </div>
  );
}
`;function a(){return(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,maxWidth:400},children:[(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`p`,{style:{fontSize:12,marginBottom:8,color:`#666`},children:`sm (size=4)`}),(0,n.jsx)(t,{percent:60,size:4})]}),(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`p`,{style:{fontSize:12,marginBottom:8,color:`#666`},children:`md (size=8, default)`}),(0,n.jsx)(t,{percent:60})]})]})}var o=`import { Progress } from "lingee-ui";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
      <div>
        <p style={{ fontSize: 12, marginBottom: 8, color: "#666" }}>sm (size=4)</p>
        <Progress percent={60} size={4} />
      </div>
      <div>
        <p style={{ fontSize: 12, marginBottom: 8, color: "#666" }}>md (size=8, default)</p>
        <Progress percent={60} />
      </div>
    </div>
  );
}
`;function s(){return(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,maxWidth:400},children:[(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`p`,{style:{fontSize:12,marginBottom:8,color:`#666`},children:`normal`}),(0,n.jsx)(t,{percent:50,status:`normal`})]}),(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`p`,{style:{fontSize:12,marginBottom:8,color:`#666`},children:`success`}),(0,n.jsx)(t,{percent:100,status:`success`})]}),(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`p`,{style:{fontSize:12,marginBottom:8,color:`#666`},children:`exception（error）`}),(0,n.jsx)(t,{percent:70,status:`error`})]})]})}var c=`import { Progress } from "lingee-ui";

export default function StatusDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
      <div>
        <p style={{ fontSize: 12, marginBottom: 8, color: "#666" }}>normal</p>
        <Progress percent={50} status="normal" />
      </div>
      <div>
        <p style={{ fontSize: 12, marginBottom: 8, color: "#666" }}>success</p>
        <Progress percent={100} status="success" />
      </div>
      <div>
        <p style={{ fontSize: 12, marginBottom: 8, color: "#666" }}>exception（error）</p>
        <Progress percent={70} status="error" />
      </div>
    </div>
  );
}
`;export{i as a,a as i,s as n,r as o,o as r,c as t};