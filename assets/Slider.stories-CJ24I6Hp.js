import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{r as l,R as nt}from"./index-D4H_InIO.js";import{c as Ee,a as A,b as Me}from"./index-C2ovSOE3.js";import{u as j,c as se}from"./index-TiaNR8H-.js";import{u as rt}from"./index-VPG4c6ZF.js";import{u as ot}from"./index-YtIeenAn.js";import{u as st}from"./index-DXU_LAI1.js";import{u as at}from"./index-Dh_yPxPv.js";import{P as L}from"./index-ByVle3jd.js";import{T as it}from"./index-Dn6qHMI3.js";import{a as lt}from"./utils-HnQPFlDo.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-CwLLzmb4.js";import"./index-BLKoEynJ.js";function ct(e){const t=e+"CollectionProvider",[n,r]=Ee(t),[a,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=v=>{const{scope:p,children:S}=v,x=l.useRef(null),g=l.useRef(new Map).current;return o.jsx(a,{scope:p,itemMap:g,collectionRef:x,children:S})};d.displayName=t;const i=e+"CollectionSlot",f=se(i),u=l.forwardRef((v,p)=>{const{scope:S,children:x}=v,g=s(i,S),b=j(p,g.collectionRef);return o.jsx(f,{ref:b,children:x})});u.displayName=i;const h=e+"CollectionItemSlot",c="data-radix-collection-item",m=se(h),y=l.forwardRef((v,p)=>{const{scope:S,children:x,...g}=v,b=l.useRef(null),C=j(p,b),_=s(h,S);return l.useEffect(()=>(_.itemMap.set(b,{ref:b,...g}),()=>void _.itemMap.delete(b))),o.jsx(m,{[c]:"",ref:C,children:x})});y.displayName=h;function w(v){const p=s(e+"CollectionConsumer",v);return l.useCallback(()=>{const x=p.collectionRef.current;if(!x)return[];const g=Array.from(x.querySelectorAll(`[${c}]`));return Array.from(p.itemMap.values()).sort((_,E)=>g.indexOf(_.ref.current)-g.indexOf(E.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:d,Slot:u,ItemSlot:y},w,r]}var De=["PageUp","PageDown"],Ie=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ze={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},N="Slider",[Q,dt,ut]=ct(N),[ee]=Ee(N,[ut]),[mt,O]=ee(N),Ae=l.forwardRef((e,t)=>{const{name:n,min:r=0,max:a=100,step:s=1,orientation:d="horizontal",disabled:i=!1,minStepsBetweenThumbs:f=0,defaultValue:u=[r],value:h,onValueChange:c=()=>{},onValueCommit:m=()=>{},inverted:y=!1,form:w,...v}=e,p=l.useRef(new Set),S=l.useRef(0),x=l.useRef(!1),b=d==="horizontal"?ft:pt,[C,_]=l.useState(null),E=j(t,_),[R=[],M]=rt({prop:h,defaultProp:u,onChange:T=>{var I;(I=[...p.current][S.current])==null||I.focus({preventScroll:!0,focusVisible:x.current}),x.current=!1,c(T)}}),ne=l.useRef(R),Qe=l.useRef(R);l.useEffect(()=>{const T=w?C==null?void 0:C.ownerDocument.getElementById(w):C==null?void 0:C.closest("form");if(T instanceof HTMLFormElement){const P=()=>M(Qe.current);return T.addEventListener("reset",P),()=>T.removeEventListener("reset",P)}},[C,w,M]);function Ze(T){const P=gt(R,T);B(T,P)}function et(T){B(T,S.current)}function tt(){const T=ne.current[S.current];R[S.current]!==T&&m(R)}function B(T,P,{commit:I}={commit:!1}){const re=Je(s),J=W(Math.round((T-r)/s)*s+r,re),K=Me(J,[r,a]);M((z=[])=>{const D=ht(z,K,P);if(bt(D,f*s)){S.current=D.indexOf(K);const oe=String(D)!==String(z);return oe&&I&&m(D),oe?D:z}else return z})}return o.jsx(mt,{scope:e.__scopeSlider,name:n,disabled:i,min:r,max:a,valueIndexToChangeRef:S,thumbs:p.current,values:R,orientation:d,form:w,children:o.jsx(Q.Provider,{scope:e.__scopeSlider,children:o.jsx(Q.Slot,{scope:e.__scopeSlider,children:o.jsx(b,{"aria-disabled":i,"data-disabled":i?"":void 0,...v,ref:E,onPointerDown:A(v.onPointerDown,()=>{i||(ne.current=R,x.current=!1)}),min:r,max:a,inverted:y,onSlideStart:i?void 0:Ze,onSlideMove:i?void 0:et,onSlideEnd:i?void 0:tt,onHomeKeyDown:()=>{i||(x.current=!0,B(r,0,{commit:!0}))},onEndKeyDown:()=>{i||(x.current=!0,B(a,R.length-1,{commit:!0}))},onStepKeyDown:({event:T,direction:P})=>{if(!i){x.current=!0;const J=De.includes(T.key)||T.shiftKey&&Ie.includes(T.key)?10:1,K=S.current,z=R[K],D=wt(z,{min:r,step:s,direction:P,multiplier:J});B(D,K,{commit:!0})}}})})})})});Ae.displayName=N;var[Ne,Be]=ee(N,{startEdge:"left",endEdge:"right",size:"width",direction:1}),ft=l.forwardRef((e,t)=>{const{min:n,max:r,dir:a,inverted:s,onSlideStart:d,onSlideMove:i,onSlideEnd:f,onStepKeyDown:u,...h}=e,[c,m]=l.useState(null),y=j(t,m),w=l.useRef(void 0),v=ot(a),p=v==="ltr",S=p&&!s||!p&&s;function x(g){const b=w.current||c.getBoundingClientRect(),C=[0,b.width],E=te(C,S?[n,r]:[r,n]);return w.current=b,E(g-b.left)}return o.jsx(Ne,{scope:e.__scopeSlider,startEdge:S?"left":"right",endEdge:S?"right":"left",direction:S?1:-1,size:"width",children:o.jsx(Ke,{dir:v,"data-orientation":"horizontal",...h,ref:y,style:{...h.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:g=>{const b=x(g.clientX);d==null||d(b)},onSlideMove:g=>{const b=x(g.clientX);i==null||i(b)},onSlideEnd:()=>{w.current=void 0,f==null||f()},onStepKeyDown:g=>{const C=ze[S?"from-left":"from-right"].includes(g.key);u==null||u({event:g,direction:C?-1:1})}})})}),pt=l.forwardRef((e,t)=>{const{min:n,max:r,inverted:a,onSlideStart:s,onSlideMove:d,onSlideEnd:i,onStepKeyDown:f,...u}=e,h=l.useRef(null),c=j(t,h),m=l.useRef(void 0),y=!a;function w(v){const p=m.current||h.current.getBoundingClientRect(),S=[0,p.height],g=te(S,y?[r,n]:[n,r]);return m.current=p,g(v-p.top)}return o.jsx(Ne,{scope:e.__scopeSlider,startEdge:y?"bottom":"top",endEdge:y?"top":"bottom",size:"height",direction:y?1:-1,children:o.jsx(Ke,{"data-orientation":"vertical",...u,ref:c,style:{...u.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:v=>{const p=w(v.clientY);s==null||s(p)},onSlideMove:v=>{const p=w(v.clientY);d==null||d(p)},onSlideEnd:()=>{m.current=void 0,i==null||i()},onStepKeyDown:v=>{const S=ze[y?"from-bottom":"from-top"].includes(v.key);f==null||f({event:v,direction:S?-1:1})}})})}),Ke=l.forwardRef((e,t)=>{const{__scopeSlider:n,onSlideStart:r,onSlideMove:a,onSlideEnd:s,onHomeKeyDown:d,onEndKeyDown:i,onStepKeyDown:f,...u}=e,h=O(N,n);return o.jsx(L.span,{...u,ref:t,onKeyDown:A(e.onKeyDown,c=>{c.key==="Home"?(d(c),c.preventDefault()):c.key==="End"?(i(c),c.preventDefault()):De.concat(Ie).includes(c.key)&&(f(c),c.preventDefault())}),onPointerDown:A(e.onPointerDown,c=>{const m=c.target;m.setPointerCapture(c.pointerId),c.preventDefault(),h.thumbs.has(m)?m.focus({preventScroll:!0,focusVisible:!1}):r(c)}),onPointerMove:A(e.onPointerMove,c=>{c.target.hasPointerCapture(c.pointerId)&&a(c)}),onPointerUp:A(e.onPointerUp,c=>{const m=c.target;m.hasPointerCapture(c.pointerId)&&(m.releasePointerCapture(c.pointerId),s(c))})})}),Le="SliderTrack",Oe=l.forwardRef((e,t)=>{const{__scopeSlider:n,...r}=e,a=O(Le,n);return o.jsx(L.span,{"data-disabled":a.disabled?"":void 0,"data-orientation":a.orientation,...r,ref:t})});Oe.displayName=Le;var Z="SliderRange",ke=l.forwardRef((e,t)=>{const{__scopeSlider:n,...r}=e,a=O(Z,n),s=Be(Z,n),d=l.useRef(null),i=j(t,d),f=a.values.length,u=a.values.map(m=>We(m,a.min,a.max)),h=f>1?Math.min(...u):0,c=100-Math.max(...u);return o.jsx(L.span,{"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,...r,ref:i,style:{...e.style,[s.startEdge]:h+"%",[s.endEdge]:c+"%"}})});ke.displayName=Z;var Fe="SliderThumb",[vt,He]=ee(Fe),qe="SliderThumbProvider";function $e(e){const{__scopeSlider:t,name:n,children:r,internal_do_not_use_render:a}=e,s=O(qe,t),d=dt(t),[i,f]=l.useState(null),u=l.useMemo(()=>i?d().findIndex(p=>p.ref.current===i):-1,[d,i]),h=at(i),c=i?!!s.form||!!i.closest("form"):!0,m=s.values[u],y=n??(s.name?s.name+(s.values.length>1?"[]":""):void 0),w=m===void 0?0:We(m,s.min,s.max);l.useEffect(()=>{if(i)return s.thumbs.add(i),()=>{s.thumbs.delete(i)}},[i,s.thumbs]);const v={value:m,name:y,form:s.form,isFormControl:c,index:u,thumb:i,onThumbChange:f,percent:w,size:h};return o.jsx(vt,{scope:t,...v,children:Tt(a)?a(v):r})}$e.displayName=qe;var X="SliderThumbTrigger",Ue=l.forwardRef((e,t)=>{const{__scopeSlider:n,...r}=e,a=O(X,n),s=Be(X,n),{index:d,value:i,percent:f,size:u,onThumbChange:h}=He(X,n),c=j(t,h),m=St(d,a.values.length),y=u==null?void 0:u[s.size],w=y?xt(y,f,s.direction):0;return o.jsx("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[s.startEdge]:`calc(${f}% + ${w}px)`},children:o.jsx(Q.ItemSlot,{scope:n,children:o.jsx(L.span,{role:"slider","aria-label":e["aria-label"]||m,"aria-valuemin":a.min,"aria-valuenow":i,"aria-valuemax":a.max,"aria-orientation":a.orientation,"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,tabIndex:a.disabled?void 0:0,...r,ref:c,style:i===void 0?{display:"none"}:e.style,onFocus:A(e.onFocus,()=>{a.valueIndexToChangeRef.current=d})})})})});Ue.displayName=X;var Ye=l.forwardRef((e,t)=>{const{__scopeSlider:n,name:r,...a}=e;return o.jsx($e,{__scopeSlider:n,name:r,internal_do_not_use_render:({index:s,isFormControl:d})=>o.jsxs(o.Fragment,{children:[o.jsx(Ue,{...a,ref:t,__scopeSlider:n}),d?o.jsx(Xe,{__scopeSlider:n},s):null]})})});Ye.displayName=Fe;var Ge="SliderBubbleInput",Xe=l.forwardRef(({__scopeSlider:e,...t},n)=>{const{value:r,name:a,form:s}=He(Ge,e),d=l.useRef(null),i=j(d,n),f=st(r);return l.useEffect(()=>{const u=d.current;if(!u)return;const h=window.HTMLInputElement.prototype,m=Object.getOwnPropertyDescriptor(h,"value").set;if(f!==r&&m){const y=new Event("input",{bubbles:!0});m.call(u,r),u.dispatchEvent(y)}},[f,r]),o.jsx(L.input,{style:{display:"none"},name:a,form:s,...t,ref:i,defaultValue:r})});Xe.displayName=Ge;function ht(e=[],t,n){const r=[...e];return r[n]=t,r.sort((a,s)=>a-s)}function We(e,t,n){const s=100/(n-t)*(e-t);return Me(s,[0,100])}function St(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function gt(e,t){if(e.length===1)return 0;const n=e.map(a=>Math.abs(a-t)),r=Math.min(...n);return n.indexOf(r)}function xt(e,t,n){const r=e/2,s=te([0,50],[0,r]);return(r-s(t)*n)*n}function yt(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}function bt(e,t){if(t>0){const n=yt(e);return Math.min(...n)>=t}return!0}function te(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function Je(e){if(!Number.isFinite(e))return 0;const t=e.toString();if(t.includes("e")){const[r,a]=t.split("e"),s=r.split(".")[1]||"",d=Number(a);return Math.max(0,s.length-d)}const n=t.split(".")[1];return n?n.length:0}function W(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}function wt(e,{min:t,step:n,direction:r,multiplier:a}){const s=Je(n),d=(e-t)/n,i=Math.round(d),f=W(i*n+t,s)===W(e,s);let u;return f?u=i+a*r:r>0?u=Math.ceil(d):u=Math.floor(d),W(u*n+t,s)}function Tt(e){return typeof e=="function"}const V=nt.forwardRef(({value:e,defaultValue:t,onChange:n,onValueCommit:r,min:a=0,max:s=100,step:d=1,disabled:i=!1,orientation:f="horizontal",size:u="md",tooltip:h=!0,tipFormatter:c,className:m,style:y},w)=>{const[v,p]=l.useState(e??t??[a]),[S,x]=l.useState(null),g=e??v,b=l.useCallback(R=>{p(R),n==null||n(R)},[n]),C=l.useCallback(R=>{x(null),r==null||r(R)},[r]),_=l.useMemo(()=>c??(R=>String(R)),[c]),E=g.length;return o.jsxs(Ae,{ref:w,className:lt("lg-slider",`lg-slider--${u}`,`lg-slider--${f}`,i&&"lg-slider--disabled",m),style:y,value:e,defaultValue:t,onValueChange:b,onValueCommit:C,min:a,max:s,step:d,disabled:i,orientation:f,children:[o.jsx(Oe,{className:"lg-slider__track",children:o.jsx(ke,{className:"lg-slider__range"})}),Array.from({length:E},(R,M)=>o.jsx(Rt,{index:M,tooltip:h,activeIndex:S,setActiveIndex:x,formatTip:_,currentValue:g[M]},M))]})});V.displayName="Slider";function Rt({index:e,tooltip:t,activeIndex:n,setActiveIndex:r,formatTip:a,currentValue:s}){const[d,i]=l.useState(!1),u=t&&(n===e||d),h=o.jsx(Ye,{className:"lg-slider__thumb",onPointerDown:()=>r(e),onPointerEnter:()=>i(!0),onPointerLeave:()=>i(!1)});return t?o.jsx(it,{content:a(s),open:u,placement:"top",arrow:!0,children:h}):h}V.__docgenInfo={description:`Slider 滑块组件
基于 @radix-ui/react-slider，支持单值/range、tooltip、键盘操作`,methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"受控值（单值传 [50]，range 传 [20, 80]）"},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"非受控默认值"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"value"}],return:{name:"void"}}},description:"值变化回调"},onValueCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"value"}],return:{name:"void"}}},description:"拖拽结束时回调"},min:{required:!1,tsType:{name:"number"},description:"最小值，默认 0",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"最大值，默认 100",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"步长，默认 1",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"方向，默认 horizontal",defaultValue:{value:'"horizontal"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"尺寸，默认 md",defaultValue:{value:'"md"',computed:!1}},tooltip:{required:!1,tsType:{name:"boolean"},description:"是否显示 tooltip，默认 true",defaultValue:{value:"true",computed:!1}},tipFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"自定义 tooltip 内容格式化"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"}}};const Ot={title:"Components/Slider",component:V,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},orientation:{control:"select",options:["horizontal","vertical"]},disabled:{control:"boolean"},tooltip:{control:"boolean"},min:{control:"number"},max:{control:"number"},step:{control:"number"}}},k={name:"基础用法",render:()=>{const[e,t]=l.useState([50]);return o.jsxs("div",{style:{width:300},children:[o.jsx(V,{value:e,onChange:t}),o.jsxs("div",{style:{marginTop:12,fontSize:14,color:"#666"},children:["当前值：",e[0]]})]})}},F={name:"范围选择",render:()=>{const[e,t]=l.useState([20,80]);return o.jsxs("div",{style:{width:300},children:[o.jsx(V,{value:e,onChange:t}),o.jsxs("div",{style:{marginTop:12,fontSize:14,color:"#666"},children:["范围：",e[0]," - ",e[1]]})]})}},H={name:"三种尺寸",render:()=>o.jsxs("div",{style:{width:300,display:"flex",flexDirection:"column",gap:32},children:[o.jsxs("div",{children:[o.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"Small"}),o.jsx(V,{defaultValue:[30],size:"sm"})]}),o.jsxs("div",{children:[o.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"Medium (默认)"}),o.jsx(V,{defaultValue:[50],size:"md"})]}),o.jsxs("div",{children:[o.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"Large"}),o.jsx(V,{defaultValue:[70],size:"lg"})]})]})},q={name:"自定义步长",render:()=>{const[e,t]=l.useState([25]);return o.jsxs("div",{style:{width:300},children:[o.jsx(V,{value:e,onChange:t,step:25}),o.jsxs("div",{style:{marginTop:12,fontSize:14,color:"#666"},children:["步长 25，当前值：",e[0]]})]})}},$={name:"自定义 Tooltip 格式",render:()=>{const[e,t]=l.useState([60]);return o.jsxs("div",{style:{width:300},children:[o.jsx(V,{value:e,onChange:t,tipFormatter:n=>`${n}%`}),o.jsxs("div",{style:{marginTop:12,fontSize:14,color:"#666"},children:["格式化为百分比：",e[0],"%"]})]})}},U={name:"禁用状态",render:()=>o.jsx("div",{style:{width:300},children:o.jsx(V,{defaultValue:[40],disabled:!0})})},Y={name:"垂直方向",render:()=>o.jsx("div",{style:{height:200},children:o.jsx(V,{defaultValue:[50],orientation:"vertical"})})},G={name:"隐藏 Tooltip",render:()=>o.jsx("div",{style:{width:300},children:o.jsx(V,{defaultValue:[60],tooltip:!1})})};var ae,ie,le;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "基础用法",
  render: () => {
    const [value, setValue] = useState([50]);
    return <div style={{
      width: 300
    }}>
        <Slider value={value} onChange={setValue} />
        <div style={{
        marginTop: 12,
        fontSize: 14,
        color: "#666"
      }}>
          当前值：{value[0]}
        </div>
      </div>;
  }
}`,...(le=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,ue;F.parameters={...F.parameters,docs:{...(ce=F.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "范围选择",
  render: () => {
    const [value, setValue] = useState([20, 80]);
    return <div style={{
      width: 300
    }}>
        <Slider value={value} onChange={setValue} />
        <div style={{
        marginTop: 12,
        fontSize: 14,
        color: "#666"
      }}>
          范围：{value[0]} - {value[1]}
        </div>
      </div>;
  }
}`,...(ue=(de=F.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,fe,pe;H.parameters={...H.parameters,docs:{...(me=H.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "三种尺寸",
  render: () => <div style={{
    width: 300,
    display: "flex",
    flexDirection: "column",
    gap: 32
  }}>
      <div>
        <div style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>Small</div>
        <Slider defaultValue={[30]} size="sm" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>Medium (默认)</div>
        <Slider defaultValue={[50]} size="md" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: "#666",
        marginBottom: 8
      }}>Large</div>
        <Slider defaultValue={[70]} size="lg" />
      </div>
    </div>
}`,...(pe=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};var ve,he,Se;q.parameters={...q.parameters,docs:{...(ve=q.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: "自定义步长",
  render: () => {
    const [value, setValue] = useState([25]);
    return <div style={{
      width: 300
    }}>
        <Slider value={value} onChange={setValue} step={25} />
        <div style={{
        marginTop: 12,
        fontSize: 14,
        color: "#666"
      }}>
          步长 25，当前值：{value[0]}
        </div>
      </div>;
  }
}`,...(Se=(he=q.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var ge,xe,ye;$.parameters={...$.parameters,docs:{...(ge=$.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "自定义 Tooltip 格式",
  render: () => {
    const [value, setValue] = useState([60]);
    return <div style={{
      width: 300
    }}>
        <Slider value={value} onChange={setValue} tipFormatter={v => \`\${v}%\`} />
        <div style={{
        marginTop: 12,
        fontSize: 14,
        color: "#666"
      }}>
          格式化为百分比：{value[0]}%
        </div>
      </div>;
  }
}`,...(ye=(xe=$.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var be,we,Te;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: "禁用状态",
  render: () => <div style={{
    width: 300
  }}>
      <Slider defaultValue={[40]} disabled />
    </div>
}`,...(Te=(we=U.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Re,Ce,Ve;Y.parameters={...Y.parameters,docs:{...(Re=Y.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: "垂直方向",
  render: () => <div style={{
    height: 200
  }}>
      <Slider defaultValue={[50]} orientation="vertical" />
    </div>
}`,...(Ve=(Ce=Y.parameters)==null?void 0:Ce.docs)==null?void 0:Ve.source}}};var Pe,_e,je;G.parameters={...G.parameters,docs:{...(Pe=G.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: "隐藏 Tooltip",
  render: () => <div style={{
    width: 300
  }}>
      <Slider defaultValue={[60]} tooltip={false} />
    </div>
}`,...(je=(_e=G.parameters)==null?void 0:_e.docs)==null?void 0:je.source}}};const kt=["Default","Range","Sizes","CustomStep","TipFormatter","Disabled","Vertical","NoTooltip"];export{q as CustomStep,k as Default,U as Disabled,G as NoTooltip,F as Range,H as Sizes,$ as TipFormatter,Y as Vertical,kt as __namedExportsOrder,Ot as default};
