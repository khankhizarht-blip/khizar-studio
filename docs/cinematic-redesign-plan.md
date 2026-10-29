# Cinematic redesign: approved architecture and delivery plan

Approved by the owner on 29 October 2026. This document records direction, not completed implementation.

## Source gate and current scope

The source freshness gate was satisfied on 29 October 2026 using the owner's uploaded `khizar studio live.zip`, associated with their reported local checkpoint `dd1b0a1c646f4ee9353e66304414d69b359ba174`. The ZIP has no Git history, so that commit identity is owner-reported; its supplied files are the authoritative repair baseline. Imported checkpoint: `0844b82` / `checkpoint/local-dd1b0a1-import`. The original ZIP and extracted files remain preserved in the workspace.

Current branch: `feature/cinematic-motion-foundations`. The earlier baseline `checkpoint/pre-cinematic-d90e862` and documentation commit `5d62016` remain intact. All 137 supplied files other than merged AGENTS.md and generated/ignored next-env.d.ts match the import checkpoint byte-for-byte. The approved documents and all supplied AGENTS instructions were retained. Ten components contain substantive local updates; 59 additional source-file differences are line endings. See motion-audit.md for the import and repair evidence.

The owner authorizes checkpointing, documentation, and small motion-infrastructure repair batches. Show the repair results and testing evidence before proceeding to the shared visual environment. Do not push, deploy, modify main, or change live infrastructure without explicit approval.

## Non-negotiable constraints

