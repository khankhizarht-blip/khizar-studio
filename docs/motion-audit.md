# Motion audit and baseline

Date: 29 October 2026. Audited source: d90e862161d0e24aff7ad4e9fd2dd206ab2e54e8.

## Provenance and limitations

The available repository was clean on branch work. Its remote points to khankhizarht-blip/khizar-studio. The owner subsequently reported newer local animation updates; those files are not present. Findings describe this snapshot and must be revalidated against the latest local source before repairs.

The desktop recording was downloaded and sampled as contact sheets. It shows the laptop, recurring cards, and substantial gaps. Recorded copy/layout differs in places from this checkout; it is not proof of current source behavior. The Puture recording could not be downloaded because it exceeds 32 MiB. Its animation style has not been directly verified. No interactive browser or cross-browser audit has been completed.

## Checkpoint

- Feature branch: feature/cinematic-motion-foundations.
- Baseline branch: checkpoint/pre-cinematic-d90e862 at the audited commit.
- No main-branch change, push, or deployment authorized.
- This preserves only the received snapshot. Create another checkpoint after receiving and verifying the owner's latest local project.

Protected SHA-256 hashes for the received snapshot:

```text
a5a150faf7cef1c73db3b074370487c467e1419de6493926ddb6c3d9bf0a1955  public/models/khizar-laptop-summit.glb
f3613ca7b38dbea9021dd4705205a29250843e15f771bab150b8d5df544e83ae  src/components/sections/Hero/LaptopScene.tsx
3c1f0cb04c80b24c2d7f29e102ba3538ee2f86d96b1dc883325db0d21e4cfd24  src/components/sections/Hero/BrowserShowcase.tsx
```

## Homepage and controllers

Confirmed order: Navbar, Hero (including laptop), ScrollStory, Services, Projects, About, Process, Testimonials (working principles), FAQ, Contact, Footer.

| Controller | Activation and range | Ownership |
| --- | --- | --- |
| Hero/Hero.tsx | >=768px and no reduced motion; top top → bottom top; scrub .7 | Circle scale/opacity; intro content y/opacity |
| Hero/BrowserShowcase.tsx | >=768px and no reduced motion; top top → bottom bottom | Progress ref and progress bar; 350svh wrapper with sticky 100svh viewport, not GSAP pin |
| ScrollStory/ScrollStory.tsx | >=768px and no reduced motion; top top; +=200%; pin; scrub 1 | Opening, cards, orb, ending, progress |
| Services/Services.tsx | No reduced motion; heading top 82%, cards top 85%; once | Heading children and card wrappers |
| Projects/Projects.tsx introduction | No reduced motion; top 75%; once | Intro and gallery y/opacity |
| Projects/Projects.tsx track | >=1024px and no reduced motion; top top; overflow distance; pin; scrub 1 | Track x, progress, counter, active index |
| animations/Reveal.tsx | Each instance; top 85%; once | y 48→0 and opacity 0→1 over .8 seconds |

Two GSAP pins plus the sticky laptop. Reveal is used in Services, Projects, About, Process, principles, FAQ, Contact, and case-study sections. Motion/CSS also drive mount and hover effects. Do not confuse unused components with active homepage behavior.

## Confirmed code findings in this snapshot

1. **Lifecycle:** hooks/useGSAP.ts does not establish gsap.context or scope. It only runs callback-returned cleanup. Reveal returns none, so tween/trigger lifecycle is not tied to unmount. Potential stale work needs runtime validation.
2. **Reduced motion:** Reveal has no preference check. CSS duration overrides do not stop JavaScript-driven GSAP motion.
3. **Duplicate ownership:** Services animates card wrappers also controlled by ServiceCard's Reveal. Projects animates gallery entrance and nested Reveal wrappers; vertical triggers are unsuitable for identifying visibility along the horizontal track.
4. **Projects fallback:** desktop CSS retains horizontal overflow-clipped layout while reduced motion disables track controller. Buttons/focus handlers rely on that controller and return without it. Later projects need a readable vertical fallback.
5. **ScrollStory fallback:** desktop overlapping composition remains when its timeline is disabled; mobile alternative stays hidden. Provide a deliberate static composition.
6. **Reading holds:** last story card settles around timeline 1.39, first starts exiting at 1.5; all three fully settled together for roughly .11/2.8 (~4%). Ending finishes entering at timeline end with no dedicated hold.
7. **Laptop resource risk:** CSS hiding does not prevent component mounting; default Canvas loop and GLTF preload may spend resources while hidden/offscreen. Measure before modifying. Preserve model/controller during repair batches.
8. **Scroll coordination:** Lenis uses GSAP ticker with seconds→milliseconds conversion and ScrollTrigger.update. Cleanup destroys Lenis and removes ticker callback. Native scrollTo smooth calls/anchors are separate. Preference is checked only at mount. HashScroll contains timed corrections but is not mounted.
9. **Viewport risk:** ScrollStory min-height 680px and Projects min-height 700px can constrain short/zoomed windows. Runtime verification required.
10. **Documentation drift:** LoadingScreen returns null and EntranceProvider always reports ready. README still describes loading/entrance coordination.
11. **Visual continuity:** independent dark cards and fixed-offset background lights do not create scene-to-scene geometry continuity. Services lacks the approved ivory environment.
12. **Navigation:** mobile menu supports Escape through Navbar, but lacks explicit focus containment/return. Footer hash-only links should be checked from case-study routes.

