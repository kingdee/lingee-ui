import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./react-dom-Ccy8f0CG.js";import{F as i,j as a,r as o}from"./tooltip-DJNKKjxB.js";import{n as s}from"./provider-ViaVeHt0.js";import{t as c}from"./button-BE2IGfnk.js";import{t as l}from"./empty-Crrpg7I8.js";import{t as u}from"./tabs-DDl2PaFY.js";import{t as d}from"./checkbox-wAKJ5ym-.js";import{t as f}from"./spin-DU7HU9Ag.js";import{t as p}from"./alert-B0jkg4zg.js";import{C as m,S as h,a as g,g as _,i as v,l as y,n as b,p as x,t as S,v as C,x as w,y as T}from"./es-DxxfLijX.js";import{n as E,t as D}from"./getScrollBarSize-D4WvbbaV.js";import{n as O,t as k}from"./es-BISrzS3y.js";var A=e(t()),j={},M=`rc-table-internal-hook`,N=e(r());function P(e){let t=A.createContext(void 0);return{Context:t,Provider:({value:e,children:n})=>{let r=A.useRef(e);r.current=e;let[i]=A.useState(()=>({getValue:()=>r.current,listeners:new Set}));return w(()=>{(0,N.unstable_batchedUpdates)(()=>{i.listeners.forEach(t=>{t(e)})})},[e]),A.createElement(t.Provider,{value:i},n)},defaultValue:e}}function F(e,t){let n=m(typeof t==`function`?t:e=>{if(t===void 0)return e;if(!Array.isArray(t))return e[t];let n={};return t.forEach(t=>{n[t]=e[t]}),n}),r=A.useContext(e?.Context),{listeners:i,getValue:a}=r||{},o=A.useRef();o.current=n(r?a():e?.defaultValue);let[,s]=A.useState({});return w(()=>{if(!r)return;function e(e){let t=n(e);T(o.current,t,!0)||s({})}return i.add(e),()=>{i.delete(e)}},[r]),o.current}function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function L(){let e=A.createContext(null);function t(){return A.useContext(e)}function n(n,r){let i=_(n),a=(a,o)=>{let s=i?{ref:o}:{},c=A.useRef(0),l=A.useRef(a);return t()===null?((!r||r(l.current,a))&&(c.current+=1),l.current=a,A.createElement(e.Provider,{value:c.current},A.createElement(n,I({},a,s)))):A.createElement(n,I({},a,s))};return i?A.forwardRef(a):a}function r(e,n){let r=_(e),i=(n,i)=>{let a=r?{ref:i}:{};return t(),A.createElement(e,I({},n,a))};return A.memo(r?A.forwardRef(i):i,n)}return{makeImmutable:n,responseImmutable:r,useImmutableMark:t}}var{makeImmutable:R,responseImmutable:z,useImmutableMark:ee}=L(),{makeImmutable:te,responseImmutable:ne,useImmutableMark:B}=L(),V=P();function H(e,t){let n=e;for(let e=0;e<t.length;e+=1){if(n==null)return;n=n[t[e]]}return n}var U=A.createContext({renderWithProps:!1}),re=`RC_TABLE_KEY`;function ie(e){return e==null?[]:Array.isArray(e)?e:[e]}function ae(e){let t=[],n={};return e.forEach(e=>{let{key:r,dataIndex:i}=e||{},a=r||ie(i).join(`-`)||re;for(;n[a];)a=`${a}_next`;n[a]=!0,t.push(a)}),t}function oe(e){return e!=null}function se(e){return typeof e==`number`&&!Number.isNaN(e)}function ce(e){return e&&typeof e==`object`&&!Array.isArray(e)&&!A.isValidElement(e)}function le(e,t,n,r,i,a){let o=A.useContext(U),s=B();return C(()=>{if(oe(r))return[r];let a=H(e,t==null||t===``?[]:Array.isArray(t)?t:[t]),s=a,c;if(i){let t=i(a,e,n);ce(t)?(s=t.children,c=t.props,o.renderWithProps=!0):s=t}return[s,c]},[s,e,r,t,i,n],(e,t)=>{if(a){let[,n]=e,[,r]=t;return a(r,n)}return o.renderWithProps?!0:!T(e,t,!0)})}function ue(e,t,n,r){let i=e+t-1;return e<=r&&i>=n}function de(e,t){return F(V,n=>[ue(e,t||1,n.hoverStartRow,n.hoverEndRow),n.onHover])}function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe.apply(this,arguments)}var W=({ellipsis:e,rowType:t,children:n})=>{let r,i=e===!0?{showTitle:!0}:e;return i&&(i.showTitle||t===`header`)&&(typeof n==`string`||typeof n==`number`?r=n.toString():A.isValidElement(n)&&typeof n.props?.children==`string`&&(r=n.props?.children)),r},pe=A.memo(e=>{let{component:t,children:n,ellipsis:r,scope:a,prefixCls:o,className:s,style:c,align:l,record:u,render:d,dataIndex:f,renderIndex:p,shouldCellUpdate:h,index:g,rowType:_,colSpan:v,rowSpan:y,fixStart:b,fixEnd:x,fixedStartShadow:S,fixedEndShadow:C,offsetFixedStartShadow:w,offsetFixedEndShadow:T,zIndex:E,zIndexReverse:D,appendNode:O,additionalProps:k={},originRowSpan:j,isSticky:M}=e,N=`${o}-cell`,{allColumnsFixedLeft:P,rowHoverable:I}=F(V,[`allColumnsFixedLeft`,`rowHoverable`]),[L,R]=le(u,f,p,n,d,h),z={},ee=typeof b==`number`&&!P,te=typeof x==`number`&&!P,[ne,B]=F(V,({scrollInfo:e})=>{if(!ee&&!te)return[!1,!1];let[t,n]=e;return[(ee&&S&&t)-w>=1,(te&&C&&n-t)-T>1]});ee&&(z.insetInlineStart=b,z[`--z-offset`]=E,z[`--z-offset-reverse`]=D),te&&(z.insetInlineEnd=x,z[`--z-offset`]=E,z[`--z-offset-reverse`]=D);let H=R?.colSpan??k.colSpan??v??1,U=R?.rowSpan??k.rowSpan??y??1,re=R?.rowSpan??j??U,[ie,ae]=de(g,re),oe=m(e=>{u&&ae(g,g+re-1),k?.onMouseEnter?.(e)}),se=m(e=>{u&&ae(-1,-1),k?.onMouseLeave?.(e)});if(H===0||U===0)return null;let ce=k.title??W({rowType:_,ellipsis:r,children:L}),ue=i(N,s,{[`${N}-fix`]:ee||te,[`${N}-fix-start`]:ee,[`${N}-fix-end`]:te,[`${N}-fix-start-shadow`]:S,[`${N}-fix-start-shadow-show`]:S&&ne,[`${N}-fix-end-shadow`]:C,[`${N}-fix-end-shadow-show`]:C&&B,[`${N}-ellipsis`]:r,[`${N}-with-append`]:O,[`${N}-fix-sticky`]:(ee||te)&&M,[`${N}-row-hover`]:!R&&ie},k.className,R?.className),pe={};l&&(pe.textAlign=l);let me={...R?.style,...z,...pe,...k.style,...c},G=L;return typeof G==`object`&&!Array.isArray(G)&&!A.isValidElement(G)&&(G=null),r&&(S||C)&&(G=A.createElement(`span`,{className:`${N}-content`},G)),A.createElement(t,fe({},R,k,{className:ue,style:me,title:ce,scope:a,onMouseEnter:I?oe:void 0,onMouseLeave:I?se:void 0,colSpan:H===1?null:H,rowSpan:U===1?null:U}),O,G)});function me(e){return e.fixed===`start`}function G(e){return e.fixed===`end`}function he(e,t,n,r){let i=n[e]||{},a=n[t]||{},o=null,s=null;me(i)&&me(a)?o=r.start[e]:G(a)&&G(i)&&(s=r.end[t]);let c=!1,l=!1,u=0,d=0;o!==null&&(c=!n[t+1]||!me(n[t+1]),u=n.length*2-e,d=n.length+e),s!==null&&(l=!n[e-1]||!G(n[e-1]),u=t,d=n.length-t);let f=0,p=0;if(c)for(let t=0;t<e;t+=1)me(n[t])||(f+=r.widths[t]||0);if(l)for(let e=n.length-1;e>t;--e)G(n[e])||(p+=r.widths[e]||0);return{fixStart:o,fixEnd:s,fixedStartShadow:c,fixedEndShadow:l,offsetFixedStartShadow:f,offsetFixedEndShadow:p,isSticky:r.isSticky,zIndex:u,zIndexReverse:d}}var ge=A.createContext({});function _e(){return _e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_e.apply(this,arguments)}var ve=e=>{let{className:t,index:n,children:r,colSpan:i=1,rowSpan:a,align:o}=e,{prefixCls:s}=F(V,[`prefixCls`]),{scrollColumnIndex:c,stickyOffsets:l,flattenColumns:u}=A.useContext(ge),d=n+i-1+1===c?i+1:i,f=A.useMemo(()=>he(n,n+d-1,u,l),[n,d,u,l]);return A.createElement(pe,_e({className:t,index:n,component:`td`,prefixCls:s,record:null,dataIndex:null,align:o,colSpan:d,rowSpan:a,render:()=>r},f))},ye=e=>{let{children:t,...n}=e;return A.createElement(`tr`,n,t)},be=e=>{let{children:t}=e;return t};be.Row=ye,be.Cell=ve;var xe=ne(e=>{let{children:t,stickyOffsets:n,flattenColumns:r}=e,i=F(V,`prefixCls`),a=r.length-1,o=r[a],s=A.useMemo(()=>({stickyOffsets:n,flattenColumns:r,scrollColumnIndex:o?.scrollbar?a:null}),[o,r,a,n]);return A.createElement(ge.Provider,{value:s},A.createElement(`tfoot`,{className:`${i}-summary`},t))}),Se=be;function K(e){return null}function Ce(e){return null}function q(e,t,n,r,i,a,o){let s=a(t,o);e.push({record:t,indent:n,index:o,rowKey:s});let c=i?.has(s);if(t&&Array.isArray(t[r])&&c)for(let o=0;o<t[r].length;o+=1)q(e,t[r][o],n+1,r,i,a,o)}function we(e,t,n,r){return A.useMemo(()=>{if(n?.size){let i=[];for(let a=0;a<e?.length;a+=1){let o=e[a];q(i,o,0,t,n,r,a)}return i}return e?.map((e,t)=>({record:e,indent:0,index:t,rowKey:r(e,t)}))},[e,t,n,r])}function Te(e,t,n,r){let a=F(V,[`prefixCls`,`fixedInfoList`,`flattenColumns`,`expandableType`,`expandRowByClick`,`onTriggerExpand`,`rowClassName`,`expandedRowClassName`,`indentSize`,`expandIcon`,`expandedRowRender`,`forceRender`,`expandIconColumnIndex`,`expandedKeys`,`childrenColumnName`,`rowExpandable`,`onRow`]),{flattenColumns:o,expandableType:s,expandedKeys:c,childrenColumnName:l,onTriggerExpand:u,rowExpandable:d,onRow:f,expandRowByClick:p,rowClassName:h}=a,g=s===`nest`,_=s===`row`&&(!d||d(e)),v=_||g,y=c&&c.has(t),b=l&&e&&e[l],x=m(u),S=f?.(e,n),C=S?.onClick,w=(t,...n)=>{p&&v&&u(e,t),C?.(t,...n)},T;typeof h==`string`?T=h:typeof h==`function`&&(T=h(e,n,r));let E=ae(o);return{...a,columnsKey:E,nestExpandable:g,expanded:y,hasNestChildren:b,record:e,onTriggerExpand:x,rowSupportExpand:_,expandable:v,rowProps:{...S,className:i(T,S?.className),onClick:w}}}var Ee=e=>{let{prefixCls:t,children:n,component:r,cellComponent:i,className:a,expanded:o,colSpan:s,isEmpty:c,stickyOffset:l=0}=e,{scrollbarSize:u,fixHeader:d,fixColumn:f,componentWidth:p,horizonScroll:m}=F(V,[`scrollbarSize`,`fixHeader`,`fixColumn`,`componentWidth`,`horizonScroll`]),h=n;return(c?m&&p:f)&&(h=A.createElement(`div`,{style:{width:p-l-(d&&!c?u:0),position:`sticky`,left:l,overflow:`hidden`},className:`${t}-expanded-row-fixed`},h)),A.createElement(r,{className:a,style:{display:o?null:`none`}},A.createElement(pe,{component:i,prefixCls:t,colSpan:s},h))};function J({prefixCls:e,record:t,onExpand:n,expanded:r,expandable:a}){let o=`${e}-row-expand-icon`;if(!a)return A.createElement(`span`,{className:i(o,`${e}-row-spaced`)});let s=e=>{n(t,e),e.stopPropagation()};return A.createElement(`span`,{className:i(o,{[`${e}-row-expanded`]:r,[`${e}-row-collapsed`]:!r}),onClick:s})}function De(e,t,n){let r=[];function i(e){(e||[]).forEach((e,a)=>{r.push(t(e,a)),i(e[n])})}return i(e),r}function Oe(e,t,n,r){return typeof e==`string`?e:typeof e==`function`?e(t,n,r):``}function ke(){return ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ke.apply(this,arguments)}function Ae(e,t,n,r,i,a=[],o=0){let{record:s,prefixCls:c,columnsKey:l,fixedInfoList:u,expandIconColumnIndex:d,nestExpandable:f,indentSize:p,expandIcon:m,expanded:h,hasNestChildren:g,onTriggerExpand:_,expandable:v,expandedKeys:y}=e,b=l[n],x=u[n],S;n===(d||0)&&f&&(S=A.createElement(A.Fragment,null,A.createElement(`span`,{style:{paddingLeft:`${p*r}px`},className:`${c}-row-indent indent-level-${r}`}),m({prefixCls:c,expanded:h,expandable:g,record:s,onExpand:_})));let C={...t.onCell?.(s,i)},w;if(o){let{rowSpan:e=1}=C;if(v&&e&&n<o){w=e;let t=e;for(let n=i;n<i+e;n+=1){let e=a[n];y.has(e)&&(t+=1)}C.rowSpan=t}}return{key:b,fixedInfo:x,appendCellNode:S,additionalCellProps:C,originRowSpan:w}}var je=ne(e=>{let{className:t,style:n,classNames:r,styles:a,record:o,index:s,renderIndex:c,rowKey:l,rowKeys:u,indent:d=0,rowComponent:f,cellComponent:p,scopeCellComponent:m,expandedRowInfo:h}=e,g=Te(o,l,s,d),{prefixCls:_,flattenColumns:v,expandedRowClassName:y,expandedRowRender:b,forceRender:x,rowProps:S,expanded:C,rowSupportExpand:w}=g,T=A.useRef(!1);T.current||=C;let E=Oe(y,o,s,d),D=A.createElement(f,ke({},S,{"data-row-key":l,className:i(t,`${_}-row`,`${_}-row-level-${d}`,S?.className,r.row,{[E]:d>=1}),style:{...n,...S?.style,...a.row}}),v.map((e,t)=>{let{render:n,dataIndex:l,className:f}=e,{key:v,fixedInfo:y,appendCellNode:b,additionalCellProps:x,originRowSpan:S}=Ae(g,e,t,d,s,u,h?.offset);return A.createElement(pe,ke({className:i(f,r.cell),style:a.cell,ellipsis:e.ellipsis,align:e.align,scope:e.rowScope,component:e.rowScope?m:p,prefixCls:_,key:v,record:o,index:s,renderIndex:c,dataIndex:l,render:n,shouldCellUpdate:e.shouldCellUpdate},y,{appendNode:b,additionalProps:x,originRowSpan:S}))})),O;if(w&&(x||T.current||C)){let e=b(o,s,d+1,C);O=A.createElement(Ee,{expanded:C,className:i(`${_}-expanded-row`,`${_}-expanded-row-level-${d+1}`,E),prefixCls:_,component:f,cellComponent:p,colSpan:h?h.colSpan:v.length,isEmpty:!1,stickyOffset:h?.sticky},e)}return A.createElement(A.Fragment,null,D,O)}),Me=e=>{let{columnKey:t,onColumnResize:n,title:r}=e,i=A.useRef(null);return w(()=>{i.current&&n(t,i.current.offsetWidth)},[]),A.createElement(O,{data:t},A.createElement(`td`,{ref:i,style:{paddingTop:0,paddingBottom:0,borderTop:0,borderBottom:0,height:0}},A.createElement(`div`,{style:{height:0,overflow:`hidden`,fontWeight:`bold`}},r||`\xA0`)))},Ne=({prefixCls:e,columnsKey:t,onColumnResize:n,columns:r})=>{let i=A.useRef(null),{measureRowRender:a}=F(V,[`measureRowRender`]),o=A.createElement(`tr`,{"aria-hidden":`true`,className:`${e}-measure-row`,style:{height:0},ref:i},A.createElement(O.Collection,{onBatchResize:e=>{v(i.current)&&e.forEach(({data:e,size:t})=>{n(e,t.offsetWidth)})}},t.map(e=>{let t=r.find(t=>t.key===e)?.title,i=A.isValidElement(t)?A.cloneElement(t,{ref:null}):t;return A.createElement(Me,{key:e,columnKey:e,onColumnResize:n,title:i})})));return typeof a==`function`?a(o):o},Pe=ne(e=>{let{data:t,measureColumnWidth:n}=e,{prefixCls:r,getComponent:a,onColumnResize:o,flattenColumns:s,getRowKey:c,expandedKeys:l,childrenColumnName:u,emptyNode:d,classNames:f,styles:p,expandedRowOffset:m=0,colWidths:h}=F(V,[`prefixCls`,`getComponent`,`onColumnResize`,`flattenColumns`,`getRowKey`,`expandedKeys`,`childrenColumnName`,`emptyNode`,`classNames`,`styles`,`expandedRowOffset`,`fixedInfoList`,`colWidths`]),{body:g={}}=f||{},{body:_={}}=p||{},v=we(t,u,l,c),y=A.useMemo(()=>v.map(e=>e.rowKey),[v]),b=A.useRef({renderWithProps:!1}),x=A.useMemo(()=>{let e=s.length-m,t=0;for(let e=0;e<m;e+=1)t+=h[e]||0;return{offset:m,colSpan:e,sticky:t}},[s.length,m,h]),S=a([`body`,`wrapper`],`tbody`),C=a([`body`,`row`],`tr`),w=a([`body`,`cell`],`td`),T=a([`body`,`cell`],`th`),E;E=t.length?v.map((e,t)=>{let{record:n,indent:r,index:i,rowKey:a}=e;return A.createElement(je,{classNames:g,styles:_,key:a,rowKey:a,rowKeys:y,record:n,index:t,renderIndex:i,rowComponent:C,cellComponent:w,scopeCellComponent:T,indent:r,expandedRowInfo:x})}):A.createElement(Ee,{expanded:!0,className:`${r}-placeholder`,prefixCls:r,component:C,cellComponent:w,colSpan:s.length,isEmpty:!0},d);let D=ae(s);return A.createElement(U.Provider,{value:b.current},A.createElement(S,{style:_.wrapper,className:i(`${r}-tbody`,g.wrapper)},n&&A.createElement(Ne,{prefixCls:r,columnsKey:D,onColumnResize:o,columns:s}),E))}),Fe=`RC_TABLE_INTERNAL_COL_DEFINE`;function Ie(e){let{expandable:t,...n}=e,r;return r=`expandable`in e?{...n,...t}:n,r.showExpandColumn===!1&&(r.expandIconColumnIndex=-1),r}function Le(){return Le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Le.apply(this,arguments)}var Re=e=>{let{colWidths:t,columns:n,columCount:r}=e,{tableLayout:i}=F(V,[`tableLayout`]),a=[],o=r||n.length,s=!1;for(let e=o-1;e>=0;--e){let r=t[e],o=n&&n[e],c,l;if(o&&(c=o[Fe],i===`auto`&&(l=o.minWidth)),r||l||c||s){let{columnType:t,...n}=c||{};a.unshift(A.createElement(`col`,Le({key:e,style:{width:r,minWidth:l}},n))),s=!0}}return a.length>0?A.createElement(`colgroup`,null,a):null};function ze(e,t){return(0,A.useMemo)(()=>{let n=[];for(let r=0;r<t;r+=1){let t=e[r];if(t!==void 0)n[r]=t;else return null}return n},[e.join(`_`),t])}var Y=A.forwardRef((e,t)=>{let{className:n,style:r,noData:a,columns:o,flattenColumns:s,colWidths:c,colGroup:l,columCount:u,stickyOffsets:d,direction:f,fixHeader:p,stickyTopOffset:m,stickyBottomOffset:h,stickyClassName:g,scrollX:_,tableLayout:v=`fixed`,onScroll:y,maxContentScroll:b,children:S,...C}=e,{prefixCls:w,scrollbarSize:T,isSticky:E,getComponent:D}=F(V,[`prefixCls`,`scrollbarSize`,`isSticky`,`getComponent`]),O=D([`header`,`table`],`table`),k=E&&!p?0:T,j=A.useRef(null),M=A.useCallback(e=>{x(t,e),x(j,e)},[]);A.useEffect(()=>{function e(e){let{currentTarget:t,deltaX:n}=e;if(n){let{scrollLeft:r,scrollWidth:i,clientWidth:a}=t,o=i-a,s=r+n;f===`rtl`?(s=Math.max(-o,s),s=Math.min(0,s)):(s=Math.min(o,s),s=Math.max(0,s)),y({currentTarget:t,scrollLeft:s}),e.preventDefault()}}let t=j.current;return t?.addEventListener(`wheel`,e,{passive:!1}),()=>{t?.removeEventListener(`wheel`,e)}},[]);let N=s[s.length-1],P={fixed:N?N.fixed:null,scrollbar:!0,onHeaderCell:()=>({className:`${w}-cell-scrollbar`})},I=(0,A.useMemo)(()=>k?[...o,P]:o,[k,o]),L=(0,A.useMemo)(()=>k?[...s,P]:s,[k,s]),R=(0,A.useMemo)(()=>{let{start:e,end:t}=d;return{...d,start:e,end:[...t.map(e=>e+k),0],isSticky:E}},[k,d,E]),z=ze(c,u),ee=(0,A.useMemo)(()=>{let e=!z||!z.length||z.every(e=>!e);return a||e},[a,z]);return A.createElement(`div`,{style:{overflow:`hidden`,...E?{top:m,bottom:h}:{},...r},ref:M,className:i(n,{[g]:!!g})},A.createElement(O,{style:{tableLayout:v,minWidth:`100%`,width:_}},ee?l:A.createElement(Re,{colWidths:[...z,k],columCount:u+1,columns:L}),S({...C,stickyOffsets:R,columns:I,flattenColumns:L})))}),Be=A.memo(Y);function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}var Ve=e=>{let{cells:t,stickyOffsets:n,flattenColumns:r,rowComponent:i,cellComponent:a,onHeaderRow:o,index:s,classNames:c,styles:l}=e,{prefixCls:u}=F(V,[`prefixCls`]),d;o&&(d=o(t.map(e=>e.column),s));let f=ae(t.map(e=>e.column));return A.createElement(i,X({},d,{className:c.row,style:l.row}),t.map((e,t)=>{let{column:i,colStart:o,colEnd:s,colSpan:c}=e,l=he(o,s,r,n),d=i?.onHeaderCell?.(i)||{};return A.createElement(pe,X({},e,{scope:i.title?c>1?`colgroup`:`col`:null,ellipsis:i.ellipsis,align:i.align,component:a,prefixCls:u,key:f[t]},l,{additionalProps:d,rowType:`header`}))}))};function He(e,t,n){let r=[];function a(e,o,s=0){r[s]=r[s]||[];let c=o;return e.filter(Boolean).map(e=>{let o={key:e.key,className:i(e.className,t.cell)||``,style:n.cell,children:e.title,column:e,colStart:c},l=1,u=e.children;return u&&u.length>0&&(l=a(u,c,s+1).reduce((e,t)=>e+t,0),o.hasSubColumns=!0),`colSpan`in e&&({colSpan:l}=e),`rowSpan`in e&&(o.rowSpan=e.rowSpan),o.colSpan=l,o.colEnd=o.colStart+l-1,r[s].push(o),c+=l,l})}a(e,0);let o=r.length;for(let e=0;e<o;e+=1)r[e].forEach(t=>{!(`rowSpan`in t)&&!t.hasSubColumns&&(t.rowSpan=o-e)});return r}var Ue=ne(e=>{let{stickyOffsets:t,columns:n,flattenColumns:r,onHeaderRow:a}=e,{prefixCls:o,getComponent:s,classNames:c,styles:l}=F(V,[`prefixCls`,`getComponent`,`classNames`,`styles`]),{header:u={}}=c||{},{header:d={}}=l||{},f=A.useMemo(()=>He(n,u,d),[n,u,d]),p=s([`header`,`wrapper`],`thead`),m=s([`header`,`row`],`tr`),h=s([`header`,`cell`],`th`);return A.createElement(p,{className:i(`${o}-thead`,u.wrapper),style:d.wrapper},f.map((e,n)=>A.createElement(Ve,{classNames:u,styles:d,key:n,flattenColumns:r,cells:e,stickyOffsets:t,rowComponent:m,cellComponent:h,onHeaderRow:a,index:n})))});function We(e,t=``){return typeof t==`number`?t:t.endsWith(`%`)?e*parseFloat(t)/100:null}function Ge(e,t,n){return A.useMemo(()=>{if(t&&t>0){let r=0,i=0;e.forEach(e=>{let n=We(t,e.width);n?r+=n:i+=1});let a=Math.max(t,n),o=Math.max(a-r,i),s=i,c=o/i,l=0,u=e.map(e=>{let n={...e},r=We(t,n.width);if(r)n.width=r;else{let e=Math.floor(c);n.width=s===1?o:e,o-=e,--s}return l+=n.width,n});if(l<a){let e=a/l;o=a,u.forEach((t,n)=>{let r=Math.floor(t.width*e);t.width=n===u.length-1?o:r,o-=r})}return[u,Math.max(l,a)]}return[e,t]},[e,t,n])}function Ke(e){return S(e).filter(e=>A.isValidElement(e)).map(e=>{let{key:t,props:n}=e,{children:r,...i}=n,a={key:t,...i};return r&&(a.children=Ke(r)),a})}function qe(e){return e.filter(e=>e&&typeof e==`object`&&!e.hidden).map(e=>{let t=e.children;return t&&t.length>0?{...e,children:qe(t)}:e})}function Je(e,t=`key`){return e.filter(e=>e&&typeof e==`object`).reduce((e,n,r)=>{let{fixed:i}=n,a=i===!0||i===`left`?`start`:i===`right`?`end`:i,o=`${t}-${r}`,s=n.children;return s&&s.length>0?[...e,...Je(s,o).map(e=>({...e,fixed:e.fixed??a}))]:[...e,{key:o,...n,fixed:a}]},[])}function Ye({prefixCls:e,columns:t,children:n,expandable:r,expandedKeys:i,columnTitle:a,getRowKey:o,onTriggerExpand:s,expandIcon:c,rowExpandable:l,expandIconColumnIndex:u,expandedRowOffset:d=0,direction:f,expandRowByClick:p,columnWidth:m,fixed:h,scrollWidth:g,clientWidth:_},v){let y=A.useMemo(()=>qe((t||Ke(n)||[]).slice()),[t,n]),b=A.useMemo(()=>{if(r){let t=y.slice();if(!t.includes(j)){let e=u||0,n=e===0&&(h===`right`||h===`end`)?y.length:e;n>=0&&t.splice(n,0,j)}let n=t.indexOf(j);t=t.filter((e,t)=>e!==j||t===n);let r=y[n],f;f=h||(r?r.fixed:null);let g={[Fe]:{className:`${e}-expand-icon-col`,columnType:`EXPAND_COLUMN`},title:a,fixed:f,className:`${e}-row-expand-icon-cell`,width:m,render:(t,n,r)=>{let a=o(n,r),u=c({prefixCls:e,expanded:i.has(a),expandable:!l||l(n),record:n,onExpand:s});return p?A.createElement(`span`,{onClick:e=>e.stopPropagation()},u):u}};return t.map((e,t)=>{let n=e===j?g:e;return t<d?{...n,fixed:n.fixed||`start`}:n})}return y.filter(e=>e!==j)},[r,y,o,i,c,f,d]),x=A.useMemo(()=>{let e=b;return v&&(e=v(e)),e.length||(e=[{render:()=>null}]),e},[v,b,f]),[S,C]=Ge(A.useMemo(()=>Je(x),[x,f,g]),g,_);return[x,S,C]}function Xe(e,t,n){let r=Ie(e),{expandIcon:i,expandedRowKeys:a,defaultExpandedRowKeys:o,defaultExpandAllRows:s,expandedRowRender:c,onExpand:l,onExpandedRowsChange:u,childrenColumnName:d}=r,f=i||J,p=d||`children`,m=A.useMemo(()=>c?`row`:e.expandable&&e.internalHooks===`rc-table-internal-hook`&&e.expandable.__PARENT_RENDER_ICON__||t.some(e=>e&&typeof e==`object`&&e[p])?`nest`:!1,[!!c,t]),[h,g]=A.useState(()=>o||(s?De(t,n,p):[])),_=A.useMemo(()=>new Set(a||h||[]),[a,h]);return[r,m,_,f,p,A.useCallback(e=>{let r=n(e,t.indexOf(e)),i,a=_.has(r);a?(_.delete(r),i=[..._]):i=[..._,r],g(i),l&&l(!a,e),u&&u(i)},[n,_,t,l,u])]}function Ze(e,t){let n=A.useMemo(()=>e.map((n,r)=>he(r,r,e,t)),[e,t]);return C(()=>n,[n],(e,t)=>!T(e,t))}function Qe(e){let t=(0,A.useRef)(e),[,n]=(0,A.useState)({}),r=(0,A.useRef)(null),i=(0,A.useRef)([]);function a(e){i.current.push(e);let a=Promise.resolve();r.current=a,a.then(()=>{if(r.current===a){let e=i.current,a=t.current;i.current=[],e.forEach(e=>{t.current=e(t.current)}),r.current=null,a!==t.current&&n({})}})}return(0,A.useEffect)(()=>()=>{r.current=null},[]),[t.current,a]}function $e(e){let t=(0,A.useRef)(e||null),n=(0,A.useRef)(null);function r(){clearTimeout(n.current)}function i(e){t.current=e,r(),n.current=setTimeout(()=>{t.current=null,n.current=void 0},100)}function a(){return t.current}return(0,A.useEffect)(()=>r,[]),[i,a]}function et(){let[e,t]=A.useState(-1),[n,r]=A.useState(-1);return[e,n,A.useCallback((e,n)=>{t(e),r(n)},[])]}var Z=h()?window:null;function tt(e,t){let{offsetHeader:n=0,offsetSummary:r=0,offsetScroll:i=0,getContainer:a=()=>Z}=typeof e==`object`?e:{},o=a()||Z,s=!!e;return A.useMemo(()=>({isSticky:s,stickyClassName:s?`${t}-sticky-holder`:``,offsetHeader:n,offsetSummary:r,offsetScroll:i,container:o}),[s,i,n,r,t,o])}function nt(e,t){return(0,A.useMemo)(()=>{let n=t.length,r=(n,r,i)=>{let a=[],o=0;for(let s=n;s!==r;s+=i)a.push(o),t[s].fixed&&(o+=e[s]||0);return a};return{start:r(0,n,1),end:r(n-1,-1,-1).reverse(),widths:e}},[e,t])}var rt=e=>{let{children:t,className:n,style:r}=e;return A.createElement(`div`,{className:n,style:r},t)};function it(e){let t=g(e).getBoundingClientRect(),n=document.documentElement;return{left:t.left+(window.pageXOffset||n.scrollLeft)-(n.clientLeft||document.body.clientLeft||0),top:t.top+(window.pageYOffset||n.scrollTop)-(n.clientTop||document.body.clientTop||0)}}var at=`mouseup`,ot=`mousemove`,st=`scroll`,ct=`resize`,lt=A.forwardRef((e,t)=>{let{scrollBodyRef:n,onScroll:r,offsetScroll:a,container:o,direction:s}=e,c=F(V,`prefixCls`),l=n.current?.scrollWidth||0,u=n.current?.clientWidth||0,d=l&&u/l*u,f=A.useRef(null),[p,m]=Qe({scrollLeft:0,isHiddenScrollBar:!0}),h=A.useRef({delta:0,x:0}),[_,v]=A.useState(!1),b=A.useRef(null);A.useEffect(()=>()=>{y.cancel(b.current)},[]);let x=()=>{v(!1)},S=e=>{e.persist(),h.current.delta=e.pageX-p.scrollLeft,h.current.x=0,v(!0),e.preventDefault()},C=e=>{let{buttons:t}=e||window?.event;if(!_||t===0){_&&v(!1);return}let n=h.current.x+e.pageX-h.current.x-h.current.delta,i=s===`rtl`;n=Math.max(i?d-u:0,Math.min(i?0:u-d,n)),(!i||Math.abs(n)+Math.abs(d)<u)&&(r({scrollLeft:n/u*(l+2)}),h.current.x=e.pageX)},w=()=>{y.cancel(b.current),b.current=y(()=>{if(!n.current)return;let e=it(n.current).top,t=e+n.current.offsetHeight,r=o===window?document.documentElement.scrollTop+window.innerHeight:it(o).top+o.clientHeight;t-D()<=r||e>=r-a?m(e=>({...e,isHiddenScrollBar:!0})):m(e=>({...e,isHiddenScrollBar:!1}))})},T=e=>{m(t=>({...t,scrollLeft:e/l*u||0}))};return A.useImperativeHandle(t,()=>({setScrollLeft:T,checkScrollBarVisible:w})),A.useEffect(()=>(document.body.addEventListener(at,x,!1),document.body.addEventListener(ot,C,!1),w(),()=>{document.body.removeEventListener(at,x),document.body.removeEventListener(ot,C)}),[d,_]),A.useEffect(()=>{if(n.current){let e=[],t=g(n.current);for(;t;)e.push(t),t=t.parentElement;return e.forEach(e=>{e.addEventListener(st,w,!1)}),window.addEventListener(ct,w,!1),window.addEventListener(st,w,!1),o.addEventListener(st,w,!1),()=>{e.forEach(e=>{e.removeEventListener(st,w)}),window.removeEventListener(ct,w),window.removeEventListener(st,w),o.removeEventListener(st,w)}}},[o]),A.useEffect(()=>{p.isHiddenScrollBar||m(e=>{let t=n.current;return t?{...e,scrollLeft:t.scrollLeft/t.scrollWidth*t.clientWidth}:e})},[p.isHiddenScrollBar]),l<=u||!d||p.isHiddenScrollBar?null:A.createElement(`div`,{style:{height:D(),width:u,bottom:a},className:`${c}-sticky-scroll`},A.createElement(`div`,{onMouseDown:S,ref:f,className:i(`${c}-sticky-scroll-bar`,{[`${c}-sticky-scroll-bar-active`]:_}),style:{width:`${d}px`,transform:`translate3d(${p.scrollLeft}px, 0, 0)`}}))});function ut(){return ut=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ut.apply(this,arguments)}var dt=`rc-table`,ft=[],pt={};function mt(){return`No Data`}var ht=A.forwardRef((e,t)=>{let n={rowKey:`key`,prefixCls:dt,emptyText:mt,...e},{prefixCls:r,className:a,rowClassName:o,style:s,classNames:c,styles:l,data:u,rowKey:d,scroll:f,tableLayout:p,direction:h,title:_,footer:v,summary:y,caption:x,id:S,showHeader:C,components:D,emptyText:k,onRow:j,onHeaderRow:N,measureRowRender:P,onScroll:F,internalHooks:I,transformColumns:L,internalRefs:R,tailor:z,getContainerWidth:ee,sticky:te,rowHoverable:ne=!0}=n,B=u||ft,U=!!B.length,re=I===M,ie=A.useCallback((e,t)=>H(D,e)||t,[D]),ce=A.useMemo(()=>typeof d==`function`?d:e=>e&&e[d],[d]),le=ie([`body`]),[ue,de,fe]=et(),[W,pe,me,G,he,ge]=Xe(n,B,ce),_e=f?.x,[ve,ye]=A.useState(0),[Se,K,Ce]=Ye({...n,...W,expandable:!!W.expandedRowRender,columnTitle:W.columnTitle,expandedKeys:me,getRowKey:ce,onTriggerExpand:ge,expandIcon:G,expandIconColumnIndex:W.expandIconColumnIndex,direction:h,scrollWidth:re&&z&&typeof _e==`number`?_e:null,clientWidth:ve},re?L:null),q=Ce??_e,we=A.useMemo(()=>({columns:Se,flattenColumns:K}),[Se,K]),Te=A.useRef(null),Ee=A.useRef(null),J=A.useRef(null),De=A.useRef(null);A.useImperativeHandle(t,()=>({nativeElement:Te.current,scrollTo:e=>{if(J.current instanceof HTMLElement){let{index:t,top:n,key:r,offset:i,align:a=`nearest`}=e;if(se(n))J.current?.scrollTo({top:n});else{let e=r??ce(B[t]),n=J.current.querySelector(`[data-row-key="${e}"]`);if(n&&(n.scrollIntoView({block:a}),i)){let e=J.current;e.scrollTo({top:e.scrollTop+i})}}}else J.current?.scrollTo&&J.current.scrollTo(e)}}));let Oe=A.useRef(null),[ke,Ae]=A.useState(!1),[je,Me]=A.useState(!1),[Ne,Fe]=A.useState(new Map),Ie=ae(K).map(e=>Ne.get(e)),Le=A.useMemo(()=>Ie,[Ie.join(`_`)]),ze=nt(Le,K),Y=f&&oe(f.y),X=f&&oe(q)||!!W.fixed,Ve=X&&K.some(({fixed:e})=>e),He=A.useRef(null),{isSticky:We,offsetHeader:Ge,offsetSummary:Ke,offsetScroll:qe,stickyClassName:Je,container:Qe}=tt(te,r),Z=A.useMemo(()=>y?.(B),[y,B]),it=(Y||We)&&A.isValidElement(Z)&&Z.type===be&&Z.props.fixed,at,ot,st;Y&&(ot={overflowY:U?`scroll`:`auto`,maxHeight:f.y}),X&&(at={overflowX:`auto`},Y||(ot={overflowY:`hidden`}),st={width:q===!0?`auto`:q,minWidth:`100%`});let ct=A.useCallback((e,t)=>{Fe(n=>{if(n.get(e)!==t){let r=new Map(n);return r.set(e,t),r}return n})},[]),[ht,gt]=$e(null),[_t]=A.useState(()=>new WeakMap);function vt(e,t){if(!t)return;if(typeof t==`function`){t(e);return}let n=_t.get(t);if(n&&clearTimeout(n),t.scrollLeft!==e){t.scrollLeft=e;let n=setTimeout(()=>{t.scrollLeft!==e&&(t.scrollLeft=e)},0);_t.set(t,n)}}let[yt,bt]=A.useState([0,0]),xt=m(({currentTarget:e,scrollLeft:t})=>{let n=typeof t==`number`?t:e.scrollLeft,r=e||pt;(!gt()||gt()===r)&&(ht(r),vt(n,Ee.current),vt(n,J.current),vt(n,Oe.current),vt(n,He.current?.setScrollLeft));let i=e||Ee.current;if(i){let e=re&&z&&typeof q==`number`?q:i.scrollWidth,t=i.clientWidth,r=Math.abs(n);if(bt(n=>{let i=[r,e-t];return T(n,i)?n:i}),e===t){Ae(!1),Me(!1);return}Ae(r>0),Me(r<e-t-1)}}),St=m(e=>{xt(e),F?.(e)}),Ct=()=>{X&&J.current?xt({currentTarget:g(J.current),scrollLeft:J.current?.scrollLeft}):(Ae(!1),Me(!1))},wt=e=>{He.current?.checkScrollBarVisible();let t=e??Te.current?.offsetWidth??0;re&&ee&&Te.current&&(t=ee(Te.current,t)||t),t!==ve&&(Ct(),ye(t))};w(()=>{X&&wt()},[X]);let Tt=A.useRef(!1);A.useEffect(()=>{Tt.current&&Ct()},[X,u,Se.length]),A.useEffect(()=>{Tt.current=!0},[]);let[Et,Dt]=A.useState(0);w(()=>{(!z||!re)&&(J.current instanceof Element?Dt(E(J.current).width):Dt(E(De.current).width))},[]),A.useEffect(()=>{re&&R&&(R.body.current=J.current)});let Ot=A.useCallback(e=>A.createElement(A.Fragment,null,A.createElement(Ue,e),it===`top`&&A.createElement(xe,e,Z)),[it,Z]),kt=A.useCallback(e=>A.createElement(xe,e,Z),[Z]),Q=ie([`table`],`table`),At=A.useMemo(()=>p||(Ve?q===`max-content`?`auto`:`fixed`:Y||We||K.some(({ellipsis:e})=>e)?`fixed`:`auto`),[Y,Ve,K,p,We]),jt,$={colWidths:Le,columCount:K.length,stickyOffsets:ze,onHeaderRow:N,fixHeader:Y,scroll:f},Mt=A.useMemo(()=>U?null:typeof k==`function`?k():k,[U,k]),Nt=A.createElement(Pe,{data:B,measureColumnWidth:Y||X||We}),Pt=A.createElement(Re,{colWidths:K.map(({width:e})=>e),columns:K}),Ft=x==null?void 0:A.createElement(`caption`,{className:`${r}-caption`},x),It=b(n,{data:!0}),Lt=b(n,{aria:!0});if(Y||We){let e;typeof le==`function`?(e=le(B,{scrollbarSize:Et,ref:J,onScroll:xt}),$.colWidths=K.map(({width:e},t)=>{let n=t===K.length-1?e-Et:e;return typeof n==`number`&&!Number.isNaN(n)?n:0})):e=A.createElement(`div`,{style:{...at,...ot},onScroll:St,ref:J,className:`${r}-body`},A.createElement(Q,ut({style:{...st,tableLayout:At}},Lt),Ft,Pt,Nt,!it&&Z&&A.createElement(xe,{stickyOffsets:ze,flattenColumns:K},Z)));let t={noData:!B.length,maxContentScroll:X&&q===`max-content`,...$,...we,direction:h,stickyClassName:Je,scrollX:q,tableLayout:At,onScroll:xt};jt=A.createElement(A.Fragment,null,C!==!1&&A.createElement(Be,ut({},t,{stickyTopOffset:Ge,className:`${r}-header`,ref:Ee,colGroup:Pt}),Ot),e,it&&it!==`top`&&A.createElement(Be,ut({},t,{stickyBottomOffset:Ke,className:`${r}-summary`,ref:Oe,colGroup:Pt}),kt),We&&J.current&&J.current instanceof Element&&A.createElement(lt,{ref:He,offsetScroll:qe,scrollBodyRef:J,onScroll:xt,container:Qe,direction:h}))}else jt=A.createElement(`div`,{style:{...at,...ot,...l?.content},className:i(`${r}-content`,c?.content),onScroll:xt,ref:J},A.createElement(Q,ut({style:{...st,tableLayout:At}},Lt),Ft,Pt,C!==!1&&A.createElement(Ue,ut({},$,we)),Nt,Z&&A.createElement(xe,{stickyOffsets:ze,flattenColumns:K},Z)));let Rt={...s};We&&(Rt[`--columns-count`]=K.length);let zt=A.createElement(`div`,ut({className:i(r,a,{[`${r}-rtl`]:h===`rtl`,[`${r}-fix-start-shadow`]:X,[`${r}-fix-end-shadow`]:X,[`${r}-fix-start-shadow-show`]:X&&ke,[`${r}-fix-end-shadow-show`]:X&&je,[`${r}-layout-fixed`]:p===`fixed`,[`${r}-fixed-header`]:Y,[`${r}-fixed-column`]:Ve,[`${r}-scroll-horizontal`]:X,[`${r}-has-fix-start`]:K[0]?.fixed,[`${r}-has-fix-end`]:K[K.length-1]?.fixed===`end`}),style:Rt,id:S,ref:Te},It),_&&A.createElement(rt,{className:i(`${r}-title`,c?.title),style:l?.title},_(B)),A.createElement(`div`,{ref:De,className:i(`${r}-container`,c?.section),style:l?.section},jt),v&&A.createElement(rt,{className:i(`${r}-footer`,c?.footer),style:l?.footer},v(B)));X&&(zt=A.createElement(O,{onResize:({offsetWidth:e})=>wt(e)},zt));let Bt=Ze(K,ze),Vt=A.useMemo(()=>({scrollX:q,scrollInfo:yt,classNames:c,styles:l,prefixCls:r,getComponent:ie,scrollbarSize:Et,direction:h,fixedInfoList:Bt,isSticky:We,componentWidth:ve,fixHeader:Y,fixColumn:Ve,horizonScroll:X,tableLayout:At,rowClassName:o,expandedRowClassName:W.expandedRowClassName,expandIcon:G,expandableType:pe,expandRowByClick:W.expandRowByClick,expandedRowRender:W.expandedRowRender,forceRender:W.forceRender??!1,expandedRowOffset:W.expandedRowOffset,onTriggerExpand:ge,expandIconColumnIndex:W.expandIconColumnIndex,indentSize:W.indentSize,allColumnsFixedLeft:K.every(e=>e.fixed===`start`),emptyNode:Mt,columns:Se,flattenColumns:K,onColumnResize:ct,colWidths:Le,hoverStartRow:ue,hoverEndRow:de,onHover:fe,rowExpandable:W.rowExpandable,onRow:j,getRowKey:ce,expandedKeys:me,childrenColumnName:he,rowHoverable:ne,measureRowRender:P}),[q,yt,c,l,r,ie,Et,h,Bt,We,ve,Y,Ve,X,At,o,W.expandedRowClassName,G,pe,W.expandRowByClick,W.expandedRowRender,W.forceRender,W.expandedRowOffset,ge,W.expandIconColumnIndex,W.indentSize,Mt,Se,K,ct,Le,ue,de,fe,W.rowExpandable,j,ce,me,he,ne,P]);return A.createElement(V.Provider,{value:Vt},zt)}),gt=(e=>te(ht,e))();gt.EXPAND_COLUMN=j,gt.INTERNAL_HOOKS=M,gt.Column=K,gt.ColumnGroup=Ce,gt.Summary=Se;var _t=P(null),vt=P(null);function yt(){return yt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yt.apply(this,arguments)}function bt(e,t,n){return n[e+(t||1)]-(n[e]||0)}var xt=e=>{let{rowInfo:t,column:n,colIndex:r,indent:a,index:o,component:s,renderIndex:c,record:l,style:u,className:d,inverse:f,getHeight:p}=e,{render:m,dataIndex:h,className:g,width:_}=n,{columnsOffset:v}=F(vt,[`columnsOffset`]),{key:y,fixedInfo:b,appendCellNode:x,additionalCellProps:S,originRowSpan:C}=Ae(t,n,r,a,o),{style:w,colSpan:T=1,rowSpan:E=1}=S,D=bt(r-1,T,v),O=T>1?_-D:0,k={...w,...u,flex:`0 0 ${D}px`,width:`${D}px`,marginRight:O,pointerEvents:`auto`},j=A.useMemo(()=>f?E<=1:T===0||E===0||E>1,[E,T,f]);j?k.visibility=`hidden`:f&&(k.height=p?.(E));let M=j?()=>null:m,N={};return(E===0||T===0)&&(N.rowSpan=1,N.colSpan=1),A.createElement(pe,yt({className:i(g,d),ellipsis:n.ellipsis,align:n.align,scope:n.rowScope,component:s,prefixCls:t.prefixCls,key:y,record:l,index:o,renderIndex:c,dataIndex:h,render:M,shouldCellUpdate:n.shouldCellUpdate},b,{appendNode:x,originRowSpan:C,additionalProps:{...S,style:k,...N}}))};function St(){return St=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},St.apply(this,arguments)}var Ct=ne(A.forwardRef((e,t)=>{let{data:n,index:r,className:a,rowKey:o,style:s,extra:c,getHeight:l,...u}=e,{record:d,indent:f,index:p}=n,{scrollX:m,flattenColumns:h,prefixCls:g,fixColumn:_,componentWidth:v,classNames:y,styles:b}=F(V,[`prefixCls`,`flattenColumns`,`fixColumn`,`componentWidth`,`scrollX`,`classNames`,`styles`]),{getComponent:x}=F(_t,[`getComponent`]),S=Te(d,o,r,f),C=x([`body`,`row`],`div`),w=x([`body`,`cell`],`div`),{rowSupportExpand:T,expanded:E,rowProps:D,expandedRowRender:O,expandedRowClassName:k,forceRender:j}=S,M=Oe(k,d,r,f),N;if(!c&&T&&(j||E)){let e=O(d,r,f+1,E),t={};_&&(t={style:{"--virtual-width":`${v}px`}});let n=`${g}-expanded-row-cell`;N=A.createElement(C,{className:i(`${g}-expanded-row`,`${g}-expanded-row-level-${f+1}`,M),style:{display:E?void 0:`none`}},A.createElement(pe,{component:w,prefixCls:g,className:i(n,{[`${n}-fixed`]:_}),additionalProps:t},e))}let P={...s,width:m};c&&(P.position=`absolute`,P.pointerEvents=`none`);let I=A.createElement(C,St({},D,u,{"data-row-key":o,ref:T?null:t,className:i(a,`${g}-row`,D?.className,y?.body?.row,{[M]:f>=1,[`${g}-row-extra`]:c}),style:{...P,...D?.style,...b?.body?.row}}),h.map((e,t)=>A.createElement(xt,{key:t,className:y?.body?.cell,style:b?.body?.cell,component:w,rowInfo:S,column:e,colIndex:t,indent:f,index:r,renderIndex:p,record:d,inverse:c,getHeight:l})));return T?A.createElement(`div`,{ref:t},I,N):I})),wt={start:`top`,end:`bottom`,nearest:`auto`},Tt=ne(A.forwardRef((e,t)=>{let{data:n,onScroll:r}=e,{flattenColumns:i,onColumnResize:a,getRowKey:o,expandedKeys:s,prefixCls:c,childrenColumnName:l,scrollX:u,direction:d}=F(V,[`flattenColumns`,`onColumnResize`,`getRowKey`,`prefixCls`,`expandedKeys`,`childrenColumnName`,`scrollX`,`direction`]),{sticky:f,scrollY:p,listItemHeight:m,getComponent:h,onScroll:g}=F(_t),_=A.useRef(null),v=we(n,l,s,o),y=A.useMemo(()=>{let e=0;return i.map(({width:t,minWidth:n,key:r})=>{let i=Math.max(t||0,n||0);return e+=i,[r,i,e]})},[i]),b=A.useMemo(()=>y.map(e=>e[2]),[y]);A.useEffect(()=>{y.forEach(([e,t])=>{a(e,t)})},[y]),A.useImperativeHandle(t,()=>{let e={scrollTo:e=>{let{align:t,offset:n,...r}=e,i=wt[t]??(n?`top`:`auto`);_.current?.scrollTo({...r,offset:n,align:i})},nativeElement:_.current?.nativeElement};return Object.defineProperty(e,"scrollLeft",{get:()=>_.current?.getScrollInfo().x||0,set:e=>{_.current?.scrollTo({left:e})}}),Object.defineProperty(e,"scrollTop",{get:()=>_.current?.getScrollInfo().y||0,set:e=>{_.current?.scrollTo({top:e})}}),e});let x=(e,t)=>{let n=v[t]?.record,{onCell:r}=e;return r?r(n,t)?.rowSpan??1:1},S=e=>{let{start:t,end:n,getSize:r,offsetY:a}=e;if(n<0)return null;let s=i.filter(e=>x(e,t)===0),c=t;for(let e=t;e>=0;--e)if(s=s.filter(t=>x(t,e)===0),!s.length){c=e;break}let l=i.filter(e=>x(e,n)!==1),u=n;for(let e=n;e<v.length;e+=1)if(l=l.filter(t=>x(t,e)!==1),!l.length){u=Math.max(e-1,n);break}let d=[];for(let e=c;e<=u;e+=1)v[e]&&i.some(t=>x(t,e)>1)&&d.push(e);return d.map(e=>{let t=v[e],n=o(t.record,e),i=t=>{let i=e+t-1,a=v[i];if(!a||!a.record){let e=Math.min(i,v.length-1),t=v[e],a=o(t.record,e),s=r(n,a);return s.bottom-s.top}let s=o(a.record,i),c=r(n,s);return c.bottom-c.top},s=r(n);return A.createElement(Ct,{key:e,data:t,rowKey:n,index:e,style:{top:-a+s.top},extra:!0,getHeight:i})})},C=A.useMemo(()=>({columnsOffset:b}),[b]),w=`${c}-tbody`,T=h([`body`,`wrapper`]),E={};return f&&(E.position=`sticky`,E.bottom=0,typeof f==`object`&&f.offsetScroll&&(E.bottom=f.offsetScroll)),A.createElement(vt.Provider,{value:C},A.createElement(k,{fullHeight:!1,ref:_,prefixCls:`${w}-virtual`,styles:{horizontalScrollBar:E},className:w,height:p,itemHeight:m||24,data:v,itemKey:e=>o(e.record),component:T,scrollWidth:u,direction:d,onVirtualScroll:({x:e})=>{r({currentTarget:_.current?.nativeElement,scrollLeft:e})},onScroll:g,extraRender:S},(e,t,n)=>{let r=o(e.record,t);return A.createElement(Ct,{data:e,rowKey:r,index:t,style:n.style})}))}));function Et(){return Et=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Et.apply(this,arguments)}var Dt=(e,t)=>{let{ref:n,onScroll:r}=t;return A.createElement(Tt,{ref:n,data:e,onScroll:r})},Ot=A.forwardRef((e,t)=>{let{data:n,columns:r,scroll:a,sticky:o,prefixCls:s=dt,className:c,listItemHeight:l,components:u,onScroll:d}=e,{x:f,y:p}=a||{};typeof f!=`number`&&(f=1),typeof p!=`number`&&(p=500);let h=m((e,t)=>H(u,e)||t),g=m(d),_=A.useMemo(()=>({sticky:o,scrollY:p,listItemHeight:l,getComponent:h,onScroll:g}),[o,p,l,h,g]);return A.createElement(_t.Provider,{value:_},A.createElement(gt,Et({},e,{className:i(c,`${s}-virtual`),scroll:{...a,x:f},components:{...u,body:n?.length?Dt:void 0},columns:r,internalHooks:M,tailor:!0,ref:t})))});(e=>te(Ot,e))();var kt=gt,Q=n();function At(e,t,n){return e.map(e=>{let r=e.key||(typeof e.dataIndex==`string`?e.dataIndex:void 0),i={key:r,dataIndex:e.dataIndex,width:e.width,minWidth:e.minWidth,align:e.align,fixed:e.fixed,ellipsis:e.ellipsis,className:e.className,onCell:e.onCell,onHeaderCell:e.onHeaderCell,children:e.children?At(e.children,t,n):void 0};if(e.sorter&&r){let o=t?.columnKey===r?t.order:null;i.title=(0,Q.jsxs)(`span`,{className:`lg-table__header-cell-content lg-table__header-cell-content--sortable`,onClick:()=>{let e;e=o===null?`ascend`:o===`ascend`?`descend`:null,n(r,e)},children:[(0,Q.jsx)(`span`,{className:`lg-table__header-text`,children:e.title}),(0,Q.jsxs)(`span`,{className:`lg-table__sorter`,children:[(0,Q.jsx)(`span`,{className:a(`lg-table__sorter-icon lg-table__sorter-icon--asc`,o===`ascend`&&`lg-table__sorter-icon--active`)}),(0,Q.jsx)(`span`,{className:a(`lg-table__sorter-icon lg-table__sorter-icon--desc`,o===`descend`&&`lg-table__sorter-icon--active`)})]})]})}else i.title=e.title;return e.render&&(i.render=e.render),i})}function jt({columns:e=[],dataSource:t=[],rowKey:n=`key`,size:r=`default`,bordered:i=!1,loading:c=!1,scroll:u,rowSelection:p,onSortChange:m,loadError:h=!1,onRetry:g,statusText:_,onRow:v,empty:y,errorContent:b,title:x,footer:S,showHeader:C=!0,className:w,style:T,striped:E=!1,hoverable:D=!0,components:O},k){let j=s(`Table`),[M,N]=(0,A.useState)(null),P=(0,A.useCallback)((e,t)=>{let n={columnKey:e,order:t};N(t?n:null),m?.(n)},[m]),F=(0,A.useMemo)(()=>new Set(p?.selectedRowKeys||[]),[p?.selectedRowKeys]),I=(0,A.useCallback)((e,t)=>typeof n==`function`?n(e,t):e[n],[n]),L=(0,A.useMemo)(()=>t.map((e,t)=>I(e,t)),[t,I]),R=L.length>0&&L.every(e=>F.has(e)),z=!R&&L.some(e=>F.has(e)),ee=(0,A.useCallback)(e=>{p?.onChange&&(e?p.onChange(L,t):p.onChange([],[]))},[L,t,p]),te=(0,A.useCallback)((e,n,r)=>{if(!p?.onChange)return;let i;i=r?[...F,n]:[...F].filter(e=>e!==n);let a=t.filter((e,t)=>i.includes(I(e,t)));p.onChange(i,a)},[F,t,I,p]),ne=(0,A.useMemo)(()=>{let t=At(e,M,P);return p?[{key:`__selection__`,width:48,fixed:`left`,className:`lg-table__selection-col`,title:(0,Q.jsx)(`div`,{className:`lg-table__selection-wrapper`,children:(0,Q.jsx)(d,{checked:R,indeterminate:z,onChange:e=>ee(e)})}),render:(e,t,n)=>{let r=I(t,n),i=p.getCheckboxProps?.(t)||{};return(0,Q.jsx)(`div`,{className:`lg-table__selection-wrapper`,children:(0,Q.jsx)(d,{checked:F.has(r),disabled:i.disabled,onChange:e=>te(t,r,e)})})}},...t]:t},[e,M,P,p,R,z,ee,F,I,te]),B=(0,A.useMemo)(()=>{if(!M?.order)return t;let n=e.find(e=>(e.key||(typeof e.dataIndex==`string`?e.dataIndex:void 0))===M.columnKey);if(!n?.sorter||typeof n.sorter!=`function`)return t;let r=[...t].sort(n.sorter);return M.order===`descend`?r.reverse():r},[t,M,e]),V=(0,A.useCallback)((e,t)=>{let n=v?.(e,t)||{},r=I(e,t);return{...n,className:a(n.className,F.has(r)&&`lg-table__row--selected`,E&&t%2==1&&`lg-table__row--striped`)}},[v,I,F,E]),H=c?`loading`:h?`error`:`empty`,U=h?[]:B,re=(0,A.useMemo)(()=>{if(H===`error`&&b)return b;if(H===`empty`&&y)return y;let e={loading:j.loading,empty:j.empty,error:j.loadError};return(0,Q.jsx)(l.Card,{size:`md`,status:H,spacing:`none`,description:_?.[H]??e[H],onRetry:H===`error`?g:void 0})},[H,y,b,_,g,j]),ie=(0,A.useRef)(null),[ae,oe]=(0,A.useState)(0),se=U.length===0;(0,A.useEffect)(()=>{let e=ie.current;if(!e||!se)return;let t=()=>oe(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[se]);let ce=(0,A.useMemo)(()=>(0,Q.jsx)(`div`,{className:`lg-table__placeholder-inner`,style:ae?{width:ae}:void 0,children:re}),[re,ae]),le=c&&U.length>0,ue=u?.y!=null,de=u?.x!=null,fe=(0,A.useMemo)(()=>{if(!ue&&!de)return;let e={};return ue&&(e.maxHeight=u.y),e},[ue,de,u]),W=(0,A.useMemo)(()=>{if(!de)return;let e=u.x;return{"--_table-min-width":typeof e==`number`?`max(${e}px, 100%)`:e}},[de,u]);return(0,Q.jsxs)(`div`,{ref:k,className:a(`lg-table`,`lg-table--${r}`,i&&`lg-table--bordered`,D&&`lg-table--hoverable`,c&&`lg-table--loading`,h&&`lg-table--error`,ue&&`lg-table--sticky-header`,w),style:T,children:[x&&(0,Q.jsx)(`div`,{className:`lg-table__title`,children:typeof x==`function`?x():x}),(0,Q.jsxs)(`div`,{className:`lg-table__container`,children:[le&&(0,Q.jsx)(`div`,{className:`lg-table__loading-mask`,children:(0,Q.jsx)(f,{size:`md`})}),ue||de?(0,Q.jsx)(o,{className:`lg-table__scroll-area`,style:{...fe,...W},type:`hover`,scrollbars:ue&&de?`both`:ue?`vertical`:`horizontal`,viewportRef:ie,children:(0,Q.jsx)(kt,{columns:ne,data:U,rowKey:n,showHeader:C,onRow:V,prefixCls:`lg-table`,components:O,emptyText:ce})}):(0,Q.jsx)(`div`,{className:`lg-table__scroll`,ref:ie,children:(0,Q.jsx)(kt,{columns:ne,data:U,rowKey:n,showHeader:C,onRow:V,prefixCls:`lg-table`,components:O,emptyText:ce})})]}),S&&(0,Q.jsx)(`div`,{className:`lg-table__footer`,children:typeof S==`function`?S():S})]})}var $=A.forwardRef(jt);$.displayName=`Table`;var Mt=[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`},{title:`Department`,dataIndex:`department`,key:`department`}],Nt=[{key:`1`,name:`Alice Chen`,age:28,department:`Engineering`},{key:`2`,name:`Bob Liu`,age:32,department:`Product`},{key:`3`,name:`Carol Wang`,age:25,department:`Design`}];function Pt(){return(0,Q.jsx)($,{columns:Mt,dataSource:Nt})}var Ft=`import { Table } from "lingee-ui";

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Department", dataIndex: "department", key: "department" },
];

