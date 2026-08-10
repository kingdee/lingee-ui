import{A as e,D as t,x as n,y as r}from"./dist-DjLZdxEA.js";import{t as i}from"./DemoBox-DEznk3dE.js";import{t as a}from"./button-hSCyyIv7.js";var o=e(t()),s=n(),c=[`small`,`medium`,`large`],l=e=>typeof e==`string`&&c.includes(e),u=o.forwardRef(({className:e,vertical:t,orientation:n=`horizontal`,wrap:i,justify:a,align:o,flex:c,gap:u,component:d=`div`,style:f,children:p,...m},h)=>{let g=t??n===`vertical`,_=typeof i==`boolean`?i?`wrap`:`nowrap`:i,v=l(u),y=r(`lg-flex`,g?`lg-flex--vertical`:`lg-flex--horizontal`,v&&`lg-flex--gap-${u}`,e),b={justifyContent:a,alignItems:o,flexWrap:_,flex:c,gap:!v&&u!=null?u:void 0,...f};return(0,s.jsx)(d,{ref:h,className:y,style:b,...m,children:p})});u.displayName=`Flex`;function d(){return(0,s.jsxs)(u,{gap:`small`,align:`center`,children:[(0,s.jsx)(a,{variant:`primary`,children:`确定`}),(0,s.jsx)(a,{children:`取消`})]})}var f=`import { Flex, Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <Flex gap="small" align="center">
      <Button variant="primary">确定</Button>
      <Button>取消</Button>
    </Flex>
  );
}
`,p={title:`Flex 弹性布局`,description:`弹性布局容器，用于快速搭建横向/纵向排列，避免为简单布局单独写样式文件。`};function m(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{children:`基本用法`}),`
`,(0,s.jsxs)(t.p,{children:[`默认水平排列，通过 `,(0,s.jsx)(t.code,{children:`gap`}),` 设置间隙、`,(0,s.jsx)(t.code,{children:`align`}),` 设置交叉轴对齐。`]}),`
`,(0,s.jsx)(i,{source:f,children:(0,s.jsx)(d,{})}),`
`,(0,s.jsx)(t.h2,{children:`纵向排列`}),`
`,(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:`vertical`}),` 与 `,(0,s.jsx)(t.code,{children:`orientation="vertical"`}),` 等价，二者同时存在时 `,(0,s.jsx)(t.code,{children:`vertical`}),` 优先。`]}),`
`,(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:`language-tsx`,children:`<Flex vertical gap="medium">
  <div>第一行</div>
  <div>第二行</div>
</Flex>
`})}),`
`,(0,s.jsx)(t.h2,{children:`自定义容器元素`}),`
`,(0,s.jsxs)(t.p,{children:[`通过 `,(0,s.jsx)(t.code,{children:`component`}),` 渲染为语义化标签。`]}),`
`,(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:`language-tsx`,children:`<Flex component="nav" gap="small" justify="space-between">
  <a href="/">首页</a>
  <a href="/about">关于</a>
</Flex>
`})}),`
`,(0,s.jsx)(t.h2,{children:`API`}),`
`,(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:`属性`}),(0,s.jsx)(t.th,{children:`说明`}),(0,s.jsx)(t.th,{children:`类型`}),(0,s.jsx)(t.th,{children:`默认值`})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`vertical`})}),(0,s.jsxs)(t.td,{children:[`主轴方向是否垂直（等价 `,(0,s.jsx)(t.code,{children:`flex-direction: column`}),`）`]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`boolean`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`false`})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`orientation`})}),(0,s.jsxs)(t.td,{children:[`主轴方向，与 `,(0,s.jsx)(t.code,{children:`vertical`}),` 同时存在时 `,(0,s.jsx)(t.code,{children:`vertical`}),` 优先`]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`"horizontal" | "vertical"`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`"horizontal"`})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`wrap`})}),(0,s.jsxs)(t.td,{children:[`是否换行，布尔值为 `,(0,s.jsx)(t.code,{children:`wrap`}),` / `,(0,s.jsx)(t.code,{children:`nowrap`}),` 简写`]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`boolean | CSSProperties["flexWrap"]`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`"nowrap"`})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`justify`})}),(0,s.jsx)(t.td,{children:`主轴对齐方式`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`CSSProperties["justifyContent"]`})}),(0,s.jsx)(t.td,{children:`-`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`align`})}),(0,s.jsx)(t.td,{children:`交叉轴对齐方式`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`CSSProperties["alignItems"]`})}),(0,s.jsx)(t.td,{children:`-`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`flex`})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:`flex`}),` CSS 简写`]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`CSSProperties["flex"]`})}),(0,s.jsx)(t.td,{children:`-`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`gap`})}),(0,s.jsx)(t.td,{children:`间隙，预设值映射设计间距 Token，也可传自定义数值/字符串`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`"small" | "medium" | "large" | string | number`})}),(0,s.jsx)(t.td,{children:`-`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`component`})}),(0,s.jsx)(t.td,{children:`自定义渲染的元素类型`}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`React.ElementType`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`"div"`})})]})]})]}),`
`,(0,s.jsxs)(t.p,{children:[`其余原生 `,(0,s.jsx)(t.code,{children:`HTMLAttributes`}),` 均可透传。`]}),`
`,(0,s.jsx)(t.h3,{children:`gap 预设`}),`
`,(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:`值`}),(0,s.jsx)(t.th,{children:`对应 Token`})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`small`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`--lg-spacing-x-small`})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`medium`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`--lg-spacing-medium`})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`large`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`--lg-spacing-large`})})]})]})]})]})}function h(e={}){let{wrapper:t}=e.components||{};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}export{h as default,p as frontmatter};