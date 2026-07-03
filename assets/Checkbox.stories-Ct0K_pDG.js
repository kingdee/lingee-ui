import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as m,R as h}from"./index-D4H_InIO.js";import{a as I}from"./utils-HnQPFlDo.js";import{C as le}from"./Check-KywOgGzp.js";import{_ as te,e as re,a as S,b as ce,c as ie}from"./utils-YwZfuvH0-DLWngkAW.js";var oe=["size","color","fill","rotate","spin","className","style"],O=m.forwardRef((a,c)=>{var s,t=a.size,d=t===void 0?"1em":t,b=a.color,u=a.fill,x=a.rotate,i=a.spin,g=a.className,r=a.style,C=te(a,oe);return i&&re(),e.jsx("svg",S(S({ref:c,width:d,height:d,viewBox:"0 0 26 26",fill:(s=u??b)!==null&&s!==void 0?s:"currentColor",className:ie("lingee-icon",i&&"lingee-icon-spin",g),style:S(S({},ce),{},{transform:x?"rotate(".concat(x,"deg)"):void 0,animation:i?"lingee-icon-spin 1s linear infinite":void 0},r),xmlns:"http://www.w3.org/2000/svg","data-icon":"DashLg1"},C),{},{children:e.jsx("path",{d:"M20.7143 12C21.4244 12 22 12.4477 22 13C22 13.5523 21.4244 14 20.7143 14H5.28571C4.57563 14 4 13.5523 4 13C4 12.4477 4.57563 12 5.28571 12H20.7143Z"})}))});O.displayName="DashLg1";O.__docgenInfo={description:"",methods:[],displayName:"DashLg1"};const ne=h.createContext(null);function de(){return h.useContext(ne)}const n=h.forwardRef(({checked:a,defaultChecked:c=!1,indeterminate:s=!1,onChange:t,disabled:d=!1,size:b,className:u,style:x,children:i,name:g,value:r},C)=>{const l=de(),o=m.useRef(null),k=C||o,f=l!==null,p=a!==void 0||f,[y,R]=h.useState(c),j=f?l.value.includes(r||""):p?a:y,G=d||((l==null?void 0:l.disabled)??!1),ae=b||(l==null?void 0:l.size)||"md";m.useEffect(()=>{const z=k.current;z&&(z.indeterminate=s)},[s,k]);const se=m.useCallback(z=>{const D=z.target.checked;f?l.toggle(r||""):(p||R(D),t==null||t(D))},[f,p,l,r,t]);return e.jsxs("label",{className:I("lg-checkbox",`lg-checkbox--${ae}`,G&&"lg-checkbox--disabled",u),style:x,children:[e.jsx("input",{ref:k,type:"checkbox",className:"lg-checkbox__input",checked:j,disabled:G,name:g,value:r,onChange:se,"aria-checked":s?"mixed":j}),e.jsxs("span",{className:I("lg-checkbox__control",j&&!s&&"lg-checkbox__control--checked",s&&"lg-checkbox__control--indeterminate",G&&"lg-checkbox__control--disabled"),children:[j&&!s&&e.jsx(le,{className:"lg-checkbox__icon",size:"1em"}),s&&e.jsx(O,{className:"lg-checkbox__icon",size:"1em"})]}),i&&e.jsx("span",{className:"lg-checkbox__label",children:i})]})});n.displayName="Checkbox";const v=h.forwardRef(({value:a,defaultValue:c=[],onChange:s,disabled:t=!1,size:d="md",orientation:b="vertical",className:u,style:x,children:i},g)=>{const r=a!==void 0,[C,l]=h.useState(c),o=r?a:C,k=m.useCallback(p=>{const y=o.includes(p)?o.filter(R=>R!==p):[...o,p];r||l(y),s==null||s(y)},[o,r,s]),f=h.useMemo(()=>({size:d,disabled:t,value:o,toggle:k}),[d,t,o,k]);return e.jsx("div",{ref:g,role:"group",className:I("lg-checkbox-group",`lg-checkbox-group--${b}`,u),style:x,children:e.jsx(ne.Provider,{value:f,children:i})})});v.displayName="CheckboxGroup";n.__docgenInfo={description:`Checkbox 复选框组件
支持受控/非受控、半选态、禁用、尺寸变体，可独立使用或配合 CheckboxGroup`,methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:"选中状态（受控）"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"默认选中状态（非受控）",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"半选（不确定）状态",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"选中变更回调"},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:'尺寸，默认 "md"'},className:{required:!1,tsType:{name:"string"},description:"额外 className"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义行内样式"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子元素（label 内容）"},name:{required:!1,tsType:{name:"string"},description:"原生 name 属性"},value:{required:!1,tsType:{name:"string"},description:"原生 value 属性"}}};v.__docgenInfo={description:`CheckboxGroup 复选框组
管理多个 Checkbox 的选中状态`,methods:[],displayName:"CheckboxGroup",props:{value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"当前选中值数组（受控）"},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"默认选中值数组（非受控）",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"选中值变更回调"},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用整组",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:'尺寸，默认 "md"',defaultValue:{value:'"md"',computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:'排列方向，默认 "vertical"',defaultValue:{value:'"vertical"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"额外 className"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义行内样式"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子元素"}}};const ke={title:"Components/Checkbox",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"}}},N={args:{children:"Option",size:"md"}},T={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 120px)",gap:"16px 32px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:12,color:"#666"},children:"未选中"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"选中"}),e.jsx("span",{style:{fontSize:12,color:"#666"},children:"半选"}),e.jsx(n,{children:"Option"}),e.jsx(n,{checked:!0,children:"Option"}),e.jsx(n,{checked:!0,indeterminate:!0,children:"Option"}),e.jsx(n,{disabled:!0,children:"Option"}),e.jsx(n,{checked:!0,disabled:!0,children:"Option"}),e.jsx(n,{checked:!0,indeterminate:!0,disabled:!0,children:"Option"})]})},_={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(n,{size:"sm",defaultChecked:!0,children:"Small"}),e.jsx(n,{size:"md",defaultChecked:!0,children:"Medium"}),e.jsx(n,{size:"lg",defaultChecked:!0,children:"Large"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(n,{size:"sm",checked:!0,indeterminate:!0,children:"Small"}),e.jsx(n,{size:"md",checked:!0,indeterminate:!0,children:"Medium"}),e.jsx(n,{size:"lg",checked:!0,indeterminate:!0,children:"Large"})]})]})},q={render:()=>{const[a,c]=m.useState(!1);return e.jsx("div",{style:{display:"flex",alignItems:"center",gap:12},children:e.jsx(n,{checked:a,onChange:c,children:a?"已选中":"未选中"})})}},w={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(n,{defaultChecked:!0}),e.jsx(n,{checked:!0,indeterminate:!0}),e.jsx(n,{})]})},V={render:()=>{const[a,c]=m.useState(["apple"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",margin:"0 0 8px"},children:"垂直排列"}),e.jsxs(v,{value:a,onChange:c,children:[e.jsx(n,{value:"apple",children:"苹果"}),e.jsx(n,{value:"banana",children:"香蕉"}),e.jsx(n,{value:"orange",children:"橙子"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",margin:"0 0 8px"},children:"水平排列"}),e.jsxs(v,{defaultValue:["a","c"],orientation:"horizontal",children:[e.jsx(n,{value:"a",children:"选项 A"}),e.jsx(n,{value:"b",children:"选项 B"}),e.jsx(n,{value:"c",children:"选项 C"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",margin:"0 0 8px"},children:"整组禁用"}),e.jsxs(v,{defaultValue:["x"],disabled:!0,children:[e.jsx(n,{value:"x",children:"选项 X"}),e.jsx(n,{value:"y",children:"选项 Y"})]})]})]})}};var L,A,M;N.parameters={...N.parameters,docs:{...(L=N.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: "Option",
    size: "md"
  }
}`,...(M=(A=N.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var E,P,B;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(B=(P=T.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var W,$,H;_.parameters={..._.parameters,docs:{...(W=_.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(H=($=_.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var X,Y,K;q.parameters={...q.parameters,docs:{...(X=q.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=(Y=q.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var Z,F,J;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 16
  }}>
      <Checkbox defaultChecked />
      <Checkbox checked indeterminate />
      <Checkbox />
    </div>
}`,...(J=(F=w.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var Q,U,ee;V.parameters={...V.parameters,docs:{...(Q=V.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(U=V.parameters)==null?void 0:U.docs)==null?void 0:ee.source}}};const fe=["Playground","AllStates","Sizes","Controlled","WithoutLabel","Group"];export{T as AllStates,q as Controlled,V as Group,N as Playground,_ as Sizes,w as WithoutLabel,fe as __namedExportsOrder,ke as default};
