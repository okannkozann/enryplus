# Lumen AI Console — Design System Guidelines

> **Design intent:** A calm, glassmorphic operations dashboard where dense AI metrics stay legible, keyboard-operable, and consistent. Every surface, state, and spacing value comes from a token.

> [!WARNING]
> Brand context was inferred with low confidence from a Pinterest concept (`pin/1083326885405565250`). The product name "Lumen AI" and the audience ("authenticated users and operators") are placeholders. Verify both before release.

---

## 1. Context and goals

| Item | Value |
|---|---|
| Surface | Authenticated dashboard web app (desktop-first, responsive to 360px) |
| Users | Operators who monitor models, cost, latency, and jobs |
| Accessibility target | WCAG 2.2 AA |
| Reference density | 83 buttons · 32 links · 3 inputs · 1 primary navigation |

**Goals**
- Operators must be able to read any KPI in under 2 seconds at 100% zoom.
- Every interaction must work with keyboard only, pointer only, or touch only.
- New widgets should be assembled only from existing tokens and primitives.

---

## 2. Design tokens and foundations

Source of truth: [`styles/tokens.css`](styles/tokens.css). Components **must** use semantic tokens (layer 2), never primitives or raw hex values.

### 2.1 Typography

| Token | Value | Usage |
|---|---|---|
| `font.family.stack` | Pin Sans → system stack | All text |
| `font.size.xs` / `base` | 12px | Card titles, axis labels, meta, deltas |
| `font.size.sm` | 14px | Body, inputs, buttons, menu items |
| `font.size.md` | 16px | Empty-state headings, ring labels |
| `font.size.lg` | 24px | Page `h1`, compact-mode KPIs |
| `font.size.xl` *(extension)* | 32px | KPI numbers only |
| `font.weight.base / medium / strong` | 400 / 500 / 600 | Body / KPI / labels |

- Numbers in KPIs, tables, and legends **must** use `font-variant-numeric: tabular-nums`.
- Text **must not** go below `font.size.xs` (12px).
- Pin Sans is proprietary. If it is not licensed, the system stack applies automatically. Do not substitute another webfont.

### 2.2 Color (semantic)

| Semantic token | Maps to | Contrast requirement |
|---|---|---|
| `--color-fg-default` | `color.text.primary` | ≥ 4.5:1 on every surface |
| `--color-fg-muted` | ink-secondary (ext.) | ≥ 4.5:1 on glass (measured 7.9:1) |
| `--color-fg-accent` / `--color-action-primary` | `color.text.tertiary` | 6.6:1 with on-accent text |
| `--color-surface-glass` | `color.surface.raised` @ 50% | Must sit over the canvas, never over imagery |
| `--color-surface-popover` | `color.surface.raised` | Opaque. Menus and popovers only |
| `--color-surface-popover-hover` | `color.surface.strong` | Hover/focus row in menus |
| `--color-surface-scrim` | `color.surface.base` @ 8% | Hover tint on chart groups |
| `--color-data-1…5` | indigo, teal, white, lavender, navy | Non-text: ≥ 3:1 when it carries meaning |

**Inverse scope:** `.surface-inverse` remaps `fg`, `focus`, `status`, and `data-track` tokens. Components inside it **must not** override colors locally.

### 2.3 Spacing, radius, motion

| Token | Value | Rule |
|---|---|---|
| `space.half` *(ext.)* | 3px | Segmented padding, pill insets |
| `space.1` | 6px | Inline gaps, track height |
| `space.2` | 14px | Grid gap, card internal gap |
| `space.3` *(ext.)* | 20px | Card padding |
| `space.4` *(ext.)* | 28px | Shell padding, section gap |
| `space.5` *(ext.)* | 40px | Empty-state padding |
| `radius.xs` | 8px | Thumbs, menu items, tooltips |
| `radius.sm` | 16px | Cards, nav items, popovers |
| `radius.md` | 50px | Pills: buttons, inputs, tracks, bars |
| `motion.duration.instant` | 85ms | Press feedback |
| `motion.duration.fast` | 250ms | Hover, open, value change |

- Values outside these scales **must not** be introduced. If a new value is needed, propose a token.
- All motion **must** respect `prefers-reduced-motion: reduce` and drop to ≤ 0.01ms.

---

## 3. Component rules

Every component **must** define all seven states. The tables below are normative.

### 3.1 Button (`.btn`, `.icon-btn`)

**Anatomy:** container · optional leading icon (16px) · label (`.btn__label`) · busy spinner.
**Variants:** `primary` (one per view region), `ghost`, `sm`. Icon-only buttons are `.icon-btn` (32px).

