import{G as e,J as t,L as n,z as r}from"./i18n-f4fS4CFJ.js";import{t as i}from"./Check-BZMvDuwP.js";import{t as a}from"./XLg-COofvWqT.js";var o=t(e()),s=r(),c=({items:e,current:t=0,status:r=`process`,size:i=`default`,titlePlacement:a=`vertical`,initial:c=0,onChange:u,className:d,style:f})=>{let p=(0,o.useMemo)(()=>e.map((e,n)=>{let i;return i=e.status?e.status:n<t?`finish`:n===t?r:`wait`,{...e,_status:i,_index:n}}),[e,t,r]),m=!!u;return(0,s.jsx)(`div`,{className:n(`lg-steps`,`lg-steps--${i}`,`lg-steps--title-${a}`,d),style:f,children:p.map((e,r)=>{let a=r===p.length-1,o=m&&!e.disabled&&e._status===`finish`;return(0,s.jsxs)(`div`,{className:n(`lg-steps__item`,`lg-steps__item--${e._status}`,o&&`lg-steps__item--clickable`),onClick:()=>{o&&u?.(r)},children:[(0,s.jsxs)(`div`,{className:`lg-steps__item-container`,children:[(0,s.jsx)(`div`,{className:`lg-steps__icon-wrapper`,children:(0,s.jsx)(l,{status:e._status,index:r+c,icon:e.icon,size:i})}),(0,s.jsxs)(`div`,{className:`lg-steps__content`,children:[(0,s.jsx)(`div`,{className:`lg-steps__title`,children:e.title}),e.description&&(0,s.jsx)(`div`,{className:`lg-steps__description`,children:e.description})]})]}),!a&&(0,s.jsx)(`div`,{className:n(`lg-steps__connector`,r<t&&`lg-steps__connector--finished`)})]},r)})})};c.displayName=`Steps`;function l({status:e,index:t,icon:n,size:r}){if(n)return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--custom`,children:n});let o=r===`small`?14:16;switch(e){case`finish`:return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--finish`,children:(0,s.jsx)(i,{size:o})});case`error`:return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--error`,children:(0,s.jsx)(a,{size:o})});case`process`:return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--process`,children:(0,s.jsx)(`span`,{className:`lg-steps__icon-number`,children:t+1})});default:return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--wait`,children:(0,s.jsx)(`span`,{className:`lg-steps__icon-number`,children:t+1})})}}var u=[{title:`Select product`},{title:`Confirm order`},{title:`Payment`},{title:`Done`}];function d(){return(0,s.jsx)(c,{items:u,current:1})}var f=`import { Steps } from "lingee-ui";

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