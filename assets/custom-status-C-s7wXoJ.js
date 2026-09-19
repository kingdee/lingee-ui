import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{T as r}from"./tooltip-provider-DeqArBrK.js";import{n as i}from"./provider-B_HaNAF1.js";import{t as a}from"./card-0ZpTGA2w.js";import{n as o}from"./tooltip-D5ypfcq7.js";import{t as s}from"./button-BA4Y5u4W.js";import{t as c}from"./spin-D037XVYy.js";var l=e(t()),u=n(),d=100;function f(e){return e===window}function p(e){let t=l.useRef(!1),n=l.useRef(e);return n.current=e,l.useCallback(async e=>{if(!t.current){t.current=!0;try{await n.current(e)}finally{t.current=!1}}},[])}function m(e,t){let n=l.useRef(e);n.current=e;let r=l.useRef(0),i=l.useRef(null);return l.useEffect(()=>()=>{i.current!==null&&clearTimeout(i.current)},[]),l.useCallback(()=>{let e=t-(Date.now()-r.current);if(e<=0){r.current=Date.now(),n.current();return}i.current===null&&(i.current=setTimeout(()=>{i.current=null,r.current=Date.now(),n.current()},e))},[t])}function h(e,t){let n=typeof t==`function`?t():t,r=e,i=null;for(;r;){let t=window.getComputedStyle(r);if(t.display===`none`)return{kind:`hidden`};if(r!==e&&i===null){let e=t.overflowY;(e===`auto`||e===`scroll`||e===`overlay`)&&(i=r)}r=r.parentElement}return n?{kind:`target`,target:n}:{kind:`target`,target:i??window}}var g=l.forwardRef(({loadMore:e,hasMore:t,threshold:n=80,scrollTarget:o,loading:s,noMore:c,error:g,className:_,...v},y)=>{let b=i(`InfiniteScroll`),[x,S]=l.useState(!1),C=l.useRef(null),[w,T]=l.useState(null),E=p(async t=>{try{await e(t)}catch(e){throw S(!0),e}}),[D,O]=l.useState({}),k=l.useRef(D),A=m(()=>{if(k.current!==D||!t)return;let e=C.current;if(!e||!e.isConnected)return;let r=h(e,o);if(r.kind===`hidden`)return;let i=r.target;T(i);let a=e.getBoundingClientRect().top;if((f(i)?window.innerHeight:i.getBoundingClientRect().bottom)<a-n)return;let s={};k.current=s,E(!1).then(()=>O(s)).catch(()=>void 0)},d);l.useEffect(()=>{A()}),l.useEffect(()=>{if(!w)return;let e=()=>A();return w.addEventListener(`scroll`,e,{passive:!0}),()=>w.removeEventListener(`scroll`,e)},[w,A]);let j=l.useCallback(()=>{S(!1),E(!0).then(()=>O(k.current)).catch(()=>void 0)},[E]),M=l.useCallback(e=>{C.current=e,typeof y==`function`?y(e):y&&(y.current=e)},[y]),N=()=>t?x?typeof g==`function`?g(j):g===void 0?(0,u.jsx)(a,{status:`error`,variant:`inline`,description:b.loadFailed,onRetry:j}):g:s===void 0?(0,u.jsx)(a,{status:`loading`,variant:`inline`,description:b.loading}):s:c===void 0?(0,u.jsx)(a,{status:`empty`,variant:`inline`,description:b.noMore}):c;return(0,u.jsx)(`div`,{ref:M,className:r(`lg-infinite-scroll`,_),...v,children:N()})});g.displayName=`InfiniteScroll`;function _(e){return new Promise(t=>{setTimeout(()=>{t(Array.from({length:10},(t,n)=>`Item ${e*10+n+1}`))},600)})}var v=3;function y(){let[e,t]=(0,l.useState)([]),[n,r]=(0,l.useState)(0),i=n<v;return(0,u.jsx)(o,{fill:!0,style:{height:240},children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:12},children:[e.map(e=>(0,u.jsx)(`div`,{style:{padding:`8px 12px`,borderRadius:8,background:`var(--lg-g-bg-color-black-faint)`,color:`var(--lg-g-fg-color-black-strong)`},children:e},e)),(0,u.jsx)(g,{loadMore:async()=>{let e=await _(n);t(t=>[...t,...e]),r(e=>e+1)},hasMore:i})]})})}var b=`import { useState } from "react";
import { InfiniteScroll, ScrollArea } from "lingee-ui";

/** 模拟分页请求 */
function fetchPage(page: number): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Array.from({ length: 10 }, (_, i) => \`Item \${page * 10 + i + 1}\`));
    }, 600);
  });
}

const TOTAL_PAGES = 3;

export default function Basic() {
  const [items, setItems] = useState<string[]>([]);
  const [page, setPage] = useState(0);

  const hasMore = page < TOTAL_PAGES;

  const loadMore = async () => {
    const next = await fetchPage(page);
    setItems((prev) => [...prev, ...next]);
    setPage((prev) => prev + 1);
  };

  return (
    <ScrollArea fill style={{ height: 240 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: 12 }}>
        {items.map((item) => (
          <div
            key={item}
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              background: "var(--lg-g-bg-color-black-faint)",
              color: "var(--lg-g-fg-color-black-strong)",
            }}
          >
            {item}
          </div>
        ))}
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
      </div>
    </ScrollArea>
  );
}
`;function x(e,t){return new Promise((n,r)=>{setTimeout(()=>{if(e===2&&!t){r(Error(`mock failure`));return}n(Array.from({length:8},(t,n)=>`Item ${e*8+n+1}`))},600)})}var S=3;function C(){let[e,t]=(0,l.useState)([]),[n,r]=(0,l.useState)(0),i=n<S;return(0,u.jsx)(o,{fill:!0,style:{height:240},children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:12},children:[e.map(e=>(0,u.jsx)(`div`,{style:{padding:`8px 12px`,borderRadius:8,background:`var(--lg-g-bg-color-black-faint)`,color:`var(--lg-g-fg-color-black-strong)`},children:e},e)),(0,u.jsx)(g,{loadMore:async e=>{let i=await x(n,e);t(e=>[...e,...i]),r(e=>e+1)},hasMore:i,loading:(0,u.jsx)(c,{size:`sm`}),noMore:(0,u.jsx)(`span`,{style:{fontSize:12,color:`var(--lg-g-fg-color-black-default)`},children:`— End —`}),error:e=>(0,u.jsx)(s,{variant:`text`,size:`sm`,danger:!0,onClick:e,children:`Load failed, tap to retry`})})]})})}var w=`import { useState } from "react";
import { Button, InfiniteScroll, ScrollArea, Spin } from "lingee-ui";

/** 前两页成功，第三页失败一次用于演示失败态 */
function fetchPage(page: number, attempted: boolean): Promise<string[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (page === 2 && !attempted) {
        reject(new Error("mock failure"));
        return;
      }
      resolve(Array.from({ length: 8 }, (_, i) => \`Item \${page * 8 + i + 1}\`));
    }, 600);
  });
}

const TOTAL_PAGES = 3;

export default function CustomStatus() {
  const [items, setItems] = useState<string[]>([]);
  const [page, setPage] = useState(0);

  const hasMore = page < TOTAL_PAGES;

  const loadMore = async (isRetry: boolean) => {
    const next = await fetchPage(page, isRetry);
    setItems((prev) => [...prev, ...next]);
    setPage((prev) => prev + 1);
  };

  return (
    <ScrollArea fill style={{ height: 240 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: 12 }}>
        {items.map((item) => (
          <div
            key={item}
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              background: "var(--lg-g-bg-color-black-faint)",
              color: "var(--lg-g-fg-color-black-strong)",
            }}
          >
            {item}
          </div>
        ))}
        <InfiniteScroll
          loadMore={loadMore}
          hasMore={hasMore}
          loading={<Spin size="sm" />}
          noMore={
            <span style={{ fontSize: 12, color: "var(--lg-g-fg-color-black-default)" }}>
              — End —
            </span>
          }
          error={(retry: () => void) => (
            <Button variant="text" size="sm" danger onClick={retry}>
              Load failed, tap to retry
            </Button>
          )}
        />
      </div>
    </ScrollArea>
  );
}
`;export{y as i,C as n,b as r,w as t};