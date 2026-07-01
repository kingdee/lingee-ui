import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as c,R as N}from"./index-D4H_InIO.js";import{f as ze,P as E,a as B,e as A,h as Ne,c as se}from"./index-CJMDPjkl.js";import{u as Ee,R as Ve,c as de,I as Pe}from"./index-BNuCBOGb.js";import{u as we}from"./index-CNPoBS2Q.js";import{a as le}from"./utils-HnQPFlDo.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";function Ae(a){const o=c.useRef({value:a,previous:a});return c.useMemo(()=>(o.current.value!==a&&(o.current.previous=o.current.value,o.current.value=a),o.current.previous),[a])}var T="Radio",[Be,ce]=se(T),[Te,V]=Be(T);function ue(a){const{__scopeRadio:o,checked:r=!1,children:i,disabled:n,form:s,name:d,onCheck:u,required:p,value:R="on",internal_do_not_use_render:m}=a,[l,v]=c.useState(null),[x,h]=c.useState(null),I=c.useRef(!1),y=l?!!s||!!l.closest("form"):!0,g={checked:r,disabled:n,required:p,name:d,form:s,value:R,control:l,setControl:v,hasConsumerStoppedPropagationRef:I,isFormControl:y,bubbleInput:x,setBubbleInput:h,onCheck:()=>u==null?void 0:u()};return e.jsx(Te,{scope:o,...g,children:ke(m)?m(g):i})}var pe="RadioTrigger",D=c.forwardRef(({__scopeRadio:a,onClick:o,...r},i)=>{const{checked:n,disabled:s,value:d,setControl:u,onCheck:p,hasConsumerStoppedPropagationRef:R,isFormControl:m,bubbleInput:l}=V(pe,a),v=B(i,u);return e.jsx(E.button,{type:"button",role:"radio","aria-checked":n,"data-state":ve(n),"data-disabled":s?"":void 0,disabled:s,value:d,...r,ref:v,onClick:A(o,x=>{n||p(),l&&m&&(R.current=x.isPropagationStopped(),R.current||x.stopPropagation())})})});D.displayName=pe;var De=c.forwardRef((a,o)=>{const{__scopeRadio:r,name:i,checked:n,required:s,disabled:d,value:u,onCheck:p,form:R,...m}=a;return e.jsx(ue,{__scopeRadio:r,checked:n,disabled:d,required:s,onCheck:p,name:i,form:R,value:u,internal_do_not_use_render:({isFormControl:l})=>e.jsxs(e.Fragment,{children:[e.jsx(D,{...m,ref:o,__scopeRadio:r}),l&&e.jsx(k,{__scopeRadio:r})]})})});De.displayName=T;var me="RadioIndicator",fe=c.forwardRef((a,o)=>{const{__scopeRadio:r,forceMount:i,...n}=a,s=V(me,r);return e.jsx(Ne,{present:i||s.checked,children:e.jsx(E.span,{"data-state":ve(s.checked),"data-disabled":s.disabled?"":void 0,...n,ref:o})})});fe.displayName=me;var Re="RadioBubbleInput",k=c.forwardRef(({__scopeRadio:a,...o},r)=>{const{control:i,checked:n,required:s,disabled:d,name:u,value:p,form:R,bubbleInput:m,setBubbleInput:l,hasConsumerStoppedPropagationRef:v}=V(Re,a),x=B(r,l),h=Ae(n),I=we(i);c.useEffect(()=>{const g=m;if(!g)return;const Ge=window.HTMLInputElement.prototype,q=Object.getOwnPropertyDescriptor(Ge,"checked").set,Se=!v.current;if(h!==n&&q){const Ce=new Event("click",{bubbles:Se});q.call(g,n),g.dispatchEvent(Ce)}},[m,h,n,v]);const y=c.useRef(n);return e.jsx(E.input,{type:"radio","aria-hidden":!0,defaultChecked:y.current,required:s,disabled:d,name:u,value:p,form:R,...o,tabIndex:-1,ref:x,style:{...o.style,...I,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});k.displayName=Re;function ke(a){return typeof a=="function"}function ve(a){return a?"checked":"unchecked"}var qe=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],P="RadioGroup",[Me]=se(P,[de,ce]),xe=de(),w=ce(),[Le,Fe]=Me(P),he=c.forwardRef((a,o)=>{const{__scopeRadioGroup:r,name:i,defaultValue:n,value:s,required:d=!1,disabled:u=!1,orientation:p,dir:R,loop:m=!0,onValueChange:l,...v}=a,x=xe(r),h=Ee(R),[I,y]=ze({prop:s,defaultProp:n??null,onChange:l,caller:P});return e.jsx(Le,{scope:r,name:i,required:d,disabled:u,value:I,onValueChange:y,children:e.jsx(Ve,{asChild:!0,...x,orientation:p,dir:h,loop:m,children:e.jsx(E.div,{role:"radiogroup","aria-required":d,"aria-orientation":p,"data-disabled":u?"":void 0,dir:h,...v,ref:o})})})});he.displayName=P;var Oe="RadioGroupItem",Ue="RadioGroupItemProvider",ge="RadioGroupItemTrigger",Ke="RadioGroupItemBubbleInput";function He(a){const{__scopeRadioGroup:o,value:r,disabled:i,children:n,internal_do_not_use_render:s}=a,d=Fe(Ue,o),u=w(o),p=d.disabled||i;return e.jsx(ue,{...u,checked:d.value===r,disabled:p,required:d.required,name:d.name,value:r,onCheck:()=>d.onValueChange(r),internal_do_not_use_render:s,children:n})}var Ie=c.forwardRef((a,o)=>{const{__scopeRadioGroup:r,...i}=a,n=xe(r),s=w(r),{checked:d,disabled:u}=V(ge,s.__scopeRadio),p=c.useRef(null),R=B(o,p),m=c.useRef(!1);return c.useEffect(()=>{const l=x=>{qe.includes(x.key)&&(m.current=!0)},v=()=>m.current=!1;return document.addEventListener("keydown",l),document.addEventListener("keyup",v),()=>{document.removeEventListener("keydown",l),document.removeEventListener("keyup",v)}},[]),e.jsx(Pe,{asChild:!0,...n,focusable:!u,active:d,children:e.jsx(D,{...s,...i,ref:R,onKeyDown:A(i.onKeyDown,l=>{l.key==="Enter"&&l.preventDefault()}),onFocus:A(i.onFocus,()=>{var l;m.current&&((l=p.current)==null||l.click())})})})});Ie.displayName=ge;var ye=c.forwardRef((a,o)=>{const{__scopeRadioGroup:r,value:i,disabled:n,...s}=a;return e.jsx(He,{__scopeRadioGroup:r,value:i,disabled:n,internal_do_not_use_render:({isFormControl:d})=>e.jsxs(e.Fragment,{children:[e.jsx(Ie,{...s,ref:o,__scopeRadioGroup:r}),d&&e.jsx(be,{__scopeRadioGroup:r})]})})});ye.displayName=Oe;var be=c.forwardRef((a,o)=>{const{__scopeRadioGroup:r,...i}=a,n=w(r);return e.jsx(k,{...n,...i,ref:o})});be.displayName=Ke;var $e="RadioGroupIndicator",je=c.forwardRef((a,o)=>{const{__scopeRadioGroup:r,...i}=a,n=w(r);return e.jsx(fe,{...n,...i,ref:o})});je.displayName=$e;const f=N.forwardRef(({value:a,defaultValue:o,onValueChange:r,size:i="md",disabled:n=!1,orientation:s="vertical",className:d,name:u,children:p,style:R},m)=>e.jsx(he,{ref:m,value:a,defaultValue:o,onValueChange:r,disabled:n,orientation:s,name:u,style:R,className:le("lg-radio-group",`lg-radio-group--${s}`,d),children:e.jsx(_e.Provider,{value:{size:i},children:p})}));f.displayName="RadioGroup";const t=N.forwardRef(({value:a,disabled:o,className:r,children:i},n)=>{const{size:s}=We();return e.jsxs("label",{className:le("lg-radio-item",`lg-radio-item--${s}`,o&&"lg-radio-item--disabled",r),children:[e.jsx(ye,{ref:n,value:a,disabled:o,className:"lg-radio-item__control",children:e.jsx(je,{className:"lg-radio-item__indicator"})}),i&&e.jsx("span",{className:"lg-radio-item__label",children:i})]})});t.displayName="RadioItem";const _e=N.createContext({size:"md"});function We(){return N.useContext(_e)}f.__docgenInfo={description:`RadioGroup 单选组
基于 radix-ui/react-radio-group，支持受控/非受控、禁用、尺寸变体`,methods:[],displayName:"RadioGroup",props:{value:{required:!1,tsType:{name:"string"},description:"当前选中值（受控）"},defaultValue:{required:!1,tsType:{name:"string"},description:"默认选中值（非受控）"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"选中值变更回调"},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:'尺寸，默认 "md"',defaultValue:{value:'"md"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用整组",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:'Radio 排列方向，默认 "vertical"',defaultValue:{value:'"vertical"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"额外 className"},name:{required:!1,tsType:{name:"string"},description:"组名（用于原生 form）"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子元素"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"style"}}};t.__docgenInfo={description:`RadioItem 单选项
必须作为 RadioGroup 的子组件使用`,methods:[],displayName:"RadioItem",props:{value:{required:!0,tsType:{name:"string"},description:"选项值"},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用当前项"},className:{required:!1,tsType:{name:"string"},description:"额外 className"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子元素（label 内容）"}}};const na={title:"Components/Radio",component:f,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},orientation:{control:"select",options:["horizontal","vertical"]},disabled:{control:"boolean"}}},b={render:a=>e.jsxs(f,{defaultValue:"a",...a,children:[e.jsx(t,{value:"a",children:"选项 A"}),e.jsx(t,{value:"b",children:"选项 B"}),e.jsx(t,{value:"c",children:"选项 C"})]}),args:{size:"md",orientation:"vertical"}},j={render:()=>e.jsxs(f,{defaultValue:"a",orientation:"horizontal",children:[e.jsx(t,{value:"a",children:"常规单选"}),e.jsx(t,{value:"b",children:"选项 B"}),e.jsx(t,{value:"c",children:"选项 C"})]})},_={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"Small"}),e.jsxs(f,{defaultValue:"a",orientation:"horizontal",size:"sm",children:[e.jsx(t,{value:"a",children:"选项 A"}),e.jsx(t,{value:"b",children:"选项 B"}),e.jsx(t,{value:"c",children:"选项 C"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"Medium（默认）"}),e.jsxs(f,{defaultValue:"a",orientation:"horizontal",size:"md",children:[e.jsx(t,{value:"a",children:"选项 A"}),e.jsx(t,{value:"b",children:"选项 B"}),e.jsx(t,{value:"c",children:"选项 C"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"Large"}),e.jsxs(f,{defaultValue:"a",orientation:"horizontal",size:"lg",children:[e.jsx(t,{value:"a",children:"选项 A"}),e.jsx(t,{value:"b",children:"选项 B"}),e.jsx(t,{value:"c",children:"选项 C"})]})]})]})},G={name:"交互状态",render:()=>e.jsxs("div",{style:{display:"flex",gap:48,alignItems:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx("span",{style:{fontSize:14,color:"rgba(0,0,0,0.46)"},children:"默认态"}),e.jsx(f,{children:e.jsx(t,{value:"a",children:"常规单选"})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx("span",{style:{fontSize:14,color:"rgba(0,0,0,0.46)"},children:"选中态"}),e.jsx(f,{defaultValue:"a",children:e.jsx(t,{value:"a",children:"常规单选"})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx("span",{style:{fontSize:14,color:"rgba(0,0,0,0.46)"},children:"禁用态"}),e.jsx(f,{disabled:!0,children:e.jsx(t,{value:"a",children:"常规单选"})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx("span",{style:{fontSize:14,color:"rgba(0,0,0,0.46)"},children:"选中且禁用"}),e.jsx(f,{defaultValue:"a",disabled:!0,children:e.jsx(t,{value:"a",children:"常规单选"})})]})]})},S={render:()=>e.jsxs(f,{defaultValue:"a",orientation:"vertical",children:[e.jsx(t,{value:"a",children:"可选项"}),e.jsx(t,{value:"b",disabled:!0,children:"禁用选项"}),e.jsx(t,{value:"c",children:"可选项"})]})},C={render:()=>{const[a,o]=c.useState("a");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(f,{value:a,onValueChange:o,orientation:"horizontal",children:[e.jsx(t,{value:"a",children:"选项 A"}),e.jsx(t,{value:"b",children:"选项 B"}),e.jsx(t,{value:"c",children:"选项 C"})]}),e.jsxs("p",{style:{fontSize:13,color:"#666"},children:["当前选中：",a]})]})}},z={name:"无文本（仅圆形按钮）",render:()=>e.jsxs(f,{defaultValue:"a",orientation:"horizontal",children:[e.jsx(t,{value:"a"}),e.jsx(t,{value:"b"}),e.jsx(t,{value:"c"})]})};var M,L,F;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <RadioGroup defaultValue="a" {...args}>
      <RadioItem value="a">选项 A</RadioItem>
      <RadioItem value="b">选项 B</RadioItem>
      <RadioItem value="c">选项 C</RadioItem>
    </RadioGroup>,
  args: {
    size: "md",
    orientation: "vertical"
  }
}`,...(F=(L=b.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var O,U,K;j.parameters={...j.parameters,docs:{...(O=j.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="a" orientation="horizontal">
      <RadioItem value="a">常规单选</RadioItem>
      <RadioItem value="b">选项 B</RadioItem>
      <RadioItem value="c">选项 C</RadioItem>
    </RadioGroup>
}`,...(K=(U=j.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var H,$,W;_.parameters={..._.parameters,docs:{...(H=_.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>Small</p>
        <RadioGroup defaultValue="a" orientation="horizontal" size="sm">
          <RadioItem value="a">选项 A</RadioItem>
          <RadioItem value="b">选项 B</RadioItem>
          <RadioItem value="c">选项 C</RadioItem>
        </RadioGroup>
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>Medium（默认）</p>
        <RadioGroup defaultValue="a" orientation="horizontal" size="md">
          <RadioItem value="a">选项 A</RadioItem>
          <RadioItem value="b">选项 B</RadioItem>
          <RadioItem value="c">选项 C</RadioItem>
        </RadioGroup>
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>Large</p>
        <RadioGroup defaultValue="a" orientation="horizontal" size="lg">
          <RadioItem value="a">选项 A</RadioItem>
          <RadioItem value="b">选项 B</RadioItem>
          <RadioItem value="c">选项 C</RadioItem>
        </RadioGroup>
      </div>
    </div>
}`,...(W=($=_.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var X,Y,J;G.parameters={...G.parameters,docs:{...(X=G.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "交互状态",
  render: () => <div style={{
    display: "flex",
    gap: 48,
    alignItems: "flex-start"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <span style={{
        fontSize: 14,
        color: "rgba(0,0,0,0.46)"
      }}>默认态</span>
        <RadioGroup>
          <RadioItem value="a">常规单选</RadioItem>
        </RadioGroup>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <span style={{
        fontSize: 14,
        color: "rgba(0,0,0,0.46)"
      }}>选中态</span>
        <RadioGroup defaultValue="a">
          <RadioItem value="a">常规单选</RadioItem>
        </RadioGroup>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <span style={{
        fontSize: 14,
        color: "rgba(0,0,0,0.46)"
      }}>禁用态</span>
        <RadioGroup disabled>
          <RadioItem value="a">常规单选</RadioItem>
        </RadioGroup>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <span style={{
        fontSize: 14,
        color: "rgba(0,0,0,0.46)"
      }}>选中且禁用</span>
        <RadioGroup defaultValue="a" disabled>
          <RadioItem value="a">常规单选</RadioItem>
        </RadioGroup>
      </div>
    </div>
}`,...(J=(Y=G.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,Z,ee;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="a" orientation="vertical">
      <RadioItem value="a">可选项</RadioItem>
      <RadioItem value="b" disabled>禁用选项</RadioItem>
      <RadioItem value="c">可选项</RadioItem>
    </RadioGroup>
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,oe,re;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("a");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <RadioGroup value={value} onValueChange={setValue} orientation="horizontal">
          <RadioItem value="a">选项 A</RadioItem>
          <RadioItem value="b">选项 B</RadioItem>
          <RadioItem value="c">选项 C</RadioItem>
        </RadioGroup>
        <p style={{
        fontSize: 13,
        color: "#666"
      }}>当前选中：{value}</p>
      </div>;
  }
}`,...(re=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ne,te,ie;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "无文本（仅圆形按钮）",
  render: () => <RadioGroup defaultValue="a" orientation="horizontal">
      <RadioItem value="a" />
      <RadioItem value="b" />
      <RadioItem value="c" />
    </RadioGroup>
}`,...(ie=(te=z.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};const ta=["Default","Horizontal","Sizes","States","Disabled","Controlled","WithoutLabel"];export{C as Controlled,b as Default,S as Disabled,j as Horizontal,_ as Sizes,G as States,z as WithoutLabel,ta as __namedExportsOrder,na as default};