| State | Rule |
|---|---|
| Default | `action-primary` bg, `fg-on-accent` text, `radius.md`, height 40 (sm 32) |
| Hover | `action-primary-hover`. Ghost uses `surface-glass-hover` |
| Focus-visible | 2px `focus-ring` outline, 2px offset, plus `focus-halo` |
| Active | `scale(0.97)` over `motion.duration.instant` |
| Disabled | `action-disabled-bg/fg`, `cursor: not-allowed`, no shadow |
| Loading | `aria-busy="true"` + `aria-disabled="true"`. Label hidden but width kept. Spinner shown. Repeat clicks ignored |
| Error | Button stays enabled. Error is shown in a toast or the card's error state, never by recoloring the button |

- **Keyboard:** Enter/Space activates. **Pointer:** the full container is clickable. **Touch:** target ≥ 32×32 with ≥ 6px spacing (meets the 24px WCAG 2.5.8 minimum).
- Labels **must** be verb + object ("Export report", "Retry loading revenue"). Icon-only buttons **must** have `aria-label` with the widget name ("Revenue options").
- Long labels **must not** wrap. Labels over ~24 characters should be shortened.

### 3.2 Inputs (search, select, switch)

| State | Rule |
|---|---|
| Default | Glass bg, `border-glass`, height 40, `font.size.sm`, pill |
| Hover | `surface-glass-hover`, border `surface-muted` |
| Focus-visible | Global focus ring |
| Active | Switch thumb animates over `motion.duration.fast` |
| Disabled | 55% opacity, `not-allowed` |
| Loading | Search: results stay put, count is announced after 120ms debounce |
| Error | `aria-invalid="true"` + `status-danger-border` + message linked through `aria-describedby` |

- Every input **must** have a programmatic `<label>`. A placeholder alone does not count.
- Search: Escape clears it. With zero results, show `#grid-empty` with a "Clear search" action. The result count is announced through `aria-live="polite"`.
- Switch **must** be `input[type=checkbox][role=switch]`.
- At ≤ 760px, controls go full-width and the segmented control stretches.

### 3.3 Segmented control (date range)

- `role="group"` + `aria-label="Date range"`. Each option is a button with `aria-pressed`.
- Selected: `surface-muted` bg + `fg-accent`. Hover: `surface-glass-hover`. Disabled: 50% opacity.
- Changing the range **must** put every visible card into Loading, then Ready. The new range is announced.
- Keyboard: Tab moves between options, Enter/Space selects.

### 3.4 Navigation rail (primary, ×1)

- `<nav aria-label="Primary">` with links. The current page uses `aria-current="page"` plus a filled accent gradient. Color is not the only signal: the filled shape also changes.
- Hover/focus-visible: a tooltip label appears (`opacity` over 250ms). It **must** show on keyboard focus, not only on hover.
- Active: `scale(0.96)`. Disabled links **must not** exist. Remove the item instead.
- ≤ 760px: becomes a fixed bottom bar with 44×44 targets. Content gets bottom padding so nothing is hidden behind it.

### 3.5 Card (widget container)

**Anatomy:** `article[aria-labelledby]` → header (title `h2` + menu button) → body → state layers (loading, error, empty).
**Variants:** `default` (glass), `surface-inverse` (navy, for headline KPIs), `card--glow` (hero charts). Use at most 4 inverse cards per viewport.

| State | Rule |
|---|---|
| Default | Glass, `radius.sm`, padding `space.3`, gap `space.2` |
| Hover | `surface-glass-hover` + `shadow-glass-hover`. No layout shift |
| Focus-visible | Focus goes to inner controls. The card itself is not focusable |
| Active | Menu open → `.is-menu-open` raises z-index above sibling cards |
| Disabled | Not supported. Hide the widget instead |
| Loading | `data-state="loading"`, `aria-busy="true"`, 3 shimmer skeleton lines, body hidden |
| Error | `role="alert"`, danger border, plain-language cause, named Retry button |
| Empty | Says what is missing and when data will appear. No illustration required |

- Long titles truncate with an ellipsis, and the full text goes in `title`. Table cells truncate at 140px the same way.
- Wide tables scroll horizontally in a focusable region (`tabindex="0"`, `role="region"`, `aria-label`).
- Grid: 3 columns above 1180px, 2 columns from 760 to 1180px, 1 column below 760px. When any card is hidden, the grid switches to auto-flow so no holes appear.

### 3.6 Menu (card options)

- Follows the WAI-ARIA menu button pattern: `aria-haspopup="menu"`, `aria-expanded`, `aria-controls`.
- **Keyboard:** Enter/Space/↓ opens on the first item, ↑ opens on the last. ↑/↓ move, Home/End jump, Escape closes and returns focus, Tab closes.
- **Pointer:** clicking outside closes it. **Touch:** the same as pointer, with 36px item rows.
- The popover **must** be opaque (`surface-popover`) and reset to light-scope tokens even inside inverse cards.
- "Hide widget" **must** offer Undo in a toast and move focus to the nearest remaining card.

### 3.7 Data visualisation

