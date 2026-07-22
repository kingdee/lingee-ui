import{i as e,n as t,s as n,t as r}from"./utils-D3YijGPp.js";import{t as i}from"./DemoBox-D5W_RP2Q.js";var a=n(e()),o=t();function s({size:e=32}){return(0,o.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`4 4 56 56`,fill:`none`,children:[(0,o.jsx)(`path`,{d:`M32 5.33334C46.7276 5.33334 58.6667 17.2724 58.6667 32C58.6667 46.7276 46.7276 58.6667 32 58.6667C17.2724 58.6667 5.33333 46.7276 5.33333 32C5.33333 17.2724 17.2724 5.33334 32 5.33334Z`,fill:`black`,fillOpacity:`0.18`}),(0,o.jsx)(`path`,{d:`M32.0026 41.3333C40.0449 41.3338 47.0447 45.7868 50.6797 52.3594C45.8687 57.0826 39.2771 59.9996 32.0026 60C24.7269 60 18.1317 57.0837 13.3203 52.3594C16.9553 45.7858 23.9593 41.3333 32.0026 41.3333Z`,fill:`white`}),(0,o.jsx)(`path`,{d:`M32 14.6667C37.891 14.6667 42.6667 19.4423 42.6667 25.3333C42.6667 31.2244 37.891 36 32 36C26.109 36 21.3333 31.2244 21.3333 25.3333C21.3333 19.4423 26.109 14.6667 32 14.6667Z`,fill:`white`})]})}var c=a.forwardRef(({src:e,alt:t,size:n=32,shape:i=`circle`,icon:c,className:l,style:u,onError:d},f)=>{let[p,m]=(0,a.useState)(!1),h=()=>{m(!0),d?.()},g=n<=20?10:n<=32?12:n<=48?16:28,_=()=>e&&!p?(0,o.jsx)(`img`,{className:`lg-avatar__image`,src:e,alt:t??``,onError:h}):t?(0,o.jsx)(`span`,{className:`lg-avatar__text`,style:{fontSize:g},children:t}):c?(0,o.jsx)(`span`,{className:`lg-avatar__icon`,children:c}):(0,o.jsx)(`span`,{className:`lg-avatar__icon lg-avatar__icon--default`,children:(0,o.jsx)(s,{size:n})});return(0,o.jsx)(`span`,{ref:f,className:r(`lg-avatar`,`lg-avatar--${i}`,l),style:{width:n,height:n,...u},children:_()})});c.displayName=`Avatar`;var l=({max:e=5,size:t=32,className:n,style:i,children:s})=>{let c=a.Children.toArray(s).filter(a.isValidElement),l=c.length,u=Math.min(l,e),d=l-u,f=c.slice(0,u).map(e=>(0,a.isValidElement)(e)?(0,a.cloneElement)(e,{size:t}):e);return(0,o.jsxs)(`div`,{className:r(`lg-avatar-group`,n),style:i,children:[f,d>0&&(0,o.jsx)(`span`,{className:`lg-avatar lg-avatar--circle lg-avatar-group__overflow`,style:{width:t,height:t},children:(0,o.jsxs)(`span`,{className:`lg-avatar__text`,style:{fontSize:t<=24?10:12},children:[`+`,d]})})]})};l.displayName=`AvatarGroup`;var u=c;u.Group=l;function d(){return(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,o.jsx)(u,{size:64,src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Felix`}),(0,o.jsx)(u,{size:48,src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Luna`}),(0,o.jsx)(u,{size:32,src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Max`})]})}var f=`import { Avatar } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Avatar size={64} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
      <Avatar size={48} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luna" />
      <Avatar size={32} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Max" />
    </div>
  );
}
`;function p(){return(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,o.jsx)(u,{size:48,alt:`张`}),(0,o.jsx)(u,{size:48,alt:`L`}),(0,o.jsx)(u,{size:48})]})}var m=`import { Avatar } from "lingee-ui";

export default function FallbackDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      {/* 文字 fallback */}
      <Avatar size={48} alt="张" />
      <Avatar size={48} alt="L" />
      {/* 默认图标 fallback */}
      <Avatar size={48} />
    </div>
  );
}
`;function h(){return(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,o.jsx)(u,{size:48,shape:`circle`,alt:`圆`}),(0,o.jsx)(u,{size:48,shape:`square`,alt:`方`})]})}var g=`import { Avatar } from "lingee-ui";

