import{t as e}from"./jsx-runtime-OQpaS_Dv.js";var t=e(),n=void 0;function r(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[`页面与灵基宿主（WebUI、客户端）通信有三个入口。本页列出各承载环境能用哪些、怎么调；参数与返回值的细节见`,(0,t.jsx)(n.a,{href:`#/bridge-test`,children:`桥联调页`}),`，或向灵基对接人索取对应能力的接入指南。`]}),`
`,(0,t.jsx)(n.h2,{children:`三个入口`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`入口`}),(0,t.jsx)(n.th,{children:`是什么`}),(0,t.jsx)(n.th,{children:`怎么拿到`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[`SDK `,(0,t.jsx)(n.code,{children:`lwb`})]}),(0,t.jsx)(n.td,{children:`页面引入的脚本，替页面判断承载环境、选择通道。iframe 里全部可用，客户端顶层页面里只覆盖一部分（见能力总览）`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`<script src="https://<灵基域名>/auth/lingee-web-bridge.js">`}),`，见`,(0,t.jsx)(n.a,{href:`#/bridge-test`,children:`桥联调页`}),`「接入方式」`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`window.lingeeBridge`})}),(0,t.jsx)(n.td,{children:`客户端注入的端壳桥。各端同名、同签名，只放本端能用的方法`}),(0,t.jsx)(n.td,{children:`客户端在页面脚本之前注入，不用引入`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`_CloudHubJSBridge`})}),(0,t.jsx)(n.td,{children:`云之家旧桥，小程序的存量能力`}),(0,t.jsx)(n.td,{children:`客户端注入。只维护存量，灵基的新能力不再加在上面`})]})]})]}),`
`,(0,t.jsx)(n.h2,{children:`页面由谁承载`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`承载环境`}),(0,t.jsx)(n.th,{children:`举例`}),(0,t.jsx)(n.th,{children:`能拿到的入口`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`WebUI 的 iframe`}),(0,t.jsx)(n.td,{children:`浏览器里的自定义菜单；客户端里打开方式为 iframe 的菜单；知识库等内嵌页`}),(0,t.jsx)(n.td,{children:`SDK`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`客户端 webview`}),(0,t.jsx)(n.td,{children:`打开方式为 webview 的菜单、开发频道的菜单、WebUI 自身`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`window.lingeeBridge`}),`（完整）、SDK`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`客户端小程序`}),(0,t.jsx)(n.td,{children:`dashboard 里的日历、知识库等小程序，独立小程序窗口`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`window.lingeeBridge`}),`（子集，需新版客户端）、`,(0,t.jsx)(n.code,{children:`_CloudHubJSBridge`}),`、SDK`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`没有宿主`}),(0,t.jsx)(n.td,{children:`浏览器直接打开；嵌在管理后台等其它系统里`}),(0,t.jsx)(n.td,{children:`都不能用，走页面自己的实现`})]})]})]}),`
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
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`const context = lwb.getHostContext(); // 主题、语言、租户版本等基本信息，见下方「宿主上下文」

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
`,(0,t.jsxs)(n.p,{children:[`小程序里的 `,(0,t.jsx)(n.code,{children:`window.lingeeBridge`}),` 需要新版客户端，只有能力总览里列出的方法。旧版客户端没有这个对象，继续用云之家桥的存量写法。以知识库「带知识开新对话」为例：`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`const doc = { id: "doc_1", name: "Document 1.pdf", format: "pdf" };
const bridge = window.lingeeBridge;
if (typeof bridge?.openChatWithKnowledge === "function") {
  bridge.openChatWithKnowledge(doc).catch(() => {}); // id 不合法时 reject
} else {
  legacyOpenChat(doc); // 旧版客户端：沿用对接文档里的写法
}
`})}),`
`,(0,t.jsx)(n.h3,{children:`宿主上下文`}),`
`,(0,t.jsxs)(n.p,{children:[`主题、界面语言、AI 回复语言、地域、租户版本合成一个对象，由宿主下发。WebUI iframe、客户端 webview、客户端小程序里读法相同，不需要 `,(0,t.jsx)(n.code,{children:`init()`}),`。`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`const context = lwb.getHostContext(); // 没有宿主时为 null
// {
//   version: 1,
//   theme: { resolved, preference, followable, runtime } | null, // resolved：light / dark / warm
//   lang: "zh-CN" | "en-US" | "zh-TW" | null,                    // 界面语言
//   llmResponseLanguage: string | null,                          // AI 回复语言
//   region: "CN" | "GLOBAL" | null,                              // 部署地域
//   edition: "PERSONAL" | "ENTERPRISE" | null,                   // 租户版本
// }

