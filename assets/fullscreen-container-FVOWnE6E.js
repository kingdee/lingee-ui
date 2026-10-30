import{a as e,n as t,r as n,t as r}from"./jsx-runtime-OQpaS_Dv.js";import{F as i,j as a}from"./tooltip-DJNKKjxB.js";import{n as o}from"./provider-ViaVeHt0.js";import{t as s}from"./ChevronDown-C_4ZNpZX.js";import{t as c}from"./button-BE2IGfnk.js";import{i as l,r as u,t as d}from"./popover-Bn-puzws.js";import{t as f}from"./input-CHscQFzF.js";var p={aliceblue:`9ehhb`,antiquewhite:`9sgk7`,aqua:`1ekf`,aquamarine:`4zsno`,azure:`9eiv3`,beige:`9lhp8`,bisque:`9zg04`,black:`0`,blanchedalmond:`9zhe5`,blue:`73`,blueviolet:`5e31e`,brown:`6g016`,burlywood:`8ouiv`,cadetblue:`3qba8`,chartreuse:`4zshs`,chocolate:`87k0u`,coral:`9yvyo`,cornflowerblue:`3xael`,cornsilk:`9zjz0`,crimson:`8l4xo`,cyan:`1ekf`,darkblue:`3v`,darkcyan:`rkb`,darkgoldenrod:`776yz`,darkgray:`6mbhl`,darkgreen:`jr4`,darkgrey:`6mbhl`,darkkhaki:`7ehkb`,darkmagenta:`5f91n`,darkolivegreen:`3bzfz`,darkorange:`9yygw`,darkorchid:`5z6x8`,darkred:`5f8xs`,darksalmon:`9441m`,darkseagreen:`5lwgf`,darkslateblue:`2th1n`,darkslategray:`1ugcv`,darkslategrey:`1ugcv`,darkturquoise:`14up`,darkviolet:`5rw7n`,deeppink:`9yavn`,deepskyblue:`11xb`,dimgray:`442g9`,dimgrey:`442g9`,dodgerblue:`16xof`,firebrick:`6y7tu`,floralwhite:`9zkds`,forestgreen:`1cisi`,fuchsia:`9y70f`,gainsboro:`8m8kc`,ghostwhite:`9pq0v`,goldenrod:`8j4f4`,gold:`9zda8`,gray:`50i2o`,green:`pa8`,greenyellow:`6senj`,grey:`50i2o`,honeydew:`9eiuo`,hotpink:`9yrp0`,indianred:`80gnw`,indigo:`2xcoy`,ivory:`9zldc`,khaki:`9edu4`,lavenderblush:`9ziet`,lavender:`90c8q`,lawngreen:`4vk74`,lemonchiffon:`9zkct`,lightblue:`6s73a`,lightcoral:`9dtog`,lightcyan:`8s1rz`,lightgoldenrodyellow:`9sjiq`,lightgray:`89jo3`,lightgreen:`5nkwg`,lightgrey:`89jo3`,lightpink:`9z6wx`,lightsalmon:`9z2ii`,lightseagreen:`19xgq`,lightskyblue:`5arju`,lightslategray:`4nwk9`,lightslategrey:`4nwk9`,lightsteelblue:`6wau6`,lightyellow:`9zlcw`,lime:`1edc`,limegreen:`1zcxe`,linen:`9shk6`,magenta:`9y70f`,maroon:`4zsow`,mediumaquamarine:`40eju`,mediumblue:`5p`,mediumorchid:`79qkz`,mediumpurple:`5r3rv`,mediumseagreen:`2d9ip`,mediumslateblue:`4tcku`,mediumspringgreen:`1di2`,mediumturquoise:`2uabw`,mediumvioletred:`7rn9h`,midnightblue:`z980`,mintcream:`9ljp6`,mistyrose:`9zg0x`,moccasin:`9zfzp`,navajowhite:`9zest`,navy:`3k`,oldlace:`9wq92`,olive:`50hz4`,olivedrab:`472ub`,orange:`9z3eo`,orangered:`9ykg0`,orchid:`8iu3a`,palegoldenrod:`9bl4a`,palegreen:`5yw0o`,paleturquoise:`6v4ku`,palevioletred:`8k8lv`,papayawhip:`9zi6t`,peachpuff:`9ze0p`,peru:`80oqn`,pink:`9z8wb`,plum:`8nba5`,powderblue:`6wgdi`,purple:`4zssg`,rebeccapurple:`3zk49`,red:`9y6tc`,rosybrown:`7cv4f`,royalblue:`2jvtt`,saddlebrown:`5fmkz`,salmon:`9rvci`,sandybrown:`9jn1c`,seagreen:`1tdnb`,seashell:`9zje6`,sienna:`6973h`,silver:`7ir40`,skyblue:`5arjf`,slateblue:`45e4t`,slategray:`4e100`,slategrey:`4e100`,snow:`9zke2`,springgreen:`1egv`,steelblue:`2r1kk`,tan:`87yx8`,teal:`pds`,thistle:`8ggk8`,tomato:`9yqfb`,turquoise:`2j4r4`,violet:`9b10u`,wheat:`9ld4j`,white:`9zldr`,whitesmoke:`9lhpx`,yellow:`9zl6o`,yellowgreen:`61fzm`},m=Math.round;function h(e,t){let n=e.replace(/^[^(]*\((.*)/,`$1`).replace(/\).*/,``).match(/\d*\.?\d+%?/g)||[],r=n.map(e=>parseFloat(e));for(let e=0;e<3;e+=1)r[e]=t(r[e]||0,n[e]||``,e);return r[3]=n[3]?n[3].includes(`%`)?r[3]/100:r[3]:1,r}var g=(e,t,n)=>n===0?e:e/100;function _(e,t){let n=t||255;return e>n?n:e<0?0:e}var v=class e{isValid=!0;r=0;g=0;b=0;a=1;_h;_hsl_s;_hsv_s;_l;_v;_max;_min;_brightness;constructor(t){function n(e){return e[0]in t&&e[1]in t&&e[2]in t}if(t){if(typeof t==`string`){let e=t.trim();function n(t){return e.startsWith(t)}if(/^#?[A-F\d]{3,8}$/i.test(e))this.fromHexString(e);else if(n(`rgb`))this.fromRgbString(e);else if(n(`hsl`))this.fromHslString(e);else if(n(`hsv`)||n(`hsb`))this.fromHsvString(e);else{let t=p[e.toLowerCase()];t&&this.fromHexString(parseInt(t,36).toString(16).padStart(6,`0`))}}else if(t instanceof e)this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this._h=t._h,this._hsl_s=t._hsl_s,this._hsv_s=t._hsv_s,this._l=t._l,this._v=t._v;else if(n(`rgb`))this.r=_(t.r),this.g=_(t.g),this.b=_(t.b),this.a=typeof t.a==`number`?_(t.a,1):1;else if(n(`hsl`))this.fromHsl(t);else if(n(`hsv`))this.fromHsv(t);else throw Error(`@ant-design/fast-color: unsupported input `+JSON.stringify(t))}}setR(e){return this._sc(`r`,e)}setG(e){return this._sc(`g`,e)}setB(e){return this._sc(`b`,e)}setA(e){return this._sc(`a`,e,1)}setHue(e){let t=this.toHsv();return t.h=e,this._c(t)}getLuminance(){function e(e){let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4}let t=e(this.r),n=e(this.g),r=e(this.b);return .2126*t+.7152*n+.0722*r}getHue(){if(this._h===void 0){let e=this.getMax()-this.getMin();this._h=e===0?0:m(60*(this.r===this.getMax()?(this.g-this.b)/e+(this.g<this.b?6:0):this.g===this.getMax()?(this.b-this.r)/e+2:(this.r-this.g)/e+4))}return this._h}getSaturation(){return this.getHSVSaturation()}getHSVSaturation(){if(this._hsv_s===void 0){let e=this.getMax()-this.getMin();this._hsv_s=e===0?0:e/this.getMax()}return this._hsv_s}getHSLSaturation(){if(this._hsl_s===void 0){let e=this.getMax()-this.getMin();if(e===0)this._hsl_s=0;else{let t=this.getLightness();this._hsl_s=e/255/(1-Math.abs(2*t-1))}}return this._hsl_s}getLightness(){return this._l===void 0&&(this._l=(this.getMax()+this.getMin())/510),this._l}getValue(){return this._v===void 0&&(this._v=this.getMax()/255),this._v}getBrightness(){return this._brightness===void 0&&(this._brightness=(this.r*299+this.g*587+this.b*114)/1e3),this._brightness}darken(e=10){let t=this.getHue(),n=this.getSaturation(),r=this.getLightness()-e/100;return r<0&&(r=0),this._c({h:t,s:n,l:r,a:this.a})}lighten(e=10){let t=this.getHue(),n=this.getSaturation(),r=this.getLightness()+e/100;return r>1&&(r=1),this._c({h:t,s:n,l:r,a:this.a})}mix(e,t=50){let n=this._c(e),r=t/100,i=e=>(n[e]-this[e])*r+this[e],a={r:m(i(`r`)),g:m(i(`g`)),b:m(i(`b`)),a:m(i(`a`)*100)/100};return this._c(a)}tint(e=10){return this.mix({r:255,g:255,b:255,a:1},e)}shade(e=10){return this.mix({r:0,g:0,b:0,a:1},e)}onBackground(e){let t=this._c(e),n=this.a+t.a*(1-this.a),r=e=>m((this[e]*this.a+t[e]*t.a*(1-this.a))/n);return this._c({r:r(`r`),g:r(`g`),b:r(`b`),a:n})}isDark(){return this.getBrightness()<128}isLight(){return this.getBrightness()>=128}equals(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}clone(){return this._c(this)}toHexString(){let e=`#`,t=(this.r||0).toString(16);e+=t.length===2?t:`0`+t;let n=(this.g||0).toString(16);e+=n.length===2?n:`0`+n;let r=(this.b||0).toString(16);if(e+=r.length===2?r:`0`+r,typeof this.a==`number`&&this.a>=0&&this.a<1){let t=m(this.a*255).toString(16);e+=t.length===2?t:`0`+t}return e}toHsl(){return{h:this.getHue(),s:this.getHSLSaturation(),l:this.getLightness(),a:this.a}}toHslString(){let e=this.getHue(),t=m(this.getHSLSaturation()*100),n=m(this.getLightness()*100);return this.a===1?`hsl(${e},${t}%,${n}%)`:`hsla(${e},${t}%,${n}%,${this.a})`}toHsv(){return{h:this.getHue(),s:this.getHSVSaturation(),v:this.getValue(),a:this.a}}toRgb(){return{r:this.r,g:this.g,b:this.b,a:this.a}}toRgbString(){return this.a===1?`rgb(${this.r},${this.g},${this.b})`:`rgba(${this.r},${this.g},${this.b},${this.a})`}toString(){return this.toRgbString()}_sc(e,t,n){let r=this.clone();return r[e]=_(t,n),r}_c(e){return new this.constructor(e)}getMax(){return this._max===void 0&&(this._max=Math.max(this.r,this.g,this.b)),this._max}getMin(){return this._min===void 0&&(this._min=Math.min(this.r,this.g,this.b)),this._min}fromHexString(e){let t=e.replace(`#`,``);function n(e,n){return parseInt(t[e]+t[n||e],16)}t.length<6?(this.r=n(0),this.g=n(1),this.b=n(2),this.a=t[3]?n(3)/255:1):(this.r=n(0,1),this.g=n(2,3),this.b=n(4,5),this.a=t[6]?n(6,7)/255:1)}fromHsl({h:e,s:t,l:n,a:r}){let i=(e%360+360)%360;if(this._h=i,this._hsl_s=t,this._l=n,this.a=typeof r==`number`?r:1,t<=0){let e=m(n*255);this.r=e,this.g=e,this.b=e;return}let a=0,o=0,s=0,c=i/60,l=(1-Math.abs(2*n-1))*t,u=l*(1-Math.abs(c%2-1));c>=0&&c<1?(a=l,o=u):c>=1&&c<2?(a=u,o=l):c>=2&&c<3?(o=l,s=u):c>=3&&c<4?(o=u,s=l):c>=4&&c<5?(a=u,s=l):c>=5&&c<6&&(a=l,s=u);let d=n-l/2;this.r=m((a+d)*255),this.g=m((o+d)*255),this.b=m((s+d)*255)}fromHsv({h:e,s:t,v:n,a:r}){let i=(e%360+360)%360;this._h=i,this._hsv_s=t,this._v=n,this.a=typeof r==`number`?r:1;let a=m(n*255);if(this.r=a,this.g=a,this.b=a,t<=0)return;let o=i/60,s=Math.floor(o),c=o-s,l=m(n*(1-t)*255),u=m(n*(1-t*c)*255),d=m(n*(1-t*(1-c))*255);switch(s){case 0:this.g=d,this.b=l;break;case 1:this.r=u,this.b=l;break;case 2:this.r=l,this.b=d;break;case 3:this.r=l,this.g=u;break;case 4:this.r=d,this.g=l;break;default:this.g=l,this.b=u}}fromHsvString(e){let t=h(e,g);this.fromHsv({h:t[0],s:t[1],v:t[2],a:t[3]})}fromHslString(e){let t=h(e,g);this.fromHsl({h:t[0],s:t[1],l:t[2],a:t[3]})}fromRgbString(e){let t=h(e,(e,t)=>t.includes(`%`)?m(e/100*255):e);this.r=t[0],this.g=t[1],this.b=t[2],this.a=t[3]}},y=e(t()),b=e=>Math.round(Number(e||0)),x=e=>{if(e instanceof v)return e;if(e&&typeof e==`object`&&`h`in e&&`b`in e){let{b:t,...n}=e;return{...n,v:t}}return typeof e==`string`&&/hsb/.test(e)?e.replace(/hsb/,`hsv`):e},S=class extends v{constructor(e){super(x(e))}toHsbString(){let e=this.toHsb(),t=b(e.s*100),n=b(e.b*100),r=b(e.h),i=e.a,a=`hsb(${r}, ${t}%, ${n}%)`,o=`hsba(${r}, ${t}%, ${n}%, ${i.toFixed(i===0?0:2)})`;return i===1?a:o}toHsb(){let{v:e,...t}=this.toHsv();return{...t,b:e,a:this.a}}},C=`rc-color-picker`,w=e=>e instanceof S?e:new S(e),T=w(`#1677ff`),E=e=>{let{offset:t,targetRef:n,containerRef:r,color:i,type:a}=e,{width:o,height:s}=r.current.getBoundingClientRect(),{width:c,height:l}=n.current.getBoundingClientRect(),u=c/2,d=l/2,f=(t.x+u)/o,p=1-(t.y+d)/s,m=i.toHsb(),h=f,g=(t.x+u)/o*360;if(a)switch(a){case`hue`:return w({...m,h:g<=0?0:g});case`alpha`:return w({...m,a:h<=0?0:h})}return w({h:m.h,s:f<=0?0:f,b:p>=1?1:p,a:m.a})},D=(e,t)=>{let n=e.toHsb();switch(t){case`hue`:return{x:n.h/360*100,y:50};case`alpha`:return{x:e.a*100,y:50};default:return{x:n.s*100,y:(1-n.b)*100}}},O=({color:e,prefixCls:t,className:n,style:r,innerClassName:a,innerStyle:o,onClick:s})=>{let c=`${t}-color-block`;return y.createElement(`div`,{className:i(c,n),style:r,onClick:s},y.createElement(`div`,{className:i(`${c}-inner`,a),style:{background:e,...o}}))};function k(e){let t=`touches`in e?e.touches[0]:e,n=document.documentElement.scrollLeft||document.body.scrollLeft||window.pageXOffset,r=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;return{pageX:t.pageX-n,pageY:t.pageY-r}}function A(e){let{targetRef:t,containerRef:n,direction:r,onDragChange:i,onDragChangeComplete:a,calculate:o,color:s,disabledDrag:c}=e,[l,u]=(0,y.useState)({x:0,y:0}),d=(0,y.useRef)(null),f=(0,y.useRef)(null);(0,y.useEffect)(()=>{u(o())},[s]),(0,y.useEffect)(()=>()=>{document.removeEventListener(`mousemove`,d.current),document.removeEventListener(`mouseup`,f.current),document.removeEventListener(`touchmove`,d.current),document.removeEventListener(`touchend`,f.current),d.current=null,f.current=null},[]);let p=e=>{let{pageX:a,pageY:o}=k(e),{x:s,y:c,width:u,height:d}=n.current.getBoundingClientRect(),{width:f,height:p}=t.current.getBoundingClientRect(),m=f/2,h=p/2,g=Math.max(0,Math.min(a-s,u))-m,_=Math.max(0,Math.min(o-c,d))-h,v={x:g,y:r===`x`?l.y:_};if(f===0&&p===0||f!==p)return!1;i?.(v)},m=e=>{e.preventDefault(),p(e)},h=e=>{e.preventDefault(),document.removeEventListener(`mousemove`,d.current),document.removeEventListener(`mouseup`,f.current),document.removeEventListener(`touchmove`,d.current),document.removeEventListener(`touchend`,f.current),d.current=null,f.current=null,a?.()};return[l,e=>{document.removeEventListener(`mousemove`,d.current),document.removeEventListener(`mouseup`,f.current),!c&&(p(e),document.addEventListener(`mousemove`,m),document.addEventListener(`mouseup`,h),document.addEventListener(`touchmove`,m),document.addEventListener(`touchend`,h),d.current=m,f.current=h)}]}var j=e=>{let t=y.useRef(e);return t.current=e,y.useCallback((...e)=>t.current?.(...e),[])};function M(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}var N=M()?y.useLayoutEffect:y.useEffect,P=(e,t)=>{let n=y.useRef(!0);N(()=>e(n.current),t),N(()=>(n.current=!1,()=>{n.current=!0}),[])};function F(e,t){let[n,r]=(0,y.useState)(e),i=t===void 0?n:t;return P(e=>{e||r(t)},[t]),[i,r]}var I=n((e=>{}));n(((e,t)=>{t.exports=I()}))(),Number(y.version.split(`.`)[0]);var L=({size:e=`default`,color:t,prefixCls:n})=>y.createElement(`div`,{className:i(`${n}-handler`,{[`${n}-handler-sm`]:e===`small`}),style:{backgroundColor:t}}),R=({children:e,style:t,prefixCls:n})=>y.createElement(`div`,{className:`${n}-palette`,style:{position:`relative`,...t}},e),z=(0,y.forwardRef)((e,t)=>{let{children:n,x:r,y:i}=e;return y.createElement(`div`,{ref:t,style:{position:`absolute`,left:`${r}%`,top:`${i}%`,zIndex:1,transform:`translate(-50%, -50%)`}},n)}),B=({color:e,onChange:t,prefixCls:n,onChangeComplete:r,disabled:i})=>{let a=(0,y.useRef)(),o=(0,y.useRef)(),s=(0,y.useRef)(e),[c,l]=A({color:e,containerRef:a,targetRef:o,calculate:()=>D(e),onDragChange:j(n=>{let r=E({offset:n,targetRef:o,containerRef:a,color:e});s.current=r,t(r)}),onDragChangeComplete:()=>r?.(s.current),disabledDrag:i});return y.createElement(`div`,{ref:a,className:`${n}-select`,onMouseDown:l,onTouchStart:l},y.createElement(R,{prefixCls:n},y.createElement(z,{x:c.x,y:c.y,ref:o},y.createElement(L,{color:e.toRgbString(),prefixCls:n})),y.createElement(`div`,{className:`${n}-saturation`,style:{backgroundColor:`hsl(${e.toHsb().h},100%, 50%)`,backgroundImage:`linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))`}})))},V=(e,t)=>{let[n,r]=F(e,t);return[(0,y.useMemo)(()=>w(n),[n]),r]},H=({colors:e,children:t,direction:n=`to right`,type:r,prefixCls:i})=>{let a=(0,y.useMemo)(()=>e.map((t,n)=>{let i=w(t);return r===`alpha`&&n===e.length-1&&(i=new S(i.setA(1))),i.toRgbString()}).join(`,`),[e,r]);return y.createElement(`div`,{className:`${i}-gradient`,style:{position:`absolute`,inset:0,background:`linear-gradient(${n}, ${a})`}},t)},ee=e=>{let{prefixCls:t,colors:n,disabled:r,onChange:a,onChangeComplete:o,color:s,type:c}=e,l=(0,y.useRef)(null),u=(0,y.useRef)(null),d=(0,y.useRef)(s),f=e=>c===`hue`?e.getHue():e.a*100,[p,m]=A({color:s,targetRef:u,containerRef:l,calculate:()=>D(s,c),onDragChange:j(e=>{let t=E({offset:e,targetRef:u,containerRef:l,color:s,type:c});d.current=t,a(f(t))}),onDragChangeComplete(){o(f(d.current))},direction:`x`,disabledDrag:r}),h=y.useMemo(()=>{if(c===`hue`){let e=s.toHsb();return e.s=1,e.b=1,e.a=1,new S(e)}return s},[s,c]),g=y.useMemo(()=>n.map(e=>`${e.color} ${e.percent}%`),[n]);return y.createElement(`div`,{ref:l,className:i(`${t}-slider`,`${t}-slider-${c}`),onMouseDown:m,onTouchStart:m},y.createElement(R,{prefixCls:t},y.createElement(z,{x:p.x,y:p.y,ref:u},y.createElement(L,{size:`small`,color:h.toHexString(),prefixCls:t})),y.createElement(H,{colors:g,type:c,prefixCls:t})))};function U(e){return y.useMemo(()=>{let{slider:t}=e||{};return[t||ee]},[e])}function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}var G=[{color:`rgb(255, 0, 0)`,percent:0},{color:`rgb(255, 255, 0)`,percent:17},{color:`rgb(0, 255, 0)`,percent:33},{color:`rgb(0, 255, 255)`,percent:50},{color:`rgb(0, 0, 255)`,percent:67},{color:`rgb(255, 0, 255)`,percent:83},{color:`rgb(255, 0, 0)`,percent:100}],K=(0,y.forwardRef)((e,t)=>{let{value:n,defaultValue:r,prefixCls:a=C,onChange:o,onChangeComplete:s,className:c,style:l,panelRender:u,disabledAlpha:d=!1,disabled:f=!1,components:p}=e,[m]=U(p),[h,g]=V(r||T,n),_=(0,y.useMemo)(()=>h.setA(1).toRgbString(),[h]),v=(e,t)=>{n||g(e),o?.(e,t)},b=e=>new S(h.setHue(e)),x=e=>new S(h.setA(e/100)),w=e=>{v(b(e),{type:`hue`,value:e})},E=e=>{v(x(e),{type:`alpha`,value:e})},D=e=>{s&&s(b(e))},k=e=>{s&&s(x(e))},A=i(`${a}-panel`,c,{[`${a}-panel-disabled`]:f}),j={prefixCls:a,disabled:f,color:h},M=y.createElement(y.Fragment,null,y.createElement(B,W({onChange:v},j,{onChangeComplete:s})),y.createElement(`div`,{className:`${a}-slider-container`},y.createElement(`div`,{className:i(`${a}-slider-group`,{[`${a}-slider-group-disabled-alpha`]:d})},y.createElement(m,W({},j,{type:`hue`,colors:G,min:0,max:359,value:h.getHue(),onChange:w,onChangeComplete:D})),!d&&y.createElement(m,W({},j,{type:`alpha`,colors:[{percent:0,color:`rgba(255, 0, 4, 0)`},{percent:100,color:_}],min:0,max:100,value:h.a*100,onChange:E,onChangeComplete:k}))),y.createElement(O,{color:h.toRgbString(),prefixCls:a})));return y.createElement(`div`,{className:A,style:l,ref:t},typeof u==`function`?u(M):M)}),q=r(),J=/^(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i,Y=/^(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;function X(e){let{r:t,g:n,b:r,a:i}=e.toRgb();return{r:t,g:n,b:r,a:i}}function Z({value:e,disabledAlpha:t,hexLabel:n,alphaLabel:r,onCommit:i}){let a=(0,y.useMemo)(()=>new S(e),[e]),o=a.toHexString().slice(1,7).toUpperCase(),s=Math.round(a.a*100),c=t?6:8,[l,u]=(0,y.useState)(o),[d,p]=(0,y.useState)(String(s));(0,y.useEffect)(()=>u(o),[o]),(0,y.useEffect)(()=>p(String(s)),[s]);let m=()=>{if(l===o)return;if(!(t?Y:J).test(l)){u(o);return}let e=new S(`#${l}`);i(l.length===8?e:e.setA(a.a))},h=()=>{let e=Number.parseInt(d,10);if(Number.isNaN(e)){p(String(s));return}let t=Math.min(100,Math.max(0,e));p(String(t)),t!==s&&i(a.setA(t/100))};return(0,q.jsxs)(`div`,{className:`lg-color-picker__fields`,children:[(0,q.jsx)(f,{size:`sm`,className:`lg-color-picker__hex-input`,prefix:`#`,value:l,"aria-label":n,onChange:e=>u(e.target.value.replace(/[^0-9a-f]/gi,``).slice(0,c).toUpperCase()),onBlur:m,onPressEnter:m}),!t&&(0,q.jsx)(f,{size:`sm`,className:`lg-color-picker__alpha-input`,suffix:`%`,inputMode:`numeric`,value:d,"aria-label":r,onChange:e=>p(e.target.value.replace(/\D/g,``).slice(0,3)),onBlur:h,onPressEnter:h})]})}var Q=y.forwardRef(({className:e,style:t,size:n=`md`,value:r,defaultValue:i=`#1677ff`,onChange:s,onChangeComplete:c,disabled:f=!1,disabledAlpha:p=!1,placeholder:m,error:h=!1,panelExtra:g,placement:_=`bottom`,children:v,showInput:b=!1,getPopupContainer:x},S)=>{let C=o(`ColorPicker`),w=m??C.placeholder,[T,E]=(0,y.useState)(!1),[D,O]=(0,y.useState)(i),k=r!==void 0,A=k?r:D,j=(0,y.useCallback)(e=>{let t=e.toHexString();k||O(t),s?.(t,X(e))},[k,s]),M=(0,y.useCallback)(e=>{c?.(e.toHexString(),X(e))},[c]),N=(0,y.useCallback)(e=>{j(e),M(e)},[j,M]),P=(0,y.useCallback)(e=>{f||E(e)},[f]),F=a(`lg-color-picker`,`lg-color-picker--${n}`,T&&`lg-color-picker--focused`,h&&`lg-color-picker--error`,f&&`lg-color-picker--disabled`,e);return(0,q.jsxs)(d,{open:T,onOpenChange:P,children:[(0,q.jsx)(l,{ref:v?S:void 0,children:v??(0,q.jsxs)(`div`,{ref:S,className:F,style:t,tabIndex:f?-1:0,role:`button`,"aria-disabled":f,"aria-expanded":T,children:[(0,q.jsx)(`span`,{className:`lg-color-picker__value`,children:A||w}),(0,q.jsx)(`span`,{className:`lg-color-picker__swatch-wrapper`,children:(0,q.jsx)(`span`,{className:`lg-color-picker__swatch`,style:{backgroundColor:A||`transparent`}})})]})}),(0,q.jsxs)(u,{side:_,align:`start`,sideOffset:4,className:`lg-color-picker__panel`,container:x?.(),onOpenAutoFocus:e=>e.preventDefault(),children:[(0,q.jsx)(K,{value:A,onChange:j,onChangeComplete:M,disabledAlpha:p}),b&&(0,q.jsx)(Z,{value:A,disabledAlpha:p,hexLabel:C.hexInput,alphaLabel:C.alphaInput,onCommit:N}),g&&(0,q.jsx)(`div`,{className:`lg-color-picker__panel-extra`,children:g})]})]})});Q.displayName=`ColorPicker`;function te(){let[e,t]=(0,y.useState)(`#495dff`);return(0,q.jsxs)(`div`,{style:{width:260},children:[(0,q.jsx)(Q,{value:e,onChange:t}),(0,q.jsxs)(`p`,{style:{marginTop:12,fontSize:14,color:`#666`},children:[`Current color: `,e]})]})}var ne=`import { useState } from "react";
import { ColorPicker } from "lingee-ui";

export default function BasicDemo() {
  const [color, setColor] = useState("#495dff");

  return (
    <div style={{ width: 260 }}>
      <ColorPicker value={color} onChange={setColor} />
      <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
        Current color: {color}
      </p>
    </div>
  );
}
`,re=[`#495dff`,`#ff293b`,`#22c55e`,`#ff5522`,`#2970ff`,`#8b5cf6`,`#000000`,`#666666`];function ie(){let[e,t]=(0,y.useState)(`#495dff`);return(0,q.jsx)(`div`,{style:{width:260},children:(0,q.jsx)(Q,{value:e,onChange:t,panelExtra:(0,q.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`},children:re.map(n=>(0,q.jsx)(`span`,{onClick:()=>t(n),style:{width:20,height:20,borderRadius:4,backgroundColor:n,cursor:`pointer`,border:e===n?`2px solid var(--lg-g-border-color-primary-default)`:`1px solid var(--lg-g-border-color-black-soft)`}},n))})})})}var ae=`import { useState } from "react";
import { ColorPicker } from "lingee-ui";

const presetColors = [
  "#495dff",
  "#ff293b",
  "#22c55e",
  "#ff5522",
  "#2970ff",
  "#8b5cf6",
  "#000000",
  "#666666",
];

export default function PresetsDemo() {
  const [color, setColor] = useState("#495dff");

  return (
    <div style={{ width: 260 }}>
      <ColorPicker
        value={color}
        onChange={setColor}
        panelExtra={
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {presetColors.map((c) => (
              <span
                key={c}
                onClick={() => setColor(c)}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  backgroundColor: c,
                  cursor: "pointer",
                  border:
                    color === c
                      ? "2px solid var(--lg-g-border-color-primary-default)"
                      : "1px solid var(--lg-g-border-color-black-soft)",
                }}
              />
            ))}
          </div>
        }
      />
    </div>
  );
}
`;function oe(e,{r:t,g:n,b:r,a:i}){return i>=1?e:`rgba(${t}, ${n}, ${r}, ${Number(i.toFixed(2))})`}function se(){let[e,t]=(0,y.useState)(`#495dff`);return(0,q.jsx)(Q,{value:e,showInput:!0,onChange:(e,n)=>t(oe(e,n)),children:(0,q.jsxs)(`button`,{type:`button`,style:{display:`inline-flex`,alignItems:`center`,gap:8,height:32,padding:`0 12px`,border:`1px solid var(--lg-g-border-color-black-soft)`,borderRadius:8,background:`var(--lg-g-bg-color-white-heavy)`,color:`var(--lg-g-fg-color-black-strong)`,cursor:`pointer`},children:[(0,q.jsx)(`span`,{style:{width:16,height:16,borderRadius:4,border:`1px solid var(--lg-g-border-color-black-soft)`,background:e}}),e]})})}var ce=`import { useState } from "react";
import { ColorPicker } from "lingee-ui";
import type { ColorPickerRgba } from "lingee-ui";

// 不透明时输出 hex，带透明度时输出 rgba()
function formatColor(hex: string, { r, g, b, a }: ColorPickerRgba) {
  return a >= 1 ? hex : \`rgba(\${r}, \${g}, \${b}, \${Number(a.toFixed(2))})\`;
}

export default function CustomTriggerDemo() {
  const [color, setColor] = useState("#495dff");

  return (
    <ColorPicker value={color} showInput onChange={(hex, rgba) => setColor(formatColor(hex, rgba))}>
      <button
        type="button"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          height: 32,
          padding: "0 12px",
          border: "1px solid var(--lg-g-border-color-black-soft)",
          borderRadius: 8,
          background: "var(--lg-g-bg-color-white-heavy)",
          color: "var(--lg-g-fg-color-black-strong)",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            width: 16,
            height: 16,
            borderRadius: 4,
            border: "1px solid var(--lg-g-border-color-black-soft)",
            background: color,
          }}
        />
        {color}
      </button>
    </ColorPicker>
  );
}
`;function le(){let[e,t]=(0,y.useState)(`#495dff`),[n,r]=(0,y.useState)(`#495dff`);return(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,width:260},children:[(0,q.jsx)(Q,{value:e,showInput:!0,onChange:t,onChangeComplete:r}),(0,q.jsx)(Q,{defaultValue:`#12b886`,showInput:!0,disabledAlpha:!0}),(0,q.jsxs)(`span`,{style:{fontSize:12,lineHeight:`18px`,color:`var(--lg-g-fg-color-black-faint)`},children:[`onChange: `,e,` · onChangeComplete: `,n]})]})}var ue=`import { useState } from "react";
import { ColorPicker } from "lingee-ui";

export default function WithInputDemo() {
  const [color, setColor] = useState("#495dff");
  const [committed, setCommitted] = useState("#495dff");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 260 }}>
      <ColorPicker value={color} showInput onChange={setColor} onChangeComplete={setCommitted} />
      <ColorPicker defaultValue="#12b886" showInput disabledAlpha />
      <span style={{ fontSize: 12, lineHeight: "18px", color: "var(--lg-g-fg-color-black-faint)" }}>
        onChange: {color} · onChangeComplete: {committed}
      </span>
    </div>
  );
}
`;function de(e){let t={hex:`FFFFFF`,alpha:100},n=e?.trim();if(!n)return t;if(n.startsWith(`#`)){let e=n.slice(1);if(e.length===8)return{hex:e.slice(0,6).toUpperCase(),alpha:Math.round(parseInt(e.slice(6,8),16)/255*100)};if(e.length===6)return{hex:e.toUpperCase(),alpha:100}}let r=n.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+)\s*)?\)/i);return r?{hex:[r[1],r[2],r[3]].map(e=>Number(e).toString(16).padStart(2,`0`)).join(``).toUpperCase(),alpha:Math.round((r[4]?Number(r[4]):1)*100)}:t}function $(){let e=document.fullscreenElement;return e instanceof HTMLElement?e:document.body}function fe(e,{r:t,g:n,b:r,a:i}){return i>=1?e:`rgba(${t}, ${n}, ${r}, ${Number(i.toFixed(2))})`}var pe={display:`flex`,alignItems:`center`,width:`100%`,height:40,padding:`0 12px`,boxSizing:`border-box`,border:`1px solid var(--lg-g-border-color-black-soft)`,borderRadius:12,background:`var(--lg-g-bg-color-white-heavy)`,color:`var(--lg-g-fg-color-black-strong)`,fontSize:14,lineHeight:`20px`,cursor:`pointer`};function me(){let e=(0,y.useRef)(null),[t,n]=(0,y.useState)(`rgba(73, 93, 255, 0.6)`),r=(0,y.useMemo)(()=>de(t),[t]);return(0,q.jsxs)(`div`,{ref:e,style:{display:`flex`,flexDirection:`column`,gap:12,padding:16,background:`var(--lg-g-bg-color-white-heavy)`},children:[(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,q.jsx)(`div`,{style:{width:240},children:(0,q.jsx)(Q,{value:t||void 0,showInput:!0,getPopupContainer:$,onChange:(e,t)=>n(fe(e,t)),children:(0,q.jsxs)(`button`,{type:`button`,style:pe,children:[(0,q.jsx)(`span`,{style:{width:18,height:18,marginRight:6,boxSizing:`border-box`,border:`1px solid var(--lg-g-border-color-black-soft)`,borderRadius:2,background:t}}),(0,q.jsx)(`span`,{style:{color:`var(--lg-g-fg-color-black-faint)`},children:`#`}),(0,q.jsx)(`span`,{style:{marginLeft:6},children:r.hex}),(0,q.jsx)(`span`,{style:{margin:`0 8px`,color:`var(--lg-g-fg-color-black-muted)`},children:`|`}),(0,q.jsxs)(`span`,{style:{marginRight:`auto`},children:[r.alpha,`%`]}),(0,q.jsx)(s,{size:12})]})})}),(0,q.jsx)(c,{onClick:()=>{document.fullscreenElement?document.exitFullscreen():e.current?.requestFullscreen()},children:`Toggle fullscreen`})]}),(0,q.jsxs)(`span`,{style:{fontSize:12,lineHeight:`18px`,color:`var(--lg-g-fg-color-black-faint)`},children:[`Output: `,t]})]})}var he=`import { useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Button, ColorPicker } from "lingee-ui";
import type { ColorPickerRgba } from "lingee-ui";
import { ChevronDown } from "lingee-icon";

interface ColorDisplay {
  hex: string;
  alpha: number;
}

// 值可能是 #RRGGBB、#RRGGBBAA 或 rgba()，触发器统一拆成 6 位 hex 与百分比透明度展示
function parseColor(raw?: string): ColorDisplay {
  const fallback: ColorDisplay = { hex: "FFFFFF", alpha: 100 };
  const value = raw?.trim();
  if (!value) return fallback;
  if (value.startsWith("#")) {
    const hex = value.slice(1);
    if (hex.length === 8) {
      return {
        hex: hex.slice(0, 6).toUpperCase(),
        alpha: Math.round((parseInt(hex.slice(6, 8), 16) / 255) * 100),
      };
    }
    if (hex.length === 6) return { hex: hex.toUpperCase(), alpha: 100 };
  }
  const match = value.match(
    /rgba?\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*(?:,\\s*([0-9.]+)\\s*)?\\)/i,
  );
  if (match) {
    const hex = [match[1], match[2], match[3]]
      .map((channel) => Number(channel).toString(16).padStart(2, "0"))
      .join("");
    return {
      hex: hex.toUpperCase(),
      alpha: Math.round((match[4] ? Number(match[4]) : 1) * 100),
    };
  }
  return fallback;
}

// 全屏时浮层必须挂在全屏元素内，挂到 body 会被全屏层盖住而不可见
function getPopupContainer(): HTMLElement {
  const fullscreenRoot = document.fullscreenElement;
  return fullscreenRoot instanceof HTMLElement ? fullscreenRoot : document.body;
}

// 不透明时输出 hex，带透明度时输出 rgba()
function formatColor(hex: string, { r, g, b, a }: ColorPickerRgba) {
  return a >= 1 ? hex : \`rgba(\${r}, \${g}, \${b}, \${Number(a.toFixed(2))})\`;
}

const triggerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: 40,
  padding: "0 12px",
  boxSizing: "border-box",
  border: "1px solid var(--lg-g-border-color-black-soft)",
  borderRadius: 12,
  background: "var(--lg-g-bg-color-white-heavy)",
  color: "var(--lg-g-fg-color-black-strong)",
  fontSize: 14,
  lineHeight: "20px",
  cursor: "pointer",
};

export default function FullscreenContainerDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("rgba(73, 93, 255, 0.6)");
  const display = useMemo(() => parseColor(value), [value]);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void containerRef.current?.requestFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: 16,
        background: "var(--lg-g-bg-color-white-heavy)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 240 }}>
          <ColorPicker
            value={value || undefined}
            showInput
            getPopupContainer={getPopupContainer}
            onChange={(hex, rgba) => setValue(formatColor(hex, rgba))}
          >
            <button type="button" style={triggerStyle}>
              <span
                style={{
                  width: 18,
                  height: 18,
                  marginRight: 6,
                  boxSizing: "border-box",
                  border: "1px solid var(--lg-g-border-color-black-soft)",
                  borderRadius: 2,
                  background: value,
                }}
              />
              <span style={{ color: "var(--lg-g-fg-color-black-faint)" }}>#</span>
              <span style={{ marginLeft: 6 }}>{display.hex}</span>
              <span style={{ margin: "0 8px", color: "var(--lg-g-fg-color-black-muted)" }}>|</span>
              <span style={{ marginRight: "auto" }}>{display.alpha}%</span>
              <ChevronDown size={12} />
            </button>
          </ColorPicker>
        </div>
        <Button onClick={toggleFullscreen}>Toggle fullscreen</Button>
      </div>
      <span style={{ fontSize: 12, lineHeight: "18px", color: "var(--lg-g-fg-color-black-faint)" }}>
        Output: {value}
      </span>
    </div>
  );
}
`;export{ce as a,ie as c,le as i,ne as l,me as n,se as o,ue as r,ae as s,he as t,te as u};