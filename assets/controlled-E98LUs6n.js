import{a as e,n as t,t as n}from"./jsx-runtime-OQpaS_Dv.js";import{t as r}from"./utils-BEZlSqlY.js";import{n as i}from"./provider-BWqppJYI.js";import{t as a}from"./ChevronLeft-DbtjbEYn.js";import{t as o}from"./ChevronRight-DrLW0qn1.js";import{t as s}from"./button-B7wPs43G.js";import{n as c,t as l}from"./radio-37lwC9H5.js";var u=e(t());function d(e){return Object.prototype.toString.call(e)===`[object Object]`}function f(e){return d(e)||Array.isArray(e)}function p(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}function m(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length!==r.length||JSON.stringify(Object.keys(e.breakpoints||{}))!==JSON.stringify(Object.keys(t.breakpoints||{}))?!1:n.every(n=>{let r=e[n],i=t[n];return typeof r==`function`?`${r}`==`${i}`:!f(r)||!f(i)?r===i:m(r,i)})}function h(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function g(e,t){if(e.length!==t.length)return!1;let n=h(e),r=h(t);return n.every((e,t)=>{let n=r[t];return m(e,n)})}function _(e){return typeof e==`number`}function v(e){return typeof e==`string`}function y(e){return typeof e==`boolean`}function b(e){return Object.prototype.toString.call(e)===`[object Object]`}function x(e){return Math.abs(e)}function S(e){return Math.sign(e)}function C(e,t){return x(e-t)}function w(e,t){return e===0||t===0||x(e)<=x(t)?0:x(C(x(e),x(t))/e)}function T(e){return Math.round(e*100)/100}function E(e){return j(e).map(Number)}function D(e){return e[O(e)]}function O(e){return Math.max(0,e.length-1)}function k(e,t){return t===O(e)}function A(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function j(e){return Object.keys(e)}function M(e,t){return[e,t].reduce((e,t)=>(j(t).forEach(n=>{let r=e[n],i=t[n];e[n]=b(r)&&b(i)?M(r,i):i}),e),{})}function N(e,t){return t.MouseEvent!==void 0&&e instanceof t.MouseEvent}function ee(e,t){let n={start:r,center:i,end:a};function r(){return 0}function i(e){return a(e)/2}function a(e){return t-e}function o(r,i){return v(e)?n[e](r):e(t,r,i)}return{measure:o}}function P(){let e=[];function t(t,n,i,a={passive:!0}){let o;if(`addEventListener`in t)t.addEventListener(n,i,a),o=()=>t.removeEventListener(n,i,a);else{let e=t;e.addListener(i),o=()=>e.removeListener(i)}return e.push(o),r}function n(){e=e.filter(e=>e())}let r={add:t,clear:n};return r}function F(e,t,n,r){let i=P(),a=1e3/60,o=null,s=0,c=0;function l(){i.add(e,`visibilitychange`,()=>{e.hidden&&m()})}function u(){p(),i.clear()}function d(e){if(!c)return;o||(o=e,n(),n());let i=e-o;for(o=e,s+=i;s>=a;)n(),s-=a;r(s/a),c&&=t.requestAnimationFrame(d)}function f(){c||=t.requestAnimationFrame(d)}function p(){t.cancelAnimationFrame(c),o=null,s=0,c=0}function m(){o=null,s=0}return{init:l,destroy:u,start:f,stop:p,update:n,render:r}}function I(e,t){let n=t===`rtl`,r=e===`y`,i=r?`y`:`x`,a=r?`x`:`y`,o=!r&&n?-1:1,s=u(),c=d();function l(e){let{height:t,width:n}=e;return r?t:n}function u(){return r?`top`:n?`right`:`left`}function d(){return r?`bottom`:n?`left`:`right`}function f(e){return e*o}return{scroll:i,cross:a,startEdge:s,endEdge:c,measureSize:l,direction:f}}function L(e=0,t=0){let n=x(e-t);function r(t){return t<e}function i(e){return e>t}function a(e){return r(e)||i(e)}function o(n){return a(n)?r(n)?e:t:n}function s(e){return n?e-n*Math.ceil((e-t)/n):e}return{length:n,max:t,min:e,constrain:o,reachedAny:a,reachedMax:i,reachedMin:r,removeOffset:s}}function R(e,t,n){let{constrain:r}=L(0,e),i=e+1,a=o(t);function o(e){return n?x((i+e)%i):r(e)}function s(){return a}function c(e){return a=o(e),d}function l(e){return u().set(s()+e)}function u(){return R(e,s(),n)}let d={get:s,set:c,add:l,clone:u};return d}function z(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v){let{cross:b,direction:T}=e,E=[`INPUT`,`SELECT`,`TEXTAREA`],D={passive:!1},O=P(),k=P(),A=L(50,225).constrain(p.measure(20)),j={mouse:300,touch:400},M={mouse:500,touch:600},ee=m?43:25,F=!1,I=0,R=0,z=!1,B=!1,te=!1,V=!1;function ne(e){if(!v)return;function n(t){(y(v)||v(e,t))&&se(t)}let r=t;O.add(r,`dragstart`,e=>e.preventDefault(),D).add(r,`touchmove`,()=>void 0,D).add(r,`touchend`,()=>void 0).add(r,`touchstart`,n).add(r,`mousedown`,n).add(r,`touchcancel`,U).add(r,`contextmenu`,U).add(r,`click`,le,!0)}function re(){O.clear(),k.clear()}function ie(){let e=V?n:t;k.add(e,`touchmove`,ce,D).add(e,`touchend`,U).add(e,`mousemove`,ce,D).add(e,`mouseup`,U)}function ae(e){let t=e.nodeName||``;return E.includes(t)}function H(){return(m?M:j)[V?`mouse`:`touch`]}function oe(e,t){let n=d.add(S(e)*-1),r=u.byDistance(e,!m).distance;return m||x(e)<A?r:g&&t?r*.5:u.byIndex(n.get(),0).distance}function se(e){let t=N(e,r);V=t,te=m&&t&&!e.buttons&&F,F=C(i.get(),o.get())>=2,!(t&&e.button!==0)&&(ae(e.target)||(z=!0,a.pointerDown(e),l.useFriction(0).useDuration(0),i.set(o),ie(),I=a.readPoint(e),R=a.readPoint(e,b),f.emit(`pointerDown`)))}function ce(e){if(!N(e,r)&&e.touches.length>=2)return U(e);let t=a.readPoint(e),n=a.readPoint(e,b),o=C(t,I),c=C(n,R);if(!B&&!V&&(!e.cancelable||(B=o>c,!B)))return U(e);let u=a.pointerMove(e);o>h&&(te=!0),l.useFriction(.3).useDuration(.75),s.start(),i.add(T(u)),e.preventDefault()}function U(e){let t=u.byDistance(0,!1).index!==d.get(),n=a.pointerUp(e)*H(),r=oe(T(n),t),i=w(n,r),o=ee-10*i,s=_+i/50;B=!1,z=!1,k.clear(),l.useDuration(o).useFriction(s),c.distance(r,!m),V=!1,f.emit(`pointerUp`)}function le(e){te&&=(e.stopPropagation(),e.preventDefault(),!1)}function ue(){return z}return{init:ne,destroy:re,pointerDown:ue}}function B(e,t){let n,r;function i(e){return e.timeStamp}function a(n,r){let i=`client${(r||e.scroll)===`x`?`X`:`Y`}`;return(N(n,t)?n:n.touches[0])[i]}function o(e){return n=e,r=e,a(e)}function s(e){let t=a(e)-a(r),o=i(e)-i(n)>170;return r=e,o&&(n=e),t}function c(e){if(!n||!r)return 0;let t=a(r)-a(n),o=i(e)-i(n),s=i(e)-i(r)>170,c=t/o;return o&&!s&&x(c)>.1?c:0}return{pointerDown:o,pointerMove:s,pointerUp:c,readPoint:a}}function te(){function e(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}return{measure:e}}function V(e){function t(t){return t/100*e}return{measure:t}}function ne(e,t,n,r,i,a,o){let s=[e].concat(r),c,l,u=[],d=!1;function f(e){return i.measureSize(o.measure(e))}function p(i){if(!a)return;l=f(e),u=r.map(f);function o(n){for(let a of n){if(d)return;let n=a.target===e,o=r.indexOf(a.target),s=n?l:u[o];if(x(f(n?e:r[o])-s)>=.5){i.reInit(),t.emit(`resize`);break}}}c=new ResizeObserver(e=>{(y(a)||a(i,e))&&o(e)}),n.requestAnimationFrame(()=>{s.forEach(e=>c.observe(e))})}function m(){d=!0,c&&c.disconnect()}return{init:p,destroy:m}}function re(e,t,n,r,i,a){let o=0,s=0,c=i,l=a,u=e.get(),d=0;function f(){let t=r.get()-e.get(),i=!c,a=0;return i?(o=0,n.set(r),e.set(r),a=t):(n.set(e),o+=t/c,o*=l,u+=o,e.add(o),a=u-d),s=S(a),d=u,C}function p(){return x(r.get()-t.get())<.001}function m(){return c}function h(){return s}function g(){return o}function _(){return y(i)}function v(){return b(a)}function y(e){return c=e,C}function b(e){return l=e,C}let C={direction:h,duration:m,velocity:g,seek:f,settled:p,useBaseFriction:v,useBaseDuration:_,useFriction:b,useDuration:y};return C}function ie(e,t,n,r,i){let a=i.measure(10),o=i.measure(50),s=L(.1,.99),c=!1;function l(){return!(c||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function u(i){if(!l())return;let c=x(e[e.reachedMin(t.get())?`min`:`max`]-t.get()),u=n.get()-t.get(),d=s.constrain(c/o);n.subtract(u*d),!i&&x(u)<a&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())}function d(e){c=!e}return{shouldConstrain:l,constrain:u,toggleActive:d}}function ae(e,t,n,r,i){let a=L(-t+e,0),o=d(),s=u(),c=f();function l(e,t){return C(e,t)<=1}function u(){let e=o[0],t=D(o);return L(o.lastIndexOf(e),o.indexOf(t)+1)}function d(){return n.map((e,t)=>{let{min:r,max:i}=a,o=a.constrain(e),s=!t,c=k(n,t);return s?i:c||l(r,o)?r:l(i,o)?i:o}).map(e=>parseFloat(e.toFixed(3)))}function f(){if(t<=e+i)return[a.max];if(r===`keepSnaps`)return o;let{min:n,max:c}=s;return o.slice(n,c)}return{snapsContained:c,scrollContainLimit:s}}function H(e,t,n){let r=t[0];return{limit:L(n?r-e:D(t),r)}}function oe(e,t,n,r){let i=.1,{reachedMin:a,reachedMax:o}=L(t.min+i,t.max+i);function s(e){return e===1?o(n.get()):e===-1&&a(n.get())}function c(t){if(!s(t))return;let n=t*-1*e;r.forEach(e=>e.add(n))}return{loop:c}}function se(e){let{max:t,length:n}=e;function r(e){let r=e-t;return n?r/-n:0}return{get:r}}function ce(e,t,n,r,i){let{startEdge:a,endEdge:o}=e,{groupSlides:s}=i,c=d().map(t.measure),l=f(),u=p();function d(){return s(r).map(e=>D(e)[o]-e[0][a]).map(x)}function f(){return r.map(e=>n[a]-e[a]).map(e=>-x(e))}function p(){return s(l).map(e=>e[0]).map((e,t)=>e+c[t])}return{snaps:l,snapsAligned:u}}function U(e,t,n,r,i,a){let{groupSlides:o}=i,{min:s,max:c}=r,l=u();function u(){let r=o(a),i=!e||t===`keepSnaps`;return n.length===1?[a]:i?r:r.slice(s,c).map((e,t,n)=>{let r=!t,i=k(n,t);return r?A(D(n[0])+1):i?A(O(a)-D(n)[0]+1,D(n)[0]):e})}return{slideRegistry:l}}function le(e,t,n,r,i){let{reachedAny:a,removeOffset:o,constrain:s}=r;function c(e){return e.concat().sort((e,t)=>x(e)-x(t))[0]}function l(n){let r=e?o(n):s(n),{index:i}=t.map((e,t)=>({diff:u(e-r,0),index:t})).sort((e,t)=>x(e.diff)-x(t.diff))[0];return{index:i,distance:r}}function u(t,r){let i=[t,t+n,t-n];if(!e)return t;if(!r)return c(i);let a=i.filter(e=>S(e)===r);return a.length?c(a):D(i)-n}function d(e,n){return{index:e,distance:u(t[e]-i.get(),n)}}function f(n,r){let o=i.get()+n,{index:s,distance:c}=l(o),d=!e&&a(o);return!r||d?{index:s,distance:n}:{index:s,distance:n+u(t[s]-c,0)}}return{byDistance:f,byIndex:d,shortcut:u}}function ue(e,t,n,r,i,a,o){function s(i){let s=i.distance,c=i.index!==t.get();a.add(s),s&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(n.set(t.get()),t.set(i.index),o.emit(`select`))}function c(e,t){s(i.byDistance(e,t))}function l(e,n){let r=t.clone().set(e);s(i.byIndex(r.get(),n))}return{distance:c,index:l}}function de(e,t,n,r,i,a,o,s){let c={passive:!0,capture:!0},l=0;function u(u){if(!s)return;function f(t){if(new Date().getTime()-l>10)return;o.emit(`slideFocusStart`),e.scrollLeft=0;let a=n.findIndex(e=>e.includes(t));_(a)&&(i.useDuration(0),r.index(a,0),o.emit(`slideFocus`))}a.add(document,`keydown`,d,!1),t.forEach((e,t)=>{a.add(e,`focus`,e=>{(y(s)||s(u,e))&&f(t)},c)})}function d(e){e.code===`Tab`&&(l=new Date().getTime())}return{init:u}}function W(e){let t=e;function n(){return t}function r(e){t=o(e)}function i(e){t+=o(e)}function a(e){t-=o(e)}function o(e){return _(e)?e:e.get()}return{get:n,set:r,add:i,subtract:a}}function fe(e,t){let n=e.scroll===`x`?o:s,r=t.style,i=null,a=!1;function o(e){return`translate3d(${e}px,0px,0px)`}function s(e){return`translate3d(0px,${e}px,0px)`}function c(t){if(a)return;let o=T(e.direction(t));o!==i&&(r.transform=n(o),i=o)}function l(e){a=!e}function u(){a||(r.transform=``,t.getAttribute(`style`)||t.removeAttribute(`style`))}return{clear:u,to:c,toggleActive:l}}function pe(e,t,n,r,i,a,o,s,c){let l=.5,u=E(i),d=E(i).reverse(),f=_().concat(v());function p(e,t){return e.reduce((e,t)=>e-i[t],t)}function m(e,t){return e.reduce((e,n)=>p(e,t)>0?e.concat([n]):e,[])}function h(e){return a.map((n,i)=>({start:n-r[i]+l+e,end:n+t-l+e}))}function g(t,r,i){let a=h(r);return t.map(t=>{let r=i?0:-n,o=i?n:0,l=i?`end`:`start`,u=a[t][l];return{index:t,loopPoint:u,slideLocation:W(-1),translate:fe(e,c[t]),target:()=>s.get()>u?r:o}})}function _(){let e=o[0];return g(m(d,e),n,!1)}function v(){let e=t-o[0]-1;return g(m(u,e),-n,!0)}function y(){return f.every(({index:e})=>p(u.filter(t=>t!==e),t)<=.1)}function b(){f.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})}function x(){f.forEach(e=>e.translate.clear())}return{canLoop:y,clear:x,loop:b,loopPoints:f}}function me(e,t,n){let r,i=!1;function a(a){if(!n)return;function o(e){for(let n of e)if(n.type===`childList`){a.reInit(),t.emit(`slidesChanged`);break}}r=new MutationObserver(e=>{i||(y(n)||n(a,e))&&o(e)}),r.observe(e,{childList:!0})}function o(){r&&r.disconnect(),i=!0}return{init:a,destroy:o}}function he(e,t,n,r){let i={},a=null,o=null,s,c=!1;function l(){s=new IntersectionObserver(e=>{c||(e.forEach(e=>{let n=t.indexOf(e.target);i[n]=e}),a=null,o=null,n.emit(`slidesInView`))},{root:e.parentElement,threshold:r}),t.forEach(e=>s.observe(e))}function u(){s&&s.disconnect(),c=!0}function d(e){return j(i).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:a}=i[r];return(e&&a||!e&&!a)&&t.push(r),t},[])}function f(e=!0){if(e&&a)return a;if(!e&&o)return o;let t=d(e);return e&&(a=t),e||(o=t),t}return{init:l,destroy:u,get:f}}function ge(e,t,n,r,i,a){let{measureSize:o,startEdge:s,endEdge:c}=e,l=n[0]&&i,u=m(),d=h(),f=n.map(o),p=g();function m(){if(!l)return 0;let e=n[0];return x(t[s]-e[s])}function h(){if(!l)return 0;let e=a.getComputedStyle(D(r));return parseFloat(e.getPropertyValue(`margin-${c}`))}function g(){return n.map((e,t,n)=>{let r=!t,i=k(n,t);return r?f[t]+u:i?f[t]+d:n[t+1][s]-e[s]}).map(x)}return{slideSizes:f,slideSizesWithGaps:p,startGap:u,endGap:d}}function _e(e,t,n,r,i,a,o,s,c){let{startEdge:l,endEdge:u,direction:d}=e,f=_(n);function p(e,t){return E(e).filter(e=>e%t===0).map(n=>e.slice(n,n+t))}function m(e){return e.length?E(e).reduce((n,f,p)=>{let m=D(n)||0,h=m===0,g=f===O(e),_=i[l]-a[m][l],v=i[l]-a[f][u],y=!r&&h?d(o):0,b=x(v-(!r&&g?d(s):0)-(_+y));return p&&b>t+c&&n.push(f),g&&n.push(e.length),n},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}function h(e){return f?p(e,n):m(e)}return{groupSlides:h}}function ve(e,t,n,r,i,a,o){let{align:s,axis:c,direction:l,startIndex:u,loop:d,duration:f,dragFree:p,dragThreshold:m,inViewThreshold:h,slidesToScroll:g,skipSnaps:_,containScroll:v,watchResize:y,watchSlides:b,watchDrag:x,watchFocus:S}=a,C=te(),w=C.measure(t),T=n.map(C.measure),k=I(c,l),A=k.measureSize(w),j=V(A),M=ee(s,A),N=!d&&!!v,{slideSizes:L,slideSizesWithGaps:ve,startGap:ye,endGap:be}=ge(k,w,T,n,d||!!v,i),xe=_e(k,A,g,d,w,T,ye,be,2),{snaps:Se,snapsAligned:G}=ce(k,M,w,T,xe),K=-D(Se)+D(ve),{snapsContained:Ce,scrollContainLimit:we}=ae(A,K,G,v,2),q=N?Ce:G,{limit:J}=H(K,q,d),Y=R(O(q),u,d),Te=Y.clone(),Ee=E(n),X=({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(e.pointerDown()),t.seek()},De=({scrollBody:e,translate:t,location:n,offsetLocation:r,previousLocation:i,scrollLooper:a,slideLooper:o,dragHandler:s,animation:c,eventHandler:l,scrollBounds:u,options:{loop:d}},f)=>{let p=e.settled(),m=!u.shouldConstrain(),h=d?p:p&&m,g=h&&!s.pointerDown();g&&c.stop();let _=n.get()*f+i.get()*(1-f);r.set(_),d&&(a.loop(e.direction()),o.loop()),t.to(r.get()),g&&l.emit(`settle`),h||l.emit(`scroll`)},Oe=F(r,i,()=>X(Be),e=>De(Be,e)),ke=.68,Ae=q[Y.get()],je=W(Ae),Me=W(Ae),Z=W(Ae),Q=W(Ae),$=re(je,Z,Me,Q,f,ke),Ne=le(d,q,K,J,Q),Pe=ue(Oe,Y,Te,$,Ne,Q,o),Fe=se(J),Ie=P(),Le=he(t,n,o,h),{slideRegistry:Re}=U(N,v,q,we,xe,Ee),ze=de(e,n,Re,Pe,$,Ie,o,S),Be={ownerDocument:r,ownerWindow:i,eventHandler:o,containerRect:w,slideRects:T,animation:Oe,axis:k,dragHandler:z(k,e,r,i,Q,B(k,i),je,Oe,Pe,$,Ne,Y,o,j,p,m,_,ke,x),eventStore:Ie,percentOfView:j,index:Y,indexPrevious:Te,limit:J,location:je,offsetLocation:Z,previousLocation:Me,options:a,resizeHandler:ne(t,o,i,n,k,y,C),scrollBody:$,scrollBounds:ie(J,Z,Q,$,j),scrollLooper:oe(K,J,Z,[je,Z,Me,Q]),scrollProgress:Fe,scrollSnapList:q.map(Fe.get),scrollSnaps:q,scrollTarget:Ne,scrollTo:Pe,slideLooper:pe(k,A,K,L,ve,Se,q,Z,n),slideFocus:ze,slidesHandler:me(t,o,b),slidesInView:Le,slideIndexes:Ee,slideRegistry:Re,slidesToScroll:xe,target:Q,translate:fe(k,t)};return Be}function ye(){let e={},t;function n(e){t=e}function r(t){return e[t]||[]}function i(e){return r(e).forEach(n=>n(t,e)),c}function a(t,n){return e[t]=r(t).concat([n]),c}function o(t,n){return e[t]=r(t).filter(e=>e!==n),c}function s(){e={}}let c={init:n,emit:i,off:o,on:a,clear:s};return c}var be={align:`center`,axis:`x`,container:null,slides:null,containScroll:`trimSnaps`,direction:`ltr`,slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function xe(e){function t(e,t){return M(e,t||{})}function n(n){let r=n.breakpoints||{};return t(n,j(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{}))}function r(t){return t.map(e=>j(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:r}}function Se(e){let t=[];function n(n,r){return t=r.filter(({options:t})=>e.optionsAtMedia(t).active!==!1),t.forEach(t=>t.init(n,e)),r.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})}function r(){t=t.filter(e=>e.destroy())}return{init:n,destroy:r}}function G(e,t,n){let r=e.ownerDocument,i=r.defaultView,a=xe(i),o=Se(a),s=P(),c=ye(),{mergeOptions:l,optionsAtMedia:u,optionsMediaQueries:d}=a,{on:f,off:p,emit:m}=c,h=O,g=!1,_,y=l(be,G.globalOptions),b=l(y),x=[],S,C,w;function T(){let{container:t,slides:n}=b;C=(v(t)?e.querySelector(t):t)||e.children[0];let r=v(n)?C.querySelectorAll(n):n;w=[].slice.call(r||C.children)}function E(t){let n=ve(e,C,w,r,i,t,c);return t.loop&&!n.slideLooper.canLoop()?E(Object.assign({},t,{loop:!1})):n}function D(e,t){g||(y=l(y,e),b=u(y),x=t||x,T(),_=E(b),d([y,...x.map(({options:e})=>e)]).forEach(e=>s.add(e,`change`,O)),b.active&&(_.translate.to(_.location.get()),_.animation.init(),_.slidesInView.init(),_.slideFocus.init(H),_.eventHandler.init(H),_.resizeHandler.init(H),_.slidesHandler.init(H),_.options.loop&&_.slideLooper.loop(),C.offsetParent&&w.length&&_.dragHandler.init(H),S=o.init(H,x)))}function O(e,t){let n=R();k(),D(l({startIndex:n},e),t),c.emit(`reInit`)}function k(){_.dragHandler.destroy(),_.eventStore.clear(),_.translate.clear(),_.slideLooper.clear(),_.resizeHandler.destroy(),_.slidesHandler.destroy(),_.slidesInView.destroy(),_.animation.destroy(),o.destroy(),s.clear()}function A(){g||(g=!0,s.clear(),k(),c.emit(`destroy`),c.clear())}function j(e,t,n){!b.active||g||(_.scrollBody.useBaseFriction().useDuration(t===!0?0:b.duration),_.scrollTo.index(e,n||0))}function M(e){j(_.index.add(1).get(),e,-1)}function N(e){j(_.index.add(-1).get(),e,1)}function ee(){return _.index.add(1).get()!==R()}function F(){return _.index.add(-1).get()!==R()}function I(){return _.scrollSnapList}function L(){return _.scrollProgress.get(_.offsetLocation.get())}function R(){return _.index.get()}function z(){return _.indexPrevious.get()}function B(){return _.slidesInView.get()}function te(){return _.slidesInView.get(!1)}function V(){return S}function ne(){return _}function re(){return e}function ie(){return C}function ae(){return w}let H={canScrollNext:ee,canScrollPrev:F,containerNode:ie,internalEngine:ne,destroy:A,off:p,on:f,emit:m,plugins:V,previousScrollSnap:z,reInit:h,rootNode:re,scrollNext:M,scrollPrev:N,scrollProgress:L,scrollSnapList:I,scrollTo:j,selectedScrollSnap:R,slideNodes:ae,slidesInView:B,slidesNotInView:te};return D(t,n),setTimeout(()=>c.emit(`init`),0),H}G.globalOptions=void 0;function K(e={},t=[]){let n=(0,u.useRef)(e),r=(0,u.useRef)(t),[i,a]=(0,u.useState)(),[o,s]=(0,u.useState)(),c=(0,u.useCallback)(()=>{i&&i.reInit(n.current,r.current)},[i]);return(0,u.useEffect)(()=>{m(n.current,e)||(n.current=e,c())},[e,c]),(0,u.useEffect)(()=>{g(r.current,t)||(r.current=t,c())},[t,c]),(0,u.useEffect)(()=>{if(p()&&o){G.globalOptions=K.globalOptions;let e=G(o,n.current,r.current);return a(e),()=>e.destroy()}a(void 0)},[o,a]),[s,i]}K.globalOptions=void 0;var Ce={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function we(e,t){let n=e.scrollSnapList();return typeof t==`number`?n.map(()=>t):t(n,e)}function q(e,t){let n=e.rootNode();return t&&t(n)||n}function J(e={}){let t,n,r,i,a=null,o=0,s=!1,c=!1,l=!1,u=!1;function d(a,o){n=a;let{mergeOptions:s,optionsAtMedia:c}=o;if(t=c(s(s(Ce,J.globalOptions),e)),n.scrollSnapList().length<=1)return;u=t.jump,r=!1,i=we(n,t.delay);let{eventStore:l,ownerDocument:d}=n.internalEngine(),f=!!n.internalEngine().options.watchDrag,p=q(n,t.rootNode);l.add(d,`visibilitychange`,_),f&&n.on(`pointerDown`,y),f&&!t.stopOnInteraction&&n.on(`pointerUp`,b),t.stopOnMouseEnter&&l.add(p,`mouseenter`,x),t.stopOnMouseEnter&&!t.stopOnInteraction&&l.add(p,`mouseleave`,S),t.stopOnFocusIn&&n.on(`slideFocusStart`,g),t.stopOnFocusIn&&!t.stopOnInteraction&&l.add(n.containerNode(),`focusout`,h),t.playOnInit&&h()}function f(){n.off(`pointerDown`,y).off(`pointerUp`,b).off(`slideFocusStart`,g),g(),r=!0,s=!1}function p(){let{ownerWindow:e}=n.internalEngine();e.clearTimeout(o),o=e.setTimeout(D,i[n.selectedScrollSnap()]),a=new Date().getTime(),n.emit(`autoplay:timerset`)}function m(){let{ownerWindow:e}=n.internalEngine();e.clearTimeout(o),o=0,a=null,n.emit(`autoplay:timerstopped`)}function h(){if(!r){if(v()){l=!0;return}s||n.emit(`autoplay:play`),p(),s=!0}}function g(){r||(s&&n.emit(`autoplay:stop`),m(),s=!1)}function _(){if(v())return l=s,g();l&&h()}function v(){let{ownerDocument:e}=n.internalEngine();return e.visibilityState===`hidden`}function y(){c||g()}function b(){c||h()}function x(){c=!0,g()}function S(){c=!1,h()}function C(e){e!==void 0&&(u=e),h()}function w(){s&&g()}function T(){s&&h()}function E(){return s}function D(){let{index:e}=n.internalEngine(),r=e.clone().add(1).get(),i=n.scrollSnapList().length-1,a=t.stopOnLastSnap&&r===i;if(n.canScrollNext()?n.scrollNext(u):n.scrollTo(0,u),n.emit(`autoplay:select`),a)return g();h()}function O(){return a?i[n.selectedScrollSnap()]-(new Date().getTime()-a):null}return{name:`autoplay`,options:e,init:d,destroy:f,play:C,stop:w,reset:T,isPlaying:E,timeUntilNext:O}}J.globalOptions=void 0;var Y=n(),Te=(0,u.forwardRef)(({children:e,className:t,style:n,loop:s=!0,autoplay:c=!1,autoplayDelay:l=4e3,stopOnMouseEnter:d=!0,stopOnInteraction:f=!1,draggable:p=!0,slidesPerView:m=1,gap:h=0,defaultIndex:g=0,dots:_=!0,dotsPlacement:v=`inside`,dotsGlassy:y=!1,arrows:b=!1,onChange:x,apiRef:S},C)=>{let w=i(`Carousel`),T=(0,u.useMemo)(()=>c?[J({delay:l,stopOnMouseEnter:d,stopOnInteraction:f,stopOnFocusIn:!0})]:[],[c,l,d,f]),[E,D]=K({loop:s,align:`start`,startIndex:g,watchDrag:p,containScroll:`trimSnaps`},T),[O,k]=(0,u.useState)(g),[A,j]=(0,u.useState)(0),[M,N]=(0,u.useState)(!1),[ee,P]=(0,u.useState)(!1),F=(0,u.useCallback)(()=>{D&&(k(D.selectedScrollSnap()),j(D.scrollSnapList().length),N(D.canScrollPrev()),P(D.canScrollNext()))},[D]);(0,u.useEffect)(()=>{if(D)return F(),D.on(`select`,F),D.on(`reInit`,F),()=>{D.off(`select`,F),D.off(`reInit`,F)}},[D,F]),(0,u.useEffect)(()=>{if(!D||!x)return;let e=()=>x(D.selectedScrollSnap());return D.on(`select`,e),()=>{D.off(`select`,e)}},[D,x]),(0,u.useImperativeHandle)(S,()=>({scrollTo:(e,t)=>D?.scrollTo(e,t),scrollPrev:()=>D?.scrollPrev(),scrollNext:()=>D?.scrollNext(),canScrollPrev:()=>D?.canScrollPrev()??!1,canScrollNext:()=>D?.canScrollNext()??!1,selectedIndex:()=>D?.selectedScrollSnap()??0,count:()=>D?.scrollSnapList().length??0,play:()=>D?.plugins()?.autoplay?.play(),stop:()=>D?.plugins()?.autoplay?.stop(),reInit:()=>D?.reInit()}),[D]);let I=(0,u.useCallback)(e=>{D?.scrollTo(e)},[D]),L={"--_carousel-gap":`${h}px`,"--_carousel-slides-per-view":m,...n};return(0,Y.jsxs)(`div`,{ref:C,className:r(`lg-carousel`,`lg-carousel--dots-${v}`,t),style:L,role:`region`,"aria-roledescription":`carousel`,"aria-label":w.carousel,children:[(0,Y.jsx)(`div`,{className:`lg-carousel__viewport`,ref:E,children:(0,Y.jsx)(`div`,{className:`lg-carousel__container`,children:e})}),b&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`button`,{type:`button`,className:`lg-carousel__arrow lg-carousel__arrow--prev`,onClick:()=>D?.scrollPrev(),disabled:!M,"aria-label":w.prev,children:(0,Y.jsx)(a,{size:16})}),(0,Y.jsx)(`button`,{type:`button`,className:`lg-carousel__arrow lg-carousel__arrow--next`,onClick:()=>D?.scrollNext(),disabled:!ee,"aria-label":w.next,children:(0,Y.jsx)(o,{size:16})})]}),_&&A>1&&(0,Y.jsx)(`div`,{className:r(`lg-carousel__dots`,y&&`lg-carousel__dots--glassy`),children:Array.from({length:A},(e,t)=>(0,Y.jsx)(`button`,{type:`button`,className:r(`lg-carousel__dot`,t===O&&`lg-carousel__dot--active`),onClick:()=>I(t),"aria-label":w.goToPage.replace(`{page}`,String(t+1)),"aria-current":t===O},t))})]})});Te.displayName=`Carousel`;var Ee=(0,u.forwardRef)(({children:e,className:t,style:n},i)=>(0,Y.jsx)(`div`,{ref:i,className:r(`lg-carousel__item`,t),style:n,role:`group`,"aria-roledescription":`slide`,children:e}));Ee.displayName=`Carousel.Item`;var X=Te;X.Item=Ee;var De=[`Slide 1`,`Slide 2`,`Slide 3`];function Oe(){return(0,Y.jsx)(X,{autoplay:!0,loop:!0,style:{borderRadius:24,overflow:`hidden`},children:De.map(e=>(0,Y.jsx)(X.Item,{children:(0,Y.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:200,background:`var(--lg-g-bg-color-primary-translucent-soft)`,color:`var(--lg-g-fg-color-primary-default)`,fontSize:32,fontWeight:600},children:e})},e))})}var ke=`import { Carousel } from "lingee-ui";

const slides = ["Slide 1", "Slide 2", "Slide 3"];

export default function BasicDemo() {
  return (
    <Carousel autoplay loop style={{ borderRadius: 24, overflow: "hidden" }}>
      {slides.map((label) => (
        <Carousel.Item key={label}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 200,
              background: "var(--lg-g-bg-color-primary-translucent-soft)",
              color: "var(--lg-g-fg-color-primary-default)",
              fontSize: 32,
              fontWeight: 600,
            }}
          >
            {label}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
`,Ae=[`Slide 1`,`Slide 2`,`Slide 3`,`Slide 4`];function je(){let[e,t]=(0,u.useState)(`4000`);return(0,Y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,Y.jsxs)(l,{value:e,onChange:t,orientation:`horizontal`,children:[(0,Y.jsx)(c,{value:`3000`,children:`3s`}),(0,Y.jsx)(c,{value:`4000`,children:`4s`}),(0,Y.jsx)(c,{value:`6000`,children:`6s`})]}),(0,Y.jsx)(X,{autoplay:!0,loop:!0,autoplayDelay:Number(e),style:{borderRadius:16,overflow:`hidden`},children:Ae.map(e=>(0,Y.jsx)(X.Item,{children:(0,Y.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:140,background:`var(--lg-g-bg-color-black-subtle)`,fontSize:20,fontWeight:600},children:e})},e))},e)]})}var Me=`import { useState } from "react";
import { Carousel, RadioGroup, RadioItem } from "lingee-ui";

const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

export default function SpeedDemo() {
  const [delay, setDelay] = useState("4000");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <RadioGroup value={delay} onChange={setDelay} orientation="horizontal">
        <RadioItem value="3000">3s</RadioItem>
        <RadioItem value="4000">4s</RadioItem>
        <RadioItem value="6000">6s</RadioItem>
      </RadioGroup>

      {/* delay 变化需要重建 autoplay 插件，用 key 强制重挂载 */}
      <Carousel
        key={delay}
        autoplay
        loop
        autoplayDelay={Number(delay)}
        style={{ borderRadius: 16, overflow: "hidden" }}
      >
        {slides.map((label) => (
          <Carousel.Item key={label}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 140,
                background: "var(--lg-g-bg-color-black-subtle)",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
`,Z=[`Slide 1`,`Slide 2`,`Slide 3`];function Q(){return(0,Y.jsx)(X,{autoplay:!0,loop:!0,dotsGlassy:!0,style:{borderRadius:24,overflow:`hidden`},children:Z.map(e=>(0,Y.jsx)(X.Item,{children:(0,Y.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:200,background:`var(--lg-g-bg-color-primary-default)`,color:`var(--lg-g-fg-color-white-heavy)`,fontSize:28,fontWeight:600},children:e})},e))})}var $=`import { Carousel } from "lingee-ui";

const slides = ["Slide 1", "Slide 2", "Slide 3"];

export default function GlassyDemo() {
  return (
    <Carousel autoplay loop dotsGlassy style={{ borderRadius: 24, overflow: "hidden" }}>
      {slides.map((label) => (
        <Carousel.Item key={label}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 200,
              // 深色底用于演示毛玻璃胶囊底的衬托效果
              background: "var(--lg-g-bg-color-primary-default)",
              color: "var(--lg-g-fg-color-white-heavy)",
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            {label}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
`,Ne=[`Slide 1`,`Slide 2`,`Slide 3`];function Pe(){return(0,Y.jsx)(X,{arrows:!0,loop:!1,style:{borderRadius:16,overflow:`hidden`},children:Ne.map(e=>(0,Y.jsx)(X.Item,{children:(0,Y.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:160,background:`var(--lg-g-bg-color-black-subtle)`,fontSize:20,fontWeight:600},children:e})},e))})}var Fe=`import { Carousel } from "lingee-ui";

const slides = ["Slide 1", "Slide 2", "Slide 3"];

export default function ArrowsDemo() {
  return (
    // loop 关闭时首尾两端的箭头会自动进入禁用态
    <Carousel arrows loop={false} style={{ borderRadius: 16, overflow: "hidden" }}>
      {slides.map((label) => (
        <Carousel.Item key={label}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 160,
              background: "var(--lg-g-bg-color-black-subtle)",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            {label}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
`,Ie=[`Slide 1`,`Slide 2`,`Slide 3`,`Slide 4`];function Le(){return(0,Y.jsx)(X,{draggable:!1,defaultIndex:2,loop:!1,style:{borderRadius:16,overflow:`hidden`},children:Ie.map(e=>(0,Y.jsx)(X.Item,{children:(0,Y.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:160,background:`var(--lg-g-bg-color-black-subtle)`,fontSize:20,fontWeight:600},children:e})},e))})}var Re=`import { Carousel } from "lingee-ui";

const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

export default function StaticDemo() {
  return (
    // 禁止拖拽 + 指定初始页，适用于只允许通过指示器跳转的场景
    <Carousel
      draggable={false}
      defaultIndex={2}
      loop={false}
      style={{ borderRadius: 16, overflow: "hidden" }}
    >
      {slides.map((label) => (
        <Carousel.Item key={label}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 160,
              background: "var(--lg-g-bg-color-black-subtle)",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            {label}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
`,ze=[`Slide 1`,`Slide 2`,`Slide 3`,`Slide 4`,`Slide 5`,`Slide 6`];function Be(){return(0,Y.jsx)(X,{slidesPerView:3,gap:16,loop:!0,dotsPlacement:`outside`,arrows:!0,children:ze.map(e=>(0,Y.jsx)(X.Item,{children:(0,Y.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:120,borderRadius:12,background:`var(--lg-g-bg-color-black-subtle)`,fontSize:16},children:e})},e))})}var Ve=`import { Carousel } from "lingee-ui";

const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5", "Slide 6"];

export default function MultipleDemo() {
  return (
    <Carousel slidesPerView={3} gap={16} loop dotsPlacement="outside" arrows>
      {slides.map((label) => (
        <Carousel.Item key={label}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 120,
              borderRadius: 12,
              background: "var(--lg-g-bg-color-black-subtle)",
              fontSize: 16,
            }}
          >
            {label}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
`,He=[`Slide 1`,`Slide 2`,`Slide 3`];function Ue(){let e=(0,u.useRef)(null),[t,n]=(0,u.useState)(0);return(0,Y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,Y.jsx)(X,{apiRef:e,loop:!0,dots:!1,onChange:n,style:{borderRadius:16,overflow:`hidden`},children:He.map(e=>(0,Y.jsx)(X.Item,{children:(0,Y.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:140,background:`var(--lg-g-bg-color-black-subtle)`,fontSize:20,fontWeight:600},children:e})},e))}),(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,Y.jsx)(s,{onClick:()=>e.current?.scrollPrev(),children:`Prev`}),(0,Y.jsx)(s,{onClick:()=>e.current?.scrollNext(),children:`Next`}),(0,Y.jsx)(s,{variant:`text`,onClick:()=>e.current?.scrollTo(0),children:`Reset`}),(0,Y.jsxs)(`span`,{style:{fontSize:14,color:`var(--lg-g-fg-color-black-muted)`},children:[`Current: `,t+1,` / `,He.length]})]})]})}var We=`import { useRef, useState } from "react";
import { Button, Carousel } from "lingee-ui";
import type { CarouselApi } from "lingee-ui";

const slides = ["Slide 1", "Slide 2", "Slide 3"];

export default function ControlledDemo() {
  const apiRef = useRef<CarouselApi>(null);
  const [current, setCurrent] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Carousel
        apiRef={apiRef}
        loop
        dots={false}
        onChange={setCurrent}
        style={{ borderRadius: 16, overflow: "hidden" }}
      >
        {slides.map((label) => (
          <Carousel.Item key={label}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 140,
                background: "var(--lg-g-bg-color-black-subtle)",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* 中英文档共用同一份 demo，文案用中性英文避免英文站出现中文 */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Button onClick={() => apiRef.current?.scrollPrev()}>Prev</Button>
        <Button onClick={() => apiRef.current?.scrollNext()}>Next</Button>
        <Button variant="text" onClick={() => apiRef.current?.scrollTo(0)}>
          Reset
        </Button>
        <span style={{ fontSize: 14, color: "var(--lg-g-fg-color-black-muted)" }}>
          Current: {current + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}
`;export{Re as a,Pe as c,Me as d,je as f,Be as i,$ as l,Oe as m,Ue as n,Le as o,ke as p,Ve as r,Fe as s,We as t,Q as u};