import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as i,R as Z}from"./index-D4H_InIO.js";/* empty css                */import{B as p}from"./index-Yd_vdD-n.js";import{I as K}from"./index-BLKHGLwr.js";import{T as Oe}from"./index-m3PW3e5A.js";import{f as De,d as A,h as q,P as k,e as _,a as L,c as be,b as _e}from"./index-CJMDPjkl.js";import{P as Te,D as we,u as ke}from"./index-roZDV17k.js";import{h as Se,u as Ne,F as Re,R as Pe}from"./Combination-bIa9HupK.js";import{a as Ee}from"./utils-HnQPFlDo.js";import{X as Fe}from"./XLg-Buk6fdo7.js";import{c as Me}from"./client-Dy2InzuZ.js";import{_ as Ie,e as Ae,a as N,b as Be,c as qe}from"./utils-YwZfuvH0-DLWngkAW.js";import"./index-ukuGrK6K.js";import"./XCircleFill-C1lg6Dm5.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-CNPoBS2Q.js";var Le=["size","color","fill","rotate","spin","className","style"],w=i.forwardRef((n,o)=>{var l,r=n.size,a=r===void 0?"1em":r,t=n.color,s=n.fill,c=n.rotate,d=n.spin,u=n.className,f=n.style,g=Ie(n,Le);return d&&Ae(),e.jsx("svg",N(N({ref:o,width:a,height:a,viewBox:"0 0 24 24",fill:(l=s??t)!==null&&l!==void 0?l:"currentColor",className:qe("lingee-icon",d&&"lingee-icon-spin",u),style:N(N({},Be),{},{transform:c?"rotate(".concat(c,"deg)"):void 0,animation:d?"lingee-icon-spin 1s linear infinite":void 0},f),xmlns:"http://www.w3.org/2000/svg","data-icon":"ExclamationCircleFill"},g),{},{children:e.jsx("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 11C11.4477 11 11 11.4477 11 12V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V12C13 11.4477 12.5523 11 12 11ZM12 7C11.3373 7.00003 10.7998 7.53747 10.7998 8.2002C10.8 8.86279 11.3374 9.40036 12 9.40039C12.6626 9.40039 13.2 8.8628 13.2002 8.2002C13.2002 7.53745 12.6627 7 12 7Z"})}))});w.displayName="ExclamationCircleFill";w.__docgenInfo={description:"",methods:[],displayName:"ExclamationCircleFill"};var F="Dialog",[ne]=be(F),[ze,x]=ne(F),te=n=>{const{__scopeDialog:o,children:l,open:r,defaultOpen:a,onOpenChange:t,modal:s=!0}=n,c=i.useRef(null),d=i.useRef(null),[u,f]=De({prop:r,defaultProp:a??!1,onChange:t,caller:F});return e.jsx(ze,{scope:o,triggerRef:c,contentRef:d,contentId:A(),titleId:A(),descriptionId:A(),open:u,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(g=>!g),[f]),modal:s,children:l})};te.displayName=F;var oe="DialogTrigger",Ve=i.forwardRef((n,o)=>{const{__scopeDialog:l,...r}=n,a=x(oe,l),t=L(o,a.triggerRef);return e.jsx(k.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":V(a.open),...r,ref:t,onClick:_(n.onClick,a.onOpenToggle)})});Ve.displayName=oe;var z="DialogPortal",[We,ae]=ne(z,{forceMount:void 0}),le=n=>{const{__scopeDialog:o,forceMount:l,children:r,container:a}=n,t=x(z,o);return e.jsx(We,{scope:o,forceMount:l,children:i.Children.map(r,s=>e.jsx(q,{present:l||t.open,children:e.jsx(Te,{asChild:!0,container:a,children:s})}))})};le.displayName=z;var E="DialogOverlay",$e=i.forwardRef((n,o)=>{const l=ae(E,n.__scopeDialog),{forceMount:r=l.forceMount,...a}=n,t=x(E,n.__scopeDialog);return t.modal?e.jsx(q,{present:r||t.open,children:e.jsx(Ge,{...a,ref:o})}):null});$e.displayName=E;var He=_e("DialogOverlay.RemoveScroll"),Ge=i.forwardRef((n,o)=>{const{__scopeDialog:l,...r}=n,a=x(E,l),t=ke(),s=L(o,t);return e.jsx(Pe,{as:He,allowPinchZoom:!0,shards:[a.contentRef],children:e.jsx(k.div,{"data-state":V(a.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})}),D="DialogContent",re=i.forwardRef((n,o)=>{const l=ae(D,n.__scopeDialog),{forceMount:r=l.forceMount,...a}=n,t=x(D,n.__scopeDialog);return e.jsx(q,{present:r||t.open,children:t.modal?e.jsx(Ze,{...a,ref:o}):e.jsx(Ke,{...a,ref:o})})});re.displayName=D;var Ze=i.forwardRef((n,o)=>{const l=x(D,n.__scopeDialog),r=i.useRef(null),a=L(o,l.contentRef,r);return i.useEffect(()=>{const t=r.current;if(t)return Se(t)},[]),e.jsx(ie,{...n,ref:a,trapFocus:l.open,disableOutsidePointerEvents:l.open,onCloseAutoFocus:_(n.onCloseAutoFocus,t=>{var s;t.preventDefault(),(s=l.triggerRef.current)==null||s.focus()}),onPointerDownOutside:_(n.onPointerDownOutside,t=>{const s=t.detail.originalEvent,c=s.button===0&&s.ctrlKey===!0;(s.button===2||c)&&t.preventDefault()}),onFocusOutside:_(n.onFocusOutside,t=>t.preventDefault())})}),Ke=i.forwardRef((n,o)=>{const l=x(D,n.__scopeDialog),r=i.useRef(!1),a=i.useRef(!1);return e.jsx(ie,{...n,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var s,c;(s=n.onCloseAutoFocus)==null||s.call(n,t),t.defaultPrevented||(r.current||(c=l.triggerRef.current)==null||c.focus(),t.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:t=>{var d,u;(d=n.onInteractOutside)==null||d.call(n,t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const s=t.target;((u=l.triggerRef.current)==null?void 0:u.contains(s))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&a.current&&t.preventDefault()}})}),ie=i.forwardRef((n,o)=>{const{__scopeDialog:l,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:t,...s}=n,c=x(D,l);return Ne(),e.jsx(e.Fragment,{children:e.jsx(Re,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:t,children:e.jsx(we,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":V(c.open),...s,ref:o,deferPointerDownOutside:!0,onDismiss:()=>c.onOpenChange(!1)})})})}),se="DialogTitle",ce=i.forwardRef((n,o)=>{const{__scopeDialog:l,...r}=n,a=x(se,l);return e.jsx(k.h2,{id:a.titleId,...r,ref:o})});ce.displayName=se;var de="DialogDescription",Xe=i.forwardRef((n,o)=>{const{__scopeDialog:l,...r}=n,a=x(de,l);return e.jsx(k.p,{id:a.descriptionId,...r,ref:o})});Xe.displayName=de;var ue="DialogClose",pe=i.forwardRef((n,o)=>{const{__scopeDialog:l,...r}=n,a=x(ue,l);return e.jsx(k.button,{type:"button",...r,ref:o,onClick:_(n.onClick,()=>a.onOpenChange(!1))})});pe.displayName=ue;function V(n){return n?"open":"closed"}const M=({open:n,onOpenChange:o,width:l=460,height:r,title:a,extra:t,closable:s=!0,footer:c,okText:d,cancelText:u,onOk:f,onCancel:g,okDanger:y=!1,modal:j=!1,mask:S=!0,destroyOnHidden:b=!0,zIndex:O,maxHeight:v=640,className:fe,style:ge,children:me})=>{const[I,W]=i.useState(n),[xe,$]=i.useState(!1);i.useEffect(()=>(n?(W(!0),document.body.style.overflow="hidden"):document.body.style.overflow="",()=>{document.body.style.overflow=""}),[n]);const he=i.useCallback(()=>{!n&&b&&W(!1)},[n,b]),ve=i.useCallback(h=>{h||o(!1)},[o]),ye=i.useCallback(async()=>{if(!f){o(!1);return}const h=f();if(h instanceof Promise){$(!0);try{await h}finally{$(!1)}}},[f,o]),Ce=i.useCallback(()=>{g==null||g(),o(!1)},[g,o]),je=typeof v=="number"?v-68:`calc(${v} - 68px)`,H=typeof l=="number"?`${l}px`:l,G=r!=null?typeof r=="number"?`${r}px`:r:void 0;return e.jsx(te,{open:n,onOpenChange:ve,modal:!1,children:e.jsxs(le,{forceMount:void 0,children:[I&&S&&e.jsx("div",{className:`lg-dialog__overlay${n?"":" lg-dialog__overlay--closing"}`,style:O?{zIndex:O}:void 0,onClick:()=>{j||o(!1)}}),e.jsx(re,{className:Ee("lg-dialog__content",fe),style:{...ge,width:H,maxWidth:H,...G?{height:G}:{},...O?{zIndex:O+1}:{}},onAnimationEnd:he,onInteractOutside:h=>{h.preventDefault()},onPointerDownOutside:h=>{h.preventDefault()},onFocusOutside:h=>{h.preventDefault()},children:I&&e.jsxs(e.Fragment,{children:[s&&e.jsx(pe,{asChild:!0,"aria-label":"关闭",children:e.jsx(p,{className:"lg-dialog__close",variant:"text",size:"lg",icon:e.jsx(Fe,{size:18})})}),(a||t)&&e.jsxs("div",{className:"lg-dialog__header",children:[a&&e.jsx(ce,{className:"lg-dialog__title",asChild:typeof a!="string",children:typeof a=="string"?e.jsx("span",{children:a}):a}),t&&e.jsx("div",{className:"lg-dialog__header-actions",children:t})]}),e.jsx("div",{className:"lg-dialog__body",style:{maxHeight:je},children:me}),c!=null?e.jsx("div",{className:"lg-dialog__footer",children:c}):d||u?e.jsxs("div",{className:"lg-dialog__footer",children:[u&&e.jsx(p,{variant:"text",size:"lg",onClick:Ce,children:u}),d&&e.jsx(p,{variant:"primary",size:"lg",danger:y,loading:xe,onClick:ye,children:d})]}):null]})})]})})};M.displayName="Dialog";M.__docgenInfo={description:`Dialog 对话框组件
基于 @radix-ui/react-dialog，提供焦点陷阱、Esc 关闭、aria 属性`,methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:"是否打开"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"状态变化回调（关闭时 nextOpen=false）"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"弹窗宽度，默认 460",defaultValue:{value:"460",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"弹窗高度，默认自适应内容"},title:{required:!1,tsType:{name:"ReactNode"},description:"标题（支持 ReactNode）"},extra:{required:!1,tsType:{name:"ReactNode"},description:"标题栏右侧额外内容"},closable:{required:!1,tsType:{name:"boolean"},description:"是否显示关闭按钮，默认 true",defaultValue:{value:"true",computed:!1}},footer:{required:!1,tsType:{name:"ReactNode"},description:"底部操作区，传 ReactNode 完全自定义；传 null 隐藏"},okText:{required:!1,tsType:{name:"string"},description:"确认按钮文字（传入后自动渲染 footer，与 footer 互斥）"},cancelText:{required:!1,tsType:{name:"string"},description:"取消按钮文字"},onOk:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void | Promise<void>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"确认回调（支持异步，返回 Promise 时按钮显示 loading）"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"取消回调"},okDanger:{required:!1,tsType:{name:"boolean"},description:"确认按钮是否为危险样式",defaultValue:{value:"false",computed:!1}},modal:{required:!1,tsType:{name:"boolean"},description:"是否为模态（true 时点击遮罩不关闭），默认 false",defaultValue:{value:"false",computed:!1}},mask:{required:!1,tsType:{name:"boolean"},description:"是否显示遮罩层，默认 true",defaultValue:{value:"true",computed:!1}},destroyOnHidden:{required:!1,tsType:{name:"boolean"},description:"关闭后是否销毁子节点，默认 true",defaultValue:{value:"true",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"自定义 z-index"},maxHeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"内容区最大高度，默认 640px",defaultValue:{value:"640",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},children:{required:!1,tsType:{name:"ReactNode"},description:"弹窗内容"}}};let T=null,C=null;function B(){T&&(T.unmount(),T=null),C&&(C.remove(),C=null)}function Ue({title:n,description:o,okText:l,cancelText:r,okDanger:a=!1,icon:t,content:s,zIndex:c,onOk:d,onCancel:u,onResult:f}){const[g,y]=Z.useState(!0),[j,S]=Z.useState(!1),b=()=>{y(!1),u==null||u(),f(!1),setTimeout(B,200)},O=async()=>{if(d){const v=d();if(v instanceof Promise){S(!0);try{await v}finally{S(!1)}}}y(!1),f(!0),setTimeout(B,200)};return e.jsx(M,{open:g,onOpenChange:v=>{v||b()},width:320,closable:!1,modal:!0,zIndex:c,footer:e.jsxs(e.Fragment,{children:[r&&e.jsx(p,{variant:"text",size:"lg",onClick:b,children:r}),l&&e.jsx(p,{variant:"primary",size:"lg",danger:a,loading:j,onClick:O,children:l})]}),children:s??e.jsxs("div",{className:"lg-dialog-confirm",children:[e.jsx("span",{className:"lg-dialog-confirm__icon",children:t??e.jsx(w,{className:`lg-dialog-confirm__icon-default lg-dialog-confirm__icon-default--${a?"danger":"primary"}`})}),e.jsxs("div",{className:"lg-dialog-confirm__content",children:[n&&e.jsx("span",{className:"lg-dialog-confirm__title",children:n}),o&&e.jsx("p",{className:"lg-dialog-confirm__desc",children:o})]})]})})}function Ye(n){return B(),new Promise(o=>{C=document.createElement("div"),C.className="lg-dialog-confirm-container",document.body.appendChild(C),T=Me.createRoot(C),T.render(e.jsx(Ue,{...n,onResult:o}))})}const m=M;m.confirm=Ye;const hn={title:"Components/Dialog",component:m,tags:["autodocs"],argTypes:{width:{control:"number"},closable:{control:"boolean"},modal:{control:"boolean"}}},R={render:n=>{const[o,l]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{variant:"primary",onClick:()=>l(!0),children:"打开弹窗"}),e.jsx(m,{...n,open:o,onOpenChange:l,title:"对话框标题",okText:"确认",cancelText:"取消",onOk:()=>l(!1),onCancel:()=>l(!1),children:e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",padding:"0 20px"},children:"这是对话框的内容区域。"})})]})},args:{width:460,closable:!0,modal:!1}},P={render:()=>{const[n,o]=i.useState(!1),[l,r]=i.useState(!1),[a,t]=i.useState(!1),[s,c]=i.useState(!1),[d,u]=i.useState(!1),[f,g]=i.useState(!1);return e.jsxs("div",{style:{padding:24,display:"flex",flexWrap:"wrap",gap:12},children:[e.jsx(p,{variant:"outline",onClick:()=>o(!0),children:"460px 弹窗"}),e.jsx(m,{open:n,onOpenChange:o,width:460,title:"重命名",okText:"确认",cancelText:"取消",onOk:()=>o(!1),onCancel:()=>o(!1),children:e.jsxs("div",{style:{padding:"0 20px 20px",display:"flex",flexDirection:"column",gap:8},children:[e.jsx("label",{style:{fontSize:14,color:"rgba(0,0,0,0.64)"},children:"项目名称"}),e.jsx(K,{placeholder:"财务报告分析",defaultValue:"财务报告分析"})]})}),e.jsx(p,{variant:"outline",onClick:()=>r(!0),children:"640px 弹窗"}),e.jsx(m,{open:l,onOpenChange:r,width:640,title:"新建定时任务",okText:"确认创建",cancelText:"取消",onOk:()=>r(!1),onCancel:()=>r(!1),children:e.jsxs("div",{style:{padding:"0 20px 20px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:14},children:"任务名称 *"}),e.jsx(K,{placeholder:"请输入任务名称",style:{marginTop:8}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:14},children:"提示词 *"}),e.jsx(Oe,{placeholder:"请输入任务执行的提示词内容",style:{marginTop:8,width:"100%"}})]})]})}),e.jsx(p,{variant:"outline",onClick:()=>t(!0),children:"720px 详情弹窗"}),e.jsx(m,{open:a,onOpenChange:t,width:720,title:"技能详情",extra:e.jsx(p,{variant:"outline",size:"sm",children:"安装"}),children:e.jsxs("div",{style:{padding:"0 20px 20px",display:"flex",flexDirection:"column",gap:16},children:[e.jsx("h4",{style:{margin:0},children:"技能说明"}),e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",margin:0},children:"编制财务分析报告，精通报表、盈利及现金流分析。"}),e.jsx("h4",{style:{margin:0},children:"核心特性"}),e.jsxs("ul",{style:{color:"rgba(0,0,0,0.64)",margin:0,paddingLeft:20},children:[e.jsx("li",{children:"自动识别关键数据字段"}),e.jsx("li",{children:"实时数据同步更新"}),e.jsx("li",{children:"多维度交叉分析"})]})]})}),e.jsx(p,{variant:"outline",onClick:()=>c(!0),children:"900px 反馈弹窗"}),e.jsx(m,{open:s,onOpenChange:c,width:900,title:"提交反馈",okText:"提交",cancelText:"取消",onOk:()=>c(!1),onCancel:()=>c(!1),children:e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",padding:"0 20px"},children:"自定义宽度 900px。"})}),e.jsx(p,{variant:"outline",onClick:()=>u(!0),children:"无 Footer"}),e.jsx(m,{open:d,onOpenChange:u,width:640,title:"纯展示",children:e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",padding:"0 20px"},children:"没有底部操作栏的弹窗。"})}),e.jsx(p,{variant:"outline",onClick:()=>g(!0),children:"内容滚动"}),e.jsx(m,{open:f,onOpenChange:g,width:640,title:"长内容",footer:e.jsx(p,{variant:"primary",onClick:()=>g(!1),children:"关闭"}),children:e.jsx("div",{style:{padding:"0 20px"},children:Array.from({length:20},(y,j)=>e.jsxs("p",{style:{margin:"0 0 12px",color:"rgba(0,0,0,0.64)"},children:["第 ",j+1," 段：测试滚动。内容超出 maxHeight 时自动滚动。"]},j))})}),e.jsx(p,{variant:"outline",danger:!0,onClick:async()=>{await m.confirm({title:"删除该条定时任务",description:"删除后不可恢复，确定删除？",icon:e.jsx(w,{color:"var(--lg-g-fg-color-warning-default)"}),okText:"删除",cancelText:"取消",okDanger:!0})&&alert("已删除")},children:"confirm（危险）"}),e.jsx(p,{variant:"outline",onClick:async()=>{await m.confirm({title:"退出登录",description:"请确认是否退出登录？",icon:e.jsx(w,{color:"var(--lg-g-fg-color-progress-default)"}),okText:"确定",cancelText:"取消"})&&alert("已退出")},children:"confirm（主色）"})]})}};var X,U,Y;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Y=(U=R.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var J,Q,ee;P.parameters={...P.parameters,docs:{...(J=P.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(ee=(Q=P.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};const vn=["Playground","AllVariants"];export{P as AllVariants,R as Playground,vn as __namedExportsOrder,hn as default};
