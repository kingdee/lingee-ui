import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r,R as S}from"./index-D4H_InIO.js";/* empty css                */import{B as j}from"./index-Yd_vdD-n.js";import{P as Q,b as Z,c as Ve}from"./index-_qOqqfhq.js";import{a as k}from"./utils-HnQPFlDo.js";import"./index-ukuGrK6K.js";import"./index-CJMDPjkl.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-roZDV17k.js";import"./index-CNPoBS2Q.js";import"./utils-YwZfuvH0-DLWngkAW.js";import"./Combination-bIa9HupK.js";const X=r.createContext({close:()=>{}}),Ae=r.createContext({});function f({children:n,open:t,defaultOpen:o,onOpenChange:s,modal:m=!0,items:p,contentProps:d,selectedKeys:u,loading:a,loadingContent:l,emptyContent:c,dropdownRender:i}){const[D,B]=r.useState(o??!1),b=t!==void 0,z=b?t:D,I=r.useCallback(w=>{b||B(w),s==null||s(w)},[b,s]),x=r.useCallback(()=>I(!1),[I]);if(p){const w=u?new Set(u):null;let g;a?g=l??e.jsx("div",{className:"lg-dropdown__status"}):p.length===0&&c?g=c:g=p.map((y,te)=>{if(y.type==="separator")return e.jsx(T,{},`sep-${te}`);if(y.type==="label")return e.jsx(M,{children:y.label},`label-${te}`);const Ge=(w==null?void 0:w.has(y.key))??!1;return e.jsx(h,{icon:y.icon,danger:y.danger,disabled:y.disabled,onSelect:y.onSelect,selected:Ge,children:y.label},y.key)});const _=i?i(g):g;return e.jsx(X.Provider,{value:{close:x},children:e.jsxs(Q,{open:z,onOpenChange:I,modal:m,children:[e.jsx(Z,{children:n}),e.jsx(C,{...d,children:_})]})})}return e.jsx(X.Provider,{value:{close:x},children:e.jsx(Q,{open:z,onOpenChange:I,modal:m,children:n})})}f.displayName="Dropdown";const L=S.forwardRef(({children:n,asChild:t=!0},o)=>e.jsx(Z,{ref:o,asChild:t,children:n}));L.displayName="DropdownTrigger";const C=S.forwardRef(({children:n,className:t,side:o="bottom",align:s="start",sideOffset:m=4,alignOffset:p,collisionPadding:d=8,container:u,minWidth:a=128,onEscapeKeyDown:l,onPointerDownOutside:c,onInteractOutside:i,onCloseAutoFocus:D},B)=>{const b=r.useRef(null),z=r.useCallback(x=>{const w=b.current;if(!w)return;const g=Array.from(w.querySelectorAll("[role='menuitem']:not([data-disabled='true'])"));if(!g.length)return;const _=g.indexOf(document.activeElement);if(x.key==="ArrowDown"){x.preventDefault();const y=_<g.length-1?_+1:0;g[y].focus()}else if(x.key==="ArrowUp"){x.preventDefault();const y=_>0?_-1:g.length-1;g[y].focus()}else x.key==="Home"?(x.preventDefault(),g[0].focus()):x.key==="End"&&(x.preventDefault(),g[g.length-1].focus())},[]),I=r.useCallback(x=>{x.preventDefault(),requestAnimationFrame(()=>{const w=b.current;if(!w)return;const g=w.querySelector("[role='menuitem']:not([data-disabled='true'])");g==null||g.focus()})},[]);return e.jsx(Ve,{ref:B,className:k("lg-dropdown",t),side:o,align:s,sideOffset:m,alignOffset:p,collisionPadding:d,container:u,onEscapeKeyDown:l,onPointerDownOutside:c,onInteractOutside:i,onCloseAutoFocus:D,onOpenAutoFocus:I,children:e.jsx("div",{ref:b,role:"menu",className:"lg-dropdown__menu",style:{minWidth:a},onKeyDown:z,children:n})})});C.displayName="DropdownContent";const h=S.forwardRef(({children:n,className:t,disabled:o=!1,danger:s=!1,icon:m,selected:p=!1,onSelect:d},u)=>{const{close:a}=r.useContext(X),l=r.useCallback(()=>{if(o)return;const i=new Event("select",{cancelable:!0});d==null||d(i),i.defaultPrevented||a()},[o,d,a]),c=r.useCallback(i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),l())},[l]);return e.jsxs("div",{ref:u,role:"menuitem",tabIndex:o?-1:0,"data-disabled":o||void 0,"data-danger":s||void 0,className:k("lg-dropdown__item",s&&"lg-dropdown__item--danger",o&&"lg-dropdown__item--disabled",p&&"lg-dropdown__item--checked",t),onClick:l,onKeyDown:c,children:[m&&e.jsx("span",{className:"lg-dropdown__item-icon",children:m}),e.jsx("span",{className:"lg-dropdown__item-label",children:n}),p&&e.jsx("svg",{className:"lg-dropdown__item-check",viewBox:"0 0 16 16",fill:"none",width:"16",height:"16",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 5.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})});h.displayName="DropdownItem";const Ee=S.forwardRef(({children:n,className:t,checked:o=!1,disabled:s=!1,icon:m,onCheckedChange:p},d)=>{const u=r.useCallback(()=>{s||p==null||p(!o)},[s,o,p]),a=r.useCallback(l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),u())},[u]);return e.jsxs("div",{ref:d,role:"menuitemcheckbox","aria-checked":o,tabIndex:s?-1:0,"data-disabled":s||void 0,className:k("lg-dropdown__item","lg-dropdown__item--checkbox",o&&"lg-dropdown__item--checked",s&&"lg-dropdown__item--disabled",t),onClick:u,onKeyDown:a,children:[m&&e.jsx("span",{className:"lg-dropdown__item-icon",children:m}),e.jsx("span",{className:"lg-dropdown__item-label",children:n}),o&&e.jsx("svg",{className:"lg-dropdown__item-check",viewBox:"0 0 16 16",fill:"none",width:"16",height:"16",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 5.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})});Ee.displayName="DropdownCheckboxItem";function W({children:n,value:t,onValueChange:o}){return e.jsx(Ae.Provider,{value:{value:t,onValueChange:o},children:e.jsx("div",{role:"group",children:n})})}W.displayName="DropdownRadioGroup";const v=S.forwardRef(({children:n,className:t,value:o,disabled:s=!1,icon:m},p)=>{const{close:d}=r.useContext(X),{value:u,onValueChange:a}=r.useContext(Ae),l=u===o,c=r.useCallback(()=>{s||(a==null||a(o),d())},[s,o,a,d]),i=r.useCallback(D=>{(D.key==="Enter"||D.key===" ")&&(D.preventDefault(),c())},[c]);return e.jsxs("div",{ref:p,role:"menuitemradio","aria-checked":l,tabIndex:s?-1:0,"data-disabled":s||void 0,className:k("lg-dropdown__item","lg-dropdown__item--radio",l&&"lg-dropdown__item--checked",s&&"lg-dropdown__item--disabled",t),onClick:c,onKeyDown:i,children:[m&&e.jsx("span",{className:"lg-dropdown__item-icon",children:m}),e.jsx("span",{className:"lg-dropdown__item-label",children:n}),l&&e.jsx("svg",{className:"lg-dropdown__item-check",viewBox:"0 0 16 16",fill:"none",width:"16",height:"16",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 5.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})});v.displayName="DropdownRadioItem";function M({children:n,className:t}){return e.jsx("div",{className:k("lg-dropdown__label",t),children:n})}M.displayName="DropdownLabel";function T({className:n}){return e.jsx("div",{className:k("lg-dropdown__separator",n),role:"separator"})}T.displayName="DropdownSeparator";const ee=r.createContext({subOpen:!1,openSub:()=>{},closeSub:()=>{},closeWithDelay:()=>{},clearTimer:()=>{}}),He=150;function N({children:n,open:t,defaultOpen:o,onOpenChange:s}){const[m,p]=r.useState(o??!1),d=t!==void 0,u=d?t:m,a=r.useRef(null),l=r.useCallback(()=>{a.current!=null&&(clearTimeout(a.current),a.current=null)},[]),c=r.useCallback(b=>{d||p(b),s==null||s(b)},[d,s]),i=r.useCallback(()=>{l(),c(!0)},[l,c]),D=r.useCallback(()=>{l(),c(!1)},[l,c]),B=r.useCallback(()=>{l(),a.current=setTimeout(()=>{c(!1)},He)},[l,c]);return e.jsx(ee.Provider,{value:{subOpen:u,openSub:i,closeSub:D,closeWithDelay:B,clearTimer:l},children:e.jsx(Q,{open:u,onOpenChange:c,children:n})})}N.displayName="DropdownSub";const R=S.forwardRef(({children:n,className:t,disabled:o=!1,icon:s},m)=>{const{subOpen:p,openSub:d,closeWithDelay:u,clearTimer:a}=r.useContext(ee),l=r.useCallback(()=>{o||(a(),d())},[o,a,d]),c=r.useCallback(()=>{o||u()},[o,u]);return e.jsx(Z,{asChild:!0,children:e.jsxs("div",{ref:m,role:"menuitem",tabIndex:o?-1:0,"data-disabled":o||void 0,className:k("lg-dropdown__item","lg-dropdown__item--sub-trigger",p&&"lg-dropdown__item--active",o&&"lg-dropdown__item--disabled",t),onMouseEnter:l,onMouseLeave:c,children:[s&&e.jsx("span",{className:"lg-dropdown__item-icon",children:s}),e.jsx("span",{className:"lg-dropdown__item-label",children:n}),e.jsx("svg",{className:"lg-dropdown__item-arrow",viewBox:"0 0 16 16",fill:"none",width:"16",height:"16",children:e.jsx("path",{d:"M6 4L10 8L6 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})})});R.displayName="DropdownSubTrigger";const q=S.forwardRef(({children:n,className:t,side:o="right",align:s="start",sideOffset:m=8,alignOffset:p=0,collisionPadding:d=8,container:u},a)=>{const{openSub:l,closeWithDelay:c}=r.useContext(ee);return e.jsx(Ve,{ref:a,className:k("lg-dropdown","lg-dropdown--sub",t),side:o,align:s,sideOffset:m,alignOffset:p,collisionPadding:d,container:u,onOpenAutoFocus:i=>i.preventDefault(),onCloseAutoFocus:i=>i.preventDefault(),onPointerDownOutside:i=>i.preventDefault(),onInteractOutside:i=>i.preventDefault(),children:e.jsx("div",{className:"lg-dropdown__menu",role:"menu",onMouseEnter:l,onMouseLeave:c,children:n})})});q.displayName="DropdownSubContent";f.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"子元素（Trigger + Content），或仅 Trigger 元素（配合 items 快捷模式）"},open:{required:!1,tsType:{name:"boolean"},description:"受控开关"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"非受控默认打开状态"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"开关变化回调"},modal:{required:!1,tsType:{name:"boolean"},description:"是否为 modal 模式（锁定背景交互），默认 true",defaultValue:{value:"true",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"DropdownMenuItemData | DropdownSeparatorData | DropdownLabelData",elements:[{name:"DropdownMenuItemData"},{name:"DropdownSeparatorData"},{name:"DropdownLabelData"}]}],raw:"DropdownItemData[]"},description:`快捷模式：传入菜单项数组，自动渲染 DropdownContent
与 Compound Component 互斥，传 items 时 children 作为触发器`},contentProps:{required:!1,tsType:{name:"Omit",elements:[{name:"DropdownContentProps"},{name:"literal",value:'"children"'}],raw:'Omit<DropdownContentProps, "children">'},description:"items 快捷模式下面板的定位配置"},selectedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"当前选中的 item key 列表，匹配的项会显示勾选图标"},loading:{required:!1,tsType:{name:"boolean"},description:"加载中状态，为 true 时显示 loadingContent 或默认 loading"},loadingContent:{required:!1,tsType:{name:"ReactNode"},description:"自定义加载中渲染内容"},emptyContent:{required:!1,tsType:{name:"ReactNode"},description:"自定义空态渲染内容（items 为空数组且非 loading 时显示）"},dropdownRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(menu: ReactNode) => ReactNode",signature:{arguments:[{type:{name:"ReactNode"},name:"menu"}],return:{name:"ReactNode"}}},description:`自定义面板渲染，参数 menu 为默认渲染的菜单项列表
可在 menu 前后包裹额外内容`}}};L.__docgenInfo={description:"",methods:[],displayName:"DropdownTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"触发器子元素"},asChild:{required:!1,tsType:{name:"boolean"},description:"合并到子元素而非额外包裹 DOM，默认 true",defaultValue:{value:"true",computed:!1}}}};C.__docgenInfo={description:"",methods:[],displayName:"DropdownContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"面板子内容"},minWidth:{required:!1,tsType:{name:"number"},description:"面板最小宽度，默认 128",defaultValue:{value:"128",computed:!1}},side:{defaultValue:{value:'"bottom"',computed:!1},required:!1},align:{defaultValue:{value:'"start"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1},collisionPadding:{defaultValue:{value:"8",computed:!1},required:!1}},composes:["Pick"]};h.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"菜单项内容"},className:{required:!1,tsType:{name:"string"},description:"额外类名"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}},danger:{required:!1,tsType:{name:"boolean"},description:"危险操作（红色样式）",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"前置图标"},selected:{required:!1,tsType:{name:"boolean"},description:"是否选中（显示勾选图标）",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:"选中回调，调用 event.preventDefault() 可阻止面板自动关闭"}}};Ee.__docgenInfo={description:"",methods:[],displayName:"DropdownCheckboxItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"菜单项内容"},className:{required:!1,tsType:{name:"string"},description:"额外类名"},checked:{required:!1,tsType:{name:"boolean"},description:"是否选中",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"前置图标"},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"选中状态变化回调"}}};W.__docgenInfo={description:"",methods:[],displayName:"DropdownRadioGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"子元素（DropdownRadioItem）"},value:{required:!1,tsType:{name:"string"},description:"当前选中值"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"值变化回调"}}};v.__docgenInfo={description:"",methods:[],displayName:"DropdownRadioItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"菜单项内容"},className:{required:!1,tsType:{name:"string"},description:"额外类名"},value:{required:!0,tsType:{name:"string"},description:"选项值"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"前置图标"}}};M.__docgenInfo={description:"",methods:[],displayName:"DropdownLabel",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"标题内容"},className:{required:!1,tsType:{name:"string"},description:"额外类名"}}};T.__docgenInfo={description:"",methods:[],displayName:"DropdownSeparator",props:{className:{required:!1,tsType:{name:"string"},description:"额外类名"}}};N.__docgenInfo={description:"",methods:[],displayName:"DropdownSub",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"子元素（SubTrigger + SubContent）"},open:{required:!1,tsType:{name:"boolean"},description:"受控开关"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"非受控默认打开状态"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"开关变化回调"}}};R.__docgenInfo={description:"",methods:[],displayName:"DropdownSubTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"子菜单触发项内容"},className:{required:!1,tsType:{name:"string"},description:"额外类名"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"前置图标"}}};q.__docgenInfo={description:"",methods:[],displayName:"DropdownSubContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"子菜单面板内容"},side:{defaultValue:{value:'"right"',computed:!1},required:!1},align:{defaultValue:{value:'"start"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"8",computed:!1},required:!1},alignOffset:{defaultValue:{value:"0",computed:!1},required:!1},collisionPadding:{defaultValue:{value:"8",computed:!1},required:!1}},composes:["Pick"]};const un={title:"Components/Dropdown",tags:["autodocs"]},Y=()=>e.jsx("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",children:e.jsx("path",{d:"M11.5 2.5l2 2-8 8H3.5v-2l8-8z",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})}),ne=()=>e.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",children:[e.jsx("rect",{x:"5.5",y:"5.5",width:"7",height:"7",rx:"1",stroke:"currentColor",strokeWidth:"1.2"}),e.jsx("path",{d:"M3.5 10.5v-7a1 1 0 011-1h7",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]}),oe=()=>e.jsx("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",children:e.jsx("path",{d:"M3 4.5h10M6 4.5V3a1 1 0 011-1h2a1 1 0 011 1v1.5M4.5 4.5l.5 8a1 1 0 001 1h4a1 1 0 001-1l.5-8",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})}),Ke=()=>e.jsx("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",children:e.jsx("path",{d:"M6 9.5l4-3M10 3.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM10 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM6 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",stroke:"currentColor",strokeWidth:"1.2"})}),P={render:()=>{const n=[{key:"edit",label:"编辑",onSelect:()=>console.log("编辑")},{key:"copy",label:"复制",onSelect:()=>console.log("复制")},{key:"share",label:"分享",onSelect:()=>console.log("分享")}];return e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsx(f,{items:n,children:e.jsx(j,{variant:"outline",children:"操作菜单"})})})}},O={render:()=>{const n=[{key:"edit",label:"编辑",icon:e.jsx(Y,{}),onSelect:()=>console.log("编辑")},{key:"copy",label:"复制",icon:e.jsx(ne,{}),onSelect:()=>console.log("复制")},{type:"separator"},{key:"delete",label:"删除",icon:e.jsx(oe,{}),danger:!0,onSelect:()=>console.log("删除")}];return e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsx(f,{items:n,children:e.jsx(j,{variant:"outline",children:"带图标"})})})}},V={render:()=>{const n=[{key:"view",label:"查看详情",onSelect:()=>console.log("查看")},{key:"export",label:"导出（无权限）",disabled:!0},{type:"separator"},{key:"delete",label:"删除",danger:!0,onSelect:()=>console.log("删除")}];return e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsx(f,{items:n,children:e.jsx(j,{variant:"outline",children:"更多操作"})})})}},A={render:()=>{const n=[{type:"label",label:"编辑操作"},{key:"edit",label:"编辑",icon:e.jsx(Y,{})},{key:"copy",label:"复制",icon:e.jsx(ne,{})},{type:"separator"},{type:"label",label:"分享"},{key:"share",label:"分享给同事",icon:e.jsx(Ke,{})},{type:"separator"},{type:"label",label:"危险操作"},{key:"delete",label:"删除",icon:e.jsx(oe,{}),danger:!0}];return e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsx(f,{items:n,children:e.jsx(j,{variant:"outline",children:"分组菜单"})})})}},E={render:()=>{const n=[{key:"edit",label:"编辑",icon:e.jsx(Y,{}),onSelect:()=>console.log("编辑")},{key:"copy",label:"复制",icon:e.jsx(ne,{}),onSelect:()=>console.log("复制")},{type:"separator"},{key:"delete",label:"删除",icon:e.jsx(oe,{}),danger:!0,onSelect:()=>console.log("删除")}];return e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs("div",{style:{width:300,padding:16,border:"1px solid #e8e8e8",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("span",{style:{fontSize:14,fontWeight:500},children:"任务名称"}),e.jsx(f,{items:n,contentProps:{align:"end"},children:e.jsx("button",{type:"button",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:28,height:28,border:"none",borderRadius:6,background:"transparent",cursor:"pointer"},children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[e.jsx("circle",{cx:"4",cy:"8",r:"1.5"}),e.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),e.jsx("circle",{cx:"12",cy:"8",r:"1.5"})]})})})]})})}},G={render:()=>{const n=[{key:"today",label:"今日",onSelect:()=>console.log("today")},{key:"week",label:"本周",onSelect:()=>console.log("week")},{key:"month",label:"本月",onSelect:()=>console.log("month")},{key:"quarter",label:"本季度",onSelect:()=>console.log("quarter")}];return e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsx(f,{items:n,contentProps:{align:"start"},children:e.jsxs("button",{type:"button",style:{display:"inline-flex",alignItems:"center",gap:4,padding:"4px 8px",border:"none",borderRadius:6,background:"rgba(0,0,0,0.04)",cursor:"pointer",fontSize:13,color:"rgba(0,0,0,0.82)"},children:[e.jsx("span",{children:"本周"}),e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})})}},H={render:()=>{const[n,t]=r.useState(!1),o=[{key:"a",label:"操作 A",onSelect:()=>console.log("A")},{key:"b",label:"操作 B",onSelect:()=>console.log("B")}];return e.jsxs("div",{style:{padding:100,display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[e.jsxs("p",{style:{margin:0,fontSize:12,color:"rgba(0,0,0,0.46)"},children:["状态：",n?"打开":"关闭"]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(j,{variant:"outline",size:"sm",onClick:()=>t(!n),children:"外部切换"}),e.jsx(f,{items:o,open:n,onOpenChange:t,children:e.jsx(j,{variant:"primary",children:"受控菜单"})})]})]})}},Ue=["top","bottom","left","right"],$e=["start","center","end"],K={render:()=>{const n=[{key:"a",label:"选项 A"},{key:"b",label:"选项 B"}];return e.jsx("div",{style:{padding:120,display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:Ue.map(t=>e.jsx("div",{style:{display:"flex",gap:8},children:$e.map(o=>e.jsx(f,{items:n,contentProps:{side:t,align:o,sideOffset:6},children:e.jsxs(j,{variant:"outline",size:"sm",children:[t,"-",o]})},`${t}-${o}`))},t))})}},U={name:"Compound: RadioGroup 单选",render:()=>{const[n,t]=r.useState("my");return e.jsxs("div",{style:{padding:100,display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsxs("p",{style:{margin:0,fontSize:12,color:"rgba(0,0,0,0.46)"},children:["当前选中：",n]}),e.jsxs(f,{children:[e.jsx(L,{children:e.jsxs("button",{type:"button",style:{display:"inline-flex",alignItems:"center",gap:4,padding:"6px 12px",border:"1px solid #d9d9d9",borderRadius:8,background:"#fff",cursor:"pointer",fontSize:14},children:[e.jsx("span",{children:n==="my"?"我的数据":"团队数据"}),e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),e.jsx(C,{children:e.jsxs(W,{value:n,onValueChange:t,children:[e.jsx(v,{value:"my",children:"我的数据"}),e.jsx(v,{value:"team",children:"团队数据"})]})})]})]})}},$={name:"Compound: 复合场景",render:()=>{const[n,t]=r.useState("newest");return e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(f,{children:[e.jsx(L,{children:e.jsx(j,{variant:"outline",children:"排序与筛选"})}),e.jsxs(C,{minWidth:180,children:[e.jsx(M,{children:"排序方式"}),e.jsxs(W,{value:n,onValueChange:t,children:[e.jsx(v,{value:"newest",children:"最新优先"}),e.jsx(v,{value:"oldest",children:"最早优先"}),e.jsx(v,{value:"name",children:"按名称"})]}),e.jsx(T,{}),e.jsx(M,{children:"操作"}),e.jsx(h,{onSelect:()=>console.log("刷新"),children:"刷新列表"}),e.jsx(h,{onSelect:()=>console.log("导出"),children:"导出数据"})]})]})})}},Fe=()=>e.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",children:[e.jsx("circle",{cx:"8",cy:"8",r:"2.5",stroke:"currentColor",strokeWidth:"1.2"}),e.jsx("path",{d:"M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.75 3.75l1.06 1.06M11.19 11.19l1.06 1.06M3.75 12.25l1.06-1.06M11.19 4.81l1.06-1.06",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]}),Je=()=>e.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",children:[e.jsx("circle",{cx:"8",cy:"8",r:"5.5",stroke:"currentColor",strokeWidth:"1.2"}),e.jsx("path",{d:"M2.5 8h11M8 2.5c1.5 1.5 2 3.5 2 5.5s-.5 4-2 5.5M8 2.5c-1.5 1.5-2 3.5-2 5.5s.5 4 2 5.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]}),Xe=()=>e.jsx("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",children:e.jsx("path",{d:"M6 13H3.5A1.5 1.5 0 012 11.5v-7A1.5 1.5 0 013.5 3H6M11 11l3-3-3-3M5.5 8H14",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})}),F={name:"子菜单（用户面板模拟）",render:()=>{const[n,t]=r.useState("zh-CN");return e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(f,{children:[e.jsx(L,{children:e.jsxs("button",{type:"button",style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"1px solid #e8e8e8",borderRadius:8,background:"#fff",cursor:"pointer"},children:[e.jsx("img",{src:"https://api.dicebear.com/7.x/initials/svg?seed=HXH&size=24",alt:"",style:{width:24,height:24,borderRadius:"50%"}}),e.jsx("span",{style:{fontSize:14},children:"洪鑫海"})]})}),e.jsxs(C,{side:"top",align:"start",minWidth:200,children:[e.jsxs("div",{style:{padding:"8px 12px"},children:[e.jsx("div",{style:{fontSize:14,fontWeight:500},children:"洪鑫海"}),e.jsx("div",{style:{fontSize:12,color:"rgba(0,0,0,0.46)",marginTop:2},children:"租户3"})]}),e.jsx(T,{}),e.jsxs(N,{children:[e.jsx(R,{icon:e.jsx(Fe,{}),children:"偏好设置"}),e.jsx(q,{children:e.jsxs("div",{style:{padding:12,width:200},children:[e.jsx("div",{style:{fontSize:13,fontWeight:500,marginBottom:8},children:"偏好设置面板"}),e.jsx("div",{style:{fontSize:12,color:"rgba(0,0,0,0.46)"},children:"这里可以放任意自定义内容，比如 UserPreferencesPanel"})]})})]}),e.jsxs(N,{children:[e.jsx(R,{icon:e.jsx(Je,{}),children:n==="zh-CN"?"简体中文":"English"}),e.jsx(q,{children:e.jsxs(W,{value:n,onValueChange:t,children:[e.jsx(v,{value:"zh-CN",children:"简体中文"}),e.jsx(v,{value:"en-US",children:"English"}),e.jsx(v,{value:"ja-JP",children:"日本語"})]})})]}),e.jsx(h,{icon:e.jsx(Y,{}),onSelect:()=>console.log("归档管理"),children:"归档管理"}),e.jsx(T,{}),e.jsx(h,{icon:e.jsx(Xe,{}),danger:!0,onSelect:()=>console.log("退出登录"),children:"退出登录"})]})]})})}},J={name:"三级嵌套子菜单",render:()=>e.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:e.jsxs(f,{children:[e.jsx(L,{children:e.jsx(j,{variant:"outline",children:"三级嵌套"})}),e.jsxs(C,{children:[e.jsx(h,{onSelect:()=>console.log("A"),children:"普通项 A"}),e.jsxs(N,{children:[e.jsx(R,{children:"二级菜单"}),e.jsxs(q,{children:[e.jsx(h,{onSelect:()=>console.log("B1"),children:"二级项 B1"}),e.jsx(h,{onSelect:()=>console.log("B2"),children:"二级项 B2"}),e.jsxs(N,{children:[e.jsx(R,{children:"三级菜单"}),e.jsxs(q,{children:[e.jsx(h,{onSelect:()=>console.log("C1"),children:"三级项 C1"}),e.jsx(h,{onSelect:()=>console.log("C2"),children:"三级项 C2"}),e.jsx(h,{onSelect:()=>console.log("C3"),children:"三级项 C3"})]})]})]})]}),e.jsx(h,{onSelect:()=>console.log("D"),children:"普通项 D"})]})]})})};var re,se,le;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const items: DropdownItemData[] = [{
      key: "edit",
      label: "编辑",
      onSelect: () => console.log("编辑")
    }, {
      key: "copy",
      label: "复制",
      onSelect: () => console.log("复制")
    }, {
      key: "share",
      label: "分享",
      onSelect: () => console.log("分享")
    }];
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <Dropdown items={items}>
          <Button variant="outline">操作菜单</Button>
        </Dropdown>
      </div>;
  }
}`,...(le=(se=P.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ae,ie,de;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const items: DropdownItemData[] = [{
      key: "edit",
      label: "编辑",
      icon: <EditIcon />,
      onSelect: () => console.log("编辑")
    }, {
      key: "copy",
      label: "复制",
      icon: <CopyIcon />,
      onSelect: () => console.log("复制")
    }, {
      type: "separator"
    }, {
      key: "delete",
      label: "删除",
      icon: <TrashIcon />,
      danger: true,
      onSelect: () => console.log("删除")
    }];
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <Dropdown items={items}>
          <Button variant="outline">带图标</Button>
        </Dropdown>
      </div>;
  }
}`,...(de=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,pe,ue;V.parameters={...V.parameters,docs:{...(ce=V.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const items: DropdownItemData[] = [{
      key: "view",
      label: "查看详情",
      onSelect: () => console.log("查看")
    }, {
      key: "export",
      label: "导出（无权限）",
      disabled: true
    }, {
      type: "separator"
    }, {
      key: "delete",
      label: "删除",
      danger: true,
      onSelect: () => console.log("删除")
    }];
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <Dropdown items={items}>
          <Button variant="outline">更多操作</Button>
        </Dropdown>
      </div>;
  }
}`,...(ue=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,ge,ye;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const items: DropdownItemData[] = [{
      type: "label",
      label: "编辑操作"
    }, {
      key: "edit",
      label: "编辑",
      icon: <EditIcon />
    }, {
      key: "copy",
      label: "复制",
      icon: <CopyIcon />
    }, {
      type: "separator"
    }, {
      type: "label",
      label: "分享"
    }, {
      key: "share",
      label: "分享给同事",
      icon: <ShareIcon />
    }, {
      type: "separator"
    }, {
      type: "label",
      label: "危险操作"
    }, {
      key: "delete",
      label: "删除",
      icon: <TrashIcon />,
      danger: true
    }];
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <Dropdown items={items}>
          <Button variant="outline">分组菜单</Button>
        </Dropdown>
      </div>;
  }
}`,...(ye=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var he,fe,xe;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const items: DropdownItemData[] = [{
      key: "edit",
      label: "编辑",
      icon: <EditIcon />,
      onSelect: () => console.log("编辑")
    }, {
      key: "copy",
      label: "复制",
      icon: <CopyIcon />,
      onSelect: () => console.log("复制")
    }, {
      type: "separator"
    }, {
      key: "delete",
      label: "删除",
      icon: <TrashIcon />,
      danger: true,
      onSelect: () => console.log("删除")
    }];
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <div style={{
        width: 300,
        padding: 16,
        border: "1px solid #e8e8e8",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
          <span style={{
          fontSize: 14,
          fontWeight: 500
        }}>任务名称</span>
          <Dropdown items={items} contentProps={{
          align: "end"
        }}>
            <button type="button" style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            border: "none",
            borderRadius: 6,
            background: "transparent",
            cursor: "pointer"
          }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="4" cy="8" r="1.5" />
                <circle cx="8" cy="8" r="1.5" />
                <circle cx="12" cy="8" r="1.5" />
              </svg>
            </button>
          </Dropdown>
        </div>
      </div>;
  }
}`,...(xe=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var we,be,ve;G.parameters={...G.parameters,docs:{...(we=G.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    const items: DropdownItemData[] = [{
      key: "today",
      label: "今日",
      onSelect: () => console.log("today")
    }, {
      key: "week",
      label: "本周",
      onSelect: () => console.log("week")
    }, {
      key: "month",
      label: "本月",
      onSelect: () => console.log("month")
    }, {
      key: "quarter",
      label: "本季度",
      onSelect: () => console.log("quarter")
    }];
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <Dropdown items={items} contentProps={{
        align: "start"
      }}>
          <button type="button" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          padding: "4px 8px",
          border: "none",
          borderRadius: 6,
          background: "rgba(0,0,0,0.04)",
          cursor: "pointer",
          fontSize: 13,
          color: "rgba(0,0,0,0.82)"
        }}>
            <span>本周</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Dropdown>
      </div>;
  }
}`,...(ve=(be=G.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var De,je,ke;H.parameters={...H.parameters,docs:{...(De=H.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const items: DropdownItemData[] = [{
      key: "a",
      label: "操作 A",
      onSelect: () => console.log("A")
    }, {
      key: "b",
      label: "操作 B",
      onSelect: () => console.log("B")
    }];
    return <div style={{
      padding: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16
    }}>
        <p style={{
        margin: 0,
        fontSize: 12,
        color: "rgba(0,0,0,0.46)"
      }}>
          状态：{open ? "打开" : "关闭"}
        </p>
        <div style={{
        display: "flex",
        gap: 8
      }}>
          <Button variant="outline" size="sm" onClick={() => setOpen(!open)}>
            外部切换
          </Button>
          <Dropdown items={items} open={open} onOpenChange={setOpen}>
            <Button variant="primary">受控菜单</Button>
          </Dropdown>
        </div>
      </div>;
  }
}`,...(ke=(je=H.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var Se,Ce,Ie;K.parameters={...K.parameters,docs:{...(Se=K.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const items: DropdownItemData[] = [{
      key: "a",
      label: "选项 A"
    }, {
      key: "b",
      label: "选项 B"
    }];
    return <div style={{
      padding: 120,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16
    }}>
        {sides.map(side => <div key={side} style={{
        display: "flex",
        gap: 8
      }}>
            {aligns.map(align => <Dropdown key={\`\${side}-\${align}\`} items={items} contentProps={{
          side,
          align,
          sideOffset: 6
        }}>
                <Button variant="outline" size="sm">
                  {side}-{align}
                </Button>
              </Dropdown>)}
          </div>)}
      </div>;
  }
}`,...(Ie=(Ce=K.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var _e,Te,Ne;U.parameters={...U.parameters,docs:{...(_e=U.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: "Compound: RadioGroup 单选",
  render: () => {
    const [scope, setScope] = useState("my");
    return <div style={{
      padding: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12
    }}>
        <p style={{
        margin: 0,
        fontSize: 12,
        color: "rgba(0,0,0,0.46)"
      }}>
          当前选中：{scope}
        </p>
        <Dropdown>
          <DropdownTrigger>
            <button type="button" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: "6px 12px",
            border: "1px solid #d9d9d9",
            borderRadius: 8,
            background: "#fff",
            cursor: "pointer",
            fontSize: 14
          }}>
              <span>{scope === "my" ? "我的数据" : "团队数据"}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownRadioGroup value={scope} onValueChange={setScope}>
              <DropdownRadioItem value="my">我的数据</DropdownRadioItem>
              <DropdownRadioItem value="team">团队数据</DropdownRadioItem>
            </DropdownRadioGroup>
          </DropdownContent>
        </Dropdown>
      </div>;
  }
}`,...(Ne=(Te=U.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var Re,qe,Le;$.parameters={...$.parameters,docs:{...(Re=$.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: "Compound: 复合场景",
  render: () => {
    const [sort, setSort] = useState("newest");
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="outline">排序与筛选</Button>
          </DropdownTrigger>
          <DropdownContent minWidth={180}>
            <DropdownLabel>排序方式</DropdownLabel>
            <DropdownRadioGroup value={sort} onValueChange={setSort}>
              <DropdownRadioItem value="newest">最新优先</DropdownRadioItem>
              <DropdownRadioItem value="oldest">最早优先</DropdownRadioItem>
              <DropdownRadioItem value="name">按名称</DropdownRadioItem>
            </DropdownRadioGroup>
            <DropdownSeparator />
            <DropdownLabel>操作</DropdownLabel>
            <DropdownItem onSelect={() => console.log("刷新")}>刷新列表</DropdownItem>
            <DropdownItem onSelect={() => console.log("导出")}>导出数据</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>;
  }
}`,...(Le=(qe=$.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var Be,Me,We;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: "子菜单（用户面板模拟）",
  render: () => {
    const [lang, setLang] = useState("zh-CN");
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <Dropdown>
          <DropdownTrigger>
            <button type="button" style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 12px",
            border: "1px solid #e8e8e8",
            borderRadius: 8,
            background: "#fff",
            cursor: "pointer"
          }}>
              <img src="https://api.dicebear.com/7.x/initials/svg?seed=HXH&size=24" alt="" style={{
              width: 24,
              height: 24,
              borderRadius: "50%"
            }} />
              <span style={{
              fontSize: 14
            }}>洪鑫海</span>
            </button>
          </DropdownTrigger>
          <DropdownContent side="top" align="start" minWidth={200}>
            {/* 自定义头部 */}
            <div style={{
            padding: "8px 12px"
          }}>
              <div style={{
              fontSize: 14,
              fontWeight: 500
            }}>洪鑫海</div>
              <div style={{
              fontSize: 12,
              color: "rgba(0,0,0,0.46)",
              marginTop: 2
            }}>租户3</div>
            </div>
            <DropdownSeparator />

            {/* 带子面板的项 */}
            <DropdownSub>
              <DropdownSubTrigger icon={<SettingsIcon />}>
                偏好设置
              </DropdownSubTrigger>
              <DropdownSubContent>
                <div style={{
                padding: 12,
                width: 200
              }}>
                  <div style={{
                  fontSize: 13,
                  fontWeight: 500,
                  marginBottom: 8
                }}>偏好设置面板</div>
                  <div style={{
                  fontSize: 12,
                  color: "rgba(0,0,0,0.46)"
                }}>
                    这里可以放任意自定义内容，比如 UserPreferencesPanel
                  </div>
                </div>
              </DropdownSubContent>
            </DropdownSub>

            {/* 语言切换子菜单（标准列表） */}
            <DropdownSub>
              <DropdownSubTrigger icon={<GlobeIcon />}>
                {lang === "zh-CN" ? "简体中文" : "English"}
              </DropdownSubTrigger>
              <DropdownSubContent>
                <DropdownRadioGroup value={lang} onValueChange={setLang}>
                  <DropdownRadioItem value="zh-CN">简体中文</DropdownRadioItem>
                  <DropdownRadioItem value="en-US">English</DropdownRadioItem>
                  <DropdownRadioItem value="ja-JP">日本語</DropdownRadioItem>
                </DropdownRadioGroup>
              </DropdownSubContent>
            </DropdownSub>

            <DropdownItem icon={<EditIcon />} onSelect={() => console.log("归档管理")}>
              归档管理
            </DropdownItem>

            <DropdownSeparator />
            <DropdownItem icon={<LogoutIcon />} danger onSelect={() => console.log("退出登录")}>
              退出登录
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>;
  }
}`,...(We=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:We.source}}};var ze,Pe,Oe;J.parameters={...J.parameters,docs:{...(ze=J.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: "三级嵌套子菜单",
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="outline">三级嵌套</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem onSelect={() => console.log("A")}>普通项 A</DropdownItem>
          <DropdownSub>
            <DropdownSubTrigger>二级菜单</DropdownSubTrigger>
            <DropdownSubContent>
              <DropdownItem onSelect={() => console.log("B1")}>二级项 B1</DropdownItem>
              <DropdownItem onSelect={() => console.log("B2")}>二级项 B2</DropdownItem>
              <DropdownSub>
                <DropdownSubTrigger>三级菜单</DropdownSubTrigger>
                <DropdownSubContent>
                  <DropdownItem onSelect={() => console.log("C1")}>三级项 C1</DropdownItem>
                  <DropdownItem onSelect={() => console.log("C2")}>三级项 C2</DropdownItem>
                  <DropdownItem onSelect={() => console.log("C3")}>三级项 C3</DropdownItem>
                </DropdownSubContent>
              </DropdownSub>
            </DropdownSubContent>
          </DropdownSub>
          <DropdownItem onSelect={() => console.log("D")}>普通项 D</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
}`,...(Oe=(Pe=J.parameters)==null?void 0:Pe.docs)==null?void 0:Oe.source}}};const mn=["Basic","WithIcons","DangerAndDisabled","WithGroups","ThreeDotsMenu","CustomTrigger","Controlled","Placement","CompoundRadioGroup","CompoundComplex","SubMenu","NestedSubMenu"];export{P as Basic,$ as CompoundComplex,U as CompoundRadioGroup,H as Controlled,G as CustomTrigger,V as DangerAndDisabled,J as NestedSubMenu,K as Placement,F as SubMenu,E as ThreeDotsMenu,A as WithGroups,O as WithIcons,mn as __namedExportsOrder,un as default};
