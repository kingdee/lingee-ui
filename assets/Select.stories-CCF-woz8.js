import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as c,R as Y}from"./index-D4H_InIO.js";/* empty css                */import{P as Le,b as Me,c as Be}from"./index-_qOqqfhq.js";import{a as F}from"./utils-HnQPFlDo.js";import{X as Ee}from"./XLg-Buk6fdo7.js";import{X as Ve}from"./XCircleFill-C1lg6Dm5.js";import{_ as Oe,e as ke,a as M,b as Re,c as ze}from"./utils-YwZfuvH0-DLWngkAW.js";import{F as Fe}from"./FieldTypeDate-vqESOoGO.js";import{S as Q}from"./Search-D07MehvK.js";import"./index-CJMDPjkl.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-roZDV17k.js";import"./index-CNPoBS2Q.js";import"./Combination-bIa9HupK.js";var Pe=["size","color","fill","rotate","spin","className","style"],ee=c.forwardRef((n,m)=>{var l,s=n.size,t=s===void 0?"1em":s,u=n.color,g=n.fill,v=n.rotate,r=n.spin,f=n.className,i=n.style,S=Oe(n,Pe);return r&&ke(),e.jsx("svg",M(M({ref:m,width:t,height:t,viewBox:"0 0 24 24",fill:(l=g??u)!==null&&l!==void 0?l:"currentColor",className:ze("lingee-icon",r&&"lingee-icon-spin",f),style:M(M({},Re),{},{transform:v?"rotate(".concat(v,"deg)"):void 0,animation:r?"lingee-icon-spin 1s linear infinite":void 0},i),xmlns:"http://www.w3.org/2000/svg","data-icon":"Check"},S),{},{children:e.jsx("path",{d:"M18.0403 4.97682C18.3543 4.52251 18.9766 4.4089 19.4309 4.72291C19.885 5.03699 19.9988 5.6593 19.6848 6.11354L10.6096 19.2444C10.4372 19.4937 10.16 19.6524 9.85766 19.6741C9.55545 19.6956 9.25906 19.5778 9.05297 19.3557L4.12914 14.0462C3.75372 13.6413 3.77819 13.0086 4.18286 12.6331C4.58783 12.2575 5.22042 12.2808 5.59594 12.6858L9.67211 17.0823L18.0403 4.97682Z"})}))});ee.displayName="Check";ee.__docgenInfo={description:"",methods:[],displayName:"Check"};var He=["size","color","fill","rotate","spin","className","style"],ne=c.forwardRef((n,m)=>{var l,s=n.size,t=s===void 0?"1em":s,u=n.color,g=n.fill,v=n.rotate,r=n.spin,f=n.className,i=n.style,S=Oe(n,He);return r&&ke(),e.jsx("svg",M(M({ref:m,width:t,height:t,viewBox:"0 0 24 24",fill:(l=g??u)!==null&&l!==void 0?l:"currentColor",className:ze("lingee-icon",r&&"lingee-icon-spin",f),style:M(M({},Re),{},{transform:v?"rotate(".concat(v,"deg)"):void 0,animation:r?"lingee-icon-spin 1s linear infinite":void 0},i),xmlns:"http://www.w3.org/2000/svg","data-icon":"ChevronDown"},S),{},{children:e.jsx("path",{d:"M17.793 8.29302C18.1835 7.90249 18.8166 7.90249 19.2071 8.29302C19.5975 8.68355 19.5976 9.3166 19.2071 9.70708L13.5557 15.3584C12.6966 16.2175 11.3035 16.2174 10.4444 15.3584L4.79302 9.70708C4.40249 9.31655 4.40249 8.68354 4.79302 8.29302C5.18354 7.90249 5.81655 7.90249 6.20708 8.29302L11.8584 13.9444C11.9366 14.0223 12.0636 14.0224 12.1416 13.9444L17.793 8.29302Z"})}))});ne.displayName="ChevronDown";ne.__docgenInfo={description:"",methods:[],displayName:"ChevronDown"};function Ke({mode:n,value:m,defaultValue:l,options:s,onChange:t,showSearch:u,filterOption:g,onSearch:v,onDropdownVisibleChange:r,disabled:f}){const[i,S]=c.useState(!1),[C,T]=c.useState(""),[O,k]=c.useState(-1),a=c.useRef(null),y=m!==void 0,[R,z]=c.useState(()=>l!==void 0?l:n==="multiple"?[]:""),h=y?m:R,x=c.useMemo(()=>n==="multiple"?Array.isArray(h)?h:[]:h!==void 0&&h!==""?[h]:[],[h,n]),w=c.useMemo(()=>{if(!u||!C||g===!1)return s;const o=typeof g=="function"?g:(d,p)=>(typeof p.label=="string"?p.label:String(p.label)).toLowerCase().includes(d.toLowerCase());return s.filter(d=>o(C,d))},[s,C,u,g]),A=c.useCallback(()=>{f||(S(!0),k(-1),r==null||r(!0))},[f,r]),D=c.useCallback(()=>{S(!1),T(""),k(-1),r==null||r(!1)},[r]),P=c.useCallback(()=>{i?D():A()},[i,A,D]),V=c.useCallback(o=>{T(o),k(-1),v==null||v(o),!i&&o&&(S(!0),r==null||r(!0))},[v,i,r]),B=c.useCallback(o=>{const d=s.find(p=>p.value===o);if(!(!d||d.disabled))if(n==="single"){const p=o;y||z(p),t==null||t(p,d),D()}else{const p=Array.isArray(h)?h:[],_=p.includes(o);let q;_?q=p.filter(L=>L!==o):q=[...p,o],y||z(q);const N=q.map(L=>s.find(Ie=>Ie.value===L)).filter(Boolean);t==null||t(q,N),T("")}},[n,h,y,s,t,D]),E=c.useCallback(o=>{if(n!=="multiple")return;const p=(Array.isArray(h)?h:[]).filter(q=>q!==o);y||z(p);const _=p.map(q=>s.find(N=>N.value===q)).filter(Boolean);t==null||t(p,_)},[n,h,y,s,t]),b=c.useCallback(()=>{if(n==="single")y||z(""),t==null||t("",{value:"",label:""});else{const o=[];y||z(o),t==null||t(o,[])}T("")},[n,y,t]),I=c.useCallback(o=>{if(!f)switch(o.key){case"ArrowDown":{if(o.preventDefault(),!i){A();return}k(d=>{var q;const p=w.length-1;let _=d+1;for(;_<=p&&((q=w[_])!=null&&q.disabled);)_++;return _>p?d:_});break}case"ArrowUp":{if(o.preventDefault(),!i)return;k(d=>{var _;let p=d-1;for(;p>=0&&((_=w[p])!=null&&_.disabled);)p--;return p<0?d:p});break}case"Enter":{if(o.preventDefault(),!i){A();return}O>=0&&O<w.length&&B(w[O].value);break}case"Escape":{o.preventDefault(),D();break}case"Backspace":{if(n==="multiple"&&C===""){const d=Array.isArray(h)?h:[];d.length>0&&E(d[d.length-1])}break}}},[f,i,O,w,C,n,h,A,D,B,E]);return c.useEffect(()=>{if(i&&u){const o=setTimeout(()=>{var d;(d=a.current)==null||d.focus()},50);return()=>clearTimeout(o)}},[i,u]),{open:i,setOpen:S,searchValue:C,searchInputRef:a,activeIndex:O,selectedValues:x,filteredOptions:w,handleOpen:A,handleClose:D,toggleOpen:P,handleSearchChange:V,handleSelect:B,handleRemove:E,handleClear:b,handleKeyDown:I}}function $e({mode:n,size:m,open:l,disabled:s,error:t,placeholder:u,suffixIcon:g,allowClear:v,maxTagCount:r,showSearch:f,searchValue:i,searchInputRef:S,onSearchChange:C,selectedValues:T,options:O,onRemove:k,onClear:a,onClick:y,onKeyDown:R,className:z},h){const x=T.length>0,w=b=>{const I=O.find(o=>o.value===b);return(I==null?void 0:I.label)??String(b)},A=v&&x&&!s,D=()=>A?e.jsx("span",{className:"lg-select__clear",role:"button","aria-label":"清空",onMouseDown:b=>{b.preventDefault(),b.stopPropagation()},onClick:b=>{b.stopPropagation(),a()},children:e.jsx(Ve,{})}):g?e.jsx("span",{className:"lg-select__suffix",children:g}):e.jsx("span",{className:F("lg-select__arrow",l&&"lg-select__arrow--open"),children:e.jsx(ne,{})}),P=()=>f?e.jsxs("div",{className:"lg-select__search-wrap",children:[e.jsx("input",{ref:S,className:"lg-select__search-input",value:i,onChange:b=>C(b.target.value),onKeyDown:R,placeholder:x?String(w(T[0])):u,disabled:s,autoComplete:"off"}),!i&&x&&!l&&e.jsx("span",{className:"lg-select__value lg-select__value--overlay",children:w(T[0])})]}):x?e.jsx("span",{className:"lg-select__value",children:w(T[0])}):e.jsx("span",{className:"lg-select__placeholder",children:u}),V=()=>{const b=r!==void 0?T.slice(0,r):T,I=r!==void 0?Math.max(0,T.length-r):0;return e.jsxs("div",{className:"lg-select__tags-wrap",children:[b.map(o=>e.jsxs("span",{className:"lg-select__tag",children:[e.jsx("span",{className:"lg-select__tag-text",children:w(o)}),!s&&e.jsx("span",{className:"lg-select__tag-close",role:"button",tabIndex:-1,onMouseDown:d=>{d.preventDefault(),d.stopPropagation()},onClick:d=>{d.stopPropagation(),k(o)},children:e.jsx(Ee,{size:10})})]},String(o))),I>0&&e.jsxs("span",{className:"lg-select__tag lg-select__tag--overflow",children:["+",I]}),f&&e.jsx("input",{ref:S,className:"lg-select__search-input lg-select__search-input--inline",value:i,onChange:o=>C(o.target.value),onKeyDown:R,placeholder:x?"":u,disabled:s,autoComplete:"off",style:{width:i?`${Math.max(i.length*14+8,20)}px`:x?"20px":"100%"}}),!f&&!x&&e.jsx("span",{className:"lg-select__placeholder",children:u})]})},B=F("lg-select__trigger",`lg-select__trigger--${m}`,l&&"lg-select__trigger--open",t&&"lg-select__trigger--error",s&&"lg-select__trigger--disabled",n==="multiple"&&"lg-select__trigger--multiple",n==="multiple"&&x&&"lg-select__trigger--has-tags",z),E=()=>{var b;s||(f?((b=S.current)==null||b.focus(),l||y()):y())};return e.jsxs("div",{ref:h,className:B,role:"combobox","aria-expanded":l,"aria-haspopup":"listbox","aria-disabled":s,tabIndex:s||f?-1:0,onClick:E,onKeyDown:f?void 0:R,children:[e.jsx("div",{className:"lg-select__content",children:n==="single"?P():V()}),D()]})}const De=Y.forwardRef($e);De.__docgenInfo={description:"",methods:[],displayName:"SelectTrigger",props:{mode:{required:!0,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:""},size:{required:!0,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},suffixIcon:{required:!1,tsType:{name:"ReactNode"},description:""},allowClear:{required:!0,tsType:{name:"boolean"},description:""},maxTagCount:{required:!1,tsType:{name:"number"},description:""},showSearch:{required:!0,tsType:{name:"boolean"},description:""},searchValue:{required:!0,tsType:{name:"string"},description:""},searchInputRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement | null>",elements:[{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}]}]},description:""},onSearchChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},selectedValues:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption",elements:[{name:"T"}],raw:"SelectOption<T>"}],raw:"SelectOption<T>[]"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""},onClear:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent"},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Ue({options:n,selectedValues:m,activeIndex:l,multiple:s,loading:t,notFoundContent:u,dropdownRender:g,maxHeight:v=256,onSelect:r,onScroll:f,className:i},S){const C=c.useRef(null);c.useEffect(()=>{if(l<0)return;const a=C.current;if(!a)return;const y=a.children[l];y==null||y.scrollIntoView({block:"nearest"})},[l]);const O=t?e.jsxs("div",{className:"lg-select-dropdown__loading",children:[e.jsx("span",{className:"lg-select-dropdown__loading-dot"}),"加载中..."]}):n.length===0?e.jsx("div",{className:"lg-select-dropdown__empty",children:u||"无匹配选项"}):e.jsx("div",{ref:C,className:"lg-select-dropdown__list",role:"listbox","aria-multiselectable":s,onScroll:f,style:{maxHeight:v},children:n.map((a,y)=>{const R=m.includes(a.value),z=y===l,h=a.disabled;return e.jsxs("div",{className:F("lg-select-dropdown__option",R&&"lg-select-dropdown__option--selected",z&&"lg-select-dropdown__option--active",h&&"lg-select-dropdown__option--disabled"),role:"option","aria-selected":R,"aria-disabled":h,onMouseDown:x=>x.preventDefault(),onClick:()=>{h||r(a.value)},children:[e.jsx("span",{className:"lg-select-dropdown__option-label",children:a.label}),R&&e.jsx("span",{className:"lg-select-dropdown__option-check",children:e.jsx(ee,{size:16})})]},String(a.value))})}),k=g?g(O):O;return e.jsx("div",{ref:S,className:F("lg-select-dropdown",i),children:k})}const Ae=Y.forwardRef(Ue);Ae.__docgenInfo={description:"",methods:[],displayName:"SelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption",elements:[{name:"T"}],raw:"SelectOption<T>"}],raw:"SelectOption<T>[]"},description:""},selectedValues:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},activeIndex:{required:!0,tsType:{name:"number"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},notFoundContent:{required:!1,tsType:{name:"ReactNode"},description:""},dropdownRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(menu: ReactNode) => ReactNode",signature:{arguments:[{type:{name:"ReactNode"},name:"menu"}],return:{name:"ReactNode"}}},description:""},maxHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"256",computed:!1}},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""},onScroll:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.UIEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactUIEvent",raw:"React.UIEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Xe({mode:n="single",value:m,defaultValue:l,onChange:s,options:t=[],showSearch:u=!1,filterOption:g,onSearch:v,loading:r=!1,disabled:f=!1,error:i=!1,size:S="md",placeholder:C,allowClear:T=!1,suffixIcon:O,maxTagCount:k,dropdown:a,onDropdownVisibleChange:y,className:R,style:z},h){const x=c.useRef(null),{open:w,searchValue:A,searchInputRef:D,activeIndex:P,selectedValues:V,filteredOptions:B,handleClose:E,toggleOpen:b,handleSearchChange:I,handleSelect:o,handleRemove:d,handleClear:p,handleKeyDown:_}=Ke({mode:n,value:m,defaultValue:l,options:t,onChange:s,showSearch:u,filterOption:g,onSearch:v,onDropdownVisibleChange:y,disabled:f}),q=()=>{var L;const N=a==null?void 0:a.width;return N==="auto"?{}:typeof N=="number"?{width:N}:{width:((L=x.current)==null?void 0:L.offsetWidth)||"auto"}};return e.jsx("div",{ref:h,className:F("lg-select",R),style:z,children:e.jsxs(Le,{open:w,onOpenChange:N=>{N||E()},children:[e.jsx(Me,{children:e.jsx(De,{ref:x,mode:n,size:S,open:w,disabled:f,error:i,placeholder:C,suffixIcon:O,allowClear:T,maxTagCount:k,showSearch:u,searchValue:A,searchInputRef:D,onSearchChange:I,selectedValues:V,options:t,onRemove:d,onClear:p,onClick:b,onKeyDown:_})}),e.jsx(Be,{className:F("lg-select-popover",a==null?void 0:a.className),side:(a==null?void 0:a.side)??"bottom",align:(a==null?void 0:a.align)??"start",sideOffset:(a==null?void 0:a.sideOffset)??4,alignOffset:a==null?void 0:a.alignOffset,collisionPadding:(a==null?void 0:a.collisionPadding)??8,container:a==null?void 0:a.container,style:q(),onOpenAutoFocus:N=>{N.preventDefault()},onCloseAutoFocus:N=>{var L;N.preventDefault(),u||(L=x.current)==null||L.focus()},children:e.jsx(Ae,{options:B,selectedValues:V,activeIndex:P,multiple:n==="multiple",loading:r,notFoundContent:a==null?void 0:a.notFoundContent,dropdownRender:a==null?void 0:a.render,maxHeight:a==null?void 0:a.maxHeight,onSelect:o,onScroll:a==null?void 0:a.onScroll})})]})})}const j=Y.forwardRef(Xe);j.displayName="Select";j.__docgenInfo={description:`支持泛型的 forwardRef
用法：<Select<string> options={...} />`,methods:[],displayName:"Select",props:{mode:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:'选择模式，默认 "single"',defaultValue:{value:'"single"',computed:!1}},value:{required:!1,tsType:{name:"union",raw:"T | T[]",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"}]},description:"受控值：单选为 T，多选为 T[]"},defaultValue:{required:!1,tsType:{name:"union",raw:"T | T[]",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"}]},description:"非受控默认值"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T | T[], option: SelectOption<T> | SelectOption<T>[]) => void",signature:{arguments:[{type:{name:"union",raw:"T | T[]",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"}]},name:"value"},{type:{name:"union",raw:"SelectOption<T> | SelectOption<T>[]",elements:[{name:"SelectOption",elements:[{name:"T"}],raw:"SelectOption<T>"},{name:"Array",elements:[{name:"SelectOption",elements:[{name:"T"}],raw:"SelectOption<T>"}],raw:"SelectOption<T>[]"}]},name:"option"}],return:{name:"void"}}},description:"值变化回调"},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption",elements:[{name:"T"}],raw:"SelectOption<T>"}],raw:"SelectOption<T>[]"},description:"选项列表",defaultValue:{value:"[]",computed:!1}},showSearch:{required:!1,tsType:{name:"boolean"},description:"是否支持搜索，默认 false",defaultValue:{value:"false",computed:!1}},filterOption:{required:!1,tsType:{name:"union",raw:"false | ((inputValue: string, option: SelectOption<T>) => boolean)",elements:[{name:"literal",value:"false"},{name:"unknown"}]},description:`前端过滤函数
- 默认按 label 文本做 includes 匹配
- 设为 false 时关闭前端过滤（配合 onSearch 远程搜索）`},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(keyword: string) => void",signature:{arguments:[{type:{name:"string"},name:"keyword"}],return:{name:"void"}}},description:"搜索关键词变化回调（用于远程搜索场景）"},loading:{required:!1,tsType:{name:"boolean"},description:"加载中状态（远程搜索时展示 loading）",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"错误态",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:'尺寸，默认 "md"',defaultValue:{value:'"md"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"占位文本"},allowClear:{required:!1,tsType:{name:"boolean"},description:"是否显示清空按钮，默认 false",defaultValue:{value:"false",computed:!1}},suffixIcon:{required:!1,tsType:{name:"ReactNode"},description:"自定义后缀图标（覆盖默认箭头）"},maxTagCount:{required:!1,tsType:{name:"number"},description:"多选模式下最多展示的 Tag 数量，超出显示 +N"},dropdown:{required:!1,tsType:{name:"SelectDropdownProps"},description:"下拉面板配置"},onDropdownVisibleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"下拉展开/收起回调"},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const dn={title:"Components/Select",tags:["autodocs"]},H={render:()=>{const[n,m]=c.useState("");return e.jsxs("div",{style:{width:320,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"权限"}),e.jsx(j,{options:[{label:"仅查看",value:"view"},{label:"可编辑",value:"edit"},{label:"管理员",value:"admin"}],value:n,onChange:l=>m(l),placeholder:"请选择权限"})]})}},K={name:"搜索单选",render:()=>{const[n,m]=c.useState(""),l=[{label:"张三",value:"zhangsan"},{label:"李四",value:"lisi"},{label:"王五",value:"wangwu"},{label:"赵六",value:"zhaoliu"},{label:"钱七",value:"qianqi"},{label:"孙八",value:"sunba"}];return e.jsxs("div",{style:{width:320,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"分享对象"}),e.jsx(j,{showSearch:!0,options:l,value:n,onChange:s=>m(s),placeholder:"搜索姓名/工号/部门",suffixIcon:e.jsx(Q,{size:16})})]})}},$={name:"远程搜索",render:()=>{const[n,m]=c.useState(""),[l,s]=c.useState([]),[t,u]=c.useState(!1),g=v=>{u(!0),setTimeout(()=>{const r=["张三","李四","王五","赵六","钱七","孙八","周九","吴十","郑一","冯二"],f=v?r.filter(i=>i.includes(v)):r;s(f.map(i=>({label:i,value:i}))),u(!1)},500)};return e.jsxs("div",{style:{width:320,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"分享对象（远程搜索）"}),e.jsx(j,{showSearch:!0,filterOption:!1,options:l,value:n,onChange:v=>m(v),onSearch:g,loading:t,placeholder:"搜索姓名/工号/部门",suffixIcon:e.jsx(Q,{size:16}),dropdown:{notFoundContent:t?void 0:"未找到匹配用户"}})]})}},U={name:"多选 + Tag",render:()=>{const[n,m]=c.useState([]);return e.jsxs("div",{style:{width:320,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"生效星期"}),e.jsx(j,{mode:"multiple",options:[{label:"周一",value:"1"},{label:"周二",value:"2"},{label:"周三",value:"3"},{label:"周四",value:"4"},{label:"周五",value:"5"},{label:"周六",value:"6"},{label:"周日",value:"7"}],value:n,onChange:l=>m(l),placeholder:"请选择生效星期",allowClear:!0})]})}},X={name:"多选 + 搜索",render:()=>{const[n,m]=c.useState([]),l=[{label:"张三",value:"zhangsan"},{label:"李四",value:"lisi"},{label:"王五",value:"wangwu"},{label:"赵六",value:"zhaoliu"},{label:"钱七",value:"qianqi"},{label:"孙八",value:"sunba"}];return e.jsxs("div",{style:{width:360,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"分享对象（多选 + 搜索）"}),e.jsx(j,{mode:"multiple",showSearch:!0,options:l,value:n,onChange:s=>m(s),placeholder:"搜索姓名/工号/部门",suffixIcon:e.jsx(Q,{size:16}),allowClear:!0})]})}},W={name:"多选 + 远程搜索",render:()=>{const[n,m]=c.useState([]),[l,s]=c.useState([]),[t,u]=c.useState(!1),g=v=>{u(!0),setTimeout(()=>{const r=["张三","李四","王五","赵六","钱七","孙八","周九","吴十","郑一","冯二"],f=v?r.filter(i=>i.includes(v)):r;s(f.map(i=>({label:i,value:i}))),u(!1)},500)};return e.jsxs("div",{style:{width:360,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"分享对象（多选 + 远程搜索）"}),e.jsx(j,{mode:"multiple",showSearch:!0,filterOption:!1,options:l,value:n,onChange:v=>m(v),onSearch:g,loading:t,placeholder:"搜索姓名/工号/部门",suffixIcon:e.jsx(Q,{size:16}),allowClear:!0,dropdown:{notFoundContent:t?void 0:"未找到匹配用户"}})]})}},Z={name:"自定义面板（日期选择）",render:()=>{const[n,m]=c.useState([]),l=Array.from({length:31},(t,u)=>u+1),s=t=>{m(u=>u.includes(t)?u.filter(g=>g!==t):[...u,t])};return e.jsxs("div",{style:{width:320,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"生效日期"}),e.jsx(j,{mode:"multiple",options:l.map(t=>({label:String(t),value:t})),value:n,onChange:t=>m(t),placeholder:"请选择每月生效日期（可多选）",suffixIcon:e.jsx(Fe,{size:16}),allowClear:!0,dropdown:{width:320,render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4,padding:12},children:l.map(t=>e.jsx("button",{type:"button",onMouseDown:u=>u.preventDefault(),onClick:()=>s(t),style:{width:36,height:36,borderRadius:8,border:"none",cursor:"pointer",fontSize:14,background:n.includes(t)?"var(--lg-g-bg-color-primary-emphasis)":"transparent",color:n.includes(t)?"#fff":"var(--lg-g-fg-color-default)"},children:t},t))})}})]})}},G={name:"尺寸",render:()=>e.jsxs("div",{style:{width:320,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsx(j,{size:"sm",options:[{label:"仅查看",value:"view"},{label:"可编辑",value:"edit"}],placeholder:"sm 尺寸"}),e.jsx(j,{size:"md",options:[{label:"仅查看",value:"view"},{label:"可编辑",value:"edit"}],placeholder:"md 尺寸（默认）"}),e.jsx(j,{size:"lg",options:[{label:"仅查看",value:"view"},{label:"可编辑",value:"edit"}],placeholder:"lg 尺寸"})]})},J={name:"状态",render:()=>e.jsxs("div",{style:{width:320,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsx(j,{options:[{label:"仅查看",value:"view"}],placeholder:"禁用态",disabled:!0}),e.jsx(j,{options:[{label:"仅查看",value:"view"}],placeholder:"错误态",error:!0}),e.jsx(j,{options:[{label:"永久有效",value:"forever"}],value:"forever",allowClear:!0,placeholder:"可清空"})]})};var te,ae,le;H.parameters={...H.parameters,docs:{...(te=H.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>("");
    return <div style={{
      width: 320,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>权限</h4>
        <Select options={[{
        label: "仅查看",
        value: "view"
      }, {
        label: "可编辑",
        value: "edit"
      }, {
        label: "管理员",
        value: "admin"
      }]} value={value} onChange={v => setValue(v as string)} placeholder="请选择权限" />
      </div>;
  }
}`,...(le=(ae=H.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var se,re,ie;K.parameters={...K.parameters,docs:{...(se=K.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "搜索单选",
  render: () => {
    const [value, setValue] = useState<string>("");
    const allOptions = [{
      label: "张三",
      value: "zhangsan"
    }, {
      label: "李四",
      value: "lisi"
    }, {
      label: "王五",
      value: "wangwu"
    }, {
      label: "赵六",
      value: "zhaoliu"
    }, {
      label: "钱七",
      value: "qianqi"
    }, {
      label: "孙八",
      value: "sunba"
    }];
    return <div style={{
      width: 320,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>分享对象</h4>
        <Select showSearch options={allOptions} value={value} onChange={v => setValue(v as string)} placeholder="搜索姓名/工号/部门" suffixIcon={<Search size={16} />} />
      </div>;
  }
}`,...(ie=(re=K.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,ue,ce;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "远程搜索",
  render: () => {
    const [value, setValue] = useState<string>("");
    const [options, setOptions] = useState<{
      label: string;
      value: string;
    }[]>([]);
    const [loading, setLoading] = useState(false);
    const handleSearch = (keyword: string) => {
      setLoading(true);
      // 模拟远程搜索
      setTimeout(() => {
        const mockData = ["张三", "李四", "王五", "赵六", "钱七", "孙八", "周九", "吴十", "郑一", "冯二"];
        const filtered = keyword ? mockData.filter(name => name.includes(keyword)) : mockData;
        setOptions(filtered.map(name => ({
          label: name,
          value: name
        })));
        setLoading(false);
      }, 500);
    };
    return <div style={{
      width: 320,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>分享对象（远程搜索）</h4>
        <Select showSearch filterOption={false} options={options} value={value} onChange={v => setValue(v as string)} onSearch={handleSearch} loading={loading} placeholder="搜索姓名/工号/部门" suffixIcon={<Search size={16} />} dropdown={{
        notFoundContent: loading ? undefined : "未找到匹配用户"
      }} />
      </div>;
  }
}`,...(ce=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,me,pe;U.parameters={...U.parameters,docs:{...(de=U.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "多选 + Tag",
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: 320,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>生效星期</h4>
        <Select mode="multiple" options={[{
        label: "周一",
        value: "1"
      }, {
        label: "周二",
        value: "2"
      }, {
        label: "周三",
        value: "3"
      }, {
        label: "周四",
        value: "4"
      }, {
        label: "周五",
        value: "5"
      }, {
        label: "周六",
        value: "6"
      }, {
        label: "周日",
        value: "7"
      }]} value={value} onChange={v => setValue(v as string[])} placeholder="请选择生效星期" allowClear />
      </div>;
  }
}`,...(pe=(me=U.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,ve,fe;X.parameters={...X.parameters,docs:{...(ge=X.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "多选 + 搜索",
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    const allOptions = [{
      label: "张三",
      value: "zhangsan"
    }, {
      label: "李四",
      value: "lisi"
    }, {
      label: "王五",
      value: "wangwu"
    }, {
      label: "赵六",
      value: "zhaoliu"
    }, {
      label: "钱七",
      value: "qianqi"
    }, {
      label: "孙八",
      value: "sunba"
    }];
    return <div style={{
      width: 360,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>分享对象（多选 + 搜索）</h4>
        <Select mode="multiple" showSearch options={allOptions} value={value} onChange={v => setValue(v as string[])} placeholder="搜索姓名/工号/部门" suffixIcon={<Search size={16} />} allowClear />
      </div>;
  }
}`,...(fe=(ve=X.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var he,ye,be;W.parameters={...W.parameters,docs:{...(he=W.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: "多选 + 远程搜索",
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    const [options, setOptions] = useState<{
      label: string;
      value: string;
    }[]>([]);
    const [loading, setLoading] = useState(false);
    const handleSearch = (keyword: string) => {
      setLoading(true);
      setTimeout(() => {
        const mockData = ["张三", "李四", "王五", "赵六", "钱七", "孙八", "周九", "吴十", "郑一", "冯二"];
        const filtered = keyword ? mockData.filter(name => name.includes(keyword)) : mockData;
        setOptions(filtered.map(name => ({
          label: name,
          value: name
        })));
        setLoading(false);
      }, 500);
    };
    return <div style={{
      width: 360,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>分享对象（多选 + 远程搜索）</h4>
        <Select mode="multiple" showSearch filterOption={false} options={options} value={value} onChange={v => setValue(v as string[])} onSearch={handleSearch} loading={loading} placeholder="搜索姓名/工号/部门" suffixIcon={<Search size={16} />} allowClear dropdown={{
        notFoundContent: loading ? undefined : "未找到匹配用户"
      }} />
      </div>;
  }
}`,...(be=(ye=W.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var Se,xe,Te;Z.parameters={...Z.parameters,docs:{...(Se=Z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: "自定义面板（日期选择）",
  render: () => {
    const [value, setValue] = useState<number[]>([]);
    const days = Array.from({
      length: 31
    }, (_, i) => i + 1);
    const toggleDay = (day: number) => {
      setValue(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);
    };
    return <div style={{
      width: 320,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>生效日期</h4>
        <Select<number> mode="multiple" options={days.map(d => ({
        label: String(d),
        value: d
      }))} value={value} onChange={v => setValue(v as number[])} placeholder="请选择每月生效日期（可多选）" suffixIcon={<FieldTypeDate size={16} />} allowClear dropdown={{
        width: 320,
        render: () => <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 4,
          padding: 12
        }}>
                {days.map(day => <button key={day} type="button" onMouseDown={e => e.preventDefault()} onClick={() => toggleDay(day)} style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            fontSize: 14,
            background: value.includes(day) ? "var(--lg-g-bg-color-primary-emphasis)" : "transparent",
            color: value.includes(day) ? "#fff" : "var(--lg-g-fg-color-default)"
          }}>
                    {day}
                  </button>)}
              </div>
      }} />
      </div>;
  }
}`,...(Te=(xe=Z.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var we,_e,je;G.parameters={...G.parameters,docs:{...(we=G.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: "尺寸",
  render: () => <div style={{
    width: 320,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <Select size="sm" options={[{
      label: "仅查看",
      value: "view"
    }, {
      label: "可编辑",
      value: "edit"
    }]} placeholder="sm 尺寸" />
      <Select size="md" options={[{
      label: "仅查看",
      value: "view"
    }, {
      label: "可编辑",
      value: "edit"
    }]} placeholder="md 尺寸（默认）" />
      <Select size="lg" options={[{
      label: "仅查看",
      value: "view"
    }, {
      label: "可编辑",
      value: "edit"
    }]} placeholder="lg 尺寸" />
    </div>
}`,...(je=(_e=G.parameters)==null?void 0:_e.docs)==null?void 0:je.source}}};var Ce,qe,Ne;J.parameters={...J.parameters,docs:{...(Ce=J.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: "状态",
  render: () => <div style={{
    width: 320,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <Select options={[{
      label: "仅查看",
      value: "view"
    }]} placeholder="禁用态" disabled />
      <Select options={[{
      label: "仅查看",
      value: "view"
    }]} placeholder="错误态" error />
      <Select options={[{
      label: "永久有效",
      value: "forever"
    }]} value="forever" allowClear placeholder="可清空" />
    </div>
}`,...(Ne=(qe=J.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};const mn=["Basic","SearchSingle","RemoteSearch","MultipleTag","MultipleSearch","MultipleRemoteSearch","CustomDropdown","Sizes","States"];export{H as Basic,Z as CustomDropdown,W as MultipleRemoteSearch,X as MultipleSearch,U as MultipleTag,$ as RemoteSearch,K as SearchSingle,G as Sizes,J as States,mn as __namedExportsOrder,dn as default};
