import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{t}from"./DemoBox-DvaghQBD.js";import{a as n,c as r,i,n as a,o,r as s,s as c,t as l}from"./collapse-BEE23Z_b.js";var u=e(),d={title:`Breadcrumb`,description:`Shows where the current page sits in the site hierarchy and lets users navigate back to higher levels.`};function f(e){let d={code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.h2,{children:`Basic`}),`
`,(0,u.jsxs)(d.p,{children:[`Use the `,(0,u.jsx)(d.code,{children:`items`}),` property to define the breadcrumb path. The last item is the current page,
rendered in bold and not clickable.`]}),`
`,(0,u.jsxs)(d.p,{children:[`Prefer `,(0,u.jsx)(d.code,{children:`onClick`}),` for navigating between levels — it renders a `,(0,u.jsx)(d.code,{children:`button`}),`. `,(0,u.jsx)(d.code,{children:`href`}),` renders an `,(0,u.jsx)(d.code,{children:`a`}),`
and triggers a full page load, which loses router state inside an SPA.`]}),`
`,(0,u.jsx)(t,{source:c,children:(0,u.jsx)(r,{})}),`
`,(0,u.jsx)(d.h2,{children:`Sizes`}),`
`,(0,u.jsxs)(d.p,{children:[(0,u.jsx)(d.code,{children:`md`}),` is the regular size (16px text), `,(0,u.jsx)(d.code,{children:`sm`}),` is the compact one (13px text). The default separator
follows the size: a slash for `,(0,u.jsx)(d.code,{children:`md`}),`, a chevron for `,(0,u.jsx)(d.code,{children:`sm`}),`.`]}),`
`,(0,u.jsx)(t,{source:n,children:(0,u.jsx)(o,{})}),`
`,(0,u.jsx)(d.h2,{children:`Custom separator`}),`
`,(0,u.jsxs)(d.p,{children:[`Use the `,(0,u.jsx)(d.code,{children:`separator`}),` property to customize the separator between breadcrumb items. Both icons
and plain text work.`]}),`
`,(0,u.jsx)(t,{source:s,children:(0,u.jsx)(i,{})}),`
`,(0,u.jsx)(d.h2,{children:`Long paths`}),`
`,(0,u.jsxs)(d.p,{children:[`The three properties are independent: `,(0,u.jsx)(d.code,{children:`maxItems`}),` moves the middle items into a dropdown,
`,(0,u.jsx)(d.code,{children:`itemMaxWidth`}),` caps the width of a single item and ellipsizes the overflow, and `,(0,u.jsx)(d.code,{children:`onBack`}),` prepends
a back arrow.`]}),`
`,(0,u.jsxs)(d.p,{children:[`No collapsing happens when `,(0,u.jsx)(d.code,{children:`maxItems`}),` is below 3 — collapsing needs room for the first item,
the ellipsis and the last item.`]}),`
`,(0,u.jsx)(d.h3,{children:`Shrink order when the container is too narrow`}),`
`,(0,u.jsx)(d.p,{children:`The component never overflows its container, even with none of the options above configured:`}),`
`,(0,u.jsxs)(d.ol,{children:[`
`,(0,u.jsxs)(d.li,{children:[(0,u.jsx)(d.strong,{children:`The last item (current page) stays intact first`}),`, while the preceding levels ellipsize —
what the user needs most is "where am I now"; the upstream levels remain reachable through the
collapse menu or the back arrow`]}),`
`,(0,u.jsx)(d.li,{children:`Only once the preceding levels have shrunk as far as they can does the last item ellipsize`}),`
`,(0,u.jsx)(d.li,{children:`If the path is so deep that even the icons and separators do not fit, the list clips`}),`
`]}),`
`,(0,u.jsxs)(d.p,{children:[`So when placing a breadcrumb in a narrow column (a dialog side pane, for example), giving the
parent `,(0,u.jsx)(d.code,{children:`min-width: 0`}),` is enough — there is no need to work out `,(0,u.jsx)(d.code,{children:`maxItems`}),` up front. Setting
`,(0,u.jsx)(d.code,{children:`maxItems`}),` just makes the collapse happen earlier and more predictably.`]}),`
`,(0,u.jsx)(t,{source:l,children:(0,u.jsx)(a,{})}),`
`,(0,u.jsx)(d.h2,{children:`API`}),`
`,(0,u.jsxs)(d.table,{children:[(0,u.jsx)(d.thead,{children:(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.th,{children:`Property`}),(0,u.jsx)(d.th,{children:`Description`}),(0,u.jsx)(d.th,{children:`Type`}),(0,u.jsx)(d.th,{children:`Default`})]})}),(0,u.jsxs)(d.tbody,{children:[(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`items`})}),(0,u.jsx)(d.td,{children:`Breadcrumb data`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`Array<{ key: string; label?: ReactNode; icon?: ReactNode; href?: string; onClick?: (event?: MouseEvent) => void; disabled?: boolean }>`})}),(0,u.jsx)(d.td,{children:`-`})]}),(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`separator`})}),(0,u.jsx)(d.td,{children:`Custom separator`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`ReactNode`})}),(0,u.jsxs)(d.td,{children:[`slash for `,(0,u.jsx)(d.code,{children:`md`}),` / chevron for `,(0,u.jsx)(d.code,{children:`sm`})]})]}),(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`size`})}),(0,u.jsx)(d.td,{children:`Size`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`"sm" | "md"`})}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`"md"`})})]}),(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`maxItems`})}),(0,u.jsx)(d.td,{children:`Maximum visible units, the middle items collapse beyond it`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`number`})}),(0,u.jsx)(d.td,{children:`-`})]}),(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`itemMaxWidth`})}),(0,u.jsx)(d.td,{children:`Maximum width per item, overflow is ellipsized`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`number`})}),(0,u.jsx)(d.td,{children:`-`})]}),(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`onBack`})}),(0,u.jsx)(d.td,{children:`When provided, a back arrow is shown and clicking it fires this callback`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`() => void`})}),(0,u.jsx)(d.td,{children:`-`})]}),(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`children`})}),(0,u.jsx)(d.td,{children:`Custom content (alternative to items)`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`ReactNode`})}),(0,u.jsx)(d.td,{children:`-`})]}),(0,u.jsxs)(d.tr,{children:[(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`aria-label`})}),(0,u.jsx)(d.td,{children:`Accessible label for the navigation region`}),(0,u.jsx)(d.td,{children:(0,u.jsx)(d.code,{children:`string`})}),(0,u.jsx)(d.td,{children:`from locale`})]})]})]})]})}function p(e={}){let{wrapper:t}=e.components||{};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(f,{...e})}):f(e)}export{p as default,d as frontmatter};