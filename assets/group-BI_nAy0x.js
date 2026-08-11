import{I as e,R as t,W as n,q as r}from"./i18n-C43t6VQe.js";var i=r(n()),a=t();function o({size:e=32}){return(0,a.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`4 4 56 56`,fill:`none`,children:[(0,a.jsx)(`path`,{d:`M32 5.33334C46.7276 5.33334 58.6667 17.2724 58.6667 32C58.6667 46.7276 46.7276 58.6667 32 58.6667C17.2724 58.6667 5.33333 46.7276 5.33333 32C5.33333 17.2724 17.2724 5.33334 32 5.33334Z`,fill:`black`,fillOpacity:`0.18`}),(0,a.jsx)(`path`,{d:`M32.0026 41.3333C40.0449 41.3338 47.0447 45.7868 50.6797 52.3594C45.8687 57.0826 39.2771 59.9996 32.0026 60C24.7269 60 18.1317 57.0837 13.3203 52.3594C16.9553 45.7858 23.9593 41.3333 32.0026 41.3333Z`,fill:`white`}),(0,a.jsx)(`path`,{d:`M32 14.6667C37.891 14.6667 42.6667 19.4423 42.6667 25.3333C42.6667 31.2244 37.891 36 32 36C26.109 36 21.3333 31.2244 21.3333 25.3333C21.3333 19.4423 26.109 14.6667 32 14.6667Z`,fill:`white`})]})}var s=i.forwardRef(({src:t,alt:n,size:r=32,shape:s=`circle`,icon:c,className:l,style:u,onError:d},f)=>{let[p,m]=(0,i.useState)(!1),h=()=>{m(!0),d?.()},g=r<=20?10:r<=32?12:r<=48?16:28,_=()=>t&&!p?(0,a.jsx)(`img`,{className:`lg-avatar__image`,src:t,alt:n??``,onError:h}):n?(0,a.jsx)(`span`,{className:`lg-avatar__text`,style:{fontSize:g},children:n}):c?(0,a.jsx)(`span`,{className:`lg-avatar__icon`,children:c}):(0,a.jsx)(`span`,{className:`lg-avatar__icon lg-avatar__icon--default`,children:(0,a.jsx)(o,{size:r})});return(0,a.jsx)(`span`,{ref:f,className:e(`lg-avatar`,`lg-avatar--${s}`,l),style:{width:r,height:r,...u},children:_()})});s.displayName=`Avatar`;var c=({max:t=5,size:n=32,className:r,style:o,children:s})=>{let c=i.Children.toArray(s).filter(i.isValidElement),l=c.length,u=Math.min(l,t),d=l-u,f=c.slice(0,u).map(e=>(0,i.isValidElement)(e)?(0,i.cloneElement)(e,{size:n}):e);return(0,a.jsxs)(`div`,{className:e(`lg-avatar-group`,r),style:o,children:[f,d>0&&(0,a.jsx)(`span`,{className:`lg-avatar lg-avatar--circle lg-avatar-group__overflow`,style:{width:n,height:n},children:(0,a.jsxs)(`span`,{className:`lg-avatar__text`,style:{fontSize:n<=24?10:12},children:[`+`,d]})})]})};c.displayName=`AvatarGroup`;var l=s;l.Group=c;function u(){return(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,a.jsx)(l,{size:64,src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Felix`}),(0,a.jsx)(l,{size:48,src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Luna`}),(0,a.jsx)(l,{size:32,src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Max`})]})}var d=`import { Avatar } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Avatar size={64} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
      <Avatar size={48} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luna" />
      <Avatar size={32} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Max" />
    </div>
  );
}
`;function f(){return(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,a.jsx)(l,{size:48,alt:`A`}),(0,a.jsx)(l,{size:48,alt:`L`}),(0,a.jsx)(l,{size:48})]})}var p=`import { Avatar } from "lingee-ui";

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
`;function m(){return(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,a.jsx)(l,{size:48,shape:`circle`,alt:`Circle`}),(0,a.jsx)(l,{size:48,shape:`square`,alt:`Square`})]})}var h=`import { Avatar } from "lingee-ui";

export default function ShapeDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Avatar size={48} shape="circle" alt="Circle" />
      <Avatar size={48} shape="square" alt="Square" />
    </div>
  );
}
`;function g(){return(0,a.jsxs)(c,{max:3,size:40,children:[(0,a.jsx)(l,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Felix`}),(0,a.jsx)(l,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Luna`}),(0,a.jsx)(l,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Max`}),(0,a.jsx)(l,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe`}),(0,a.jsx)(l,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Leo`})]})}var _=`import { Avatar, AvatarGroup } from "lingee-ui";

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
`;export{p as a,u as c,m as i,g as n,f as o,h as r,d as s,_ as t};