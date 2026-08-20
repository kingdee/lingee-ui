import{G as e,J as t,L as n,U as r,z as i}from"./i18n-f4fS4CFJ.js";import{n as a}from"./provider-CyKCr5py.js";import{t as o}from"./ChevronDown-CuoP4fzW.js";import{t as s}from"./empty-CvTA8O0P.js";import{t as c}from"./Edit-C7XacxV_.js";import{t as l}from"./FileEarmark-BVGip4y8.js";import{n as u,t as d}from"./LayoutDashboard-CRJXVrKq.js";import{t as f}from"./FolderOpen-uhZiDIEf.js";import{t as p}from"./button-DWJJYJAM.js";import{t as m}from"./spin-BdM9Bx53.js";import{b as h,n as g,o as _,s as v,t as y,y as b}from"./es-JxprpiSI.js";import{t as x}from"./es-DKPJdSlg.js";import{t as S}from"./es-F4NaE4Xu.js";var C=t(e());function w(e,t){let n=Object.assign({},e);return Array.isArray(t)&&t.forEach(e=>{delete n[e]}),n}var T=C.createContext(null),ee=C.createContext({}),te=e=>{let{dropPosition:t,dropLevelOffset:n,indent:r}=e,i={pointerEvents:`none`,position:`absolute`,right:0,backgroundColor:`red`,height:2};switch(t){case-1:i.top=0,i.left=-n*r;break;case 1:i.bottom=0,i.left=-n*r;break;case 0:i.bottom=0,i.left=r}return C.createElement(`div`,{style:i})},E=C.memo(({prefixCls:e,level:t,isStart:n,isEnd:i})=>{let a=`${e}-indent-unit`,o=[];for(let e=0;e<t;e+=1)o.push(C.createElement(`span`,{key:e,className:r(a,{[`${a}-start`]:n[e],[`${a}-end`]:i[e]})}));return C.createElement(`span`,{"aria-hidden":`true`,className:`${e}-indent`},o)});function D(e,t){return e[t]}function O(e,t){return`${e}-${t}`}function k(e){return e&&e.type&&e.type.isTreeNode}function A(e,t){return e??t}function j(e){let{title:t,_title:n,key:r,children:i}=e||{},a=t||`title`;return{title:a,_title:n||[a],key:r||`key`,children:i||`children`}}function M(e){function t(e){return y(e).map(e=>{if(!k(e))return b(!e,`Tree/TreeNode can only accept TreeNode as children.`),null;let{key:n}=e,{children:r,...i}=e.props,a={key:n,...i},o=t(r);return o.length&&(a.children=o),a}).filter(e=>e)}return t(e)}function N(e,t,n){let{_title:r,key:i,children:a}=j(n),o=new Set(t===!0?[]:t),s=[];function c(e,n=null){return e.map((l,u)=>{let d=O(n?n.pos:`0`,u),f=A(l[i],d),p;for(let e=0;e<r.length;e+=1){let t=r[e];if(l[t]!==void 0){p=l[t];break}}let m=Object.assign(w(l,[...r,i,a]),{title:p,key:f,parent:n,pos:d,children:null,data:l,isStart:[...n?n.isStart:[],u===0],isEnd:[...n?n.isEnd:[],u===e.length-1]});return s.push(m),m.children=t===!0||o.has(f)?c(l[a]||[],m):[],m})}return c(e),s}function ne(e,t,n){let r={};r=typeof n==`object`?n:{externalGetKey:n},r||={};let{childrenPropName:i,externalGetKey:a,fieldNames:o}=r,{key:s,children:c}=j(o),l=i||c,u;a?typeof a==`string`?u=e=>e[a]:typeof a==`function`&&(u=e=>a(e)):u=(e,t)=>A(e[s],t);function d(n,r,i,a){let o=n?n[l]:e,s=n?O(i.pos,r):`0`,c=n?[...a,n]:[];n&&t({node:n,index:r,pos:s,key:u(n,s),parentPos:i.node?i.pos:null,level:i.level+1,nodes:c}),o&&o.forEach((e,t)=>{d(e,t,{node:n,pos:s,level:i?i.level+1:-1},c)})}d(null)}function P(e,{initWrapper:t,processEntity:n,onProcessFinished:r,externalGetKey:i,childrenPropName:a,fieldNames:o}={},s){let c=i||s,l={},u={},d={posEntities:l,keyEntities:u};return t&&(d=t(d)||d),ne(e,e=>{let{node:t,index:r,pos:i,key:a,parentPos:o,level:s,nodes:c}=e,f={node:t,nodes:c,index:r,key:a,pos:i,level:s},p=A(a,i);l[i]=f,u[p]=f,f.parent=l[o],f.parent&&(f.parent.children=f.parent.children||[],f.parent.children.push(f)),n&&n(f,d)},{externalGetKey:c,childrenPropName:a,fieldNames:o}),r&&r(d),d}function re(e,t,n,r){return e===!1?!1:e||!t&&!n||t&&r&&!n}function F(e,{expandedKeys:t,selectedKeys:n,loadedKeys:r,loadingKeys:i,checkedKeys:a,halfCheckedKeys:o,dragOverNodeKey:s,dropPosition:c,keyEntities:l}){let u=D(l,e);return{eventKey:e,expanded:t.indexOf(e)!==-1,selected:n.indexOf(e)!==-1,loaded:r.indexOf(e)!==-1,loading:i.indexOf(e)!==-1,checked:a.indexOf(e)!==-1,halfChecked:o.indexOf(e)!==-1,pos:String(u?u.pos:``),dragOver:s===e&&c===0,dragOverGapTop:s===e&&c===-1,dragOverGapBottom:s===e&&c===1}}function I(e){let{data:t,expanded:n,selected:r,checked:i,loaded:a,loading:o,halfChecked:s,dragOver:c,dragOverGapTop:l,dragOverGapBottom:u,pos:d,active:f,eventKey:p}=e,m={...t,expanded:n,selected:r,checked:i,loaded:a,loading:o,halfChecked:s,dragOver:c,dragOverGapTop:l,dragOverGapBottom:u,pos:d,active:f,key:p};return`props`in m||Object.defineProperty(m,"props",{get(){return b(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),e}}),m}function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}var R=`open`,z=`close`,ie=`---`,B=e=>{let{eventKey:t,className:n,style:i,dragOver:a,dragOverGapTop:o,dragOverGapBottom:s,isLeaf:c,isStart:l,isEnd:u,expanded:d,selected:f,checked:p,halfChecked:m,loading:h,domRef:v,active:y,data:b,onMouseMove:x,selectable:S,treeId:w,...te}=e,O=_(w,t),k=C.useContext(T),{classNames:A,styles:j}=k||{},M=C.useContext(ee),N=C.useRef(null),[ne,P]=C.useState(!1),F=!!(k.disabled||e.disabled||M.nodeDisabled?.(b)),B=C.useMemo(()=>!k.checkable||e.checkable===!1?!1:k.checkable,[k.checkable,e.checkable]),V=t=>{F||k.onNodeSelect(t,I(e))},H=t=>{F||!B||e.disableCheckbox||k.onNodeCheck(t,I(e),!p)},ae=C.useMemo(()=>typeof S==`boolean`?S:k.selectable,[S,k.selectable]),oe=t=>{k.onNodeClick(t,I(e)),ae?V(t):H(t)},se=t=>{k.onNodeDoubleClick(t,I(e))},U=t=>{k.onNodeMouseEnter(t,I(e))},W=t=>{k.onNodeMouseLeave(t,I(e))},G=t=>{k.onNodeContextMenu(t,I(e))},K=C.useMemo(()=>!!(k.draggable&&(!k.draggable.nodeDraggable||k.draggable.nodeDraggable(b))),[k.draggable,b]),ce=t=>{t.stopPropagation(),P(!0),k.onNodeDragStart(t,e);try{t.dataTransfer.setData(`text/plain`,``)}catch{}},le=t=>{t.preventDefault(),t.stopPropagation(),k.onNodeDragEnter(t,e)},q=t=>{t.preventDefault(),t.stopPropagation(),k.onNodeDragOver(t,e)},ue=t=>{t.stopPropagation(),k.onNodeDragLeave(t,e)},J=t=>{t.stopPropagation(),P(!1),k.onNodeDragEnd(t,e)},Y=t=>{t.preventDefault(),t.stopPropagation(),P(!1),k.onNodeDrop(t,e)},X=t=>{h||k.onNodeExpand(t,I(e))},de=C.useMemo(()=>{let{children:e}=D(k.keyEntities,t)||{};return!!(e||[]).length},[k.keyEntities,t]),Z=C.useMemo(()=>re(c,k.loadData,de,e.loaded),[c,k.loadData,de,e.loaded]);C.useEffect(()=>{h||typeof k.loadData==`function`&&d&&!Z&&!e.loaded&&k.onNodeLoad(I(e))},[h,k.loadData,k.onNodeLoad,d,Z,e]);let fe=C.useMemo(()=>k.draggable?.icon?C.createElement(`span`,{className:`${k.prefixCls}-draggable-icon`},k.draggable.icon):null,[k.draggable]),pe=t=>{let n=e.switcherIcon||k.switcherIcon;return typeof n==`function`?n({...e,isLeaf:t}):n},me=()=>{if(Z){let e=pe(!0);return e===!1?null:C.createElement(`span`,{className:r(`${k.prefixCls}-switcher`,`${k.prefixCls}-switcher-noop`)},e)}let e=pe(!1);return e===!1?null:C.createElement(`span`,{onClick:X,className:r(`${k.prefixCls}-switcher`,`${k.prefixCls}-switcher_${d?R:z}`)},e)},he=C.useMemo(()=>{if(!B)return null;let t=typeof B==`boolean`?null:B;return C.createElement(`span`,{className:r(`${k.prefixCls}-checkbox`,{[`${k.prefixCls}-checkbox-checked`]:p,[`${k.prefixCls}-checkbox-indeterminate`]:!p&&m,[`${k.prefixCls}-checkbox-disabled`]:F||e.disableCheckbox}),onClick:H,role:`checkbox`,"aria-checked":m?`mixed`:p,"aria-disabled":F||e.disableCheckbox,"aria-labelledby":O},t)},[B,p,m,F,e.disableCheckbox,O]),ge=C.useMemo(()=>Z?null:d?R:z,[Z,d]),_e=C.useMemo(()=>C.createElement(`span`,{className:r(A?.itemIcon,`${k.prefixCls}-iconEle`,`${k.prefixCls}-icon__${ge||`docu`}`,{[`${k.prefixCls}-icon_loading`]:h}),style:j?.itemIcon}),[k.prefixCls,ge,h]),ve=C.useMemo(()=>{let n=!!k.draggable;return!e.disabled&&n&&k.dragOverNodeKey===t?k.dropIndicatorRender({dropPosition:k.dropPosition,dropLevelOffset:k.dropLevelOffset,indent:k.indent,prefixCls:k.prefixCls,direction:k.direction}):null},[k.dropPosition,k.dropLevelOffset,k.indent,k.prefixCls,k.direction,k.draggable,k.dragOverNodeKey,k.dropIndicatorRender]),ye=C.useMemo(()=>{let{title:t=ie}=e,n=`${k.prefixCls}-node-content-wrapper`,i;if(k.showIcon){let t=e.icon||k.icon;i=t?C.createElement(`span`,{className:r(A?.itemIcon,`${k.prefixCls}-iconEle`,`${k.prefixCls}-icon__customize`),style:j?.itemIcon},typeof t==`function`?t(e):t):_e}else k.loadData&&h&&(i=_e);let a;return a=typeof t==`function`?t(b):k.titleRender?k.titleRender(b):t,C.createElement(`span`,{ref:N,title:typeof t==`string`?t:``,className:r(n,`${n}-${ge||`normal`}`,{[`${k.prefixCls}-node-selected`]:!F&&(f||ne)}),onMouseEnter:U,onMouseLeave:W,onContextMenu:G,onClick:oe,onDoubleClick:se},i,C.createElement(`span`,{className:r(`${k.prefixCls}-title`,A?.itemTitle),style:j?.itemTitle},a),ve)},[k.prefixCls,k.showIcon,e,k.icon,_e,k.titleRender,b,ge,U,W,G,oe,se]),be=g(te,{aria:!0,data:!0}),{level:xe}=D(k.keyEntities,t)||{},Se=u[u.length-1],Ce=!F&&K,we=k.draggingNodeKey===t;return C.createElement(`div`,L({ref:v,role:`treeitem`,id:O,"aria-expanded":Z?void 0:d,"aria-selected":ae&&!F?f:void 0,"aria-checked":B&&!F?m?`mixed`:p:void 0,"aria-disabled":F,className:r(n,`${k.prefixCls}-treenode`,A?.item,{[`${k.prefixCls}-treenode-disabled`]:F,[`${k.prefixCls}-treenode-switcher-${d?`open`:`close`}`]:!c,[`${k.prefixCls}-treenode-checkbox-checked`]:p,[`${k.prefixCls}-treenode-checkbox-indeterminate`]:m,[`${k.prefixCls}-treenode-selected`]:f,[`${k.prefixCls}-treenode-loading`]:h,[`${k.prefixCls}-treenode-active`]:y,[`${k.prefixCls}-treenode-leaf-last`]:Se,[`${k.prefixCls}-treenode-draggable`]:K,dragging:we,"drop-target":k.dropTargetKey===t,"drop-container":k.dropContainerKey===t,"drag-over":!F&&a,"drag-over-gap-top":!F&&o,"drag-over-gap-bottom":!F&&s,"filter-node":k.filterTreeNode?.(I(e)),[`${k.prefixCls}-treenode-leaf`]:Z}),style:{...i,...j?.item},draggable:Ce,onDragStart:Ce?ce:void 0,onDragEnter:K?le:void 0,onDragOver:K?q:void 0,onDragLeave:K?ue:void 0,onDrop:K?Y:void 0,onDragEnd:K?J:void 0,onMouseMove:x},be),C.createElement(E,{prefixCls:k.prefixCls,level:xe,isStart:l,isEnd:u}),fe,me(),he,ye)};B.isTreeNode=1;function V(e,t){let[n,r]=C.useState(!1);h(()=>{if(n)return e(),()=>{t()}},[n]),h(()=>(r(!0),()=>{r(!1)}),[])}function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}var ae=C.forwardRef((e,t)=>{let{className:n,style:i,motion:a,motionNodes:o,motionType:s,onMotionStart:c,onMotionEnd:l,active:u,treeNodeRequiredProps:d,...f}=e,[p,m]=C.useState(!0),{prefixCls:g}=C.useContext(T),_=o&&s!==`hide`;h(()=>{o&&_!==p&&m(_)},[o]);let v=()=>{o&&c()},y=C.useRef(!1),b=()=>{o&&!y.current&&(y.current=!0,l())};return V(v,b),o?C.createElement(S,H({ref:t,visible:p},a,{motionAppear:s===`show`,onVisibleChanged:e=>{_===e&&b()}}),({className:e,style:t},n)=>C.createElement(`div`,{ref:n,className:r(`${g}-treenode-motion`,e),style:t},o.map(e=>{let{data:{...t},title:n,key:r,isStart:i,isEnd:a}=e;delete t.children;let o=F(r,d);return C.createElement(B,H({},t,o,{title:n,active:u,data:e.data,key:r,isStart:i,isEnd:a}))}))):C.createElement(B,H({domRef:t,className:n,style:i},f,{active:u}))});function oe(e=[],t=[]){let n=e.length,r=t.length;if(Math.abs(n-r)!==1)return{add:!1,key:null};function i(e,t){let n=new Map;e.forEach(e=>{n.set(e,!0)});let r=t.filter(e=>!n.has(e));return r.length===1?r[0]:null}return n<r?{add:!0,key:i(e,t)}:{add:!1,key:i(t,e)}}function se(e,t,n){let r=e[e.findIndex(e=>e.key===n)+1],i=t.findIndex(e=>e.key===n);if(r){let e=t.findIndex(e=>e.key===r.key);return t.slice(i+1,e)}return t.slice(i+1)}function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}var W=`RC_TREE_MOTION_${Math.random()}`,G={key:W},K={key:W,level:0,index:0,pos:`0`,node:G,nodes:[G]},ce={parent:null,children:[],pos:K.pos,data:G,title:null,key:W,isStart:[],isEnd:[]};function le(e,t,n,r){return t===!1||!n?e:e.slice(0,Math.ceil(n/r)+1)}function q(e){let{key:t,pos:n}=e;return A(t,n)}var ue=C.forwardRef((e,t)=>{let{prefixCls:n,data:r,selectable:i,checkable:a,expandedKeys:o,selectedKeys:s,checkedKeys:c,loadedKeys:l,loadingKeys:u,halfCheckedKeys:d,keyEntities:f,disabled:p,dragging:m,dragOverNodeKey:g,dropPosition:y,motion:b,height:S,itemHeight:w,virtual:T,scrollWidth:ee,focusable:te,activeItem:E,tabIndex:D,onKeyDown:O,onFocus:k,onBlur:j,onMouseDown:M,onMouseUp:N,onActiveChange:ne,onListChangeStart:P,onListChangeEnd:re,...I}=e,L=v(),R=C.useRef(null),z=C.useRef(null);C.useImperativeHandle(t,()=>({scrollTo:e=>{R.current.scrollTo(e)},getIndentWidth:()=>z.current.offsetWidth}));let[ie,B]=C.useState(o),[V,H]=C.useState(r),[G,K]=C.useState(r),[ue,J]=C.useState([]),[Y,X]=C.useState(null),de=C.useRef(r);de.current=r;function Z(){let e=de.current;H(e),K(e),J([]),X(null),re()}h(()=>{B(o);let e=oe(ie,o);if(e.key!==null){if(e.add){let t=V.findIndex(({key:t})=>t===e.key),n=le(se(V,r,e.key),T,S,w),i=V.slice();i.splice(t+1,0,ce),K(i),J(n),X(`show`)}else{let t=r.findIndex(({key:t})=>t===e.key),n=le(se(r,V,e.key),T,S,w),i=r.slice();i.splice(t+1,0,ce),K(i),J(n),X(`hide`)}}else V!==r&&(H(r),K(r))},[o,r]),C.useEffect(()=>{m||Z()},[m]);let fe=b?G:r,pe={expandedKeys:o,selectedKeys:s,loadedKeys:l,loadingKeys:u,checkedKeys:c,halfCheckedKeys:d,dragOverNodeKey:g,dropPosition:y,keyEntities:f};return C.createElement(C.Fragment,null,C.createElement(`div`,{className:`${n}-treenode`,"aria-hidden":!0,style:{position:`absolute`,pointerEvents:`none`,visibility:`hidden`,height:0,overflow:`hidden`,border:0,padding:0}},C.createElement(`div`,{className:`${n}-indent`},C.createElement(`div`,{ref:z,className:`${n}-indent-unit`}))),C.createElement(x,U({},I,{data:fe,itemKey:q,height:S,fullHeight:!1,virtual:T,itemHeight:w,scrollWidth:ee,prefixCls:`${n}-list`,ref:R,role:`tree`,tabIndex:te!==!1&&!p?D:void 0,"aria-activedescendant":E?_(L,E.key):void 0,onKeyDown:O,onFocus:k,onBlur:j,onMouseDown:M,onMouseUp:N,onVisibleChange:e=>{e.every(e=>q(e)!==W)&&Z()}}),e=>{let{pos:t,data:{...n},title:r,key:i,isStart:a,isEnd:o}=e,s=A(i,t);delete n.key,delete n.children;let c=F(s,pe);return C.createElement(ae,U({},n,c,{title:r,active:!!E&&i===E.key,pos:t,data:e.data,isStart:a,isEnd:o,motion:b,motionNodes:i===W?ue:null,motionType:Y,onMotionStart:P,onMotionEnd:Z,treeNodeRequiredProps:pe,treeId:L,onMouseMove:()=>{ne(null)}}))}))});function J(e,t){if(!e)return[];let n=e.slice(),r=n.indexOf(t);return r>=0&&n.splice(r,1),n}function Y(e,t){let n=(e||[]).slice();return n.indexOf(t)===-1&&n.push(t),n}function X(e){return e.split(`-`)}function de(e,t){let n=[],r=D(t,e);function i(e=[]){e.forEach(({key:e,children:t})=>{n.push(e),i(t)})}return i(r.children),n}function Z(e){if(e.parent){let t=X(e.pos);return Number(t[t.length-1])===e.parent.children.length-1}return!1}function fe(e){let t=X(e.pos);return Number(t[t.length-1])===0}function pe(e,t,n,r,i,a,o,s,c,l){let{clientX:u,clientY:d}=e,{top:f,height:p}=e.target.getBoundingClientRect(),m=((l===`rtl`?-1:1)*((i?.x||0)-u)-12)/r,h=c.filter(e=>s[e]?.children?.length),g=D(s,n.eventKey);if(d<f+p/2){let e=o.findIndex(e=>e.key===g.key),t=o[e<=0?0:e-1].key;g=D(s,t)}let _=g.key,v=g,y=g.key,b=0,x=0;if(!h.includes(_))for(let e=0;e<m&&Z(g);e+=1)g=g.parent,x+=1;let S=t.data,C=g.node,w=!0;return fe(g)&&g.level===0&&d<f+p/2&&a({dragNode:S,dropNode:C,dropPosition:-1})&&g.key===n.eventKey?b=-1:(v.children||[]).length&&h.includes(y)?a({dragNode:S,dropNode:C,dropPosition:0})?b=0:w=!1:x===0?m>-1.5?a({dragNode:S,dropNode:C,dropPosition:1})?b=1:w=!1:a({dragNode:S,dropNode:C,dropPosition:0})?b=0:a({dragNode:S,dropNode:C,dropPosition:1})?b=1:w=!1:a({dragNode:S,dropNode:C,dropPosition:1})?b=1:w=!1,{dropPosition:b,dropLevelOffset:x,dropTargetKey:g.key,dropTargetPos:g.pos,dragOverNodeKey:y,dropContainerKey:b===0?null:g.parent?.key||null,dropAllowed:w}}function me(e,t){if(!e)return;let{multiple:n}=t;return n?e.slice():e.length?[e[0]]:e}function he(e){if(!e)return null;let t;if(Array.isArray(e))t={checkedKeys:e,halfCheckedKeys:void 0};else if(typeof e==`object`)t={checkedKeys:e.checked||void 0,halfCheckedKeys:e.halfChecked||void 0};else return b(!1,"`checkedKeys` is not an array or an object"),null;return t}function ge(e,t){let n=new Set;function r(e){if(n.has(e))return;let i=D(t,e);if(!i)return;n.add(e);let{parent:a,node:o}=i;o.disabled||a&&r(a.key)}return(e||[]).forEach(e=>{r(e)}),[...n]}function _e(e,t){let n=new Set;return e.forEach(e=>{t.has(e)||n.add(e)}),n}function ve(e){let{disabled:t,disableCheckbox:n,checkable:r}=e||{};return!!(t||n)||r===!1}function ye(e,t,n,r){let i=new Set(e),a=new Set;for(let e=0;e<=n;e+=1)(t.get(e)||new Set).forEach(e=>{let{key:t,node:n,children:a=[]}=e;i.has(t)&&!r(n)&&a.filter(e=>!r(e.node)).forEach(e=>{i.add(e.key)})});let o=new Set;for(let e=n;e>=0;--e)(t.get(e)||new Set).forEach(e=>{let{parent:t,node:n}=e;if(r(n)||!e.parent||o.has(e.parent.key))return;if(r(e.parent.node)){o.add(t.key);return}let s=!0,c=!1;(t.children||[]).filter(e=>!r(e.node)).forEach(({key:e})=>{let t=i.has(e);s&&!t&&(s=!1),!c&&(t||a.has(e))&&(c=!0)}),s&&i.add(t.key),c&&a.add(t.key),o.add(t.key)});return{checkedKeys:Array.from(i),halfCheckedKeys:Array.from(_e(a,i))}}function be(e,t,n,r,i){let a=new Set(e),o=new Set(t);for(let e=0;e<=r;e+=1)(n.get(e)||new Set).forEach(e=>{let{key:t,node:n,children:r=[]}=e;!a.has(t)&&!o.has(t)&&!i(n)&&r.filter(e=>!i(e.node)).forEach(e=>{a.delete(e.key)})});o=new Set;let s=new Set;for(let e=r;e>=0;--e)(n.get(e)||new Set).forEach(e=>{let{parent:t,node:n}=e;if(i(n)||!e.parent||s.has(e.parent.key))return;if(i(e.parent.node)){s.add(t.key);return}let r=!0,c=!1;(t.children||[]).filter(e=>!i(e.node)).forEach(({key:e})=>{let t=a.has(e);r&&!t&&(r=!1),!c&&(t||o.has(e))&&(c=!0)}),r||a.delete(t.key),c&&o.add(t.key),s.add(t.key)});return{checkedKeys:Array.from(a),halfCheckedKeys:Array.from(_e(o,a))}}function xe(e,t,n,r){let i=[],a;a=r||ve;let o=new Set(e.filter(e=>{let t=!!D(n,e);return t||i.push(e),t})),s=new Map,c=0;Object.keys(n).forEach(e=>{let t=n[e],{level:r}=t,i=s.get(r);i||(i=new Set,s.set(r,i)),i.add(t),c=Math.max(c,r)}),b(!i.length,`Tree missing follow keys: ${i.slice(0,100).map(e=>`'${e}'`).join(`, `)}`);let l;return l=t===!0?ye(o,s,c,a):be(o,t.halfCheckedKeys,s,c,a),l}function Se(){return Se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se.apply(this,arguments)}var Ce=10,we=class extends C.Component{static defaultProps={prefixCls:`rc-tree`,showLine:!1,showIcon:!0,selectable:!0,multiple:!1,checkable:!1,disabled:!1,checkStrictly:!1,draggable:!1,defaultExpandParent:!0,autoExpandParent:!1,defaultExpandAll:!1,defaultExpandedKeys:[],defaultCheckedKeys:[],defaultSelectedKeys:[],dropIndicatorRender:te,allowDrop:()=>!0,expandAction:!1};static TreeNode=B;destroyed=!1;delayedDragEnterLogic;loadingRetryTimes={};state={keyEntities:{},indent:null,selectedKeys:[],checkedKeys:[],halfCheckedKeys:[],loadedKeys:[],loadingKeys:[],expandedKeys:[],draggingNodeKey:null,dragChildrenKeys:[],dropTargetKey:null,dropPosition:null,dropContainerKey:null,dropLevelOffset:null,dropTargetPos:null,dropAllowed:!0,dragOverNodeKey:null,treeData:[],flattenNodes:[],activeKey:null,listChanging:!1,prevProps:null,fieldNames:j()};dragStartMousePosition=null;dragNodeProps=null;currentMouseOverDroppableNodeKey=null;focusedByMouse=!1;listRef=C.createRef();componentDidMount(){this.destroyed=!1,this.onUpdated()}componentDidUpdate(){this.onUpdated()}onUpdated(){let{activeKey:e,itemScrollOffset:t=0}=this.props;e!==void 0&&e!==this.state.activeKey&&(this.setState({activeKey:e}),e!==null&&this.scrollTo({key:e,offset:t}))}componentWillUnmount(){window.removeEventListener(`dragend`,this.onWindowDragEnd),this.destroyed=!0}static getDerivedStateFromProps(e,t){let{prevProps:n}=t,r={prevProps:e};function i(t){return!n&&e.hasOwnProperty(t)||n&&n[t]!==e[t]}let a,{fieldNames:o}=t;if(i(`fieldNames`)&&(o=j(e.fieldNames),r.fieldNames=o),i(`treeData`)?{treeData:a}=e:i(`children`)&&(b(!1,"`children` of Tree is deprecated. Please use `treeData` instead."),a=M(e.children)),a){r.treeData=a;let e=P(a,{fieldNames:o});r.keyEntities={[W]:K,...e.keyEntities}}let s=r.keyEntities||t.keyEntities;if(i(`expandedKeys`)||n&&i(`autoExpandParent`))r.expandedKeys=e.autoExpandParent||!n&&e.defaultExpandParent?ge(e.expandedKeys,s):e.expandedKeys;else if(!n&&e.defaultExpandAll){let e={...s};delete e[W];let t=[];Object.keys(e).forEach(n=>{let r=e[n];r.children&&r.children.length&&t.push(r.key)}),r.expandedKeys=t}else!n&&e.defaultExpandedKeys&&(r.expandedKeys=e.autoExpandParent||e.defaultExpandParent?ge(e.defaultExpandedKeys,s):e.defaultExpandedKeys);if(r.expandedKeys||delete r.expandedKeys,(a||r.expandedKeys)&&(r.flattenNodes=N(a||t.treeData,r.expandedKeys||t.expandedKeys,o)),e.selectable&&(i(`selectedKeys`)?r.selectedKeys=me(e.selectedKeys,e):!n&&e.defaultSelectedKeys&&(r.selectedKeys=me(e.defaultSelectedKeys,e))),e.checkable){let o;if(i(`checkedKeys`)?o=he(e.checkedKeys)||{}:!n&&e.defaultCheckedKeys?o=he(e.defaultCheckedKeys)||{}:a&&(o=he(e.checkedKeys)||{checkedKeys:t.checkedKeys,halfCheckedKeys:t.halfCheckedKeys}),o){let{checkedKeys:t=[],halfCheckedKeys:n=[]}=o;if(!e.checkStrictly){let e=xe(t,!0,s);({checkedKeys:t,halfCheckedKeys:n}=e)}r.checkedKeys=t,r.halfCheckedKeys=n}}return i(`loadedKeys`)&&(r.loadedKeys=e.loadedKeys),r}onNodeDragStart=(e,t)=>{let{expandedKeys:n,keyEntities:r}=this.state,{onDragStart:i}=this.props,{eventKey:a}=t;this.dragNodeProps=t,this.dragStartMousePosition={x:e.clientX,y:e.clientY};let o=J(n,a);this.setState({draggingNodeKey:a,dragChildrenKeys:de(a,r),indent:this.listRef.current.getIndentWidth()}),this.setExpandedKeys(o),window.addEventListener(`dragend`,this.onWindowDragEnd),i?.({event:e,node:I(t)})};onNodeDragEnter=(e,t)=>{let{expandedKeys:n,keyEntities:r,dragChildrenKeys:i,flattenNodes:a,indent:o}=this.state,{onDragEnter:s,onExpand:c,allowDrop:l,direction:u}=this.props,{pos:d,eventKey:f}=t;if(this.currentMouseOverDroppableNodeKey!==f&&(this.currentMouseOverDroppableNodeKey=f),!this.dragNodeProps){this.resetDragState();return}let{dropPosition:p,dropLevelOffset:m,dropTargetKey:h,dropContainerKey:g,dropTargetPos:_,dropAllowed:v,dragOverNodeKey:y}=pe(e,this.dragNodeProps,t,o,this.dragStartMousePosition,l,a,r,n,u);if(i.includes(h)||!v){this.resetDragState();return}if(this.delayedDragEnterLogic||={},Object.keys(this.delayedDragEnterLogic).forEach(e=>{clearTimeout(this.delayedDragEnterLogic[e])}),this.dragNodeProps.eventKey!==t.eventKey&&(e.persist(),this.delayedDragEnterLogic[d]=window.setTimeout(()=>{if(this.state.draggingNodeKey===null)return;let i=[...n],a=D(r,t.eventKey);a&&(a.children||[]).length&&(i=Y(n,t.eventKey)),this.props.hasOwnProperty(`expandedKeys`)||this.setExpandedKeys(i),c?.(i,{node:I(t),expanded:!0,nativeEvent:e.nativeEvent})},800)),this.dragNodeProps.eventKey===h&&m===0){this.resetDragState();return}this.setState({dragOverNodeKey:y,dropPosition:p,dropLevelOffset:m,dropTargetKey:h,dropContainerKey:g,dropTargetPos:_,dropAllowed:v}),s?.({event:e,node:I(t),expandedKeys:n})};onNodeDragOver=(e,t)=>{let{dragChildrenKeys:n,flattenNodes:r,keyEntities:i,expandedKeys:a,indent:o}=this.state,{onDragOver:s,allowDrop:c,direction:l}=this.props;if(!this.dragNodeProps)return;let{dropPosition:u,dropLevelOffset:d,dropTargetKey:f,dropContainerKey:p,dropTargetPos:m,dropAllowed:h,dragOverNodeKey:g}=pe(e,this.dragNodeProps,t,o,this.dragStartMousePosition,c,r,i,a,l);n.includes(f)||!h||(this.dragNodeProps.eventKey===f&&d===0?(this.state.dropPosition!==null||this.state.dropLevelOffset!==null||this.state.dropTargetKey!==null||this.state.dropContainerKey!==null||this.state.dropTargetPos!==null||this.state.dropAllowed!==!1||this.state.dragOverNodeKey!==null)&&this.resetDragState():(u!==this.state.dropPosition||d!==this.state.dropLevelOffset||f!==this.state.dropTargetKey||p!==this.state.dropContainerKey||m!==this.state.dropTargetPos||h!==this.state.dropAllowed||g!==this.state.dragOverNodeKey)&&this.setState({dropPosition:u,dropLevelOffset:d,dropTargetKey:f,dropContainerKey:p,dropTargetPos:m,dropAllowed:h,dragOverNodeKey:g}),s?.({event:e,node:I(t)}))};onNodeDragLeave=(e,t)=>{this.currentMouseOverDroppableNodeKey===t.eventKey&&!e.currentTarget.contains(e.relatedTarget)&&(this.resetDragState(),this.currentMouseOverDroppableNodeKey=null);let{onDragLeave:n}=this.props;n?.({event:e,node:I(t)})};onWindowDragEnd=e=>{this.onNodeDragEnd(e,null,!0),window.removeEventListener(`dragend`,this.onWindowDragEnd)};onNodeDragEnd=(e,t)=>{let{onDragEnd:n}=this.props;this.setState({dragOverNodeKey:null}),this.cleanDragState(),n?.({event:e,node:I(t)}),this.dragNodeProps=null,window.removeEventListener(`dragend`,this.onWindowDragEnd)};onNodeDrop=(e,t,n=!1)=>{let{dragChildrenKeys:r,dropPosition:i,dropTargetKey:a,dropTargetPos:o,dropAllowed:s}=this.state;if(!s)return;let{onDrop:c}=this.props;if(this.setState({dragOverNodeKey:null}),this.cleanDragState(),a===null)return;let l={...F(a,this.getTreeNodeRequiredProps()),active:this.getActiveItem()?.key===a,data:D(this.state.keyEntities,a).node},u=r.includes(a);b(!u,`Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.`);let d=X(o),f={event:e,node:I(l),dragNode:this.dragNodeProps?I(this.dragNodeProps):null,dragNodesKeys:[this.dragNodeProps.eventKey].concat(r),dropToGap:i!==0,dropPosition:i+Number(d[d.length-1])};n||c?.(f),this.dragNodeProps=null};resetDragState(){this.setState({dragOverNodeKey:null,dropPosition:null,dropLevelOffset:null,dropTargetKey:null,dropContainerKey:null,dropTargetPos:null,dropAllowed:!1})}cleanDragState=()=>{let{draggingNodeKey:e}=this.state;e!==null&&this.setState({draggingNodeKey:null,dropPosition:null,dropContainerKey:null,dropTargetKey:null,dropLevelOffset:null,dropAllowed:!0,dragOverNodeKey:null}),this.dragStartMousePosition=null,this.currentMouseOverDroppableNodeKey=null};triggerExpandActionExpand=(e,t)=>{let{expandedKeys:n,flattenNodes:r}=this.state,{expanded:i,key:a,isLeaf:o}=t;if(o||e.shiftKey||e.metaKey||e.ctrlKey)return;let s=r.filter(e=>e.key===a)[0],c=I({...F(a,this.getTreeNodeRequiredProps()),data:s.data});this.setExpandedKeys(i?J(n,a):Y(n,a)),this.onNodeExpand(e,c)};onNodeClick=(e,t)=>{let{onClick:n,expandAction:r}=this.props;r===`click`&&this.triggerExpandActionExpand(e,t),n?.(e,t)};onNodeDoubleClick=(e,t)=>{let{onDoubleClick:n,expandAction:r}=this.props;r===`doubleClick`&&this.triggerExpandActionExpand(e,t),n?.(e,t)};onNodeSelect=(e,t)=>{let{selectedKeys:n}=this.state,{keyEntities:r,fieldNames:i}=this.state,{onSelect:a,multiple:o}=this.props,{selected:s}=t,c=t[i.key],l=!s;n=l?o?Y(n,c):[c]:J(n,c);let u=n.map(e=>{let t=D(r,e);return t?t.node:null}).filter(Boolean);this.setUncontrolledState({selectedKeys:n}),a?.(n,{event:`select`,selected:l,node:t,selectedNodes:u,nativeEvent:e.nativeEvent})};onNodeCheck=(e,t,n)=>{let{keyEntities:r,checkedKeys:i,halfCheckedKeys:a}=this.state,{checkStrictly:o,onCheck:s}=this.props,{key:c}=t,l,u={event:`check`,node:t,checked:n,nativeEvent:e.nativeEvent};if(o){let e=n?Y(i,c):J(i,c);l={checked:e,halfChecked:J(a,c)},u.checkedNodes=e.map(e=>D(r,e)).filter(Boolean).map(e=>e.node),this.setUncontrolledState({checkedKeys:e})}else{let{checkedKeys:e,halfCheckedKeys:t}=xe([...i,c],!0,r);if(!n){let n=new Set(e);n.delete(c),{checkedKeys:e,halfCheckedKeys:t}=xe(Array.from(n),{checked:!1,halfCheckedKeys:t},r)}l=e,u.checkedNodes=[],u.checkedNodesPositions=[],u.halfCheckedKeys=t,e.forEach(e=>{let t=D(r,e);if(!t)return;let{node:n,pos:i}=t;u.checkedNodes.push(n),u.checkedNodesPositions.push({node:n,pos:i})}),this.setUncontrolledState({checkedKeys:e},!1,{halfCheckedKeys:t})}s?.(l,u)};onNodeLoad=e=>{let{key:t}=e,{keyEntities:n}=this.state;if(D(n,t)?.children?.length)return;let r=new Promise((n,r)=>{this.setState(({loadedKeys:i=[],loadingKeys:a=[]})=>{let{loadData:o,onLoad:s}=this.props;return!o||i.includes(t)||a.includes(t)?null:(o(e).then(()=>{let{loadedKeys:r}=this.state,i=Y(r,t);s?.(i,{event:`load`,node:e}),this.setUncontrolledState({loadedKeys:i}),this.setState(e=>({loadingKeys:J(e.loadingKeys,t)})),n()}).catch(e=>{if(this.setState(e=>({loadingKeys:J(e.loadingKeys,t)})),this.loadingRetryTimes[t]=(this.loadingRetryTimes[t]||0)+1,this.loadingRetryTimes[t]>=Ce){let{loadedKeys:e}=this.state;b(!1,"Retry for `loadData` many times but still failed. No more retry."),this.setUncontrolledState({loadedKeys:Y(e,t)}),n()}r(e)}),{loadingKeys:Y(a,t)})})});return r.catch(()=>{}),r};onNodeMouseEnter=(e,t)=>{let{onMouseEnter:n}=this.props;n?.({event:e,node:t})};onNodeMouseLeave=(e,t)=>{let{onMouseLeave:n}=this.props;n?.({event:e,node:t})};onNodeContextMenu=(e,t)=>{let{onRightClick:n}=this.props;n&&(e.preventDefault(),n({event:e,node:t}))};onMouseDown=e=>{this.focusedByMouse=!0;let{onMouseDown:t}=this.props;t?.(e)};onMouseUp=e=>{this.focusedByMouse=!1;let{onMouseUp:t}=this.props;t?.(e)};onFocus=(...e)=>{let{onFocus:t,disabled:n}=this.props,{activeKey:r,selectedKeys:i,flattenNodes:a}=this.state;if(!this.focusedByMouse&&!n&&r===null){let e=i.find(e=>a.some(t=>t.key===e));e===void 0?this.onActiveChange(a?.[0]?.key||null):this.onActiveChange(e)}t?.(...e)};onBlur=(...e)=>{this.focusedByMouse=!1;let{onBlur:t}=this.props;this.onActiveChange(null),t?.(...e)};getTreeNodeRequiredProps=()=>{let{expandedKeys:e,selectedKeys:t,loadedKeys:n,loadingKeys:r,checkedKeys:i,halfCheckedKeys:a,dragOverNodeKey:o,dropPosition:s,keyEntities:c}=this.state;return{expandedKeys:e||[],selectedKeys:t||[],loadedKeys:n||[],loadingKeys:r||[],checkedKeys:i||[],halfCheckedKeys:a||[],dragOverNodeKey:o,dropPosition:s,keyEntities:c}};setExpandedKeys=e=>{let{treeData:t,fieldNames:n}=this.state,r=N(t,e,n);this.setUncontrolledState({expandedKeys:e,flattenNodes:r},!0)};onNodeExpand=(e,t)=>{let{expandedKeys:n}=this.state,{listChanging:r,fieldNames:i}=this.state,{onExpand:a,loadData:o}=this.props,{expanded:s}=t,c=t[i.key];if(r)return;let l=n.includes(c),u=!s;if(b(s&&l||!s&&!l,`Expand state not sync with index check`),n=u?Y(n,c):J(n,c),this.setExpandedKeys(n),a?.(n,{node:t,expanded:u,nativeEvent:e.nativeEvent}),u&&o){let e=this.onNodeLoad(t);e&&e.then(()=>{let e=N(this.state.treeData,n,i);this.setUncontrolledState({flattenNodes:e})}).catch(()=>{let{expandedKeys:e}=this.state,t=J(e,c);this.setExpandedKeys(t)})}};onListChangeStart=()=>{this.setUncontrolledState({listChanging:!0})};onListChangeEnd=()=>{setTimeout(()=>{this.setUncontrolledState({listChanging:!1})})};onActiveChange=e=>{let{activeKey:t}=this.state,{onActiveChange:n,itemScrollOffset:r=0}=this.props;t!==e&&(this.setState({activeKey:e}),e!==null&&this.scrollTo({key:e,offset:r}),n?.(e))};getActiveItem=()=>{let{activeKey:e,flattenNodes:t}=this.state;return e===null?null:t.find(({key:t})=>t===e)||null};offsetActiveKey=e=>{let{flattenNodes:t,activeKey:n}=this.state,r=t.findIndex(({key:e})=>e===n);r===-1&&e<0&&(r=t.length),r=(r+e+t.length)%t.length;let i=t[r];if(i){let{key:e}=i;this.onActiveChange(e)}else this.onActiveChange(null)};onKeyDown=e=>{let{activeKey:t,expandedKeys:n,checkedKeys:r,flattenNodes:i,keyEntities:a}=this.state,{onKeyDown:o,checkable:s,selectable:c,disabled:l,loadData:u}=this.props;if(l)return;switch(e.key){case`ArrowUp`:this.offsetActiveKey(-1),e.preventDefault();break;case`ArrowDown`:this.offsetActiveKey(1),e.preventDefault();break;case`Home`:this.onActiveChange(i?.[0]?.key),e.preventDefault();break;case`End`:this.onActiveChange(i?.[i.length-1]?.key),e.preventDefault()}let d=this.getActiveItem();if(d&&d.data){let i=I({...F(t,this.getTreeNodeRequiredProps()),data:d.data,active:!0}),o=!!D(a,t)?.children?.length,l=!re(d.data.isLeaf,u,o,i.loaded),f=s&&!i.disabled&&i.checkable!==!1&&!i.disableCheckbox,p=!s&&c&&!i.disabled&&i.selectable!==!1;switch(e.key){case`ArrowLeft`:l&&n.includes(t)?this.onNodeExpand({},i):d.parent&&this.onActiveChange(d.parent.key),e.preventDefault();break;case`ArrowRight`:l&&!n.includes(t)?this.onNodeExpand({},i):d.children&&d.children.length&&this.onActiveChange(d.children[0].key),e.preventDefault();break;case`Enter`:l?(e.preventDefault(),this.onNodeExpand({},i)):f?r.includes(t)||(e.preventDefault(),this.onNodeCheck({},i,!0)):p&&!i.selected&&(e.preventDefault(),this.onNodeSelect({},i));break;case` `:f?(e.preventDefault(),this.onNodeCheck({},i,!r.includes(t))):p&&(e.preventDefault(),this.onNodeSelect({},i))}}o?.(e)};setUncontrolledState=(e,t=!1,n=null)=>{if(!this.destroyed){let r=!1,i=!0,a={};Object.keys(e).forEach(t=>{if(this.props.hasOwnProperty(t)){i=!1;return}r=!0,a[t]=e[t]}),r&&(!t||i)&&this.setState({...a,...n})}};scrollTo=e=>{this.listRef.current.scrollTo(e)};render(){let{flattenNodes:e,keyEntities:t,draggingNodeKey:n,dropLevelOffset:i,dropContainerKey:a,dropTargetKey:o,dropPosition:s,dragOverNodeKey:c,indent:l}=this.state,{prefixCls:u,className:d,style:f,styles:p,classNames:m,showLine:h,focusable:_,tabIndex:v=0,selectable:y,showIcon:b,icon:x,switcherIcon:S,draggable:w,checkable:ee,checkStrictly:te,disabled:E,motion:D,loadData:O,filterTreeNode:k,height:A,itemHeight:j,scrollWidth:M,virtual:N,titleRender:ne,dropIndicatorRender:P,onContextMenu:re,onScroll:F,direction:I,rootClassName:L,rootStyle:R}=this.props,z=g(this.props,{aria:!0,data:!0}),ie;w&&(ie=typeof w==`object`?w:typeof w==`function`?{nodeDraggable:w}:{});let B={styles:p,classNames:m,prefixCls:u,selectable:y,showIcon:b,icon:x,switcherIcon:S,draggable:ie,draggingNodeKey:n,checkable:ee,checkStrictly:te,disabled:E,keyEntities:t,dropLevelOffset:i,dropContainerKey:a,dropTargetKey:o,dropPosition:s,dragOverNodeKey:c,indent:l,direction:I,dropIndicatorRender:P,loadData:O,filterTreeNode:k,titleRender:ne,onNodeClick:this.onNodeClick,onNodeDoubleClick:this.onNodeDoubleClick,onNodeExpand:this.onNodeExpand,onNodeSelect:this.onNodeSelect,onNodeCheck:this.onNodeCheck,onNodeLoad:this.onNodeLoad,onNodeMouseEnter:this.onNodeMouseEnter,onNodeMouseLeave:this.onNodeMouseLeave,onNodeContextMenu:this.onNodeContextMenu,onNodeDragStart:this.onNodeDragStart,onNodeDragEnter:this.onNodeDragEnter,onNodeDragOver:this.onNodeDragOver,onNodeDragLeave:this.onNodeDragLeave,onNodeDragEnd:this.onNodeDragEnd,onNodeDrop:this.onNodeDrop};return C.createElement(T.Provider,{value:B},C.createElement(`div`,{className:r(u,d,L,{[`${u}-show-line`]:h}),style:R},C.createElement(ue,Se({ref:this.listRef,prefixCls:u,style:f,data:e,disabled:E,selectable:y,checkable:!!ee,motion:D,dragging:n!==null,height:A,itemHeight:j,virtual:N,focusable:_,tabIndex:v,activeItem:this.getActiveItem(),onFocus:this.onFocus,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onActiveChange:this.onActiveChange,onListChangeStart:this.onListChangeStart,onListChangeEnd:this.onListChangeEnd,onContextMenu:re,onScroll:F,scrollWidth:M},this.getTreeNodeRequiredProps(),z))))}},Q=i(),Te={sm:30,md:34,lg:38},Ee=()=>({height:0,opacity:0}),De=e=>{let t=Array.from(e.children);return t.length===0?0:t.reduce((e,t)=>{let n=parseFloat(getComputedStyle(t).marginTop)||0;return e+t.getBoundingClientRect().height+n},0)},Oe=e=>({height:De(e),opacity:1}),ke={motionName:`lg-tree-motion`,motionDeadline:300,onAppearStart:Ee,onAppearActive:Oe,onEnterStart:Ee,onEnterActive:Oe,onLeaveStart:e=>({height:De(e),opacity:1}),onLeaveActive:Ee},$=C.forwardRef((e,t)=>{let{treeData:r,fieldNames:i,size:c=`md`,expandedKeys:l,defaultExpandedKeys:u,defaultExpandAll:d,autoExpandParent:f,expandAction:p=`click`,onExpand:h,selectable:g=!0,multiple:_=!1,selectedKeys:v,defaultSelectedKeys:y,onSelect:b,checkable:x=!1,checkStrictly:S=!1,checkedKeys:w,defaultCheckedKeys:T,onCheck:ee,showIcon:te=!1,icon:E,switcherIcon:D,indentGuide:O=`line`,titleRender:k,loadData:A,loadedKeys:j,draggable:M=!1,allowDrop:N,onDrop:ne,height:P,itemHeight:re,virtual:F,disabled:I=!1,loading:L=!1,empty:R,onRightClick:z,animated:ie=!0,className:B,style:V}=e,H=a(`Tree`),ae=(0,C.useMemo)(()=>{if(E)return typeof E==`function`?e=>E(e.data,{expanded:!!e.expanded,isLeaf:!!e.isLeaf}):E},[E]),oe=(0,C.useMemo)(()=>D===void 0?e=>e.isLeaf?null:(0,Q.jsx)(o,{className:`lg-tree__switcher-icon`,size:16,"aria-hidden":!0}):typeof D==`function`?e=>D({expanded:!!e.expanded,isLeaf:!!e.isLeaf}):D,[D]),se=(0,C.useMemo)(()=>{if(M)return{icon:!1,nodeDraggable:typeof M==`function`?e=>M(e):void 0}},[M]),U=(0,C.useCallback)((e,t)=>{h?.(e,{node:t.node,expanded:t.expanded})},[h]),W=(0,C.useCallback)((e,t)=>{b?.(e,{node:t.node,selected:t.selected,selectedNodes:t.selectedNodes})},[b]),G=(0,C.useCallback)((e,t)=>{ee?.(e,{node:t.node,checked:t.checked,checkedNodes:t.checkedNodes,halfCheckedKeys:t.halfCheckedKeys})},[ee]),K=(0,C.useCallback)(e=>{ne?.({dragNode:e.dragNode,node:e.node,dropPosition:e.dropPosition,dropToGap:e.dropToGap})},[ne]),ce=(0,C.useMemo)(()=>{if(N)return e=>N({dragNode:e.dragNode,dropNode:e.dropNode,dropPosition:e.dropPosition})},[N]),le=!r||r.length===0,q={};return l!==void 0&&(q.expandedKeys=l),v!==void 0&&(q.selectedKeys=v),w!==void 0&&(q.checkedKeys=w),j!==void 0&&(q.loadedKeys=j),ce!==void 0&&(q.allowDrop=ce),(0,Q.jsxs)(`div`,{ref:t,className:n(`lg-tree`,`lg-tree--${c}`,`lg-tree--guide-${O}`,x&&`lg-tree--checkable`,I&&`lg-tree--disabled`,L&&`lg-tree--loading`,B),style:V,children:[L&&(0,Q.jsx)(`div`,{className:`lg-tree__loading-mask`,children:(0,Q.jsx)(m,{size:`md`})}),le?(0,Q.jsx)(`div`,{className:`lg-tree__empty`,children:R??(0,Q.jsx)(s,{size:`sm`,description:H.empty})}):(0,Q.jsx)(we,{prefixCls:`lg-tree`,treeData:r,fieldNames:i,defaultExpandedKeys:u,defaultExpandAll:d,autoExpandParent:f,expandAction:p,onExpand:U,selectable:g,multiple:_,defaultSelectedKeys:y,onSelect:W,checkable:x,checkStrictly:S,defaultCheckedKeys:T,onCheck:G,showIcon:te,icon:ae,switcherIcon:oe,titleRender:k,loadData:A,draggable:se,onDrop:K,height:P,itemHeight:re??Te[c],virtual:F,disabled:I,onRightClick:z,motion:ie?ke:void 0,...q})]})});$.displayName=`Tree`;var Ae=[{key:`finance`,title:`Finance Analysis`,children:[{key:`finance-annual`,title:`Annual Report`},{key:`finance-budget`,title:`Budget Execution`},{key:`finance-cost`,title:`Cost Breakdown`}]},{key:`sales`,title:`Sales Analysis`,children:[{key:`sales-review`,title:`Performance Review`},{key:`sales-region`,title:`Regional Breakdown`,children:[{key:`sales-region-north`,title:`North Region`},{key:`sales-region-south`,title:`South Region`}]}]},{key:`customer`,title:`Customer Satisfaction`}];function je(){return(0,Q.jsx)(`div`,{style:{width:280},children:(0,Q.jsx)($,{treeData:Ae,defaultExpandedKeys:[`finance`,`sales`],defaultSelectedKeys:[`finance-budget`]})})}var Me=`import { Tree } from "lingee-ui";
import type { TreeNodeData } from "lingee-ui";

const treeData: TreeNodeData[] = [
  {
    key: "finance",
    title: "Finance Analysis",
    children: [
      { key: "finance-annual", title: "Annual Report" },
      { key: "finance-budget", title: "Budget Execution" },
      { key: "finance-cost", title: "Cost Breakdown" },
    ],
  },
  {
    key: "sales",
    title: "Sales Analysis",
    children: [
      { key: "sales-review", title: "Performance Review" },
      {
        key: "sales-region",
        title: "Regional Breakdown",
        children: [
          { key: "sales-region-north", title: "North Region" },
          { key: "sales-region-south", title: "South Region" },
        ],
      },
    ],
  },
  { key: "customer", title: "Customer Satisfaction" },
];

export default function BasicDemo() {
  return (
    <div style={{ width: 280 }}>
      <Tree
        treeData={treeData}
        defaultExpandedKeys={["finance", "sales"]}
        defaultSelectedKeys={["finance-budget"]}
      />
    </div>
  );
}
`,Ne=[{key:`reports`,title:`Reports`,children:[{key:`reports-daily`,title:`Daily Report`},{key:`reports-weekly`,title:`Weekly Report`},{key:`reports-locked`,title:`Archived Report`,disableCheckbox:!0}]},{key:`dashboards`,title:`Dashboards`,children:[{key:`dashboards-sales`,title:`Sales Overview`},{key:`dashboards-finance`,title:`Finance Overview`}]}];function Pe(){let[e,t]=(0,C.useState)([`reports-daily`]);return(0,Q.jsx)(`div`,{style:{width:280},children:(0,Q.jsx)($,{checkable:!0,treeData:Ne,defaultExpandAll:!0,checkedKeys:e,onCheck:e=>t(e)})})}var Fe=`import { useState } from "react";
import { Tree } from "lingee-ui";
import type { TreeNodeData } from "lingee-ui";
import type { Key } from "react";

const treeData: TreeNodeData[] = [
  {
    key: "reports",
    title: "Reports",
    children: [
      { key: "reports-daily", title: "Daily Report" },
      { key: "reports-weekly", title: "Weekly Report" },
      { key: "reports-locked", title: "Archived Report", disableCheckbox: true },
    ],
  },
  {
    key: "dashboards",
    title: "Dashboards",
    children: [
      { key: "dashboards-sales", title: "Sales Overview" },
      { key: "dashboards-finance", title: "Finance Overview" },
    ],
  },
];

export default function CheckableDemo() {
  const [checkedKeys, setCheckedKeys] = useState<Key[]>(["reports-daily"]);

  return (
    <div style={{ width: 280 }}>
      <Tree
        checkable
        treeData={treeData}
        defaultExpandAll
        checkedKeys={checkedKeys}
        onCheck={(keys) => setCheckedKeys(keys as Key[])}
      />
    </div>
  );
}
`,Ie=[{key:`docs`,title:`Documents`,children:[{key:`docs-spec`,title:`spec.md`,isLeaf:!0},{key:`docs-guide`,title:`guide.md`,isLeaf:!0}]},{key:`assets`,title:`Assets`,children:[{key:`assets-logo`,title:`logo.svg`,isLeaf:!0}]}];function Le(){return(0,Q.jsx)(`div`,{style:{width:280},children:(0,Q.jsx)($,{showIcon:!0,treeData:Ie,defaultExpandedKeys:[`docs`],icon:(e,{expanded:t,isLeaf:n})=>n?(0,Q.jsx)(l,{size:16}):t?(0,Q.jsx)(f,{size:16}):(0,Q.jsx)(u,{size:16})})})}var Re=`import { Tree } from "lingee-ui";
import { Folder, FolderOpen, FileEarmark } from "lingee-icon";
import type { TreeNodeData } from "lingee-ui";

const treeData: TreeNodeData[] = [
  {
    key: "docs",
    title: "Documents",
    children: [
      { key: "docs-spec", title: "spec.md", isLeaf: true },
      { key: "docs-guide", title: "guide.md", isLeaf: true },
    ],
  },
  {
    key: "assets",
    title: "Assets",
    children: [{ key: "assets-logo", title: "logo.svg", isLeaf: true }],
  },
];

export default function IconDemo() {
  return (
    <div style={{ width: 280 }}>
      <Tree
        showIcon
        treeData={treeData}
        defaultExpandedKeys={["docs"]}
        // 目录随展开态切换开 / 合两种图标，叶子固定为文件图标
        icon={(_node, { expanded, isLeaf }) => {
          if (isLeaf) return <FileEarmark size={16} />;
          return expanded ? <FolderOpen size={16} /> : <Folder size={16} />;
        }}
      />
    </div>
  );
}
`,ze=[{key:`folder`,title:`Workspace`,children:[{key:`session-1`,title:`Annual Finance Topic`},{key:`session-2`,title:`Sales Analysis Topic`},{key:`session-3`,title:`Customer Satisfaction`}]}];function Be(){return(0,Q.jsxs)(`div`,{style:{width:280},className:`demo-tree-actions`,children:[(0,Q.jsx)(`style`,{children:`
        .demo-tree-actions .lg-tree-title { display: flex; align-items: center; gap: 4px; }
        .demo-tree-actions .demo-tree-actions__label {
          flex: 1; min-width: 0; overflow: hidden;
          white-space: nowrap; text-overflow: ellipsis;
        }
        .demo-tree-actions .demo-tree-actions__ops { display: none; flex-shrink: 0; gap: 4px; }
        .demo-tree-actions .lg-tree-node-content-wrapper:hover .demo-tree-actions__ops { display: flex; }
      `}),(0,Q.jsx)($,{treeData:ze,defaultExpandAll:!0,titleRender:e=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{className:`demo-tree-actions__label`,children:e.title}),(0,Q.jsxs)(`span`,{className:`demo-tree-actions__ops`,onClick:e=>e.stopPropagation(),children:[(0,Q.jsx)(p,{variant:`link`,size:`sm`,shape:`round`,icon:(0,Q.jsx)(c,{size:14}),children:`Edit`}),(0,Q.jsx)(p,{variant:`text`,size:`sm`,shape:`circle`,icon:(0,Q.jsx)(d,{size:16}),"aria-label":`Open dashboard`})]})]})})]})}var Ve=`import { Tree, Button } from "lingee-ui";
import { Edit, LayoutDashboard } from "lingee-icon";
import type { TreeNodeData } from "lingee-ui";

const treeData: TreeNodeData[] = [
  {
    key: "folder",
    title: "Workspace",
    children: [
      { key: "session-1", title: "Annual Finance Topic" },
      { key: "session-2", title: "Sales Analysis Topic" },
      { key: "session-3", title: "Customer Satisfaction" },
    ],
  },
];

export default function TitleRenderDemo() {
  return (
    <div style={{ width: 280 }} className="demo-tree-actions">
      {/* 行内操作区仅 hover 显现：列表项数量多时常显会过于嘈杂 */}
      <style>{\`
        .demo-tree-actions .lg-tree-title { display: flex; align-items: center; gap: 4px; }
        .demo-tree-actions .demo-tree-actions__label {
          flex: 1; min-width: 0; overflow: hidden;
          white-space: nowrap; text-overflow: ellipsis;
        }
        .demo-tree-actions .demo-tree-actions__ops { display: none; flex-shrink: 0; gap: 4px; }
        .demo-tree-actions .lg-tree-node-content-wrapper:hover .demo-tree-actions__ops { display: flex; }
      \`}</style>
      <Tree
        treeData={treeData}
        defaultExpandAll
        titleRender={(node) => (
          <>
            <span className="demo-tree-actions__label">{node.title}</span>
            {/* 阻止冒泡，避免点操作按钮时误触发节点选中 */}
            <span
              className="demo-tree-actions__ops"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="link" size="sm" shape="round" icon={<Edit size={14} />}>
                Edit
              </Button>
              <Button
                variant="text"
                size="sm"
                shape="circle"
                icon={<LayoutDashboard size={16} />}
                aria-label="Open dashboard"
              />
            </span>
          </>
        )}
      />
    </div>
  );
}
`;function He(e,t,n){return e.map(e=>e.key===t?{...e,children:n}:e.children?{...e,children:He(e.children,t,n)}:e)}var Ue=[{key:`dept-sales`,title:`Sales Department`},{key:`dept-finance`,title:`Finance Department`},{key:`dept-hr`,title:`HR Department`,isLeaf:!0}];function We(){let[e,t]=(0,C.useState)(Ue);return(0,Q.jsx)(`div`,{style:{width:280},children:(0,Q.jsx)($,{treeData:e,loadData:e=>new Promise(n=>{setTimeout(()=>{t(t=>He(t,String(e.key),[{key:`${e.key}-a`,title:`Team A`,isLeaf:!0},{key:`${e.key}-b`,title:`Team B`,isLeaf:!0}])),n()},800)})})})}var Ge=`import { useState } from "react";
import { Tree } from "lingee-ui";
import type { TreeNodeData } from "lingee-ui";

/** 按 key 找到目标节点并写入子节点，返回新引用以触发重渲染 */
function attachChildren(
  nodes: TreeNodeData[],
  key: string,
  children: TreeNodeData[],
): TreeNodeData[] {
  return nodes.map((node) => {
    if (node.key === key) return { ...node, children };
    if (node.children) {
      return { ...node, children: attachChildren(node.children, key, children) };
    }
    return node;
  });
}

const initialData: TreeNodeData[] = [
  { key: "dept-sales", title: "Sales Department" },
  { key: "dept-finance", title: "Finance Department" },
  { key: "dept-hr", title: "HR Department", isLeaf: true },
];

export default function AsyncDemo() {
  const [treeData, setTreeData] = useState<TreeNodeData[]>(initialData);

  const loadData = (node: TreeNodeData) =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        setTreeData((prev) =>
          attachChildren(prev, String(node.key), [
            { key: \`\${node.key}-a\`, title: "Team A", isLeaf: true },
            { key: \`\${node.key}-b\`, title: "Team B", isLeaf: true },
          ]),
        );
        resolve();
      }, 800);
    });

  return (
    <div style={{ width: 280 }}>
      <Tree treeData={treeData} loadData={loadData} />
    </div>
  );
}
`,Ke=[{key:`group-a`,title:`Group A`,children:[{key:`a-1`,title:`Item A-1`},{key:`a-2`,title:`Item A-2`}]},{key:`group-b`,title:`Group B`,children:[{key:`b-1`,title:`Item B-1`},{key:`b-2`,title:`Item B-2`}]}];function qe(e,t){let n,r=e=>e.reduce((e,i)=>i.key===t?(n=i,e):(e.push(i.children?{...i,children:r(i.children)}:i),e),[]),i=r(e);return{removed:n,rest:i}}function Je(e,t,n,r,i){let a=e.findIndex(e=>e.key===t);if(a!==-1){if(!r){let t=e[a],r=[...e];return r[a]={...t,children:[...t.children??[],n]},r}let t=[...e];return t.splice(i>a?a+1:a,0,n),t}return e.map(e=>e.children?{...e,children:Je(e.children,t,n,r,i)}:e)}function Ye(){let[e,t]=(0,C.useState)(Ke);return(0,Q.jsx)(`div`,{style:{width:280},children:(0,Q.jsx)($,{treeData:e,defaultExpandAll:!0,draggable:!0,onDrop:n=>{let{removed:r,rest:i}=qe(e,String(n.dragNode.key));r&&t(Je(i,String(n.node.key),r,n.dropToGap,n.dropPosition))}})})}var Xe=`import { useState } from "react";
import { Tree } from "lingee-ui";
import type { TreeNodeData, TreeDropInfo } from "lingee-ui";

const initialData: TreeNodeData[] = [
  {
    key: "group-a",
    title: "Group A",
    children: [
      { key: "a-1", title: "Item A-1" },
      { key: "a-2", title: "Item A-2" },
    ],
  },
  {
    key: "group-b",
    title: "Group B",
    children: [
      { key: "b-1", title: "Item B-1" },
      { key: "b-2", title: "Item B-2" },
    ],
  },
];

/** 从树中摘除指定节点，返回被摘除的节点与剩余树 */
function detach(
  nodes: TreeNodeData[],
  key: string,
): { removed?: TreeNodeData; rest: TreeNodeData[] } {
  let removed: TreeNodeData | undefined;

  const walk = (list: TreeNodeData[]): TreeNodeData[] =>
    list.reduce<TreeNodeData[]>((acc, node) => {
      if (node.key === key) {
        removed = node;
        return acc;
      }
      acc.push(node.children ? { ...node, children: walk(node.children) } : node);
      return acc;
    }, []);

  // 必须先遍历再取 removed：对象字面量按书写顺序求值，
  // 写成 { removed, rest: walk(nodes) } 会在 walk 执行前就读到 undefined
  const rest = walk(nodes);
  return { removed, rest };
}

/**
 * 把节点插入到目标位置：落在节点内部时追加为子节点，落在间隙时插入为兄弟节点。
 *
 * dropPosition 是「目标在其父级中的索引 + 落点偏移」的绝对值，
 * 不是 -1/0/1，故需与目标自身索引比较才能判断插在其前还是其后。
 */
function insert(
  nodes: TreeNodeData[],
  targetKey: string,
  node: TreeNodeData,
  toGap: boolean,
  dropPosition: number,
): TreeNodeData[] {
  const index = nodes.findIndex((item) => item.key === targetKey);

  if (index !== -1) {
    if (!toGap) {
      const target = nodes[index];
      const next = [...nodes];
      next[index] = { ...target, children: [...(target.children ?? []), node] };
      return next;
    }
    const next = [...nodes];
    // dropPosition 大于目标索引说明落在其下方
    next.splice(dropPosition > index ? index + 1 : index, 0, node);
    return next;
  }

  return nodes.map((item) =>
    item.children
      ? { ...item, children: insert(item.children, targetKey, node, toGap, dropPosition) }
      : item,
  );
}

export default function DraggableDemo() {
  const [treeData, setTreeData] = useState<TreeNodeData[]>(initialData);

  const handleDrop = (info: TreeDropInfo) => {
    const { removed, rest } = detach(treeData, String(info.dragNode.key));
    if (!removed) return;
    setTreeData(
      insert(rest, String(info.node.key), removed, info.dropToGap, info.dropPosition),
    );
  };

  return (
    <div style={{ width: 280 }}>
      <Tree treeData={treeData} defaultExpandAll draggable onDrop={handleDrop} />
    </div>
  );
}
`,Ze=Array.from({length:20},(e,t)=>({key:`group-${t}`,title:`Group ${t+1}`,children:Array.from({length:20},(e,n)=>({key:`group-${t}-item-${n}`,title:`Item ${t+1}-${n+1}`,isLeaf:!0}))}));function Qe(){return(0,Q.jsx)(`div`,{style:{width:280},children:(0,Q.jsx)($,{treeData:Ze,defaultExpandAll:!0,height:320})})}var $e=`import { Tree } from "lingee-ui";
import type { TreeNodeData } from "lingee-ui";

// 20 组 × 20 项，共 420 个节点，用于验证虚拟滚动
const treeData: TreeNodeData[] = Array.from({ length: 20 }, (_, groupIndex) => ({
  key: \`group-\${groupIndex}\`,
  title: \`Group \${groupIndex + 1}\`,
  children: Array.from({ length: 20 }, (_, itemIndex) => ({
    key: \`group-\${groupIndex}-item-\${itemIndex}\`,
    title: \`Item \${groupIndex + 1}-\${itemIndex + 1}\`,
    isLeaf: true,
  })),
}));

export default function VirtualDemo() {
  return (
    <div style={{ width: 280 }}>
      <Tree treeData={treeData} defaultExpandAll height={320} />
    </div>
  );
}
`;export{Ge as a,Be as c,Fe as d,Pe as f,Ye as i,Re as l,je as m,Qe as n,We as o,Me as p,Xe as r,Ve as s,$e as t,Le as u};