import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{r as f}from"./index-D4H_InIO.js";/* empty css                */import{B as s}from"./index-CmnokBQH.js";import{D as t,a as v,b as k,c as L,d as B,e as l,f as I,g as r,h as j,i as D,j as S}from"./index-Cqy5fFNB.js";import"./index-ukuGrK6K.js";import"./utils-HnQPFlDo.js";import"./index-B_ca6aDP.js";import"./index-Dth3sfoE.js";import"./index-Dj6c7Bq9.js";import"./index-CJs4gz5u.js";import"./index-klUtQC2j.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-DglMy7uv.js";import"./LoaderCircle-BJjvYEe5.js";import"./utils-YwZfuvH0-DLWngkAW.js";import"./index-SIrKXax8.js";import"./Combination-DnvQz1mi.js";import"./index-Duhf0EI7.js";import"./index-C6cFfWA7.js";import"./index-BeHA-PsQ.js";import"./index-YtIeenAn.js";import"./Check-KywOgGzp.js";import"./ChevronRight-CtQYtb-_.js";const Jn={title:"Components/Dropdown",tags:["autodocs"]},C=()=>n.jsx("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",children:n.jsx("path",{d:"M11.5 2.5l2 2-8 8H3.5v-2l8-8z",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})}),R=()=>n.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",children:[n.jsx("rect",{x:"5.5",y:"5.5",width:"7",height:"7",rx:"1",stroke:"currentColor",strokeWidth:"1.2"}),n.jsx("path",{d:"M3.5 10.5v-7a1 1 0 011-1h7",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]}),z=()=>n.jsx("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",children:n.jsx("path",{d:"M3 4.5h10M6 4.5V3a1 1 0 011-1h2a1 1 0 011 1v1.5M4.5 4.5l.5 8a1 1 0 001 1h4a1 1 0 001-1l.5-8",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})}),hn=()=>n.jsx("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",children:n.jsx("path",{d:"M6 9.5l4-3M10 3.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM10 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM6 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",stroke:"currentColor",strokeWidth:"1.2"})}),d={render:()=>{const e=[{key:"edit",label:"编辑",onSelect:()=>console.log("编辑")},{key:"copy",label:"复制",onSelect:()=>console.log("复制")},{key:"share",label:"分享",onSelect:()=>console.log("分享")}];return n.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:n.jsx(t,{items:e,children:n.jsx(s,{children:"操作菜单"})})})}},a={render:()=>{const e=[{key:"edit",label:"编辑",icon:n.jsx(C,{}),onSelect:()=>console.log("编辑")},{key:"copy",label:"复制",icon:n.jsx(R,{}),onSelect:()=>console.log("复制")},{type:"separator"},{key:"delete",label:"删除",icon:n.jsx(z,{}),danger:!0,onSelect:()=>console.log("删除")}];return n.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:n.jsx(t,{items:e,children:n.jsx(s,{children:"带图标"})})})}},c={render:()=>{const e=[{key:"view",label:"查看详情",onSelect:()=>console.log("查看")},{key:"export",label:"导出（无权限）",disabled:!0},{type:"separator"},{key:"delete",label:"删除",danger:!0,onSelect:()=>console.log("删除")}];return n.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:n.jsx(t,{items:e,children:n.jsx(s,{children:"更多操作"})})})}},p={render:()=>{const e=[{type:"label",label:"编辑操作"},{key:"edit",label:"编辑",icon:n.jsx(C,{})},{key:"copy",label:"复制",icon:n.jsx(R,{})},{type:"separator"},{type:"label",label:"分享"},{key:"share",label:"分享给同事",icon:n.jsx(hn,{})},{type:"separator"},{type:"label",label:"危险操作"},{key:"delete",label:"删除",icon:n.jsx(z,{}),danger:!0}];return n.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:n.jsx(t,{items:e,children:n.jsx(s,{children:"分组菜单"})})})}},u={render:()=>{const e=[{key:"edit",label:"编辑",icon:n.jsx(C,{}),onSelect:()=>console.log("编辑")},{key:"copy",label:"复制",icon:n.jsx(R,{}),onSelect:()=>console.log("复制")},{type:"separator"},{key:"delete",label:"删除",icon:n.jsx(z,{}),danger:!0,onSelect:()=>console.log("删除")}];return n.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:n.jsxs("div",{style:{width:300,padding:16,border:"1px solid #e8e8e8",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsx("span",{style:{fontSize:14,fontWeight:500},children:"任务名称"}),n.jsx(t,{items:e,contentProps:{align:"end"},children:n.jsx("button",{type:"button",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:28,height:28,border:"none",borderRadius:6,background:"transparent",cursor:"pointer"},children:n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[n.jsx("circle",{cx:"4",cy:"8",r:"1.5"}),n.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),n.jsx("circle",{cx:"12",cy:"8",r:"1.5"})]})})})]})})}},g={render:()=>{const e=[{key:"today",label:"今日",onSelect:()=>console.log("today")},{key:"week",label:"本周",onSelect:()=>console.log("week")},{key:"month",label:"本月",onSelect:()=>console.log("month")},{key:"quarter",label:"本季度",onSelect:()=>console.log("quarter")}];return n.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:n.jsx(t,{items:e,contentProps:{align:"start"},children:n.jsxs("button",{type:"button",style:{display:"inline-flex",alignItems:"center",gap:4,padding:"4px 8px",border:"none",borderRadius:6,background:"rgba(0,0,0,0.04)",cursor:"pointer",fontSize:13,color:"rgba(0,0,0,0.82)"},children:[n.jsx("span",{children:"本周"}),n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:n.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})})}},m={render:()=>{const[e,o]=f.useState(!1),i=[{key:"a",label:"操作 A",onSelect:()=>console.log("A")},{key:"b",label:"操作 B",onSelect:()=>console.log("B")}];return n.jsxs("div",{style:{padding:100,display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[n.jsxs("p",{style:{margin:0,fontSize:12,color:"rgba(0,0,0,0.46)"},children:["状态：",e?"打开":"关闭"]}),n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(s,{size:"sm",onClick:()=>o(!e),children:"外部切换"}),n.jsx(t,{items:i,open:e,onOpenChange:o,children:n.jsx(s,{variant:"primary",children:"受控菜单"})})]})]})}},xn=["top","bottom","left","right"],yn=["start","center","end"],h={render:()=>{const e=[{key:"a",label:"选项 A"},{key:"b",label:"选项 B"}];return n.jsx("div",{style:{padding:120,display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:xn.map(o=>n.jsx("div",{style:{display:"flex",gap:8},children:yn.map(i=>n.jsx(t,{items:e,contentProps:{side:o,align:i,sideOffset:6},children:n.jsxs(s,{size:"sm",children:[o,"-",i]})},`${o}-${i}`))},o))})}},x={name:"Compound: RadioGroup 单选",render:()=>{const[e,o]=f.useState("my");return n.jsxs("div",{style:{padding:100,display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[n.jsxs("p",{style:{margin:0,fontSize:12,color:"rgba(0,0,0,0.46)"},children:["当前选中：",e]}),n.jsxs(t,{children:[n.jsx(v,{children:n.jsxs("button",{type:"button",style:{display:"inline-flex",alignItems:"center",gap:4,padding:"6px 12px",border:"1px solid #d9d9d9",borderRadius:8,background:"#fff",cursor:"pointer",fontSize:14},children:[n.jsx("span",{children:e==="my"?"我的数据":"团队数据"}),n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:n.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),n.jsx(k,{children:n.jsxs(B,{value:e,onValueChange:o,children:[n.jsx(l,{value:"my",children:"我的数据"}),n.jsx(l,{value:"team",children:"团队数据"})]})})]})]})}},y={name:"Compound: 复合场景",render:()=>{const[e,o]=f.useState("newest");return n.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:n.jsxs(t,{children:[n.jsx(v,{children:n.jsx(s,{children:"排序与筛选"})}),n.jsxs(k,{style:{minWidth:180},children:[n.jsx(L,{children:"排序方式"}),n.jsxs(B,{value:e,onValueChange:o,children:[n.jsx(l,{value:"newest",children:"最新优先"}),n.jsx(l,{value:"oldest",children:"最早优先"}),n.jsx(l,{value:"name",children:"按名称"})]}),n.jsx(I,{}),n.jsx(L,{children:"操作"}),n.jsx(r,{onSelect:()=>console.log("刷新"),children:"刷新列表"}),n.jsx(r,{onSelect:()=>console.log("导出"),children:"导出数据"})]})]})})}},wn=()=>n.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",children:[n.jsx("circle",{cx:"8",cy:"8",r:"2.5",stroke:"currentColor",strokeWidth:"1.2"}),n.jsx("path",{d:"M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.75 3.75l1.06 1.06M11.19 11.19l1.06 1.06M3.75 12.25l1.06-1.06M11.19 4.81l1.06-1.06",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]}),bn=()=>n.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",children:[n.jsx("circle",{cx:"8",cy:"8",r:"5.5",stroke:"currentColor",strokeWidth:"1.2"}),n.jsx("path",{d:"M2.5 8h11M8 2.5c1.5 1.5 2 3.5 2 5.5s-.5 4-2 5.5M8 2.5c-1.5 1.5-2 3.5-2 5.5s.5 4 2 5.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]}),jn=()=>n.jsx("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",children:n.jsx("path",{d:"M6 13H3.5A1.5 1.5 0 012 11.5v-7A1.5 1.5 0 013.5 3H6M11 11l3-3-3-3M5.5 8H14",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})}),w={name:"子菜单（用户面板模拟）",render:()=>{const[e,o]=f.useState("zh-CN");return n.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:n.jsxs(t,{children:[n.jsx(v,{children:n.jsxs("button",{type:"button",style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"1px solid #e8e8e8",borderRadius:8,background:"#fff",cursor:"pointer"},children:[n.jsx("img",{src:"https://api.dicebear.com/7.x/initials/svg?seed=HXH&size=24",alt:"",style:{width:24,height:24,borderRadius:"50%"}}),n.jsx("span",{style:{fontSize:14},children:"洪鑫海"})]})}),n.jsxs(k,{side:"top",align:"start",style:{minWidth:200},children:[n.jsxs("div",{style:{padding:"8px 12px"},children:[n.jsx("div",{style:{fontSize:14,fontWeight:500},children:"洪鑫海"}),n.jsx("div",{style:{fontSize:12,color:"rgba(0,0,0,0.46)",marginTop:2},children:"租户3"})]}),n.jsx(I,{}),n.jsxs(j,{children:[n.jsx(D,{icon:n.jsx(wn,{}),children:"偏好设置"}),n.jsx(S,{children:n.jsxs("div",{style:{padding:12,width:200},children:[n.jsx("div",{style:{fontSize:13,fontWeight:500,marginBottom:8},children:"偏好设置面板"}),n.jsx("div",{style:{fontSize:12,color:"rgba(0,0,0,0.46)"},children:"这里可以放任意自定义内容，比如 UserPreferencesPanel"})]})})]}),n.jsxs(j,{children:[n.jsx(D,{icon:n.jsx(bn,{}),children:e==="zh-CN"?"简体中文":"English"}),n.jsx(S,{children:n.jsxs(B,{value:e,onValueChange:o,children:[n.jsx(l,{value:"zh-CN",children:"简体中文"}),n.jsx(l,{value:"en-US",children:"English"}),n.jsx(l,{value:"ja-JP",children:"日本語"})]})})]}),n.jsx(r,{icon:n.jsx(C,{}),onSelect:()=>console.log("归档管理"),children:"归档管理"}),n.jsx(I,{}),n.jsx(r,{icon:n.jsx(jn,{}),danger:!0,onSelect:()=>console.log("退出登录"),children:"退出登录"})]})]})})}},b={name:"三级嵌套子菜单",render:()=>n.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:n.jsxs(t,{children:[n.jsx(v,{children:n.jsx(s,{children:"三级嵌套"})}),n.jsxs(k,{children:[n.jsx(r,{onSelect:()=>console.log("A"),children:"普通项 A"}),n.jsxs(j,{children:[n.jsx(D,{children:"二级菜单"}),n.jsxs(S,{children:[n.jsx(r,{onSelect:()=>console.log("B1"),children:"二级项 B1"}),n.jsx(r,{onSelect:()=>console.log("B2"),children:"二级项 B2"}),n.jsxs(j,{children:[n.jsx(D,{children:"三级菜单"}),n.jsxs(S,{children:[n.jsx(r,{onSelect:()=>console.log("C1"),children:"三级项 C1"}),n.jsx(r,{onSelect:()=>console.log("C2"),children:"三级项 C2"}),n.jsx(r,{onSelect:()=>console.log("C3"),children:"三级项 C3"})]})]})]})]}),n.jsx(r,{onSelect:()=>console.log("D"),children:"普通项 D"})]})]})})};var M,T,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const items: DropdownItemData[] = [{
      key: "edit",
      label: "编辑",
      onSelect: () => console.log("编辑")
    }, {
      key: "copy",
      label: "复制",
      onSelect: () => console.log("复制")
    }, {
      key: "share",
      label: "分享",
      onSelect: () => console.log("分享")
    }];
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <Dropdown items={items}>
          <Button>操作菜单</Button>
        </Dropdown>
      </div>;
  }
}`,...(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var G,A,P;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const items: DropdownItemData[] = [{
      key: "edit",
      label: "编辑",
      icon: <EditIcon />,
      onSelect: () => console.log("编辑")
    }, {
      key: "copy",
      label: "复制",
      icon: <CopyIcon />,
      onSelect: () => console.log("复制")
    }, {
      type: "separator"
    }, {
      key: "delete",
      label: "删除",
      icon: <TrashIcon />,
      danger: true,
      onSelect: () => console.log("删除")
    }];
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <Dropdown items={items}>
          <Button>带图标</Button>
        </Dropdown>
      </div>;
  }
}`,...(P=(A=a.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var E,H,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const items: DropdownItemData[] = [{
      key: "view",
      label: "查看详情",
      onSelect: () => console.log("查看")
    }, {
      key: "export",
      label: "导出（无权限）",
      disabled: true
    }, {
      type: "separator"
    }, {
      key: "delete",
      label: "删除",
      danger: true,
      onSelect: () => console.log("删除")
    }];
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <Dropdown items={items}>
          <Button>更多操作</Button>
        </Dropdown>
      </div>;
  }
}`,...(O=(H=c.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var N,V,q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const items: DropdownItemData[] = [{
      type: "label",
      label: "编辑操作"
    }, {
      key: "edit",
      label: "编辑",
      icon: <EditIcon />
    }, {
      key: "copy",
      label: "复制",
      icon: <CopyIcon />
    }, {
      type: "separator"
    }, {
      type: "label",
      label: "分享"
    }, {
      key: "share",
      label: "分享给同事",
      icon: <ShareIcon />
    }, {
      type: "separator"
    }, {
      type: "label",
      label: "危险操作"
    }, {
      key: "delete",
      label: "删除",
      icon: <TrashIcon />,
      danger: true
    }];
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <Dropdown items={items}>
          <Button>分组菜单</Button>
        </Dropdown>
      </div>;
  }
}`,...(q=(V=p.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var U,$,J;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const items: DropdownItemData[] = [{
      key: "edit",
      label: "编辑",
      icon: <EditIcon />,
      onSelect: () => console.log("编辑")
    }, {
      key: "copy",
      label: "复制",
      icon: <CopyIcon />,
      onSelect: () => console.log("复制")
    }, {
      type: "separator"
    }, {
      key: "delete",
      label: "删除",
      icon: <TrashIcon />,
      danger: true,
      onSelect: () => console.log("删除")
    }];
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <div style={{
        width: 300,
        padding: 16,
        border: "1px solid #e8e8e8",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
          <span style={{
          fontSize: 14,
          fontWeight: 500
        }}>任务名称</span>
          <Dropdown items={items} contentProps={{
          align: "end"
        }}>
            <button type="button" style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            border: "none",
            borderRadius: 6,
            background: "transparent",
            cursor: "pointer"
          }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="4" cy="8" r="1.5" />
                <circle cx="8" cy="8" r="1.5" />
                <circle cx="12" cy="8" r="1.5" />
              </svg>
            </button>
          </Dropdown>
        </div>
      </div>;
  }
}`,...(J=($=u.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var X,_,F;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const items: DropdownItemData[] = [{
      key: "today",
      label: "今日",
      onSelect: () => console.log("today")
    }, {
      key: "week",
      label: "本周",
      onSelect: () => console.log("week")
    }, {
      key: "month",
      label: "本月",
      onSelect: () => console.log("month")
    }, {
      key: "quarter",
      label: "本季度",
      onSelect: () => console.log("quarter")
    }];
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <Dropdown items={items} contentProps={{
        align: "start"
      }}>
          <button type="button" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          padding: "4px 8px",
          border: "none",
          borderRadius: 6,
          background: "rgba(0,0,0,0.04)",
          cursor: "pointer",
          fontSize: 13,
          color: "rgba(0,0,0,0.82)"
        }}>
            <span>本周</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Dropdown>
      </div>;
  }
}`,...(F=(_=g.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var K,Q,Y;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const items: DropdownItemData[] = [{
      key: "a",
      label: "操作 A",
      onSelect: () => console.log("A")
    }, {
      key: "b",
      label: "操作 B",
      onSelect: () => console.log("B")
    }];
    return <div style={{
      padding: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16
    }}>
        <p style={{
        margin: 0,
        fontSize: 12,
        color: "rgba(0,0,0,0.46)"
      }}>
          状态：{open ? "打开" : "关闭"}
        </p>
        <div style={{
        display: "flex",
        gap: 8
      }}>
          <Button size="sm" onClick={() => setOpen(!open)}>
            外部切换
          </Button>
          <Dropdown items={items} open={open} onOpenChange={setOpen}>
            <Button variant="primary">受控菜单</Button>
          </Dropdown>
        </div>
      </div>;
  }
}`,...(Y=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,nn,en;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const items: DropdownItemData[] = [{
      key: "a",
      label: "选项 A"
    }, {
      key: "b",
      label: "选项 B"
    }];
    return <div style={{
      padding: 120,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16
    }}>
        {sides.map(side => <div key={side} style={{
        display: "flex",
        gap: 8
      }}>
            {aligns.map(align => <Dropdown key={\`\${side}-\${align}\`} items={items} contentProps={{
          side,
          align,
          sideOffset: 6
        }}>
                <Button size="sm">
                  {side}-{align}
                </Button>
              </Dropdown>)}
          </div>)}
      </div>;
  }
}`,...(en=(nn=h.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var on,tn,rn;x.parameters={...x.parameters,docs:{...(on=x.parameters)==null?void 0:on.docs,source:{originalSource:`{
  name: "Compound: RadioGroup 单选",
  render: () => {
    const [scope, setScope] = useState("my");
    return <div style={{
      padding: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12
    }}>
        <p style={{
        margin: 0,
        fontSize: 12,
        color: "rgba(0,0,0,0.46)"
      }}>
          当前选中：{scope}
        </p>
        <Dropdown>
          <DropdownTrigger>
            <button type="button" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: "6px 12px",
            border: "1px solid #d9d9d9",
            borderRadius: 8,
            background: "#fff",
            cursor: "pointer",
            fontSize: 14
          }}>
              <span>{scope === "my" ? "我的数据" : "团队数据"}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownRadioGroup value={scope} onValueChange={setScope}>
              <DropdownRadioItem value="my">我的数据</DropdownRadioItem>
              <DropdownRadioItem value="team">团队数据</DropdownRadioItem>
            </DropdownRadioGroup>
          </DropdownContent>
        </Dropdown>
      </div>;
  }
}`,...(rn=(tn=x.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};var sn,ln,dn;y.parameters={...y.parameters,docs:{...(sn=y.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  name: "Compound: 复合场景",
  render: () => {
    const [sort, setSort] = useState("newest");
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <Dropdown>
          <DropdownTrigger>
            <Button>排序与筛选</Button>
          </DropdownTrigger>
          <DropdownContent style={{
          minWidth: 180
        }}>
            <DropdownLabel>排序方式</DropdownLabel>
            <DropdownRadioGroup value={sort} onValueChange={setSort}>
              <DropdownRadioItem value="newest">最新优先</DropdownRadioItem>
              <DropdownRadioItem value="oldest">最早优先</DropdownRadioItem>
              <DropdownRadioItem value="name">按名称</DropdownRadioItem>
            </DropdownRadioGroup>
            <DropdownSeparator />
            <DropdownLabel>操作</DropdownLabel>
            <DropdownItem onSelect={() => console.log("刷新")}>刷新列表</DropdownItem>
            <DropdownItem onSelect={() => console.log("导出")}>导出数据</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>;
  }
}`,...(dn=(ln=y.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var an,cn,pn;w.parameters={...w.parameters,docs:{...(an=w.parameters)==null?void 0:an.docs,source:{originalSource:`{
  name: "子菜单（用户面板模拟）",
  render: () => {
    const [lang, setLang] = useState("zh-CN");
    return <div style={{
      padding: 100,
      display: "flex",
      justifyContent: "center"
    }}>
        <Dropdown>
          <DropdownTrigger>
            <button type="button" style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 12px",
            border: "1px solid #e8e8e8",
            borderRadius: 8,
            background: "#fff",
            cursor: "pointer"
          }}>
              <img src="https://api.dicebear.com/7.x/initials/svg?seed=HXH&size=24" alt="" style={{
              width: 24,
              height: 24,
              borderRadius: "50%"
            }} />
              <span style={{
              fontSize: 14
            }}>洪鑫海</span>
            </button>
          </DropdownTrigger>
          <DropdownContent side="top" align="start" style={{
          minWidth: 200
        }}>
            {/* 自定义头部 */}
            <div style={{
            padding: "8px 12px"
          }}>
              <div style={{
              fontSize: 14,
              fontWeight: 500
            }}>洪鑫海</div>
              <div style={{
              fontSize: 12,
              color: "rgba(0,0,0,0.46)",
              marginTop: 2
            }}>租户3</div>
            </div>
            <DropdownSeparator />

            {/* 带子面板的项 */}
            <DropdownSub>
              <DropdownSubTrigger icon={<SettingsIcon />}>
                偏好设置
              </DropdownSubTrigger>
              <DropdownSubContent>
                <div style={{
                padding: 12,
                width: 200
              }}>
                  <div style={{
                  fontSize: 13,
                  fontWeight: 500,
                  marginBottom: 8
                }}>偏好设置面板</div>
                  <div style={{
                  fontSize: 12,
                  color: "rgba(0,0,0,0.46)"
                }}>
                    这里可以放任意自定义内容，比如 UserPreferencesPanel
                  </div>
                </div>
              </DropdownSubContent>
            </DropdownSub>

            {/* 语言切换子菜单（标准列表） */}
            <DropdownSub>
              <DropdownSubTrigger icon={<GlobeIcon />}>
                {lang === "zh-CN" ? "简体中文" : "English"}
              </DropdownSubTrigger>
              <DropdownSubContent>
                <DropdownRadioGroup value={lang} onValueChange={setLang}>
                  <DropdownRadioItem value="zh-CN">简体中文</DropdownRadioItem>
                  <DropdownRadioItem value="en-US">English</DropdownRadioItem>
                  <DropdownRadioItem value="ja-JP">日本語</DropdownRadioItem>
                </DropdownRadioGroup>
              </DropdownSubContent>
            </DropdownSub>

            <DropdownItem icon={<EditIcon />} onSelect={() => console.log("归档管理")}>
              归档管理
            </DropdownItem>

            <DropdownSeparator />
            <DropdownItem icon={<LogoutIcon />} danger onSelect={() => console.log("退出登录")}>
              退出登录
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>;
  }
}`,...(pn=(cn=w.parameters)==null?void 0:cn.docs)==null?void 0:pn.source}}};var un,gn,mn;b.parameters={...b.parameters,docs:{...(un=b.parameters)==null?void 0:un.docs,source:{originalSource:`{
  name: "三级嵌套子菜单",
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Dropdown>
        <DropdownTrigger>
          <Button>三级嵌套</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem onSelect={() => console.log("A")}>普通项 A</DropdownItem>
          <DropdownSub>
            <DropdownSubTrigger>二级菜单</DropdownSubTrigger>
            <DropdownSubContent>
              <DropdownItem onSelect={() => console.log("B1")}>二级项 B1</DropdownItem>
              <DropdownItem onSelect={() => console.log("B2")}>二级项 B2</DropdownItem>
              <DropdownSub>
                <DropdownSubTrigger>三级菜单</DropdownSubTrigger>
                <DropdownSubContent>
                  <DropdownItem onSelect={() => console.log("C1")}>三级项 C1</DropdownItem>
                  <DropdownItem onSelect={() => console.log("C2")}>三级项 C2</DropdownItem>
                  <DropdownItem onSelect={() => console.log("C3")}>三级项 C3</DropdownItem>
                </DropdownSubContent>
              </DropdownSub>
            </DropdownSubContent>
          </DropdownSub>
          <DropdownItem onSelect={() => console.log("D")}>普通项 D</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
}`,...(mn=(gn=b.parameters)==null?void 0:gn.docs)==null?void 0:mn.source}}};const Xn=["Basic","WithIcons","DangerAndDisabled","WithGroups","ThreeDotsMenu","CustomTrigger","Controlled","Placement","CompoundRadioGroup","CompoundComplex","SubMenu","NestedSubMenu"];export{d as Basic,y as CompoundComplex,x as CompoundRadioGroup,m as Controlled,g as CustomTrigger,c as DangerAndDisabled,b as NestedSubMenu,h as Placement,w as SubMenu,u as ThreeDotsMenu,p as WithGroups,a as WithIcons,Xn as __namedExportsOrder,Jn as default};
