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
