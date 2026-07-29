import{C as e,M as t,k as n,x as r}from"./dist-DCLsKzkS.js";import{n as i}from"./provider-DMuMa5yQ.js";import{t as a}from"./XLg-BjLaNPLw.js";import{t as o}from"./DemoBox-D1az5eCZ.js";import{t as s}from"./button-Bt-6g9li.js";import{a as c,i as l,n as u,r as d,t as f}from"./dist-CXXqh7yM.js";var p=t(n()),m=e(),h=({open:e,onOpenChange:t,placement:n=`right`,size:o=380,title:h,extra:g,closable:_=!0,footer:v,modal:y=!1,mask:b=!0,destroyOnHidden:x=!0,zIndex:S,className:C,style:w,children:T})=>{let E=i(`Drawer`),[D,O]=(0,p.useState)(e);(0,p.useEffect)(()=>(e?(O(!0),document.body.style.overflow=`hidden`):document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[e]);let k=(0,p.useCallback)(()=>{!e&&x&&O(!1)},[e,x]),A=(0,p.useCallback)(e=>{e||t(!1)},[t]),j=n===`left`||n===`right`,M=typeof o==`number`?`${o}px`:o,N=j?{width:M,maxWidth:`100vw`}:{height:M,maxHeight:`100vh`};return(0,m.jsx)(f,{open:e,onOpenChange:A,modal:!1,children:(0,m.jsxs)(l,{forceMount:void 0,children:[D&&b&&(0,m.jsx)(`div`,{className:r(`lg-drawer__overlay`,!e&&`lg-drawer__overlay--closing`),style:S?{zIndex:S}:void 0,onClick:()=>{y||t(!1)}}),(0,m.jsx)(d,{className:r(`lg-drawer__content`,`lg-drawer__content--${n}`,C),style:{...N,...w,...S?{zIndex:S+1}:{}},"data-placement":n,onAnimationEnd:k,onInteractOutside:e=>{e.preventDefault()},onPointerDownOutside:e=>{e.preventDefault()},onFocusOutside:e=>{e.preventDefault()},children:D&&(0,m.jsxs)(m.Fragment,{children:[(h||g||_)&&(0,m.jsxs)(`div`,{className:`lg-drawer__header`,children:[h&&(0,m.jsx)(c,{className:`lg-drawer__title`,asChild:typeof h!=`string`,children:typeof h==`string`?(0,m.jsx)(`span`,{children:h}):h}),(0,m.jsxs)(`div`,{className:`lg-drawer__header-actions`,children:[g,_&&(0,m.jsx)(u,{asChild:!0,"aria-label":E.close,children:(0,m.jsx)(s,{className:`lg-drawer__close`,variant:`text`,size:`lg`,icon:(0,m.jsx)(a,{size:18})})})]})]}),(0,m.jsx)(`div`,{className:`lg-drawer__body`,children:T}),v!=null&&(0,m.jsx)(`div`,{className:`lg-drawer__footer`,children:v})]})})]})})};h.displayName=`Drawer`;function g(){let[e,t]=(0,p.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{onClick:()=>t(!0),children:`打开抽屉`}),(0,m.jsxs)(h,{open:e,onOpenChange:t,title:`基础抽屉`,children:[(0,m.jsx)(`p`,{children:`这是抽屉的内容区域。`}),(0,m.jsx)(`p`,{children:`点击遮罩层或关闭按钮可关闭。`})]})]})}var _=`import { useState } from "react";
import { Drawer, Button } from "lingee-ui";

export default function BasicDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      <Drawer open={open} onOpenChange={setOpen} title="基础抽屉">
        <p>这是抽屉的内容区域。</p>
        <p>点击遮罩层或关闭按钮可关闭。</p>
      </Drawer>
    </>
  );
}
`;function v(){let[e,t]=(0,p.useState)(!1),[n,r]=(0,p.useState)(`right`),i=e=>{r(e),t(!0)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,m.jsx)(s,{onClick:()=>i(`left`),children:`左侧`}),(0,m.jsx)(s,{onClick:()=>i(`right`),children:`右侧`}),(0,m.jsx)(s,{onClick:()=>i(`top`),children:`顶部`}),(0,m.jsx)(s,{onClick:()=>i(`bottom`),children:`底部`})]}),(0,m.jsx)(h,{open:e,onOpenChange:t,title:`${n} 方向抽屉`,placement:n,children:(0,m.jsxs)(`p`,{children:[`从 `,n,` 方向滑出的抽屉。`]})})]})}var y=`import { useState } from "react";
import { Drawer, Button } from "lingee-ui";

type Placement = "left" | "right" | "top" | "bottom";

export default function PlacementDemo() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<Placement>("right");

  const openDrawer = (p: Placement) => {
    setPlacement(p);
    setOpen(true);
  };

  return (
    <>
      <div style={{ display: "flex", gap: 12 }}>
        <Button onClick={() => openDrawer("left")}>左侧</Button>
        <Button onClick={() => openDrawer("right")}>右侧</Button>
        <Button onClick={() => openDrawer("top")}>顶部</Button>
        <Button onClick={() => openDrawer("bottom")}>底部</Button>
      </div>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title={\`\${placement} 方向抽屉\`}
        placement={placement}
      >
        <p>从 {placement} 方向滑出的抽屉。</p>
      </Drawer>
    </>
  );
}
`;function b(){let[e,t]=(0,p.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{onClick:()=>t(!0),children:`打开带底部操作栏的抽屉`}),(0,m.jsxs)(h,{open:e,onOpenChange:t,title:`编辑信息`,footer:(0,m.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,m.jsx)(s,{onClick:()=>t(!1),children:`取消`}),(0,m.jsx)(s,{variant:`primary`,onClick:()=>t(!1),children:`保存`})]}),children:[(0,m.jsx)(`p`,{children:`这是带底部操作栏的抽屉，适用于表单编辑场景。`}),(0,m.jsx)(`p`,{children:`底部固定展示操作按钮，方便用户确认或取消。`})]})]})}var x=`import { useState } from "react";
import { Drawer, Button } from "lingee-ui";

export default function WithFooterDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开带底部操作栏的抽屉</Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="编辑信息"
        footer={
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <Button onClick={() => setOpen(false)}>取消</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              保存
            </Button>
          </div>
        }
      >
        <p>这是带底部操作栏的抽屉，适用于表单编辑场景。</p>
        <p>底部固定展示操作按钮，方便用户确认或取消。</p>
      </Drawer>
    </>
  );
}
`,S={title:`Drawer 抽屉`,description:`从屏幕边缘滑出的浮层面板，用于承载表单或详情内容。`};function C(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.h2,{children:`基本用法`}),`
`,(0,m.jsxs)(t.p,{children:[`基础的右侧抽屉，通过 `,(0,m.jsx)(t.code,{children:`open`}),` 和 `,(0,m.jsx)(t.code,{children:`onOpenChange`}),` 控制开关。`]}),`
`,(0,m.jsx)(o,{source:_,children:(0,m.jsx)(g,{})}),`
`,(0,m.jsx)(t.h2,{children:`四个方向`}),`
`,(0,m.jsxs)(t.p,{children:[`通过 `,(0,m.jsx)(t.code,{children:`placement`}),` 控制抽屉从不同方向滑出，支持 `,(0,m.jsx)(t.code,{children:`left`}),`、`,(0,m.jsx)(t.code,{children:`right`}),`、`,(0,m.jsx)(t.code,{children:`top`}),`、`,(0,m.jsx)(t.code,{children:`bottom`}),` 四个方向。`]}),`
`,(0,m.jsx)(o,{source:y,children:(0,m.jsx)(v,{})}),`
`,(0,m.jsx)(t.h2,{children:`带底部操作栏`}),`
`,(0,m.jsxs)(t.p,{children:[`通过 `,(0,m.jsx)(t.code,{children:`footer`}),` 属性在抽屉底部添加操作按钮区域，适用于表单编辑等场景。`]}),`
`,(0,m.jsx)(o,{source:x,children:(0,m.jsx)(b,{})}),`
`,(0,m.jsx)(t.h2,{children:`API`}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`属性`}),(0,m.jsx)(t.th,{children:`说明`}),(0,m.jsx)(t.th,{children:`类型`}),(0,m.jsx)(t.th,{children:`默认值`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`open`})}),(0,m.jsx)(t.td,{children:`是否打开`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`boolean`})}),(0,m.jsx)(t.td,{children:`-`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`onOpenChange`})}),(0,m.jsx)(t.td,{children:`打开状态变化回调`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`(open: boolean) => void`})}),(0,m.jsx)(t.td,{children:`-`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`title`})}),(0,m.jsx)(t.td,{children:`标题`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`ReactNode`})}),(0,m.jsx)(t.td,{children:`-`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`placement`})}),(0,m.jsx)(t.td,{children:`弹出方向`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`"left" | "right" | "top" | "bottom"`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`"right"`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`size`})}),(0,m.jsx)(t.td,{children:`宽度/高度（取决于方向）`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`number`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`378`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`closable`})}),(0,m.jsx)(t.td,{children:`是否显示关闭按钮`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`boolean`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`true`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`mask`})}),(0,m.jsx)(t.td,{children:`是否显示遮罩`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`boolean`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`true`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`modal`})}),(0,m.jsx)(t.td,{children:`是否为模态模式`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`boolean`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`false`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`footer`})}),(0,m.jsx)(t.td,{children:`底部操作区`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`ReactNode`})}),(0,m.jsx)(t.td,{children:`-`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`children`})}),(0,m.jsx)(t.td,{children:`内容区域`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`ReactNode`})}),(0,m.jsx)(t.td,{children:`-`})]})]})]})]})}function w(e={}){let{wrapper:t}=e.components||{};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(C,{...e})}):C(e)}export{w as default,S as frontmatter};