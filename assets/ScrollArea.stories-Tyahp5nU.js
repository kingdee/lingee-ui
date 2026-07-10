import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{S as r}from"./index-Duhf0EI7.js";import"./index-D4H_InIO.js";import"./index-C6cFfWA7.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-Dj6c7Bq9.js";import"./index-BeHA-PsQ.js";import"./index-YtIeenAn.js";import"./utils-HnQPFlDo.js";const se={title:"Components/ScrollArea",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:"select",options:["scroll","hover","auto","always"],description:"滚动条显示策略"},scrollbars:{control:"select",options:["vertical","horizontal","both"],description:"滚动条方向"},scrollbarSize:{control:{type:"number",min:1,max:12},description:"滚动条默认宽度（px）"},scrollbarHoverSize:{control:{type:"number",min:1,max:16},description:"滚动条悬浮时宽度（px）"},scrollHideDelay:{control:{type:"number",min:0,max:3e3,step:100},description:"滚动条隐藏延迟（ms）"}}},K=Array.from({length:50},(n,M)=>`列表项 ${M+1}`);function s(){return e.jsx("div",{style:{padding:8},children:K.map(n=>e.jsx("div",{style:{padding:"8px 12px",borderBottom:"1px solid #f0f0f0",fontSize:14},children:n},n))})}const o={render:n=>e.jsx("div",{style:{width:280,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(r,{style:{maxHeight:300},...n,children:e.jsx(s,{})})})},i={name:'type="scroll"（滚动时显示）',render:()=>e.jsx("div",{style:{width:280,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(r,{style:{maxHeight:250},children:e.jsx(s,{})})})},t={name:'type="hover"（悬浮时显示）',render:()=>e.jsx("div",{style:{width:280,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(r,{style:{maxHeight:250},type:"hover",children:e.jsx(s,{})})})},l={name:'type="auto"（溢出时显示）',render:()=>e.jsx("div",{style:{width:280,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(r,{style:{maxHeight:250},type:"auto",children:e.jsx(s,{})})})},d={name:'type="always"（始终显示）',render:()=>e.jsx("div",{style:{width:280,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(r,{style:{maxHeight:250},type:"always",children:e.jsx(s,{})})})},a={name:"不同滚动条尺寸",render:()=>e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",margin:"0 0 8px"},children:"2px"}),e.jsx("div",{style:{width:200,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(r,{style:{maxHeight:200},type:"always",scrollbarSize:2,scrollbarHoverSize:2,children:e.jsx(s,{})})})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",margin:"0 0 8px"},children:"4px → 6px"}),e.jsx("div",{style:{width:200,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(r,{style:{maxHeight:200},type:"always",scrollbarSize:4,scrollbarHoverSize:6,children:e.jsx(s,{})})})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",margin:"0 0 8px"},children:"6px → 8px"}),e.jsx("div",{style:{width:200,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(r,{style:{maxHeight:200},type:"always",scrollbarSize:6,scrollbarHoverSize:8,children:e.jsx(s,{})})})]})]})},c={name:"水平滚动",render:()=>e.jsx("div",{style:{width:300,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(r,{style:{maxWidth:300},type:"always",scrollbars:"horizontal",children:e.jsx("div",{style:{width:600,padding:16},children:e.jsx("p",{style:{whiteSpace:"nowrap",margin:0},children:"这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本，需要水平滚动才能看完。"})})})})},p={name:"双向滚动",render:()=>e.jsx("div",{style:{width:300,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(r,{style:{maxHeight:200},type:"always",scrollbars:"both",children:e.jsx("div",{style:{width:600,padding:8},children:K.slice(0,30).map(n=>e.jsxs("div",{style:{padding:"8px 12px",borderBottom:"1px solid #f0f0f0",whiteSpace:"nowrap",fontSize:14},children:[n," — 附加的较长文本用于触发水平滚动"]},n))})})})},x={name:"固定高度",render:()=>e.jsx("div",{style:{width:280,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(r,{style:{height:200},type:"always",children:e.jsx(s,{})})})},y={name:"Flex 布局中使用",render:()=>e.jsxs("div",{style:{width:280,height:300,border:"1px solid #e0e0e0",borderRadius:8,display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{padding:"12px 16px",borderBottom:"1px solid #e0e0e0",fontWeight:600,fontSize:14,flexShrink:0},children:"固定头部"}),e.jsx(r,{style:{flex:1,minHeight:0},type:"always",children:e.jsx(s,{})})]})};var m,h,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      maxHeight: 300
    }} {...args}>
        <ListContent />
      </ScrollArea>
    </div>
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,u,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'type="scroll"（滚动时显示）',
  render: () => <div style={{
    width: 280,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      maxHeight: 250
    }}>
        <ListContent />
      </ScrollArea>
    </div>
}`,...(S=(u=i.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var g,w,j;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'type="hover"（悬浮时显示）',
  render: () => <div style={{
    width: 280,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      maxHeight: 250
    }} type="hover">
        <ListContent />
      </ScrollArea>
    </div>
}`,...(j=(w=t.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var f,H,z;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'type="auto"（溢出时显示）',
  render: () => <div style={{
    width: 280,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      maxHeight: 250
    }} type="auto">
        <ListContent />
      </ScrollArea>
    </div>
}`,...(z=(H=l.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var A,R,L;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'type="always"（始终显示）',
  render: () => <div style={{
    width: 280,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      maxHeight: 250
    }} type="always">
        <ListContent />
      </ScrollArea>
    </div>
}`,...(L=(R=d.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var C,T,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "不同滚动条尺寸",
  render: () => <div style={{
    display: "flex",
    gap: 24
  }}>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        margin: "0 0 8px"
      }}>2px</p>
        <div style={{
        width: 200,
        border: "1px solid #e0e0e0",
        borderRadius: 8
      }}>
          <ScrollArea style={{
          maxHeight: 200
        }} type="always" scrollbarSize={2} scrollbarHoverSize={2}>
            <ListContent />
          </ScrollArea>
        </div>
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        margin: "0 0 8px"
      }}>4px → 6px</p>
        <div style={{
        width: 200,
        border: "1px solid #e0e0e0",
        borderRadius: 8
      }}>
          <ScrollArea style={{
          maxHeight: 200
        }} type="always" scrollbarSize={4} scrollbarHoverSize={6}>
            <ListContent />
          </ScrollArea>
        </div>
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: "#666",
        margin: "0 0 8px"
      }}>6px → 8px</p>
        <div style={{
        width: 200,
        border: "1px solid #e0e0e0",
        borderRadius: 8
      }}>
          <ScrollArea style={{
          maxHeight: 200
        }} type="always" scrollbarSize={6} scrollbarHoverSize={8}>
            <ListContent />
          </ScrollArea>
        </div>
      </div>
    </div>
}`,...(B=(T=a.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var D,F,W;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "水平滚动",
  render: () => <div style={{
    width: 300,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      maxWidth: 300
    }} type="always" scrollbars="horizontal">
        <div style={{
        width: 600,
        padding: 16
      }}>
          <p style={{
          whiteSpace: "nowrap",
          margin: 0
        }}>
            这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本，需要水平滚动才能看完。
          </p>
        </div>
      </ScrollArea>
    </div>
}`,...(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var k,_,E;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "双向滚动",
  render: () => <div style={{
    width: 300,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      maxHeight: 200
    }} type="always" scrollbars="both">
        <div style={{
        width: 600,
        padding: 8
      }}>
          {items.slice(0, 30).map(item => <div key={item} style={{
          padding: "8px 12px",
          borderBottom: "1px solid #f0f0f0",
          whiteSpace: "nowrap",
          fontSize: 14
        }}>
              {item} — 附加的较长文本用于触发水平滚动
            </div>)}
        </div>
      </ScrollArea>
    </div>
}`,...(E=(_=p.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var O,$,q;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "固定高度",
  render: () => <div style={{
    width: 280,
    border: "1px solid #e0e0e0",
    borderRadius: 8
  }}>
      <ScrollArea style={{
      height: 200
    }} type="always">
        <ListContent />
      </ScrollArea>
    </div>
}`,...(q=($=x.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var G,I,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Flex 布局中使用",
  render: () => <div style={{
    width: 280,
    height: 300,
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column"
  }}>
      <div style={{
      padding: "12px 16px",
      borderBottom: "1px solid #e0e0e0",
      fontWeight: 600,
      fontSize: 14,
      flexShrink: 0
    }}>
        固定头部
      </div>
      <ScrollArea style={{
      flex: 1,
      minHeight: 0
    }} type="always">
        <ListContent />
      </ScrollArea>
    </div>
}`,...(J=(I=y.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const ne=["Default","TypeScroll","TypeHover","TypeAuto","TypeAlways","ScrollbarSizes","HorizontalScroll","BothDirections","FixedHeight","FlexLayout"];export{p as BothDirections,o as Default,x as FixedHeight,y as FlexLayout,c as HorizontalScroll,a as ScrollbarSizes,d as TypeAlways,l as TypeAuto,t as TypeHover,i as TypeScroll,ne as __namedExportsOrder,se as default};
