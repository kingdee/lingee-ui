import{R as e,W as t,q as n}from"./i18n-aga02gPp.js";import{i as r,n as i,r as a,t as o}from"./EyeSlash-Dw9uvQBP.js";import{r as s,t as c}from"./empty-C728cO_b.js";import{t as l}from"./LoaderCircle-DBDF6ss4.js";import{t as u}from"./Search-C0tn2oQP.js";import{t as d}from"./button-5SF5IBYu.js";var f=e();function p(){return(0,f.jsx)(c,{icon:u,description:`No data`})}var m=`import { Empty } from "lingee-ui";
import { Search } from "lingee-icon";

export default function BasicDemo() {
  return <Empty icon={Search} description="No data" />;
}
`;function h(){return(0,f.jsx)(c,{description:`No results found. Try a different keyword.`,children:(0,f.jsx)(d,{variant:`primary`,style:{marginTop:12},children:`Clear filters`})})}var g=`import { Empty, Button } from "lingee-ui";

export default function CustomDemo() {
  return (
    <Empty description="No results found. Try a different keyword.">
      <Button variant="primary" style={{ marginTop: 12 }}>
        Clear filters
      </Button>
    </Empty>
  );
}
`;function _(){return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h4`,{style:{marginBottom:8,fontSize:13,color:`#666`},children:`lg - Page level`}),(0,f.jsx)(c,{size:`lg`,icon:u,description:`No results`})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h4`,{style:{marginBottom:8,fontSize:13,color:`#666`},children:`md - Inline (default)`}),(0,f.jsx)(c,{size:`md`,icon:u,description:`No results`})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h4`,{style:{marginBottom:8,fontSize:13,color:`#666`},children:`sm - Mini`}),(0,f.jsx)(c,{size:`sm`,icon:u,description:`No results`})]})]})}var v=`import { Empty } from "lingee-ui";
import { Search } from "lingee-icon";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <div>
        <h4 style={{ marginBottom: 8, fontSize: 13, color: "#666" }}>lg - Page level</h4>
        <Empty size="lg" icon={Search} description="No results" />
      </div>
      <div>
        <h4 style={{ marginBottom: 8, fontSize: 13, color: "#666" }}>md - Inline (default)</h4>
        <Empty size="md" icon={Search} description="No results" />
      </div>
      <div>
        <h4 style={{ marginBottom: 8, fontSize: 13, color: "#666" }}>sm - Mini</h4>
        <Empty size="sm" icon={Search} description="No results" />
      </div>
    </div>
  );
}
`;function y(){return(0,f.jsxs)(`div`,{style:{display:`flex`,gap:48,flexWrap:`wrap`},children:[(0,f.jsx)(c,{icon:u,description:`No results`}),(0,f.jsx)(c,{icon:s,description:`No documents`}),(0,f.jsx)(c,{icon:o,description:`No permission`}),(0,f.jsx)(c,{icon:a,description:`Network error`}),(0,f.jsx)(c,{icon:r,description:`No notifications`})]})}var b=`import { Empty } from "lingee-ui";
import { Search, DocumentLibrary, EyeSlash, CloudSlash, BellSlash } from "lingee-icon";

export default function IconsDemo() {
  return (
    <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
      <Empty icon={Search} description="No results" />
      <Empty icon={DocumentLibrary} description="No documents" />
      <Empty icon={EyeSlash} description="No permission" />
      <Empty icon={CloudSlash} description="Network error" />
      <Empty icon={BellSlash} description="No notifications" />
    </div>
  );
}
`;function x(){return(0,f.jsx)(c,{icon:(0,f.jsx)(l,{size:24,spin:!0,color:`var(--lg-g-fg-color-black-faint)`}),description:`Loading, please wait...`})}var S=`import { Empty } from "lingee-ui";
import { LoaderCircle } from "lingee-icon";

export default function CustomIconDemo() {
  return (
    <Empty
      icon={<LoaderCircle size={24} spin color="var(--lg-g-fg-color-black-faint)" />}
      description="Loading, please wait..."
    />
  );
}
`;function C(){return(0,f.jsx)(`div`,{style:{height:300,display:`flex`,alignItems:`center`,justifyContent:`center`,border:`1px dashed var(--lg-g-border-color-black-soft)`,borderRadius:8},children:(0,f.jsx)(c,{size:`lg`,icon:s,description:`No projects created yet`,children:(0,f.jsx)(d,{variant:`primary`,style:{marginTop:16},children:`New project`})})})}var w=`import { Empty, Button } from "lingee-ui";
import { DocumentLibrary } from "lingee-icon";

export default function PageLevelDemo() {
  return (
    <div
      style={{
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px dashed var(--lg-g-border-color-black-soft)",
        borderRadius: 8,
      }}
    >
      <Empty size="lg" icon={DocumentLibrary} description="No projects created yet">
        <Button variant="primary" style={{ marginTop: 16 }}>
          New project
        </Button>
      </Empty>
    </div>
  );
}
`,T=n(t());function E(){let[e,t]=(0,T.useState)(0);return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,f.jsxs)(`div`,{style:{width:264,borderRadius:12,border:`1px solid var(--lg-g-border-color-black-subtle)`},children:[(0,f.jsx)(c.Card,{status:`loading`,description:`加载中...`}),(0,f.jsx)(c.Card,{status:`empty`,description:`暂无内容`}),(0,f.jsx)(c.Card,{status:`error`,description:e>0?`已重试 ${e} 次`:`加载失败，点击重试`,onRetry:()=>t(e=>e+1)})]}),(0,f.jsxs)(`div`,{style:{width:264,borderRadius:12,border:`1px solid var(--lg-g-border-color-black-subtle)`},children:[(0,f.jsx)(c.Card,{status:`loading`,description:`加载中...`,variant:`inline`}),(0,f.jsx)(c.Card,{status:`error`,description:`加载失败`,variant:`inline`}),(0,f.jsx)(c.Card,{status:`empty`,description:`暂无对话`,variant:`inline`,icon:(0,f.jsx)(i,{size:14})})]})]})}var D=`import { useState } from "react";
import { Empty } from "lingee-ui";
import { Dialog } from "lingee-icon";

export default function CardDemo() {
  const [retryCount, setRetryCount] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div
        style={{
          width: 264,
          borderRadius: 12,
          border: "1px solid var(--lg-g-border-color-black-subtle)",
        }}
      >
        {/* 三态：仅图标与文案不同，容器高度一致以免切换时跳动 */}
        <Empty.Card status="loading" description="加载中..." />
        <Empty.Card status="empty" description="暂无内容" />

        {/* 传 onRetry 后错误态渲染为 button，可点击并带 hover 底色 */}
        <Empty.Card
          status="error"
          description={
            retryCount > 0 ? \`已重试 \${retryCount} 次\` : "加载失败，点击重试"
          }
          onRetry={() => setRetryCount((v) => v + 1)}
        />
      </div>

      <div
        style={{
          width: 264,
          borderRadius: 12,
          border: "1px solid var(--lg-g-border-color-black-subtle)",
        }}
      >
        {/* inline 形态：用于列表底部「加载更多」，整体更收紧 */}
        <Empty.Card status="loading" description="加载中..." variant="inline" />
        <Empty.Card status="error" description="加载失败" variant="inline" />

        {/* 自定义图标贴合业务语义 */}
        <Empty.Card
          status="empty"
          description="暂无对话"
          variant="inline"
          icon={<Dialog size={14} />}
        />
      </div>
    </div>
  );
}
`;export{S as a,y as c,g as d,h as f,C as i,v as l,p as m,E as n,x as o,m as p,w as r,b as s,D as t,_ as u};