import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{j as r}from"./tooltip-DJNKKjxB.js";import{n as i,r as a,t as o}from"./People-Oxq84oB4.js";import{t as s}from"./Enterprise-BCIcs87R.js";import{t as c}from"./button-BE2IGfnk.js";import{t as l}from"./tag-Blv_TVgm.js";var u=e(t()),d=e=>e!=null&&typeof e!=`boolean`&&e!==``,f=n(),p=u.forwardRef(({time:e,extra:t,title:n,titleLines:i=1,tag:a,description:o,descriptionLines:s=2,footer:c,status:l=`default`,hoverable:u=!1,className:p,style:m,...h},g)=>{let _=d(e),v=d(t),y=v&&!_,b=d(n)||d(a)||y,x=d(o);return(0,f.jsxs)(`div`,{ref:g,className:r(`lg-timeline-card`,l!=="default"&&`lg-timeline-card--${l}`,u&&`lg-timeline-card--hoverable`,p),style:{"--_timeline-card-title-lines":i,"--_timeline-card-description-lines":s,...m},...h,children:[_&&(0,f.jsxs)(`div`,{className:`lg-timeline-card__header`,children:[(0,f.jsx)(`span`,{className:`lg-timeline-card__time`,children:e}),v&&(0,f.jsx)(`span`,{className:`lg-timeline-card__extra`,children:t})]}),(b||x)&&(0,f.jsxs)(`div`,{className:`lg-timeline-card__main`,children:[b&&(0,f.jsxs)(`div`,{className:`lg-timeline-card__title-row`,children:[d(n)&&(0,f.jsx)(`div`,{className:r(`lg-timeline-card__title`,i>1&&`lg-timeline-card__title--multiline`),children:n}),d(a)&&(0,f.jsx)(`span`,{className:`lg-timeline-card__tag`,children:a}),y&&(0,f.jsx)(`span`,{className:`lg-timeline-card__extra`,children:t})]}),x&&(0,f.jsx)(`div`,{className:`lg-timeline-card__description`,children:o})]}),d(c)&&(0,f.jsx)(`div`,{className:`lg-timeline-card__footer`,children:c})]})});p.displayName=`TimelineCard`;var m=u.forwardRef(({items:e,className:t,style:n},i)=>{let a=e.some(e=>d(e.time));return(0,f.jsx)(`ol`,{ref:i,className:r(`lg-timeline`,a&&`lg-timeline--with-time`,t),style:n,children:e.map(({key:e,time:t,content:n,status:i=`default`,color:o,filled:s=!1,className:c,style:l,...u},d)=>(0,f.jsxs)(`li`,{className:r(`lg-timeline__item`,`lg-timeline__item--${i}`,s&&`lg-timeline__item--filled`,c),style:o?{...l,"--_timeline-dot-color":o}:l,...u,children:[a&&(0,f.jsx)(`div`,{className:`lg-timeline__time`,children:t}),(0,f.jsxs)(`div`,{className:`lg-timeline__axis`,"aria-hidden":!0,children:[(0,f.jsx)(`span`,{className:`lg-timeline__tail lg-timeline__tail--head`}),(0,f.jsx)(`span`,{className:`lg-timeline__dot`}),(0,f.jsx)(`span`,{className:`lg-timeline__tail lg-timeline__tail--body`})]}),(0,f.jsx)(`div`,{className:`lg-timeline__content`,children:n})]},e??d))})});m.displayName=`Timeline`;var h=Object.assign(m,{Card:p}),g=[{key:`1`,time:`09:00`,content:`Item 1`},{key:`2`,time:`11:00`,content:`Item 2`},{key:`3`,time:`12:40`,content:`Item 3`},{key:`4`,time:`14:00`,content:`Item 4`}];function _(){return(0,f.jsx)(h,{items:g})}var v=`import { Timeline } from "lingee-ui";

const items = [
  { key: "1", time: "09:00", content: "Item 1" },
  { key: "2", time: "11:00", content: "Item 2" },
  { key: "3", time: "12:40", content: "Item 3" },
  { key: "4", time: "14:00", content: "Item 4" },
];

export default function BasicDemo() {
  return <Timeline items={items} />;
}
`,y=[{key:`completed`,time:`09:00`,status:`completed`,content:`Completed`},{key:`processing`,time:`11:00`,status:`processing`,content:`Processing`,"aria-current":`step`},{key:`unfinished`,time:`12:40`,status:`unfinished`,content:`Unfinished`},{key:`default`,time:`14:00`,content:`Default`},{key:`disabled`,time:`17:15`,status:`disabled`,content:`Disabled`}];function b(){return(0,f.jsx)(h,{items:y})}var x=`import { Timeline } from "lingee-ui";
import type { TimelineItem } from "lingee-ui";

const items: TimelineItem[] = [
  { key: "completed", time: "09:00", status: "completed", content: "Completed" },
  {
    key: "processing",
    time: "11:00",
    status: "processing",
    content: "Processing",
    "aria-current": "step",
  },
  { key: "unfinished", time: "12:40", status: "unfinished", content: "Unfinished" },
  { key: "default", time: "14:00", content: "Default" },
  { key: "disabled", time: "17:15", status: "disabled", content: "Disabled" },
];

export default function StatusDemo() {
  return <Timeline items={items} />;
}
`,S=(0,f.jsx)(c,{variant:`text`,size:`md`,icon:(0,f.jsx)(i,{size:16}),children:`Action`}),C=[{key:`1`,time:`09:00`,content:(0,f.jsx)(h.Card,{title:`Title 1`,tag:(0,f.jsx)(l,{color:`purple`,children:`Tag A`}),description:`Description of item 1.`,footer:S})},{key:`2`,time:`11:00`,content:(0,f.jsx)(h.Card,{titleLines:2,title:`A long title that takes up to two lines and is truncated with an ellipsis once it runs past the second line of the card`,tag:(0,f.jsx)(l,{color:`success`,children:`Tag B`})})},{key:`3`,time:`12:40`,content:(0,f.jsx)(h.Card,{title:`Title 3`,tag:(0,f.jsx)(l,{color:`amber`,children:`Tag C`}),description:`A long description that wraps onto a second line and is truncated with an ellipsis after it, so cards in the same timeline keep a similar height.`,footer:S})},{key:`4`,time:`14:00`,content:(0,f.jsx)(h.Card,{title:`Title 4`,tag:(0,f.jsx)(l,{color:`amber`,children:`Tag C`}),description:`Description of item 4.`,footer:S})}];function w(){return(0,f.jsx)(h,{items:C})}var T=`import { Button, Tag, Timeline } from "lingee-ui";
import type { TimelineItem } from "lingee-ui";
import { ChatDots } from "lingee-icon";

const action = (
  <Button variant="text" size="md" icon={<ChatDots size={16} />}>
    Action
  </Button>
);

const items: TimelineItem[] = [
  {
    key: "1",
    time: "09:00",
    content: (
      <Timeline.Card
        title="Title 1"
        tag={<Tag color="purple">Tag A</Tag>}
        description="Description of item 1."
        footer={action}
      />
    ),
  },
  {
    key: "2",
    time: "11:00",
    content: (
      <Timeline.Card
        titleLines={2}
        title="A long title that takes up to two lines and is truncated with an ellipsis once it runs past the second line of the card"
        tag={<Tag color="success">Tag B</Tag>}
      />
    ),
  },
  {
    key: "3",
    time: "12:40",
    content: (
      <Timeline.Card
        title="Title 3"
        tag={<Tag color="amber">Tag C</Tag>}
        description="A long description that wraps onto a second line and is truncated with an ellipsis after it, so cards in the same timeline keep a similar height."
        footer={action}
      />
    ),
  },
  {
    key: "4",
    time: "14:00",
    content: (
      <Timeline.Card
        title="Title 4"
        tag={<Tag color="amber">Tag C</Tag>}
        description="Description of item 4."
        footer={action}
      />
    ),
  },
];

export default function CardDemo() {
  return <Timeline items={items} />;
}
`;function E({icon:e,children:t}){return(0,f.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:4},children:[e,t]})}var D=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(E,{icon:(0,f.jsx)(o,{size:14}),children:`Member A`}),(0,f.jsx)(E,{icon:(0,f.jsx)(s,{size:14}),children:`Room 101`}),(0,f.jsx)(E,{icon:(0,f.jsx)(a,{size:14}),children:`123 456 789`})]}),O=[{key:`1`,time:`09:00 - 10:30`,title:`Event 1`,node:`completed`,card:`completed`},{key:`2`,time:`11:00 - 12:00`,title:`Event 2`,node:`processing`,card:`processing`},{key:`3`,time:`14:00 - 15:00`,title:`Event 3`,node:`default`,card:`default`}].map(e=>({key:e.key,status:e.node,...e.node===`processing`?{"aria-current":`step`}:{},content:(0,f.jsx)(h.Card,{hoverable:!0,status:e.card,time:e.time,extra:e.card===`processing`?(0,f.jsx)(l,{variant:`text`,color:`primary`,children:`In progress`}):void 0,title:e.title,tag:(0,f.jsx)(l,{color:`cyan`,children:`Tag`}),footer:D})}));function k(){return(0,f.jsx)(h,{items:O})}var A=`import type { ReactNode } from "react";
import { Tag, Timeline } from "lingee-ui";
import type { TimelineCardStatus, TimelineItem, TimelineStatus } from "lingee-ui";
import { CameraVideo, Enterprise, People } from "lingee-icon";

function Info({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
      {icon}
      {children}
    </span>
  );
}

const footer = (
  <>
    <Info icon={<People size={14} />}>Member A</Info>
    <Info icon={<Enterprise size={14} />}>Room 101</Info>
    <Info icon={<CameraVideo size={14} />}>123 456 789</Info>
  </>
);

const events: {
  key: string;
  time: string;
  title: string;
  node: TimelineStatus;
  card: TimelineCardStatus;
}[] = [
  { key: "1", time: "09:00 - 10:30", title: "Event 1", node: "completed", card: "completed" },
  { key: "2", time: "11:00 - 12:00", title: "Event 2", node: "processing", card: "processing" },
  { key: "3", time: "14:00 - 15:00", title: "Event 3", node: "default", card: "default" },
];

const items: TimelineItem[] = events.map((event) => ({
  key: event.key,
  status: event.node,
  ...(event.node === "processing" ? { "aria-current": "step" as const } : {}),
  content: (
    <Timeline.Card
      hoverable
      status={event.card}
      time={event.time}
      extra={
        event.card === "processing" ? (
          <Tag variant="text" color="primary">
            In progress
          </Tag>
        ) : undefined
      }
      title={event.title}
      tag={<Tag color="cyan">Tag</Tag>}
      footer={footer}
    />
  ),
}));

export default function ScheduleDemo() {
  return <Timeline items={items} />;
}
`,j=[{key:`1`,title:`Item 1`,time:`2026-01-01 10:00`},{key:`2`,title:`Item 2`,time:`2026-01-02 14:30`},{key:`3`,title:`Item 3`,time:`2026-01-03 09:15`}];function M(){return(0,f.jsx)(h,{items:j.map((e,t)=>({key:e.key,filled:t<j.length-1,color:`var(--lg-g-border-color-primary-default)`,content:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{children:e.title}),(0,f.jsx)(`div`,{style:{fontSize:12,lineHeight:`18px`,color:`var(--lg-g-fg-color-black-faint)`},children:e.time})]})}))})}var N=`import { Timeline } from "lingee-ui";

const records = [
  { key: "1", title: "Item 1", time: "2026-01-01 10:00" },
  { key: "2", title: "Item 2", time: "2026-01-02 14:30" },
  { key: "3", title: "Item 3", time: "2026-01-03 09:15" },
];

export default function ContentDemo() {
  return (
    <Timeline
      items={records.map((record, index) => ({
        key: record.key,
        // 实心圆点 + 自定义颜色，color 优先于 status
        filled: index < records.length - 1,
        color: "var(--lg-g-border-color-primary-default)",
        content: (
          <>
            <div>{record.title}</div>
            <div
              style={{
                fontSize: 12,
                lineHeight: "18px",
                color: "var(--lg-g-fg-color-black-faint)",
              }}
            >
              {record.time}
            </div>
          </>
        ),
      }))}
    />
  );
}
`,P=[`Step 1`,`Step 2`,`Step 3`,`Step 4`,`Step 5`],F={done:`var(--lg-g-border-color-primary-default)`,current:`var(--lg-g-border-color-primary-default)`,todo:`var(--lg-g-border-color-black-moderate)`},I={done:{color:`var(--lg-g-fg-color-black-default)`},current:{color:`var(--lg-g-fg-color-black-strong)`,fontWeight:600},todo:{color:`var(--lg-g-fg-color-black-faint)`}},L={"--_timeline-line-height":`22px`,"--_timeline-rail-color":`var(--lg-g-border-color-black-muted)`};function R(e){return P.map((t,n)=>{let r=n<e?`done`:n===e?`current`:`todo`,i=(0,f.jsx)(`span`,{style:{display:`block`,fontSize:13,lineHeight:`22px`,...I[r]},children:t});return r===`current`&&n===0&&(i=(0,f.jsxs)(f.Fragment,{children:[i,(0,f.jsx)(`span`,{style:{display:`block`,fontSize:12,lineHeight:`18px`,color:`var(--lg-g-fg-color-black-faint)`},children:`Description of the current step`})]})),{key:t,color:F[r],filled:r===`done`,className:r===`todo`?void 0:`progress-step--${r}`,content:i,...r===`current`?{"aria-current":`step`}:{}}})}function z(){let[e,t]=(0,u.useState)(0);return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,f.jsx)(c,{disabled:e===0,onClick:()=>t(e=>e-1),children:`Previous`}),(0,f.jsx)(c,{disabled:e===P.length-1,onClick:()=>t(e=>e+1),children:`Next`})]}),(0,f.jsx)(h,{className:`progress-timeline`,style:L,items:R(e)})]})}var B=`import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Button, Timeline } from "lingee-ui";
import type { TimelineItem } from "lingee-ui";

const FLOW = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

type StepState = "done" | "current" | "todo";

// 圆点颜色传语义 Token，才能跟随亮/暗主题切换
const DOT_COLOR: Record<StepState, string> = {
  done: "var(--lg-g-border-color-primary-default)",
  current: "var(--lg-g-border-color-primary-default)",
  todo: "var(--lg-g-border-color-black-moderate)",
};

const TITLE_STYLE: Record<StepState, CSSProperties> = {
  done: { color: "var(--lg-g-fg-color-black-default)" },
  current: { color: "var(--lg-g-fg-color-black-strong)", fontWeight: 600 },
  todo: { color: "var(--lg-g-fg-color-black-faint)" },
};

// 首行行高与标题一致，圆点才能和文字对齐；连接线比默认深一档
const TIMELINE_STYLE = {
  "--_timeline-line-height": "22px",
  "--_timeline-rail-color": "var(--lg-g-border-color-black-muted)",
} as CSSProperties;

/** 已过的阶段实心、当前阶段空心、未到的阶段灰色空心 */
function buildStepItems(currentIndex: number): TimelineItem[] {
  return FLOW.map((step, index) => {
    const state: StepState =
      index < currentIndex ? "done" : index === currentIndex ? "current" : "todo";
    let content: ReactNode = (
      <span style={{ display: "block", fontSize: 13, lineHeight: "22px", ...TITLE_STYLE[state] }}>
        {step}
      </span>
    );
    if (state === "current" && index === 0) {
      content = (
        <>
          {content}
          <span
            style={{
              display: "block",
              fontSize: 12,
              lineHeight: "18px",
              color: "var(--lg-g-fg-color-black-faint)",
            }}
          >
            Description of the current step
          </span>
        </>
      );
    }
    return {
      key: step,
      color: DOT_COLOR[state],
      filled: state === "done",
      className: state === "todo" ? undefined : \`progress-step--\${state}\`,
      content,
      // 节点上未声明的属性原样落到 <li>，借此给读屏标出当前阶段
      ...(state === "current" ? { "aria-current": "step" as const } : {}),
    };
  });
}

export default function ProgressDemo() {
  const [current, setCurrent] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <Button disabled={current === 0} onClick={() => setCurrent((index) => index - 1)}>
          Previous
        </Button>
        <Button
          disabled={current === FLOW.length - 1}
          onClick={() => setCurrent((index) => index + 1)}
        >
          Next
        </Button>
      </div>
      <Timeline
        className="progress-timeline"
        style={TIMELINE_STYLE}
        items={buildStepItems(current)}
      />
    </div>
  );
}
`;export{A as a,w as c,v as d,_ as f,M as i,x as l,z as n,k as o,N as r,T as s,B as t,b as u};