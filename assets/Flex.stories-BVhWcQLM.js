import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as U}from"./index-D4H_InIO.js";import{a as X}from"./utils-HnQPFlDo.js";const Y=["small","medium","large"],Z=r=>typeof r=="string"&&Y.includes(r),s=U.forwardRef(({className:r,vertical:t,orientation:H="horizontal",wrap:u,justify:I,align:V,flex:A,gap:o,component:N="div",style:J,children:L,...M},O)=>{const $=t??H==="vertical",D=typeof u=="boolean"?u?"wrap":"nowrap":u,x=Z(o),K=X("lg-flex",$?"lg-flex--vertical":"lg-flex--horizontal",x&&`lg-flex--gap-${o}`,r),Q={justifyContent:I,alignItems:V,flexWrap:D,flex:A,gap:!x&&o!=null?o:void 0,...J};return e.jsx(N,{ref:O,className:K,style:Q,...M,children:L})});s.displayName="Flex";s.__docgenInfo={description:`Flex 弹性布局组件
默认水平方向、主轴起点对齐；可通过属性调整方向、对齐、换行与间隙`,methods:[],displayName:"Flex",props:{vertical:{required:!1,tsType:{name:"boolean"},description:"flex 主轴的方向是否垂直（等价 flex-direction: column），默认 false"},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:'主轴方向类型，默认 "horizontal"；与 vertical 同时存在时以 vertical 优先',defaultValue:{value:'"horizontal"',computed:!1}},wrap:{required:!1,tsType:{name:"union",raw:'CSSProperties["flexWrap"] | boolean',elements:[{name:'CSSProperties["flexWrap"]',raw:'CSSProperties["flexWrap"]'},{name:"boolean"}]},description:"设置元素单行显示还是多行显示，默认 nowrap"},justify:{required:!1,tsType:{name:'CSSProperties["justifyContent"]',raw:'CSSProperties["justifyContent"]'},description:"设置元素在主轴方向上的对齐方式"},align:{required:!1,tsType:{name:'CSSProperties["alignItems"]',raw:'CSSProperties["alignItems"]'},description:"设置元素在交叉轴方向上的对齐方式"},flex:{required:!1,tsType:{name:'CSSProperties["flex"]',raw:'CSSProperties["flex"]'},description:"flex CSS 简写属性"},gap:{required:!1,tsType:{name:"union",raw:"FlexGapSize | string | number",elements:[{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},{name:"string"},{name:"number"}]},description:"设置网格之间的间隙，支持预设尺寸或自定义数值/字符串"},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:'自定义元素类型，默认 "div"',defaultValue:{value:'"div"',computed:!1}}},composes:["HTMLAttributes"]};const se={title:"Components/Flex",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{vertical:{control:"boolean"},orientation:{control:"select",options:["horizontal","vertical"]},wrap:{control:"select",options:[!0,!1,"nowrap","wrap","wrap-reverse"]},justify:{control:"select",options:["flex-start","center","flex-end","space-between","space-around","space-evenly"]},align:{control:"select",options:["flex-start","center","flex-end","stretch","baseline"]},gap:{control:"select",options:["small","medium","large",4,24,40]}}},a=({children:r})=>e.jsx("div",{style:{minWidth:56,height:56,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",borderRadius:6,background:"var(--lg-g-bg-color-primary-emphasis)"},children:r}),n={padding:8,border:"1px dashed var(--lg-g-border-color-emphasis)",borderRadius:8},l={args:{gap:"medium",justify:"flex-start",align:"center"},render:r=>e.jsxs(s,{...r,style:{width:360,minHeight:80,...n,...r.style},children:[e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"})]})},i={render:()=>e.jsxs(s,{gap:"medium",align:"center",style:{width:420,...n},children:[e.jsx("div",{style:{width:80,height:40,borderRadius:6,background:"var(--lg-g-bg-color-primary-emphasis)"}}),e.jsx("div",{style:{width:120,height:56,borderRadius:6,background:"var(--lg-g-bg-color-primary-emphasis)"}}),e.jsx("div",{style:{flex:1,height:32,borderRadius:6,background:"var(--lg-g-bg-color-primary-emphasis)"}})]})},d={render:()=>e.jsxs(s,{vertical:!0,gap:"medium",style:{width:280,...n},children:[e.jsx("div",{style:{height:36,borderRadius:6,background:"var(--lg-g-bg-color-primary-emphasis)"}}),e.jsx("div",{style:{height:48,borderRadius:6,background:"var(--lg-g-bg-color-primary-emphasis)"}}),e.jsx("div",{style:{height:28,borderRadius:6,background:"var(--lg-g-bg-color-primary-emphasis)"}})]})},c={render:()=>e.jsx(s,{vertical:!0,gap:"large",children:["small","medium","large"].map(r=>e.jsxs("div",{children:[e.jsxs("span",{style:{fontSize:12,color:"#666",marginBottom:8,display:"block"},children:["gap=",r]}),e.jsxs(s,{gap:r,style:n,children:[e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{})]})]},r))})},p={render:()=>e.jsx(s,{vertical:!0,gap:"medium",children:["flex-start","center","flex-end","space-between","space-around"].map(r=>e.jsxs(s,{justify:r,gap:"small",style:{width:360,...n},children:[e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"})]},r))})},m={render:()=>e.jsx(s,{wrap:!0,gap:"small",style:{width:260,...n},children:Array.from({length:8}).map((r,t)=>e.jsx(a,{children:t+1},t))})},g={render:()=>e.jsxs(s,{gap:40,style:n,children:[e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"})]})};var h,y,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    gap: "medium",
    justify: "flex-start",
    align: "center"
  },
  render: args => <Flex {...args} style={{
    width: 360,
    minHeight: 80,
    ...outline,
    ...args.style
  }}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </Flex>
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,b,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" align="center" style={{
    width: 420,
    ...outline
  }}>
      <div style={{
      width: 80,
      height: 40,
      borderRadius: 6,
      background: "var(--lg-g-bg-color-primary-emphasis)"
    }} />
      <div style={{
      width: 120,
      height: 56,
      borderRadius: 6,
      background: "var(--lg-g-bg-color-primary-emphasis)"
    }} />
      <div style={{
      flex: 1,
      height: 32,
      borderRadius: 6,
      background: "var(--lg-g-bg-color-primary-emphasis)"
    }} />
    </Flex>
}`,...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,S,B;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Flex vertical gap="medium" style={{
    width: 280,
    ...outline
  }}>
      <div style={{
      height: 36,
      borderRadius: 6,
      background: "var(--lg-g-bg-color-primary-emphasis)"
    }} />
      <div style={{
      height: 48,
      borderRadius: 6,
      background: "var(--lg-g-bg-color-primary-emphasis)"
    }} />
      <div style={{
      height: 28,
      borderRadius: 6,
      background: "var(--lg-g-bg-color-primary-emphasis)"
    }} />
    </Flex>
}`,...(B=(S=d.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var F,R,k;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Flex vertical gap="large">
      {(["small", "medium", "large"] as const).map(g => <div key={g}>
          <span style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8,
        display: "block"
      }}>
            gap={g}
          </span>
          <Flex gap={g} style={outline}>
            <Box />
            <Box />
            <Box />
          </Flex>
        </div>)}
    </Flex>
}`,...(k=(R=c.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var C,P,T;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Flex vertical gap="medium">
      {(["flex-start", "center", "flex-end", "space-between", "space-around"] as const).map(j => <Flex key={j} justify={j} gap="small" style={{
      width: 360,
      ...outline
    }}>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </Flex>)}
    </Flex>
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var z,q,G;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex wrap gap="small" style={{
    width: 260,
    ...outline
  }}>
      {Array.from({
      length: 8
    }).map((_, i) => <Box key={i}>{i + 1}</Box>)}
    </Flex>
}`,...(G=(q=m.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var W,_,E;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Flex gap={40} style={outline}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </Flex>
}`,...(E=(_=g.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ne=["Playground","Horizontal","Vertical","GapPresets","Justify","Wrap","CustomGap"];export{g as CustomGap,c as GapPresets,i as Horizontal,p as Justify,l as Playground,d as Vertical,m as Wrap,ne as __namedExportsOrder,se as default};
