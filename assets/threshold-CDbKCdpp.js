import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{t}from"./ellipsis-tooltip-CKsfrrxX.js";var n=e(),r=`A rather long single-line text that gets clipped and reveals its full content on hover`;function i(){return(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,width:240},children:[(0,n.jsx)(t,{content:r,children:r}),(0,n.jsx)(t,{content:`Short text`,children:`Short text`})]})}var a=`import { EllipsisTooltip } from "lingee-ui";

const LONG_TEXT =
  "A rather long single-line text that gets clipped and reveals its full content on hover";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 240 }}>
      {/* Clipped: hover reveals the full text */}
      <EllipsisTooltip content={LONG_TEXT}>{LONG_TEXT}</EllipsisTooltip>

      {/* Not clipped: no tooltip, so it never repeats visible content */}
      <EllipsisTooltip content="Short text">Short text</EllipsisTooltip>
    </div>
  );
}
`,o=`Almost fills the container`,s=`The tooltip width is capped by the surrounding card instead of the viewport. `.repeat(3);function c(){return(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,width:240},children:[(0,n.jsx)(t,{content:o,children:o}),(0,n.jsx)(t,{content:o,threshold:.8,children:o}),(0,n.jsx)(`div`,{className:`demo-anchor-card`,style:{padding:8,border:`1px solid rgba(0, 0, 0, 0.08)`,borderRadius:8},children:(0,n.jsx)(t,{content:s,anchorClassName:`demo-anchor-card`,children:s})})]})}var l=`import { EllipsisTooltip } from "lingee-ui";

/** Fits the 240px container, so the default threshold never triggers */
const NEAR_TEXT = "Almost fills the container";

const CARD_TEXT =
  "The tooltip width is capped by the surrounding card instead of the viewport. ".repeat(
    3,
  );

export default function ThresholdDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 240 }}>
      {/* threshold=1 (default): only triggers on real overflow */}
      <EllipsisTooltip content={NEAR_TEXT}>{NEAR_TEXT}</EllipsisTooltip>

      {/* threshold=0.8: triggers once the text reaches 80% of the container */}
      <EllipsisTooltip content={NEAR_TEXT} threshold={0.8}>
        {NEAR_TEXT}
      </EllipsisTooltip>

      {/* anchorClassName: caps the tooltip width to the card */}
      <div
        className="demo-anchor-card"
        style={{
          padding: 8,
          border: "1px solid rgba(0, 0, 0, 0.08)",
          borderRadius: 8,
        }}
      >
        <EllipsisTooltip content={CARD_TEXT} anchorClassName="demo-anchor-card">
          {CARD_TEXT}
        </EllipsisTooltip>
      </div>
    </div>
  );
}
`;export{i,c as n,a as r,l as t};