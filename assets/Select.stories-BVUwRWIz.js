import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r}from"./index-D4H_InIO.js";/* empty css                */import{S as a,V as ne}from"./index-zamGA3RK.js";import{E as ae}from"./index-CNZKkQGO.js";import{F as le}from"./FieldTypeDate-vqESOoGO.js";import{S as j}from"./Search-D07MehvK.js";import"./index-CkIsoHdK.js";import"./index-QzquTJG0.js";import"./index-BIJv7EuU.js";import"./index-CcH2AuCn.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-sEhs43E3.js";import"./Combination-BIv0MqwI.js";import"./utils-HnQPFlDo.js";import"./XLg-Buk6fdo7.js";import"./utils-YwZfuvH0-DLWngkAW.js";import"./XCircleFill-C1lg6Dm5.js";import"./ChevronDown-aUW7Z15R.js";import"./LoaderCircle-BJjvYEe5.js";import"./Check-KywOgGzp.js";const De={title:"Components/Select",tags:["autodocs"]},m={render:()=>{const[l,t]=r.useState("");return e.jsxs("div",{style:{width:320,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"权限"}),e.jsx(a,{options:[{label:"仅查看",value:"view"},{label:"可编辑",value:"edit"},{label:"管理员",value:"admin"}],value:l,onChange:o=>t(o),placeholder:"请选择权限"})]})}},h={name:"搜索单选",render:()=>{const[l,t]=r.useState(""),o=[{label:"张三",value:"zhangsan"},{label:"李四",value:"lisi"},{label:"王五",value:"wangwu"},{label:"赵六",value:"zhaoliu"},{label:"钱七",value:"qianqi"},{label:"孙八",value:"sunba"}];return e.jsxs("div",{style:{width:320,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"分享对象"}),e.jsx(a,{showSearch:!0,options:o,value:l,onChange:i=>t(i),placeholder:"搜索姓名/工号/部门",suffixIcon:e.jsx(j,{size:16})})]})}},v={name:"远程搜索",render:()=>{const[l,t]=r.useState(""),[o,i]=r.useState([]),[n,s]=r.useState(!1),c=d=>{s(!0),setTimeout(()=>{const p=["张三","李四","王五","赵六","钱七","孙八","周九","吴十","郑一","冯二"],C=d?p.filter(u=>u.includes(d)):p;i(C.map(u=>({label:u,value:u}))),s(!1)},500)};return e.jsxs("div",{style:{width:320,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"分享对象（远程搜索）"}),e.jsx(a,{showSearch:!0,filterOption:!1,options:o,value:l,onChange:d=>t(d),onSearch:c,loading:n,placeholder:"搜索姓名/工号/部门",suffixIcon:e.jsx(j,{size:16}),dropdown:{notFoundContent:n?void 0:e.jsx(ae,{icon:ne,description:"未找到匹配用户"})}})]})}},g={name:"多选 + Tag",render:()=>{const[l,t]=r.useState([]);return e.jsxs("div",{style:{width:320,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"生效星期"}),e.jsx(a,{mode:"multiple",options:[{label:"周一",value:"1"},{label:"周二",value:"2"},{label:"周三",value:"3"},{label:"周四",value:"4"},{label:"周五",value:"5"},{label:"周六",value:"6"},{label:"周日",value:"7"}],value:l,onChange:o=>t(o),placeholder:"请选择生效星期",allowClear:!0})]})}},S={name:"多选 + 搜索",render:()=>{const[l,t]=r.useState([]),o=[{label:"张三",value:"zhangsan"},{label:"李四",value:"lisi"},{label:"王五",value:"wangwu"},{label:"赵六",value:"zhaoliu"},{label:"钱七",value:"qianqi"},{label:"孙八",value:"sunba"}];return e.jsxs("div",{style:{width:360,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"分享对象（多选 + 搜索）"}),e.jsx(a,{mode:"multiple",showSearch:!0,options:o,value:l,onChange:i=>t(i),placeholder:"搜索姓名/工号/部门",suffixIcon:e.jsx(j,{size:16}),allowClear:!0})]})}},b={name:"多选 + 远程搜索",render:()=>{const[l,t]=r.useState([]),[o,i]=r.useState([]),[n,s]=r.useState(!1),c=d=>{s(!0),setTimeout(()=>{const p=["张三","李四","王五","赵六","钱七","孙八","周九","吴十","郑一","冯二"],C=d?p.filter(u=>u.includes(d)):p;i(C.map(u=>({label:u,value:u}))),s(!1)},500)};return e.jsxs("div",{style:{width:360,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"分享对象（多选 + 远程搜索）"}),e.jsx(a,{mode:"multiple",showSearch:!0,filterOption:!1,options:o,value:l,onChange:d=>t(d),onSearch:c,loading:n,placeholder:"搜索姓名/工号/部门",suffixIcon:e.jsx(j,{size:16}),allowClear:!0,dropdown:{notFoundContent:n?void 0:e.jsx(ae,{icon:ne,description:"未找到匹配用户"})}})]})}},f={name:"自定义面板（日期选择）",render:()=>{const[l,t]=r.useState([]),o=Array.from({length:31},(n,s)=>s+1),i=n=>{t(s=>s.includes(n)?s.filter(c=>c!==n):[...s,n])};return e.jsxs("div",{style:{width:320,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"生效日期"}),e.jsx(a,{mode:"multiple",options:o.map(n=>({label:String(n),value:n})),value:l,onChange:n=>t(n),placeholder:"请选择每月生效日期（可多选）",suffixIcon:e.jsx(le,{size:16}),allowClear:!0,dropdown:{width:320,render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4,padding:12},children:o.map(n=>e.jsx("button",{type:"button",onMouseDown:s=>s.preventDefault(),onClick:()=>i(n),style:{width:36,height:36,borderRadius:8,border:"none",cursor:"pointer",fontSize:14,background:l.includes(n)?"var(--lg-g-bg-color-primary-emphasis)":"transparent",color:l.includes(n)?"#fff":"var(--lg-g-fg-color-default)"},children:n},n))})}})]})}},w={name:"尺寸",render:()=>e.jsxs("div",{style:{width:320,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{size:"sm",options:[{label:"仅查看",value:"view"},{label:"可编辑",value:"edit"}],placeholder:"sm 尺寸"}),e.jsx(a,{size:"md",options:[{label:"仅查看",value:"view"},{label:"可编辑",value:"edit"}],placeholder:"md 尺寸（默认）"}),e.jsx(a,{size:"lg",options:[{label:"仅查看",value:"view"},{label:"可编辑",value:"edit"}],placeholder:"lg 尺寸"})]})},y={name:"状态",render:()=>e.jsxs("div",{style:{width:320,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{options:[{label:"仅查看",value:"view"}],placeholder:"禁用态",disabled:!0}),e.jsx(a,{options:[{label:"仅查看",value:"view"}],placeholder:"错误态",error:!0}),e.jsx(a,{options:[{label:"永久有效",value:"forever"}],value:"forever",allowClear:!0,placeholder:"可清空"})]})},x={name:"下拉缺省态",render:()=>e.jsxs("div",{style:{width:320,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"加载中"}),e.jsx(a,{options:[],loading:!0,placeholder:"加载中"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"加载失败"}),e.jsx(a,{options:[],loadError:!0,placeholder:"加载失败"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"搜索无结果"}),e.jsx(a,{showSearch:!0,options:[],placeholder:"搜索无结果"})]})]})};var z,D,V;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>("");
    return <div style={{
      width: 320,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>权限</h4>
        <Select options={[{
        label: "仅查看",
        value: "view"
      }, {
        label: "可编辑",
        value: "edit"
      }, {
        label: "管理员",
        value: "admin"
      }]} value={value} onChange={v => setValue(v as string)} placeholder="请选择权限" />
      </div>;
  }
}`,...(V=(D=m.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var B,k,O;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "搜索单选",
  render: () => {
    const [value, setValue] = useState<string>("");
    const allOptions = [{
      label: "张三",
      value: "zhangsan"
    }, {
      label: "李四",
      value: "lisi"
    }, {
      label: "王五",
      value: "wangwu"
    }, {
      label: "赵六",
      value: "zhaoliu"
    }, {
      label: "钱七",
      value: "qianqi"
    }, {
      label: "孙八",
      value: "sunba"
    }];
    return <div style={{
      width: 320,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>分享对象</h4>
        <Select showSearch options={allOptions} value={value} onChange={v => setValue(v as string)} placeholder="搜索姓名/工号/部门" suffixIcon={<Search size={16} />} />
      </div>;
  }
}`,...(O=(k=h.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var T,I,E;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "远程搜索",
  render: () => {
    const [value, setValue] = useState<string>("");
    const [options, setOptions] = useState<{
      label: string;
      value: string;
    }[]>([]);
    const [loading, setLoading] = useState(false);
    const handleSearch = (keyword: string) => {
      setLoading(true);
      // 模拟远程搜索
      setTimeout(() => {
        const mockData = ["张三", "李四", "王五", "赵六", "钱七", "孙八", "周九", "吴十", "郑一", "冯二"];
        const filtered = keyword ? mockData.filter(name => name.includes(keyword)) : mockData;
        setOptions(filtered.map(name => ({
          label: name,
          value: name
        })));
        setLoading(false);
      }, 500);
    };
    return <div style={{
      width: 320,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>分享对象（远程搜索）</h4>
        <Select showSearch filterOption={false} options={options} value={value} onChange={v => setValue(v as string)} onSearch={handleSearch} loading={loading} placeholder="搜索姓名/工号/部门" suffixIcon={<Search size={16} />} dropdown={{
        notFoundContent: loading ? undefined : <Empty icon={View} description="未找到匹配用户" />
      }} />
      </div>;
  }
}`,...(E=(I=v.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var q,L,M;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "多选 + Tag",
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: 320,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>生效星期</h4>
        <Select mode="multiple" options={[{
        label: "周一",
        value: "1"
      }, {
        label: "周二",
        value: "2"
      }, {
        label: "周三",
        value: "3"
      }, {
        label: "周四",
        value: "4"
      }, {
        label: "周五",
        value: "5"
      }, {
        label: "周六",
        value: "6"
      }, {
        label: "周日",
        value: "7"
      }]} value={value} onChange={v => setValue(v as string[])} placeholder="请选择生效星期" allowClear />
      </div>;
  }
}`,...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var F,R,_;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "多选 + 搜索",
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    const allOptions = [{
      label: "张三",
      value: "zhangsan"
    }, {
      label: "李四",
      value: "lisi"
    }, {
      label: "王五",
      value: "wangwu"
    }, {
      label: "赵六",
      value: "zhaoliu"
    }, {
      label: "钱七",
      value: "qianqi"
    }, {
      label: "孙八",
      value: "sunba"
    }];
    return <div style={{
      width: 360,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>分享对象（多选 + 搜索）</h4>
        <Select mode="multiple" showSearch options={allOptions} value={value} onChange={v => setValue(v as string[])} placeholder="搜索姓名/工号/部门" suffixIcon={<Search size={16} />} allowClear />
      </div>;
  }
}`,...(_=(R=S.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var A,G,H;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "多选 + 远程搜索",
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    const [options, setOptions] = useState<{
      label: string;
      value: string;
    }[]>([]);
    const [loading, setLoading] = useState(false);
    const handleSearch = (keyword: string) => {
      setLoading(true);
      setTimeout(() => {
        const mockData = ["张三", "李四", "王五", "赵六", "钱七", "孙八", "周九", "吴十", "郑一", "冯二"];
        const filtered = keyword ? mockData.filter(name => name.includes(keyword)) : mockData;
        setOptions(filtered.map(name => ({
          label: name,
          value: name
        })));
        setLoading(false);
      }, 500);
    };
    return <div style={{
      width: 360,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>分享对象（多选 + 远程搜索）</h4>
        <Select mode="multiple" showSearch filterOption={false} options={options} value={value} onChange={v => setValue(v as string[])} onSearch={handleSearch} loading={loading} placeholder="搜索姓名/工号/部门" suffixIcon={<Search size={16} />} allowClear dropdown={{
        notFoundContent: loading ? undefined : <Empty icon={View} description="未找到匹配用户" />
      }} />
      </div>;
  }
}`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,N;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "自定义面板（日期选择）",
  render: () => {
    const [value, setValue] = useState<number[]>([]);
    const days = Array.from({
      length: 31
    }, (_, i) => i + 1);
    const toggleDay = (day: number) => {
      setValue(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);
    };
    return <div style={{
      width: 320,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>生效日期</h4>
        <Select<number> mode="multiple" options={days.map(d => ({
        label: String(d),
        value: d
      }))} value={value} onChange={v => setValue(v as number[])} placeholder="请选择每月生效日期（可多选）" suffixIcon={<FieldTypeDate size={16} />} allowClear dropdown={{
        width: 320,
        render: () => <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 4,
          padding: 12
        }}>
                {days.map(day => <button key={day} type="button" onMouseDown={e => e.preventDefault()} onClick={() => toggleDay(day)} style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            fontSize: 14,
            background: value.includes(day) ? "var(--lg-g-bg-color-primary-emphasis)" : "transparent",
            color: value.includes(day) ? "#fff" : "var(--lg-g-fg-color-default)"
          }}>
                    {day}
                  </button>)}
              </div>
      }} />
      </div>;
  }
}`,...(N=(K=f.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var P,Q,U;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "尺寸",
  render: () => <div style={{
    width: 320,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <Select size="sm" options={[{
      label: "仅查看",
      value: "view"
    }, {
      label: "可编辑",
      value: "edit"
    }]} placeholder="sm 尺寸" />
      <Select size="md" options={[{
      label: "仅查看",
      value: "view"
    }, {
      label: "可编辑",
      value: "edit"
    }]} placeholder="md 尺寸（默认）" />
      <Select size="lg" options={[{
      label: "仅查看",
      value: "view"
    }, {
      label: "可编辑",
      value: "edit"
    }]} placeholder="lg 尺寸" />
    </div>
}`,...(U=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "状态",
  render: () => <div style={{
    width: 320,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <Select options={[{
      label: "仅查看",
      value: "view"
    }]} placeholder="禁用态" disabled />
      <Select options={[{
      label: "仅查看",
      value: "view"
    }]} placeholder="错误态" error />
      <Select options={[{
      label: "永久有效",
      value: "forever"
    }]} value="forever" allowClear placeholder="可清空" />
    </div>
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "下拉缺省态",
  render: () => <div style={{
    width: 320,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <div>
        <h4 style={{
        marginBottom: 12
      }}>加载中</h4>
        <Select options={[]} loading placeholder="加载中" />
      </div>
      <div>
        <h4 style={{
        marginBottom: 12
      }}>加载失败</h4>
        <Select options={[]} loadError placeholder="加载失败" />
      </div>
      <div>
        <h4 style={{
        marginBottom: 12
      }}>搜索无结果</h4>
        <Select showSearch options={[]} placeholder="搜索无结果" />
      </div>
    </div>
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Ve=["Basic","SearchSingle","RemoteSearch","MultipleTag","MultipleSearch","MultipleRemoteSearch","CustomDropdown","Sizes","States","DropdownStatus"];export{m as Basic,f as CustomDropdown,x as DropdownStatus,b as MultipleRemoteSearch,S as MultipleSearch,g as MultipleTag,v as RemoteSearch,h as SearchSingle,w as Sizes,y as States,Ve as __namedExportsOrder,De as default};
