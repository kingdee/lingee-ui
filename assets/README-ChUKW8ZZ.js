import{i as e,n as t,s as n,t as r}from"./utils-D3YijGPp.js";import{t as i}from"./dist-Bb8vu4X3.js";import{n as a,r as o,t as s}from"./Threedots-1pt4_kug.js";import{n as c}from"./provider-DitETfxs.js";import{t as l}from"./ChevronRight-CSWzKrQb.js";import{t as u}from"./dropdown-xvraXPcr.js";import{t as d}from"./DemoBox-D5W_RP2Q.js";var f=n(e()),p=t(),m=i(`lg-breadcrumb`,{variants:{size:{sm:`lg-breadcrumb--sm`,md:`lg-breadcrumb--md`}},defaultVariants:{size:`md`}}),h=f.forwardRef(({className:e,items:t,size:n=`md`,separator:i,maxItems:d=0,itemsBeforeCollapse:f=1,itemsAfterCollapse:h=1,onBack:g,itemMaxWidth:_,"aria-label":v=`Breadcrumb`,...y},b)=>{let x=c(`Breadcrumb`),S=i??(n===`sm`?(0,p.jsx)(l,{}):(0,p.jsx)(a,{})),C=t.length-1,w=d>0&&t.length>d&&f+h<t.length,T;if(w){let e=t.slice(f,t.length-h);T=[...t.slice(0,f).map((e,t)=>({kind:`item`,item:e,index:t})),{kind:`collapse`,hidden:e},...t.slice(t.length-h).map((e,n)=>({kind:`item`,item:e,index:t.length-h+n}))]}else T=t.map((e,t)=>({kind:`item`,item:e,index:t}));let E=e=>(0,p.jsxs)(p.Fragment,{children:[e.icon&&(0,p.jsx)(`span`,{className:`lg-breadcrumb__icon`,children:e.icon}),e.label!=null&&e.label!==``&&(0,p.jsx)(`span`,{className:`lg-breadcrumb__label`,style:_?{maxWidth:_}:void 0,children:e.label})]}),D=(e,t)=>{let n=E(e);return t?(0,p.jsx)(`span`,{className:`lg-breadcrumb__item lg-breadcrumb__item--current`,"aria-current":`page`,children:n}):e.disabled?(0,p.jsx)(`span`,{className:`lg-breadcrumb__item lg-breadcrumb__item--disabled`,"aria-disabled":`true`,children:n}):e.href?(0,p.jsx)(`a`,{className:`lg-breadcrumb__item`,href:e.href,onClick:e.onClick,children:n}):e.onClick?(0,p.jsx)(`button`,{type:`button`,className:`lg-breadcrumb__item`,onClick:e.onClick,children:n}):(0,p.jsx)(`span`,{className:`lg-breadcrumb__item`,children:n})},O=e=>e.map((e,t)=>({key:String(e.key??`bc-hidden-${t}`),icon:e.icon,disabled:e.disabled,label:e.href?(0,p.jsx)(`a`,{className:`lg-breadcrumb__menu-link`,href:e.href,onClick:e.onClick,children:e.label}):e.label,onSelect:e.href?void 0:()=>e.onClick?.()}));return(0,p.jsxs)(`nav`,{ref:b,className:r(m({size:n}),e),"aria-label":v,...y,children:[g&&(0,p.jsx)(`button`,{type:`button`,className:`lg-breadcrumb__back`,onClick:g,"aria-label":x.back,children:(0,p.jsx)(o,{})}),(0,p.jsx)(`ol`,{className:`lg-breadcrumb__list`,children:T.map((e,t)=>{let n=t===T.length-1,r=e.kind===`collapse`?`bc-collapse`:e.item.key??e.index;return(0,p.jsxs)(`li`,{className:`lg-breadcrumb__cell`,children:[e.kind===`collapse`?(0,p.jsx)(u,{items:O(e.hidden),contentProps:{align:`start`,className:`lg-breadcrumb-menu`},children:(0,p.jsx)(`button`,{type:`button`,className:`lg-breadcrumb__ellipsis`,"aria-label":x.more,children:(0,p.jsx)(s,{})})}):D(e.item,e.index===C),!n&&(0,p.jsx)(`span`,{className:`lg-breadcrumb__separator`,"aria-hidden":`true`,children:S})]},r)})})]})});h.displayName=`Breadcrumb`;function g(){return(0,p.jsx)(h,{items:[{key:`home`,label:`首页`,href:`#`},{key:`list`,label:`列表页`,href:`#`},{key:`detail`,label:`详情页`}]})}var _=`import { Breadcrumb } from "lingee-ui";

export default function BasicDemo() {
  return (
    <Breadcrumb
      items={[
        { key: "home", label: "首页", href: "#" },
        { key: "list", label: "列表页", href: "#" },
        { key: "detail", label: "详情页" },
      ]}
    />
  );
}
`;function v(){return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,p.jsx)(h,{separator:`>`,items:[{key:`home`,label:`首页`,href:`#`},{key:`category`,label:`分类`,href:`#`},{key:`detail`,label:`详情`}]}),(0,p.jsx)(h,{separator:`-`,items:[{key:`home`,label:`首页`,href:`#`},{key:`settings`,label:`设置`,href:`#`},{key:`account`,label:`账号设置`}]})]})}var y=`import { Breadcrumb } from "lingee-ui";

export default function SeparatorDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Breadcrumb
        separator=">"
        items={[
          { key: "home", label: "首页", href: "#" },
          { key: "category", label: "分类", href: "#" },
          { key: "detail", label: "详情" },
        ]}
      />
      <Breadcrumb
        separator="-"
        items={[
          { key: "home", label: "首页", href: "#" },
          { key: "settings", label: "设置", href: "#" },
          { key: "account", label: "账号设置" },
        ]}
      />
    </div>
  );
}
`,b={title:`Breadcrumb 面包屑`,description:`显示当前页面在系统层级结构中的位置，并提供返回之前层级的导航。`};function x(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`基本用法`}),`
`,(0,p.jsxs)(t.p,{children:[`通过 `,(0,p.jsx)(t.code,{children:`items`}),` 属性定义面包屑路径，最后一项为当前页面（无链接）。`]}),`
`,(0,p.jsx)(d,{source:_,children:(0,p.jsx)(g,{})}),`
`,(0,p.jsx)(t.h2,{children:`自定义分隔符`}),`
`,(0,p.jsxs)(t.p,{children:[`通过 `,(0,p.jsx)(t.code,{children:`separator`}),` 属性自定义面包屑项之间的分隔符。`]}),`
`,(0,p.jsx)(d,{source:y,children:(0,p.jsx)(v,{})}),`
`,(0,p.jsx)(t.h2,{children:`API`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`属性`}),(0,p.jsx)(t.th,{children:`说明`}),(0,p.jsx)(t.th,{children:`类型`}),(0,p.jsx)(t.th,{children:`默认值`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`items`})}),(0,p.jsx)(t.td,{children:`面包屑数据`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`Array<{ key: string; label?: ReactNode; icon?: ReactNode; href?: string; disabled?: boolean }>`})}),(0,p.jsx)(t.td,{children:`-`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`separator`})}),(0,p.jsx)(t.td,{children:`自定义分隔符`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`ReactNode`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`/`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`size`})}),(0,p.jsx)(t.td,{children:`尺寸`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`"sm" | "md"`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`"md"`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`maxItems`})}),(0,p.jsx)(t.td,{children:`超过此数量则折叠中间项`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`number`})}),(0,p.jsx)(t.td,{children:`-`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`itemMaxWidth`})}),(0,p.jsx)(t.td,{children:`单项最大宽度，超出显示省略号`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`number`})}),(0,p.jsx)(t.td,{children:`-`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`onBack`})}),(0,p.jsx)(t.td,{children:`传入后显示返回箭头，点击触发`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`() => void`})}),(0,p.jsx)(t.td,{children:`-`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`children`})}),(0,p.jsx)(t.td,{children:`自定义内容（替代 items）`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`ReactNode`})}),(0,p.jsx)(t.td,{children:`-`})]})]})]})]})}function S(e={}){let{wrapper:t}=e.components||{};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(x,{...e})}):x(e)}export{S as default,b as frontmatter};