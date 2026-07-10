import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as a,R}from"./index-D4H_InIO.js";/* empty css                */import{B as o}from"./index-CmnokBQH.js";import{I as V}from"./index-D84BHsss.js";import{T as ne}from"./index-m3PW3e5A.js";import{D as te,a as oe,b as ae,d as le,c as ie}from"./index-C3ZiH7QT.js";import{a as re}from"./utils-HnQPFlDo.js";import{u as se}from"./index-DhX95gbj.js";import{X as de}from"./XLg-Buk6fdo7.js";import{c as ce}from"./client-Dy2InzuZ.js";import{E as q}from"./ExclamationCircleFill-DuxVRxaw.js";import"./index-ukuGrK6K.js";import"./index-B_ca6aDP.js";import"./index-Dth3sfoE.js";import"./index-Dj6c7Bq9.js";import"./index-CJs4gz5u.js";import"./index-klUtQC2j.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-DglMy7uv.js";import"./LoaderCircle-BJjvYEe5.js";import"./utils-YwZfuvH0-DLWngkAW.js";import"./XCircleFill-C1lg6Dm5.js";import"./Combination-DnvQz1mi.js";const N=({open:t,onOpenChange:n,width:l=460,height:i,title:s,extra:g,closable:O=!0,footer:c,okText:h,cancelText:u,onOk:m,onCancel:d,okDanger:x=!1,modal:j=!1,mask:k=!0,destroyOnHidden:T=!0,zIndex:y,maxHeight:f=640,autoHeight:S=!1,className:b,style:G,children:J})=>{const K=se("Dialog"),[B,F]=a.useState(t),[Q,z]=a.useState(!1);a.useEffect(()=>(t?(F(!0),document.body.style.overflow="hidden"):document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]);const U=a.useCallback(()=>{!t&&T&&F(!1)},[t,T]),Y=a.useCallback(p=>{p||n(!1)},[n]),Z=a.useCallback(async()=>{if(!m){n(!1);return}const p=m();if(p instanceof Promise){z(!0);try{await p}finally{z(!1)}}},[m,n]),ee=a.useCallback(()=>{d==null||d(),n(!1)},[d,n]),L=S?void 0:typeof f=="number"?f-68:`calc(${f} - 68px)`,E=S?typeof f=="number"?`${f}px`:f:void 0,W=typeof l=="number"?`${l}px`:l,M=i!=null?typeof i=="number"?`${i}px`:i:void 0;return e.jsx(te,{open:t,onOpenChange:Y,modal:!1,children:e.jsxs(oe,{forceMount:void 0,children:[B&&k&&e.jsx("div",{className:`lg-dialog__overlay${t?"":" lg-dialog__overlay--closing"}`,style:y?{zIndex:y}:void 0,onClick:()=>{j||n(!1)}}),e.jsx(ae,{className:re("lg-dialog__content",b),style:{...G,width:W,maxWidth:W,...M?{height:M}:{},...E?{maxHeight:E}:{},...y?{zIndex:y+1}:{}},onAnimationEnd:U,onInteractOutside:p=>{p.preventDefault()},onPointerDownOutside:p=>{p.preventDefault()},onFocusOutside:p=>{p.preventDefault()},children:B&&e.jsxs(e.Fragment,{children:[O&&e.jsx(le,{asChild:!0,"aria-label":K.close,children:e.jsx(o,{className:"lg-dialog__close",variant:"text",size:"lg",icon:e.jsx(de,{size:18})})}),(s||g)&&e.jsxs("div",{className:"lg-dialog__header",children:[s&&e.jsx(ie,{className:"lg-dialog__title",asChild:typeof s!="string",children:typeof s=="string"?e.jsx("span",{children:s}):s}),g&&e.jsx("div",{className:"lg-dialog__header-actions",children:g})]}),e.jsx("div",{className:"lg-dialog__body",style:L!==void 0?{maxHeight:L}:void 0,children:J}),c!=null?e.jsx("div",{className:"lg-dialog__footer",children:c}):h||u?e.jsxs("div",{className:"lg-dialog__footer",children:[u&&e.jsx(o,{variant:"text",size:"lg",onClick:ee,children:u}),h&&e.jsx(o,{variant:"primary",size:"lg",danger:x,loading:Q,onClick:Z,children:h})]}):null]})})]})})};N.displayName="Dialog";N.__docgenInfo={description:`Dialog 对话框组件
基于 @radix-ui/react-dialog，提供焦点陷阱、Esc 关闭、aria 属性`,methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:"是否打开"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"状态变化回调（关闭时 nextOpen=false）"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"弹窗宽度，默认 460",defaultValue:{value:"460",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"弹窗高度，默认自适应内容"},title:{required:!1,tsType:{name:"ReactNode"},description:"标题（支持 ReactNode）"},extra:{required:!1,tsType:{name:"ReactNode"},description:"标题栏右侧额外内容"},closable:{required:!1,tsType:{name:"boolean"},description:"是否显示关闭按钮，默认 true",defaultValue:{value:"true",computed:!1}},footer:{required:!1,tsType:{name:"ReactNode"},description:"底部操作区，传 ReactNode 完全自定义；传 null 隐藏"},okText:{required:!1,tsType:{name:"string"},description:"确认按钮文字（传入后自动渲染 footer，与 footer 互斥）"},cancelText:{required:!1,tsType:{name:"string"},description:"取消按钮文字"},onOk:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void | Promise<void>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"确认回调（支持异步，返回 Promise 时按钮显示 loading）"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"取消回调"},okDanger:{required:!1,tsType:{name:"boolean"},description:"确认按钮是否为危险样式",defaultValue:{value:"false",computed:!1}},modal:{required:!1,tsType:{name:"boolean"},description:"是否为模态（true 时点击遮罩不关闭），默认 false",defaultValue:{value:"false",computed:!1}},mask:{required:!1,tsType:{name:"boolean"},description:"是否显示遮罩层，默认 true",defaultValue:{value:"true",computed:!1}},destroyOnHidden:{required:!1,tsType:{name:"boolean"},description:"关闭后是否销毁子节点，默认 true",defaultValue:{value:"true",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"自定义 z-index"},maxHeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"内容区最大高度，默认 640px",defaultValue:{value:"640",computed:!1}},autoHeight:{required:!1,tsType:{name:"boolean"},description:"开启后 body 高度跟随内容自适应，弹窗整体高度由 maxHeight 兜底上限，默认 false",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},children:{required:!1,tsType:{name:"ReactNode"},description:"弹窗内容"}}};let C=null,v=null;function _(){C&&(C.unmount(),C=null),v&&(v.remove(),v=null)}function pe({title:t,description:n,okText:l,cancelText:i,okDanger:s=!1,icon:g,content:O,width:c=320,footer:h,onOk:u,onCancel:m,onResult:d,...x}){const[j,k]=R.useState(!0),[T,y]=R.useState(!1),f=()=>{k(!1),m==null||m(),d(!1),setTimeout(_,200)},S=async()=>{if(u){const b=u();if(b instanceof Promise){y(!0);try{await b}finally{y(!1)}}}k(!1),d(!0),setTimeout(_,200)};return e.jsx(N,{...x,open:j,onOpenChange:b=>{b||f()},width:c,closable:x.closable??!1,modal:x.modal??!0,footer:h??e.jsxs(e.Fragment,{children:[i&&e.jsx(o,{variant:"text",size:"lg",onClick:f,children:i}),l&&e.jsx(o,{variant:"primary",size:"lg",danger:s,loading:T,onClick:S,children:l})]}),children:O??e.jsxs("div",{className:"lg-dialog-confirm",children:[e.jsx("span",{className:"lg-dialog-confirm__icon",children:g??e.jsx(q,{className:`lg-dialog-confirm__icon-default lg-dialog-confirm__icon-default--${s?"danger":"primary"}`})}),e.jsxs("div",{className:"lg-dialog-confirm__content",children:[t&&e.jsx("span",{className:"lg-dialog-confirm__title",children:t}),n&&e.jsx("p",{className:"lg-dialog-confirm__desc",children:n})]})]})})}function ue(t){return _(),new Promise(n=>{v=document.createElement("div"),v.className="lg-dialog-confirm-container",document.body.appendChild(v),C=ce.createRoot(v),C.render(e.jsx(pe,{...t,onResult:n}))})}function me(){_()}const r=N;r.confirm=ue;r.closeConfirm=me;const Re={title:"Components/Dialog",component:r,tags:["autodocs"],argTypes:{width:{control:"number"},closable:{control:"boolean"},modal:{control:"boolean"}}},D={render:t=>{const[n,l]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",onClick:()=>l(!0),children:"打开弹窗"}),e.jsx(r,{...t,open:n,onOpenChange:l,title:"对话框标题",okText:"确认",cancelText:"取消",onOk:()=>l(!1),onCancel:()=>l(!1),children:e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",padding:"0 20px"},children:"这是对话框的内容区域。"})})]})},args:{width:460,closable:!0,modal:!1}},w={render:()=>{const[t,n]=a.useState(!1),[l,i]=a.useState(!1),[s,g]=a.useState(!1),[O,c]=a.useState(!1),[h,u]=a.useState(!1),[m,d]=a.useState(!1);return e.jsxs("div",{style:{padding:24,display:"flex",flexWrap:"wrap",gap:12},children:[e.jsx(o,{variant:"outline",onClick:()=>n(!0),children:"460px 弹窗"}),e.jsx(r,{open:t,onOpenChange:n,width:460,title:"重命名",okText:"确认",cancelText:"取消",onOk:()=>n(!1),onCancel:()=>n(!1),children:e.jsxs("div",{style:{padding:"0 20px 20px",display:"flex",flexDirection:"column",gap:8},children:[e.jsx("label",{style:{fontSize:14,color:"rgba(0,0,0,0.64)"},children:"项目名称"}),e.jsx(V,{placeholder:"财务报告分析",defaultValue:"财务报告分析"})]})}),e.jsx(o,{variant:"outline",onClick:()=>i(!0),children:"640px 弹窗"}),e.jsx(r,{open:l,onOpenChange:i,width:640,title:"新建定时任务",okText:"确认创建",cancelText:"取消",onOk:()=>i(!1),onCancel:()=>i(!1),children:e.jsxs("div",{style:{padding:"0 20px 20px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:14},children:"任务名称 *"}),e.jsx(V,{placeholder:"请输入任务名称",style:{marginTop:8}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:14},children:"提示词 *"}),e.jsx(ne,{placeholder:"请输入任务执行的提示词内容",style:{marginTop:8,width:"100%"}})]})]})}),e.jsx(o,{variant:"outline",onClick:()=>g(!0),children:"720px 详情弹窗"}),e.jsx(r,{open:s,onOpenChange:g,width:720,title:"技能详情",extra:e.jsx(o,{variant:"outline",size:"sm",children:"安装"}),children:e.jsxs("div",{style:{padding:"0 20px 20px",display:"flex",flexDirection:"column",gap:16},children:[e.jsx("h4",{style:{margin:0},children:"技能说明"}),e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",margin:0},children:"编制财务分析报告，精通报表、盈利及现金流分析。"}),e.jsx("h4",{style:{margin:0},children:"核心特性"}),e.jsxs("ul",{style:{color:"rgba(0,0,0,0.64)",margin:0,paddingLeft:20},children:[e.jsx("li",{children:"自动识别关键数据字段"}),e.jsx("li",{children:"实时数据同步更新"}),e.jsx("li",{children:"多维度交叉分析"})]})]})}),e.jsx(o,{variant:"outline",onClick:()=>c(!0),children:"900px 反馈弹窗"}),e.jsx(r,{open:O,onOpenChange:c,width:900,title:"提交反馈",okText:"提交",cancelText:"取消",onOk:()=>c(!1),onCancel:()=>c(!1),children:e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",padding:"0 20px"},children:"自定义宽度 900px。"})}),e.jsx(o,{variant:"outline",onClick:()=>u(!0),children:"无 Footer"}),e.jsx(r,{open:h,onOpenChange:u,width:640,title:"纯展示",children:e.jsx("p",{style:{color:"rgba(0,0,0,0.64)",padding:"0 20px"},children:"没有底部操作栏的弹窗。"})}),e.jsx(o,{variant:"outline",onClick:()=>d(!0),children:"内容滚动"}),e.jsx(r,{open:m,onOpenChange:d,width:640,title:"长内容",footer:e.jsx(o,{variant:"primary",onClick:()=>d(!1),children:"关闭"}),children:e.jsx("div",{style:{padding:"0 20px"},children:Array.from({length:20},(x,j)=>e.jsxs("p",{style:{margin:"0 0 12px",color:"rgba(0,0,0,0.64)"},children:["第 ",j+1," 段：测试滚动。内容超出 maxHeight 时自动滚动。"]},j))})}),e.jsx(o,{variant:"outline",danger:!0,onClick:async()=>{await r.confirm({title:"删除该条定时任务",description:"删除后不可恢复，确定删除？",icon:e.jsx(q,{color:"var(--lg-g-fg-color-warning-default)"}),okText:"删除",cancelText:"取消",okDanger:!0})&&alert("已删除")},children:"confirm（危险）"}),e.jsx(o,{variant:"outline",onClick:async()=>{await r.confirm({title:"退出登录",description:"请确认是否退出登录？",icon:e.jsx(q,{color:"var(--lg-g-fg-color-progress-default)"}),okText:"确定",cancelText:"取消"})&&alert("已退出")},children:"confirm（主色）"})]})}};var P,$,A;D.parameters={...D.parameters,docs:{...(P=D.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(A=($=D.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var I,H,X;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(X=(H=w.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};const Ve=["Playground","AllVariants"];export{w as AllVariants,D as Playground,Ve as __namedExportsOrder,Re as default};
