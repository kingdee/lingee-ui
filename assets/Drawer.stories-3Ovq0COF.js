import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r}from"./index-D4H_InIO.js";import{D as Z,a as ee,b as ne,c as te,d as re}from"./index-C3ZiH7QT.js";import{B as s}from"./index-CmnokBQH.js";import{a as b}from"./utils-HnQPFlDo.js";import{u as ae}from"./index-DhX95gbj.js";import{X as se}from"./XLg-Buk6fdo7.js";import"./index-Dth3sfoE.js";import"./index-Dj6c7Bq9.js";import"./index-CJs4gz5u.js";import"./index-klUtQC2j.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-DglMy7uv.js";import"./Combination-DnvQz1mi.js";import"./index-ukuGrK6K.js";import"./index-B_ca6aDP.js";import"./LoaderCircle-BJjvYEe5.js";import"./utils-YwZfuvH0-DLWngkAW.js";const o=({open:t,onOpenChange:n,placement:i="right",size:p=380,title:a,extra:v,closable:j=!0,footer:x,modal:H=!1,mask:L=!0,destroyOnHidden:O=!0,zIndex:c,className:X,style:I,children:G})=>{const J=ae("Drawer"),[y,C]=r.useState(t);r.useEffect(()=>(t?(C(!0),document.body.style.overflow="hidden"):document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]);const K=r.useCallback(()=>{!t&&O&&C(!1)},[t,O]),Q=r.useCallback(l=>{l||n(!1)},[n]),U=i==="left"||i==="right",w=typeof p=="number"?`${p}px`:p,Y=U?{width:w,maxWidth:"100vw"}:{height:w,maxHeight:"100vh"};return e.jsx(Z,{open:t,onOpenChange:Q,modal:!1,children:e.jsxs(ee,{forceMount:void 0,children:[y&&L&&e.jsx("div",{className:b("lg-drawer__overlay",!t&&"lg-drawer__overlay--closing"),style:c?{zIndex:c}:void 0,onClick:()=>{H||n(!1)}}),e.jsx(ne,{className:b("lg-drawer__content",`lg-drawer__content--${i}`,X),style:{...Y,...I,...c?{zIndex:c+1}:{}},"data-placement":i,onAnimationEnd:K,onInteractOutside:l=>{l.preventDefault()},onPointerDownOutside:l=>{l.preventDefault()},onFocusOutside:l=>{l.preventDefault()},children:y&&e.jsxs(e.Fragment,{children:[(a||v||j)&&e.jsxs("div",{className:"lg-drawer__header",children:[a&&e.jsx(te,{className:"lg-drawer__title",asChild:typeof a!="string",children:typeof a=="string"?e.jsx("span",{children:a}):a}),e.jsxs("div",{className:"lg-drawer__header-actions",children:[v,j&&e.jsx(re,{asChild:!0,"aria-label":J.close,children:e.jsx(s,{className:"lg-drawer__close",variant:"text",size:"lg",icon:e.jsx(se,{size:18})})})]})]}),e.jsx("div",{className:"lg-drawer__body",children:G}),x!=null&&e.jsx("div",{className:"lg-drawer__footer",children:x})]})})]})})};o.displayName="Drawer";o.__docgenInfo={description:`Drawer 抽屉组件
基于 @radix-ui/react-dialog，从屏幕边缘滑入的面板`,methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:"是否打开"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"状态变化回调（关闭时 nextOpen=false）"},placement:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"抽屉滑出方向，默认 right",defaultValue:{value:'"right"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"抽屉宽度（left/right 方向时生效），默认 380",defaultValue:{value:"380",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"标题（支持 ReactNode）"},extra:{required:!1,tsType:{name:"ReactNode"},description:"标题栏右侧额外内容"},closable:{required:!1,tsType:{name:"boolean"},description:"是否显示关闭按钮，默认 true",defaultValue:{value:"true",computed:!1}},footer:{required:!1,tsType:{name:"ReactNode"},description:"底部操作区，传 ReactNode 完全自定义；传 null 隐藏"},modal:{required:!1,tsType:{name:"boolean"},description:"是否为模态（true 时点击遮罩不关闭），默认 false",defaultValue:{value:"false",computed:!1}},mask:{required:!1,tsType:{name:"boolean"},description:"是否显示遮罩层，默认 true",defaultValue:{value:"true",computed:!1}},destroyOnHidden:{required:!1,tsType:{name:"boolean"},description:"关闭后是否销毁子节点，默认 true",defaultValue:{value:"true",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"自定义 z-index"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},children:{required:!1,tsType:{name:"ReactNode"},description:"抽屉内容"}}};const De={title:"Components/Drawer",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{placement:{control:"select",options:["left","right","top","bottom"]},size:{control:"number"},closable:{control:"boolean"},modal:{control:"boolean"},mask:{control:"boolean"}}},d={name:"基础用法",render:()=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"打开抽屉"}),e.jsxs(o,{open:t,onOpenChange:n,title:"基础抽屉",children:[e.jsx("p",{children:"这是抽屉的内容区域。"}),e.jsx("p",{children:"点击遮罩层或关闭按钮可关闭。"})]})]})}},u={name:"四个方向",render:()=>{const[t,n]=r.useState("right"),[i,p]=r.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:12},children:[["left","right","top","bottom"].map(a=>e.jsx(s,{variant:"secondary",onClick:()=>{n(a),p(!0)},children:a},a)),e.jsx(o,{open:i,onOpenChange:p,title:`从 ${t} 滑入`,placement:t,children:e.jsxs("p",{children:["当前方向：",t]})})]})}},m={name:"带 Footer",render:()=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"打开抽屉"}),e.jsx(o,{open:t,onOpenChange:n,title:"编辑信息",footer:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(s,{variant:"text",size:"lg",onClick:()=>n(!1),children:"取消"}),e.jsx(s,{variant:"primary",size:"lg",onClick:()=>n(!1),children:"保存"})]}),children:e.jsx("p",{children:"表单内容区域…"})})]})}},f={name:"自定义宽度",render:()=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"宽抽屉 (600px)"}),e.jsx(o,{open:t,onOpenChange:n,title:"宽抽屉",size:600,children:e.jsx("p",{children:"这个抽屉宽度为 600px。"})})]})}},h={name:"模态模式",render:()=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"模态抽屉"}),e.jsx(o,{open:t,onOpenChange:n,title:"模态抽屉",modal:!0,children:e.jsx("p",{children:"点击遮罩层不会关闭，只能通过关闭按钮关闭。"})})]})}},g={name:"无遮罩",render:()=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"无遮罩抽屉"}),e.jsx(o,{open:t,onOpenChange:n,title:"无遮罩",mask:!1,children:e.jsx("p",{children:"没有遮罩层，背景仍可交互。"})})]})}};var D,S,k;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "基础用法",
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开抽屉</Button>
        <Drawer open={open} onOpenChange={setOpen} title="基础抽屉">
          <p>这是抽屉的内容区域。</p>
          <p>点击遮罩层或关闭按钮可关闭。</p>
        </Drawer>
      </>;
  }
}`,...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var _,N,B;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "四个方向",
  render: () => {
    const [placement, setPlacement] = useState<"left" | "right" | "top" | "bottom">("right");
    const [open, setOpen] = useState(false);
    return <div style={{
      display: "flex",
      gap: 12
    }}>
        {(["left", "right", "top", "bottom"] as const).map(dir => <Button key={dir} variant="secondary" onClick={() => {
        setPlacement(dir);
        setOpen(true);
      }}>
            {dir}
          </Button>)}
        <Drawer open={open} onOpenChange={setOpen} title={\`从 \${placement} 滑入\`} placement={placement}>
          <p>当前方向：{placement}</p>
        </Drawer>
      </div>;
  }
}`,...(B=(N=u.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var T,q,z;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "带 Footer",
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开抽屉</Button>
        <Drawer open={open} onOpenChange={setOpen} title="编辑信息" footer={<div style={{
        display: "flex",
        gap: 12
      }}>
              <Button variant="text" size="lg" onClick={() => setOpen(false)}>
                取消
              </Button>
              <Button variant="primary" size="lg" onClick={() => setOpen(false)}>
                保存
              </Button>
            </div>}>
          <p>表单内容区域…</p>
        </Drawer>
      </>;
  }
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var F,R,P;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "自定义宽度",
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>宽抽屉 (600px)</Button>
        <Drawer open={open} onOpenChange={setOpen} title="宽抽屉" size={600}>
          <p>这个抽屉宽度为 600px。</p>
        </Drawer>
      </>;
  }
}`,...(P=(R=f.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var E,V,M;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "模态模式",
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>模态抽屉</Button>
        <Drawer open={open} onOpenChange={setOpen} title="模态抽屉" modal>
          <p>点击遮罩层不会关闭，只能通过关闭按钮关闭。</p>
        </Drawer>
      </>;
  }
}`,...(M=(V=h.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var $,W,A;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "无遮罩",
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>无遮罩抽屉</Button>
        <Drawer open={open} onOpenChange={setOpen} title="无遮罩" mask={false}>
          <p>没有遮罩层，背景仍可交互。</p>
        </Drawer>
      </>;
  }
}`,...(A=(W=g.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const Se=["Default","Placement","WithFooter","CustomSize","Modal","NoMask"];export{f as CustomSize,d as Default,h as Modal,g as NoMask,u as Placement,m as WithFooter,Se as __namedExportsOrder,De as default};
