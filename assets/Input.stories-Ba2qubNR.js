import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as z}from"./index-D4H_InIO.js";import{I as n}from"./index-D84BHsss.js";import{S as l}from"./Search-D07MehvK.js";import{_ as Q,e as U,a as r,b as X,c as Y}from"./utils-YwZfuvH0-DLWngkAW.js";import"./utils-HnQPFlDo.js";import"./index-DhX95gbj.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./XLg-Buk6fdo7.js";import"./XCircleFill-C1lg6Dm5.js";var ee=["size","color","fill","rotate","spin","className","style"],g=z.forwardRef((s,t)=>{var a,j=s.size,V=j===void 0?"1em":j,k=s.color,x=s.fill,v=s.rotate,h=s.spin,q=s.className,G=s.style,J=Q(s,ee);return h&&U(),e.jsx("svg",r(r({ref:t,width:V,height:V,viewBox:"0 0 24 24",fill:(a=x??k)!==null&&a!==void 0?a:"currentColor",className:Y("lingee-icon",h&&"lingee-icon-spin",q),style:r(r({},X),{},{transform:v?"rotate(".concat(v,"deg)"):void 0,animation:h?"lingee-icon-spin 1s linear infinite":void 0},G),xmlns:"http://www.w3.org/2000/svg","data-icon":"Calendar2Date"},J),{},{children:e.jsx("path",{d:"M6.82715 15.6299C7.23581 15.2584 7.86873 15.2886 8.24023 15.6973C8.37234 15.8425 8.59815 16 9 16C9.16031 16 9.30079 15.9559 9.375 15.9004C9.40382 15.8788 9.42734 15.8524 9.44727 15.8105C9.46817 15.7666 9.5 15.6732 9.5 15.5C9.5 15.1763 9.39248 15.0243 9.27539 14.9307C9.1283 14.813 8.84759 14.7003 8.40039 14.7002C8.01859 14.7002 7.66982 14.4825 7.50195 14.1396C7.33416 13.7966 7.37591 13.3874 7.61035 13.0859L8.45508 12H7.5C6.94772 12 6.5 11.5523 6.5 11C6.5 10.4477 6.94772 10 7.5 10H10.5C10.8819 10 11.2306 10.2175 11.3984 10.5605C11.5662 10.9036 11.5235 11.3128 11.2891 11.6143L10.126 13.1084C10.2643 13.1842 10.3988 13.2687 10.5244 13.3691C11.1573 13.8755 11.5 14.6237 11.5 15.5C11.5 16.3855 11.1494 17.0693 10.5752 17.5C10.0494 17.8944 9.43956 18 9 18C7.97336 18 7.22768 17.5577 6.75977 17.043C6.38826 16.6343 6.4185 16.0014 6.82715 15.6299ZM15.5 12.5C15.5 12.2239 15.2761 12 15 12C14.7239 12 14.5 12.2239 14.5 12.5V15.5C14.5 15.7761 14.7239 16 15 16C15.2761 16 15.5 15.7761 15.5 15.5V12.5ZM16 7V6H8V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V6H5C3.89543 6 3 6.89543 3 8V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V8C21 6.89543 20.1046 6 19 6H18V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7ZM17.5 15.5C17.5 16.8807 16.3807 18 15 18C13.6193 18 12.5 16.8807 12.5 15.5V12.5C12.5 11.1193 13.6193 10 15 10C16.3807 10 17.5 11.1193 17.5 12.5V15.5ZM23 18C23 20.2091 21.2091 22 19 22H5C2.79086 22 1 20.2091 1 18V8C1 5.79086 2.79086 4 5 4H6V3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4H19C21.2091 4 23 5.79086 23 8V18Z"})}))});g.displayName="Calendar2Date";g.__docgenInfo={description:"",methods:[],displayName:"Calendar2Date"};const ce={title:"Components/Input",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},shape:{control:"select",options:["default","round"]},disabled:{control:"boolean"},error:{control:"boolean"},allowClear:{control:"boolean"}}},o={args:{},decorators:[s=>e.jsx("div",{style:{width:260},children:e.jsx(s,{})})]},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:260},children:[e.jsx(n,{size:"sm",placeholder:"Small 输入框"}),e.jsx(n,{size:"md",placeholder:"Medium 输入框"}),e.jsx(n,{size:"lg",placeholder:"Large 页面级输入框"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:260},children:[e.jsx(n,{size:"sm",shape:"round",placeholder:"搜索",suffix:e.jsx(l,{})}),e.jsx(n,{size:"md",shape:"round",placeholder:"搜索项目",suffix:e.jsx(l,{})})]})},u={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px 32px",width:560},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#999",marginBottom:8},children:"默认态"}),e.jsx(n,{defaultValue:"财务报告分析"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#999",marginBottom:8},children:"悬停态"}),e.jsx(n,{defaultValue:"财务报告分析"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#999",marginBottom:8},children:"输入态（聚焦）"}),e.jsx(n,{defaultValue:"财务报告分析",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#999",marginBottom:8},children:"禁用态"}),e.jsx(n,{defaultValue:"财务报告分析",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#999",marginBottom:8},children:"错误态"}),e.jsx(n,{defaultValue:"！@",error:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#999",marginBottom:8},children:"带清空按钮"}),e.jsx(n,{defaultValue:"财务报告分析",allowClear:!0})]})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:260},children:[e.jsx(n,{placeholder:"搜索",suffix:e.jsx(l,{}),shape:"round",allowClear:!0}),e.jsx(n,{placeholder:"年/月/日 ～ 年/月/日",suffix:e.jsx(g,{}),allowClear:!0})]})},c={render:()=>{const[s,t]=z.useState("可清空的内容");return e.jsxs("div",{style:{width:260},children:[e.jsx(n,{value:s,onChange:a=>t(a.target.value),allowClear:!0,placeholder:"输入后可清空"}),e.jsxs("p",{style:{fontSize:12,color:"#666",marginTop:8},children:["当前值：",s||"(空)"]})]})}},m={render:()=>{const[s,t]=z.useState("");return e.jsxs("div",{style:{width:260},children:[e.jsx(n,{value:s,onChange:a=>t(a.target.value),placeholder:"受控输入框"}),e.jsxs("p",{style:{fontSize:12,color:"#666",marginTop:8},children:["字数：",s.length]})]})}},f={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px repeat(5, 1fr)",gap:"12px 16px",alignItems:"start",width:900},children:[e.jsx("span",{}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"默认"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"聚焦"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"错误"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"禁用"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"带清空"}),e.jsx("span",{style:{fontSize:13,lineHeight:"32px"},children:"Small"}),e.jsx(n,{size:"sm",defaultValue:"搜索内容"}),e.jsx(n,{size:"sm",defaultValue:"搜索内容",autoFocus:!0}),e.jsx(n,{size:"sm",defaultValue:"！@",error:!0}),e.jsx(n,{size:"sm",defaultValue:"搜索内容",disabled:!0}),e.jsx(n,{size:"sm",defaultValue:"搜索内容",allowClear:!0}),e.jsx("span",{style:{fontSize:13,lineHeight:"40px"},children:"Medium"}),e.jsx(n,{size:"md",defaultValue:"财务报告分析"}),e.jsx(n,{size:"md",defaultValue:"财务报告分析"}),e.jsx(n,{size:"md",defaultValue:"！@",error:!0}),e.jsx(n,{size:"md",defaultValue:"财务报告分析",disabled:!0}),e.jsx(n,{size:"md",defaultValue:"财务报告分析",allowClear:!0}),e.jsx("span",{style:{fontSize:13,lineHeight:"48px"},children:"Large"}),e.jsx(n,{size:"lg",defaultValue:"https://example.com"}),e.jsx(n,{size:"lg",defaultValue:"https://example.com"}),e.jsx(n,{size:"lg",defaultValue:"！@",error:!0}),e.jsx(n,{size:"lg",defaultValue:"https://example.com",disabled:!0}),e.jsx(n,{size:"lg",defaultValue:"https://example.com",allowClear:!0}),e.jsx("span",{style:{fontSize:13,lineHeight:"32px"},children:"Round-sm"}),e.jsx(n,{size:"sm",shape:"round",defaultValue:"搜索",suffix:e.jsx(l,{})}),e.jsx(n,{size:"sm",shape:"round",defaultValue:"搜索",suffix:e.jsx(l,{})}),e.jsx(n,{size:"sm",shape:"round",defaultValue:"！@",error:!0}),e.jsx(n,{size:"sm",shape:"round",defaultValue:"搜索",disabled:!0}),e.jsx(n,{size:"sm",shape:"round",defaultValue:"搜索",allowClear:!0}),e.jsx("span",{style:{fontSize:13,lineHeight:"40px"},children:"Round-md"}),e.jsx(n,{size:"md",shape:"round",defaultValue:"搜索项目",suffix:e.jsx(l,{})}),e.jsx(n,{size:"md",shape:"round",defaultValue:"搜索项目",suffix:e.jsx(l,{})}),e.jsx(n,{size:"md",shape:"round",defaultValue:"！@",error:!0}),e.jsx(n,{size:"md",shape:"round",defaultValue:"搜索项目",disabled:!0}),e.jsx(n,{size:"md",shape:"round",defaultValue:"搜索项目",allowClear:!0})]})};var C,y,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <div style={{
    width: 260
  }}><Story /></div>]
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var I,w,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: 260
  }}>
      <Input size="sm" placeholder="Small 输入框" />
      <Input size="md" placeholder="Medium 输入框" />
      <Input size="lg" placeholder="Large 页面级输入框" />
    </div>
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var H,B,D;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: 260
  }}>
      <Input size="sm" shape="round" placeholder="搜索" suffix={<Search />} />
      <Input size="md" shape="round" placeholder="搜索项目" suffix={<Search />} />
    </div>
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var M,R,T;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px 32px",
    width: 560
  }}>
      <div>
        <div style={{
        fontSize: 12,
        color: "#999",
        marginBottom: 8
      }}>默认态</div>
        <Input defaultValue="财务报告分析" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: "#999",
        marginBottom: 8
      }}>悬停态</div>
        <Input defaultValue="财务报告分析" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: "#999",
        marginBottom: 8
      }}>输入态（聚焦）</div>
        <Input defaultValue="财务报告分析" autoFocus />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: "#999",
        marginBottom: 8
      }}>禁用态</div>
        <Input defaultValue="财务报告分析" disabled />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: "#999",
        marginBottom: 8
      }}>错误态</div>
        <Input defaultValue="！@" error />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: "#999",
        marginBottom: 8
      }}>带清空按钮</div>
        <Input defaultValue="财务报告分析" allowClear />
      </div>
    </div>
}`,...(T=(R=u.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var L,N,Z;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: 260
  }}>
      <Input placeholder="搜索" suffix={<Search />} shape="round" allowClear />
      <Input placeholder="年/月/日 ～ 年/月/日" suffix={<Calendar2Date />} allowClear />
    </div>
}`,...(Z=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Z.source}}};var A,F,E;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("可清空的内容");
    return <div style={{
      width: 260
    }}>
        <Input value={value} onChange={e => setValue(e.target.value)} allowClear placeholder="输入后可清空" />
        <p style={{
        fontSize: 12,
        color: "#666",
        marginTop: 8
      }}>
          当前值：{value || "(空)"}
        </p>
      </div>;
  }
}`,...(E=(F=c.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var W,_,K;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <div style={{
      width: 260
    }}>
        <Input value={value} onChange={e => setValue(e.target.value)} placeholder="受控输入框" />
        <p style={{
        fontSize: 12,
        color: "#666",
        marginTop: 8
      }}>
          字数：{value.length}
        </p>
      </div>;
  }
}`,...(K=(_=m.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var O,P,$;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "80px repeat(5, 1fr)",
    gap: "12px 16px",
    alignItems: "start",
    width: 900
  }}>
      {/* 表头 */}
      <span />
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>默认</span>
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>聚焦</span>
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>错误</span>
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>禁用</span>
      <span style={{
      fontSize: 12,
      color: "#666"
    }}>带清空</span>

      {/* Small */}
      <span style={{
      fontSize: 13,
      lineHeight: "32px"
    }}>Small</span>
      <Input size="sm" defaultValue="搜索内容" />
      <Input size="sm" defaultValue="搜索内容" autoFocus />
      <Input size="sm" defaultValue="！@" error />
      <Input size="sm" defaultValue="搜索内容" disabled />
      <Input size="sm" defaultValue="搜索内容" allowClear />

      {/* Medium */}
      <span style={{
      fontSize: 13,
      lineHeight: "40px"
    }}>Medium</span>
      <Input size="md" defaultValue="财务报告分析" />
      <Input size="md" defaultValue="财务报告分析" />
      <Input size="md" defaultValue="！@" error />
      <Input size="md" defaultValue="财务报告分析" disabled />
      <Input size="md" defaultValue="财务报告分析" allowClear />

      {/* Large */}
      <span style={{
      fontSize: 13,
      lineHeight: "48px"
    }}>Large</span>
      <Input size="lg" defaultValue="https://example.com" />
      <Input size="lg" defaultValue="https://example.com" />
      <Input size="lg" defaultValue="！@" error />
      <Input size="lg" defaultValue="https://example.com" disabled />
      <Input size="lg" defaultValue="https://example.com" allowClear />

      {/* Round */}
      <span style={{
      fontSize: 13,
      lineHeight: "32px"
    }}>Round-sm</span>
      <Input size="sm" shape="round" defaultValue="搜索" suffix={<Search />} />
      <Input size="sm" shape="round" defaultValue="搜索" suffix={<Search />} />
      <Input size="sm" shape="round" defaultValue="！@" error />
      <Input size="sm" shape="round" defaultValue="搜索" disabled />
      <Input size="sm" shape="round" defaultValue="搜索" allowClear />

      <span style={{
      fontSize: 13,
      lineHeight: "40px"
    }}>Round-md</span>
      <Input size="md" shape="round" defaultValue="搜索项目" suffix={<Search />} />
      <Input size="md" shape="round" defaultValue="搜索项目" suffix={<Search />} />
      <Input size="md" shape="round" defaultValue="！@" error />
      <Input size="md" shape="round" defaultValue="搜索项目" disabled />
      <Input size="md" shape="round" defaultValue="搜索项目" allowClear />
    </div>
}`,...($=(P=f.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};const me=["Default","Sizes","RoundShape","States","WithIcons","AllowClear","Controlled","AllVariants"];export{f as AllVariants,c as AllowClear,m as Controlled,o as Default,d as RoundShape,i as Sizes,u as States,p as WithIcons,me as __namedExportsOrder,ce as default};
