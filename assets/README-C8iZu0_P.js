import{C as e}from"./dist-DCLsKzkS.js";import{r as t}from"./provider-DMuMa5yQ.js";import{t as n}from"./DemoBox-D1az5eCZ.js";import{t as r}from"./button-Bt-6g9li.js";var i=e();function a(){return(0,i.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,i.jsx)(r,{onClick:()=>t.success(`操作成功！`),children:`成功`}),(0,i.jsx)(r,{onClick:()=>t.error(`出错了，请重试`),children:`错误`}),(0,i.jsx)(r,{onClick:()=>t.warning(`请注意，这是一条警告`),children:`警告`}),(0,i.jsx)(r,{onClick:()=>t.info(`这是一条信息提示`),children:`信息`})]})}var o=`import { toast, Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button onClick={() => toast.success("操作成功！")}>成功</Button>
      <Button onClick={() => toast.error("出错了，请重试")}>错误</Button>
      <Button onClick={() => toast.warning("请注意，这是一条警告")}>警告</Button>
      <Button onClick={() => toast.info("这是一条信息提示")}>信息</Button>
    </div>
  );
}
`;function s(){return(0,i.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,i.jsx)(r,{onClick:()=>t.success({content:`保存成功`,duration:5e3}),children:`持续 5 秒`}),(0,i.jsx)(r,{onClick:()=>t.warning({content:`请确认操作`,duration:0,closable:!0}),children:`不自动关闭 + 可手动关闭`}),(0,i.jsx)(r,{onClick:()=>t.info({content:`可关闭的提示`,closable:!0}),children:`可手动关闭`})]})}var c=`import { toast, Button } from "lingee-ui";

export default function OptionsDemo() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button
        onClick={() =>
          toast.success({ content: "保存成功", duration: 5000 })
        }
      >
        持续 5 秒
      </Button>
      <Button
        onClick={() =>
          toast.warning({ content: "请确认操作", duration: 0, closable: true })
        }
      >
        不自动关闭 + 可手动关闭
      </Button>
      <Button
        onClick={() =>
          toast.info({ content: "可关闭的提示", closable: true })
        }
      >
        可手动关闭
      </Button>
    </div>
  );
}
`,l={title:`Toast 全局提示`,description:`命令式全局提示组件，用于操作反馈。`};function u(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`基本用法`}),`
`,(0,i.jsxs)(t.p,{children:[`通过 `,(0,i.jsx)(t.code,{children:`toast`}),` 的命令式方法触发不同类型的全局提示。`]}),`
`,(0,i.jsx)(n,{source:o,children:(0,i.jsx)(a,{})}),`
`,(0,i.jsx)(t.h2,{children:`带配置项`}),`
`,(0,i.jsxs)(t.p,{children:[`传入对象参数可配置 `,(0,i.jsx)(t.code,{children:`duration`}),`（持续时间）和 `,(0,i.jsx)(t.code,{children:`closable`}),`（手动关闭）等选项。`]}),`
`,(0,i.jsx)(n,{source:c,children:(0,i.jsx)(s,{})}),`
`,(0,i.jsx)(t.h2,{children:`API`}),`
`,(0,i.jsx)(t.p,{children:`Toast 通过命令式方法调用，无需手动渲染组件。`}),`
`,(0,i.jsx)(t.h3,{children:`方法`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`方法`}),(0,i.jsx)(t.th,{children:`说明`}),(0,i.jsx)(t.th,{children:`参数`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`toast.success(message)`})}),(0,i.jsx)(t.td,{children:`成功提示`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`string | ToastOptions`})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`toast.error(message)`})}),(0,i.jsx)(t.td,{children:`错误提示`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`string | ToastOptions`})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`toast.warning(message)`})}),(0,i.jsx)(t.td,{children:`警告提示`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`string | ToastOptions`})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`toast.info(message)`})}),(0,i.jsx)(t.td,{children:`信息提示`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`string | ToastOptions`})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`toast.destroy()`})}),(0,i.jsx)(t.td,{children:`销毁所有消息`}),(0,i.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,i.jsx)(t.h3,{children:`ToastOptions`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`属性`}),(0,i.jsx)(t.th,{children:`说明`}),(0,i.jsx)(t.th,{children:`类型`}),(0,i.jsx)(t.th,{children:`默认值`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`content`})}),(0,i.jsx)(t.td,{children:`提示内容`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`string`})}),(0,i.jsx)(t.td,{children:`-`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`duration`})}),(0,i.jsx)(t.td,{children:`自动关闭延时（ms），0 为不关闭`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`number`})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`3000`})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`closable`})}),(0,i.jsx)(t.td,{children:`是否可手动关闭`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`boolean`})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`false`})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`key`})}),(0,i.jsx)(t.td,{children:`唯一标识，相同 key 会更新内容`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:`string`})}),(0,i.jsx)(t.td,{children:`-`})]})]})]})]})}function d(e={}){let{wrapper:t}=e.components||{};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}export{d as default,l as frontmatter};