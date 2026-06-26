import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as d,R as T}from"./index-D4H_InIO.js";/* empty css                */import{R as Ie,A as me,P as Me,a as ke,c as fe,D as qe,C as ze,B as p}from"./index-CzwKRjF9.js";import{u as Fe,a as We,b as ge,P as ye,c as b,d as xe,e as Ve,f as $e}from"./index-DkNtWByp.js";import{h as He,R as Le,u as Ke,F as Ge}from"./Combination-DC9uxSOq.js";import{a as he}from"./utils-HnQPFlDo.js";import{I as F}from"./index-CF72ILJQ.js";import"./index-ukuGrK6K.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./utils-YwZfuvH0-DLWngkAW.js";var I="Popover",[Pe]=Ve(I,[fe]),O=fe(),[Ue,y]=Pe(I),Ce=n=>{const{__scopePopover:o,children:r,open:t,defaultOpen:s,onOpenChange:a,modal:i=!1}=n,l=O(o),m=d.useRef(null),[f,h]=d.useState(!1),[P,g]=Fe({prop:t,defaultProp:s??!1,onChange:a,caller:I});return e.jsx(Ie,{...l,children:e.jsx(Ue,{scope:o,contentId:We(),triggerRef:m,open:P,onOpenChange:g,onOpenToggle:d.useCallback(()=>g(j=>!j),[g]),hasCustomAnchor:f,onCustomAnchorAdd:d.useCallback(()=>h(!0),[]),onCustomAnchorRemove:d.useCallback(()=>h(!1),[]),modal:i,children:r})})};Ce.displayName=I;var je="PopoverAnchor",be=d.forwardRef((n,o)=>{const{__scopePopover:r,...t}=n,s=y(je,r),a=O(r),{onCustomAnchorAdd:i,onCustomAnchorRemove:l}=s;return d.useEffect(()=>(i(),()=>l()),[i,l]),e.jsx(me,{...a,...t,ref:o})});be.displayName=je;var Te="PopoverTrigger",Oe=d.forwardRef((n,o)=>{const{__scopePopover:r,...t}=n,s=y(Te,r),a=O(r),i=ge(o,s.triggerRef),l=e.jsx(ye.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":Be(s.open),...t,ref:i,onClick:b(n.onClick,s.onOpenToggle)});return s.hasCustomAnchor?l:e.jsx(me,{asChild:!0,...a,children:l})});Oe.displayName=Te;var M="PopoverPortal",[Ze,Je]=Pe(M,{forceMount:void 0}),Re=n=>{const{__scopePopover:o,forceMount:r,children:t,container:s}=n,a=y(M,o);return e.jsx(Ze,{scope:o,forceMount:r,children:e.jsx(xe,{present:r||a.open,children:e.jsx(Me,{asChild:!0,container:s,children:t})})})};Re.displayName=M;var C="PopoverContent",we=d.forwardRef((n,o)=>{const r=Je(C,n.__scopePopover),{forceMount:t=r.forceMount,...s}=n,a=y(C,n.__scopePopover);return e.jsx(xe,{present:t||a.open,children:a.modal?e.jsx(Xe,{...s,ref:o}):e.jsx(Ye,{...s,ref:o})})});we.displayName=C;var Qe=$e("PopoverContent.RemoveScroll"),Xe=d.forwardRef((n,o)=>{const r=y(C,n.__scopePopover),t=d.useRef(null),s=ge(o,t),a=d.useRef(!1);return d.useEffect(()=>{const i=t.current;if(i)return He(i)},[]),e.jsx(Le,{as:Qe,allowPinchZoom:!0,children:e.jsx(Ae,{...n,ref:s,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:b(n.onCloseAutoFocus,i=>{var l;i.preventDefault(),a.current||(l=r.triggerRef.current)==null||l.focus()}),onPointerDownOutside:b(n.onPointerDownOutside,i=>{const l=i.detail.originalEvent,m=l.button===0&&l.ctrlKey===!0,f=l.button===2||m;a.current=f},{checkForDefaultPrevented:!1}),onFocusOutside:b(n.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1})})})}),Ye=d.forwardRef((n,o)=>{const r=y(C,n.__scopePopover),t=d.useRef(!1),s=d.useRef(!1);return e.jsx(Ae,{...n,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var i,l;(i=n.onCloseAutoFocus)==null||i.call(n,a),a.defaultPrevented||(t.current||(l=r.triggerRef.current)==null||l.focus(),a.preventDefault()),t.current=!1,s.current=!1},onInteractOutside:a=>{var m,f;(m=n.onInteractOutside)==null||m.call(n,a),a.defaultPrevented||(t.current=!0,a.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const i=a.target;((f=r.triggerRef.current)==null?void 0:f.contains(i))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&s.current&&a.preventDefault()}})}),Ae=d.forwardRef((n,o)=>{const{__scopePopover:r,trapFocus:t,onOpenAutoFocus:s,onCloseAutoFocus:a,disableOutsidePointerEvents:i,onEscapeKeyDown:l,onPointerDownOutside:m,onFocusOutside:f,onInteractOutside:h,...P}=n,g=y(C,r),j=O(r);return Ke(),e.jsx(Ge,{asChild:!0,loop:!0,trapped:t,onMountAutoFocus:s,onUnmountAutoFocus:a,children:e.jsx(qe,{asChild:!0,disableOutsidePointerEvents:i,onInteractOutside:h,onEscapeKeyDown:l,onPointerDownOutside:m,onFocusOutside:f,onDismiss:()=>g.onOpenChange(!1),deferPointerDownOutside:!0,children:e.jsx(ze,{"data-state":Be(g.open),role:"dialog",id:g.contentId,...j,...P,ref:o,style:{...P.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),Se="PopoverClose",_e=d.forwardRef((n,o)=>{const{__scopePopover:r,...t}=n,s=y(Se,r);return e.jsx(ye.button,{type:"button",...t,ref:o,onClick:b(n.onClick,()=>s.onOpenChange(!1))})});_e.displayName=Se;var en="PopoverArrow",Ee=d.forwardRef((n,o)=>{const{__scopePopover:r,...t}=n,s=O(r);return e.jsx(ke,{...s,...t,ref:o})});Ee.displayName=en;function Be(n){return n?"open":"closed"}var nn=Ce,on=be,rn=Oe,tn=Re,sn=we,an=_e,ln=Ee;function c({children:n,open:o,defaultOpen:r,onOpenChange:t,modal:s=!1}){return e.jsx(nn,{open:o,defaultOpen:r,onOpenChange:t,modal:s,children:n})}c.displayName="Popover";const u=T.forwardRef(({children:n,asChild:o=!0,...r},t)=>e.jsx(rn,{ref:t,asChild:o,...r,children:n}));u.displayName="PopoverTrigger";const k=T.forwardRef(({children:n,asChild:o=!0,...r},t)=>e.jsx(on,{ref:t,asChild:o,...r,children:n}));k.displayName="PopoverAnchor";const v=T.forwardRef(({children:n,className:o,side:r="bottom",align:t="center",sideOffset:s=4,alignOffset:a=0,container:i,collisionPadding:l=8,onEscapeKeyDown:m,onPointerDownOutside:f,onFocusOutside:h,onInteractOutside:P,onOpenAutoFocus:g,onCloseAutoFocus:j,...De},Ne)=>{const z=e.jsx(sn,{ref:Ne,className:he("lg-popover",o),side:r,align:t,sideOffset:s,alignOffset:a,collisionPadding:l,onEscapeKeyDown:m,onPointerDownOutside:f,onFocusOutside:h,onInteractOutside:P,onOpenAutoFocus:g,onCloseAutoFocus:j,...De,children:n});return i===null?z:e.jsx(tn,{container:i,children:z})});v.displayName="PopoverContent";const q=T.forwardRef(({className:n,width:o=10,height:r=5,...t},s)=>e.jsx(ln,{ref:s,className:he("lg-popover__arrow",n),width:o,height:r,...t}));q.displayName="PopoverArrow";const x=T.forwardRef(({children:n,asChild:o=!0,...r},t)=>e.jsx(an,{ref:t,asChild:o,...r,children:n}));x.displayName="PopoverClose";c.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"子元素（Trigger + Content 等）"},open:{required:!1,tsType:{name:"boolean"},description:"受控开关"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"非受控默认打开状态"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"开关变化回调"},modal:{required:!1,tsType:{name:"boolean"},description:"是否为 modal 模式（锁定背景滚动和焦点）",defaultValue:{value:"false",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"子元素"},asChild:{required:!1,tsType:{name:"boolean"},description:`当 asChild 为 true 时，Trigger 不渲染自身 DOM，
而是将行为和 props 合并到唯一子元素上`,defaultValue:{value:"true",computed:!1}}}};k.__docgenInfo={description:"",methods:[],displayName:"PopoverAnchor",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:"合并到子元素",defaultValue:{value:"true",computed:!1}}}};v.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"子内容"},side:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:'弹出方向，默认 "bottom"',defaultValue:{value:'"bottom"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'}]},description:'对齐方式，默认 "center"',defaultValue:{value:'"center"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"浮层与触发元素的间距（px），默认 4",defaultValue:{value:"4",computed:!1}},alignOffset:{required:!1,tsType:{name:"number"},description:"对齐方向偏移（px），默认 0",defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"追加到浮层容器的自定义类名"},container:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:`挂载容器，默认为 document.body。
传 null 时不使用 Portal（就地渲染）`},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:"Escape 键按下时的回调，可 preventDefault 阻止关闭"},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: CustomEvent) => void",signature:{arguments:[{type:{name:"CustomEvent"},name:"event"}],return:{name:"void"}}},description:"点击外部时的回调，可 preventDefault 阻止关闭"},onFocusOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: CustomEvent) => void",signature:{arguments:[{type:{name:"CustomEvent"},name:"event"}],return:{name:"void"}}},description:"焦点移出时的回调"},onInteractOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: CustomEvent) => void",signature:{arguments:[{type:{name:"CustomEvent"},name:"event"}],return:{name:"void"}}},description:"外部交互时的回调（pointerDown + focus 的合集）"},onOpenAutoFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:"打开时自动聚焦的回调，可 preventDefault 阻止自动聚焦"},onCloseAutoFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:"关闭时自动回焦的回调，可 preventDefault 阻止回焦"},collisionPadding:{required:!1,tsType:{name:"number"},description:`碰撞边界的内边距（px），默认 8
用于防止浮层贴边`,defaultValue:{value:"8",computed:!1}}}};q.__docgenInfo={description:"",methods:[],displayName:"PopoverArrow",props:{width:{required:!1,tsType:{name:"number"},description:"箭头宽度（px），默认 10",defaultValue:{value:"10",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"箭头高度（px），默认 5",defaultValue:{value:"5",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"追加类名"}}};x.__docgenInfo={description:"",methods:[],displayName:"PopoverClose",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const bn={title:"Components/Popover",tags:["autodocs"]},R={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(c,{children:[e.jsx(u,{children:e.jsx(p,{variant:"outline",children:"打开面板"})}),e.jsx(v,{children:e.jsx("p",{style:{margin:0},children:"这是一个基础的 Popover 面板"})})]})})},w={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(c,{children:[e.jsx(u,{children:e.jsx(p,{variant:"primary",children:"带箭头"})}),e.jsxs(v,{sideOffset:8,children:[e.jsx("p",{style:{margin:0},children:"带箭头的 Popover"}),e.jsx(q,{})]})]})})},dn=["top","bottom","left","right"],pn=["start","center","end"],A={render:()=>e.jsx("div",{style:{padding:100,display:"flex",flexDirection:"column",alignItems:"center",gap:24},children:dn.map(n=>e.jsx("div",{style:{display:"flex",gap:12},children:pn.map(o=>e.jsxs(c,{children:[e.jsx(u,{children:e.jsxs(p,{variant:"outline",size:"sm",children:[n,"-",o]})}),e.jsx(v,{side:n,align:o,sideOffset:6,children:e.jsxs("p",{style:{margin:0,fontSize:12},children:["side=",n,", align=",o]})})]},`${n}-${o}`))},n))})},S={render:()=>{const[n,o]=d.useState(!1);return e.jsxs("div",{style:{padding:100,display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[e.jsxs("p",{style:{margin:0,fontSize:12,color:"rgba(0,0,0,0.46)"},children:["当前状态：",n?"打开":"关闭"]}),e.jsxs(c,{open:n,onOpenChange:o,children:[e.jsx(u,{children:e.jsx(p,{variant:"primary",children:"受控面板"})}),e.jsxs(v,{children:[e.jsx("p",{style:{margin:"0 0 8px"},children:"受控模式：通过外部 state 管理开关"}),e.jsx(p,{variant:"outline",size:"sm",onClick:()=>o(!1),children:"关闭"})]})]})]})}},_={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(c,{children:[e.jsx(u,{children:e.jsx(p,{variant:"outline",children:"带关闭按钮"})}),e.jsxs(v,{style:{minWidth:200},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[e.jsx("span",{style:{fontWeight:500},children:"标题"}),e.jsx(x,{children:e.jsx("button",{type:"button",style:{border:"none",background:"none",cursor:"pointer",fontSize:16,lineHeight:1},children:"×"})})]}),e.jsx("p",{style:{margin:0,fontSize:13},children:"面板内容区域，点击 × 可关闭"})]})]})})},E={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(c,{children:[e.jsx(u,{children:e.jsx(p,{variant:"primary",children:"编辑信息"})}),e.jsx(v,{style:{width:280},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:12,fontWeight:500,marginBottom:4,display:"block"},children:"名称"}),e.jsx(F,{placeholder:"请输入名称"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:12,fontWeight:500,marginBottom:4,display:"block"},children:"描述"}),e.jsx(F,{placeholder:"请输入描述"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8},children:[e.jsx(x,{children:e.jsx(p,{variant:"outline",size:"sm",children:"取消"})}),e.jsx(x,{children:e.jsx(p,{variant:"primary",size:"sm",children:"保存"})})]})]})})]})})},B={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(c,{children:[e.jsx(k,{asChild:!0,children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,border:"1px solid #d9d9d9",borderRadius:6,padding:"4px 8px"},children:[e.jsx("input",{placeholder:"输入搜索...",style:{border:"none",outline:"none",flex:1,fontSize:14}}),e.jsx(u,{children:e.jsx("button",{type:"button",style:{border:"none",background:"none",cursor:"pointer",padding:"2px 4px"},children:"▼"})})]})}),e.jsx(v,{side:"bottom",align:"start",style:{width:240},children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:["选项 A","选项 B","选项 C","选项 D"].map(n=>e.jsx("div",{style:{padding:"6px 8px",borderRadius:4,cursor:"pointer",fontSize:13},onMouseOver:o=>{o.target.style.background="rgba(0,0,0,0.04)"},onMouseOut:o=>{o.target.style.background="transparent"},children:n},n))})})]})})},D={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(c,{modal:!0,children:[e.jsx(u,{children:e.jsx(p,{variant:"secondary",children:"Modal 模式"})}),e.jsxs(v,{children:[e.jsx("p",{style:{margin:"0 0 8px"},children:"Modal 模式下，背景滚动被锁定，焦点被困在面板内"}),e.jsx(x,{children:e.jsx(p,{variant:"outline",size:"sm",children:"关闭"})})]})]})})},N={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(c,{children:[e.jsx(u,{children:e.jsx(p,{variant:"outline",children:"阻止外部关闭"})}),e.jsxs(v,{onPointerDownOutside:n=>n.preventDefault(),onInteractOutside:n=>n.preventDefault(),children:[e.jsx("p",{style:{margin:"0 0 8px"},children:"点击外部不会关闭，必须点按钮"}),e.jsx(x,{children:e.jsx(p,{variant:"primary",size:"sm",children:"确认关闭"})})]})]})})};var W,V,$;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover>
        <PopoverTrigger>
          <Button variant="outline">打开面板</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p style={{
          margin: 0
        }}>这是一个基础的 Popover 面板</p>
        </PopoverContent>
      </Popover>
    </div>
}`,...($=(V=R.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var H,L,K;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover>
        <PopoverTrigger>
          <Button variant="primary">带箭头</Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={8}>
          <p style={{
          margin: 0
        }}>带箭头的 Popover</p>
          <PopoverArrow />
        </PopoverContent>
      </Popover>
    </div>
}`,...(K=(L=w.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};var G,U,Z;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 24
  }}>
      {sides.map(side => <div key={side} style={{
      display: "flex",
      gap: 12
    }}>
          {aligns.map(align => <Popover key={\`\${side}-\${align}\`}>
              <PopoverTrigger>
                <Button variant="outline" size="sm">
                  {side}-{align}
                </Button>
              </PopoverTrigger>
              <PopoverContent side={side} align={align} sideOffset={6}>
                <p style={{
            margin: 0,
            fontSize: 12
          }}>
                  side={side}, align={align}
                </p>
              </PopoverContent>
            </Popover>)}
        </div>)}
    </div>
}`,...(Z=(U=A.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var J,Q,X;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16
    }}>
        <p style={{
        margin: 0,
        fontSize: 12,
        color: "rgba(0,0,0,0.46)"
      }}>
          当前状态：{open ? "打开" : "关闭"}
        </p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger>
            <Button variant="primary">受控面板</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p style={{
            margin: "0 0 8px"
          }}>受控模式：通过外部 state 管理开关</p>
            <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
              关闭
            </Button>
          </PopoverContent>
        </Popover>
      </div>;
  }
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,ne;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover>
        <PopoverTrigger>
          <Button variant="outline">带关闭按钮</Button>
        </PopoverTrigger>
        <PopoverContent style={{
        minWidth: 200
      }}>
          <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8
        }}>
            <span style={{
            fontWeight: 500
          }}>标题</span>
            <PopoverClose>
              <button type="button" style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: 16,
              lineHeight: 1
            }}>
                ×
              </button>
            </PopoverClose>
          </div>
          <p style={{
          margin: 0,
          fontSize: 13
        }}>面板内容区域，点击 × 可关闭</p>
        </PopoverContent>
      </Popover>
    </div>
}`,...(ne=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,re,te;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover>
        <PopoverTrigger>
          <Button variant="primary">编辑信息</Button>
        </PopoverTrigger>
        <PopoverContent style={{
        width: 280
      }}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 12
        }}>
            <div>
              <label style={{
              fontSize: 12,
              fontWeight: 500,
              marginBottom: 4,
              display: "block"
            }}>名称</label>
              <Input placeholder="请输入名称" />
            </div>
            <div>
              <label style={{
              fontSize: 12,
              fontWeight: 500,
              marginBottom: 4,
              display: "block"
            }}>描述</label>
              <Input placeholder="请输入描述" />
            </div>
            <div style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8
          }}>
              <PopoverClose>
                <Button variant="outline" size="sm">取消</Button>
              </PopoverClose>
              <PopoverClose>
                <Button variant="primary" size="sm">保存</Button>
              </PopoverClose>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
}`,...(te=(re=E.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,ae,ie;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover>
        <PopoverAnchor asChild>
          <div style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          border: "1px solid #d9d9d9",
          borderRadius: 6,
          padding: "4px 8px"
        }}>
            <input placeholder="输入搜索..." style={{
            border: "none",
            outline: "none",
            flex: 1,
            fontSize: 14
          }} />
            <PopoverTrigger>
              <button type="button" style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: "2px 4px"
            }}>
                ▼
              </button>
            </PopoverTrigger>
          </div>
        </PopoverAnchor>
        <PopoverContent side="bottom" align="start" style={{
        width: 240
      }}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 4
        }}>
            {["选项 A", "选项 B", "选项 C", "选项 D"].map(item => <div key={item} style={{
            padding: "6px 8px",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 13
          }} onMouseOver={e => {
            (e.target as HTMLElement).style.background = "rgba(0,0,0,0.04)";
          }} onMouseOut={e => {
            (e.target as HTMLElement).style.background = "transparent";
          }}>
                {item}
              </div>)}
          </div>
        </PopoverContent>
      </Popover>
    </div>
}`,...(ie=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var le,de,pe;D.parameters={...D.parameters,docs:{...(le=D.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover modal>
        <PopoverTrigger>
          <Button variant="secondary">Modal 模式</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p style={{
          margin: "0 0 8px"
        }}>Modal 模式下，背景滚动被锁定，焦点被困在面板内</p>
          <PopoverClose>
            <Button variant="outline" size="sm">关闭</Button>
          </PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
}`,...(pe=(de=D.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,ue,ve;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover>
        <PopoverTrigger>
          <Button variant="outline">阻止外部关闭</Button>
        </PopoverTrigger>
        <PopoverContent onPointerDownOutside={e => e.preventDefault()} onInteractOutside={e => e.preventDefault()}>
          <p style={{
          margin: "0 0 8px"
        }}>点击外部不会关闭，必须点按钮</p>
          <PopoverClose>
            <Button variant="primary" size="sm">确认关闭</Button>
          </PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
}`,...(ve=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:ve.source}}};const Tn=["Basic","WithArrow","Placement","Controlled","WithCloseButton","FormPanel","AnchorSeparation","ModalMode","PreventClose"];export{B as AnchorSeparation,R as Basic,S as Controlled,E as FormPanel,D as ModalMode,A as Placement,N as PreventClose,w as WithArrow,_ as WithCloseButton,Tn as __namedExportsOrder,bn as default};
