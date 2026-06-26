import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as i,R as G}from"./index-D4H_InIO.js";/* empty css                */import{P as Oe,u as De,D as be,B as u}from"./index-CzwKRjF9.js";import{I as Z}from"./index-CF72ILJQ.js";import{T as _e}from"./index-BxOSKSR7.js";import{u as Te,a as I,d as B,P as w,c as T,b as L,e as Se,f as ke}from"./index-DkNtWByp.js";import{R as we,h as Ne,u as Re,F as Pe}from"./Combination-DC9uxSOq.js";import{a as Ee}from"./utils-HnQPFlDo.js";import{X as Fe}from"./XLg-Buk6fdo7.js";import{c as Me}from"./client-Dy2InzuZ.js";import{_ as Ie,e as Ae,a as N,b as Be,c as Le}from"./utils-YwZfuvH0-DLWngkAW.js";import"./index-ukuGrK6K.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";var qe=["size","color","fill","rotate","spin","className","style"],k=i.forwardRef((n,a)=>{var l,r=n.size,o=r===void 0?"1em":r,t=n.color,s=n.fill,c=n.rotate,d=n.spin,p=n.className,f=n.style,g=Ie(n,qe);return d&&Ae(),e.jsx("svg",N(N({ref:a,width:o,height:o,viewBox:"0 0 24 24",fill:(l=s??t)!==null&&l!==void 0?l:"currentColor",className:Le("lingee-icon",d&&"lingee-icon-spin",p),style:N(N({},Be),{},{transform:c?"rotate(".concat(c,"deg)"):void 0,animation:d?"lingee-icon-spin 1s linear infinite":void 0},f),xmlns:"http://www.w3.org/2000/svg","data-icon":"ExclamationCircleFill"},g),{},{children:e.jsx("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 11C11.4477 11 11 11.4477 11 12V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V12C13 11.4477 12.5523 11 12 11ZM12 7C11.3373 7.00003 10.7998 7.53747 10.7998 8.2002C10.8 8.86279 11.3374 9.40036 12 9.40039C12.6626 9.40039 13.2 8.8628 13.2002 8.2002C13.2002 7.53745 12.6627 7 12 7Z"})}))});k.displayName="ExclamationCircleFill";k.__docgenInfo={description:"",methods:[],displayName:"ExclamationCircleFill"};var F="Dialog",[ee]=Se(F),[ze,x]=ee(F),ne=n=>{const{__scopeDialog:a,children:l,open:r,defaultOpen:o,onOpenChange:t,modal:s=!0}=n,c=i.useRef(null),d=i.useRef(null),[p,f]=Te({prop:r,defaultProp:o??!1,onChange:t,caller:F});return e.jsx(ze,{scope:a,triggerRef:c,contentRef:d,contentId:I(),titleId:I(),descriptionId:I(),open:p,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(g=>!g),[f]),modal:s,children:l})};ne.displayName=F;var te="DialogTrigger",We=i.forwardRef((n,a)=>{const{__scopeDialog:l,...r}=n,o=x(te,l),t=L(a,o.triggerRef);return e.jsx(w.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.open?o.contentId:void 0,"data-state":z(o.open),...r,ref:t,onClick:T(n.onClick,o.onOpenToggle)})});We.displayName=te;var q="DialogPortal",[Ve,oe]=ee(q,{forceMount:void 0}),ae=n=>{const{__scopeDialog:a,forceMount:l,children:r,container:o}=n,t=x(q,a);return e.jsx(Ve,{scope:a,forceMount:l,children:i.Children.map(r,s=>e.jsx(B,{present:l||t.open,children:e.jsx(Oe,{asChild:!0,container:o,children:s})}))})};ae.displayName=q;var E="DialogOverlay",le=i.forwardRef((n,a)=>{const l=oe(E,n.__scopeDialog),{forceMount:r=l.forceMount,...o}=n,t=x(E,n.__scopeDialog);return t.modal?e.jsx(B,{present:r||t.open,children:e.jsx(He,{...o,ref:a})}):null});le.displayName=E;var $e=ke("DialogOverlay.RemoveScroll"),He=i.forwardRef((n,a)=>{const{__scopeDialog:l,...r}=n,o=x(E,l),t=De(),s=L(a,t);return e.jsx(we,{as:$e,allowPinchZoom:!0,shards:[o.contentRef],children:e.jsx(w.div,{"data-state":z(o.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})}),D="DialogContent",re=i.forwardRef((n,a)=>{const l=oe(D,n.__scopeDialog),{forceMount:r=l.forceMount,...o}=n,t=x(D,n.__scopeDialog);return e.jsx(B,{present:r||t.open,children:t.modal?e.jsx(Ge,{...o,ref:a}):e.jsx(Ze,{...o,ref:a})})});re.displayName=D;var Ge=i.forwardRef((n,a)=>{const l=x(D,n.__scopeDialog),r=i.useRef(null),o=L(a,l.contentRef,r);return i.useEffect(()=>{const t=r.current;if(t)return Ne(t)},[]),e.jsx(ie,{...n,ref:o,trapFocus:l.open,disableOutsidePointerEvents:l.open,onCloseAutoFocus:T(n.onCloseAutoFocus,t=>{var s;t.preventDefault(),(s=l.triggerRef.current)==null||s.focus()}),onPointerDownOutside:T(n.onPointerDownOutside,t=>{const s=t.detail.originalEvent,c=s.button===0&&s.ctrlKey===!0;(s.button===2||c)&&t.preventDefault()}),onFocusOutside:T(n.onFocusOutside,t=>t.preventDefault())})}),Ze=i.forwardRef((n,a)=>{const l=x(D,n.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return e.jsx(ie,{...n,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var s,c;(s=n.onCloseAutoFocus)==null||s.call(n,t),t.defaultPrevented||(r.current||(c=l.triggerRef.current)==null||c.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var d,p;(d=n.onInteractOutside)==null||d.call(n,t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const s=t.target;((p=l.triggerRef.current)==null?void 0:p.contains(s))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&o.current&&t.preventDefault()}})}),ie=i.forwardRef((n,a)=>{const{__scopeDialog:l,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:t,...s}=n,c=x(D,l);return Re(),e.jsx(e.Fragment,{children:e.jsx(Pe,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:t,children:e.jsx(be,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":z(c.open),...s,ref:a,deferPointerDownOutside:!0,onDismiss:()=>c.onOpenChange(!1)})})})}),se="DialogTitle",ce=i.forwardRef((n,a)=>{const{__scopeDialog:l,...r}=n,o=x(se,l);return e.jsx(w.h2,{id:o.titleId,...r,ref:a})});ce.displayName=se;var de="DialogDescription",Ke=i.forwardRef((n,a)=>{const{__scopeDialog:l,...r}=n,o=x(de,l);return e.jsx(w.p,{id:o.descriptionId,...r,ref:a})});Ke.displayName=de;var pe="DialogClose",ue=i.forwardRef((n,a)=>{const{__scopeDialog:l,...r}=n,o=x(pe,l);return e.jsx(w.button,{type:"button",...r,ref:a,onClick:T(n.onClick,()=>o.onOpenChange(!1))})});ue.displayName=pe;function z(n){return n?"open":"closed"}const M=({open:n,onOpenChange:a,width:l=460,height:r,title:o,extra:t,closable:s=!0,footer:c,okText:d,cancelText:p,onOk:f,onCancel:g,okDanger:y=!1,modal:j=!1,destroyOnHidden:b=!0,zIndex:v,maxHeight:_=640,className:O,style:fe,children:ge})=>{const[me,W]=i.useState(n),[xe,V]=i.useState(!1);i.useEffect(()=>{n&&W(!0)},[n]);const he=i.useCallback(h=>{h.currentTarget===h.target&&(h.currentTarget.style.animation="none"),!n&&b&&W(!1)},[n,b]),ye=i.useCallback(h=>{h||a(!1)},[a]),ve=i.useCallback(async()=>{if(!f){a(!1);return}const h=f();if(h instanceof Promise){V(!0);try{await h}finally{V(!1)}}},[f,a]),Ce=i.useCallback(()=>{g==null||g(),a(!1)},[g,a]),je=typeof _=="number"?_-68:`calc(${_} - 68px)`,$=typeof l=="number"?`${l}px`:l,H=r!=null?typeof r=="number"?`${r}px`:r:void 0;return e.jsx(ne,{open:n,onOpenChange:ye,children:e.jsxs(ae,{children:[e.jsx(le,{className:"lg-dialog__overlay",style:v?{zIndex:v}:void 0}),e.jsx(re,{className:Ee("lg-dialog__content",O),style:{...fe,width:$,maxWidth:$,...H?{height:H}:{},...v?{zIndex:v+1}:{}},onAnimationEnd:he,onInteractOutside:h=>{j&&h.preventDefault()},children:me&&e.jsxs(e.Fragment,{children:[s&&e.jsx(ue,{asChild:!0,"aria-label":"关闭",children:e.jsx(u,{className:"lg-dialog__close",variant:"text",size:"lg",icon:e.jsx(Fe,{size:18})})}),(o||t)&&e.jsxs("div",{className:"lg-dialog__header",children:[o&&e.jsx(ce,{className:"lg-dialog__title",asChild:typeof o!="string",children:typeof o=="string"?e.jsx("span",{children:o}):o}),t&&e.jsx("div",{className:"lg-dialog__header-actions",children:t})]}),e.jsx("div",{className:"lg-dialog__body",style:{maxHeight:je},children:ge}),c!=null?e.jsx("div",{className:"lg-dialog__footer",children:c}):d||p?e.jsxs("div",{className:"lg-dialog__footer",children:[p&&e.jsx(u,{variant:"text",size:"lg",onClick:Ce,children:p}),d&&e.jsx(u,{variant:"primary",size:"lg",danger:y,loading:xe,onClick:ve,children:d})]}):null]})})]})})};M.displayName="Dialog";M.__docgenInfo={description:`Dialog 对话框组件
基于 @radix-ui/react-dialog，提供焦点陷阱、Esc 关闭、aria 属性`,methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:"是否打开"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"状态变化回调（关闭时 nextOpen=false）"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"弹窗宽度，默认 460",defaultValue:{value:"460",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"弹窗高度，默认自适应内容"},title:{required:!1,tsType:{name:"ReactNode"},description:"标题（支持 ReactNode）"},extra:{required:!1,tsType:{name:"ReactNode"},description:"标题栏右侧额外内容"},closable:{required:!1,tsType:{name:"boolean"},description:"是否显示关闭按钮，默认 true",defaultValue:{value:"true",computed:!1}},footer:{required:!1,tsType:{name:"ReactNode"},description:"底部操作区，传 ReactNode 完全自定义；传 null 隐藏"},okText:{required:!1,tsType:{name:"string"},description:"确认按钮文字（传入后自动渲染 footer，与 footer 互斥）"},cancelText:{required:!1,tsType:{name:"string"},description:"取消按钮文字"},onOk:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void | Promise<void>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"确认回调（支持异步，返回 Promise 时按钮显示 loading）"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"取消回调"},okDanger:{required:!1,tsType:{name:"boolean"},description:"确认按钮是否为危险样式",defaultValue:{value:"false",computed:!1}},modal:{required:!1,tsType:{name:"boolean"},description:"是否为模态（true 时点击遮罩不关闭），默认 false",defaultValue:{value:"false",computed:!1}},destroyOnHidden:{required:!1,tsType:{name:"boolean"},description:"关闭后是否销毁子节点，默认 true",defaultValue:{value:"true",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"自定义 z-index"},maxHeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"内容区最大高度，默认 640px",defaultValue:{value:"640",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},children:{required:!1,tsType:{name:"ReactNode"},description:"弹窗内容"}}};let S=null,C=null;function A(){S&&(S.unmount(),S=null),C&&(C.remove(),C=null)}function Xe({title:n,description:a,okText:l,cancelText:r,okDanger:o=!1,icon:t,content:s,zIndex:c,onOk:d,onCancel:p,onResult:f}){const[g,y]=G.useState(!0),[j,b]=G.useState(!1),v=()=>{y(!1),p==null||p(),f(!1),setTimeout(A,200)},_=async()=>{if(d){const O=d();if(O instanceof Promise){b(!0);try{await O}finally{b(!1)}}}y(!1),f(!0),setTimeout(A,200)};return e.jsx(M,{open:g,onOpenChange:O=>{O||v()},width:320,closable:!1,modal:!0,zIndex:c,footer:e.jsxs(e.Fragment,{children:[r&&e.jsx(u,{variant:"text",size:"lg",onClick:v,children:r}),l&&e.jsx(u,{variant:"primary",size:"lg",danger:o,loading:j,onClick:_,children:l})]}),children:s??e.jsxs("div",{className:"lg-dialog-confirm",children:[e.jsx("span",{className:"lg-dialog-confirm__icon",children:t??e.jsx(k,{className:`lg-dialog-confirm__icon-default lg-dialog-confirm__icon-default--${o?"danger":"primary"}`})}),e.jsxs("div",{className:"lg-dialog-confirm__content",children:[n&&e.jsx("span",{className:"lg-dialog-confirm__title",children:n}),a&&e.jsx("p",{className:"lg-dialog-confirm__desc",children:a})]})]})})}function Ue(n){return A(),new Promise(a=>{C=document.createElement("div"),C.className="lg-dialog-confirm-container",document.body.appendChild(C),S=Me.createRoot(C),S.render(e.jsx(Xe,{...n,onResult:a}))})}const m=M;m.confirm=Ue;const fn={title:"Components/Dialog",component:m,tags:["autodocs"],argTypes:{width:{control:"number"},closable:{control:"boolean"},modal:{control:"boolean"}}},R={render:n=>{const[a,l]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"primary",onClick:()=>l(!0),children:"打开弹窗"}),e.jsx(m,{...n,open:a,onOpenChange:l,title:"对话框标题",okText:"确认",cancelText:"取消",onOk:()=>l(!1),onCancel:()=>l(!1),children:e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",padding:"0 20px"},children:"这是对话框的内容区域。"})})]})},args:{width:460,closable:!0,modal:!1}},P={render:()=>{const[n,a]=i.useState(!1),[l,r]=i.useState(!1),[o,t]=i.useState(!1),[s,c]=i.useState(!1),[d,p]=i.useState(!1),[f,g]=i.useState(!1);return e.jsxs("div",{style:{padding:24,display:"flex",flexWrap:"wrap",gap:12},children:[e.jsx(u,{variant:"outline",onClick:()=>a(!0),children:"460px 弹窗"}),e.jsx(m,{open:n,onOpenChange:a,width:460,title:"重命名",okText:"确认",cancelText:"取消",onOk:()=>a(!1),onCancel:()=>a(!1),children:e.jsxs("div",{style:{padding:"0 20px 20px",display:"flex",flexDirection:"column",gap:8},children:[e.jsx("label",{style:{fontSize:14,color:"rgba(0,0,0,0.64)"},children:"项目名称"}),e.jsx(Z,{placeholder:"财务报告分析",defaultValue:"财务报告分析"})]})}),e.jsx(u,{variant:"outline",onClick:()=>r(!0),children:"640px 弹窗"}),e.jsx(m,{open:l,onOpenChange:r,width:640,title:"新建定时任务",okText:"确认创建",cancelText:"取消",onOk:()=>r(!1),onCancel:()=>r(!1),children:e.jsxs("div",{style:{padding:"0 20px 20px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:14},children:"任务名称 *"}),e.jsx(Z,{placeholder:"请输入任务名称",style:{marginTop:8}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:14},children:"提示词 *"}),e.jsx(_e,{placeholder:"请输入任务执行的提示词内容",style:{marginTop:8,width:"100%"}})]})]})}),e.jsx(u,{variant:"outline",onClick:()=>t(!0),children:"720px 详情弹窗"}),e.jsx(m,{open:o,onOpenChange:t,width:720,title:"技能详情",extra:e.jsx(u,{variant:"outline",size:"sm",children:"安装"}),children:e.jsxs("div",{style:{padding:"0 20px 20px",display:"flex",flexDirection:"column",gap:16},children:[e.jsx("h4",{style:{margin:0},children:"技能说明"}),e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",margin:0},children:"编制财务分析报告，精通报表、盈利及现金流分析。"}),e.jsx("h4",{style:{margin:0},children:"核心特性"}),e.jsxs("ul",{style:{color:"rgba(0,0,0,0.64)",margin:0,paddingLeft:20},children:[e.jsx("li",{children:"自动识别关键数据字段"}),e.jsx("li",{children:"实时数据同步更新"}),e.jsx("li",{children:"多维度交叉分析"})]})]})}),e.jsx(u,{variant:"outline",onClick:()=>c(!0),children:"900px 反馈弹窗"}),e.jsx(m,{open:s,onOpenChange:c,width:900,title:"提交反馈",okText:"提交",cancelText:"取消",onOk:()=>c(!1),onCancel:()=>c(!1),children:e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",padding:"0 20px"},children:"自定义宽度 900px。"})}),e.jsx(u,{variant:"outline",onClick:()=>p(!0),children:"无 Footer"}),e.jsx(m,{open:d,onOpenChange:p,width:640,title:"纯展示",children:e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",padding:"0 20px"},children:"没有底部操作栏的弹窗。"})}),e.jsx(u,{variant:"outline",onClick:()=>g(!0),children:"内容滚动"}),e.jsx(m,{open:f,onOpenChange:g,width:640,title:"长内容",footer:e.jsx(u,{variant:"primary",onClick:()=>g(!1),children:"关闭"}),children:e.jsx("div",{style:{padding:"0 20px"},children:Array.from({length:20},(y,j)=>e.jsxs("p",{style:{margin:"0 0 12px",color:"rgba(0,0,0,0.64)"},children:["第 ",j+1," 段：测试滚动。内容超出 maxHeight 时自动滚动。"]},j))})}),e.jsx(u,{variant:"outline",danger:!0,onClick:async()=>{await m.confirm({title:"删除该条定时任务",description:"删除后不可恢复，确定删除？",icon:e.jsx(k,{color:"var(--lg-g-fg-color-warning-default)"}),okText:"删除",cancelText:"取消",okDanger:!0})&&alert("已删除")},children:"confirm（危险）"}),e.jsx(u,{variant:"outline",onClick:async()=>{await m.confirm({title:"退出登录",description:"请确认是否退出登录？",icon:e.jsx(k,{color:"var(--lg-g-fg-color-progress-default)"}),okText:"确定",cancelText:"取消"})&&alert("已退出")},children:"confirm（主色）"})]})}};var K,X,U;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(X=R.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};var Y,J,Q;P.parameters={...P.parameters,docs:{...(Y=P.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(J=P.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const gn=["Playground","AllVariants"];export{P as AllVariants,R as Playground,gn as __namedExportsOrder,fn as default};
