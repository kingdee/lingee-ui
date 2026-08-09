import{A as e,D as t,x as n}from"./dist-DjLZdxEA.js";import{t as r}from"./DemoBox-DEznk3dE.js";import{t as i}from"./tabs-1yf-vK4P.js";var a=n(),o=[{key:`tab1`,label:`选项一`},{key:`tab2`,label:`选项二`},{key:`tab3`,label:`选项三`}];function s(){return(0,a.jsx)(i,{items:o,defaultActiveKey:`tab1`})}var c=`import { Tabs } from "lingee-ui";

const items = [
  { key: "tab1", label: "选项一" },
  { key: "tab2", label: "选项二" },
  { key: "tab3", label: "选项三" },
];

export default function BasicDemo() {
  return <Tabs items={items} defaultActiveKey="tab1" />;
}
`,l=[{key:`tab1`,label:`选项一`},{key:`tab2`,label:`选项二`},{key:`tab3`,label:`选项三`}];function u(){return(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`segmented（默认，胶囊圆角）`}),(0,a.jsx)(i,{items:l,defaultActiveKey:`tab1`,variant:`segmented`})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`rounded（圆角矩形）`}),(0,a.jsx)(i,{items:l,defaultActiveKey:`tab1`,variant:`rounded`})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`solid`}),(0,a.jsx)(i,{items:l,defaultActiveKey:`tab1`,variant:`solid`})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`outline`}),(0,a.jsx)(i,{items:l,defaultActiveKey:`tab1`,variant:`outline`})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`underline`}),(0,a.jsx)(i,{items:l,defaultActiveKey:`tab1`,variant:`underline`})]})]})}var d=`import { Tabs } from "lingee-ui";

const items = [
  { key: "tab1", label: "选项一" },
  { key: "tab2", label: "选项二" },
  { key: "tab3", label: "选项三" },
];

export default function VariantsDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          segmented（默认，胶囊圆角）
        </p>
        <Tabs items={items} defaultActiveKey="tab1" variant="segmented" />
      </div>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          rounded（圆角矩形）
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
`,f=[{key:`tab1`,label:`选项一`},{key:`tab2`,label:`选项二`},{key:`tab3`,label:`选项三`}],p=[{name:`segmented`,value:`segmented`},{name:`rounded`,value:`rounded`},{name:`solid`,value:`solid`},{name:`outline`,value:`outline`}];function m(){return(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[p.map(({name:e,value:t})=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{marginBottom:12,color:`rgba(0,0,0,0.64)`,fontWeight:500},children:e}),(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,a.jsx)(`span`,{style:{width:32,fontSize:12,color:`rgba(0,0,0,0.46)`},children:`md`}),(0,a.jsx)(i,{items:f,defaultActiveKey:`tab1`,variant:t,size:`md`})]}),(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,a.jsx)(`span`,{style:{width:32,fontSize:12,color:`rgba(0,0,0,0.46)`},children:`sm`}),(0,a.jsx)(i,{items:f,defaultActiveKey:`tab1`,variant:t,size:`sm`})]})]})]},t)),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{marginBottom:12,color:`rgba(0,0,0,0.64)`,fontWeight:500},children:`glassy（玻璃高光滑块）`}),(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,a.jsx)(`span`,{style:{width:80,fontSize:12,color:`rgba(0,0,0,0.46)`},children:`segmented`}),(0,a.jsx)(`div`,{style:{background:`#F1F1F6`,padding:`8px 12px`,borderRadius:12},children:(0,a.jsx)(i,{items:f,defaultActiveKey:`tab1`,variant:`segmented`,glassy:!0})})]}),(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,a.jsx)(`span`,{style:{width:80,fontSize:12,color:`rgba(0,0,0,0.46)`},children:`rounded`}),(0,a.jsx)(`div`,{style:{background:`#F1F1F6`,padding:`8px 12px`,borderRadius:12},children:(0,a.jsx)(i,{items:f,defaultActiveKey:`tab1`,variant:`rounded`,glassy:!0})})]})]})]})]})}var h=`import { Tabs } from "lingee-ui";
import type { TabsVariant } from "lingee-ui";

const items = [
  { key: "tab1", label: "选项一" },
  { key: "tab2", label: "选项二" },
  { key: "tab3", label: "选项三" },
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
          glassy（玻璃高光滑块）
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
`,g=[{key:`profile`,label:`个人信息`,children:(0,a.jsxs)(`div`,{style:{padding:16},children:[(0,a.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`个人信息`}),(0,a.jsx)(`p`,{style:{margin:0,color:`rgba(0,0,0,0.64)`},children:`这里展示用户的个人资料内容。`})]})},{key:`settings`,label:`账号设置`,children:(0,a.jsxs)(`div`,{style:{padding:16},children:[(0,a.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`账号设置`}),(0,a.jsx)(`p`,{style:{margin:0,color:`rgba(0,0,0,0.64)`},children:`这里展示账号安全和偏好设置。`})]})},{key:`notifications`,label:`通知管理`,children:(0,a.jsxs)(`div`,{style:{padding:16},children:[(0,a.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`通知管理`}),(0,a.jsx)(`p`,{style:{margin:0,color:`rgba(0,0,0,0.64)`},children:`这里管理通知偏好和消息设置。`})]})}];function _(){return(0,a.jsx)(i,{items:g,defaultActiveKey:`profile`})}var v=`import { Tabs } from "lingee-ui";

const items = [
  {
    key: "profile",
    label: "个人信息",
    children: (
      <div style={{ padding: 16 }}>
        <h4 style={{ margin: "0 0 8px" }}>个人信息</h4>
        <p style={{ margin: 0, color: "rgba(0,0,0,0.64)" }}>
          这里展示用户的个人资料内容。
        </p>
      </div>
    ),
  },
  {
    key: "settings",
    label: "账号设置",
    children: (
      <div style={{ padding: 16 }}>
        <h4 style={{ margin: "0 0 8px" }}>账号设置</h4>
        <p style={{ margin: 0, color: "rgba(0,0,0,0.64)" }}>
          这里展示账号安全和偏好设置。
        </p>
      </div>
    ),
  },
  {
    key: "notifications",
    label: "通知管理",
    children: (
      <div style={{ padding: 16 }}>
        <h4 style={{ margin: "0 0 8px" }}>通知管理</h4>
        <p style={{ margin: 0, color: "rgba(0,0,0,0.64)" }}>
          这里管理通知偏好和消息设置。
        </p>
      </div>
    ),
  },
];

export default function WithContentDemo() {
  return <Tabs items={items} defaultActiveKey="profile" />;
}
`,y=e(t()),b=[{key:`work`,label:`工作`},{key:`manage`,label:`管理`},{key:`dev`,label:`开发`}];function x(){let[e,t]=(0,y.useState)(`work`);return(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{marginBottom:8,fontSize:13,color:`rgba(0,0,0,0.46)`},children:`segmented + transparent + glassy`}),(0,a.jsx)(`div`,{style:{padding:`12px 8px`,background:`rgba(0,0,0,0.03)`,borderRadius:12},children:(0,a.jsx)(i,{items:b,activeKey:e,onChange:t,variant:`segmented`,transparent:!0,glassy:!0})})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{marginBottom:8,fontSize:13,color:`rgba(0,0,0,0.46)`},children:`rounded + transparent`}),(0,a.jsx)(`div`,{style:{padding:`12px 8px`,background:`rgba(0,0,0,0.03)`,borderRadius:12},children:(0,a.jsx)(i,{items:b,activeKey:e,onChange:t,variant:`rounded`,transparent:!0})})]})]})}var S=`/**
 * @title 透明背景
 * @description segmented 和 rounded 变体支持 \`transparent\` 属性，去掉容器灰底，适用于已有背景色的场景。
 */
import { useState } from "react";
import { Tabs } from "lingee-ui";

const items = [
  { key: "work", label: "工作" },
  { key: "manage", label: "管理" },
  { key: "dev", label: "开发" },
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
`,C={title:`Tabs 页签`,description:`选项卡切换组件，支持多种风格变体和尺寸。`};function w(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{children:`基本用法`}),`
`,(0,a.jsxs)(t.p,{children:[`通过 `,(0,a.jsx)(t.code,{children:`items`}),` 配置数组驱动标签页，每项包含 `,(0,a.jsx)(t.code,{children:`key`}),` 和 `,(0,a.jsx)(t.code,{children:`label`}),`。`]}),`
`,(0,a.jsx)(r,{source:c,children:(0,a.jsx)(s,{})}),`
`,(0,a.jsx)(t.h2,{children:`风格变体`}),`
`,(0,a.jsxs)(t.p,{children:[`通过 `,(0,a.jsx)(t.code,{children:`variant`}),` 切换不同视觉风格：`,(0,a.jsx)(t.code,{children:`segmented`}),`（默认胶囊）、`,(0,a.jsx)(t.code,{children:`rounded`}),`（圆角矩形）、`,(0,a.jsx)(t.code,{children:`solid`}),`、`,(0,a.jsx)(t.code,{children:`outline`}),`、`,(0,a.jsx)(t.code,{children:`underline`}),`。`]}),`
`,(0,a.jsx)(r,{source:d,children:(0,a.jsx)(u,{})}),`
`,(0,a.jsx)(t.h2,{children:`尺寸`}),`
`,(0,a.jsxs)(t.p,{children:[`每种 variant 都支持 `,(0,a.jsx)(t.code,{children:`md`}),`（默认）和 `,(0,a.jsx)(t.code,{children:`sm`}),` 两种尺寸。`]}),`
`,(0,a.jsx)(r,{source:h,children:(0,a.jsx)(m,{})}),`
`,(0,a.jsx)(t.h2,{children:`带内容面板`}),`
`,(0,a.jsxs)(t.p,{children:[`在 `,(0,a.jsx)(t.code,{children:`items`}),` 中通过 `,(0,a.jsx)(t.code,{children:`children`}),` 配置面板内容，切换标签时显示对应面板。`]}),`
`,(0,a.jsx)(r,{source:v,children:(0,a.jsx)(_,{})}),`
`,(0,a.jsx)(t.h2,{children:`透明背景`}),`
`,(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:`segmented`}),` 和 `,(0,a.jsx)(t.code,{children:`rounded`}),` 变体支持 `,(0,a.jsx)(t.code,{children:`transparent`}),` 属性，去掉容器灰底，适用于已有背景色的场景。搭配 `,(0,a.jsx)(t.code,{children:`glassy`}),` 可获得玻璃高光效果。`]}),`
`,(0,a.jsx)(r,{source:S,children:(0,a.jsx)(x,{})}),`
`,(0,a.jsx)(t.h2,{children:`API`}),`
`,(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:`属性`}),(0,a.jsx)(t.th,{children:`说明`}),(0,a.jsx)(t.th,{children:`类型`}),(0,a.jsx)(t.th,{children:`默认值`})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`items`})}),(0,a.jsx)(t.td,{children:`标签项配置`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`TabItem[]`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`activeKey`})}),(0,a.jsx)(t.td,{children:`当前激活 key（受控）`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`string`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`defaultActiveKey`})}),(0,a.jsx)(t.td,{children:`默认激活 key（非受控）`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`string`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`onChange`})}),(0,a.jsx)(t.td,{children:`切换回调`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`(key: string) => void`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`variant`})}),(0,a.jsx)(t.td,{children:`风格变体`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"segmented" | "rounded" | "solid" | "outline" | "underline"`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"segmented"`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`size`})}),(0,a.jsx)(t.td,{children:`尺寸`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"sm" | "md"`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"md"`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`glassy`})}),(0,a.jsx)(t.td,{children:`滑块玻璃高光效果`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`boolean`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`false`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`transparent`})}),(0,a.jsx)(t.td,{children:`容器背景透明（去掉灰底）`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`boolean`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`false`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`animated`})}),(0,a.jsx)(t.td,{children:`是否开启内容切换动画`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`boolean`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`true`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`destroyInactivePanel`})}),(0,a.jsx)(t.td,{children:`切走时是否销毁非活跃面板`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`boolean`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`false`})})]})]})]}),`
`,(0,a.jsx)(t.h3,{children:`TabItem`}),`
`,(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:`属性`}),(0,a.jsx)(t.th,{children:`说明`}),(0,a.jsx)(t.th,{children:`类型`}),(0,a.jsx)(t.th,{children:`默认值`})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`key`})}),(0,a.jsx)(t.td,{children:`唯一标识`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`string`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`label`})}),(0,a.jsx)(t.td,{children:`标签文本`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`ReactNode`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`children`})}),(0,a.jsx)(t.td,{children:`面板内容`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`ReactNode`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`icon`})}),(0,a.jsx)(t.td,{children:`图标`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`ReactNode`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`suffix`})}),(0,a.jsx)(t.td,{children:`后缀（如徽标）`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`ReactNode`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`disabled`})}),(0,a.jsx)(t.td,{children:`是否禁用`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`boolean`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`false`})})]})]})]})]})}function T(e={}){let{wrapper:t}=e.components||{};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(w,{...e})}):w(e)}export{T as default,C as frontmatter};