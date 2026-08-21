import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{a as r}from"./provider-BWqppJYI.js";import{t as i}from"./button-B7wPs43G.js";import{t as a}from"./upload-Bfd_4BLO.js";import{t as o}from"./DemoBox-DAoib9f4.js";import{i as s,n as c,r as l,t as u}from"./drag-wdqnoQom.js";var d=e(t()),f=n();function p(){let[e,t]=(0,d.useState)([]);return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,f.jsx)(a,{fileList:e,onChange:t,multiple:!0,accept:`.jpg,.jpeg,.png,.pdf`,validateAccept:!0,pasteable:!0,maxCount:5,maxSize:5242880,onReject:(e,t)=>{let n={size:`超过 5MB`,type:`格式不支持`,count:`数量超限`}[t];r.error(`${e.length} 个文件被拒：${n}`)},children:(0,f.jsx)(i,{children:`添加附件（可粘贴截图）`})}),(0,f.jsx)(`div`,{children:(0,f.jsxs)(i,{variant:`primary`,disabled:e.length===0,onClick:()=>{let t=e.map(e=>e.originFile).filter(e=>!!e);r.success(`待提交 ${t.length} 个文件`)},children:[`提交（携带 `,e.length,` 个文件）`]})})]})}var m=`import { useState } from "react";
import { Upload, Button, toast } from "lingee-ui";
import type { UploadFile } from "lingee-ui";

/** 仅收集模式：文件先攒着，提交时一次性带走 */
export default function CollectOnlyDemo() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleSubmit = () => {
    const files = fileList
      .map((f) => f.originFile)
      .filter((f): f is File => Boolean(f));
    toast.success(\`待提交 \${files.length} 个文件\`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Upload
        // 省略 customRequest —— 不发请求，仅收集
        fileList={fileList}
        onChange={setFileList}
        multiple
        accept=".jpg,.jpeg,.png,.pdf"
        // 拖拽与粘贴绕过原生 accept，需显式开启类型校验才能拦住
        validateAccept
        pasteable
        maxCount={5}
        maxSize={5 * 1024 * 1024}
        onReject={(files, reason) => {
          const label = { size: "超过 5MB", type: "格式不支持", count: "数量超限" }[
            reason
          ];
          toast.error(\`\${files.length} 个文件被拒：\${label}\`);
        }}
      >
        <Button>添加附件（可粘贴截图）</Button>
      </Upload>

      <div>
        <Button
          variant="primary"
          disabled={fileList.length === 0}
          onClick={handleSubmit}
        >
          提交（携带 {fileList.length} 个文件）
        </Button>
      </div>
    </div>
  );
}
`,h={title:`Upload 上传`,description:`文件上传组件，支持点击和拖拽上传。`};function g(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`基本用法`}),`
`,(0,f.jsxs)(t.p,{children:[`使用 `,(0,f.jsx)(t.code,{children:`children`}),` 作为触发区域，点击后选择文件上传。`]}),`
`,(0,f.jsx)(o,{source:l,children:(0,f.jsx)(s,{})}),`
`,(0,f.jsx)(t.h2,{children:`拖拽上传`}),`
`,(0,f.jsxs)(t.p,{children:[`设置 `,(0,f.jsx)(t.code,{children:`drag`}),` 属性启用拖拽上传区域，用户可将文件拖入区域完成上传。`]}),`
`,(0,f.jsx)(o,{source:u,children:(0,f.jsx)(c,{})}),`
`,(0,f.jsx)(t.h2,{children:`仅收集不上传`}),`
`,(0,f.jsxs)(t.p,{children:[`省略 `,(0,f.jsx)(t.code,{children:`customRequest`}),` 即为「仅收集」模式：不发起任何请求，文件入列后直接置为 `,(0,f.jsx)(t.code,{children:`done`}),`，原始 `,(0,f.jsx)(t.code,{children:`File`}),` 保留在 `,(0,f.jsx)(t.code,{children:`originFile`}),` 上。`]}),`
`,(0,f.jsxs)(t.p,{children:[`适用于随表单一次性提交的场景 —— 文件先攒在 `,(0,f.jsx)(t.code,{children:`fileList`}),` 里，提交时由消费方自行携带：`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`const [fileList, setFileList] = useState<UploadFile[]>([]);

<Upload
  fileList={fileList}
  onChange={setFileList}
  multiple
  accept=".jpg,.png,.pdf"
  // 拖拽与粘贴绕过原生 accept，需显式开启类型校验
  validateAccept
  pasteable
  maxCount={5}
  maxSize={5 * 1024 * 1024}
  onReject={(files, reason) => toast.error(\`\${reason}: \${files.length} 个文件被拒\`)}
>
  <Button>添加附件</Button>
</Upload>

// 提交时
const files = fileList.map((f) => f.originFile!).filter(Boolean);
`})}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`pasteable`}),` 会在组件容器上监听 `,(0,f.jsx)(t.code,{children:`paste`}),`（而非 document），多个 `,(0,f.jsx)(t.code,{children:`Upload`}),` 共存时不会相互抢事件；剪贴板内没有文件时不拦截事件，纯文本粘贴仍然正常。`]}),`
`,(0,f.jsx)(o,{source:m,children:(0,f.jsx)(p,{})}),`
`,(0,f.jsx)(t.h2,{children:`API`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`属性`}),(0,f.jsx)(t.th,{children:`说明`}),(0,f.jsx)(t.th,{children:`类型`}),(0,f.jsx)(t.th,{children:`默认值`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`accept`})}),(0,f.jsx)(t.td,{children:`接受的文件类型`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`string`})}),(0,f.jsx)(t.td,{children:`-`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`multiple`})}),(0,f.jsx)(t.td,{children:`是否允许多选`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`boolean`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`false`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`disabled`})}),(0,f.jsx)(t.td,{children:`是否禁用`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`boolean`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`false`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`drag`})}),(0,f.jsx)(t.td,{children:`是否启用拖拽上传`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`boolean`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`false`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`maxCount`})}),(0,f.jsx)(t.td,{children:`最大文件数量`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`number`})}),(0,f.jsx)(t.td,{children:`-`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`maxSize`})}),(0,f.jsx)(t.td,{children:`单文件最大大小（字节）`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`number`})}),(0,f.jsx)(t.td,{children:`-`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`fileList`})}),(0,f.jsx)(t.td,{children:`文件列表（受控）`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`UploadFile[]`})}),(0,f.jsx)(t.td,{children:`-`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`showFileList`})}),(0,f.jsx)(t.td,{children:`是否显示文件列表`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`boolean`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`true`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`onChange`})}),(0,f.jsx)(t.td,{children:`文件列表变化回调`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`(fileList: UploadFile[]) => void`})}),(0,f.jsx)(t.td,{children:`-`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`onReject`})}),(0,f.jsx)(t.td,{children:`校验未通过回调`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`(files: File[], reason: "size" | "type" | "count") => void`})}),(0,f.jsx)(t.td,{children:`-`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`customRequest`})}),(0,f.jsxs)(t.td,{children:[`自定义上传请求。与 `,(0,f.jsx)(t.code,{children:`action`}),` 同时传入时优先`]}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`(options: CustomRequestOptions) => { abort }`})}),(0,f.jsx)(t.td,{children:`-`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`action`})}),(0,f.jsx)(t.td,{children:`上传地址，传入即启用内置 XHR（含真实进度）`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`string | (file) => string | Promise<string>`})}),(0,f.jsx)(t.td,{children:`-`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`method`})}),(0,f.jsxs)(t.td,{children:[`请求方法。仅 `,(0,f.jsx)(t.code,{children:`action`}),` 模式生效`]}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`"POST" | "PUT" | "PATCH"`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`POST`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`headers`})}),(0,f.jsxs)(t.td,{children:[`附加请求头。仅 `,(0,f.jsx)(t.code,{children:`action`}),` 模式生效`]}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`Record<string, string>`})}),(0,f.jsx)(t.td,{children:`-`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`data`})}),(0,f.jsxs)(t.td,{children:[`附加表单字段。仅 `,(0,f.jsx)(t.code,{children:`action`}),` 模式生效`]}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`Record<string, unknown> | (file) => Record<string, unknown>`})}),(0,f.jsx)(t.td,{children:`-`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`name`})}),(0,f.jsxs)(t.td,{children:[`表单中文件字段名。仅 `,(0,f.jsx)(t.code,{children:`action`}),` 模式生效`]}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`string`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`file`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`withCredentials`})}),(0,f.jsxs)(t.td,{children:[`跨域是否带 cookie。仅 `,(0,f.jsx)(t.code,{children:`action`}),` 模式生效`]}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`boolean`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`false`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`directory`})}),(0,f.jsx)(t.td,{children:`是否选择文件夹（拖拽时递归遍历子目录）`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`boolean`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`false`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`beforeUpload`})}),(0,f.jsxs)(t.td,{children:[`上传前钩子，返回 `,(0,f.jsx)(t.code,{children:`false`}),` 阻止、返回 `,(0,f.jsx)(t.code,{children:`File`}),`/`,(0,f.jsx)(t.code,{children:`Blob`}),` 替换待传文件`]}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`(file, fileList) => boolean | File | Blob | Promise<...>`})}),(0,f.jsx)(t.td,{children:`-`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`pasteable`})}),(0,f.jsx)(t.td,{children:`是否支持粘贴文件（如截图）`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`boolean`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`false`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`validateAccept`})}),(0,f.jsxs)(t.td,{children:[`是否按 `,(0,f.jsx)(t.code,{children:`accept`}),` 校验类型，拦住拖拽与粘贴`]}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`boolean`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`false`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`children`})}),(0,f.jsx)(t.td,{children:`触发区域`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`ReactNode`})}),(0,f.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,f.jsx)(t.h2,{children:`内置 XHR 上传`}),`
`,(0,f.jsxs)(t.p,{children:[`传入 `,(0,f.jsx)(t.code,{children:`action`}),` 即启用内置请求，无需自行实现 `,(0,f.jsx)(t.code,{children:`customRequest`}),`，进度来自真实的 XHR `,(0,f.jsx)(t.code,{children:`progress`}),` 事件：`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`<Upload
  action="/api/upload"
  name="file"
  headers={{ Authorization: \`Bearer \${token}\` }}
  data={(file) => ({ filename: file.name })}
  onChange={setFileList}
>
  <Button>上传</Button>
</Upload>
`})}),`
`,(0,f.jsx)(t.h2,{children:`上传前处理文件`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`beforeUpload`}),` 在内置校验（类型/数量/大小）通过之后执行。返回 `,(0,f.jsx)(t.code,{children:`File`}),` 或 `,(0,f.jsx)(t.code,{children:`Blob`}),` 可替换实际上传的文件，用于压缩、转格式等场景；原始文件仍保留在 `,(0,f.jsx)(t.code,{children:`originFile`}),` 上：`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`<Upload
  action="/api/upload"
  beforeUpload={async (file) => {
    if (!file.type.startsWith("image/")) return true;
    return await compressImage(file);
  }}
>
  <Button>上传图片</Button>
</Upload>
`})}),`
`,(0,f.jsxs)(t.p,{children:[`返回 `,(0,f.jsx)(t.code,{children:`false`}),` 或 reject 则阻止该文件上传。`]}),`
`,(0,f.jsx)(t.h2,{children:`文件夹上传`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`directory`}),` 开启后点击选择整个目录，拖拽时递归遍历子目录。目录内的文件不经过选择器，组件会强制按 `,(0,f.jsx)(t.code,{children:`accept`}),` 过滤：`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`<Upload directory accept=".png,.jpg" onChange={setFileList}>
  <Button>选择文件夹</Button>
</Upload>
`})})]})}function _(e={}){let{wrapper:t}=e.components||{};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(g,{...e})}):g(e)}export{_ as default,h as frontmatter};