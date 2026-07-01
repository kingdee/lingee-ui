import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as y}from"./index-D4H_InIO.js";import{T as r}from"./index-m3PW3e5A.js";import"./utils-HnQPFlDo.js";const B={title:"Components/Textarea",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean"},error:{control:"boolean"},showCount:{control:"boolean"},rows:{control:"number"},maxLength:{control:"number"}}},o={args:{placeholder:"请输入内容...",rows:4},decorators:[s=>e.jsx("div",{style:{width:400},children:e.jsx(s,{})})]},n={render:()=>{const[s,f]=y.useState("");return e.jsx("div",{style:{width:400},children:e.jsx(r,{placeholder:"请输入技能描述",rows:4,maxLength:300,showCount:!0,value:s,onChange:j=>f(j.target.value)})})}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:400},children:[e.jsx(r,{placeholder:"默认态",rows:3}),e.jsx(r,{placeholder:"错误态",rows:3,error:!0}),e.jsx(r,{placeholder:"禁用态",rows:3,disabled:!0,defaultValue:"不可编辑内容"})]})},a={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16,width:800},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"默认"}),e.jsx(r,{placeholder:"请输入...",rows:3})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"错误"}),e.jsx(r,{placeholder:"请输入...",rows:3,error:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"禁用"}),e.jsx(r,{defaultValue:"禁用内容",rows:3,disabled:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"带字数统计"}),e.jsx(r,{placeholder:"最多300字",rows:3,maxLength:300,showCount:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"有内容 + 字数"}),e.jsx(r,{defaultValue:"已输入内容示例",rows:3,maxLength:500,showCount:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"自动高度（rows=6）"}),e.jsx(r,{placeholder:"更高的区域",rows:6})]})]})};var l,d,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: "请输入内容...",
    rows: 4
  },
  decorators: [Story => <div style={{
    width: 400
  }}><Story /></div>]
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,m,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <div style={{
      width: 400
    }}>
        <Textarea placeholder="请输入技能描述" rows={4} maxLength={300} showCount value={value} onChange={e => setValue(e.target.value)} />
      </div>;
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,p,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: 400
  }}>
      <Textarea placeholder="默认态" rows={3} />
      <Textarea placeholder="错误态" rows={3} error />
      <Textarea placeholder="禁用态" rows={3} disabled defaultValue="不可编辑内容" />
    </div>
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var v,w,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 16,
    width: 800
  }}>
      <div>
        <div style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>默认</div>
        <Textarea placeholder="请输入..." rows={3} />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>错误</div>
        <Textarea placeholder="请输入..." rows={3} error />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>禁用</div>
        <Textarea defaultValue="禁用内容" rows={3} disabled />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>带字数统计</div>
        <Textarea placeholder="最多300字" rows={3} maxLength={300} showCount />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>有内容 + 字数</div>
        <Textarea defaultValue="已输入内容示例" rows={3} maxLength={500} showCount />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>自动高度（rows=6）</div>
        <Textarea placeholder="更高的区域" rows={6} />
      </div>
    </div>
}`,...(g=(w=a.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};const V=["Default","WithCount","States","AllVariants"];export{a as AllVariants,o as Default,t as States,n as WithCount,V as __namedExportsOrder,B as default};
