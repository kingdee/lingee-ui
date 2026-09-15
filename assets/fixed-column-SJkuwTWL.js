import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./react-dom-Ccy8f0CG.js";import{T as i,k as a}from"./tooltip-provider-DeqArBrK.js";import{n as o}from"./provider-BmKzlQM7.js";import{t as s}from"./empty-DomMNcML.js";import{n as c}from"./tooltip-D5ypfcq7.js";import{t as l}from"./button-WsNqWjZh.js";import{t as u}from"./checkbox-DcTRggjH.js";import{t as d}from"./spin-OobmRULf.js";import{S as f,_ as p,b as m,c as h,f as g,h as _,i as v,n as y,t as b,v as x,x as S}from"./es-C1Nc0U3n.js";import{n as C,t as w}from"./getScrollBarSize-ChIYK2eQ.js";import{t as T}from"./findDOMNode-g72aN7QS.js";import{n as E,t as D}from"./es-DXbIwjN_.js";var O=e(t()),k={},A=`rc-table-internal-hook`,j=e(r());function M(e){let t=O.createContext(void 0);return{Context:t,Provider:({value:e,children:n})=>{let r=O.useRef(e);r.current=e;let[i]=O.useState(()=>({getValue:()=>r.current,listeners:new Set}));return m(()=>{(0,j.unstable_batchedUpdates)(()=>{i.listeners.forEach(t=>{t(e)})})},[e]),O.createElement(t.Provider,{value:i},n)},defaultValue:e}}function N(e,t){let n=f(typeof t==`function`?t:e=>{if(t===void 0)return e;if(!Array.isArray(t))return e[t];let n={};return t.forEach(t=>{n[t]=e[t]}),n}),r=O.useContext(e?.Context),{listeners:i,getValue:a}=r||{},o=O.useRef();o.current=n(r?a():e?.defaultValue);let[,s]=O.useState({});return m(()=>{if(!r)return;function e(e){let t=n(e);x(o.current,t,!0)||s({})}return i.add(e),()=>{i.delete(e)}},[r]),o.current}function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function F(){let e=O.createContext(null);function t(){return O.useContext(e)}function n(n,r){let i=_(n),a=(a,o)=>{let s=i?{ref:o}:{},c=O.useRef(0),l=O.useRef(a);return t()===null?((!r||r(l.current,a))&&(c.current+=1),l.current=a,O.createElement(e.Provider,{value:c.current},O.createElement(n,P({},a,s)))):O.createElement(n,P({},a,s))};return i?O.forwardRef(a):a}function r(e,n){let r=_(e),i=(n,i)=>{let a=r?{ref:i}:{};return t(),O.createElement(e,P({},n,a))};return O.memo(r?O.forwardRef(i):i,n)}return{makeImmutable:n,responseImmutable:r,useImmutableMark:t}}var{makeImmutable:I,responseImmutable:ee,useImmutableMark:L}=F(),{makeImmutable:R,responseImmutable:z,useImmutableMark:te}=F(),B=M();function ne(e,t){let n=e;for(let e=0;e<t.length;e+=1){if(n==null)return;n=n[t[e]]}return n}var V=O.createContext({renderWithProps:!1}),H=`RC_TABLE_KEY`;function re(e){return e==null?[]:Array.isArray(e)?e:[e]}function ie(e){let t=[],n={};return e.forEach(e=>{let{key:r,dataIndex:i}=e||{},a=r||re(i).join(`-`)||H;for(;n[a];)a=`${a}_next`;n[a]=!0,t.push(a)}),t}function ae(e){return e!=null}function oe(e){return typeof e==`number`&&!Number.isNaN(e)}function se(e){return e&&typeof e==`object`&&!Array.isArray(e)&&!O.isValidElement(e)}function ce(e,t,n,r,i,a){let o=O.useContext(V),s=te();return p(()=>{if(ae(r))return[r];let a=ne(e,t==null||t===``?[]:Array.isArray(t)?t:[t]),s=a,c;if(i){let t=i(a,e,n);se(t)?(s=t.children,c=t.props,o.renderWithProps=!0):s=t}return[s,c]},[s,e,r,t,i,n],(e,t)=>{if(a){let[,n]=e,[,r]=t;return a(r,n)}return o.renderWithProps?!0:!x(e,t,!0)})}function le(e,t,n,r){let i=e+t-1;return e<=r&&i>=n}function ue(e,t){return N(B,n=>[le(e,t||1,n.hoverStartRow,n.hoverEndRow),n.onHover])}function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}var de=({ellipsis:e,rowType:t,children:n})=>{let r,i=e===!0?{showTitle:!0}:e;return i&&(i.showTitle||t===`header`)&&(typeof n==`string`||typeof n==`number`?r=n.toString():O.isValidElement(n)&&typeof n.props?.children==`string`&&(r=n.props?.children)),r},fe=O.memo(e=>{let{component:t,children:n,ellipsis:r,scope:i,prefixCls:o,className:s,style:c,align:l,record:u,render:d,dataIndex:p,renderIndex:m,shouldCellUpdate:h,index:g,rowType:_,colSpan:v,rowSpan:y,fixStart:b,fixEnd:x,fixedStartShadow:S,fixedEndShadow:C,offsetFixedStartShadow:w,offsetFixedEndShadow:T,zIndex:E,zIndexReverse:D,appendNode:k,additionalProps:A={},originRowSpan:j,isSticky:M}=e,P=`${o}-cell`,{allColumnsFixedLeft:F,rowHoverable:I}=N(B,[`allColumnsFixedLeft`,`rowHoverable`]),[ee,L]=ce(u,p,m,n,d,h),R={},z=typeof b==`number`&&!F,te=typeof x==`number`&&!F,[ne,V]=N(B,({scrollInfo:e})=>{if(!z&&!te)return[!1,!1];let[t,n]=e;return[(z&&S&&t)-w>=1,(te&&C&&n-t)-T>1]});z&&(R.insetInlineStart=b,R[`--z-offset`]=E,R[`--z-offset-reverse`]=D),te&&(R.insetInlineEnd=x,R[`--z-offset`]=E,R[`--z-offset-reverse`]=D);let H=L?.colSpan??A.colSpan??v??1,re=L?.rowSpan??A.rowSpan??y??1,ie=L?.rowSpan??j??re,[ae,oe]=ue(g,ie),se=f(e=>{u&&oe(g,g+ie-1),A?.onMouseEnter?.(e)}),le=f(e=>{u&&oe(-1,-1),A?.onMouseLeave?.(e)});if(H===0||re===0)return null;let fe=A.title??de({rowType:_,ellipsis:r,children:ee}),W=a(P,s,{[`${P}-fix`]:z||te,[`${P}-fix-start`]:z,[`${P}-fix-end`]:te,[`${P}-fix-start-shadow`]:S,[`${P}-fix-start-shadow-show`]:S&&ne,[`${P}-fix-end-shadow`]:C,[`${P}-fix-end-shadow-show`]:C&&V,[`${P}-ellipsis`]:r,[`${P}-with-append`]:k,[`${P}-fix-sticky`]:(z||te)&&M,[`${P}-row-hover`]:!L&&ae},A.className,L?.className),pe={};l&&(pe.textAlign=l);let me={...L?.style,...R,...pe,...A.style,...c},G=ee;return typeof G==`object`&&!Array.isArray(G)&&!O.isValidElement(G)&&(G=null),r&&(S||C)&&(G=O.createElement(`span`,{className:`${P}-content`},G)),O.createElement(t,U({},L,A,{className:W,style:me,title:fe,scope:i,onMouseEnter:I?se:void 0,onMouseLeave:I?le:void 0,colSpan:H===1?null:H,rowSpan:re===1?null:re}),k,G)});function W(e){return e.fixed===`start`}function pe(e){return e.fixed===`end`}function me(e,t,n,r){let i=n[e]||{},a=n[t]||{},o=null,s=null;W(i)&&W(a)?o=r.start[e]:pe(a)&&pe(i)&&(s=r.end[t]);let c=!1,l=!1,u=0,d=0;o!==null&&(c=!n[t+1]||!W(n[t+1]),u=n.length*2-e,d=n.length+e),s!==null&&(l=!n[e-1]||!pe(n[e-1]),u=t,d=n.length-t);let f=0,p=0;if(c)for(let t=0;t<e;t+=1)W(n[t])||(f+=r.widths[t]||0);if(l)for(let e=n.length-1;e>t;--e)pe(n[e])||(p+=r.widths[e]||0);return{fixStart:o,fixEnd:s,fixedStartShadow:c,fixedEndShadow:l,offsetFixedStartShadow:f,offsetFixedEndShadow:p,isSticky:r.isSticky,zIndex:u,zIndexReverse:d}}var G=O.createContext({});function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},he.apply(this,arguments)}var ge=e=>{let{className:t,index:n,children:r,colSpan:i=1,rowSpan:a,align:o}=e,{prefixCls:s}=N(B,[`prefixCls`]),{scrollColumnIndex:c,stickyOffsets:l,flattenColumns:u}=O.useContext(G),d=n+i-1+1===c?i+1:i,f=O.useMemo(()=>me(n,n+d-1,u,l),[n,d,u,l]);return O.createElement(fe,he({className:t,index:n,component:`td`,prefixCls:s,record:null,dataIndex:null,align:o,colSpan:d,rowSpan:a,render:()=>r},f))},_e=e=>{let{children:t,...n}=e;return O.createElement(`tr`,n,t)},ve=e=>{let{children:t}=e;return t};ve.Row=_e,ve.Cell=ge;var ye=z(e=>{let{children:t,stickyOffsets:n,flattenColumns:r}=e,i=N(B,`prefixCls`),a=r.length-1,o=r[a],s=O.useMemo(()=>({stickyOffsets:n,flattenColumns:r,scrollColumnIndex:o?.scrollbar?a:null}),[o,r,a,n]);return O.createElement(G.Provider,{value:s},O.createElement(`tfoot`,{className:`${i}-summary`},t))}),be=ve;function xe(e){return null}function Se(e){return null}function K(e,t,n,r,i,a,o){let s=a(t,o);e.push({record:t,indent:n,index:o,rowKey:s});let c=i?.has(s);if(t&&Array.isArray(t[r])&&c)for(let o=0;o<t[r].length;o+=1)K(e,t[r][o],n+1,r,i,a,o)}function Ce(e,t,n,r){return O.useMemo(()=>{if(n?.size){let i=[];for(let a=0;a<e?.length;a+=1){let o=e[a];K(i,o,0,t,n,r,a)}return i}return e?.map((e,t)=>({record:e,indent:0,index:t,rowKey:r(e,t)}))},[e,t,n,r])}function q(e,t,n,r){let i=N(B,[`prefixCls`,`fixedInfoList`,`flattenColumns`,`expandableType`,`expandRowByClick`,`onTriggerExpand`,`rowClassName`,`expandedRowClassName`,`indentSize`,`expandIcon`,`expandedRowRender`,`forceRender`,`expandIconColumnIndex`,`expandedKeys`,`childrenColumnName`,`rowExpandable`,`onRow`]),{flattenColumns:o,expandableType:s,expandedKeys:c,childrenColumnName:l,onTriggerExpand:u,rowExpandable:d,onRow:p,expandRowByClick:m,rowClassName:h}=i,g=s===`nest`,_=s===`row`&&(!d||d(e)),v=_||g,y=c&&c.has(t),b=l&&e&&e[l],x=f(u),S=p?.(e,n),C=S?.onClick,w=(t,...n)=>{m&&v&&u(e,t),C?.(t,...n)},T;typeof h==`string`?T=h:typeof h==`function`&&(T=h(e,n,r));let E=ie(o);return{...i,columnsKey:E,nestExpandable:g,expanded:y,hasNestChildren:b,record:e,onTriggerExpand:x,rowSupportExpand:_,expandable:v,rowProps:{...S,className:a(T,S?.className),onClick:w}}}var we=e=>{let{prefixCls:t,children:n,component:r,cellComponent:i,className:a,expanded:o,colSpan:s,isEmpty:c,stickyOffset:l=0}=e,{scrollbarSize:u,fixHeader:d,fixColumn:f,componentWidth:p,horizonScroll:m}=N(B,[`scrollbarSize`,`fixHeader`,`fixColumn`,`componentWidth`,`horizonScroll`]),h=n;return(c?m&&p:f)&&(h=O.createElement(`div`,{style:{width:p-l-(d&&!c?u:0),position:`sticky`,left:l,overflow:`hidden`},className:`${t}-expanded-row-fixed`},h)),O.createElement(r,{className:a,style:{display:o?null:`none`}},O.createElement(fe,{component:i,prefixCls:t,colSpan:s},h))};function Te({prefixCls:e,record:t,onExpand:n,expanded:r,expandable:i}){let o=`${e}-row-expand-icon`;if(!i)return O.createElement(`span`,{className:a(o,`${e}-row-spaced`)});let s=e=>{n(t,e),e.stopPropagation()};return O.createElement(`span`,{className:a(o,{[`${e}-row-expanded`]:r,[`${e}-row-collapsed`]:!r}),onClick:s})}function Ee(e,t,n){let r=[];function i(e){(e||[]).forEach((e,a)=>{r.push(t(e,a)),i(e[n])})}return i(e),r}function J(e,t,n,r){return typeof e==`string`?e:typeof e==`function`?e(t,n,r):``}function De(){return De=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},De.apply(this,arguments)}function Oe(e,t,n,r,i,a=[],o=0){let{record:s,prefixCls:c,columnsKey:l,fixedInfoList:u,expandIconColumnIndex:d,nestExpandable:f,indentSize:p,expandIcon:m,expanded:h,hasNestChildren:g,onTriggerExpand:_,expandable:v,expandedKeys:y}=e,b=l[n],x=u[n],S;n===(d||0)&&f&&(S=O.createElement(O.Fragment,null,O.createElement(`span`,{style:{paddingLeft:`${p*r}px`},className:`${c}-row-indent indent-level-${r}`}),m({prefixCls:c,expanded:h,expandable:g,record:s,onExpand:_})));let C={...t.onCell?.(s,i)},w;if(o){let{rowSpan:e=1}=C;if(v&&e&&n<o){w=e;let t=e;for(let n=i;n<i+e;n+=1){let e=a[n];y.has(e)&&(t+=1)}C.rowSpan=t}}return{key:b,fixedInfo:x,appendCellNode:S,additionalCellProps:C,originRowSpan:w}}var ke=z(e=>{let{className:t,style:n,classNames:r,styles:i,record:o,index:s,renderIndex:c,rowKey:l,rowKeys:u,indent:d=0,rowComponent:f,cellComponent:p,scopeCellComponent:m,expandedRowInfo:h}=e,g=q(o,l,s,d),{prefixCls:_,flattenColumns:v,expandedRowClassName:y,expandedRowRender:b,forceRender:x,rowProps:S,expanded:C,rowSupportExpand:w}=g,T=O.useRef(!1);T.current||=C;let E=J(y,o,s,d),D=O.createElement(f,De({},S,{"data-row-key":l,className:a(t,`${_}-row`,`${_}-row-level-${d}`,S?.className,r.row,{[E]:d>=1}),style:{...n,...S?.style,...i.row}}),v.map((e,t)=>{let{render:n,dataIndex:l,className:f}=e,{key:v,fixedInfo:y,appendCellNode:b,additionalCellProps:x,originRowSpan:S}=Oe(g,e,t,d,s,u,h?.offset);return O.createElement(fe,De({className:a(f,r.cell),style:i.cell,ellipsis:e.ellipsis,align:e.align,scope:e.rowScope,component:e.rowScope?m:p,prefixCls:_,key:v,record:o,index:s,renderIndex:c,dataIndex:l,render:n,shouldCellUpdate:e.shouldCellUpdate},y,{appendNode:b,additionalProps:x,originRowSpan:S}))})),k;if(w&&(x||T.current||C)){let e=b(o,s,d+1,C);k=O.createElement(we,{expanded:C,className:a(`${_}-expanded-row`,`${_}-expanded-row-level-${d+1}`,E),prefixCls:_,component:f,cellComponent:p,colSpan:h?h.colSpan:v.length,isEmpty:!1,stickyOffset:h?.sticky},e)}return O.createElement(O.Fragment,null,D,k)}),Ae=e=>{let{columnKey:t,onColumnResize:n,title:r}=e,i=O.useRef(null);return m(()=>{i.current&&n(t,i.current.offsetWidth)},[]),O.createElement(E,{data:t},O.createElement(`td`,{ref:i,style:{paddingTop:0,paddingBottom:0,borderTop:0,borderBottom:0,height:0}},O.createElement(`div`,{style:{height:0,overflow:`hidden`,fontWeight:`bold`}},r||`\xA0`)))},je=({prefixCls:e,columnsKey:t,onColumnResize:n,columns:r})=>{let i=O.useRef(null),{measureRowRender:a}=N(B,[`measureRowRender`]),o=O.createElement(`tr`,{"aria-hidden":`true`,className:`${e}-measure-row`,style:{height:0},ref:i},O.createElement(E.Collection,{onBatchResize:e=>{v(i.current)&&e.forEach(({data:e,size:t})=>{n(e,t.offsetWidth)})}},t.map(e=>{let t=r.find(t=>t.key===e)?.title,i=O.isValidElement(t)?O.cloneElement(t,{ref:null}):t;return O.createElement(Ae,{key:e,columnKey:e,onColumnResize:n,title:i})})));return typeof a==`function`?a(o):o},Me=z(e=>{let{data:t,measureColumnWidth:n}=e,{prefixCls:r,getComponent:i,onColumnResize:o,flattenColumns:s,getRowKey:c,expandedKeys:l,childrenColumnName:u,emptyNode:d,classNames:f,styles:p,expandedRowOffset:m=0,colWidths:h}=N(B,[`prefixCls`,`getComponent`,`onColumnResize`,`flattenColumns`,`getRowKey`,`expandedKeys`,`childrenColumnName`,`emptyNode`,`classNames`,`styles`,`expandedRowOffset`,`fixedInfoList`,`colWidths`]),{body:g={}}=f||{},{body:_={}}=p||{},v=Ce(t,u,l,c),y=O.useMemo(()=>v.map(e=>e.rowKey),[v]),b=O.useRef({renderWithProps:!1}),x=O.useMemo(()=>{let e=s.length-m,t=0;for(let e=0;e<m;e+=1)t+=h[e]||0;return{offset:m,colSpan:e,sticky:t}},[s.length,m,h]),S=i([`body`,`wrapper`],`tbody`),C=i([`body`,`row`],`tr`),w=i([`body`,`cell`],`td`),T=i([`body`,`cell`],`th`),E;E=t.length?v.map((e,t)=>{let{record:n,indent:r,index:i,rowKey:a}=e;return O.createElement(ke,{classNames:g,styles:_,key:a,rowKey:a,rowKeys:y,record:n,index:t,renderIndex:i,rowComponent:C,cellComponent:w,scopeCellComponent:T,indent:r,expandedRowInfo:x})}):O.createElement(we,{expanded:!0,className:`${r}-placeholder`,prefixCls:r,component:C,cellComponent:w,colSpan:s.length,isEmpty:!0},d);let D=ie(s);return O.createElement(V.Provider,{value:b.current},O.createElement(S,{style:_.wrapper,className:a(`${r}-tbody`,g.wrapper)},n&&O.createElement(je,{prefixCls:r,columnsKey:D,onColumnResize:o,columns:s}),E))}),Ne=`RC_TABLE_INTERNAL_COL_DEFINE`;function Pe(e){let{expandable:t,...n}=e,r;return r=`expandable`in e?{...n,...t}:n,r.showExpandColumn===!1&&(r.expandIconColumnIndex=-1),r}function Fe(){return Fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fe.apply(this,arguments)}var Ie=e=>{let{colWidths:t,columns:n,columCount:r}=e,{tableLayout:i}=N(B,[`tableLayout`]),a=[],o=r||n.length,s=!1;for(let e=o-1;e>=0;--e){let r=t[e],o=n&&n[e],c,l;if(o&&(c=o[Ne],i===`auto`&&(l=o.minWidth)),r||l||c||s){let{columnType:t,...n}=c||{};a.unshift(O.createElement(`col`,Fe({key:e,style:{width:r,minWidth:l}},n))),s=!0}}return a.length>0?O.createElement(`colgroup`,null,a):null};function Le(e,t){return(0,O.useMemo)(()=>{let n=[];for(let r=0;r<t;r+=1){let t=e[r];if(t!==void 0)n[r]=t;else return null}return n},[e.join(`_`),t])}var Re=O.forwardRef((e,t)=>{let{className:n,style:r,noData:i,columns:o,flattenColumns:s,colWidths:c,colGroup:l,columCount:u,stickyOffsets:d,direction:f,fixHeader:p,stickyTopOffset:m,stickyBottomOffset:h,stickyClassName:_,scrollX:v,tableLayout:y=`fixed`,onScroll:b,maxContentScroll:x,children:S,...C}=e,{prefixCls:w,scrollbarSize:T,isSticky:E,getComponent:D}=N(B,[`prefixCls`,`scrollbarSize`,`isSticky`,`getComponent`]),k=D([`header`,`table`],`table`),A=E&&!p?0:T,j=O.useRef(null),M=O.useCallback(e=>{g(t,e),g(j,e)},[]);O.useEffect(()=>{function e(e){let{currentTarget:t,deltaX:n}=e;if(n){let{scrollLeft:r,scrollWidth:i,clientWidth:a}=t,o=i-a,s=r+n;f===`rtl`?(s=Math.max(-o,s),s=Math.min(0,s)):(s=Math.min(o,s),s=Math.max(0,s)),b({currentTarget:t,scrollLeft:s}),e.preventDefault()}}let t=j.current;return t?.addEventListener(`wheel`,e,{passive:!1}),()=>{t?.removeEventListener(`wheel`,e)}},[]);let P=s[s.length-1],F={fixed:P?P.fixed:null,scrollbar:!0,onHeaderCell:()=>({className:`${w}-cell-scrollbar`})},I=(0,O.useMemo)(()=>A?[...o,F]:o,[A,o]),ee=(0,O.useMemo)(()=>A?[...s,F]:s,[A,s]),L=(0,O.useMemo)(()=>{let{start:e,end:t}=d;return{...d,start:e,end:[...t.map(e=>e+A),0],isSticky:E}},[A,d,E]),R=Le(c,u),z=(0,O.useMemo)(()=>{let e=!R||!R.length||R.every(e=>!e);return i||e},[i,R]);return O.createElement(`div`,{style:{overflow:`hidden`,...E?{top:m,bottom:h}:{},...r},ref:M,className:a(n,{[_]:!!_})},O.createElement(k,{style:{tableLayout:y,minWidth:`100%`,width:v}},z?l:O.createElement(Ie,{colWidths:[...R,A],columCount:u+1,columns:ee}),S({...C,stickyOffsets:L,columns:I,flattenColumns:ee})))}),ze=O.memo(Re);function Be(){return Be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Be.apply(this,arguments)}var Y=e=>{let{cells:t,stickyOffsets:n,flattenColumns:r,rowComponent:i,cellComponent:a,onHeaderRow:o,index:s,classNames:c,styles:l}=e,{prefixCls:u}=N(B,[`prefixCls`]),d;o&&(d=o(t.map(e=>e.column),s));let f=ie(t.map(e=>e.column));return O.createElement(i,Be({},d,{className:c.row,style:l.row}),t.map((e,t)=>{let{column:i,colStart:o,colEnd:s,colSpan:c}=e,l=me(o,s,r,n),d=i?.onHeaderCell?.(i)||{};return O.createElement(fe,Be({},e,{scope:i.title?c>1?`colgroup`:`col`:null,ellipsis:i.ellipsis,align:i.align,component:a,prefixCls:u,key:f[t]},l,{additionalProps:d,rowType:`header`}))}))};function X(e,t,n){let r=[];function i(e,o,s=0){r[s]=r[s]||[];let c=o;return e.filter(Boolean).map(e=>{let o={key:e.key,className:a(e.className,t.cell)||``,style:n.cell,children:e.title,column:e,colStart:c},l=1,u=e.children;return u&&u.length>0&&(l=i(u,c,s+1).reduce((e,t)=>e+t,0),o.hasSubColumns=!0),`colSpan`in e&&({colSpan:l}=e),`rowSpan`in e&&(o.rowSpan=e.rowSpan),o.colSpan=l,o.colEnd=o.colStart+l-1,r[s].push(o),c+=l,l})}i(e,0);let o=r.length;for(let e=0;e<o;e+=1)r[e].forEach(t=>{!(`rowSpan`in t)&&!t.hasSubColumns&&(t.rowSpan=o-e)});return r}var Ve=z(e=>{let{stickyOffsets:t,columns:n,flattenColumns:r,onHeaderRow:i}=e,{prefixCls:o,getComponent:s,classNames:c,styles:l}=N(B,[`prefixCls`,`getComponent`,`classNames`,`styles`]),{header:u={}}=c||{},{header:d={}}=l||{},f=O.useMemo(()=>X(n,u,d),[n,u,d]),p=s([`header`,`wrapper`],`thead`),m=s([`header`,`row`],`tr`),h=s([`header`,`cell`],`th`);return O.createElement(p,{className:a(`${o}-thead`,u.wrapper),style:d.wrapper},f.map((e,n)=>O.createElement(Y,{classNames:u,styles:d,key:n,flattenColumns:r,cells:e,stickyOffsets:t,rowComponent:m,cellComponent:h,onHeaderRow:i,index:n})))});function He(e,t=``){return typeof t==`number`?t:t.endsWith(`%`)?e*parseFloat(t)/100:null}function Ue(e,t,n){return O.useMemo(()=>{if(t&&t>0){let r=0,i=0;e.forEach(e=>{let n=He(t,e.width);n?r+=n:i+=1});let a=Math.max(t,n),o=Math.max(a-r,i),s=i,c=o/i,l=0,u=e.map(e=>{let n={...e},r=He(t,n.width);if(r)n.width=r;else{let e=Math.floor(c);n.width=s===1?o:e,o-=e,--s}return l+=n.width,n});if(l<a){let e=a/l;o=a,u.forEach((t,n)=>{let r=Math.floor(t.width*e);t.width=n===u.length-1?o:r,o-=r})}return[u,Math.max(l,a)]}return[e,t]},[e,t,n])}function We(e){return b(e).filter(e=>O.isValidElement(e)).map(e=>{let{key:t,props:n}=e,{children:r,...i}=n,a={key:t,...i};return r&&(a.children=We(r)),a})}function Ge(e){return e.filter(e=>e&&typeof e==`object`&&!e.hidden).map(e=>{let t=e.children;return t&&t.length>0?{...e,children:Ge(t)}:e})}function Ke(e,t=`key`){return e.filter(e=>e&&typeof e==`object`).reduce((e,n,r)=>{let{fixed:i}=n,a=i===!0||i===`left`?`start`:i===`right`?`end`:i,o=`${t}-${r}`,s=n.children;return s&&s.length>0?[...e,...Ke(s,o).map(e=>({...e,fixed:e.fixed??a}))]:[...e,{key:o,...n,fixed:a}]},[])}function qe({prefixCls:e,columns:t,children:n,expandable:r,expandedKeys:i,columnTitle:a,getRowKey:o,onTriggerExpand:s,expandIcon:c,rowExpandable:l,expandIconColumnIndex:u,expandedRowOffset:d=0,direction:f,expandRowByClick:p,columnWidth:m,fixed:h,scrollWidth:g,clientWidth:_},v){let y=O.useMemo(()=>Ge((t||We(n)||[]).slice()),[t,n]),b=O.useMemo(()=>{if(r){let t=y.slice();if(!t.includes(k)){let e=u||0,n=e===0&&(h===`right`||h===`end`)?y.length:e;n>=0&&t.splice(n,0,k)}let n=t.indexOf(k);t=t.filter((e,t)=>e!==k||t===n);let r=y[n],f;f=h||(r?r.fixed:null);let g={[Ne]:{className:`${e}-expand-icon-col`,columnType:`EXPAND_COLUMN`},title:a,fixed:f,className:`${e}-row-expand-icon-cell`,width:m,render:(t,n,r)=>{let a=o(n,r),u=c({prefixCls:e,expanded:i.has(a),expandable:!l||l(n),record:n,onExpand:s});return p?O.createElement(`span`,{onClick:e=>e.stopPropagation()},u):u}};return t.map((e,t)=>{let n=e===k?g:e;return t<d?{...n,fixed:n.fixed||`start`}:n})}return y.filter(e=>e!==k)},[r,y,o,i,c,f,d]),x=O.useMemo(()=>{let e=b;return v&&(e=v(e)),e.length||(e=[{render:()=>null}]),e},[v,b,f]),[S,C]=Ue(O.useMemo(()=>Ke(x),[x,f,g]),g,_);return[x,S,C]}function Je(e,t,n){let r=Pe(e),{expandIcon:i,expandedRowKeys:a,defaultExpandedRowKeys:o,defaultExpandAllRows:s,expandedRowRender:c,onExpand:l,onExpandedRowsChange:u,childrenColumnName:d}=r,f=i||Te,p=d||`children`,m=O.useMemo(()=>c?`row`:e.expandable&&e.internalHooks===`rc-table-internal-hook`&&e.expandable.__PARENT_RENDER_ICON__||t.some(e=>e&&typeof e==`object`&&e[p])?`nest`:!1,[!!c,t]),[h,g]=O.useState(()=>o||(s?Ee(t,n,p):[])),_=O.useMemo(()=>new Set(a||h||[]),[a,h]);return[r,m,_,f,p,O.useCallback(e=>{let r=n(e,t.indexOf(e)),i,a=_.has(r);a?(_.delete(r),i=[..._]):i=[..._,r],g(i),l&&l(!a,e),u&&u(i)},[n,_,t,l,u])]}function Ye(e,t){let n=O.useMemo(()=>e.map((n,r)=>me(r,r,e,t)),[e,t]);return p(()=>n,[n],(e,t)=>!x(e,t))}function Xe(e){let t=(0,O.useRef)(e),[,n]=(0,O.useState)({}),r=(0,O.useRef)(null),i=(0,O.useRef)([]);function a(e){i.current.push(e);let a=Promise.resolve();r.current=a,a.then(()=>{if(r.current===a){let e=i.current,a=t.current;i.current=[],e.forEach(e=>{t.current=e(t.current)}),r.current=null,a!==t.current&&n({})}})}return(0,O.useEffect)(()=>()=>{r.current=null},[]),[t.current,a]}function Ze(e){let t=(0,O.useRef)(e||null),n=(0,O.useRef)(null);function r(){clearTimeout(n.current)}function i(e){t.current=e,r(),n.current=setTimeout(()=>{t.current=null,n.current=void 0},100)}function a(){return t.current}return(0,O.useEffect)(()=>r,[]),[i,a]}function Qe(){let[e,t]=O.useState(-1),[n,r]=O.useState(-1);return[e,n,O.useCallback((e,n)=>{t(e),r(n)},[])]}var $e=S()?window:null;function et(e,t){let{offsetHeader:n=0,offsetSummary:r=0,offsetScroll:i=0,getContainer:a=()=>$e}=typeof e==`object`?e:{},o=a()||$e,s=!!e;return O.useMemo(()=>({isSticky:s,stickyClassName:s?`${t}-sticky-holder`:``,offsetHeader:n,offsetSummary:r,offsetScroll:i,container:o}),[s,i,n,r,t,o])}function tt(e,t){return(0,O.useMemo)(()=>{let n=t.length,r=(n,r,i)=>{let a=[],o=0;for(let s=n;s!==r;s+=i)a.push(o),t[s].fixed&&(o+=e[s]||0);return a};return{start:r(0,n,1),end:r(n-1,-1,-1).reverse(),widths:e}},[e,t])}var nt=e=>{let{children:t,className:n,style:r}=e;return O.createElement(`div`,{className:n,style:r},t)};function rt(e){let t=T(e).getBoundingClientRect(),n=document.documentElement;return{left:t.left+(window.pageXOffset||n.scrollLeft)-(n.clientLeft||document.body.clientLeft||0),top:t.top+(window.pageYOffset||n.scrollTop)-(n.clientTop||document.body.clientTop||0)}}var Z=`mouseup`,it=`mousemove`,at=`scroll`,ot=`resize`,st=O.forwardRef((e,t)=>{let{scrollBodyRef:n,onScroll:r,offsetScroll:i,container:o,direction:s}=e,c=N(B,`prefixCls`),l=n.current?.scrollWidth||0,u=n.current?.clientWidth||0,d=l&&u/l*u,f=O.useRef(null),[p,m]=Xe({scrollLeft:0,isHiddenScrollBar:!0}),g=O.useRef({delta:0,x:0}),[_,v]=O.useState(!1),y=O.useRef(null);O.useEffect(()=>()=>{h.cancel(y.current)},[]);let b=()=>{v(!1)},x=e=>{e.persist(),g.current.delta=e.pageX-p.scrollLeft,g.current.x=0,v(!0),e.preventDefault()},S=e=>{let{buttons:t}=e||window?.event;if(!_||t===0){_&&v(!1);return}let n=g.current.x+e.pageX-g.current.x-g.current.delta,i=s===`rtl`;n=Math.max(i?d-u:0,Math.min(i?0:u-d,n)),(!i||Math.abs(n)+Math.abs(d)<u)&&(r({scrollLeft:n/u*(l+2)}),g.current.x=e.pageX)},C=()=>{h.cancel(y.current),y.current=h(()=>{if(!n.current)return;let e=rt(n.current).top,t=e+n.current.offsetHeight,r=o===window?document.documentElement.scrollTop+window.innerHeight:rt(o).top+o.clientHeight;t-w()<=r||e>=r-i?m(e=>({...e,isHiddenScrollBar:!0})):m(e=>({...e,isHiddenScrollBar:!1}))})},E=e=>{m(t=>({...t,scrollLeft:e/l*u||0}))};return O.useImperativeHandle(t,()=>({setScrollLeft:E,checkScrollBarVisible:C})),O.useEffect(()=>(document.body.addEventListener(Z,b,!1),document.body.addEventListener(it,S,!1),C(),()=>{document.body.removeEventListener(Z,b),document.body.removeEventListener(it,S)}),[d,_]),O.useEffect(()=>{if(n.current){let e=[],t=T(n.current);for(;t;)e.push(t),t=t.parentElement;return e.forEach(e=>{e.addEventListener(at,C,!1)}),window.addEventListener(ot,C,!1),window.addEventListener(at,C,!1),o.addEventListener(at,C,!1),()=>{e.forEach(e=>{e.removeEventListener(at,C)}),window.removeEventListener(ot,C),window.removeEventListener(at,C),o.removeEventListener(at,C)}}},[o]),O.useEffect(()=>{p.isHiddenScrollBar||m(e=>{let t=n.current;return t?{...e,scrollLeft:t.scrollLeft/t.scrollWidth*t.clientWidth}:e})},[p.isHiddenScrollBar]),l<=u||!d||p.isHiddenScrollBar?null:O.createElement(`div`,{style:{height:w(),width:u,bottom:i},className:`${c}-sticky-scroll`},O.createElement(`div`,{onMouseDown:x,ref:f,className:a(`${c}-sticky-scroll-bar`,{[`${c}-sticky-scroll-bar-active`]:_}),style:{width:`${d}px`,transform:`translate3d(${p.scrollLeft}px, 0, 0)`}}))});function ct(){return ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ct.apply(this,arguments)}var lt=`rc-table`,ut=[],dt={};function ft(){return`No Data`}var pt=O.forwardRef((e,t)=>{let n={rowKey:`key`,prefixCls:lt,emptyText:ft,...e},{prefixCls:r,className:i,rowClassName:o,style:s,classNames:c,styles:l,data:u,rowKey:d,scroll:p,tableLayout:h,direction:g,title:_,footer:v,summary:b,caption:S,id:w,showHeader:D,components:k,emptyText:j,onRow:M,onHeaderRow:N,measureRowRender:P,onScroll:F,internalHooks:I,transformColumns:ee,internalRefs:L,tailor:R,getContainerWidth:z,sticky:te,rowHoverable:V=!0}=n,H=u||ut,re=!!H.length,se=I===A,ce=O.useCallback((e,t)=>ne(k,e)||t,[k]),le=O.useMemo(()=>typeof d==`function`?d:e=>e&&e[d],[d]),ue=ce([`body`]),[U,de,fe]=Qe(),[W,pe,me,G,he,ge]=Je(n,H,le),_e=p?.x,[be,xe]=O.useState(0),[Se,K,Ce]=qe({...n,...W,expandable:!!W.expandedRowRender,columnTitle:W.columnTitle,expandedKeys:me,getRowKey:le,onTriggerExpand:ge,expandIcon:G,expandIconColumnIndex:W.expandIconColumnIndex,direction:g,scrollWidth:se&&R&&typeof _e==`number`?_e:null,clientWidth:be},se?ee:null),q=Ce??_e,we=O.useMemo(()=>({columns:Se,flattenColumns:K}),[Se,K]),Te=O.useRef(null),Ee=O.useRef(null),J=O.useRef(null),De=O.useRef(null);O.useImperativeHandle(t,()=>({nativeElement:Te.current,scrollTo:e=>{if(J.current instanceof HTMLElement){let{index:t,top:n,key:r,offset:i,align:a=`nearest`}=e;if(oe(n))J.current?.scrollTo({top:n});else{let e=r??le(H[t]),n=J.current.querySelector(`[data-row-key="${e}"]`);if(n&&(n.scrollIntoView({block:a}),i)){let e=J.current;e.scrollTo({top:e.scrollTop+i})}}}else J.current?.scrollTo&&J.current.scrollTo(e)}}));let Oe=O.useRef(null),[ke,Ae]=O.useState(!1),[je,Ne]=O.useState(!1),[Pe,Fe]=O.useState(new Map),Le=ie(K).map(e=>Pe.get(e)),Re=O.useMemo(()=>Le,[Le.join(`_`)]),Be=tt(Re,K),Y=p&&ae(p.y),X=p&&ae(q)||!!W.fixed,He=X&&K.some(({fixed:e})=>e),Ue=O.useRef(null),{isSticky:We,offsetHeader:Ge,offsetSummary:Ke,offsetScroll:Xe,stickyClassName:$e,container:rt}=et(te,r),Z=O.useMemo(()=>b?.(H),[b,H]),it=(Y||We)&&O.isValidElement(Z)&&Z.type===ve&&Z.props.fixed,at,ot,pt;Y&&(ot={overflowY:re?`scroll`:`auto`,maxHeight:p.y}),X&&(at={overflowX:`auto`},Y||(ot={overflowY:`hidden`}),pt={width:q===!0?`auto`:q,minWidth:`100%`});let mt=O.useCallback((e,t)=>{Fe(n=>{if(n.get(e)!==t){let r=new Map(n);return r.set(e,t),r}return n})},[]),[ht,gt]=Ze(null),[_t]=O.useState(()=>new WeakMap);function vt(e,t){if(!t)return;if(typeof t==`function`){t(e);return}let n=_t.get(t);if(n&&clearTimeout(n),t.scrollLeft!==e){t.scrollLeft=e;let n=setTimeout(()=>{t.scrollLeft!==e&&(t.scrollLeft=e)},0);_t.set(t,n)}}let[yt,bt]=O.useState([0,0]),xt=f(({currentTarget:e,scrollLeft:t})=>{let n=typeof t==`number`?t:e.scrollLeft,r=e||dt;(!gt()||gt()===r)&&(ht(r),vt(n,Ee.current),vt(n,J.current),vt(n,Oe.current),vt(n,Ue.current?.setScrollLeft));let i=e||Ee.current;if(i){let e=se&&R&&typeof q==`number`?q:i.scrollWidth,t=i.clientWidth,r=Math.abs(n);if(bt(n=>{let i=[r,e-t];return x(n,i)?n:i}),e===t){Ae(!1),Ne(!1);return}Ae(r>0),Ne(r<e-t-1)}}),St=f(e=>{xt(e),F?.(e)}),Ct=()=>{X&&J.current?xt({currentTarget:T(J.current),scrollLeft:J.current?.scrollLeft}):(Ae(!1),Ne(!1))},wt=e=>{Ue.current?.checkScrollBarVisible();let t=e??Te.current?.offsetWidth??0;se&&z&&Te.current&&(t=z(Te.current,t)||t),t!==be&&(Ct(),xe(t))};m(()=>{X&&wt()},[X]);let Tt=O.useRef(!1);O.useEffect(()=>{Tt.current&&Ct()},[X,u,Se.length]),O.useEffect(()=>{Tt.current=!0},[]);let[Et,Dt]=O.useState(0);m(()=>{(!R||!se)&&(J.current instanceof Element?Dt(C(J.current).width):Dt(C(De.current).width))},[]),O.useEffect(()=>{se&&L&&(L.body.current=J.current)});let Q=O.useCallback(e=>O.createElement(O.Fragment,null,O.createElement(Ve,e),it===`top`&&O.createElement(ye,e,Z)),[it,Z]),Ot=O.useCallback(e=>O.createElement(ye,e,Z),[Z]),kt=ce([`table`],`table`),$=O.useMemo(()=>h||(He?q===`max-content`?`auto`:`fixed`:Y||We||K.some(({ellipsis:e})=>e)?`fixed`:`auto`),[Y,He,K,h,We]),At,jt={colWidths:Re,columCount:K.length,stickyOffsets:Be,onHeaderRow:N,fixHeader:Y,scroll:p},Mt=O.useMemo(()=>re?null:typeof j==`function`?j():j,[re,j]),Nt=O.createElement(Me,{data:H,measureColumnWidth:Y||X||We}),Pt=O.createElement(Ie,{colWidths:K.map(({width:e})=>e),columns:K}),Ft=S==null?void 0:O.createElement(`caption`,{className:`${r}-caption`},S),It=y(n,{data:!0}),Lt=y(n,{aria:!0});if(Y||We){let e;typeof ue==`function`?(e=ue(H,{scrollbarSize:Et,ref:J,onScroll:xt}),jt.colWidths=K.map(({width:e},t)=>{let n=t===K.length-1?e-Et:e;return typeof n==`number`&&!Number.isNaN(n)?n:0})):e=O.createElement(`div`,{style:{...at,...ot},onScroll:St,ref:J,className:`${r}-body`},O.createElement(kt,ct({style:{...pt,tableLayout:$}},Lt),Ft,Pt,Nt,!it&&Z&&O.createElement(ye,{stickyOffsets:Be,flattenColumns:K},Z)));let t={noData:!H.length,maxContentScroll:X&&q===`max-content`,...jt,...we,direction:g,stickyClassName:$e,scrollX:q,tableLayout:$,onScroll:xt};At=O.createElement(O.Fragment,null,D!==!1&&O.createElement(ze,ct({},t,{stickyTopOffset:Ge,className:`${r}-header`,ref:Ee,colGroup:Pt}),Q),e,it&&it!==`top`&&O.createElement(ze,ct({},t,{stickyBottomOffset:Ke,className:`${r}-summary`,ref:Oe,colGroup:Pt}),Ot),We&&J.current&&J.current instanceof Element&&O.createElement(st,{ref:Ue,offsetScroll:Xe,scrollBodyRef:J,onScroll:xt,container:rt,direction:g}))}else At=O.createElement(`div`,{style:{...at,...ot,...l?.content},className:a(`${r}-content`,c?.content),onScroll:xt,ref:J},O.createElement(kt,ct({style:{...pt,tableLayout:$}},Lt),Ft,Pt,D!==!1&&O.createElement(Ve,ct({},jt,we)),Nt,Z&&O.createElement(ye,{stickyOffsets:Be,flattenColumns:K},Z)));let Rt={...s};We&&(Rt[`--columns-count`]=K.length);let zt=O.createElement(`div`,ct({className:a(r,i,{[`${r}-rtl`]:g===`rtl`,[`${r}-fix-start-shadow`]:X,[`${r}-fix-end-shadow`]:X,[`${r}-fix-start-shadow-show`]:X&&ke,[`${r}-fix-end-shadow-show`]:X&&je,[`${r}-layout-fixed`]:h===`fixed`,[`${r}-fixed-header`]:Y,[`${r}-fixed-column`]:He,[`${r}-scroll-horizontal`]:X,[`${r}-has-fix-start`]:K[0]?.fixed,[`${r}-has-fix-end`]:K[K.length-1]?.fixed===`end`}),style:Rt,id:w,ref:Te},It),_&&O.createElement(nt,{className:a(`${r}-title`,c?.title),style:l?.title},_(H)),O.createElement(`div`,{ref:De,className:a(`${r}-container`,c?.section),style:l?.section},At),v&&O.createElement(nt,{className:a(`${r}-footer`,c?.footer),style:l?.footer},v(H)));X&&(zt=O.createElement(E,{onResize:({offsetWidth:e})=>wt(e)},zt));let Bt=Ye(K,Be),Vt=O.useMemo(()=>({scrollX:q,scrollInfo:yt,classNames:c,styles:l,prefixCls:r,getComponent:ce,scrollbarSize:Et,direction:g,fixedInfoList:Bt,isSticky:We,componentWidth:be,fixHeader:Y,fixColumn:He,horizonScroll:X,tableLayout:$,rowClassName:o,expandedRowClassName:W.expandedRowClassName,expandIcon:G,expandableType:pe,expandRowByClick:W.expandRowByClick,expandedRowRender:W.expandedRowRender,forceRender:W.forceRender??!1,expandedRowOffset:W.expandedRowOffset,onTriggerExpand:ge,expandIconColumnIndex:W.expandIconColumnIndex,indentSize:W.indentSize,allColumnsFixedLeft:K.every(e=>e.fixed===`start`),emptyNode:Mt,columns:Se,flattenColumns:K,onColumnResize:mt,colWidths:Re,hoverStartRow:U,hoverEndRow:de,onHover:fe,rowExpandable:W.rowExpandable,onRow:M,getRowKey:le,expandedKeys:me,childrenColumnName:he,rowHoverable:V,measureRowRender:P}),[q,yt,c,l,r,ce,Et,g,Bt,We,be,Y,He,X,$,o,W.expandedRowClassName,G,pe,W.expandRowByClick,W.expandedRowRender,W.forceRender,W.expandedRowOffset,ge,W.expandIconColumnIndex,W.indentSize,Mt,Se,K,mt,Re,U,de,fe,W.rowExpandable,M,le,me,he,V,P]);return O.createElement(B.Provider,{value:Vt},zt)}),mt=(e=>R(pt,e))();mt.EXPAND_COLUMN=k,mt.INTERNAL_HOOKS=A,mt.Column=xe,mt.ColumnGroup=Se,mt.Summary=be;var ht=M(null),gt=M(null);function _t(){return _t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_t.apply(this,arguments)}function vt(e,t,n){return n[e+(t||1)]-(n[e]||0)}var yt=e=>{let{rowInfo:t,column:n,colIndex:r,indent:i,index:o,component:s,renderIndex:c,record:l,style:u,className:d,inverse:f,getHeight:p}=e,{render:m,dataIndex:h,className:g,width:_}=n,{columnsOffset:v}=N(gt,[`columnsOffset`]),{key:y,fixedInfo:b,appendCellNode:x,additionalCellProps:S,originRowSpan:C}=Oe(t,n,r,i,o),{style:w,colSpan:T=1,rowSpan:E=1}=S,D=vt(r-1,T,v),k=T>1?_-D:0,A={...w,...u,flex:`0 0 ${D}px`,width:`${D}px`,marginRight:k,pointerEvents:`auto`},j=O.useMemo(()=>f?E<=1:T===0||E===0||E>1,[E,T,f]);j?A.visibility=`hidden`:f&&(A.height=p?.(E));let M=j?()=>null:m,P={};return(E===0||T===0)&&(P.rowSpan=1,P.colSpan=1),O.createElement(fe,_t({className:a(g,d),ellipsis:n.ellipsis,align:n.align,scope:n.rowScope,component:s,prefixCls:t.prefixCls,key:y,record:l,index:o,renderIndex:c,dataIndex:h,render:M,shouldCellUpdate:n.shouldCellUpdate},b,{appendNode:x,originRowSpan:C,additionalProps:{...S,style:A,...P}}))};function bt(){return bt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bt.apply(this,arguments)}var xt=z(O.forwardRef((e,t)=>{let{data:n,index:r,className:i,rowKey:o,style:s,extra:c,getHeight:l,...u}=e,{record:d,indent:f,index:p}=n,{scrollX:m,flattenColumns:h,prefixCls:g,fixColumn:_,componentWidth:v,classNames:y,styles:b}=N(B,[`prefixCls`,`flattenColumns`,`fixColumn`,`componentWidth`,`scrollX`,`classNames`,`styles`]),{getComponent:x}=N(ht,[`getComponent`]),S=q(d,o,r,f),C=x([`body`,`row`],`div`),w=x([`body`,`cell`],`div`),{rowSupportExpand:T,expanded:E,rowProps:D,expandedRowRender:k,expandedRowClassName:A,forceRender:j}=S,M=J(A,d,r,f),P;if(!c&&T&&(j||E)){let e=k(d,r,f+1,E),t={};_&&(t={style:{"--virtual-width":`${v}px`}});let n=`${g}-expanded-row-cell`;P=O.createElement(C,{className:a(`${g}-expanded-row`,`${g}-expanded-row-level-${f+1}`,M),style:{display:E?void 0:`none`}},O.createElement(fe,{component:w,prefixCls:g,className:a(n,{[`${n}-fixed`]:_}),additionalProps:t},e))}let F={...s,width:m};c&&(F.position=`absolute`,F.pointerEvents=`none`);let I=O.createElement(C,bt({},D,u,{"data-row-key":o,ref:T?null:t,className:a(i,`${g}-row`,D?.className,y?.body?.row,{[M]:f>=1,[`${g}-row-extra`]:c}),style:{...F,...D?.style,...b?.body?.row}}),h.map((e,t)=>O.createElement(yt,{key:t,className:y?.body?.cell,style:b?.body?.cell,component:w,rowInfo:S,column:e,colIndex:t,indent:f,index:r,renderIndex:p,record:d,inverse:c,getHeight:l})));return T?O.createElement(`div`,{ref:t},I,P):I})),St={start:`top`,end:`bottom`,nearest:`auto`},Ct=z(O.forwardRef((e,t)=>{let{data:n,onScroll:r}=e,{flattenColumns:i,onColumnResize:a,getRowKey:o,expandedKeys:s,prefixCls:c,childrenColumnName:l,scrollX:u,direction:d}=N(B,[`flattenColumns`,`onColumnResize`,`getRowKey`,`prefixCls`,`expandedKeys`,`childrenColumnName`,`scrollX`,`direction`]),{sticky:f,scrollY:p,listItemHeight:m,getComponent:h,onScroll:g}=N(ht),_=O.useRef(null),v=Ce(n,l,s,o),y=O.useMemo(()=>{let e=0;return i.map(({width:t,minWidth:n,key:r})=>{let i=Math.max(t||0,n||0);return e+=i,[r,i,e]})},[i]),b=O.useMemo(()=>y.map(e=>e[2]),[y]);O.useEffect(()=>{y.forEach(([e,t])=>{a(e,t)})},[y]),O.useImperativeHandle(t,()=>{let e={scrollTo:e=>{let{align:t,offset:n,...r}=e,i=St[t]??(n?`top`:`auto`);_.current?.scrollTo({...r,offset:n,align:i})},nativeElement:_.current?.nativeElement};return Object.defineProperty(e,"scrollLeft",{get:()=>_.current?.getScrollInfo().x||0,set:e=>{_.current?.scrollTo({left:e})}}),Object.defineProperty(e,"scrollTop",{get:()=>_.current?.getScrollInfo().y||0,set:e=>{_.current?.scrollTo({top:e})}}),e});let x=(e,t)=>{let n=v[t]?.record,{onCell:r}=e;return r?r(n,t)?.rowSpan??1:1},S=e=>{let{start:t,end:n,getSize:r,offsetY:a}=e;if(n<0)return null;let s=i.filter(e=>x(e,t)===0),c=t;for(let e=t;e>=0;--e)if(s=s.filter(t=>x(t,e)===0),!s.length){c=e;break}let l=i.filter(e=>x(e,n)!==1),u=n;for(let e=n;e<v.length;e+=1)if(l=l.filter(t=>x(t,e)!==1),!l.length){u=Math.max(e-1,n);break}let d=[];for(let e=c;e<=u;e+=1)v[e]&&i.some(t=>x(t,e)>1)&&d.push(e);return d.map(e=>{let t=v[e],n=o(t.record,e),i=t=>{let i=e+t-1,a=v[i];if(!a||!a.record){let e=Math.min(i,v.length-1),t=v[e],a=o(t.record,e),s=r(n,a);return s.bottom-s.top}let s=o(a.record,i),c=r(n,s);return c.bottom-c.top},s=r(n);return O.createElement(xt,{key:e,data:t,rowKey:n,index:e,style:{top:-a+s.top},extra:!0,getHeight:i})})},C=O.useMemo(()=>({columnsOffset:b}),[b]),w=`${c}-tbody`,T=h([`body`,`wrapper`]),E={};return f&&(E.position=`sticky`,E.bottom=0,typeof f==`object`&&f.offsetScroll&&(E.bottom=f.offsetScroll)),O.createElement(gt.Provider,{value:C},O.createElement(D,{fullHeight:!1,ref:_,prefixCls:`${w}-virtual`,styles:{horizontalScrollBar:E},className:w,height:p,itemHeight:m||24,data:v,itemKey:e=>o(e.record),component:T,scrollWidth:u,direction:d,onVirtualScroll:({x:e})=>{r({currentTarget:_.current?.nativeElement,scrollLeft:e})},onScroll:g,extraRender:S},(e,t,n)=>{let r=o(e.record,t);return O.createElement(xt,{data:e,rowKey:r,index:t,style:n.style})}))}));function wt(){return wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wt.apply(this,arguments)}var Tt=(e,t)=>{let{ref:n,onScroll:r}=t;return O.createElement(Ct,{ref:n,data:e,onScroll:r})},Et=O.forwardRef((e,t)=>{let{data:n,columns:r,scroll:i,sticky:o,prefixCls:s=lt,className:c,listItemHeight:l,components:u,onScroll:d}=e,{x:p,y:m}=i||{};typeof p!=`number`&&(p=1),typeof m!=`number`&&(m=500);let h=f((e,t)=>ne(u,e)||t),g=f(d),_=O.useMemo(()=>({sticky:o,scrollY:m,listItemHeight:l,getComponent:h,onScroll:g}),[o,m,l,h,g]);return O.createElement(ht.Provider,{value:_},O.createElement(mt,wt({},e,{className:a(c,`${s}-virtual`),scroll:{...i,x:p},components:{...u,body:n?.length?Tt:void 0},columns:r,internalHooks:A,tailor:!0,ref:t})))});(e=>R(Et,e))();var Dt=mt,Q=n();function Ot(e,t,n){return e.map(e=>{let r=e.key||(typeof e.dataIndex==`string`?e.dataIndex:void 0),a={key:r,dataIndex:e.dataIndex,width:e.width,minWidth:e.minWidth,align:e.align,fixed:e.fixed,ellipsis:e.ellipsis,className:e.className,onCell:e.onCell,onHeaderCell:e.onHeaderCell,children:e.children?Ot(e.children,t,n):void 0};if(e.sorter&&r){let o=t?.columnKey===r?t.order:null;a.title=(0,Q.jsxs)(`span`,{className:`lg-table__header-cell-content lg-table__header-cell-content--sortable`,onClick:()=>{let e;e=o===null?`ascend`:o===`ascend`?`descend`:null,n(r,e)},children:[(0,Q.jsx)(`span`,{className:`lg-table__header-text`,children:e.title}),(0,Q.jsxs)(`span`,{className:`lg-table__sorter`,children:[(0,Q.jsx)(`span`,{className:i(`lg-table__sorter-icon lg-table__sorter-icon--asc`,o===`ascend`&&`lg-table__sorter-icon--active`)}),(0,Q.jsx)(`span`,{className:i(`lg-table__sorter-icon lg-table__sorter-icon--desc`,o===`descend`&&`lg-table__sorter-icon--active`)})]})]})}else a.title=e.title;return e.render&&(a.render=e.render),a})}function kt({columns:e=[],dataSource:t=[],rowKey:n=`key`,size:r=`default`,bordered:a=!1,loading:l=!1,scroll:f,rowSelection:p,onSortChange:m,loadError:h=!1,onRetry:g,statusText:_,onRow:v,empty:y,errorContent:b,title:x,footer:S,showHeader:C=!0,className:w,style:T,striped:E=!1,hoverable:D=!0},k){let A=o(`Table`),[j,M]=(0,O.useState)(null),N=(0,O.useCallback)((e,t)=>{let n={columnKey:e,order:t};M(t?n:null),m?.(n)},[m]),P=(0,O.useMemo)(()=>new Set(p?.selectedRowKeys||[]),[p?.selectedRowKeys]),F=(0,O.useCallback)((e,t)=>typeof n==`function`?n(e,t):e[n],[n]),I=(0,O.useMemo)(()=>t.map((e,t)=>F(e,t)),[t,F]),ee=I.length>0&&I.every(e=>P.has(e)),L=!ee&&I.some(e=>P.has(e)),R=(0,O.useCallback)(e=>{p?.onChange&&(e?p.onChange(I,t):p.onChange([],[]))},[I,t,p]),z=(0,O.useCallback)((e,n,r)=>{if(!p?.onChange)return;let i;i=r?[...P,n]:[...P].filter(e=>e!==n);let a=t.filter((e,t)=>i.includes(F(e,t)));p.onChange(i,a)},[P,t,F,p]),te=(0,O.useMemo)(()=>{let t=Ot(e,j,N);return p?[{key:`__selection__`,width:48,fixed:`left`,className:`lg-table__selection-col`,title:(0,Q.jsx)(`div`,{className:`lg-table__selection-wrapper`,children:(0,Q.jsx)(u,{checked:ee,indeterminate:L,onChange:e=>R(e)})}),render:(e,t,n)=>{let r=F(t,n),i=p.getCheckboxProps?.(t)||{};return(0,Q.jsx)(`div`,{className:`lg-table__selection-wrapper`,children:(0,Q.jsx)(u,{checked:P.has(r),disabled:i.disabled,onChange:e=>z(t,r,e)})})}},...t]:t},[e,j,N,p,ee,L,R,P,F,z]),B=(0,O.useMemo)(()=>{if(!j?.order)return t;let n=e.find(e=>(e.key||(typeof e.dataIndex==`string`?e.dataIndex:void 0))===j.columnKey);if(!n?.sorter||typeof n.sorter!=`function`)return t;let r=[...t].sort(n.sorter);return j.order===`descend`?r.reverse():r},[t,j,e]),ne=(0,O.useCallback)((e,t)=>{let n=v?.(e,t)||{},r=F(e,t);return{...n,className:i(n.className,P.has(r)&&`lg-table__row--selected`,E&&t%2==1&&`lg-table__row--striped`)}},[v,F,P,E]),V=l?`loading`:h?`error`:`empty`,H=h?[]:B,re=(0,O.useMemo)(()=>{if(V===`error`&&b)return b;if(V===`empty`&&y)return y;let e={loading:A.loading,empty:A.empty,error:A.loadError};return(0,Q.jsx)(s.Card,{size:`md`,status:V,spacing:`none`,description:_?.[V]??e[V],onRetry:V===`error`?g:void 0})},[V,y,b,_,g,A]),ie=(0,O.useRef)(null),[ae,oe]=(0,O.useState)(0),se=H.length===0;(0,O.useEffect)(()=>{let e=ie.current;if(!e||!se)return;let t=()=>oe(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[se]);let ce=(0,O.useMemo)(()=>(0,Q.jsx)(`div`,{className:`lg-table__placeholder-inner`,style:ae?{width:ae}:void 0,children:re}),[re,ae]),le=l&&H.length>0,ue=f?.y!=null,U=f?.x!=null,de=(0,O.useMemo)(()=>{if(!ue&&!U)return;let e={};return ue&&(e.maxHeight=f.y),e},[ue,U,f]),fe=(0,O.useMemo)(()=>{if(!U)return;let e=f.x;return{"--_table-min-width":typeof e==`number`?`max(${e}px, 100%)`:e}},[U,f]);return(0,Q.jsxs)(`div`,{ref:k,className:i(`lg-table`,`lg-table--${r}`,a&&`lg-table--bordered`,D&&`lg-table--hoverable`,l&&`lg-table--loading`,h&&`lg-table--error`,ue&&`lg-table--sticky-header`,w),style:T,children:[x&&(0,Q.jsx)(`div`,{className:`lg-table__title`,children:typeof x==`function`?x():x}),(0,Q.jsxs)(`div`,{className:`lg-table__container`,children:[le&&(0,Q.jsx)(`div`,{className:`lg-table__loading-mask`,children:(0,Q.jsx)(d,{size:`md`})}),ue||U?(0,Q.jsx)(c,{className:`lg-table__scroll-area`,style:{...de,...fe},type:`hover`,scrollbars:ue&&U?`both`:ue?`vertical`:`horizontal`,viewportRef:ie,children:(0,Q.jsx)(Dt,{columns:te,data:H,rowKey:n,showHeader:C,onRow:ne,prefixCls:`lg-table`,emptyText:ce})}):(0,Q.jsx)(`div`,{className:`lg-table__scroll`,ref:ie,children:(0,Q.jsx)(Dt,{columns:te,data:H,rowKey:n,showHeader:C,onRow:ne,prefixCls:`lg-table`,emptyText:ce})})]}),S&&(0,Q.jsx)(`div`,{className:`lg-table__footer`,children:typeof S==`function`?S():S})]})}var $=O.forwardRef(kt);$.displayName=`Table`;var At=[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`},{title:`Department`,dataIndex:`department`,key:`department`}],jt=[{key:`1`,name:`Alice Chen`,age:28,department:`Engineering`},{key:`2`,name:`Bob Liu`,age:32,department:`Product`},{key:`3`,name:`Carol Wang`,age:25,department:`Design`}];function Mt(){return(0,Q.jsx)($,{columns:At,dataSource:jt})}var Nt=`import { Table } from "lingee-ui";

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
`,Pt=[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`},{title:`Department`,dataIndex:`department`,key:`department`}],Ft=[{key:`1`,name:`Alice Chen`,age:28,department:`Engineering`},{key:`2`,name:`Bob Liu`,age:32,department:`Product`},{key:`3`,name:`Carol Wang`,age:25,department:`Design`},{key:`4`,name:`David Zhao`,age:30,department:`Operations`}];function It(){let[e,t]=(0,O.useState)([]);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`p`,{style:{marginBottom:12,color:`var(--lg-g-fg-color-black-muted)`},children:[`Selected `,e.length,` item(s)`]}),(0,Q.jsx)($,{columns:Pt,dataSource:Ft,rowSelection:{selectedRowKeys:e,onChange:e=>t(e)}})]})}var Lt=`import { useState } from "react";
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
`,Rt=[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`},{title:`Department`,dataIndex:`department`,key:`department`}],zt=[{key:`1`,name:`Alice Chen`,age:28,department:`Engineering`},{key:`2`,name:`Bob Liu`,age:32,department:`Product`},{key:`3`,name:`Carol Wang`,age:25,department:`Design`}];function Bt(){let[e,t]=(0,O.useState)(`loading`);return(0,Q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,Q.jsx)(l,{onClick:()=>t(`loading`),children:`首次加载`}),(0,Q.jsx)(l,{onClick:()=>t(`empty`),children:`空数据`}),(0,Q.jsx)(l,{onClick:()=>t(`error`),children:`加载失败`}),(0,Q.jsx)(l,{onClick:()=>t(`data`),children:`有数据`}),(0,Q.jsx)(l,{onClick:()=>t(`refreshing`),children:`已有数据刷新`})]}),(0,Q.jsx)($,{columns:Rt,dataSource:e===`data`||e===`refreshing`?zt:[],loading:e===`loading`||e===`refreshing`,loadError:e===`error`,onRetry:()=>{t(`loading`),setTimeout(()=>t(`data`),800)}})]})}var Vt=`import { useState } from "react";
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
`,Ht=[{title:`Name`,dataIndex:`name`,key:`name`,width:120},{title:`Age`,dataIndex:`age`,key:`age`,width:80},{title:`Department`,dataIndex:`department`,key:`department`,width:120},{title:`Position`,dataIndex:`position`,key:`position`,width:150},{title:`City`,dataIndex:`city`,key:`city`,width:100}],Ut=Array.from({length:50},(e,t)=>({key:String(t+1),name:`Employee ${t+1}`,age:22+t%20,department:[`Engineering`,`Product`,`Design`,`Marketing`,`Operations`][t%5],position:[`Engineer`,`Product Manager`,`Designer`,`Ops Specialist`,`Marketing Lead`][t%5],city:[`Shenzhen`,`Beijing`,`Shanghai`,`Guangzhou`,`Hangzhou`][t%5]}));function Wt(){return(0,Q.jsx)($,{columns:Ht,dataSource:Ut,rowKey:`key`,scroll:{y:400}})}var Gt=`/**
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
`,Kt=[{title:`Name`,dataIndex:`name`,key:`name`,width:120},{title:`Age`,dataIndex:`age`,key:`age`,width:80},{title:`Department`,dataIndex:`department`,key:`department`,width:120},{title:`Position`,dataIndex:`position`,key:`position`,width:150},{title:`City`,dataIndex:`city`,key:`city`,width:100},{title:`Phone`,dataIndex:`phone`,key:`phone`,width:150},{title:`Email`,dataIndex:`email`,key:`email`,width:220},{title:`Join Date`,dataIndex:`joinDate`,key:`joinDate`,width:130},{title:`Salary`,dataIndex:`salary`,key:`salary`,width:120}],qt=Array.from({length:6},(e,t)=>({key:String(t+1),name:`Employee ${t+1}`,age:22+t%15,department:[`Engineering`,`Product`,`Design`,`Marketing`,`Operations`,`Finance`][t%6],position:[`Engineer`,`Product Manager`,`Designer`,`Ops Lead`,`Marketing Lead`,`Accountant`][t%6],city:[`Shenzhen`,`Beijing`,`Shanghai`,`Guangzhou`,`Hangzhou`,`Chengdu`][t%6],phone:`138${String(1e7+t).slice(0,8)}`,email:`employee${t+1}@company.com`,joinDate:`2024-${String(t%12+1).padStart(2,`0`)}-15`,salary:`${15+t*2}K`}));function Jt(){return(0,Q.jsx)($,{columns:Kt,dataSource:qt,rowKey:`key`,scroll:{x:1200}})}var Yt=`/**
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
`,Xt=[{title:`Name`,dataIndex:`name`,key:`name`,width:120},{title:`Age`,dataIndex:`age`,key:`age`,width:80},{title:`Department`,dataIndex:`department`,key:`department`,width:120},{title:`Position`,dataIndex:`position`,key:`position`,width:150},{title:`City`,dataIndex:`city`,key:`city`,width:100},{title:`Phone`,dataIndex:`phone`,key:`phone`,width:150},{title:`Email`,dataIndex:`email`,key:`email`,width:220},{title:`Join Date`,dataIndex:`joinDate`,key:`joinDate`,width:130},{title:`Salary`,dataIndex:`salary`,key:`salary`,width:120},{title:`Status`,dataIndex:`status`,key:`status`,width:100}],Zt=Array.from({length:30},(e,t)=>({key:String(t+1),name:`Employee ${t+1}`,age:22+t%20,department:[`Engineering`,`Product`,`Design`,`Marketing`,`Operations`][t%5],position:[`Engineer`,`Product Manager`,`Designer`,`Ops Specialist`,`Marketing Lead`][t%5],city:[`Shenzhen`,`Beijing`,`Shanghai`,`Guangzhou`,`Hangzhou`][t%5],phone:`138${String(1e7+t).slice(0,8)}`,email:`employee${t+1}@company.com`,joinDate:`2024-${String(t%12+1).padStart(2,`0`)}-${String(t%28+1).padStart(2,`0`)}`,salary:`${15+t}K`,status:t%3==0?`Active`:t%3==1?`Probation`:`Confirmed`}));function Qt(){return(0,Q.jsx)($,{columns:Xt,dataSource:Zt,rowKey:`key`,scroll:{x:1400,y:350}})}var $t=`/**
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
`,en=[{title:`Name`,dataIndex:`name`,key:`name`,width:120,fixed:`left`},{title:`Age`,dataIndex:`age`,key:`age`,width:80},{title:`Department`,dataIndex:`department`,key:`department`,width:150},{title:`Position`,dataIndex:`position`,key:`position`,width:180},{title:`City`,dataIndex:`city`,key:`city`,width:120},{title:`Phone`,dataIndex:`phone`,key:`phone`,width:160},{title:`Email`,dataIndex:`email`,key:`email`,width:240},{title:`Action`,key:`action`,width:100,fixed:`right`,render:()=>(0,Q.jsx)(`a`,{style:{color:`var(--lg-g-fg-color-primary-default)`},children:`Edit`})}],tn=Array.from({length:20},(e,t)=>({key:String(t+1),name:`Employee ${t+1}`,age:22+t%18,department:[`Engineering`,`Product`,`Design`,`Marketing`][t%4],position:[`Frontend Engineer`,`Backend Engineer`,`Product Manager`,`UI Designer`][t%4],city:[`Shenzhen`,`Beijing`,`Shanghai`,`Guangzhou`][t%4],phone:`138${String(1e7+t).slice(0,8)}`,email:`user${t+1}@example.com`,action:`Edit`}));function nn(){return(0,Q.jsx)($,{columns:en,dataSource:tn,rowKey:`key`,scroll:{x:1200,y:350}})}var rn=`/**
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
`;export{Yt as a,Wt as c,Lt as d,It as f,Qt as i,Vt as l,Mt as m,nn as n,Jt as o,Nt as p,$t as r,Gt as s,rn as t,Bt as u};