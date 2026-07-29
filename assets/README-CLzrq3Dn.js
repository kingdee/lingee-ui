import{C as e}from"./dist-DCLsKzkS.js";import{t}from"./DemoBox-D1az5eCZ.js";import{t as n}from"./button-Bt-6g9li.js";import{n as r,r as i,t as a}from"./popover-M7eZJemD.js";var o=e();function s(){return(0,o.jsxs)(a,{children:[(0,o.jsx)(i,{children:(0,o.jsx)(n,{children:`点击弹出`})}),(0,o.jsx)(r,{children:(0,o.jsx)(`p`,{style:{margin:0},children:`这是一个气泡弹出层的内容。`})})]})}var c=`import { Popover, PopoverTrigger, PopoverContent, Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>点击弹出</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p style={{ margin: 0 }}>这是一个气泡弹出层的内容。</p>
      </PopoverContent>
    </Popover>
  );
}
`;function l(){return(0,o.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,o.jsxs)(a,{children:[(0,o.jsx)(i,{children:(0,o.jsx)(n,{children:`上方弹出`})}),(0,o.jsx)(r,{side:`top`,children:(0,o.jsx)(`p`,{style:{margin:0},children:`从上方弹出的内容`})})]}),(0,o.jsxs)(a,{children:[(0,o.jsx)(i,{children:(0,o.jsx)(n,{children:`下方弹出`})}),(0,o.jsx)(r,{side:`bottom`,children:(0,o.jsx)(`p`,{style:{margin:0},children:`从下方弹出的内容`})})]}),(0,o.jsxs)(a,{children:[(0,o.jsx)(i,{children:(0,o.jsx)(n,{children:`左侧弹出`})}),(0,o.jsx)(r,{side:`left`,children:(0,o.jsx)(`p`,{style:{margin:0},children:`从左侧弹出的内容`})})]}),(0,o.jsxs)(a,{children:[(0,o.jsx)(i,{children:(0,o.jsx)(n,{children:`右侧弹出`})}),(0,o.jsx)(r,{side:`right`,children:(0,o.jsx)(`p`,{style:{margin:0},children:`从右侧弹出的内容`})})]})]})}var u=`import { Popover, PopoverTrigger, PopoverContent, Button } from "lingee-ui";

export default function PlacementDemo() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Popover>
        <PopoverTrigger>
          <Button>上方弹出</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p style={{ margin: 0 }}>从上方弹出的内容</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <Button>下方弹出</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p style={{ margin: 0 }}>从下方弹出的内容</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <Button>左侧弹出</Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <p style={{ margin: 0 }}>从左侧弹出的内容</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <Button>右侧弹出</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <p style={{ margin: 0 }}>从右侧弹出的内容</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}
`,d={title:`Popover 气泡弹出层`,description:`点击/悬停在元素上时弹出气泡式浮层，用于承载更多内容。`};function f(e){let n={code:`code`,h2:`h2`,h3:`h3`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{children:`基本用法`}),`
`,(0,o.jsxs)(n.p,{children:[`使用组合式 API，通过 `,(0,o.jsx)(n.code,{children:`PopoverTrigger`}),` 定义触发器，`,(0,o.jsx)(n.code,{children:`PopoverContent`}),` 定义弹出内容。`]}),`
`,(0,o.jsx)(t,{source:c,children:(0,o.jsx)(s,{})}),`
`,(0,o.jsx)(n.h2,{children:`不同方向弹出`}),`
`,(0,o.jsxs)(n.p,{children:[`通过 `,(0,o.jsx)(n.code,{children:`PopoverContent`}),` 的 `,(0,o.jsx)(n.code,{children:`side`}),` 属性控制弹出方向。`]}),`
`,(0,o.jsx)(t,{source:u,children:(0,o.jsx)(l,{})}),`
`,(0,o.jsx)(n.h2,{children:`API`}),`
`,(0,o.jsx)(n.h3,{children:`Popover`}),`
`,(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:`属性`}),(0,o.jsx)(n.th,{children:`说明`}),(0,o.jsx)(n.th,{children:`类型`}),(0,o.jsx)(n.th,{children:`默认值`})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`open`})}),(0,o.jsx)(n.td,{children:`受控打开状态`}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`boolean`})}),(0,o.jsx)(n.td,{children:`-`})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`onOpenChange`})}),(0,o.jsx)(n.td,{children:`打开状态变化回调`}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`(open: boolean) => void`})}),(0,o.jsx)(n.td,{children:`-`})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`modal`})}),(0,o.jsx)(n.td,{children:`是否为模态模式`}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`boolean`})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`false`})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`children`})}),(0,o.jsx)(n.td,{children:`子元素（Trigger + Content）`}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`ReactNode`})}),(0,o.jsx)(n.td,{children:`-`})]})]})]}),`
`,(0,o.jsx)(n.h3,{children:`PopoverContent`}),`
`,(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:`属性`}),(0,o.jsx)(n.th,{children:`说明`}),(0,o.jsx)(n.th,{children:`类型`}),(0,o.jsx)(n.th,{children:`默认值`})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`side`})}),(0,o.jsx)(n.td,{children:`弹出方向`}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`"top" | "bottom" | "left" | "right"`})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`"bottom"`})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`align`})}),(0,o.jsx)(n.td,{children:`对齐方式`}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`"start" | "center" | "end"`})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`"center"`})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`sideOffset`})}),(0,o.jsx)(n.td,{children:`弹出层与触发器的间距`}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`number`})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`4`})})]})]})]})]})}function p(e={}){let{wrapper:t}=e.components||{};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}export{p as default,d as frontmatter};