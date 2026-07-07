import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as o,R as ce}from"./index-D4H_InIO.js";/* empty css                */import{P as ue,b as me,c as pe}from"./index-CkIsoHdK.js";import{a as E}from"./utils-HnQPFlDo.js";import{B as L}from"./index-DqYipJfA.js";import{_ as fe,e as ge,a as V,b as he,c as ve}from"./utils-YwZfuvH0-DLWngkAW.js";import{X as xe}from"./XCircleFill-C1lg6Dm5.js";import"./index-QzquTJG0.js";import"./index-BIJv7EuU.js";import"./index-CcH2AuCn.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-sEhs43E3.js";import"./Combination-BIv0MqwI.js";import"./index-ukuGrK6K.js";import"./index-C9IgbGKu.js";import"./LoaderCircle-BJjvYEe5.js";var ye=["size","color","fill","rotate","spin","className","style"],B=o.forwardRef((n,a)=>{var r,i=n.size,s=i===void 0?"1em":i,t=n.color,l=n.fill,f=n.rotate,c=n.spin,u=n.className,g=n.style,p=fe(n,ye);return c&&ge(),e.jsx("svg",V(V({ref:a,width:s,height:s,viewBox:"0 0 24 24",fill:(r=l??t)!==null&&r!==void 0?r:"currentColor",className:ve("lingee-icon",c&&"lingee-icon-spin",u),style:V(V({},he),{},{transform:f?"rotate(".concat(f,"deg)"):void 0,animation:c?"lingee-icon-spin 1s linear infinite":void 0},g),xmlns:"http://www.w3.org/2000/svg","data-icon":"Clock"},p),{},{children:e.jsx("path",{d:"M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12ZM11 11.4854V6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V11.4854L16.0811 13.6865C16.5305 14.0075 16.6345 14.6316 16.3135 15.0811C15.9925 15.5305 15.3684 15.6345 14.9189 15.3135L11.8379 13.1133C11.3123 12.7379 11 12.1313 11 11.4854ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"})}))});B.displayName="Clock";B.__docgenInfo={description:"",methods:[],displayName:"Clock"};function Se({value:n,defaultValue:a,onChange:r,onOpenChange:i,disabled:s,showSeconds:t}){const l=n!==void 0,[f,c]=o.useState(a??null),u=l?n:f,[g,p]=o.useState(!1),[h,y]=o.useState(null),S=o.useCallback(()=>{s||(y(u??null),p(!0),i==null||i(!0))},[s,u,i]),v=o.useCallback(()=>{p(!1),y(null),i==null||i(!1)},[i]),q=o.useCallback(()=>{g?v():S()},[g,v,S]),k=o.useCallback((d,x)=>{y(T=>({...T??{hour:0,minute:0,...t?{second:0}:{}},[d]:x}))},[t]),$=o.useCallback(()=>{if(h){const d=t?{hour:h.hour,minute:h.minute,second:h.second??0}:{hour:h.hour,minute:h.minute};l||c(d),r==null||r(d)}v()},[h,t,l,r,v]),_=o.useCallback(()=>{const d=new Date,x=t?{hour:d.getHours(),minute:d.getMinutes(),second:d.getSeconds()}:{hour:d.getHours(),minute:d.getMinutes()};l||c(x),r==null||r(x),v()},[t,l,r,v]),H=o.useCallback(d=>{d.stopPropagation(),l||c(null),r==null||r(null)},[l,r]),M=o.useMemo(()=>{if(!u)return"";const d=String(u.hour).padStart(2,"0"),x=String(u.minute).padStart(2,"0");if(t){const T=String(u.second??0).padStart(2,"0");return`${d}:${x}:${T}`}return`${d}:${x}`},[u,t]);return{open:g,currentValue:u,tempValue:h,displayText:M,handleOpen:S,handleClose:v,toggleOpen:q,handleTempSelect:k,handleConfirm:$,handleSelectNow:_,handleClear:H}}const Te=32,je=1/3;function R(n){return Array.from({length:n},(a,r)=>r)}function ke(n,a){let r=null;const i=()=>{const s=n.scrollTop,t=a-s;if(Math.abs(t)<=1){n.scrollTop=a;return}n.scrollTop=s+t*je,r=requestAnimationFrame(i)};return r&&cancelAnimationFrame(r),r=requestAnimationFrame(i),()=>{r&&cancelAnimationFrame(r)}}const A=({items:n,selected:a,onSelect:r})=>{const i=o.useRef(null),s=o.useRef(null);return o.useEffect(()=>{var f;const t=i.current;if(!t)return;const l=a*Te;return(f=s.current)==null||f.call(s),s.current=ke(t,l),()=>{var c;(c=s.current)==null||c.call(s)}},[a]),e.jsx("div",{className:"lg-timepicker-panel__column",ref:i,children:n.map(t=>e.jsx("div",{className:`lg-timepicker-panel__item${t===a?" lg-timepicker-panel__item--selected":""}`,onClick:()=>r(t),children:String(t).padStart(2,"0")},t))})},F=({value:n,showSeconds:a,onSelect:r,onConfirm:i,onSelectNow:s})=>{const t=R(24),l=R(60),f=R(60),c=(n==null?void 0:n.hour)??0,u=(n==null?void 0:n.minute)??0,g=(n==null?void 0:n.second)??0;return e.jsxs("div",{className:`lg-timepicker-panel${a?" lg-timepicker-panel--3col":""}`,children:[e.jsxs("div",{className:"lg-timepicker-panel__columns",children:[e.jsx(A,{items:t,selected:c,onSelect:p=>r("hour",p)}),e.jsx(A,{items:l,selected:u,onSelect:p=>r("minute",p)}),a&&e.jsx(A,{items:f,selected:g,onSelect:p=>r("second",p)})]}),e.jsxs("div",{className:"lg-timepicker-panel__footer",children:[e.jsx(L,{variant:"text",size:"sm",onClick:s,children:"现在"}),e.jsx(L,{variant:"primary",size:"sm",onClick:i,children:"确定"})]})]})};F.displayName="TimePanel";F.__docgenInfo={description:"",methods:[],displayName:"TimePanel",props:{value:{required:!0,tsType:{name:"union",raw:"TimeValue | null",elements:[{name:"TimeValue"},{name:"null"}]},description:""},showSeconds:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:'(field: "hour" | "minute" | "second", val: number) => void',signature:{arguments:[{type:{name:"union",raw:'"hour" | "minute" | "second"',elements:[{name:"literal",value:'"hour"'},{name:"literal",value:'"minute"'},{name:"literal",value:'"second"'}]},name:"field"},{type:{name:"number"},name:"val"}],return:{name:"void"}}},description:""},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSelectNow:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const m=ce.forwardRef(({value:n,defaultValue:a,onChange:r,showSeconds:i=!1,disabled:s=!1,error:t=!1,errorMessage:l,size:f="md",placeholder:c,allowClear:u=!0,getPopupContainer:g,onOpenChange:p,className:h,style:y},S)=>{const v=o.useRef(null),q=i?"时:分:秒":"时:分",{open:k,tempValue:$,displayText:_,toggleOpen:H,handleClose:M,handleTempSelect:d,handleConfirm:x,handleSelectNow:T,handleClear:I}=Se({value:n,defaultValue:a,onChange:r,onOpenChange:p,disabled:s,showSeconds:i}),D=!!_,oe=u&&D&&!s,de=()=>oe?e.jsxs("span",{className:"lg-datepicker__suffix lg-datepicker__suffix--clearable",children:[e.jsx("span",{className:"lg-datepicker__icon-default",children:e.jsx(B,{size:16})}),e.jsx("span",{className:"lg-datepicker__clear",onClick:I,children:e.jsx(xe,{size:16})})]}):e.jsx("span",{className:"lg-datepicker__suffix",children:e.jsx(B,{size:16})});return e.jsxs("div",{ref:S,className:E("lg-datepicker lg-timepicker",h),style:y,children:[e.jsxs(ue,{open:k,onOpenChange:j=>{j||M()},children:[e.jsx(me,{children:e.jsxs("div",{ref:v,className:E("lg-datepicker__trigger",`lg-datepicker__trigger--${f}`,k&&"lg-datepicker__trigger--open",t&&"lg-datepicker__trigger--error",s&&"lg-datepicker__trigger--disabled"),onClick:H,children:[e.jsx("span",{className:E("lg-datepicker__input",!D&&"lg-datepicker__placeholder"),children:D?_:c??q}),de()]})}),e.jsx(pe,{className:"lg-timepicker-popover",side:"bottom",align:"start",sideOffset:4,collisionPadding:8,container:g==null?void 0:g(),onOpenAutoFocus:j=>j.preventDefault(),onCloseAutoFocus:j=>j.preventDefault(),children:e.jsx(F,{value:$,showSeconds:i,onSelect:d,onConfirm:x,onSelectNow:T})})]}),t&&l&&e.jsx("div",{className:"lg-datepicker__error-msg",children:l})]})});m.displayName="TimePicker";m.__docgenInfo={description:`TimePicker 时间选择器

滚动列选择时间，支持 HH:mm 和 HH:mm:ss 两种模式。
触发器复用 DatePicker 样式，面板通过 Popover 弹出。`,methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"union",raw:"TimeValue | null",elements:[{name:"TimeValue"},{name:"null"}]},description:"受控值"},defaultValue:{required:!1,tsType:{name:"union",raw:"TimeValue | null",elements:[{name:"TimeValue"},{name:"null"}]},description:"非受控默认值"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: TimeValue | null) => void",signature:{arguments:[{type:{name:"union",raw:"TimeValue | null",elements:[{name:"TimeValue"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"值变化回调"},showSeconds:{required:!1,tsType:{name:"boolean"},description:"是否显示秒列，默认 false（HH:mm 模式）",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"错误态",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"错误提示文案"},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:'尺寸，默认 "md"',defaultValue:{value:'"md"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"占位文本"},allowClear:{required:!1,tsType:{name:"boolean"},description:"是否显示清空按钮，默认 true",defaultValue:{value:"true",computed:!1}},getPopupContainer:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement",signature:{arguments:[],return:{name:"HTMLElement"}}},description:"浮层挂载容器"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"面板展开/收起回调"},className:{required:!1,tsType:{name:"string"},description:"样式类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"行内样式"}}};const Ie={title:"Components/TimePicker",tags:["autodocs"]},w={name:"基础用法",render:()=>{const[n,a]=o.useState(null);return e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"选择时间"}),e.jsx(m,{value:n,onChange:r=>a(r)}),e.jsxs("p",{style:{marginTop:12,fontSize:12,color:"#999"},children:["当前值：",n?`${String(n.hour).padStart(2,"0")}:${String(n.minute).padStart(2,"0")}`:"未选择"]})]})}},z={name:"显示秒",render:()=>{const[n,a]=o.useState(null);return e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"选择时间（含秒）"}),e.jsx(m,{value:n,onChange:r=>a(r),showSeconds:!0}),e.jsxs("p",{style:{marginTop:12,fontSize:12,color:"#999"},children:["当前值：",n?`${String(n.hour).padStart(2,"0")}:${String(n.minute).padStart(2,"0")}:${String(n.second??0).padStart(2,"0")}`:"未选择"]})]})}},N={name:"默认值（非受控）",render:()=>e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"有默认值"}),e.jsx(m,{defaultValue:{hour:9,minute:30}})]})},P={name:"尺寸",render:()=>e.jsxs("div",{style:{width:292,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsx(m,{size:"sm",placeholder:"sm 尺寸"}),e.jsx(m,{size:"md",placeholder:"md 尺寸（默认）"}),e.jsx(m,{size:"lg",placeholder:"lg 尺寸"})]})},b={name:"状态",render:()=>e.jsxs("div",{style:{width:292,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"未选态"}),e.jsx(m,{})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"已选态（hover 显示清除）"}),e.jsx(m,{defaultValue:{hour:14,minute:30}})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"禁用态"}),e.jsx(m,{placeholder:"时:分",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"已选禁用态"}),e.jsx(m,{defaultValue:{hour:14,minute:30},disabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"错误态"}),e.jsx(m,{defaultValue:{hour:14,minute:30},error:!0,errorMessage:"时间格式错误"})]})]})},C={name:"不允许清除",render:()=>e.jsx("div",{style:{width:292,padding:24},children:e.jsx(m,{defaultValue:{hour:9,minute:0},allowClear:!1})})};var W,Z,X;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(X=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};var G,K,J;z.parameters={...z.parameters,docs:{...(G=z.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(K=z.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,U,Y;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(U=N.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var O,ee,ne;P.parameters={...P.parameters,docs:{...(O=P.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(ne=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,ie;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var se,ae,le;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const Le=["Basic","WithSeconds","DefaultValue","Sizes","States","NoClear"];export{w as Basic,N as DefaultValue,C as NoClear,P as Sizes,b as States,z as WithSeconds,Le as __namedExportsOrder,Ie as default};
