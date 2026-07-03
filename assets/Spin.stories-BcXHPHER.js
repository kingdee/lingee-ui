import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as D,r as F}from"./index-D4H_InIO.js";import{a as t}from"./utils-HnQPFlDo.js";const n=D.forwardRef(({className:s,size:i="lg",spinning:c=!0,children:m,tip:r,...g},u)=>{const w=m!=null,x=e.jsx("div",{className:"lg-spin__indicator"});return w?e.jsxs("div",{ref:u,className:t("lg-spin","lg-spin--nested",s),...g,children:[e.jsx("div",{className:t("lg-spin__content",c&&"lg-spin__content--loading"),children:m}),c&&e.jsxs("div",{className:"lg-spin__overlay",role:"status","aria-label":r||"加载中",children:[e.jsx("div",{className:t("lg-spin",`lg-spin--${i}`),children:x}),r&&e.jsx("span",{className:"lg-spin__tip",children:r})]})]}):e.jsx("div",{ref:u,className:t("lg-spin",`lg-spin--${i}`,!c&&"lg-spin--paused",s),role:"status","aria-label":r||"加载中",...g,children:x})});n.displayName="Spin";n.__docgenInfo={description:`Spin 加载指示器组件
支持独立使用或作为容器包裹内容，加载时显示遮罩与旋转指示器`,methods:[],displayName:"Spin",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"加载指示器尺寸",defaultValue:{value:'"lg"',computed:!1}},spinning:{required:!1,tsType:{name:"boolean"},description:"是否旋转中，为 false 时暂停动画",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义行内样式"},children:{required:!1,tsType:{name:"ReactNode"},description:"包裹内容，存在时作为容器模式使用"},tip:{required:!1,tsType:{name:"string"},description:"容器模式下的加载提示文本"}},composes:["Omit"]};const P={title:"Components/Spin",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},spinning:{control:"boolean"},tip:{control:"text"}}},l={args:{size:"lg",spinning:!0}},a={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:32},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(n,{size:"sm"}),e.jsx("div",{style:{marginTop:8,fontSize:12,color:"#666"},children:"Small (16px)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(n,{size:"md"}),e.jsx("div",{style:{marginTop:8,fontSize:12,color:"#666"},children:"Medium (32px)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(n,{size:"lg"}),e.jsx("div",{style:{marginTop:8,fontSize:12,color:"#666"},children:"Large (48px)"})]})]})},o={name:"容器模式",render:()=>e.jsx(n,{spinning:!0,tip:"加载中...",children:e.jsxs("div",{style:{padding:32,border:"1px solid #eee",borderRadius:8,width:300,textAlign:"center"},children:[e.jsx("p",{style:{margin:0},children:"这里是内容区域"}),e.jsx("p",{style:{margin:"8px 0 0",color:"#999"},children:"加载时内容会变为半透明"})]})})},d={name:"容器模式 - 切换",render:()=>{const[s,i]=F.useState(!0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx("button",{onClick:()=>i(!s),style:{alignSelf:"flex-start",padding:"4px 12px",cursor:"pointer"},children:s?"停止加载":"开始加载"}),e.jsx(n,{spinning:s,size:"md",children:e.jsxs("div",{style:{padding:32,border:"1px solid #eee",borderRadius:8,width:300},children:[e.jsx("p",{style:{margin:0},children:"内容区域"}),e.jsx("p",{style:{margin:"8px 0 0",color:"#999"},children:"点击按钮切换加载状态"})]})})]})}},p={name:"自定义样式",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:32},children:[e.jsx(n,{size:"lg",className:"custom-spin",style:{"--_spin-indicator-color":"#495DFF"}}),e.jsx(n,{size:"lg",style:{"--_spin-indicator-color":"#F12234"}}),e.jsx(n,{size:"lg",style:{"--_spin-indicator-color":"#04B545"}})]})};var y,v,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "lg",
    spinning: true
  }
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var f,j,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(j=a.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var z,_,N;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(N=(_=o.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var b,T,R;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(R=(T=d.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var C,A,q;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(q=(A=p.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};const k=["Default","Sizes","Nested","NestedToggle","CustomStyle"];export{p as CustomStyle,l as Default,o as Nested,d as NestedToggle,a as Sizes,k as __namedExportsOrder,P as default};