const dataSource = [
  { key: "1", name: "Alice Chen", age: 28, department: "Engineering" },
  { key: "2", name: "Bob Liu", age: 32, department: "Product" },
  { key: "3", name: "Carol Wang", age: 25, department: "Design" },
];

export default function BasicDemo() {
  return <Table columns={columns} dataSource={dataSource} />;
}
`,It=[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`},{title:`Department`,dataIndex:`department`,key:`department`}],Lt=[{key:`1`,name:`Alice Chen`,age:28,department:`Engineering`},{key:`2`,name:`Bob Liu`,age:32,department:`Product`},{key:`3`,name:`Carol Wang`,age:25,department:`Design`},{key:`4`,name:`David Zhao`,age:30,department:`Operations`}];function Rt(){let[e,t]=(0,A.useState)([]);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`p`,{style:{marginBottom:12,color:`var(--lg-g-fg-color-black-muted)`},children:[`Selected `,e.length,` item(s)`]}),(0,Q.jsx)($,{columns:It,dataSource:Lt,rowSelection:{selectedRowKeys:e,onChange:e=>t(e)}})]})}var zt=`import { useState } from "react";
import { Table } from "lingee-ui";

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Department", dataIndex: "department", key: "department" },
];

const dataSource = [
  { key: "1", name: "Alice Chen", age: 28, department: "Engineering" },
  { key: "2", name: "Bob Liu", age: 32, department: "Product" },
  { key: "3", name: "Carol Wang", age: 25, department: "Design" },
  { key: "4", name: "David Zhao", age: 30, department: "Operations" },
];

export default function SelectionDemo() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  return (
    <>
      <p
        style={{
          marginBottom: 12,
          color: "var(--lg-g-fg-color-black-muted)",
        }}
      >
        Selected {selectedRowKeys.length} item(s)
      </p>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
          selectedRowKeys,
          onChange: (keys) => setSelectedRowKeys(keys as string[]),
        }}
      />
    </>
  );
}
`,Bt=[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`},{title:`Department`,dataIndex:`department`,key:`department`}],Vt=[{key:`1`,name:`Alice Chen`,age:28,department:`Engineering`},{key:`2`,name:`Bob Liu`,age:32,department:`Product`},{key:`3`,name:`Carol Wang`,age:25,department:`Design`}];function Ht(){let[e,t]=(0,A.useState)(`loading`);return(0,Q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,Q.jsx)(c,{onClick:()=>t(`loading`),children:`首次加载`}),(0,Q.jsx)(c,{onClick:()=>t(`empty`),children:`空数据`}),(0,Q.jsx)(c,{onClick:()=>t(`error`),children:`加载失败`}),(0,Q.jsx)(c,{onClick:()=>t(`data`),children:`有数据`}),(0,Q.jsx)(c,{onClick:()=>t(`refreshing`),children:`已有数据刷新`})]}),(0,Q.jsx)($,{columns:Bt,dataSource:e===`data`||e===`refreshing`?Vt:[],loading:e===`loading`||e===`refreshing`,loadError:e===`error`,onRetry:()=>{t(`loading`),setTimeout(()=>t(`data`),800)}})]})}var Ut=`import { useState } from "react";
import { Table, Button } from "lingee-ui";

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Department", dataIndex: "department", key: "department" },
];

