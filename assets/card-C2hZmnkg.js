import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{i as r,n as i,r as a,t as o}from"./EyeSlash-A_SRXg10.js";import{r as s,t as c}from"./empty-D55umbKp.js";import{t as l}from"./LoaderCircle-BGA709uD.js";import{t as u}from"./Search-Bp22Ei2B.js";import{t as d}from"./button-DU-GfdHa.js";var f=n();function p(){return(0,f.jsx)(c,{icon:u,description:`No data`})}var m=`import { Empty } from "lingee-ui";
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
`,T=e(t()),E={width:264,borderRadius:12,border:`1px solid var(--lg-g-border-color-black-subtle)`};function D(){let[e,t]=(0,T.useState)(0);return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,f.jsxs)(`div`,{style:E,children:[(0,f.jsx)(c.Card,{status:`loading`,description:`加载中...`}),(0,f.jsx)(c.Card,{status:`empty`,description:`暂无内容`}),(0,f.jsx)(c.Card,{status:`error`,description:e>0?`已重试 ${e} 次`:`加载失败`,onRetry:()=>t(e=>e+1)}),(0,f.jsx)(c.Card,{status:`error`,description:`加载失败`})]}),(0,f.jsxs)(`div`,{style:E,children:[(0,f.jsx)(c.Card,{status:`empty`,description:`暂无内容`,size:`md`}),(0,f.jsx)(c.Card,{status:`error`,description:`加载失败`,size:`md`,onRetry:()=>t(e=>e+1)})]}),(0,f.jsxs)(`div`,{style:{...E,width:360},children:[(0,f.jsx)(c.Card,{status:`empty`,description:`暂无内容`,size:`lg`}),(0,f.jsx)(c.Card,{status:`error`,description:`加载失败`,size:`lg`,onRetry:()=>t(e=>e+1)})]}),(0,f.jsxs)(`div`,{style:E,children:[(0,f.jsx)(c.Card,{status:`loading`,description:`加载中...`,variant:`inline`}),(0,f.jsx)(c.Card,{status:`error`,description:`加载失败`,variant:`inline`,onRetry:()=>t(e=>e+1)}),(0,f.jsx)(c.Card,{status:`empty`,description:`暂无对话`,variant:`inline`,icon:(0,f.jsx)(i,{size:16})})]})]})}var O=`import { useState } from "react";
import { Empty } from "lingee-ui";
import { Dialog } from "lingee-icon";

const boxStyle = {
  width: 264,
  borderRadius: 12,
  border: "1px solid var(--lg-g-border-color-black-subtle)",
} as const;

export default function CardDemo() {
  const [retryCount, setRetryCount] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={boxStyle}>
        {/* 默认 size="sm"：三态仅图标与文案不同，容器高度一致以免切换时跳动 */}
        <Empty.Card status="loading" description="加载中..." />
        <Empty.Card status="empty" description="暂无内容" />

        {/* 传 onRetry 后错误态渲染为 button，hover 出底色并追加主题色「重试」，
            description 只需写失败原因，不必自行拼接引导文案 */}
        <Empty.Card
          status="error"
          description={retryCount > 0 ? \`已重试 \${retryCount} 次\` : "加载失败"}
          onRetry={() => setRetryCount((v) => v + 1)}
        />

        {/* 不传 onRetry 时为纯提示：不可点击、无「重试」 */}
        <Empty.Card status="error" description="加载失败" />
      </div>

      {/* size="md"：图标与文案纵向排列，整体 80px 与 Select 下拉三态等高，
          「重试」跟随描述同行，不额外增高 */}
      <div style={boxStyle}>
        <Empty.Card status="empty" description="暂无内容" size="md" />
        <Empty.Card
          status="error"
          description="加载失败"
          size="md"
          onRetry={() => setRetryCount((v) => v + 1)}
        />
      </div>

      {/* size="lg"：页面级空态，「重试」独占一行 */}
      <div style={{ ...boxStyle, width: 360 }}>
        <Empty.Card status="empty" description="暂无内容" size="lg" />
        <Empty.Card
          status="error"
          description="加载失败"
          size="lg"
          onRetry={() => setRetryCount((v) => v + 1)}
        />
      </div>

      <div style={boxStyle}>
        {/* variant="inline" 只收紧留白，与 size 相互独立 */}
        <Empty.Card status="loading" description="加载中..." variant="inline" />
        <Empty.Card
          status="error"
          description="加载失败"
          variant="inline"
          onRetry={() => setRetryCount((v) => v + 1)}
        />

        {/* 自定义图标贴合业务语义 */}
        <Empty.Card
          status="empty"
          description="暂无对话"
          variant="inline"
          icon={<Dialog size={16} />}
        />
      </div>
    </div>
  );
}
`;export{S as a,y as c,g as d,h as f,C as i,v as l,p as m,D as n,x as o,m as p,w as r,b as s,O as t,_ as u};