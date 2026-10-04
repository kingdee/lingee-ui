import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{a as t,c as n,i as r,l as i,n as a,o,r as s,s as c,t as l,u}from"./embedded-C9DsVjlX.js";import{t as d}from"./DemoBox-ciX2hsqV.js";var f=e(),p={title:`PersonPicker`,description:`Organization people picker with hierarchy drill-down, remote search and a selection summary; data is injected by the consumer.`};function m(e){let p={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p.h2,{children:`Basic usage`}),`
`,(0,f.jsxs)(p.p,{children:[`The left pane browses candidates by tab, the right pane summarizes the selection. The component
`,(0,f.jsx)(p.strong,{children:`issues no requests`}),` — list data, search results and the organization hierarchy all arrive
through `,(0,f.jsx)(p.code,{children:`data`}),`, while interactions are reported through callbacks so the consumer can swap in
new `,(0,f.jsx)(p.code,{children:`data`}),`.`]}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`tabs`}),` enables only `,(0,f.jsx)(p.code,{children:`org`}),` and `,(0,f.jsx)(p.code,{children:`person`}),` by default; turn on the other two as needed.`]}),`
`,(0,f.jsx)(d,{source:i,children:(0,f.jsx)(u,{})}),`
`,(0,f.jsx)(p.h2,{children:`Async data: swapping batches and scroll loading`}),`
`,(0,f.jsx)(p.p,{children:`Data arrives over several requests, and the component keeps the two kinds of loading apart —
conflating them makes already-loaded content vanish:`}),`
`,(0,f.jsxs)(p.table,{children:[(0,f.jsx)(p.thead,{children:(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.th,{children:`Case`}),(0,f.jsx)(p.th,{children:`What to use`}),(0,f.jsx)(p.th,{children:`Appearance`})]})}),(0,f.jsxs)(p.tbody,{children:[(0,f.jsxs)(p.tr,{children:[(0,f.jsxs)(p.td,{children:[(0,f.jsx)(p.strong,{children:`Swapping a batch`}),` (first open, tab switch, drill-down, keyword change)`]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`loading`})}),(0,f.jsx)(p.td,{children:`Full-pane skeleton`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsxs)(p.td,{children:[(0,f.jsx)(p.strong,{children:`Appending`}),` (scrolled to the bottom)`]}),(0,f.jsxs)(p.td,{children:[`the Promise returned by `,(0,f.jsx)(p.code,{children:`onLoadMore`})]}),(0,f.jsx)(p.td,{children:`A loading row at the end of the list`})]})]})]}),`
`,(0,f.jsxs)(p.p,{children:[`Do `,(0,f.jsx)(p.strong,{children:`not`}),` set `,(0,f.jsx)(p.code,{children:`loading`}),` while appending. Scroll loading is handled by the library's
`,(0,f.jsx)(p.code,{children:`InfiniteScroll`}),`, which already covers re-entrancy, continuing when the first page does not fill
the viewport, and failure breaking.`]}),`
`,(0,f.jsx)(p.p,{children:`The pagination cursor belongs to the consumer: the component only signals that the bottom was
reached, it does not issue requests or keep bookkeeping. Reset the cursor after swapping a batch,
otherwise the next page lands behind the previous batch.`}),`
`,(0,f.jsx)(p.p,{children:`Two things are built in and need no work on your side:`}),`
`,(0,f.jsxs)(p.ul,{children:[`
`,(0,f.jsxs)(p.li,{children:[(0,f.jsx)(p.strong,{children:`No skeleton flash when swapping`}),`: within `,(0,f.jsx)(p.code,{children:`loadingDelay`}),` (200ms by default) the previous batch
stays on screen, so a request that finishes inside the window is never seen as a skeleton. To
benefit, keep the previous `,(0,f.jsx)(p.code,{children:`data`}),` while `,(0,f.jsx)(p.code,{children:`loading`}),` is true (React Query's `,(0,f.jsx)(p.code,{children:`placeholderData`}),` does
this). When there is nothing to show, the skeleton appears immediately instead of a blank gap.`]}),`
`,(0,f.jsxs)(p.li,{children:[(0,f.jsx)(p.strong,{children:`Scroll resets on swap`}),`: the scroll position returns to the top when the level, tab or keyword
changes; appending does not reset it.`]}),`
`]}),`
`,(0,f.jsxs)(p.p,{children:[`The example below covers three kinds of batch swap — `,(0,f.jsx)(p.strong,{children:`drilling into a department`}),`, `,(0,f.jsx)(p.strong,{children:`switching
tabs`}),` and `,(0,f.jsx)(p.strong,{children:`drilling while picking people`}),` — and contrasts two API speeds: with the fast one
(120ms, inside `,(0,f.jsx)(p.code,{children:`loadingDelay`}),`) no skeleton appears; the slow one (800ms) does show it. Scroll to
the bottom of the list to see the append row.`]}),`
`,(0,f.jsxs)(p.p,{children:[`Note that the two tabs fetch `,(0,f.jsx)(p.strong,{children:`different data`}),` (the department tab only needs child units, the
people tab also needs the current level's members), so switching tabs is a batch swap too. The
hierarchy path is shared, so you stay on the same level after switching.`]}),`
`,(0,f.jsx)(d,{source:s,children:(0,f.jsx)(r,{})}),`
`,(0,f.jsxs)(p.p,{children:[`Append failures are handled by `,(0,f.jsx)(p.code,{children:`InfiniteScroll`}),`: a retry affordance appears at the end of the list
and the loaded content is untouched. `,(0,f.jsx)(p.code,{children:`onRetry`}),` only covers a failed batch swap for the whole pane.`]}),`
`,(0,f.jsx)(p.h2,{children:`Tabs and selection rules`}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`tabs`}),` controls which tabs appear and in what order. Each tab's list shape is determined by the
fields present in `,(0,f.jsx)(p.code,{children:`data`}),`:`]}),`
`,(0,f.jsxs)(p.table,{children:[(0,f.jsx)(p.thead,{children:(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.th,{children:`Tab`}),(0,f.jsxs)(p.th,{children:[(0,f.jsx)(p.code,{children:`data`}),` combination`]})]})}),(0,f.jsxs)(p.tbody,{children:[(0,f.jsxs)(p.tr,{children:[(0,f.jsxs)(p.td,{children:[(0,f.jsx)(p.code,{children:`recent-contacts`}),` / `,(0,f.jsx)(p.code,{children:`recent-groups`})]}),(0,f.jsxs)(p.td,{children:[`A single untitled `,(0,f.jsx)(p.code,{children:`sections`}),` entry`]})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`org`})}),(0,f.jsxs)(p.td,{children:[(0,f.jsx)(p.code,{children:`orgNodes`}),` only`]})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`person`})}),(0,f.jsxs)(p.td,{children:[(0,f.jsx)(p.code,{children:`selectAll`}),` + titled `,(0,f.jsx)(p.code,{children:`sections`}),` + `,(0,f.jsx)(p.code,{children:`orgNodes`})]})]})]})]}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`max`}),` caps the selection size. Going over the cap `,(0,f.jsx)(p.strong,{children:`drops the whole batch`}),` rather than
truncating it — truncation would look like a successful select-all while silently leaving items
out.`]}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`locked`}),` items stay selected and cannot be removed; `,(0,f.jsx)(p.code,{children:`disabled`}),` items cannot be selected. Note
that `,(0,f.jsx)(p.code,{children:`locked`}),` only affects rendering — the component `,(0,f.jsx)(p.strong,{children:`does not fold it into the selection`}),`, so
put such items into `,(0,f.jsx)(p.code,{children:`value`}),` / `,(0,f.jsx)(p.code,{children:`defaultValue`}),` yourself if they should count toward the total.`]}),`
`,(0,f.jsx)(d,{source:c,children:(0,f.jsx)(n,{})}),`
`,(0,f.jsx)(p.h2,{children:`Loading, error and empty states`}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`loading`}),` takes precedence over `,(0,f.jsx)(p.code,{children:`loadError`}),`, so a retry shows the skeleton instead of the
previous failure. The retry affordance only appears when `,(0,f.jsx)(p.code,{children:`onRetry`}),` is supplied.`]}),`
`,(0,f.jsx)(d,{source:t,children:(0,f.jsx)(o,{})}),`
`,(0,f.jsx)(p.h2,{children:`Hierarchy drill-down`}),`
`,(0,f.jsxs)(p.p,{children:[`Items in `,(0,f.jsx)(p.code,{children:`orgNodes`}),` with `,(0,f.jsx)(p.code,{children:`hasChildren`}),` render a trailing chevron. The component reports the new
level through `,(0,f.jsx)(p.code,{children:`onOrgPathChange`}),`, and the consumer loads that level's data. A breadcrumb appears
whenever the path is non-empty and takes no height at the root level.`]}),`
`,(0,f.jsx)(p.p,{children:`The click target of such a row is split by which action matters more:`}),`
`,(0,f.jsxs)(p.table,{children:[(0,f.jsx)(p.thead,{children:(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.th,{children:`Click target`}),(0,f.jsx)(p.th,{children:`Action`})]})}),(0,f.jsxs)(p.tbody,{children:[(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:`The row (name, chevron)`}),(0,f.jsx)(p.td,{children:`Enter the next level`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:`The leading checkbox`}),(0,f.jsx)(p.td,{children:`Select / deselect the department`})]})]})]}),`
`,(0,f.jsxs)(p.p,{children:[`Browsing levels is what users do most with a department that has children, so it takes the whole
row; selection stays within the checkbox itself. `,(0,f.jsx)(p.strong,{children:`Leaf departments, people and group rows are
unaffected`}),` — clicking anywhere still toggles selection.`]}),`
`,(0,f.jsxs)(p.p,{children:[`The path is shared between the `,(0,f.jsx)(p.code,{children:`org`}),` and `,(0,f.jsx)(p.code,{children:`person`}),` tabs: both look at the same organization tree,
one listing departments and the other listing the people inside them.`]}),`
`,(0,f.jsx)(p.h2,{children:`Search`}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`onSearch`}),` is debounced by `,(0,f.jsx)(p.code,{children:`searchDebounce`}),` (300ms by default). A non-empty keyword enters search
mode, which hides both the tabs and the breadcrumb — search results span levels and tabs, so
neither control carries meaning there. The component performs no client-side filtering: put the
results in `,(0,f.jsx)(p.code,{children:`data.sections`}),` and matched fragments are highlighted automatically.`]}),`
`,(0,f.jsxs)(p.p,{children:[`Searching is also a batch swap: use `,(0,f.jsx)(p.code,{children:`loading`}),`, keep the previous results, and reset the cursor.`]}),`
`,(0,f.jsx)(p.h2,{children:`Embedding in another panel`}),`
`,(0,f.jsxs)(p.p,{children:[`The body can serve as one region inside someone else's panel — say a share dialog with file info
on top, the picker in the middle, and permission plus expiry fields below. For that shape use
`,(0,f.jsx)(p.code,{children:`PersonPickerPanel`}),` with `,(0,f.jsx)(p.code,{children:`paneHeight="fill"`}),`: the height is decided by the outer layout rather
than a hard-coded pixel value, so changing the outer size needs no recalculation here.`]}),`
`,(0,f.jsxs)(p.p,{children:[(0,f.jsx)(p.code,{children:`"fill"`}),` requires the `,(0,f.jsx)(p.strong,{children:`parent to have a definite height`}),` (a `,(0,f.jsx)(p.code,{children:`flex: 1`}),` container, or a hosting
page that fills the viewport). It collapses to 0 when the parent is content-sized. Pass a number
for a fixed height; the default 406 is the design-spec value.`]}),`
`,(0,f.jsx)(d,{source:l,children:(0,f.jsx)(a,{})}),`
`,(0,f.jsx)(p.h2,{children:`Hosting the dialog`}),`
`,(0,f.jsx)(p.p,{children:`Inside a desktop webview the overlay cannot cover the client's own sidebar, so the host has to
open the window one level up and load a dedicated route.`}),`
`,(0,f.jsxs)(p.p,{children:[`Pass `,(0,f.jsx)(p.code,{children:`hostModal`}),` to `,(0,f.jsx)(p.code,{children:`PersonPicker`}),` to delegate to the host; it falls back to local rendering at
the browser top level or when the host declines:`]}),`
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
  // Fallback content — keep it
  onConfirm={submit}
/>
`})}),`
`,(0,f.jsxs)(p.p,{children:[`⚠️ `,(0,f.jsx)(p.strong,{children:`In hosted mode this component renders no DOM at all`}),`, so the footer buttons never appear and
`,(0,f.jsx)(p.code,{children:`onConfirm`}),` never fires; the selection comes back through `,(0,f.jsx)(p.code,{children:`hostModal.onResult`}),`. The hosting page
should render `,(0,f.jsx)(p.code,{children:`PersonPickerPanel`}),` and supply its own footer (together with `,(0,f.jsx)(p.code,{children:`HostModalPage`}),`):`]}),`
`,(0,f.jsx)(p.pre,{children:(0,f.jsx)(p.code,{className:`language-tsx`,children:`export default function PersonPickerHostPage() {
  return (
    <HostModalPage<{ tabs?: PickerTabKey[] }> fallback={<Navigate to="/" replace />}>
      {(params, close) => (
        <PersonPickerPanel paneHeight="fill" tabs={params.tabs} {...dataProps} />
        // Footer drawn by the hosting page; call close(selected) on confirm
      )}
    </HostModalPage>
  );
}
`})}),`
`,(0,f.jsxs)(p.p,{children:[`The `,(0,f.jsx)(p.code,{children:`PickerEntity[]`}),` returned on confirm is structured-clone safe (primitive-only fields, no
functions or ReactNode), so it can be handed to the host over `,(0,f.jsx)(p.code,{children:`postMessage`}),` as is.`]}),`
`,(0,f.jsxs)(p.p,{children:[`For a fully custom layout, the add/remove, de-duplication and grouping logic is reusable through
`,(0,f.jsx)(p.code,{children:`usePersonPickerState`}),`. It ships alongside `,(0,f.jsx)(p.code,{children:`personPickerEntityKey`}),` (builds the `,(0,f.jsx)(p.code,{children:`type:id`}),` composite
key — `,(0,f.jsx)(p.code,{children:`id`}),` is only unique within a type, so never compare raw ids) and
`,(0,f.jsx)(p.code,{children:`PERSON_PICKER_TYPE_ORDER`}),` (the grouping order used by the selection pane).`]}),`
`,(0,f.jsx)(p.h2,{children:`Data structures`}),`
`,(0,f.jsx)(p.pre,{children:(0,f.jsx)(p.code,{className:`language-ts`,children:`type PickerTabKey = "recent-contacts" | "recent-groups" | "org" | "person";
type PickerEntityType = "person" | "group" | "org";
type PickerMode = "multiple" | "single";

/** Pass-through fields are primitive-only to stay structured-clone safe */
type PickerExtra = Record<string, string | number | boolean | null>;

/** People, groups and departments share one shape, returned verbatim on confirm */
interface PickerEntity {
  type: PickerEntityType;
  id: string;                  // unique within a type
  name: string;
  avatar?: string;             // group avatars arrive pre-composed from the backend
  code?: string;               // employee number
  deptName?: string;           // department the person belongs to
  desc?: string;               // supplementary description
  locked?: boolean;            // always selected, cannot be removed
  disabled?: boolean;          // cannot be selected
  hasChildren?: boolean;       // org only: renders the trailing chevron
  extra?: PickerExtra;
}

interface PickerSection {
  key: string;
  title?: ReactNode;           // omit to skip the heading row
  items: PickerEntity[];
}

interface PickerPaneData {
  sections?: PickerSection[];
  orgNodes?: PickerEntity[];   // rendered after sections; selectable and drillable
  selectAll?: boolean;         // applies to sections only, never to orgNodes
}

interface PickerOrgPathItem {
  id: string;
  name: string;
}

interface PickerChangeInfo {
  entity?: PickerEntity;       // undefined for batch changes
  selected: boolean;
}
`})}),`
`,(0,f.jsx)(p.h2,{children:`API`}),`
`,(0,f.jsx)(p.h3,{children:`PersonPicker`}),`
`,(0,f.jsxs)(p.p,{children:[`Inherits `,(0,f.jsx)(p.code,{children:`PersonPickerPanelProps`}),` and adds the dialog shell properties.`]}),`
`,(0,f.jsxs)(p.table,{children:[(0,f.jsx)(p.thead,{children:(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.th,{children:`Property`}),(0,f.jsx)(p.th,{children:`Description`}),(0,f.jsx)(p.th,{children:`Type`}),(0,f.jsx)(p.th,{children:`Default`})]})}),(0,f.jsxs)(p.tbody,{children:[(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`open`})}),(0,f.jsx)(p.td,{children:`Whether the dialog is open (controlled)`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`boolean`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onOpenChange`})}),(0,f.jsx)(p.td,{children:`Open state change callback`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(open: boolean) => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`title`})}),(0,f.jsx)(p.td,{children:`Title; falls back to the locale`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`ReactNode`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`Select people`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`okText`})}),(0,f.jsx)(p.td,{children:`Confirm button text`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`string`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`OK`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`cancelText`})}),(0,f.jsx)(p.td,{children:`Cancel button text`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`string`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`Cancel`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`okLoading`})}),(0,f.jsx)(p.td,{children:`Confirm button loading state`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`boolean`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`false`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`okDisabledWhenEmpty`})}),(0,f.jsx)(p.td,{children:`Disable confirm while nothing is selected`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`boolean`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`true`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onConfirm`})}),(0,f.jsxs)(p.td,{children:[`Confirm handler; returning a Promise puts the button in loading. `,(0,f.jsx)(p.strong,{children:`Never fires in hosted mode`})]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(value: PickerEntity[]) => void | Promise<void>`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onCancel`})}),(0,f.jsx)(p.td,{children:`Fired by cancel, the close button and Esc`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`() => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`width`})}),(0,f.jsx)(p.td,{children:`Dialog width`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`number`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`720`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`zIndex`})}),(0,f.jsx)(p.td,{children:`Custom z-index`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`number`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`hostModal`})}),(0,f.jsxs)(p.td,{children:[`Host modal config, forwarded to the inner `,(0,f.jsx)(p.code,{children:`Dialog`}),`. In hosted mode the component renders no DOM, so the hosting page must draw the footer`]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`DialogHostModal`})}),(0,f.jsx)(p.td,{children:`-`})]})]})]}),`
`,(0,f.jsx)(p.h3,{children:`PersonPickerPanel`}),`
`,(0,f.jsx)(p.p,{children:`The two-pane body, without the dialog shell.`}),`
`,(0,f.jsxs)(p.table,{children:[(0,f.jsx)(p.thead,{children:(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.th,{children:`Property`}),(0,f.jsx)(p.th,{children:`Description`}),(0,f.jsx)(p.th,{children:`Type`}),(0,f.jsx)(p.th,{children:`Default`})]})}),(0,f.jsxs)(p.tbody,{children:[(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`tabs`})}),(0,f.jsx)(p.td,{children:`Enabled tabs and their order; the tab bar is hidden when only one remains`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`PickerTabKey[]`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`["org", "person"]`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`activeTab`})}),(0,f.jsx)(p.td,{children:`Current tab (controlled)`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`PickerTabKey`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`defaultActiveTab`})}),(0,f.jsxs)(p.td,{children:[`Initial tab; defaults to the first of `,(0,f.jsx)(p.code,{children:`tabs`})]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`PickerTabKey`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onTabChange`})}),(0,f.jsx)(p.td,{children:`Tab change callback`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(key: PickerTabKey) => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`tabLabels`})}),(0,f.jsx)(p.td,{children:`Override tab labels`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`Partial<Record<PickerTabKey, ReactNode>>`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`data`})}),(0,f.jsx)(p.td,{children:`Data for the left pane`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`PickerPaneData`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`{}`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`loading`})}),(0,f.jsxs)(p.td,{children:[(0,f.jsx)(p.strong,{children:`Batch swap`}),` in progress; shows the skeleton and takes precedence over `,(0,f.jsx)(p.code,{children:`loadError`}),`. Do not set it while appending`]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`boolean`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`false`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`loadingDelay`})}),(0,f.jsx)(p.td,{children:`Delay in ms before the skeleton appears, avoiding a flash on fast requests`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`number`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`200`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`loadError`})}),(0,f.jsx)(p.td,{children:`Failed to load`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`boolean`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`false`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onRetry`})}),(0,f.jsx)(p.td,{children:`Retry handler; the retry affordance only appears when supplied`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`() => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`hasMore`})}),(0,f.jsx)(p.td,{children:`Whether another page is available`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`boolean`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`false`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onLoadMore`})}),(0,f.jsx)(p.td,{children:`Load the next page; must return a Promise`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(isRetry: boolean) => Promise<void>`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`value`})}),(0,f.jsx)(p.td,{children:`Selected items (controlled)`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`PickerEntity[]`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`defaultValue`})}),(0,f.jsx)(p.td,{children:`Initial selection (uncontrolled)`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`PickerEntity[]`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`[]`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onChange`})}),(0,f.jsx)(p.td,{children:`Selection change callback`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(value: PickerEntity[], info: PickerChangeInfo) => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`keyword`})}),(0,f.jsx)(p.td,{children:`Search keyword (controlled); non-empty enters search mode`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`string`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onSearch`})}),(0,f.jsx)(p.td,{children:`Debounced keyword change callback`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(keyword: string) => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`searchDebounce`})}),(0,f.jsx)(p.td,{children:`Debounce interval in milliseconds`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`number`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`300`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`searchPlaceholder`})}),(0,f.jsx)(p.td,{children:`Search box placeholder`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`string`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`Search contacts or departments`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`orgPath`})}),(0,f.jsx)(p.td,{children:`Current hierarchy path (controlled), excluding the root`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`PickerOrgPathItem[]`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onOrgPathChange`})}),(0,f.jsx)(p.td,{children:`Path change callback (breadcrumb jumps and drill-downs)`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(path: PickerOrgPathItem[]) => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`mode`})}),(0,f.jsxs)(p.td,{children:[`Selection mode; `,(0,f.jsx)(p.code,{children:`single`}),` replaces the previous value`]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`"multiple" | "single"`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`"multiple"`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`max`})}),(0,f.jsx)(p.td,{children:`Maximum number of selectable items`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`number`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`onExceed`})}),(0,f.jsxs)(p.td,{children:[`Fired when `,(0,f.jsx)(p.code,{children:`max`}),` would be exceeded; the selection is dropped`]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`(max: number) => void`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`paneHeight`})}),(0,f.jsxs)(p.td,{children:[`Two-pane height. `,(0,f.jsx)(p.code,{children:`"fill"`}),` stretches to the parent (which must have a definite height); used for embedded layouts`]}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`number | "fill"`})}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`406`})})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`className`})}),(0,f.jsx)(p.td,{children:`Custom class name`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`string`})}),(0,f.jsx)(p.td,{children:`-`})]}),(0,f.jsxs)(p.tr,{children:[(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`style`})}),(0,f.jsx)(p.td,{children:`Custom style`}),(0,f.jsx)(p.td,{children:(0,f.jsx)(p.code,{children:`CSSProperties`})}),(0,f.jsx)(p.td,{children:`-`})]})]})]})]})}function h(e={}){let{wrapper:t}=e.components||{};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(m,{...e})}):m(e)}export{h as default,p as frontmatter};