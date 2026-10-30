import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{n as r}from"./SlashLg-DUwpE87z.js";import{t as i}from"./ChevronRight-B_1Kogus.js";import{t as a}from"./button-BE2IGfnk.js";import{t as o}from"./breadcrumb-rB11a-xB.js";import{t as s}from"./slider-DXCHPogk.js";var c=n();function l(){return(0,c.jsx)(o,{items:[{key:`home`,label:`Home`,icon:(0,c.jsx)(r,{}),onClick:()=>{}},{key:`list`,label:`List`,onClick:()=>{}},{key:`detail`,label:`Detail`}]})}var u=`import { Breadcrumb } from "lingee-ui";
import { House } from "lingee-icon";

/**
 * Breadcrumb 基础用法
 *
 * 最后一项为当前页，自动加粗且不可点击。其余项传 onClick 做路由跳转
 * （示例内为空实现），需要整页导航时改传 href。
 */
export default function BasicDemo() {
  return (
    <Breadcrumb
      items={[
        { key: "home", label: "Home", icon: <House />, onClick: () => {} },
        { key: "list", label: "List", onClick: () => {} },
        { key: "detail", label: "Detail" },
      ]}
    />
  );
}
`,d=[{key:`home`,label:`Home`,onClick:()=>{}},{key:`list`,label:`List`,onClick:()=>{}},{key:`detail`,label:`Detail`}];function f(){return(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,c.jsx)(o,{size:`md`,items:d}),(0,c.jsx)(o,{size:`sm`,items:d})]})}var p=`import { Breadcrumb } from "lingee-ui";

const items = [
  { key: "home", label: "Home", onClick: () => {} },
  { key: "list", label: "List", onClick: () => {} },
  { key: "detail", label: "Detail" },
];

/**
 * Breadcrumb 尺寸
 *
 * 默认分隔符随尺寸变化：md 为斜杠，sm 为尖括号。
 */
export default function SizesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Breadcrumb size="md" items={items} />
      <Breadcrumb size="sm" items={items} />
    </div>
  );
}
`,m=[{key:`home`,label:`Home`,onClick:()=>{}},{key:`category`,label:`Category`,onClick:()=>{}},{key:`details`,label:`Details`}];function h(){return(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,c.jsx)(o,{items:m,separator:(0,c.jsx)(i,{})}),(0,c.jsx)(o,{items:m,separator:`›`})]})}var g=`import { Breadcrumb } from "lingee-ui";
import { ChevronRight } from "lingee-icon";

const items = [
  { key: "home", label: "Home", onClick: () => {} },
  { key: "category", label: "Category", onClick: () => {} },
  { key: "details", label: "Details" },
];

/**
 * Breadcrumb 自定义分隔符
 *
 * separator 接受任意 ReactNode，图标与纯文本均可。
 */
export default function SeparatorDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Breadcrumb items={items} separator={<ChevronRight />} />
      <Breadcrumb items={items} separator="›" />
    </div>
  );
}
`,_=[{key:`home`,label:`Home`,onClick:()=>{}},{key:`level-1`,label:`Level 1`,onClick:()=>{}},{key:`level-2`,label:`Level 2`,onClick:()=>{}},{key:`level-3`,label:`Level 3`,onClick:()=>{}},{key:`current`,label:`Current page`}];function v(){return(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,c.jsx)(o,{items:_,maxItems:3}),(0,c.jsx)(o,{items:[{key:`home`,label:`Home`,onClick:()=>{}},{key:`long`,label:`A folder name long enough to be truncated`,onClick:()=>{}},{key:`current`,label:`Current page`}],itemMaxWidth:160}),(0,c.jsx)(o,{items:_,maxItems:3,onBack:()=>{}})]})}var y=`import { Breadcrumb } from "lingee-ui";

const longPath = [
  { key: "home", label: "Home", onClick: () => {} },
  { key: "level-1", label: "Level 1", onClick: () => {} },
  { key: "level-2", label: "Level 2", onClick: () => {} },
  { key: "level-3", label: "Level 3", onClick: () => {} },
  { key: "current", label: "Current page" },
];

/**
 * Breadcrumb 长路径处理
 *
 * maxItems 把中间项收进下拉菜单，itemMaxWidth 限制单项宽度并打点，
 * onBack 在最前面补一个返回箭头。三者可独立使用。
 */
export default function CollapseDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Breadcrumb items={longPath} maxItems={3} />
      <Breadcrumb
        items={[
          { key: "home", label: "Home", onClick: () => {} },
          { key: "long", label: "A folder name long enough to be truncated", onClick: () => {} },
          { key: "current", label: "Current page" },
        ]}
        itemMaxWidth={160}
      />
      <Breadcrumb items={longPath} maxItems={3} onBack={() => {}} />
    </div>
  );
}
`,b=e(t()),x=()=>{},S=[{key:`root`,label:`Organization root with a long name`,onClick:x},{key:`level-1`,label:`Level 1`,onClick:x},{key:`level-2`,label:`Level 2`,onClick:x},{key:`current`,label:`Current department with a very long name`}],C=[{key:`root`,label:`Organization root`,onClick:x},{key:`level-1`,label:`Level 1 department`,onClick:x},{key:`level-2`,label:`Level 2 department`,onClick:x},{key:`current`,label:`Current page with a long name`}],w=[{key:`root`,icon:(0,c.jsx)(r,{}),onClick:x},{key:`level-1`,label:`Level 1`,onClick:x},{key:`level-2`,label:`Level 2`,onClick:x},{key:`current`,label:`Current department with a very long name`}],T={margin:0,fontSize:13,color:`var(--lg-g-fg-color-black-muted)`};function E(){let[e,t]=(0,b.useState)([360]),n={width:e[0],padding:`8px 12px`,border:`1px dashed var(--lg-g-border-color-black-soft)`,borderRadius:8};return(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,c.jsxs)(`p`,{style:T,children:[`Container width: `,e[0],`px`]}),(0,c.jsx)(s,{value:e,onChange:t,min:120,max:640,style:{width:240}})]}),(0,c.jsx)(`p`,{style:T,children:`maxItems=3 — the collapsed ellipsis never shrinks`}),(0,c.jsx)(`div`,{style:n,children:(0,c.jsx)(o,{items:S,maxItems:3})}),(0,c.jsx)(`p`,{style:T,children:`No collapsing — first, then middle, then the current page`}),(0,c.jsx)(`div`,{style:n,children:(0,c.jsx)(o,{items:C})}),(0,c.jsx)(`p`,{style:T,children:`Icon-only root — icons and separators never shrink`}),(0,c.jsx)(`div`,{style:n,children:(0,c.jsx)(o,{items:w,maxItems:3})})]})}var D=`import { useState } from "react";
import { Breadcrumb, Slider } from "lingee-ui";
import { House } from "lingee-icon";

const noop = () => {};

// 名称刻意取长：文字放不下时才看得到收缩次序
const collapsedPath = [
  { key: "root", label: "Organization root with a long name", onClick: noop },
  { key: "level-1", label: "Level 1", onClick: noop },
  { key: "level-2", label: "Level 2", onClick: noop },
  { key: "current", label: "Current department with a very long name" },
];

const fullPath = [
  { key: "root", label: "Organization root", onClick: noop },
  { key: "level-1", label: "Level 1 department", onClick: noop },
  { key: "level-2", label: "Level 2 department", onClick: noop },
  { key: "current", label: "Current page with a long name" },
];

const iconRootPath = [
  { key: "root", icon: <House />, onClick: noop },
  { key: "level-1", label: "Level 1", onClick: noop },
  { key: "level-2", label: "Level 2", onClick: noop },
  { key: "current", label: "Current department with a very long name" },
];

const captionStyle = {
  margin: 0,
  fontSize: 13,
  color: "var(--lg-g-fg-color-black-muted)",
} as const;

/**
 * Breadcrumb 宽度不足时的收缩次序
 *
 * 拖动滑块改变容器宽度：首项最先省略、最少保留一个字 → 其次中间项 → 最后当前页。
 * 折叠出的省略号、图标与分隔符始终完整。悬停被省略的文字可查看完整内容。
 */
export default function ShrinkDemo() {
  const [width, setWidth] = useState([360]);

  const boxStyle = {
    width: width[0],
    padding: "8px 12px",
    border: "1px dashed var(--lg-g-border-color-black-soft)",
    borderRadius: 8,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <p style={captionStyle}>Container width: {width[0]}px</p>
        <Slider value={width} onChange={setWidth} min={120} max={640} style={{ width: 240 }} />
      </div>

      <p style={captionStyle}>maxItems=3 — the collapsed ellipsis never shrinks</p>
      <div style={boxStyle}>
        <Breadcrumb items={collapsedPath} maxItems={3} />
      </div>

      <p style={captionStyle}>No collapsing — first, then middle, then the current page</p>
      <div style={boxStyle}>
        <Breadcrumb items={fullPath} />
      </div>

      <p style={captionStyle}>Icon-only root — icons and separators never shrink</p>
      <div style={boxStyle}>
        <Breadcrumb items={iconRootPath} maxItems={3} />
      </div>
    </div>
  );
}
`,O=[{id:`division-a`,name:`Division A with a fairly long name`,children:[{id:`department-a1`,name:`Department A1`,children:[{id:`team-x`,name:`Team X with an extra long name`,children:[{id:`squad-1`,name:`Squad 1`,children:[{id:`group-alpha`,name:`Working group alpha`}]},{id:`squad-2`,name:`Squad 2`}]},{id:`team-y`,name:`Team Y`}]},{id:`department-a2`,name:`Department A2`}]},{id:`division-b`,name:`Division B`,children:[{id:`department-b1`,name:`Department B1`}]}],k={padding:`8px 0`,fontSize:13,color:`var(--lg-g-fg-color-black-muted)`};function A(){let[e,t]=(0,b.useState)([]),n=e.length>0?e[e.length-1].children??[]:O,s=(0,b.useMemo)(()=>[{key:`root`,icon:(0,c.jsx)(r,{size:16}),onClick:()=>t([])},...e.map((n,r)=>({key:n.id,label:n.name,onClick:()=>t(e.slice(0,r+1))}))],[e]);return(0,c.jsxs)(`div`,{style:{width:291,padding:`8px 10px`,border:`1px solid var(--lg-g-border-color-black-soft)`,borderRadius:8},children:[(0,c.jsx)(o,{items:s,maxItems:3}),(0,c.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,marginTop:8},children:n.length===0?(0,c.jsx)(`span`,{style:k,children:`No sub levels`}):n.map(n=>(0,c.jsx)(a,{variant:`text`,icon:n.children?(0,c.jsx)(i,{}):void 0,iconPosition:`end`,disabled:!n.children,onClick:()=>t([...e,n]),style:{justifyContent:`space-between`},children:n.name},n.id))})]})}var j=`import { useMemo, useState } from "react";
import { Breadcrumb, Button } from "lingee-ui";
import type { BreadcrumbItem } from "lingee-ui";
import { ChevronRight, House } from "lingee-icon";

interface LevelNode {
  id: string;
  name: string;
  children?: LevelNode[];
}

// 一条足够深、名称足够长的分支，用来同时触发折叠与收缩
const TREE: LevelNode[] = [
  {
    id: "division-a",
    name: "Division A with a fairly long name",
    children: [
      {
        id: "department-a1",
        name: "Department A1",
        children: [
          {
            id: "team-x",
            name: "Team X with an extra long name",
            children: [
              {
                id: "squad-1",
                name: "Squad 1",
                children: [{ id: "group-alpha", name: "Working group alpha" }],
              },
              { id: "squad-2", name: "Squad 2" },
            ],
          },
          { id: "team-y", name: "Team Y" },
        ],
      },
      { id: "department-a2", name: "Department A2" },
    ],
  },
  {
    id: "division-b",
    name: "Division B",
    children: [{ id: "department-b1", name: "Department B1" }],
  },
];

const mutedStyle = {
  padding: "8px 0",
  fontSize: 13,
  color: "var(--lg-g-fg-color-black-muted)",
} as const;

/**
 * Breadcrumb 层级下钻与回跳
 *
 * 291px 宽、首项为房屋图标、maxItems=3，与选人组件左栏一致。点击下方列表逐级下钻，
 * 再通过房屋图标、「…」下拉菜单或可见层级回跳。菜单开着时直接点其它层级同样一次生效。
 */
export default function DrillDownDemo() {
  const [path, setPath] = useState<LevelNode[]>([]);

  const levels = path.length > 0 ? (path[path.length - 1].children ?? []) : TREE;

  const items = useMemo<BreadcrumbItem[]>(
    () => [
      { key: "root", icon: <House size={16} />, onClick: () => setPath([]) },
      ...path.map((node, index) => ({
        key: node.id,
        label: node.name,
        // 末项由 Breadcrumb 自动置为当前页，不会触发
        onClick: () => setPath(path.slice(0, index + 1)),
      })),
    ],
    [path],
  );

  return (
    <div
      style={{
        width: 291,
        padding: "8px 10px",
        border: "1px solid var(--lg-g-border-color-black-soft)",
        borderRadius: 8,
      }}
    >
      <Breadcrumb items={items} maxItems={3} />

      <div style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>
        {levels.length === 0 ? (
          <span style={mutedStyle}>No sub levels</span>
        ) : (
          levels.map((node) => (
            <Button
              key={node.id}
              variant="text"
              icon={node.children ? <ChevronRight /> : undefined}
              iconPosition="end"
              disabled={!node.children}
              onClick={() => setPath([...path, node])}
              style={{ justifyContent: "space-between" }}
            >
              {node.name}
            </Button>
          ))
        )}
      </div>
    </div>
  );
}
`,M=()=>{},N=[{key:`home`,label:`Home`,icon:(0,c.jsx)(r,{}),onClick:M},{key:`level-1`,label:`Level 1 department`,onClick:M},{key:`level-2`,label:`Level 2 department`,onClick:M},{key:`level-3`,label:`Level 3 department`,onClick:M},{key:`level-4`,label:`Level 4 department`,onClick:M},{key:`current`,label:`Current page`}],P={arrows:`hover`},F={maxWidth:420},I={margin:`0 0 8px`,fontSize:13,color:`var(--lg-g-fg-color-black-muted)`};function L(){return(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,c.jsxs)(`div`,{style:F,children:[(0,c.jsx)(`p`,{style:I,children:`overflow="scroll" — every level stays intact, arrows appear on overflow`}),(0,c.jsx)(o,{items:N,overflow:`scroll`})]}),(0,c.jsxs)(`div`,{style:F,children:[(0,c.jsx)(`p`,{style:I,children:`scrollOptions.arrows="hover" — arrows show on hover or keyboard focus`}),(0,c.jsx)(o,{items:N,overflow:`scroll`,scrollOptions:P})]}),(0,c.jsxs)(`div`,{style:F,children:[(0,c.jsx)(`p`,{style:I,children:`size="sm" with onBack`}),(0,c.jsx)(o,{items:N,overflow:`scroll`,size:`sm`,onBack:M})]})]})}var R=`import { Breadcrumb } from "lingee-ui";
import type { BreadcrumbScrollOptions } from "lingee-ui";
import { House } from "lingee-icon";

const noop = () => {};

const longPath = [
  { key: "home", label: "Home", icon: <House />, onClick: noop },
  { key: "level-1", label: "Level 1 department", onClick: noop },
  { key: "level-2", label: "Level 2 department", onClick: noop },
  { key: "level-3", label: "Level 3 department", onClick: noop },
  { key: "level-4", label: "Level 4 department", onClick: noop },
  { key: "current", label: "Current page" },
];

// 提到模块级，避免每次渲染生成新的对象引用
const hoverArrows: BreadcrumbScrollOptions = { arrows: "hover" };

// 固定宽度用于稳定触发溢出，实际使用中由父布局决定
const boxStyle = { maxWidth: 420 } as const;
const captionStyle = {
  margin: "0 0 8px",
  fontSize: 13,
  color: "var(--lg-g-fg-color-black-muted)",
} as const;

/**
 * Breadcrumb 滚动模式
 *
 * overflow="scroll" 完整展示全部层级、不折叠不省略，溢出时两端出现箭头。
 * 初始与层级变化后自动滚到末尾，让当前页可见。
 */
export default function ScrollDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={boxStyle}>
        <p style={captionStyle}>
          overflow="scroll" — every level stays intact, arrows appear on overflow
        </p>
        <Breadcrumb items={longPath} overflow="scroll" />
      </div>

      <div style={boxStyle}>
        <p style={captionStyle}>
          scrollOptions.arrows="hover" — arrows show on hover or keyboard focus
        </p>
        <Breadcrumb items={longPath} overflow="scroll" scrollOptions={hoverArrows} />
      </div>

      <div style={boxStyle}>
        <p style={captionStyle}>size="sm" with onBack</p>
        <Breadcrumb items={longPath} overflow="scroll" size="sm" onBack={noop} />
      </div>
    </div>
  );
}
`;export{D as a,v as c,p as d,f,A as i,g as l,l as m,L as n,E as o,u as p,j as r,y as s,R as t,h as u};