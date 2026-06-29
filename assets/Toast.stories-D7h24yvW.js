import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{r as S}from"./index-D4H_InIO.js";/* empty css                */import{B as o}from"./index-rpfjBfXO.js";import{t}from"./index-Cv8F486c.js";import"./index-ukuGrK6K.js";import"./utils-HnQPFlDo.js";import"./index-CzDrSyg2.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-DwD4BYpe.js";import"./utils-YwZfuvH0-DLWngkAW.js";import"./XLg-Buk6fdo7.js";import"./ExclamationCircle-2GOVdgX_.js";const q={title:"Components/Toast",parameters:{docs:{description:{component:"命令式全局提示组件（基于 sonner）。Storybook 中因 iframe 限制，Toast 定位表现与实际应用不同。"}}}},r={render:()=>n.jsxs("div",{style:{display:"flex",gap:12,padding:24},children:[n.jsx(o,{onClick:()=>t.info("这是一条信息提示"),children:"Info"}),n.jsx(o,{onClick:()=>t.success("操作成功！"),children:"Success"}),n.jsx(o,{onClick:()=>t.warning("请注意，这是一条警告"),children:"Warning"}),n.jsx(o,{onClick:()=>t.error("出错了，请重试"),children:"Error"})]})},s={render:()=>n.jsx("div",{style:{padding:24},children:n.jsx(o,{onClick:()=>t.info({content:"点击右侧按钮可关闭此消息",closable:!0,duration:0}),children:"显示可关闭消息"})})},a={render:()=>n.jsxs("div",{style:{display:"flex",gap:12,padding:24},children:[n.jsx(o,{onClick:()=>t.info({content:"1 秒后自动关闭",duration:1e3}),children:"1 秒后关闭"}),n.jsx(o,{onClick:()=>t.info({content:"5 秒后自动关闭",duration:5e3}),children:"5 秒后关闭"}),n.jsx(o,{onClick:()=>t.info({content:"需要手动关闭",duration:0,closable:!0}),children:"不自动关闭"})]})},i={render:()=>{const e=S.useRef(0),v=()=>{e.current+=1,t.info({content:`消息已更新 ${e.current} 次`,key:"updatable",duration:0,closable:!0})};return n.jsxs("div",{style:{padding:24},children:[n.jsx("p",{style:{fontSize:12,color:"rgba(0,0,0,0.46)",marginBottom:12},children:"多次点击不会创建新消息，而是更新已有消息的内容"}),n.jsx(o,{onClick:v,children:"创建/更新消息"})]})}},c={render:()=>{const e=()=>{t.info({content:"消息 1",duration:0,closable:!0}),t.success({content:"消息 2",duration:0,closable:!0}),t.warning({content:"消息 3",duration:0,closable:!0})};return n.jsxs("div",{style:{display:"flex",gap:12,padding:24},children:[n.jsx(o,{onClick:e,children:"创建 3 条消息"}),n.jsx(o,{danger:!0,onClick:()=>t.destroy(),children:"销毁所有"})]})}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 24
  }}>
      <Button onClick={() => toast.info("这是一条信息提示")}>Info</Button>
      <Button onClick={() => toast.success("操作成功！")}>Success</Button>
      <Button onClick={() => toast.warning("请注意，这是一条警告")}>Warning</Button>
      <Button onClick={() => toast.error("出错了，请重试")}>Error</Button>
    </div>
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,m,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <Button onClick={() => toast.info({
      content: "点击右侧按钮可关闭此消息",
      closable: true,
      duration: 0
    })}>
        显示可关闭消息
      </Button>
    </div>
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,C,B;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 24
  }}>
      <Button onClick={() => toast.info({
      content: "1 秒后自动关闭",
      duration: 1000
    })}>
        1 秒后关闭
      </Button>
      <Button onClick={() => toast.info({
      content: "5 秒后自动关闭",
      duration: 5000
    })}>
        5 秒后关闭
      </Button>
      <Button onClick={() => toast.info({
      content: "需要手动关闭",
      duration: 0,
      closable: true
    })}>
        不自动关闭
      </Button>
    </div>
}`,...(B=(C=a.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var y,k,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const countRef = useRef(0);
    const handleClick = () => {
      countRef.current += 1;
      toast.info({
        content: \`消息已更新 \${countRef.current} 次\`,
        key: "updatable",
        duration: 0,
        closable: true
      });
    };
    return <div style={{
      padding: 24
    }}>
        <p style={{
        fontSize: 12,
        color: "rgba(0,0,0,0.46)",
        marginBottom: 12
      }}>
          多次点击不会创建新消息，而是更新已有消息的内容
        </p>
        <Button onClick={handleClick}>创建/更新消息</Button>
      </div>;
  }
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var h,b,j;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const handleCreate = () => {
      toast.info({
        content: "消息 1",
        duration: 0,
        closable: true
      });
      toast.success({
        content: "消息 2",
        duration: 0,
        closable: true
      });
      toast.warning({
        content: "消息 3",
        duration: 0,
        closable: true
      });
    };
    return <div style={{
      display: "flex",
      gap: 12,
      padding: 24
    }}>
        <Button onClick={handleCreate}>创建 3 条消息</Button>
        <Button danger onClick={() => toast.destroy()}>销毁所有</Button>
      </div>;
  }
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const F=["Basic","Closable","Duration","UpdateByKey","DestroyAll"];export{r as Basic,s as Closable,c as DestroyAll,a as Duration,i as UpdateByKey,F as __namedExportsOrder,q as default};