// 注册时立即回调一次当前值（prev 为 null），之后任一字段变化都会回调
lwb.onHostContextChange((next, prev) => {
  // 跟随主题：宿主允许时取 resolved，否则保持亮色。样式要先收敛到 --lg-g-* 语义 Token
  const theme = next.theme?.followable ? next.theme.resolved : "light";
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme === "dark" ? "dark" : "light";

  // 只关心部分字段时比较前后值
  if (next.edition !== prev?.edition) togglePersonalEntry(next.edition === "PERSONAL");
});
`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`单个字段为 `,(0,t.jsx)(n.code,{children:`null`}),` 表示宿主还没拿到或不提供，例如未登录时的 `,(0,t.jsx)(n.code,{children:`edition`}),`。保持页面默认表现、等后续推送，不要自己读 `,(0,t.jsx)(n.code,{children:`prefers-color-scheme`}),` 或 `,(0,t.jsx)(n.code,{children:`navigator.language`}),` 去猜。`]}),`
`,(0,t.jsx)(n.li,{children:`租户版本可能晚于页面到达，判断个人版要订阅变化，不能只在首帧读一次。`}),`
`,(0,t.jsxs)(n.li,{children:[`值域只增不改：主题只认 `,(0,t.jsx)(n.code,{children:`dark`}),`（暖棕 `,(0,t.jsx)(n.code,{children:`warm`}),` 也是浅底），版本只认 `,(0,t.jsx)(n.code,{children:`PERSONAL`}),`，其它值按默认处理。`]}),`
`,(0,t.jsxs)(n.li,{children:[`不加载 SDK 的客户端页面（如小程序）直接调 `,(0,t.jsx)(n.code,{children:`window.lingeeBridge.getHostContext()`}),` / `,(0,t.jsx)(n.code,{children:`onHostContextChange()`}),`，签名相同。`]}),`
`,(0,t.jsxs)(n.li,{children:[`需要新版宿主与新版脚本，调用前先判断 `,(0,t.jsx)(n.code,{children:`typeof window.lwb?.getHostContext === "function"`}),`。`]}),`
`]}),`
`,(0,t.jsx)(n.h2,{children:`能力总览`}),`
`,(0,t.jsxs)(n.p,{children:[`「—」表示该环境没有这项能力。客户端小程序一列中，`,(0,t.jsx)(n.code,{children:`lingeeBridge`}),` 的方法需要新版客户端；旧版客户端只有云之家桥的存量能力。`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`能力`}),(0,t.jsx)(n.th,{children:`WebUI iframe`}),(0,t.jsx)(n.th,{children:`客户端 webview`}),(0,t.jsx)(n.th,{children:`客户端小程序`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`宿主上下文（主题、界面语言、AI 回复语言、地域、租户版本）`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`lwb.getHostContext`}),` / `,(0,t.jsx)(n.code,{children:`onHostContextChange`})]}),(0,t.jsxs)(n.td,{children:[`同 iframe（SDK 读端壳桥），或直接调 `,(0,t.jsx)(n.code,{children:`lingeeBridge.getHostContext`}),` / `,(0,t.jsx)(n.code,{children:`onHostContextChange`})]}),(0,t.jsx)(n.td,{children:`同 webview`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`侧边栏状态`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`lwb.getHostSidebarState`}),` / `,(0,t.jsx)(n.code,{children:`onHostSidebarChange`})]}),(0,t.jsxs)(n.td,{children:[`同 iframe，或直接调 `,(0,t.jsx)(n.code,{children:`lingeeBridge`}),` 同名方法`]}),(0,t.jsx)(n.td,{children:`—`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`全局提示`}),(0,t.jsxs)(n.td,{children:[`lingee-ui `,(0,t.jsx)(n.code,{children:`toast.*`}),`；`,(0,t.jsx)(n.code,{children:`lwb.showHostToast`})]}),(0,t.jsxs)(n.td,{children:[`lingee-ui `,(0,t.jsx)(n.code,{children:`toast.*`}),`；`,(0,t.jsx)(n.code,{children:`lingeeBridge.showToast`}),` / `,(0,t.jsx)(n.code,{children:`showActionToast`}),` / `,(0,t.jsx)(n.code,{children:`dismissToast`})]}),(0,t.jsxs)(n.td,{children:[`同 webview，只在 dashboard 里由宿主渲染；旧版客户端用云之家桥 `,(0,t.jsx)(n.code,{children:`toast`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`确认框`}),(0,t.jsxs)(n.td,{children:[`lingee-ui `,(0,t.jsx)(n.code,{children:`Dialog.confirm`})]}),(0,t.jsxs)(n.td,{children:[`lingee-ui `,(0,t.jsx)(n.code,{children:`Dialog.confirm`}),`；`,(0,t.jsx)(n.code,{children:`lingeeBridge.showConfirm`})]}),(0,t.jsx)(n.td,{children:`同 webview，只在 dashboard 里由宿主渲染`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`宿主弹窗`}),(0,t.jsxs)(n.td,{children:[`lingee-ui `,(0,t.jsx)(n.code,{children:`Dialog`}),` 的 `,(0,t.jsx)(n.code,{children:`hostModal`}),`；`,(0,t.jsx)(n.code,{children:`lwb.openHostModal`})]}),(0,t.jsxs)(n.td,{children:[`lingee-ui `,(0,t.jsx)(n.code,{children:`Dialog`}),` 的 `,(0,t.jsx)(n.code,{children:`hostModal`}),`；`,(0,t.jsx)(n.code,{children:`lingeeBridge.openHostModal`})]}),(0,t.jsx)(n.td,{children:`—`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`独立窗口`}),(0,t.jsx)(n.td,{children:`—`}),(0,t.jsxs)(n.td,{children:[`lingee-ui `,(0,t.jsx)(n.code,{children:`Dialog`}),` 的 `,(0,t.jsx)(n.code,{children:`hostModal.window`}),`，见 `,(0,t.jsx)(n.a,{href:`#/components/dialog`,children:`Dialog`}),`「客户端独立窗口」`]}),(0,t.jsx)(n.td,{children:`—`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`选人`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`lwb.openPersonPicker`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`lingeeBridge.openPersonPicker`})}),(0,t.jsxs)(n.td,{children:[`同 webview；旧版客户端用云之家桥 `,(0,t.jsx)(n.code,{children:`selectPersonsV2`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`图片预览（盖住宿主侧边栏）`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`lwb.previewImages`}),`，WebUI 画，客户端里交给客户端画`]}),(0,t.jsxs)(n.td,{children:[`同 iframe（SDK 读端壳桥），或直接调 `,(0,t.jsx)(n.code,{children:`lingeeBridge.previewImages`}),`；只对 dashboard 里的页面有效`]}),(0,t.jsx)(n.td,{children:`—`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`图片查看器（客户端独立窗口）`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`lwb.openImageViewer`}),`，只在客户端里的 WebUI 下可用`]}),(0,t.jsxs)(n.td,{children:[`同 iframe，或直接调 `,(0,t.jsx)(n.code,{children:`lingeeBridge.openImageViewer`})]}),(0,t.jsxs)(n.td,{children:[`同 webview；旧版客户端用云之家桥 `,(0,t.jsx)(n.code,{children:`previewImage`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`打开外链`}),(0,t.jsx)(n.td,{children:`—`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`lingeeBridge.openLink`})}),(0,t.jsxs)(n.td,{children:[`云之家桥 `,(0,t.jsx)(n.code,{children:`openDefaultBrowser`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`站内导航`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`lwb.requestNavigate`})}),(0,t.jsx)(n.td,{children:`同 iframe，只限动态菜单`}),(0,t.jsx)(n.td,{children:`—`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`重新免登、页面不可用`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`lwb.requestReauth`}),` / `,(0,t.jsx)(n.code,{children:`reportPageError`})]}),(0,t.jsx)(n.td,{children:`同 iframe，只限动态菜单`}),(0,t.jsx)(n.td,{children:`—`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`开发会话`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`lwb.openDevelopmentSession`})}),(0,t.jsx)(n.td,{children:`同 iframe，只限动态菜单`}),(0,t.jsx)(n.td,{children:`—`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`带知识开新对话`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`lwb.requestOpenChatWithKnowledge`}),`，只限知识库内嵌页`]}),(0,t.jsx)(n.td,{children:`—`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`lingeeBridge.openChatWithKnowledge`}),`，或同 iframe；只限 dashboard 里的知识库`]})]})]})]}),`
`,(0,t.jsx)(n.h2,{children:`约定`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`没有宿主时调用不报错：请求类返回 `,(0,t.jsx)(n.code,{children:`ok: false`}),` 或 `,(0,t.jsx)(n.code,{children:`false`}),`，状态类返回 `,(0,t.jsx)(n.code,{children:`null`}),`。选人这类业务功能必须写回退。`]}),`
`,(0,t.jsxs)(n.li,{children:[`lingee-ui 的 `,(0,t.jsx)(n.code,{children:`toast.*`}),`、`,(0,t.jsx)(n.code,{children:`Dialog.confirm`}),` 与 `,(0,t.jsx)(n.code,{children:`Dialog`}),` 的 `,(0,t.jsx)(n.code,{children:`hostModal`}),` 会自动交给宿主渲染，调用点不用改；客户端顶层页面里需要 `,(0,t.jsx)(n.code,{children:`LingeeProvider`}),` 设置 `,(0,t.jsx)(n.code,{children:`site="lingee"`}),`。`]}),`
`,(0,t.jsx)(n.li,{children:`客户端里，提示、确认框、宿主弹窗、图片预览由 dashboard 渲染，只对 dashboard 里的页面生效；在独立窗口、内置浏览器里返回失败，由调用方本地渲染。`}),`
`,(0,t.jsxs)(n.li,{children:[`图片预览的 `,(0,t.jsx)(n.code,{children:`url`}),` 项由 SDK 在页面里读成图片数据再交给宿主，图片要能被页面读到（同源，或对方允许跨域）。图片查看器只收 http(s) 地址，窗口直接加载。`]}),`
`,(0,t.jsxs)(n.li,{children:[`SDK 随独立登录发版，`,(0,t.jsx)(n.code,{children:`lwb.version`}),` 是构建时间；客户端能力随客户端发版。较新的能力先判断方法再调用。旧版客户端的小程序页没有 `,(0,t.jsx)(n.code,{children:`window.lingeeBridge`}),`。`]}),`
`]}),`
`,(0,t.jsx)(n.h2,{children:`详细文档`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:`#/bridge-test`,children:`桥联调页`}),`：SDK 各能力的示例代码与在线测试，配到自定义菜单上即可验证。`]}),`
`,(0,t.jsx)(n.li,{children:`各能力的接入指南（参数、返回结构、各环境差异）向灵基对接人索取。`}),`
`]})]})}function i(e={}){let{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}export{i as default,n as frontmatter};