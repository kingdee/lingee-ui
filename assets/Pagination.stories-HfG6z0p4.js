import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as c}from"./index-D4H_InIO.js";import{P as r}from"./index-2X2hnLo5.js";import"./utils-HnQPFlDo.js";import"./index-DhX95gbj.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./XLg-Buk6fdo7.js";import"./utils-YwZfuvH0-DLWngkAW.js";import"./index-DDkTvaHp.js";import"./index-x6Rl5KCe.js";import"./index-VPG4c6ZF.js";import"./index-TiaNR8H-.js";import"./index-CwLLzmb4.js";import"./index-BLKoEynJ.js";import"./index-Dh_yPxPv.js";import"./Combination-C44wwbTY.js";import"./Check-KywOgGzp.js";import"./ChevronRight-CtQYtb-_.js";import"./ChevronLeft-DCbpohEO.js";import"./ChevronDown-aUW7Z15R.js";const oe={title:"Components/Pagination",component:r,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["simple","bordered","borderless"]},align:{control:"select",options:["start","center","end"]},showTotal:{control:"boolean"},showSizeChanger:{control:"boolean"},showQuickJumper:{control:"boolean"},disabled:{control:"boolean"},total:{control:"number"}}},n={args:{total:1e3,showTotal:!0,showSizeChanger:!0,showQuickJumper:!0,variant:"bordered"}},s={name:"简单",render:()=>{const[a,t]=c.useState(2);return e.jsx(r,{total:80,current:a,pageSize:20,variant:"simple",showTotal:!0,onChange:o=>t(o)})}},i={name:"无框",render:()=>{const[a,t]=c.useState(1);return e.jsx(r,{total:2e3,current:a,pageSize:20,variant:"borderless",showTotal:!0,onChange:o=>t(o)})}},l={name:"有框（完整）",render:()=>{const[a,t]=c.useState(2),[o,h]=c.useState(20);return e.jsx(r,{total:1e3,current:a,pageSize:o,variant:"bordered",showTotal:!0,showSizeChanger:!0,showQuickJumper:!0,onChange:(m,g)=>{t(m),h(g)},onPageSizeChange:(m,g)=>{t(m),h(g)}})}},u={name:"全部变体",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"simple（简单）：共80条 < 2/4 >"}),e.jsx(r,{total:80,defaultCurrent:2,pageSize:20,variant:"simple",showTotal:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"borderless（无框）：共80条 + 页码列表"}),e.jsx(r,{total:2e3,defaultCurrent:1,pageSize:20,variant:"borderless",showTotal:!0,align:"start"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"bordered（有框）：完整模式（页码 + 条数切换 + 跳转）"}),e.jsx(r,{total:1e3,defaultCurrent:2,defaultPageSize:20,variant:"bordered",showTotal:!0,showSizeChanger:!0,showQuickJumper:!0})]})]})},d={name:"禁用",args:{total:500,showTotal:!0,showSizeChanger:!0,showQuickJumper:!0,disabled:!0}},p={name:"少量页码",render:()=>e.jsx(r,{total:50,defaultPageSize:20,showTotal:!0,variant:"bordered"})};var S,z,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    total: 1000,
    showTotal: true,
    showSizeChanger: true,
    showQuickJumper: true,
    variant: "bordered"
  }
}`,...(w=(z=n.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var C,v,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "简单",
  render: () => {
    const [current, setCurrent] = useState(2);
    return <Pagination total={80} current={current} pageSize={20} variant="simple" showTotal onChange={page => setCurrent(page)} />;
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,P,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "无框",
  render: () => {
    const [current, setCurrent] = useState(1);
    return <Pagination total={2000} current={current} pageSize={20} variant="borderless" showTotal onChange={page => setCurrent(page)} />;
  }
}`,...(x=(P=i.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var T,j,y;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "有框（完整）",
  render: () => {
    const [current, setCurrent] = useState(2);
    const [pageSize, setPageSize] = useState(20);
    return <Pagination total={1000} current={current} pageSize={pageSize} variant="bordered" showTotal showSizeChanger showQuickJumper onChange={(page, size) => {
      setCurrent(page);
      setPageSize(size);
    }} onPageSizeChange={(page, size) => {
      setCurrent(page);
      setPageSize(size);
    }} />;
  }
}`,...(y=(j=l.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var B,k,J;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "全部变体",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32
  }}>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>
          simple（简单）：共80条 &lt; 2/4 &gt;
        </p>
        <Pagination total={80} defaultCurrent={2} pageSize={20} variant="simple" showTotal />
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>
          borderless（无框）：共80条 + 页码列表
        </p>
        <Pagination total={2000} defaultCurrent={1} pageSize={20} variant="borderless" showTotal align="start" />
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>
          bordered（有框）：完整模式（页码 + 条数切换 + 跳转）
        </p>
        <Pagination total={1000} defaultCurrent={2} defaultPageSize={20} variant="bordered" showTotal showSizeChanger showQuickJumper />
      </div>
    </div>
}`,...(J=(k=u.parameters)==null?void 0:k.docs)==null?void 0:J.source}}};var Q,D,E;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "禁用",
  args: {
    total: 500,
    showTotal: true,
    showSizeChanger: true,
    showQuickJumper: true,
    disabled: true
  }
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var A,F,V;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "少量页码",
  render: () => <Pagination total={50} defaultPageSize={20} showTotal variant="bordered" />
}`,...(V=(F=p.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};const ne=["Playground","Simple","Borderless","Bordered","AllVariants","Disabled","FewPages"];export{u as AllVariants,l as Bordered,i as Borderless,d as Disabled,p as FewPages,n as Playground,s as Simple,ne as __namedExportsOrder,oe as default};
