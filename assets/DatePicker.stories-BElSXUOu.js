import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r,R as $e}from"./index-D4H_InIO.js";/* empty css                */import{P as Ge,b as Je,c as Ke}from"./index-Bf0C100M.js";import{a as V}from"./utils-HnQPFlDo.js";import{t as Qe,s as S,f as Ze,b as ea,a as aa,c as X,d as $,C as G,e as J,g as ta,z as na,S as ra,D as U,U as f,j as la,k as sa,i as Pe,h as ia}from"./DayPicker-7ooXYy9K.js";import{C as da}from"./ChevronLeft-DCbpohEO.js";import{C as oa}from"./ChevronRight-CtQYtb-_.js";import{F as Z}from"./FieldTypeDate-vqESOoGO.js";import{X as ca}from"./XCircleFill-C1lg6Dm5.js";import"./index-CJMDPjkl.js";import"./index-dbwHFDAS.js";import"./index-Dd8bRu6S.js";import"./index-roZDV17k.js";import"./index-CNPoBS2Q.js";import"./Combination-bIa9HupK.js";import"./utils-YwZfuvH0-DLWngkAW.js";function ua(t,s){const a=Qe(t,s==null?void 0:s.in).getDay();return a===0||a===6}function pa({value:t,defaultValue:s,onChange:a,onOpenChange:l,disabled:p,format:m}){const d=t!==void 0,[k,o]=r.useState(s??null),n=d?t:k,[v,_]=r.useState(!1),[N,D]=r.useState("date"),[M,b]=r.useState(()=>n instanceof Date?S(n):S(new Date)),j=r.useCallback(()=>{p||(_(!0),D("date"),l==null||l(!0))},[p,l]),y=r.useCallback(()=>{_(!1),D("date"),l==null||l(!1)},[l]),P=r.useCallback(()=>{v?y():j()},[v,y,j]),h=r.useCallback(x=>{const w=S(x);d||o(w),a==null||a(w),y()},[d,a,y]),E=r.useCallback(()=>{const x=S(new Date);d||o(x),a==null||a(x),y()},[d,a,y]),C=r.useCallback(x=>{x.stopPropagation(),d||o(null),a==null||a(null)},[d,a]),H=r.useMemo(()=>n instanceof Date?Ze(n,m):"",[n,m]),c=r.useMemo(()=>n instanceof Date?[n]:[],[n]);return{open:v,panelView:N,displayMonth:M,currentValue:n,displayText:H,selectedDates:c,setOpen:_,setPanelView:D,setDisplayMonth:b,handleOpen:j,handleClose:y,toggleOpen:P,handleSelectDate:h,handleSelectToday:E,handleClear:C}}function Ve({displayMonth:t,selectedDates:s,weekStartsOn:a,disabledDate:l,minDate:p,maxDate:m,showToday:d,onSelectDate:k,onSelectToday:o,onMonthChange:n,onViewChange:v}){const _=t.getFullYear(),N=t.getMonth(),D=r.useCallback(()=>{n(ea(t))},[t,n]),M=r.useCallback(()=>{n(aa(t,1))},[t,n]),b=r.useCallback(()=>{n(X(t,1))},[t,n]),j=r.useCallback(()=>{n($(t,1))},[t,n]),y=r.useCallback(h=>!!(l!=null&&l(h)||p&&h<S(p)||m&&h>S(m)),[l,p,m]),P=S(new Date);return e.jsxs("div",{className:"lg-datepicker-panel lg-datepicker-panel--date",children:[e.jsxs("div",{className:"lg-datepicker-panel__header",children:[e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:b,"aria-label":"上一年",children:e.jsx(G,{size:16})}),e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:D,"aria-label":"上一月",children:e.jsx(da,{size:16})}),e.jsxs("div",{className:"lg-datepicker-panel__title-group",children:[e.jsxs("button",{type:"button",className:"lg-datepicker-panel__title lg-datepicker-panel__title--clickable",onClick:()=>v("year"),children:[_,"年"]}),e.jsxs("button",{type:"button",className:"lg-datepicker-panel__title lg-datepicker-panel__title--clickable",onClick:()=>v("month"),children:[String(N+1).padStart(2,"0"),"月"]})]}),e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:M,"aria-label":"下一月",children:e.jsx(oa,{size:16})}),e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:j,"aria-label":"下一年",children:e.jsx(J,{size:16})})]}),e.jsx(ta,{mode:"single",month:t,onMonthChange:n,selected:s[0]??void 0,onDayClick:h=>{y(h)||k(h)},disabled:y,locale:na,weekStartsOn:a,showOutsideDays:!0,fixedWeeks:!0,hideNavigation:!0,modifiers:{today:[P]},classNames:{[f.Root]:"lg-datepicker-calendar",[f.Months]:"lg-datepicker-calendar__months",[f.Month]:"lg-datepicker-calendar__month",[f.MonthCaption]:"lg-datepicker-calendar__caption",[f.MonthGrid]:"lg-datepicker-calendar__month-grid",[f.Weekdays]:"lg-datepicker-calendar__weekdays",[f.Weekday]:"lg-datepicker-calendar__weekday",[f.Weeks]:"lg-datepicker-calendar__body",[f.Week]:"lg-datepicker-calendar__row",[f.Day]:"lg-datepicker-calendar__day",[f.DayButton]:"lg-datepicker-calendar__day-btn",[U.outside]:"lg-datepicker-calendar__day--outside",[U.disabled]:"lg-datepicker-calendar__day--disabled",[U.today]:"lg-datepicker-calendar__day--today",[ra.selected]:"lg-datepicker-calendar__day--selected"}}),d&&e.jsx("div",{className:"lg-datepicker-panel__footer",children:e.jsx("button",{type:"button",className:"lg-datepicker-panel__today-btn",onClick:o,children:"今天"})})]})}Ve.__docgenInfo={description:"日历面板 — 基于 react-day-picker 实现日期网格",methods:[],displayName:"CalendarPanel",props:{displayMonth:{required:!0,tsType:{name:"Date"},description:"面板显示的月份"},selectedDates:{required:!0,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"选中的日期列表"},weekStartsOn:{required:!0,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"一周起始日"},disabledDate:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => boolean",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"boolean"}}},description:"禁用日期"},minDate:{required:!1,tsType:{name:"Date"},description:"最小日期"},maxDate:{required:!1,tsType:{name:"Date"},description:"最大日期"},showToday:{required:!0,tsType:{name:"boolean"},description:"是否显示今天按钮"},onSelectDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:"选中日期回调"},onSelectToday:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"选择今天"},onMonthChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(month: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"month"}],return:{name:"void"}}},description:"更新面板月份"},onViewChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(view: PanelView) => void",signature:{arguments:[{type:{name:"union",raw:'"date" | "month" | "year"',elements:[{name:"literal",value:'"date"'},{name:"literal",value:'"month"'},{name:"literal",value:'"year"'}]},name:"view"}],return:{name:"void"}}},description:"切换面板视图"}}};function Ce({currentYear:t,selectedYear:s,onSelect:a,onPrevDecade:l,onNextDecade:p}){const m=Math.floor(t/10)*10-1,d=Array.from({length:12},(o,n)=>m+n),k=`${d[1]}-${d[10]}`;return e.jsxs("div",{className:"lg-datepicker-panel lg-datepicker-panel--year",children:[e.jsxs("div",{className:"lg-datepicker-panel__header",children:[e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:l,"aria-label":"上一组年份",children:e.jsx(G,{size:16})}),e.jsx("span",{className:"lg-datepicker-panel__title",children:k}),e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:p,"aria-label":"下一组年份",children:e.jsx(J,{size:16})})]}),e.jsx("div",{className:"lg-datepicker-panel__grid lg-datepicker-panel__grid--3col",children:d.map(o=>{const n=o===s,v=o===d[0]||o===d[11];return e.jsx("button",{type:"button",className:V("lg-datepicker-panel__cell","lg-datepicker-panel__cell--wide",n&&"lg-datepicker-panel__cell--selected",v&&"lg-datepicker-panel__cell--outside"),onClick:()=>a(o),children:o},o)})})]})}Ce.__docgenInfo={description:"年份选择面板 — 3×4 网格展示 12 年",methods:[],displayName:"YearPanel",props:{currentYear:{required:!0,tsType:{name:"number"},description:"当前显示年份（用于计算 12 年范围）"},selectedYear:{required:!1,tsType:{name:"number"},description:"已选中年份"},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(year: number) => void",signature:{arguments:[{type:{name:"number"},name:"year"}],return:{name:"void"}}},description:"年份变化回调"},onPrevDecade:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"切换到上一组 12 年"},onNextDecade:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"切换到下一组 12 年"}}};const ma=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];function qe({currentYear:t,selectedMonth:s,selectedYear:a,onSelect:l,onPrevYear:p,onNextYear:m,onClickYear:d}){return e.jsxs("div",{className:"lg-datepicker-panel lg-datepicker-panel--month",children:[e.jsxs("div",{className:"lg-datepicker-panel__header",children:[e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:p,"aria-label":"上一年",children:e.jsx(G,{size:16})}),e.jsxs("button",{type:"button",className:"lg-datepicker-panel__title lg-datepicker-panel__title--clickable",onClick:d,children:[t,"年"]}),e.jsx("button",{type:"button",className:"lg-datepicker-panel__nav-btn",onClick:m,"aria-label":"下一年",children:e.jsx(J,{size:16})})]}),e.jsx("div",{className:"lg-datepicker-panel__grid lg-datepicker-panel__grid--3col",children:ma.map((k,o)=>{const n=a===t&&s===o;return e.jsx("button",{type:"button",className:V("lg-datepicker-panel__cell","lg-datepicker-panel__cell--wide",n&&"lg-datepicker-panel__cell--selected"),onClick:()=>l(o),children:k},o)})})]})}qe.__docgenInfo={description:"月份选择面板 — 3×4 网格展示 12 个月",methods:[],displayName:"MonthPanel",props:{currentYear:{required:!0,tsType:{name:"number"},description:"当前显示的年份"},selectedMonth:{required:!1,tsType:{name:"number"},description:"已选中的月份（0-11）"},selectedYear:{required:!1,tsType:{name:"number"},description:"已选中的年份（用于对比是否同年）"},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(month: number) => void",signature:{arguments:[{type:{name:"number"},name:"month"}],return:{name:"void"}}},description:"月份选择回调（0-11）"},onPrevYear:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"切换到上一年"},onNextYear:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"切换到下一年"},onClickYear:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"点击年份标题，切换到年选择面板"}}};const i=$e.forwardRef(({value:t,defaultValue:s,onChange:a,disabledDate:l,minDate:p,maxDate:m,format:d="yyyy/MM/dd",weekStartsOn:k=1,showToday:o=!0,disabled:n=!1,error:v=!1,errorMessage:_,size:N="md",placeholder:D="年/月/日",allowClear:M=!0,getPopupContainer:b,onOpenChange:j,className:y,style:P},h)=>{const E=r.useRef(null),{open:C,panelView:H,displayMonth:c,displayText:x,selectedDates:w,setPanelView:T,setDisplayMonth:u,toggleOpen:ze,handleClose:Be,handleSelectDate:Ye,handleSelectToday:Fe,handleClear:Re}=pa({value:t,defaultValue:s,onChange:a,onOpenChange:j,disabled:n,format:d}),A=!!x,Le=M&&A&&!n,Oe=r.useCallback(g=>{u(la(c,g)),T("month")},[c,u,T]),We=r.useCallback(()=>{u(X(c,10))},[c,u]),Ie=r.useCallback(()=>{u($(c,10))},[c,u]),Ee=r.useCallback(g=>{u(sa(c,g)),T("date")},[c,u,T]),He=r.useCallback(()=>{u(X(c,1))},[c,u]),Ae=r.useCallback(()=>{u($(c,1))},[c,u]),Ue=()=>{var g,K,Q;switch(H){case"year":return e.jsx(Ce,{currentYear:c.getFullYear(),selectedYear:(g=w[0])==null?void 0:g.getFullYear(),onSelect:Oe,onPrevDecade:We,onNextDecade:Ie});case"month":return e.jsx(qe,{currentYear:c.getFullYear(),selectedMonth:(K=w[0])==null?void 0:K.getMonth(),selectedYear:(Q=w[0])==null?void 0:Q.getFullYear(),onSelect:Ee,onPrevYear:He,onNextYear:Ae,onClickYear:()=>T("year")});default:return e.jsx(Ve,{displayMonth:c,selectedDates:w,weekStartsOn:k,disabledDate:l,minDate:p,maxDate:m,showToday:o,onSelectDate:Ye,onSelectToday:Fe,onMonthChange:u,onViewChange:T})}},Xe=()=>Le?e.jsxs("span",{className:"lg-datepicker__suffix lg-datepicker__suffix--clearable",children:[e.jsx("span",{className:"lg-datepicker__icon-default",children:e.jsx(Z,{size:16})}),e.jsx("span",{className:"lg-datepicker__clear",onClick:Re,children:e.jsx(ca,{size:16})})]}):e.jsx("span",{className:"lg-datepicker__suffix",children:e.jsx(Z,{size:16})});return e.jsxs("div",{ref:h,className:V("lg-datepicker",y),style:P,children:[e.jsxs(Ge,{open:C,onOpenChange:g=>{g||Be()},children:[e.jsx(Je,{children:e.jsxs("div",{ref:E,className:V("lg-datepicker__trigger",`lg-datepicker__trigger--${N}`,C&&"lg-datepicker__trigger--open",v&&"lg-datepicker__trigger--error",n&&"lg-datepicker__trigger--disabled"),onClick:ze,children:[e.jsx("span",{className:V("lg-datepicker__input",!A&&"lg-datepicker__placeholder"),children:A?x:D}),Xe()]})}),e.jsx(Ke,{className:"lg-datepicker-popover",side:"bottom",align:"start",sideOffset:4,collisionPadding:8,container:b==null?void 0:b(),onOpenAutoFocus:g=>g.preventDefault(),onCloseAutoFocus:g=>g.preventDefault(),children:Ue()})]}),v&&_&&e.jsx("div",{className:"lg-datepicker__error-msg",children:_})]})});i.displayName="DatePicker";i.__docgenInfo={description:`DatePicker 日期选择器

单选日期，基于 Popover 弹层 + react-day-picker 日历面板实现。
支持年/月快速切换面板、今天按钮、日期禁用。`,methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:"受控值"},defaultValue:{required:!1,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:"非受控默认值"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"值变化回调"},disabledDate:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => boolean",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"boolean"}}},description:"禁用日期判断函数"},minDate:{required:!1,tsType:{name:"Date"},description:"可选范围最小日期"},maxDate:{required:!1,tsType:{name:"Date"},description:"可选范围最大日期"},format:{required:!1,tsType:{name:"string"},description:'日期格式化，默认 "yyyy/MM/dd"',defaultValue:{value:'"yyyy/MM/dd"',computed:!1}},weekStartsOn:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"一周起始日，默认 1（周一）",defaultValue:{value:"1",computed:!1}},showToday:{required:!1,tsType:{name:"boolean"},description:"是否显示今天按钮，默认 true",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"错误态",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"错误提示文案"},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:'尺寸，默认 "md"',defaultValue:{value:'"md"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:'占位文本，默认 "年/月/日"',defaultValue:{value:'"年/月/日"',computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"是否显示清空按钮，默认 true",defaultValue:{value:"true",computed:!1}},getPopupContainer:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement",signature:{arguments:[],return:{name:"HTMLElement"}}},description:"浮层挂载容器"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"面板展开/收起回调"},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Va={title:"Components/DatePicker",tags:["autodocs"]},q={name:"基础用法",render:()=>{const[t,s]=r.useState(null);return e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"选择日期"}),e.jsx(i,{value:t,onChange:a=>s(a),placeholder:"年/月/日"}),e.jsxs("p",{style:{marginTop:12,fontSize:12,color:"#999"},children:["当前值：",t?t.toLocaleDateString():"未选择"]})]})}},z={name:"默认值（非受控）",render:()=>e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"有默认值"}),e.jsx(i,{defaultValue:new Date})]})},B={name:"尺寸",render:()=>e.jsxs("div",{style:{width:292,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsx(i,{size:"sm",placeholder:"sm 尺寸"}),e.jsx(i,{size:"md",placeholder:"md 尺寸（默认）"}),e.jsx(i,{size:"lg",placeholder:"lg 尺寸"})]})},Y={name:"状态",render:()=>e.jsxs("div",{style:{width:292,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"未选态"}),e.jsx(i,{placeholder:"年/月/日"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"已选态（hover 显示清除）"}),e.jsx(i,{defaultValue:new Date(2026,3,18)})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"禁用态"}),e.jsx(i,{placeholder:"年/月/日",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"已选禁用态"}),e.jsx(i,{defaultValue:new Date(2026,3,18),disabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"错误态"}),e.jsx(i,{defaultValue:new Date(2026,3,18),error:!0,errorMessage:"输入错误提示信息"})]})]})},F={name:"禁用日期",render:()=>{const[t,s]=r.useState(null),a=new Date;return e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"禁用过去日期 + 周末"}),e.jsx(i,{value:t,onChange:l=>s(l),disabledDate:l=>l<Pe(a,1)||ua(l)})]})}},R={name:"日期范围限制",render:()=>{const[t,s]=r.useState(null),a=new Date;return e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"仅可选前后 30 天"}),e.jsx(i,{value:t,onChange:l=>s(l),minDate:Pe(a,30),maxDate:ia(a,30)})]})}},L={name:"自定义格式",render:()=>{const[t,s]=r.useState(new Date);return e.jsxs("div",{style:{width:292,padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"yyyy-MM-dd"}),e.jsx(i,{value:t,onChange:a=>s(a),format:"yyyy-MM-dd"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"yyyy年MM月dd日"}),e.jsx(i,{value:t,onChange:a=>s(a),format:"yyyy年MM月dd日"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#666"},children:"MM/dd/yyyy"}),e.jsx(i,{value:t,onChange:a=>s(a),format:"MM/dd/yyyy"})]})]})}},O={name:"隐藏今天按钮",render:()=>e.jsx("div",{style:{width:292,padding:24},children:e.jsx(i,{showToday:!1,placeholder:"不显示今天按钮"})})},W={name:"周日起始",render:()=>e.jsxs("div",{style:{width:292,padding:24},children:[e.jsx("h4",{style:{marginBottom:12},children:"一周从周日开始"}),e.jsx(i,{weekStartsOn:0})]})},I={name:"不允许清除",render:()=>e.jsx("div",{style:{width:292,padding:24},children:e.jsx(i,{defaultValue:new Date,allowClear:!1})})};var ee,ae,te;q.parameters={...q.parameters,docs:{...(ee=q.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=q.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,re,le;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(le=(re=z.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ie,de;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var oe,ce,ue;Y.parameters={...Y.parameters,docs:{...(oe=Y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ue=(ce=Y.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,me,ye;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(me=F.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var ge,ve,fe;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var he,ke,xe;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(ke=L.parameters)==null?void 0:ke.docs)==null?void 0:xe.source}}};var _e,De,be;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: "隐藏今天按钮",
  render: () => <div style={{
    width: 292,
    padding: 24
  }}>
      <DatePicker showToday={false} placeholder="不显示今天按钮" />
    </div>
}`,...(be=(De=O.parameters)==null?void 0:De.docs)==null?void 0:be.source}}};var je,we,Se;W.parameters={...W.parameters,docs:{...(je=W.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Se=(we=W.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Te,Ne,Me;I.parameters={...I.parameters,docs:{...(Te=I.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: "不允许清除",
  render: () => <div style={{
    width: 292,
    padding: 24
  }}>
      <DatePicker defaultValue={new Date()} allowClear={false} />
    </div>
}`,...(Me=(Ne=I.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};const Ca=["Basic","DefaultValue","Sizes","States","DisabledDate","MinMaxDate","CustomFormat","HideToday","SundayStart","NoClear"];export{q as Basic,L as CustomFormat,z as DefaultValue,F as DisabledDate,O as HideToday,R as MinMaxDate,I as NoClear,B as Sizes,Y as States,W as SundayStart,Ca as __namedExportsOrder,Va as default};
