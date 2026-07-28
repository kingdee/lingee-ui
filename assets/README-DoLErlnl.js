import{C as e}from"./dist-DCLsKzkS.js";import{t}from"./empty-CJ9KZQnY.js";import{t as n}from"./Search-WaqXFOiJ.js";import{t as r}from"./DemoBox-D1az5eCZ.js";import{t as i}from"./button-C8GWSUqU.js";var a=e();function o(){return(0,a.jsx)(t,{icon:n,description:`暂无数据`})}var s=`import { Empty } from "lingee-ui";
import { Search } from "lingee-icon";

export default function BasicDemo() {
  return <Empty icon={Search} description="暂无数据" />;
}
`;function c(){return(0,a.jsx)(t,{description:`暂无搜索结果，请尝试其他关键词`,children:(0,a.jsx)(i,{variant:`primary`,style:{marginTop:12},children:`清除筛选条件`})})}var l=`import { Empty, Button } from "lingee-ui";

export default function CustomDemo() {
  return (
    <Empty description="暂无搜索结果，请尝试其他关键词">
      <Button variant="primary" style={{ marginTop: 12 }}>
        清除筛选条件
      </Button>
    </Empty>
  );
}
`,u={title:`Empty 空状态`,description:`当目标区域无数据时展示的空状态占位图，引导用户进行下一步操作。`};function d(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{children:`基本用法`}),`
`,(0,a.jsx)(t.p,{children:`传入图标和描述文字展示空状态。`}),`
`,(0,a.jsx)(r,{source:s,children:(0,a.jsx)(o,{})}),`
`,(0,a.jsx)(t.h2,{children:`自定义描述和操作`}),`
`,(0,a.jsxs)(t.p,{children:[`通过 `,(0,a.jsx)(t.code,{children:`description`}),` 自定义描述文字，通过 `,(0,a.jsx)(t.code,{children:`children`}),` 添加操作按钮引导用户下一步行动。`]}),`
`,(0,a.jsx)(r,{source:l,children:(0,a.jsx)(c,{})}),`
`,(0,a.jsx)(t.h2,{children:`API`}),`
`,(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:`属性`}),(0,a.jsx)(t.th,{children:`说明`}),(0,a.jsx)(t.th,{children:`类型`}),(0,a.jsx)(t.th,{children:`默认值`})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`description`})}),(0,a.jsx)(t.td,{children:`描述文字`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`ReactNode`})}),(0,a.jsx)(t.td,{children:`-`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`icon`})}),(0,a.jsx)(t.td,{children:`图标组件或 ReactNode`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`ComponentType | ReactNode`})}),(0,a.jsx)(t.td,{children:`默认空状态图标`})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`size`})}),(0,a.jsx)(t.td,{children:`尺寸`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"sm" | "md" | "lg"`})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`"md"`})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`children`})}),(0,a.jsx)(t.td,{children:`自定义底部内容（如操作按钮）`}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:`ReactNode`})}),(0,a.jsx)(t.td,{children:`-`})]})]})]})]})}function f(e={}){let{wrapper:t}=e.components||{};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}export{f as default,u as frontmatter};