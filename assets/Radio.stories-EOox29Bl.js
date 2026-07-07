import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as E}from"./index-D4H_InIO.js";import{R as n,a}from"./index-Dd0864jB.js";import"./index-QzquTJG0.js";import"./index-z7VdwxYv.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-YtIeenAn.js";import"./index-sEhs43E3.js";import"./utils-HnQPFlDo.js";const J={title:"Components/Radio",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},orientation:{control:"select",options:["horizontal","vertical"]},disabled:{control:"boolean"}}},i={render:o=>e.jsxs(n,{defaultValue:"a",...o,children:[e.jsx(a,{value:"a",children:"选项 A"}),e.jsx(a,{value:"b",children:"选项 B"}),e.jsx(a,{value:"c",children:"选项 C"})]}),args:{size:"md",orientation:"vertical"}},l={render:()=>e.jsxs(n,{defaultValue:"a",orientation:"horizontal",children:[e.jsx(a,{value:"a",children:"常规单选"}),e.jsx(a,{value:"b",children:"选项 B"}),e.jsx(a,{value:"c",children:"选项 C"})]})},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"Small"}),e.jsxs(n,{defaultValue:"a",orientation:"horizontal",size:"sm",children:[e.jsx(a,{value:"a",children:"选项 A"}),e.jsx(a,{value:"b",children:"选项 B"}),e.jsx(a,{value:"c",children:"选项 C"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"Medium（默认）"}),e.jsxs(n,{defaultValue:"a",orientation:"horizontal",size:"md",children:[e.jsx(a,{value:"a",children:"选项 A"}),e.jsx(a,{value:"b",children:"选项 B"}),e.jsx(a,{value:"c",children:"选项 C"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"Large"}),e.jsxs(n,{defaultValue:"a",orientation:"horizontal",size:"lg",children:[e.jsx(a,{value:"a",children:"选项 A"}),e.jsx(a,{value:"b",children:"选项 B"}),e.jsx(a,{value:"c",children:"选项 C"})]})]})]})},t={name:"交互状态",render:()=>e.jsxs("div",{style:{display:"flex",gap:48,alignItems:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx("span",{style:{fontSize:14,color:"rgba(0,0,0,0.46)"},children:"默认态"}),e.jsx(n,{children:e.jsx(a,{value:"a",children:"常规单选"})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx("span",{style:{fontSize:14,color:"rgba(0,0,0,0.46)"},children:"选中态"}),e.jsx(n,{defaultValue:"a",children:e.jsx(a,{value:"a",children:"常规单选"})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx("span",{style:{fontSize:14,color:"rgba(0,0,0,0.46)"},children:"禁用态"}),e.jsx(n,{disabled:!0,children:e.jsx(a,{value:"a",children:"常规单选"})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx("span",{style:{fontSize:14,color:"rgba(0,0,0,0.46)"},children:"选中且禁用"}),e.jsx(n,{defaultValue:"a",disabled:!0,children:e.jsx(a,{value:"a",children:"常规单选"})})]})]})},s={render:()=>e.jsxs(n,{defaultValue:"a",orientation:"vertical",children:[e.jsx(a,{value:"a",children:"可选项"}),e.jsx(a,{value:"b",disabled:!0,children:"禁用选项"}),e.jsx(a,{value:"c",children:"可选项"})]})},d={render:()=>{const[o,L]=E.useState("a");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(n,{value:o,onValueChange:L,orientation:"horizontal",children:[e.jsx(a,{value:"a",children:"选项 A"}),e.jsx(a,{value:"b",children:"选项 B"}),e.jsx(a,{value:"c",children:"选项 C"})]}),e.jsxs("p",{style:{fontSize:13,color:"#666"},children:["当前选中：",o]})]})}},c={name:"无文本（仅圆形按钮）",render:()=>e.jsxs(n,{defaultValue:"a",orientation:"horizontal",children:[e.jsx(a,{value:"a"}),e.jsx(a,{value:"b"}),e.jsx(a,{value:"c"})]})};var u,m,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <RadioGroup defaultValue="a" {...args}>
      <RadioItem value="a">选项 A</RadioItem>
      <RadioItem value="b">选项 B</RadioItem>
      <RadioItem value="c">选项 C</RadioItem>
    </RadioGroup>,
  args: {
    size: "md",
    orientation: "vertical"
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,x,R;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="a" orientation="horizontal">
      <RadioItem value="a">常规单选</RadioItem>
      <RadioItem value="b">选项 B</RadioItem>
      <RadioItem value="c">选项 C</RadioItem>
    </RadioGroup>
}`,...(R=(x=l.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var h,f,j;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>Small</p>
        <RadioGroup defaultValue="a" orientation="horizontal" size="sm">
          <RadioItem value="a">选项 A</RadioItem>
          <RadioItem value="b">选项 B</RadioItem>
          <RadioItem value="c">选项 C</RadioItem>
        </RadioGroup>
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>Medium（默认）</p>
        <RadioGroup defaultValue="a" orientation="horizontal" size="md">
          <RadioItem value="a">选项 A</RadioItem>
          <RadioItem value="b">选项 B</RadioItem>
          <RadioItem value="c">选项 C</RadioItem>
        </RadioGroup>
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>Large</p>
        <RadioGroup defaultValue="a" orientation="horizontal" size="lg">
          <RadioItem value="a">选项 A</RadioItem>
          <RadioItem value="b">选项 B</RadioItem>
          <RadioItem value="c">选项 C</RadioItem>
        </RadioGroup>
      </div>
    </div>
}`,...(j=(f=r.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var I,g,y;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "交互状态",
  render: () => <div style={{
    display: "flex",
    gap: 48,
    alignItems: "flex-start"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <span style={{
        fontSize: 14,
        color: "rgba(0,0,0,0.46)"
      }}>默认态</span>
        <RadioGroup>
          <RadioItem value="a">常规单选</RadioItem>
        </RadioGroup>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <span style={{
        fontSize: 14,
        color: "rgba(0,0,0,0.46)"
      }}>选中态</span>
        <RadioGroup defaultValue="a">
          <RadioItem value="a">常规单选</RadioItem>
        </RadioGroup>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <span style={{
        fontSize: 14,
        color: "rgba(0,0,0,0.46)"
      }}>禁用态</span>
        <RadioGroup disabled>
          <RadioItem value="a">常规单选</RadioItem>
        </RadioGroup>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <span style={{
        fontSize: 14,
        color: "rgba(0,0,0,0.46)"
      }}>选中且禁用</span>
        <RadioGroup defaultValue="a" disabled>
          <RadioItem value="a">常规单选</RadioItem>
        </RadioGroup>
      </div>
    </div>
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var z,b,S;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="a" orientation="vertical">
      <RadioItem value="a">可选项</RadioItem>
      <RadioItem value="b" disabled>禁用选项</RadioItem>
      <RadioItem value="c">可选项</RadioItem>
    </RadioGroup>
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var G,V,B;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("a");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <RadioGroup value={value} onValueChange={setValue} orientation="horizontal">
          <RadioItem value="a">选项 A</RadioItem>
          <RadioItem value="b">选项 B</RadioItem>
          <RadioItem value="c">选项 C</RadioItem>
        </RadioGroup>
        <p style={{
        fontSize: 13,
        color: "#666"
      }}>当前选中：{value}</p>
      </div>;
  }
}`,...(B=(V=d.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var C,D,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "无文本（仅圆形按钮）",
  render: () => <RadioGroup defaultValue="a" orientation="horizontal">
      <RadioItem value="a" />
      <RadioItem value="b" />
      <RadioItem value="c" />
    </RadioGroup>
}`,...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const K=["Default","Horizontal","Sizes","States","Disabled","Controlled","WithoutLabel"];export{d as Controlled,i as Default,s as Disabled,l as Horizontal,r as Sizes,t as States,c as WithoutLabel,K as __namedExportsOrder,J as default};
