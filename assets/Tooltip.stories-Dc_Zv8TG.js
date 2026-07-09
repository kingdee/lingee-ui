import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{T as o}from"./index-Dn6qHMI3.js";import{B as n}from"./index-DkYEPqCK.js";import"./index-D4H_InIO.js";import"./index-VPG4c6ZF.js";import"./index-TiaNR8H-.js";import"./index-CwLLzmb4.js";import"./index-BLKoEynJ.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-Dh_yPxPv.js";import"./utils-HnQPFlDo.js";import"./index-ukuGrK6K.js";import"./LoaderCircle-BJjvYEe5.js";import"./utils-YwZfuvH0-DLWngkAW.js";const J={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},arrow:{control:"boolean"},delayDuration:{control:"number"},sideOffset:{control:"number"},maxWidth:{control:"number"}}},r={args:{content:"这是一个提示文字",placement:"top",arrow:!0},render:e=>t.jsx(o,{...e,children:t.jsx(n,{children:"Hover me"})})},s={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24,padding:80},children:[t.jsx(o,{content:"Top Start",placement:"top-start",children:t.jsx(n,{size:"sm",children:"top-start"})}),t.jsx(o,{content:"Top",placement:"top",children:t.jsx(n,{size:"sm",children:"top"})}),t.jsx(o,{content:"Top End",placement:"top-end",children:t.jsx(n,{size:"sm",children:"top-end"})}),t.jsx(o,{content:"Left",placement:"left",children:t.jsx(n,{size:"sm",children:"left"})}),t.jsx("div",{}),t.jsx(o,{content:"Right",placement:"right",children:t.jsx(n,{size:"sm",children:"right"})}),t.jsx(o,{content:"Bottom Start",placement:"bottom-start",children:t.jsx(n,{size:"sm",children:"bottom-start"})}),t.jsx(o,{content:"Bottom",placement:"bottom",children:t.jsx(n,{size:"sm",children:"bottom"})}),t.jsx(o,{content:"Bottom End",placement:"bottom-end",children:t.jsx(n,{size:"sm",children:"bottom-end"})})]})},a={args:{content:"无箭头提示",arrow:!1},render:e=>t.jsx(o,{...e,children:t.jsx(n,{children:"无箭头"})})},i={render:()=>t.jsx(o,{content:t.jsxs("div",{children:[t.jsx("strong",{children:"快捷键"}),t.jsx("div",{style:{marginTop:4,opacity:.8},children:"Ctrl + Enter"})]}),children:t.jsx(n,{variant:"primary",children:"富文本提示"})})},c={render:()=>t.jsx(o,{content:"",children:t.jsx(n,{children:"content 为空不显示"})})},p={args:{content:"延迟 500ms 显示",delayDuration:500},render:e=>t.jsx(o,{...e,children:t.jsx(n,{children:"慢延迟"})})};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    content: "这是一个提示文字",
    placement: "top",
    arrow: true
  },
  render: args => <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    padding: 80
  }}>
      <Tooltip content="Top Start" placement="top-start">
        <Button size="sm">top-start</Button>
      </Tooltip>
      <Tooltip content="Top" placement="top">
        <Button size="sm">top</Button>
      </Tooltip>
      <Tooltip content="Top End" placement="top-end">
        <Button size="sm">top-end</Button>
      </Tooltip>

      <Tooltip content="Left" placement="left">
        <Button size="sm">left</Button>
      </Tooltip>
      <div />
      <Tooltip content="Right" placement="right">
        <Button size="sm">right</Button>
      </Tooltip>

      <Tooltip content="Bottom Start" placement="bottom-start">
        <Button size="sm">bottom-start</Button>
      </Tooltip>
      <Tooltip content="Bottom" placement="bottom">
        <Button size="sm">bottom</Button>
      </Tooltip>
      <Tooltip content="Bottom End" placement="bottom-end">
        <Button size="sm">bottom-end</Button>
      </Tooltip>
    </div>
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var T,x,B;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    content: "无箭头提示",
    arrow: false
  },
  render: args => <Tooltip {...args}>
      <Button>无箭头</Button>
    </Tooltip>
}`,...(B=(x=a.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var j,f,b;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Tooltip content={<div>
          <strong>快捷键</strong>
          <div style={{
      marginTop: 4,
      opacity: 0.8
    }}>Ctrl + Enter</div>
        </div>}>
      <Button variant="primary">富文本提示</Button>
    </Tooltip>
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,z,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Tooltip content="">
      <Button>content 为空不显示</Button>
    </Tooltip>
}`,...(v=(z=c.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var C,E,S;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    content: "延迟 500ms 显示",
    delayDuration: 500
  },
  render: args => <Tooltip {...args}>
      <Button>慢延迟</Button>
    </Tooltip>
}`,...(S=(E=p.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const K=["Default","Placements","WithoutArrow","RichContent","EmptyContent","CustomDelay"];export{p as CustomDelay,r as Default,c as EmptyContent,s as Placements,i as RichContent,a as WithoutArrow,K as __namedExportsOrder,J as default};