const dataSource = [
  { key: "1", name: "Alice Chen", age: 28, department: "Engineering" },
  { key: "2", name: "Bob Liu", age: 32, department: "Product" },
  { key: "3", name: "Carol Wang", age: 25, department: "Design" },
];

type DemoState = "loading" | "data" | "empty" | "error" | "refreshing";

export default function LoadingDemo() {
  const [state, setState] = useState<DemoState>("loading");

  // 重试后先回到加载中，再落到有数据，模拟真实请求链路
  const handleRetry = () => {
    setState("loading");
    setTimeout(() => setState("data"), 800);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Button onClick={() => setState("loading")}>首次加载</Button>
        <Button onClick={() => setState("empty")}>空数据</Button>
        <Button onClick={() => setState("error")}>加载失败</Button>
        <Button onClick={() => setState("data")}>有数据</Button>
        <Button onClick={() => setState("refreshing")}>已有数据刷新</Button>
      </div>
      <Table
        columns={columns}
        dataSource={state === "data" || state === "refreshing" ? dataSource : []}
        loading={state === "loading" || state === "refreshing"}
        loadError={state === "error"}
        onRetry={handleRetry}
      />
    </div>
  );
}
`,Wt=[{title:`Name`,dataIndex:`name`,key:`name`,width:120},{title:`Age`,dataIndex:`age`,key:`age`,width:80},{title:`Department`,dataIndex:`department`,key:`department`,width:120},{title:`Position`,dataIndex:`position`,key:`position`,width:150},{title:`City`,dataIndex:`city`,key:`city`,width:100}],Gt=Array.from({length:50},(e,t)=>({key:String(t+1),name:`Employee ${t+1}`,age:22+t%20,department:[`Engineering`,`Product`,`Design`,`Marketing`,`Operations`][t%5],position:[`Engineer`,`Product Manager`,`Designer`,`Ops Specialist`,`Marketing Lead`][t%5],city:[`Shenzhen`,`Beijing`,`Shanghai`,`Guangzhou`,`Hangzhou`][t%5]}));function Kt(){return(0,Q.jsx)($,{columns:Wt,dataSource:Gt,rowKey:`key`,scroll:{y:400}})}var qt=`/**
 * 纵向滚动 — 固定表头
 * 使用 ScrollArea 实现 overlay 滚动条，不占文档流
 */
