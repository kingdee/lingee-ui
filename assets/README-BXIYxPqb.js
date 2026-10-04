import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{a as t,c as n,i as r,l as i,n as a,o,r as s,s as c,t as l,u}from"./embedded-BQhKvPIG.js";import{t as d}from"./DemoBox-ciX2hsqV.js";var f=e(),p={title:`PersonPicker 选人`,description:`组织人员选择器，支持组织层级下钻、远程搜索与已选汇总，数据由消费方注入。`};function m(e){let p={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p.h2,{children:`基本用法`}),`
`,(0,f.jsxs)(p.p,{children:[`左栏按页签浏览候选，右栏汇总已选项。组件`,(0,f.jsx)(p.strong,{children:`不发任何请求`}),` —— 列表数据、搜索结果与组织层级
全部由 `,(0,f.jsx)(p.code,{children:`data`}),` 注入，交互意图经回调上报，消费方据此换出新的 `,(0,f.jsx)(p.code,{children:`data`}),`。`]}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`tabs`}),` 默认只开 `,(0,f.jsx)(p.code,{children:`org`}),` 与 `,(0,f.jsx)(p.code,{children:`person`}),`，按需放开另两个。`]}),`
`,(0,f.jsx)(d,{source:i,children:(0,f.jsx)(u,{})}),`
`,(0,f.jsx)(p.h2,{children:`异步数据：换批与滚动加载`}),`
`,(0,f.jsx)(p.p,{children:`数据分多次到达，组件把两类加载分开处理 —— 弄混会让已加载的内容整片消失：`}),`
`,(0,f.jsxs)(p.table,{children:[(0,f.jsx)(p.thead,{children:(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.th,{children:`场景`}),(0,f.jsx)(p.th,{children:`用什么`}),(0,f.jsx)(p.th,{children:`表现`})]})}),(0,f.jsxs)(p.tbody,{children:[(0,f.jsxs)(p.tr,{children:[(0,f.jsxs)(p.td,{children:[(0,f.jsx)(p.strong,{children:`换批`}),`（首次打开、切页签、下钻、改搜索词）`]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`loading`})}),(0,f.jsx)(p.td,{children:`整栏骨架屏`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsxs)(p.td,{children:[(0,f.jsx)(p.strong,{children:`追加`}),`（滚动触底加载下一页）`]}),(0,f.jsxs)(p.td,{children:[(0,f.jsx)(p.code,{children:`onLoadMore`}),` 返回的 Promise`]}),(0,f.jsx)(p.td,{children:`列表末尾的加载行`})]})]})]}),`
`,(0,f.jsxs)(p.p,{children:[`追加时`,(0,f.jsx)(p.strong,{children:`不要`}),`把 `,(0,f.jsx)(p.code,{children:`loading`}),` 置为 true。滚动加载由组件库的 `,(0,f.jsx)(p.code,{children:`InfiniteScroll`}),` 承担，
它已处理并发重入、首屏未填满时续拉、失败熔断。`]}),`
`,(0,f.jsx)(p.p,{children:`分页游标由消费方持有，组件只在触底时发信号、不参与请求与记账。换批后记得重置游标，
否则下一页会接到上一批数据后面。`}),`
`,(0,f.jsx)(p.p,{children:`两个已经内置、不必自己做的处理：`}),`
`,(0,f.jsxs)(p.ul,{children:[`
`,(0,f.jsxs)(p.li,{children:[(0,f.jsx)(p.strong,{children:`换批不闪骨架`}),`：`,(0,f.jsx)(p.code,{children:`loadingDelay`}),`（默认 200ms）期内若还有上一批内容就继续显示它，
请求在延迟内完成则用户完全看不到骨架。要用上这点，消费方需在 `,(0,f.jsx)(p.code,{children:`loading`}),` 期间
`,(0,f.jsxs)(p.strong,{children:[`保留上一批 `,(0,f.jsx)(p.code,{children:`data`})]}),`（React Query 的 `,(0,f.jsx)(p.code,{children:`placeholderData`}),` 即此行为）。
当前没有内容可展示时不等延迟、立即出骨架，避免一段空白。`]}),`
`,(0,f.jsxs)(p.li,{children:[(0,f.jsx)(p.strong,{children:`换批后滚回顶部`}),`：层级、页签、搜索词变化后自动重置滚动位置；追加时不重置。`]}),`
`]}),`
`,(0,f.jsxs)(p.p,{children:[`下面的示例覆盖三种换批：`,(0,f.jsx)(p.strong,{children:`选部门下钻`}),`、`,(0,f.jsx)(p.strong,{children:`切页签`}),`、`,(0,f.jsx)(p.strong,{children:`选人员下钻`}),`，并用两种接口速度对比 ——
快接口（120ms，落在 `,(0,f.jsx)(p.code,{children:`loadingDelay`}),` 内）换批时看不到骨架，慢接口（800ms）才会出现。
滚到列表底部可看到追加的加载行。`]}),`
`,(0,f.jsxs)(p.p,{children:[`注意「选部门」与「选人员」两个页签取的是`,(0,f.jsx)(p.strong,{children:`不同的数据`}),`（前者只要子部门，后者还要当前层成员），
所以切页签也得重新请求、也算换批；层级路径在两者间共享，切过去仍停在同一层。`]}),`
`,(0,f.jsx)(d,{source:s,children:(0,f.jsx)(r,{})}),`
`,(0,f.jsxs)(p.p,{children:[`追加失败由 `,(0,f.jsx)(p.code,{children:`InfiniteScroll`}),` 接管：列表末尾出现失败提示与重试入口，已加载的内容不受影响。
`,(0,f.jsx)(p.code,{children:`onRetry`}),` 只负责换批失败后的整栏重试。`]}),`
`,(0,f.jsx)(p.h2,{children:`四种页签与选择规则`}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`tabs`}),` 决定开哪些页签及其顺序。每种页签的列表形态由 `,(0,f.jsx)(p.code,{children:`data`}),` 的字段组合决定：`]}),`
`,(0,f.jsxs)(p.table,{children:[(0,f.jsx)(p.thead,{children:(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.th,{children:`页签`}),(0,f.jsxs)(p.th,{children:[(0,f.jsx)(p.code,{children:`data`}),` 组合`]})]})}),(0,f.jsxs)(p.tbody,{children:[(0,f.jsxs)(p.tr,{children:[(0,f.jsxs)(p.td,{children:[(0,f.jsx)(p.code,{children:`recent-contacts`}),` / `,(0,f.jsx)(p.code,{children:`recent-groups`})]}),(0,f.jsxs)(p.td,{children:[`单个无标题的 `,(0,f.jsx)(p.code,{children:`sections`})]})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`org`})}),(0,f.jsxs)(p.td,{children:[`仅 `,(0,f.jsx)(p.code,{children:`orgNodes`})]})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`person`})}),(0,f.jsxs)(p.td,{children:[(0,f.jsx)(p.code,{children:`selectAll`}),` + 带标题的 `,(0,f.jsx)(p.code,{children:`sections`}),` + `,(0,f.jsx)(p.code,{children:`orgNodes`})]})]})]})]}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`max`}),` 限制选中数量，超限时`,(0,f.jsx)(p.strong,{children:`整批放弃`}),`而非截断 —— 截断会让用户以为全选成功，
实际漏掉哪几个还得自己数。`]}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`locked`}),` 项恒为选中且不可取消，`,(0,f.jsx)(p.code,{children:`disabled`}),` 项不可选中。注意 `,(0,f.jsx)(p.code,{children:`locked`}),` 只影响渲染，
组件`,(0,f.jsx)(p.strong,{children:`不会自动把它并入已选`}),` —— 需要它计入数量与右栏列表时，把它一并放进
`,(0,f.jsx)(p.code,{children:`value`}),` / `,(0,f.jsx)(p.code,{children:`defaultValue`}),`。`]}),`
`,(0,f.jsx)(d,{source:c,children:(0,f.jsx)(n,{})}),`
`,(0,f.jsx)(p.h2,{children:`加载、失败与空态`}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`loading`}),` 优先于 `,(0,f.jsx)(p.code,{children:`loadError`}),`，重试期间展示骨架屏而非上一次的失败态。传入 `,(0,f.jsx)(p.code,{children:`onRetry`}),`
后失败态才出现重试入口。`]}),`
`,(0,f.jsx)(d,{source:t,children:(0,f.jsx)(o,{})}),`
`,(0,f.jsx)(p.h2,{children:`组织层级下钻`}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`orgNodes`}),` 中 `,(0,f.jsx)(p.code,{children:`hasChildren`}),` 为真的项会渲染行尾箭头，组件把新层级经 `,(0,f.jsx)(p.code,{children:`onOrgPathChange`}),`
上报，由消费方加载该层数据。层级非空时自动渲染面包屑，停在根层时不占高度。`]}),`
`,(0,f.jsx)(p.p,{children:`这类行的点击热区按动作主次划分：`}),`
`,(0,f.jsxs)(p.table,{children:[(0,f.jsx)(p.thead,{children:(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.th,{children:`点击位置`}),(0,f.jsx)(p.th,{children:`动作`})]})}),(0,f.jsxs)(p.tbody,{children:[(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:`整行（含名称、箭头）`}),(0,f.jsx)(p.td,{children:`进入下一级`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:`最前面的勾选框`}),(0,f.jsx)(p.td,{children:`选中 / 取消该组织`})]})]})]}),`
`,(0,f.jsxs)(p.p,{children:[`浏览层级是有下级的组织最常做的事，所以它占住整行；勾选退到勾选框自己的范围内。
`,(0,f.jsx)(p.strong,{children:`没有下级的组织与人员、群组行不受影响`}),`，仍是点哪儿都勾选。`]}),`
`,(0,f.jsxs)(p.p,{children:[`层级路径在 `,(0,f.jsx)(p.code,{children:`org`}),` 与 `,(0,f.jsx)(p.code,{children:`person`}),` 两个页签间共享：它们看的是同一棵组织树，
只是一个列部门、一个列部门内的人。`]}),`
`,(0,f.jsx)(p.h2,{children:`搜索`}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`onSearch`}),` 已按 `,(0,f.jsx)(p.code,{children:`searchDebounce`}),`（默认 300ms）去抖。搜索词非空即进入搜索态，
此时页签与面包屑都隐藏 —— 搜索结果跨层级跨页签，两者在该语境下失去意义。
组件不做前端过滤，结果由消费方放进 `,(0,f.jsx)(p.code,{children:`data.sections`}),`，命中片段自动高亮。`]}),`
`,(0,f.jsxs)(p.p,{children:[`搜索同样属于「换批」：用 `,(0,f.jsx)(p.code,{children:`loading`}),` + 保留旧结果，并重置分页游标。`]}),`
`,(0,f.jsx)(p.h2,{children:`嵌入到其它面板`}),`
`,(0,f.jsxs)(p.p,{children:[`内容体可以作为别人面板里的一个区域使用 —— 比如一个「分享」弹窗，上方是文件信息、
中间选人、下方还有权限与有效期表单。这种形态用 `,(0,f.jsx)(p.code,{children:`PersonPickerPanel`}),` 配
`,(0,f.jsx)(p.code,{children:`paneHeight="fill"`}),`：面板高度交给外层布局决定，不写死像素值，外层尺寸变化时无需回来重算。`]}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`"fill"`}),` 要求`,(0,f.jsx)(p.strong,{children:`父容器有确定高度`}),`（flex 布局里的 `,(0,f.jsx)(p.code,{children:`flex: 1`}),` 容器、或铺满视口的承载页）。
父容器高度由内容决定时会塌成 0。需要固定高度时直接传数字，缺省 406 是设计稿值。`]}),`
`,(0,f.jsx)(d,{source:l,children:(0,f.jsx)(a,{})}),`
`,(0,f.jsx)(p.h2,{children:`弹窗承载`}),`
`,(0,f.jsx)(p.p,{children:`客户端 webview 内的遮罩盖不住客户端侧边栏，需由宿主在更外层开窗并加载一条独立承载路由。`}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`PersonPicker`}),` 传 `,(0,f.jsx)(p.code,{children:`hostModal`}),` 即可交给宿主承载，浏览器顶层或宿主拒绝时自动回退本地渲染：`]}),`
`,(0,f.jsx)(p.pre,{children:(0,f.jsx)(p.code,{className:`language-tsx`,children:`<PersonPicker
  open={open}
  onOpenChange={setOpen}
  {...dataProps}
  hostModal={{
    route: "/host-modal/person-picker",
    params: { tabs, mode, max },
    contentHeight: 480,
    onResult: (r) => r && submit(r as PickerEntity[]),
  }}
  // 回退路径的内容，必须保留
  onConfirm={submit}
/>
`})}),`
`,(0,f.jsxs)(p.p,{children:[`⚠️ `,(0,f.jsx)(p.strong,{children:`承载模式下本组件完全不产出 DOM`}),`，因此底部的确认 / 取消按钮不会渲染、`,(0,f.jsx)(p.code,{children:`onConfirm`}),`
不会触发，选中结果经 `,(0,f.jsx)(p.code,{children:`hostModal.onResult`}),` 回传。承载页内应使用 `,(0,f.jsx)(p.code,{children:`PersonPickerPanel`}),`
并自行提供底部按钮（配合 `,(0,f.jsx)(p.code,{children:`HostModalPage`}),`）：`]}),`
`,(0,f.jsx)(p.pre,{children:(0,f.jsx)(p.code,{className:`language-tsx`,children:`export default function PersonPickerHostPage() {
  return (
    <HostModalPage<{ tabs?: PickerTabKey[] }> fallback={<Navigate to="/" replace />}>
      {(params, close) => (
        <PersonPickerPanel paneHeight="fill" tabs={params.tabs} {...dataProps} />
        // 底部按钮由承载页自绘，点确认时 close(selected)
      )}
    </HostModalPage>
  );
}
`})}),`
`,(0,f.jsxs)(p.p,{children:[`确认时回传的 `,(0,f.jsx)(p.code,{children:`PickerEntity[]`}),` 保证结构化克隆安全（字段限原始值，不含函数与 ReactNode），
可直接经 `,(0,f.jsx)(p.code,{children:`postMessage`}),` 交给宿主。`]}),`
`,(0,f.jsxs)(p.p,{children:[`需要完全自绘布局时，已选项的增删、去重与分组统计可以复用 `,(0,f.jsx)(p.code,{children:`usePersonPickerState`}),`；
它配套导出 `,(0,f.jsx)(p.code,{children:`personPickerEntityKey`}),`（生成 `,(0,f.jsx)(p.code,{children:`type:id`}),` 复合键，`,(0,f.jsx)(p.code,{children:`id`}),` 只在同一 `,(0,f.jsx)(p.code,{children:`type`}),` 内唯一，
不要直接拿 `,(0,f.jsx)(p.code,{children:`id`}),` 比对）与 `,(0,f.jsx)(p.code,{children:`PERSON_PICKER_TYPE_ORDER`}),`（已选区的分组顺序）。`]}),`
`,(0,f.jsx)(p.h2,{children:`数据结构`}),`
`,(0,f.jsx)(p.pre,{children:(0,f.jsx)(p.code,{className:`language-ts`,children:`type PickerTabKey = "recent-contacts" | "recent-groups" | "org" | "person";
type PickerEntityType = "person" | "group" | "org";
type PickerMode = "multiple" | "single";

/** 透传业务字段限原始值，保证结构化克隆安全 */
type PickerExtra = Record<string, string | number | boolean | null>;

/** 人员、群组、组织共用一种结构，原样出现在回传值里 */
interface PickerEntity {
  type: PickerEntityType;
  id: string;                  // 同一 type 内唯一即可
  name: string;
  avatar?: string;             // 群组头像由后端给出合成图，组件不拼合
  code?: string;               // 人员工号
  deptName?: string;           // 人员所属部门
  desc?: string;               // 补充描述
  locked?: boolean;            // 恒为选中且不可取消
  disabled?: boolean;          // 不可选中
  hasChildren?: boolean;       // 仅 org：渲染行尾下钻箭头
  extra?: PickerExtra;
}

interface PickerSection {
  key: string;
  title?: ReactNode;           // 不传则不渲染标题行
  items: PickerEntity[];
}

interface PickerPaneData {
  sections?: PickerSection[];
  orgNodes?: PickerEntity[];   // 渲染在 sections 之后，可勾选也可下钻
  selectAll?: boolean;         // 只作用于 sections，不含 orgNodes
}

interface PickerOrgPathItem {
  id: string;
  name: string;
}

interface PickerChangeInfo {
  entity?: PickerEntity;       // 批量变更时为 undefined
  selected: boolean;
}
`})}),`
`,(0,f.jsx)(p.h2,{children:`API`}),`
`,(0,f.jsx)(p.h3,{children:`PersonPicker`}),`
`,(0,f.jsxs)(p.p,{children:[`继承 `,(0,f.jsx)(p.code,{children:`PersonPickerPanelProps`}),`，额外提供弹窗外壳相关属性。`]}),`
`,(0,f.jsxs)(p.table,{children:[(0,f.jsx)(p.thead,{children:(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.th,{children:`属性`}),(0,f.jsx)(p.th,{children:`说明`}),(0,f.jsx)(p.th,{children:`类型`}),(0,f.jsx)(p.th,{children:`默认值`})]})}),(0,f.jsxs)(p.tbody,{children:[(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`open`})}),(0,f.jsx)(p.td,{children:`是否打开（受控）`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`boolean`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onOpenChange`})}),(0,f.jsx)(p.td,{children:`开关状态变化回调`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(open: boolean) => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`title`})}),(0,f.jsx)(p.td,{children:`标题，不传时取语言包`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`ReactNode`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`选择人员`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`okText`})}),(0,f.jsx)(p.td,{children:`确认按钮文案`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`string`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`确定`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`cancelText`})}),(0,f.jsx)(p.td,{children:`取消按钮文案`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`string`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`取消`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`okLoading`})}),(0,f.jsx)(p.td,{children:`确认按钮 loading`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`boolean`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`false`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`okDisabledWhenEmpty`})}),(0,f.jsx)(p.td,{children:`未选中任何项时禁用确认按钮`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`boolean`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`true`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onConfirm`})}),(0,f.jsxs)(p.td,{children:[`点击确认，回传已选项；返回 Promise 时按钮自动 loading。`,(0,f.jsx)(p.strong,{children:`承载模式下不触发`})]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(value: PickerEntity[]) => void | Promise<void>`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onCancel`})}),(0,f.jsx)(p.td,{children:`点击取消、关闭按钮或 Esc`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`() => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`width`})}),(0,f.jsx)(p.td,{children:`弹窗宽度`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`number`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`720`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`zIndex`})}),(0,f.jsx)(p.td,{children:`自定义 z-index`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`number`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`hostModal`})}),(0,f.jsxs)(p.td,{children:[`宿主弹窗配置，透传给内部 `,(0,f.jsx)(p.code,{children:`Dialog`}),`。承载模式下本组件不产出 DOM，底部按钮需由承载页自绘`]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`DialogHostModal`})}),(0,f.jsx)(p.td,{children:`-`})]})]})]}),`
`,(0,f.jsx)(p.h3,{children:`PersonPickerPanel`}),`
`,(0,f.jsx)(p.p,{children:`左右分栏内容体，不含弹窗外壳。`}),`
`,(0,f.jsxs)(p.table,{children:[(0,f.jsx)(p.thead,{children:(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.th,{children:`属性`}),(0,f.jsx)(p.th,{children:`说明`}),(0,f.jsx)(p.th,{children:`类型`}),(0,f.jsx)(p.th,{children:`默认值`})]})}),(0,f.jsxs)(p.tbody,{children:[(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`tabs`})}),(0,f.jsx)(p.td,{children:`启用的页签及顺序；仅剩一个时不渲染页签栏`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`PickerTabKey[]`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`["org", "person"]`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`activeTab`})}),(0,f.jsx)(p.td,{children:`当前页签（受控）`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`PickerTabKey`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`defaultActiveTab`})}),(0,f.jsxs)(p.td,{children:[`默认页签，缺省取 `,(0,f.jsx)(p.code,{children:`tabs`}),` 首项`]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`PickerTabKey`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onTabChange`})}),(0,f.jsx)(p.td,{children:`页签切换回调`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(key: PickerTabKey) => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`tabLabels`})}),(0,f.jsx)(p.td,{children:`覆盖页签文案`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`Partial<Record<PickerTabKey, ReactNode>>`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`data`})}),(0,f.jsx)(p.td,{children:`左栏当前要渲染的数据`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`PickerPaneData`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`{}`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`loading`})}),(0,f.jsxs)(p.td,{children:[(0,f.jsx)(p.strong,{children:`换批`}),`加载中，展示骨架屏；优先级高于 `,(0,f.jsx)(p.code,{children:`loadError`}),`。追加下一页时不要置真`]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`boolean`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`false`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`loadingDelay`})}),(0,f.jsx)(p.td,{children:`骨架屏延迟显示毫秒数，避免快请求下的白闪`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`number`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`200`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`loadError`})}),(0,f.jsx)(p.td,{children:`加载失败`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`boolean`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`false`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onRetry`})}),(0,f.jsx)(p.td,{children:`失败重试回调，传入后才出现重试入口`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`() => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`hasMore`})}),(0,f.jsx)(p.td,{children:`列表是否还有下一页`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`boolean`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`false`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onLoadMore`})}),(0,f.jsx)(p.td,{children:`加载下一页，须返回 Promise`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(isRetry: boolean) => Promise<void>`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`value`})}),(0,f.jsx)(p.td,{children:`已选项（受控）`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`PickerEntity[]`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`defaultValue`})}),(0,f.jsx)(p.td,{children:`默认已选项（非受控）`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`PickerEntity[]`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`[]`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onChange`})}),(0,f.jsx)(p.td,{children:`已选项变化回调`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(value: PickerEntity[], info: PickerChangeInfo) => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`keyword`})}),(0,f.jsx)(p.td,{children:`搜索词（受控），非空即进入搜索态`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`string`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onSearch`})}),(0,f.jsx)(p.td,{children:`搜索词变化回调，已去抖`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(keyword: string) => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`searchDebounce`})}),(0,f.jsx)(p.td,{children:`搜索去抖毫秒数`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`number`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`300`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`searchPlaceholder`})}),(0,f.jsx)(p.td,{children:`搜索框 placeholder`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`string`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`搜索联系人、部门`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`orgPath`})}),(0,f.jsx)(p.td,{children:`当前组织层级路径（受控），不含根节点`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`PickerOrgPathItem[]`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onOrgPathChange`})}),(0,f.jsx)(p.td,{children:`层级变化回调（面包屑回跳与行尾下钻）`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(path: PickerOrgPathItem[]) => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`mode`})}),(0,f.jsxs)(p.td,{children:[`选择模式；`,(0,f.jsx)(p.code,{children:`single`}),` 下新选中项替换旧值`]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`"multiple" | "single"`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`"multiple"`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`max`})}),(0,f.jsx)(p.td,{children:`最多可选数量`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`number`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onExceed`})}),(0,f.jsxs)(p.td,{children:[`将超过 `,(0,f.jsx)(p.code,{children:`max`}),` 时触发，本次勾选被丢弃`]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(max: number) => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`paneHeight`})}),(0,f.jsxs)(p.td,{children:[`左右分栏高度。`,(0,f.jsx)(p.code,{children:`"fill"`}),` 撑满父容器（需父容器有确定高度），用于嵌入形态`]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`number | "fill"`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`406`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`className`})}),(0,f.jsx)(p.td,{children:`自定义类名`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`string`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`style`})}),(0,f.jsx)(p.td,{children:`自定义样式`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`CSSProperties`})}),(0,f.jsx)(p.td,{children:`-`})]})]})]})]})}function h(e={}){let{wrapper:t}=e.components||{};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(m,{...e})}):m(e)}export{h as default,p as frontmatter};