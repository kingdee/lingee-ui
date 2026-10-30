import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{j as r}from"./tooltip-DJNKKjxB.js";import{n as i}from"./provider-ViaVeHt0.js";import{t as a}from"./button-BE2IGfnk.js";import{i as o,r as s,t as c}from"./popover-Bn-puzws.js";import{t as l}from"./empty-Crrpg7I8.js";import{t as u}from"./dialog-BqegPPE2.js";import{t as d}from"./style-8aFUjQwH.js";import{t as f}from"./tree-CxytMqG8.js";var p=e(t()),m=n(),h=()=>{};function g(e){return(0,p.useMemo)(()=>{let t=new Map,n=e=>e.map(e=>(t.set(e.value,e),{key:e.value,title:e.title,disabled:e.disabled,children:e.children?.length?n(e.children):void 0}));return{tree:n(e),nodeMap:t}},[e])}var _=p.forwardRef((e,t)=>{let{treeData:n,value:a,defaultValue:u,onChange:_,placeholder:v,disabled:y=!1,error:b=!1,allowClear:x=!1,size:S=`md`,defaultExpandAll:C=!1,notFoundContent:w,dropdown:T,className:E,style:D}=e,O=i(`TreeSelect`),[k,A]=(0,p.useState)(!1),[j,M]=(0,p.useState)(u),N=(0,p.useRef)(null),P=(0,p.useRef)(null),F=`value`in e,I=F?a:j,{tree:L,nodeMap:R}=g(n),z=I===void 0?void 0:R.get(I),B=(0,p.useMemo)(()=>I===void 0?[]:[I],[I]),V=(0,p.useMemo)(()=>I===void 0?[]:[{value:I,label:z?.title??I}],[I,z]),H=(0,p.useCallback)(e=>{F||M(e),_?.(e,e===void 0?void 0:R.get(e))},[F,R,_]),U=(0,p.useCallback)(e=>{y||A(e)},[y]),W={width:T?.width===`auto`?void 0:T?.width??N.current?.offsetWidth,...T?.maxHeight?{"--_tree-select-max-height":`${T.maxHeight}px`}:{}};return(0,m.jsx)(`div`,{ref:t,className:r(`lg-select`,`lg-tree-select`,E),style:D,children:(0,m.jsxs)(c,{open:k,onOpenChange:U,children:[(0,m.jsx)(o,{children:(0,m.jsx)(d,{ref:N,mode:`single`,size:S,open:k,disabled:y,error:b,placeholder:v,allowClear:x,showSearch:!1,searchValue:``,searchInputRef:P,onSearchChange:h,selectedValues:B,options:V,onRemove:h,onClear:()=>H(void 0),onClick:e=>{e.preventDefault(),U(!k)},onKeyDown:e=>{(e.key===`Enter`||e.key===` `||e.key===`ArrowDown`)&&(e.preventDefault(),U(!0))}})}),(0,m.jsx)(s,{className:r(`lg-select-popover`,`lg-tree-select__popover`,T?.className),side:`bottom`,align:`start`,sideOffset:4,collisionPadding:8,container:T?.container,style:W,children:L.length>0?(0,m.jsx)(`div`,{className:`lg-tree-select__body`,children:(0,m.jsx)(f,{treeData:L,selectedKeys:B,defaultExpandAll:C,onSelect:(e,t)=>{H(String(t.node.key)),A(!1)}})}):(0,m.jsx)(`div`,{className:`lg-select-dropdown__status`,children:w??(0,m.jsx)(l.Card,{size:`md`,status:`empty`,description:O.empty})})})]})})});_.displayName=`TreeSelect`;var v=[{value:`folder-1`,title:`Folder 1`,children:[{value:`folder-1-1`,title:`Folder 1-1`},{value:`folder-1-2`,title:`Folder 1-2`}]},{value:`folder-2`,title:`Folder 2`,children:[{value:`folder-2-1`,title:`Folder 2-1`}]}];function y(){let[e,t]=(0,p.useState)();return(0,m.jsx)(`div`,{style:{width:280},children:(0,m.jsx)(_,{treeData:v,value:e,onChange:t,placeholder:`Select a folder`,defaultExpandAll:!0,allowClear:!0})})}var b=`import { useState } from "react";
import { TreeSelect } from "lingee-ui";
import type { TreeSelectNode } from "lingee-ui";

const treeData: TreeSelectNode[] = [
  {
    value: "folder-1",
    title: "Folder 1",
    children: [
      { value: "folder-1-1", title: "Folder 1-1" },
      { value: "folder-1-2", title: "Folder 1-2" },
    ],
  },
  {
    value: "folder-2",
    title: "Folder 2",
    children: [{ value: "folder-2-1", title: "Folder 2-1" }],
  },
];

export default function BasicDemo() {
  const [value, setValue] = useState<string>();

  return (
    <div style={{ width: 280 }}>
      <TreeSelect
        treeData={treeData}
        value={value}
        onChange={setValue}
        placeholder="Select a folder"
        defaultExpandAll
        allowClear
      />
    </div>
  );
}
`,x=[{value:`node-1`,title:`Node 1`,children:[{value:`node-1-1`,title:`Node 1-1`},{value:`node-1-2`,title:`Node 1-2 (disabled)`,disabled:!0}]}];function S(){return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,width:280},children:[(0,m.jsx)(_,{treeData:x,defaultValue:`node-1-1`,defaultExpandAll:!0}),(0,m.jsx)(_,{treeData:x,defaultValue:`node-1-1`,disabled:!0}),(0,m.jsx)(_,{treeData:x,placeholder:`Error state`,error:!0})]})}var C=`import { TreeSelect } from "lingee-ui";
import type { TreeSelectNode } from "lingee-ui";

const treeData: TreeSelectNode[] = [
  {
    value: "node-1",
    title: "Node 1",
    children: [
      { value: "node-1-1", title: "Node 1-1" },
      { value: "node-1-2", title: "Node 1-2 (disabled)", disabled: true },
    ],
  },
];

export default function DisabledDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 280 }}>
      <TreeSelect treeData={treeData} defaultValue="node-1-1" defaultExpandAll />
      <TreeSelect treeData={treeData} defaultValue="node-1-1" disabled />
      <TreeSelect treeData={treeData} placeholder="Error state" error />
    </div>
  );
}
`,w=[{value:`node-1`,title:`Node 1`,children:[{value:`node-1-1`,title:`Node 1-1 with a title longer than the trigger`},{value:`node-1-2`,title:`Node 1-2`}]}],T=[`sm`,`md`,`lg`];function E(){return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,width:280},children:[T.map(e=>(0,m.jsx)(_,{size:e,treeData:w,defaultValue:`node-1-2`,defaultExpandAll:!0},e)),(0,m.jsx)(_,{style:{width:160},treeData:w,placeholder:`Auto width`,defaultExpandAll:!0,dropdown:{width:`auto`}}),(0,m.jsx)(_,{treeData:[],placeholder:`Custom empty content`,notFoundContent:`Nothing here`})]})}var D=`import { TreeSelect } from "lingee-ui";
import type { TreeSelectNode, TreeSelectSize } from "lingee-ui";

const treeData: TreeSelectNode[] = [
  {
    value: "node-1",
    title: "Node 1",
    children: [
      { value: "node-1-1", title: "Node 1-1 with a title longer than the trigger" },
      { value: "node-1-2", title: "Node 1-2" },
    ],
  },
];

const SIZES: TreeSelectSize[] = ["sm", "md", "lg"];

export default function DropdownDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 280 }}>
      {SIZES.map((size) => (
        <TreeSelect
          key={size}
          size={size}
          treeData={treeData}
          defaultValue="node-1-2"
          defaultExpandAll
        />
      ))}
      <TreeSelect
        style={{ width: 160 }}
        treeData={treeData}
        placeholder="Auto width"
        defaultExpandAll
        dropdown={{ width: "auto" }}
      />
      <TreeSelect treeData={[]} placeholder="Custom empty content" notFoundContent="Nothing here" />
    </div>
  );
}
`,O=[{id:`c1`,name:`Folder 1`,children:[{id:`c1-1`,name:`Folder 1-1`,children:[]},{id:`c1-2`,name:`Folder 1-2`,children:[{id:`c1-2-1`,name:`Folder 1-2-1`}]}]},{id:`c2`,name:`Folder 2`,children:Array.from({length:8},(e,t)=>({id:`c2-${t+1}`,name:`Folder 2-${t+1}`}))},{id:`c3`,name:`Folder 3`,children:[]}];function k(e){return e.map(e=>({value:e.id,title:e.name,children:e.children?.length?k(e.children):void 0}))}function A(){let[e,t]=(0,p.useState)(!1),[n,r]=(0,p.useState)(``);return(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,m.jsx)(a,{onClick:()=>t(!0),children:`Open dialog`}),(0,m.jsxs)(`span`,{style:{fontSize:12,color:`var(--lg-g-fg-color-black-faint)`},children:[`Selected: `,n||`none`]}),(0,m.jsx)(u,{open:e,onOpenChange:t,title:`Folder`,width:480,footer:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{variant:`text`,onClick:()=>t(!1),children:`Cancel`}),(0,m.jsx)(a,{variant:`primary`,disabled:!n,onClick:()=>t(!1),children:`Confirm`})]}),children:(0,m.jsx)(`div`,{style:{padding:`0 20px`},children:(0,m.jsx)(_,{value:n||void 0,onChange:e=>r(e??``),treeData:k(O),placeholder:`Select a folder`,defaultExpandAll:!0,dropdown:{maxHeight:300},allowClear:!0})})})]})}var j=`import { useState } from "react";
import { Button, Dialog, TreeSelect } from "lingee-ui";
import type { TreeSelectNode } from "lingee-ui";

// 接口返回的目录结构，children 可能是空数组
interface Category {
  id: string;
  name: string;
  children?: Category[];
}

const categories: Category[] = [
  {
    id: "c1",
    name: "Folder 1",
    children: [
      { id: "c1-1", name: "Folder 1-1", children: [] },
      { id: "c1-2", name: "Folder 1-2", children: [{ id: "c1-2-1", name: "Folder 1-2-1" }] },
    ],
  },
  {
    id: "c2",
    name: "Folder 2",
    children: Array.from({ length: 8 }, (_, index) => ({
      id: \`c2-\${index + 1}\`,
      name: \`Folder 2-\${index + 1}\`,
    })),
  },
  { id: "c3", name: "Folder 3", children: [] },
];

// 空数组映射为 undefined，避免渲染出可展开但没有内容的节点
function buildTreeData(nodes: Category[]): TreeSelectNode[] {
  return nodes.map((node) => ({
    value: node.id,
    title: node.name,
    children: node.children?.length ? buildTreeData(node.children) : undefined,
  }));
}

export default function InDialogDemo() {
  const [open, setOpen] = useState(false);
  // 外部状态用空字符串表示未选，传给组件时转成 undefined（受控空值）
  const [category, setCategory] = useState("");

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <span style={{ fontSize: 12, color: "var(--lg-g-fg-color-black-faint)" }}>
        Selected: {category || "none"}
      </span>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Folder"
        width={480}
        footer={
          <>
            <Button variant="text" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" disabled={!category} onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </>
        }
      >
        {/* Dialog 内容区不带内边距，与标题栏、底栏的 20px 对齐 */}
        <div style={{ padding: "0 20px" }}>
          <TreeSelect
            value={category || undefined}
            onChange={(value) => setCategory(value ?? "")}
            // 每次渲染都重新映射，与直接消费接口数据的写法一致
            treeData={buildTreeData(categories)}
            placeholder="Select a folder"
            defaultExpandAll
            dropdown={{ maxHeight: 300 }}
            allowClear
          />
        </div>
      </Dialog>
    </div>
  );
}
`;export{C as a,y as c,E as i,A as n,S as o,D as r,b as s,j as t};