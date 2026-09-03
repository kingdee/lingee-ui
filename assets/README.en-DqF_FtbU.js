import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{t}from"./DemoBox-BZeiswLE.js";import{i as n,n as r,r as i,t as a}from"./locale-Be_c7ox8.js";var o=e(),s={title:`LingeeProvider`,description:`The root provider of the component library. It supplies the locale context and the global Toast mount point, and must wrap the app once at the top level.`};function c(e){let s={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{children:`When to use`}),`
`,(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:`LingeeProvider`}),` is the root provider of the library. `,(0,o.jsx)(s.strong,{children:`Wrap the app with it once`}),` to enable two global capabilities:`]}),`
`,(0,o.jsxs)(s.ul,{children:[`
`,(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:`Global Toast`}),` — it mounts the built-in `,(0,o.jsx)(s.code,{children:`Toaster`}),`. Without it, imperative calls such as `,(0,o.jsx)(s.code,{children:`toast.success()`}),` render nothing`]}),`
`,(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:`Localization`}),` — the `,(0,o.jsx)(s.code,{children:`locale`}),` prop injects a language pack, which drives the built-in copy of components (the pagination total, the upload trigger text, `,(0,o.jsx)(s.code,{children:`aria-label`}),`s, and so on)`]}),`
`,(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:`Component-level defaults`}),` — pass an object named after each component, such as `,(0,o.jsx)(s.code,{children:`dialog={{ zIndex: 10000 }}`}),`, to set a shared Dialog stacking baseline`]}),`
`]}),`
`,(0,o.jsx)(s.p,{children:`Components still render without the provider, but the capabilities above stop working.`}),`
`,(0,o.jsx)(s.h2,{children:`Basic`}),`
`,(0,o.jsx)(s.p,{children:`Wrap the app once at the entry point; there is no need to wrap individual pages:`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`import { LingeeProvider } from "lingee-ui";
import "lingee-ui/styles.css";

createRoot(document.getElementById("root")!).render(
  <LingeeProvider>
    <App />
  </LingeeProvider>,
);
`})}),`
`,(0,o.jsxs)(s.p,{children:[`Once wrapped, imperative `,(0,o.jsx)(s.code,{children:`toast`}),` calls anywhere in the app render correctly:`]}),`
`,(0,o.jsx)(t,{source:i,children:(0,o.jsx)(n,{})}),`
`,(0,o.jsx)(s.h2,{children:`Component-level defaults`}),`
`,(0,o.jsxs)(s.p,{children:[`Configuration is grouped per component so that similarly named properties never affect unrelated components. The setting below applies to both declarative `,(0,o.jsx)(s.code,{children:`Dialog`}),` instances and imperative `,(0,o.jsx)(s.code,{children:`Dialog.confirm()`}),` calls; a per-call `,(0,o.jsx)(s.code,{children:`zIndex`}),` takes precedence.`]}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`<LingeeProvider dialog={{ zIndex: 10000 }}>
  <App />
</LingeeProvider>
`})}),`
`,(0,o.jsxs)(s.p,{children:[`Nested providers shallow-merge each component object: an inner provider overrides only the fields it declares and inherits the rest, so an inner `,(0,o.jsx)(s.code,{children:`dialog={{}}`}),` still resolves to `,(0,o.jsx)(s.code,{children:`zIndex: 10000`}),` in the example above.`]}),`
`,(0,o.jsxs)(s.p,{children:[`The config object can be written inline; there is no need to `,(0,o.jsx)(s.code,{children:`useMemo`}),` it. The provider depends on individual fields, so a fresh object reference on every render does not trigger downstream re-renders.`]}),`
`,(0,o.jsx)(s.h2,{children:`Switching locale`}),`
`,(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:`locale`}),` takes a `,(0,o.jsx)(s.strong,{children:`language pack object`}),`, not a locale code string. The library exports `,(0,o.jsx)(s.code,{children:`zhCN`}),` and `,(0,o.jsx)(s.code,{children:`enUS`}),`, and defaults to `,(0,o.jsx)(s.code,{children:`zhCN`}),`.`]}),`
`,(0,o.jsx)(t,{source:a,children:(0,o.jsx)(r,{})}),`
`,(0,o.jsx)(s.h2,{children:`Reading copy in your own code`}),`
`,(0,o.jsx)(s.p,{children:`To reuse the built-in copy instead of maintaining duplicate translations, read it through the two hooks:`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`import { useLocale, useComponentLocale } from "lingee-ui";

// The whole language pack
const locale = useLocale();

// A single component's slice
const paginationLocale = useComponentLocale("Pagination");
console.log(paginationLocale.total); // "共 {total} 条"
`})}),`
`,(0,o.jsx)(s.h2,{children:`API`}),`
`,(0,o.jsx)(s.h3,{children:`LingeeProvider`}),`
`,(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:`Property`}),(0,o.jsx)(s.th,{children:`Description`}),(0,o.jsx)(s.th,{children:`Type`}),(0,o.jsx)(s.th,{children:`Default`})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`locale`})}),(0,o.jsxs)(s.td,{children:[`Language pack object, either `,(0,o.jsx)(s.code,{children:`zhCN`}),` or `,(0,o.jsx)(s.code,{children:`enUS`})]}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`Locale`})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`zhCN`})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`dialog`})}),(0,o.jsxs)(s.td,{children:[`Dialog defaults, currently `,(0,o.jsx)(s.code,{children:`zIndex`})]}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`DialogConfig`})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`{}`})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`children`})}),(0,o.jsx)(s.td,{children:`App content`}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`ReactNode`})}),(0,o.jsx)(s.td,{children:`-`})]})]})]}),`
`,(0,o.jsx)(s.h3,{children:`Hooks`}),`
`,(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:`Method`}),(0,o.jsx)(s.th,{children:`Description`}),(0,o.jsx)(s.th,{children:`Type`})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`useLocale`})}),(0,o.jsx)(s.td,{children:`Returns the whole active language pack`}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`() => Locale`})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`useComponentLocale`})}),(0,o.jsx)(s.td,{children:`Returns one component's slice of the language pack`}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`(componentName: keyof Locale) => Locale[K]`})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`useComponentConfig`})}),(0,o.jsx)(s.td,{children:`Returns the active component-level config (already merged across nesting)`}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`() => ComponentConfig`})})]})]})]}),`
`,(0,o.jsx)(s.h3,{children:`Exported language packs`}),`
`,(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:`Export`}),(0,o.jsx)(s.th,{children:`Description`})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`zhCN`})}),(0,o.jsx)(s.td,{children:`Chinese language pack (default)`})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:`enUS`})}),(0,o.jsx)(s.td,{children:`English language pack`})]})]})]}),`
`,(0,o.jsx)(s.h2,{children:`Notes`}),`
`,(0,o.jsxs)(s.ul,{children:[`
`,(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:`locale`}),` expects an object. Writing `,(0,o.jsx)(s.code,{children:`locale="zh-CN"`}),` causes a type error and the copy stays unlocalized`]}),`
`,(0,o.jsxs)(s.li,{children:[`A custom language pack must match the `,(0,o.jsx)(s.code,{children:`Locale`}),` type (same shape as `,(0,o.jsx)(s.code,{children:`zhCN`}),`). Spread `,(0,o.jsx)(s.code,{children:`zhCN`}),` and override only the fields you need`]}),`
`,(0,o.jsxs)(s.li,{children:[`The provider normally wraps the app once. Nest it only for scoped overrides: `,(0,o.jsx)(s.code,{children:`locale`}),` and component config resolve to the innermost provider, while `,(0,o.jsx)(s.code,{children:`Toaster`}),` and the tooltip container are mounted by the outermost one only, so they are never duplicated`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}export{l as default,s as frontmatter};