import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as o,R as ue}from"./index-D4H_InIO.js";/* empty css                */import{P as pe,b as fe,c as ge}from"./index-SIrKXax8.js";import{a as E}from"./utils-HnQPFlDo.js";import{u as oe}from"./index-DhX95gbj.js";import{B as L}from"./index-CmnokBQH.js";import{_ as he,e as ve,a as w,b as xe,c as ye}from"./utils-YwZfuvH0-DLWngkAW.js";import{X as Se}from"./XCircleFill-C1lg6Dm5.js";import"./index-Dth3sfoE.js";import"./index-Dj6c7Bq9.js";import"./index-CJs4gz5u.js";import"./index-klUtQC2j.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-DglMy7uv.js";import"./Combination-DnvQz1mi.js";import"./XLg-Buk6fdo7.js";import"./index-ukuGrK6K.js";import"./index-B_ca6aDP.js";import"./LoaderCircle-BJjvYEe5.js";var Te=["size","color","fill","rotate","spin","className","style"],q=o.forwardRef((n,a)=>{var r,i=n.size,s=i===void 0?"1em":i,t=n.color,l=n.fill,f=n.rotate,m=n.spin,u=n.className,g=n.style,x=he(n,Te);return m&&ve(),e.jsx("svg",w(w({ref:a,width:s,height:s,viewBox:"0 0 24 24",fill:(r=l??t)!==null&&r!==void 0?r:"currentColor",className:ye("lingee-icon",m&&"lingee-icon-spin",u),style:w(w({},xe),{},{transform:f?"rotate(".concat(f,"deg)"):void 0,animation:m?"lingee-icon-spin 1s linear infinite":void 0},g),xmlns:"http://www.w3.org/2000/svg","data-icon":"Clock"},x),{},{children:e.jsx("path",{d:"M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12ZM11 11.4854V6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V11.4854L16.0811 13.6865C16.5305 14.0075 16.6345 14.6316 16.3135 15.0811C15.9925 15.5305 15.3684 15.6345 14.9189 15.3135L11.8379 13.1133C11.3123 12.7379 11 12.1313 11 11.4854ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"})}))});q.displayName="Clock";q.__docgenInfo={description:"",methods:[],displayName:"Clock"};function je({value:n,defaultValue:a,onChange:r,onOpenChange:i,disabled:s,showSeconds:t}){const l=n!==void 0,[f,m]=o.useState(a??null),u=l?n:f,[g,x]=o.useState(!1),[d,y]=o.useState(null),S=o.useCallback(()=>{s||(y(u??null),x(!0),i==null||i(!0))},[s,u,i]),h=o.useCallback(()=>{x(!1),y(null),i==null||i(!1)},[i]),k=o.useCallback(()=>{g?h():S()},[g,h,S]),$=o.useCallback((c,v)=>{y(T=>({...T??{hour:0,minute:0,...t?{second:0}:{}},[c]:v}))},[t]),_=o.useCallback(()=>{if(d){const c=t?{hour:d.hour,minute:d.minute,second:d.second??0}:{hour:d.hour,minute:d.minute};l||m(c),r==null||r(c)}h()},[d,t,l,r,h]),H=o.useCallback(()=>{const c=new Date,v=t?{hour:c.getHours(),minute:c.getMinutes(),second:c.getSeconds()}:{hour:c.getHours(),minute:c.getMinutes()};l||m(v),r==null||r(v),h()},[t,l,r,h]),V=o.useCallback(c=>{c.stopPropagation(),l||m(null),r==null||r(null)},[l,r]),M=o.useMemo(()=>{if(!u)return"";const c=String(u.hour).padStart(2,"0"),v=String(u.minute).padStart(2,"0");if(t){const T=String(u.second??0).padStart(2,"0");return`${c}:${v}:${T}`}return`${c}:${v}`},[u,t]);return{open:g,currentValue:u,tempValue:d,displayText:M,handleOpen:S,handleClose:h,toggleOpen:k,handleTempSelect:$,handleConfirm:_,handleSelectNow:H,handleClear:V}}const ke=32,_e=1/3;function F(n){return Array.from({length:n},(a,r)=>r)}function Ve(n,a){let r=null;const i=()=>{const s=n.scrollTop,t=a-s;if(Math.abs(t)<=1){n.scrollTop=a;return}n.scrollTop=s+t*_e,r=requestAnimationFrame(i)};return r&&cancelAnimationFrame(r),r=requestAnimationFrame(i),()=>{r&&cancelAnimationFrame(r)}}const R=({items:n,selected:a,onSelect:r})=>{const i=o.useRef(null),s=o.useRef(null);return o.useEffect(()=>{var f;const t=i.current;if(!t)return;const l=a*ke;return(f=s.current)==null||f.call(s),s.current=Ve(t,l),()=>{var m;(m=s.current)==null||m.call(s)}},[a]),e.jsx("div",{className:"lg-timepicker-panel__column",ref:i,children:n.map(t=>e.jsx("div",{className:`lg-timepicker-panel__item${t===a?" lg-timepicker-panel__item--selected":""}`,onClick:()=>r(t),children:String(t).padStart(2,"0")},t))})},A=({value:n,showSeconds:a,onSelect:r,onConfirm:i,onSelectNow:s})=>{const t=oe("TimePicker"),l=F(24),f=F(60),m=F(60),u=(n==null?void 0:n.hour)??0,g=(n==null?void 0:n.minute)??0,x=(n==null?void 0:n.second)??0;return e.jsxs("div",{className:`lg-timepicker-panel${a?" lg-timepicker-panel--3col":""}`,children:[e.jsxs("div",{className:"lg-timepicker-panel__columns",children:[e.jsx(R,{items:l,selected:u,onSelect:d=>r("hour",d)}),e.jsx(R,{items:f,selected:g,onSelect:d=>r("minute",d)}),a&&e.jsx(R,{items:m,selected:x,onSelect:d=>r("second",d)})]}),e.jsxs("div",{className:"lg-timepicker-panel__footer",children:[e.jsx(L,{variant:"text",size:"sm",onClick:s,children:t.now}),e.jsx(L,{variant:"primary",size:"sm",onClick:i,children:t.confirm})]})]})};A.displayName="TimePanel";A.__docgenInfo={description:"",methods:[],displayName:"TimePanel",props:{value:{required:!0,tsType:{name:"union",raw:"TimeValue | null",elements:[{name:"TimeValue"},{name:"null"}]},description:""},showSeconds:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:'(field: "hour" | "minute" | "second", val: number) => void',signature:{arguments:[{type:{name:"union",raw:'"hour" | "minute" | "second"',elements:[{name:"literal",value:'"hour"'},{name:"literal",value:'"minute"'},{name:"literal",value:'"second"'}]},name:"field"},{type:{name:"number"},name:"val"}],return:{name:"void"}}},description:""},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSelectNow:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const p=ue.forwardRef(({value:n,defaultValue:a,onChange:r,showSeconds:i=!1,disabled:s=!1,error:t=!1,errorMessage:l,size:f="md",placeholder:m,allowClear:u=!0,getPopupContainer:g,onOpenChange:x,className:d,style:y},S)=>{const h=o.useRef(null),k=oe("TimePicker"),$=i?k.placeholderFull:k.placeholder,{open:_,tempValue:H,displayText:V,toggleOpen:M,handleClose:c,handleTempSelect:v,handleConfirm:T,handleSelectNow:I,handleClear:ce}=je({value:n,defaultValue:a,onChange:r,onOpenChange:x,disabled:s,showSeconds:i}),D=!!V,de=u&&D&&!s,me=()=>de?e.jsxs("span",{className:"lg-datepicker__suffix lg-datepicker__suffix--clearable",children:[e.jsx("span",{className:"lg-datepicker__icon-default",children:e.jsx(q,{size:16})}),e.jsx("span",{className:"lg-datepicker__clear",onClick:ce,children:e.jsx(Se,{size:16})})]}):e.jsx("span",{className:"lg-datepicker__suffix",children:e.jsx(q,{size:16})});return e.jsxs("div",{ref:S,className:E("lg-datepicker lg-timepicker",d),style:y,children:[e.jsxs(pe,{open:_,onOpenChange:j=>{j||c()},children:[e.jsx(fe,{children:e.jsxs("div",{ref:h,className:E("lg-datepicker__trigger",`lg-datepicker__trigger--${f}`,_&&"lg-datepicker__trigger--open",t&&"lg-datepicker__trigger--error",s&&"lg-datepicker__trigger--disabled"),onClick:M,children:[e.jsx("span",{className:E("lg-datepicker__input",!D&&"lg-datepicker__placeholder"),children:D?V:m??$}),me()]})}),e.jsx(ge,{className:"lg-timepicker-popover",side:"bottom",align:"start",sideOffset:4,collisionPadding:8,container:g==null?void 0:g(),onOpenAutoFocus:j=>j.preventDefault(),onCloseAutoFocus:j=>j.preventDefault(),children:e.jsx(A,{value:H,showSeconds:i,onSelect:v,onConfirm:T,onSelectNow:I})})]}),t&&l&&e.jsx("div",{className:"lg-datepicker__error-msg",children:l})]})});p.displayName="TimePicker";p.__docgenInfo={description:`TimePicker 时间选择器

滚动列选择时间，支持 HH:mm 和 HH:mm:ss 两种模式。
触发器复用 DatePicker 样式，面板通过 Popover 弹出。`,methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"union",raw:"TimeValue | null",elements:[{name:"TimeValue"},{name:"null"}]},description:"受控值"},defaultValue:{required:!1,tsType:{name:"union",raw:"TimeValue | null",elements:[{name:"TimeValue"},{name:"null"}]},description:"非受控默认值"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: TimeValue | null) => void",signature:{arguments:[{type:{name:"union",raw:"TimeValue | null",elements:[{name:"TimeValue"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"值变化回调"},showSeconds:{required:!1,tsType:{name:"boolean"},description:"是否显示秒列，默认 false（HH:mm 模式）",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"错误态",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"错误提示文案"},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:'尺寸，默认 "md"',defaultValue:{value:'"md"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"占位文本"},allowClear:{required:!1,tsType:{name:"boolean"},description:"是否显示清空按钮，默认 true",defaultValue:{value:"true",computed:!1}},getPopupContainer:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement",signature:{arguments:[],return:{name:"HTMLElement"}}},description:"浮层挂载容器"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"面板展开/收起回调"},className:{required:!1,tsType:{name:"string"},description:"样式类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"行内样式"}}};const Ge={title:"Components/TimePicker",tags:["autodocs"]},z={name:"基础用法",render:()=>{const[n,a]=o.useState(null);return e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"选择时间"}),e.jsx(p,{value:n,onChange:r=>a(r)}),e.jsxs("p",{style:{marginTop:12,fontSize:12,color:"#999"},children:["当前值：",n?`${String(n.hour).padStart(2,"0")}:${String(n.minute).padStart(2,"0")}`:"未选择"]})]})}},P={name:"显示秒",render:()=>{const[n,a]=o.useState(null);return e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"选择时间（含秒）"}),e.jsx(p,{value:n,onChange:r=>a(r),showSeconds:!0}),e.jsxs("p",{style:{marginTop:12,fontSize:12,color:"#999"},children:["当前值：",n?`${String(n.hour).padStart(2,"0")}:${String(n.minute).padStart(2,"0")}:${String(n.second??0).padStart(2,"0")}`:"未选择"]})]})}},N={name:"默认值（非受控）",render:()=>e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"有默认值"}),e.jsx(p,{defaultValue:{hour:9,minute:30}})]})},b={name:"尺寸",render:()=>e.jsxs("div",{style:{width:292,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsx(p,{size:"sm",placeholder:"sm 尺寸"}),e.jsx(p,{size:"md",placeholder:"md 尺寸（默认）"}),e.jsx(p,{size:"lg",placeholder:"lg 尺寸"})]})},C={name:"状态",render:()=>e.jsxs("div",{style:{width:292,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"未选态"}),e.jsx(p,{})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"已选态（hover 显示清除）"}),e.jsx(p,{defaultValue:{hour:14,minute:30}})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"禁用态"}),e.jsx(p,{placeholder:"时:分",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"已选禁用态"}),e.jsx(p,{defaultValue:{hour:14,minute:30},disabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"错误态"}),e.jsx(p,{defaultValue:{hour:14,minute:30},error:!0,errorMessage:"时间格式错误"})]})]})},B={name:"不允许清除",render:()=>e.jsx("div",{style:{width:292,padding:24},children:e.jsx(p,{defaultValue:{hour:9,minute:0},allowClear:!1})})};var W,Z,X;z.parameters={...z.parameters,docs:{...(W=z.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "基础用法",
  render: () => {
    const [value, setValue] = useState<TimeValue | null>(null);
    return <div style={{
      width: 292,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>选择时间</h4>
        <TimePicker value={value} onChange={v => setValue(v)} />
        <p style={{
        marginTop: 12,
        fontSize: 12,
        color: "#999"
      }}>
          当前值：{value ? \`\${String(value.hour).padStart(2, "0")}:\${String(value.minute).padStart(2, "0")}\` : "未选择"}
        </p>
      </div>;
  }
}`,...(X=(Z=z.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};var G,K,J;P.parameters={...P.parameters,docs:{...(G=P.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "显示秒",
  render: () => {
    const [value, setValue] = useState<TimeValue | null>(null);
    return <div style={{
      width: 292,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>选择时间（含秒）</h4>
        <TimePicker value={value} onChange={v => setValue(v)} showSeconds />
        <p style={{
        marginTop: 12,
        fontSize: 12,
        color: "#999"
      }}>
          当前值：{value ? \`\${String(value.hour).padStart(2, "0")}:\${String(value.minute).padStart(2, "0")}:\${String(value.second ?? 0).padStart(2, "0")}\` : "未选择"}
        </p>
      </div>;
  }
}`,...(J=(K=P.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,U,Y;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "默认值（非受控）",
  render: () => <div style={{
    width: 292,
    padding: 24
  }}>
      <h4 style={{
      marginBottom: 12
    }}>有默认值</h4>
      <TimePicker defaultValue={{
      hour: 9,
      minute: 30
    }} />
    </div>
}`,...(Y=(U=N.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var O,ee,ne;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "尺寸",
  render: () => <div style={{
    width: 292,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <TimePicker size="sm" placeholder="sm 尺寸" />
      <TimePicker size="md" placeholder="md 尺寸（默认）" />
      <TimePicker size="lg" placeholder="lg 尺寸" />
    </div>
}`,...(ne=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,ie;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "状态",
  render: () => <div style={{
    width: 292,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: "#666"
      }}>未选态</p>
        <TimePicker />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: "#666"
      }}>已选态（hover 显示清除）</p>
        <TimePicker defaultValue={{
        hour: 14,
        minute: 30
      }} />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: "#666"
      }}>禁用态</p>
        <TimePicker placeholder="时:分" disabled />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: "#666"
      }}>已选禁用态</p>
        <TimePicker defaultValue={{
        hour: 14,
        minute: 30
      }} disabled />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: "#666"
      }}>错误态</p>
        <TimePicker defaultValue={{
        hour: 14,
        minute: 30
      }} error errorMessage="时间格式错误" />
      </div>
    </div>
}`,...(ie=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var se,ae,le;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "不允许清除",
  render: () => <div style={{
    width: 292,
    padding: 24
  }}>
      <TimePicker defaultValue={{
      hour: 9,
      minute: 0
    }} allowClear={false} />
    </div>
}`,...(le=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const Ke=["Basic","WithSeconds","DefaultValue","Sizes","States","NoClear"];export{z as Basic,N as DefaultValue,B as NoClear,b as Sizes,C as States,P as WithSeconds,Ke as __namedExportsOrder,Ge as default};