## Baseline verification

Phase 1 commands on unchanged source:

- npm run lint: passed (exit 0).
- npx tsc --noEmit: passed (exit 0).
- npm run build: failed (exit 1) fetching Inter and Manrope via next/font/google. Do not claim production build success. No source workaround was applied.
- Browser animation, cross-browser, performance profiling: not performed.

## Documentation batch verification — 29 October 2026

- Added the approved architecture, audit, and Windows source/reference handoff guide; appended project-specific instructions to AGENTS.md without removing its original Next.js instructions.
- npm run lint: passed, exit 0.
- npx tsc --noEmit: passed, exit 0.
- npm run build: failed, exit 1; next/font could not fetch Inter and Manrope from Google Fonts, matching the baseline failure.
- git diff --check: passed.
- All three protected laptop file hashes match the baseline above.
- Application source, dependency inputs, and public assets remain unchanged. No browser correctness claim is made for this documentation-only batch.
- Application repairs remain pending latest-local-source verification. New cinematic scene design additionally requires actual Puture clips. No shared visual environment work has begun.

## Repair evidence required

For each batch record source checkpoint, changed files, exact check results, preserved laptop hashes, runtime observations, and remaining risks. Verify trigger cleanup through repeated route visits/remounts, no duplicate property ownership, static reduced-motion content at desktop/mobile widths, all project links reachable, stable reading text, live preference changes, and no stale pin spacers after resize. Only then proceed to the shared environment after owner review.


## Latest local source reconciliation — 29 October 2026

The owner supplied `khizar studio live.zip` and reported local commit `dd1b0a1c646f4ee9353e66304414d69b359ba174` (Checkpoint before cinematic redesign). The archive has no Git history; the commit identity is reported, while its file contents were verified directly.

ZIP SHA-256: `df9f5eed5a87e3a11f87353887715d754a3c5ccb20bed86a4d1d3e634230dfd8`.

Imported at `0844b82`; checkpoint branch `checkpoint/local-dd1b0a1-import`. Original d90e862 checkpoint and 5d62016 approved documentation remain intact. No tracked project files were absent from the ZIP (excluding new cloud docs). The source checkpoint matches 137 supplied files byte-for-byte; AGENTS.md was merged to retain approved guidance, and next-env.d.ts remains ignored/generated. The intact archive and extracted source are retained under workspace attachments/work.

Substantive local updates retained: HeroContent, HeroActions, ScrollStory, Services, Projects, About, Process, Testimonials, FAQ, and Contact. Another 59 differences were CRLF/LF only, including LaptopScene. Dependency inputs, GLB, and BrowserShowcase are unchanged. No older section implementation was substituted.

### Revised findings against the latest source

- ScrollStory already fixes its desktop reduced-motion fallback. Retained its new choreography, counter, and +=290% pin unchanged. Earlier overlapping-fallback and timing findings describe d90e862, not this imported version.
- Projects adds depth, nearest-card detection, scroll multiplier 1.3, and scrub .85. Retained these settings and gallery content/navigation.
- Services and Process have new parent-controlled entrances alongside existing nested Reveal wrappers. Disabled only the redundant child reveals; kept wrappers and parent timelines.
- HeroContent adds an exit on the shared text group, competing with the older Hero.tsx timeline on the same group. Removed the older content tween and retained the latest exit; circle remains animated.
- New About paragraphs still have continuous scrubbed movement. Other imported text-bearing scenes also use scrubbed entrances. These are retained local choreography, not new motion added by this repair. Their readability needs explicit visual review before redesign; this batch does not claim full readability QA.

### Protected latest-local hashes

