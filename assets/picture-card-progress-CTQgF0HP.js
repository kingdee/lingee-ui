import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./CloudArrowUp-DSx2-D9B.js";import{t as i}from"./button-BE2IGfnk.js";import{t as a}from"./Plus-Dy2V1BuT.js";import{t as o}from"./upload-zsywTzjY.js";var s=n();function c(){return(0,s.jsx)(o,{onChange:e=>console.log(`File list:`,e),children:(0,s.jsx)(i,{children:`Click to upload`})})}var l=`import { Upload, Button } from "lingee-ui";

export default function BasicDemo() {
  return (
    <Upload
      onChange={(fileList) => console.log("File list:", fileList)}
    >
      <Button>Click to upload</Button>
    </Upload>
  );
}
`;function u(){return(0,s.jsx)(o,{drag:!0,multiple:!0,onChange:e=>console.log(`Files:`,e),children:(0,s.jsxs)(`div`,{style:{textAlign:`center`,padding:`20px 0`},children:[(0,s.jsx)(r,{style:{fontSize:40,color:`var(--lg-g-fg-color-primary-default)`}}),(0,s.jsx)(`p`,{style:{margin:`8px 0 4px`,fontSize:14},children:`Drag files here, or click to upload`}),(0,s.jsx)(`p`,{style:{margin:0,fontSize:12,color:`var(--lg-g-fg-color-black-default)`},children:`Any file format is supported`})]})})}var d=`import { Upload } from "lingee-ui";
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
`,f=e(t());function p(){let[e,t]=(0,f.useState)([]);return(0,s.jsx)(o,{listType:`picture-card`,accept:`image/*`,maxCount:3,multiple:!0,fileList:e,onChange:t})}var m=`import { useState } from "react";
import { Upload } from "lingee-ui";
import type { UploadFile } from "lingee-ui";

/** 图片卡片：仅收集模式，选图后显示缩略图，满 maxCount 后触发卡片自动隐藏 */
export default function PictureCardDemo() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  return (
    <Upload
      listType="picture-card"
      accept="image/*"
      maxCount={3}
      multiple
      fileList={fileList}
      onChange={setFileList}
    />
  );
}
`,h=`image/png,image/jpeg,image/gif,image/webp,image/svg+xml`;function g(){let[e,t]=(0,f.useState)([]),[n,r]=(0,f.useState)();return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,s.jsx)(o,{listType:`picture-card`,fileList:e,maxCount:1,accept:h,onChange:e=>{t(e),r(e[0]?.originFile)},children:(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:4,fontSize:12,color:`var(--lg-g-fg-color-black-faint)`},children:[(0,s.jsx)(a,{size:14}),(0,s.jsx)(`span`,{children:`Upload`})]})}),(0,s.jsxs)(`span`,{style:{fontSize:12,lineHeight:`18px`,color:`var(--lg-g-fg-color-black-faint)`},children:[`Field value: `,n?n.name:`empty`]})]})}var _=`import { useState } from "react";
import { Upload } from "lingee-ui";
import type { UploadFile } from "lingee-ui";
import { Plus } from "lingee-icon";

const ACCEPT = "image/png,image/jpeg,image/gif,image/webp,image/svg+xml";

export default function SinglePictureDemo() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  // 不传 customRequest 即仅收集：文件随表单一起提交，这里只取出原始 File 作为字段值
  const [icon, setIcon] = useState<File>();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Upload
        listType="picture-card"
        fileList={fileList}
        maxCount={1}
        accept={ACCEPT}
        onChange={(next) => {
          setFileList(next);
          setIcon(next[0]?.originFile);
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            fontSize: 12,
            color: "var(--lg-g-fg-color-black-faint)",
          }}
        >
          <Plus size={14} />
          <span>Upload</span>
        </div>
      </Upload>
      <span style={{ fontSize: 12, lineHeight: "18px", color: "var(--lg-g-fg-color-black-faint)" }}>
        Field value: {icon ? icon.name : "empty"}
      </span>
    </div>
  );
}
`;function v(){let[e,t]=(0,f.useState)([]),n=(0,f.useRef)(0);return(0,s.jsx)(o,{listType:`picture-card`,accept:`image/*`,multiple:!0,maxCount:4,fileList:e,onChange:t,customRequest:({onProgress:e,onSuccess:t,onError:r})=>{let i=n.current++%2==1,a=0,o=window.setInterval(()=>{if(a+=20,i&&a>=60){window.clearInterval(o),r(Error(`Upload failed`));return}e(a),a>=100&&(window.clearInterval(o),t())},300);return{abort:()=>window.clearInterval(o)}}})}var y=`import { useRef, useState } from "react";
import { Upload } from "lingee-ui";
import type { CustomRequestOptions, UploadFile } from "lingee-ui";

export default function PictureCardProgressDemo() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const requestCount = useRef(0);

  // 模拟上传：每隔一次请求失败一次，便于查看进度条、失败态与重试
  const customRequest = ({ onProgress, onSuccess, onError }: CustomRequestOptions) => {
    const shouldFail = requestCount.current++ % 2 === 1;
    let percent = 0;
    const timer = window.setInterval(() => {
      percent += 20;
      if (shouldFail && percent >= 60) {
        window.clearInterval(timer);
        onError(new Error("Upload failed"));
        return;
      }
      onProgress(percent);
      if (percent >= 100) {
        window.clearInterval(timer);
        onSuccess();
      }
    }, 300);
    return { abort: () => window.clearInterval(timer) };
  };

  return (
    <Upload
      listType="picture-card"
      accept="image/*"
      multiple
      maxCount={4}
      fileList={fileList}
      onChange={setFileList}
      customRequest={customRequest}
    />
  );
}
`;export{m as a,u as c,g as i,l,v as n,p as o,_ as r,d as s,y as t,c as u};