import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./Edit-DaMP-Hf8.js";import{t as i}from"./FileEarmark-Dv-TJG3W.js";import{n as a,r as o,t as s}from"./Location-DcaYAuTp.js";import{t as c}from"./FolderOpen-Kge8jzmy.js";import{t as l}from"./button-BE2IGfnk.js";import{t as u}from"./tree-DgPz0q5C.js";var d=n(),f=[{key:`finance`,title:`Finance Analysis`,children:[{key:`finance-annual`,title:`Annual Report`},{key:`finance-budget`,title:`Budget Execution`},{key:`finance-cost`,title:`Cost Breakdown`}]},{key:`sales`,title:`Sales Analysis`,children:[{key:`sales-review`,title:`Performance Review`},{key:`sales-region`,title:`Regional Breakdown`,children:[{key:`sales-region-north`,title:`North Region`},{key:`sales-region-south`,title:`South Region`}]}]},{key:`customer`,title:`Customer Satisfaction`}];function p(){return(0,d.jsx)(`div`,{style:{width:280},children:(0,d.jsx)(u,{treeData:f,defaultExpandedKeys:[`finance`,`sales`],defaultSelectedKeys:[`finance-budget`]})})}var m=`import { Tree } from "lingee-ui";
import type { TreeNodeData } from "lingee-ui";

const treeData: TreeNodeData[] = [
  {
    key: "finance",
    title: "Finance Analysis",
    children: [
      { key: "finance-annual", title: "Annual Report" },
      { key: "finance-budget", title: "Budget Execution" },
      { key: "finance-cost", title: "Cost Breakdown" },
    ],
  },
  {
    key: "sales",
    title: "Sales Analysis",
    children: [
      { key: "sales-review", title: "Performance Review" },
      {
        key: "sales-region",
        title: "Regional Breakdown",
        children: [
          { key: "sales-region-north", title: "North Region" },
          { key: "sales-region-south", title: "South Region" },
        ],
      },
    ],
  },
  { key: "customer", title: "Customer Satisfaction" },
];

export default function BasicDemo() {
  return (
    <div style={{ width: 280 }}>
      <Tree
        treeData={treeData}
        defaultExpandedKeys={["finance", "sales"]}
        defaultSelectedKeys={["finance-budget"]}
      />
    </div>
  );
}
`,h=e(t()),g=[{key:`reports`,title:`Reports`,children:[{key:`reports-daily`,title:`Daily Report`},{key:`reports-weekly`,title:`Weekly Report`},{key:`reports-locked`,title:`Archived Report`,disableCheckbox:!0}]},{key:`dashboards`,title:`Dashboards`,children:[{key:`dashboards-sales`,title:`Sales Overview`},{key:`dashboards-finance`,title:`Finance Overview`}]}];function _(){let[e,t]=(0,h.useState)([`reports-daily`]);return(0,d.jsx)(`div`,{style:{width:280},children:(0,d.jsx)(u,{checkable:!0,treeData:g,defaultExpandAll:!0,checkedKeys:e,onCheck:e=>t(e)})})}var v=`import { useState } from "react";
import { Tree } from "lingee-ui";
import type { TreeNodeData } from "lingee-ui";
import type { Key } from "react";

const treeData: TreeNodeData[] = [
  {
    key: "reports",
    title: "Reports",
    children: [
      { key: "reports-daily", title: "Daily Report" },
      { key: "reports-weekly", title: "Weekly Report" },
      { key: "reports-locked", title: "Archived Report", disableCheckbox: true },
    ],
  },
  {
    key: "dashboards",
    title: "Dashboards",
    children: [
      { key: "dashboards-sales", title: "Sales Overview" },
      { key: "dashboards-finance", title: "Finance Overview" },
    ],
  },
];