```text
a5a150faf7cef1c73db3b074370487c467e1419de6493926ddb6c3d9bf0a1955  public/models/khizar-laptop-summit.glb
9abb42e1ec1f0284650ffb56ee666cd449cceb0617541a245cea2fde2d85081b  src/components/sections/Hero/LaptopScene.tsx
3c1f0cb04c80b24c2d7f29e102ba3538ee2f86d96b1dc883325db0d21e4cfd24  src/components/sections/Hero/BrowserShowcase.tsx
```

LaptopScene's different hash versus Phase 1 is exclusively its supplied CRLF line endings. All three files match the ZIP and imported checkpoint after repairs. Opening, clip, camera, screen alignment, and progress ranges were not edited.

### Repair batch 1 — 606b68e

- useGSAP now creates a scoped GSAP context and reverts it on teardown, including callback-returned cleanup.
- Reveal uses matchMedia to disable JS animation for reduced motion and revert on live changes. Added an opt-out preserving the original wrapper/standalone default.
- Services, Projects, and Process opt out of redundant child reveals while retaining their updated section controllers.
- Removed the older Hero content-group tween competing with the newer HeroContent controller.
- Lenis now responds to live preference changes and removes its ticker callback/destroys its instance when reduced motion is enabled.
- Added Node regression checks exercising the actual hook effect against real GSAP: restored state, caller cleanup, and no accumulated animations after repeated setup/teardown. These isolate the effect contract; they are not a React/browser integration test.

Import baseline and batch 1: lint and TypeScript pass; production build fails fetching Inter and Manrope from Google Fonts, as before. Lifecycle checks pass.

### Repair batch 2

- Projects retains horizontal pinning for desktop/no-preference, with a vertical, unclipped list and hidden scroll controls for reduced motion.
- Depth updates follow the horizontal tween, including scrub catch-up, instead of running continuously on a ticker. Layout coordinates avoid using perspective-transformed bounds as feedback. Nearest-card state, arrows, links, and indicators remain.
- Gallery uses overflow-clip to prevent native horizontal focus scrolling from competing with the transformed track. Browser testing exposed this focus issue with overflow-hidden.
- Process and working-principles selector strings are scoped to their own mounted sections.
- Project and Process Motion hover variants are disabled for reduced motion; existing normal hover effects remain.

Lint, TypeScript, and lifecycle regression checks pass. Production build still fails fetching the two Google Fonts. Browser results are recorded below after completion. No visual redesign, new dependencies, push, or deployment.


### Browser verification and remaining limits

Used installed headless Chromium with the local Next.js development server. Checks passed:

- Desktop reduced motion at 1440×1000: both project wrappers have opacity 1, remain within the viewport, form a vertical column, and have no track transform; horizontal controls are hidden. ScrollStory's cinematic scene is hidden in favor of its supplied static fallback. No pin spacers remain.
- Normal desktop: two expected GSAP pin spacers; Next moves the gallery track to -976px, Previous becomes enabled, and focusing the second project brings its link fully into view (approximately x=833–1018).
- Live preference change to reduced motion restores the vertical layout and removes pin spacers.
- Case-study route returns to the homepage correctly; reduced-motion headline lines all compute to opacity 1.
- Mobile reduced motion at 390×844: vertical projects and document width equal to viewport width (390px), with no horizontal page overflow.
- Two normal-motion homepage → Summit case study → homepage cycles: spacers go from 2 to 0 to 2 each cycle; no accumulating visible pin spacers.
- Successful browser runs recorded no uncaught page errors. These checks are not a comprehensive cross-browser, screen-reader, performance, or full-site visual audit.

The development console reports a hydration attribute warning in existing Hero Motion markup when reduced motion differs between server and client initial rendering, plus a Three.Clock deprecation warning. Tested headline content is visible, but these warnings remain unresolved; no claim of a warning-free runtime. Existing continuous paragraph motion (notably About) still needs the approved readability review. Cinematic scene design remains paused for actual reference clips.

Final batch checks: npm run lint exit 0; npx tsc --noEmit exit 0; node --test tests/motion-lifecycle.test.mjs exit 0; git diff --check exit 0. npm run build exits 1 fetching Inter and Manrope, matching import baseline and every repair batch. No font source workaround or dependency changes were made.

The browser workflow scripts and command logs are retained in /workspace/work/khizar-audit for this session. Preview server is stopped after QA. No push, deployment, main-branch modification, or shared visual environment work performed.


### Final scope-lifetime follow-up

