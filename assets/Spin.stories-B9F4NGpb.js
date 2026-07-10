import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as T}from"./index-D4H_InIO.js";import{S as n}from"./index-eJBAwCQF.js";import"./utils-HnQPFlDo.js";import"./index-DhX95gbj.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./XLg-Buk6fdo7.js";import"./utils-YwZfuvH0-DLWngkAW.js";const I={title:"Components/Spin",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},spinning:{control:"boolean"},tip:{control:"text"}}},s={args:{size:"lg",spinning:!0}},i={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:32},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(n,{size:"sm"}),e.jsx("div",{style:{marginTop:8,fontSize:12,color:"#666"},children:"Small (16px)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(n,{size:"md"}),e.jsx("div",{style:{marginTop:8,fontSize:12,color:"#666"},children:"Medium (32px)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(n,{size:"lg"}),e.jsx("div",{style:{marginTop:8,fontSize:12,color:"#666"},children:"Large (48px)"})]})]})},r={name:"容器模式",render:()=>e.jsx(n,{spinning:!0,tip:"加载中...",children:e.jsxs("div",{style:{padding:32,border:"1px solid #eee",borderRadius:8,width:300,textAlign:"center"},children:[e.jsx("p",{style:{margin:0},children:"这里是内容区域"}),e.jsx("p",{style:{margin:"8px 0 0",color:"#999"},children:"加载时内容会变为半透明"})]})})},t={name:"容器模式 - 切换",render:()=>{const[l,b]=T.useState(!0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx("button",{onClick:()=>b(!l),style:{alignSelf:"flex-start",padding:"4px 12px",cursor:"pointer"},children:l?"停止加载":"开始加载"}),e.jsx(n,{spinning:l,size:"md",children:e.jsxs("div",{style:{padding:32,border:"1px solid #eee",borderRadius:8,width:300},children:[e.jsx("p",{style:{margin:0},children:"内容区域"}),e.jsx("p",{style:{margin:"8px 0 0",color:"#999"},children:"点击按钮切换加载状态"})]})})]})}},o={name:"自定义样式",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:32},children:[e.jsx(n,{size:"lg",className:"custom-spin",style:{"--_spin-indicator-color":"#495DFF"}}),e.jsx(n,{size:"lg",style:{"--_spin-indicator-color":"#F12234"}}),e.jsx(n,{size:"lg",style:{"--_spin-indicator-color":"#04B545"}})]})};var a,d,p;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    size: "lg",
    spinning: true
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 32
  }}>
      <div style={{
      textAlign: "center"
    }}>
        <Spin size="sm" />
        <div style={{
        marginTop: 8,
        fontSize: 12,
        color: "#666"
      }}>Small (16px)</div>
      </div>
      <div style={{
      textAlign: "center"
    }}>
        <Spin size="md" />
        <div style={{
        marginTop: 8,
        fontSize: 12,
        color: "#666"
      }}>Medium (32px)</div>
      </div>
      <div style={{
      textAlign: "center"
    }}>
        <Spin size="lg" />
        <div style={{
        marginTop: 8,
        fontSize: 12,
        color: "#666"
      }}>Large (48px)</div>
      </div>
    </div>
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,y,u;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "容器模式",
  render: () => <Spin spinning tip="加载中...">
      <div style={{
      padding: 32,
      border: "1px solid #eee",
      borderRadius: 8,
      width: 300,
      textAlign: "center"
    }}>
        <p style={{
        margin: 0
      }}>这里是内容区域</p>
        <p style={{
        margin: "8px 0 0",
        color: "#999"
      }}>加载时内容会变为半透明</p>
      </div>
    </Spin>
}`,...(u=(y=r.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var S,v,j;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "容器模式 - 切换",
  render: () => {
    const [loading, setLoading] = useState(true);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <button onClick={() => setLoading(!loading)} style={{
        alignSelf: "flex-start",
        padding: "4px 12px",
        cursor: "pointer"
      }}>
          {loading ? "停止加载" : "开始加载"}
        </button>
        <Spin spinning={loading} size="md">
          <div style={{
          padding: 32,
          border: "1px solid #eee",
          borderRadius: 8,
          width: 300
        }}>
            <p style={{
            margin: 0
          }}>内容区域</p>
            <p style={{
            margin: "8px 0 0",
            color: "#999"
          }}>点击按钮切换加载状态</p>
          </div>
        </Spin>
      </div>;
  }
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var z,f,h;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "自定义样式",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 32
  }}>
      <Spin size="lg" className="custom-spin" style={{
      "--_spin-indicator-color": "#495DFF"
    } as React.CSSProperties} />
      <Spin size="lg" style={{
      "--_spin-indicator-color": "#F12234"
    } as React.CSSProperties} />
      <Spin size="lg" style={{
      "--_spin-indicator-color": "#04B545"
    } as React.CSSProperties} />
    </div>
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const E=["Default","Sizes","Nested","NestedToggle","CustomStyle"];export{o as CustomStyle,s as Default,r as Nested,t as NestedToggle,i as Sizes,E as __namedExportsOrder,I as default};
