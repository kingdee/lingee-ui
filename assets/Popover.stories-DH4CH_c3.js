import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as G}from"./index-D4H_InIO.js";/* empty css                */import{B as r}from"./index-DkYEPqCK.js";import{P as t,a as J,b as s,c as i,d as a,e as K}from"./index-x6Rl5KCe.js";import{I as y}from"./index-D84BHsss.js";import"./index-ukuGrK6K.js";import"./utils-HnQPFlDo.js";import"./index-Dn6qHMI3.js";import"./index-VPG4c6ZF.js";import"./index-TiaNR8H-.js";import"./index-CwLLzmb4.js";import"./index-BLKoEynJ.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-Dh_yPxPv.js";import"./LoaderCircle-BJjvYEe5.js";import"./utils-YwZfuvH0-DLWngkAW.js";import"./Combination-C44wwbTY.js";import"./index-DhX95gbj.js";import"./XLg-Buk6fdo7.js";import"./XCircleFill-C1lg6Dm5.js";const he={title:"Components/Popover",tags:["autodocs"]},l={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{children:"打开面板"})}),e.jsx(i,{className:"lg-popover--card",children:e.jsx("p",{style:{margin:0},children:"这是一个基础的 Popover 面板"})})]})})},d={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{variant:"primary",children:"带箭头"})}),e.jsxs(i,{className:"lg-popover--card",sideOffset:8,children:[e.jsx("p",{style:{margin:0},children:"带箭头的 Popover"}),e.jsx(K,{})]})]})})},Q=["top","bottom","left","right"],U=["start","center","end"],p={render:()=>e.jsx("div",{style:{padding:100,display:"flex",flexDirection:"column",alignItems:"center",gap:24},children:Q.map(n=>e.jsx("div",{style:{display:"flex",gap:12},children:U.map(o=>e.jsxs(t,{children:[e.jsx(s,{children:e.jsxs(r,{size:"sm",children:[n,"-",o]})}),e.jsx(i,{className:"lg-popover--card",side:n,align:o,sideOffset:6,children:e.jsxs("p",{style:{margin:0,fontSize:12},children:["side=",n,", align=",o]})})]},`${n}-${o}`))},n))})},c={render:()=>{const[n,o]=G.useState(!1);return e.jsxs("div",{style:{padding:100,display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[e.jsxs("p",{style:{margin:0,fontSize:12,color:"rgba(0,0,0,0.46)"},children:["当前状态：",n?"打开":"关闭"]}),e.jsxs(t,{open:n,onOpenChange:o,children:[e.jsx(s,{children:e.jsx(r,{variant:"primary",children:"受控面板"})}),e.jsxs(i,{className:"lg-popover--card",children:[e.jsx("p",{style:{margin:"0 0 8px"},children:"受控模式：通过外部 state 管理开关"}),e.jsx(r,{size:"sm",onClick:()=>o(!1),children:"关闭"})]})]})]})}},m={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{children:"带关闭按钮"})}),e.jsxs(i,{className:"lg-popover--card",style:{minWidth:200},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[e.jsx("span",{style:{fontWeight:500},children:"标题"}),e.jsx(a,{children:e.jsx("button",{type:"button",style:{border:"none",background:"none",cursor:"pointer",fontSize:16,lineHeight:1},children:"×"})})]}),e.jsx("p",{style:{margin:0,fontSize:13},children:"面板内容区域，点击 × 可关闭"})]})]})})},g={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{variant:"primary",children:"编辑信息"})}),e.jsx(i,{className:"lg-popover--card",style:{width:280},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:12,fontWeight:500,marginBottom:4,display:"block"},children:"名称"}),e.jsx(y,{placeholder:"请输入名称"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:12,fontWeight:500,marginBottom:4,display:"block"},children:"描述"}),e.jsx(y,{placeholder:"请输入描述"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8},children:[e.jsx(a,{children:e.jsx(r,{size:"sm",children:"取消"})}),e.jsx(a,{children:e.jsx(r,{variant:"primary",size:"sm",children:"保存"})})]})]})})]})})},v={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(t,{children:[e.jsx(J,{asChild:!0,children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,border:"1px solid #d9d9d9",borderRadius:6,padding:"4px 8px"},children:[e.jsx("input",{placeholder:"输入搜索...",style:{border:"none",outline:"none",flex:1,fontSize:14}}),e.jsx(s,{children:e.jsx("button",{type:"button",style:{border:"none",background:"none",cursor:"pointer",padding:"2px 4px"},children:"▼"})})]})}),e.jsx(i,{className:"lg-popover--card",side:"bottom",align:"start",style:{width:240},children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:["选项 A","选项 B","选项 C","选项 D"].map(n=>e.jsx("div",{style:{padding:"6px 8px",borderRadius:4,cursor:"pointer",fontSize:13},onMouseOver:o=>{o.target.style.background="rgba(0,0,0,0.04)"},onMouseOut:o=>{o.target.style.background="transparent"},children:n},n))})})]})})},x={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(t,{modal:!0,children:[e.jsx(s,{children:e.jsx(r,{children:"Modal 模式"})}),e.jsxs(i,{className:"lg-popover--card",children:[e.jsx("p",{style:{margin:"0 0 8px"},children:"Modal 模式下，背景滚动被锁定，焦点被困在面板内"}),e.jsx(a,{children:e.jsx(r,{size:"sm",children:"关闭"})})]})]})})},u={render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{children:"阻止外部关闭"})}),e.jsxs(i,{className:"lg-popover--card",onPointerDownOutside:n=>n.preventDefault(),onInteractOutside:n=>n.preventDefault(),children:[e.jsx("p",{style:{margin:"0 0 8px"},children:"点击外部不会关闭，必须点按钮"}),e.jsx(a,{children:e.jsx(r,{variant:"primary",size:"sm",children:"确认关闭"})})]})]})})};var h,f,j;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover>
        <PopoverTrigger>
          <Button>打开面板</Button>
        </PopoverTrigger>
        <PopoverContent className="lg-popover--card">
          <p style={{
          margin: 0
        }}>这是一个基础的 Popover 面板</p>
        </PopoverContent>
      </Popover>
    </div>
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var P,C,b;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover>
        <PopoverTrigger>
          <Button variant="primary">带箭头</Button>
        </PopoverTrigger>
        <PopoverContent className="lg-popover--card" sideOffset={8}>
          <p style={{
          margin: 0
        }}>带箭头的 Popover</p>
          <PopoverArrow />
        </PopoverContent>
      </Popover>
    </div>
}`,...(b=(C=d.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var B,S,z;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
                <Button size="sm">
                  {side}-{align}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="lg-popover--card" side={side} align={align} sideOffset={6}>
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
}`,...(z=(S=p.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var T,O,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
          <PopoverContent className="lg-popover--card">
            <p style={{
            margin: "0 0 8px"
          }}>受控模式：通过外部 state 管理开关</p>
            <Button size="sm" onClick={() => setOpen(false)}>
              关闭
            </Button>
          </PopoverContent>
        </Popover>
      </div>;
  }
}`,...(N=(O=c.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var k,D,I;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover>
        <PopoverTrigger>
          <Button>带关闭按钮</Button>
        </PopoverTrigger>
        <PopoverContent className="lg-popover--card" style={{
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
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var M,w,W;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover>
        <PopoverTrigger>
          <Button variant="primary">编辑信息</Button>
        </PopoverTrigger>
        <PopoverContent className="lg-popover--card" style={{
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
                <Button size="sm">取消</Button>
              </PopoverClose>
              <PopoverClose>
                <Button variant="primary" size="sm">保存</Button>
              </PopoverClose>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
}`,...(W=(w=g.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var A,E,R;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
        <PopoverContent className="lg-popover--card" side="bottom" align="start" style={{
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
}`,...(R=(E=v.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var H,$,F;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover modal>
        <PopoverTrigger>
          <Button>Modal 模式</Button>
        </PopoverTrigger>
        <PopoverContent className="lg-popover--card">
          <p style={{
          margin: "0 0 8px"
        }}>Modal 模式下，背景滚动被锁定，焦点被困在面板内</p>
          <PopoverClose>
            <Button size="sm">关闭</Button>
          </PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
}`,...(F=($=x.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var L,_,q;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover>
        <PopoverTrigger>
          <Button>阻止外部关闭</Button>
        </PopoverTrigger>
        <PopoverContent className="lg-popover--card" onPointerDownOutside={e => e.preventDefault()} onInteractOutside={e => e.preventDefault()}>
          <p style={{
          margin: "0 0 8px"
        }}>点击外部不会关闭，必须点按钮</p>
          <PopoverClose>
            <Button variant="primary" size="sm">确认关闭</Button>
          </PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
}`,...(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const fe=["Basic","WithArrow","Placement","Controlled","WithCloseButton","FormPanel","AnchorSeparation","ModalMode","PreventClose"];export{v as AnchorSeparation,l as Basic,c as Controlled,g as FormPanel,x as ModalMode,p as Placement,u as PreventClose,d as WithArrow,m as WithCloseButton,fe as __namedExportsOrder,he as default};
