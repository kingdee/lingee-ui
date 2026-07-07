import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as V}from"./index-D4H_InIO.js";import{C as n,a as d}from"./index-D3m8QDUm.js";import"./utils-HnQPFlDo.js";import"./Check-KywOgGzp.js";import"./utils-YwZfuvH0-DLWngkAW.js";const B={title:"Components/Checkbox",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"}}},s={args:{children:"Option",size:"md"}},c={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 120px)",gap:"16px 32px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:12,color:"#666"},children:"未选中"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"选中"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"半选"}),e.jsx(n,{children:"Option"}),e.jsx(n,{checked:!0,children:"Option"}),e.jsx(n,{checked:!0,indeterminate:!0,children:"Option"}),e.jsx(n,{disabled:!0,children:"Option"}),e.jsx(n,{checked:!0,disabled:!0,children:"Option"}),e.jsx(n,{checked:!0,indeterminate:!0,disabled:!0,children:"Option"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(n,{size:"sm",defaultChecked:!0,children:"Small"}),e.jsx(n,{size:"md",defaultChecked:!0,children:"Medium"}),e.jsx(n,{size:"lg",defaultChecked:!0,children:"Large"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(n,{size:"sm",checked:!0,indeterminate:!0,children:"Small"}),e.jsx(n,{size:"md",checked:!0,indeterminate:!0,children:"Medium"}),e.jsx(n,{size:"lg",checked:!0,indeterminate:!0,children:"Large"})]})]})},a={render:()=>{const[r,i]=V.useState(!1);return e.jsx("div",{style:{display:"flex",alignItems:"center",gap:12},children:e.jsx(n,{checked:r,onChange:i,children:r?"已选中":"未选中"})})}},o={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(n,{defaultChecked:!0}),e.jsx(n,{checked:!0,indeterminate:!0}),e.jsx(n,{})]})},l={render:()=>{const[r,i]=V.useState(["apple"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",margin:"0 0 8px"},children:"垂直排列"}),e.jsxs(d,{value:r,onChange:i,children:[e.jsx(n,{value:"apple",children:"苹果"}),e.jsx(n,{value:"banana",children:"香蕉"}),e.jsx(n,{value:"orange",children:"橙子"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",margin:"0 0 8px"},children:"水平排列"}),e.jsxs(d,{defaultValue:["a","c"],orientation:"horizontal",children:[e.jsx(n,{value:"a",children:"选项 A"}),e.jsx(n,{value:"b",children:"选项 B"}),e.jsx(n,{value:"c",children:"选项 C"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",margin:"0 0 8px"},children:"整组禁用"}),e.jsxs(d,{defaultValue:["x"],disabled:!0,children:[e.jsx(n,{value:"x",children:"选项 X"}),e.jsx(n,{value:"y",children:"选项 Y"})]})]})]})}};var h,x,p;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Option",
    size: "md"
  }
}`,...(p=(x=s.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var u,m,k;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 120px)",
    gap: "16px 32px",
    alignItems: "center"
  }}>
      {/* 表头 */}
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>未选中</span>
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>选中</span>
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>半选</span>

      {/* Default */}
      <Checkbox>Option</Checkbox>
      <Checkbox checked>Option</Checkbox>
      <Checkbox checked indeterminate>Option</Checkbox>

      {/* Disabled */}
      <Checkbox disabled>Option</Checkbox>
      <Checkbox checked disabled>Option</Checkbox>
      <Checkbox checked indeterminate disabled>Option</Checkbox>
    </div>
}`,...(k=(m=c.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var C,b,g;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 24
    }}>
        <Checkbox size="sm" defaultChecked>Small</Checkbox>
        <Checkbox size="md" defaultChecked>Medium</Checkbox>
        <Checkbox size="lg" defaultChecked>Large</Checkbox>
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 24
    }}>
        <Checkbox size="sm" checked indeterminate>Small</Checkbox>
        <Checkbox size="md" checked indeterminate>Medium</Checkbox>
        <Checkbox size="lg" checked indeterminate>Large</Checkbox>
      </div>
    </div>
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,f,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12
    }}>
        <Checkbox checked={checked} onChange={setChecked}>
          {checked ? "已选中" : "未选中"}
        </Checkbox>
      </div>;
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var j,z,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 16
  }}>
      <Checkbox defaultChecked />
      <Checkbox checked indeterminate />
      <Checkbox />
    </div>
}`,...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var O,I,G;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(["apple"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
        <div>
          <p style={{
          fontSize: 12,
          color: "#666",
          margin: "0 0 8px"
        }}>垂直排列</p>
          <CheckboxGroup value={value} onChange={setValue}>
            <Checkbox value="apple">苹果</Checkbox>
            <Checkbox value="banana">香蕉</Checkbox>
            <Checkbox value="orange">橙子</Checkbox>
          </CheckboxGroup>
        </div>
        <div>
          <p style={{
          fontSize: 12,
          color: "#666",
          margin: "0 0 8px"
        }}>水平排列</p>
          <CheckboxGroup defaultValue={["a", "c"]} orientation="horizontal">
            <Checkbox value="a">选项 A</Checkbox>
            <Checkbox value="b">选项 B</Checkbox>
            <Checkbox value="c">选项 C</Checkbox>
          </CheckboxGroup>
        </div>
        <div>
          <p style={{
          fontSize: 12,
          color: "#666",
          margin: "0 0 8px"
        }}>整组禁用</p>
          <CheckboxGroup defaultValue={["x"]} disabled>
            <Checkbox value="x">选项 X</Checkbox>
            <Checkbox value="y">选项 Y</Checkbox>
          </CheckboxGroup>
        </div>
      </div>;
  }
}`,...(G=(I=l.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};const P=["Playground","AllStates","Sizes","Controlled","WithoutLabel","Group"];export{c as AllStates,a as Controlled,l as Group,s as Playground,t as Sizes,o as WithoutLabel,P as __namedExportsOrder,B as default};
