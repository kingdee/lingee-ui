import{C as e}from"./dist-DCLsKzkS.js";import{n as t,r as n,t as r}from"./EyeSlash-ClqjXni8.js";import{n as i,t as a}from"./empty-CJ9KZQnY.js";import{t as o}from"./LoaderCircle-Hu77Nnhq.js";import{t as s}from"./Search-WaqXFOiJ.js";import{t as c}from"./DemoBox-D1az5eCZ.js";import{t as l}from"./button-BYTxzV6M.js";var u=e();function d(){return(0,u.jsx)(a,{icon:s,description:`暂无数据`})}var f=`import { Empty } from "lingee-ui";
import { Search } from "lingee-icon";

export default function BasicDemo() {
  return <Empty icon={Search} description="暂无数据" />;
}
`;function p(){return(0,u.jsx)(a,{description:`暂无搜索结果，请尝试其他关键词`,children:(0,u.jsx)(l,{variant:`primary`,style:{marginTop:12},children:`清除筛选条件`})})}var m=`import { Empty, Button } from "lingee-ui";

export default function CustomDemo() {
  return (
    <Empty description="暂无搜索结果，请尝试其他关键词">
      <Button variant="primary" style={{ marginTop: 12 }}>
        清除筛选条件
      </Button>
    </Empty>
  );
}
`;function h(){return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h4`,{style:{marginBottom:8,fontSize:13,color:`#666`},children:`lg - 页面级空状态`}),(0,u.jsx)(a,{size:`lg`,icon:s,description:`暂无搜索结果`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h4`,{style:{marginBottom:8,fontSize:13,color:`#666`},children:`md - 局部空状态（默认）`}),(0,u.jsx)(a,{size:`md`,icon:s,description:`暂无搜索结果`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h4`,{style:{marginBottom:8,fontSize:13,color:`#666`},children:`sm - 迷你空状态`}),(0,u.jsx)(a,{size:`sm`,icon:s,description:`暂无搜索结果`})]})]})}var g=`import { Empty } from "lingee-ui";
import { Search } from "lingee-icon";

export default function SizesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <div>
        <h4 style={{ marginBottom: 8, fontSize: 13, color: "#666" }}>lg - 页面级空状态</h4>
        <Empty size="lg" icon={Search} description="暂无搜索结果" />
      </div>
      <div>
        <h4 style={{ marginBottom: 8, fontSize: 13, color: "#666" }}>md - 局部空状态（默认）</h4>
        <Empty size="md" icon={Search} description="暂无搜索结果" />
      </div>
      <div>
        <h4 style={{ marginBottom: 8, fontSize: 13, color: "#666" }}>sm - 迷你空状态</h4>
        <Empty size="sm" icon={Search} description="暂无搜索结果" />
      </div>
    </div>
  );
}
`;function _(){return(0,u.jsxs)(`div`,{style:{display:`flex`,gap:48,flexWrap:`wrap`},children:[(0,u.jsx)(a,{icon:s,description:`无搜索结果`}),(0,u.jsx)(a,{icon:i,description:`暂无文档`}),(0,u.jsx)(a,{icon:r,description:`暂无权限`}),(0,u.jsx)(a,{icon:t,description:`网络异常`}),(0,u.jsx)(a,{icon:n,description:`暂无通知`})]})}var v=`import { Empty } from "lingee-ui";
import { Search, DocumentLibrary, EyeSlash, CloudSlash, BellSlash } from "lingee-icon";

export default function IconsDemo() {
  return (
    <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
      <Empty icon={Search} description="无搜索结果" />
      <Empty icon={DocumentLibrary} description="暂无文档" />
      <Empty icon={EyeSlash} description="暂无权限" />
      <Empty icon={CloudSlash} description="网络异常" />
      <Empty icon={BellSlash} description="暂无通知" />
    </div>
  );
}
`;function y(){return(0,u.jsx)(a,{icon:(0,u.jsx)(o,{size:24,spin:!0,color:`var(--lg-g-fg-color-black-aint)`}),description:`加载中，请稍候...`})}var b=`import { Empty } from "lingee-ui";
import { LoaderCircle } from "lingee-icon";

