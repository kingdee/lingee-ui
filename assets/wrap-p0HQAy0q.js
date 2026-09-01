import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{t}from"./spin-BHBwJfCU.js";var n=e();function r(){return(0,n.jsx)(t,{spinning:!0,size:`lg`})}var i=`import { Spin } from "lingee-ui";

export default function BasicDemo() {
  return <Spin spinning size="lg" />;
}
`;function a(){return(0,n.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:32},children:[(0,n.jsx)(t,{size:`sm`}),(0,n.jsx)(t,{size:`md`}),(0,n.jsx)(t,{size:`lg`})]})}var o=`import { Spin } from "lingee-ui";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
      <Spin size="sm" />
      <Spin size="md" />
      <Spin size="lg" />
    </div>
  );
}
`;function s(){return(0,n.jsx)(t,{spinning:!0,tip:`Loading...`,children:(0,n.jsxs)(`div`,{style:{padding:24,border:`1px solid #e0e0e0`,borderRadius:8,fontSize:14},children:[(0,n.jsx)(`p`,{style:{margin:`0 0 8px`},children:`This is the wrapped content area.`}),(0,n.jsx)(`p`,{style:{margin:0},children:`A mask overlays the content while loading.`})]})})}var c=`import { Spin } from "lingee-ui";

export default function WrapDemo() {
  return (
    <Spin spinning tip="Loading...">
      <div
        style={{
          padding: 24,
          border: "1px solid #e0e0e0",
          borderRadius: 8,
          fontSize: 14,
        }}
      >
        <p style={{ margin: "0 0 8px" }}>This is the wrapped content area.</p>
        <p style={{ margin: 0 }}>A mask overlays the content while loading.</p>
      </div>
    </Spin>
  );
}
`;export{i as a,a as i,s as n,r as o,o as r,c as t};