import { Table } from "lingee-ui";
import type { TableColumnType } from "lingee-ui";

interface DataType {
  key: string;
  name: string;
  age: number;
  department: string;
  position: string;
  city: string;
}

const columns: TableColumnType<DataType>[] = [
  { title: "Name", dataIndex: "name", key: "name", width: 120 },
  { title: "Age", dataIndex: "age", key: "age", width: 80 },
  { title: "Department", dataIndex: "department", key: "department", width: 120 },
  { title: "Position", dataIndex: "position", key: "position", width: 150 },
  { title: "City", dataIndex: "city", key: "city", width: 100 },
];

const dataSource: DataType[] = Array.from({ length: 50 }, (_, i) => ({
  key: String(i + 1),
  name: \`Employee \${i + 1}\`,
  age: 22 + (i % 20),
  department: ["Engineering", "Product", "Design", "Marketing", "Operations"][i % 5],
  position: ["Engineer", "Product Manager", "Designer", "Ops Specialist", "Marketing Lead"][i % 5],
  city: ["Shenzhen", "Beijing", "Shanghai", "Guangzhou", "Hangzhou"][i % 5],
}));

export default function ScrollYDemo() {
  return (
    <Table<DataType>
      columns={columns}
      dataSource={dataSource}
      rowKey="key"
      scroll={{ y: 400 }}
    />
  );
}
`,Jt=[{title:`Name`,dataIndex:`name`,key:`name`,width:120},{title:`Age`,dataIndex:`age`,key:`age`,width:80},{title:`Department`,dataIndex:`department`,key:`department`,width:120},{title:`Position`,dataIndex:`position`,key:`position`,width:150},{title:`City`,dataIndex:`city`,key:`city`,width:100},{title:`Phone`,dataIndex:`phone`,key:`phone`,width:150},{title:`Email`,dataIndex:`email`,key:`email`,width:220},{title:`Join Date`,dataIndex:`joinDate`,key:`joinDate`,width:130},{title:`Salary`,dataIndex:`salary`,key:`salary`,width:120}],Yt=Array.from({length:6},(e,t)=>({key:String(t+1),name:`Employee ${t+1}`,age:22+t%15,department:[`Engineering`,`Product`,`Design`,`Marketing`,`Operations`,`Finance`][t%6],position:[`Engineer`,`Product Manager`,`Designer`,`Ops Lead`,`Marketing Lead`,`Accountant`][t%6],city:[`Shenzhen`,`Beijing`,`Shanghai`,`Guangzhou`,`Hangzhou`,`Chengdu`][t%6],phone:`138${String(1e7+t).slice(0,8)}`,email:`employee${t+1}@company.com`,joinDate:`2024-${String(t%12+1).padStart(2,`0`)}-15`,salary:`${15+t*2}K`}));function Xt(){return(0,Q.jsx)($,{columns:Jt,dataSource:Yt,rowKey:`key`,scroll:{x:1200}})}var Zt=`/**
 * 横向滚动 — 滚动条常显
 * Windows 鼠标无法触控横滑，横向滚动条始终可见
 */
import { Table } from "lingee-ui";
import type { TableColumnType } from "lingee-ui";

interface DataType {
  key: string;
  name: string;
  age: number;
  department: string;
  position: string;
  city: string;
  phone: string;
  email: string;
  joinDate: string;
  salary: string;
}

const columns: TableColumnType<DataType>[] = [
  { title: "Name", dataIndex: "name", key: "name", width: 120 },
  { title: "Age", dataIndex: "age", key: "age", width: 80 },
  { title: "Department", dataIndex: "department", key: "department", width: 120 },
  { title: "Position", dataIndex: "position", key: "position", width: 150 },
  { title: "City", dataIndex: "city", key: "city", width: 100 },
  { title: "Phone", dataIndex: "phone", key: "phone", width: 150 },
  { title: "Email", dataIndex: "email", key: "email", width: 220 },
  { title: "Join Date", dataIndex: "joinDate", key: "joinDate", width: 130 },
  { title: "Salary", dataIndex: "salary", key: "salary", width: 120 },
];

const dataSource: DataType[] = Array.from({ length: 6 }, (_, i) => ({
  key: String(i + 1),
  name: \`Employee \${i + 1}\`,
  age: 22 + (i % 15),
  department: ["Engineering", "Product", "Design", "Marketing", "Operations", "Finance"][i % 6],
  position: ["Engineer", "Product Manager", "Designer", "Ops Lead", "Marketing Lead", "Accountant"][i % 6],
  city: ["Shenzhen", "Beijing", "Shanghai", "Guangzhou", "Hangzhou", "Chengdu"][i % 6],
  phone: \`138\${String(10000000 + i).slice(0, 8)}\`,
  email: \`employee\${i + 1}@company.com\`,
  joinDate: \`2024-\${String((i % 12) + 1).padStart(2, "0")}-15\`,
  salary: \`\${15 + i * 2}K\`,
}));

export default function ScrollXDemo() {
  return (
    <Table<DataType>
      columns={columns}
      dataSource={dataSource}
      rowKey="key"
      scroll={{ x: 1200 }}
    />
  );
}
`,Qt=[{title:`Name`,dataIndex:`name`,key:`name`,width:120},{title:`Age`,dataIndex:`age`,key:`age`,width:80},{title:`Department`,dataIndex:`department`,key:`department`,width:120},{title:`Position`,dataIndex:`position`,key:`position`,width:150},{title:`City`,dataIndex:`city`,key:`city`,width:100},{title:`Phone`,dataIndex:`phone`,key:`phone`,width:150},{title:`Email`,dataIndex:`email`,key:`email`,width:220},{title:`Join Date`,dataIndex:`joinDate`,key:`joinDate`,width:130},{title:`Salary`,dataIndex:`salary`,key:`salary`,width:120},{title:`Status`,dataIndex:`status`,key:`status`,width:100}],$t=Array.from({length:30},(e,t)=>({key:String(t+1),name:`Employee ${t+1}`,age:22+t%20,department:[`Engineering`,`Product`,`Design`,`Marketing`,`Operations`][t%5],position:[`Engineer`,`Product Manager`,`Designer`,`Ops Specialist`,`Marketing Lead`][t%5],city:[`Shenzhen`,`Beijing`,`Shanghai`,`Guangzhou`,`Hangzhou`][t%5],phone:`138${String(1e7+t).slice(0,8)}`,email:`employee${t+1}@company.com`,joinDate:`2024-${String(t%12+1).padStart(2,`0`)}-${String(t%28+1).padStart(2,`0`)}`,salary:`${15+t}K`,status:t%3==0?`Active`:t%3==1?`Probation`:`Confirmed`}));function en(){return(0,Q.jsx)($,{columns:Qt,dataSource:$t,rowKey:`key`,scroll:{x:1400,y:350}})}var tn=`/**
 * 横向 + 纵向滚动（同时存在）
 * 纵向：overlay 滚动条不占文档流
 * 横向：滚动条常显，方便 Windows 鼠标操作
 */
import { Table } from "lingee-ui";
import type { TableColumnType } from "lingee-ui";

interface DataType {
  key: string;
  name: string;
  age: number;
  department: string;
  position: string;
  city: string;
  phone: string;
  email: string;
  joinDate: string;
  salary: string;
  status: string;
}

const columns: TableColumnType<DataType>[] = [
  { title: "Name", dataIndex: "name", key: "name", width: 120 },
  { title: "Age", dataIndex: "age", key: "age", width: 80 },
  { title: "Department", dataIndex: "department", key: "department", width: 120 },
  { title: "Position", dataIndex: "position", key: "position", width: 150 },
  { title: "City", dataIndex: "city", key: "city", width: 100 },
  { title: "Phone", dataIndex: "phone", key: "phone", width: 150 },
  { title: "Email", dataIndex: "email", key: "email", width: 220 },
  { title: "Join Date", dataIndex: "joinDate", key: "joinDate", width: 130 },
  { title: "Salary", dataIndex: "salary", key: "salary", width: 120 },
  { title: "Status", dataIndex: "status", key: "status", width: 100 },
];

const dataSource: DataType[] = Array.from({ length: 30 }, (_, i) => ({
  key: String(i + 1),
  name: \`Employee \${i + 1}\`,
  age: 22 + (i % 20),
  department: ["Engineering", "Product", "Design", "Marketing", "Operations"][i % 5],
  position: ["Engineer", "Product Manager", "Designer", "Ops Specialist", "Marketing Lead"][i % 5],
  city: ["Shenzhen", "Beijing", "Shanghai", "Guangzhou", "Hangzhou"][i % 5],
  phone: \`138\${String(10000000 + i).slice(0, 8)}\`,
  email: \`employee\${i + 1}@company.com\`,
  joinDate: \`2024-\${String((i % 12) + 1).padStart(2, "0")}-\${String((i % 28) + 1).padStart(2, "0")}\`,
  salary: \`\${15 + i}K\`,
  status: i % 3 === 0 ? "Active" : i % 3 === 1 ? "Probation" : "Confirmed",
}));

export default function ScrollXYDemo() {
  return (
    <Table<DataType>
      columns={columns}
      dataSource={dataSource}
      rowKey="key"
      scroll={{ x: 1400, y: 350 }}
    />
  );
}
`,nn=[{title:`Name`,dataIndex:`name`,key:`name`,width:120,fixed:`left`},{title:`Age`,dataIndex:`age`,key:`age`,width:80},{title:`Department`,dataIndex:`department`,key:`department`,width:150},{title:`Position`,dataIndex:`position`,key:`position`,width:180},{title:`City`,dataIndex:`city`,key:`city`,width:120},{title:`Phone`,dataIndex:`phone`,key:`phone`,width:160},{title:`Email`,dataIndex:`email`,key:`email`,width:240},{title:`Action`,key:`action`,width:100,fixed:`right`,render:()=>(0,Q.jsx)(`a`,{style:{color:`var(--lg-g-fg-color-primary-default)`},children:`Edit`})}],rn=Array.from({length:20},(e,t)=>({key:String(t+1),name:`Employee ${t+1}`,age:22+t%18,department:[`Engineering`,`Product`,`Design`,`Marketing`][t%4],position:[`Frontend Engineer`,`Backend Engineer`,`Product Manager`,`UI Designer`][t%4],city:[`Shenzhen`,`Beijing`,`Shanghai`,`Guangzhou`][t%4],phone:`138${String(1e7+t).slice(0,8)}`,email:`user${t+1}@example.com`,action:`Edit`}));function an(){return(0,Q.jsx)($,{columns:nn,dataSource:rn,rowKey:`key`,scroll:{x:1200,y:350}})}var on=`/**
 * 固定列 + 纵向滚动
 * 验证 sticky 固定列在 ScrollArea 模式下的表现
 */
import { Table } from "lingee-ui";
import type { TableColumnType } from "lingee-ui";

interface DataType {
  key: string;
  name: string;
  age: number;
  department: string;
  position: string;
  city: string;
  phone: string;
  email: string;
  action: string;
}

const columns: TableColumnType<DataType>[] = [
  { title: "Name", dataIndex: "name", key: "name", width: 120, fixed: "left" },
  { title: "Age", dataIndex: "age", key: "age", width: 80 },
  { title: "Department", dataIndex: "department", key: "department", width: 150 },
  { title: "Position", dataIndex: "position", key: "position", width: 180 },
  { title: "City", dataIndex: "city", key: "city", width: 120 },
  { title: "Phone", dataIndex: "phone", key: "phone", width: 160 },
  { title: "Email", dataIndex: "email", key: "email", width: 240 },
  {
    title: "Action",
    key: "action",
    width: 100,
    fixed: "right",
    render: () => <a style={{ color: "var(--lg-g-fg-color-primary-default)" }}>Edit</a>,
  },
];

const dataSource: DataType[] = Array.from({ length: 20 }, (_, i) => ({
  key: String(i + 1),
  name: \`Employee \${i + 1}\`,
  age: 22 + (i % 18),
  department: ["Engineering", "Product", "Design", "Marketing"][i % 4],
  position: ["Frontend Engineer", "Backend Engineer", "Product Manager", "UI Designer"][i % 4],
  city: ["Shenzhen", "Beijing", "Shanghai", "Guangzhou"][i % 4],
  phone: \`138\${String(10000000 + i).slice(0, 8)}\`,
  email: \`user\${i + 1}@example.com\`,
  action: "Edit",
}));

export default function FixedColumnDemo() {
  return (
    <Table<DataType>
      columns={columns}
      dataSource={dataSource}
      rowKey="key"
      scroll={{ x: 1200, y: 350 }}
    />
  );
}
`;function sn({width:e,onResize:t,children:n,style:r,...i}){if(!e||!t)return(0,Q.jsx)(`th`,{style:r,...i,children:n});let a=n=>{n.preventDefault();let r=n.clientX,i=n=>t(Math.max(60,e+n.clientX-r)),a=()=>{document.removeEventListener(`mousemove`,i),document.removeEventListener(`mouseup`,a)};document.addEventListener(`mousemove`,i),document.addEventListener(`mouseup`,a)};return(0,Q.jsxs)(`th`,{style:{...r,position:`relative`},...i,children:[n,(0,Q.jsx)(`span`,{onMouseDown:a,style:{position:`absolute`,top:0,right:0,bottom:0,width:6,cursor:`col-resize`}})]})}var cn={header:{cell:sn}},ln=[{key:`1`,name:`Item 1`,owner:`User A`,note:`Note 1`},{key:`2`,name:`Item 2`,owner:`User B`,note:`Note 2`},{key:`3`,name:`Item 3`,owner:`User C`,note:`Note 3`}],un=[`name`,`owner`,`note`];function dn(){let[e,t]=(0,A.useState)({name:160,owner:120,note:240}),n=(0,A.useMemo)(()=>un.map(n=>({key:n,dataIndex:n,title:n.charAt(0).toUpperCase()+n.slice(1),width:e[n],ellipsis:!0,onHeaderCell:()=>({width:e[n],onResize:e=>t(t=>({...t,[n]:e}))})})),[e]);return(0,Q.jsx)($,{columns:n,dataSource:ln,components:cn})}var fn=`import { useMemo, useState } from "react";
import type { HTMLAttributes, MouseEvent as ReactMouseEvent } from "react";
import { Table } from "lingee-ui";
import type { TableColumnType, TableComponents } from "lingee-ui";

interface ResizableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  width?: number;
  onResize?: (width: number) => void;
}

/** 表头单元格右缘放拖拽手柄，按住拖动时实时回写列宽 */
function ResizableCell({ width, onResize, children, style, ...rest }: ResizableCellProps) {
  if (!width || !onResize) {
    return (
      <th style={style} {...rest}>
        {children}
      </th>
    );
  }

  const handleMouseDown = (e: ReactMouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const move = (ev: MouseEvent) => onResize(Math.max(60, width + ev.clientX - startX));
    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };

  return (
    <th style={{ ...style, position: "relative" }} {...rest}>
      {children}
      <span
        onMouseDown={handleMouseDown}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: 6,
          cursor: "col-resize",
        }}
      />
    </th>
  );
}

// components 需保持引用稳定，放在组件外
const components: TableComponents = { header: { cell: ResizableCell } };

type Row = { key: string; name: string; owner: string; note: string };

const dataSource: Row[] = [
  { key: "1", name: "Item 1", owner: "User A", note: "Note 1" },
  { key: "2", name: "Item 2", owner: "User B", note: "Note 2" },
  { key: "3", name: "Item 3", owner: "User C", note: "Note 3" },
];

const FIELDS = ["name", "owner", "note"] as const;

export default function ResizableDemo() {
  const [widths, setWidths] = useState<Record<(typeof FIELDS)[number], number>>({
    name: 160,
    owner: 120,
    note: 240,
  });

  const columns = useMemo<TableColumnType<Row>[]>(
    () =>
      FIELDS.map((field) => ({
        key: field,
        dataIndex: field,
        title: field.charAt(0).toUpperCase() + field.slice(1),
        width: widths[field],
        ellipsis: true,
        // 返回值作为属性传给 components.header.cell
        onHeaderCell: () => ({
          width: widths[field],
          onResize: (width: number) => setWidths((prev) => ({ ...prev, [field]: width })),
        }),
      })),
    [widths],
  );

  return <Table columns={columns} dataSource={dataSource} components={components} />;
}
`,pn=50,mn={position:`absolute`,top:0,right:0,bottom:0,zIndex:1,width:8,cursor:`col-resize`,userSelect:`none`,transform:`translateX(50%)`},hn={position:`absolute`,top:`25%`,left:3,width:1,height:`50%`,background:`var(--lg-g-border-color-black-soft)`},gn=({colWidth:e,onResizeCol:t,children:n,style:r,...i})=>{let a=(0,A.useRef)(null);(0,A.useEffect)(()=>()=>a.current?.(),[]);let o=(0,A.useCallback)(n=>{if(n.preventDefault(),n.stopPropagation(),!e||!t)return;let r=n.clientX,i=e,o=e=>{t(Math.max(pn,i+e.clientX-r))},s=()=>{document.removeEventListener(`mousemove`,o),document.removeEventListener(`mouseup`,s),document.body.style.cursor=``,document.body.style.userSelect=``,a.current=null};a.current=s,document.addEventListener(`mousemove`,o),document.addEventListener(`mouseup`,s),document.body.style.cursor=`col-resize`,document.body.style.userSelect=`none`},[e,t]);return!e||!t?(0,Q.jsx)(`th`,{style:r,...i,children:n}):(0,Q.jsxs)(`th`,{style:{...r,position:`relative`},...i,children:[n,(0,Q.jsx)(`span`,{className:`resize-handle`,style:mn,onMouseDown:o,children:(0,Q.jsx)(`span`,{style:hn})})]})};function _n(e){let[t,n]=(0,A.useState)(()=>{let t={};return e.forEach((e,n)=>{typeof e.width==`number`&&(t[n]=e.width)}),t}),r=(0,A.useCallback)((e,t)=>{n(n=>({...n,[e]:t}))},[]);return{resizableColumns:(0,A.useMemo)(()=>e.map((e,n)=>{let i=t[n]||e.width;return{...e,width:i,onHeaderCell:()=>({colWidth:typeof i==`number`?i:void 0,onResizeCol:typeof i==`number`?e=>r(n,e):void 0})}}),[e,t,r]),components:(0,A.useMemo)(()=>({header:{cell:gn}}),[])}}var vn=[`A`,`B`,`C`,`D`].map((e,t)=>({id:String(t+1),name:`Item ${t+1}`,owner:`User ${e}`,status:t%2?`Done`:`Running`,updatedAt:`2026-01-0${t+1}`})),yn=[{key:`data`,label:`Data`},{key:`loading`,label:`Loading`},{key:`error`,label:`Error`},{key:`empty`,label:`Empty`},{key:`partial`,label:`Partial`}];function bn(){let[e,t]=(0,A.useState)(`data`),[n,r]=(0,A.useState)(),{resizableColumns:i,components:a}=_n((0,A.useMemo)(()=>[{key:`name`,dataIndex:`name`,title:`Name`,width:160,ellipsis:!0},{key:`owner`,dataIndex:`owner`,title:`Owner`,width:120},{key:`status`,dataIndex:`status`,title:`Status`,width:120},{key:`updatedAt`,dataIndex:`updatedAt`,title:`Updated`}],[])),o=e===`loading`,s=e===`error`;return(0,Q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,Q.jsx)(u,{items:yn,activeKey:e,onChange:t}),(0,Q.jsx)($,{columns:i,components:a,dataSource:o||s||e===`empty`?[]:vn,loading:o,loadError:s,errorContent:(0,Q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:12},children:[(0,Q.jsx)(`span`,{style:{color:`var(--lg-g-fg-color-black-faint)`},children:`Failed to load`}),(0,Q.jsx)(c,{onClick:()=>t(`data`),children:`Retry`})]}),empty:(0,Q.jsx)(l,{description:`No data`}),rowKey:`id`,footer:e===`partial`?()=>(0,Q.jsx)(p,{type:`warning`,description:`Some rows failed to load`}):void 0,onRow:e=>({onClick:()=>r(e.name),style:{cursor:`pointer`}})}),(0,Q.jsxs)(`span`,{style:{fontSize:12,lineHeight:`18px`,color:`var(--lg-g-fg-color-black-faint)`},children:[`Last clicked: `,n??`none`]})]})}var xn=`import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, FC, HTMLAttributes, MouseEvent as ReactMouseEvent } from "react";
import { Alert, Button, Empty, Table, Tabs } from "lingee-ui";
import type { TableColumnType, TableComponents } from "lingee-ui";

const MIN_COLUMN_WIDTH = 50;

type ResizableHeaderCellProps = HTMLAttributes<HTMLTableCellElement> & {
  colWidth?: number;
  onResizeCol?: (newWidth: number) => void;
};

const handleStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
  width: 8,
  cursor: "col-resize",
  userSelect: "none",
  transform: "translateX(50%)",
};

const handleLineStyle: CSSProperties = {
  position: "absolute",
  top: "25%",
  left: 3,
  width: 1,
  height: "50%",
  background: "var(--lg-g-border-color-black-soft)",
};

/** 拖拽逻辑在 mousedown 内闭合：绑定 → 计算 → 清理，不跨渲染持有监听 */
const ResizableHeaderCell: FC<ResizableHeaderCellProps> = ({
  colWidth,
  onResizeCol,
  children,
  style,
  ...rest
}) => {
  const cleanupRef = useRef<(() => void) | null>(null);

  // 拖拽途中卸载（如切换数据）时兜底移除 document 上的监听
  useEffect(() => () => cleanupRef.current?.(), []);

  const handleMouseDown = useCallback(
    (e: ReactMouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!colWidth || !onResizeCol) return;

      const startX = e.clientX;
      const startWidth = colWidth;
      const handleMouseMove = (moveEvent: MouseEvent) => {
        onResizeCol(Math.max(MIN_COLUMN_WIDTH, startWidth + moveEvent.clientX - startX));
      };
      const cleanup = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", cleanup);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        cleanupRef.current = null;
      };

      cleanupRef.current = cleanup;
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", cleanup);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    },
    [colWidth, onResizeCol],
  );

  if (!colWidth || !onResizeCol) {
    return (
      <th style={style} {...rest}>
        {children}
      </th>
    );
  }

  return (
    <th style={{ ...style, position: "relative" }} {...rest}>
      {children}
      <span className="resize-handle" style={handleStyle} onMouseDown={handleMouseDown}>
        <span style={handleLineStyle} />
      </span>
    </th>
  );
};

/** 列宽按列序号记录，只有声明了数字宽度的列可以拖拽 */
function useResizableColumns<T>(initialColumns: TableColumnType<T>[]) {
  const [columnWidths, setColumnWidths] = useState<Record<number, number>>(() => {
    const widths: Record<number, number> = {};
    initialColumns.forEach((col, index) => {
      if (typeof col.width === "number") widths[index] = col.width;
    });
    return widths;
  });

  const handleResize = useCallback((index: number, newWidth: number) => {
    setColumnWidths((prev) => ({ ...prev, [index]: newWidth }));
  }, []);

  const resizableColumns = useMemo<TableColumnType<T>[]>(
    () =>
      initialColumns.map((col, index) => {
        const currentWidth = columnWidths[index] || col.width;
        return {
          ...col,
          width: currentWidth,
          // 返回值作为属性传给 components.header.cell
          onHeaderCell: () => ({
            colWidth: typeof currentWidth === "number" ? currentWidth : undefined,
            onResizeCol:
              typeof currentWidth === "number"
                ? (newWidth: number) => handleResize(index, newWidth)
                : undefined,
          }),
        };
      }),
    [initialColumns, columnWidths, handleResize],
  );

  // components 需保持引用稳定，否则每次渲染都会重建表头单元格
  const components = useMemo<TableComponents>(
    () => ({ header: { cell: ResizableHeaderCell } }),
    [],
  );

  return { resizableColumns, components };
}

type Row = { id: string; name: string; owner: string; status: string; updatedAt: string };

const ROWS: Row[] = ["A", "B", "C", "D"].map((owner, index) => ({
  id: String(index + 1),
  name: \`Item \${index + 1}\`,
  owner: \`User \${owner}\`,
  status: index % 2 ? "Done" : "Running",
  updatedAt: \`2026-01-0\${index + 1}\`,
}));

type ViewState = "data" | "loading" | "error" | "empty" | "partial";

const VIEW_STATES: { key: ViewState; label: string }[] = [
  { key: "data", label: "Data" },
  { key: "loading", label: "Loading" },
  { key: "error", label: "Error" },
  { key: "empty", label: "Empty" },
  { key: "partial", label: "Partial" },
];

export default function ResizableStatesDemo() {
  const [view, setView] = useState<ViewState>("data");
  const [clicked, setClicked] = useState<string>();

  // 列定义保持引用稳定：hook 以它为依赖生成可拖拽的列
  const baseColumns = useMemo<TableColumnType<Row>[]>(
    () => [
      { key: "name", dataIndex: "name", title: "Name", width: 160, ellipsis: true },
      { key: "owner", dataIndex: "owner", title: "Owner", width: 120 },
      { key: "status", dataIndex: "status", title: "Status", width: 120 },
      { key: "updatedAt", dataIndex: "updatedAt", title: "Updated" },
    ],
    [],
  );
  const { resizableColumns, components } = useResizableColumns(baseColumns);

  const isLoading = view === "loading";
  const isLoadError = view === "error";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Tabs<ViewState> items={VIEW_STATES} activeKey={view} onChange={setView} />
      <Table<Row>
        columns={resizableColumns}
        components={components}
        dataSource={isLoading || isLoadError || view === "empty" ? [] : ROWS}
        loading={isLoading}
        loadError={isLoadError}
        errorContent={
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <span style={{ color: "var(--lg-g-fg-color-black-faint)" }}>Failed to load</span>
            <Button onClick={() => setView("data")}>Retry</Button>
          </div>
        }
        empty={<Empty description="No data" />}
        rowKey="id"
        footer={
          view === "partial"
            ? () => <Alert type="warning" description="Some rows failed to load" />
            : undefined
        }
        onRow={(record) => ({
          onClick: () => setClicked(record.name),
          style: { cursor: "pointer" },
        })}
      />
      <span style={{ fontSize: 12, lineHeight: "18px", color: "var(--lg-g-fg-color-black-faint)" }}>
        Last clicked: {clicked ?? "none"}
      </span>
    </div>
  );
}
`;export{Ft as _,on as a,en as c,qt as d,Kt as f,Rt as g,zt as h,dn as i,Zt as l,Ht as m,bn as n,an as o,Ut as p,fn as r,tn as s,xn as t,Xt as u,Pt as v};