import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r,R as Y}from"./index-D4H_InIO.js";/* empty css                */import{B as p}from"./index-Dnck3V1T.js";import{I as J}from"./index-BLKHGLwr.js";import{T as be}from"./index-m3PW3e5A.js";import{f as _e,d as L,h as z,P as k,e as _,a as V,c as Te,b as we}from"./index-CJMDPjkl.js";import{P as ke,D as Se,u as Ne}from"./index-roZDV17k.js";import{h as Re,u as Pe,F as Ee,R as Fe}from"./Combination-bIa9HupK.js";import{a as Me}from"./utils-HnQPFlDo.js";import{X as Ie}from"./XLg-Buk6fdo7.js";import{c as Ae}from"./client-Dy2InzuZ.js";import{_ as Be,e as qe,a as P,b as Le,c as ze}from"./utils-YwZfuvH0-DLWngkAW.js";import"./index-ukuGrK6K.js";import"./LoaderCircle-BJjvYEe5.js";import"./XCircleFill-C1lg6Dm5.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-CNPoBS2Q.js";var Ve=["size","color","fill","rotate","spin","className","style"],w=r.forwardRef((n,o)=>{var l,i=n.size,a=i===void 0?"1em":i,t=n.color,s=n.fill,c=n.rotate,d=n.spin,u=n.className,f=n.style,g=Be(n,Ve);return d&&qe(),e.jsx("svg",P(P({ref:o,width:a,height:a,viewBox:"0 0 24 24",fill:(l=s??t)!==null&&l!==void 0?l:"currentColor",className:ze("lingee-icon",d&&"lingee-icon-spin",u),style:P(P({},Le),{},{transform:c?"rotate(".concat(c,"deg)"):void 0,animation:d?"lingee-icon-spin 1s linear infinite":void 0},f),xmlns:"http://www.w3.org/2000/svg","data-icon":"ExclamationCircleFill"},g),{},{children:e.jsx("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 11C11.4477 11 11 11.4477 11 12V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V12C13 11.4477 12.5523 11 12 11ZM12 7C11.3373 7.00003 10.7998 7.53747 10.7998 8.2002C10.8 8.86279 11.3374 9.40036 12 9.40039C12.6626 9.40039 13.2 8.8628 13.2002 8.2002C13.2002 7.53745 12.6627 7 12 7Z"})}))});w.displayName="ExclamationCircleFill";w.__docgenInfo={description:"",methods:[],displayName:"ExclamationCircleFill"};var A="Dialog",[le]=Te(A),[We,x]=le(A),ie=n=>{const{__scopeDialog:o,children:l,open:i,defaultOpen:a,onOpenChange:t,modal:s=!0}=n,c=r.useRef(null),d=r.useRef(null),[u,f]=_e({prop:i,defaultProp:a??!1,onChange:t,caller:A});return e.jsx(We,{scope:o,triggerRef:c,contentRef:d,contentId:L(),titleId:L(),descriptionId:L(),open:u,onOpenChange:f,onOpenToggle:r.useCallback(()=>f(g=>!g),[f]),modal:s,children:l})};ie.displayName=A;var re="DialogTrigger",$e=r.forwardRef((n,o)=>{const{__scopeDialog:l,...i}=n,a=x(re,l),t=V(o,a.triggerRef);return e.jsx(k.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":$(a.open),...i,ref:t,onClick:_(n.onClick,a.onOpenToggle)})});$e.displayName=re;var W="DialogPortal",[He,se]=le(W,{forceMount:void 0}),ce=n=>{const{__scopeDialog:o,forceMount:l,children:i,container:a}=n,t=x(W,o);return e.jsx(He,{scope:o,forceMount:l,children:r.Children.map(i,s=>e.jsx(z,{present:l||t.open,children:e.jsx(ke,{asChild:!0,container:a,children:s})}))})};ce.displayName=W;var M="DialogOverlay",Ge=r.forwardRef((n,o)=>{const l=se(M,n.__scopeDialog),{forceMount:i=l.forceMount,...a}=n,t=x(M,n.__scopeDialog);return t.modal?e.jsx(z,{present:i||t.open,children:e.jsx(Ke,{...a,ref:o})}):null});Ge.displayName=M;var Ze=we("DialogOverlay.RemoveScroll"),Ke=r.forwardRef((n,o)=>{const{__scopeDialog:l,...i}=n,a=x(M,l),t=Ne(),s=V(o,t);return e.jsx(Fe,{as:Ze,allowPinchZoom:!0,shards:[a.contentRef],children:e.jsx(k.div,{"data-state":$(a.open),...i,ref:s,style:{pointerEvents:"auto",...i.style}})})}),b="DialogContent",de=r.forwardRef((n,o)=>{const l=se(b,n.__scopeDialog),{forceMount:i=l.forceMount,...a}=n,t=x(b,n.__scopeDialog);return e.jsx(z,{present:i||t.open,children:t.modal?e.jsx(Xe,{...a,ref:o}):e.jsx(Ue,{...a,ref:o})})});de.displayName=b;var Xe=r.forwardRef((n,o)=>{const l=x(b,n.__scopeDialog),i=r.useRef(null),a=V(o,l.contentRef,i);return r.useEffect(()=>{const t=i.current;if(t)return Re(t)},[]),e.jsx(ue,{...n,ref:a,trapFocus:l.open,disableOutsidePointerEvents:l.open,onCloseAutoFocus:_(n.onCloseAutoFocus,t=>{var s;t.preventDefault(),(s=l.triggerRef.current)==null||s.focus()}),onPointerDownOutside:_(n.onPointerDownOutside,t=>{const s=t.detail.originalEvent,c=s.button===0&&s.ctrlKey===!0;(s.button===2||c)&&t.preventDefault()}),onFocusOutside:_(n.onFocusOutside,t=>t.preventDefault())})}),Ue=r.forwardRef((n,o)=>{const l=x(b,n.__scopeDialog),i=r.useRef(!1),a=r.useRef(!1);return e.jsx(ue,{...n,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var s,c;(s=n.onCloseAutoFocus)==null||s.call(n,t),t.defaultPrevented||(i.current||(c=l.triggerRef.current)==null||c.focus(),t.preventDefault()),i.current=!1,a.current=!1},onInteractOutside:t=>{var d,u;(d=n.onInteractOutside)==null||d.call(n,t),t.defaultPrevented||(i.current=!0,t.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const s=t.target;((u=l.triggerRef.current)==null?void 0:u.contains(s))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&a.current&&t.preventDefault()}})}),ue=r.forwardRef((n,o)=>{const{__scopeDialog:l,trapFocus:i,onOpenAutoFocus:a,onCloseAutoFocus:t,...s}=n,c=x(b,l);return Pe(),e.jsx(e.Fragment,{children:e.jsx(Ee,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:a,onUnmountAutoFocus:t,children:e.jsx(Se,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":$(c.open),...s,ref:o,deferPointerDownOutside:!0,onDismiss:()=>c.onOpenChange(!1)})})})}),pe="DialogTitle",fe=r.forwardRef((n,o)=>{const{__scopeDialog:l,...i}=n,a=x(pe,l);return e.jsx(k.h2,{id:a.titleId,...i,ref:o})});fe.displayName=pe;var ge="DialogDescription",Ye=r.forwardRef((n,o)=>{const{__scopeDialog:l,...i}=n,a=x(ge,l);return e.jsx(k.p,{id:a.descriptionId,...i,ref:o})});Ye.displayName=ge;var me="DialogClose",xe=r.forwardRef((n,o)=>{const{__scopeDialog:l,...i}=n,a=x(me,l);return e.jsx(k.button,{type:"button",...i,ref:o,onClick:_(n.onClick,()=>a.onOpenChange(!1))})});xe.displayName=me;function $(n){return n?"open":"closed"}const B=({open:n,onOpenChange:o,width:l=460,height:i,title:a,extra:t,closable:s=!0,footer:c,okText:d,cancelText:u,onOk:f,onCancel:g,okDanger:y=!1,modal:O=!1,mask:S=!0,destroyOnHidden:N=!0,zIndex:C,maxHeight:v=640,autoHeight:R=!1,className:D,style:he,children:ve})=>{const[q,H]=r.useState(n),[ye,G]=r.useState(!1);r.useEffect(()=>(n?(H(!0),document.body.style.overflow="hidden"):document.body.style.overflow="",()=>{document.body.style.overflow=""}),[n]);const Ce=r.useCallback(()=>{!n&&N&&H(!1)},[n,N]),je=r.useCallback(h=>{h||o(!1)},[o]),Oe=r.useCallback(async()=>{if(!f){o(!1);return}const h=f();if(h instanceof Promise){G(!0);try{await h}finally{G(!1)}}},[f,o]),De=r.useCallback(()=>{g==null||g(),o(!1)},[g,o]),Z=R?void 0:typeof v=="number"?v-68:`calc(${v} - 68px)`,K=R?typeof v=="number"?`${v}px`:v:void 0,X=typeof l=="number"?`${l}px`:l,U=i!=null?typeof i=="number"?`${i}px`:i:void 0;return e.jsx(ie,{open:n,onOpenChange:je,modal:!1,children:e.jsxs(ce,{forceMount:void 0,children:[q&&S&&e.jsx("div",{className:`lg-dialog__overlay${n?"":" lg-dialog__overlay--closing"}`,style:C?{zIndex:C}:void 0,onClick:()=>{O||o(!1)}}),e.jsx(de,{className:Me("lg-dialog__content",D),style:{...he,width:X,maxWidth:X,...U?{height:U}:{},...K?{maxHeight:K}:{},...C?{zIndex:C+1}:{}},onAnimationEnd:Ce,onInteractOutside:h=>{h.preventDefault()},onPointerDownOutside:h=>{h.preventDefault()},onFocusOutside:h=>{h.preventDefault()},children:q&&e.jsxs(e.Fragment,{children:[s&&e.jsx(xe,{asChild:!0,"aria-label":"关闭",children:e.jsx(p,{className:"lg-dialog__close",variant:"text",size:"lg",icon:e.jsx(Ie,{size:18})})}),(a||t)&&e.jsxs("div",{className:"lg-dialog__header",children:[a&&e.jsx(fe,{className:"lg-dialog__title",asChild:typeof a!="string",children:typeof a=="string"?e.jsx("span",{children:a}):a}),t&&e.jsx("div",{className:"lg-dialog__header-actions",children:t})]}),e.jsx("div",{className:"lg-dialog__body",style:Z!==void 0?{maxHeight:Z}:void 0,children:ve}),c!=null?e.jsx("div",{className:"lg-dialog__footer",children:c}):d||u?e.jsxs("div",{className:"lg-dialog__footer",children:[u&&e.jsx(p,{variant:"text",size:"lg",onClick:De,children:u}),d&&e.jsx(p,{variant:"primary",size:"lg",danger:y,loading:ye,onClick:Oe,children:d})]}):null]})})]})})};B.displayName="Dialog";B.__docgenInfo={description:`Dialog 对话框组件
基于 @radix-ui/react-dialog，提供焦点陷阱、Esc 关闭、aria 属性`,methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:"是否打开"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"状态变化回调（关闭时 nextOpen=false）"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"弹窗宽度，默认 460",defaultValue:{value:"460",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"弹窗高度，默认自适应内容"},title:{required:!1,tsType:{name:"ReactNode"},description:"标题（支持 ReactNode）"},extra:{required:!1,tsType:{name:"ReactNode"},description:"标题栏右侧额外内容"},closable:{required:!1,tsType:{name:"boolean"},description:"是否显示关闭按钮，默认 true",defaultValue:{value:"true",computed:!1}},footer:{required:!1,tsType:{name:"ReactNode"},description:"底部操作区，传 ReactNode 完全自定义；传 null 隐藏"},okText:{required:!1,tsType:{name:"string"},description:"确认按钮文字（传入后自动渲染 footer，与 footer 互斥）"},cancelText:{required:!1,tsType:{name:"string"},description:"取消按钮文字"},onOk:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void | Promise<void>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"确认回调（支持异步，返回 Promise 时按钮显示 loading）"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"取消回调"},okDanger:{required:!1,tsType:{name:"boolean"},description:"确认按钮是否为危险样式",defaultValue:{value:"false",computed:!1}},modal:{required:!1,tsType:{name:"boolean"},description:"是否为模态（true 时点击遮罩不关闭），默认 false",defaultValue:{value:"false",computed:!1}},mask:{required:!1,tsType:{name:"boolean"},description:"是否显示遮罩层，默认 true",defaultValue:{value:"true",computed:!1}},destroyOnHidden:{required:!1,tsType:{name:"boolean"},description:"关闭后是否销毁子节点，默认 true",defaultValue:{value:"true",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"自定义 z-index"},maxHeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"内容区最大高度，默认 640px",defaultValue:{value:"640",computed:!1}},autoHeight:{required:!1,tsType:{name:"boolean"},description:"开启后 body 高度跟随内容自适应，弹窗整体高度由 maxHeight 兜底上限，默认 false",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},children:{required:!1,tsType:{name:"ReactNode"},description:"弹窗内容"}}};let T=null,j=null;function I(){T&&(T.unmount(),T=null),j&&(j.remove(),j=null)}function Je({title:n,description:o,okText:l,cancelText:i,okDanger:a=!1,icon:t,content:s,width:c=320,footer:d,onOk:u,onCancel:f,onResult:g,...y}){const[O,S]=Y.useState(!0),[N,C]=Y.useState(!1),v=()=>{S(!1),f==null||f(),g(!1),setTimeout(I,200)},R=async()=>{if(u){const D=u();if(D instanceof Promise){C(!0);try{await D}finally{C(!1)}}}S(!1),g(!0),setTimeout(I,200)};return e.jsx(B,{...y,open:O,onOpenChange:D=>{D||v()},width:c,closable:y.closable??!1,modal:y.modal??!0,footer:d??e.jsxs(e.Fragment,{children:[i&&e.jsx(p,{variant:"text",size:"lg",onClick:v,children:i}),l&&e.jsx(p,{variant:"primary",size:"lg",danger:a,loading:N,onClick:R,children:l})]}),children:s??e.jsxs("div",{className:"lg-dialog-confirm",children:[e.jsx("span",{className:"lg-dialog-confirm__icon",children:t??e.jsx(w,{className:`lg-dialog-confirm__icon-default lg-dialog-confirm__icon-default--${a?"danger":"primary"}`})}),e.jsxs("div",{className:"lg-dialog-confirm__content",children:[n&&e.jsx("span",{className:"lg-dialog-confirm__title",children:n}),o&&e.jsx("p",{className:"lg-dialog-confirm__desc",children:o})]})]})})}function Qe(n){return I(),new Promise(o=>{j=document.createElement("div"),j.className="lg-dialog-confirm-container",document.body.appendChild(j),T=Ae.createRoot(j),T.render(e.jsx(Je,{...n,onResult:o}))})}function en(){I()}const m=B;m.confirm=Qe;m.closeConfirm=en;const jn={title:"Components/Dialog",component:m,tags:["autodocs"],argTypes:{width:{control:"number"},closable:{control:"boolean"},modal:{control:"boolean"}}},E={render:n=>{const[o,l]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{variant:"primary",onClick:()=>l(!0),children:"打开弹窗"}),e.jsx(m,{...n,open:o,onOpenChange:l,title:"对话框标题",okText:"确认",cancelText:"取消",onOk:()=>l(!1),onCancel:()=>l(!1),children:e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",padding:"0 20px"},children:"这是对话框的内容区域。"})})]})},args:{width:460,closable:!0,modal:!1}},F={render:()=>{const[n,o]=r.useState(!1),[l,i]=r.useState(!1),[a,t]=r.useState(!1),[s,c]=r.useState(!1),[d,u]=r.useState(!1),[f,g]=r.useState(!1);return e.jsxs("div",{style:{padding:24,display:"flex",flexWrap:"wrap",gap:12},children:[e.jsx(p,{variant:"outline",onClick:()=>o(!0),children:"460px 弹窗"}),e.jsx(m,{open:n,onOpenChange:o,width:460,title:"重命名",okText:"确认",cancelText:"取消",onOk:()=>o(!1),onCancel:()=>o(!1),children:e.jsxs("div",{style:{padding:"0 20px 20px",display:"flex",flexDirection:"column",gap:8},children:[e.jsx("label",{style:{fontSize:14,color:"rgba(0,0,0,0.64)"},children:"项目名称"}),e.jsx(J,{placeholder:"财务报告分析",defaultValue:"财务报告分析"})]})}),e.jsx(p,{variant:"outline",onClick:()=>i(!0),children:"640px 弹窗"}),e.jsx(m,{open:l,onOpenChange:i,width:640,title:"新建定时任务",okText:"确认创建",cancelText:"取消",onOk:()=>i(!1),onCancel:()=>i(!1),children:e.jsxs("div",{style:{padding:"0 20px 20px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:14},children:"任务名称 *"}),e.jsx(J,{placeholder:"请输入任务名称",style:{marginTop:8}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:14},children:"提示词 *"}),e.jsx(be,{placeholder:"请输入任务执行的提示词内容",style:{marginTop:8,width:"100%"}})]})]})}),e.jsx(p,{variant:"outline",onClick:()=>t(!0),children:"720px 详情弹窗"}),e.jsx(m,{open:a,onOpenChange:t,width:720,title:"技能详情",extra:e.jsx(p,{variant:"outline",size:"sm",children:"安装"}),children:e.jsxs("div",{style:{padding:"0 20px 20px",display:"flex",flexDirection:"column",gap:16},children:[e.jsx("h4",{style:{margin:0},children:"技能说明"}),e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",margin:0},children:"编制财务分析报告，精通报表、盈利及现金流分析。"}),e.jsx("h4",{style:{margin:0},children:"核心特性"}),e.jsxs("ul",{style:{color:"rgba(0,0,0,0.64)",margin:0,paddingLeft:20},children:[e.jsx("li",{children:"自动识别关键数据字段"}),e.jsx("li",{children:"实时数据同步更新"}),e.jsx("li",{children:"多维度交叉分析"})]})]})}),e.jsx(p,{variant:"outline",onClick:()=>c(!0),children:"900px 反馈弹窗"}),e.jsx(m,{open:s,onOpenChange:c,width:900,title:"提交反馈",okText:"提交",cancelText:"取消",onOk:()=>c(!1),onCancel:()=>c(!1),children:e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",padding:"0 20px"},children:"自定义宽度 900px。"})}),e.jsx(p,{variant:"outline",onClick:()=>u(!0),children:"无 Footer"}),e.jsx(m,{open:d,onOpenChange:u,width:640,title:"纯展示",children:e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",padding:"0 20px"},children:"没有底部操作栏的弹窗。"})}),e.jsx(p,{variant:"outline",onClick:()=>g(!0),children:"内容滚动"}),e.jsx(m,{open:f,onOpenChange:g,width:640,title:"长内容",footer:e.jsx(p,{variant:"primary",onClick:()=>g(!1),children:"关闭"}),children:e.jsx("div",{style:{padding:"0 20px"},children:Array.from({length:20},(y,O)=>e.jsxs("p",{style:{margin:"0 0 12px",color:"rgba(0,0,0,0.64)"},children:["第 ",O+1," 段：测试滚动。内容超出 maxHeight 时自动滚动。"]},O))})}),e.jsx(p,{variant:"outline",danger:!0,onClick:async()=>{await m.confirm({title:"删除该条定时任务",description:"删除后不可恢复，确定删除？",icon:e.jsx(w,{color:"var(--lg-g-fg-color-warning-default)"}),okText:"删除",cancelText:"取消",okDanger:!0})&&alert("已删除")},children:"confirm（危险）"}),e.jsx(p,{variant:"outline",onClick:async()=>{await m.confirm({title:"退出登录",description:"请确认是否退出登录？",icon:e.jsx(w,{color:"var(--lg-g-fg-color-progress-default)"}),okText:"确定",cancelText:"取消"})&&alert("已退出")},children:"confirm（主色）"})]})}};var Q,ee,ne;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开弹窗
        </Button>
        <Dialog {...args} open={open} onOpenChange={setOpen} title="对话框标题" okText="确认" cancelText="取消" onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
          <p style={{
          color: "rgba(0,0,0,0.64)",
          padding: "0 20px"
        }}>这是对话框的内容区域。</p>
        </Dialog>
      </>;
  },
  args: {
    width: 460,
    closable: true,
    modal: false
  }
}`,...(ne=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,oe,ae;F.parameters={...F.parameters,docs:{...(te=F.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [openSm, setOpenSm] = useState(false);
    const [openMd, setOpenMd] = useState(false);
    const [openLg, setOpenLg] = useState(false);
    const [openWide, setOpenWide] = useState(false);
    const [openNoFooter, setOpenNoFooter] = useState(false);
    const [openScroll, setOpenScroll] = useState(false);
    return <div style={{
      padding: 24,
      display: "flex",
      flexWrap: "wrap",
      gap: 12
    }}>
        {/* 460px */}
        <Button variant="outline" onClick={() => setOpenSm(true)}>460px 弹窗</Button>
        <Dialog open={openSm} onOpenChange={setOpenSm} width={460} title="重命名" okText="确认" cancelText="取消" onOk={() => setOpenSm(false)} onCancel={() => setOpenSm(false)}>
          <div style={{
          padding: "0 20px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 8
        }}>
            <label style={{
            fontSize: 14,
            color: "rgba(0,0,0,0.64)"
          }}>项目名称</label>
            <Input placeholder="财务报告分析" defaultValue="财务报告分析" />
          </div>
        </Dialog>

        {/* 640px */}
        <Button variant="outline" onClick={() => setOpenMd(true)}>640px 弹窗</Button>
        <Dialog open={openMd} onOpenChange={setOpenMd} width={640} title="新建定时任务" okText="确认创建" cancelText="取消" onOk={() => setOpenMd(false)} onCancel={() => setOpenMd(false)}>
          <div style={{
          padding: "0 20px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 16
        }}>
            <div>
              <label style={{
              fontSize: 14
            }}>任务名称 *</label>
              <Input placeholder="请输入任务名称" style={{
              marginTop: 8
            }} />
            </div>
            <div>
              <label style={{
              fontSize: 14
            }}>提示词 *</label>
              <Textarea placeholder="请输入任务执行的提示词内容" style={{
              marginTop: 8,
              width: "100%"
            }} />
            </div>
          </div>
        </Dialog>

        {/* 720px — 详情 */}
        <Button variant="outline" onClick={() => setOpenLg(true)}>720px 详情弹窗</Button>
        <Dialog open={openLg} onOpenChange={setOpenLg} width={720} title="技能详情" extra={<Button variant="outline" size="sm">安装</Button>}>
          <div style={{
          padding: "0 20px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 16
        }}>
            <h4 style={{
            margin: 0
          }}>技能说明</h4>
            <p style={{
            color: "rgba(0,0,0,0.64)",
            margin: 0
          }}>
              编制财务分析报告，精通报表、盈利及现金流分析。
            </p>
            <h4 style={{
            margin: 0
          }}>核心特性</h4>
            <ul style={{
            color: "rgba(0,0,0,0.64)",
            margin: 0,
            paddingLeft: 20
          }}>
              <li>自动识别关键数据字段</li>
              <li>实时数据同步更新</li>
              <li>多维度交叉分析</li>
            </ul>
          </div>
        </Dialog>

        {/* 自定义宽度 */}
        <Button variant="outline" onClick={() => setOpenWide(true)}>900px 反馈弹窗</Button>
        <Dialog open={openWide} onOpenChange={setOpenWide} width={900} title="提交反馈" okText="提交" cancelText="取消" onOk={() => setOpenWide(false)} onCancel={() => setOpenWide(false)}>
          <p style={{
          color: "rgba(0,0,0,0.64)",
          padding: "0 20px"
        }}>自定义宽度 900px。</p>
        </Dialog>

        {/* 无 footer */}
        <Button variant="outline" onClick={() => setOpenNoFooter(true)}>无 Footer</Button>
        <Dialog open={openNoFooter} onOpenChange={setOpenNoFooter} width={640} title="纯展示">
          <p style={{
          color: "rgba(0,0,0,0.64)",
          padding: "0 20px"
        }}>没有底部操作栏的弹窗。</p>
        </Dialog>

        {/* 内容滚动 */}
        <Button variant="outline" onClick={() => setOpenScroll(true)}>内容滚动</Button>
        <Dialog open={openScroll} onOpenChange={setOpenScroll} width={640} title="长内容" footer={<Button variant="primary" onClick={() => setOpenScroll(false)}>关闭</Button>}>
          <div style={{
          padding: "0 20px"
        }}>
            {Array.from({
            length: 20
          }, (_, i) => <p key={i} style={{
            margin: "0 0 12px",
            color: "rgba(0,0,0,0.64)"
          }}>
                第 {i + 1} 段：测试滚动。内容超出 maxHeight 时自动滚动。
              </p>)}
          </div>
        </Dialog>

        {/* 命令式 confirm — danger */}
        <Button variant="outline" danger onClick={async () => {
        const confirmed = await Dialog.confirm({
          title: "删除该条定时任务",
          description: "删除后不可恢复，确定删除？",
          icon: <ExclamationCircleFill color="var(--lg-g-fg-color-warning-default)" />,
          okText: "删除",
          cancelText: "取消",
          okDanger: true
        });
        if (confirmed) alert("已删除");
      }}>
          confirm（危险）
        </Button>

        {/* 命令式 confirm — primary */}
        <Button variant="outline" onClick={async () => {
        const confirmed = await Dialog.confirm({
          title: "退出登录",
          description: "请确认是否退出登录？",
          icon: <ExclamationCircleFill color="var(--lg-g-fg-color-progress-default)" />,
          okText: "确定",
          cancelText: "取消"
        });
        if (confirmed) alert("已退出");
      }}>
          confirm（主色）
        </Button>
      </div>;
  }
}`,...(ae=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};const On=["Playground","AllVariants"];export{F as AllVariants,E as Playground,On as __namedExportsOrder,jn as default};
