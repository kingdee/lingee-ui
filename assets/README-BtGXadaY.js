import{i as e,n as t,s as n,t as r}from"./utils-D3YijGPp.js";import{t as i}from"./dist-Bb8vu4X3.js";import{n as a}from"./provider-DitETfxs.js";import{t as o}from"./XLg-CzRsxE59.js";import{t as s}from"./DemoBox-D5W_RP2Q.js";var c=n(e()),l=t(),u=[`primary`,`info`,`success`,`warning`,`danger`],d=i(`lg-tag`,{variants:{size:{sm:`lg-tag--sm`,md:`lg-tag--md`,lg:`lg-tag--lg`},shape:{pill:`lg-tag--pill`,rounded:`lg-tag--rounded`}},defaultVariants:{size:`md`,shape:`pill`}}),f=c.forwardRef(({className:e,color:t=`info`,size:n=`md`,shape:i=`pill`,background:s,closable:c=!1,onClose:f,children:p,style:m,...h},g)=>{let _=a(`Tag`),v=u.includes(t),y=v?`lg-tag--${t}`:``,b={...m};v||(b[`--_tag-color`]=t,b[`--_tag-bg`]=`color-mix(in srgb, ${t} 8%, transparent)`),s&&(b.background=s);let x=e=>{e.stopPropagation(),f?.(e)};return(0,l.jsxs)(`span`,{ref:g,className:r(d({size:n,shape:i}),y,c&&`lg-tag--closable`,e),style:b,...h,children:[(0,l.jsx)(`span`,{className:`lg-tag__content`,children:p}),c&&(0,l.jsx)(`span`,{className:`lg-tag__close`,onClick:x,role:`button`,tabIndex:0,"aria-label":_.close,children:(0,l.jsx)(o,{})})]})});f.displayName=`Tag`;function p(){return(0,l.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,l.jsx)(f,{children:`默认标签`}),(0,l.jsx)(f,{color:`primary`,children:`品牌标签`})]})}var m=`import { Tag } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag>默认标签</Tag>
      <Tag color="primary">品牌标签</Tag>
    </div>
  );
}
`;function h(){return(0,l.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,l.jsx)(f,{color:`info`,children:`信息`}),(0,l.jsx)(f,{color:`primary`,children:`品牌`}),(0,l.jsx)(f,{color:`success`,children:`成功`}),(0,l.jsx)(f,{color:`warning`,children:`警告`}),(0,l.jsx)(f,{color:`danger`,children:`危险`})]})}var g=`import { Tag } from "lingee-ui";

export default function ColorsDemo() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag color="info">信息</Tag>
      <Tag color="primary">品牌</Tag>
      <Tag color="success">成功</Tag>
      <Tag color="warning">警告</Tag>
      <Tag color="danger">危险</Tag>
    </div>
  );
}
`;function _(){return(0,l.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,l.jsx)(f,{color:`info`,closable:!0,children:`可关闭`}),(0,l.jsx)(f,{color:`success`,closable:!0,children:`标签`}),(0,l.jsx)(f,{color:`danger`,closable:!0,children:`删除`})]})}var v=`import { Tag } from "lingee-ui";

export default function ClosableDemo() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag color="info" closable>可关闭</Tag>
      <Tag color="success" closable>标签</Tag>
      <Tag color="danger" closable>删除</Tag>
    </div>
  );
}
`,y={title:`Tag 标签`,description:`用于标记和分类的小型标签元素。`};function b(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{children:`基本用法`}),`
`,(0,l.jsx)(t.p,{children:`基础标签展示。`}),`
`,(0,l.jsx)(s,{source:m,children:(0,l.jsx)(p,{})}),`
`,(0,l.jsx)(t.h2,{children:`预设颜色`}),`
`,(0,l.jsxs)(t.p,{children:[`提供 `,(0,l.jsx)(t.code,{children:`info`}),`、`,(0,l.jsx)(t.code,{children:`primary`}),`、`,(0,l.jsx)(t.code,{children:`success`}),`、`,(0,l.jsx)(t.code,{children:`warning`}),`、`,(0,l.jsx)(t.code,{children:`danger`}),` 五种语义色，也支持任意 CSS 色值。`]}),`
`,(0,l.jsx)(s,{source:g,children:(0,l.jsx)(h,{})}),`
`,(0,l.jsx)(t.h2,{children:`可关闭标签`}),`
`,(0,l.jsxs)(t.p,{children:[`设置 `,(0,l.jsx)(t.code,{children:`closable`}),` 显示关闭按钮，通过 `,(0,l.jsx)(t.code,{children:`onClose`}),` 监听关闭事件。`]}),`
`,(0,l.jsx)(s,{source:v,children:(0,l.jsx)(_,{})}),`
`,(0,l.jsx)(t.h2,{children:`API`}),`
`,(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:`属性`}),(0,l.jsx)(t.th,{children:`说明`}),(0,l.jsx)(t.th,{children:`类型`}),(0,l.jsx)(t.th,{children:`默认值`})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`color`})}),(0,l.jsx)(t.td,{children:`标签颜色`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`"info" | "primary" | "success" | "warning" | "danger" | string`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`"info"`})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`size`})}),(0,l.jsx)(t.td,{children:`标签尺寸`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`"sm" | "md" | "lg"`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`"md"`})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`shape`})}),(0,l.jsx)(t.td,{children:`圆角形状`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`"pill" | "rounded"`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`"pill"`})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`background`})}),(0,l.jsx)(t.td,{children:`自定义背景`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`string`})}),(0,l.jsx)(t.td,{children:`-`})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`closable`})}),(0,l.jsx)(t.td,{children:`是否可关闭`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`boolean`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`false`})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`onClose`})}),(0,l.jsx)(t.td,{children:`关闭回调`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`(e: MouseEvent) => void`})}),(0,l.jsx)(t.td,{children:`-`})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`children`})}),(0,l.jsx)(t.td,{children:`子内容`}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`ReactNode`})}),(0,l.jsx)(t.td,{children:`-`})]})]})]})]})}function x(e={}){let{wrapper:t}=e.components||{};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(b,{...e})}):b(e)}export{x as default,y as frontmatter};