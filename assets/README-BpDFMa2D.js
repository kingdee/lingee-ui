import{x as e}from"./dist-DjLZdxEA.js";import{t}from"./alert-Cjf9BLB-.js";import{t as n}from"./DemoBox-DEznk3dE.js";var r=e();function i(){return(0,r.jsx)(t,{type:`info`,children:`这是一条信息提示`})}var a=`import { Alert } from "lingee-ui";

export default function BasicDemo() {
  return <Alert type="info">这是一条信息提示</Alert>;
}
`;function o(){return(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,r.jsx)(t,{type:`info`,children:`信息提示 Info`}),(0,r.jsx)(t,{type:`success`,children:`成功提示 Success`}),(0,r.jsx)(t,{type:`warning`,children:`警告提示 Warning`}),(0,r.jsx)(t,{type:`error`,children:`错误提示 Error`})]})}var s=`import { Alert } from "lingee-ui";

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
`;function c(){return(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,r.jsx)(t,{type:`info`,title:`温馨提示`,children:`这是一段辅助说明文字，提供更多信息帮助用户理解。`}),(0,r.jsx)(t,{type:`success`,title:`操作成功`,children:`您的更改已保存成功。`})]})}var l=`import { Alert } from "lingee-ui";

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
`;function u(){return(0,r.jsx)(t,{type:`warning`,closable:!1,children:`这条提示不可关闭`})}var d=`import { Alert } from "lingee-ui";

export default function NotClosableDemo() {
  return <Alert type="warning" closable={false}>这条提示不可关闭</Alert>;
}
`;function f(){return(0,r.jsx)(t,{type:`info`,icon:!1,children:`不显示图标的提示`})}var p=`import { Alert } from "lingee-ui";

export default function NoIconDemo() {
  return <Alert type="info" icon={false}>不显示图标的提示</Alert>;
}
`,m={title:`Alert 消息通知`,description:`消息提示组件，用于页面中展示重要的提示信息。`};function h(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`基本用法`}),`
`,(0,r.jsx)(t.p,{children:`最简单的用法，提供信息提示。`}),`
`,(0,r.jsx)(n,{source:a,children:(0,r.jsx)(i,{})}),`
`,(0,r.jsx)(t.h2,{children:`四种类型`}),`
`,(0,r.jsxs)(t.p,{children:[`提供 `,(0,r.jsx)(t.code,{children:`info`}),`、`,(0,r.jsx)(t.code,{children:`success`}),`、`,(0,r.jsx)(t.code,{children:`warning`}),`、`,(0,r.jsx)(t.code,{children:`error`}),` 四种类型的提示。`]}),`
`,(0,r.jsx)(n,{source:s,children:(0,r.jsx)(o,{})}),`
`,(0,r.jsx)(t.h2,{children:`带标题`}),`
`,(0,r.jsxs)(t.p,{children:[`通过 `,(0,r.jsx)(t.code,{children:`title`}),` 属性设置标题，配合描述内容使用。`]}),`
`,(0,r.jsx)(n,{source:l,children:(0,r.jsx)(c,{})}),`
`,(0,r.jsx)(t.h2,{children:`不可关闭`}),`
`,(0,r.jsxs)(t.p,{children:[`设置 `,(0,r.jsx)(t.code,{children:`closable={false}`}),` 隐藏关闭按钮。`]}),`
`,(0,r.jsx)(n,{source:d,children:(0,r.jsx)(u,{})}),`
`,(0,r.jsx)(t.h2,{children:`不显示图标`}),`
`,(0,r.jsxs)(t.p,{children:[`设置 `,(0,r.jsx)(t.code,{children:`icon={false}`}),` 隐藏图标。`]}),`
`,(0,r.jsx)(n,{source:p,children:(0,r.jsx)(f,{})}),`
`,(0,r.jsx)(t.h2,{children:`API`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`属性`}),(0,r.jsx)(t.th,{children:`说明`}),(0,r.jsx)(t.th,{children:`类型`}),(0,r.jsx)(t.th,{children:`默认值`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`type`})}),(0,r.jsx)(t.td,{children:`提示类型`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`"info" | "success" | "warning" | "error" | "default"`})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`"info"`})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`title`})}),(0,r.jsx)(t.td,{children:`标题内容`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`ReactNode`})}),(0,r.jsx)(t.td,{children:`-`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`description`})}),(0,r.jsx)(t.td,{children:`描述/正文内容`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`ReactNode`})}),(0,r.jsx)(t.td,{children:`-`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`items`})}),(0,r.jsx)(t.td,{children:`多行列表描述`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`ReactNode[]`})}),(0,r.jsx)(t.td,{children:`-`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`closable`})}),(0,r.jsx)(t.td,{children:`是否显示关闭按钮`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`boolean`})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`true`})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`onClose`})}),(0,r.jsx)(t.td,{children:`关闭回调`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`(e: MouseEvent) => void`})}),(0,r.jsx)(t.td,{children:`-`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`icon`})}),(0,r.jsxs)(t.td,{children:[`前缀图标，`,(0,r.jsx)(t.code,{children:`false`}),` 隐藏图标`]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`ReactNode | false`})}),(0,r.jsx)(t.td,{children:`-`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`action`})}),(0,r.jsx)(t.td,{children:`操作区（右侧按钮/链接）`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`ReactNode`})}),(0,r.jsx)(t.td,{children:`-`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`children`})}),(0,r.jsx)(t.td,{children:`子内容（替代 description 使用）`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:`ReactNode`})}),(0,r.jsx)(t.td,{children:`-`})]})]})]})]})}function g(e={}){let{wrapper:t}=e.components||{};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}export{g as default,m as frontmatter};