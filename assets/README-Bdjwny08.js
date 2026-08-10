import{A as e,D as t,x as n,y as r}from"./dist-DjLZdxEA.js";import{t as i}from"./dist-CJ4qR1i8.js";import{n as a,o}from"./provider-pWkB89tL.js";import{n as s,t as c}from"./Lightbulb-CVhI6BjA.js";import{t as l}from"./XLg-BVUzbMOA.js";import{t as u}from"./DemoBox-DEznk3dE.js";var d=e(t()),f=n(),p={diamond:[{w:76.7412,h:29.5746,x:-11.303,y:-8.104,rotate:3.61,blur:4,path:`M15.1953 8L68.7412 13.2684L55.6642 21.5746H8L15.1953 8Z`},{w:49.895,h:21.0268,x:18.294,y:-7.912,rotate:-15.73,blur:3,path:`M10.489 6L43.895 9.50337L35.7366 15.0268H6L10.489 6Z`}],metal:[{w:76.7412,h:28.579,x:-15.3845,y:-7.1025,rotate:3.61,blur:4,path:`M15.1953 8L68.7412 12.882L55.6642 20.579H8L15.1953 8Z`},{w:43.4758,h:20.4645,x:14.807,y:-5.685,rotate:-20.81,blur:3,path:`M9.72859 6L37.4758 9.28514L30.6993 14.4645H6L9.72859 6Z`}]},m=[`primary`,`secondary`],h=({shape:e})=>(0,f.jsx)(f.Fragment,{children:p[e].map((e,t)=>(0,f.jsx)(`svg`,{className:`lg-tag__glow lg-tag__glow--${m[t]}`,width:e.w,height:e.h,viewBox:`0 0 ${e.w} ${e.h}`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,style:{left:e.x,top:e.y,transform:`rotate(${e.rotate}deg)`,filter:`blur(${e.blur}px)`},children:(0,f.jsx)(`path`,{d:e.path})},m[t]))}),g=[`primary`,`info`,`success`,`warning`,`danger`,`amber`,`yellow`,`cyan`,`purple`],_={purple:`diamond`,yellow:`metal`,cyan:`metal`},v=i(`lg-tag`,{variants:{variant:{tint:``,gradient:`lg-tag--gradient`,glow:`lg-tag--glow`},size:{sm:`lg-tag--sm`,md:`lg-tag--md`,lg:`lg-tag--lg`}},defaultVariants:{variant:`tint`,size:`md`}}),y=d.forwardRef(({className:e,color:t=`info`,variant:n=`tint`,size:i=`md`,shape:o=`pill`,icon:s,background:c,closable:u=!1,onClose:d,children:p,style:m,...y},b)=>{let x=a(`Tag`),S=g.includes(t),C=S?`lg-tag--${t}`:``,w={...m};S||(w[`--_tag-color`]=t,w[`--_tag-bg`]=`color-mix(in srgb, ${t} 8%, transparent)`,n===`gradient`&&(w[`--_tag-gradient-from`]=`color-mix(in srgb, ${t} 12%, transparent)`,w[`--_tag-gradient-to`]=`color-mix(in srgb, ${t} 3%, transparent)`)),c&&(w.background=c);let T=n===`tint`?`lg-tag--${o}`:``,E=n===`glow`?_[t]:void 0,D=e=>{e.stopPropagation(),d?.(e)};return(0,f.jsxs)(`span`,{ref:b,className:r(v({variant:n,size:i}),T,C,u&&`lg-tag--closable`,e),style:w,...y,children:[E&&(0,f.jsx)(h,{shape:E}),s&&(0,f.jsx)(`span`,{className:`lg-tag__icon`,children:s}),(0,f.jsx)(`span`,{className:`lg-tag__content`,children:p}),u&&(0,f.jsx)(`span`,{className:`lg-tag__close`,onClick:D,role:`button`,tabIndex:0,"aria-label":x.close,children:(0,f.jsx)(l,{})})]})});y.displayName=`Tag`;function b(){return(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,f.jsx)(y,{children:`默认标签`}),(0,f.jsx)(y,{color:`primary`,children:`品牌标签`})]})}var x=`import { Tag } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag>默认标签</Tag>
      <Tag color="primary">品牌标签</Tag>
    </div>
  );
}
`;function S(){return(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,f.jsx)(y,{color:`info`,children:`信息`}),(0,f.jsx)(y,{color:`primary`,children:`品牌`}),(0,f.jsx)(y,{color:`success`,children:`成功`}),(0,f.jsx)(y,{color:`warning`,children:`警告`}),(0,f.jsx)(y,{color:`danger`,children:`危险`}),(0,f.jsx)(y,{color:`amber`,children:`琥珀`}),(0,f.jsx)(y,{color:`yellow`,children:`黄`}),(0,f.jsx)(y,{color:`cyan`,children:`青`}),(0,f.jsx)(y,{color:`purple`,children:`紫`})]})}var C=`import { Tag } from "lingee-ui";

export default function ColorsDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Tag color="info">信息</Tag>
      <Tag color="primary">品牌</Tag>
      <Tag color="success">成功</Tag>
      <Tag color="warning">警告</Tag>
      <Tag color="danger">危险</Tag>
      <Tag color="amber">琥珀</Tag>
      <Tag color="yellow">黄</Tag>
      <Tag color="cyan">青</Tag>
      <Tag color="purple">紫</Tag>
    </div>
  );
}
`;function w(){return(0,f.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,f.jsx)(y,{variant:`gradient`,color:`danger`,icon:(0,f.jsx)(o,{}),children:`警告`}),(0,f.jsx)(y,{variant:`gradient`,color:`warning`,icon:(0,f.jsx)(c,{}),children:`建议`}),(0,f.jsx)(y,{variant:`gradient`,color:`amber`,icon:(0,f.jsx)(s,{}),children:`提示`})]})}var T=`import { Tag } from "lingee-ui";
import { ExclamationCircle, Lightbulb, Information } from "lingee-icon";

export default function GradientDemo() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Tag variant="gradient" color="danger" icon={<ExclamationCircle />}>
        警告
      </Tag>
      <Tag variant="gradient" color="warning" icon={<Lightbulb />}>
        建议
      </Tag>
      <Tag variant="gradient" color="amber" icon={<Information />}>
        提示
      </Tag>
    </div>
  );
}
`;function E(){return(0,f.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,f.jsx)(y,{variant:`glow`,color:`purple`,children:`钻石`}),(0,f.jsx)(y,{variant:`glow`,color:`yellow`,children:`黄金`}),(0,f.jsx)(y,{variant:`glow`,color:`cyan`,children:`铂金`})]})}var D=`import { Tag } from "lingee-ui";

export default function GlowDemo() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Tag variant="glow" color="purple">
        钻石
      </Tag>
      <Tag variant="glow" color="yellow">
        黄金
      </Tag>
      <Tag variant="glow" color="cyan">
        铂金
      </Tag>
    </div>
  );
}
`;function O(){return(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,f.jsx)(y,{color:`info`,closable:!0,children:`可关闭`}),(0,f.jsx)(y,{color:`success`,closable:!0,children:`标签`}),(0,f.jsx)(y,{color:`danger`,closable:!0,children:`删除`})]})}var k=`import { Tag } from "lingee-ui";

export default function ClosableDemo() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag color="info" closable>可关闭</Tag>
      <Tag color="success" closable>标签</Tag>
      <Tag color="danger" closable>删除</Tag>
    </div>
  );
}
`,A={title:`Tag 标签`,description:`用于标记和分类的小型标签元素。`};function j(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`基本用法`}),`
`,(0,f.jsx)(t.p,{children:`基础标签展示。`}),`
`,(0,f.jsx)(u,{source:x,children:(0,f.jsx)(b,{})}),`
`,(0,f.jsx)(t.h2,{children:`预设颜色`}),`
`,(0,f.jsxs)(t.p,{children:[`提供 `,(0,f.jsx)(t.code,{children:`info`}),`、`,(0,f.jsx)(t.code,{children:`primary`}),`、`,(0,f.jsx)(t.code,{children:`success`}),`、`,(0,f.jsx)(t.code,{children:`warning`}),`、`,(0,f.jsx)(t.code,{children:`danger`}),` 五种基础语义色，以及 `,(0,f.jsx)(t.code,{children:`amber`}),`、`,(0,f.jsx)(t.code,{children:`yellow`}),`、`,(0,f.jsx)(t.code,{children:`cyan`}),`、`,(0,f.jsx)(t.code,{children:`purple`}),` 四种扩展色，也支持任意 CSS 色值。`]}),`
`,(0,f.jsxs)(t.p,{children:[`扩展色主要服务于 `,(0,f.jsx)(t.code,{children:`gradient`}),` 与 `,(0,f.jsx)(t.code,{children:`glow`}),` 变体的徽标场景，常规标记优先使用基础语义色。`]}),`
`,(0,f.jsx)(u,{source:C,children:(0,f.jsx)(S,{})}),`
`,(0,f.jsx)(t.h2,{children:`渐变徽标`}),`
`,(0,f.jsxs)(t.p,{children:[`设置 `,(0,f.jsx)(t.code,{children:`variant="gradient"`}),` 使用渐变浅底样式，适用于警告、建议、提示等提示类徽标。圆角固定 8px，可通过 `,(0,f.jsx)(t.code,{children:`icon`}),` 传入前缀图标（尺寸由组件统一控制）。`]}),`
`,(0,f.jsx)(u,{source:T,children:(0,f.jsx)(w,{})}),`
`,(0,f.jsx)(t.h2,{children:`光效徽标`}),`
`,(0,f.jsxs)(t.p,{children:[`设置 `,(0,f.jsx)(t.code,{children:`variant="glow"`}),` 使用渐变底 + 光斑装饰样式，适用于会员等级等需要突出质感的场景。圆角固定 12px，字重 500。`]}),`
`,(0,f.jsxs)(t.p,{children:[`光斑为设计稿提供的装饰图形，仅 `,(0,f.jsx)(t.code,{children:`purple`}),`（钻石）、`,(0,f.jsx)(t.code,{children:`yellow`}),`（黄金）、`,(0,f.jsx)(t.code,{children:`cyan`}),`（铂金）三种预设色带光斑；传入其他色值时降级为纯渐变底，不渲染装饰层。`]}),`
`,(0,f.jsx)(u,{source:D,children:(0,f.jsx)(E,{})}),`
`,(0,f.jsx)(t.h2,{children:`可关闭标签`}),`
`,(0,f.jsxs)(t.p,{children:[`设置 `,(0,f.jsx)(t.code,{children:`closable`}),` 显示关闭按钮，通过 `,(0,f.jsx)(t.code,{children:`onClose`}),` 监听关闭事件。`]}),`
`,(0,f.jsx)(u,{source:k,children:(0,f.jsx)(O,{})}),`
`,(0,f.jsx)(t.h2,{children:`API`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`属性`}),(0,f.jsx)(t.th,{children:`说明`}),(0,f.jsx)(t.th,{children:`类型`}),(0,f.jsx)(t.th,{children:`默认值`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`color`})}),(0,f.jsx)(t.td,{children:`标签颜色`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`"info" | "primary" | "success" | "warning" | "danger" | "amber" | "yellow" | "cyan" | "purple" | string`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`"info"`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`variant`})}),(0,f.jsx)(t.td,{children:`视觉变体`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`"tint" | "gradient" | "glow"`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`"tint"`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`size`})}),(0,f.jsx)(t.td,{children:`标签尺寸`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`"sm" | "md" | "lg"`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`"md"`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`shape`})}),(0,f.jsxs)(t.td,{children:[`圆角形状（仅 `,(0,f.jsx)(t.code,{children:`variant="tint"`}),` 生效）`]}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`"pill" | "rounded"`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`"pill"`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`icon`})}),(0,f.jsx)(t.td,{children:`前缀图标`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`ReactNode`})}),(0,f.jsx)(t.td,{children:`-`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`background`})}),(0,f.jsx)(t.td,{children:`自定义背景`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`string`})}),(0,f.jsx)(t.td,{children:`-`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`closable`})}),(0,f.jsx)(t.td,{children:`是否可关闭`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`boolean`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`false`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`onClose`})}),(0,f.jsx)(t.td,{children:`关闭回调`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`(e: MouseEvent) => void`})}),(0,f.jsx)(t.td,{children:`-`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`children`})}),(0,f.jsx)(t.td,{children:`子内容`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`ReactNode`})}),(0,f.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,f.jsx)(t.h3,{children:`变体说明`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`变体`}),(0,f.jsx)(t.th,{children:`圆角`}),(0,f.jsx)(t.th,{children:`背景`}),(0,f.jsx)(t.th,{children:`装饰`}),(0,f.jsx)(t.th,{children:`适用场景`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`tint`})}),(0,f.jsxs)(t.td,{children:[`由 `,(0,f.jsx)(t.code,{children:`shape`}),` 决定`]}),(0,f.jsx)(t.td,{children:`同色 8% 纯色浅底`}),(0,f.jsx)(t.td,{children:`-`}),(0,f.jsx)(t.td,{children:`通用标记、分类`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`gradient`})}),(0,f.jsx)(t.td,{children:`8px`}),(0,f.jsx)(t.td,{children:`同色 12% → 3% 斜向渐变`}),(0,f.jsx)(t.td,{children:`-`}),(0,f.jsx)(t.td,{children:`提示类徽标`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`glow`})}),(0,f.jsx)(t.td,{children:`12px`}),(0,f.jsx)(t.td,{children:`同色 8/12% → 28% 渐变`}),(0,f.jsx)(t.td,{children:`两层模糊光斑`}),(0,f.jsx)(t.td,{children:`等级类徽标`})]})]})]}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`glow`}),` 的 `,(0,f.jsx)(t.code,{children:`purple`}),` 使用 128.7° 斜向渐变，`,(0,f.jsx)(t.code,{children:`yellow`}),` / `,(0,f.jsx)(t.code,{children:`cyan`}),` 使用自上而下的纵向渐变。`]}),`
`,(0,f.jsx)(t.h3,{children:`样式变量`}),`
`,(0,f.jsx)(t.p,{children:`以下 CSS 变量可在消费方覆盖，用于微调间距、图标尺寸与光斑配色：`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`变量`}),(0,f.jsx)(t.th,{children:`说明`}),(0,f.jsx)(t.th,{children:`默认值`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--_tag-gap`})}),(0,f.jsx)(t.td,{children:`图标与文字间距`}),(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`2px`}),`（gradient `,(0,f.jsx)(t.code,{children:`4px`}),`、glow `,(0,f.jsx)(t.code,{children:`10px`}),`）`]})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--_tag-icon-size`})}),(0,f.jsx)(t.td,{children:`图标尺寸`}),(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`14px`}),`（`,(0,f.jsx)(t.code,{children:`size="lg"`}),` 与 gradient 的 `,(0,f.jsx)(t.code,{children:`danger`}),` 为 `,(0,f.jsx)(t.code,{children:`16px`}),`）`]})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--_tag-font-weight`})}),(0,f.jsx)(t.td,{children:`字重`}),(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`400`}),`（glow 为 `,(0,f.jsx)(t.code,{children:`500`}),`）`]})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--_tag-gradient-from`})}),(0,f.jsx)(t.td,{children:`渐变起始色（gradient / glow）`}),(0,f.jsxs)(t.td,{children:[`按 `,(0,f.jsx)(t.code,{children:`color`}),` 取同色 12%（glow 的 `,(0,f.jsx)(t.code,{children:`purple`}),` 为 8%）`]})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--_tag-gradient-to`})}),(0,f.jsx)(t.td,{children:`渐变结束色（gradient / glow）`}),(0,f.jsx)(t.td,{children:`gradient 取同色 3%，glow 取 28%`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--_tag-glow-primary`})}),(0,f.jsx)(t.td,{children:`底层光斑色（仅 glow）`}),(0,f.jsxs)(t.td,{children:[`按 `,(0,f.jsx)(t.code,{children:`color`}),` 取对应装饰色`]})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--_tag-glow-secondary`})}),(0,f.jsx)(t.td,{children:`高光层光斑色（仅 glow）`}),(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`rgba(255, 255, 255, 0.64)`}),`（`,(0,f.jsx)(t.code,{children:`purple`}),` 为 `,(0,f.jsx)(t.code,{children:`0.59`}),`）`]})]})]})]})]})}function M(e={}){let{wrapper:t}=e.components||{};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(j,{...e})}):j(e)}export{M as default,A as frontmatter};