export default function CheckableDemo() {
  const [checkedKeys, setCheckedKeys] = useState<Key[]>(["reports-daily"]);

  return (
    <div style={{ width: 280 }}>
      <Tree
        checkable
        treeData={treeData}
        defaultExpandAll
        checkedKeys={checkedKeys}
        onCheck={(keys) => setCheckedKeys(keys as Key[])}
      />
    </div>
  );
}
`,y=[{key:`docs`,title:`Documents`,children:[{key:`docs-spec`,title:`spec.md`,isLeaf:!0},{key:`docs-guide`,title:`guide.md`,isLeaf:!0}]},{key:`assets`,title:`Assets`,children:[{key:`assets-logo`,title:`logo.svg`,isLeaf:!0}]}];function b(){return(0,d.jsx)(`div`,{style:{width:280},children:(0,d.jsx)(u,{showIcon:!0,treeData:y,defaultExpandedKeys:[`docs`],icon:(e,{expanded:t,isLeaf:n})=>n?(0,d.jsx)(i,{size:16}):t?(0,d.jsx)(c,{size:16}):(0,d.jsx)(o,{size:16})})})}var x=`import { Tree } from "lingee-ui";
import { Folder, FolderOpen, FileEarmark } from "lingee-icon";
import type { TreeNodeData } from "lingee-ui";

const treeData: TreeNodeData[] = [
  {
    key: "docs",
    title: "Documents",
    children: [
      { key: "docs-spec", title: "spec.md", isLeaf: true },
      { key: "docs-guide", title: "guide.md", isLeaf: true },
    ],
  },
  {
    key: "assets",
    title: "Assets",
    children: [{ key: "assets-logo", title: "logo.svg", isLeaf: true }],
  },
];

export default function IconDemo() {
  return (
    <div style={{ width: 280 }}>
      <Tree
        showIcon
        treeData={treeData}
        defaultExpandedKeys={["docs"]}
        // 目录随展开态切换开 / 合两种图标，叶子固定为文件图标
        icon={(_node, { expanded, isLeaf }) => {
          if (isLeaf) return <FileEarmark size={16} />;
          return expanded ? <FolderOpen size={16} /> : <Folder size={16} />;
        }}
      />
    </div>
  );
}
`;function S(){let[e,t]=(0,h.useState)(`None`),n=e=>t(`Edit ${e.title}`),f=e=>({disabled:n})=>(0,d.jsx)(l,{variant:`text`,size:`sm`,shape:`circle`,icon:(0,d.jsx)(a,{size:16}),"aria-label":`More ${e}`,tooltip:`More`,disabled:n,onClick:()=>t(`More ${e}`)}),p=[{key:`group-1`,title:`Group 1`,children:[{key:`item-1`,title:`Item 1`,treeItem:{tag:{content:`Tag 1`},action:{icon:(0,d.jsx)(r,{size:16}),ariaLabel:`Edit Item 1`,onClick:n},extra:f(`Item 1`)}},{key:`item-2`,title:`Item 2`,treeItem:{tag:{content:`Tag 2`,color:`info`},extra:(0,d.jsx)(s,{size:16,"aria-hidden":!0})}},{key:`item-3`,title:`Item 3`,disabled:!0,treeItem:{tag:{content:`Tag 3`},action:{icon:(0,d.jsx)(r,{size:16}),ariaLabel:`Edit Item 3`,onClick:n},extra:f(`Item 3`)}}]}];return(0,d.jsxs)(`div`,{style:{width:336},children:[(0,d.jsx)(u,{treeData:p,defaultExpandAll:!0,showIcon:!0,icon:(e,{expanded:t,isLeaf:n})=>n?(0,d.jsx)(i,{size:16}):t?(0,d.jsx)(c,{size:16}):(0,d.jsx)(o,{size:16})}),(0,d.jsxs)(`p`,{children:[`Last action: `,e]})]})}var C=`import { useState } from "react";
import { Button, Tree } from "lingee-ui";
import { Edit, FileEarmark, Folder, FolderOpen, LayoutDashboard, Location } from "lingee-icon";
import type { TreeNodeData } from "lingee-ui";

