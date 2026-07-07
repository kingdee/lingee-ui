import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as T}from"./index-D4H_InIO.js";import{S as s}from"./index-3X32jvOL.js";import"./utils-HnQPFlDo.js";const A={title:"Components/Switch",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},checked:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{size:"md"}},t={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(s,{size:"sm",defaultChecked:!0}),e.jsx(s,{size:"md",defaultChecked:!0}),e.jsx(s,{size:"lg",defaultChecked:!0})]})},i={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto auto auto auto",gap:"16px 32px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:12,color:"#666"},children:"打开"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"关闭"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"打开-禁用"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"关闭-禁用"}),e.jsx(s,{size:"sm",defaultChecked:!0}),e.jsx(s,{size:"sm"}),e.jsx(s,{size:"sm",checked:!0,disabled:!0}),e.jsx(s,{size:"sm",disabled:!0}),e.jsx(s,{size:"md",defaultChecked:!0}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"md",checked:!0,disabled:!0}),e.jsx(s,{size:"md",disabled:!0}),e.jsx(s,{size:"lg",defaultChecked:!0}),e.jsx(s,{size:"lg"}),e.jsx(s,{size:"lg",checked:!0,disabled:!0}),e.jsx(s,{size:"lg",disabled:!0})]})},d={render:()=>{const[l,I]=T.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(s,{checked:l,onChange:I}),e.jsx("span",{style:{fontSize:14},children:l?"开启":"关闭"})]})}},a={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(s,{disabled:!0}),e.jsx(s,{checked:!0,disabled:!0})]})},r={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px repeat(4, 60px)",gap:"12px 24px",alignItems:"center"},children:[e.jsx("span",{}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"打开"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"关闭"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"打开-禁用"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"关闭-禁用"}),e.jsx("span",{style:{fontSize:13},children:"Small"}),e.jsx(s,{size:"sm",defaultChecked:!0}),e.jsx(s,{size:"sm"}),e.jsx(s,{size:"sm",checked:!0,disabled:!0}),e.jsx(s,{size:"sm",disabled:!0}),e.jsx("span",{style:{fontSize:13},children:"Medium"}),e.jsx(s,{size:"md",defaultChecked:!0}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"md",checked:!0,disabled:!0}),e.jsx(s,{size:"md",disabled:!0}),e.jsx("span",{style:{fontSize:13},children:"Large"}),e.jsx(s,{size:"lg",defaultChecked:!0}),e.jsx(s,{size:"lg"}),e.jsx(s,{size:"lg",checked:!0,disabled:!0}),e.jsx(s,{size:"lg",disabled:!0})]})};var c,o,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...(p=(o=n.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var m,h,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 16
  }}>
      <Switch size="sm" defaultChecked />
      <Switch size="md" defaultChecked />
      <Switch size="lg" defaultChecked />
    </div>
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var z,S,x;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gap: "16px 32px",
    alignItems: "center"
  }}>
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>打开</span>
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>关闭</span>
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>打开-禁用</span>
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>关闭-禁用</span>

      <Switch size="sm" defaultChecked />
      <Switch size="sm" />
      <Switch size="sm" checked disabled />
      <Switch size="sm" disabled />

      <Switch size="md" defaultChecked />
      <Switch size="md" />
      <Switch size="md" checked disabled />
      <Switch size="md" disabled />

      <Switch size="lg" defaultChecked />
      <Switch size="lg" />
      <Switch size="lg" checked disabled />
      <Switch size="lg" disabled />
    </div>
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var g,f,j;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12
    }}>
        <Switch checked={checked} onChange={setChecked} />
        <span style={{
        fontSize: 14
      }}>{checked ? "开启" : "关闭"}</span>
      </div>;
  }
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var y,k,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 16
  }}>
      <Switch disabled />
      <Switch checked disabled />
    </div>
}`,...(b=(k=a.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var w,C,v;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "80px repeat(4, 60px)",
    gap: "12px 24px",
    alignItems: "center"
  }}>
      {/* 表头 */}
      <span />
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>打开</span>
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>关闭</span>
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>打开-禁用</span>
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>关闭-禁用</span>

      {/* Small */}
      <span style={{
      fontSize: 13
    }}>Small</span>
      <Switch size="sm" defaultChecked />
      <Switch size="sm" />
      <Switch size="sm" checked disabled />
      <Switch size="sm" disabled />

      {/* Medium */}
      <span style={{
      fontSize: 13
    }}>Medium</span>
      <Switch size="md" defaultChecked />
      <Switch size="md" />
      <Switch size="md" checked disabled />
      <Switch size="md" disabled />

      {/* Large */}
      <span style={{
      fontSize: 13
    }}>Large</span>
      <Switch size="lg" defaultChecked />
      <Switch size="lg" />
      <Switch size="lg" checked disabled />
      <Switch size="lg" disabled />
    </div>
}`,...(v=(C=r.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const V=["Default","Sizes","States","Controlled","Disabled","AllVariants"];export{r as AllVariants,d as Controlled,n as Default,a as Disabled,t as Sizes,i as States,V as __namedExportsOrder,A as default};
