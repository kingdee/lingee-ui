import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./LightningCharge-BWFYixe-.js";import{t as i}from"./tooltip-DyD1puyI.js";import{n as a}from"./i18n-C0QfTVrT.js";var o=e(t()),s={demoBox:`_demoBox_12u5v_1`,meta:`_meta_12u5v_7`,title:`_title_12u5v_10`,description:`_description_12u5v_16`,preview:`_preview_12u5v_20`,actions:`_actions_12u5v_23`,actionsLeft:`_actionsLeft_12u5v_31`,actionBtn:`_actionBtn_12u5v_36`,stackblitzBtn:`_stackblitzBtn_12u5v_53`,codeBlock:`_codeBlock_12u5v_71`},c=n();function l(e){let t={"package.json":JSON.stringify({name:`lingee-ui-demo`,private:!0,scripts:{dev:`vite`,start:`vite`},dependencies:{react:`^18.2.0`,"react-dom":`^18.2.0`,"lingee-ui":`latest`,"lingee-icon":`latest`},devDependencies:{"@vitejs/plugin-react":`^4.0.0`,vite:`^5.0.0`}},null,2),"index.html":`<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /></head>
<body>
  <div id="root"></div>
  <script type="module" src="/index.tsx"><\/script>
</body>
</html>`,"index.tsx":`import React from "react";
import { createRoot } from "react-dom/client";
import { LingeeProvider } from "lingee-ui";
import "lingee-ui/styles.css";
import Demo from "./demo";

createRoot(document.getElementById("root")!).render(
  <LingeeProvider>
    <div style={{ padding: 24 }}>
      <Demo />
    </div>
  </LingeeProvider>
);`,"demo.tsx":e,"vite.config.ts":`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({ plugins: [react()] });`},n=document.createElement(`form`);n.method=`POST`,n.action=`https://stackblitz.com/run`,n.target=`_blank`,Object.entries(t).forEach(([e,t])=>{let r=document.createElement(`input`);r.type=`hidden`,r.name=`project[files][${e}]`,r.value=t,n.appendChild(r)});let r=document.createElement(`input`);r.type=`hidden`,r.name=`project[title]`,r.value=`Lingee UI Demo`,n.appendChild(r);let i=document.createElement(`input`);i.type=`hidden`,i.name=`project[template]`,i.value=`node`,n.appendChild(i),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}function u({children:e,source:t,title:n,description:u}){let[d,f]=(0,o.useState)(!1),{t:p}=a();return(0,c.jsxs)(`div`,{className:s.demoBox,children:[(n||u)&&(0,c.jsxs)(`div`,{className:s.meta,children:[n&&(0,c.jsx)(`div`,{className:s.title,children:n}),u&&(0,c.jsx)(`div`,{className:s.description,children:u})]}),(0,c.jsx)(`div`,{className:s.preview,children:e}),t&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`div`,{className:s.actions,children:[(0,c.jsxs)(`div`,{className:s.actionsLeft,children:[(0,c.jsx)(`button`,{className:s.actionBtn,onClick:()=>f(!d),type:`button`,children:d?p.demoBox.collapseCode:p.demoBox.expandCode}),(0,c.jsx)(`button`,{className:s.actionBtn,onClick:()=>{t&&navigator.clipboard.writeText(t)},type:`button`,children:p.demoBox.copy})]}),(0,c.jsx)(i,{content:p.demoBox.openInStackblitz,children:(0,c.jsx)(`button`,{className:s.stackblitzBtn,onClick:()=>l(t),type:`button`,"aria-label":p.demoBox.openInStackblitz,children:(0,c.jsx)(r,{size:16})})})]}),d&&(0,c.jsx)(`div`,{className:s.codeBlock,children:(0,c.jsx)(`pre`,{children:(0,c.jsx)(`code`,{children:t})})})]})]})}export{u as t};