export default function ItemContentDemo() {
  const [lastAction, setLastAction] = useState("None");

  const handleEdit = (node: TreeNodeData) => setLastAction(\`Edit \${node.title}\`);

  // extra 的回调形式能拿到 Tree / 节点的禁用态，自定义控件需自行同步
  const renderMore =
    (title: string) =>
    ({ disabled }: { disabled: boolean }) => (
      <Button
        variant="text"
        size="sm"
        shape="circle"
        icon={<LayoutDashboard size={16} />}
        aria-label={\`More \${title}\`}
        tooltip="More"
        disabled={disabled}
        onClick={() => setLastAction(\`More \${title}\`)}
      />
    );

  const treeData: TreeNodeData[] = [
    {
      key: "group-1",
      title: "Group 1",
      children: [
        {
          key: "item-1",
          title: "Item 1",
          treeItem: {
            tag: { content: "Tag 1" },
            action: { icon: <Edit size={16} />, ariaLabel: "Edit Item 1", onClick: handleEdit },
            extra: renderMore("Item 1"),
          },
        },
        {
          key: "item-2",
          title: "Item 2",
          treeItem: {
            tag: { content: "Tag 2", color: "info" },
            extra: <Location size={16} aria-hidden />,
          },
        },
        {
          key: "item-3",
          title: "Item 3",
          disabled: true,
          treeItem: {
            tag: { content: "Tag 3" },
            action: { icon: <Edit size={16} />, ariaLabel: "Edit Item 3", onClick: handleEdit },
            extra: renderMore("Item 3"),
          },
        },
      ],
    },
  ];

  return (
    <div style={{ width: 336 }}>
      <Tree
        treeData={treeData}
        defaultExpandAll
        showIcon
        icon={(_node, { expanded, isLeaf }) => {
          if (isLeaf) return <FileEarmark size={16} />;
          return expanded ? <FolderOpen size={16} /> : <Folder size={16} />;
        }}
      />
      <p>Last action: {lastAction}</p>
    </div>
  );
}
`,w=[{key:`folder`,title:`Workspace`,children:[{key:`session-1`,title:`Annual Finance Topic`},{key:`session-2`,title:`Sales Analysis Topic`},{key:`session-3`,title:`Customer Satisfaction`}]}];function T(){return(0,d.jsxs)(`div`,{style:{width:280},className:`demo-tree-actions`,children:[(0,d.jsx)(`style`,{children:`
        .demo-tree-actions .lg-tree-title { display: flex; align-items: center; gap: 4px; }
        .demo-tree-actions .demo-tree-actions__label {
          flex: 1; min-width: 0; overflow: hidden;
          white-space: nowrap; text-overflow: ellipsis;
        }
        .demo-tree-actions .demo-tree-actions__ops { display: none; flex-shrink: 0; gap: 4px; }
        .demo-tree-actions .lg-tree-node-content-wrapper:hover .demo-tree-actions__ops { display: flex; }
      `}),(0,d.jsx)(u,{treeData:w,defaultExpandAll:!0,titleRender:e=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`span`,{className:`demo-tree-actions__label`,children:e.title}),(0,d.jsxs)(`span`,{className:`demo-tree-actions__ops`,onClick:e=>e.stopPropagation(),children:[(0,d.jsx)(l,{variant:`link`,size:`sm`,shape:`round`,icon:(0,d.jsx)(r,{size:14}),children:`Edit`}),(0,d.jsx)(l,{variant:`text`,size:`sm`,shape:`circle`,icon:(0,d.jsx)(a,{size:16}),"aria-label":`Open dashboard`})]})]})})]})}var E=`import { Tree, Button } from "lingee-ui";
import { Edit, LayoutDashboard } from "lingee-icon";
import type { TreeNodeData } from "lingee-ui";

const treeData: TreeNodeData[] = [
  {
    key: "folder",
    title: "Workspace",
    children: [
      { key: "session-1", title: "Annual Finance Topic" },
      { key: "session-2", title: "Sales Analysis Topic" },
      { key: "session-3", title: "Customer Satisfaction" },
    ],
  },
];

export default function TitleRenderDemo() {
  return (
    <div style={{ width: 280 }} className="demo-tree-actions">
      {/* 行内操作区仅 hover 显现：列表项数量多时常显会过于嘈杂 */}
      <style>{\`
        .demo-tree-actions .lg-tree-title { display: flex; align-items: center; gap: 4px; }
        .demo-tree-actions .demo-tree-actions__label {
          flex: 1; min-width: 0; overflow: hidden;
          white-space: nowrap; text-overflow: ellipsis;
        }
        .demo-tree-actions .demo-tree-actions__ops { display: none; flex-shrink: 0; gap: 4px; }
        .demo-tree-actions .lg-tree-node-content-wrapper:hover .demo-tree-actions__ops { display: flex; }
      \`}</style>
      <Tree
        treeData={treeData}
        defaultExpandAll
        titleRender={(node) => (
          <>
            <span className="demo-tree-actions__label">{node.title}</span>
            {/* 阻止冒泡，避免点操作按钮时误触发节点选中 */}
            <span
              className="demo-tree-actions__ops"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="link" size="sm" shape="round" icon={<Edit size={14} />}>
                Edit
              </Button>
              <Button
                variant="text"
                size="sm"
                shape="circle"
                icon={<LayoutDashboard size={16} />}
                aria-label="Open dashboard"
              />
            </span>
          </>
        )}
      />
    </div>
  );
}
`;function D(e,t,n){return e.map(e=>e.key===t?{...e,children:n}:e.children?{...e,children:D(e.children,t,n)}:e)}var O=[{key:`dept-sales`,title:`Sales Department`},{key:`dept-finance`,title:`Finance Department`},{key:`dept-hr`,title:`HR Department`,isLeaf:!0}];function k(){let[e,t]=(0,h.useState)(O);return(0,d.jsx)(`div`,{style:{width:280},children:(0,d.jsx)(u,{treeData:e,loadData:e=>new Promise(n=>{setTimeout(()=>{t(t=>D(t,String(e.key),[{key:`${e.key}-a`,title:`Team A`,isLeaf:!0},{key:`${e.key}-b`,title:`Team B`,isLeaf:!0}])),n()},800)})})})}var A=`import { useState } from "react";
import { Tree } from "lingee-ui";
import type { TreeNodeData } from "lingee-ui";

/** 按 key 找到目标节点并写入子节点，返回新引用以触发重渲染 */
function attachChildren(
  nodes: TreeNodeData[],
  key: string,
  children: TreeNodeData[],
): TreeNodeData[] {
  return nodes.map((node) => {
    if (node.key === key) return { ...node, children };
    if (node.children) {
      return { ...node, children: attachChildren(node.children, key, children) };
    }
    return node;
  });
}

const initialData: TreeNodeData[] = [
  { key: "dept-sales", title: "Sales Department" },
  { key: "dept-finance", title: "Finance Department" },
  { key: "dept-hr", title: "HR Department", isLeaf: true },
];

export default function AsyncDemo() {
  const [treeData, setTreeData] = useState<TreeNodeData[]>(initialData);

  const loadData = (node: TreeNodeData) =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        setTreeData((prev) =>
          attachChildren(prev, String(node.key), [
            { key: \`\${node.key}-a\`, title: "Team A", isLeaf: true },
            { key: \`\${node.key}-b\`, title: "Team B", isLeaf: true },
          ]),
        );
        resolve();
      }, 800);
    });

  return (
    <div style={{ width: 280 }}>
      <Tree treeData={treeData} loadData={loadData} />
    </div>
  );
}
`,j=[{key:`group-a`,title:`Group A`,children:[{key:`a-1`,title:`Item A-1`},{key:`a-2`,title:`Item A-2`}]},{key:`group-b`,title:`Group B`,children:[{key:`b-1`,title:`Item B-1`},{key:`b-2`,title:`Item B-2`}]}];function M(e,t){let n,r=e=>e.reduce((e,i)=>i.key===t?(n=i,e):(e.push(i.children?{...i,children:r(i.children)}:i),e),[]),i=r(e);return{removed:n,rest:i}}function N(e,t,n,r,i){let a=e.findIndex(e=>e.key===t);if(a!==-1){if(!r){let t=e[a],r=[...e];return r[a]={...t,children:[...t.children??[],n]},r}let t=[...e];return t.splice(i>a?a+1:a,0,n),t}return e.map(e=>e.children?{...e,children:N(e.children,t,n,r,i)}:e)}function P(){let[e,t]=(0,h.useState)(j);return(0,d.jsx)(`div`,{style:{width:280},children:(0,d.jsx)(u,{treeData:e,defaultExpandAll:!0,draggable:!0,onDrop:n=>{let{removed:r,rest:i}=M(e,String(n.dragNode.key));r&&t(N(i,String(n.node.key),r,n.dropToGap,n.dropPosition))}})})}var F=`import { useState } from "react";
import { Tree } from "lingee-ui";
import type { TreeNodeData, TreeDropInfo } from "lingee-ui";

const initialData: TreeNodeData[] = [
  {
    key: "group-a",
    title: "Group A",
    children: [
      { key: "a-1", title: "Item A-1" },
      { key: "a-2", title: "Item A-2" },
    ],
  },
  {
    key: "group-b",
    title: "Group B",
    children: [
      { key: "b-1", title: "Item B-1" },
      { key: "b-2", title: "Item B-2" },
    ],
  },
];

/** 从树中摘除指定节点，返回被摘除的节点与剩余树 */
function detach(
  nodes: TreeNodeData[],
  key: string,
): { removed?: TreeNodeData; rest: TreeNodeData[] } {
  let removed: TreeNodeData | undefined;

  const walk = (list: TreeNodeData[]): TreeNodeData[] =>
    list.reduce<TreeNodeData[]>((acc, node) => {
      if (node.key === key) {
        removed = node;
        return acc;
      }
      acc.push(node.children ? { ...node, children: walk(node.children) } : node);
      return acc;
    }, []);

  // 必须先遍历再取 removed：对象字面量按书写顺序求值，
  // 写成 { removed, rest: walk(nodes) } 会在 walk 执行前就读到 undefined
  const rest = walk(nodes);
  return { removed, rest };
}

/**
 * 把节点插入到目标位置：落在节点内部时追加为子节点，落在间隙时插入为兄弟节点。
 *
 * dropPosition 是「目标在其父级中的索引 + 落点偏移」的绝对值，
 * 不是 -1/0/1，故需与目标自身索引比较才能判断插在其前还是其后。
 */
function insert(
  nodes: TreeNodeData[],
  targetKey: string,
  node: TreeNodeData,
  toGap: boolean,
  dropPosition: number,
): TreeNodeData[] {
  const index = nodes.findIndex((item) => item.key === targetKey);

  if (index !== -1) {
    if (!toGap) {
      const target = nodes[index];
      const next = [...nodes];
      next[index] = { ...target, children: [...(target.children ?? []), node] };
      return next;
    }
    const next = [...nodes];
    // dropPosition 大于目标索引说明落在其下方
    next.splice(dropPosition > index ? index + 1 : index, 0, node);
    return next;
  }

  return nodes.map((item) =>
    item.children
      ? { ...item, children: insert(item.children, targetKey, node, toGap, dropPosition) }
      : item,
  );
}

export default function DraggableDemo() {
  const [treeData, setTreeData] = useState<TreeNodeData[]>(initialData);

  const handleDrop = (info: TreeDropInfo) => {
    const { removed, rest } = detach(treeData, String(info.dragNode.key));
    if (!removed) return;
    setTreeData(
      insert(rest, String(info.node.key), removed, info.dropToGap, info.dropPosition),
    );
  };

  return (
    <div style={{ width: 280 }}>
      <Tree treeData={treeData} defaultExpandAll draggable onDrop={handleDrop} />
    </div>
  );
}
`,I=Array.from({length:20},(e,t)=>({key:`group-${t}`,title:`Group ${t+1}`,children:Array.from({length:20},(e,n)=>({key:`group-${t}-item-${n}`,title:`Item ${t+1}-${n+1}`,isLeaf:!0}))}));function L(){return(0,d.jsx)(`div`,{style:{width:280},children:(0,d.jsx)(u,{treeData:I,defaultExpandAll:!0,height:320})})}var R=`import { Tree } from "lingee-ui";
import type { TreeNodeData } from "lingee-ui";

// 20 组 × 20 项，共 420 个节点，用于验证虚拟滚动
const treeData: TreeNodeData[] = Array.from({ length: 20 }, (_, groupIndex) => ({
  key: \`group-\${groupIndex}\`,
  title: \`Group \${groupIndex + 1}\`,
  children: Array.from({ length: 20 }, (_, itemIndex) => ({
    key: \`group-\${groupIndex}-item-\${itemIndex}\`,
    title: \`Item \${groupIndex + 1}-\${itemIndex + 1}\`,
    isLeaf: true,
  })),
}));

export default function VirtualDemo() {
  return (
    <div style={{ width: 280 }}>
      <Tree treeData={treeData} defaultExpandAll height={320} />
    </div>
  );
}
`;export{A as a,T as c,x as d,b as f,p as g,m as h,P as i,C as l,_ as m,L as n,k as o,v as p,F as r,E as s,R as t,S as u};