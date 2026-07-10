import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as c}from"./index-D4H_InIO.js";import{a as k}from"./utils-HnQPFlDo.js";import{X as Z}from"./XLg-Buk6fdo7.js";import{C as tt}from"./Check-KywOgGzp.js";import{B as r}from"./index-CmnokBQH.js";import"./utils-YwZfuvH0-DLWngkAW.js";import"./index-ukuGrK6K.js";import"./index-B_ca6aDP.js";import"./index-Dth3sfoE.js";import"./index-Dj6c7Bq9.js";import"./index-CJs4gz5u.js";import"./index-klUtQC2j.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-DglMy7uv.js";import"./LoaderCircle-BJjvYEe5.js";const o=({items:s,current:n=0,status:e="process",size:a="default",titlePlacement:i="vertical",initial:u=0,onChange:x,className:Q,style:U})=>{const _=c.useMemo(()=>s.map((l,d)=>{let m;return l.status?m=l.status:d<n?m="finish":d===n?m=e:m="wait",{...l,_status:m,_index:d}}),[s,n,e]),Y=!!x;return t.jsx("div",{className:k("lg-steps",`lg-steps--${a}`,`lg-steps--title-${i}`,Q),style:U,children:_.map((l,d)=>{const m=d===_.length-1,B=Y&&!l.disabled&&l._status==="finish";return t.jsxs("div",{className:k("lg-steps__item",`lg-steps__item--${l._status}`,B&&"lg-steps__item--clickable"),onClick:()=>{B&&(x==null||x(d))},children:[t.jsxs("div",{className:"lg-steps__item-container",children:[t.jsx("div",{className:"lg-steps__icon-wrapper",children:t.jsx(et,{status:l._status,index:d+u,icon:l.icon,size:a})}),t.jsxs("div",{className:"lg-steps__content",children:[t.jsx("div",{className:"lg-steps__title",children:l.title}),l.description&&t.jsx("div",{className:"lg-steps__description",children:l.description})]})]}),!m&&t.jsx("div",{className:k("lg-steps__connector",d<n&&"lg-steps__connector--finished")})]},d)})})};o.displayName="Steps";function et({status:s,index:n,icon:e,size:a}){if(e)return t.jsx("div",{className:"lg-steps__icon lg-steps__icon--custom",children:e});const i=a==="small"?14:16;switch(s){case"finish":return t.jsx("div",{className:"lg-steps__icon lg-steps__icon--finish",children:t.jsx(tt,{size:i})});case"error":return t.jsx("div",{className:"lg-steps__icon lg-steps__icon--error",children:t.jsx(Z,{size:i})});case"process":return t.jsx("div",{className:"lg-steps__icon lg-steps__icon--process",children:t.jsx("span",{className:"lg-steps__icon-number",children:n+1})});case"wait":default:return t.jsx("div",{className:"lg-steps__icon lg-steps__icon--wait",children:t.jsx("span",{className:"lg-steps__icon-number",children:n+1})})}}o.__docgenInfo={description:`Steps 步骤条组件
纯自研，支持页面级/次级变体，四种状态，标题纵/横排列`,methods:[],displayName:"Steps",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:"步骤数据"},current:{required:!1,tsType:{name:"number"},description:"当前步骤索引（0-based），默认 0",defaultValue:{value:"0",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"wait" | "process" | "finish" | "error"',elements:[{name:"literal",value:'"wait"'},{name:"literal",value:'"process"'},{name:"literal",value:'"finish"'},{name:"literal",value:'"error"'}]},description:"当前步骤的状态，默认 process",defaultValue:{value:'"process"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"default" | "small"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'}]},description:"层级变体：default 为页面级，small 为次级",defaultValue:{value:'"default"',computed:!1}},titlePlacement:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"标题放置位置：vertical 标题在图标下方，horizontal 标题在图标右侧",defaultValue:{value:'"vertical"',computed:!1}},initial:{required:!1,tsType:{name:"number"},description:"起始序号，默认 0",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"}],return:{name:"void"}}},description:"点击步骤回调，不传则不可点击"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"}}};const gt={title:"Components/Steps",component:o,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["default","small"]},titlePlacement:{control:"select",options:["vertical","horizontal"]},current:{control:"number"}}},p=[{title:"选择产品"},{title:"确认订单"},{title:"付款"},{title:"等待开通"}],v={name:"页面级 - 基础",render:()=>{const[s,n]=c.useState(0);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[t.jsx(o,{items:p,current:s}),t.jsxs("div",{style:{display:"flex",gap:12},children:[t.jsx(r,{variant:"secondary",onClick:()=>n(e=>Math.max(0,e-1)),children:"上一步"}),t.jsx(r,{variant:"primary",onClick:()=>n(e=>Math.min(p.length-1,e+1)),children:"下一步"}),t.jsx(r,{variant:"text",onClick:()=>n(0),children:"重置"})]}),t.jsxs("div",{style:{fontSize:14,color:"#666"},children:["当前步骤：",s+1," / ",p.length]})]})}},y={name:"次级步骤条",render:()=>{const s=[{title:"上传"},{title:"检测"},{title:"信息"}],[n,e]=c.useState(0);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[t.jsx(o,{items:s,current:n,size:"small"}),t.jsxs("div",{style:{display:"flex",gap:12},children:[t.jsx(r,{variant:"secondary",onClick:()=>e(a=>Math.max(0,a-1)),children:"上一步"}),t.jsx(r,{variant:"primary",onClick:()=>e(a=>Math.min(s.length-1,a+1)),children:"下一步"}),t.jsx(r,{variant:"text",onClick:()=>e(0),children:"重置"})]})]})}},h={name:"错误状态切换",render:()=>{const[s,n]=c.useState(1),[e,a]=c.useState("process");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[t.jsx(o,{items:p,current:s,status:e}),t.jsxs("div",{style:{display:"flex",gap:12},children:[t.jsx(r,{variant:"secondary",onClick:()=>n(i=>Math.max(0,i-1)),children:"上一步"}),t.jsx(r,{variant:"primary",onClick:()=>n(i=>Math.min(p.length-1,i+1)),children:"下一步"}),t.jsx(r,{variant:"primary",danger:!0,onClick:()=>a("error"),children:"设为错误"}),t.jsx(r,{variant:"text",onClick:()=>a("process"),children:"恢复正常"})]}),t.jsxs("div",{style:{fontSize:14,color:"#666"},children:["当前步骤：",s+1,"，状态：",e]})]})}},f={name:"带辅助信息",render:()=>{const s=[{title:"选择产品",description:"已提交"},{title:"确认订单",description:"处理中"},{title:"付款",description:"未开始"},{title:"等待开通",description:"未开始"}],[n,e]=c.useState(1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[t.jsx(o,{items:s,current:n}),t.jsxs("div",{style:{display:"flex",gap:12},children:[t.jsx(r,{variant:"secondary",onClick:()=>e(a=>Math.max(0,a-1)),children:"上一步"}),t.jsx(r,{variant:"primary",onClick:()=>e(a=>Math.min(s.length-1,a+1)),children:"下一步"})]})]})}},g={name:"标题横向排列",render:()=>{const[s,n]=c.useState(1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[t.jsx(o,{items:p,current:s,titlePlacement:"horizontal"}),t.jsxs("div",{style:{display:"flex",gap:12},children:[t.jsx(r,{variant:"secondary",onClick:()=>n(e=>Math.max(0,e-1)),children:"上一步"}),t.jsx(r,{variant:"primary",onClick:()=>n(e=>Math.min(p.length-1,e+1)),children:"下一步"})]})]})}},C={name:"可点击跳转",render:()=>{const[s,n]=c.useState(2);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[t.jsx(o,{items:p,current:s,onChange:n}),t.jsxs("div",{style:{display:"flex",gap:12},children:[t.jsx(r,{variant:"secondary",onClick:()=>n(e=>Math.max(0,e-1)),children:"上一步"}),t.jsx(r,{variant:"primary",onClick:()=>n(e=>Math.min(p.length-1,e+1)),children:"下一步"})]}),t.jsxs("div",{style:{fontSize:14,color:"#666"},children:["点击已完成步骤可跳回，当前：",s+1]})]})}},S={name:"次级 - 错误状态",render:()=>{const s=[{title:"上传"},{title:"检测"},{title:"信息"}],[n,e]=c.useState(1),[a,i]=c.useState("process");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[t.jsx(o,{items:s,current:n,size:"small",status:a}),t.jsxs("div",{style:{display:"flex",gap:12},children:[t.jsx(r,{variant:"secondary",onClick:()=>e(u=>Math.max(0,u-1)),children:"上一步"}),t.jsx(r,{variant:"primary",onClick:()=>e(u=>Math.min(s.length-1,u+1)),children:"下一步"}),t.jsx(r,{variant:"primary",danger:!0,onClick:()=>i("error"),children:"设为错误"}),t.jsx(r,{variant:"text",onClick:()=>i("process"),children:"恢复正常"})]})]})}},j={name:"多步骤流程",render:()=>{const s=[{title:"需求分析"},{title:"方案设计"},{title:"开发实现"},{title:"测试验证"},{title:"部署上线"},{title:"运维监控"}],[n,e]=c.useState(0),[a,i]=c.useState("process");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[t.jsx(o,{items:s,current:n,status:a}),t.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[t.jsx(r,{variant:"secondary",onClick:()=>e(u=>Math.max(0,u-1)),children:"上一步"}),t.jsx(r,{variant:"primary",onClick:()=>e(u=>Math.min(s.length-1,u+1)),children:"下一步"}),t.jsx(r,{variant:"primary",danger:!0,onClick:()=>i("error"),children:"设为错误"}),t.jsx(r,{variant:"text",onClick:()=>{i("process"),e(0)},children:"重置"})]}),t.jsxs("div",{style:{fontSize:14,color:"#666"},children:["步骤 ",n+1," / ",s.length,"，状态：",a]})]})}};var M,z,b;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "页面级 - 基础",
  render: () => {
    const [current, setCurrent] = useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
        <Steps items={basicItems} current={current} />
        <div style={{
        display: "flex",
        gap: 12
      }}>
          <Button variant="secondary" onClick={() => setCurrent(c => Math.max(0, c - 1))}>
            上一步
          </Button>
          <Button variant="primary" onClick={() => setCurrent(c => Math.min(basicItems.length - 1, c + 1))}>
            下一步
          </Button>
          <Button variant="text" onClick={() => setCurrent(0)}>
            重置
          </Button>
        </div>
        <div style={{
        fontSize: 14,
        color: "#666"
      }}>当前步骤：{current + 1} / {basicItems.length}</div>
      </div>;
  }
}`,...(b=(z=v.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var D,N,I;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "次级步骤条",
  render: () => {
    const items = [{
      title: "上传"
    }, {
      title: "检测"
    }, {
      title: "信息"
    }];
    const [current, setCurrent] = useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
        <Steps items={items} current={current} size="small" />
        <div style={{
        display: "flex",
        gap: 12
      }}>
          <Button variant="secondary" onClick={() => setCurrent(c => Math.max(0, c - 1))}>
            上一步
          </Button>
          <Button variant="primary" onClick={() => setCurrent(c => Math.min(items.length - 1, c + 1))}>
            下一步
          </Button>
          <Button variant="text" onClick={() => setCurrent(0)}>
            重置
          </Button>
        </div>
      </div>;
  }
}`,...(I=(N=y.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var w,T,q;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "错误状态切换",
  render: () => {
    const [current, setCurrent] = useState(1);
    const [status, setStatus] = useState<StepStatus>("process");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
        <Steps items={basicItems} current={current} status={status} />
        <div style={{
        display: "flex",
        gap: 12
      }}>
          <Button variant="secondary" onClick={() => setCurrent(c => Math.max(0, c - 1))}>
            上一步
          </Button>
          <Button variant="primary" onClick={() => setCurrent(c => Math.min(basicItems.length - 1, c + 1))}>
            下一步
          </Button>
          <Button variant="primary" danger onClick={() => setStatus("error")}>
            设为错误
          </Button>
          <Button variant="text" onClick={() => setStatus("process")}>
            恢复正常
          </Button>
        </div>
        <div style={{
        fontSize: 14,
        color: "#666"
      }}>
          当前步骤：{current + 1}，状态：{status}
        </div>
      </div>;
  }
}`,...(q=(T=h.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var E,V,P;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "带辅助信息",
  render: () => {
    const items = [{
      title: "选择产品",
      description: "已提交"
    }, {
      title: "确认订单",
      description: "处理中"
    }, {
      title: "付款",
      description: "未开始"
    }, {
      title: "等待开通",
      description: "未开始"
    }];
    const [current, setCurrent] = useState(1);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
        <Steps items={items} current={current} />
        <div style={{
        display: "flex",
        gap: 12
      }}>
          <Button variant="secondary" onClick={() => setCurrent(c => Math.max(0, c - 1))}>
            上一步
          </Button>
          <Button variant="primary" onClick={() => setCurrent(c => Math.min(items.length - 1, c + 1))}>
            下一步
          </Button>
        </div>
      </div>;
  }
}`,...(P=(V=f.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var W,$,H;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "标题横向排列",
  render: () => {
    const [current, setCurrent] = useState(1);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
        <Steps items={basicItems} current={current} titlePlacement="horizontal" />
        <div style={{
        display: "flex",
        gap: 12
      }}>
          <Button variant="secondary" onClick={() => setCurrent(c => Math.max(0, c - 1))}>
            上一步
          </Button>
          <Button variant="primary" onClick={() => setCurrent(c => Math.min(basicItems.length - 1, c + 1))}>
            下一步
          </Button>
        </div>
      </div>;
  }
}`,...(H=($=g.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var L,X,A;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "可点击跳转",
  render: () => {
    const [current, setCurrent] = useState(2);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
        <Steps items={basicItems} current={current} onChange={setCurrent} />
        <div style={{
        display: "flex",
        gap: 12
      }}>
          <Button variant="secondary" onClick={() => setCurrent(c => Math.max(0, c - 1))}>
            上一步
          </Button>
          <Button variant="primary" onClick={() => setCurrent(c => Math.min(basicItems.length - 1, c + 1))}>
            下一步
          </Button>
        </div>
        <div style={{
        fontSize: 14,
        color: "#666"
      }}>
          点击已完成步骤可跳回，当前：{current + 1}
        </div>
      </div>;
  }
}`,...(A=(X=C.parameters)==null?void 0:X.docs)==null?void 0:A.source}}};var O,R,F;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "次级 - 错误状态",
  render: () => {
    const items = [{
      title: "上传"
    }, {
      title: "检测"
    }, {
      title: "信息"
    }];
    const [current, setCurrent] = useState(1);
    const [status, setStatus] = useState<StepStatus>("process");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
        <Steps items={items} current={current} size="small" status={status} />
        <div style={{
        display: "flex",
        gap: 12
      }}>
          <Button variant="secondary" onClick={() => setCurrent(c => Math.max(0, c - 1))}>
            上一步
          </Button>
          <Button variant="primary" onClick={() => setCurrent(c => Math.min(items.length - 1, c + 1))}>
            下一步
          </Button>
          <Button variant="primary" danger onClick={() => setStatus("error")}>
            设为错误
          </Button>
          <Button variant="text" onClick={() => setStatus("process")}>
            恢复正常
          </Button>
        </div>
      </div>;
  }
}`,...(F=(R=S.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var G,J,K;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "多步骤流程",
  render: () => {
    const items = [{
      title: "需求分析"
    }, {
      title: "方案设计"
    }, {
      title: "开发实现"
    }, {
      title: "测试验证"
    }, {
      title: "部署上线"
    }, {
      title: "运维监控"
    }];
    const [current, setCurrent] = useState(0);
    const [status, setStatus] = useState<StepStatus>("process");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
        <Steps items={items} current={current} status={status} />
        <div style={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap"
      }}>
          <Button variant="secondary" onClick={() => setCurrent(c => Math.max(0, c - 1))}>
            上一步
          </Button>
          <Button variant="primary" onClick={() => setCurrent(c => Math.min(items.length - 1, c + 1))}>
            下一步
          </Button>
          <Button variant="primary" danger onClick={() => setStatus("error")}>
            设为错误
          </Button>
          <Button variant="text" onClick={() => {
          setStatus("process");
          setCurrent(0);
        }}>
            重置
          </Button>
        </div>
        <div style={{
        fontSize: 14,
        color: "#666"
      }}>
          步骤 {current + 1} / {items.length}，状态：{status}
        </div>
      </div>;
  }
}`,...(K=(J=j.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Ct=["Default","SmallVariant","ErrorStatus","WithDescription","TitleHorizontal","Clickable","SmallError","ManySteps"];export{C as Clickable,v as Default,h as ErrorStatus,j as ManySteps,S as SmallError,y as SmallVariant,g as TitleHorizontal,f as WithDescription,Ct as __namedExportsOrder,gt as default};
