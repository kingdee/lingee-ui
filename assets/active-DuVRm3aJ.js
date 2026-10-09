import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{t}from"./skeleton-qqTL4qnH.js";var n=e();function r(){return(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,n.jsx)(t,{variant:`text`,width:`100%`}),(0,n.jsx)(t,{variant:`text`,width:`80%`}),(0,n.jsx)(t,{variant:`text`,width:`60%`})]}),(0,n.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,n.jsx)(t,{variant:`circle`,size:40}),(0,n.jsx)(t,{variant:`rect`,width:120,height:36})]})]})}var i=`import { Skeleton } from "lingee-ui";

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
`;function a(){return(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`shimmer (default)`}),(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,n.jsx)(t,{variant:`text`,width:`100%`,animation:`shimmer`}),(0,n.jsx)(t,{variant:`text`,width:`75%`,animation:`shimmer`})]})]}),(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`pulse`}),(0,n.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,n.jsx)(t,{variant:`circle`,size:48,animation:`pulse`}),(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,flex:1},children:[(0,n.jsx)(t,{variant:`text`,width:`60%`,animation:`pulse`}),(0,n.jsx)(t,{variant:`text`,width:`40%`,animation:`pulse`})]})]})]}),(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`p`,{style:{marginBottom:8,color:`rgba(0,0,0,0.64)`},children:`No animation`}),(0,n.jsx)(t,{variant:`rect`,width:200,height:100,animation:!1})]})]})}var o=`import { Skeleton } from "lingee-ui";

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
`;export{r as i,a as n,i as r,o as t};