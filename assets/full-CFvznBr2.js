import{I as e,R as t,W as n,q as r}from"./i18n-DmENUXWN.js";import{n as i}from"./provider-BibnZ_0z.js";import{t as a}from"./ChevronDown-CrJiypz-.js";import{t as o}from"./ChevronLeft-gY1h_Vob.js";import{t as s}from"./ChevronRight-Ch4PDHJK.js";import{d as c,n as l,r as u,t as d}from"./dropdown-VTSu-ViN.js";var f=r(n()),p=t(),m=[10,20,50,100];function h(e){let[t,n]=(0,f.useState)(`full`);return(0,f.useEffect)(()=>{let t=e.current;if(!t)return;let r=new ResizeObserver(e=>{for(let t of e){let e=t.contentRect.width;n(e>=780?`full`:e>=520?`medium`:`compact`)}});return r.observe(t),()=>r.disconnect()},[e]),t}function g(e,t,n){if(!t||!isFinite(t)||t<=0)return[1];if(t<=5)return Array.from({length:t},(e,t)=>t+1);if(n===`compact`){if(e===1||e===t)return[1,`ellipsis`,t];let n=[];return e>2?n.push(1,`ellipsis`):n.push(1),n.push(e),e<t-1?n.push(`ellipsis`,t):n.push(t),n}if(n===`medium`){let n=Math.max(e-1,1),r=Math.min(e+1,t),i=n>2,a=r<t-1,o=[];if(i){o.push(1,`ellipsis`);for(let e=n;e<=r;e++)o.push(e)}else for(let e=1;e<=Math.min(r,t);e++)o.push(e);if(a)o.push(`ellipsis`,t);else for(let e=Math.max(r+1,1);e<=t;e++)o.push(e);return o}if(t<=7)return Array.from({length:t},(e,t)=>t+1);let r=Math.max(e-2,1),i=Math.min(e+2,t),a=r>2,o=i<t-1;return!a&&o?[...Array.from({length:5},(e,t)=>t+1),`ellipsis`,t]:a&&!o?[1,`ellipsis`,...Array.from({length:5},(e,n)=>t-4+n)]:[1,`ellipsis`,...Array.from({length:i-r+1},(e,t)=>r+t),`ellipsis`,t]}var _=f.forwardRef(({align:t=`end`,current:n,defaultCurrent:r=1,pageSize:_,defaultPageSize:v=20,total:y,disabled:b=!1,hideOnSinglePage:x=!1,pageSizeOptions:S=m,showQuickJumper:C=!1,showSizeChanger:w=!1,showTotal:T,variant:E=`bordered`,onChange:D,onPageSizeChange:O,className:k,style:A},j)=>{let M=i(`Pagination`),N=(0,f.useRef)(null),P=e=>{N.current=e,typeof j==`function`?j(e):j&&(j.current=e)},F=h(N),I=n!==void 0,[L,R]=(0,f.useState)(r),z=I?n:L,B=_!==void 0,[V,H]=(0,f.useState)(v),U=B?_:V,W=(0,f.useMemo)(()=>!y||!U||U<=0?1:Math.max(1,Math.ceil(y/U)),[y,U]),[G,K]=(0,f.useState)(``);if(x&&W<=1)return null;let q=(0,f.useCallback)(e=>{let t=Math.max(1,Math.min(e,W));I||R(t),D?.(t,U)},[W,I,D,U]),J=(0,f.useCallback)(e=>{B||H(e);let t=Math.max(1,Math.ceil(y/e)),n=Math.min(z,t);I||R(n),O?.(n,e),D?.(n,e)},[B,I,y,z,O,D]),Y=e=>{if(e.key===`Enter`){let e=parseInt(G,10);isNaN(e)||q(e),K(``)}},X=()=>{let e=parseInt(G,10);isNaN(e)||q(e),K(``)},Z=()=>{if(!T)return null;if(typeof T==`function`){let e=(z-1)*U+1,t=Math.min(z*U,y);return(0,p.jsx)(`span`,{className:`lg-pagination__total`,children:T(y,[e,t])})}return(0,p.jsx)(`span`,{className:`lg-pagination__total`,children:M.total.replace(`{total}`,y.toLocaleString())})};if(E===`simple`)return(0,p.jsxs)(`nav`,{ref:P,role:`navigation`,"aria-label":`pagination`,className:e(`lg-pagination`,`lg-pagination--simple`,`lg-pagination--align-${t}`,b&&`lg-pagination--disabled`,k),style:A,children:[Z(),(0,p.jsxs)(`div`,{className:`lg-pagination__simple-nav`,children:[(0,p.jsx)(`button`,{type:`button`,className:`lg-pagination__nav-btn`,disabled:b||z<=1,onClick:()=>q(z-1),"aria-label":M.prevPage,children:(0,p.jsx)(o,{size:16})}),(0,p.jsxs)(`span`,{className:`lg-pagination__simple-text`,children:[z,`/`,W]}),(0,p.jsx)(`button`,{type:`button`,className:`lg-pagination__nav-btn`,disabled:b||z>=W,onClick:()=>q(z+1),"aria-label":M.nextPage,children:(0,p.jsx)(s,{size:16})})]})]});let Q=g(z,W,F);return(0,p.jsxs)(`nav`,{ref:P,role:`navigation`,"aria-label":`pagination`,className:e(`lg-pagination`,`lg-pagination--${E}`,`lg-pagination--align-${t}`,b&&`lg-pagination--disabled`,k),style:A,children:[Z(),(0,p.jsx)(`button`,{type:`button`,className:`lg-pagination__nav-btn`,disabled:b||z<=1,onClick:()=>q(z-1),"aria-label":M.prevPage,children:(0,p.jsx)(o,{size:E===`borderless`?16:14})}),(0,p.jsx)(`ul`,{className:`lg-pagination__list`,children:Q.map((t,n)=>t===`ellipsis`?(0,p.jsx)(`li`,{className:`lg-pagination__ellipsis`,children:`…`},`ellipsis-${n}`):(0,p.jsx)(`li`,{children:(0,p.jsx)(`button`,{type:`button`,className:e(`lg-pagination__item`,t===z&&`lg-pagination__item--active`),disabled:b,"aria-current":t===z?`page`:void 0,onClick:()=>q(t),children:t})},t))}),(0,p.jsx)(`button`,{type:`button`,className:`lg-pagination__nav-btn`,disabled:b||z>=W,onClick:()=>q(z+1),"aria-label":M.nextPage,children:(0,p.jsx)(s,{size:E===`borderless`?16:14})}),w&&(0,p.jsxs)(d,{children:[(0,p.jsx)(c,{children:(0,p.jsxs)(`button`,{type:`button`,className:`lg-pagination__size-btn`,disabled:b,children:[(0,p.jsx)(`span`,{children:M.itemsPerPage.replace(`{size}`,String(U))}),(0,p.jsx)(a,{size:12})]})}),(0,p.jsx)(l,{children:S.map(e=>(0,p.jsx)(u,{selected:e===U,onSelect:()=>J(e),children:M.itemsPerPage.replace(`{size}`,String(e))},e))})]}),C&&(0,p.jsxs)(`div`,{className:`lg-pagination__jumper`,children:[(0,p.jsx)(`span`,{children:M.jumpTo}),(0,p.jsx)(`input`,{className:`lg-pagination__jumper-input`,value:G,disabled:b,onChange:e=>K(e.target.value),onKeyDown:Y,onBlur:X}),M.page&&(0,p.jsx)(`span`,{children:M.page})]})]})});_.displayName=`Pagination`;function v(){let[e,t]=(0,f.useState)(1);return(0,p.jsx)(_,{total:100,current:e,pageSize:10,showTotal:!0,onChange:e=>t(e)})}var y=`import { useState } from "react";
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
`;function b(){let[e,t]=(0,f.useState)(1),[n,r]=(0,f.useState)(1),[i,a]=(0,f.useState)(1);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`simple variant`}),(0,p.jsx)(_,{total:100,current:e,pageSize:10,variant:`simple`,onChange:e=>t(e)})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`borderless variant`}),(0,p.jsx)(_,{total:100,current:n,pageSize:10,variant:`borderless`,onChange:e=>r(e)})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`bordered variant`}),(0,p.jsx)(_,{total:100,current:i,pageSize:10,variant:`bordered`,onChange:e=>a(e)})]})]})}var x=`import { useState } from "react";
import { Pagination } from "lingee-ui";

export default function VariantsDemo() {
  const [current1, setCurrent1] = useState(1);
  const [current2, setCurrent2] = useState(1);
  const [current3, setCurrent3] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          simple variant
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
          borderless variant
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
          bordered variant
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
`;function S(){let[e,t]=(0,f.useState)(1),[n,r]=(0,f.useState)(10);return(0,p.jsx)(_,{total:200,current:e,pageSize:n,showTotal:!0,showSizeChanger:!0,showQuickJumper:!0,onChange:(e,n)=>{t(e),r(n)}})}var C=`import { useState } from "react";
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
`;export{y as a,b as i,S as n,v as o,x as r,C as t};