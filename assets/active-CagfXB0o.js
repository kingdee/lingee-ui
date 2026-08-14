import{G as e,J as t,L as n,z as r}from"./i18n-B4Rqn8un.js";import{t as i}from"./dist-DSsfJCJB.js";var a=t(e()),o=r(),s=i(`lg-skeleton`,{variants:{variant:{text:`lg-skeleton--text`,circle:`lg-skeleton--circle`,rect:`lg-skeleton--rect`},animation:{shimmer:`lg-skeleton--shimmer`,pulse:`lg-skeleton--pulse`,none:``}},defaultVariants:{variant:`text`,animation:`shimmer`}}),c=a.forwardRef(({className:e,variant:t=`text`,animation:r=`shimmer`,width:i,height:a,borderRadius:c,size:l,style:u,...d},f)=>{let p={...u};return l!==void 0&&(p.width=typeof l==`number`?`${l}px`:l,p.height=typeof l==`number`?`${l}px`:l),i!==void 0&&(p.width=typeof i==`number`?`${i}px`:i),a!==void 0&&(p.height=typeof a==`number`?`${a}px`:a),c!==void 0&&(p.borderRadius=typeof c==`number`?`${c}px`:c),(0,o.jsx)(`div`,{ref:f,className:n(s({variant:t,animation:r===!1?`none`:r}),e),style:p,"aria-hidden":`true`,...d})});c.displayName=`Skeleton`;function l(){return(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,o.jsx)(c,{variant:`text`,width:`100%`}),(0,o.jsx)(c,{variant:`text`,width:`80%`}),(0,o.jsx)(c,{variant:`text`,width:`60%`})]}),(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,o.jsx)(c,{variant:`circle`,size:40}),(0,o.jsx)(c,{variant:`rect`,width:120,height:36})]})]})}var u=`import { Skeleton } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Skeleton variant="circle" size={40} />
        <Skeleton variant="rect" width={120} height={36} />
      </div>
    </div>
  );
}
`;function d(){return(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`shimmer (default)`}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,o.jsx)(c,{variant:`text`,width:`100%`,animation:`shimmer`}),(0,o.jsx)(c,{variant:`text`,width:`75%`,animation:`shimmer`})]})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`pulse`}),(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,o.jsx)(c,{variant:`circle`,size:48,animation:`pulse`}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,flex:1},children:[(0,o.jsx)(c,{variant:`text`,width:`60%`,animation:`pulse`}),(0,o.jsx)(c,{variant:`text`,width:`40%`,animation:`pulse`})]})]})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`No animation`}),(0,o.jsx)(c,{variant:`rect`,width:200,height:100,animation:!1})]})]})}var f=`import { Skeleton } from "lingee-ui";

export default function ActiveDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          shimmer (default)
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Skeleton variant="text" width="100%" animation="shimmer" />
          <Skeleton variant="text" width="75%" animation="shimmer" />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          pulse
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Skeleton variant="circle" size={48} animation="pulse" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
            <Skeleton variant="text" width="60%" animation="pulse" />
            <Skeleton variant="text" width="40%" animation="pulse" />
          </div>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: 8, color: "rgba(0,0,0,0.64)" }}>
          No animation
        </p>
        <Skeleton variant="rect" width={200} height={100} animation={false} />
      </div>
    </div>
  );
}
`;export{l as i,d as n,u as r,f as t};