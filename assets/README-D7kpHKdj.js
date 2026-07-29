import{C as e,M as t,k as n,x as r}from"./dist-DCLsKzkS.js";import{t as i}from"./client-B8zMlB9e.js";import{n as a}from"./provider-DMuMa5yQ.js";import{t as o}from"./ExclamationCircleFill-C5mipZou.js";import{t as s}from"./XLg-BjLaNPLw.js";import{t as c}from"./DemoBox-D1az5eCZ.js";import{t as l}from"./button-Bt-6g9li.js";import{a as u,i as d,n as f,r as p,t as m}from"./dist-CXXqh7yM.js";var h=t(n()),g=e(),_=({open:e,onOpenChange:t,width:n=460,height:i,title:o,extra:c,closable:_=!0,footer:v,okText:y,cancelText:b,onOk:x,onCancel:S,okDanger:C=!1,okProps:w,cancelProps:T,modal:E=!1,mask:D=!0,destroyOnHidden:O=!0,zIndex:k,maxHeight:A=640,autoHeight:j=!1,className:M,style:N,children:P})=>{let F=a(`Dialog`),[I,L]=(0,h.useState)(e),[R,z]=(0,h.useState)(!1);(0,h.useEffect)(()=>(e?(L(!0),document.body.style.overflow=`hidden`):document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[e]);let B=(0,h.useCallback)(()=>{!e&&O&&L(!1)},[e,O]),V=(0,h.useCallback)(e=>{e||t(!1)},[t]),H=(0,h.useCallback)(async()=>{if(!x){t(!1);return}let e=x();if(e instanceof Promise){z(!0);try{await e}finally{z(!1)}}},[x,t]),U=(0,h.useCallback)(()=>{S?.(),t(!1)},[S,t]),W=j?void 0:typeof A==`number`?A-68:`calc(${A} - 68px)`,G=j?typeof A==`number`?`${A}px`:A:void 0,K=typeof n==`number`?`${n}px`:n,q=i==null?void 0:typeof i==`number`?`${i}px`:i;return(0,g.jsx)(m,{open:e,onOpenChange:V,modal:!1,children:(0,g.jsxs)(d,{forceMount:void 0,children:[I&&D&&(0,g.jsx)(`div`,{className:`lg-dialog__overlay${e?``:` lg-dialog__overlay--closing`}`,style:k?{zIndex:k}:void 0,onClick:()=>{E||t(!1)}}),(0,g.jsx)(p,{className:r(`lg-dialog__content`,M),style:{...N,width:K,maxWidth:K,...q?{height:q}:{},...G?{maxHeight:G}:{},...k?{zIndex:k+1}:{}},onAnimationEnd:B,onInteractOutside:e=>{e.preventDefault()},onPointerDownOutside:e=>{e.preventDefault()},onFocusOutside:e=>{e.preventDefault()},children:I&&(0,g.jsxs)(g.Fragment,{children:[_&&(0,g.jsx)(f,{asChild:!0,"aria-label":F.close,children:(0,g.jsx)(l,{className:`lg-dialog__close`,variant:`text`,size:`lg`,icon:(0,g.jsx)(s,{size:18})})}),(o||c)&&(0,g.jsxs)(`div`,{className:`lg-dialog__header`,children:[o&&(0,g.jsx)(u,{className:`lg-dialog__title`,asChild:typeof o!=`string`,children:typeof o==`string`?(0,g.jsx)(`span`,{children:o}):o}),c&&(0,g.jsx)(`div`,{className:`lg-dialog__header-actions`,children:c})]}),(0,g.jsx)(`div`,{className:`lg-dialog__body`,style:W===void 0?void 0:{maxHeight:W},children:P}),v==null?y||b?(0,g.jsxs)(`div`,{className:`lg-dialog__footer`,children:[b&&(0,g.jsx)(l,{variant:`text`,size:`lg`,onClick:U,...T,children:b}),y&&(0,g.jsx)(l,{variant:`primary`,size:`lg`,danger:C,loading:R,onClick:H,...w,children:y})]}):null:(0,g.jsx)(`div`,{className:`lg-dialog__footer`,children:v})]})})]})})};_.displayName=`Dialog`;var v=i(),y=null,b=null;function x(){y&&=(y.unmount(),null),b&&=(b.remove(),null)}function S({title:e,description:t,okText:n,cancelText:r,okDanger:i=!1,icon:a,content:s,width:c=320,footer:u,onOk:d,onCancel:f,onResult:p,...m}){let[v,y]=h.useState(!0),[b,S]=h.useState(!1),C=()=>{y(!1),f?.(),p(!1),setTimeout(x,200)},w=async()=>{if(d){let e=d();if(e instanceof Promise){S(!0);try{await e}finally{S(!1)}}}y(!1),p(!0),setTimeout(x,200)};return(0,g.jsx)(_,{...m,open:v,onOpenChange:e=>{e||C()},width:c,closable:m.closable??!1,modal:m.modal??!0,footer:u??(0,g.jsxs)(g.Fragment,{children:[r&&(0,g.jsx)(l,{variant:`text`,size:`lg`,onClick:C,children:r}),n&&(0,g.jsx)(l,{variant:`primary`,size:`lg`,danger:i,loading:b,onClick:w,children:n})]}),children:s??(0,g.jsxs)(`div`,{className:`lg-dialog-confirm`,children:[(0,g.jsx)(`span`,{className:`lg-dialog-confirm__icon`,children:a??(0,g.jsx)(o,{className:`lg-dialog-confirm__icon-default lg-dialog-confirm__icon-default--${i?`danger`:`primary`}`})}),(0,g.jsxs)(`div`,{className:`lg-dialog-confirm__content`,children:[e&&(0,g.jsx)(`span`,{className:`lg-dialog-confirm__title`,children:e}),t&&(0,g.jsx)(`p`,{className:`lg-dialog-confirm__desc`,children:t})]})]})})}function C(e){return x(),new Promise(t=>{b=document.createElement(`div`),b.className=`lg-dialog-confirm-container`,document.body.appendChild(b),y=(0,v.createRoot)(b),y.render((0,g.jsx)(S,{...e,onResult:t}))})}function w(){x()}var T=_;T.confirm=C,T.closeConfirm=w;function E(){let[e,t]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{variant:`primary`,onClick:()=>t(!0),children:`打开对话框`}),(0,g.jsx)(T,{open:e,onOpenChange:t,title:`对话框标题`,okText:`确认`,cancelText:`取消`,onOk:()=>t(!1),onCancel:()=>t(!1),children:(0,g.jsx)(`p`,{style:{padding:`0 20px`,color:`rgba(0,0,0,0.64)`},children:`这是对话框的内容区域，可以放置任意内容。`})})]})}var D=`import { useState } from "react";
import { Dialog, Button } from "lingee-ui";

export default function BasicDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        打开对话框
      </Button>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="对话框标题"
        okText="确认"
        cancelText="取消"
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p style={{ padding: "0 20px", color: "rgba(0,0,0,0.64)" }}>
          这是对话框的内容区域，可以放置任意内容。
        </p>
      </Dialog>
    </>
  );
}
`;function O(){return(0,g.jsx)(l,{danger:!0,onClick:async()=>{await T.confirm({title:`确认删除`,description:`删除后不可恢复，确定要删除吗？`,okText:`删除`,cancelText:`取消`,okDanger:!0})&&console.log(`已确认删除`)},children:`删除`})}var k=`import { Dialog, Button } from "lingee-ui";

export default function ConfirmDemo() {
  const handleDelete = async () => {
    const confirmed = await Dialog.confirm({
      title: "确认删除",
      description: "删除后不可恢复，确定要删除吗？",
      okText: "删除",
      cancelText: "取消",
      okDanger: true,
    });
    if (confirmed) {
      console.log("已确认删除");
    }
  };

  return (
    <Button danger onClick={handleDelete}>
      删除
    </Button>
  );
}
`;function A(){let[e,t]=(0,h.useState)(460),[n,r]=(0,h.useState)(!1),i=e=>{t(e),r(!0)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,g.jsx)(l,{onClick:()=>i(460),children:`小（460px）`}),(0,g.jsx)(l,{onClick:()=>i(640),children:`中（640px）`}),(0,g.jsx)(l,{onClick:()=>i(720),children:`大（720px）`})]}),(0,g.jsx)(T,{open:n,onOpenChange:r,title:`不同宽度对话框`,width:e,okText:`确认`,cancelText:`取消`,onOk:()=>r(!1),onCancel:()=>r(!1),children:(0,g.jsxs)(`p`,{style:{padding:`0 20px`,color:`rgba(0,0,0,0.64)`},children:[`当前宽度为 `,e,`px，适用于不同内容量的场景。`]})})]})}var j=`import { useState } from "react";
import { Dialog, Button } from "lingee-ui";

export default function SizesDemo() {
  const [width, setWidth] = useState<number>(460);
  const [open, setOpen] = useState(false);

  const openDialog = (w: number) => {
    setWidth(w);
    setOpen(true);
  };

  return (
    <>
      <div style={{ display: "flex", gap: 12 }}>
        <Button onClick={() => openDialog(460)}>小（460px）</Button>
        <Button onClick={() => openDialog(640)}>中（640px）</Button>
        <Button onClick={() => openDialog(720)}>大（720px）</Button>
      </div>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="不同宽度对话框"
        width={width}
        okText="确认"
        cancelText="取消"
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p style={{ padding: "0 20px", color: "rgba(0,0,0,0.64)" }}>
          当前宽度为 {width}px，适用于不同内容量的场景。
        </p>
      </Dialog>
    </>
  );
}
`;function M(){return(0,g.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,g.jsx)(l,{danger:!0,onClick:async()=>{await T.confirm({title:`确认删除项目`,description:`此操作将永久删除该项目及其所有数据，删除后无法恢复。`,okText:`删除项目`,cancelText:`取消`,okDanger:!0})&&console.log(`项目已删除`)},children:`删除项目`}),(0,g.jsx)(l,{danger:!0,onClick:async()=>{await T.confirm({title:`重置所有设置`,description:`确定要将所有设置恢复为默认值吗？当前的自定义配置将丢失。`,okText:`确认重置`,cancelText:`取消`,okDanger:!0})&&console.log(`设置已重置`)},children:`重置设置`})]})}var N=`import { Dialog, Button } from "lingee-ui";

export default function DangerConfirmDemo() {
  const handleDelete = async () => {
    const confirmed = await Dialog.confirm({
      title: "确认删除项目",
      description: "此操作将永久删除该项目及其所有数据，删除后无法恢复。",
      okText: "删除项目",
      cancelText: "取消",
      okDanger: true,
    });
    if (confirmed) {
      console.log("项目已删除");
    }
  };

  const handleReset = async () => {
    const confirmed = await Dialog.confirm({
      title: "重置所有设置",
      description: "确定要将所有设置恢复为默认值吗？当前的自定义配置将丢失。",
      okText: "确认重置",
      cancelText: "取消",
      okDanger: true,
    });
    if (confirmed) {
      console.log("设置已重置");
    }
  };

  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button danger onClick={handleDelete}>
        删除项目
      </Button>
      <Button danger onClick={handleReset}>
        重置设置
      </Button>
    </div>
  );
}
`,P={title:`Dialog 弹出窗`,description:`模态对话框，用于需要用户确认或填写信息的场景。支持声明式和命令式两种调用方式。`};function F(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.h2,{children:`基本用法`}),`
`,(0,g.jsxs)(t.p,{children:[`通过 `,(0,g.jsx)(t.code,{children:`open`}),` 和 `,(0,g.jsx)(t.code,{children:`onOpenChange`}),` 控制对话框的显示和隐藏。`]}),`
`,(0,g.jsx)(c,{source:D,children:(0,g.jsx)(E,{})}),`
`,(0,g.jsx)(t.h2,{children:`命令式确认对话框`}),`
`,(0,g.jsxs)(t.p,{children:[`使用 `,(0,g.jsx)(t.code,{children:`Dialog.confirm()`}),` 快速创建确认弹窗，返回 Promise。`]}),`
`,(0,g.jsx)(c,{source:k,children:(0,g.jsx)(O,{})}),`
`,(0,g.jsx)(t.h2,{children:`不同宽度`}),`
`,(0,g.jsxs)(t.p,{children:[`通过 `,(0,g.jsx)(t.code,{children:`width`}),` 属性控制对话框宽度，适配不同内容量的场景。`]}),`
`,(0,g.jsx)(c,{source:j,children:(0,g.jsx)(A,{})}),`
`,(0,g.jsx)(t.h2,{children:`危险确认`}),`
`,(0,g.jsxs)(t.p,{children:[`使用 `,(0,g.jsx)(t.code,{children:`Dialog.confirm`}),` 配合 `,(0,g.jsx)(t.code,{children:`okDanger: true`}),` 实现危险操作的二次确认。`]}),`
`,(0,g.jsx)(c,{source:N,children:(0,g.jsx)(M,{})}),`
`,(0,g.jsx)(t.h2,{children:`API`}),`
`,(0,g.jsx)(t.h3,{children:`Dialog`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`属性`}),(0,g.jsx)(t.th,{children:`说明`}),(0,g.jsx)(t.th,{children:`类型`}),(0,g.jsx)(t.th,{children:`默认值`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`open`})}),(0,g.jsx)(t.td,{children:`是否打开`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`boolean`})}),(0,g.jsx)(t.td,{children:`-`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`onOpenChange`})}),(0,g.jsx)(t.td,{children:`打开状态变化回调`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`(open: boolean) => void`})}),(0,g.jsx)(t.td,{children:`-`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`title`})}),(0,g.jsx)(t.td,{children:`标题`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{children:`-`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`description`})}),(0,g.jsx)(t.td,{children:`描述文本`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{children:`-`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`width`})}),(0,g.jsx)(t.td,{children:`宽度`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`number`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`460`})})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`closable`})}),(0,g.jsx)(t.td,{children:`是否显示关闭按钮`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`boolean`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`true`})})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`okText`})}),(0,g.jsx)(t.td,{children:`确认按钮文本`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`string`})}),(0,g.jsx)(t.td,{children:`-`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`cancelText`})}),(0,g.jsx)(t.td,{children:`取消按钮文本`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`string`})}),(0,g.jsx)(t.td,{children:`-`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`onOk`})}),(0,g.jsx)(t.td,{children:`确认回调`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`() => void`})}),(0,g.jsx)(t.td,{children:`-`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`onCancel`})}),(0,g.jsx)(t.td,{children:`取消回调`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`() => void`})}),(0,g.jsx)(t.td,{children:`-`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`children`})}),(0,g.jsx)(t.td,{children:`内容区域`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,g.jsx)(t.h3,{children:`Dialog.confirm(options)`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`属性`}),(0,g.jsx)(t.th,{children:`说明`}),(0,g.jsx)(t.th,{children:`类型`}),(0,g.jsx)(t.th,{children:`默认值`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`title`})}),(0,g.jsx)(t.td,{children:`标题`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{children:`-`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`description`})}),(0,g.jsx)(t.td,{children:`描述内容`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{children:`-`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`content`})}),(0,g.jsx)(t.td,{children:`自定义内容`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{children:`-`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`okText`})}),(0,g.jsx)(t.td,{children:`确认按钮文本`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`string`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`"确定"`})})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`cancelText`})}),(0,g.jsx)(t.td,{children:`取消按钮文本`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`string`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`"取消"`})})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`okDanger`})}),(0,g.jsx)(t.td,{children:`确认按钮是否为危险样式`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`boolean`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`false`})})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`icon`})}),(0,g.jsx)(t.td,{children:`自定义图标`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{children:`-`})]})]})]})]})}function I(e={}){let{wrapper:t}=e.components||{};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(F,{...e})}):F(e)}export{I as default,P as frontmatter};