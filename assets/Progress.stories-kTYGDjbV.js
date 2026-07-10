import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as v}from"./index-D4H_InIO.js";/* empty css                */import{B as f}from"./index-CmnokBQH.js";import{P as n}from"./index-CAT-ZeEF.js";import"./index-ukuGrK6K.js";import"./utils-HnQPFlDo.js";import"./index-B_ca6aDP.js";import"./index-Dth3sfoE.js";import"./index-Dj6c7Bq9.js";import"./index-CJs4gz5u.js";import"./index-klUtQC2j.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-DglMy7uv.js";import"./LoaderCircle-BJjvYEe5.js";import"./utils-YwZfuvH0-DLWngkAW.js";import"./Check-KywOgGzp.js";import"./XLg-Buk6fdo7.js";const me={title:"Components/Progress",component:n,tags:["autodocs"],argTypes:{type:{control:"radio",options:["line","circle"]},percent:{control:{type:"range",min:-1,max:100}},status:{control:"radio",options:["normal","success","error","active"]},showInfo:{control:"boolean"}},parameters:{docs:{description:{component:"进度条组件，支持线性（line）和圆形（circle）两种模式。percent 为 -1 时表示不确定进度（动画）。"}}}},t=({children:r})=>e.jsx("h3",{style:{fontSize:14,fontWeight:600,margin:"24px 0 12px",color:"rgba(0,0,0,0.82)"},children:r}),a={args:{type:"line",percent:50,status:"normal",showInfo:!0}},l={name:"进度条",render:()=>e.jsxs("div",{style:{padding:24,maxWidth:400},children:[e.jsx(t,{children:"标准的进度条"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{percent:30}),e.jsx(n,{percent:50}),e.jsx(n,{percent:100,status:"success"}),e.jsx(n,{percent:70,status:"error"}),e.jsx(n,{percent:50,status:"active"})]})]})},p={name:"进度圈",render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(t,{children:"圆形的进度"}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(n,{type:"circle",percent:75,size:80}),e.jsx(n,{type:"circle",percent:100,status:"success",size:80}),e.jsx(n,{type:"circle",percent:50,status:"error",size:80})]})]})},d={name:"不确定进度",render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(t,{children:"percent=-1 时为不确定进度（动画）"}),e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"center"},children:[e.jsxs("div",{style:{width:300},children:[e.jsx("p",{style:{fontSize:12,marginBottom:8},children:"线性"}),e.jsx(n,{percent:-1})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,marginBottom:8},children:"圆形"}),e.jsx(n,{type:"circle",percent:-1,size:48})]})]})]})},m={name:"不同尺寸",render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(t,{children:"通过 size 控制尺寸"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[e.jsx("p",{style:{fontSize:12,margin:0},children:"size=4（小）"}),e.jsx(n,{percent:60,size:4}),e.jsx("p",{style:{fontSize:12,margin:0},children:"size=8（默认）"}),e.jsx(n,{percent:60}),e.jsx("p",{style:{fontSize:12,margin:0},children:"size=12（大）"}),e.jsx(n,{percent:60,size:12})]}),e.jsx(t,{children:"圆形不同直径"}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(n,{type:"circle",percent:60,size:32,strokeWidth:3}),e.jsx(n,{type:"circle",percent:60,size:48}),e.jsx(n,{type:"circle",percent:60,size:80}),e.jsx(n,{type:"circle",percent:60,size:120,strokeWidth:6})]})]})},g={name:"自定义颜色",render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(t,{children:"通过 strokeColor / trailColor 自定义颜色"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[e.jsx(n,{percent:50,strokeColor:"#722ed1",trailColor:"rgba(114,46,209,0.1)"}),e.jsx(n,{percent:80,strokeColor:"#fa8c16"})]}),e.jsxs("div",{style:{display:"flex",gap:24,marginTop:16},children:[e.jsx(n,{type:"circle",percent:75,size:80,strokeColor:"#722ed1",trailColor:"rgba(114,46,209,0.1)"}),e.jsx(n,{type:"circle",percent:60,size:80,strokeColor:"#fa8c16"})]})]})},u={name:"自定义格式化",render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(t,{children:"通过 format 自定义显示内容"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[e.jsx(n,{percent:75,format:r=>`${r} / 100`}),e.jsx(n,{percent:60,format:r=>`已完成 ${r}%`})]}),e.jsxs("div",{style:{display:"flex",gap:24,marginTop:16},children:[e.jsx(n,{type:"circle",percent:75,size:80,format:r=>`${r}分`}),e.jsx(n,{type:"circle",percent:100,size:80,format:()=>"Done"})]})]})},x={name:"动态进度",render:()=>{const[r,i]=v.useState(0),c=()=>i(s=>Math.min(100,s+10)),o=()=>i(s=>Math.max(0,s-10));return e.jsxs("div",{style:{padding:24},children:[e.jsx(t,{children:"动态变化进度"}),e.jsxs("div",{style:{display:"flex",gap:16,marginBottom:16},children:[e.jsx(f,{variant:"default",onClick:o,children:"-10%"}),e.jsx(f,{variant:"default",onClick:c,children:"+10%"})]}),e.jsx("div",{style:{maxWidth:400,marginBottom:16},children:e.jsx(n,{percent:r,status:r>=100?"success":"normal"})}),e.jsx(n,{type:"circle",percent:r,size:80,status:r>=100?"success":"normal"})]})}},y={name:"模拟加载",render:()=>{const[r,i]=v.useState(-1),[c,o]=v.useState(!1);return v.useEffect(()=>{if(!c)return;i(0);const s=setInterval(()=>{i(h=>h>=100?(clearInterval(s),o(!1),100):h+Math.random()*15)},300);return()=>clearInterval(s)},[c]),e.jsxs("div",{style:{padding:24},children:[e.jsx(t,{children:"模拟从不确定进度到完成"}),e.jsx(f,{variant:"primary",onClick:()=>o(!0),style:{marginBottom:16},children:"开始加载"}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx("div",{style:{width:300},children:e.jsx(n,{percent:Math.min(100,Math.round(r)),status:r>=100?"success":"normal"})}),e.jsx(n,{type:"circle",percent:Math.min(100,Math.round(r)),size:48,status:r>=100?"success":"normal"})]})]})}};var j,z,S;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: "line",
    percent: 50,
    status: "normal",
    showInfo: true
  }
}`,...(S=(z=a.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var P,C,T;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "进度条",
  render: () => <div style={{
    padding: 24,
    maxWidth: 400
  }}>
      <SectionTitle>标准的进度条</SectionTitle>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <Progress percent={30} />
        <Progress percent={50} />
        <Progress percent={100} status="success" />
        <Progress percent={70} status="error" />
        <Progress percent={50} status="active" />
      </div>
    </div>
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var k,I,B;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "进度圈",
  render: () => <div style={{
    padding: 24
  }}>
      <SectionTitle>圆形的进度</SectionTitle>
      <div style={{
      display: "flex",
      gap: 24,
      alignItems: "center"
    }}>
        <Progress type="circle" percent={75} size={80} />
        <Progress type="circle" percent={100} status="success" size={80} />
        <Progress type="circle" percent={50} status="error" size={80} />
      </div>
    </div>
}`,...(B=(I=p.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var W,M,D;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "不确定进度",
  render: () => <div style={{
    padding: 24
  }}>
      <SectionTitle>percent=-1 时为不确定进度（动画）</SectionTitle>
      <div style={{
      display: "flex",
      gap: 32,
      alignItems: "center"
    }}>
        <div style={{
        width: 300
      }}>
          <p style={{
          fontSize: 12,
          marginBottom: 8
        }}>线性</p>
          <Progress percent={-1} />
        </div>
        <div>
          <p style={{
          fontSize: 12,
          marginBottom: 8
        }}>圆形</p>
          <Progress type="circle" percent={-1} size={48} />
        </div>
      </div>
    </div>
}`,...(D=(M=d.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var w,b,$;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "不同尺寸",
  render: () => <div style={{
    padding: 24
  }}>
      <SectionTitle>通过 size 控制尺寸</SectionTitle>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16,
      maxWidth: 400
    }}>
        <p style={{
        fontSize: 12,
        margin: 0
      }}>size=4（小）</p>
        <Progress percent={60} size={4} />
        <p style={{
        fontSize: 12,
        margin: 0
      }}>size=8（默认）</p>
        <Progress percent={60} />
        <p style={{
        fontSize: 12,
        margin: 0
      }}>size=12（大）</p>
        <Progress percent={60} size={12} />
      </div>
      <SectionTitle>圆形不同直径</SectionTitle>
      <div style={{
      display: "flex",
      gap: 16,
      alignItems: "center"
    }}>
        <Progress type="circle" percent={60} size={32} strokeWidth={3} />
        <Progress type="circle" percent={60} size={48} />
        <Progress type="circle" percent={60} size={80} />
        <Progress type="circle" percent={60} size={120} strokeWidth={6} />
      </div>
    </div>
}`,...($=(b=m.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};var E,R,A;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "自定义颜色",
  render: () => <div style={{
    padding: 24
  }}>
      <SectionTitle>通过 strokeColor / trailColor 自定义颜色</SectionTitle>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16,
      maxWidth: 400
    }}>
        <Progress percent={50} strokeColor="#722ed1" trailColor="rgba(114,46,209,0.1)" />
        <Progress percent={80} strokeColor="#fa8c16" />
      </div>
      <div style={{
      display: "flex",
      gap: 24,
      marginTop: 16
    }}>
        <Progress type="circle" percent={75} size={80} strokeColor="#722ed1" trailColor="rgba(114,46,209,0.1)" />
        <Progress type="circle" percent={60} size={80} strokeColor="#fa8c16" />
      </div>
    </div>
}`,...(A=(R=g.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var F,L,_;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "自定义格式化",
  render: () => <div style={{
    padding: 24
  }}>
      <SectionTitle>通过 format 自定义显示内容</SectionTitle>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16,
      maxWidth: 400
    }}>
        <Progress percent={75} format={p => \`\${p} / 100\`} />
        <Progress percent={60} format={p => \`已完成 \${p}%\`} />
      </div>
      <div style={{
      display: "flex",
      gap: 24,
      marginTop: 16
    }}>
        <Progress type="circle" percent={75} size={80} format={p => \`\${p}分\`} />
        <Progress type="circle" percent={100} size={80} format={() => "Done"} />
      </div>
    </div>
}`,...(_=(L=u.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var O,q,G;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "动态进度",
  render: () => {
    const [percent, setPercent] = useState(0);
    const increase = () => setPercent(p => Math.min(100, p + 10));
    const decrease = () => setPercent(p => Math.max(0, p - 10));
    return <div style={{
      padding: 24
    }}>
        <SectionTitle>动态变化进度</SectionTitle>
        <div style={{
        display: "flex",
        gap: 16,
        marginBottom: 16
      }}>
          <Button variant="default" onClick={decrease}>-10%</Button>
          <Button variant="default" onClick={increase}>+10%</Button>
        </div>
        <div style={{
        maxWidth: 400,
        marginBottom: 16
      }}>
          <Progress percent={percent} status={percent >= 100 ? "success" : "normal"} />
        </div>
        <Progress type="circle" percent={percent} size={80} status={percent >= 100 ? "success" : "normal"} />
      </div>;
  }
}`,...(G=(q=x.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,K;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "模拟加载",
  render: () => {
    const [percent, setPercent] = useState(-1);
    const [running, setRunning] = useState(false);
    useEffect(() => {
      if (!running) return;
      setPercent(0);
      const timer = setInterval(() => {
        setPercent(p => {
          if (p >= 100) {
            clearInterval(timer);
            setRunning(false);
            return 100;
          }
          return p + Math.random() * 15;
        });
      }, 300);
      return () => clearInterval(timer);
    }, [running]);
    return <div style={{
      padding: 24
    }}>
        <SectionTitle>模拟从不确定进度到完成</SectionTitle>
        <Button variant="primary" onClick={() => setRunning(true)} style={{
        marginBottom: 16
      }}>
          开始加载
        </Button>
        <div style={{
        display: "flex",
        gap: 24,
        alignItems: "center"
      }}>
          <div style={{
          width: 300
        }}>
            <Progress percent={Math.min(100, Math.round(percent))} status={percent >= 100 ? "success" : "normal"} />
          </div>
          <Progress type="circle" percent={Math.min(100, Math.round(percent))} size={48} status={percent >= 100 ? "success" : "normal"} />
        </div>
      </div>;
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ge=["Playground","Line","Circle","Indeterminate","Sizes","CustomColor","CustomFormat","Dynamic","AutoProgress"];export{y as AutoProgress,p as Circle,g as CustomColor,u as CustomFormat,x as Dynamic,d as Indeterminate,l as Line,a as Playground,m as Sizes,ge as __namedExportsOrder,me as default};
