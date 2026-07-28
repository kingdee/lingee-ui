import{C as e}from"./dist-DCLsKzkS.js";import{t}from"./DemoBox-D1az5eCZ.js";import{t as n}from"./tabs-BqRZs4yI.js";var r=e(),i=[{key:`tab1`,label:`选项一`},{key:`tab2`,label:`选项二`},{key:`tab3`,label:`选项三`}];function a(){return(0,r.jsx)(n,{items:i,defaultActiveKey:`tab1`})}var o=`import { Tabs } from "lingee-ui";

const items = [
  { key: "tab1", label: "选项一" },
  { key: "tab2", label: "选项二" },
  { key: "tab3", label: "选项三" },
];

export default function BasicDemo() {
  return <Tabs items={items} defaultActiveKey="tab1" />;
}
`,s=[{key:`tab1`,label:`选项一`},{key:`tab2`,label:`选项二`},{key:`tab3`,label:`选项三`}];function c(){return(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`segmented（默认）`}),(0,r.jsx)(n,{items:s,defaultActiveKey:`tab1`,variant:`segmented`})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`solid`}),(0,r.jsx)(n,{items:s,defaultActiveKey:`tab1`,variant:`solid`})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`outline`}),(0,r.jsx)(n,{items:s,defaultActiveKey:`tab1`,variant:`outline`})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`underline`}),(0,r.jsx)(n,{items:s,defaultActiveKey:`tab1`,variant:`underline`})]})]})}var l=`import { Tabs } from "lingee-ui";

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
          segmented（默认）
        </p>
        <Tabs items={items} defaultActiveKey="tab1" variant="segmented" />
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
`,u=[{key:`profile`,label:`个人信息`,children:(0,r.jsxs)(`div`,{style:{padding:16},children:[(0,r.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`个人信息`}),(0,r.jsx)(`p`,{style:{margin:0,color:`rgba(0,0,0,0.64)`},children:`这里展示用户的个人资料内容。`})]})},{key:`settings`,label:`账号设置`,children:(0,r.jsxs)(`div`,{style:{padding:16},children:[(0,r.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`账号设置`}),(0,r.jsx)(`p`,{style:{margin:0,color:`rgba(0,0,0,0.64)`},children:`这里展示账号安全和偏好设置。`})]})},{key:`notifications`,label:`通知管理`,children:(0,r.jsxs)(`div`,{style:{padding:16},children:[(0,r.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`通知管理`}),(0,r.jsx)(`p`,{style:{margin:0,color:`rgba(0,0,0,0.64)`},children:`这里管理通知偏好和消息设置。`})]})}];function d(){return(0,r.jsx)(n,{items:u,defaultActiveKey:`profile`})}var f=`import { Tabs } from "lingee-ui";

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
`,p={title:`Tabs 页签`,description:`选项卡切换组件，支持多种风格变体和尺寸。`};function m(e){let n={code:`code`,h2:`h2`,h3:`h3`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:`基本用法`}),`
`,(0,r.jsxs)(n.p,{children:[`通过 `,(0,r.jsx)(n.code,{children:`items`}),` 配置数组驱动标签页，每项包含 `,(0,r.jsx)(n.code,{children:`key`}),` 和 `,(0,r.jsx)(n.code,{children:`label`}),`。`]}),`
`,(0,r.jsx)(t,{source:o,children:(0,r.jsx)(a,{})}),`
`,(0,r.jsx)(n.h2,{children:`风格变体`}),`
`,(0,r.jsxs)(n.p,{children:[`通过 `,(0,r.jsx)(n.code,{children:`variant`}),` 切换不同视觉风格：`,(0,r.jsx)(n.code,{children:`segmented`}),`（默认）、`,(0,r.jsx)(n.code,{children:`solid`}),`、`,(0,r.jsx)(n.code,{children:`outline`}),`、`,(0,r.jsx)(n.code,{children:`underline`}),`。`]}),`
`,(0,r.jsx)(t,{source:l,children:(0,r.jsx)(c,{})}),`
`,(0,r.jsx)(n.h2,{children:`带内容面板`}),`
`,(0,r.jsxs)(n.p,{children:[`在 `,(0,r.jsx)(n.code,{children:`items`}),` 中通过 `,(0,r.jsx)(n.code,{children:`children`}),` 配置面板内容，切换标签时显示对应面板。`]}),`
`,(0,r.jsx)(t,{source:f,children:(0,r.jsx)(d,{})}),`
`,(0,r.jsx)(n.h2,{children:`API`}),`
`,(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:`属性`}),(0,r.jsx)(n.th,{children:`说明`}),(0,r.jsx)(n.th,{children:`类型`}),(0,r.jsx)(n.th,{children:`默认值`})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`items`})}),(0,r.jsx)(n.td,{children:`标签项配置`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`TabItem[]`})}),(0,r.jsx)(n.td,{children:`-`})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`activeKey`})}),(0,r.jsx)(n.td,{children:`当前激活 key（受控）`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`string`})}),(0,r.jsx)(n.td,{children:`-`})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`defaultActiveKey`})}),(0,r.jsx)(n.td,{children:`默认激活 key（非受控）`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`string`})}),(0,r.jsx)(n.td,{children:`-`})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`onChange`})}),(0,r.jsx)(n.td,{children:`切换回调`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`(key: string) => void`})}),(0,r.jsx)(n.td,{children:`-`})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`variant`})}),(0,r.jsx)(n.td,{children:`风格变体`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`"segmented" | "solid" | "outline" | "underline"`})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`"segmented"`})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`size`})}),(0,r.jsx)(n.td,{children:`尺寸`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`"sm" | "md"`})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`"md"`})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`animated`})}),(0,r.jsx)(n.td,{children:`是否开启内容切换动画`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`boolean`})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`true`})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`destroyInactivePanel`})}),(0,r.jsx)(n.td,{children:`切走时是否销毁非活跃面板`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`boolean`})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`false`})})]})]})]}),`
`,(0,r.jsx)(n.h3,{children:`TabItem`}),`
`,(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:`属性`}),(0,r.jsx)(n.th,{children:`说明`}),(0,r.jsx)(n.th,{children:`类型`}),(0,r.jsx)(n.th,{children:`默认值`})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`key`})}),(0,r.jsx)(n.td,{children:`唯一标识`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`string`})}),(0,r.jsx)(n.td,{children:`-`})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`label`})}),(0,r.jsx)(n.td,{children:`标签文本`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`ReactNode`})}),(0,r.jsx)(n.td,{children:`-`})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`children`})}),(0,r.jsx)(n.td,{children:`面板内容`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`ReactNode`})}),(0,r.jsx)(n.td,{children:`-`})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`icon`})}),(0,r.jsx)(n.td,{children:`图标`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`ReactNode`})}),(0,r.jsx)(n.td,{children:`-`})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`suffix`})}),(0,r.jsx)(n.td,{children:`后缀（如徽标）`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`ReactNode`})}),(0,r.jsx)(n.td,{children:`-`})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`disabled`})}),(0,r.jsx)(n.td,{children:`是否禁用`}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`boolean`})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:`false`})})]})]})]})]})}function h(e={}){let{wrapper:t}=e.components||{};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}export{h as default,p as frontmatter};