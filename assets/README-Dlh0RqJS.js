import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{o as r}from"./provider-ViaVeHt0.js";import{t as i}from"./button-BE2IGfnk.js";import{t as a}from"./upload-zsywTzjY.js";import{t as o}from"./DemoBox-BN2jUenE.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./picture-card-progress-CTQgF0HP.js";var _=e(t()),v=n();function y(){let[e,t]=(0,_.useState)([]);return(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,v.jsx)(a,{fileList:e,onChange:t,multiple:!0,accept:`.jpg,.jpeg,.png,.pdf`,validateAccept:!0,pasteable:!0,maxCount:5,maxSize:5242880,onReject:(e,t)=>{let n={size:`超过 5MB`,type:`格式不支持`,count:`数量超限`}[t];r.error(`${e.length} 个文件被拒：${n}`)},children:(0,v.jsx)(i,{children:`添加附件（可粘贴截图）`})}),(0,v.jsx)(`div`,{children:(0,v.jsxs)(i,{variant:`primary`,disabled:e.length===0,onClick:()=>{let t=e.map(e=>e.originFile).filter(e=>!!e);r.success(`待提交 ${t.length} 个文件`)},children:[`提交（携带 `,e.length,` 个文件）`]})})]})}var b=`import { useState } from "react";
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
`,x={title:`Upload 上传`,description:`文件上传组件，支持点击和拖拽上传。`};function S(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.h2,{children:`基本用法`}),`
`,(0,v.jsxs)(t.p,{children:[`使用 `,(0,v.jsx)(t.code,{children:`children`}),` 作为触发区域，点击后选择文件上传。`]}),`
`,(0,v.jsx)(o,{source:u,children:(0,v.jsx)(g,{})}),`
`,(0,v.jsx)(t.h2,{children:`拖拽上传`}),`
`,(0,v.jsxs)(t.p,{children:[`设置 `,(0,v.jsx)(t.code,{children:`drag`}),` 属性启用拖拽上传区域，用户可将文件拖入区域完成上传。`]}),`
`,(0,v.jsx)(o,{source:m,children:(0,v.jsx)(c,{})}),`
`,(0,v.jsx)(t.h2,{children:`仅收集不上传`}),`
`,(0,v.jsxs)(t.p,{children:[`省略 `,(0,v.jsx)(t.code,{children:`customRequest`}),` 即为「仅收集」模式：不发起任何请求，文件入列后直接置为 `,(0,v.jsx)(t.code,{children:`done`}),`，原始 `,(0,v.jsx)(t.code,{children:`File`}),` 保留在 `,(0,v.jsx)(t.code,{children:`originFile`}),` 上。`]}),`
`,(0,v.jsxs)(t.p,{children:[`适用于随表单一次性提交的场景 —— 文件先攒在 `,(0,v.jsx)(t.code,{children:`fileList`}),` 里，提交时由消费方自行携带：`]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`const [fileList, setFileList] = useState<UploadFile[]>([]);

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
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`pasteable`}),` 会在组件容器上监听 `,(0,v.jsx)(t.code,{children:`paste`}),`（而非 document），多个 `,(0,v.jsx)(t.code,{children:`Upload`}),` 共存时不会相互抢事件；剪贴板内没有文件时不拦截事件，纯文本粘贴仍然正常。`]}),`
`,(0,v.jsx)(o,{source:b,children:(0,v.jsx)(y,{})}),`
`,(0,v.jsx)(t.h2,{children:`图片卡片`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`listType="picture-card"`}),` 以缩略卡片展示文件，点击缩略图放大预览，悬停卡片显示移除按钮。本地选中的图片用 object URL 预览，移除或卸载时自动释放；非图片文件显示文件图标与文件名。`]}),`
`,(0,v.jsxs)(t.p,{children:[`触发区渲染为同尺寸卡片，`,(0,v.jsx)(t.code,{children:`children`}),` 可替换卡片内容；文件数达到 `,(0,v.jsx)(t.code,{children:`maxCount`}),` 后触发卡片隐藏。此形态下 `,(0,v.jsx)(t.code,{children:`drag`}),` 不生效。`]}),`
`,(0,v.jsx)(o,{source:s,children:(0,v.jsx)(f,{})}),`
`,(0,v.jsx)(t.h2,{children:`单张图片（仅收集）`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`maxCount={1}`}),` 时选图后触发卡片隐藏、移除后恢复。不传 `,(0,v.jsx)(t.code,{children:`customRequest`}),` 只收集文件，从 `,(0,v.jsx)(t.code,{children:`fileList[0].originFile`}),` 取出原始 `,(0,v.jsx)(t.code,{children:`File`}),` 随表单提交；`,(0,v.jsx)(t.code,{children:`children`}),` 替换触发卡片内的内容。`]}),`
`,(0,v.jsx)(o,{source:p,children:(0,v.jsx)(l,{})}),`
`,(0,v.jsx)(t.h2,{children:`图片卡片的上传状态`}),`
`,(0,v.jsxs)(t.p,{children:[`传入 `,(0,v.jsx)(t.code,{children:`customRequest`}),` 后卡片显示上传进度；失败的卡片显示「重新上传」按钮，点击后在原卡片上重新发起该文件的请求，列表已满时也可以重试。示例每隔一次请求模拟一次失败。`]}),`
`,(0,v.jsx)(o,{source:h,children:(0,v.jsx)(d,{})}),`
`,(0,v.jsx)(t.h2,{children:`API`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`属性`}),(0,v.jsx)(t.th,{children:`说明`}),(0,v.jsx)(t.th,{children:`类型`}),(0,v.jsx)(t.th,{children:`默认值`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`accept`})}),(0,v.jsx)(t.td,{children:`接受的文件类型`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`string`})}),(0,v.jsx)(t.td,{children:`-`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`multiple`})}),(0,v.jsx)(t.td,{children:`是否允许多选`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`boolean`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`disabled`})}),(0,v.jsx)(t.td,{children:`是否禁用`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`boolean`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`drag`})}),(0,v.jsx)(t.td,{children:`是否启用拖拽上传`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`boolean`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`maxCount`})}),(0,v.jsx)(t.td,{children:`最大文件数量`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`number`})}),(0,v.jsx)(t.td,{children:`-`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`maxSize`})}),(0,v.jsx)(t.td,{children:`单文件最大大小（字节）`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`number`})}),(0,v.jsx)(t.td,{children:`-`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`fileList`})}),(0,v.jsx)(t.td,{children:`文件列表（受控）`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`UploadFile[]`})}),(0,v.jsx)(t.td,{children:`-`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`showFileList`})}),(0,v.jsx)(t.td,{children:`是否显示文件列表`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`boolean`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`true`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`listType`})}),(0,v.jsxs)(t.td,{children:[`文件列表形态，`,(0,v.jsx)(t.code,{children:`picture-card`}),` 为图片缩略卡片`]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`"text" | "picture-card"`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`"text"`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`onChange`})}),(0,v.jsx)(t.td,{children:`文件列表变化回调`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`(fileList: UploadFile[]) => void`})}),(0,v.jsx)(t.td,{children:`-`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`onReject`})}),(0,v.jsx)(t.td,{children:`校验未通过回调`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`(files: File[], reason: "size" | "type" | "count") => void`})}),(0,v.jsx)(t.td,{children:`-`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`customRequest`})}),(0,v.jsxs)(t.td,{children:[`自定义上传请求。与 `,(0,v.jsx)(t.code,{children:`action`}),` 同时传入时优先`]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`(options: CustomRequestOptions) => { abort }`})}),(0,v.jsx)(t.td,{children:`-`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`action`})}),(0,v.jsx)(t.td,{children:`上传地址，传入即启用内置 XHR（含真实进度）`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`string | (file) => string | Promise<string>`})}),(0,v.jsx)(t.td,{children:`-`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`method`})}),(0,v.jsxs)(t.td,{children:[`请求方法。仅 `,(0,v.jsx)(t.code,{children:`action`}),` 模式生效`]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`"POST" | "PUT" | "PATCH"`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`POST`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`headers`})}),(0,v.jsxs)(t.td,{children:[`附加请求头。仅 `,(0,v.jsx)(t.code,{children:`action`}),` 模式生效`]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`Record<string, string>`})}),(0,v.jsx)(t.td,{children:`-`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`data`})}),(0,v.jsxs)(t.td,{children:[`附加表单字段。仅 `,(0,v.jsx)(t.code,{children:`action`}),` 模式生效`]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`Record<string, unknown> | (file) => Record<string, unknown>`})}),(0,v.jsx)(t.td,{children:`-`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`name`})}),(0,v.jsxs)(t.td,{children:[`表单中文件字段名。仅 `,(0,v.jsx)(t.code,{children:`action`}),` 模式生效`]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`string`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`file`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`withCredentials`})}),(0,v.jsxs)(t.td,{children:[`跨域是否带 cookie。仅 `,(0,v.jsx)(t.code,{children:`action`}),` 模式生效`]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`boolean`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`directory`})}),(0,v.jsx)(t.td,{children:`是否选择文件夹（拖拽时递归遍历子目录）`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`boolean`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`beforeUpload`})}),(0,v.jsxs)(t.td,{children:[`上传前钩子，返回 `,(0,v.jsx)(t.code,{children:`false`}),` 阻止、返回 `,(0,v.jsx)(t.code,{children:`File`}),`/`,(0,v.jsx)(t.code,{children:`Blob`}),` 替换待传文件`]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`(file, fileList) => boolean | File | Blob | Promise<...>`})}),(0,v.jsx)(t.td,{children:`-`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`pasteable`})}),(0,v.jsx)(t.td,{children:`是否支持粘贴文件（如截图）`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`boolean`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`validateAccept`})}),(0,v.jsxs)(t.td,{children:[`是否按 `,(0,v.jsx)(t.code,{children:`accept`}),` 校验类型，拦住拖拽与粘贴`]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`boolean`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`defaultFileList`})}),(0,v.jsx)(t.td,{children:`非受控默认文件列表`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`UploadFile[]`})}),(0,v.jsx)(t.td,{children:`-`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`onRemove`})}),(0,v.jsxs)(t.td,{children:[`移除前拦截，返回 `,(0,v.jsx)(t.code,{children:`false`}),` 或 reject 阻止移除`]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`(file: UploadFile) => boolean | void | Promise<boolean>`})}),(0,v.jsx)(t.td,{children:`-`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`renderItem`})}),(0,v.jsx)(t.td,{children:`自定义文件列表项渲染`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`(file: UploadFile, actions: FileItemActions) => ReactNode`})}),(0,v.jsx)(t.td,{children:`-`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`children`})}),(0,v.jsx)(t.td,{children:`触发区域`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`ReactNode`})}),(0,v.jsx)(t.td,{children:`-`})]})]})]}),`
`,(0,v.jsx)(t.h2,{children:`内置 XHR 上传`}),`
`,(0,v.jsxs)(t.p,{children:[`传入 `,(0,v.jsx)(t.code,{children:`action`}),` 即启用内置请求，无需自行实现 `,(0,v.jsx)(t.code,{children:`customRequest`}),`，进度来自真实的 XHR `,(0,v.jsx)(t.code,{children:`progress`}),` 事件：`]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`<Upload
  action="/api/upload"
  name="file"
  headers={{ Authorization: \`Bearer \${token}\` }}
  data={(file) => ({ filename: file.name })}
  onChange={setFileList}
>
  <Button>上传</Button>
</Upload>
`})}),`
`,(0,v.jsx)(t.h2,{children:`上传前处理文件`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`beforeUpload`}),` 在内置校验（类型/数量/大小）通过之后执行。返回 `,(0,v.jsx)(t.code,{children:`File`}),` 或 `,(0,v.jsx)(t.code,{children:`Blob`}),` 可替换实际上传的文件，用于压缩、转格式等场景；原始文件仍保留在 `,(0,v.jsx)(t.code,{children:`originFile`}),` 上：`]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`<Upload
  action="/api/upload"
  beforeUpload={async (file) => {
    if (!file.type.startsWith("image/")) return true;
    return await compressImage(file);
  }}
>
  <Button>上传图片</Button>
</Upload>
`})}),`
`,(0,v.jsxs)(t.p,{children:[`返回 `,(0,v.jsx)(t.code,{children:`false`}),` 或 reject 则阻止该文件上传。`]}),`
`,(0,v.jsx)(t.h2,{children:`文件夹上传`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`directory`}),` 开启后点击选择整个目录，拖拽时递归遍历子目录。目录内的文件不经过选择器，组件会强制按 `,(0,v.jsx)(t.code,{children:`accept`}),` 过滤：`]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`<Upload directory accept=".png,.jpg" onChange={setFileList}>
  <Button>选择文件夹</Button>
</Upload>
`})})]})}function C(e={}){let{wrapper:t}=e.components||{};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(S,{...e})}):S(e)}export{C as default,x as frontmatter};