Console review after route QA exposed GSAP Invalid scope warnings during teardown because React clears ref.current before effect cleanup. useGSAP now captures the mounted scope element when creating its context, instead of retaining the mutable ref as the selector scope. Repeated the two normal-motion route cycles with an explicit Invalid scope console assertion: passed, no invalid-scope warnings and no uncaught page errors. Lint, TypeScript, lifecycle tests, and diff checks pass after this correction; production build remains blocked by the same Google Fonts downloads. Existing Hero hydration and Three.Clock warnings remain distinct from this corrected lifecycle issue.


## Reference evidence received — 29 October 2026

The three compressed Puture clips are now the primary motion-design references. Studied chronological frame sequences across all three clips at 0.25-second intervals and full-resolution spot checks. Findings, clip-relative timestamps, interpretation limits, original Khizar adaptations, and next-batch acceptance criteria are recorded in cinematic-redesign-plan.md. Earlier statements that actual reference motion was unavailable describe the historical audit; they no longer block reference-informed planning. The oversized original recording was not inspected.

- puture_01_opening_3d.mp4: 12.00s, 1280×668, 24fps. SHA-256 51018ddaeac0cf11bc264f90c9afd542afdad958910daff86f3ab98ef7f0a6d8.
- puture_02_light_projects.mp4: approximately 11.96s, 1280×668, 24fps. SHA-256 eed8fe6a159b02244b51135a7fac746a8abf33d0e797bb85c3c9eabee6c51d66.
- puture_03_closing_scene.mp4: 12.00s, 1280×668, 24fps. SHA-256 f11c25630028d179ef543a344c21cabe9b7753bd21f1da45197a7d99021380df.

Observed: persistent tile/grid environment, perimeter-to-center recomposition, dark-to-light exposure with retained objects, and project planes tipping into and away from a steadier presentation pose. Camera movement is an appearance inferred from relative movement, not verified implementation. Clip 03 continues the work gallery and clears into another atmosphere; it does not establish a final contact scene.

Documentation-only update. Application source, dependencies, public assets, laptop contract, and horizontal gallery unchanged from f5d83ef. Protected latest-local hashes remain identical. Validate with git diff --check and a changed-file scope review; application checks are not rerun for unchanged source. Previous passing checks and the Google Fonts build failure remain the last application verification results. No push, deployment, main-branch change, or new visual scenes.


## Phase 2 implementation and QA

Checkpoint: checkpoint/pre-phase2-65753c6. Primitives commit 897f5e9. New Hero environment is a sibling decoration, with its architecture/changed-file list and usage recorded in cinematic-redesign-plan.md. Laptop GLB, LaptopScene, BrowserShowcase and all Projects files match 65753c6 byte-for-byte. No dependencies, additional pins, body-text controllers, or WebGL contexts added.

Per-batch lint/TypeScript checks pass; node --test tests/motion-lifecycle.test.mjs passes. Production build attempts reproduce only the known next/font errors fetching Inter and Manrope; local dev page compiles and responds 200. git diff --check passes.

Browser checks in installed headless Chromium:

- Desktop 1440×1000: 4 displayed surfaces; 2 existing pin spacers. Scroll changes decorative transforms; they remain unchanged after settling (no idle transform loop).
- Live reduced motion: surface shell transform reverts to none, remains static across scroll; 0 pin spacers as in the existing accessible fallback. Environment is aria-hidden/pointer-events none, contains no focusable elements or paragraphs/headings, and CTA center hit-test reaches the CTA.
- Mobile 390×844: 2 surfaces, document width 390px, static decoration with either motion preference.
- Keyboard Tab reaches the contact CTA, Enter navigates to #contact. Mobile menu opens above decoration and Escape closes it.
- Two homepage/case-study cycles: 1 environment/2 pins on home, 0 environments/0 pins on case study; no invalid-scope warnings or uncaught page errors.
- Fresh reduced-motion load: pre-existing hydration warning originates in unchanged Hero Motion initial style attributes. New scene markup is deterministic and shows no mismatched attributes in that trace. Existing Three.Clock deprecation and Chromium software-rendered WebGL readback warnings remain.

Captures: desktop-hero.png, desktop-scroll.png, desktop-reduced-motion.png, mobile-hero.png under /workspace/work/phase2. Scripts and logs are session QA artifacts in that directory; desktop/mobile captures were displayed in chat. These tests do not establish Safari/Firefox, screen-reader, real-device performance, or production build success.

No Phase 3 scene changes. Existing scrubbed Hero exit and About paragraph movement remain tracked for subsequent readability work, along with the existing hydration warning. Preview server stopped after verification; no push, deploy, or main modification.
