import{A as e,D as t,x as n,y as r}from"./dist-DjLZdxEA.js";import{t as i}from"./Check-dy1WWNrL.js";import{t as a}from"./XLg-BVUzbMOA.js";import{t as o}from"./DemoBox-DEznk3dE.js";var s=e(t()),c=n(),l=({items:e,current:t=0,status:n=`process`,size:i=`default`,titlePlacement:a=`vertical`,initial:o=0,onChange:l,className:d,style:f})=>{let p=(0,s.useMemo)(()=>e.map((e,r)=>{let i;return i=e.status?e.status:r<t?`finish`:r===t?n:`wait`,{...e,_status:i,_index:r}}),[e,t,n]),m=!!l;return(0,c.jsx)(`div`,{className:r(`lg-steps`,`lg-steps--${i}`,`lg-steps--title-${a}`,d),style:f,children:p.map((e,n)=>{let a=n===p.length-1,s=m&&!e.disabled&&e._status===`finish`;return(0,c.jsxs)(`div`,{className:r(`lg-steps__item`,`lg-steps__item--${e._status}`,s&&`lg-steps__item--clickable`),onClick:()=>{s&&l?.(n)},children:[(0,c.jsxs)(`div`,{className:`lg-steps__item-container`,children:[(0,c.jsx)(`div`,{className:`lg-steps__icon-wrapper`,children:(0,c.jsx)(u,{status:e._status,index:n+o,icon:e.icon,size:i})}),(0,c.jsxs)(`div`,{className:`lg-steps__content`,children:[(0,c.jsx)(`div`,{className:`lg-steps__title`,children:e.title}),e.description&&(0,c.jsx)(`div`,{className:`lg-steps__description`,children:e.description})]})]}),!a&&(0,c.jsx)(`div`,{className:r(`lg-steps__connector`,n<t&&`lg-steps__connector--finished`)})]},n)})})};l.displayName=`Steps`;function u({status:e,index:t,icon:n,size:r}){if(n)return(0,c.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--custom`,children:n});let o=r===`small`?14:16;switch(e){case`finish`:return(0,c.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--finish`,children:(0,c.jsx)(i,{size:o})});case`error`:return(0,c.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--error`,children:(0,c.jsx)(a,{size:o})});case`process`:return(0,c.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--process`,children:(0,c.jsx)(`span`,{className:`lg-steps__icon-number`,children:t+1})});default:return(0,c.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--wait`,children:(0,c.jsx)(`span`,{className:`lg-steps__icon-number`,children:t+1})})}}var d=[{title:`选择产品`},{title:`确认订单`},{title:`付款`},{title:`完成`}];function f(){return(0,c.jsx)(l,{items:d,current:1})}var p=`import { Steps } from "lingee-ui";

const items = [
  { title: "选择产品" },
  { title: "确认订单" },
  { title: "付款" },
  { title: "完成" },
];

export default function BasicDemo() {
  return <Steps items={items} current={1} />;
}
`,m=[{title:`提交申请`,description:`已完成`},{title:`部门审批`,description:`进行中`},{title:`财务审核`,description:`待处理`},{title:`完成`,description:`待处理`}];function h(){return(0,c.jsx)(l,{items:m,current:1,direction:`vertical`})}var g=`import { Steps } from "lingee-ui";

const items = [
  { title: "提交申请", description: "已完成" },
  { title: "部门审批", description: "进行中" },
  { title: "财务审核", description: "待处理" },
  { title: "完成", description: "待处理" },
];

export default function VerticalDemo() {
  return <Steps items={items} current={1} direction="vertical" />;
}
`,_={title:`Steps 步骤条`,description:`引导用户按照流程完成任务的导航条。`};function v(e){let t={code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{children:`基本用法`}),`
`,(0,c.jsxs)(t.p,{children:[`通过 `,(0,c.jsx)(t.code,{children:`items`}),` 定义步骤内容，`,(0,c.jsx)(t.code,{children:`current`}),` 设置当前步骤。`]}),`
`,(0,c.jsx)(o,{source:p,children:(0,c.jsx)(f,{})}),`
`,(0,c.jsx)(t.h2,{children:`垂直方向`}),`
`,(0,c.jsxs)(t.p,{children:[`设置 `,(0,c.jsx)(t.code,{children:`direction="vertical"`}),` 使步骤条垂直展示。`]}),`
`,(0,c.jsx)(o,{source:g,children:(0,c.jsx)(h,{})}),`
`,(0,c.jsx)(t.h2,{children:`API`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`属性`}),(0,c.jsx)(t.th,{children:`说明`}),(0,c.jsx)(t.th,{children:`类型`}),(0,c.jsx)(t.th,{children:`默认值`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`current`})}),(0,c.jsx)(t.td,{children:`当前步骤索引（从 0 开始）`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`0`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`items`})}),(0,c.jsx)(t.td,{children:`步骤配置`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`Array<{ title, description? }>`})}),(0,c.jsx)(t.td,{children:`-`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`size`})}),(0,c.jsx)(t.td,{children:`尺寸`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"default" | "small"`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"default"`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`status`})}),(0,c.jsx)(t.td,{children:`当前步骤状态`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"process" | "error"`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"process"`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`titlePlacement`})}),(0,c.jsx)(t.td,{children:`标题方向`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"vertical" | "horizontal"`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"vertical"`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`onChange`})}),(0,c.jsx)(t.td,{children:`步骤点击回调`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(current: number) => void`})}),(0,c.jsx)(t.td,{children:`-`})]})]})]})]})}function y(e={}){let{wrapper:t}=e.components||{};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(v,{...e})}):v(e)}export{y as default,_ as frontmatter};