export default function ShapeDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Avatar size={48} shape="circle" alt="圆" />
      <Avatar size={48} shape="square" alt="方" />
    </div>
  );
}
`;function _(){return(0,o.jsxs)(l,{max:3,size:40,children:[(0,o.jsx)(u,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Felix`}),(0,o.jsx)(u,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Luna`}),(0,o.jsx)(u,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Max`}),(0,o.jsx)(u,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe`}),(0,o.jsx)(u,{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Leo`})]})}var v=`import { Avatar, AvatarGroup } from "lingee-ui";

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
`,y={title:`Avatar 头像`,description:`头像组件，用于展示用户头像或图标，支持图片、文字、默认图标三种形态。`};function b(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{children:`基本用法`}),`
`,(0,o.jsxs)(t.p,{children:[`通过 `,(0,o.jsx)(t.code,{children:`src`}),` 属性设置图片地址展示头像。`]}),`
`,(0,o.jsx)(i,{source:f,children:(0,o.jsx)(d,{})}),`
`,(0,o.jsx)(t.h2,{children:`Fallback 兜底`}),`
`,(0,o.jsxs)(t.p,{children:[`图片加载失败或未提供 `,(0,o.jsx)(t.code,{children:`src`}),` 时，组件会按 `,(0,o.jsx)(t.code,{children:`alt 文字 → 自定义 icon → 默认图标`}),` 的顺序 fallback。`]}),`
`,(0,o.jsx)(i,{source:m,children:(0,o.jsx)(p,{})}),`
`,(0,o.jsx)(t.h2,{children:`形状`}),`
`,(0,o.jsxs)(t.p,{children:[`通过 `,(0,o.jsx)(t.code,{children:`shape`}),` 属性设置头像形状，支持 `,(0,o.jsx)(t.code,{children:`circle`}),`（圆形）和 `,(0,o.jsx)(t.code,{children:`square`}),`（方形）。`]}),`
`,(0,o.jsx)(i,{source:g,children:(0,o.jsx)(h,{})}),`
`,(0,o.jsx)(t.h2,{children:`头像组`}),`
`,(0,o.jsxs)(t.p,{children:[`使用 `,(0,o.jsx)(t.code,{children:`AvatarGroup`}),` 展示头像组，超出数量显示 `,(0,o.jsx)(t.code,{children:`+N`}),`。`]}),`
`,(0,o.jsx)(i,{source:v,children:(0,o.jsx)(_,{})}),`
`,(0,o.jsx)(t.h2,{children:`Avatar API`}),`
`,(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:`属性`}),(0,o.jsx)(t.th,{children:`说明`}),(0,o.jsx)(t.th,{children:`类型`}),(0,o.jsx)(t.th,{children:`默认值`})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`src`})}),(0,o.jsx)(t.td,{children:`头像图片地址`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`string`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`alt`})}),(0,o.jsx)(t.td,{children:`图片加载失败时的替代文字`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`string`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`size`})}),(0,o.jsx)(t.td,{children:`头像尺寸（px）`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`number`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`32`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`shape`})}),(0,o.jsx)(t.td,{children:`头像形状`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`"circle" | "square"`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`"circle"`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`icon`})}),(0,o.jsx)(t.td,{children:`自定义图标`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`ReactNode`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`className`})}),(0,o.jsx)(t.td,{children:`自定义类名`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`string`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`style`})}),(0,o.jsx)(t.td,{children:`自定义样式`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`CSSProperties`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`onError`})}),(0,o.jsx)(t.td,{children:`图片加载失败回调`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`() => void`})}),(0,o.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,o.jsx)(t.h2,{children:`AvatarGroup API`}),`
`,(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:`属性`}),(0,o.jsx)(t.th,{children:`说明`}),(0,o.jsx)(t.th,{children:`类型`}),(0,o.jsx)(t.th,{children:`默认值`})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`max`})}),(0,o.jsx)(t.td,{children:`最多显示数量，超出显示 +N`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`number`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`5`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`size`})}),(0,o.jsx)(t.td,{children:`头像尺寸（px）`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`number`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`32`})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`className`})}),(0,o.jsx)(t.td,{children:`自定义类名`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`string`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`style`})}),(0,o.jsx)(t.td,{children:`自定义样式`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`CSSProperties`})}),(0,o.jsx)(t.td,{children:`-`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`children`})}),(0,o.jsx)(t.td,{children:`子元素（Avatar 列表）`}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`ReactNode`})}),(0,o.jsx)(t.td,{children:`-`})]})]})]})]})}function x(e={}){let{wrapper:t}=e.components||{};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}export{x as default,y as frontmatter};