This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working with me

I don't read or write code myself. When you're about to run a shell command, explain in plain language what it does and why before running it — don't assume I can interpret the command or its output. If you hit a blocker that requires a decision (e.g., which of two approaches to take, whether to overwrite something, how to resolve a conflict), stop and explain the situation and the options in plain terms rather than picking one and continuing. Assume I can evaluate tradeoffs once they're explained, but not the underlying code or commands.

## What this is

A static personal portfolio site (Meghan Neuman) built with Angular 21, standalone components, and SSR/prerendering. There is no backend — all content lives in TypeScript source files and is baked into prerendered HTML at build time.

## Commands

```bash
npm start                # ng serve, dev server at localhost:4200, live reload
npm run build             # production build -> dist/mn-portfolio
npm run watch              # dev build, watches and rebuilds on change
npm test                    # ng test (Vitest)
```

- Run a single test file: `ng test --include='**/homepage.spec.ts'` (Vitest builder via Angular CLI).
- No lint script/config exists in this repo yet — don't assume `npm run lint` works.
- `npm run serve:ssr:mn-portfolio` runs the built SSR server (`node dist/mn-portfolio/server/server.mjs`); only works after `npm run build`.

## Architecture

**Routing is a flat list** in `src/app/app.routes.ts` — one entry per page, each mapped 1:1 to a component in `src/app/pages/`. `app.routes.server.ts` prerenders every route (`RenderMode.Prerender` on `**`). Adding a page means: add a page component, add a route, and if it should appear on the homepage, add an entry to `PROJECTS` in `src/app/models/project-model.ts`.

**Three-folder split under `src/app/`:**
- `pages/` — one component per route. Owns page-level layout and hardcodes that page's content (copy, skill tags, image refs) directly in the component class or template. There is no CMS, API, or JSON data file for page content — content changes are code changes.
- `components/` — reusable, presentational pieces shared across pages (hero blocks, nav, cards, quote blocks, metrics rows, etc.), driven by `@Input()`s.
- `models/` — TypeScript interfaces/classes for shared shapes (`Project`, `ItemModel`, `SkillModel`), and in `project-model.ts`'s case, the actual homepage project data (`PROJECTS` array) lives right next to its interface.

**Case study pages follow one consistent template:** `CaseStudyHeroComponent` (title/company/year/role/summary/tag chips) + page-specific body content + `CaseStudyNavComponent` (prev/next links to the adjacent case study). When adding a new case study, follow this same hero → body → nav shape and match the existing pages' structure rather than inventing a new layout.

**Reuse before adding:** before building a new component, check `components/` for something close (hero, nav, cards, quote-block, metrics-row, context-strip, process-steps). Extend an existing component's `@Input()`s to cover the new case rather than forking it into a near-duplicate. Only add a new component when none of the existing ones can reasonably be adapted.

**Content data is being migrated toward `models/`.** Currently each case study page hardcodes its own content inline (e.g. `skills: SkillModel[]` typed directly in the page's `.ts` file), which duplicates the shape/pattern across pages and drifts as the site grows. Prefer moving new and touched content into `models/` (following the `PROJECTS` pattern in `project-model.ts`: an interface plus its data array, imported by the page) instead of adding more inline arrays to page components. When editing an existing case study page, take the opportunity to extract its hardcoded content into `models/` rather than leaving it in place.

When editing an existing page whose content is still inline (not yet migrated to `models/`), extract it into `models/` only if the edit already touches most or all of that content, or if the content will predictably need editing again soon. For an isolated, small edit, a single line or a couple of fields, leave it inline rather than triggering a larger migration as a side effect of an unrelated change.

**Styling:** SCSS per component (`styleUrl`) plus a single global design-token file, `src/app/_theme.scss`, imported once and defining CSS custom properties (`--color-primary`, `--font-size-*`, etc.) and a fluid root `font-size` set via media-query breakpoints. Use existing `--color-*` / `--font-size-*` tokens instead of hardcoding new values; add new tokens to `_theme.scss` rather than one-off component styles when a value should be reusable.

**File naming diverges from Angular CLI defaults:** files and classes are named `thing-component.ts` / `ThingComponent`, `thing-page.ts` / `ThingPage`, `thing-model.ts` (not `thing.component.ts`, `thing.page.ts`). Match this convention for new files instead of `ng generate`'s default output.

**SSR/hydration:** `provideClientHydration(withEventReplay())` is on. Anything touching `window`, `document`, or browser-only APIs (see `FadeInViewDirective` in `src/app/utils/`) must guard with `isPlatformBrowser(inject(PLATFORM_ID))` — direct DOM/browser API access will break server rendering otherwise. `HeaderComponent` currently calls `document.getElementById(...)` unguarded in click handlers only (not `ngOnInit`), which is safe since those only run in the browser, but don't move that logic into a lifecycle hook without adding the same guard.

**Static assets** (images, videos, favicon) live in `public/` and are referenced by filename only (e.g. `imageUrl: 'gold-dust.jpg'`) — no import statements, no bundler processing.

## Git workflow [New section]

All feature work happens on the develop branch, created locally off main. Don't work directly on main. PRs are made from develop to main, one per feature or logical chunk of work, not one giant PR for everything. This is a small site, keep the branching strategy this simple rather than introducing additional long-lived branches, git-flow-style release branches, or per-feature branches off develop.