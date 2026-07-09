import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r,R as Ke}from"./index-D4H_InIO.js";/* empty css                */import{P as Qe,b as Ze,c as ea}from"./index-x6Rl5KCe.js";import{a as C}from"./utils-HnQPFlDo.js";import{u as A}from"./index-DhX95gbj.js";import{t as aa,s as w,f as ta,b as na,a as ra,c as G,d as J,C as K,e as Q,g as la,z as sa,S as ia,D as $,U as k,j as da,k as oa,i as qe,h as ca}from"./DayPicker-7ooXYy9K.js";import{C as ua}from"./ChevronLeft-DCbpohEO.js";import{C as pa}from"./ChevronRight-CtQYtb-_.js";import{F as te}from"./FieldTypeDate-vqESOoGO.js";import{X as ma}from"./XCircleFill-C1lg6Dm5.js";import"./index-VPG4c6ZF.js";import"./index-TiaNR8H-.js";import"./index-CwLLzmb4.js";import"./index-BLKoEynJ.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-Dh_yPxPv.js";import"./Combination-C44wwbTY.js";import"./XLg-Buk6fdo7.js";import"./utils-YwZfuvH0-DLWngkAW.js";function ya(t,s){const a=aa(t,s==null?void 0:s.in).getDay();return a===0||a===6}function ga({value:t,defaultValue:s,onChange:a,onOpenChange:l,disabled:g,format:m}){const u=t!==void 0,[o,f]=r.useState(s??null),n=u?t:o,[p,c]=r.useState(!1),[P,_]=r.useState("date"),[N,b]=r.useState(()=>n instanceof Date?w(n):w(new Date)),j=r.useCallback(()=>{g||(c(!0),_("date"),l==null||l(!0))},[g,l]),h=r.useCallback(()=>{c(!1),_("date"),l==null||l(!1)},[l]),S=r.useCallback(()=>{p?h():j()},[p,h,j]),M=r.useCallback(D=>{const d=w(D);u||f(d),a==null||a(d),h()},[u,a,h]),x=r.useCallback(()=>{const D=w(new Date);u||f(D),a==null||a(D),h()},[u,a,h]),H=r.useCallback(D=>{D.stopPropagation(),u||f(null),a==null||a(null)},[u,a]),U=r.useMemo(()=>n instanceof Date?ta(n,m):"",[n,m]),V=r.useMemo(()=>n instanceof Date?[n]:[],[n]);return{open:p,panelView:P,displayMonth:N,currentValue:n,displayText:U,selectedDates:V,setOpen:c,setPanelView:_,setDisplayMonth:b,handleOpen:j,handleClose:h,toggleOpen:S,handleSelectDate:M,handleSelectToday:x,handleClear:H}}function ze({displayMonth:t,selectedDates:s,weekStartsOn:a,disabledDate:l,minDate:g,maxDate:m,showToday:u,onSelectDate:o,onSelectToday:f,onMonthChange:n,onViewChange:p}){const c=A("DatePicker"),P=t.getFullYear(),_=t.getMonth(),N=r.useCallback(()=>{n(na(t))},[t,n]),b=r.useCallback(()=>{n(ra(t,1))},[t,n]),j=r.useCallback(()=>{n(G(t,1))},[t,n]),h=r.useCallback(()=>{n(J(t,1))},[t,n]),S=r.useCallback(x=>!!(l!=null&&l(x)||g&&x<w(g)||m&&x>w(m)),[l,g,m]),M=w(new Date);return e.jsxs("div",{className:"lg-datepicker-panel lg-datepicker-panel--date",children:[e.jsxs("div",{className:"lg-datepicker-panel__header",children:[e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:j,"aria-label":c.prevYear,children:e.jsx(K,{size:16})}),e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:N,"aria-label":c.prevMonth,children:e.jsx(ua,{size:16})}),e.jsxs("div",{className:"lg-datepicker-panel__title-group",children:[e.jsx("button",{type:"button",className:"lg-datepicker-panel__title lg-datepicker-panel__title--clickable",onClick:()=>p("year"),children:c.yearFormat.replace("{year}",String(P))}),e.jsx("button",{type:"button",className:"lg-datepicker-panel__title lg-datepicker-panel__title--clickable",onClick:()=>p("month"),children:c.monthFormat.replace("{month}",String(_+1).padStart(2,"0"))})]}),e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:b,"aria-label":c.nextMonth,children:e.jsx(pa,{size:16})}),e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:h,"aria-label":c.nextYear,children:e.jsx(Q,{size:16})})]}),e.jsx(la,{mode:"single",month:t,onMonthChange:n,selected:s[0]??void 0,onDayClick:x=>{S(x)||o(x)},disabled:S,locale:sa,weekStartsOn:a,showOutsideDays:!0,fixedWeeks:!0,hideNavigation:!0,modifiers:{today:[M]},classNames:{[k.Root]:"lg-datepicker-calendar",[k.Months]:"lg-datepicker-calendar__months",[k.Month]:"lg-datepicker-calendar__month",[k.MonthCaption]:"lg-datepicker-calendar__caption",[k.MonthGrid]:"lg-datepicker-calendar__month-grid",[k.Weekdays]:"lg-datepicker-calendar__weekdays",[k.Weekday]:"lg-datepicker-calendar__weekday",[k.Weeks]:"lg-datepicker-calendar__body",[k.Week]:"lg-datepicker-calendar__row",[k.Day]:"lg-datepicker-calendar__day",[k.DayButton]:"lg-datepicker-calendar__day-btn",[$.outside]:"lg-datepicker-calendar__day--outside",[$.disabled]:"lg-datepicker-calendar__day--disabled",[$.today]:"lg-datepicker-calendar__day--today",[ia.selected]:"lg-datepicker-calendar__day--selected"}}),u&&e.jsx("div",{className:"lg-datepicker-panel__footer",children:e.jsx("button",{type:"button",className:"lg-datepicker-panel__today-btn",onClick:f,children:c.today})})]})}ze.__docgenInfo={description:"日历面板 — 基于 react-day-picker 实现日期网格",methods:[],displayName:"CalendarPanel",props:{displayMonth:{required:!0,tsType:{name:"Date"},description:"面板显示的月份"},selectedDates:{required:!0,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"选中的日期列表"},weekStartsOn:{required:!0,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"一周起始日"},disabledDate:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => boolean",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"boolean"}}},description:"禁用日期"},minDate:{required:!1,tsType:{name:"Date"},description:"最小日期"},maxDate:{required:!1,tsType:{name:"Date"},description:"最大日期"},showToday:{required:!0,tsType:{name:"boolean"},description:"是否显示今天按钮"},onSelectDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:"选中日期回调"},onSelectToday:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"选择今天"},onMonthChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(month: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"month"}],return:{name:"void"}}},description:"更新面板月份"},onViewChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(view: PanelView) => void",signature:{arguments:[{type:{name:"union",raw:'"date" | "month" | "year"',elements:[{name:"literal",value:'"date"'},{name:"literal",value:'"month"'},{name:"literal",value:'"year"'}]},name:"view"}],return:{name:"void"}}},description:"切换面板视图"}}};function Ye({currentYear:t,selectedYear:s,onSelect:a,onPrevDecade:l,onNextDecade:g}){const m=A("DatePicker"),u=Math.floor(t/10)*10-1,o=Array.from({length:12},(n,p)=>u+p),f=`${o[1]}-${o[10]}`;return e.jsxs("div",{className:"lg-datepicker-panel lg-datepicker-panel--year",children:[e.jsxs("div",{className:"lg-datepicker-panel__header",children:[e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:l,"aria-label":m.prevDecade,children:e.jsx(K,{size:16})}),e.jsx("span",{className:"lg-datepicker-panel__title",children:f}),e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:g,"aria-label":m.nextDecade,children:e.jsx(Q,{size:16})})]}),e.jsx("div",{className:"lg-datepicker-panel__grid lg-datepicker-panel__grid--3col",children:o.map(n=>{const p=n===s,c=n===o[0]||n===o[11];return e.jsx("button",{type:"button",className:C("lg-datepicker-panel__cell","lg-datepicker-panel__cell--wide",p&&"lg-datepicker-panel__cell--selected",c&&"lg-datepicker-panel__cell--outside"),onClick:()=>a(n),children:n},n)})})]})}Ye.__docgenInfo={description:"年份选择面板 — 3×4 网格展示 12 年",methods:[],displayName:"YearPanel",props:{currentYear:{required:!0,tsType:{name:"number"},description:"当前显示年份（用于计算 12 年范围）"},selectedYear:{required:!1,tsType:{name:"number"},description:"已选中年份"},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(year: number) => void",signature:{arguments:[{type:{name:"number"},name:"year"}],return:{name:"void"}}},description:"年份变化回调"},onPrevDecade:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"切换到上一组 12 年"},onNextDecade:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"切换到下一组 12 年"}}};function Be({currentYear:t,selectedMonth:s,selectedYear:a,onSelect:l,onPrevYear:g,onNextYear:m,onClickYear:u}){const o=A("DatePicker");return e.jsxs("div",{className:"lg-datepicker-panel lg-datepicker-panel--month",children:[e.jsxs("div",{className:"lg-datepicker-panel__header",children:[e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:g,"aria-label":o.prevYear,children:e.jsx(K,{size:16})}),e.jsx("button",{type:"button",className:"lg-datepicker-panel__title lg-datepicker-panel__title--clickable",onClick:u,children:o.yearFormat.replace("{year}",String(t))}),e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:m,"aria-label":o.nextYear,children:e.jsx(Q,{size:16})})]}),e.jsx("div",{className:"lg-datepicker-panel__grid lg-datepicker-panel__grid--3col",children:o.months.map((f,n)=>{const p=a===t&&s===n;return e.jsx("button",{type:"button",className:C("lg-datepicker-panel__cell","lg-datepicker-panel__cell--wide",p&&"lg-datepicker-panel__cell--selected"),onClick:()=>l(n),children:f},n)})})]})}Be.__docgenInfo={description:"月份选择面板 — 3×4 网格展示 12 个月",methods:[],displayName:"MonthPanel",props:{currentYear:{required:!0,tsType:{name:"number"},description:"当前显示的年份"},selectedMonth:{required:!1,tsType:{name:"number"},description:"已选中的月份（0-11）"},selectedYear:{required:!1,tsType:{name:"number"},description:"已选中的年份（用于对比是否同年）"},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(month: number) => void",signature:{arguments:[{type:{name:"number"},name:"month"}],return:{name:"void"}}},description:"月份选择回调（0-11）"},onPrevYear:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"切换到上一年"},onNextYear:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"切换到下一年"},onClickYear:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"点击年份标题，切换到年选择面板"}}};const i=Ke.forwardRef(({value:t,defaultValue:s,onChange:a,disabledDate:l,minDate:g,maxDate:m,format:u="yyyy/MM/dd",weekStartsOn:o=1,showToday:f=!0,disabled:n=!1,error:p=!1,errorMessage:c,size:P="md",placeholder:_,allowClear:N=!0,getPopupContainer:b,onOpenChange:j,className:h,style:S},M)=>{const x=A("DatePicker"),H=_??x.placeholder,U=r.useRef(null),{open:V,panelView:D,displayMonth:d,displayText:Z,selectedDates:q,setPanelView:T,setDisplayMonth:y,toggleOpen:Fe,handleClose:Re,handleSelectDate:Le,handleSelectToday:We,handleClear:Ie}=ga({value:t,defaultValue:s,onChange:a,onOpenChange:j,disabled:n,format:u}),X=!!Z,Oe=N&&X&&!n,Ee=r.useCallback(v=>{y(da(d,v)),T("month")},[d,y,T]),Ae=r.useCallback(()=>{y(G(d,10))},[d,y]),He=r.useCallback(()=>{y(J(d,10))},[d,y]),Ue=r.useCallback(v=>{y(oa(d,v)),T("date")},[d,y,T]),Xe=r.useCallback(()=>{y(G(d,1))},[d,y]),$e=r.useCallback(()=>{y(J(d,1))},[d,y]),Ge=()=>{var v,ee,ae;switch(D){case"year":return e.jsx(Ye,{currentYear:d.getFullYear(),selectedYear:(v=q[0])==null?void 0:v.getFullYear(),onSelect:Ee,onPrevDecade:Ae,onNextDecade:He});case"month":return e.jsx(Be,{currentYear:d.getFullYear(),selectedMonth:(ee=q[0])==null?void 0:ee.getMonth(),selectedYear:(ae=q[0])==null?void 0:ae.getFullYear(),onSelect:Ue,onPrevYear:Xe,onNextYear:$e,onClickYear:()=>T("year")});default:return e.jsx(ze,{displayMonth:d,selectedDates:q,weekStartsOn:o,disabledDate:l,minDate:g,maxDate:m,showToday:f,onSelectDate:Le,onSelectToday:We,onMonthChange:y,onViewChange:T})}},Je=()=>Oe?e.jsxs("span",{className:"lg-datepicker__suffix lg-datepicker__suffix--clearable",children:[e.jsx("span",{className:"lg-datepicker__icon-default",children:e.jsx(te,{size:16})}),e.jsx("span",{className:"lg-datepicker__clear",onClick:Ie,children:e.jsx(ma,{size:16})})]}):e.jsx("span",{className:"lg-datepicker__suffix",children:e.jsx(te,{size:16})});return e.jsxs("div",{ref:M,className:C("lg-datepicker",h),style:S,children:[e.jsxs(Qe,{open:V,onOpenChange:v=>{v||Re()},children:[e.jsx(Ze,{children:e.jsxs("div",{ref:U,className:C("lg-datepicker__trigger",`lg-datepicker__trigger--${P}`,V&&"lg-datepicker__trigger--open",p&&"lg-datepicker__trigger--error",n&&"lg-datepicker__trigger--disabled"),onClick:Fe,children:[e.jsx("span",{className:C("lg-datepicker__input",!X&&"lg-datepicker__placeholder"),children:X?Z:H}),Je()]})}),e.jsx(ea,{className:"lg-datepicker-popover",side:"bottom",align:"start",sideOffset:4,collisionPadding:8,container:b==null?void 0:b(),onOpenAutoFocus:v=>v.preventDefault(),onCloseAutoFocus:v=>v.preventDefault(),children:Ge()})]}),p&&c&&e.jsx("div",{className:"lg-datepicker__error-msg",children:c})]})});i.displayName="DatePicker";i.__docgenInfo={description:`DatePicker 日期选择器

单选日期，基于 Popover 弹层 + react-day-picker 日历面板实现。
支持年/月快速切换面板、今天按钮、日期禁用。`,methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:"受控值"},defaultValue:{required:!1,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:"非受控默认值"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"值变化回调"},disabledDate:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => boolean",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"boolean"}}},description:"禁用日期判断函数"},minDate:{required:!1,tsType:{name:"Date"},description:"可选范围最小日期"},maxDate:{required:!1,tsType:{name:"Date"},description:"可选范围最大日期"},format:{required:!1,tsType:{name:"string"},description:'日期格式化，默认 "yyyy/MM/dd"',defaultValue:{value:'"yyyy/MM/dd"',computed:!1}},weekStartsOn:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"一周起始日，默认 1（周一）",defaultValue:{value:"1",computed:!1}},showToday:{required:!1,tsType:{name:"boolean"},description:"是否显示今天按钮，默认 true",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"错误态",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"错误提示文案"},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:'尺寸，默认 "md"',defaultValue:{value:'"md"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:'占位文本，默认 "年/月/日"'},allowClear:{required:!1,tsType:{name:"boolean"},description:"是否显示清空按钮，默认 true",defaultValue:{value:"true",computed:!1}},getPopupContainer:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement",signature:{arguments:[],return:{name:"HTMLElement"}}},description:"浮层挂载容器"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"面板展开/收起回调"},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Fa={title:"Components/DatePicker",tags:["autodocs"]},z={name:"基础用法",render:()=>{const[t,s]=r.useState(null);return e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"选择日期"}),e.jsx(i,{value:t,onChange:a=>s(a),placeholder:"年/月/日"}),e.jsxs("p",{style:{marginTop:12,fontSize:12,color:"#999"},children:["当前值：",t?t.toLocaleDateString():"未选择"]})]})}},Y={name:"默认值（非受控）",render:()=>e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"有默认值"}),e.jsx(i,{defaultValue:new Date})]})},B={name:"尺寸",render:()=>e.jsxs("div",{style:{width:292,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsx(i,{size:"sm",placeholder:"sm 尺寸"}),e.jsx(i,{size:"md",placeholder:"md 尺寸（默认）"}),e.jsx(i,{size:"lg",placeholder:"lg 尺寸"})]})},F={name:"状态",render:()=>e.jsxs("div",{style:{width:292,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"未选态"}),e.jsx(i,{placeholder:"年/月/日"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"已选态（hover 显示清除）"}),e.jsx(i,{defaultValue:new Date(2026,3,18)})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"禁用态"}),e.jsx(i,{placeholder:"年/月/日",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"已选禁用态"}),e.jsx(i,{defaultValue:new Date(2026,3,18),disabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"错误态"}),e.jsx(i,{defaultValue:new Date(2026,3,18),error:!0,errorMessage:"输入错误提示信息"})]})]})},R={name:"禁用日期",render:()=>{const[t,s]=r.useState(null),a=new Date;return e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"禁用过去日期 + 周末"}),e.jsx(i,{value:t,onChange:l=>s(l),disabledDate:l=>l<qe(a,1)||ya(l)})]})}},L={name:"日期范围限制",render:()=>{const[t,s]=r.useState(null),a=new Date;return e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"仅可选前后 30 天"}),e.jsx(i,{value:t,onChange:l=>s(l),minDate:qe(a,30),maxDate:ca(a,30)})]})}},W={name:"自定义格式",render:()=>{const[t,s]=r.useState(new Date);return e.jsxs("div",{style:{width:292,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"yyyy-MM-dd"}),e.jsx(i,{value:t,onChange:a=>s(a),format:"yyyy-MM-dd"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"yyyy年MM月dd日"}),e.jsx(i,{value:t,onChange:a=>s(a),format:"yyyy年MM月dd日"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"MM/dd/yyyy"}),e.jsx(i,{value:t,onChange:a=>s(a),format:"MM/dd/yyyy"})]})]})}},I={name:"隐藏今天按钮",render:()=>e.jsx("div",{style:{width:292,padding:24},children:e.jsx(i,{showToday:!1,placeholder:"不显示今天按钮"})})},O={name:"周日起始",render:()=>e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"一周从周日开始"}),e.jsx(i,{weekStartsOn:0})]})},E={name:"不允许清除",render:()=>e.jsx("div",{style:{width:292,padding:24},children:e.jsx(i,{defaultValue:new Date,allowClear:!1})})};var ne,re,le;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "基础用法",
  render: () => {
    const [value, setValue] = useState<Date | null>(null);
    return <div style={{
      width: 292,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>选择日期</h4>
        <DatePicker value={value} onChange={v => setValue(v)} placeholder="年/月/日" />
        <p style={{
        marginTop: 12,
        fontSize: 12,
        color: "#999"
      }}>
          当前值：{value ? value.toLocaleDateString() : "未选择"}
        </p>
      </div>;
  }
}`,...(le=(re=z.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ie,de;Y.parameters={...Y.parameters,docs:{...(se=Y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "默认值（非受控）",
  render: () => <div style={{
    width: 292,
    padding: 24
  }}>
      <h4 style={{
      marginBottom: 12
    }}>有默认值</h4>
      <DatePicker defaultValue={new Date()} />
    </div>
}`,...(de=(ie=Y.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var oe,ce,ue;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "尺寸",
  render: () => <div style={{
    width: 292,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <DatePicker size="sm" placeholder="sm 尺寸" />
      <DatePicker size="md" placeholder="md 尺寸（默认）" />
      <DatePicker size="lg" placeholder="lg 尺寸" />
    </div>
}`,...(ue=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,me,ye;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "状态",
  render: () => <div style={{
    width: 292,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: "#666"
      }}>未选态</p>
        <DatePicker placeholder="年/月/日" />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: "#666"
      }}>已选态（hover 显示清除）</p>
        <DatePicker defaultValue={new Date(2026, 3, 18)} />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: "#666"
      }}>禁用态</p>
        <DatePicker placeholder="年/月/日" disabled />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: "#666"
      }}>已选禁用态</p>
        <DatePicker defaultValue={new Date(2026, 3, 18)} disabled />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: "#666"
      }}>错误态</p>
        <DatePicker defaultValue={new Date(2026, 3, 18)} error errorMessage="输入错误提示信息" />
      </div>
    </div>
}`,...(ye=(me=F.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var ge,ve,fe;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "禁用日期",
  render: () => {
    const [value, setValue] = useState<Date | null>(null);
    const today = new Date();
    return <div style={{
      width: 292,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>禁用过去日期 + 周末</h4>
        <DatePicker value={value} onChange={v => setValue(v)} disabledDate={date => {
        // 禁用今天之前的日期和周末
        return date < subDays(today, 1) || isWeekend(date);
      }} />
      </div>;
  }
}`,...(fe=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var he,ke,xe;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: "日期范围限制",
  render: () => {
    const [value, setValue] = useState<Date | null>(null);
    const today = new Date();
    return <div style={{
      width: 292,
      padding: 24
    }}>
        <h4 style={{
        marginBottom: 12
      }}>仅可选前后 30 天</h4>
        <DatePicker value={value} onChange={v => setValue(v)} minDate={subDays(today, 30)} maxDate={addDays(today, 30)} />
      </div>;
  }
}`,...(xe=(ke=L.parameters)==null?void 0:ke.docs)==null?void 0:xe.source}}};var De,_e,be;W.parameters={...W.parameters,docs:{...(De=W.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: "自定义格式",
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return <div style={{
      width: 292,
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <div>
          <p style={{
          marginBottom: 8,
          fontSize: 12,
          color: "#666"
        }}>yyyy-MM-dd</p>
          <DatePicker value={value} onChange={v => setValue(v)} format="yyyy-MM-dd" />
        </div>
        <div>
          <p style={{
          marginBottom: 8,
          fontSize: 12,
          color: "#666"
        }}>yyyy年MM月dd日</p>
          <DatePicker value={value} onChange={v => setValue(v)} format="yyyy年MM月dd日" />
        </div>
        <div>
          <p style={{
          marginBottom: 8,
          fontSize: 12,
          color: "#666"
        }}>MM/dd/yyyy</p>
          <DatePicker value={value} onChange={v => setValue(v)} format="MM/dd/yyyy" />
        </div>
      </div>;
  }
}`,...(be=(_e=W.parameters)==null?void 0:_e.docs)==null?void 0:be.source}}};var je,we,Se;I.parameters={...I.parameters,docs:{...(je=I.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: "隐藏今天按钮",
  render: () => <div style={{
    width: 292,
    padding: 24
  }}>
      <DatePicker showToday={false} placeholder="不显示今天按钮" />
    </div>
}`,...(Se=(we=I.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Te,Pe,Ne;O.parameters={...O.parameters,docs:{...(Te=O.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: "周日起始",
  render: () => <div style={{
    width: 292,
    padding: 24
  }}>
      <h4 style={{
      marginBottom: 12
    }}>一周从周日开始</h4>
      <DatePicker weekStartsOn={0} />
    </div>
}`,...(Ne=(Pe=O.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.source}}};var Me,Ce,Ve;E.parameters={...E.parameters,docs:{...(Me=E.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: "不允许清除",
  render: () => <div style={{
    width: 292,
    padding: 24
  }}>
      <DatePicker defaultValue={new Date()} allowClear={false} />
    </div>
}`,...(Ve=(Ce=E.parameters)==null?void 0:Ce.docs)==null?void 0:Ve.source}}};const Ra=["Basic","DefaultValue","Sizes","States","DisabledDate","MinMaxDate","CustomFormat","HideToday","SundayStart","NoClear"];export{z as Basic,W as CustomFormat,Y as DefaultValue,R as DisabledDate,I as HideToday,L as MinMaxDate,E as NoClear,B as Sizes,F as States,O as SundayStart,Ra as __namedExportsOrder,Fa as default};
