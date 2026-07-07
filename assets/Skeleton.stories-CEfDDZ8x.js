import{j as e}from"./jsx-runtime-BO8uF4Og.js";/* empty css                */import{R as E}from"./index-D4H_InIO.js";import{c as G}from"./index-ukuGrK6K.js";import{a as H}from"./utils-HnQPFlDo.js";const M=G("lg-skeleton",{variants:{variant:{text:"lg-skeleton--text",circle:"lg-skeleton--circle",rect:"lg-skeleton--rect"},animation:{shimmer:"lg-skeleton--shimmer",pulse:"lg-skeleton--pulse",none:""}},defaultVariants:{variant:"text",animation:"shimmer"}}),n=E.forwardRef(({className:t,variant:s="text",animation:S="shimmer",width:o,height:d,borderRadius:c,size:r,style:$,..._},L)=>{const a={...$};r!==void 0&&(a.width=typeof r=="number"?`${r}px`:r,a.height=typeof r=="number"?`${r}px`:r),o!==void 0&&(a.width=typeof o=="number"?`${o}px`:o),d!==void 0&&(a.height=typeof d=="number"?`${d}px`:d),c!==void 0&&(a.borderRadius=typeof c=="number"?`${c}px`:c);const N=S===!1?"none":S;return e.jsx("div",{ref:L,className:H(M({variant:s,animation:N}),t),style:a,"aria-hidden":"true",..._})});n.displayName="Skeleton";n.__docgenInfo={description:`Skeleton 骨架屏组件
在数据加载完成前，通过占位图形展示简单的页面布局。
支持条形(text)、圆形(circle)、方形(rect)三种预设形状，以及 shimmer/pulse 两种动画。`,methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:'"text" | "circle" | "rect"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"circle"'},{name:"literal",value:'"rect"'}]},description:'形状预设，默认 "text"（条形）',defaultValue:{value:'"text"',computed:!1}},animation:{required:!1,tsType:{name:"union",raw:'"shimmer" | "pulse" | false',elements:[{name:"literal",value:'"shimmer"'},{name:"literal",value:'"pulse"'},{name:"literal",value:"false"}]},description:'动画类型，默认 "shimmer"（扫光）；"pulse" 为呼吸闪烁；false 关闭动画',defaultValue:{value:'"shimmer"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"宽度，支持数字(px)或字符串(百分比等)"},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"高度，支持数字(px)或字符串；text 默认 15px，rect 默认 40px"},borderRadius:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"圆角，覆盖 variant 的默认圆角"},size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"circle/rect 的快捷尺寸（同时设置宽高）"}},composes:["HTMLAttributes"]};const U={title:"Components/Skeleton",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circle","rect"]},animation:{control:"select",options:["shimmer","pulse",!1]},width:{control:"text"},height:{control:"text"},size:{control:"text"},borderRadius:{control:"text"}},parameters:{docs:{description:{component:"骨架屏组件，在数据加载完成前通过占位图形展示简单的页面布局。支持条形(text)、圆形(circle)、方形(rect)三种预设形状，以及 shimmer 扫光 / pulse 呼吸两种动画。"}}}},m={args:{variant:"text",animation:"shimmer",width:"100%",height:15}},i=({children:t})=>e.jsx("h3",{style:{fontSize:14,fontWeight:600,margin:"24px 0 12px",color:"rgba(0,0,0,0.82)"},children:t}),l=({children:t,gap:s=12})=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:s,maxWidth:500},children:t}),v=({children:t,gap:s=12})=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:s},children:t}),p={name:"形状预设（Variant）",render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(i,{children:"条形 — text（默认）"}),e.jsxs(l,{children:[e.jsx(n,{}),e.jsx(n,{width:"80%"}),e.jsx(n,{width:"60%"})]}),e.jsx(i,{children:"圆形 — circle"}),e.jsxs(v,{children:[e.jsx(n,{variant:"circle",size:32}),e.jsx(n,{variant:"circle",size:40}),e.jsx(n,{variant:"circle",size:48})]}),e.jsx(i,{children:"方形 — rect"}),e.jsxs(v,{children:[e.jsx(n,{variant:"rect",size:40}),e.jsx(n,{variant:"rect",width:60,height:20}),e.jsx(n,{variant:"rect",width:120,height:36})]})]})},h={name:"动画类型（Animation）",render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(i,{children:"shimmer 扫光（默认）"}),e.jsxs(l,{children:[e.jsx(n,{animation:"shimmer"}),e.jsx(n,{animation:"shimmer",width:"70%"})]}),e.jsx(i,{children:"pulse 呼吸"}),e.jsxs(l,{children:[e.jsx(n,{animation:"pulse"}),e.jsx(n,{animation:"pulse",width:"70%"})]}),e.jsx(i,{children:"无动画"}),e.jsxs(l,{children:[e.jsx(n,{animation:!1}),e.jsx(n,{animation:!1,width:"70%"})]})]})},x={name:"组合示例 — 用户卡片",render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(i,{children:"用户信息卡片骨架"}),e.jsxs("div",{style:{display:"flex",gap:10,padding:16,border:"1px solid rgba(0,0,0,0.06)",borderRadius:16,maxWidth:440},children:[e.jsx(n,{variant:"rect",size:40,borderRadius:8}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[e.jsx(n,{height:15}),e.jsx(n,{height:15})]}),e.jsx(n,{variant:"rect",width:60,height:20})]})]})]})},u={name:"组合示例 — 列表",render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(i,{children:"列表骨架"}),e.jsx(l,{gap:16,children:[1,2,3,4].map(t=>e.jsxs(v,{gap:12,children:[e.jsx(n,{variant:"circle",size:36}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:8},children:[e.jsx(n,{height:14,width:"40%"}),e.jsx(n,{height:12,width:"80%"})]})]},t))})]})},g={name:"组合示例 — KPI 网格",render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(i,{children:"KPI 网格骨架"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12,maxWidth:600},children:[1,2,3,4,5,6].map(t=>e.jsx(n,{variant:"rect",width:"100%",height:72,borderRadius:8},t))})]})};var f,y,j;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "text",
    animation: "shimmer",
    width: "100%",
    height: 15
  }
}`,...(j=(y=m.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var k,w,T;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "形状预设（Variant）",
  render: () => <div style={{
    padding: 24
  }}>
      <SectionTitle>条形 — text（默认）</SectionTitle>
      <Stack>
        <Skeleton />
        <Skeleton width="80%" />
        <Skeleton width="60%" />
      </Stack>

      <SectionTitle>圆形 — circle</SectionTitle>
      <Row>
        <Skeleton variant="circle" size={32} />
        <Skeleton variant="circle" size={40} />
        <Skeleton variant="circle" size={48} />
      </Row>

      <SectionTitle>方形 — rect</SectionTitle>
      <Row>
        <Skeleton variant="rect" size={40} />
        <Skeleton variant="rect" width={60} height={20} />
        <Skeleton variant="rect" width={120} height={36} />
      </Row>
    </div>
}`,...(T=(w=p.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var b,R,C;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "动画类型（Animation）",
  render: () => <div style={{
    padding: 24
  }}>
      <SectionTitle>shimmer 扫光（默认）</SectionTitle>
      <Stack>
        <Skeleton animation="shimmer" />
        <Skeleton animation="shimmer" width="70%" />
      </Stack>

      <SectionTitle>pulse 呼吸</SectionTitle>
      <Stack>
        <Skeleton animation="pulse" />
        <Skeleton animation="pulse" width="70%" />
      </Stack>

      <SectionTitle>无动画</SectionTitle>
      <Stack>
        <Skeleton animation={false} />
        <Skeleton animation={false} width="70%" />
      </Stack>
    </div>
}`,...(C=(R=h.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var z,V,D;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "组合示例 — 用户卡片",
  render: () => <div style={{
    padding: 24
  }}>
      <SectionTitle>用户信息卡片骨架</SectionTitle>
      <div style={{
      display: "flex",
      gap: 10,
      padding: 16,
      border: "1px solid rgba(0,0,0,0.06)",
      borderRadius: 16,
      maxWidth: 440
    }}>
        <Skeleton variant="rect" size={40} borderRadius={8} />
        <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 20
      }}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 10
        }}>
            <Skeleton height={15} />
            <Skeleton height={15} />
          </div>
          <Skeleton variant="rect" width={60} height={20} />
        </div>
      </div>
    </div>
}`,...(D=(V=x.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var q,I,P;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "组合示例 — 列表",
  render: () => <div style={{
    padding: 24
  }}>
      <SectionTitle>列表骨架</SectionTitle>
      <Stack gap={16}>
        {[1, 2, 3, 4].map(key => <Row key={key} gap={12}>
            <Skeleton variant="circle" size={36} />
            <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 8
        }}>
              <Skeleton height={14} width="40%" />
              <Skeleton height={12} width="80%" />
            </div>
          </Row>)}
      </Stack>
    </div>
}`,...(P=(I=u.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var W,A,K;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "组合示例 — KPI 网格",
  render: () => <div style={{
    padding: 24
  }}>
      <SectionTitle>KPI 网格骨架</SectionTitle>
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 12,
      maxWidth: 600
    }}>
        {[1, 2, 3, 4, 5, 6].map(key => <Skeleton key={key} variant="rect" width="100%" height={72} borderRadius={8} />)}
      </div>
    </div>
}`,...(K=(A=g.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};const X=["Playground","Variants","Animations","CompositionCard","CompositionList","CompositionGrid"];export{h as Animations,x as CompositionCard,g as CompositionGrid,u as CompositionList,m as Playground,p as Variants,X as __namedExportsOrder,U as default};
