import{I as e,R as t,W as n,q as r}from"./i18n-DmENUXWN.js";import{t as i}from"./Check-BlGBfRmT.js";import{t as a}from"./XLg-FrzAEp-1.js";var o=r(n()),s=t(),c=({items:t,current:n=0,status:r=`process`,size:i=`default`,titlePlacement:a=`vertical`,initial:c=0,onChange:u,className:d,style:f})=>{let p=(0,o.useMemo)(()=>t.map((e,t)=>{let i;return i=e.status?e.status:t<n?`finish`:t===n?r:`wait`,{...e,_status:i,_index:t}}),[t,n,r]),m=!!u;return(0,s.jsx)(`div`,{className:e(`lg-steps`,`lg-steps--${i}`,`lg-steps--title-${a}`,d),style:f,children:p.map((t,r)=>{let a=r===p.length-1,o=m&&!t.disabled&&t._status===`finish`;return(0,s.jsxs)(`div`,{className:e(`lg-steps__item`,`lg-steps__item--${t._status}`,o&&`lg-steps__item--clickable`),onClick:()=>{o&&u?.(r)},children:[(0,s.jsxs)(`div`,{className:`lg-steps__item-container`,children:[(0,s.jsx)(`div`,{className:`lg-steps__icon-wrapper`,children:(0,s.jsx)(l,{status:t._status,index:r+c,icon:t.icon,size:i})}),(0,s.jsxs)(`div`,{className:`lg-steps__content`,children:[(0,s.jsx)(`div`,{className:`lg-steps__title`,children:t.title}),t.description&&(0,s.jsx)(`div`,{className:`lg-steps__description`,children:t.description})]})]}),!a&&(0,s.jsx)(`div`,{className:e(`lg-steps__connector`,r<n&&`lg-steps__connector--finished`)})]},r)})})};c.displayName=`Steps`;function l({status:e,index:t,icon:n,size:r}){if(n)return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--custom`,children:n});let o=r===`small`?14:16;switch(e){case`finish`:return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--finish`,children:(0,s.jsx)(i,{size:o})});case`error`:return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--error`,children:(0,s.jsx)(a,{size:o})});case`process`:return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--process`,children:(0,s.jsx)(`span`,{className:`lg-steps__icon-number`,children:t+1})});default:return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--wait`,children:(0,s.jsx)(`span`,{className:`lg-steps__icon-number`,children:t+1})})}}var u=[{title:`Select product`},{title:`Confirm order`},{title:`Payment`},{title:`Done`}];function d(){return(0,s.jsx)(c,{items:u,current:1})}var f=`import { Steps } from "lingee-ui";

const items = [
  { title: "Select product" },
  { title: "Confirm order" },
  { title: "Payment" },
  { title: "Done" },
];

export default function BasicDemo() {
  return <Steps items={items} current={1} />;
}
`,p=[{title:`Submit request`,description:`Finished`},{title:`Department approval`,description:`In progress`},{title:`Finance review`,description:`Waiting`},{title:`Done`,description:`Waiting`}];function m(){return(0,s.jsx)(c,{items:p,current:1,direction:`vertical`})}var h=`import { Steps } from "lingee-ui";

const items = [
  { title: "Submit request", description: "Finished" },
  { title: "Department approval", description: "In progress" },
  { title: "Finance review", description: "Waiting" },
  { title: "Done", description: "Waiting" },
];

export default function VerticalDemo() {
  return <Steps items={items} current={1} direction="vertical" />;
}
`;export{d as i,m as n,f as r,h as t};