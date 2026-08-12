import{H as e,I as t,R as n,U as r,W as i,q as a,s as o}from"./i18n-DmENUXWN.js";import{n as s}from"./provider-BibnZ_0z.js";import{t as c}from"./empty-BKsw4Wy3.js";import{t as l}from"./button-Civ1Cgfe.js";import{t as u}from"./checkbox-DFQk-lDd.js";import{t as d}from"./spin-BtD7KHFA.js";import{C as f,S as p,a as m,g as h,i as g,l as _,n as v,p as y,t as b,v as x,x as S,y as C}from"./es-DSza0onh.js";import{n as w,t as T}from"./getScrollBarSize-im1zkAp1.js";import{n as E,t as D}from"./es-BdlyTOjE.js";var O=a(i()),k={},A=`rc-table-internal-hook`,j=a(r());function M(e){let t=O.createContext(void 0);return{Context:t,Provider:({value:e,children:n})=>{let r=O.useRef(e);r.current=e;let[i]=O.useState(()=>({getValue:()=>r.current,listeners:new Set}));return S(()=>{(0,j.unstable_batchedUpdates)(()=>{i.listeners.forEach(t=>{t(e)})})},[e]),O.createElement(t.Provider,{value:i},n)},defaultValue:e}}function N(e,t){let n=f(typeof t==`function`?t:e=>{if(t===void 0)return e;if(!Array.isArray(t))return e[t];let n={};return t.forEach(t=>{n[t]=e[t]}),n}),r=O.useContext(e?.Context),{listeners:i,getValue:a}=r||{},o=O.useRef();o.current=n(r?a():e?.defaultValue);let[,s]=O.useState({});return S(()=>{if(!r)return;function e(e){let t=n(e);C(o.current,t,!0)||s({})}return i.add(e),()=>{i.delete(e)}},[r]),o.current}function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function F(){let e=O.createContext(null);function t(){return O.useContext(e)}function n(n,r){let i=h(n),a=(a,o)=>{let s=i?{ref:o}:{},c=O.useRef(0),l=O.useRef(a);return t()===null?((!r||r(l.current,a))&&(c.current+=1),l.current=a,O.createElement(e.Provider,{value:c.current},O.createElement(n,P({},a,s)))):O.createElement(n,P({},a,s))};return i?O.forwardRef(a):a}function r(e,n){let r=h(e),i=(n,i)=>{let a=r?{ref:i}:{};return t(),O.createElement(e,P({},n,a))};return O.memo(r?O.forwardRef(i):i,n)}return{makeImmutable:n,responseImmutable:r,useImmutableMark:t}}var{makeImmutable:ee,responseImmutable:te,useImmutableMark:I}=F(),{makeImmutable:L,responseImmutable:R,useImmutableMark:z}=F(),B=M();function ne(e,t){let n=e;for(let e=0;e<t.length;e+=1){if(n==null)return;n=n[t[e]]}return n}var re=O.createContext({renderWithProps:!1}),V=`RC_TABLE_KEY`;function ie(e){return e==null?[]:Array.isArray(e)?e:[e]}function ae(e){let t=[],n={};return e.forEach(e=>{let{key:r,dataIndex:i}=e||{},a=r||ie(i).join(`-`)||V;for(;n[a];)a=`${a}_next`;n[a]=!0,t.push(a)}),t}function oe(e){return e!=null}function se(e){return typeof e==`number`&&!Number.isNaN(e)}function ce(e){return e&&typeof e==`object`&&!Array.isArray(e)&&!O.isValidElement(e)}function le(e,t,n,r,i,a){let o=O.useContext(re),s=z();return x(()=>{if(oe(r))return[r];let a=ne(e,t==null||t===``?[]:Array.isArray(t)?t:[t]),s=a,c;if(i){let t=i(a,e,n);ce(t)?(s=t.children,c=t.props,o.renderWithProps=!0):s=t}return[s,c]},[s,e,r,t,i,n],(e,t)=>{if(a){let[,n]=e,[,r]=t;return a(r,n)}return o.renderWithProps?!0:!C(e,t,!0)})}function ue(e,t,n,r){let i=e+t-1;return e<=r&&i>=n}function de(e,t){return N(B,n=>[ue(e,t||1,n.hoverStartRow,n.hoverEndRow),n.onHover])}function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe.apply(this,arguments)}var pe=({ellipsis:e,rowType:t,children:n})=>{let r,i=e===!0?{showTitle:!0}:e;return i&&(i.showTitle||t===`header`)&&(typeof n==`string`||typeof n==`number`?r=n.toString():O.isValidElement(n)&&typeof n.props?.children==`string`&&(r=n.props?.children)),r},H=O.memo(t=>{let{component:n,children:r,ellipsis:i,scope:a,prefixCls:o,className:s,style:c,align:l,record:u,render:d,dataIndex:p,renderIndex:m,shouldCellUpdate:h,index:g,rowType:_,colSpan:v,rowSpan:y,fixStart:b,fixEnd:x,fixedStartShadow:S,fixedEndShadow:C,offsetFixedStartShadow:w,offsetFixedEndShadow:T,zIndex:E,zIndexReverse:D,appendNode:k,additionalProps:A={},originRowSpan:j,isSticky:M}=t,P=`${o}-cell`,{allColumnsFixedLeft:F,rowHoverable:ee}=N(B,[`allColumnsFixedLeft`,`rowHoverable`]),[te,I]=le(u,p,m,r,d,h),L={},R=typeof b==`number`&&!F,z=typeof x==`number`&&!F,[ne,re]=N(B,({scrollInfo:e})=>{if(!R&&!z)return[!1,!1];let[t,n]=e;return[(R&&S&&t)-w>=1,(z&&C&&n-t)-T>1]});R&&(L.insetInlineStart=b,L[`--z-offset`]=E,L[`--z-offset-reverse`]=D),z&&(L.insetInlineEnd=x,L[`--z-offset`]=E,L[`--z-offset-reverse`]=D);let V=I?.colSpan??A.colSpan??v??1,ie=I?.rowSpan??A.rowSpan??y??1,ae=I?.rowSpan??j??ie,[oe,se]=de(g,ae),ce=f(e=>{u&&se(g,g+ae-1),A?.onMouseEnter?.(e)}),ue=f(e=>{u&&se(-1,-1),A?.onMouseLeave?.(e)});if(V===0||ie===0)return null;let H=A.title??pe({rowType:_,ellipsis:i,children:te}),U=e(P,s,{[`${P}-fix`]:R||z,[`${P}-fix-start`]:R,[`${P}-fix-end`]:z,[`${P}-fix-start-shadow`]:S,[`${P}-fix-start-shadow-show`]:S&&ne,[`${P}-fix-end-shadow`]:C,[`${P}-fix-end-shadow-show`]:C&&re,[`${P}-ellipsis`]:i,[`${P}-with-append`]:k,[`${P}-fix-sticky`]:(R||z)&&M,[`${P}-row-hover`]:!I&&oe},A.className,I?.className),me={};l&&(me.textAlign=l);let he={...I?.style,...L,...me,...A.style,...c},W=te;return typeof W==`object`&&!Array.isArray(W)&&!O.isValidElement(W)&&(W=null),i&&(S||C)&&(W=O.createElement(`span`,{className:`${P}-content`},W)),O.createElement(n,fe({},I,A,{className:U,style:he,title:H,scope:a,onMouseEnter:ee?ce:void 0,onMouseLeave:ee?ue:void 0,colSpan:V===1?null:V,rowSpan:ie===1?null:ie}),k,W)});function U(e){return e.fixed===`start`}function me(e){return e.fixed===`end`}function he(e,t,n,r){let i=n[e]||{},a=n[t]||{},o=null,s=null;U(i)&&U(a)?o=r.start[e]:me(a)&&me(i)&&(s=r.end[t]);let c=!1,l=!1,u=0,d=0;o!==null&&(c=!n[t+1]||!U(n[t+1]),u=n.length*2-e,d=n.length+e),s!==null&&(l=!n[e-1]||!me(n[e-1]),u=t,d=n.length-t);let f=0,p=0;if(c)for(let t=0;t<e;t+=1)U(n[t])||(f+=r.widths[t]||0);if(l)for(let e=n.length-1;e>t;--e)me(n[e])||(p+=r.widths[e]||0);return{fixStart:o,fixEnd:s,fixedStartShadow:c,fixedEndShadow:l,offsetFixedStartShadow:f,offsetFixedEndShadow:p,isSticky:r.isSticky,zIndex:u,zIndexReverse:d}}var W=O.createContext({});function ge(){return ge=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ge.apply(this,arguments)}var _e=e=>{let{className:t,index:n,children:r,colSpan:i=1,rowSpan:a,align:o}=e,{prefixCls:s}=N(B,[`prefixCls`]),{scrollColumnIndex:c,stickyOffsets:l,flattenColumns:u}=O.useContext(W),d=n+i-1+1===c?i+1:i,f=O.useMemo(()=>he(n,n+d-1,u,l),[n,d,u,l]);return O.createElement(H,ge({className:t,index:n,component:`td`,prefixCls:s,record:null,dataIndex:null,align:o,colSpan:d,rowSpan:a,render:()=>r},f))},ve=e=>{let{children:t,...n}=e;return O.createElement(`tr`,n,t)},ye=e=>{let{children:t}=e;return t};ye.Row=ve,ye.Cell=_e;var be=R(e=>{let{children:t,stickyOffsets:n,flattenColumns:r}=e,i=N(B,`prefixCls`),a=r.length-1,o=r[a],s=O.useMemo(()=>({stickyOffsets:n,flattenColumns:r,scrollColumnIndex:o?.scrollbar?a:null}),[o,r,a,n]);return O.createElement(W.Provider,{value:s},O.createElement(`tfoot`,{className:`${i}-summary`},t))}),xe=ye;function Se(e){return null}function Ce(e){return null}function G(e,t,n,r,i,a,o){let s=a(t,o);e.push({record:t,indent:n,index:o,rowKey:s});let c=i?.has(s);if(t&&Array.isArray(t[r])&&c)for(let o=0;o<t[r].length;o+=1)G(e,t[r][o],n+1,r,i,a,o)}function we(e,t,n,r){return O.useMemo(()=>{if(n?.size){let i=[];for(let a=0;a<e?.length;a+=1){let o=e[a];G(i,o,0,t,n,r,a)}return i}return e?.map((e,t)=>({record:e,indent:0,index:t,rowKey:r(e,t)}))},[e,t,n,r])}function K(t,n,r,i){let a=N(B,[`prefixCls`,`fixedInfoList`,`flattenColumns`,`expandableType`,`expandRowByClick`,`onTriggerExpand`,`rowClassName`,`expandedRowClassName`,`indentSize`,`expandIcon`,`expandedRowRender`,`forceRender`,`expandIconColumnIndex`,`expandedKeys`,`childrenColumnName`,`rowExpandable`,`onRow`]),{flattenColumns:o,expandableType:s,expandedKeys:c,childrenColumnName:l,onTriggerExpand:u,rowExpandable:d,onRow:p,expandRowByClick:m,rowClassName:h}=a,g=s===`nest`,_=s===`row`&&(!d||d(t)),v=_||g,y=c&&c.has(n),b=l&&t&&t[l],x=f(u),S=p?.(t,r),C=S?.onClick,w=(e,...n)=>{m&&v&&u(t,e),C?.(e,...n)},T;typeof h==`string`?T=h:typeof h==`function`&&(T=h(t,r,i));let E=ae(o);return{...a,columnsKey:E,nestExpandable:g,expanded:y,hasNestChildren:b,record:t,onTriggerExpand:x,rowSupportExpand:_,expandable:v,rowProps:{...S,className:e(T,S?.className),onClick:w}}}var Te=e=>{let{prefixCls:t,children:n,component:r,cellComponent:i,className:a,expanded:o,colSpan:s,isEmpty:c,stickyOffset:l=0}=e,{scrollbarSize:u,fixHeader:d,fixColumn:f,componentWidth:p,horizonScroll:m}=N(B,[`scrollbarSize`,`fixHeader`,`fixColumn`,`componentWidth`,`horizonScroll`]),h=n;return(c?m&&p:f)&&(h=O.createElement(`div`,{style:{width:p-l-(d&&!c?u:0),position:`sticky`,left:l,overflow:`hidden`},className:`${t}-expanded-row-fixed`},h)),O.createElement(r,{className:a,style:{display:o?null:`none`}},O.createElement(H,{component:i,prefixCls:t,colSpan:s},h))};function Ee({prefixCls:t,record:n,onExpand:r,expanded:i,expandable:a}){let o=`${t}-row-expand-icon`;if(!a)return O.createElement(`span`,{className:e(o,`${t}-row-spaced`)});let s=e=>{r(n,e),e.stopPropagation()};return O.createElement(`span`,{className:e(o,{[`${t}-row-expanded`]:i,[`${t}-row-collapsed`]:!i}),onClick:s})}function De(e,t,n){let r=[];function i(e){(e||[]).forEach((e,a)=>{r.push(t(e,a)),i(e[n])})}return i(e),r}function q(e,t,n,r){return typeof e==`string`?e:typeof e==`function`?e(t,n,r):``}function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oe.apply(this,arguments)}function ke(e,t,n,r,i,a=[],o=0){let{record:s,prefixCls:c,columnsKey:l,fixedInfoList:u,expandIconColumnIndex:d,nestExpandable:f,indentSize:p,expandIcon:m,expanded:h,hasNestChildren:g,onTriggerExpand:_,expandable:v,expandedKeys:y}=e,b=l[n],x=u[n],S;n===(d||0)&&f&&(S=O.createElement(O.Fragment,null,O.createElement(`span`,{style:{paddingLeft:`${p*r}px`},className:`${c}-row-indent indent-level-${r}`}),m({prefixCls:c,expanded:h,expandable:g,record:s,onExpand:_})));let C={...t.onCell?.(s,i)},w;if(o){let{rowSpan:e=1}=C;if(v&&e&&n<o){w=e;let t=e;for(let n=i;n<i+e;n+=1){let e=a[n];y.has(e)&&(t+=1)}C.rowSpan=t}}return{key:b,fixedInfo:x,appendCellNode:S,additionalCellProps:C,originRowSpan:w}}var Ae=R(t=>{let{className:n,style:r,classNames:i,styles:a,record:o,index:s,renderIndex:c,rowKey:l,rowKeys:u,indent:d=0,rowComponent:f,cellComponent:p,scopeCellComponent:m,expandedRowInfo:h}=t,g=K(o,l,s,d),{prefixCls:_,flattenColumns:v,expandedRowClassName:y,expandedRowRender:b,forceRender:x,rowProps:S,expanded:C,rowSupportExpand:w}=g,T=O.useRef(!1);T.current||=C;let E=q(y,o,s,d),D=O.createElement(f,Oe({},S,{"data-row-key":l,className:e(n,`${_}-row`,`${_}-row-level-${d}`,S?.className,i.row,{[E]:d>=1}),style:{...r,...S?.style,...a.row}}),v.map((t,n)=>{let{render:r,dataIndex:l,className:f}=t,{key:v,fixedInfo:y,appendCellNode:b,additionalCellProps:x,originRowSpan:S}=ke(g,t,n,d,s,u,h?.offset);return O.createElement(H,Oe({className:e(f,i.cell),style:a.cell,ellipsis:t.ellipsis,align:t.align,scope:t.rowScope,component:t.rowScope?m:p,prefixCls:_,key:v,record:o,index:s,renderIndex:c,dataIndex:l,render:r,shouldCellUpdate:t.shouldCellUpdate},y,{appendNode:b,additionalProps:x,originRowSpan:S}))})),k;if(w&&(x||T.current||C)){let t=b(o,s,d+1,C);k=O.createElement(Te,{expanded:C,className:e(`${_}-expanded-row`,`${_}-expanded-row-level-${d+1}`,E),prefixCls:_,component:f,cellComponent:p,colSpan:h?h.colSpan:v.length,isEmpty:!1,stickyOffset:h?.sticky},t)}return O.createElement(O.Fragment,null,D,k)}),je=e=>{let{columnKey:t,onColumnResize:n,title:r}=e,i=O.useRef(null);return S(()=>{i.current&&n(t,i.current.offsetWidth)},[]),O.createElement(E,{data:t},O.createElement(`td`,{ref:i,style:{paddingTop:0,paddingBottom:0,borderTop:0,borderBottom:0,height:0}},O.createElement(`div`,{style:{height:0,overflow:`hidden`,fontWeight:`bold`}},r||`\xA0`)))},Me=({prefixCls:e,columnsKey:t,onColumnResize:n,columns:r})=>{let i=O.useRef(null),{measureRowRender:a}=N(B,[`measureRowRender`]),o=O.createElement(`tr`,{"aria-hidden":`true`,className:`${e}-measure-row`,style:{height:0},ref:i},O.createElement(E.Collection,{onBatchResize:e=>{g(i.current)&&e.forEach(({data:e,size:t})=>{n(e,t.offsetWidth)})}},t.map(e=>{let t=r.find(t=>t.key===e)?.title,i=O.isValidElement(t)?O.cloneElement(t,{ref:null}):t;return O.createElement(je,{key:e,columnKey:e,onColumnResize:n,title:i})})));return typeof a==`function`?a(o):o},Ne=R(t=>{let{data:n,measureColumnWidth:r}=t,{prefixCls:i,getComponent:a,onColumnResize:o,flattenColumns:s,getRowKey:c,expandedKeys:l,childrenColumnName:u,emptyNode:d,classNames:f,styles:p,expandedRowOffset:m=0,colWidths:h}=N(B,[`prefixCls`,`getComponent`,`onColumnResize`,`flattenColumns`,`getRowKey`,`expandedKeys`,`childrenColumnName`,`emptyNode`,`classNames`,`styles`,`expandedRowOffset`,`fixedInfoList`,`colWidths`]),{body:g={}}=f||{},{body:_={}}=p||{},v=we(n,u,l,c),y=O.useMemo(()=>v.map(e=>e.rowKey),[v]),b=O.useRef({renderWithProps:!1}),x=O.useMemo(()=>{let e=s.length-m,t=0;for(let e=0;e<m;e+=1)t+=h[e]||0;return{offset:m,colSpan:e,sticky:t}},[s.length,m,h]),S=a([`body`,`wrapper`],`tbody`),C=a([`body`,`row`],`tr`),w=a([`body`,`cell`],`td`),T=a([`body`,`cell`],`th`),E;E=n.length?v.map((e,t)=>{let{record:n,indent:r,index:i,rowKey:a}=e;return O.createElement(Ae,{classNames:g,styles:_,key:a,rowKey:a,rowKeys:y,record:n,index:t,renderIndex:i,rowComponent:C,cellComponent:w,scopeCellComponent:T,indent:r,expandedRowInfo:x})}):O.createElement(Te,{expanded:!0,className:`${i}-placeholder`,prefixCls:i,component:C,cellComponent:w,colSpan:s.length,isEmpty:!0},d);let D=ae(s);return O.createElement(re.Provider,{value:b.current},O.createElement(S,{style:_.wrapper,className:e(`${i}-tbody`,g.wrapper)},r&&O.createElement(Me,{prefixCls:i,columnsKey:D,onColumnResize:o,columns:s}),E))}),Pe=`RC_TABLE_INTERNAL_COL_DEFINE`;function Fe(e){let{expandable:t,...n}=e,r;return r=`expandable`in e?{...n,...t}:n,r.showExpandColumn===!1&&(r.expandIconColumnIndex=-1),r}function Ie(){return Ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ie.apply(this,arguments)}var Le=e=>{let{colWidths:t,columns:n,columCount:r}=e,{tableLayout:i}=N(B,[`tableLayout`]),a=[],o=r||n.length,s=!1;for(let e=o-1;e>=0;--e){let r=t[e],o=n&&n[e],c,l;if(o&&(c=o[Pe],i===`auto`&&(l=o.minWidth)),r||l||c||s){let{columnType:t,...n}=c||{};a.unshift(O.createElement(`col`,Ie({key:e,style:{width:r,minWidth:l}},n))),s=!0}}return a.length>0?O.createElement(`colgroup`,null,a):null};function Re(e,t){return(0,O.useMemo)(()=>{let n=[];for(let r=0;r<t;r+=1){let t=e[r];if(t!==void 0)n[r]=t;else return null}return n},[e.join(`_`),t])}var ze=O.forwardRef((t,n)=>{let{className:r,style:i,noData:a,columns:o,flattenColumns:s,colWidths:c,colGroup:l,columCount:u,stickyOffsets:d,direction:f,fixHeader:p,stickyTopOffset:m,stickyBottomOffset:h,stickyClassName:g,scrollX:_,tableLayout:v=`fixed`,onScroll:b,maxContentScroll:x,children:S,...C}=t,{prefixCls:w,scrollbarSize:T,isSticky:E,getComponent:D}=N(B,[`prefixCls`,`scrollbarSize`,`isSticky`,`getComponent`]),k=D([`header`,`table`],`table`),A=E&&!p?0:T,j=O.useRef(null),M=O.useCallback(e=>{y(n,e),y(j,e)},[]);O.useEffect(()=>{function e(e){let{currentTarget:t,deltaX:n}=e;if(n){let{scrollLeft:r,scrollWidth:i,clientWidth:a}=t,o=i-a,s=r+n;f===`rtl`?(s=Math.max(-o,s),s=Math.min(0,s)):(s=Math.min(o,s),s=Math.max(0,s)),b({currentTarget:t,scrollLeft:s}),e.preventDefault()}}let t=j.current;return t?.addEventListener(`wheel`,e,{passive:!1}),()=>{t?.removeEventListener(`wheel`,e)}},[]);let P=s[s.length-1],F={fixed:P?P.fixed:null,scrollbar:!0,onHeaderCell:()=>({className:`${w}-cell-scrollbar`})},ee=(0,O.useMemo)(()=>A?[...o,F]:o,[A,o]),te=(0,O.useMemo)(()=>A?[...s,F]:s,[A,s]),I=(0,O.useMemo)(()=>{let{start:e,end:t}=d;return{...d,start:e,end:[...t.map(e=>e+A),0],isSticky:E}},[A,d,E]),L=Re(c,u),R=(0,O.useMemo)(()=>{let e=!L||!L.length||L.every(e=>!e);return a||e},[a,L]);return O.createElement(`div`,{style:{overflow:`hidden`,...E?{top:m,bottom:h}:{},...i},ref:M,className:e(r,{[g]:!!g})},O.createElement(k,{style:{tableLayout:v,minWidth:`100%`,width:_}},R?l:O.createElement(Le,{colWidths:[...L,A],columCount:u+1,columns:te}),S({...C,stickyOffsets:I,columns:ee,flattenColumns:te})))}),Be=O.memo(ze);function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ve.apply(this,arguments)}var J=e=>{let{cells:t,stickyOffsets:n,flattenColumns:r,rowComponent:i,cellComponent:a,onHeaderRow:o,index:s,classNames:c,styles:l}=e,{prefixCls:u}=N(B,[`prefixCls`]),d;o&&(d=o(t.map(e=>e.column),s));let f=ae(t.map(e=>e.column));return O.createElement(i,Ve({},d,{className:c.row,style:l.row}),t.map((e,t)=>{let{column:i,colStart:o,colEnd:s,colSpan:c}=e,l=he(o,s,r,n),d=i?.onHeaderCell?.(i)||{};return O.createElement(H,Ve({},e,{scope:i.title?c>1?`colgroup`:`col`:null,ellipsis:i.ellipsis,align:i.align,component:a,prefixCls:u,key:f[t]},l,{additionalProps:d,rowType:`header`}))}))};function Y(t,n,r){let i=[];function a(t,o,s=0){i[s]=i[s]||[];let c=o;return t.filter(Boolean).map(t=>{let o={key:t.key,className:e(t.className,n.cell)||``,style:r.cell,children:t.title,column:t,colStart:c},l=1,u=t.children;return u&&u.length>0&&(l=a(u,c,s+1).reduce((e,t)=>e+t,0),o.hasSubColumns=!0),`colSpan`in t&&({colSpan:l}=t),`rowSpan`in t&&(o.rowSpan=t.rowSpan),o.colSpan=l,o.colEnd=o.colStart+l-1,i[s].push(o),c+=l,l})}a(t,0);let o=i.length;for(let e=0;e<o;e+=1)i[e].forEach(t=>{!(`rowSpan`in t)&&!t.hasSubColumns&&(t.rowSpan=o-e)});return i}var He=R(t=>{let{stickyOffsets:n,columns:r,flattenColumns:i,onHeaderRow:a}=t,{prefixCls:o,getComponent:s,classNames:c,styles:l}=N(B,[`prefixCls`,`getComponent`,`classNames`,`styles`]),{header:u={}}=c||{},{header:d={}}=l||{},f=O.useMemo(()=>Y(r,u,d),[r,u,d]),p=s([`header`,`wrapper`],`thead`),m=s([`header`,`row`],`tr`),h=s([`header`,`cell`],`th`);return O.createElement(p,{className:e(`${o}-thead`,u.wrapper),style:d.wrapper},f.map((e,t)=>O.createElement(J,{classNames:u,styles:d,key:t,flattenColumns:i,cells:e,stickyOffsets:n,rowComponent:m,cellComponent:h,onHeaderRow:a,index:t})))});function Ue(e,t=``){return typeof t==`number`?t:t.endsWith(`%`)?e*parseFloat(t)/100:null}function We(e,t,n){return O.useMemo(()=>{if(t&&t>0){let r=0,i=0;e.forEach(e=>{let n=Ue(t,e.width);n?r+=n:i+=1});let a=Math.max(t,n),o=Math.max(a-r,i),s=i,c=o/i,l=0,u=e.map(e=>{let n={...e},r=Ue(t,n.width);if(r)n.width=r;else{let e=Math.floor(c);n.width=s===1?o:e,o-=e,--s}return l+=n.width,n});if(l<a){let e=a/l;o=a,u.forEach((t,n)=>{let r=Math.floor(t.width*e);t.width=n===u.length-1?o:r,o-=r})}return[u,Math.max(l,a)]}return[e,t]},[e,t,n])}function X(e){return b(e).filter(e=>O.isValidElement(e)).map(e=>{let{key:t,props:n}=e,{children:r,...i}=n,a={key:t,...i};return r&&(a.children=X(r)),a})}function Ge(e){return e.filter(e=>e&&typeof e==`object`&&!e.hidden).map(e=>{let t=e.children;return t&&t.length>0?{...e,children:Ge(t)}:e})}function Ke(e,t=`key`){return e.filter(e=>e&&typeof e==`object`).reduce((e,n,r)=>{let{fixed:i}=n,a=i===!0||i===`left`?`start`:i===`right`?`end`:i,o=`${t}-${r}`,s=n.children;return s&&s.length>0?[...e,...Ke(s,o).map(e=>({...e,fixed:e.fixed??a}))]:[...e,{key:o,...n,fixed:a}]},[])}function qe({prefixCls:e,columns:t,children:n,expandable:r,expandedKeys:i,columnTitle:a,getRowKey:o,onTriggerExpand:s,expandIcon:c,rowExpandable:l,expandIconColumnIndex:u,expandedRowOffset:d=0,direction:f,expandRowByClick:p,columnWidth:m,fixed:h,scrollWidth:g,clientWidth:_},v){let y=O.useMemo(()=>Ge((t||X(n)||[]).slice()),[t,n]),b=O.useMemo(()=>{if(r){let t=y.slice();if(!t.includes(k)){let e=u||0,n=e===0&&(h===`right`||h===`end`)?y.length:e;n>=0&&t.splice(n,0,k)}let n=t.indexOf(k);t=t.filter((e,t)=>e!==k||t===n);let r=y[n],f;f=h||(r?r.fixed:null);let g={[Pe]:{className:`${e}-expand-icon-col`,columnType:`EXPAND_COLUMN`},title:a,fixed:f,className:`${e}-row-expand-icon-cell`,width:m,render:(t,n,r)=>{let a=o(n,r),u=c({prefixCls:e,expanded:i.has(a),expandable:!l||l(n),record:n,onExpand:s});return p?O.createElement(`span`,{onClick:e=>e.stopPropagation()},u):u}};return t.map((e,t)=>{let n=e===k?g:e;return t<d?{...n,fixed:n.fixed||`start`}:n})}return y.filter(e=>e!==k)},[r,y,o,i,c,f,d]),x=O.useMemo(()=>{let e=b;return v&&(e=v(e)),e.length||(e=[{render:()=>null}]),e},[v,b,f]),[S,C]=We(O.useMemo(()=>Ke(x),[x,f,g]),g,_);return[x,S,C]}function Je(e,t,n){let r=Fe(e),{expandIcon:i,expandedRowKeys:a,defaultExpandedRowKeys:o,defaultExpandAllRows:s,expandedRowRender:c,onExpand:l,onExpandedRowsChange:u,childrenColumnName:d}=r,f=i||Ee,p=d||`children`,m=O.useMemo(()=>c?`row`:e.expandable&&e.internalHooks===`rc-table-internal-hook`&&e.expandable.__PARENT_RENDER_ICON__||t.some(e=>e&&typeof e==`object`&&e[p])?`nest`:!1,[!!c,t]),[h,g]=O.useState(()=>o||(s?De(t,n,p):[])),_=O.useMemo(()=>new Set(a||h||[]),[a,h]);return[r,m,_,f,p,O.useCallback(e=>{let r=n(e,t.indexOf(e)),i,a=_.has(r);a?(_.delete(r),i=[..._]):i=[..._,r],g(i),l&&l(!a,e),u&&u(i)},[n,_,t,l,u])]}function Ye(e,t){let n=O.useMemo(()=>e.map((n,r)=>he(r,r,e,t)),[e,t]);return x(()=>n,[n],(e,t)=>!C(e,t))}function Xe(e){let t=(0,O.useRef)(e),[,n]=(0,O.useState)({}),r=(0,O.useRef)(null),i=(0,O.useRef)([]);function a(e){i.current.push(e);let a=Promise.resolve();r.current=a,a.then(()=>{if(r.current===a){let e=i.current,a=t.current;i.current=[],e.forEach(e=>{t.current=e(t.current)}),r.current=null,a!==t.current&&n({})}})}return(0,O.useEffect)(()=>()=>{r.current=null},[]),[t.current,a]}function Ze(e){let t=(0,O.useRef)(e||null),n=(0,O.useRef)(null);function r(){clearTimeout(n.current)}function i(e){t.current=e,r(),n.current=setTimeout(()=>{t.current=null,n.current=void 0},100)}function a(){return t.current}return(0,O.useEffect)(()=>r,[]),[i,a]}function Qe(){let[e,t]=O.useState(-1),[n,r]=O.useState(-1);return[e,n,O.useCallback((e,n)=>{t(e),r(n)},[])]}var $e=p()?window:null;function et(e,t){let{offsetHeader:n=0,offsetSummary:r=0,offsetScroll:i=0,getContainer:a=()=>$e}=typeof e==`object`?e:{},o=a()||$e,s=!!e;return O.useMemo(()=>({isSticky:s,stickyClassName:s?`${t}-sticky-holder`:``,offsetHeader:n,offsetSummary:r,offsetScroll:i,container:o}),[s,i,n,r,t,o])}function tt(e,t){return(0,O.useMemo)(()=>{let n=t.length,r=(n,r,i)=>{let a=[],o=0;for(let s=n;s!==r;s+=i)a.push(o),t[s].fixed&&(o+=e[s]||0);return a};return{start:r(0,n,1),end:r(n-1,-1,-1).reverse(),widths:e}},[e,t])}var nt=e=>{let{children:t,className:n,style:r}=e;return O.createElement(`div`,{className:n,style:r},t)};function rt(e){let t=m(e).getBoundingClientRect(),n=document.documentElement;return{left:t.left+(window.pageXOffset||n.scrollLeft)-(n.clientLeft||document.body.clientLeft||0),top:t.top+(window.pageYOffset||n.scrollTop)-(n.clientTop||document.body.clientTop||0)}}var Z=`mouseup`,it=`mousemove`,at=`scroll`,ot=`resize`,st=O.forwardRef((t,n)=>{let{scrollBodyRef:r,onScroll:i,offsetScroll:a,container:o,direction:s}=t,c=N(B,`prefixCls`),l=r.current?.scrollWidth||0,u=r.current?.clientWidth||0,d=l&&u/l*u,f=O.useRef(null),[p,h]=Xe({scrollLeft:0,isHiddenScrollBar:!0}),g=O.useRef({delta:0,x:0}),[v,y]=O.useState(!1),b=O.useRef(null);O.useEffect(()=>()=>{_.cancel(b.current)},[]);let x=()=>{y(!1)},S=e=>{e.persist(),g.current.delta=e.pageX-p.scrollLeft,g.current.x=0,y(!0),e.preventDefault()},C=e=>{let{buttons:t}=e||window?.event;if(!v||t===0){v&&y(!1);return}let n=g.current.x+e.pageX-g.current.x-g.current.delta,r=s===`rtl`;n=Math.max(r?d-u:0,Math.min(r?0:u-d,n)),(!r||Math.abs(n)+Math.abs(d)<u)&&(i({scrollLeft:n/u*(l+2)}),g.current.x=e.pageX)},w=()=>{_.cancel(b.current),b.current=_(()=>{if(!r.current)return;let e=rt(r.current).top,t=e+r.current.offsetHeight,n=o===window?document.documentElement.scrollTop+window.innerHeight:rt(o).top+o.clientHeight;t-T()<=n||e>=n-a?h(e=>({...e,isHiddenScrollBar:!0})):h(e=>({...e,isHiddenScrollBar:!1}))})},E=e=>{h(t=>({...t,scrollLeft:e/l*u||0}))};return O.useImperativeHandle(n,()=>({setScrollLeft:E,checkScrollBarVisible:w})),O.useEffect(()=>(document.body.addEventListener(Z,x,!1),document.body.addEventListener(it,C,!1),w(),()=>{document.body.removeEventListener(Z,x),document.body.removeEventListener(it,C)}),[d,v]),O.useEffect(()=>{if(r.current){let e=[],t=m(r.current);for(;t;)e.push(t),t=t.parentElement;return e.forEach(e=>{e.addEventListener(at,w,!1)}),window.addEventListener(ot,w,!1),window.addEventListener(at,w,!1),o.addEventListener(at,w,!1),()=>{e.forEach(e=>{e.removeEventListener(at,w)}),window.removeEventListener(ot,w),window.removeEventListener(at,w),o.removeEventListener(at,w)}}},[o]),O.useEffect(()=>{p.isHiddenScrollBar||h(e=>{let t=r.current;return t?{...e,scrollLeft:t.scrollLeft/t.scrollWidth*t.clientWidth}:e})},[p.isHiddenScrollBar]),l<=u||!d||p.isHiddenScrollBar?null:O.createElement(`div`,{style:{height:T(),width:u,bottom:a},className:`${c}-sticky-scroll`},O.createElement(`div`,{onMouseDown:S,ref:f,className:e(`${c}-sticky-scroll-bar`,{[`${c}-sticky-scroll-bar-active`]:v}),style:{width:`${d}px`,transform:`translate3d(${p.scrollLeft}px, 0, 0)`}}))});function ct(){return ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ct.apply(this,arguments)}var lt=`rc-table`,ut=[],dt={};function ft(){return`No Data`}var pt=O.forwardRef((t,n)=>{let r={rowKey:`key`,prefixCls:lt,emptyText:ft,...t},{prefixCls:i,className:a,rowClassName:o,style:s,classNames:c,styles:l,data:u,rowKey:d,scroll:p,tableLayout:h,direction:g,title:_,footer:y,summary:b,caption:x,id:T,showHeader:D,components:k,emptyText:j,onRow:M,onHeaderRow:N,measureRowRender:P,onScroll:F,internalHooks:ee,transformColumns:te,internalRefs:I,tailor:L,getContainerWidth:R,sticky:z,rowHoverable:re=!0}=r,V=u||ut,ie=!!V.length,ce=ee===A,le=O.useCallback((e,t)=>ne(k,e)||t,[k]),ue=O.useMemo(()=>typeof d==`function`?d:e=>e&&e[d],[d]),de=le([`body`]),[fe,pe,H]=Qe(),[U,me,he,W,ge,_e]=Je(r,V,ue),ve=p?.x,[xe,Se]=O.useState(0),[Ce,G,we]=qe({...r,...U,expandable:!!U.expandedRowRender,columnTitle:U.columnTitle,expandedKeys:he,getRowKey:ue,onTriggerExpand:_e,expandIcon:W,expandIconColumnIndex:U.expandIconColumnIndex,direction:g,scrollWidth:ce&&L&&typeof ve==`number`?ve:null,clientWidth:xe},ce?te:null),K=we??ve,Te=O.useMemo(()=>({columns:Ce,flattenColumns:G}),[Ce,G]),Ee=O.useRef(null),De=O.useRef(null),q=O.useRef(null),Oe=O.useRef(null);O.useImperativeHandle(n,()=>({nativeElement:Ee.current,scrollTo:e=>{if(q.current instanceof HTMLElement){let{index:t,top:n,key:r,offset:i,align:a=`nearest`}=e;if(se(n))q.current?.scrollTo({top:n});else{let e=r??ue(V[t]),n=q.current.querySelector(`[data-row-key="${e}"]`);if(n&&(n.scrollIntoView({block:a}),i)){let e=q.current;e.scrollTo({top:e.scrollTop+i})}}}else q.current?.scrollTo&&q.current.scrollTo(e)}}));let ke=O.useRef(null),[Ae,je]=O.useState(!1),[Me,Pe]=O.useState(!1),[Fe,Ie]=O.useState(new Map),Re=ae(G).map(e=>Fe.get(e)),ze=O.useMemo(()=>Re,[Re.join(`_`)]),Ve=tt(ze,G),J=p&&oe(p.y),Y=p&&oe(K)||!!U.fixed,Ue=Y&&G.some(({fixed:e})=>e),We=O.useRef(null),{isSticky:X,offsetHeader:Ge,offsetSummary:Ke,offsetScroll:Xe,stickyClassName:$e,container:rt}=et(z,i),Z=O.useMemo(()=>b?.(V),[b,V]),it=(J||X)&&O.isValidElement(Z)&&Z.type===ye&&Z.props.fixed,at,ot,pt;J&&(ot={overflowY:ie?`scroll`:`auto`,maxHeight:p.y}),Y&&(at={overflowX:`auto`},J||(ot={overflowY:`hidden`}),pt={width:K===!0?`auto`:K,minWidth:`100%`});let mt=O.useCallback((e,t)=>{Ie(n=>{if(n.get(e)!==t){let r=new Map(n);return r.set(e,t),r}return n})},[]),[ht,gt]=Ze(null),[_t]=O.useState(()=>new WeakMap);function vt(e,t){if(!t)return;if(typeof t==`function`){t(e);return}let n=_t.get(t);if(n&&clearTimeout(n),t.scrollLeft!==e){t.scrollLeft=e;let n=setTimeout(()=>{t.scrollLeft!==e&&(t.scrollLeft=e)},0);_t.set(t,n)}}let[yt,bt]=O.useState([0,0]),xt=f(({currentTarget:e,scrollLeft:t})=>{let n=typeof t==`number`?t:e.scrollLeft,r=e||dt;(!gt()||gt()===r)&&(ht(r),vt(n,De.current),vt(n,q.current),vt(n,ke.current),vt(n,We.current?.setScrollLeft));let i=e||De.current;if(i){let e=ce&&L&&typeof K==`number`?K:i.scrollWidth,t=i.clientWidth,r=Math.abs(n);if(bt(n=>{let i=[r,e-t];return C(n,i)?n:i}),e===t){je(!1),Pe(!1);return}je(r>0),Pe(r<e-t-1)}}),St=f(e=>{xt(e),F?.(e)}),Ct=()=>{Y&&q.current?xt({currentTarget:m(q.current),scrollLeft:q.current?.scrollLeft}):(je(!1),Pe(!1))},wt=e=>{We.current?.checkScrollBarVisible();let t=e??Ee.current?.offsetWidth??0;ce&&R&&Ee.current&&(t=R(Ee.current,t)||t),t!==xe&&(Ct(),Se(t))};S(()=>{Y&&wt()},[Y]);let Tt=O.useRef(!1);O.useEffect(()=>{Tt.current&&Ct()},[Y,u,Ce.length]),O.useEffect(()=>{Tt.current=!0},[]);let[Et,Dt]=O.useState(0);S(()=>{(!L||!ce)&&(q.current instanceof Element?Dt(w(q.current).width):Dt(w(Oe.current).width))},[]),O.useEffect(()=>{ce&&I&&(I.body.current=q.current)});let Q=O.useCallback(e=>O.createElement(O.Fragment,null,O.createElement(He,e),it===`top`&&O.createElement(be,e,Z)),[it,Z]),Ot=O.useCallback(e=>O.createElement(be,e,Z),[Z]),kt=le([`table`],`table`),$=O.useMemo(()=>h||(Ue?K===`max-content`?`auto`:`fixed`:J||X||G.some(({ellipsis:e})=>e)?`fixed`:`auto`),[J,Ue,G,h,X]),At,jt={colWidths:ze,columCount:G.length,stickyOffsets:Ve,onHeaderRow:N,fixHeader:J,scroll:p},Mt=O.useMemo(()=>ie?null:typeof j==`function`?j():j,[ie,j]),Nt=O.createElement(Ne,{data:V,measureColumnWidth:J||Y||X}),Pt=O.createElement(Le,{colWidths:G.map(({width:e})=>e),columns:G}),Ft=x==null?void 0:O.createElement(`caption`,{className:`${i}-caption`},x),It=v(r,{data:!0}),Lt=v(r,{aria:!0});if(J||X){let e;typeof de==`function`?(e=de(V,{scrollbarSize:Et,ref:q,onScroll:xt}),jt.colWidths=G.map(({width:e},t)=>{let n=t===G.length-1?e-Et:e;return typeof n==`number`&&!Number.isNaN(n)?n:0})):e=O.createElement(`div`,{style:{...at,...ot},onScroll:St,ref:q,className:`${i}-body`},O.createElement(kt,ct({style:{...pt,tableLayout:$}},Lt),Ft,Pt,Nt,!it&&Z&&O.createElement(be,{stickyOffsets:Ve,flattenColumns:G},Z)));let t={noData:!V.length,maxContentScroll:Y&&K===`max-content`,...jt,...Te,direction:g,stickyClassName:$e,scrollX:K,tableLayout:$,onScroll:xt};At=O.createElement(O.Fragment,null,D!==!1&&O.createElement(Be,ct({},t,{stickyTopOffset:Ge,className:`${i}-header`,ref:De,colGroup:Pt}),Q),e,it&&it!==`top`&&O.createElement(Be,ct({},t,{stickyBottomOffset:Ke,className:`${i}-summary`,ref:ke,colGroup:Pt}),Ot),X&&q.current&&q.current instanceof Element&&O.createElement(st,{ref:We,offsetScroll:Xe,scrollBodyRef:q,onScroll:xt,container:rt,direction:g}))}else At=O.createElement(`div`,{style:{...at,...ot,...l?.content},className:e(`${i}-content`,c?.content),onScroll:xt,ref:q},O.createElement(kt,ct({style:{...pt,tableLayout:$}},Lt),Ft,Pt,D!==!1&&O.createElement(He,ct({},jt,Te)),Nt,Z&&O.createElement(be,{stickyOffsets:Ve,flattenColumns:G},Z)));let Rt={...s};X&&(Rt[`--columns-count`]=G.length);let zt=O.createElement(`div`,ct({className:e(i,a,{[`${i}-rtl`]:g===`rtl`,[`${i}-fix-start-shadow`]:Y,[`${i}-fix-end-shadow`]:Y,[`${i}-fix-start-shadow-show`]:Y&&Ae,[`${i}-fix-end-shadow-show`]:Y&&Me,[`${i}-layout-fixed`]:h===`fixed`,[`${i}-fixed-header`]:J,[`${i}-fixed-column`]:Ue,[`${i}-scroll-horizontal`]:Y,[`${i}-has-fix-start`]:G[0]?.fixed,[`${i}-has-fix-end`]:G[G.length-1]?.fixed===`end`}),style:Rt,id:T,ref:Ee},It),_&&O.createElement(nt,{className:e(`${i}-title`,c?.title),style:l?.title},_(V)),O.createElement(`div`,{ref:Oe,className:e(`${i}-container`,c?.section),style:l?.section},At),y&&O.createElement(nt,{className:e(`${i}-footer`,c?.footer),style:l?.footer},y(V)));Y&&(zt=O.createElement(E,{onResize:({offsetWidth:e})=>wt(e)},zt));let Bt=Ye(G,Ve),Vt=O.useMemo(()=>({scrollX:K,scrollInfo:yt,classNames:c,styles:l,prefixCls:i,getComponent:le,scrollbarSize:Et,direction:g,fixedInfoList:Bt,isSticky:X,componentWidth:xe,fixHeader:J,fixColumn:Ue,horizonScroll:Y,tableLayout:$,rowClassName:o,expandedRowClassName:U.expandedRowClassName,expandIcon:W,expandableType:me,expandRowByClick:U.expandRowByClick,expandedRowRender:U.expandedRowRender,forceRender:U.forceRender??!1,expandedRowOffset:U.expandedRowOffset,onTriggerExpand:_e,expandIconColumnIndex:U.expandIconColumnIndex,indentSize:U.indentSize,allColumnsFixedLeft:G.every(e=>e.fixed===`start`),emptyNode:Mt,columns:Ce,flattenColumns:G,onColumnResize:mt,colWidths:ze,hoverStartRow:fe,hoverEndRow:pe,onHover:H,rowExpandable:U.rowExpandable,onRow:M,getRowKey:ue,expandedKeys:he,childrenColumnName:ge,rowHoverable:re,measureRowRender:P}),[K,yt,c,l,i,le,Et,g,Bt,X,xe,J,Ue,Y,$,o,U.expandedRowClassName,W,me,U.expandRowByClick,U.expandedRowRender,U.forceRender,U.expandedRowOffset,_e,U.expandIconColumnIndex,U.indentSize,Mt,Ce,G,mt,ze,fe,pe,H,U.rowExpandable,M,ue,he,ge,re,P]);return O.createElement(B.Provider,{value:Vt},zt)}),mt=(e=>L(pt,e))();mt.EXPAND_COLUMN=k,mt.INTERNAL_HOOKS=A,mt.Column=Se,mt.ColumnGroup=Ce,mt.Summary=xe;var ht=M(null),gt=M(null);function _t(){return _t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_t.apply(this,arguments)}function vt(e,t,n){return n[e+(t||1)]-(n[e]||0)}var yt=t=>{let{rowInfo:n,column:r,colIndex:i,indent:a,index:o,component:s,renderIndex:c,record:l,style:u,className:d,inverse:f,getHeight:p}=t,{render:m,dataIndex:h,className:g,width:_}=r,{columnsOffset:v}=N(gt,[`columnsOffset`]),{key:y,fixedInfo:b,appendCellNode:x,additionalCellProps:S,originRowSpan:C}=ke(n,r,i,a,o),{style:w,colSpan:T=1,rowSpan:E=1}=S,D=vt(i-1,T,v),k=T>1?_-D:0,A={...w,...u,flex:`0 0 ${D}px`,width:`${D}px`,marginRight:k,pointerEvents:`auto`},j=O.useMemo(()=>f?E<=1:T===0||E===0||E>1,[E,T,f]);j?A.visibility=`hidden`:f&&(A.height=p?.(E));let M=j?()=>null:m,P={};return(E===0||T===0)&&(P.rowSpan=1,P.colSpan=1),O.createElement(H,_t({className:e(g,d),ellipsis:r.ellipsis,align:r.align,scope:r.rowScope,component:s,prefixCls:n.prefixCls,key:y,record:l,index:o,renderIndex:c,dataIndex:h,render:M,shouldCellUpdate:r.shouldCellUpdate},b,{appendNode:x,originRowSpan:C,additionalProps:{...S,style:A,...P}}))};function bt(){return bt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bt.apply(this,arguments)}var xt=R(O.forwardRef((t,n)=>{let{data:r,index:i,className:a,rowKey:o,style:s,extra:c,getHeight:l,...u}=t,{record:d,indent:f,index:p}=r,{scrollX:m,flattenColumns:h,prefixCls:g,fixColumn:_,componentWidth:v,classNames:y,styles:b}=N(B,[`prefixCls`,`flattenColumns`,`fixColumn`,`componentWidth`,`scrollX`,`classNames`,`styles`]),{getComponent:x}=N(ht,[`getComponent`]),S=K(d,o,i,f),C=x([`body`,`row`],`div`),w=x([`body`,`cell`],`div`),{rowSupportExpand:T,expanded:E,rowProps:D,expandedRowRender:k,expandedRowClassName:A,forceRender:j}=S,M=q(A,d,i,f),P;if(!c&&T&&(j||E)){let t=k(d,i,f+1,E),n={};_&&(n={style:{"--virtual-width":`${v}px`}});let r=`${g}-expanded-row-cell`;P=O.createElement(C,{className:e(`${g}-expanded-row`,`${g}-expanded-row-level-${f+1}`,M),style:{display:E?void 0:`none`}},O.createElement(H,{component:w,prefixCls:g,className:e(r,{[`${r}-fixed`]:_}),additionalProps:n},t))}let F={...s,width:m};c&&(F.position=`absolute`,F.pointerEvents=`none`);let ee=O.createElement(C,bt({},D,u,{"data-row-key":o,ref:T?null:n,className:e(a,`${g}-row`,D?.className,y?.body?.row,{[M]:f>=1,[`${g}-row-extra`]:c}),style:{...F,...D?.style,...b?.body?.row}}),h.map((e,t)=>O.createElement(yt,{key:t,className:y?.body?.cell,style:b?.body?.cell,component:w,rowInfo:S,column:e,colIndex:t,indent:f,index:i,renderIndex:p,record:d,inverse:c,getHeight:l})));return T?O.createElement(`div`,{ref:n},ee,P):ee})),St={start:`top`,end:`bottom`,nearest:`auto`},Ct=R(O.forwardRef((e,t)=>{let{data:n,onScroll:r}=e,{flattenColumns:i,onColumnResize:a,getRowKey:o,expandedKeys:s,prefixCls:c,childrenColumnName:l,scrollX:u,direction:d}=N(B,[`flattenColumns`,`onColumnResize`,`getRowKey`,`prefixCls`,`expandedKeys`,`childrenColumnName`,`scrollX`,`direction`]),{sticky:f,scrollY:p,listItemHeight:m,getComponent:h,onScroll:g}=N(ht),_=O.useRef(null),v=we(n,l,s,o),y=O.useMemo(()=>{let e=0;return i.map(({width:t,minWidth:n,key:r})=>{let i=Math.max(t||0,n||0);return e+=i,[r,i,e]})},[i]),b=O.useMemo(()=>y.map(e=>e[2]),[y]);O.useEffect(()=>{y.forEach(([e,t])=>{a(e,t)})},[y]),O.useImperativeHandle(t,()=>{let e={scrollTo:e=>{let{align:t,offset:n,...r}=e,i=St[t]??(n?`top`:`auto`);_.current?.scrollTo({...r,offset:n,align:i})},nativeElement:_.current?.nativeElement};return Object.defineProperty(e,"scrollLeft",{get:()=>_.current?.getScrollInfo().x||0,set:e=>{_.current?.scrollTo({left:e})}}),Object.defineProperty(e,"scrollTop",{get:()=>_.current?.getScrollInfo().y||0,set:e=>{_.current?.scrollTo({top:e})}}),e});let x=(e,t)=>{let n=v[t]?.record,{onCell:r}=e;return r?r(n,t)?.rowSpan??1:1},S=e=>{let{start:t,end:n,getSize:r,offsetY:a}=e;if(n<0)return null;let s=i.filter(e=>x(e,t)===0),c=t;for(let e=t;e>=0;--e)if(s=s.filter(t=>x(t,e)===0),!s.length){c=e;break}let l=i.filter(e=>x(e,n)!==1),u=n;for(let e=n;e<v.length;e+=1)if(l=l.filter(t=>x(t,e)!==1),!l.length){u=Math.max(e-1,n);break}let d=[];for(let e=c;e<=u;e+=1)v[e]&&i.some(t=>x(t,e)>1)&&d.push(e);return d.map(e=>{let t=v[e],n=o(t.record,e),i=t=>{let i=e+t-1,a=v[i];if(!a||!a.record){let e=Math.min(i,v.length-1),t=v[e],a=o(t.record,e),s=r(n,a);return s.bottom-s.top}let s=o(a.record,i),c=r(n,s);return c.bottom-c.top},s=r(n);return O.createElement(xt,{key:e,data:t,rowKey:n,index:e,style:{top:-a+s.top},extra:!0,getHeight:i})})},C=O.useMemo(()=>({columnsOffset:b}),[b]),w=`${c}-tbody`,T=h([`body`,`wrapper`]),E={};return f&&(E.position=`sticky`,E.bottom=0,typeof f==`object`&&f.offsetScroll&&(E.bottom=f.offsetScroll)),O.createElement(gt.Provider,{value:C},O.createElement(D,{fullHeight:!1,ref:_,prefixCls:`${w}-virtual`,styles:{horizontalScrollBar:E},className:w,height:p,itemHeight:m||24,data:v,itemKey:e=>o(e.record),component:T,scrollWidth:u,direction:d,onVirtualScroll:({x:e})=>{r({currentTarget:_.current?.nativeElement,scrollLeft:e})},onScroll:g,extraRender:S},(e,t,n)=>{let r=o(e.record,t);return O.createElement(xt,{data:e,rowKey:r,index:t,style:n.style})}))}));function wt(){return wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wt.apply(this,arguments)}var Tt=(e,t)=>{let{ref:n,onScroll:r}=t;return O.createElement(Ct,{ref:n,data:e,onScroll:r})},Et=O.forwardRef((t,n)=>{let{data:r,columns:i,scroll:a,sticky:o,prefixCls:s=lt,className:c,listItemHeight:l,components:u,onScroll:d}=t,{x:p,y:m}=a||{};typeof p!=`number`&&(p=1),typeof m!=`number`&&(m=500);let h=f((e,t)=>ne(u,e)||t),g=f(d),_=O.useMemo(()=>({sticky:o,scrollY:m,listItemHeight:l,getComponent:h,onScroll:g}),[o,m,l,h,g]);return O.createElement(ht.Provider,{value:_},O.createElement(mt,wt({},t,{className:e(c,`${s}-virtual`),scroll:{...a,x:p},components:{...u,body:r?.length?Tt:void 0},columns:i,internalHooks:A,tailor:!0,ref:n})))});(e=>L(Et,e))();var Dt=mt,Q=n();function Ot(e,n,r){return e.map(e=>{let i=e.key||(typeof e.dataIndex==`string`?e.dataIndex:void 0),a={key:i,dataIndex:e.dataIndex,width:e.width,minWidth:e.minWidth,align:e.align,fixed:e.fixed,ellipsis:e.ellipsis,className:e.className,onCell:e.onCell,onHeaderCell:e.onHeaderCell,children:e.children?Ot(e.children,n,r):void 0};if(e.sorter&&i){let o=n?.columnKey===i?n.order:null;a.title=(0,Q.jsxs)(`span`,{className:`lg-table__header-cell-content lg-table__header-cell-content--sortable`,onClick:()=>{let e;e=o===null?`ascend`:o===`ascend`?`descend`:null,r(i,e)},children:[(0,Q.jsx)(`span`,{className:`lg-table__header-text`,children:e.title}),(0,Q.jsxs)(`span`,{className:`lg-table__sorter`,children:[(0,Q.jsx)(`span`,{className:t(`lg-table__sorter-icon lg-table__sorter-icon--asc`,o===`ascend`&&`lg-table__sorter-icon--active`)}),(0,Q.jsx)(`span`,{className:t(`lg-table__sorter-icon lg-table__sorter-icon--desc`,o===`descend`&&`lg-table__sorter-icon--active`)})]})]})}else a.title=e.title;return e.render&&(a.render=e.render),a})}function kt({columns:e=[],dataSource:n=[],rowKey:r=`key`,size:i=`default`,bordered:a=!1,loading:l=!1,scroll:f,rowSelection:p,onSortChange:m,onRow:h,empty:g,title:_,footer:v,showHeader:y=!0,className:b,style:x,striped:S=!1,hoverable:C=!0},w){let T=s(`Table`),[E,D]=(0,O.useState)(null),k=(0,O.useCallback)((e,t)=>{let n={columnKey:e,order:t};D(t?n:null),m?.(n)},[m]),A=(0,O.useMemo)(()=>new Set(p?.selectedRowKeys||[]),[p?.selectedRowKeys]),j=(0,O.useCallback)((e,t)=>typeof r==`function`?r(e,t):e[r],[r]),M=(0,O.useMemo)(()=>n.map((e,t)=>j(e,t)),[n,j]),N=M.length>0&&M.every(e=>A.has(e)),P=!N&&M.some(e=>A.has(e)),F=(0,O.useCallback)(e=>{p?.onChange&&(e?p.onChange(M,n):p.onChange([],[]))},[M,n,p]),ee=(0,O.useCallback)((e,t,r)=>{if(!p?.onChange)return;let i;i=r?[...A,t]:[...A].filter(e=>e!==t);let a=n.filter((e,t)=>i.includes(j(e,t)));p.onChange(i,a)},[A,n,j,p]),te=(0,O.useMemo)(()=>{let t=Ot(e,E,k);return p?[{key:`__selection__`,width:48,fixed:`left`,className:`lg-table__selection-col`,title:(0,Q.jsx)(`div`,{className:`lg-table__selection-wrapper`,children:(0,Q.jsx)(u,{checked:N,indeterminate:P,onChange:e=>F(e)})}),render:(e,t,n)=>{let r=j(t,n),i=p.getCheckboxProps?.(t)||{};return(0,Q.jsx)(`div`,{className:`lg-table__selection-wrapper`,children:(0,Q.jsx)(u,{checked:A.has(r),disabled:i.disabled,onChange:e=>ee(t,r,e)})})}},...t]:t},[e,E,k,p,N,P,F,A,j,ee]),I=(0,O.useMemo)(()=>{if(!E?.order)return n;let t=e.find(e=>(e.key||(typeof e.dataIndex==`string`?e.dataIndex:void 0))===E.columnKey);if(!t?.sorter||typeof t.sorter!=`function`)return n;let r=[...n].sort(t.sorter);return E.order===`descend`?r.reverse():r},[n,E,e]),L=(0,O.useCallback)((e,n)=>{let r=h?.(e,n)||{},i=j(e,n);return{...r,className:t(r.className,A.has(i)&&`lg-table__row--selected`,S&&n%2==1&&`lg-table__row--striped`)}},[h,j,A,S]),R=g||(0,Q.jsx)(c,{size:`sm`,description:T.empty}),z=f?.y!=null,B=f?.x!=null,ne=(0,O.useMemo)(()=>{if(!z&&!B)return;let e={};return z&&(e.maxHeight=f.y),e},[z,B,f]),re=(0,O.useMemo)(()=>{if(!B)return;let e=f.x;return{"--_table-min-width":typeof e==`number`?`max(${e}px, 100%)`:e}},[B,f]);return(0,Q.jsxs)(`div`,{ref:w,className:t(`lg-table`,`lg-table--${i}`,a&&`lg-table--bordered`,C&&`lg-table--hoverable`,l&&`lg-table--loading`,z&&`lg-table--sticky-header`,b),style:x,children:[_&&(0,Q.jsx)(`div`,{className:`lg-table__title`,children:typeof _==`function`?_():_}),(0,Q.jsxs)(`div`,{className:`lg-table__container`,children:[l&&(0,Q.jsx)(`div`,{className:`lg-table__loading-mask`,children:(0,Q.jsx)(d,{size:`md`})}),z||B?(0,Q.jsx)(o,{className:`lg-table__scroll-area`,style:{...ne,...re},type:`hover`,scrollbars:z&&B?`both`:z?`vertical`:`horizontal`,children:(0,Q.jsx)(Dt,{columns:te,data:I,rowKey:r,showHeader:y,onRow:L,prefixCls:`lg-table`,emptyText:R})}):(0,Q.jsx)(`div`,{className:`lg-table__scroll`,children:(0,Q.jsx)(Dt,{columns:te,data:I,rowKey:r,showHeader:y,onRow:L,prefixCls:`lg-table`,emptyText:R})})]}),v&&(0,Q.jsx)(`div`,{className:`lg-table__footer`,children:typeof v==`function`?v():v})]})}var $=O.forwardRef(kt);$.displayName=`Table`;var At=[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`},{title:`Department`,dataIndex:`department`,key:`department`}],jt=[{key:`1`,name:`Alice Chen`,age:28,department:`Engineering`},{key:`2`,name:`Bob Liu`,age:32,department:`Product`},{key:`3`,name:`Carol Wang`,age:25,department:`Design`}];function Mt(){return(0,Q.jsx)($,{columns:At,dataSource:jt})}var Nt=`import { Table } from "lingee-ui";

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
`,Pt=[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`},{title:`Department`,dataIndex:`department`,key:`department`}],Ft=[{key:`1`,name:`Alice Chen`,age:28,department:`Engineering`},{key:`2`,name:`Bob Liu`,age:32,department:`Product`},{key:`3`,name:`Carol Wang`,age:25,department:`Design`},{key:`4`,name:`David Zhao`,age:30,department:`Operations`}];function It(){let[e,t]=(0,O.useState)([]);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`p`,{style:{marginBottom:12,color:`rgba(0,0,0,0.64)`},children:[`Selected `,e.length,` item(s)`]}),(0,Q.jsx)($,{columns:Pt,dataSource:Ft,rowSelection:{selectedRowKeys:e,onChange:e=>t(e)}})]})}var Lt=`import { useState } from "react";
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
      <p style={{ marginBottom: 12, color: "rgba(0,0,0,0.64)" }}>
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
`,Rt=[{title:`Name`,dataIndex:`name`,key:`name`},{title:`Age`,dataIndex:`age`,key:`age`},{title:`Department`,dataIndex:`department`,key:`department`}],zt=[{key:`1`,name:`Alice Chen`,age:28,department:`Engineering`},{key:`2`,name:`Bob Liu`,age:32,department:`Product`},{key:`3`,name:`Carol Wang`,age:25,department:`Design`}];function Bt(){let[e,t]=(0,O.useState)(!0),[n,r]=(0,O.useState)(!1);return(0,Q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,Q.jsx)(l,{onClick:()=>t(!e),children:e?`Stop loading`:`Start loading`}),(0,Q.jsx)(l,{onClick:()=>r(!n),children:n?`Show data`:`Show empty`})]}),(0,Q.jsx)($,{columns:Rt,dataSource:n?[]:zt,loading:e})]})}var Vt=`import { useState } from "react";
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

export default function LoadingDemo() {
  const [loading, setLoading] = useState(true);
  const [showEmpty, setShowEmpty] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 12 }}>
        <Button onClick={() => setLoading(!loading)}>
          {loading ? "Stop loading" : "Start loading"}
        </Button>
        <Button onClick={() => setShowEmpty(!showEmpty)}>
          {showEmpty ? "Show data" : "Show empty"}
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={showEmpty ? [] : dataSource}
        loading={loading}
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