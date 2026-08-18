import{G as e,J as t,z as n}from"./i18n-B4Rqn8un.js";import{t as r}from"./tabs-QkI_3k34.js";var i=n(),a=[{key:`tab1`,label:`Tab One`},{key:`tab2`,label:`Tab Two`},{key:`tab3`,label:`Tab Three`}];function o(){return(0,i.jsx)(r,{items:a,defaultActiveKey:`tab1`})}var s=`import { Tabs } from "lingee-ui";

const items = [
  { key: "tab1", label: "Tab One" },
  { key: "tab2", label: "Tab Two" },
  { key: "tab3", label: "Tab Three" },
];

export default function BasicDemo() {
  return <Tabs items={items} defaultActiveKey="tab1" />;
}
`,c=[{key:`tab1`,label:`Tab One`},{key:`tab2`,label:`Tab Two`},{key:`tab3`,label:`Tab Three`}];function l(){return(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`segmented (default, pill shape)`}),(0,i.jsx)(r,{items:c,defaultActiveKey:`tab1`,variant:`segmented`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`rounded (rounded rectangle)`}),(0,i.jsx)(r,{items:c,defaultActiveKey:`tab1`,variant:`rounded`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`solid`}),(0,i.jsx)(r,{items:c,defaultActiveKey:`tab1`,variant:`solid`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`outline`}),(0,i.jsx)(r,{items:c,defaultActiveKey:`tab1`,variant:`outline`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`underline`}),(0,i.jsx)(r,{items:c,defaultActiveKey:`tab1`,variant:`underline`})]})]})}var u=`import { Tabs } from "lingee-ui";

const items = [
  { key: "tab1", label: "Tab One" },
  { key: "tab2", label: "Tab Two" },
  { key: "tab3", label: "Tab Three" },
];

export default function VariantsDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          segmented (default, pill shape)
        </p>
        <Tabs items={items} defaultActiveKey="tab1" variant="segmented" />
      </div>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          rounded (rounded rectangle)
        </p>
        <Tabs items={items} defaultActiveKey="tab1" variant="rounded" />
      </div>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>solid</p>
        <Tabs items={items} defaultActiveKey="tab1" variant="solid" />
      </div>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>outline</p>
        <Tabs items={items} defaultActiveKey="tab1" variant="outline" />
      </div>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          underline
        </p>
        <Tabs items={items} defaultActiveKey="tab1" variant="underline" />
      </div>
    </div>
  );
}
`,d=[{key:`tab1`,label:`Tab One`},{key:`tab2`,label:`Tab Two`},{key:`tab3`,label:`Tab Three`}],f=[{name:`segmented`,value:`segmented`},{name:`rounded`,value:`rounded`},{name:`solid`,value:`solid`},{name:`outline`,value:`outline`}];function p(){return(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[f.map(({name:e,value:t})=>(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{style:{marginBottom:12,color:`rgba(0,0,0,0.64)`,fontWeight:500},children:e}),(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,i.jsx)(`span`,{style:{width:32,fontSize:12,color:`rgba(0,0,0,0.46)`},children:`md`}),(0,i.jsx)(r,{items:d,defaultActiveKey:`tab1`,variant:t,size:`md`})]}),(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,i.jsx)(`span`,{style:{width:32,fontSize:12,color:`rgba(0,0,0,0.46)`},children:`sm`}),(0,i.jsx)(r,{items:d,defaultActiveKey:`tab1`,variant:t,size:`sm`})]})]})]},t)),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{style:{marginBottom:12,color:`rgba(0,0,0,0.64)`,fontWeight:500},children:`glassy (glass highlight thumb)`}),(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,i.jsx)(`span`,{style:{width:80,fontSize:12,color:`rgba(0,0,0,0.46)`},children:`segmented`}),(0,i.jsx)(`div`,{style:{background:`#F1F1F6`,padding:`8px 12px`,borderRadius:12},children:(0,i.jsx)(r,{items:d,defaultActiveKey:`tab1`,variant:`segmented`,glassy:!0})})]}),(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,i.jsx)(`span`,{style:{width:80,fontSize:12,color:`rgba(0,0,0,0.46)`},children:`rounded`}),(0,i.jsx)(`div`,{style:{background:`#F1F1F6`,padding:`8px 12px`,borderRadius:12},children:(0,i.jsx)(r,{items:d,defaultActiveKey:`tab1`,variant:`rounded`,glassy:!0})})]})]})]})]})}var m=`import { Tabs } from "lingee-ui";
import type { TabsVariant } from "lingee-ui";

const items = [
  { key: "tab1", label: "Tab One" },
  { key: "tab2", label: "Tab Two" },
  { key: "tab3", label: "Tab Three" },
];

const variants: { name: string; value: TabsVariant }[] = [
  { name: "segmented", value: "segmented" },
  { name: "rounded", value: "rounded" },
  { name: "solid", value: "solid" },
  { name: "outline", value: "outline" },
];

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {variants.map(({ name, value }) => (
        <div key={value}>
          <p style={{ marginBottom: 12, color: "rgba(0,0,0,0.64)", fontWeight: 500 }}>
            {name}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 32, fontSize: 12, color: "rgba(0,0,0,0.46)" }}>md</span>
              <Tabs items={items} defaultActiveKey="tab1" variant={value} size="md" />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 32, fontSize: 12, color: "rgba(0,0,0,0.46)" }}>sm</span>
              <Tabs items={items} defaultActiveKey="tab1" variant={value} size="sm" />
            </div>
          </div>
        </div>
      ))}

      {/* glassy 效果（仅 segmented / rounded 支持） */}
      <div>
        <p style={{ marginBottom: 12, color: "rgba(0,0,0,0.64)", fontWeight: 500 }}>
          glassy (glass highlight thumb)
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 80, fontSize: 12, color: "rgba(0,0,0,0.46)" }}>segmented</span>
            <div style={{ background: "#F1F1F6", padding: "8px 12px", borderRadius: 12 }}>
              <Tabs items={items} defaultActiveKey="tab1" variant="segmented" glassy />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 80, fontSize: 12, color: "rgba(0,0,0,0.46)" }}>rounded</span>
            <div style={{ background: "#F1F1F6", padding: "8px 12px", borderRadius: 12 }}>
              <Tabs items={items} defaultActiveKey="tab1" variant="rounded" glassy />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`,h=[{key:`profile`,label:`Profile`,children:(0,i.jsxs)(`div`,{style:{padding:16},children:[(0,i.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Profile`}),(0,i.jsx)(`p`,{style:{margin:0,color:`rgba(0,0,0,0.64)`},children:`User profile details are shown here.`})]})},{key:`settings`,label:`Settings`,children:(0,i.jsxs)(`div`,{style:{padding:16},children:[(0,i.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Settings`}),(0,i.jsx)(`p`,{style:{margin:0,color:`rgba(0,0,0,0.64)`},children:`Account security and preferences are shown here.`})]})},{key:`notifications`,label:`Notifications`,children:(0,i.jsxs)(`div`,{style:{padding:16},children:[(0,i.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Notifications`}),(0,i.jsx)(`p`,{style:{margin:0,color:`rgba(0,0,0,0.64)`},children:`Manage notification preferences and message settings here.`})]})}];function g(){return(0,i.jsx)(r,{items:h,defaultActiveKey:`profile`})}var _=`import { Tabs } from "lingee-ui";

const items = [
  {
    key: "profile",
    label: "Profile",
    children: (
      <div style={{ padding: 16 }}>
        <h4 style={{ margin: "0 0 8px" }}>Profile</h4>
        <p style={{ margin: 0, color: "rgba(0,0,0,0.64)" }}>
          User profile details are shown here.
        </p>
      </div>
    ),
  },
  {
    key: "settings",
    label: "Settings",
    children: (
      <div style={{ padding: 16 }}>
        <h4 style={{ margin: "0 0 8px" }}>Settings</h4>
        <p style={{ margin: 0, color: "rgba(0,0,0,0.64)" }}>
          Account security and preferences are shown here.
        </p>
      </div>
    ),
  },
  {
    key: "notifications",
    label: "Notifications",
    children: (
      <div style={{ padding: 16 }}>
        <h4 style={{ margin: "0 0 8px" }}>Notifications</h4>
        <p style={{ margin: 0, color: "rgba(0,0,0,0.64)" }}>
          Manage notification preferences and message settings here.
        </p>
      </div>
    ),
  },
];

export default function WithContentDemo() {
  return <Tabs items={items} defaultActiveKey="profile" />;
}
`,v=t(e()),y=[{key:`work`,label:`Work`},{key:`manage`,label:`Manage`},{key:`dev`,label:`Develop`}];function b(){let[e,t]=(0,v.useState)(`work`);return(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{style:{marginBottom:8,fontSize:13,color:`rgba(0,0,0,0.46)`},children:`segmented + transparent + glassy`}),(0,i.jsx)(`div`,{style:{padding:`12px 8px`,background:`rgba(0,0,0,0.03)`,borderRadius:12},children:(0,i.jsx)(r,{items:y,activeKey:e,onChange:t,variant:`segmented`,transparent:!0,glassy:!0})})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{style:{marginBottom:8,fontSize:13,color:`rgba(0,0,0,0.46)`},children:`rounded + transparent`}),(0,i.jsx)(`div`,{style:{padding:`12px 8px`,background:`rgba(0,0,0,0.03)`,borderRadius:12},children:(0,i.jsx)(r,{items:y,activeKey:e,onChange:t,variant:`rounded`,transparent:!0})})]})]})}var x=`/**
 * @title 透明背景
 * @description segmented 和 rounded 变体支持 \`transparent\` 属性，去掉容器灰底，适用于已有背景色的场景。
 */
import { useState } from "react";
import { Tabs } from "lingee-ui";

const items = [
  { key: "work", label: "Work" },
  { key: "manage", label: "Manage" },
  { key: "dev", label: "Develop" },
];

export default function TransparentDemo() {
  const [active, setActive] = useState("work");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <p style={{ marginBottom: 8, fontSize: 13, color: "rgba(0,0,0,0.46)" }}>segmented + transparent + glassy</p>
        <div style={{ padding: "12px 8px", background: "rgba(0,0,0,0.03)", borderRadius: 12 }}>
          <Tabs
            items={items}
            activeKey={active}
            onChange={setActive}
            variant="segmented"
            transparent
            glassy
          />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 13, color: "rgba(0,0,0,0.46)" }}>rounded + transparent</p>
        <div style={{ padding: "12px 8px", background: "rgba(0,0,0,0.03)", borderRadius: 12 }}>
          <Tabs
            items={items}
            activeKey={active}
            onChange={setActive}
            variant="rounded"
            transparent
          />
        </div>
      </div>
    </div>
  );
}
`;export{m as a,l as c,g as i,s as l,b as n,p as o,_ as r,u as s,x as t,o as u};