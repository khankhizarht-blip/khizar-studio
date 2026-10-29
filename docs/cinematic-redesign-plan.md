# Cinematic redesign: approved architecture and delivery plan

Approved by the owner on 29 October 2026. This document records direction, not completed implementation.

## Source gate and current scope

The source freshness gate was satisfied on 29 October 2026 using the owner's uploaded `khizar studio live.zip`, associated with their reported local checkpoint `dd1b0a1c646f4ee9353e66304414d69b359ba174`. The ZIP has no Git history, so that commit identity is owner-reported; its supplied files are the authoritative repair baseline. Imported checkpoint: `0844b82` / `checkpoint/local-dd1b0a1-import`. The original ZIP and extracted files remain preserved in the workspace.

Current branch: `feature/cinematic-motion-foundations`. The earlier baseline `checkpoint/pre-cinematic-d90e862` and documentation commit `5d62016` remain intact. All 137 supplied files other than merged AGENTS.md and generated/ignored next-env.d.ts match the import checkpoint byte-for-byte. The approved documents and all supplied AGENTS instructions were retained. Ten components contain substantive local updates; 59 additional source-file differences are line endings. See motion-audit.md for the import and repair evidence.

The owner authorizes checkpointing, documentation, and small motion-infrastructure repair batches. Show the repair results and testing evidence before proceeding to the shared visual environment. Do not push, deploy, modify main, or change live infrastructure without explicit approval.

## Non-negotiable constraints

