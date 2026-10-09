import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{t}from"./DemoBox-DvaghQBD.js";import{a as n,c as r,i,n as a,o,r as s,s as c,t as l}from"./collapse-BEE23Z_b.js";var u=e(),d={title:`Breadcrumb 面包屑`,description:`显示当前页面在系统层级结构中的位置，并提供返回之前层级的导航。`};function f(e){let d={code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.h2,{children:`基本用法`}),`
`,(0,u.jsxs)(d.p,{children:[`通过 `,(0,u.jsx)(d.code,{children:`items`}),` 属性定义面包屑路径，最后一项为当前页（加粗且不可点击）。`]}),`
`,(0,u.jsxs)(d.p,{children:[`中间层级的跳转优先用 `,(0,u.jsx)(d.code,{children:`onClick`}),`，它渲染为 `,(0,u.jsx)(d.code,{children:`button`}),`；`,(0,u.jsx)(d.code,{children:`href`}),` 会渲染为 `,(0,u.jsx)(d.code,{children:`a`}),` 并触发整页导航，
在 SPA 内会丢失路由状态。`]}),`
`,(0,u.jsx)(t,{source:c,children:(0,u.jsx)(r,{})}),`
`,(0,u.jsx)(d.h2,{children:`尺寸`}),`
`,(0,u.jsxs)(d.p,{children:[(0,u.jsx)(d.code,{children:`md`}),` 为常规尺寸（16px 文字），`,(0,u.jsx)(d.code,{children:`sm`}),` 为小型（13px 文字）。默认分隔符随尺寸变化：
`,(0,u.jsx)(d.code,{children:`md`}),` 用斜杠，`,(0,u.jsx)(d.code,{children:`sm`}),` 用尖括号。`]}),`
`,(0,u.jsx)(t,{source:n,children:(0,u.jsx)(o,{})}),`
`,(0,u.jsx)(d.h2,{children:`自定义分隔符`}),`
`,(0,u.jsxs)(d.p,{children:[`通过 `,(0,u.jsx)(d.code,{children:`separator`}),` 属性自定义面包屑项之间的分隔符，图标与纯文本均可。`]}),`
`,(0,u.jsx)(t,{source:s,children:(0,u.jsx)(i,{})}),`
`,(0,u.jsx)(d.h2,{children:`长路径处理`}),`
`,(0,u.jsxs)(d.p,{children:[`三个属性可独立使用：`,(0,u.jsx)(d.code,{children:`maxItems`}),` 把中间项收进下拉菜单，`,(0,u.jsx)(d.code,{children:`itemMaxWidth`}),` 限制单项宽度并打点，
`,(0,u.jsx)(d.code,{children:`onBack`}),` 在最前面补一个返回箭头。`]}),`
`,(0,u.jsxs)(d.p,{children:[(0,u.jsx)(d.code,{children:`maxItems`}),` 小于 3 时不折叠 —— 首项、省略号、末项三个单元缺一，折叠就失去意义。`]}),`
`,(0,u.jsx)(d.h3,{children:`容器宽度不足时的收缩顺序`}),`
`,(0,u.jsx)(d.p,{children:`即便不配置上面三项，组件也不会把容器撑破：`}),`
`,(0,u.jsxs)(d.ol,{children:[`
`,(0,u.jsxs)(d.li,{children:[(0,u.jsx)(d.strong,{children:`末项（当前页）优先保持完整`}),`，前面的层级先被压缩成省略号 —— 用户最需要确认的是
「现在在哪」，上游层级缩掉后仍能从折叠菜单或返回箭头找回`]}),`
`,(0,u.jsx)(d.li,{children:`前面的层级压到底线后，末项才开始省略`}),`
`,(0,u.jsx)(d.li,{children:`层级极深、连图标与分隔符都放不下时，列表整体裁切`}),`
`]}),`
`,(0,u.jsxs)(d.p,{children:[`因此把面包屑放进窄栏（如弹窗的侧栏）时，只需给父容器 `,(0,u.jsx)(d.code,{children:`min-width: 0`}),`，不必预先算好
`,(0,u.jsx)(d.code,{children:`maxItems`}),`；配上 `,(0,u.jsx)(d.code,{children:`maxItems`}),` 只是让折叠发生得更早、更可控。`]}),`
`,(0,u.jsx)(t,{source:l,children:(0,u.jsx)(a,{})}),`
`,(0,u.jsx)(d.h2,{children:`API`}),`
`,(0,u.jsxs)(d.table,{children:[(0,u.jsx)(d.thead,{children:(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.th,{children:`属性`}),(0,u.jsx)(d.th,{children:`说明`}),(0,u.jsx)(d.th,{children:`类型`}),(0,u.jsx)(d.th,{children:`默认值`})]})}),(0,u.jsxs)(d.tbody,{children:[(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`items`})}),(0,u.jsx)(d.td,{children:`面包屑数据`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`Array<{ key: string; label?: ReactNode; icon?: ReactNode; href?: string; onClick?: (event?: MouseEvent) => void; disabled?: boolean }>`})}),(0,u.jsx)(d.td,{children:`-`})]}),(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`separator`})}),(0,u.jsx)(d.td,{children:`自定义分隔符`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`ReactNode`})}),(0,u.jsxs)(d.td,{children:[(0,u.jsx)(d.code,{children:`md`}),` 斜杠 / `,(0,u.jsx)(d.code,{children:`sm`}),` 尖括号`]})]}),(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`size`})}),(0,u.jsx)(d.td,{children:`尺寸`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`"sm" | "md"`})}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`"md"`})})]}),(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`maxItems`})}),(0,u.jsx)(d.td,{children:`可见单元数上限，超出则折叠中间项`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`number`})}),(0,u.jsx)(d.td,{children:`-`})]}),(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`itemMaxWidth`})}),(0,u.jsx)(d.td,{children:`单项最大宽度，超出显示省略号`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`number`})}),(0,u.jsx)(d.td,{children:`-`})]}),(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`onBack`})}),(0,u.jsx)(d.td,{children:`传入后显示返回箭头，点击触发`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`() => void`})}),(0,u.jsx)(d.td,{children:`-`})]}),(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`children`})}),(0,u.jsx)(d.td,{children:`自定义内容（替代 items）`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`ReactNode`})}),(0,u.jsx)(d.td,{children:`-`})]}),(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`aria-label`})}),(0,u.jsx)(d.td,{children:`导航区域的无障碍标签`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`string`})}),(0,u.jsx)(d.td,{children:`语言包文案`})]})]})]})]})}function p(e={}){let{wrapper:t}=e.components||{};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(f,{...e})}):f(e)}export{p as default,d as frontmatter};