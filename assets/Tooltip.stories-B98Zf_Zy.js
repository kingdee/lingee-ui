import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{T as n,B as o}from"./index-rpfjBfXO.js";import"./index-D4H_InIO.js";import"./index-ukuGrK6K.js";import"./utils-HnQPFlDo.js";import"./index-CzDrSyg2.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-DwD4BYpe.js";import"./utils-YwZfuvH0-DLWngkAW.js";const k={title:"Components/Tooltip",component:n,parameters:{layout:"centered"},argTypes:{placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},arrow:{control:"boolean"},delayDuration:{control:"number"},sideOffset:{control:"number"},maxWidth:{control:"number"}}},r={args:{content:"这是一个提示文字",placement:"top",arrow:!0},render:e=>t.jsx(n,{...e,children:t.jsx(o,{variant:"outline",children:"Hover me"})})},a={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24,padding:80},children:[t.jsx(n,{content:"Top Start",placement:"top-start",children:t.jsx(o,{variant:"outline",size:"sm",children:"top-start"})}),t.jsx(n,{content:"Top",placement:"top",children:t.jsx(o,{variant:"outline",size:"sm",children:"top"})}),t.jsx(n,{content:"Top End",placement:"top-end",children:t.jsx(o,{variant:"outline",size:"sm",children:"top-end"})}),t.jsx(n,{content:"Left",placement:"left",children:t.jsx(o,{variant:"outline",size:"sm",children:"left"})}),t.jsx("div",{}),t.jsx(n,{content:"Right",placement:"right",children:t.jsx(o,{variant:"outline",size:"sm",children:"right"})}),t.jsx(n,{content:"Bottom Start",placement:"bottom-start",children:t.jsx(o,{variant:"outline",size:"sm",children:"bottom-start"})}),t.jsx(n,{content:"Bottom",placement:"bottom",children:t.jsx(o,{variant:"outline",size:"sm",children:"bottom"})}),t.jsx(n,{content:"Bottom End",placement:"bottom-end",children:t.jsx(o,{variant:"outline",size:"sm",children:"bottom-end"})})]})},i={args:{content:"无箭头提示",arrow:!1},render:e=>t.jsx(n,{...e,children:t.jsx(o,{variant:"outline",children:"无箭头"})})},s={render:()=>t.jsx(n,{content:t.jsxs("div",{children:[t.jsx("strong",{children:"快捷键"}),t.jsx("div",{style:{marginTop:4,opacity:.8},children:"Ctrl + Enter"})]}),children:t.jsx(o,{variant:"primary",children:"富文本提示"})})},l={render:()=>t.jsx(n,{content:"",children:t.jsx(o,{variant:"outline",children:"content 为空不显示"})})},c={args:{content:"延迟 500ms 显示",delayDuration:500},render:e=>t.jsx(n,{...e,children:t.jsx(o,{variant:"outline",children:"慢延迟"})})};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: "这是一个提示文字",
    placement: "top",
    arrow: true
  },
  render: args => <Tooltip {...args}>
      <Button variant="outline">Hover me</Button>
    </Tooltip>
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,h,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    padding: 80
  }}>
      <Tooltip content="Top Start" placement="top-start">
        <Button variant="outline" size="sm">top-start</Button>
      </Tooltip>
      <Tooltip content="Top" placement="top">
        <Button variant="outline" size="sm">top</Button>
      </Tooltip>
      <Tooltip content="Top End" placement="top-end">
        <Button variant="outline" size="sm">top-end</Button>
      </Tooltip>

      <Tooltip content="Left" placement="left">
        <Button variant="outline" size="sm">left</Button>
      </Tooltip>
      <div />
      <Tooltip content="Right" placement="right">
        <Button variant="outline" size="sm">right</Button>
      </Tooltip>

      <Tooltip content="Bottom Start" placement="bottom-start">
        <Button variant="outline" size="sm">bottom-start</Button>
      </Tooltip>
      <Tooltip content="Bottom" placement="bottom">
        <Button variant="outline" size="sm">bottom</Button>
      </Tooltip>
      <Tooltip content="Bottom End" placement="bottom-end">
        <Button variant="outline" size="sm">bottom-end</Button>
      </Tooltip>
    </div>
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var T,v,x;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    content: "无箭头提示",
    arrow: false
  },
  render: args => <Tooltip {...args}>
      <Button variant="outline">无箭头</Button>
    </Tooltip>
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var B,j,f;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Tooltip content={<div>
          <strong>快捷键</strong>
          <div style={{
      marginTop: 4,
      opacity: 0.8
    }}>Ctrl + Enter</div>
        </div>}>
      <Button variant="primary">富文本提示</Button>
    </Tooltip>
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var b,y,z;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Tooltip content="">
      <Button variant="outline">content 为空不显示</Button>
    </Tooltip>
}`,...(z=(y=l.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var C,E,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    content: "延迟 500ms 显示",
    delayDuration: 500
  },
  render: args => <Tooltip {...args}>
      <Button variant="outline">慢延迟</Button>
    </Tooltip>
}`,...(S=(E=c.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const q=["Default","Placements","WithoutArrow","RichContent","EmptyContent","CustomDelay"];export{c as CustomDelay,r as Default,l as EmptyContent,a as Placements,s as RichContent,i as WithoutArrow,q as __namedExportsOrder,k as default};
