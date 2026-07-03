import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as xe,r as c}from"./index-D4H_InIO.js";import{a as V}from"./utils-HnQPFlDo.js";import{D as ye,a as ze,b as Ce,g as je}from"./index-CAI4R3aM.js";import{C as F}from"./ChevronLeft-DCbpohEO.js";import{C as $}from"./ChevronRight-CtQYtb-_.js";import{C as Te}from"./ChevronDown-aUW7Z15R.js";import"./index-Bf0C100M.js";import"./index-CJMDPjkl.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-roZDV17k.js";import"./index-CNPoBS2Q.js";import"./Combination-bIa9HupK.js";import"./Check-KywOgGzp.js";import"./utils-YwZfuvH0-DLWngkAW.js";const _e=[10,20,50,100];function Ne(t){const[n,i]=c.useState("full");return c.useEffect(()=>{const g=t.current;if(!g)return;const p=new ResizeObserver(a=>{for(const o of a){const w=o.contentRect.width;w>=780?i("full"):w>=520?i("medium"):i("compact")}});return p.observe(g),()=>p.disconnect()},[t]),n}function ke(t,n,i){if(!n||!isFinite(n)||n<=0)return[1];if(n<=5)return Array.from({length:n},(l,d)=>d+1);if(i==="compact"){if(t===1)return[1,"ellipsis",n];if(t===n)return[1,"ellipsis",n];const l=[];return t>2?l.push(1,"ellipsis"):l.push(1),l.push(t),t<n-1?l.push("ellipsis",n):l.push(n),l}if(i==="medium"){const d=Math.max(t-1,1),m=Math.min(t+1,n),z=d>2,b=m<n-1,f=[];if(z){f.push(1,"ellipsis");for(let u=d;u<=m;u++)f.push(u)}else for(let u=1;u<=Math.min(m,n);u++)f.push(u);if(b)f.push("ellipsis",n);else for(let u=Math.max(m+1,1);u<=n;u++)f.push(u);return f}const g=2;if(n<=7)return Array.from({length:n},(l,d)=>d+1);const p=Math.max(t-g,1),a=Math.min(t+g,n),o=p>2,w=a<n-1;return!o&&w?[...Array.from({length:5},(d,m)=>m+1),"ellipsis",n]:o&&!w?[1,"ellipsis",...Array.from({length:5},(d,m)=>n-4+m)]:[1,"ellipsis",...Array.from({length:a-p+1},(l,d)=>p+d),"ellipsis",n]}const v=xe.forwardRef(({align:t="end",current:n,defaultCurrent:i=1,pageSize:g,defaultPageSize:p=20,total:a,disabled:o=!1,hideOnSinglePage:w=!1,pageSizeOptions:E=_e,showQuickJumper:l=!1,showSizeChanger:d=!1,showTotal:m,variant:z="bordered",onChange:b,onPageSizeChange:f,className:u,style:A},j)=>{const Q=c.useRef(null),I=r=>{Q.current=r,typeof j=="function"?j(r):j&&(j.current=r)},me=Ne(Q),C=n!==void 0,[ge,L]=c.useState(i),s=C?n:ge,B=g!==void 0,[fe,he]=c.useState(p),S=B?g:fe,x=c.useMemo(()=>!a||!S||S<=0?1:Math.max(1,Math.ceil(a/S)),[a,S]),[D,J]=c.useState("");if(w&&x<=1)return null;const y=c.useCallback(r=>{const h=Math.max(1,Math.min(r,x));C||L(h),b==null||b(h,S)},[x,C,b,S]),be=c.useCallback(r=>{B||he(r);const h=Math.max(1,Math.ceil(a/r)),P=Math.min(s,h);C||L(P),f==null||f(P,r),b==null||b(P,r)},[B,C,a,s,f,b]),Se=r=>{if(r.key==="Enter"){const h=parseInt(D,10);isNaN(h)||y(h),J("")}},ve=()=>{const r=parseInt(D,10);isNaN(r)||y(r),J("")},O=()=>{if(!m)return null;if(typeof m=="function"){const r=(s-1)*S+1,h=Math.min(s*S,a);return e.jsx("span",{className:"lg-pagination__total",children:m(a,[r,h])})}return e.jsxs("span",{className:"lg-pagination__total",children:["共 ",a.toLocaleString()," 条"]})};if(z==="simple")return e.jsxs("nav",{ref:I,role:"navigation","aria-label":"pagination",className:V("lg-pagination","lg-pagination--simple",`lg-pagination--align-${t}`,o&&"lg-pagination--disabled",u),style:A,children:[O(),e.jsxs("div",{className:"lg-pagination__simple-nav",children:[e.jsx("button",{type:"button",className:"lg-pagination__nav-btn",disabled:o||s<=1,onClick:()=>y(s-1),"aria-label":"上一页",children:e.jsx(F,{size:16})}),e.jsxs("span",{className:"lg-pagination__simple-text",children:[s,"/",x]}),e.jsx("button",{type:"button",className:"lg-pagination__nav-btn",disabled:o||s>=x,onClick:()=>y(s+1),"aria-label":"下一页",children:e.jsx($,{size:16})})]})]});const we=ke(s,x,me);return e.jsxs("nav",{ref:I,role:"navigation","aria-label":"pagination",className:V("lg-pagination",`lg-pagination--${z}`,`lg-pagination--align-${t}`,o&&"lg-pagination--disabled",u),style:A,children:[O(),e.jsx("button",{type:"button",className:"lg-pagination__nav-btn",disabled:o||s<=1,onClick:()=>y(s-1),"aria-label":"上一页",children:e.jsx(F,{size:z==="borderless"?16:14})}),e.jsx("ul",{className:"lg-pagination__list",children:we.map((r,h)=>r==="ellipsis"?e.jsx("li",{className:"lg-pagination__ellipsis",children:"…"},`ellipsis-${h}`):e.jsx("li",{children:e.jsx("button",{type:"button",className:V("lg-pagination__item",r===s&&"lg-pagination__item--active"),disabled:o,"aria-current":r===s?"page":void 0,onClick:()=>y(r),children:r})},r))}),e.jsx("button",{type:"button",className:"lg-pagination__nav-btn",disabled:o||s>=x,onClick:()=>y(s+1),"aria-label":"下一页",children:e.jsx($,{size:z==="borderless"?16:14})}),d&&e.jsxs(ye,{children:[e.jsx(ze,{children:e.jsxs("button",{type:"button",className:"lg-pagination__size-btn",disabled:o,children:[e.jsxs("span",{children:[S,"条/页"]}),e.jsx(Te,{size:12})]})}),e.jsx(Ce,{children:E.map(r=>e.jsxs(je,{selected:r===S,onSelect:()=>be(r),children:[r,"条/页"]},r))})]}),l&&e.jsxs("div",{className:"lg-pagination__jumper",children:[e.jsx("span",{children:"跳至"}),e.jsx("input",{className:"lg-pagination__jumper-input",value:D,disabled:o,onChange:r=>J(r.target.value),onKeyDown:Se,onBlur:ve}),e.jsx("span",{children:"页"})]})]})});v.displayName="Pagination";v.__docgenInfo={description:`Pagination 分页组件
参考 antd API 设计，通过 variant 区分三种视觉：simple（简单）、bordered（有框）、borderless（无框）`,methods:[],displayName:"Pagination",props:{align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'}]},description:'对齐方式，默认 "end"',defaultValue:{value:'"end"',computed:!1}},current:{required:!1,tsType:{name:"number"},description:"当前页（受控）"},defaultCurrent:{required:!1,tsType:{name:"number"},description:"默认当前页（非受控），默认 1",defaultValue:{value:"1",computed:!1}},pageSize:{required:!1,tsType:{name:"number"},description:"每页条数（受控）"},defaultPageSize:{required:!1,tsType:{name:"number"},description:"默认每页条数（非受控），默认 20",defaultValue:{value:"20",computed:!1}},total:{required:!0,tsType:{name:"number"},description:"数据总数"},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用",defaultValue:{value:"false",computed:!1}},hideOnSinglePage:{required:!1,tsType:{name:"boolean"},description:"只有一页时隐藏，默认 false",defaultValue:{value:"false",computed:!1}},pageSizeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"每页条数选项，默认 [10, 20, 50, 100]",defaultValue:{value:"[10, 20, 50, 100]",computed:!1}},showQuickJumper:{required:!1,tsType:{name:"boolean"},description:"是否显示快速跳转，默认 false",defaultValue:{value:"false",computed:!1}},showSizeChanger:{required:!1,tsType:{name:"boolean"},description:"是否显示 pageSize 切换器，默认 false",defaultValue:{value:"false",computed:!1}},showTotal:{required:!1,tsType:{name:"union",raw:"boolean | ((total: number, range: [number, number]) => ReactNode)",elements:[{name:"boolean"},{name:"unknown"}]},description:"是否显示总数，或自定义渲染"},variant:{required:!1,tsType:{name:"union",raw:'"simple" | "bordered" | "borderless"',elements:[{name:"literal",value:'"simple"'},{name:"literal",value:'"bordered"'},{name:"literal",value:'"borderless"'}]},description:'视觉变体，默认 "bordered"',defaultValue:{value:'"bordered"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number, pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"pageSize"}],return:{name:"void"}}},description:"页码或 pageSize 变化回调"},onPageSizeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number, size: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"},{type:{name:"number"},name:"size"}],return:{name:"void"}}},description:"pageSize 变化回调"},className:{required:!1,tsType:{name:"string"},description:"额外 className"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义行内样式"}}};const Ke={title:"Components/Pagination",component:v,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["simple","bordered","borderless"]},align:{control:"select",options:["start","center","end"]},showTotal:{control:"boolean"},showSizeChanger:{control:"boolean"},showQuickJumper:{control:"boolean"},disabled:{control:"boolean"},total:{control:"number"}}},T={args:{total:1e3,showTotal:!0,showSizeChanger:!0,showQuickJumper:!0,variant:"bordered"}},_={name:"简单",render:()=>{const[t,n]=c.useState(2);return e.jsx(v,{total:80,current:t,pageSize:20,variant:"simple",showTotal:!0,onChange:i=>n(i)})}},N={name:"无框",render:()=>{const[t,n]=c.useState(1);return e.jsx(v,{total:2e3,current:t,pageSize:20,variant:"borderless",showTotal:!0,onChange:i=>n(i)})}},k={name:"有框（完整）",render:()=>{const[t,n]=c.useState(2),[i,g]=c.useState(20);return e.jsx(v,{total:1e3,current:t,pageSize:i,variant:"bordered",showTotal:!0,showSizeChanger:!0,showQuickJumper:!0,onChange:(p,a)=>{n(p),g(a)},onPageSizeChange:(p,a)=>{n(p),g(a)}})}},R={name:"全部变体",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"simple（简单）：共80条 < 2/4 >"}),e.jsx(v,{total:80,defaultCurrent:2,pageSize:20,variant:"simple",showTotal:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"borderless（无框）：共80条 + 页码列表"}),e.jsx(v,{total:2e3,defaultCurrent:1,pageSize:20,variant:"borderless",showTotal:!0,align:"start"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"bordered（有框）：完整模式（页码 + 条数切换 + 跳转）"}),e.jsx(v,{total:1e3,defaultCurrent:2,defaultPageSize:20,variant:"bordered",showTotal:!0,showSizeChanger:!0,showQuickJumper:!0})]})]})},q={name:"禁用",args:{total:500,showTotal:!0,showSizeChanger:!0,showQuickJumper:!0,disabled:!0}},M={name:"少量页码",render:()=>e.jsx(v,{total:50,defaultPageSize:20,showTotal:!0,variant:"bordered"})};var K,G,U;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    total: 1000,
    showTotal: true,
    showSizeChanger: true,
    showQuickJumper: true,
    variant: "bordered"
  }
}`,...(U=(G=T.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var Z,H,W;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "简单",
  render: () => {
    const [current, setCurrent] = useState(2);
    return <Pagination total={80} current={current} pageSize={20} variant="simple" showTotal onChange={page => setCurrent(page)} />;
  }
}`,...(W=(H=_.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var X,Y,ee;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "无框",
  render: () => {
    const [current, setCurrent] = useState(1);
    return <Pagination total={2000} current={current} pageSize={20} variant="borderless" showTotal onChange={page => setCurrent(page)} />;
  }
}`,...(ee=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ne,re,te;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(re=k.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,se,ie;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(se=R.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,le,ue;q.parameters={...q.parameters,docs:{...(oe=q.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "禁用",
  args: {
    total: 500,
    showTotal: true,
    showSizeChanger: true,
    showQuickJumper: true,
    disabled: true
  }
}`,...(ue=(le=q.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var ce,pe,de;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "少量页码",
  render: () => <Pagination total={50} defaultPageSize={20} showTotal variant="bordered" />
}`,...(de=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};const Ge=["Playground","Simple","Borderless","Bordered","AllVariants","Disabled","FewPages"];export{R as AllVariants,k as Bordered,N as Borderless,q as Disabled,M as FewPages,T as Playground,_ as Simple,Ge as __namedExportsOrder,Ke as default};
