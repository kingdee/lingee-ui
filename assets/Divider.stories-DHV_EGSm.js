import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{R as H}from"./index-D4H_InIO.js";import{a as N}from"./utils-HnQPFlDo.js";const e=H.forwardRef(({className:l,variant:V="default",orientation:p="horizontal",spacing:i,style:c,...I},L)=>{const _=N("lg-divider",`lg-divider--${p}`,`lg-divider--${V}`,l),q=i?p==="horizontal"?{marginTop:i,marginBottom:i,...c}:{marginLeft:i,marginRight:i,...c}:c;return n.jsx("div",{ref:L,role:"separator","aria-orientation":p,className:_,style:q,...I})});e.displayName="Divider";e.__docgenInfo={description:`Divider 分割线组件
用于分隔内容区块，支持水平/垂直方向和多种颜色变体`,methods:[],displayName:"Divider",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "muted" | "emphasis"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"emphasis"'}]},description:'分割线颜色变体，默认 "default"',defaultValue:{value:'"default"',computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:'分割线方向，默认 "horizontal"',defaultValue:{value:'"horizontal"',computed:!1}},spacing:{required:!1,tsType:{name:"number"},description:"外间距（上下或左右），单位 px"}},composes:["HTMLAttributes"]};const $={title:"Components/Divider",component:e,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["default","muted","emphasis"]},orientation:{control:"select",options:["horizontal","vertical"]},spacing:{control:"number"}}},a={args:{variant:"default",orientation:"horizontal"},decorators:[l=>n.jsx("div",{style:{width:280},children:n.jsx(l,{})})]},r={render:()=>n.jsxs("div",{style:{width:280,display:"flex",flexDirection:"column",gap:24},children:[n.jsxs("div",{children:[n.jsx("span",{style:{fontSize:12,color:"#666",marginBottom:8,display:"block"},children:"muted（最浅 - 用于弱分隔）"}),n.jsx(e,{variant:"muted"})]}),n.jsxs("div",{children:[n.jsx("span",{style:{fontSize:12,color:"#666",marginBottom:8,display:"block"},children:"default（默认）"}),n.jsx(e,{variant:"default"})]}),n.jsxs("div",{children:[n.jsx("span",{style:{fontSize:12,color:"#666",marginBottom:8,display:"block"},children:"emphasis（最深 - 用于强分隔）"}),n.jsx(e,{variant:"emphasis"})]})]})},t={render:()=>n.jsxs("div",{style:{width:280},children:[n.jsx("p",{style:{fontSize:14,margin:0},children:"上方内容"}),n.jsx(e,{spacing:12}),n.jsx("p",{style:{fontSize:14,margin:0},children:"下方内容"})]})},s={render:()=>n.jsxs("div",{style:{display:"flex",alignItems:"center",height:24,gap:12},children:[n.jsx("span",{style:{fontSize:14},children:"左侧"}),n.jsx(e,{orientation:"vertical"}),n.jsx("span",{style:{fontSize:14},children:"中间"}),n.jsx(e,{orientation:"vertical",variant:"emphasis"}),n.jsx("span",{style:{fontSize:14},children:"右侧"})]})},o={render:()=>n.jsxs("div",{style:{width:280},children:[n.jsx("p",{style:{fontSize:14,margin:0},children:"spacing=8"}),n.jsx(e,{spacing:8}),n.jsx("p",{style:{fontSize:14,margin:0},children:"spacing=16"}),n.jsx(e,{spacing:16}),n.jsx("p",{style:{fontSize:14,margin:0},children:"spacing=24"}),n.jsx(e,{spacing:24}),n.jsx("p",{style:{fontSize:14,margin:0},children:"内容"})]})},d={render:()=>n.jsxs("div",{style:{width:240,padding:12,border:"1px solid #eee",borderRadius:8},children:[n.jsx("div",{style:{padding:"8px 0",fontSize:14},children:"列表项 1"}),n.jsx(e,{variant:"muted"}),n.jsx("div",{style:{padding:"8px 0",fontSize:14},children:"列表项 2"}),n.jsx(e,{variant:"muted"}),n.jsx("div",{style:{padding:"8px 0",fontSize:14},children:"列表项 3"})]})};var m,v,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "default",
    orientation: "horizontal"
  },
  decorators: [Story => <div style={{
    width: 280
  }}>
        <Story />
      </div>]
}`,...(u=(v=a.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var g,f,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 280,
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <div>
        <span style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8,
        display: "block"
      }}>
          muted（最浅 - 用于弱分隔）
        </span>
        <Divider variant="muted" />
      </div>
      <div>
        <span style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8,
        display: "block"
      }}>
          default（默认）
        </span>
        <Divider variant="default" />
      </div>
      <div>
        <span style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8,
        display: "block"
      }}>
          emphasis（最深 - 用于强分隔）
        </span>
        <Divider variant="emphasis" />
      </div>
    </div>
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,x,z;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 280
  }}>
      <p style={{
      fontSize: 14,
      margin: 0
    }}>上方内容</p>
      <Divider spacing={12} />
      <p style={{
      fontSize: 14,
      margin: 0
    }}>下方内容</p>
    </div>
}`,...(z=(x=t.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var S,j,D;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    height: 24,
    gap: 12
  }}>
      <span style={{
      fontSize: 14
    }}>左侧</span>
      <Divider orientation="vertical" />
      <span style={{
      fontSize: 14
    }}>中间</span>
      <Divider orientation="vertical" variant="emphasis" />
      <span style={{
      fontSize: 14
    }}>右侧</span>
    </div>
}`,...(D=(j=s.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var b,w,B;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 280
  }}>
      <p style={{
      fontSize: 14,
      margin: 0
    }}>spacing=8</p>
      <Divider spacing={8} />
      <p style={{
      fontSize: 14,
      margin: 0
    }}>spacing=16</p>
      <Divider spacing={16} />
      <p style={{
      fontSize: 14,
      margin: 0
    }}>spacing=24</p>
      <Divider spacing={24} />
      <p style={{
      fontSize: 14,
      margin: 0
    }}>内容</p>
    </div>
}`,...(B=(w=o.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var R,k,T;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 240,
    padding: 12,
    border: "1px solid #eee",
    borderRadius: 8
  }}>
      <div style={{
      padding: "8px 0",
      fontSize: 14
    }}>列表项 1</div>
      <Divider variant="muted" />
      <div style={{
      padding: "8px 0",
      fontSize: 14
    }}>列表项 2</div>
      <Divider variant="muted" />
      <div style={{
      padding: "8px 0",
      fontSize: 14
    }}>列表项 3</div>
    </div>
}`,...(T=(k=d.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const A=["Playground","Variants","Horizontal","Vertical","WithSpacing","InList"];export{t as Horizontal,d as InList,a as Playground,r as Variants,s as Vertical,o as WithSpacing,A as __namedExportsOrder,$ as default};
