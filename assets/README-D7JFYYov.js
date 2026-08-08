import{A as e,D as t,x as n,y as r}from"./dist-DjLZdxEA.js";import{n as i}from"./provider-pWkB89tL.js";import{t as a}from"./ChevronDown-DkD3e0uA.js";import{t as o}from"./ChevronLeft-DGXLuvxH.js";import{t as s}from"./ChevronRight-Dd6Me60a.js";import{t as c}from"./DemoBox-DEznk3dE.js";import{d as l,n as u,r as d,t as f}from"./dropdown-CmOC4fGA.js";var p=e(t()),m=n(),h=[10,20,50,100];function g(e){let[t,n]=(0,p.useState)(`full`);return(0,p.useEffect)(()=>{let t=e.current;if(!t)return;let r=new ResizeObserver(e=>{for(let t of e){let e=t.contentRect.width;n(e>=780?`full`:e>=520?`medium`:`compact`)}});return r.observe(t),()=>r.disconnect()},[e]),t}function _(e,t,n){if(!t||!isFinite(t)||t<=0)return[1];if(t<=5)return Array.from({length:t},(e,t)=>t+1);if(n===`compact`){if(e===1||e===t)return[1,`ellipsis`,t];let n=[];return e>2?n.push(1,`ellipsis`):n.push(1),n.push(e),e<t-1?n.push(`ellipsis`,t):n.push(t),n}if(n===`medium`){let n=Math.max(e-1,1),r=Math.min(e+1,t),i=n>2,a=r<t-1,o=[];if(i){o.push(1,`ellipsis`);for(let e=n;e<=r;e++)o.push(e)}else for(let e=1;e<=Math.min(r,t);e++)o.push(e);if(a)o.push(`ellipsis`,t);else for(let e=Math.max(r+1,1);e<=t;e++)o.push(e);return o}if(t<=7)return Array.from({length:t},(e,t)=>t+1);let r=Math.max(e-2,1),i=Math.min(e+2,t),a=r>2,o=i<t-1;return!a&&o?[...Array.from({length:5},(e,t)=>t+1),`ellipsis`,t]:a&&!o?[1,`ellipsis`,...Array.from({length:5},(e,n)=>t-4+n)]:[1,`ellipsis`,...Array.from({length:i-r+1},(e,t)=>r+t),`ellipsis`,t]}var v=p.forwardRef(({align:e=`end`,current:t,defaultCurrent:n=1,pageSize:c,defaultPageSize:v=20,total:y,disabled:b=!1,hideOnSinglePage:x=!1,pageSizeOptions:S=h,showQuickJumper:C=!1,showSizeChanger:w=!1,showTotal:T,variant:E=`bordered`,onChange:D,onPageSizeChange:O,className:k,style:A},j)=>{let M=i(`Pagination`),N=(0,p.useRef)(null),P=e=>{N.current=e,typeof j==`function`?j(e):j&&(j.current=e)},F=g(N),I=t!==void 0,[L,R]=(0,p.useState)(n),z=I?t:L,B=c!==void 0,[V,H]=(0,p.useState)(v),U=B?c:V,W=(0,p.useMemo)(()=>!y||!U||U<=0?1:Math.max(1,Math.ceil(y/U)),[y,U]),[G,K]=(0,p.useState)(``);if(x&&W<=1)return null;let q=(0,p.useCallback)(e=>{let t=Math.max(1,Math.min(e,W));I||R(t),D?.(t,U)},[W,I,D,U]),J=(0,p.useCallback)(e=>{B||H(e);let t=Math.max(1,Math.ceil(y/e)),n=Math.min(z,t);I||R(n),O?.(n,e),D?.(n,e)},[B,I,y,z,O,D]),Y=e=>{if(e.key===`Enter`){let e=parseInt(G,10);isNaN(e)||q(e),K(``)}},X=()=>{let e=parseInt(G,10);isNaN(e)||q(e),K(``)},Z=()=>{if(!T)return null;if(typeof T==`function`){let e=(z-1)*U+1,t=Math.min(z*U,y);return(0,m.jsx)(`span`,{className:`lg-pagination__total`,children:T(y,[e,t])})}return(0,m.jsx)(`span`,{className:`lg-pagination__total`,children:M.total.replace(`{total}`,y.toLocaleString())})};if(E===`simple`)return(0,m.jsxs)(`nav`,{ref:P,role:`navigation`,"aria-label":`pagination`,className:r(`lg-pagination`,`lg-pagination--simple`,`lg-pagination--align-${e}`,b&&`lg-pagination--disabled`,k),style:A,children:[Z(),(0,m.jsxs)(`div`,{className:`lg-pagination__simple-nav`,children:[(0,m.jsx)(`button`,{type:`button`,className:`lg-pagination__nav-btn`,disabled:b||z<=1,onClick:()=>q(z-1),"aria-label":M.prevPage,children:(0,m.jsx)(o,{size:16})}),(0,m.jsxs)(`span`,{className:`lg-pagination__simple-text`,children:[z,`/`,W]}),(0,m.jsx)(`button`,{type:`button`,className:`lg-pagination__nav-btn`,disabled:b||z>=W,onClick:()=>q(z+1),"aria-label":M.nextPage,children:(0,m.jsx)(s,{size:16})})]})]});let Q=_(z,W,F);return(0,m.jsxs)(`nav`,{ref:P,role:`navigation`,"aria-label":`pagination`,className:r(`lg-pagination`,`lg-pagination--${E}`,`lg-pagination--align-${e}`,b&&`lg-pagination--disabled`,k),style:A,children:[Z(),(0,m.jsx)(`button`,{type:`button`,className:`lg-pagination__nav-btn`,disabled:b||z<=1,onClick:()=>q(z-1),"aria-label":M.prevPage,children:(0,m.jsx)(o,{size:E===`borderless`?16:14})}),(0,m.jsx)(`ul`,{className:`lg-pagination__list`,children:Q.map((e,t)=>e===`ellipsis`?(0,m.jsx)(`li`,{className:`lg-pagination__ellipsis`,children:`…`},`ellipsis-${t}`):(0,m.jsx)(`li`,{children:(0,m.jsx)(`button`,{type:`button`,className:r(`lg-pagination__item`,e===z&&`lg-pagination__item--active`),disabled:b,"aria-current":e===z?`page`:void 0,onClick:()=>q(e),children:e})},e))}),(0,m.jsx)(`button`,{type:`button`,className:`lg-pagination__nav-btn`,disabled:b||z>=W,onClick:()=>q(z+1),"aria-label":M.nextPage,children:(0,m.jsx)(s,{size:E===`borderless`?16:14})}),w&&(0,m.jsxs)(f,{children:[(0,m.jsx)(l,{children:(0,m.jsxs)(`button`,{type:`button`,className:`lg-pagination__size-btn`,disabled:b,children:[(0,m.jsx)(`span`,{children:M.itemsPerPage.replace(`{size}`,String(U))}),(0,m.jsx)(a,{size:12})]})}),(0,m.jsx)(u,{children:S.map(e=>(0,m.jsx)(d,{selected:e===U,onSelect:()=>J(e),children:M.itemsPerPage.replace(`{size}`,String(e))},e))})]}),C&&(0,m.jsxs)(`div`,{className:`lg-pagination__jumper`,children:[(0,m.jsx)(`span`,{children:M.jumpTo}),(0,m.jsx)(`input`,{className:`lg-pagination__jumper-input`,value:G,disabled:b,onChange:e=>K(e.target.value),onKeyDown:Y,onBlur:X}),M.page&&(0,m.jsx)(`span`,{children:M.page})]})]})});v.displayName=`Pagination`;function y(){let[e,t]=(0,p.useState)(1);return(0,m.jsx)(v,{total:100,current:e,pageSize:10,showTotal:!0,onChange:e=>t(e)})}var b=`import { useState } from "react";
import { Pagination } from "lingee-ui";

export default function BasicDemo() {
  const [current, setCurrent] = useState(1);

  return (
    <Pagination
      total={100}
      current={current}
      pageSize={10}
      showTotal
      onChange={(page) => setCurrent(page)}
    />
  );
}
`;function x(){let[e,t]=(0,p.useState)(1),[n,r]=(0,p.useState)(1),[i,a]=(0,p.useState)(1);return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`simple 变体`}),(0,m.jsx)(v,{total:100,current:e,pageSize:10,variant:`simple`,onChange:e=>t(e)})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`borderless 变体`}),(0,m.jsx)(v,{total:100,current:n,pageSize:10,variant:`borderless`,onChange:e=>r(e)})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`bordered 变体`}),(0,m.jsx)(v,{total:100,current:i,pageSize:10,variant:`bordered`,onChange:e=>a(e)})]})]})}var S=`import { useState } from "react";
import { Pagination } from "lingee-ui";

export default function VariantsDemo() {
  const [current1, setCurrent1] = useState(1);
  const [current2, setCurrent2] = useState(1);
  const [current3, setCurrent3] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          simple 变体
        </p>
        <Pagination
          total={100}
          current={current1}
          pageSize={10}
          variant="simple"
          onChange={(page) => setCurrent1(page)}
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          borderless 变体
        </p>
        <Pagination
          total={100}
          current={current2}
          pageSize={10}
          variant="borderless"
          onChange={(page) => setCurrent2(page)}
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          bordered 变体
        </p>
        <Pagination
          total={100}
          current={current3}
          pageSize={10}
          variant="bordered"
          onChange={(page) => setCurrent3(page)}
        />
      </div>
    </div>
  );
}
`;function C(){let[e,t]=(0,p.useState)(1),[n,r]=(0,p.useState)(10);return(0,m.jsx)(v,{total:200,current:e,pageSize:n,showTotal:!0,showSizeChanger:!0,showQuickJumper:!0,onChange:(e,n)=>{t(e),r(n)}})}var w=`import { useState } from "react";
import { Pagination } from "lingee-ui";

export default function FullDemo() {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return (
    <Pagination
      total={200}
      current={current}
      pageSize={pageSize}
      showTotal
      showSizeChanger
      showQuickJumper
      onChange={(page, size) => {
        setCurrent(page);
        setPageSize(size);
      }}
    />
  );
}
`,T={title:`Pagination 分页`,description:`当数据量较大时，使用分页拆分数据，方便用户快速定位。`};function E(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.h2,{children:`基本用法`}),`
`,(0,m.jsx)(t.p,{children:`基础分页器，展示总条数和页码切换。`}),`
`,(0,m.jsx)(c,{source:b,children:(0,m.jsx)(y,{})}),`
`,(0,m.jsx)(t.h2,{children:`样式变体`}),`
`,(0,m.jsxs)(t.p,{children:[`支持 `,(0,m.jsx)(t.code,{children:`simple`}),`、`,(0,m.jsx)(t.code,{children:`borderless`}),`、`,(0,m.jsx)(t.code,{children:`bordered`}),` 三种样式变体。`]}),`
`,(0,m.jsx)(c,{source:S,children:(0,m.jsx)(x,{})}),`
`,(0,m.jsx)(t.h2,{children:`完整模式`}),`
`,(0,m.jsx)(t.p,{children:`同时开启总条数显示、每页条数切换和快速跳转。`}),`
`,(0,m.jsx)(c,{source:w,children:(0,m.jsx)(C,{})}),`
`,(0,m.jsx)(t.h2,{children:`API`}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`属性`}),(0,m.jsx)(t.th,{children:`说明`}),(0,m.jsx)(t.th,{children:`类型`}),(0,m.jsx)(t.th,{children:`默认值`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`total`})}),(0,m.jsx)(t.td,{children:`数据总条数`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`number`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`current`})}),(0,m.jsx)(t.td,{children:`当前页码（受控）`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`number`})}),(0,m.jsx)(t.td,{children:`-`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`defaultCurrent`})}),(0,m.jsx)(t.td,{children:`默认页码`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`number`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`1`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`pageSize`})}),(0,m.jsx)(t.td,{children:`每页条数`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`number`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`20`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`onChange`})}),(0,m.jsx)(t.td,{children:`页码变化回调`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`(page: number, pageSize: number) => void`})}),(0,m.jsx)(t.td,{children:`-`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`showTotal`})}),(0,m.jsx)(t.td,{children:`是否显示总条数`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`boolean`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`false`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`showSizeChanger`})}),(0,m.jsx)(t.td,{children:`是否显示每页条数切换`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`boolean`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`false`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`showQuickJumper`})}),(0,m.jsx)(t.td,{children:`是否显示快速跳转`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`boolean`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`false`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`variant`})}),(0,m.jsx)(t.td,{children:`样式变体`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`"simple" | "bordered" | "borderless"`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`"bordered"`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`disabled`})}),(0,m.jsx)(t.td,{children:`是否禁用`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`boolean`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`false`})})]})]})]})]})}function D(e={}){let{wrapper:t}=e.components||{};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(E,{...e})}):E(e)}export{D as default,T as frontmatter};