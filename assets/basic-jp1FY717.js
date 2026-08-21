import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./utils-BEZlSqlY.js";import{t as i}from"./button-B7wPs43G.js";var a=e(t()),o=n(),s=[`small`,`medium`,`large`],c=e=>typeof e==`string`&&s.includes(e),l=a.forwardRef(({className:e,vertical:t,orientation:n=`horizontal`,wrap:i,justify:a,align:s,flex:l,gap:u,component:d=`div`,style:f,children:p,...m},h)=>{let g=t??n===`vertical`,_=typeof i==`boolean`?i?`wrap`:`nowrap`:i,v=c(u),y=r(`lg-flex`,g?`lg-flex--vertical`:`lg-flex--horizontal`,v&&`lg-flex--gap-${u}`,e),b={justifyContent:a,alignItems:s,flexWrap:_,flex:l,gap:!v&&u!=null?u:void 0,...f};return(0,o.jsx)(d,{ref:h,className:y,style:b,...m,children:p})});l.displayName=`Flex`;function u(){return(0,o.jsxs)(l,{gap:`small`,align:`center`,children:[(0,o.jsx)(i,{variant:`primary`,children:`OK`}),(0,o.jsx)(i,{children:`Cancel`})]})}var d=`import { Flex, Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <Flex gap="small" align="center">
      <Button variant="primary">OK</Button>
      <Button>Cancel</Button>
    </Flex>
  );
}
`;export{u as n,d as t};