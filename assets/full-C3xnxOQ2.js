import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./pagination-Be4SwlUY.js";var i=e(t()),a=n();function o(){let[e,t]=(0,i.useState)(1);return(0,a.jsx)(r,{total:100,current:e,pageSize:10,showTotal:!0,onChange:e=>t(e)})}var s=`import { useState } from "react";
import { Pagination } from "lingee-ui";

export default function BasicDemo() {
  const [current, setCurrent] = useState(1);

  return (
    <Pagination
      total={100}
      current={current}
      pageSize={10}
      showTotal
      onChange={(page) => setCurrent(page)}
    />
  );
}
`;function c(){let[e,t]=(0,i.useState)(1),[n,o]=(0,i.useState)(1),[s,c]=(0,i.useState)(1);return(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`simple variant`}),(0,a.jsx)(r,{total:100,current:e,pageSize:10,variant:`simple`,onChange:e=>t(e)})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`borderless variant`}),(0,a.jsx)(r,{total:100,current:n,pageSize:10,variant:`borderless`,onChange:e=>o(e)})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`bordered variant`}),(0,a.jsx)(r,{total:100,current:s,pageSize:10,variant:`bordered`,onChange:e=>c(e)})]})]})}var l=`import { useState } from "react";
import { Pagination } from "lingee-ui";

export default function VariantsDemo() {
  const [current1, setCurrent1] = useState(1);
  const [current2, setCurrent2] = useState(1);
  const [current3, setCurrent3] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          simple variant
        </p>
        <Pagination
          total={100}
          current={current1}
          pageSize={10}
          variant="simple"
          onChange={(page) => setCurrent1(page)}
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          borderless variant
        </p>
        <Pagination
          total={100}
          current={current2}
          pageSize={10}
          variant="borderless"
          onChange={(page) => setCurrent2(page)}
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          bordered variant
        </p>
        <Pagination
          total={100}
          current={current3}
          pageSize={10}
          variant="bordered"
          onChange={(page) => setCurrent3(page)}
        />
      </div>
    </div>
  );
}
`;function u(){let[e,t]=(0,i.useState)(1),[n,o]=(0,i.useState)(10);return(0,a.jsx)(r,{total:200,current:e,pageSize:n,showTotal:!0,showSizeChanger:!0,showQuickJumper:!0,onChange:(e,n)=>{t(e),o(n)}})}var d=`import { useState } from "react";
import { Pagination } from "lingee-ui";

export default function FullDemo() {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return (
    <Pagination
      total={200}
      current={current}
      pageSize={pageSize}
      showTotal
      showSizeChanger
      showQuickJumper
      onChange={(page, size) => {
        setCurrent(page);
        setPageSize(size);
      }}
    />
  );
}
`;export{s as a,c as i,u as n,o,l as r,d as t};