- Preserve the existing project and its working functionality. No greenfield rewrite.
- Keep midnight navy, champagne gold (approximately #d6b780), neutral typography, architectural geometry, and original interface-based visuals.
- Study actual Puture clips before designing new cinematic scenes. Do not copy its branding, assets, or distinctive artwork. The full uploaded recording exceeds the download tool's 32 MiB transfer limit and has not been inspected.
- Text must settle and remain readable. Continuous motion should primarily affect decorative visuals; paragraphs must not continuously translate, fade, blur, or scale.
- Preserve case-study links, project images and content, concept-project disclosures, navigation arrows, progress, keyboard access, FAQ semantics, and immediate email access.
- Keep working principles truthful; do not substitute invented testimonials, metrics, or client results.

## Protected laptop contract

Keep `public/models/khizar-laptop-summit.glb`, `src/components/sections/Hero/LaptopScene.tsx`, and the scroll-progress contract in `BrowserShowcase.tsx` unchanged during infrastructure repairs. Preserve lid opening, camera positioning, screen alignment, animation clip selection, zoom, rotation, and exit behavior.

In the audited snapshot, BrowserShowcase writes normalized progress to a ref. LaptopScene reads it in useFrame; phase ranges are opening 0.03–0.35, zoom 0.36–0.55, turn 0.63–0.84, and exit 0.87–1. Verify these again against the latest local files. Baseline hashes are recorded in motion-audit.md.

## Architecture

Retain semantic HTML and isolated section components. Use one animation owner per property and element. Do not introduce a giant application-wide Canvas.

| Responsibility | Location | Intended approach |
| --- | --- | --- |
| Lifecycle and scope | src/hooks/useGSAP.ts | GSAP context and predictable teardown; preserve callers' cleanup contracts |
| Timing and depth tokens | src/design-system/motion.ts | Entrance/hold/transition phases and bounded perspective/depth |
| Scoped light/dark themes | src/styles/variables.css | Foreground, surface, border, focus, and color-scheme variables |
| Architectural atmosphere | src/components/background/ | CSS/SVG grids, lighting, and original interface geometry |
| Scroll coordination | src/hooks/useLenis.ts and providers/SmoothScroll.tsx | One clock and consistent navigation, with native fallback |
| Scene progress | Local controllers | Refs/CSS variables for continuous values; state for meaningful stage changes |

Prefer CSS transforms and SVG for decorative compositions. Retain Three.js for the laptop. Additional WebGL contexts require measured justification. Avoid layout reads/writes in tight scroll loops, permanent will-change layers, unnecessary blur filters, and offscreen render work.

## Section plan

Paths below are relative to src/components unless otherwise noted.

| Section | Files | Direction and acceptance |
| --- | --- | --- |
| Navigation | layout/Navbar.tsx, MobileMenu.tsx | Preserve anchors; visible focus, Escape, focus return, and appropriate menu focus behavior. Remain readable over ivory. |
| Hero | sections/Hero/Hero.tsx, HeroContent.tsx, HeroActions.tsx, HeroStats.tsx | Stable dominant headline and immediate CTA. Move surrounding grid and dimensional interfaces toward the laptop. No scrubbed paragraphs. |
| Laptop | sections/Hero/BrowserShowcase.tsx; protected scene and GLB | Connect environmental motifs around the existing animation. Preserve exact laptop behavior and useful static fallback. |
| ScrollStory | sections/ScrollStory/ScrollStory.tsx | Layered design surfaces transform into development structure, then a completed experience. Stable descriptions and separate holds. All content readable without motion. |
| Services | sections/Services/Services.tsx, ServiceCard.tsx; src/data/services.ts | Warm ivory editorial rows for Web Development, Creative Design, Motion & Animation. Supporting decoration, no extra pin, no nested reveals. |
| Projects | sections/Projects/Projects.tsx, ProjectCard.tsx | Large screens with controlled perspective. Preserve assets, disclosures, links, arrows, counter, and progress. Every project reachable by Tab, scroll, and buttons; vertical reduced-motion fallback. |
| About | sections/About/About.tsx | Return to navy. Balanced editorial typography and connected Strategy First / Premium Design / Performance composition. Fixed paragraphs and natural heading wraps. |
| Process | sections/Process/Process.tsx, ProcessStep.tsx | SVG path connecting Discover, Design, Develop, Launch. Animate connector/marker; descriptions remain in normal flow. Active stage does not rely on color alone. |
| Principles | sections/Testimonials/Testimonials.tsx | Calm typography and connected rules; preserve truthful working principles. |
| FAQ | sections/FAQ/FAQ.tsx, FAQItem.tsx | Reading-first layout. Preserve button/region relationships, expanded state, keyboard activation, and reduced-motion transitions. |
| Contact/footer | sections/Contact/Contact.tsx, layout/Footer.tsx | Converging decorative geometry behind stable final content. Email available immediately; links work from project routes. |

## Scroll budget and timing

Initially preserve the laptop scroll distance. Retain Projects pinning; ScrollStory is the only other candidate for a pin. Do not add pins to later reading sections. Start each cinematic concept near 22% entrance, 53% hold, 25% transition, then adjust through actual review. Do not add empty scrolling merely to satisfy ratios.

Carry lighting, geometry, alignment, and direction across boundaries. Use scoped section surfaces for the dark-to-light transition. Never make reading accessibility depend on animation completion.

## Small delivery batches and gates

1. **Source verification and checkpoint:** receive latest local source, compare all changes including untracked assets, record its origin/status, and checkpoint it on the feature branch. Gate: owner-local freshness established; no newer component overwritten.
2. **Lifecycle:** repair useGSAP scope/cleanup and Reveal teardown/reduced motion. Review homepage and case-study callers. Gate: repeated mount/unmount does not leak triggers or leave transformed/hidden content.
3. **Ownership and accessibility:** remove only duplicate controllers confirmed in the latest source. Fix reduced-motion ScrollStory and Projects presentation. Gate: every description, project, and CTA visible/reachable; ordinary animation behavior preserved.
4. **Review repair results:** report changed files, preserved laptop hashes, lint, TypeScript, build, and any runtime verification gaps. Stop before shared environment work for owner review.
5. **Shared environment:** tokens, grid, lighting, interface primitives, no extra Canvas/pins. Gate: accessible contrast, no obstruction or overflow.
6. **Opening scenes:** Hero → laptop → ScrollStory. Gate: stable copy and coherent forward/reverse handoffs; protected laptop matches baseline.
7. **Services and Projects:** editorial ivory and immersive screens. Gate: keyboard, arrows, resize, reverse scroll, concept disclosures and case studies intact.
8. **Remaining sections and final QA:** About, Process, principles, FAQ, Contact, Footer. Gate: stable reading, immediate CTA, no extra pins.

After each code batch run npm run lint, npx tsc --noEmit, and npm run build where possible. Record exact results; do not present lint or type checks as proof of runtime animation correctness. Browser QA must cover repeated route navigation, forward/reverse scroll, resize across 768/1024px, short windows, 200% zoom, mobile orientation, keyboard focus, live reduced-motion preference changes, hashes, browser Back, mid-scene refresh, slow loading, and WebGL failure. Profile before optimizing.

## Getting the required inputs

See local-source-and-reference-handoff.md for a Windows source ZIP procedure and Puture clip/frame extraction commands. Exclude secrets, node_modules, .next, and .git; include current source and public assets. Frames establish composition but cannot verify timing, so motion clips remain preferred.


## Infrastructure review status

Latest-local import and two repair batches are complete on the feature branch; see motion-audit.md for exact scope and checks. The laptop files and supplied ScrollStory remain unchanged. Horizontal Projects is retained for normal desktop motion, with a static reduced-motion alternative. No new cinematic composition has been implemented. Await the owner's reference video and review before shared visual environment work. Existing continuous text motion and reduced-motion Hero hydration warnings remain explicitly tracked for follow-up.
