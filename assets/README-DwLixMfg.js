import{C as e,M as t,k as n,x as r}from"./dist-DCLsKzkS.js";import{t as i}from"./dist-Cpdi29qC.js";import{n as a}from"./provider-DMuMa5yQ.js";import{n as o,t as s}from"./ExclamationCircleFill1-BgAdOo9N.js";import{t as c}from"./ExclamationCircleFill-C5mipZou.js";import{t as l}from"./XCircleFill-CfORBxV1.js";import{t as u}from"./XLg-BjLaNPLw.js";import{t as d}from"./DemoBox-D1az5eCZ.js";var f=t(n()),p=e(),m=i(`lg-alert`,{variants:{type:{info:`lg-alert--info`,success:`lg-alert--success`,warning:`lg-alert--warning`,error:`lg-alert--error`,default:`lg-alert--default`}},defaultVariants:{type:`info`}}),h={info:(0,p.jsx)(s,{}),success:(0,p.jsx)(o,{}),warning:(0,p.jsx)(c,{}),error:(0,p.jsx)(l,{}),default:(0,p.jsx)(s,{})},g=f.forwardRef(({className:e,type:t=`info`,title:n,description:i,items:o,closable:s=!0,onClose:c,icon:l,action:d,children:g,..._},v)=>{let y=a(`Alert`),[b,x]=(0,f.useState)(!0);if(!b)return null;let S=e=>{x(!1),c?.(e)},C=()=>l===!1?null:(0,p.jsx)(`span`,{className:`lg-alert__icon`,children:l||h[t]}),w=!!n,T=o&&o.length>0,E=g||i;return(0,p.jsxs)(`div`,{ref:v,className:r(m({type:t}),w&&`lg-alert--with-title`,T&&`lg-alert--with-items`,e),role:`alert`,..._,children:[w&&(0,p.jsxs)(`div`,{className:`lg-alert__body`,children:[(0,p.jsxs)(`div`,{className:`lg-alert__title-row`,children:[C(),(0,p.jsx)(`span`,{className:`lg-alert__title`,children:n})]}),E&&(0,p.jsx)(`div`,{className:`lg-alert__description-wrapper`,children:(0,p.jsx)(`span`,{className:`lg-alert__description`,children:E})})]}),!w&&T&&(0,p.jsx)(`div`,{className:`lg-alert__items`,children:o.map((e,t)=>(0,p.jsxs)(`div`,{className:`lg-alert__item`,children:[(0,p.jsx)(`span`,{className:`lg-alert__item-dot`}),(0,p.jsx)(`span`,{className:`lg-alert__item-text`,children:e})]},t))}),!w&&!T&&(0,p.jsxs)(p.Fragment,{children:[C(),(0,p.jsx)(`span`,{className:`lg-alert__content`,children:E})]}),d&&(0,p.jsx)(`div`,{className:`lg-alert__action`,children:d}),s&&!d&&(0,p.jsx)(`button`,{className:`lg-alert__close`,onClick:S,type:`button`,"aria-label":y.close,children:(0,p.jsx)(u,{size:12})})]})});g.displayName=`Alert`;function _(){return(0,p.jsx)(g,{type:`info`,children:`这是一条信息提示`})}var v=`import { Alert } from "lingee-ui";

export default function BasicDemo() {
  return <Alert type="info">这是一条信息提示</Alert>;
}
`;function y(){return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,p.jsx)(g,{type:`info`,children:`信息提示 Info`}),(0,p.jsx)(g,{type:`success`,children:`成功提示 Success`}),(0,p.jsx)(g,{type:`warning`,children:`警告提示 Warning`}),(0,p.jsx)(g,{type:`error`,children:`错误提示 Error`})]})}var b=`import { Alert } from "lingee-ui";

export default function TypesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Alert type="info">信息提示 Info</Alert>
      <Alert type="success">成功提示 Success</Alert>
      <Alert type="warning">警告提示 Warning</Alert>
      <Alert type="error">错误提示 Error</Alert>
    </div>
  );
}
`;function x(){return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,p.jsx)(g,{type:`info`,title:`温馨提示`,children:`这是一段辅助说明文字，提供更多信息帮助用户理解。`}),(0,p.jsx)(g,{type:`success`,title:`操作成功`,children:`您的更改已保存成功。`})]})}var S=`import { Alert } from "lingee-ui";

export default function WithTitleDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Alert type="info" title="温馨提示">
        这是一段辅助说明文字，提供更多信息帮助用户理解。
      </Alert>
      <Alert type="success" title="操作成功">
        您的更改已保存成功。
      </Alert>
    </div>
  );
}
`;function C(){return(0,p.jsx)(g,{type:`warning`,closable:!1,children:`这条提示不可关闭`})}var w=`import { Alert } from "lingee-ui";

export default function NotClosableDemo() {
  return <Alert type="warning" closable={false}>这条提示不可关闭</Alert>;
}
`;function T(){return(0,p.jsx)(g,{type:`info`,icon:!1,children:`不显示图标的提示`})}var E=`import { Alert } from "lingee-ui";

export default function NoIconDemo() {
  return <Alert type="info" icon={false}>不显示图标的提示</Alert>;
}
`,D={title:`Alert 消息通知`,description:`消息提示组件，用于页面中展示重要的提示信息。`};function O(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`基本用法`}),`
`,(0,p.jsx)(t.p,{children:`最简单的用法，提供信息提示。`}),`
`,(0,p.jsx)(d,{source:v,children:(0,p.jsx)(_,{})}),`
`,(0,p.jsx)(t.h2,{children:`四种类型`}),`
`,(0,p.jsxs)(t.p,{children:[`提供 `,(0,p.jsx)(t.code,{children:`info`}),`、`,(0,p.jsx)(t.code,{children:`success`}),`、`,(0,p.jsx)(t.code,{children:`warning`}),`、`,(0,p.jsx)(t.code,{children:`error`}),` 四种类型的提示。`]}),`
`,(0,p.jsx)(d,{source:b,children:(0,p.jsx)(y,{})}),`
`,(0,p.jsx)(t.h2,{children:`带标题`}),`
`,(0,p.jsxs)(t.p,{children:[`通过 `,(0,p.jsx)(t.code,{children:`title`}),` 属性设置标题，配合描述内容使用。`]}),`
`,(0,p.jsx)(d,{source:S,children:(0,p.jsx)(x,{})}),`
`,(0,p.jsx)(t.h2,{children:`不可关闭`}),`
`,(0,p.jsxs)(t.p,{children:[`设置 `,(0,p.jsx)(t.code,{children:`closable={false}`}),` 隐藏关闭按钮。`]}),`
`,(0,p.jsx)(d,{source:w,children:(0,p.jsx)(C,{})}),`
`,(0,p.jsx)(t.h2,{children:`不显示图标`}),`
`,(0,p.jsxs)(t.p,{children:[`设置 `,(0,p.jsx)(t.code,{children:`icon={false}`}),` 隐藏图标。`]}),`
`,(0,p.jsx)(d,{source:E,children:(0,p.jsx)(T,{})}),`
`,(0,p.jsx)(t.h2,{children:`API`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`属性`}),(0,p.jsx)(t.th,{children:`说明`}),(0,p.jsx)(t.th,{children:`类型`}),(0,p.jsx)(t.th,{children:`默认值`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`type`})}),(0,p.jsx)(t.td,{children:`提示类型`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`"info" | "success" | "warning" | "error" | "default"`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`"info"`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`title`})}),(0,p.jsx)(t.td,{children:`标题内容`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`ReactNode`})}),(0,p.jsx)(t.td,{children:`-`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`description`})}),(0,p.jsx)(t.td,{children:`描述/正文内容`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`ReactNode`})}),(0,p.jsx)(t.td,{children:`-`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`items`})}),(0,p.jsx)(t.td,{children:`多行列表描述`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`ReactNode[]`})}),(0,p.jsx)(t.td,{children:`-`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`closable`})}),(0,p.jsx)(t.td,{children:`是否显示关闭按钮`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`boolean`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`true`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`onClose`})}),(0,p.jsx)(t.td,{children:`关闭回调`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`(e: MouseEvent) => void`})}),(0,p.jsx)(t.td,{children:`-`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`icon`})}),(0,p.jsxs)(t.td,{children:[`前缀图标，`,(0,p.jsx)(t.code,{children:`false`}),` 隐藏图标`]}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`ReactNode | false`})}),(0,p.jsx)(t.td,{children:`-`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`action`})}),(0,p.jsx)(t.td,{children:`操作区（右侧按钮/链接）`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`ReactNode`})}),(0,p.jsx)(t.td,{children:`-`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`children`})}),(0,p.jsx)(t.td,{children:`子内容（替代 description 使用）`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`ReactNode`})}),(0,p.jsx)(t.td,{children:`-`})]})]})]})]})}function k(e={}){let{wrapper:t}=e.components||{};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(O,{...e})}):O(e)}export{k as default,D as frontmatter};