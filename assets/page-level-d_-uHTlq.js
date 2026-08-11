import{R as e}from"./i18n-C43t6VQe.js";import{n as t,r as n,t as r}from"./EyeSlash-CytqI51I.js";import{n as i,t as a}from"./empty-CTpdSjxO.js";import{t as o}from"./LoaderCircle-CIh_4ubB.js";import{t as s}from"./Search-Cxw5bkAq.js";import{t as c}from"./button-8AVe2tg2.js";var l=e();function u(){return(0,l.jsx)(a,{icon:s,description:`No data`})}var d=`import { Empty } from "lingee-ui";
import { Search } from "lingee-icon";

export default function BasicDemo() {
  return <Empty icon={Search} description="No data" />;
}
`;function f(){return(0,l.jsx)(a,{description:`No results found. Try a different keyword.`,children:(0,l.jsx)(c,{variant:`primary`,style:{marginTop:12},children:`Clear filters`})})}var p=`import { Empty, Button } from "lingee-ui";

export default function CustomDemo() {
  return (
    <Empty description="No results found. Try a different keyword.">
      <Button variant="primary" style={{ marginTop: 12 }}>
        Clear filters
      </Button>
    </Empty>
  );
}
`;function m(){return(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h4`,{style:{marginBottom:8,fontSize:13,color:`#666`},children:`lg - Page level`}),(0,l.jsx)(a,{size:`lg`,icon:s,description:`No results`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h4`,{style:{marginBottom:8,fontSize:13,color:`#666`},children:`md - Inline (default)`}),(0,l.jsx)(a,{size:`md`,icon:s,description:`No results`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h4`,{style:{marginBottom:8,fontSize:13,color:`#666`},children:`sm - Mini`}),(0,l.jsx)(a,{size:`sm`,icon:s,description:`No results`})]})]})}var h=`import { Empty } from "lingee-ui";
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
`;function g(){return(0,l.jsxs)(`div`,{style:{display:`flex`,gap:48,flexWrap:`wrap`},children:[(0,l.jsx)(a,{icon:s,description:`No results`}),(0,l.jsx)(a,{icon:i,description:`No documents`}),(0,l.jsx)(a,{icon:r,description:`No permission`}),(0,l.jsx)(a,{icon:t,description:`Network error`}),(0,l.jsx)(a,{icon:n,description:`No notifications`})]})}var _=`import { Empty } from "lingee-ui";
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
`;function v(){return(0,l.jsx)(a,{icon:(0,l.jsx)(o,{size:24,spin:!0,color:`var(--lg-g-fg-color-black-aint)`}),description:`Loading, please wait...`})}var y=`import { Empty } from "lingee-ui";
import { LoaderCircle } from "lingee-icon";

export default function CustomIconDemo() {
  return (
    <Empty
      icon={<LoaderCircle size={24} spin color="var(--lg-g-fg-color-black-aint)" />}
      description="Loading, please wait..."
    />
  );
}
`;function b(){return(0,l.jsx)(`div`,{style:{height:300,display:`flex`,alignItems:`center`,justifyContent:`center`,border:`1px dashed var(--lg-g-border-color-black-soft)`,borderRadius:8},children:(0,l.jsx)(a,{size:`lg`,icon:i,description:`No projects created yet`,children:(0,l.jsx)(c,{variant:`primary`,style:{marginTop:16},children:`New project`})})})}var x=`import { Empty, Button } from "lingee-ui";
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
`;export{_ as a,m as c,d,u as f,v as i,p as l,b as n,g as o,y as r,h as s,x as t,f as u};