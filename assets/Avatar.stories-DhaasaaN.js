import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as J,r as o}from"./index-D4H_InIO.js";import{a as O}from"./utils-HnQPFlDo.js";function L({size:s=32}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"4 4 56 56",fill:"none",children:[e.jsx("path",{d:"M32 5.33334C46.7276 5.33334 58.6667 17.2724 58.6667 32C58.6667 46.7276 46.7276 58.6667 32 58.6667C17.2724 58.6667 5.33333 46.7276 5.33333 32C5.33333 17.2724 17.2724 5.33334 32 5.33334Z",fill:"black",fillOpacity:"0.18"}),e.jsx("path",{d:"M32.0026 41.3333C40.0449 41.3338 47.0447 45.7868 50.6797 52.3594C45.8687 57.0826 39.2771 59.9996 32.0026 60C24.7269 60 18.1317 57.0837 13.3203 52.3594C16.9553 45.7858 23.9593 41.3333 32.0026 41.3333Z",fill:"white"}),e.jsx("path",{d:"M32 14.6667C37.891 14.6667 42.6667 19.4423 42.6667 25.3333C42.6667 31.2244 37.891 36 32 36C26.109 36 21.3333 31.2244 21.3333 25.3333C21.3333 19.4423 26.109 14.6667 32 14.6667Z",fill:"white"})]})}const A=J.forwardRef(({src:s,alt:n,size:r=32,shape:j="circle",icon:c,className:i,style:d,onError:t},p)=>{const[h,l]=o.useState(!1),P=()=>{l(!0),t==null||t()},$=r<=20?10:r<=32?12:r<=48?16:28,H=()=>s&&!h?e.jsx("img",{className:"lg-avatar__image",src:s,alt:n??"",onError:P}):n?e.jsx("span",{className:"lg-avatar__text",style:{fontSize:$},children:n}):c?e.jsx("span",{className:"lg-avatar__icon",children:c}):e.jsx("span",{className:"lg-avatar__icon lg-avatar__icon--default",children:e.jsx(L,{size:r})});return e.jsx("span",{ref:p,className:O("lg-avatar",`lg-avatar--${j}`,i),style:{width:r,height:r,...d},children:H()})});A.displayName="Avatar";const f=({max:s=5,size:n=32,className:r,style:j,children:c})=>{const i=o.Children.toArray(c).filter(o.isValidElement),d=i.length,t=Math.min(d,s),p=d-t,h=i.slice(0,t).map(l=>o.isValidElement(l)?o.cloneElement(l,{size:n}):l);return e.jsxs("div",{className:O("lg-avatar-group",r),style:j,children:[h,p>0&&e.jsx("span",{className:"lg-avatar lg-avatar--circle lg-avatar-group__overflow",style:{width:n,height:n},children:e.jsxs("span",{className:"lg-avatar__text",style:{fontSize:n<=24?10:12},children:["+",p]})})]})};f.displayName="AvatarGroup";const a=A;a.Group=f;A.__docgenInfo={description:`Avatar 头像组件
支持图片、文字、图标三种展示形态`,methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"头像图片地址"},alt:{required:!1,tsType:{name:"string"},description:"图片加载失败时的替代文字（如姓氏、英文缩写）"},size:{required:!1,tsType:{name:"number"},description:"头像尺寸（px），默认 32",defaultValue:{value:"32",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"自定义圆角，默认圆形（50%）",defaultValue:{value:'"circle"',computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"自定义图标（覆盖默认人形图标）"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"图片加载失败回调"}}};f.__docgenInfo={description:`Avatar.Group 头像集群
最多显示 max 个头像，超出显示 +N`,methods:[],displayName:"AvatarGroup",props:{max:{required:!1,tsType:{name:"number"},description:"最多显示数量，超出显示 +N，默认 5",defaultValue:{value:"5",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"头像尺寸（px），默认 32",defaultValue:{value:"32",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},children:{required:!1,tsType:{name:"ReactNode"},description:"子元素（Avatar 列表）"}}};const Y={title:"Components/Avatar",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"number"},shape:{control:"select",options:["circle","square"]}}},u={name:"默认头像",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(a,{size:64}),e.jsx(a,{size:48}),e.jsx(a,{size:32}),e.jsx(a,{size:20})]})},g={name:"文字头像",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(a,{size:64,alt:"金",style:{background:"#f3f5ff",color:"#495dff"}}),e.jsx(a,{size:64,alt:"金",style:{background:"#ebfef7",color:"#009d72"}}),e.jsx(a,{size:64,alt:"金",style:{background:"#fff0f3",color:"#ed1165"}}),e.jsx(a,{size:64,alt:"金",style:{background:"#f9f5ff",color:"#7f2af3"}}),e.jsx(a,{size:64,alt:"金",style:{background:"#fffdea",color:"#e28800"}}),e.jsx(a,{size:64,alt:"金",style:{background:"#fff2fc",color:"#ed1db9"}})]}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(a,{size:64,alt:"KW",style:{background:"#f3f5ff",color:"#495dff"}}),e.jsx(a,{size:64,alt:"KW",style:{background:"#ebfef7",color:"#009d72"}}),e.jsx(a,{size:64,alt:"KW",style:{background:"#fff0f3",color:"#ed1165"}}),e.jsx(a,{size:64,alt:"KW",style:{background:"#f9f5ff",color:"#7f2af3"}}),e.jsx(a,{size:64,alt:"KW",style:{background:"#fffdea",color:"#e28800"}}),e.jsx(a,{size:64,alt:"KW",style:{background:"#fff2fc",color:"#ed1db9"}})]})]})},v={name:"四种尺寸",render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{size:64,alt:"金",style:{background:"#f3f5ff",color:"#495dff"}}),e.jsx("div",{style:{marginTop:8,fontSize:12,color:"#666"},children:"64px"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{size:48,alt:"金",style:{background:"#ebfef7",color:"#009d72"}}),e.jsx("div",{style:{marginTop:8,fontSize:12,color:"#666"},children:"48px"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{size:32,alt:"金",style:{background:"#fff0f3",color:"#ed1165"}}),e.jsx("div",{style:{marginTop:8,fontSize:12,color:"#666"},children:"32px"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{size:20,alt:"金",style:{background:"#f9f5ff",color:"#7f2af3"}}),e.jsx("div",{style:{marginTop:8,fontSize:12,color:"#666"},children:"20px"})]})]})},m={name:"图片头像",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(a,{size:64,src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"}),e.jsx(a,{size:48,src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"}),e.jsx(a,{size:32,src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Carol"}),e.jsx(a,{size:20,src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Dave"})]})},x={name:"加载失败回退",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(a,{size:48,src:"https://broken-url.example/none.png",alt:"张",style:{background:"#f3f5ff",color:"#495dff"}}),e.jsx(a,{size:48,src:"https://broken-url.example/none.png"})]})},y={name:"头像集群",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:14,color:"#666",marginBottom:8},children:"32px 集群"}),e.jsxs(f,{size:32,max:5,children:[e.jsx(a,{alt:"金",style:{background:"#f3f5ff",color:"#495dff"}}),e.jsx(a,{alt:"金",style:{background:"#fff0f3",color:"#ed1165"}}),e.jsx(a,{alt:"金",style:{background:"#fffdea",color:"#e28800"}}),e.jsx(a,{alt:"金",style:{background:"#ebfef7",color:"#009d72"}}),e.jsx(a,{alt:"A",style:{background:"#f9f5ff",color:"#7f2af3"}}),e.jsx(a,{alt:"B",style:{background:"#fff2fc",color:"#ed1db9"}}),e.jsx(a,{alt:"C",style:{background:"#f3f5ff",color:"#495dff"}}),e.jsx(a,{alt:"D",style:{background:"#ebfef7",color:"#009d72"}}),e.jsx(a,{alt:"E",style:{background:"#fff0f3",color:"#ed1165"}})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:14,color:"#666",marginBottom:8},children:"24px 集群"}),e.jsxs(f,{size:24,max:5,children:[e.jsx(a,{alt:"金",style:{background:"#f3f5ff",color:"#495dff"}}),e.jsx(a,{alt:"金",style:{background:"#fff0f3",color:"#ed1165"}}),e.jsx(a,{alt:"金",style:{background:"#fffdea",color:"#e28800"}}),e.jsx(a,{alt:"金",style:{background:"#ebfef7",color:"#009d72"}}),e.jsx(a,{alt:"A",style:{background:"#f9f5ff",color:"#7f2af3"}}),e.jsx(a,{alt:"B",style:{background:"#fff2fc",color:"#ed1db9"}}),e.jsx(a,{alt:"C",style:{background:"#f3f5ff",color:"#495dff"}}),e.jsx(a,{alt:"D",style:{background:"#ebfef7",color:"#009d72"}}),e.jsx(a,{alt:"E",style:{background:"#fff0f3",color:"#ed1165"}})]})]})]})},b={name:"方形头像",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(a,{size:48,shape:"square",alt:"AI",style:{background:"#f3f5ff",color:"#495dff"}}),e.jsx(a,{size:32,shape:"square",src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Eve"}),e.jsx(a,{size:32,shape:"square"})]})};var k,z,S;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "默认头像",
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center"
  }}>
      <Avatar size={64} />
      <Avatar size={48} />
      <Avatar size={32} />
      <Avatar size={20} />
    </div>
}`,...(S=(z=u.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var C,q,T;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "文字头像",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <div style={{
      display: "flex",
      gap: 16,
      alignItems: "center"
    }}>
        <Avatar size={64} alt="金" style={{
        background: "#f3f5ff",
        color: "#495dff"
      }} />
        <Avatar size={64} alt="金" style={{
        background: "#ebfef7",
        color: "#009d72"
      }} />
        <Avatar size={64} alt="金" style={{
        background: "#fff0f3",
        color: "#ed1165"
      }} />
        <Avatar size={64} alt="金" style={{
        background: "#f9f5ff",
        color: "#7f2af3"
      }} />
        <Avatar size={64} alt="金" style={{
        background: "#fffdea",
        color: "#e28800"
      }} />
        <Avatar size={64} alt="金" style={{
        background: "#fff2fc",
        color: "#ed1db9"
      }} />
      </div>
      <div style={{
      display: "flex",
      gap: 16,
      alignItems: "center"
    }}>
        <Avatar size={64} alt="KW" style={{
        background: "#f3f5ff",
        color: "#495dff"
      }} />
        <Avatar size={64} alt="KW" style={{
        background: "#ebfef7",
        color: "#009d72"
      }} />
        <Avatar size={64} alt="KW" style={{
        background: "#fff0f3",
        color: "#ed1165"
      }} />
        <Avatar size={64} alt="KW" style={{
        background: "#f9f5ff",
        color: "#7f2af3"
      }} />
        <Avatar size={64} alt="KW" style={{
        background: "#fffdea",
        color: "#e28800"
      }} />
        <Avatar size={64} alt="KW" style={{
        background: "#fff2fc",
        color: "#ed1db9"
      }} />
      </div>
    </div>
}`,...(T=(q=g.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var I,_,N;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "四种尺寸",
  render: () => <div style={{
    display: "flex",
    gap: 24,
    alignItems: "center"
  }}>
      <div style={{
      textAlign: "center"
    }}>
        <Avatar size={64} alt="金" style={{
        background: "#f3f5ff",
        color: "#495dff"
      }} />
        <div style={{
        marginTop: 8,
        fontSize: 12,
        color: "#666"
      }}>64px</div>
      </div>
      <div style={{
      textAlign: "center"
    }}>
        <Avatar size={48} alt="金" style={{
        background: "#ebfef7",
        color: "#009d72"
      }} />
        <div style={{
        marginTop: 8,
        fontSize: 12,
        color: "#666"
      }}>48px</div>
      </div>
      <div style={{
      textAlign: "center"
    }}>
        <Avatar size={32} alt="金" style={{
        background: "#fff0f3",
        color: "#ed1165"
      }} />
        <div style={{
        marginTop: 8,
        fontSize: 12,
        color: "#666"
      }}>32px</div>
      </div>
      <div style={{
      textAlign: "center"
    }}>
        <Avatar size={20} alt="金" style={{
        background: "#f9f5ff",
        color: "#7f2af3"
      }} />
        <div style={{
        marginTop: 8,
        fontSize: 12,
        color: "#666"
      }}>20px</div>
      </div>
    </div>
}`,...(N=(_=v.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var W,w,D;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "图片头像",
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center"
  }}>
      <Avatar size={64} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" />
      <Avatar size={48} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" />
      <Avatar size={32} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Carol" />
      <Avatar size={20} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dave" />
    </div>
}`,...(D=(w=m.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var E,G,K;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "加载失败回退",
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center"
  }}>
      <Avatar size={48} src="https://broken-url.example/none.png" alt="张" style={{
      background: "#f3f5ff",
      color: "#495dff"
    }} />
      <Avatar size={48} src="https://broken-url.example/none.png" />
    </div>
}`,...(K=(G=x.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var B,R,V;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "头像集群",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <div>
        <div style={{
        fontSize: 14,
        color: "#666",
        marginBottom: 8
      }}>32px 集群</div>
        <AvatarGroup size={32} max={5}>
          <Avatar alt="金" style={{
          background: "#f3f5ff",
          color: "#495dff"
        }} />
          <Avatar alt="金" style={{
          background: "#fff0f3",
          color: "#ed1165"
        }} />
          <Avatar alt="金" style={{
          background: "#fffdea",
          color: "#e28800"
        }} />
          <Avatar alt="金" style={{
          background: "#ebfef7",
          color: "#009d72"
        }} />
          <Avatar alt="A" style={{
          background: "#f9f5ff",
          color: "#7f2af3"
        }} />
          <Avatar alt="B" style={{
          background: "#fff2fc",
          color: "#ed1db9"
        }} />
          <Avatar alt="C" style={{
          background: "#f3f5ff",
          color: "#495dff"
        }} />
          <Avatar alt="D" style={{
          background: "#ebfef7",
          color: "#009d72"
        }} />
          <Avatar alt="E" style={{
          background: "#fff0f3",
          color: "#ed1165"
        }} />
        </AvatarGroup>
      </div>
      <div>
        <div style={{
        fontSize: 14,
        color: "#666",
        marginBottom: 8
      }}>24px 集群</div>
        <AvatarGroup size={24} max={5}>
          <Avatar alt="金" style={{
          background: "#f3f5ff",
          color: "#495dff"
        }} />
          <Avatar alt="金" style={{
          background: "#fff0f3",
          color: "#ed1165"
        }} />
          <Avatar alt="金" style={{
          background: "#fffdea",
          color: "#e28800"
        }} />
          <Avatar alt="金" style={{
          background: "#ebfef7",
          color: "#009d72"
        }} />
          <Avatar alt="A" style={{
          background: "#f9f5ff",
          color: "#7f2af3"
        }} />
          <Avatar alt="B" style={{
          background: "#fff2fc",
          color: "#ed1db9"
        }} />
          <Avatar alt="C" style={{
          background: "#f3f5ff",
          color: "#495dff"
        }} />
          <Avatar alt="D" style={{
          background: "#ebfef7",
          color: "#009d72"
        }} />
          <Avatar alt="E" style={{
          background: "#fff0f3",
          color: "#ed1165"
        }} />
        </AvatarGroup>
      </div>
    </div>
}`,...(V=(R=y.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var M,Z,F;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "方形头像",
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center"
  }}>
      <Avatar size={48} shape="square" alt="AI" style={{
      background: "#f3f5ff",
      color: "#495dff"
    }} />
      <Avatar size={32} shape="square" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Eve" />
      <Avatar size={32} shape="square" />
    </div>
}`,...(F=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:F.source}}};const ee=["Default","WithText","Sizes","WithImage","Fallback","Group","Square"];export{u as Default,x as Fallback,y as Group,v as Sizes,b as Square,m as WithImage,g as WithText,ee as __namedExportsOrder,Y as default};