- Every chart **must** have `role="img"` + an `aria-label` that states the metric, range, and key value (peak or share).
- Hover/tap tooltips are an extra, not the only source of the data. Touch tooltips auto-dismiss after 2s.
- Series **must** be told apart by more than hue where it matters (legend labels, position).
- Use `vector-effect: non-scaling-stroke` on lines so they keep a constant width.
- Empty series → card Empty state. Never draw a flat zero line.

### 3.8 Toast

- Lives in `role="status"` / `aria-live="polite"`. Auto-dismisses after 6s. The timer pauses on hover or focus.
- Action buttons **must** have a descriptive `aria-label` ("Undo hiding Revenue").

---

## 4. Accessibility acceptance criteria (pass/fail)

| ID | Criterion | Test |
|---|---|---|
| A1 | Body text contrast ≥ 4.5:1 on glass and inverse | axe / contrast checker on every text token pair |
| A2 | Focus ring is visible on every interactive element, ≥ 3:1 against adjacent color | Tab through the page. Every stop shows a ring in light and inverse cards |
| A3 | No keyboard trap. Menu returns focus to its trigger | Open a menu, press Escape → focus is on `…` |
| A4 | Skip link is the first tab stop and moves focus to `#main` | Tab once → "Skip to dashboard" is visible. Enter → focus in main |
| A5 | Targets ≥ 24×24 CSS px (WCAG 2.5.8) | DevTools measure: icon buttons 32, mobile nav 44 |
| A6 | Every chart has a text alternative with real values | Screen reader reads the `aria-label` with numbers |
| A7 | Loading is announced: `aria-busy` toggles | Switch the range → inspect `aria-busy="true"` then `"false"` |
| A8 | Error state is announced | Set State → Error. Screen reader announces the alert |
| A9 | Reduced motion is respected | Enable OS reduce-motion → no orb drift, no shimmer |
| A10 | Reflow at 320px without horizontal scroll (except data tables) | Resize to 320px: no page-level x-scroll |
| A11 | Forced-colors mode keeps borders and the selected state | Windows High Contrast: cards and controls are outlined |
| A12 | Zoom to 200% without losing content | Browser zoom 200%: all KPIs readable |

---

## 5. Content and tone

Concise, confident, implementation-focused. Lead with the metric, then the context.

| Do | Don't |
|---|---|
| "Export report" | "Click here" |
| "Retry loading revenue" | "Retry" (ambiguous when there are many) |
| "Couldn't load revenue. The metrics service timed out." | "Oops! Something went wrong 😢" |
| "No data for this range yet. Metrics appear within 5 minutes of the first request." | "Nothing here" |
| "Revenue options" (aria-label) | "More" |
| "p95 latency 21.3 ms ▼ 1.2%" | "Latency is looking great!" |

- Use sentence case. Numbers use locale formatting. Units are always shown (`ms`, `k rps`, `$`).
- Deltas **must** pair an arrow glyph with a screen-reader phrase ("increase vs previous period").

---

## 6. Anti-patterns and prohibited implementations

- Raw hex or rgba in component CSS outside `tokens.css` is **prohibited**.
- `outline: none` without a replacement focus style is **prohibited**.
- Glass surfaces over photos or video, where contrast cannot be guaranteed, are **prohibited**.
- Text or info shown only on hover (tooltips as the only data source) is **prohibited**.
- One-off spacing (`margin: 9px`) or font sizes (`13px`) are **prohibited**.
- Disabled nav links and disabled cards are **prohibited**. Hide them instead.
- More than one primary button per toolbar region should be avoided.
- Spinner-only loading for cards should be avoided. Use skeletons that match the layout.

### Migration notes
- Legacy widgets with hard-coded colors should first map to the semantic tokens in §2.2, then wrap inverse variants in `.surface-inverse`.
- `color.surface.base` (#000) is kept only as a scrim and shadow source. It **must not** be used as a page background in this light theme.
- If Pin Sans becomes licensed, add `@font-face` only. No token changes are needed.

---

## 7. QA checklist

- [ ] No raw color values outside `tokens.css` (`grep -E "#[0-9a-f]{3,6}" styles/main.css` → glass art/orb gradients only)
- [ ] Each component shows default, hover, focus-visible, active, disabled, loading, and error
- [ ] State preview select (Live / Loading / Error / Empty) renders correctly on every card
- [ ] Tab order: skip link → nav → search → range → compact → state → export → cards → dock
- [ ] Menu keyboard: ↓, ↑, Home, End, Escape, and Tab all behave per §3.6
- [ ] Hide widget → Undo restores it in place, and focus is preserved
- [ ] Search with no match → empty state, then "Clear search" restores all widgets
- [ ] 1440 / 1180 / 760 / 360px layouts checked. Bottom nav does not cover content
- [ ] Long titles truncate with `title` tooltip. Long table cells truncate
- [ ] Reduced motion, forced colors, and 200% zoom verified
- [ ] axe-core: 0 serious/critical violations
