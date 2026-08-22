import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{t}from"./CloudArrowUp-Bp63u2o2.js";import{t as n}from"./button-B7wPs43G.js";import{t as r}from"./upload-Dbkx_SHE.js";var i=e();function a(){return(0,i.jsx)(r,{onChange:e=>console.log(`File list:`,e),children:(0,i.jsx)(n,{children:`Click to upload`})})}var o=`import { Upload, Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <Upload
      onChange={(fileList) => console.log("File list:", fileList)}
    >
      <Button>Click to upload</Button>
    </Upload>
  );
}
`;function s(){return(0,i.jsx)(r,{drag:!0,multiple:!0,onChange:e=>console.log(`Files:`,e),children:(0,i.jsxs)(`div`,{style:{textAlign:`center`,padding:`20px 0`},children:[(0,i.jsx)(t,{style:{fontSize:40,color:`var(--lg-g-fg-color-primary-default)`}}),(0,i.jsx)(`p`,{style:{margin:`8px 0 4px`,fontSize:14},children:`Drag files here, or click to upload`}),(0,i.jsx)(`p`,{style:{margin:0,fontSize:12,color:`var(--lg-g-fg-color-black-default)`},children:`Any file format is supported`})]})})}var c=`import { Upload } from "lingee-ui";
import { CloudArrowUp } from "lingee-icon";

export default function DragDemo() {
  return (
    <Upload drag multiple onChange={(fileList) => console.log("Files:", fileList)}>
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <CloudArrowUp style={{ fontSize: 40, color: "var(--lg-g-fg-color-primary-default)" }} />
        <p style={{ margin: "8px 0 4px", fontSize: 14 }}>
          Drag files here, or click to upload
        </p>
        <p style={{ margin: 0, fontSize: 12, color: "var(--lg-g-fg-color-black-default)" }}>
          Any file format is supported
        </p>
      </div>
    </Upload>
  );
}
`;export{a as i,s as n,o as r,c as t};