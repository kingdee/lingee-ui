import{z as e}from"./i18n-B4Rqn8un.js";import{t}from"./divider-D-hZEVpK.js";var n=e();function r(){return(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`p`,{children:`Content above`}),(0,n.jsx)(t,{}),(0,n.jsx)(`p`,{children:`Content below`})]})}var i=`import { Divider } from "lingee-ui";

export default function BasicDemo() {
  return (
    <div>
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  );
}
`;function a(){return(0,n.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,n.jsx)(`span`,{children:`Home`}),(0,n.jsx)(t,{orientation:`vertical`}),(0,n.jsx)(`span`,{children:`Docs`}),(0,n.jsx)(t,{orientation:`vertical`}),(0,n.jsx)(`span`,{children:`Components`})]})}var o=`import { Divider } from "lingee-ui";

export default function VerticalDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span>Home</span>
      <Divider orientation="vertical" />
      <span>Docs</span>
      <Divider orientation="vertical" />
      <span>Components</span>
    </div>
  );
}
`;function s(){return(0,n.jsxs)(`div`,{children:[(0,n.jsx)(t,{variant:`muted`}),(0,n.jsx)(`p`,{children:`muted — lightest divider`}),(0,n.jsx)(t,{variant:`default`}),(0,n.jsx)(`p`,{children:`default — default divider`}),(0,n.jsx)(t,{variant:`emphasis`}),(0,n.jsx)(`p`,{children:`emphasis — strongest divider`})]})}var c=`import { Divider } from "lingee-ui";

export default function WithTextDemo() {
  return (
    <div>
      <Divider variant="muted" />
      <p>muted — lightest divider</p>
      <Divider variant="default" />
      <p>default — default divider</p>
      <Divider variant="emphasis" />
      <p>emphasis — strongest divider</p>
    </div>
  );
}
`;export{i as a,a as i,s as n,r as o,o as r,c as t};