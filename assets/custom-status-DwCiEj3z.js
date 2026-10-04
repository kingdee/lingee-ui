import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{n as r}from"./tooltip-Cfb1EdqL.js";import{t as i}from"./button-CsPKeZbr.js";import{t as a}from"./spin-HmXJQ_8f.js";import{t as o}from"./infinite-scroll-Cxf7JMFV.js";var s=e(t()),c=n();function l(e){return new Promise(t=>{setTimeout(()=>{t(Array.from({length:10},(t,n)=>`Item ${e*10+n+1}`))},600)})}var u=3;function d(){let[e,t]=(0,s.useState)([]),[n,i]=(0,s.useState)(0),a=n<u;return(0,c.jsx)(r,{fill:!0,style:{height:240},children:(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:12},children:[e.map(e=>(0,c.jsx)(`div`,{style:{padding:`8px 12px`,borderRadius:8,background:`var(--lg-g-bg-color-black-faint)`,color:`var(--lg-g-fg-color-black-strong)`},children:e},e)),(0,c.jsx)(o,{loadMore:async()=>{let e=await l(n);t(t=>[...t,...e]),i(e=>e+1)},hasMore:a})]})})}var f=`import { useState } from "react";
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
`;function p(e,t){return new Promise((n,r)=>{setTimeout(()=>{if(e===2&&!t){r(Error(`mock failure`));return}n(Array.from({length:8},(t,n)=>`Item ${e*8+n+1}`))},600)})}var m=3;function h(){let[e,t]=(0,s.useState)([]),[n,l]=(0,s.useState)(0),u=n<m;return(0,c.jsx)(r,{fill:!0,style:{height:240},children:(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:12},children:[e.map(e=>(0,c.jsx)(`div`,{style:{padding:`8px 12px`,borderRadius:8,background:`var(--lg-g-bg-color-black-faint)`,color:`var(--lg-g-fg-color-black-strong)`},children:e},e)),(0,c.jsx)(o,{loadMore:async e=>{let r=await p(n,e);t(e=>[...e,...r]),l(e=>e+1)},hasMore:u,loading:(0,c.jsx)(a,{size:`sm`}),noMore:(0,c.jsx)(`span`,{style:{fontSize:12,color:`var(--lg-g-fg-color-black-default)`},children:`— End —`}),error:e=>(0,c.jsx)(i,{variant:`text`,size:`sm`,danger:!0,onClick:e,children:`Load failed, tap to retry`})})]})})}var g=`import { useState } from "react";
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
`;export{d as i,h as n,f as r,g as t};