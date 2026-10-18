import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{n as t,t as n}from"./avatar-Co64xWYL.js";var r=e();function i(){return(0,r.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,r.jsx)(t,{size:64,src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Felix`}),(0,r.jsx)(t,{size:48,src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Luna`}),(0,r.jsx)(t,{size:32,src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Max`})]})}var a=`import { Avatar } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Avatar size={64} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
      <Avatar size={48} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luna" />
      <Avatar size={32} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Max" />
    </div>
  );
}
`;function o(){return(0,r.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,r.jsx)(t,{size:48,alt:`A`}),(0,r.jsx)(t,{size:48,alt:`L`}),(0,r.jsx)(t,{size:48})]})}var s=`import { Avatar } from "lingee-ui";

export default function FallbackDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      {/* 文字 fallback */}
      <Avatar size={48} alt="A" />
      <Avatar size={48} alt="L" />
      {/* 默认图标 fallback */}
      <Avatar size={48} />
    </div>
  );
}
`;function c(){return(0,r.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,r.jsx)(t,{size:48,shape:`circle`,alt:`Circle`}),(0,r.jsx)(t,{size:48,shape:`square`,alt:`Square`})]})}var l=`import { Avatar } from "lingee-ui";

export default function ShapeDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Avatar size={48} shape="circle" alt="Circle" />
      <Avatar size={48} shape="square" alt="Square" />
    </div>
  );
}
`;function u(){return(0,r.jsxs)(n,{max:3,size:40,children:[(0,r.jsx)(t,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Felix`}),(0,r.jsx)(t,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Luna`}),(0,r.jsx)(t,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Max`}),(0,r.jsx)(t,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe`}),(0,r.jsx)(t,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Leo`})]})}var d=`import { Avatar, AvatarGroup } from "lingee-ui";

export default function GroupDemo() {
  return (
    <AvatarGroup max={3} size={40}>
      <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
      <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luna" />
      <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Max" />
      <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe" />
      <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Leo" />
    </AvatarGroup>
  );
}
`;export{s as a,i as c,c as i,u as n,o,l as r,a as s,d as t};