- Preserve the existing project and its working functionality. No greenfield rewrite.
- Keep midnight navy, champagne gold (approximately #d6b780), neutral typography, architectural geometry, and original interface-based visuals.
- The three supplied Puture clips have now been studied and are the primary motion references; see the evidence and adaptation decisions below. Do not copy its branding, assets, or distinctive artwork. The oversized original recording remains uninspected; the review covers the supplied clips only.
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

Latest-local import and two repair batches are complete on the feature branch; see motion-audit.md for exact scope and checks. The laptop files and supplied ScrollStory remain unchanged. Horizontal Projects is retained for normal desktop motion, with a static reduced-motion alternative. No new cinematic composition has been implemented. The reference-study gate is now satisfied by the three compressed clips. That reference-study turn changed planning only. Phase 2 delivery is recorded below; section redesign remains pending. Existing continuous text motion and reduced-motion Hero hydration warnings remain explicitly tracked for follow-up.


## Primary motion reference study — 29 October 2026

This section updates the approved direction using actual supplied visual evidence. It supersedes earlier statements that the reference clips were unavailable. It does not authorize copying the reference artwork or modifying the protected laptop.

### Evidence and interpretation limits

Reviewed all three 1280×668, 24 fps clips through chronological frame sequences at 0.25-second intervals throughout their duration, with full-resolution spot checks. Clip 1 is 12 seconds, clip 2 approximately 11.96 seconds, clip 3 is 12 seconds. Contact sheets and extraction/provenance data are session scratch assets under /workspace/work/puture-study; they are research material, not site assets.

The recordings contain a phone view, a desktop view within a device mockup, and recording controls. The phone and desktop are not always at identical positions. Device bezels are recording presentation, not a proposal to surround Khizar's page with laptop/phone artwork. Times below are approximate offsets within each uploaded clip, not original-page scroll percentages. These sequences establish visible choreography and relative motion, not the site's source, exact easing curves, rendering technology, camera coordinates, pin lengths, or scroll mapping. Camera descriptions refer to the perceived result; equivalent results could be created by moving objects instead of a real camera.

| Clip and interval | Observed behavior | Design consequence |
| --- | --- | --- |
| 01 opening, 0–4.5s | Thick, luminous icon tiles change orientation and pass through a receding arrangement above/around the Hero. Near/far size differences and visible side faces create depth. An oblique grid and concentrated side light establish one environment. Hero content initially occupies a separate lower reading area. | Separate decorative depth from semantic text. Establish consistent perspective, lighting direction, and a clear reading zone rather than scattering unrelated cards. |
| 01 opening, about 4.5–7s | Hero copy leaves while tiles redistribute into a broad curved perimeter; the central space opens. The grid and side lighting remain recognizable. A centered statement arrives inside that opening. | Recompose existing objects and negative space across a scene boundary. Continuity comes from persistent geometry and changing arrangement, not repeated full-section fades. |
| 01 opening, about 7–12s | A centered statement holds briefly, then yields to another text composition. Tiles remain around it and later gather closer to the text area. The recording also shows animated word highlights. | Retain the perimeter-to-focus principle. Do not adopt word-by-word paragraph assembly or moving foreground objects through Khizar's reading zone. |
| 02 light/projects, 0–4s | Tiles and the grid persist as three pale service panels appear over the dark environment. The panels settle while background objects remain active. | Semantic content can stay still in front of active decoration. Keep Khizar's approved editorial service rows; do not copy the three-panel layout. |
| 02 light/projects, about 4–5.5s | Service panels move away; the same object field remains through an intermediate blue/lavender exposure into a pale environment. The grid reads increasingly as a ground plane with depth. | Carry geometry through a controlled lighting/background change. For Khizar, use navy → muted stone → warm ivory, with champagne accents rather than blue tiles or lavender. |
| 02 light/projects, about 5.5–8s | A centered heading and large dark media surface become the focal point in the light environment, with tiles pushed toward the perimeter. | Use one clear visual focal point and deliberately quieter surroundings. Do not reproduce the reference's claims, award text, or media content. |
| 02 light/projects, about 8–12s | Large project screens appear with perspective over the pale ground plane. On desktop, project copy sits to the side. A screen changes tilt/position as the next screen replaces it. | Screens should be prominent and move through controlled entry, inspection, and departure phases; copy and case-study access need their own steady presentation. |
| 03 closing_scene, 0–about 10.5s | The project sequence continues: landscape and portrait screens alternately tilt into place, become more upright for presentation, and tip/recede away as the next arrives. Descriptions use a consistent side position on desktop; phone layouts stack image and copy. Ground markings persist between projects. | Accommodate different image proportions without distorting them. Carry a common architectural ground/alignment system through project changes. Preserve gallery navigation instead of copying the reference's exact sequencing. |
| 03 closing_scene, about 10.5–12s | The last project and its text clear away. Pale ground remains, smaller tiles reappear low in the frame, and the environment begins tinting toward lavender. | Reuse a visual motif after a showcase to imply continuation. This is not evidence of a final contact/footer scene or a return to dark. |

Despite its filename, clip 03 does not show a final contact composition. Khizar's navy closing and convergence idea remains an original design proposal supported by general continuity principles, not an observed Puture ending.

### Original Khizar visual vocabulary

Use architectural bays, thin champagne edges, layered interface surfaces, structural rails, and restrained warm rim light against midnight navy. A shared off-center vanishing point and consistent key-light direction should connect the scenes. Avoid Puture's luminous blue icon cubes, icon set, exact curved tile arrangement, plus-sign ground pattern, typography, copy, device presentation, and project artwork. Replacing its blue with gold would not be a sufficient reinterpretation.

Begin with a bounded set of approximately 4–6 decorative surfaces on desktop and 2–3 on mobile; these counts are prototype budgets, not measured reference values. Prefer CSS perspective planes, SVG structure, and gradients. CSS is suitable for layered surfaces, not a claim to reproduce physically lit solid objects. If actual curved/volumetric shading proves necessary, evaluate a contained prototype separately; do not introduce a second live Canvas by default.

### Revised scene choreography

| Khizar scene | Adapted motion principle | Stable content and protected behavior |
| --- | --- | --- |
| Hero | Architectural interface fragments occupy upper/peripheral space above a receding bay grid. On scroll, fragments align and recede toward the laptop's environment; spacing and light establish the perceived camera movement. | Keep the headline, description, and CTA outside the decorative transform tree. No continuous text blur, scale, or drift. Replace existing text-scrub behavior only in the later Hero batch, with a deliberate readability improvement rather than restoring older code. |
| Laptop handoff | Continue the same light direction and architectural guide lines around the existing showcase. As the laptop completes its existing exit, background lines lead toward the next composition. | Preserve GLB, clip, camera, screen fit, opening/zoom/turn/exit phases, progress ref, and current scroll contract. No new transform on an ancestor that changes Canvas framing, sticky positioning, or pin calculations. Continuity is achieved around the laptop, not by changing its animation. |
| ScrollStory | Reuse a small family of interface surfaces: layered design planes align into structural development rails, then resolve into a completed interface. Transform their arrangement rather than replacing three flying cards with three differently styled flying cards. | Short Design / Development / Experience descriptions occupy a consistent untransformed HTML area. Prototype entrance/hold/transition phases; do not copy the reference's word assembly. Preserve supplied choreography as the checkpoint until its replacement passes QA. |
| Services and light handoff | Extend the architectural ground/alignment motif into a warm-ivory surface. Keep approved editorial rows, with one supporting composition responding subtly to the active service or focus. | Readable labels, descriptions, and focus states throughout; no card carousel requirement, no added pin. Do not wash text through intermediate colors of insufficient contrast. |
| Projects | Retain horizontal navigation and move large website screens through shallow perspective into a near-front-facing inspection pose. Use a persistent ground/shadow reference and quieter inactive screens. | Keep the current track controller, arrows, progress, counter, keyboard access, actual assets, and concept disclosures. In a future batch, apply extra depth to a screen wrapper rather than the paragraph/link container. Screens retain their aspect ratios; text is not continuously rotated/blurred. |
| About / Process | Let the environment resolve into restrained structural lines and a connected path. Motion marks relationships and progress. | Remove existing continuous paragraph drift in the corresponding readability batch. Descriptions stay in normal flow; no new camera/pinning spectacle for reading sections. |
| Principles / FAQ | Carry typography, surface color, and subtle rules from the environment. | Calm reading and functional accordion; decorative motion is optional and must not compete with answers. |
| Contact / Footer | Original navy return: a few architectural fragments settle around a quiet focal opening or aligned frame. Warm light creates a final connection to the opening. | Headline and email available immediately. Decorative convergence must not delay or obscure the CTA. No claim that this closing scene was observed in the clips. |

### Motion ownership and implementation constraints

- Use one scene controller per decorative composition, with shared tokens rather than a giant global timeline. Keep the semantic DOM and scroll-navigation behavior independent of decorative rendering.
- Do not animate a common ancestor of text, fixed navigation, sticky content, and the laptop Canvas to simulate a camera. Restrict perspective/camera-like transforms to dedicated decorative wrappers.
- In Projects, the existing track owns horizontal travel. A future dedicated screen wrapper may own perspective; hover must not compete for its transform. Treat an entire card translating during navigation separately from continuous paragraph animation while being read.
- The dark-to-light treatment should be a local boundary between real section surfaces, with guide geometry/light carried across. Keep readable content on settled surfaces; switch navigation theme from section visibility rather than making text inherit every interpolated scene color.
- Use normalized choreography phases, initially 0–.22 entrance, .22–.75 hold, .75–1 transition. These are Khizar starting values, not timings measured from the recording. Text remains settled during the hold; pause scrolling must leave usable content. Adjust scroll distance to the content, not recording seconds.
- Do not add pins beyond the retained desktop Projects and justified ScrollStory scene. Preserve the laptop's scroll budget initially. Mobile uses a simplified composition and normal reading flow; reduced motion exposes complete static content and working links.
- Keep persistent atmosphere lightweight. Activate decorative work only while relevant, favor transform/opacity on decoration, and profile before introducing lights/filters/render loops. Do not revive the gallery's removed always-running depth ticker.

### Next implementation batch and acceptance criteria

The next proposed batch is the shared visual environment only: extend motion tokens and scoped theme variables; implement isolated architectural grid/light/surface primitives in src/components/background; use a bounded preview composition to review their appearance. It should not replace the Hero, ScrollStory, or Projects choreography in the same pass. No scene code was written during this reference-study update.

Before accepting that batch: confirm distinct Khizar artwork, clean content/decorative separation, visible focus, contrast on navy and ivory, no new WebGL context or pin, static reduced-motion appearance, bounded mobile object count, and no layout shift. Keep the laptop's latest-local hashes unchanged. Then take Hero/laptop handoff, ScrollStory, and Services/Projects as separate reviewable batches with lint, TypeScript, build where possible, and runtime QA.

For future scene acceptance: check both scroll directions, stop at phase boundaries, leave each description on screen long enough to read, inspect every project and activate its links without racing an exit, test keyboard focus and live reduced motion, verify short/zoomed/mobile viewports, and confirm no orphan triggers or pins after route changes. Resolve the tracked Hero hydration warning and continuous text movement in their affected batches. The existing Google Fonts build failure remains a separate verification limitation; this documentation update does not fix it.


## Phase 2 delivered — shared cinematic environment

Owner approved infrastructure repairs and authorized this phase after reference-study commit 65753c6. Pre-phase checkpoint: checkpoint/pre-phase2-65753c6. Work remains on feature/cinematic-motion-foundations; no main change, push, deployment, or Phase 3 work.

### Files and responsibilities

| File | Responsibility |
| --- | --- |
| src/components/background/ArchitecturalGrid.tsx | Original SVG bay grid with an off-center convergence point and architectural boundary rails. Stable React useId prevents gradient-ID collisions. |
| src/components/background/AtmosphericLight.tsx | Champagne gradient light fields; no animated blur filters, images, or render loop. |
| src/components/background/InterfaceSurface.tsx | Three reusable decorative surface variants: blueprint, layers, structure; layered CSS planes, rails, and panel geometry, no text or controls. |
| src/components/background/SceneTransition.tsx | Local decorative boundary accepting from/to navy or ivory; prepares color continuity without wrapping/interpolating text. |
| src/components/background/CinematicEnvironment.module.css | Palette composition, perspective surfaces, grid mask, lighting, boundary and viewport adaptations. |
| src/components/background/CinematicEnvironment.tsx | Reusable scoped composition and single desktop scroll timeline; tone, transitionTo, animated props. |
| src/design-system/motion.ts | Additive cinematicMotion tokens for linear scroll progress, scrub, span, bounded travel/rotation, and future entrance/hold/exit proportions. Existing presets unchanged. |
| src/styles/variables.css | Additive scene palette/perspective variables. Existing semantic text and background tokens unchanged. |
| src/components/sections/Hero/Hero.tsx | Adds only the import and decorative sibling instance; existing Hero/laptop controllers and DOM content remain intact. |

### Usage and ownership

Place CinematicEnvironment inside a positioned/isolate section wrapper as a sibling behind the content. It is absolute, aria-hidden, pointer-events none, and contains no semantic information or focusable elements. Never put content inside this component. It does not transform its parent or modify the section's height. The Hero instance spans the existing wrapper; its masked 1250px field provides a bounded opening atmosphere that blends into the existing laptop environment, not a new global background controller.

Default props: tone="navy", transitionTo=tone, animated=true. A static instance uses animated=false. For future light sections use tone="ivory" and a matching settled semantic section theme. The environment's tone is decorative only: it deliberately does not change sibling text or navbar colors. SceneTransition prepares a background boundary; it is not yet the complete Services navy-to-ivory scene or a semantic theme switch.

One GSAP timeline moves dedicated surface shells, grid shell, and lighting shell across 1.2 viewport heights with scrub .65 and ease none. Inner surfaces retain CSS perspective while outer shells own scroll transforms, avoiding competing property owners. The root/content/laptop are never transformed by this controller. No pin, state update per scroll, ticker callback, autonomous floating loop, new Canvas, observer, or dependency was added. Scope and matchMedia revert through the repaired useGSAP hook. Future compositions should reuse these primitives/tokens rather than adding global motion to the page background.

Four surfaces are displayed on desktop, two below 1024px. Below 1024px and under reduced motion the environment is static and its GSAP timeline is not created. The same deterministic markup is server/client rendered; responsive presentation uses CSS rather than viewport-dependent hydration branches. Reduced-motion preference changes revert inline scroll transforms. Geometry stays peripheral and central grid visibility is masked to protect the existing reading area.

### Verification and boundaries

Both implementation batches passed lint and TypeScript checks; existing lifecycle tests pass. The production build was attempted after each batch and still exits 1 fetching Inter and Manrope from Google Fonts. The local dev compilation served successfully. This is not a successful production build and no font-source workaround was introduced.

Headless Chromium checked 1440×1000 desktop, 390×844 mobile, live reduced-motion changes, Tab/Enter contact navigation, CTA hit testing, mobile menu/Escape, and two case-study route cycles. Four/two decorative surfaces, no horizontal mobile overflow, existing 2/0 normal/reduced pin counts, stable decorative transforms after scroll settles, static reduced/mobile compositions, and no invalid-scope or uncaught page errors were verified. Desktop, scroll, reduced-motion and mobile captures are retained in /workspace/work/phase2 and desktop/mobile captures were displayed in chat.

Fresh reduced-motion loading still produces the previously documented hydration attribute warning in unchanged HeroContent/HeroActions/HeroStats Motion initial styles; no mismatch is shown in the environment subtree. Existing Three.Clock deprecation and software-WebGL screenshot readback warnings were observed. No new WebGL rendering was introduced, and these checks are not a device performance or cross-browser certification.

Laptop GLB, LaptopScene, BrowserShowcase and the entire Projects directory are unchanged from 65753c6. Existing Hero text exit/blur and later section paragraph motion were not rewritten under this bounded phase; those remain Phase 3/later readability work. The new environment adds no text animation.

### Remaining work and approval boundary

Phase 3 is not started. After owner review, develop the Hero-to-laptop handoff and ScrollStory as separate batches, including the planned stable reading holds and the pre-existing Hero hydration issue. Future Services work must supply a complete accessible ivory semantic theme and navbar treatment before activating a light environment; keep the editorial rows and original assets. Reuse background motifs and primitives while preserving the laptop contract, Projects navigation, reduced motion, and scroll budget. Evaluate measured device cost before increasing geometry or considering additional WebGL.