export default function CustomIconDemo() {
  return (
    <Empty
      icon={<LoaderCircle size={24} spin color="var(--lg-g-fg-color-black-aint)" />}
      description="加载中，请稍候..."
    />
  );
}
`;function x(){return(0,u.jsx)(`div`,{style:{height:300,display:`flex`,alignItems:`center`,justifyContent:`center`,border:`1px dashed var(--lg-g-border-color-black-soft)`,borderRadius:8},children:(0,u.jsx)(a,{size:`lg`,icon:i,description:`还没有创建任何项目`,children:(0,u.jsx)(l,{variant:`primary`,style:{marginTop:16},children:`新建项目`})})})}var S=`import { Empty, Button } from "lingee-ui";
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
      <Empty size="lg" icon={DocumentLibrary} description="还没有创建任何项目">
        <Button variant="primary" style={{ marginTop: 16 }}>
          新建项目
        </Button>
      </Empty>
    </div>
  );
}
`,C={title:`Empty 空状态`,description:`当目标区域无数据时展示的空状态占位图，引导用户进行下一步操作。`};function w(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t.h2,{children:`基本用法`}),`
`,(0,u.jsx)(t.p,{children:`传入图标和描述文字展示空状态。`}),`
`,(0,u.jsx)(c,{source:f,children:(0,u.jsx)(d,{})}),`
`,(0,u.jsx)(t.h2,{children:`三种尺寸`}),`
`,(0,u.jsxs)(t.p,{children:[`通过 `,(0,u.jsx)(t.code,{children:`size`}),` 属性切换尺寸：`,(0,u.jsx)(t.code,{children:`lg`}),` 适合页面级空白区域，`,(0,u.jsx)(t.code,{children:`md`}),`（默认）适合局部列表/卡片，`,(0,u.jsx)(t.code,{children:`sm`}),` 适合表格内或紧凑空间。`]}),`
`,(0,u.jsx)(c,{source:g,children:(0,u.jsx)(h,{})}),`
`,(0,u.jsx)(t.h2,{children:`不同场景图标`}),`
`,(0,u.jsxs)(t.p,{children:[`通过 `,(0,u.jsx)(t.code,{children:`icon`}),` 传入 lingee-icon 组件，覆盖不同业务场景。组件会自动注入尺寸和渐变色。`]}),`
`,(0,u.jsx)(c,{source:v,children:(0,u.jsx)(_,{})}),`
`,(0,u.jsx)(t.h2,{children:`自定义 ReactNode 图标`}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`icon`}),` 也支持直接传入 ReactNode，可以实现加载中旋转等自定义效果。`]}),`
`,(0,u.jsx)(c,{source:b,children:(0,u.jsx)(y,{})}),`
`,(0,u.jsx)(t.h2,{children:`页面级空状态 + 操作按钮`}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`size="lg"`}),` 配合 `,(0,u.jsx)(t.code,{children:`children`}),` 添加操作按钮，引导用户进行下一步操作。`]}),`
`,(0,u.jsx)(c,{source:S,children:(0,u.jsx)(x,{})}),`
`,(0,u.jsx)(t.h2,{children:`自定义描述和操作`}),`
`,(0,u.jsxs)(t.p,{children:[`通过 `,(0,u.jsx)(t.code,{children:`description`}),` 自定义描述文字，通过 `,(0,u.jsx)(t.code,{children:`children`}),` 添加操作按钮引导用户下一步行动。`]}),`
`,(0,u.jsx)(c,{source:m,children:(0,u.jsx)(p,{})}),`
`,(0,u.jsx)(t.h2,{children:`API`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`属性`}),(0,u.jsx)(t.th,{children:`说明`}),(0,u.jsx)(t.th,{children:`类型`}),(0,u.jsx)(t.th,{children:`默认值`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`icon`})}),(0,u.jsx)(t.td,{children:`图标：传 lingee-icon 组件自动注入渐变，传 ReactNode 完全自定义，不传使用默认图标`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`ComponentType<SvgIconProps> | ReactNode`})}),(0,u.jsx)(t.td,{children:`默认 DocumentLibrary`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`description`})}),(0,u.jsx)(t.td,{children:`描述文字`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`ReactNode`})}),(0,u.jsx)(t.td,{children:`-`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`size`})}),(0,u.jsxs)(t.td,{children:[`尺寸：`,(0,u.jsx)(t.code,{children:`lg`}),` 页面级 / `,(0,u.jsx)(t.code,{children:`md`}),` 局部（默认）/ `,(0,u.jsx)(t.code,{children:`sm`}),` 迷你`]}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`"sm" | "md" | "lg"`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`"md"`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`children`})}),(0,u.jsx)(t.td,{children:`自定义底部内容（如操作按钮）`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`ReactNode`})}),(0,u.jsx)(t.td,{children:`-`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`className`})}),(0,u.jsx)(t.td,{children:`自定义类名`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`string`})}),(0,u.jsx)(t.td,{children:`-`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`style`})}),(0,u.jsx)(t.td,{children:`自定义内联样式`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`CSSProperties`})}),(0,u.jsx)(t.td,{children:`-`})]})]})]})]})}function T(e={}){let{wrapper:t}=e.components||{};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(w,{...e})}):w(e)}export{T as default,C as frontmatter};