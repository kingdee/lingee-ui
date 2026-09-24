import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./react-dom-Ccy8f0CG.js";import{T as i,k as a}from"./tooltip-provider-DeqArBrK.js";import{n as o}from"./provider-B_HaNAF1.js";import{n as s}from"./tooltip-D5ypfcq7.js";import{t as c}from"./button-BA4Y5u4W.js";import{t as l}from"./empty-BfxLPkYp.js";import{t as u}from"./checkbox-Cy3sYoRq.js";import{t as d}from"./spin-D037XVYy.js";import{_ as f,d as p,g as m,i as h,l as g,m as _,n as v,p as y,s as b,t as x,v as S}from"./es-BWb1rPz1.js";import{n as C,t as w}from"./getScrollBarSize-DJfnFx1x.js";import{n as T,t as E}from"./es-Cdxwx0rC.js";var D=e(t()),O={},k=`rc-table-internal-hook`,A=e(r());function j(e){let t=D.createContext(void 0);return{Context:t,Provider:({value:e,children:n})=>{let r=D.useRef(e);r.current=e;let[i]=D.useState(()=>({getValue:()=>r.current,listeners:new Set}));return m(()=>{(0,A.unstable_batchedUpdates)(()=>{i.listeners.forEach(t=>{t(e)})})},[e]),D.createElement(t.Provider,{value:i},n)},defaultValue:e}}function M(e,t){let n=S(typeof t==`function`?t:e=>{if(t===void 0)return e;if(!Array.isArray(t))return e[t];let n={};return t.forEach(t=>{n[t]=e[t]}),n}),r=D.useContext(e?.Context),{listeners:i,getValue:a}=r||{},o=D.useRef();o.current=n(r?a():e?.defaultValue);let[,s]=D.useState({});return m(()=>{if(!r)return;function e(e){let t=n(e);_(o.current,t,!0)||s({})}return i.add(e),()=>{i.delete(e)}},[r]),o.current}function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function P(){let e=D.createContext(null);function t(){return D.useContext(e)}function n(n,r){let i=p(n),a=(a,o)=>{let s=i?{ref:o}:{},c=D.useRef(0),l=D.useRef(a);return t()===null?((!r||r(l.current,a))&&(c.current+=1),l.current=a,D.createElement(e.Provider,{value:c.current},D.createElement(n,N({},a,s)))):D.createElement(n,N({},a,s))};return i?D.forwardRef(a):a}function r(e,n){let r=p(e),i=(n,i)=>{let a=r?{ref:i}:{};return t(),D.createElement(e,N({},n,a))};return D.memo(r?D.forwardRef(i):i,n)}return{makeImmutable:n,responseImmutable:r,useImmutableMark:t}}var{makeImmutable:F,responseImmutable:ee,useImmutableMark:te}=P(),{makeImmutable:I,responseImmutable:L,useImmutableMark:ne}=P(),R=j();function z(e){return e instanceof HTMLElement||e instanceof SVGElement}function re(e){return e&&typeof e==`object`&&z(e.nativeElement)?e.nativeElement:z(e)?e:null}function B(e,t){let n=e;for(let e=0;e<t.length;e+=1){if(n==null)return;n=n[t[e]]}return n}var V=D.createContext({renderWithProps:!1}),ie=`RC_TABLE_KEY`;function H(e){return e==null?[]:Array.isArray(e)?e:[e]}function ae(e){let t=[],n={};return e.forEach(e=>{let{key:r,dataIndex:i}=e||{},a=r||H(i).join(`-`)||ie;for(;n[a];)a=`${a}_next`;n[a]=!0,t.push(a)}),t}function oe(e){return e!=null}function se(e){return typeof e==`number`&&!Number.isNaN(e)}function ce(e){return e&&typeof e==`object`&&!Array.isArray(e)&&!D.isValidElement(e)}function le(e,t,n,r,i,a){let o=D.useContext(V),s=ne();return y(()=>{if(oe(r))return[r];let a=B(e,t==null||t===``?[]:Array.isArray(t)?t:[t]),s=a,c;if(i){let t=i(a,e,n);ce(t)?(s=t.children,c=t.props,o.renderWithProps=!0):s=t}return[s,c]},[s,e,r,t,i,n],(e,t)=>{if(a){let[,n]=e,[,r]=t;return a(r,n)}return o.renderWithProps?!0:!_(e,t,!0)})}function U(e,t,n,r){let i=e+t-1;return e<=r&&i>=n}function ue(e,t){return M(R,n=>[U(e,t||1,n.hoverStartRow,n.hoverEndRow),n.onHover])}function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}var fe=({ellipsis:e,rowType:t,children:n})=>{let r,i=e===!0?{showTitle:!0}:e;return i&&(i.showTitle||t===`header`)&&(typeof n==`string`||typeof n==`number`?r=n.toString():D.isValidElement(n)&&typeof n.props?.children==`string`&&(r=n.props?.children)),r},W=D.memo(e=>{let{component:t,children:n,ellipsis:r,scope:i,prefixCls:o,className:s,style:c,align:l,record:u,render:d,dataIndex:f,renderIndex:p,shouldCellUpdate:m,index:h,rowType:g,colSpan:_,rowSpan:v,fixStart:y,fixEnd:b,fixedStartShadow:x,fixedEndShadow:C,offsetFixedStartShadow:w,offsetFixedEndShadow:T,zIndex:E,zIndexReverse:O,appendNode:k,additionalProps:A={},originRowSpan:j,isSticky:N}=e,P=`${o}-cell`,{allColumnsFixedLeft:F,rowHoverable:ee}=M(R,[`allColumnsFixedLeft`,`rowHoverable`]),[te,I]=le(u,f,p,n,d,m),L={},ne=typeof y==`number`&&!F,z=typeof b==`number`&&!F,[re,B]=M(R,({scrollInfo:e})=>{if(!ne&&!z)return[!1,!1];let[t,n]=e;return[(ne&&x&&t)-w>=1,(z&&C&&n-t)-T>1]});ne&&(L.insetInlineStart=y,L[`--z-offset`]=E,L[`--z-offset-reverse`]=O),z&&(L.insetInlineEnd=b,L[`--z-offset`]=E,L[`--z-offset-reverse`]=O);let V=I?.colSpan??A.colSpan??_??1,ie=I?.rowSpan??A.rowSpan??v??1,H=I?.rowSpan??j??ie,[ae,oe]=ue(h,H),se=S(e=>{u&&oe(h,h+H-1),A?.onMouseEnter?.(e)}),ce=S(e=>{u&&oe(-1,-1),A?.onMouseLeave?.(e)});if(V===0||ie===0)return null;let U=A.title??fe({rowType:g,ellipsis:r,children:te}),W=a(P,s,{[`${P}-fix`]:ne||z,[`${P}-fix-start`]:ne,[`${P}-fix-end`]:z,[`${P}-fix-start-shadow`]:x,[`${P}-fix-start-shadow-show`]:x&&re,[`${P}-fix-end-shadow`]:C,[`${P}-fix-end-shadow-show`]:C&&B,[`${P}-ellipsis`]:r,[`${P}-with-append`]:k,[`${P}-fix-sticky`]:(ne||z)&&N,[`${P}-row-hover`]:!I&&ae},A.className,I?.className),pe={};l&&(pe.textAlign=l);let me={...I?.style,...L,...pe,...A.style,...c},G=te;return typeof G==`object`&&!Array.isArray(G)&&!D.isValidElement(G)&&(G=null),r&&(x||C)&&(G=D.createElement(`span`,{className:`${P}-content`},G)),D.createElement(t,de({},I,A,{className:W,style:me,title:U,scope:i,onMouseEnter:ee?se:void 0,onMouseLeave:ee?ce:void 0,colSpan:V===1?null:V,rowSpan:ie===1?null:ie}),k,G)});function pe(e){return e.fixed===`start`}function me(e){return e.fixed===`end`}function G(e,t,n,r){let i=n[e]||{},a=n[t]||{},o=null,s=null;pe(i)&&pe(a)?o=r.start[e]:me(a)&&me(i)&&(s=r.end[t]);let c=!1,l=!1,u=0,d=0;o!==null&&(c=!n[t+1]||!pe(n[t+1]),u=n.length*2-e,d=n.length+e),s!==null&&(l=!n[e-1]||!me(n[e-1]),u=t,d=n.length-t);let f=0,p=0;if(c)for(let t=0;t<e;t+=1)pe(n[t])||(f+=r.widths[t]||0);if(l)for(let e=n.length-1;e>t;--e)me(n[e])||(p+=r.widths[e]||0);return{fixStart:o,fixEnd:s,fixedStartShadow:c,fixedEndShadow:l,offsetFixedStartShadow:f,offsetFixedEndShadow:p,isSticky:r.isSticky,zIndex:u,zIndexReverse:d}}var he=D.createContext({});function ge(){return ge=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ge.apply(this,arguments)}var _e=e=>{let{className:t,index:n,children:r,colSpan:i=1,rowSpan:a,align:o}=e,{prefixCls:s}=M(R,[`prefixCls`]),{scrollColumnIndex:c,stickyOffsets:l,flattenColumns:u}=D.useContext(he),d=n+i-1+1===c?i+1:i,f=D.useMemo(()=>G(n,n+d-1,u,l),[n,d,u,l]);return D.createElement(W,ge({className:t,index:n,component:`td`,prefixCls:s,record:null,dataIndex:null,align:o,colSpan:d,rowSpan:a,render:()=>r},f))},ve=e=>{let{children:t,...n}=e;return D.createElement(`tr`,n,t)},ye=e=>{let{children:t}=e;return t};ye.Row=ve,ye.Cell=_e;var be=L(e=>{let{children:t,stickyOffsets:n,flattenColumns:r}=e,i=M(R,`prefixCls`),a=r.length-1,o=r[a],s=D.useMemo(()=>({stickyOffsets:n,flattenColumns:r,scrollColumnIndex:o?.scrollbar?a:null}),[o,r,a,n]);return D.createElement(he.Provider,{value:s},D.createElement(`tfoot`,{className:`${i}-summary`},t))}),xe=ye;function Se(e){return null}function K(e){return null}function Ce(e,t,n,r,i,a,o){let s=a(t,o);e.push({record:t,indent:n,index:o,rowKey:s});let c=i?.has(s);if(t&&Array.isArray(t[r])&&c)for(let o=0;o<t[r].length;o+=1)Ce(e,t[r][o],n+1,r,i,a,o)}function q(e,t,n,r){return D.useMemo(()=>{if(n?.size){let i=[];for(let a=0;a<e?.length;a+=1){let o=e[a];Ce(i,o,0,t,n,r,a)}return i}return e?.map((e,t)=>({record:e,indent:0,index:t,rowKey:r(e,t)}))},[e,t,n,r])}function we(e,t,n,r){let i=M(R,[`prefixCls`,`fixedInfoList`,`flattenColumns`,`expandableType`,`expandRowByClick`,`onTriggerExpand`,`rowClassName`,`expandedRowClassName`,`indentSize`,`expandIcon`,`expandedRowRender`,`forceRender`,`expandIconColumnIndex`,`expandedKeys`,`childrenColumnName`,`rowExpandable`,`onRow`]),{flattenColumns:o,expandableType:s,expandedKeys:c,childrenColumnName:l,onTriggerExpand:u,rowExpandable:d,onRow:f,expandRowByClick:p,rowClassName:m}=i,h=s===`nest`,g=s===`row`&&(!d||d(e)),_=g||h,v=c&&c.has(t),y=l&&e&&e[l],b=S(u),x=f?.(e,n),C=x?.onClick,w=(t,...n)=>{p&&_&&u(e,t),C?.(t,...n)},T;typeof m==`string`?T=m:typeof m==`function`&&(T=m(e,n,r));let E=ae(o);return{...i,columnsKey:E,nestExpandable:h,expanded:v,hasNestChildren:y,record:e,onTriggerExpand:b,rowSupportExpand:g,expandable:_,rowProps:{...x,className:a(T,x?.className),onClick:w}}}var Te=e=>{let{prefixCls:t,children:n,component:r,cellComponent:i,className:a,expanded:o,colSpan:s,isEmpty:c,stickyOffset:l=0}=e,{scrollbarSize:u,fixHeader:d,fixColumn:f,componentWidth:p,horizonScroll:m}=M(R,[`scrollbarSize`,`fixHeader`,`fixColumn`,`componentWidth`,`horizonScroll`]),h=n;return(c?m&&p:f)&&(h=D.createElement(`div`,{style:{width:p-l-(d&&!c?u:0),position:`sticky`,left:l,overflow:`hidden`},className:`${t}-expanded-row-fixed`},h)),D.createElement(r,{className:a,style:{display:o?null:`none`}},D.createElement(W,{component:i,prefixCls:t,colSpan:s},h))};function Ee({prefixCls:e,record:t,onExpand:n,expanded:r,expandable:i}){let o=`${e}-row-expand-icon`;if(!i)return D.createElement(`span`,{className:a(o,`${e}-row-spaced`)});let s=e=>{n(t,e),e.stopPropagation()};return D.createElement(`span`,{className:a(o,{[`${e}-row-expanded`]:r,[`${e}-row-collapsed`]:!r}),onClick:s})}function J(e,t,n){let r=[];function i(e){(e||[]).forEach((e,a)=>{r.push(t(e,a)),i(e[n])})}return i(e),r}function De(e,t,n,r){return typeof e==`string`?e:typeof e==`function`?e(t,n,r):``}function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oe.apply(this,arguments)}function ke(e,t,n,r,i,a=[],o=0){let{record:s,prefixCls:c,columnsKey:l,fixedInfoList:u,expandIconColumnIndex:d,nestExpandable:f,indentSize:p,expandIcon:m,expanded:h,hasNestChildren:g,onTriggerExpand:_,expandable:v,expandedKeys:y}=e,b=l[n],x=u[n],S;n===(d||0)&&f&&(S=D.createElement(D.Fragment,null,D.createElement(`span`,{style:{paddingLeft:`${p*r}px`},className:`${c}-row-indent indent-level-${r}`}),m({prefixCls:c,expanded:h,expandable:g,record:s,onExpand:_})));let C={...t.onCell?.(s,i)},w;if(o){let{rowSpan:e=1}=C;if(v&&e&&n<o){w=e;let t=e;for(let n=i;n<i+e;n+=1){let e=a[n];y.has(e)&&(t+=1)}C.rowSpan=t}}return{key:b,fixedInfo:x,appendCellNode:S,additionalCellProps:C,originRowSpan:w}}var Ae=L(e=>{let{className:t,style:n,classNames:r,styles:i,record:o,index:s,renderIndex:c,rowKey:l,rowKeys:u,indent:d=0,rowComponent:f,cellComponent:p,scopeCellComponent:m,expandedRowInfo:h}=e,g=we(o,l,s,d),{prefixCls:_,flattenColumns:v,expandedRowClassName:y,expandedRowRender:b,forceRender:x,rowProps:S,expanded:C,rowSupportExpand:w}=g,T=D.useRef(!1);T.current||=C;let E=De(y,o,s,d),O=D.createElement(f,Oe({},S,{"data-row-key":l,className:a(t,`${_}-row`,`${_}-row-level-${d}`,S?.className,r.row,{[E]:d>=1}),style:{...n,...S?.style,...i.row}}),v.map((e,t)=>{let{render:n,dataIndex:l,className:f}=e,{key:v,fixedInfo:y,appendCellNode:b,additionalCellProps:x,originRowSpan:S}=ke(g,e,t,d,s,u,h?.offset);return D.createElement(W,Oe({className:a(f,r.cell),style:i.cell,ellipsis:e.ellipsis,align:e.align,scope:e.rowScope,component:e.rowScope?m:p,prefixCls:_,key:v,record:o,index:s,renderIndex:c,dataIndex:l,render:n,shouldCellUpdate:e.shouldCellUpdate},y,{appendNode:b,additionalProps:x,originRowSpan:S}))})),k;if(w&&(x||T.current||C)){let e=b(o,s,d+1,C);k=D.createElement(Te,{expanded:C,className:a(`${_}-expanded-row`,`${_}-expanded-row-level-${d+1}`,E),prefixCls:_,component:f,cellComponent:p,colSpan:h?h.colSpan:v.length,isEmpty:!1,stickyOffset:h?.sticky},e)}return D.createElement(D.Fragment,null,O,k)}),je=e=>{let{columnKey:t,onColumnResize:n,title:r}=e,i=D.useRef(null);return m(()=>{i.current&&n(t,i.current.offsetWidth)},[]),D.createElement(T,{data:t},D.createElement(`td`,{ref:i,style:{paddingTop:0,paddingBottom:0,borderTop:0,borderBottom:0,height:0}},D.createElement(`div`,{style:{height:0,overflow:`hidden`,fontWeight:`bold`}},r||`\xA0`)))},Me=({prefixCls:e,columnsKey:t,onColumnResize:n,columns:r})=>{let i=D.useRef(null),{measureRowRender:a}=M(R,[`measureRowRender`]),o=D.createElement(`tr`,{"aria-hidden":`true`,className:`${e}-measure-row`,style:{height:0},ref:i},D.createElement(T.Collection,{onBatchResize:e=>{h(i.current)&&e.forEach(({data:e,size:t})=>{n(e,t.offsetWidth)})}},t.map(e=>{let t=r.find(t=>t.key===e)?.title,i=D.isValidElement(t)?D.cloneElement(t,{ref:null}):t;return D.createElement(je,{key:e,columnKey:e,onColumnResize:n,title:i})})));return typeof a==`function`?a(o):o},Ne=L(e=>{let{data:t,measureColumnWidth:n}=e,{prefixCls:r,getComponent:i,onColumnResize:o,flattenColumns:s,getRowKey:c,expandedKeys:l,childrenColumnName:u,emptyNode:d,classNames:f,styles:p,expandedRowOffset:m=0,colWidths:h}=M(R,[`prefixCls`,`getComponent`,`onColumnResize`,`flattenColumns`,`getRowKey`,`expandedKeys`,`childrenColumnName`,`emptyNode`,`classNames`,`styles`,`expandedRowOffset`,`fixedInfoList`,`colWidths`]),{body:g={}}=f||{},{body:_={}}=p||{},v=q(t,u,l,c),y=D.useMemo(()=>v.map(e=>e.rowKey),[v]),b=D.useRef({renderWithProps:!1}),x=D.useMemo(()=>{let e=s.length-m,t=0;for(let e=0;e<m;e+=1)t+=h[e]||0;return{offset:m,colSpan:e,sticky:t}},[s.length,m,h]),S=i([`body`,`wrapper`],`tbody`),C=i([`body`,`row`],`tr`),w=i([`body`,`cell`],`td`),T=i([`body`,`cell`],`th`),E;E=t.length?v.map((e,t)=>{let{record:n,indent:r,index:i,rowKey:a}=e;return D.createElement(Ae,{classNames:g,styles:_,key:a,rowKey:a,rowKeys:y,record:n,index:t,renderIndex:i,rowComponent:C,cellComponent:w,scopeCellComponent:T,indent:r,expandedRowInfo:x})}):D.createElement(Te,{expanded:!0,className:`${r}-placeholder`,prefixCls:r,component:C,cellComponent:w,colSpan:s.length,isEmpty:!0},d);let O=ae(s);return D.createElement(V.Provider,{value:b.current},D.createElement(S,{style:_.wrapper,className:a(`${r}-tbody`,g.wrapper)},n&&D.createElement(Me,{prefixCls:r,columnsKey:O,onColumnResize:o,columns:s}),E))}),Pe=`RC_TABLE_INTERNAL_COL_DEFINE`;function Fe(e){let{expandable:t,...n}=e,r;return r=`expandable`in e?{...n,...t}:n,r.showExpandColumn===!1&&(r.expandIconColumnIndex=-1),r}function Ie(){return Ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ie.apply(this,arguments)}var Le=e=>{let{colWidths:t,columns:n,columCount:r}=e,{tableLayout:i}=M(R,[`tableLayout`]),a=[],o=r||n.length,s=!1;for(let e=o-1;e>=0;--e){let r=t[e],o=n&&n[e],c,l;if(o&&(c=o[Pe],i===`auto`&&(l=o.minWidth)),r||l||c||s){let{columnType:t,...n}=c||{};a.unshift(D.createElement(`col`,Ie({key:e,style:{width:r,minWidth:l}},n))),s=!0}}return a.length>0?D.createElement(`colgroup`,null,a):null};function Re(e,t){return(0,D.useMemo)(()=>{let n=[];for(let r=0;r<t;r+=1){let t=e[r];if(t!==void 0)n[r]=t;else return null}return n},[e.join(`_`),t])}var ze=D.forwardRef((e,t)=>{let{className:n,style:r,noData:i,columns:o,flattenColumns:s,colWidths:c,colGroup:l,columCount:u,stickyOffsets:d,direction:f,fixHeader:p,stickyTopOffset:m,stickyBottomOffset:h,stickyClassName:_,scrollX:v,tableLayout:y=`fixed`,onScroll:b,maxContentScroll:x,children:S,...C}=e,{prefixCls:w,scrollbarSize:T,isSticky:E,getComponent:O}=M(R,[`prefixCls`,`scrollbarSize`,`isSticky`,`getComponent`]),k=O([`header`,`table`],`table`),A=E&&!p?0:T,j=D.useRef(null),N=D.useCallback(e=>{g(t,e),g(j,e)},[]);D.useEffect(()=>{function e(e){let{currentTarget:t,deltaX:n}=e;if(n){let{scrollLeft:r,scrollWidth:i,clientWidth:a}=t,o=i-a,s=r+n;f===`rtl`?(s=Math.max(-o,s),s=Math.min(0,s)):(s=Math.min(o,s),s=Math.max(0,s)),b({currentTarget:t,scrollLeft:s}),e.preventDefault()}}let t=j.current;return t?.addEventListener(`wheel`,e,{passive:!1}),()=>{t?.removeEventListener(`wheel`,e)}},[]);let P=s[s.length-1],F={fixed:P?P.fixed:null,scrollbar:!0,onHeaderCell:()=>({className:`${w}-cell-scrollbar`})},ee=(0,D.useMemo)(()=>A?[...o,F]:o,[A,o]),te=(0,D.useMemo)(()=>A?[...s,F]:s,[A,s]),I=(0,D.useMemo)(()=>{let{start:e,end:t}=d;return{...d,start:e,end:[...t.map(e=>e+A),0],isSticky:E}},[A,d,E]),L=Re(c,u),ne=(0,D.useMemo)(()=>{let e=!L||!L.length||L.every(e=>!e);return i||e},[i,L]);return D.createElement(`div`,{style:{overflow:`hidden`,...E?{top:m,bottom:h}:{},...r},ref:N,className:a(n,{[_]:!!_})},D.createElement(k,{style:{tableLayout:y,minWidth:`100%`,width:v}},ne?l:D.createElement(Le,{colWidths:[...L,A],columCount:u+1,columns:te}),S({...C,stickyOffsets:I,columns:ee,flattenColumns:te})))}),Be=D.memo(ze);function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}var X=e=>{let{cells:t,stickyOffsets:n,flattenColumns:r,rowComponent:i,cellComponent:a,onHeaderRow:o,index:s,classNames:c,styles:l}=e,{prefixCls:u}=M(R,[`prefixCls`]),d;o&&(d=o(t.map(e=>e.column),s));let f=ae(t.map(e=>e.column));return D.createElement(i,Y({},d,{className:c.row,style:l.row}),t.map((e,t)=>{let{column:i,colStart:o,colEnd:s,colSpan:c}=e,l=G(o,s,r,n),d=i?.onHeaderCell?.(i)||{};return D.createElement(W,Y({},e,{scope:i.title?c>1?`colgroup`:`col`:null,ellipsis:i.ellipsis,align:i.align,component:a,prefixCls:u,key:f[t]},l,{additionalProps:d,rowType:`header`}))}))};function Ve(e,t,n){let r=[];function i(e,o,s=0){r[s]=r[s]||[];let c=o;return e.filter(Boolean).map(e=>{let o={key:e.key,className:a(e.className,t.cell)||``,style:n.cell,children:e.title,column:e,colStart:c},l=1,u=e.children;return u&&u.length>0&&(l=i(u,c,s+1).reduce((e,t)=>e+t,0),o.hasSubColumns=!0),`colSpan`in e&&({colSpan:l}=e),`rowSpan`in e&&(o.rowSpan=e.rowSpan),o.colSpan=l,o.colEnd=o.colStart+l-1,r[s].push(o),c+=l,l})}i(e,0);let o=r.length;for(let e=0;e<o;e+=1)r[e].forEach(t=>{!(`rowSpan`in t)&&!t.hasSubColumns&&(t.rowSpan=o-e)});return r}var He=L(e=>{let{stickyOffsets:t,columns:n,flattenColumns:r,onHeaderRow:i}=e,{prefixCls:o,getComponent:s,classNames:c,styles:l}=M(R,[`prefixCls`,`getComponent`,`classNames`,`styles`]),{header:u={}}=c||{},{header:d={}}=l||{},f=D.useMemo(()=>Ve(n,u,d),[n,u,d]),p=s([`header`,`wrapper`],`thead`),m=s([`header`,`row`],`tr`),h=s([`header`,`cell`],`th`);return D.createElement(p,{className:a(`${o}-thead`,u.wrapper),style:d.wrapper},f.map((e,n)=>D.createElement(X,{classNames:u,styles:d,key:n,flattenColumns:r,cells:e,stickyOffsets:t,rowComponent:m,cellComponent:h,onHeaderRow:i,index:n})))});function Ue(e,t=``){return typeof t==`number`?t:t.endsWith(`%`)?e*parseFloat(t)/100:null}function We(e,t,n){return D.useMemo(()=>{if(t&&t>0){let r=0,i=0;e.forEach(e=>{let n=Ue(t,e.width);n?r+=n:i+=1});let a=Math.max(t,n),o=Math.max(a-r,i),s=i,c=o/i,l=0,u=e.map(e=>{let n={...e},r=Ue(t,n.width);if(r)n.width=r;else{let e=Math.floor(c);n.width=s===1?o:e,o-=e,--s}return l+=n.width,n});if(l<a){let e=a/l;o=a,u.forEach((t,n)=>{let r=Math.floor(t.width*e);t.width=n===u.length-1?o:r,o-=r})}return[u,Math.max(l,a)]}return[e,t]},[e,t,n])}function Ge(e){return x(e).filter(e=>D.isValidElement(e)).map(e=>{let{key:t,props:n}=e,{children:r,...i}=n,a={key:t,...i};return r&&(a.children=Ge(r)),a})}function Ke(e){return e.filter(e=>e&&typeof e==`object`&&!e.hidden).map(e=>{let t=e.children;return t&&t.length>0?{...e,children:Ke(t)}:e})}function qe(e,t=`key`){return e.filter(e=>e&&typeof e==`object`).reduce((e,n,r)=>{let{fixed:i}=n,a=i===!0||i===`left`?`start`:i===`right`?`end`:i,o=`${t}-${r}`,s=n.children;return s&&s.length>0?[...e,...qe(s,o).map(e=>({...e,fixed:e.fixed??a}))]:[...e,{key:o,...n,fixed:a}]},[])}function Je({prefixCls:e,columns:t,children:n,expandable:r,expandedKeys:i,columnTitle:a,getRowKey:o,onTriggerExpand:s,expandIcon:c,rowExpandable:l,expandIconColumnIndex:u,expandedRowOffset:d=0,direction:f,expandRowByClick:p,columnWidth:m,fixed:h,scrollWidth:g,clientWidth:_},v){let y=D.useMemo(()=>Ke((t||Ge(n)||[]).slice()),[t,n]),b=D.useMemo(()=>{if(r){let t=y.slice();if(!t.includes(O)){let e=u||0,n=e===0&&(h===`right`||h===`end`)?y.length:e;n>=0&&t.splice(n,0,O)}let n=t.indexOf(O);t=t.filter((e,t)=>e!==O||t===n);let r=y[n],f;f=h||(r?r.fixed:null);let g={[Pe]:{className:`${e}-expand-icon-col`,columnType:`EXPAND_COLUMN`},title:a,fixed:f,className:`${e}-row-expand-icon-cell`,width:m,render:(t,n,r)=>{let a=o(n,r),u=c({prefixCls:e,expanded:i.has(a),expandable:!l||l(n),record:n,onExpand:s});return p?D.createElement(`span`,{onClick:e=>e.stopPropagation()},u):u}};return t.map((e,t)=>{let n=e===O?g:e;return t<d?{...n,fixed:n.fixed||`start`}:n})}return y.filter(e=>e!==O)},[r,y,o,i,c,f,d]),x=D.useMemo(()=>{let e=b;return v&&(e=v(e)),e.length||(e=[{render:()=>null}]),e},[v,b,f]),[S,C]=We(D.useMemo(()=>qe(x),[x,f,g]),g,_);return[x,S,C]}function Ye(e,t,n){let r=Fe(e),{expandIcon:i,expandedRowKeys:a,defaultExpandedRowKeys:o,defaultExpandAllRows:s,expandedRowRender:c,onExpand:l,onExpandedRowsChange:u,childrenColumnName:d}=r,f=i||Ee,p=d||`children`,m=D.useMemo(()=>c?`row`:e.expandable&&e.internalHooks===`rc-table-internal-hook`&&e.expandable.__PARENT_RENDER_ICON__||t.some(e=>e&&typeof e==`object`&&e[p])?`nest`:!1,[!!c,t]),[h,g]=D.useState(()=>o||(s?J(t,n,p):[])),_=D.useMemo(()=>new Set(a||h||[]),[a,h]);return[r,m,_,f,p,D.useCallback(e=>{let r=n(e,t.indexOf(e)),i,a=_.has(r);a?(_.delete(r),i=[..._]):i=[..._,r],g(i),l&&l(!a,e),u&&u(i)},[n,_,t,l,u])]}function Xe(e,t){let n=D.useMemo(()=>e.map((n,r)=>G(r,r,e,t)),[e,t]);return y(()=>n,[n],(e,t)=>!_(e,t))}function Ze(e){let t=(0,D.useRef)(e),[,n]=(0,D.useState)({}),r=(0,D.useRef)(null),i=(0,D.useRef)([]);function a(e){i.current.push(e);let a=Promise.resolve();r.current=a,a.then(()=>{if(r.current===a){let e=i.current,a=t.current;i.current=[],e.forEach(e=>{t.current=e(t.current)}),r.current=null,a!==t.current&&n({})}})}return(0,D.useEffect)(()=>()=>{r.current=null},[]),[t.current,a]}function Qe(e){let t=(0,D.useRef)(e||null),n=(0,D.useRef)(null);function r(){clearTimeout(n.current)}function i(e){t.current=e,r(),n.current=setTimeout(()=>{t.current=null,n.current=void 0},100)}function a(){return t.current}return(0,D.useEffect)(()=>r,[]),[i,a]}function $e(){let[e,t]=D.useState(-1),[n,r]=D.useState(-1);return[e,n,D.useCallback((e,n)=>{t(e),r(n)},[])]}var et=f()?window:null;function tt(e,t){let{offsetHeader:n=0,offsetSummary:r=0,offsetScroll:i=0,getContainer:a=()=>et}=typeof e==`object`?e:{},o=a()||et,s=!!e;return D.useMemo(()=>({isSticky:s,stickyClassName:s?`${t}-sticky-holder`:``,offsetHeader:n,offsetSummary:r,offsetScroll:i,container:o}),[s,i,n,r,t,o])}function nt(e,t){return(0,D.useMemo)(()=>{let n=t.length,r=(n,r,i)=>{let a=[],o=0;for(let s=n;s!==r;s+=i)a.push(o),t[s].fixed&&(o+=e[s]||0);return a};return{start:r(0,n,1),end:r(n-1,-1,-1).reverse(),widths:e}},[e,t])}var rt=e=>{let{children:t,className:n,style:r}=e;return D.createElement(`div`,{className:n,style:r},t)};function Z(e){let t=re(e).getBoundingClientRect(),n=document.documentElement;return{left:t.left+(window.pageXOffset||n.scrollLeft)-(n.clientLeft||document.body.clientLeft||0),top:t.top+(window.pageYOffset||n.scrollTop)-(n.clientTop||document.body.clientTop||0)}}var it=`mouseup`,at=`mousemove`,ot=`scroll`,st=`resize`,ct=D.forwardRef((e,t)=>{let{scrollBodyRef:n,onScroll:r,offsetScroll:i,container:o,direction:s}=e,c=M(R,`prefixCls`),l=n.current?.scrollWidth||0,u=n.current?.clientWidth||0,d=l&&u/l*u,f=D.useRef(null),[p,m]=Ze({scrollLeft:0,isHiddenScrollBar:!0}),h=D.useRef({delta:0,x:0}),[g,_]=D.useState(!1),v=D.useRef(null);D.useEffect(()=>()=>{b.cancel(v.current)},[]);let y=()=>{_(!1)},x=e=>{e.persist(),h.current.delta=e.pageX-p.scrollLeft,h.current.x=0,_(!0),e.preventDefault()},S=e=>{let{buttons:t}=e||window?.event;if(!g||t===0){g&&_(!1);return}let n=h.current.x+e.pageX-h.current.x-h.current.delta,i=s===`rtl`;n=Math.max(i?d-u:0,Math.min(i?0:u-d,n)),(!i||Math.abs(n)+Math.abs(d)<u)&&(r({scrollLeft:n/u*(l+2)}),h.current.x=e.pageX)},C=()=>{b.cancel(v.current),v.current=b(()=>{if(!n.current)return;let e=Z(n.current).top,t=e+n.current.offsetHeight,r=o===window?document.documentElement.scrollTop+window.innerHeight:Z(o).top+o.clientHeight;t-w()<=r||e>=r-i?m(e=>({...e,isHiddenScrollBar:!0})):m(e=>({...e,isHiddenScrollBar:!1}))})},T=e=>{m(t=>({...t,scrollLeft:e/l*u||0}))};return D.useImperativeHandle(t,()=>({setScrollLeft:T,checkScrollBarVisible:C})),D.useEffect(()=>(document.body.addEventListener(it,y,!1),document.body.addEventListener(at,S,!1),C(),()=>{document.body.removeEventListener(it,y),document.body.removeEventListener(at,S)}),[d,g]),D.useEffect(()=>{if(n.current){let e=[],t=re(n.current);for(;t;)e.push(t),t=t.parentElement;return e.forEach(e=>{e.addEventListener(ot,C,!1)}),window.addEventListener(st,C,!1),window.addEventListener(ot,C,!1),o.addEventListener(ot,C,!1),()=>{e.forEach(e=>{e.removeEventListener(ot,C)}),window.removeEventListener(st,C),window.removeEventListener(ot,C),o.removeEventListener(ot,C)}}},[o]),D.useEffect(()=>{p.isHiddenScrollBar||m(e=>{let t=n.current;return t?{...e,scrollLeft:t.scrollLeft/t.scrollWidth*t.clientWidth}:e})},[p.isHiddenScrollBar]),l<=u||!d||p.isHiddenScrollBar?null:D.createElement(`div`,{style:{height:w(),width:u,bottom:i},className:`${c}-sticky-scroll`},D.createElement(`div`,{onMouseDown:x,ref:f,className:a(`${c}-sticky-scroll-bar`,{[`${c}-sticky-scroll-bar-active`]:g}),style:{width:`${d}px`,transform:`translate3d(${p.scrollLeft}px, 0, 0)`}}))});function lt(){return lt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lt.apply(this,arguments)}var ut=`rc-table`,dt=[],ft={};function pt(){return`No Data`}var mt=D.forwardRef((e,t)=>{let n={rowKey:`key`,prefixCls:ut,emptyText:pt,...e},{prefixCls:r,className:i,rowClassName:o,style:s,classNames:c,styles:l,data:u,rowKey:d,scroll:f,tableLayout:p,direction:h,title:g,footer:y,summary:b,caption:x,id:w,showHeader:E,components:O,emptyText:A,onRow:j,onHeaderRow:M,measureRowRender:N,onScroll:P,internalHooks:F,transformColumns:ee,internalRefs:te,tailor:I,getContainerWidth:L,sticky:ne,rowHoverable:z=!0}=n,V=u||dt,ie=!!V.length,H=F===k,ce=D.useCallback((e,t)=>B(O,e)||t,[O]),le=D.useMemo(()=>typeof d==`function`?d:e=>e&&e[d],[d]),U=ce([`body`]),[ue,de,fe]=$e(),[W,pe,me,G,he,ge]=Ye(n,V,le),_e=f?.x,[ve,xe]=D.useState(0),[Se,K,Ce]=Je({...n,...W,expandable:!!W.expandedRowRender,columnTitle:W.columnTitle,expandedKeys:me,getRowKey:le,onTriggerExpand:ge,expandIcon:G,expandIconColumnIndex:W.expandIconColumnIndex,direction:h,scrollWidth:H&&I&&typeof _e==`number`?_e:null,clientWidth:ve},H?ee:null),q=Ce??_e,we=D.useMemo(()=>({columns:Se,flattenColumns:K}),[Se,K]),Te=D.useRef(null),Ee=D.useRef(null),J=D.useRef(null),De=D.useRef(null);D.useImperativeHandle(t,()=>({nativeElement:Te.current,scrollTo:e=>{if(J.current instanceof HTMLElement){let{index:t,top:n,key:r,offset:i,align:a=`nearest`}=e;if(se(n))J.current?.scrollTo({top:n});else{let e=r??le(V[t]),n=J.current.querySelector(`[data-row-key="${e}"]`);if(n&&(n.scrollIntoView({block:a}),i)){let e=J.current;e.scrollTo({top:e.scrollTop+i})}}}else J.current?.scrollTo&&J.current.scrollTo(e)}}));let Oe=D.useRef(null),[ke,Ae]=D.useState(!1),[je,Me]=D.useState(!1),[Pe,Fe]=D.useState(new Map),Ie=ae(K).map(e=>Pe.get(e)),Re=D.useMemo(()=>Ie,[Ie.join(`_`)]),ze=nt(Re,K),Y=f&&oe(f.y),X=f&&oe(q)||!!W.fixed,Ve=X&&K.some(({fixed:e})=>e),Ue=D.useRef(null),{isSticky:We,offsetHeader:Ge,offsetSummary:Ke,offsetScroll:qe,stickyClassName:Ze,container:et}=tt(ne,r),Z=D.useMemo(()=>b?.(V),[b,V]),it=(Y||We)&&D.isValidElement(Z)&&Z.type===ye&&Z.props.fixed,at,ot,st;Y&&(ot={overflowY:ie?`scroll`:`auto`,maxHeight:f.y}),X&&(at={overflowX:`auto`},Y||(ot={overflowY:`hidden`}),st={width:q===!0?`auto`:q,minWidth:`100%`});let mt=D.useCallback((e,t)=>{Fe(n=>{if(n.get(e)!==t){let r=new Map(n);return r.set(e,t),r}return n})},[]),[ht,gt]=Qe(null),[_t]=D.useState(()=>new WeakMap);function vt(e,t){if(!t)return;if(typeof t==`function`){t(e);return}let n=_t.get(t);if(n&&clearTimeout(n),t.scrollLeft!==e){t.scrollLeft=e;let n=setTimeout(()=>{t.scrollLeft!==e&&(t.scrollLeft=e)},0);_t.set(t,n)}}let[yt,bt]=D.useState([0,0]),xt=S(({currentTarget:e,scrollLeft:t})=>{let n=typeof t==`number`?t:e.scrollLeft,r=e||ft;(!gt()||gt()===r)&&(ht(r),vt(n,Ee.current),vt(n,J.current),vt(n,Oe.current),vt(n,Ue.current?.setScrollLeft));let i=e||Ee.current;if(i){let e=H&&I&&typeof q==`number`?q:i.scrollWidth,t=i.clientWidth,r=Math.abs(n);if(bt(n=>{let i=[r,e-t];return _(n,i)?n:i}),e===t){Ae(!1),Me(!1);return}Ae(r>0),Me(r<e-t-1)}}),St=S(e=>{xt(e),P?.(e)}),Ct=()=>{X&&J.current?xt({currentTarget:re(J.current),scrollLeft:J.current?.scrollLeft}):(Ae(!1),Me(!1))},wt=e=>{Ue.current?.checkScrollBarVisible();let t=e??Te.current?.offsetWidth??0;H&&L&&Te.current&&(t=L(Te.current,t)||t),t!==ve&&(Ct(),xe(t))};m(()=>{X&&wt()},[X]);let Tt=D.useRef(!1);D.useEffect(()=>{Tt.current&&Ct()},[X,u,Se.length]),D.useEffect(()=>{Tt.current=!0},[]);let[Et,Dt]=D.useState(0);m(()=>{(!I||!H)&&(J.current instanceof Element?Dt(C(J.current).width):Dt(C(De.current).width))},[]),D.useEffect(()=>{H&&te&&(te.body.current=J.current)});let Ot=D.useCallback(e=>D.createElement(D.Fragment,null,D.createElement(He,e),it===`top`&&D.createElement(be,e,Z)),[it,Z]),Q=D.useCallback(e=>D.createElement(be,e,Z),[Z]),kt=ce([`table`],`table`),At=D.useMemo(()=>p||(Ve?q===`max-content`?`auto`:`fixed`:Y||We||K.some(({ellipsis:e})=>e)?`fixed`:`auto`),[Y,Ve,K,p,We]),$,jt={colWidths:Re,columCount:K.length,stickyOffsets:ze,onHeaderRow:M,fixHeader:Y,scroll:f},Mt=D.useMemo(()=>ie?null:typeof A==`function`?A():A,[ie,A]),Nt=D.createElement(Ne,{data:V,measureColumnWidth:Y||X||We}),Pt=D.createElement(Le,{colWidths:K.map(({width:e})=>e),columns:K}),Ft=x==null?void 0:D.createElement(`caption`,{className:`${r}-caption`},x),It=v(n,{data:!0}),Lt=v(n,{aria:!0});if(Y||We){let e;typeof U==`function`?(e=U(V,{scrollbarSize:Et,ref:J,onScroll:xt}),jt.colWidths=K.map(({width:e},t)=>{let n=t===K.length-1?e-Et:e;return typeof n==`number`&&!Number.isNaN(n)?n:0})):e=D.createElement(`div`,{style:{...at,...ot},onScroll:St,ref:J,className:`${r}-body`},D.createElement(kt,lt({style:{...st,tableLayout:At}},Lt),Ft,Pt,Nt,!it&&Z&&D.createElement(be,{stickyOffsets:ze,flattenColumns:K},Z)));let t={noData:!V.length,maxContentScroll:X&&q===`max-content`,...jt,...we,direction:h,stickyClassName:Ze,scrollX:q,tableLayout:At,onScroll:xt};$=D.createElement(D.Fragment,null,E!==!1&&D.createElement(Be,lt({},t,{stickyTopOffset:Ge,className:`${r}-header`,ref:Ee,colGroup:Pt}),Ot),e,it&&it!==`top`&&D.createElement(Be,lt({},t,{stickyBottomOffset:Ke,className:`${r}-summary`,ref:Oe,colGroup:Pt}),Q),We&&J.current&&J.current instanceof Element&&D.createElement(ct,{ref:Ue,offsetScroll:qe,scrollBodyRef:J,onScroll:xt,container:et,direction:h}))}else $=D.createElement(`div`,{style:{...at,...ot,...l?.content},className:a(`${r}-content`,c?.content),onScroll:xt,ref:J},D.createElement(kt,lt({style:{...st,tableLayout:At}},Lt),Ft,Pt,E!==!1&&D.createElement(He,lt({},jt,we)),Nt,Z&&D.createElement(be,{stickyOffsets:ze,flattenColumns:K},Z)));let Rt={...s};We&&(Rt[`--columns-count`]=K.length);let zt=D.createElement(`div`,lt({className:a(r,i,{[`${r}-rtl`]:h===`rtl`,[`${r}-fix-start-shadow`]:X,[`${r}-fix-end-shadow`]:X,[`${r}-fix-start-shadow-show`]:X&&ke,[`${r}-fix-end-shadow-show`]:X&&je,[`${r}-layout-fixed`]:p===`fixed`,[`${r}-fixed-header`]:Y,[`${r}-fixed-column`]:Ve,[`${r}-scroll-horizontal`]:X,[`${r}-has-fix-start`]:K[0]?.fixed,[`${r}-has-fix-end`]:K[K.length-1]?.fixed===`end`}),style:Rt,id:w,ref:Te},It),g&&D.createElement(rt,{className:a(`${r}-title`,c?.title),style:l?.title},g(V)),D.createElement(`div`,{ref:De,className:a(`${r}-container`,c?.section),style:l?.section},$),y&&D.createElement(rt,{className:a(`${r}-footer`,c?.footer),style:l?.footer},y(V)));X&&(zt=D.createElement(T,{onResize:({offsetWidth:e})=>wt(e)},zt));let Bt=Xe(K,ze),Vt=D.useMemo(()=>({scrollX:q,scrollInfo:yt,classNames:c,styles:l,prefixCls:r,getComponent:ce,scrollbarSize:Et,direction:h,fixedInfoList:Bt,isSticky:We,componentWidth:ve,fixHeader:Y,fixColumn:Ve,horizonScroll:X,tableLayout:At,rowClassName:o,expandedRowClassName:W.expandedRowClassName,expandIcon:G,expandableType:pe,expandRowByClick:W.expandRowByClick,expandedRowRender:W.expandedRowRender,forceRender:W.forceRender??!1,expandedRowOffset:W.expandedRowOffset,onTriggerExpand:ge,expandIconColumnIndex:W.expandIconColumnIndex,indentSize:W.indentSize,allColumnsFixedLeft:K.every(e=>e.fixed===`start`),emptyNode:Mt,columns:Se,flattenColumns:K,onColumnResize:mt,colWidths:Re,hoverStartRow:ue,hoverEndRow:de,onHover:fe,rowExpandable:W.rowExpandable,onRow:j,getRowKey:le,expandedKeys:me,childrenColumnName:he,rowHoverable:z,measureRowRender:N}),[q,yt,c,l,r,ce,Et,h,Bt,We,ve,Y,Ve,X,At,o,W.expandedRowClassName,G,pe,W.expandRowByClick,W.expandedRowRender,W.forceRender,W.expandedRowOffset,ge,W.expandIconColumnIndex,W.indentSize,Mt,Se,K,mt,Re,ue,de,fe,W.rowExpandable,j,le,me,he,z,N]);return D.createElement(R.Provider,{value:Vt},zt)}),ht=(e=>I(mt,e))();ht.EXPAND_COLUMN=O,ht.INTERNAL_HOOKS=k,ht.Column=Se,ht.ColumnGroup=K,ht.Summary=xe;var gt=j(null),_t=j(null);function vt(){return vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vt.apply(this,arguments)}function yt(e,t,n){return n[e+(t||1)]-(n[e]||0)}var bt=e=>{let{rowInfo:t,column:n,colIndex:r,indent:i,index:o,component:s,renderIndex:c,record:l,style:u,className:d,inverse:f,getHeight:p}=e,{render:m,dataIndex:h,className:g,width:_}=n,{columnsOffset:v}=M(_t,[`columnsOffset`]),{key:y,fixedInfo:b,appendCellNode:x,additionalCellProps:S,originRowSpan:C}=ke(t,n,r,i,o),{style:w,colSpan:T=1,rowSpan:E=1}=S,O=yt(r-1,T,v),k=T>1?_-O:0,A={...w,...u,flex:`0 0 ${O}px`,width:`${O}px`,marginRight:k,pointerEvents:`auto`},j=D.useMemo(()=>f?E<=1:T===0||E===0||E>1,[E,T,f]);j?A.visibility=`hidden`:f&&(A.height=p?.(E));let N=j?()=>null:m,P={};return(E===0||T===0)&&(P.rowSpan=1,P.colSpan=1),D.createElement(W,vt({className:a(g,d),ellipsis:n.ellipsis,align:n.align,scope:n.rowScope,component:s,prefixCls:t.prefixCls,key:y,record:l,index:o,renderIndex:c,dataIndex:h,render:N,shouldCellUpdate:n.shouldCellUpdate},b,{appendNode:x,originRowSpan:C,additionalProps:{...S,style:A,...P}}))};function xt(){return xt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xt.apply(this,arguments)}var St=L(D.forwardRef((e,t)=>{let{data:n,index:r,className:i,rowKey:o,style:s,extra:c,getHeight:l,...u}=e,{record:d,indent:f,index:p}=n,{scrollX:m,flattenColumns:h,prefixCls:g,fixColumn:_,componentWidth:v,classNames:y,styles:b}=M(R,[`prefixCls`,`flattenColumns`,`fixColumn`,`componentWidth`,`scrollX`,`classNames`,`styles`]),{getComponent:x}=M(gt,[`getComponent`]),S=we(d,o,r,f),C=x([`body`,`row`],`div`),w=x([`body`,`cell`],`div`),{rowSupportExpand:T,expanded:E,rowProps:O,expandedRowRender:k,expandedRowClassName:A,forceRender:j}=S,N=De(A,d,r,f),P;if(!c&&T&&(j||E)){let e=k(d,r,f+1,E),t={};_&&(t={style:{"--virtual-width":`${v}px`}});let n=`${g}-expanded-row-cell`;P=D.createElement(C,{className:a(`${g}-expanded-row`,`${g}-expanded-row-level-${f+1}`,N),style:{display:E?void 0:`none`}},D.createElement(W,{component:w,prefixCls:g,className:a(n,{[`${n}-fixed`]:_}),additionalProps:t},e))}let F={...s,width:m};c&&(F.position=`absolute`,F.pointerEvents=`none`);let ee=D.createElement(C,xt({},O,u,{"data-row-key":o,ref:T?null:t,className:a(i,`${g}-row`,O?.className,y?.body?.row,{[N]:f>=1,[`${g}-row-extra`]:c}),style:{...F,...O?.style,...b?.body?.row}}),h.map((e,t)=>D.createElement(bt,{key:t,className:y?.body?.cell,style:b?.body?.cell,component:w,rowInfo:S,column:e,colIndex:t,indent:f,index:r,renderIndex:p,record:d,inverse:c,getHeight:l})));return T?D.createElement(`div`,{ref:t},ee,P):ee})),Ct={start:`top`,end:`bottom`,nearest:`auto`},wt=L(D.forwardRef((e,t)=>{let{data:n,onScroll:r}=e,{flattenColumns:i,onColumnResize:a,getRowKey:o,expandedKeys:s,prefixCls:c,childrenColumnName:l,scrollX:u,direction:d}=M(R,[`flattenColumns`,`onColumnResize`,`getRowKey`,`prefixCls`,`expandedKeys`,`childrenColumnName`,`scrollX`,`direction`]),{sticky:f,scrollY:p,listItemHeight:m,getComponent:h,onScroll:g}=M(gt),_=D.useRef(null),v=q(n,l,s,o),y=D.useMemo(()=>{let e=0;return i.map(({width:t,minWidth:n,key:r})=>{let i=Math.max(t||0,n||0);return e+=i,[r,i,e]})},[i]),b=D.useMemo(()=>y.map(e=>e[2]),[y]);D.useEffect(()=>{y.forEach(([e,t])=>{a(e,t)})},[y]),D.useImperativeHandle(t,()=>{let e={scrollTo:e=>{let{align:t,offset:n,...r}=e,i=Ct[t]??(n?`top`:`auto`);_.current?.scrollTo({...r,offset:n,align:i})},nativeElement:_.current?.nativeElement};return Object.defineProperty(e,"scrollLeft",{get:()=>_.current?.getScrollInfo().x||0,set:e=>{_.current?.scrollTo({left:e})}}),Object.defineProperty(e,"scrollTop",{get:()=>_.current?.getScrollInfo().y||0,set:e=>{_.current?.scrollTo({top:e})}}),e});let x=(e,t)=>{let n=v[t]?.record,{onCell:r}=e;return r?r(n,t)?.rowSpan??1:1},S=e=>{let{start:t,end:n,getSize:r,offsetY:a}=e;if(n<0)return null;let s=i.filter(e=>x(e,t)===0),c=t;for(let e=t;e>=0;--e)if(s=s.filter(t=>x(t,e)===0),!s.length){c=e;break}let l=i.filter(e=>x(e,n)!==1),u=n;for(let e=n;e<v.length;e+=1)if(l=l.filter(t=>x(t,e)!==1),!l.length){u=Math.max(e-1,n);break}let d=[];for(let e=c;e<=u;e+=1)v[e]&&i.some(t=>x(t,e)>1)&&d.push(e);return d.map(e=>{let t=v[e],n=o(t.record,e),i=t=>{let i=e+t-1,a=v[i];if(!a||!a.record){let e=Math.min(i,v.length-1),t=v[e],a=o(t.record,e),s=r(n,a);return s.bottom-s.top}let s=o(a.record,i),c=r(n,s);return c.bottom-c.top},s=r(n);return D.createElement(St,{key:e,data:t,rowKey:n,index:e,style:{top:-a+s.top},extra:!0,getHeight:i})})},C=D.useMemo(()=>({columnsOffset:b}),[b]),w=`${c}-tbody`,T=h([`body`,`wrapper`]),O={};return f&&(O.position=`sticky`,O.bottom=0,typeof f==`object`&&f.offsetScroll&&(O.bottom=f.offsetScroll)),D.createElement(_t.Provider,{value:C},D.createElement(E,{fullHeight:!1,ref:_,prefixCls:`${w}-virtual`,styles:{horizontalScrollBar:O},className:w,height:p,itemHeight:m||24,data:v,itemKey:e=>o(e.record),component:T,scrollWidth:u,direction:d,onVirtualScroll:({x:e})=>{r({currentTarget:_.current?.nativeElement,scrollLeft:e})},onScroll:g,extraRender:S},(e,t,n)=>{let r=o(e.record,t);return D.createElement(St,{data:e,rowKey:r,index:t,style:n.style})}))}));function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt.apply(this,arguments)}var Et=(e,t)=>{let{ref:n,onScroll:r}=t;return D.createElement(wt,{ref:n,data:e,onScroll:r})},Dt=D.forwardRef((e,t)=>{let{data:n,columns:r,scroll:i,sticky:o,prefixCls:s=ut,className:c,listItemHeight:l,components:u,onScroll:d}=e,{x:f,y:p}=i||{};typeof f!=`number`&&(f=1),typeof p!=`number`&&(p=500);let m=S((e,t)=>B(u,e)||t),h=S(d),g=D.useMemo(()=>({sticky:o,scrollY:p,listItemHeight:l,getComponent:m,onScroll:h}),[o,p,l,m,h]);return D.createElement(gt.Provider,{value:g},D.createElement(ht,Tt({},e,{className:a(c,`${s}-virtual`),scroll:{...i,x:f},components:{...u,body:n?.length?Et:void 0},columns:r,internalHooks:k,tailor:!0,ref:t})))});(e=>I(Dt,e))();var Ot=ht,Q=n();function kt(e,t,n){return e.map(e=>{let r=e.key||(typeof e.dataIndex==`string`?e.dataIndex:void 0),a={key:r,dataIndex:e.dataIndex,width:e.width,minWidth:e.minWidth,align:e.align,fixed:e.fixed,ellipsis:e.ellipsis,className:e.className,onCell:e.onCell,onHeaderCell:e.onHeaderCell,children:e.children?kt(e.children,t,n):void 0};if(e.sorter&&r){let o=t?.columnKey===r?t.order:null;a.title=(0,Q.jsxs)(`span`,{className:`lg-table__header-cell-content lg-table__header-cell-content--sortable`,onClick:()=>{let e;e=o===null?`ascend`:o===`ascend`?`descend`:null,n(r,e)},children:[(0,Q.jsx)(`span`,{className:`lg-table__header-text`,children:e.title}),(0,Q.jsxs)(`span`,{className:`lg-table__sorter`,children:[(0,Q.jsx)(`span`,{className:i(`lg-table__sorter-icon lg-table__sorter-icon--asc`,o===`ascend`&&`lg-table__sorter-icon--active`)}),(0,Q.jsx)(`span`,{className:i(`lg-table__sorter-icon lg-table__sorter-icon--desc`,o===`descend`&&`lg-table__sorter-icon--active`)})]})]})}else a.title=e.title;return e.render&&(a.render=e.render),a})}function At({columns:e=[],dataSource:t=[],rowKey:n=`key`,size:r=`default`,bordered:a=!1,loading:c=!1,scroll:f,rowSelection:p,onSortChange:m,loadError:h=!1,onRetry:g,statusText:_,onRow:v,empty:y,errorContent:b,title:x,footer:S,showHeader:C=!0,className:w,style:T,striped:E=!1,hoverable:O=!0},k){let A=o(`Table`),[j,M]=(0,D.useState)(null),N=(0,D.useCallback)((e,t)=>{let n={columnKey:e,order:t};M(t?n:null),m?.(n)},[m]),P=(0,D.useMemo)(()=>new Set(p?.selectedRowKeys||[]),[p?.selectedRowKeys]),F=(0,D.useCallback)((e,t)=>typeof n==`function`?n(e,t):e[n],[n]),ee=(0,D.useMemo)(()=>t.map((e,t)=>F(e,t)),[t,F]),te=ee.length>0&&ee.every(e=>P.has(e)),I=!te&&ee.some(e=>P.has(e)),L=(0,D.useCallback)(e=>{p?.onChange&&(e?p.onChange(ee,t):p.onChange([],[]))},[ee,t,p]),ne=(0,D.useCallback)((e,n,r)=>{if(!p?.onChange)return;let i;i=r?[...P,n]:[...P].filter(e=>e!==n);let a=t.filter((e,t)=>i.includes(F(e,t)));p.onChange(i,a)},[P,t,F,p]),R=(0,D.useMemo)(()=>{let t=kt(e,j,N);return p?[{key:`__selection__`,width:48,fixed:`left`,className:`lg-table__selection-col`,title:(0,Q.jsx)(`div`,{className:`lg-table__selection-wrapper`,children:(0,Q.jsx)(u,{checked:te,indeterminate:I,onChange:e=>L(e)})}),render:(e,t,n)=>{let r=F(t,n),i=p.getCheckboxProps?.(t)||{};return(0,Q.jsx)(`div`,{className:`lg-table__selection-wrapper`,children:(0,Q.jsx)(u,{checked:P.has(r),disabled:i.disabled,onChange:e=>ne(t,r,e)})})}},...t]:t},[e,j,N,p,te,I,L,P,F,ne]),z=(0,D.useMemo)(()=>{if(!j?.order)return t;let n=e.find(e=>(e.key||(typeof e.dataIndex==`string`?e.dataIndex:void 0))===j.columnKey);if(!n?.sorter||typeof n.sorter!=`function`)return t;let r=[...t].sort(n.sorter);return j.order===`descend`?r.reverse():r},[t,j,e]),re=(0,D.useCallback)((e,t)=>{let n=v?.(e,t)||{},r=F(e,t);return{...n,className:i(n.className,P.has(r)&&`lg-table__row--selected`,E&&t%2==1&&`lg-table__row--striped`)}},[v,F,P,E]),B=c?`loading`:h?`error`:`empty`,V=h?[]:z,ie=(0,D.useMemo)(()=>{if(B===`error`&&b)return b;if(B===`empty`&&y)return y;let e={loading:A.loading,empty:A.empty,error:A.loadError};return(0,Q.jsx)(l.Card,{size:`md`,status:B,spacing:`none`,description:_?.[B]??e[B],onRetry:B===`error`?g:void 0})},[B,y,b,_,g,A]),H=(0,D.useRef)(null),[ae,oe]=(0,D.useState)(0),se=V.length===0;(0,D.useEffect)(()=>{let e=H.current;if(!e||!se)return;let t=()=>oe(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[se]);let ce=(0,D.useMemo)(()=>(0,Q.jsx)(`div`,{className:`lg-table__placeholder-inner`,style:ae?{width:ae}:void 0,children:ie}),[ie,ae]),le=c&&V.length>0,U=f?.y!=null,ue=f?.x!=null,de=(0,D.useMemo)(()=>{if(!U&&!ue)return;let e={};return U&&(e.maxHeight=f.y),e},[U,ue,f]),fe=(0,D.useMemo)(()=>{if(!ue)return;let e=f.x;return{"--_table-min-width":typeof e==`number`?`max(${e}px, 100%)`:e}},[ue,f]);return(0,Q.jsxs)(`div`,{ref:k,className:i(`lg-table`,`lg-table--${r}`,a&&`lg-table--bordered`,O&&`lg-table--hoverable`,c&&`lg-table--loading`,h&&`lg-table--error`,U&&`lg-table--sticky-header`,w),style:T,children:[x&&(0,Q.jsx)(`div`,{className:`lg-table__title`,children:typeof x==`function`?x():x}),(0,Q.jsxs)(`div`,{className:`lg-table__container`,children:[le&&(0,Q.jsx)(`div`,{className:`lg-table__loading-mask`,children:(0,Q.jsx)(d,{size:`md`})}),U||ue?(0,Q.jsx)(s,{className:`lg-table__scroll-area`,style:{...de,...fe},type:`hover`,scrollbars:U&&ue?`both`:U?`vertical`:`horizontal`,viewportRef:H,children:(0,Q.jsx)(Ot,{columns:R,data:V,rowKey:n,showHeader:C,onRow:re,prefixCls:`lg-table`,emptyText:ce})}):(0,Q.jsx)(`div`,{className:`lg-table__scroll`,ref:H,children:(0,Q.jsx)(Ot,{columns:R,data:V,rowKey:n,showHeader:C,onRow:re,prefixCls:`lg-table`,emptyText:ce})})]}),S&&(0,Q.jsx)(`div`,{className:`lg-table__footer`,children:typeof S==`function`?S():S})]})}var $=D.forwardRef(At);$.displayName=`Table`;var jt=[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`},{title:`Department`,dataIndex:`department`,key:`department`}],Mt=[{key:`1`,name:`Alice Chen`,age:28,department:`Engineering`},{key:`2`,name:`Bob Liu`,age:32,department:`Product`},{key:`3`,name:`Carol Wang`,age:25,department:`Design`}];function Nt(){return(0,Q.jsx)($,{columns:jt,dataSource:Mt})}var Pt=`import { Table } from "lingee-ui";

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
`,Ft=[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`},{title:`Department`,dataIndex:`department`,key:`department`}],It=[{key:`1`,name:`Alice Chen`,age:28,department:`Engineering`},{key:`2`,name:`Bob Liu`,age:32,department:`Product`},{key:`3`,name:`Carol Wang`,age:25,department:`Design`},{key:`4`,name:`David Zhao`,age:30,department:`Operations`}];function Lt(){let[e,t]=(0,D.useState)([]);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`p`,{style:{marginBottom:12,color:`var(--lg-g-fg-color-black-muted)`},children:[`Selected `,e.length,` item(s)`]}),(0,Q.jsx)($,{columns:Ft,dataSource:It,rowSelection:{selectedRowKeys:e,onChange:e=>t(e)}})]})}var Rt=`import { useState } from "react";
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
`,zt=[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`},{title:`Department`,dataIndex:`department`,key:`department`}],Bt=[{key:`1`,name:`Alice Chen`,age:28,department:`Engineering`},{key:`2`,name:`Bob Liu`,age:32,department:`Product`},{key:`3`,name:`Carol Wang`,age:25,department:`Design`}];function Vt(){let[e,t]=(0,D.useState)(`loading`);return(0,Q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,Q.jsx)(c,{onClick:()=>t(`loading`),children:`首次加载`}),(0,Q.jsx)(c,{onClick:()=>t(`empty`),children:`空数据`}),(0,Q.jsx)(c,{onClick:()=>t(`error`),children:`加载失败`}),(0,Q.jsx)(c,{onClick:()=>t(`data`),children:`有数据`}),(0,Q.jsx)(c,{onClick:()=>t(`refreshing`),children:`已有数据刷新`})]}),(0,Q.jsx)($,{columns:zt,dataSource:e===`data`||e===`refreshing`?Bt:[],loading:e===`loading`||e===`refreshing`,loadError:e===`error`,onRetry:()=>{t(`loading`),setTimeout(()=>t(`data`),800)}})]})}var Ht=`import { useState } from "react";
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
`,Ut=[{title:`Name`,dataIndex:`name`,key:`name`,width:120},{title:`Age`,dataIndex:`age`,key:`age`,width:80},{title:`Department`,dataIndex:`department`,key:`department`,width:120},{title:`Position`,dataIndex:`position`,key:`position`,width:150},{title:`City`,dataIndex:`city`,key:`city`,width:100}],Wt=Array.from({length:50},(e,t)=>({key:String(t+1),name:`Employee ${t+1}`,age:22+t%20,department:[`Engineering`,`Product`,`Design`,`Marketing`,`Operations`][t%5],position:[`Engineer`,`Product Manager`,`Designer`,`Ops Specialist`,`Marketing Lead`][t%5],city:[`Shenzhen`,`Beijing`,`Shanghai`,`Guangzhou`,`Hangzhou`][t%5]}));function Gt(){return(0,Q.jsx)($,{columns:Ut,dataSource:Wt,rowKey:`key`,scroll:{y:400}})}var Kt=`/**
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
`,qt=[{title:`Name`,dataIndex:`name`,key:`name`,width:120},{title:`Age`,dataIndex:`age`,key:`age`,width:80},{title:`Department`,dataIndex:`department`,key:`department`,width:120},{title:`Position`,dataIndex:`position`,key:`position`,width:150},{title:`City`,dataIndex:`city`,key:`city`,width:100},{title:`Phone`,dataIndex:`phone`,key:`phone`,width:150},{title:`Email`,dataIndex:`email`,key:`email`,width:220},{title:`Join Date`,dataIndex:`joinDate`,key:`joinDate`,width:130},{title:`Salary`,dataIndex:`salary`,key:`salary`,width:120}],Jt=Array.from({length:6},(e,t)=>({key:String(t+1),name:`Employee ${t+1}`,age:22+t%15,department:[`Engineering`,`Product`,`Design`,`Marketing`,`Operations`,`Finance`][t%6],position:[`Engineer`,`Product Manager`,`Designer`,`Ops Lead`,`Marketing Lead`,`Accountant`][t%6],city:[`Shenzhen`,`Beijing`,`Shanghai`,`Guangzhou`,`Hangzhou`,`Chengdu`][t%6],phone:`138${String(1e7+t).slice(0,8)}`,email:`employee${t+1}@company.com`,joinDate:`2024-${String(t%12+1).padStart(2,`0`)}-15`,salary:`${15+t*2}K`}));function Yt(){return(0,Q.jsx)($,{columns:qt,dataSource:Jt,rowKey:`key`,scroll:{x:1200}})}var Xt=`/**
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
`,Zt=[{title:`Name`,dataIndex:`name`,key:`name`,width:120},{title:`Age`,dataIndex:`age`,key:`age`,width:80},{title:`Department`,dataIndex:`department`,key:`department`,width:120},{title:`Position`,dataIndex:`position`,key:`position`,width:150},{title:`City`,dataIndex:`city`,key:`city`,width:100},{title:`Phone`,dataIndex:`phone`,key:`phone`,width:150},{title:`Email`,dataIndex:`email`,key:`email`,width:220},{title:`Join Date`,dataIndex:`joinDate`,key:`joinDate`,width:130},{title:`Salary`,dataIndex:`salary`,key:`salary`,width:120},{title:`Status`,dataIndex:`status`,key:`status`,width:100}],Qt=Array.from({length:30},(e,t)=>({key:String(t+1),name:`Employee ${t+1}`,age:22+t%20,department:[`Engineering`,`Product`,`Design`,`Marketing`,`Operations`][t%5],position:[`Engineer`,`Product Manager`,`Designer`,`Ops Specialist`,`Marketing Lead`][t%5],city:[`Shenzhen`,`Beijing`,`Shanghai`,`Guangzhou`,`Hangzhou`][t%5],phone:`138${String(1e7+t).slice(0,8)}`,email:`employee${t+1}@company.com`,joinDate:`2024-${String(t%12+1).padStart(2,`0`)}-${String(t%28+1).padStart(2,`0`)}`,salary:`${15+t}K`,status:t%3==0?`Active`:t%3==1?`Probation`:`Confirmed`}));function $t(){return(0,Q.jsx)($,{columns:Zt,dataSource:Qt,rowKey:`key`,scroll:{x:1400,y:350}})}var en=`/**
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
`,tn=[{title:`Name`,dataIndex:`name`,key:`name`,width:120,fixed:`left`},{title:`Age`,dataIndex:`age`,key:`age`,width:80},{title:`Department`,dataIndex:`department`,key:`department`,width:150},{title:`Position`,dataIndex:`position`,key:`position`,width:180},{title:`City`,dataIndex:`city`,key:`city`,width:120},{title:`Phone`,dataIndex:`phone`,key:`phone`,width:160},{title:`Email`,dataIndex:`email`,key:`email`,width:240},{title:`Action`,key:`action`,width:100,fixed:`right`,render:()=>(0,Q.jsx)(`a`,{style:{color:`var(--lg-g-fg-color-primary-default)`},children:`Edit`})}],nn=Array.from({length:20},(e,t)=>({key:String(t+1),name:`Employee ${t+1}`,age:22+t%18,department:[`Engineering`,`Product`,`Design`,`Marketing`][t%4],position:[`Frontend Engineer`,`Backend Engineer`,`Product Manager`,`UI Designer`][t%4],city:[`Shenzhen`,`Beijing`,`Shanghai`,`Guangzhou`][t%4],phone:`138${String(1e7+t).slice(0,8)}`,email:`user${t+1}@example.com`,action:`Edit`}));function rn(){return(0,Q.jsx)($,{columns:tn,dataSource:nn,rowKey:`key`,scroll:{x:1200,y:350}})}var an=`/**
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
`;export{Xt as a,Gt as c,Rt as d,Lt as f,$t as i,Ht as l,Nt as m,rn as n,Yt as o,Pt as p,en as r,Kt as s,an as t,Vt as u};