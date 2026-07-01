import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as Q,r as l}from"./index-D4H_InIO.js";import{a as U}from"./utils-HnQPFlDo.js";const s=Q.forwardRef(({checked:n,defaultChecked:t=!1,size:a="md",disabled:d=!1,onChange:c,className:M,style:L,id:A,"aria-label":K,...O},$)=>{const[B,F]=l.useState(t),z=n!==void 0,r=z?n:B,G=l.useRef(null),H=W($,G),x=l.useCallback(()=>{if(d)return;const i=!r;z||F(i),c==null||c(i)},[d,r,z,c]),J=l.useCallback(i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),x())},[x]),P=U("lg-switch",`lg-switch--${a}`,r&&"lg-switch--checked",d&&"lg-switch--disabled",M);return e.jsxs("button",{type:"button",role:"switch","aria-checked":r,"aria-label":K,disabled:d,className:P,style:L,onClick:x,onKeyDown:J,children:[e.jsx("input",{ref:H,type:"checkbox",id:A,checked:r,disabled:d,className:"lg-switch__input",tabIndex:-1,onChange:()=>{},...O}),e.jsx("span",{className:"lg-switch__thumb"})]})});s.displayName="Switch";function W(...n){return l.useCallback(t=>{n.forEach(a=>{a&&(typeof a=="function"?a(t):a.current=t)})},n)}s.__docgenInfo={description:`Switch 开关组件
支持三种尺寸（sm/md/lg）、受控与非受控两种模式、禁用状态`,methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:"开关状态（受控）"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"默认开关状态（非受控）",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:'开关尺寸，默认 "md"',defaultValue:{value:'"md"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用状态",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"状态变更回调"},className:{required:!1,tsType:{name:"string"},description:"额外 className"}},composes:["Omit"]};const ee={title:"Components/Switch",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},checked:{control:"boolean"},disabled:{control:"boolean"}}},o={args:{size:"md"}},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(s,{size:"sm",defaultChecked:!0}),e.jsx(s,{size:"md",defaultChecked:!0}),e.jsx(s,{size:"lg",defaultChecked:!0})]})},u={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto auto auto auto",gap:"16px 32px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:12,color:"#666"},children:"打开"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"关闭"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"打开-禁用"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"关闭-禁用"}),e.jsx(s,{size:"sm",defaultChecked:!0}),e.jsx(s,{size:"sm"}),e.jsx(s,{size:"sm",checked:!0,disabled:!0}),e.jsx(s,{size:"sm",disabled:!0}),e.jsx(s,{size:"md",defaultChecked:!0}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"md",checked:!0,disabled:!0}),e.jsx(s,{size:"md",disabled:!0}),e.jsx(s,{size:"lg",defaultChecked:!0}),e.jsx(s,{size:"lg"}),e.jsx(s,{size:"lg",checked:!0,disabled:!0}),e.jsx(s,{size:"lg",disabled:!0})]})},m={render:()=>{const[n,t]=l.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(s,{checked:n,onChange:t}),e.jsx("span",{style:{fontSize:14},children:n?"开启":"关闭"})]})}},h={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(s,{disabled:!0}),e.jsx(s,{checked:!0,disabled:!0})]})},f={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px repeat(4, 60px)",gap:"12px 24px",alignItems:"center"},children:[e.jsx("span",{}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"打开"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"关闭"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"打开-禁用"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"关闭-禁用"}),e.jsx("span",{style:{fontSize:13},children:"Small"}),e.jsx(s,{size:"sm",defaultChecked:!0}),e.jsx(s,{size:"sm"}),e.jsx(s,{size:"sm",checked:!0,disabled:!0}),e.jsx(s,{size:"sm",disabled:!0}),e.jsx("span",{style:{fontSize:13},children:"Medium"}),e.jsx(s,{size:"md",defaultChecked:!0}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"md",checked:!0,disabled:!0}),e.jsx(s,{size:"md",disabled:!0}),e.jsx("span",{style:{fontSize:13},children:"Large"}),e.jsx(s,{size:"lg",defaultChecked:!0}),e.jsx(s,{size:"lg"}),e.jsx(s,{size:"lg",checked:!0,disabled:!0}),e.jsx(s,{size:"lg",disabled:!0})]})};var g,S,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var k,j,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 16
  }}>
      <Switch size="sm" defaultChecked />
      <Switch size="md" defaultChecked />
      <Switch size="lg" defaultChecked />
    </div>
}`,...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var b,C,v;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(C=u.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var I,T,R;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(T=m.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var _,D,N;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 16
  }}>
      <Switch disabled />
      <Switch checked disabled />
    </div>
}`,...(N=(D=h.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var q,E,V;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(E=f.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const se=["Default","Sizes","States","Controlled","Disabled","AllVariants"];export{f as AllVariants,m as Controlled,o as Default,h as Disabled,p as Sizes,u as States,se as __namedExportsOrder,ee as default};
