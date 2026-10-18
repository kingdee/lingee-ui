import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{T as r,k as i}from"./tooltip-provider-dm2KS5Gs.js";import{n as a}from"./provider-C39Pd1jh.js";import{t as o}from"./ChevronDown-q--C40JR.js";import{t as s}from"./Edit-BEEc6A44.js";import{t as c}from"./FileEarmark-d9jeOEgd.js";import{n as l,r as u,t as d}from"./Location-CdBUqK87.js";import{t as f}from"./FolderOpen-DzX5QO8G.js";import{t as p}from"./button-FjdC9ckl.js";import{t as m}from"./empty-CMp4KUDl.js";import{t as h}from"./tag-CfUFlhfR.js";import{t as g}from"./spin-CXjHeefZ.js";import{b as _,n as v,o as y,s as b,t as x,y as S}from"./es-QAP5gfBV.js";import{t as C}from"./es-CA7lgOWv.js";import{t as w}from"./es-BWd70OUE.js";var T=e(t());function E(e,t){let n=Object.assign({},e);return Array.isArray(t)&&t.forEach(e=>{delete n[e]}),n}var ee=T.createContext(null),D=T.createContext({}),O=e=>{let{dropPosition:t,dropLevelOffset:n,indent:r}=e,i={pointerEvents:`none`,position:`absolute`,right:0,backgroundColor:`red`,height:2};switch(t){case-1:i.top=0,i.left=-n*r;break;case 1:i.bottom=0,i.left=-n*r;break;case 0:i.bottom=0,i.left=r}return T.createElement(`div`,{style:i})},k=T.memo(({prefixCls:e,level:t,isStart:n,isEnd:r})=>{let a=`${e}-indent-unit`,o=[];for(let e=0;e<t;e+=1)o.push(T.createElement(`span`,{key:e,className:i(a,{[`${a}-start`]:n[e],[`${a}-end`]:r[e]})}));return T.createElement(`span`,{"aria-hidden":`true`,className:`${e}-indent`},o)});function A(e,t){return e[t]}function j(e,t){return`${e}-${t}`}function M(e){return e&&e.type&&e.type.isTreeNode}function N(e,t){return e??t}function P(e){let{title:t,_title:n,key:r,children:i}=e||{},a=t||`title`;return{title:a,_title:n||[a],key:r||`key`,children:i||`children`}}function F(e){function t(e){return x(e).map(e=>{if(!M(e))return S(!e,`Tree/TreeNode can only accept TreeNode as children.`),null;let{key:n}=e,{children:r,...i}=e.props,a={key:n,...i},o=t(r);return o.length&&(a.children=o),a}).filter(e=>e)}return t(e)}function I(e,t,n){let{_title:r,key:i,children:a}=P(n),o=new Set(t===!0?[]:t),s=[];function c(e,n=null){return e.map((l,u)=>{let d=j(n?n.pos:`0`,u),f=N(l[i],d),p;for(let e=0;e<r.length;e+=1){let t=r[e];if(l[t]!==void 0){p=l[t];break}}let m=Object.assign(E(l,[...r,i,a]),{title:p,key:f,parent:n,pos:d,children:null,data:l,isStart:[...n?n.isStart:[],u===0],isEnd:[...n?n.isEnd:[],u===e.length-1]});return s.push(m),m.children=t===!0||o.has(f)?c(l[a]||[],m):[],m})}return c(e),s}function L(e,t,n){let r={};r=typeof n==`object`?n:{externalGetKey:n},r||={};let{childrenPropName:i,externalGetKey:a,fieldNames:o}=r,{key:s,children:c}=P(o),l=i||c,u;a?typeof a==`string`?u=e=>e[a]:typeof a==`function`&&(u=e=>a(e)):u=(e,t)=>N(e[s],t);function d(n,r,i,a){let o=n?n[l]:e,s=n?j(i.pos,r):`0`,c=n?[...a,n]:[];n&&t({node:n,index:r,pos:s,key:u(n,s),parentPos:i.node?i.pos:null,level:i.level+1,nodes:c}),o&&o.forEach((e,t)=>{d(e,t,{node:n,pos:s,level:i?i.level+1:-1},c)})}d(null)}function R(e,{initWrapper:t,processEntity:n,onProcessFinished:r,externalGetKey:i,childrenPropName:a,fieldNames:o}={},s){let c=i||s,l={},u={},d={posEntities:l,keyEntities:u};return t&&(d=t(d)||d),L(e,e=>{let{node:t,index:r,pos:i,key:a,parentPos:o,level:s,nodes:c}=e,f={node:t,nodes:c,index:r,key:a,pos:i,level:s},p=N(a,i);l[i]=f,u[p]=f,f.parent=l[o],f.parent&&(f.parent.children=f.parent.children||[],f.parent.children.push(f)),n&&n(f,d)},{externalGetKey:c,childrenPropName:a,fieldNames:o}),r&&r(d),d}function te(e,t,n,r){return e===!1?!1:e||!t&&!n||t&&r&&!n}function z(e,{expandedKeys:t,selectedKeys:n,loadedKeys:r,loadingKeys:i,checkedKeys:a,halfCheckedKeys:o,dragOverNodeKey:s,dropPosition:c,keyEntities:l}){let u=A(l,e);return{eventKey:e,expanded:t.indexOf(e)!==-1,selected:n.indexOf(e)!==-1,loaded:r.indexOf(e)!==-1,loading:i.indexOf(e)!==-1,checked:a.indexOf(e)!==-1,halfChecked:o.indexOf(e)!==-1,pos:String(u?u.pos:``),dragOver:s===e&&c===0,dragOverGapTop:s===e&&c===-1,dragOverGapBottom:s===e&&c===1}}function B(e){let{data:t,expanded:n,selected:r,checked:i,loaded:a,loading:o,halfChecked:s,dragOver:c,dragOverGapTop:l,dragOverGapBottom:u,pos:d,active:f,eventKey:p}=e,m={...t,expanded:n,selected:r,checked:i,loaded:a,loading:o,halfChecked:s,dragOver:c,dragOverGapTop:l,dragOverGapBottom:u,pos:d,active:f,key:p};return`props`in m||Object.defineProperty(m,"props",{get(){return S(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),e}}),m}function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}var ne=`open`,re=`close`,H=`---`,U=e=>{let{eventKey:t,className:n,style:r,dragOver:a,dragOverGapTop:o,dragOverGapBottom:s,isLeaf:c,isStart:l,isEnd:u,expanded:d,selected:f,checked:p,halfChecked:m,loading:h,domRef:g,active:_,data:b,onMouseMove:x,selectable:S,treeId:C,...w}=e,E=y(C,t),O=T.useContext(ee),{classNames:j,styles:M}=O||{},N=T.useContext(D),P=T.useRef(null),[F,I]=T.useState(!1),L=!!(O.disabled||e.disabled||N.nodeDisabled?.(b)),R=T.useMemo(()=>!O.checkable||e.checkable===!1?!1:O.checkable,[O.checkable,e.checkable]),z=t=>{L||O.onNodeSelect(t,B(e))},U=t=>{L||!R||e.disableCheckbox||O.onNodeCheck(t,B(e),!p)},ie=T.useMemo(()=>typeof S==`boolean`?S:O.selectable,[S,O.selectable]),W=t=>{O.onNodeClick(t,B(e)),ie?z(t):U(t)},ae=t=>{O.onNodeDoubleClick(t,B(e))},oe=t=>{O.onNodeMouseEnter(t,B(e))},se=t=>{O.onNodeMouseLeave(t,B(e))},G=t=>{O.onNodeContextMenu(t,B(e))},K=T.useMemo(()=>!!(O.draggable&&(!O.draggable.nodeDraggable||O.draggable.nodeDraggable(b))),[O.draggable,b]),ce=t=>{t.stopPropagation(),I(!0),O.onNodeDragStart(t,e);try{t.dataTransfer.setData(`text/plain`,``)}catch{}},q=t=>{t.preventDefault(),t.stopPropagation(),O.onNodeDragEnter(t,e)},le=t=>{t.preventDefault(),t.stopPropagation(),O.onNodeDragOver(t,e)},ue=t=>{t.stopPropagation(),O.onNodeDragLeave(t,e)},de=t=>{t.stopPropagation(),I(!1),O.onNodeDragEnd(t,e)},J=t=>{t.preventDefault(),t.stopPropagation(),I(!1),O.onNodeDrop(t,e)},Y=t=>{h||O.onNodeExpand(t,B(e))},X=T.useMemo(()=>{let{children:e}=A(O.keyEntities,t)||{};return!!(e||[]).length},[O.keyEntities,t]),Z=T.useMemo(()=>te(c,O.loadData,X,e.loaded),[c,O.loadData,X,e.loaded]);T.useEffect(()=>{h||typeof O.loadData==`function`&&d&&!Z&&!e.loaded&&O.onNodeLoad(B(e))},[h,O.loadData,O.onNodeLoad,d,Z,e]);let fe=T.useMemo(()=>O.draggable?.icon?T.createElement(`span`,{className:`${O.prefixCls}-draggable-icon`},O.draggable.icon):null,[O.draggable]),pe=t=>{let n=e.switcherIcon||O.switcherIcon;return typeof n==`function`?n({...e,isLeaf:t}):n},me=()=>{if(Z){let e=pe(!0);return e===!1?null:T.createElement(`span`,{className:i(`${O.prefixCls}-switcher`,`${O.prefixCls}-switcher-noop`)},e)}let e=pe(!1);return e===!1?null:T.createElement(`span`,{onClick:Y,className:i(`${O.prefixCls}-switcher`,`${O.prefixCls}-switcher_${d?ne:re}`)},e)},he=T.useMemo(()=>{if(!R)return null;let t=typeof R==`boolean`?null:R;return T.createElement(`span`,{className:i(`${O.prefixCls}-checkbox`,{[`${O.prefixCls}-checkbox-checked`]:p,[`${O.prefixCls}-checkbox-indeterminate`]:!p&&m,[`${O.prefixCls}-checkbox-disabled`]:L||e.disableCheckbox}),onClick:U,role:`checkbox`,"aria-checked":m?`mixed`:p,"aria-disabled":L||e.disableCheckbox,"aria-labelledby":E},t)},[R,p,m,L,e.disableCheckbox,E]),ge=T.useMemo(()=>Z?null:d?ne:re,[Z,d]),_e=T.useMemo(()=>T.createElement(`span`,{className:i(j?.itemIcon,`${O.prefixCls}-iconEle`,`${O.prefixCls}-icon__${ge||`docu`}`,{[`${O.prefixCls}-icon_loading`]:h}),style:M?.itemIcon}),[O.prefixCls,ge,h]),ve=T.useMemo(()=>{let n=!!O.draggable;return!e.disabled&&n&&O.dragOverNodeKey===t?O.dropIndicatorRender({dropPosition:O.dropPosition,dropLevelOffset:O.dropLevelOffset,indent:O.indent,prefixCls:O.prefixCls,direction:O.direction}):null},[O.dropPosition,O.dropLevelOffset,O.indent,O.prefixCls,O.direction,O.draggable,O.dragOverNodeKey,O.dropIndicatorRender]),ye=T.useMemo(()=>{let{title:t=H}=e,n=`${O.prefixCls}-node-content-wrapper`,r;if(O.showIcon){let t=e.icon||O.icon;r=t?T.createElement(`span`,{className:i(j?.itemIcon,`${O.prefixCls}-iconEle`,`${O.prefixCls}-icon__customize`),style:M?.itemIcon},typeof t==`function`?t(e):t):_e}else O.loadData&&h&&(r=_e);let a;return a=typeof t==`function`?t(b):O.titleRender?O.titleRender(b):t,T.createElement(`span`,{ref:P,title:typeof t==`string`?t:``,className:i(n,`${n}-${ge||`normal`}`,{[`${O.prefixCls}-node-selected`]:!L&&(f||F)}),onMouseEnter:oe,onMouseLeave:se,onContextMenu:G,onClick:W,onDoubleClick:ae},r,T.createElement(`span`,{className:i(`${O.prefixCls}-title`,j?.itemTitle),style:M?.itemTitle},a),ve)},[O.prefixCls,O.showIcon,e,O.icon,_e,O.titleRender,b,ge,oe,se,G,W,ae]),be=v(w,{aria:!0,data:!0}),{level:xe}=A(O.keyEntities,t)||{},Se=u[u.length-1],Ce=!L&&K,we=O.draggingNodeKey===t;return T.createElement(`div`,V({ref:g,role:`treeitem`,id:E,"aria-expanded":Z?void 0:d,"aria-selected":ie&&!L?f:void 0,"aria-checked":R&&!L?m?`mixed`:p:void 0,"aria-disabled":L,className:i(n,`${O.prefixCls}-treenode`,j?.item,{[`${O.prefixCls}-treenode-disabled`]:L,[`${O.prefixCls}-treenode-switcher-${d?`open`:`close`}`]:!c,[`${O.prefixCls}-treenode-checkbox-checked`]:p,[`${O.prefixCls}-treenode-checkbox-indeterminate`]:m,[`${O.prefixCls}-treenode-selected`]:f,[`${O.prefixCls}-treenode-loading`]:h,[`${O.prefixCls}-treenode-active`]:_,[`${O.prefixCls}-treenode-leaf-last`]:Se,[`${O.prefixCls}-treenode-draggable`]:K,dragging:we,"drop-target":O.dropTargetKey===t,"drop-container":O.dropContainerKey===t,"drag-over":!L&&a,"drag-over-gap-top":!L&&o,"drag-over-gap-bottom":!L&&s,"filter-node":O.filterTreeNode?.(B(e)),[`${O.prefixCls}-treenode-leaf`]:Z}),style:{...r,...M?.item},draggable:Ce,onDragStart:Ce?ce:void 0,onDragEnter:K?q:void 0,onDragOver:K?le:void 0,onDragLeave:K?ue:void 0,onDrop:K?J:void 0,onDragEnd:K?de:void 0,onMouseMove:x},be),T.createElement(k,{prefixCls:O.prefixCls,level:xe,isStart:l,isEnd:u}),fe,me(),he,ye)};U.isTreeNode=1;function ie(e,t){let[n,r]=T.useState(!1);_(()=>{if(n)return e(),()=>{t()}},[n]),_(()=>(r(!0),()=>{r(!1)}),[])}function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}var ae=T.forwardRef((e,t)=>{let{className:n,style:r,motion:a,motionNodes:o,motionType:s,onMotionStart:c,onMotionEnd:l,active:u,treeNodeRequiredProps:d,...f}=e,[p,m]=T.useState(!0),{prefixCls:h}=T.useContext(ee),g=o&&s!==`hide`;_(()=>{o&&g!==p&&m(g)},[o]);let v=()=>{o&&c()},y=T.useRef(!1),b=()=>{o&&!y.current&&(y.current=!0,l())};return ie(v,b),o?T.createElement(w,W({ref:t,visible:p},a,{motionAppear:s===`show`,onVisibleChanged:e=>{g===e&&b()}}),({className:e,style:t},n)=>T.createElement(`div`,{ref:n,className:i(`${h}-treenode-motion`,e),style:t},o.map(e=>{let{data:{...t},title:n,key:r,isStart:i,isEnd:a}=e;delete t.children;let o=z(r,d);return T.createElement(U,W({},t,o,{title:n,active:u,data:e.data,key:r,isStart:i,isEnd:a}))}))):T.createElement(U,W({domRef:t,className:n,style:r},f,{active:u}))});function oe(e=[],t=[]){let n=e.length,r=t.length;if(Math.abs(n-r)!==1)return{add:!1,key:null};function i(e,t){let n=new Map;e.forEach(e=>{n.set(e,!0)});let r=t.filter(e=>!n.has(e));return r.length===1?r[0]:null}return n<r?{add:!0,key:i(e,t)}:{add:!1,key:i(t,e)}}function se(e,t,n){let r=e[e.findIndex(e=>e.key===n)+1],i=t.findIndex(e=>e.key===n);if(r){let e=t.findIndex(e=>e.key===r.key);return t.slice(i+1,e)}return t.slice(i+1)}function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}var K=`RC_TREE_MOTION_${Math.random()}`,ce={key:K},q={key:K,level:0,index:0,pos:`0`,node:ce,nodes:[ce]},le={parent:null,children:[],pos:q.pos,data:ce,title:null,key:K,isStart:[],isEnd:[]};function ue(e,t,n,r){return t===!1||!n?e:e.slice(0,Math.ceil(n/r)+1)}function de(e){let{key:t,pos:n}=e;return N(t,n)}var J=T.forwardRef((e,t)=>{let{prefixCls:n,data:r,selectable:i,checkable:a,expandedKeys:o,selectedKeys:s,checkedKeys:c,loadedKeys:l,loadingKeys:u,halfCheckedKeys:d,keyEntities:f,disabled:p,dragging:m,dragOverNodeKey:h,dropPosition:g,motion:v,height:x,itemHeight:S,virtual:w,scrollWidth:E,focusable:ee,activeItem:D,tabIndex:O,onKeyDown:k,onFocus:A,onBlur:j,onMouseDown:M,onMouseUp:P,onActiveChange:F,onListChangeStart:I,onListChangeEnd:L,...R}=e,te=b(),B=T.useRef(null),V=T.useRef(null);T.useImperativeHandle(t,()=>({scrollTo:e=>{B.current.scrollTo(e)},getIndentWidth:()=>V.current.offsetWidth}));let[ne,re]=T.useState(o),[H,U]=T.useState(r),[ie,W]=T.useState(r),[ce,q]=T.useState([]),[J,Y]=T.useState(null),X=T.useRef(r);X.current=r;function Z(){let e=X.current;U(e),W(e),q([]),Y(null),L()}_(()=>{re(o);let e=oe(ne,o);if(e.key!==null){if(e.add){let t=H.findIndex(({key:t})=>t===e.key),n=ue(se(H,r,e.key),w,x,S),i=H.slice();i.splice(t+1,0,le),W(i),q(n),Y(`show`)}else{let t=r.findIndex(({key:t})=>t===e.key),n=ue(se(r,H,e.key),w,x,S),i=r.slice();i.splice(t+1,0,le),W(i),q(n),Y(`hide`)}}else H!==r&&(U(r),W(r))},[o,r]),T.useEffect(()=>{m||Z()},[m]);let fe=v?ie:r,pe={expandedKeys:o,selectedKeys:s,loadedKeys:l,loadingKeys:u,checkedKeys:c,halfCheckedKeys:d,dragOverNodeKey:h,dropPosition:g,keyEntities:f};return T.createElement(T.Fragment,null,T.createElement(`div`,{className:`${n}-treenode`,"aria-hidden":!0,style:{position:`absolute`,pointerEvents:`none`,visibility:`hidden`,height:0,overflow:`hidden`,border:0,padding:0}},T.createElement(`div`,{className:`${n}-indent`},T.createElement(`div`,{ref:V,className:`${n}-indent-unit`}))),T.createElement(C,G({},R,{data:fe,itemKey:de,height:x,fullHeight:!1,virtual:w,itemHeight:S,scrollWidth:E,prefixCls:`${n}-list`,ref:B,role:`tree`,tabIndex:ee!==!1&&!p?O:void 0,"aria-activedescendant":D?y(te,D.key):void 0,onKeyDown:k,onFocus:A,onBlur:j,onMouseDown:M,onMouseUp:P,onVisibleChange:e=>{e.every(e=>de(e)!==K)&&Z()}}),e=>{let{pos:t,data:{...n},title:r,key:i,isStart:a,isEnd:o}=e,s=N(i,t);delete n.key,delete n.children;let c=z(s,pe);return T.createElement(ae,G({},n,c,{title:r,active:!!D&&i===D.key,pos:t,data:e.data,isStart:a,isEnd:o,motion:v,motionNodes:i===K?ce:null,motionType:J,onMotionStart:I,onMotionEnd:Z,treeNodeRequiredProps:pe,treeId:te,onMouseMove:()=>{F(null)}}))}))});function Y(e,t){if(!e)return[];let n=e.slice(),r=n.indexOf(t);return r>=0&&n.splice(r,1),n}function X(e,t){let n=(e||[]).slice();return n.indexOf(t)===-1&&n.push(t),n}function Z(e){return e.split(`-`)}function fe(e,t){let n=[],r=A(t,e);function i(e=[]){e.forEach(({key:e,children:t})=>{n.push(e),i(t)})}return i(r.children),n}function pe(e){if(e.parent){let t=Z(e.pos);return Number(t[t.length-1])===e.parent.children.length-1}return!1}function me(e){let t=Z(e.pos);return Number(t[t.length-1])===0}function he(e,t,n,r,i,a,o,s,c,l){let{clientX:u,clientY:d}=e,{top:f,height:p}=e.target.getBoundingClientRect(),m=((l===`rtl`?-1:1)*((i?.x||0)-u)-12)/r,h=c.filter(e=>s[e]?.children?.length),g=A(s,n.eventKey);if(d<f+p/2){let e=o.findIndex(e=>e.key===g.key),t=o[e<=0?0:e-1].key;g=A(s,t)}let _=g.key,v=g,y=g.key,b=0,x=0;if(!h.includes(_))for(let e=0;e<m&&pe(g);e+=1)g=g.parent,x+=1;let S=t.data,C=g.node,w=!0;return me(g)&&g.level===0&&d<f+p/2&&a({dragNode:S,dropNode:C,dropPosition:-1})&&g.key===n.eventKey?b=-1:(v.children||[]).length&&h.includes(y)?a({dragNode:S,dropNode:C,dropPosition:0})?b=0:w=!1:x===0?m>-1.5?a({dragNode:S,dropNode:C,dropPosition:1})?b=1:w=!1:a({dragNode:S,dropNode:C,dropPosition:0})?b=0:a({dragNode:S,dropNode:C,dropPosition:1})?b=1:w=!1:a({dragNode:S,dropNode:C,dropPosition:1})?b=1:w=!1,{dropPosition:b,dropLevelOffset:x,dropTargetKey:g.key,dropTargetPos:g.pos,dragOverNodeKey:y,dropContainerKey:b===0?null:g.parent?.key||null,dropAllowed:w}}function ge(e,t){if(!e)return;let{multiple:n}=t;return n?e.slice():e.length?[e[0]]:e}function _e(e){if(!e)return null;let t;if(Array.isArray(e))t={checkedKeys:e,halfCheckedKeys:void 0};else if(typeof e==`object`)t={checkedKeys:e.checked||void 0,halfCheckedKeys:e.halfChecked||void 0};else return S(!1,"`checkedKeys` is not an array or an object"),null;return t}function ve(e,t){let n=new Set;function r(e){if(n.has(e))return;let i=A(t,e);if(!i)return;n.add(e);let{parent:a,node:o}=i;o.disabled||a&&r(a.key)}return(e||[]).forEach(e=>{r(e)}),[...n]}function ye(e,t){let n=new Set;return e.forEach(e=>{t.has(e)||n.add(e)}),n}function be(e){let{disabled:t,disableCheckbox:n,checkable:r}=e||{};return!!(t||n)||r===!1}function xe(e,t,n,r){let i=new Set(e),a=new Set;for(let e=0;e<=n;e+=1)(t.get(e)||new Set).forEach(e=>{let{key:t,node:n,children:a=[]}=e;i.has(t)&&!r(n)&&a.filter(e=>!r(e.node)).forEach(e=>{i.add(e.key)})});let o=new Set;for(let e=n;e>=0;--e)(t.get(e)||new Set).forEach(e=>{let{parent:t,node:n}=e;if(r(n)||!e.parent||o.has(e.parent.key))return;if(r(e.parent.node)){o.add(t.key);return}let s=!0,c=!1;(t.children||[]).filter(e=>!r(e.node)).forEach(({key:e})=>{let t=i.has(e);s&&!t&&(s=!1),!c&&(t||a.has(e))&&(c=!0)}),s&&i.add(t.key),c&&a.add(t.key),o.add(t.key)});return{checkedKeys:Array.from(i),halfCheckedKeys:Array.from(ye(a,i))}}function Se(e,t,n,r,i){let a=new Set(e),o=new Set(t);for(let e=0;e<=r;e+=1)(n.get(e)||new Set).forEach(e=>{let{key:t,node:n,children:r=[]}=e;!a.has(t)&&!o.has(t)&&!i(n)&&r.filter(e=>!i(e.node)).forEach(e=>{a.delete(e.key)})});o=new Set;let s=new Set;for(let e=r;e>=0;--e)(n.get(e)||new Set).forEach(e=>{let{parent:t,node:n}=e;if(i(n)||!e.parent||s.has(e.parent.key))return;if(i(e.parent.node)){s.add(t.key);return}let r=!0,c=!1;(t.children||[]).filter(e=>!i(e.node)).forEach(({key:e})=>{let t=a.has(e);r&&!t&&(r=!1),!c&&(t||o.has(e))&&(c=!0)}),r||a.delete(t.key),c&&o.add(t.key),s.add(t.key)});return{checkedKeys:Array.from(a),halfCheckedKeys:Array.from(ye(o,a))}}function Ce(e,t,n,r){let i=[],a;a=r||be;let o=new Set(e.filter(e=>{let t=!!A(n,e);return t||i.push(e),t})),s=new Map,c=0;Object.keys(n).forEach(e=>{let t=n[e],{level:r}=t,i=s.get(r);i||(i=new Set,s.set(r,i)),i.add(t),c=Math.max(c,r)}),S(!i.length,`Tree missing follow keys: ${i.slice(0,100).map(e=>`'${e}'`).join(`, `)}`);let l;return l=t===!0?xe(o,s,c,a):Se(o,t.halfCheckedKeys,s,c,a),l}function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}var Te=10,Ee=class extends T.Component{static defaultProps={prefixCls:`rc-tree`,showLine:!1,showIcon:!0,selectable:!0,multiple:!1,checkable:!1,disabled:!1,checkStrictly:!1,draggable:!1,defaultExpandParent:!0,autoExpandParent:!1,defaultExpandAll:!1,defaultExpandedKeys:[],defaultCheckedKeys:[],defaultSelectedKeys:[],dropIndicatorRender:O,allowDrop:()=>!0,expandAction:!1};static TreeNode=U;destroyed=!1;delayedDragEnterLogic;loadingRetryTimes={};state={keyEntities:{},indent:null,selectedKeys:[],checkedKeys:[],halfCheckedKeys:[],loadedKeys:[],loadingKeys:[],expandedKeys:[],draggingNodeKey:null,dragChildrenKeys:[],dropTargetKey:null,dropPosition:null,dropContainerKey:null,dropLevelOffset:null,dropTargetPos:null,dropAllowed:!0,dragOverNodeKey:null,treeData:[],flattenNodes:[],activeKey:null,listChanging:!1,prevProps:null,fieldNames:P()};dragStartMousePosition=null;dragNodeProps=null;currentMouseOverDroppableNodeKey=null;focusedByMouse=!1;listRef=T.createRef();componentDidMount(){this.destroyed=!1,this.onUpdated()}componentDidUpdate(){this.onUpdated()}onUpdated(){let{activeKey:e,itemScrollOffset:t=0}=this.props;e!==void 0&&e!==this.state.activeKey&&(this.setState({activeKey:e}),e!==null&&this.scrollTo({key:e,offset:t}))}componentWillUnmount(){window.removeEventListener(`dragend`,this.onWindowDragEnd),this.destroyed=!0}static getDerivedStateFromProps(e,t){let{prevProps:n}=t,r={prevProps:e};function i(t){return!n&&e.hasOwnProperty(t)||n&&n[t]!==e[t]}let a,{fieldNames:o}=t;if(i(`fieldNames`)&&(o=P(e.fieldNames),r.fieldNames=o),i(`treeData`)?{treeData:a}=e:i(`children`)&&(S(!1,"`children` of Tree is deprecated. Please use `treeData` instead."),a=F(e.children)),a){r.treeData=a;let e=R(a,{fieldNames:o});r.keyEntities={[K]:q,...e.keyEntities}}let s=r.keyEntities||t.keyEntities;if(i(`expandedKeys`)||n&&i(`autoExpandParent`))r.expandedKeys=e.autoExpandParent||!n&&e.defaultExpandParent?ve(e.expandedKeys,s):e.expandedKeys;else if(!n&&e.defaultExpandAll){let e={...s};delete e[K];let t=[];Object.keys(e).forEach(n=>{let r=e[n];r.children&&r.children.length&&t.push(r.key)}),r.expandedKeys=t}else!n&&e.defaultExpandedKeys&&(r.expandedKeys=e.autoExpandParent||e.defaultExpandParent?ve(e.defaultExpandedKeys,s):e.defaultExpandedKeys);if(r.expandedKeys||delete r.expandedKeys,(a||r.expandedKeys)&&(r.flattenNodes=I(a||t.treeData,r.expandedKeys||t.expandedKeys,o)),e.selectable&&(i(`selectedKeys`)?r.selectedKeys=ge(e.selectedKeys,e):!n&&e.defaultSelectedKeys&&(r.selectedKeys=ge(e.defaultSelectedKeys,e))),e.checkable){let o;if(i(`checkedKeys`)?o=_e(e.checkedKeys)||{}:!n&&e.defaultCheckedKeys?o=_e(e.defaultCheckedKeys)||{}:a&&(o=_e(e.checkedKeys)||{checkedKeys:t.checkedKeys,halfCheckedKeys:t.halfCheckedKeys}),o){let{checkedKeys:t=[],halfCheckedKeys:n=[]}=o;if(!e.checkStrictly){let e=Ce(t,!0,s);({checkedKeys:t,halfCheckedKeys:n}=e)}r.checkedKeys=t,r.halfCheckedKeys=n}}return i(`loadedKeys`)&&(r.loadedKeys=e.loadedKeys),r}onNodeDragStart=(e,t)=>{let{expandedKeys:n,keyEntities:r}=this.state,{onDragStart:i}=this.props,{eventKey:a}=t;this.dragNodeProps=t,this.dragStartMousePosition={x:e.clientX,y:e.clientY};let o=Y(n,a);this.setState({draggingNodeKey:a,dragChildrenKeys:fe(a,r),indent:this.listRef.current.getIndentWidth()}),this.setExpandedKeys(o),window.addEventListener(`dragend`,this.onWindowDragEnd),i?.({event:e,node:B(t)})};onNodeDragEnter=(e,t)=>{let{expandedKeys:n,keyEntities:r,dragChildrenKeys:i,flattenNodes:a,indent:o}=this.state,{onDragEnter:s,onExpand:c,allowDrop:l,direction:u}=this.props,{pos:d,eventKey:f}=t;if(this.currentMouseOverDroppableNodeKey!==f&&(this.currentMouseOverDroppableNodeKey=f),!this.dragNodeProps){this.resetDragState();return}let{dropPosition:p,dropLevelOffset:m,dropTargetKey:h,dropContainerKey:g,dropTargetPos:_,dropAllowed:v,dragOverNodeKey:y}=he(e,this.dragNodeProps,t,o,this.dragStartMousePosition,l,a,r,n,u);if(i.includes(h)||!v){this.resetDragState();return}if(this.delayedDragEnterLogic||={},Object.keys(this.delayedDragEnterLogic).forEach(e=>{clearTimeout(this.delayedDragEnterLogic[e])}),this.dragNodeProps.eventKey!==t.eventKey&&(e.persist(),this.delayedDragEnterLogic[d]=window.setTimeout(()=>{if(this.state.draggingNodeKey===null)return;let i=[...n],a=A(r,t.eventKey);a&&(a.children||[]).length&&(i=X(n,t.eventKey)),this.props.hasOwnProperty(`expandedKeys`)||this.setExpandedKeys(i),c?.(i,{node:B(t),expanded:!0,nativeEvent:e.nativeEvent})},800)),this.dragNodeProps.eventKey===h&&m===0){this.resetDragState();return}this.setState({dragOverNodeKey:y,dropPosition:p,dropLevelOffset:m,dropTargetKey:h,dropContainerKey:g,dropTargetPos:_,dropAllowed:v}),s?.({event:e,node:B(t),expandedKeys:n})};onNodeDragOver=(e,t)=>{let{dragChildrenKeys:n,flattenNodes:r,keyEntities:i,expandedKeys:a,indent:o}=this.state,{onDragOver:s,allowDrop:c,direction:l}=this.props;if(!this.dragNodeProps)return;let{dropPosition:u,dropLevelOffset:d,dropTargetKey:f,dropContainerKey:p,dropTargetPos:m,dropAllowed:h,dragOverNodeKey:g}=he(e,this.dragNodeProps,t,o,this.dragStartMousePosition,c,r,i,a,l);n.includes(f)||!h||(this.dragNodeProps.eventKey===f&&d===0?(this.state.dropPosition!==null||this.state.dropLevelOffset!==null||this.state.dropTargetKey!==null||this.state.dropContainerKey!==null||this.state.dropTargetPos!==null||this.state.dropAllowed!==!1||this.state.dragOverNodeKey!==null)&&this.resetDragState():(u!==this.state.dropPosition||d!==this.state.dropLevelOffset||f!==this.state.dropTargetKey||p!==this.state.dropContainerKey||m!==this.state.dropTargetPos||h!==this.state.dropAllowed||g!==this.state.dragOverNodeKey)&&this.setState({dropPosition:u,dropLevelOffset:d,dropTargetKey:f,dropContainerKey:p,dropTargetPos:m,dropAllowed:h,dragOverNodeKey:g}),s?.({event:e,node:B(t)}))};onNodeDragLeave=(e,t)=>{this.currentMouseOverDroppableNodeKey===t.eventKey&&!e.currentTarget.contains(e.relatedTarget)&&(this.resetDragState(),this.currentMouseOverDroppableNodeKey=null);let{onDragLeave:n}=this.props;n?.({event:e,node:B(t)})};onWindowDragEnd=e=>{this.onNodeDragEnd(e,null,!0),window.removeEventListener(`dragend`,this.onWindowDragEnd)};onNodeDragEnd=(e,t)=>{let{onDragEnd:n}=this.props;this.setState({dragOverNodeKey:null}),this.cleanDragState(),n?.({event:e,node:B(t)}),this.dragNodeProps=null,window.removeEventListener(`dragend`,this.onWindowDragEnd)};onNodeDrop=(e,t,n=!1)=>{let{dragChildrenKeys:r,dropPosition:i,dropTargetKey:a,dropTargetPos:o,dropAllowed:s}=this.state;if(!s)return;let{onDrop:c}=this.props;if(this.setState({dragOverNodeKey:null}),this.cleanDragState(),a===null)return;let l={...z(a,this.getTreeNodeRequiredProps()),active:this.getActiveItem()?.key===a,data:A(this.state.keyEntities,a).node},u=r.includes(a);S(!u,`Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.`);let d=Z(o),f={event:e,node:B(l),dragNode:this.dragNodeProps?B(this.dragNodeProps):null,dragNodesKeys:[this.dragNodeProps.eventKey].concat(r),dropToGap:i!==0,dropPosition:i+Number(d[d.length-1])};n||c?.(f),this.dragNodeProps=null};resetDragState(){this.setState({dragOverNodeKey:null,dropPosition:null,dropLevelOffset:null,dropTargetKey:null,dropContainerKey:null,dropTargetPos:null,dropAllowed:!1})}cleanDragState=()=>{let{draggingNodeKey:e}=this.state;e!==null&&this.setState({draggingNodeKey:null,dropPosition:null,dropContainerKey:null,dropTargetKey:null,dropLevelOffset:null,dropAllowed:!0,dragOverNodeKey:null}),this.dragStartMousePosition=null,this.currentMouseOverDroppableNodeKey=null};triggerExpandActionExpand=(e,t)=>{let{expandedKeys:n,flattenNodes:r}=this.state,{expanded:i,key:a,isLeaf:o}=t;if(o||e.shiftKey||e.metaKey||e.ctrlKey)return;let s=r.filter(e=>e.key===a)[0],c=B({...z(a,this.getTreeNodeRequiredProps()),data:s.data});this.setExpandedKeys(i?Y(n,a):X(n,a)),this.onNodeExpand(e,c)};onNodeClick=(e,t)=>{let{onClick:n,expandAction:r}=this.props;r===`click`&&this.triggerExpandActionExpand(e,t),n?.(e,t)};onNodeDoubleClick=(e,t)=>{let{onDoubleClick:n,expandAction:r}=this.props;r===`doubleClick`&&this.triggerExpandActionExpand(e,t),n?.(e,t)};onNodeSelect=(e,t)=>{let{selectedKeys:n}=this.state,{keyEntities:r,fieldNames:i}=this.state,{onSelect:a,multiple:o}=this.props,{selected:s}=t,c=t[i.key],l=!s;n=l?o?X(n,c):[c]:Y(n,c);let u=n.map(e=>{let t=A(r,e);return t?t.node:null}).filter(Boolean);this.setUncontrolledState({selectedKeys:n}),a?.(n,{event:`select`,selected:l,node:t,selectedNodes:u,nativeEvent:e.nativeEvent})};onNodeCheck=(e,t,n)=>{let{keyEntities:r,checkedKeys:i,halfCheckedKeys:a}=this.state,{checkStrictly:o,onCheck:s}=this.props,{key:c}=t,l,u={event:`check`,node:t,checked:n,nativeEvent:e.nativeEvent};if(o){let e=n?X(i,c):Y(i,c);l={checked:e,halfChecked:Y(a,c)},u.checkedNodes=e.map(e=>A(r,e)).filter(Boolean).map(e=>e.node),this.setUncontrolledState({checkedKeys:e})}else{let{checkedKeys:e,halfCheckedKeys:t}=Ce([...i,c],!0,r);if(!n){let n=new Set(e);n.delete(c),{checkedKeys:e,halfCheckedKeys:t}=Ce(Array.from(n),{checked:!1,halfCheckedKeys:t},r)}l=e,u.checkedNodes=[],u.checkedNodesPositions=[],u.halfCheckedKeys=t,e.forEach(e=>{let t=A(r,e);if(!t)return;let{node:n,pos:i}=t;u.checkedNodes.push(n),u.checkedNodesPositions.push({node:n,pos:i})}),this.setUncontrolledState({checkedKeys:e},!1,{halfCheckedKeys:t})}s?.(l,u)};onNodeLoad=e=>{let{key:t}=e,{keyEntities:n}=this.state;if(A(n,t)?.children?.length)return;let r=new Promise((n,r)=>{this.setState(({loadedKeys:i=[],loadingKeys:a=[]})=>{let{loadData:o,onLoad:s}=this.props;return!o||i.includes(t)||a.includes(t)?null:(o(e).then(()=>{let{loadedKeys:r}=this.state,i=X(r,t);s?.(i,{event:`load`,node:e}),this.setUncontrolledState({loadedKeys:i}),this.setState(e=>({loadingKeys:Y(e.loadingKeys,t)})),n()}).catch(e=>{if(this.setState(e=>({loadingKeys:Y(e.loadingKeys,t)})),this.loadingRetryTimes[t]=(this.loadingRetryTimes[t]||0)+1,this.loadingRetryTimes[t]>=Te){let{loadedKeys:e}=this.state;S(!1,"Retry for `loadData` many times but still failed. No more retry."),this.setUncontrolledState({loadedKeys:X(e,t)}),n()}r(e)}),{loadingKeys:X(a,t)})})});return r.catch(()=>{}),r};onNodeMouseEnter=(e,t)=>{let{onMouseEnter:n}=this.props;n?.({event:e,node:t})};onNodeMouseLeave=(e,t)=>{let{onMouseLeave:n}=this.props;n?.({event:e,node:t})};onNodeContextMenu=(e,t)=>{let{onRightClick:n}=this.props;n&&(e.preventDefault(),n({event:e,node:t}))};onMouseDown=e=>{this.focusedByMouse=!0;let{onMouseDown:t}=this.props;t?.(e)};onMouseUp=e=>{this.focusedByMouse=!1;let{onMouseUp:t}=this.props;t?.(e)};onFocus=(...e)=>{let{onFocus:t,disabled:n}=this.props,{activeKey:r,selectedKeys:i,flattenNodes:a}=this.state;if(!this.focusedByMouse&&!n&&r===null){let e=i.find(e=>a.some(t=>t.key===e));e===void 0?this.onActiveChange(a?.[0]?.key||null):this.onActiveChange(e)}t?.(...e)};onBlur=(...e)=>{this.focusedByMouse=!1;let{onBlur:t}=this.props;this.onActiveChange(null),t?.(...e)};getTreeNodeRequiredProps=()=>{let{expandedKeys:e,selectedKeys:t,loadedKeys:n,loadingKeys:r,checkedKeys:i,halfCheckedKeys:a,dragOverNodeKey:o,dropPosition:s,keyEntities:c}=this.state;return{expandedKeys:e||[],selectedKeys:t||[],loadedKeys:n||[],loadingKeys:r||[],checkedKeys:i||[],halfCheckedKeys:a||[],dragOverNodeKey:o,dropPosition:s,keyEntities:c}};setExpandedKeys=e=>{let{treeData:t,fieldNames:n}=this.state,r=I(t,e,n);this.setUncontrolledState({expandedKeys:e,flattenNodes:r},!0)};onNodeExpand=(e,t)=>{let{expandedKeys:n}=this.state,{listChanging:r,fieldNames:i}=this.state,{onExpand:a,loadData:o}=this.props,{expanded:s}=t,c=t[i.key];if(r)return;let l=n.includes(c),u=!s;if(S(s&&l||!s&&!l,`Expand state not sync with index check`),n=u?X(n,c):Y(n,c),this.setExpandedKeys(n),a?.(n,{node:t,expanded:u,nativeEvent:e.nativeEvent}),u&&o){let e=this.onNodeLoad(t);e&&e.then(()=>{let e=I(this.state.treeData,n,i);this.setUncontrolledState({flattenNodes:e})}).catch(()=>{let{expandedKeys:e}=this.state,t=Y(e,c);this.setExpandedKeys(t)})}};onListChangeStart=()=>{this.setUncontrolledState({listChanging:!0})};onListChangeEnd=()=>{setTimeout(()=>{this.setUncontrolledState({listChanging:!1})})};onActiveChange=e=>{let{activeKey:t}=this.state,{onActiveChange:n,itemScrollOffset:r=0}=this.props;t!==e&&(this.setState({activeKey:e}),e!==null&&this.scrollTo({key:e,offset:r}),n?.(e))};getActiveItem=()=>{let{activeKey:e,flattenNodes:t}=this.state;return e===null?null:t.find(({key:t})=>t===e)||null};offsetActiveKey=e=>{let{flattenNodes:t,activeKey:n}=this.state,r=t.findIndex(({key:e})=>e===n);r===-1&&e<0&&(r=t.length),r=(r+e+t.length)%t.length;let i=t[r];if(i){let{key:e}=i;this.onActiveChange(e)}else this.onActiveChange(null)};onKeyDown=e=>{let{activeKey:t,expandedKeys:n,checkedKeys:r,flattenNodes:i,keyEntities:a}=this.state,{onKeyDown:o,checkable:s,selectable:c,disabled:l,loadData:u}=this.props;if(l)return;switch(e.key){case`ArrowUp`:this.offsetActiveKey(-1),e.preventDefault();break;case`ArrowDown`:this.offsetActiveKey(1),e.preventDefault();break;case`Home`:this.onActiveChange(i?.[0]?.key),e.preventDefault();break;case`End`:this.onActiveChange(i?.[i.length-1]?.key),e.preventDefault()}let d=this.getActiveItem();if(d&&d.data){let i=B({...z(t,this.getTreeNodeRequiredProps()),data:d.data,active:!0}),o=!!A(a,t)?.children?.length,l=!te(d.data.isLeaf,u,o,i.loaded),f=s&&!i.disabled&&i.checkable!==!1&&!i.disableCheckbox,p=!s&&c&&!i.disabled&&i.selectable!==!1;switch(e.key){case`ArrowLeft`:l&&n.includes(t)?this.onNodeExpand({},i):d.parent&&this.onActiveChange(d.parent.key),e.preventDefault();break;case`ArrowRight`:l&&!n.includes(t)?this.onNodeExpand({},i):d.children&&d.children.length&&this.onActiveChange(d.children[0].key),e.preventDefault();break;case`Enter`:l?(e.preventDefault(),this.onNodeExpand({},i)):f?r.includes(t)||(e.preventDefault(),this.onNodeCheck({},i,!0)):p&&!i.selected&&(e.preventDefault(),this.onNodeSelect({},i));break;case` `:f?(e.preventDefault(),this.onNodeCheck({},i,!r.includes(t))):p&&(e.preventDefault(),this.onNodeSelect({},i))}}o?.(e)};setUncontrolledState=(e,t=!1,n=null)=>{if(!this.destroyed){let r=!1,i=!0,a={};Object.keys(e).forEach(t=>{if(this.props.hasOwnProperty(t)){i=!1;return}r=!0,a[t]=e[t]}),r&&(!t||i)&&this.setState({...a,...n})}};scrollTo=e=>{this.listRef.current.scrollTo(e)};render(){let{flattenNodes:e,keyEntities:t,draggingNodeKey:n,dropLevelOffset:r,dropContainerKey:a,dropTargetKey:o,dropPosition:s,dragOverNodeKey:c,indent:l}=this.state,{prefixCls:u,className:d,style:f,styles:p,classNames:m,showLine:h,focusable:g,tabIndex:_=0,selectable:y,showIcon:b,icon:x,switcherIcon:S,draggable:C,checkable:w,checkStrictly:E,disabled:D,motion:O,loadData:k,filterTreeNode:A,height:j,itemHeight:M,scrollWidth:N,virtual:P,titleRender:F,dropIndicatorRender:I,onContextMenu:L,onScroll:R,direction:te,rootClassName:z,rootStyle:B}=this.props,V=v(this.props,{aria:!0,data:!0}),ne;C&&(ne=typeof C==`object`?C:typeof C==`function`?{nodeDraggable:C}:{});let re={styles:p,classNames:m,prefixCls:u,selectable:y,showIcon:b,icon:x,switcherIcon:S,draggable:ne,draggingNodeKey:n,checkable:w,checkStrictly:E,disabled:D,keyEntities:t,dropLevelOffset:r,dropContainerKey:a,dropTargetKey:o,dropPosition:s,dragOverNodeKey:c,indent:l,direction:te,dropIndicatorRender:I,loadData:k,filterTreeNode:A,titleRender:F,onNodeClick:this.onNodeClick,onNodeDoubleClick:this.onNodeDoubleClick,onNodeExpand:this.onNodeExpand,onNodeSelect:this.onNodeSelect,onNodeCheck:this.onNodeCheck,onNodeLoad:this.onNodeLoad,onNodeMouseEnter:this.onNodeMouseEnter,onNodeMouseLeave:this.onNodeMouseLeave,onNodeContextMenu:this.onNodeContextMenu,onNodeDragStart:this.onNodeDragStart,onNodeDragEnter:this.onNodeDragEnter,onNodeDragOver:this.onNodeDragOver,onNodeDragLeave:this.onNodeDragLeave,onNodeDragEnd:this.onNodeDragEnd,onNodeDrop:this.onNodeDrop};return T.createElement(ee.Provider,{value:re},T.createElement(`div`,{className:i(u,d,z,{[`${u}-show-line`]:h}),style:B},T.createElement(J,we({ref:this.listRef,prefixCls:u,style:f,data:e,disabled:D,selectable:y,checkable:!!w,motion:O,dragging:n!==null,height:j,itemHeight:M,virtual:P,focusable:g,tabIndex:_,activeItem:this.getActiveItem(),onFocus:this.onFocus,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onActiveChange:this.onActiveChange,onListChangeStart:this.onListChangeStart,onListChangeEnd:this.onListChangeEnd,onContextMenu:L,onScroll:R,scrollWidth:N},this.getTreeNodeRequiredProps(),V))))}},Q=n(),De={sm:30,md:34,lg:38},Oe=()=>({height:0,opacity:0}),ke=e=>{let t=Array.from(e.children);return t.length===0?0:t.reduce((e,t)=>{let n=parseFloat(getComputedStyle(t).marginTop)||0;return e+t.getBoundingClientRect().height+n},0)},Ae=e=>({height:ke(e),opacity:1}),je={motionName:`lg-tree-motion`,motionDeadline:300,onAppearStart:Oe,onAppearActive:Ae,onEnterStart:Oe,onEnterActive:Ae,onLeaveStart:e=>({height:ke(e),opacity:1}),onLeaveActive:Oe},Me=`---`,Ne=e=>e!=null&&(e.tag!=null||e.action!=null||e.extra!=null),Pe=e=>e!=null&&typeof e!=`boolean`,Fe=e=>{e.stopPropagation()},Ie=e=>{e.preventDefault(),e.stopPropagation()},Le=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Home`,`End`,`Enter`,` `]),Re={onClick:Fe,onDoubleClick:Fe,onContextMenu:Fe,onKeyDown:e=>{Le.has(e.key)&&e.stopPropagation()},onDragStart:Ie},$=T.forwardRef((e,t)=>{let{treeData:n,fieldNames:i,size:s=`md`,expandedKeys:c,defaultExpandedKeys:l,defaultExpandAll:u,autoExpandParent:d,expandAction:f=`click`,onExpand:_,selectable:v=!0,multiple:y=!1,selectedKeys:b,defaultSelectedKeys:x,onSelect:S,checkable:C=!1,checkStrictly:w=!1,checkedKeys:E,defaultCheckedKeys:ee,onCheck:D,showIcon:O=!1,icon:k,switcherIcon:A,indentGuide:j=`line`,titleRender:M,loadData:N,loadedKeys:P,draggable:F=!1,allowDrop:I,onDrop:L,height:R,itemHeight:te,virtual:z,disabled:B=!1,loading:V=!1,empty:ne,onRightClick:re,animated:H=!0,className:U,style:ie}=e,W=a(`Tree`),ae=(0,T.useMemo)(()=>{if(k)return typeof k==`function`?e=>k(e.data,{expanded:!!e.expanded,isLeaf:!!e.isLeaf}):k},[k]),oe=(0,T.useMemo)(()=>A===void 0?e=>e.isLeaf?null:(0,Q.jsx)(o,{className:`lg-tree__switcher-icon`,size:16,"aria-hidden":!0}):typeof A==`function`?e=>A({expanded:!!e.expanded,isLeaf:!!e.isLeaf}):A,[A]),se=(0,T.useMemo)(()=>{if(F)return{icon:!1,nodeDraggable:typeof F==`function`?e=>F(e):void 0}},[F]),G=(0,T.useCallback)((e,t)=>{_?.(e,{node:t.node,expanded:t.expanded})},[_]),K=(0,T.useCallback)((e,t)=>{S?.(e,{node:t.node,selected:t.selected,selectedNodes:t.selectedNodes})},[S]),ce=(0,T.useCallback)((e,t)=>{D?.(e,{node:t.node,checked:t.checked,checkedNodes:t.checkedNodes,halfCheckedKeys:t.halfCheckedKeys})},[D]),q=(0,T.useCallback)(e=>{L?.({dragNode:e.dragNode,node:e.node,dropPosition:e.dropPosition,dropToGap:e.dropToGap})},[L]),le=(0,T.useMemo)(()=>{if(I)return e=>I({dragNode:e.dragNode,dropNode:e.dropNode,dropPosition:e.dropPosition})},[I]),ue=(0,T.useCallback)(e=>{let t;if(M)t=M(e);else{let n=e[i?.title||`title`];t=n===void 0?Me:n}let{treeItem:n}=e;if(!Ne(n))return t;let{tag:a,action:o,extra:s}=n,c=B||!!e.disabled,l=typeof s==`function`?s({node:e,disabled:c}):s,u=F?!0:void 0;return(0,Q.jsxs)(`span`,{className:`lg-tree__node-content`,children:[(0,Q.jsx)(`span`,{className:r(`lg-tree__node-label`,a&&`lg-tree__node-label--with-tag`),children:t}),a&&(0,Q.jsx)(`span`,{className:`lg-tree__node-tag`,children:(0,Q.jsx)(h,{color:a.color??`primary`,size:`sm`,shape:`pill`,children:a.content})}),Pe(l)&&(0,Q.jsx)(`span`,{className:`lg-tree__node-extra`,draggable:u,...Re,children:l}),o&&(0,Q.jsx)(`span`,{className:`lg-tree__node-action`,draggable:u,...Re,children:(0,Q.jsx)(p,{variant:`text`,size:`sm`,shape:`circle`,icon:o.icon,"aria-label":o.ariaLabel,tooltip:o.tooltip??o.ariaLabel,disabled:c||!!o.disabled,onClick:t=>o.onClick?.(e,t)})})]})},[B,F,i?.title,M]),de=!n||n.length===0,J={};return c!==void 0&&(J.expandedKeys=c),b!==void 0&&(J.selectedKeys=b),E!==void 0&&(J.checkedKeys=E),P!==void 0&&(J.loadedKeys=P),le!==void 0&&(J.allowDrop=le),(0,Q.jsxs)(`div`,{ref:t,className:r(`lg-tree`,`lg-tree--${s}`,`lg-tree--guide-${j}`,C&&`lg-tree--checkable`,B&&`lg-tree--disabled`,V&&`lg-tree--loading`,U),style:ie,children:[V&&(0,Q.jsx)(`div`,{className:`lg-tree__loading-mask`,children:(0,Q.jsx)(g,{size:`md`})}),de?(0,Q.jsx)(`div`,{className:`lg-tree__empty`,children:ne??(0,Q.jsx)(m,{size:`sm`,description:W.empty})}):(0,Q.jsx)(Ee,{prefixCls:`lg-tree`,treeData:n,fieldNames:i,defaultExpandedKeys:l,defaultExpandAll:u,autoExpandParent:d,expandAction:f,onExpand:G,selectable:v,multiple:y,defaultSelectedKeys:x,onSelect:K,checkable:C,checkStrictly:w,defaultCheckedKeys:ee,onCheck:ce,showIcon:O,icon:ae,switcherIcon:oe,titleRender:ue,loadData:N,draggable:se,onDrop:q,height:R,itemHeight:te??De[s],virtual:z,disabled:B,onRightClick:re,motion:H?je:void 0,...J})]})});$.displayName=`Tree`;var ze=[{key:`finance`,title:`Finance Analysis`,children:[{key:`finance-annual`,title:`Annual Report`},{key:`finance-budget`,title:`Budget Execution`},{key:`finance-cost`,title:`Cost Breakdown`}]},{key:`sales`,title:`Sales Analysis`,children:[{key:`sales-review`,title:`Performance Review`},{key:`sales-region`,title:`Regional Breakdown`,children:[{key:`sales-region-north`,title:`North Region`},{key:`sales-region-south`,title:`South Region`}]}]},{key:`customer`,title:`Customer Satisfaction`}];function Be(){return(0,Q.jsx)(`div`,{style:{width:280},children:(0,Q.jsx)($,{treeData:ze,defaultExpandedKeys:[`finance`,`sales`],defaultSelectedKeys:[`finance-budget`]})})}var Ve=`import { Tree } from "lingee-ui";
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
`,He=[{key:`reports`,title:`Reports`,children:[{key:`reports-daily`,title:`Daily Report`},{key:`reports-weekly`,title:`Weekly Report`},{key:`reports-locked`,title:`Archived Report`,disableCheckbox:!0}]},{key:`dashboards`,title:`Dashboards`,children:[{key:`dashboards-sales`,title:`Sales Overview`},{key:`dashboards-finance`,title:`Finance Overview`}]}];function Ue(){let[e,t]=(0,T.useState)([`reports-daily`]);return(0,Q.jsx)(`div`,{style:{width:280},children:(0,Q.jsx)($,{checkable:!0,treeData:He,defaultExpandAll:!0,checkedKeys:e,onCheck:e=>t(e)})})}var We=`import { useState } from "react";
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
`,Ge=[{key:`docs`,title:`Documents`,children:[{key:`docs-spec`,title:`spec.md`,isLeaf:!0},{key:`docs-guide`,title:`guide.md`,isLeaf:!0}]},{key:`assets`,title:`Assets`,children:[{key:`assets-logo`,title:`logo.svg`,isLeaf:!0}]}];function Ke(){return(0,Q.jsx)(`div`,{style:{width:280},children:(0,Q.jsx)($,{showIcon:!0,treeData:Ge,defaultExpandedKeys:[`docs`],icon:(e,{expanded:t,isLeaf:n})=>n?(0,Q.jsx)(c,{size:16}):t?(0,Q.jsx)(f,{size:16}):(0,Q.jsx)(u,{size:16})})})}var qe=`import { Tree } from "lingee-ui";
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
`;function Je(){let[e,t]=(0,T.useState)(`None`),n=e=>t(`Edit ${e.title}`),r=e=>({disabled:n})=>(0,Q.jsx)(p,{variant:`text`,size:`sm`,shape:`circle`,icon:(0,Q.jsx)(l,{size:16}),"aria-label":`More ${e}`,tooltip:`More`,disabled:n,onClick:()=>t(`More ${e}`)}),i=[{key:`group-1`,title:`Group 1`,children:[{key:`item-1`,title:`Item 1`,treeItem:{tag:{content:`Tag 1`},action:{icon:(0,Q.jsx)(s,{size:16}),ariaLabel:`Edit Item 1`,onClick:n},extra:r(`Item 1`)}},{key:`item-2`,title:`Item 2`,treeItem:{tag:{content:`Tag 2`,color:`info`},extra:(0,Q.jsx)(d,{size:16,"aria-hidden":!0})}},{key:`item-3`,title:`Item 3`,disabled:!0,treeItem:{tag:{content:`Tag 3`},action:{icon:(0,Q.jsx)(s,{size:16}),ariaLabel:`Edit Item 3`,onClick:n},extra:r(`Item 3`)}}]}];return(0,Q.jsxs)(`div`,{style:{width:336},children:[(0,Q.jsx)($,{treeData:i,defaultExpandAll:!0,showIcon:!0,icon:(e,{expanded:t,isLeaf:n})=>n?(0,Q.jsx)(c,{size:16}):t?(0,Q.jsx)(f,{size:16}):(0,Q.jsx)(u,{size:16})}),(0,Q.jsxs)(`p`,{children:[`Last action: `,e]})]})}var Ye=`import { useState } from "react";
import { Button, Tree } from "lingee-ui";
import { Edit, FileEarmark, Folder, FolderOpen, LayoutDashboard, Location } from "lingee-icon";
import type { TreeNodeData } from "lingee-ui";

