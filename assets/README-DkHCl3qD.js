import{t as e}from"./jsx-runtime-OQpaS_Dv.js";var t=e(),n=void 0;function r(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:`页面与灵基宿主（WebUI、客户端）通信有三个入口。本页只列各承载环境能用哪些、怎么调；参数、返回值与注意事项见每行的「详细说明」。`}),`
`,(0,t.jsx)(n.h2,{children:`三个入口`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`入口`}),(0,t.jsx)(n.th,{children:`是什么`}),(0,t.jsx)(n.th,{children:`怎么拿到`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[`SDK `,(0,t.jsx)(n.code,{children:`lwb`})]}),(0,t.jsx)(n.td,{children:`页面引入的脚本，替页面判断承载环境、选择通道。iframe 里全部可用，客户端顶层页面里只覆盖一部分（见能力总览）`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`<script src="https://<灵基域名>/auth/lingee-web-bridge.js">`}),`，见`,(0,t.jsx)(n.a,{href:`#/bridge-test`,children:`桥联调页`}),`「接入方式」`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`window.lingeeBridge`})}),(0,t.jsx)(n.td,{children:`客户端注入的端壳桥。各端同名、同签名，只放本端能用的方法`}),(0,t.jsx)(n.td,{children:`客户端在页面脚本之前注入，不用引入`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`_CloudHubJSBridge`})}),(0,t.jsx)(n.td,{children:`云之家旧桥，小程序的存量能力`}),(0,t.jsx)(n.td,{children:`客户端注入。只维护存量，灵基的新能力不再加在上面`})]})]})]}),`
`,(0,t.jsx)(n.h2,{children:`页面由谁承载`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`承载环境`}),(0,t.jsx)(n.th,{children:`举例`}),(0,t.jsx)(n.th,{children:`能拿到的入口`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`WebUI 的 iframe`}),(0,t.jsx)(n.td,{children:`浏览器里的自定义菜单；客户端里打开方式为 iframe 的菜单；知识库等内嵌页`}),(0,t.jsx)(n.td,{children:`SDK`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`客户端 webview`}),(0,t.jsx)(n.td,{children:`打开方式为 webview 的菜单、开发频道的菜单、WebUI 自身`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`window.lingeeBridge`}),`（完整）、SDK`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`客户端小程序`}),(0,t.jsx)(n.td,{children:`dashboard 里的日历、知识库等小程序，独立小程序窗口`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`window.lingeeBridge`}),`（子集）、`,(0,t.jsx)(n.code,{children:`_CloudHubJSBridge`}),`、SDK`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`没有宿主`}),(0,t.jsx)(n.td,{children:`浏览器直接打开；嵌在管理后台等其它系统里`}),(0,t.jsx)(n.td,{children:`都不能用，走页面自己的实现`})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[`判断能力看方法是否存在，例如 `,(0,t.jsx)(n.code,{children:`typeof window.lingeeBridge?.openPersonPicker === "function"`}),`。不要看 `,(0,t.jsx)(n.code,{children:`window.lingeeBridge`}),` 是否存在：小程序里也有这个对象，只是方法少。`]}),`
`,(0,t.jsx)(n.h2,{children:`基本用法`}),`
`,(0,t.jsx)(n.p,{children:`下面几种接法可以混用。无论哪种，都要准备好「没有宿主」时的实现。`}),`
`,(0,t.jsx)(n.h3,{children:`用 lingee-ui 的页面`}),`
`,(0,t.jsxs)(n.p,{children:[`提示、确认框、宿主弹窗不用直接调桥。lingee-ui 会先判断宿主，能交给宿主就交给宿主，否则本地渲染。iframe 里不用配置；客户端顶层页面（webview、小程序）要在 `,(0,t.jsx)(n.code,{children:`LingeeProvider`}),` 上设 `,(0,t.jsx)(n.code,{children:`site="lingee"`}),`。`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-tsx`,children:`<LingeeProvider site="lingee">
  <App />
</LingeeProvider>

// 调用点照常写
toast.success("已保存");
const confirmed = await Dialog.confirm({ title: "删除这条记录？", okText: "删除", okDanger: true });
`})}),`
`,(0,t.jsx)(n.h3,{children:`用 SDK`}),`
`,(0,t.jsxs)(n.p,{children:[`引入脚本后直接调 `,(0,t.jsx)(n.code,{children:`window.lwb`}),`，不需要 `,(0,t.jsx)(n.code,{children:`init()`}),`。没有宿主时，请求类方法返回 `,(0,t.jsx)(n.code,{children:`ok: false`}),` 或 `,(0,t.jsx)(n.code,{children:`false`}),`，在这里接上自己的实现。TypeScript 的类型声明见`,(0,t.jsx)(n.a,{href:`#/bridge-test`,children:`桥联调页`}),`「接入方式」。`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-html`,children:`<script src="https://<灵基域名>/auth/lingee-web-bridge.js"><\/script>
`})}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`lwb.followHostTheme(); // 宿主允许跟随时写入 html[data-theme]，返回取消函数

const res = await lwb.openPersonPicker({ mode: "multiple", max: 20 });
if (!res.ok) openMyPicker(); // 没有宿主或宿主不支持
else if (!res.closed) save(res.result); // [{ type, id, name, ... }]

if (!lwb.showHostToast("已保存", { level: "success" })) showMyToast("已保存");
`})}),`
`,(0,t.jsxs)(n.p,{children:[`SDK 在 iframe 里全部可用。在客户端顶层页面里，SDK 只覆盖能力总览中写了「同 iframe」的格子；提示、选人、宿主弹窗在那里调 SDK 会直接返回失败，要改调 `,(0,t.jsx)(n.code,{children:`window.lingeeBridge`}),`。`]}),`
`,(0,t.jsx)(n.h3,{children:`直接调 window.lingeeBridge`}),`
`,(0,t.jsxs)(n.p,{children:[`客户端在页面脚本之前注入，不用引入。先判断方法再调用。页面不在 dashboard 里（独立窗口、内置浏览器）时，提示会 reject，确认框返回 `,(0,t.jsx)(n.code,{children:`ok: false`}),`，两种情况都要走自己的实现。`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`const bridge = window.lingeeBridge;

async function notify(content) {
  if (typeof bridge?.showToast === "function") {
    try {
      const res = await bridge.showToast({ level: "success", content });
      if (res.ok) return;
    } catch {}
  }
  showMyToast(content);
}

if (typeof bridge?.showConfirm === "function") {
  const res = await bridge.showConfirm({ title: "删除这条记录？", confirmText: "删除", variant: "danger" });
  if (res.ok === false) openMyConfirm(); // 宿主不承载
  else if (res.confirmed) remove();
}
`})}),`
`,(0,t.jsxs)(n.p,{children:[`选人 `,(0,t.jsx)(n.code,{children:`bridge.openPersonPicker(options)`}),` 的入参和返回结构与 SDK 相同。`]}),`
`,(0,t.jsx)(n.h3,{children:`同一份代码跑在 iframe 和客户端`}),`
`,(0,t.jsxs)(n.p,{children:[`先判断是否在 iframe 里，再判断端壳桥。客户端里 WebUI 的 iframe 也能拿到 `,(0,t.jsx)(n.code,{children:`window.lingeeBridge`}),`，但这时宿主是 WebUI，要经 SDK 交给它。`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`async function pickPersons(options) {
  if (window.parent !== window) {
    return window.lwb ? lwb.openPersonPicker(options) : { ok: false };
  }
  const bridge = window.lingeeBridge;
  if (typeof bridge?.openPersonPicker === "function") return bridge.openPersonPicker(options);
  return { ok: false };
}
`})}),`
`,(0,t.jsx)(n.h3,{children:`小程序`}),`
`,(0,t.jsxs)(n.p,{children:[`小程序的 `,(0,t.jsx)(n.code,{children:`window.lingeeBridge`}),` 只有能力总览里列出的方法。旧版客户端没有这个对象，要改用云之家桥。以知识库「带知识开新对话」为例：`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`const doc = { id: "doc_1", name: "Document 1.pdf", format: "pdf" };
const bridge = window.lingeeBridge;
if (typeof bridge?.openChatWithKnowledge === "function") {
  bridge.openChatWithKnowledge(doc).catch(() => {}); // id 不合法时 reject
} else {
  // 旧版客户端，同一条通道
  window._CloudHubJSBridge?.emit("lingeeBridge:openChatWithKnowledge", doc);
}
`})}),`
`,(0,t.jsx)(n.h2,{children:`能力总览`}),`
`,(0,t.jsx)(n.p,{children:`「—」表示该环境没有这项能力。`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`能力`}),(0,t.jsx)(n.th,{children:`WebUI iframe`}),(0,t.jsx)(n.th,{children:`客户端 webview`}),(0,t.jsx)(n.th,{children:`客户端小程序`}),(0,t.jsx)(n.th,{children:`详细说明`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`主题状态`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`lwb.getHostThemeState`}),` / `,(0,t.jsx)(n.code,{children:`onHostThemeChange`}),` / `,(0,t.jsx)(n.code,{children:`followHostTheme`})]}),(0,t.jsxs)(n.td,{children:[`同 iframe（SDK 读端壳桥），或直接调 `,(0,t.jsx)(n.code,{children:`lingeeBridge.getHostThemeState`}),` / `,(0,t.jsx)(n.code,{children:`onHostThemeChange`})]}),(0,t.jsx)(n.td,{children:`同 webview`}),(0,t.jsx)(n.td,{children:`主题状态接入指南`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`侧边栏状态`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`lwb.getHostSidebarState`}),` / `,(0,t.jsx)(n.code,{children:`onHostSidebarChange`})]}),(0,t.jsxs)(n.td,{children:[`同 iframe，或直接调 `,(0,t.jsx)(n.code,{children:`lingeeBridge`}),` 同名方法`]}),(0,t.jsx)(n.td,{children:`—`}),(0,t.jsx)(n.td,{children:`侧边栏状态接入指南`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`全局提示`}),(0,t.jsxs)(n.td,{children:[`lingee-ui `,(0,t.jsx)(n.code,{children:`toast.*`}),`；`,(0,t.jsx)(n.code,{children:`lwb.showHostToast`})]}),(0,t.jsxs)(n.td,{children:[`lingee-ui `,(0,t.jsx)(n.code,{children:`toast.*`}),`；`,(0,t.jsx)(n.code,{children:`lingeeBridge.showToast`}),` / `,(0,t.jsx)(n.code,{children:`showActionToast`}),` / `,(0,t.jsx)(n.code,{children:`dismissToast`})]}),(0,t.jsxs)(n.td,{children:[`同 webview，只在 dashboard 里由宿主渲染；旧版客户端用云之家桥 `,(0,t.jsx)(n.code,{children:`toast`})]}),(0,t.jsx)(n.td,{children:`全局弹窗接入指南`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`确认框`}),(0,t.jsxs)(n.td,{children:[`lingee-ui `,(0,t.jsx)(n.code,{children:`Dialog.confirm`})]}),(0,t.jsxs)(n.td,{children:[`lingee-ui `,(0,t.jsx)(n.code,{children:`Dialog.confirm`}),`；`,(0,t.jsx)(n.code,{children:`lingeeBridge.showConfirm`})]}),(0,t.jsx)(n.td,{children:`同 webview，只在 dashboard 里由宿主渲染`}),(0,t.jsx)(n.td,{children:`全局弹窗接入指南`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`宿主弹窗`}),(0,t.jsxs)(n.td,{children:[`lingee-ui `,(0,t.jsx)(n.code,{children:`Dialog`}),` 的 `,(0,t.jsx)(n.code,{children:`hostModal`}),`；`,(0,t.jsx)(n.code,{children:`lwb.openHostModal`})]}),(0,t.jsxs)(n.td,{children:[`lingee-ui `,(0,t.jsx)(n.code,{children:`Dialog`}),` 的 `,(0,t.jsx)(n.code,{children:`hostModal`}),`；`,(0,t.jsx)(n.code,{children:`lingeeBridge.openHostModal`})]}),(0,t.jsx)(n.td,{children:`—`}),(0,t.jsx)(n.td,{children:`全局弹窗接入指南`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`独立窗口`}),(0,t.jsx)(n.td,{children:`—`}),(0,t.jsxs)(n.td,{children:[`lingee-ui `,(0,t.jsx)(n.code,{children:`Dialog`}),` 的 `,(0,t.jsx)(n.code,{children:`hostModal.window`})]}),(0,t.jsx)(n.td,{children:`—`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:`#/components/dialog`,children:`Dialog`}),`「客户端独立窗口」`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`选人`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`lwb.openPersonPicker`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`lingeeBridge.openPersonPicker`})}),(0,t.jsxs)(n.td,{children:[`同 webview；旧版客户端用云之家桥 `,(0,t.jsx)(n.code,{children:`selectPersonsV2`})]}),(0,t.jsx)(n.td,{children:`选人组件调用指南`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`图片全屏预览`}),(0,t.jsx)(n.td,{children:`—`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`lingeeBridge.previewImages`})}),(0,t.jsxs)(n.td,{children:[`云之家桥 `,(0,t.jsx)(n.code,{children:`previewImage`}),`（独立窗口）`]}),(0,t.jsx)(n.td,{children:`—`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`打开外链`}),(0,t.jsx)(n.td,{children:`—`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`lingeeBridge.openLink`}),`，可选免登打开`]}),(0,t.jsxs)(n.td,{children:[`云之家桥 `,(0,t.jsx)(n.code,{children:`openDefaultBrowser`})]}),(0,t.jsx)(n.td,{children:`外部浏览器免登桥接入说明`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`站内导航`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`lwb.requestNavigate`})}),(0,t.jsx)(n.td,{children:`同 iframe，只限动态菜单`}),(0,t.jsx)(n.td,{children:`—`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:`#/bridge-test`,children:`桥联调页`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`重新免登、页面不可用`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`lwb.requestReauth`}),` / `,(0,t.jsx)(n.code,{children:`reportPageError`})]}),(0,t.jsx)(n.td,{children:`同 iframe，只限动态菜单`}),(0,t.jsx)(n.td,{children:`—`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:`#/bridge-test`,children:`桥联调页`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`开发会话`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`lwb.openDevelopmentSession`})}),(0,t.jsx)(n.td,{children:`同 iframe，只限动态菜单`}),(0,t.jsx)(n.td,{children:`—`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:`#/bridge-test`,children:`桥联调页`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`带知识开新对话`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`lwb.requestOpenChatWithKnowledge`}),`，只限知识库内嵌页`]}),(0,t.jsx)(n.td,{children:`—`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`lingeeBridge.openChatWithKnowledge`}),`，或同 iframe（SDK 走云之家桥）；只限 dashboard 里的知识库`]}),(0,t.jsx)(n.td,{children:`知识库 @灵基 对接文档`})]})]})]}),`
`,(0,t.jsx)(n.h2,{children:`约定`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`没有宿主时调用不报错：请求类返回 `,(0,t.jsx)(n.code,{children:`ok: false`}),` 或 `,(0,t.jsx)(n.code,{children:`false`}),`，状态类返回 `,(0,t.jsx)(n.code,{children:`null`}),`。选人这类业务功能必须写回退。`]}),`
`,(0,t.jsxs)(n.li,{children:[`lingee-ui 的 `,(0,t.jsx)(n.code,{children:`toast.*`}),`、`,(0,t.jsx)(n.code,{children:`Dialog.confirm`}),` 与 `,(0,t.jsx)(n.code,{children:`Dialog`}),` 的 `,(0,t.jsx)(n.code,{children:`hostModal`}),` 会自动交给宿主渲染，调用点不用改；客户端顶层页面里需要 `,(0,t.jsx)(n.code,{children:`LingeeProvider`}),` 设置 `,(0,t.jsx)(n.code,{children:`site="lingee"`}),`。`]}),`
`,(0,t.jsx)(n.li,{children:`提示、确认框、宿主弹窗、图片全屏预览由 dashboard 渲染，只对 dashboard 里的页面生效；在独立窗口、内置浏览器里返回失败，由调用方本地渲染。`}),`
`,(0,t.jsxs)(n.li,{children:[`SDK 随独立登录发版，`,(0,t.jsx)(n.code,{children:`lwb.version`}),` 是构建时间；客户端能力随客户端发版。较新的能力先判断方法再调用。旧版客户端的小程序页没有 `,(0,t.jsx)(n.code,{children:`window.lingeeBridge`}),`。`]}),`
`]}),`
`,(0,t.jsx)(n.h2,{children:`详细文档`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`文档`}),(0,t.jsx)(n.th,{children:`位置`}),(0,t.jsx)(n.th,{children:`内容`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:`#/bridge-test`,children:`桥联调页`})}),(0,t.jsx)(n.td,{children:`本站`}),(0,t.jsx)(n.td,{children:`SDK 各能力的示例代码与在线测试，配到自定义菜单上即可验证`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`Web 及客户端主题状态接入指南`}),(0,t.jsxs)(n.td,{children:[`control_plane `,(0,t.jsx)(n.code,{children:`docs/`})]}),(0,t.jsx)(n.td,{children:`主题字段、跟随方式、暖棕、各环境现状`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`Web 及客户端侧边栏状态接入指南`}),(0,t.jsxs)(n.td,{children:[`control_plane `,(0,t.jsx)(n.code,{children:`docs/`})]}),(0,t.jsx)(n.td,{children:`侧边栏开合状态与避让`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`Web 及客户端全局弹窗接入指南`}),(0,t.jsxs)(n.td,{children:[`control_plane `,(0,t.jsx)(n.code,{children:`docs/`})]}),(0,t.jsx)(n.td,{children:`确认框、自定义内容弹窗、提示、独立窗口`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`选人组件调用指南（iframe-webview-小程序）`}),(0,t.jsxs)(n.td,{children:[`control_plane `,(0,t.jsx)(n.code,{children:`docs/`})]}),(0,t.jsx)(n.td,{children:`三种环境的选人调用与返回结构`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`知识库-at灵基-对接文档`}),(0,t.jsxs)(n.td,{children:[`control_plane `,(0,t.jsx)(n.code,{children:`docs/`})]}),(0,t.jsx)(n.td,{children:`带知识开新对话`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`自定义菜单-webview桥接入说明`}),(0,t.jsxs)(n.td,{children:[`lingee `,(0,t.jsx)(n.code,{children:`docs/`})]}),(0,t.jsx)(n.td,{children:`webview 承载的菜单页面能用什么`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`客户端外部浏览器免登桥接入说明`}),(0,t.jsxs)(n.td,{children:[`lingee `,(0,t.jsx)(n.code,{children:`docs/`})]}),(0,t.jsx)(n.td,{children:`在系统浏览器里免登打开`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`AI速记浮窗与子窗口消息桥接入指南`}),(0,t.jsxs)(n.td,{children:[`lingee `,(0,t.jsx)(n.code,{children:`docs/`})]}),(0,t.jsx)(n.td,{children:`小浮窗唤起，子窗口向发起页回传消息`})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[`客户端维护者另见 lingee `,(0,t.jsx)(n.code,{children:`docs/modules/jsbridge.md`}),`「统一桥」：各端的能力集与新增能力的规则。`]})]})}function i(e={}){let{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}export{i as default,n as frontmatter};