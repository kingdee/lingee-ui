import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./utils-BEZlSqlY.js";import{t as i}from"./Check-DkLGv1N5.js";import{t as a}from"./XLg-CbEnWsB1.js";var o=e(t()),s=n(),c=({items:e,current:t=0,status:n=`process`,size:i=`default`,titlePlacement:a=`vertical`,initial:c=0,onChange:u,className:d,style:f})=>{let p=(0,o.useMemo)(()=>e.map((e,r)=>{let i;return i=e.status?e.status:r<t?`finish`:r===t?n:`wait`,{...e,_status:i,_index:r}}),[e,t,n]),m=!!u;return(0,s.jsx)(`div`,{className:r(`lg-steps`,`lg-steps--${i}`,`lg-steps--title-${a}`,d),style:f,children:p.map((e,n)=>{let a=n===p.length-1,o=m&&!e.disabled&&e._status===`finish`;return(0,s.jsxs)(`div`,{className:r(`lg-steps__item`,`lg-steps__item--${e._status}`,o&&`lg-steps__item--clickable`),onClick:()=>{o&&u?.(n)},children:[(0,s.jsxs)(`div`,{className:`lg-steps__item-container`,children:[(0,s.jsx)(`div`,{className:`lg-steps__icon-wrapper`,children:(0,s.jsx)(l,{status:e._status,index:n+c,icon:e.icon,size:i})}),(0,s.jsxs)(`div`,{className:`lg-steps__content`,children:[(0,s.jsx)(`div`,{className:`lg-steps__title`,children:e.title}),e.description&&(0,s.jsx)(`div`,{className:`lg-steps__description`,children:e.description})]})]}),!a&&(0,s.jsx)(`div`,{className:r(`lg-steps__connector`,n<t&&`lg-steps__connector--finished`)})]},n)})})};c.displayName=`Steps`;function l({status:e,index:t,icon:n,size:r}){if(n)return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--custom`,children:n});let o=r===`small`?14:16;switch(e){case`finish`:return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--finish`,children:(0,s.jsx)(i,{size:o})});case`error`:return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--error`,children:(0,s.jsx)(a,{size:o})});case`process`:return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--process`,children:(0,s.jsx)(`span`,{className:`lg-steps__icon-number`,children:t+1})});default:return(0,s.jsx)(`div`,{className:`lg-steps__icon lg-steps__icon--wait`,children:(0,s.jsx)(`span`,{className:`lg-steps__icon-number`,children:t+1})})}}var u=[{title:`Select product`},{title:`Confirm order`},{title:`Payment`},{title:`Done`}];function d(){return(0,s.jsx)(c,{items:u,current:1})}var f=`import { Steps } from "lingee-ui";

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