export default function ItemContentDemo() {
  const [lastAction, setLastAction] = useState("None");

  const handleEdit = (node: TreeNodeData) => setLastAction(\`Edit \${node.title}\`);

  // extra 的回调形式能拿到 Tree / 节点的禁用态，自定义控件需自行同步
  const renderMore =
    (title: string) =>
    ({ disabled }: { disabled: boolean }) => (
      <Button
        variant="text"
        size="sm"
        shape="circle"
        icon={<LayoutDashboard size={16} />}
        aria-label={\`More \${title}\`}
        tooltip="More"
        disabled={disabled}
        onClick={() => setLastAction(\`More \${title}\`)}
      />
    );

  const treeData: TreeNodeData[] = [
    {
      key: "group-1",
      title: "Group 1",
      children: [
        {
          key: "item-1",
          title: "Item 1",
          treeItem: {
            tag: { content: "Tag 1" },
            action: { icon: <Edit size={16} />, ariaLabel: "Edit Item 1", onClick: handleEdit },
            extra: renderMore("Item 1"),
          },
        },
        {
          key: "item-2",
          title: "Item 2",
          treeItem: {
            tag: { content: "Tag 2", color: "info" },
            extra: <Location size={16} aria-hidden />,
          },
        },
        {
          key: "item-3",
          title: "Item 3",
          disabled: true,
          treeItem: {
            tag: { content: "Tag 3" },
            action: { icon: <Edit size={16} />, ariaLabel: "Edit Item 3", onClick: handleEdit },
            extra: renderMore("Item 3"),
          },
        },
      ],
    },
  ];

  return (
    <div style={{ width: 336 }}>
      <Tree
        treeData={treeData}
        defaultExpandAll
        showIcon
        icon={(_node, { expanded, isLeaf }) => {
          if (isLeaf) return <FileEarmark size={16} />;
          return expanded ? <FolderOpen size={16} /> : <Folder size={16} />;
        }}
      />
      <p>Last action: {lastAction}</p>
    </div>
  );
}
`,Xe=[{key:`folder`,title:`Workspace`,children:[{key:`session-1`,title:`Annual Finance Topic`},{key:`session-2`,title:`Sales Analysis Topic`},{key:`session-3`,title:`Customer Satisfaction`}]}];function Ze(){return(0,Q.jsxs)(`div`,{style:{width:280},className:`demo-tree-actions`,children:[(0,Q.jsx)(`style`,{children:`
        .demo-tree-actions .lg-tree-title { display: flex; align-items: center; gap: 4px; }
        .demo-tree-actions .demo-tree-actions__label {
          flex: 1; min-width: 0; overflow: hidden;
          white-space: nowrap; text-overflow: ellipsis;
        }
        .demo-tree-actions .demo-tree-actions__ops { display: none; flex-shrink: 0; gap: 4px; }
        .demo-tree-actions .lg-tree-node-content-wrapper:hover .demo-tree-actions__ops { display: flex; }
      `}),(0,Q.jsx)($,{treeData:Xe,defaultExpandAll:!0,titleRender:e=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{className:`demo-tree-actions__label`,children:e.title}),(0,Q.jsxs)(`span`,{className:`demo-tree-actions__ops`,onClick:e=>e.stopPropagation(),children:[(0,Q.jsx)(p,{variant:`link`,size:`sm`,shape:`round`,icon:(0,Q.jsx)(s,{size:14}),children:`Edit`}),(0,Q.jsx)(p,{variant:`text`,size:`sm`,shape:`circle`,icon:(0,Q.jsx)(l,{size:16}),"aria-label":`Open dashboard`})]})]})})]})}var Qe=`import { Tree, Button } from "lingee-ui";
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
`;function $e(e,t,n){return e.map(e=>e.key===t?{...e,children:n}:e.children?{...e,children:$e(e.children,t,n)}:e)}var et=[{key:`dept-sales`,title:`Sales Department`},{key:`dept-finance`,title:`Finance Department`},{key:`dept-hr`,title:`HR Department`,isLeaf:!0}];function tt(){let[e,t]=(0,T.useState)(et);return(0,Q.jsx)(`div`,{style:{width:280},children:(0,Q.jsx)($,{treeData:e,loadData:e=>new Promise(n=>{setTimeout(()=>{t(t=>$e(t,String(e.key),[{key:`${e.key}-a`,title:`Team A`,isLeaf:!0},{key:`${e.key}-b`,title:`Team B`,isLeaf:!0}])),n()},800)})})})}var nt=`import { useState } from "react";
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
`,rt=[{key:`group-a`,title:`Group A`,children:[{key:`a-1`,title:`Item A-1`},{key:`a-2`,title:`Item A-2`}]},{key:`group-b`,title:`Group B`,children:[{key:`b-1`,title:`Item B-1`},{key:`b-2`,title:`Item B-2`}]}];function it(e,t){let n,r=e=>e.reduce((e,i)=>i.key===t?(n=i,e):(e.push(i.children?{...i,children:r(i.children)}:i),e),[]),i=r(e);return{removed:n,rest:i}}function at(e,t,n,r,i){let a=e.findIndex(e=>e.key===t);if(a!==-1){if(!r){let t=e[a],r=[...e];return r[a]={...t,children:[...t.children??[],n]},r}let t=[...e];return t.splice(i>a?a+1:a,0,n),t}return e.map(e=>e.children?{...e,children:at(e.children,t,n,r,i)}:e)}function ot(){let[e,t]=(0,T.useState)(rt);return(0,Q.jsx)(`div`,{style:{width:280},children:(0,Q.jsx)($,{treeData:e,defaultExpandAll:!0,draggable:!0,onDrop:n=>{let{removed:r,rest:i}=it(e,String(n.dragNode.key));r&&t(at(i,String(n.node.key),r,n.dropToGap,n.dropPosition))}})})}var st=`import { useState } from "react";
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
`,ct=Array.from({length:20},(e,t)=>({key:`group-${t}`,title:`Group ${t+1}`,children:Array.from({length:20},(e,n)=>({key:`group-${t}-item-${n}`,title:`Item ${t+1}-${n+1}`,isLeaf:!0}))}));function lt(){return(0,Q.jsx)(`div`,{style:{width:280},children:(0,Q.jsx)($,{treeData:ct,defaultExpandAll:!0,height:320})})}var ut=`import { Tree } from "lingee-ui";
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
`;export{nt as a,Ze as c,qe as d,Ke as f,Be as g,Ve as h,ot as i,Ye as l,Ue as m,lt as n,tt as o,We as p,st as r,Qe as s,ut as t,Je as u};