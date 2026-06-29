import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as c,r as pe}from"./index-D4H_InIO.js";/* empty css                */import{B as t}from"./index-rpfjBfXO.js";import{R as ce,A as ue,T as me,C as ve,P as ge,a as ye,b as fe}from"./index-Dn_xpjpv.js";import{a as Z}from"./utils-HnQPFlDo.js";import{I as B}from"./index-BLKHGLwr.js";import"./index-ukuGrK6K.js";import"./index-CzDrSyg2.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-DwD4BYpe.js";import"./utils-YwZfuvH0-DLWngkAW.js";import"./Combination-Bz0IViup.js";import"./XCircleFill-C1lg6Dm5.js";function i({children:n,open:r,defaultOpen:o,onOpenChange:s,modal:p=!1}){return e.jsx(ce,{open:r,defaultOpen:o,onOpenChange:s,modal:p,children:n})}i.displayName="Popover";const a=c.forwardRef(({children:n,asChild:r=!0,...o},s)=>e.jsx(me,{ref:s,asChild:r,...o,children:n}));a.displayName="PopoverTrigger";const P=c.forwardRef(({children:n,asChild:r=!0,...o},s)=>e.jsx(ue,{ref:s,asChild:r,...o,children:n}));P.displayName="PopoverAnchor";const l=c.forwardRef(({children:n,className:r,side:o="bottom",align:s="center",sideOffset:p=4,alignOffset:ee=0,container:b,collisionPadding:ne=8,onEscapeKeyDown:re,onPointerDownOutside:te,onFocusOutside:oe,onInteractOutside:se,onOpenAutoFocus:ie,onCloseAutoFocus:ae,...le},de)=>{const T=e.jsx(ve,{ref:de,className:Z("lg-popover",r),side:o,align:s,sideOffset:p,alignOffset:ee,collisionPadding:ne,onEscapeKeyDown:re,onPointerDownOutside:te,onFocusOutside:oe,onInteractOutside:se,onOpenAutoFocus:ie,onCloseAutoFocus:ae,...le,children:n});return b===null?T:e.jsx(ge,{container:b,children:T})});l.displayName="PopoverContent";const C=c.forwardRef(({className:n,width:r=10,height:o=5,...s},p)=>e.jsx(fe,{ref:p,className:Z("lg-popover__arrow",n),width:r,height:o,...s}));C.displayName="PopoverArrow";const d=c.forwardRef(({children:n,asChild:r=!0,...o},s)=>e.jsx(ye,{ref:s,asChild:r,...o,children:n}));d.displayName="PopoverClose";i.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"子元素（Trigger + Content 等）"},open:{required:!1,tsType:{name:"boolean"},description:"受控开关"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"非受控默认打开状态"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"开关变化回调"},modal:{required:!1,tsType:{name:"boolean"},description:"是否为 modal 模式（锁定背景滚动和焦点）",defaultValue:{value:"false",computed:!1}}}};a.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"子元素"},asChild:{required:!1,tsType:{name:"boolean"},description:`当 asChild 为 true 时，Trigger 不渲染自身 DOM，
而是将行为和 props 合并到唯一子元素上`,defaultValue:{value:"true",computed:!1}}}};P.__docgenInfo={description:"",methods:[],displayName:"PopoverAnchor",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:"合并到子元素",defaultValue:{value:"true",computed:!1}}}};l.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"子内容"},side:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:'弹出方向，默认 "bottom"',defaultValue:{value:'"bottom"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'}]},description:'对齐方式，默认 "center"',defaultValue:{value:'"center"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"浮层与触发元素的间距（px），默认 4",defaultValue:{value:"4",computed:!1}},alignOffset:{required:!1,tsType:{name:"number"},description:"对齐方向偏移（px），默认 0",defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"追加到浮层容器的自定义类名"},container:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:`挂载容器，默认为 document.body。
传 null 时不使用 Portal（就地渲染）`},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:"Escape 键按下时的回调，可 preventDefault 阻止关闭"},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: CustomEvent) => void",signature:{arguments:[{type:{name:"CustomEvent"},name:"event"}],return:{name:"void"}}},description:"点击外部时的回调，可 preventDefault 阻止关闭"},onFocusOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: CustomEvent) => void",signature:{arguments:[{type:{name:"CustomEvent"},name:"event"}],return:{name:"void"}}},description:"焦点移出时的回调"},onInteractOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: CustomEvent) => void",signature:{arguments:[{type:{name:"CustomEvent"},name:"event"}],return:{name:"void"}}},description:"外部交互时的回调（pointerDown + focus 的合集）"},onOpenAutoFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:"打开时自动聚焦的回调，可 preventDefault 阻止自动聚焦"},onCloseAutoFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:"关闭时自动回焦的回调，可 preventDefault 阻止回焦"},collisionPadding:{required:!1,tsType:{name:"number"},description:`碰撞边界的内边距（px），默认 8
用于防止浮层贴边`,defaultValue:{value:"8",computed:!1}}}};C.__docgenInfo={description:"",methods:[],displayName:"PopoverArrow",props:{width:{required:!1,tsType:{name:"number"},description:"箭头宽度（px），默认 10",defaultValue:{value:"10",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"箭头高度（px），默认 5",defaultValue:{value:"5",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"追加类名"}}};d.__docgenInfo={description:"",methods:[],displayName:"PopoverClose",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Ae={title:"Components/Popover",tags:["autodocs"]},u={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(t,{variant:"outline",children:"打开面板"})}),e.jsx(l,{children:e.jsx("p",{style:{margin:0},children:"这是一个基础的 Popover 面板"})})]})})},m={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(t,{variant:"primary",children:"带箭头"})}),e.jsxs(l,{sideOffset:8,children:[e.jsx("p",{style:{margin:0},children:"带箭头的 Popover"}),e.jsx(C,{})]})]})})},xe=["top","bottom","left","right"],he=["start","center","end"],v={render:()=>e.jsx("div",{style:{padding:100,display:"flex",flexDirection:"column",alignItems:"center",gap:24},children:xe.map(n=>e.jsx("div",{style:{display:"flex",gap:12},children:he.map(r=>e.jsxs(i,{children:[e.jsx(a,{children:e.jsxs(t,{variant:"outline",size:"sm",children:[n,"-",r]})}),e.jsx(l,{side:n,align:r,sideOffset:6,children:e.jsxs("p",{style:{margin:0,fontSize:12},children:["side=",n,", align=",r]})})]},`${n}-${r}`))},n))})},g={render:()=>{const[n,r]=pe.useState(!1);return e.jsxs("div",{style:{padding:100,display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[e.jsxs("p",{style:{margin:0,fontSize:12,color:"rgba(0,0,0,0.46)"},children:["当前状态：",n?"打开":"关闭"]}),e.jsxs(i,{open:n,onOpenChange:r,children:[e.jsx(a,{children:e.jsx(t,{variant:"primary",children:"受控面板"})}),e.jsxs(l,{children:[e.jsx("p",{style:{margin:"0 0 8px"},children:"受控模式：通过外部 state 管理开关"}),e.jsx(t,{variant:"outline",size:"sm",onClick:()=>r(!1),children:"关闭"})]})]})]})}},y={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(t,{variant:"outline",children:"带关闭按钮"})}),e.jsxs(l,{style:{minWidth:200},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[e.jsx("span",{style:{fontWeight:500},children:"标题"}),e.jsx(d,{children:e.jsx("button",{type:"button",style:{border:"none",background:"none",cursor:"pointer",fontSize:16,lineHeight:1},children:"×"})})]}),e.jsx("p",{style:{margin:0,fontSize:13},children:"面板内容区域，点击 × 可关闭"})]})]})})},f={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(t,{variant:"primary",children:"编辑信息"})}),e.jsx(l,{style:{width:280},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:12,fontWeight:500,marginBottom:4,display:"block"},children:"名称"}),e.jsx(B,{placeholder:"请输入名称"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:12,fontWeight:500,marginBottom:4,display:"block"},children:"描述"}),e.jsx(B,{placeholder:"请输入描述"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8},children:[e.jsx(d,{children:e.jsx(t,{variant:"outline",size:"sm",children:"取消"})}),e.jsx(d,{children:e.jsx(t,{variant:"primary",size:"sm",children:"保存"})})]})]})})]})})},x={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(i,{children:[e.jsx(P,{asChild:!0,children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,border:"1px solid #d9d9d9",borderRadius:6,padding:"4px 8px"},children:[e.jsx("input",{placeholder:"输入搜索...",style:{border:"none",outline:"none",flex:1,fontSize:14}}),e.jsx(a,{children:e.jsx("button",{type:"button",style:{border:"none",background:"none",cursor:"pointer",padding:"2px 4px"},children:"▼"})})]})}),e.jsx(l,{side:"bottom",align:"start",style:{width:240},children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:["选项 A","选项 B","选项 C","选项 D"].map(n=>e.jsx("div",{style:{padding:"6px 8px",borderRadius:4,cursor:"pointer",fontSize:13},onMouseOver:r=>{r.target.style.background="rgba(0,0,0,0.04)"},onMouseOut:r=>{r.target.style.background="transparent"},children:n},n))})})]})})},h={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(i,{modal:!0,children:[e.jsx(a,{children:e.jsx(t,{variant:"secondary",children:"Modal 模式"})}),e.jsxs(l,{children:[e.jsx("p",{style:{margin:"0 0 8px"},children:"Modal 模式下，背景滚动被锁定，焦点被困在面板内"}),e.jsx(d,{children:e.jsx(t,{variant:"outline",size:"sm",children:"关闭"})})]})]})})},j={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(t,{variant:"outline",children:"阻止外部关闭"})}),e.jsxs(l,{onPointerDownOutside:n=>n.preventDefault(),onInteractOutside:n=>n.preventDefault(),children:[e.jsx("p",{style:{margin:"0 0 8px"},children:"点击外部不会关闭，必须点按钮"}),e.jsx(d,{children:e.jsx(t,{variant:"primary",size:"sm",children:"确认关闭"})})]})]})})};var w,S,q;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(q=(S=u.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var z,O,D;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var E,I,N;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(I=v.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var A,R,k;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(k=(R=g.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var M,_,W;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(_=y.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var V,H,F;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(F=(H=f.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var L,$,K;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(K=($=x.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var G,J,Q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Re=["Basic","WithArrow","Placement","Controlled","WithCloseButton","FormPanel","AnchorSeparation","ModalMode","PreventClose"];export{x as AnchorSeparation,u as Basic,g as Controlled,f as FormPanel,h as ModalMode,v as Placement,j as PreventClose,m as WithArrow,y as WithCloseButton,Re as __namedExportsOrder,Ae as default};
