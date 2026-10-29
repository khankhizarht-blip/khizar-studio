# Khizar Studio — The Open Frame
## Visual direction 01 · Proposed, not approved

This is a visual-design and art-direction proposal, not a new application implementation. The current site remains at `2ca49ed` on `feature/cinematic-motion-foundations`. Batch A refinements and Batch B are paused. No application source, model, route, dependency, build configuration or live infrastructure is changed by this study.

The deliverable contains ten composition states for seven connected experiences, with separate desktop and mobile renders. Multiple states do not mean ten new sections or ten pins. Static artwork was built in an isolated design document outside the application repository and rendered with the existing brand fonts. Its native details elements and sample links demonstrate layout intent; it is not a production website or a working motion prototype.

## 1. Diagnosis: change the composition before animating it

The current source and captured Hero/laptop sequence establish a functional foundation worth retaining. The structural issue is that most visual units are separate text containers with decorative effects applied afterward. This restricts choreography to moving, scaling or fading containers rather than transforming a composition.

| Current composition | Structural change proposed | What must remain |
| --- | --- | --- |
| Large centered Hero, four descriptive stat cards, small peripheral panels | A left reading rail and a substantial architectural aperture on the right; descriptive attributes become one quiet baseline. On mobile the aperture follows the CTA rather than competing beside the heading. | Brand, complete message, both Hero links, four descriptive attributes, immediate access |
| Laptop inside its own long sticky section, with generic shapes around it | A purpose-built exhibition stage aligned with the opening aperture and one ground reference; remove unrelated panel clutter during inspection. Existing camera/frame remains the spatial anchor. | Exact GLB, hinge clip, screen fit, camera, scroll ref, stage ranges and current fallback |
| ScrollStory has three moving cards, followed by another Services card grid | One capabilities composition transforms Design → Development → Experience, then resolves into real service rows on ivory. Separate the short visual explanation from the full service descriptions/features. | Both sets of useful content; all three service descriptions and nine features |
| Projects splits images and descriptions inside rounded cards | A large website screen becomes the dominant object; description, disclosure and CTA sit outside its perspective transform. Use project-native image proportions. | Two actual concepts, images, case studies, arrows, progress, counter and keyboard access |
| About combines editorial text with another three-card values grid | Two editorial columns above a common value axis. A shared line links Strategy First, Premium Design and Performance without enclosing each value. | All three introduction paragraphs and all three values/descriptions |
| Process presents four cards with similar scroll entrances | One four-node route with descriptions in normal flow. Active marker and connector carry progress; content does not wait for its node. | Discover, Design, Develop, Launch and every full description |
| Principles and FAQ repeat cards, borders and entrances | A calm ivory reading spread: principles on one side, accessible FAQ on the other; stacked on mobile. | Truthful working principles, all three FAQ answers, accessible accordion |
| Contact is another centered panel, footer feels separate | One final navy composition, an aligned open frame, immediate email action, then an integrated footer. | Existing contact message, email, work link, navigation and copyright |

Audit basis: current source and the recorded/reviewed current Hero/laptop captures. This is a composition audit, not a new cross-browser runtime audit of the whole existing site. It does not invent performance measurements or client outcomes.

## 2. Art direction: The Open Frame

The recurring object is an **open architectural frame**, not a square icon tile. It changes role: aperture → laptop stage → connected interface structure → editorial rule → project ground → value axis → process path → FAQ divider → final contact frame.

Continuity should be perceived through alignment, material, light and geometry. It does not require one object to live in an application-wide Canvas. A rail can leave one composition at the same position and angle at which the next composition receives it. Match the handoff, rather than placing identical decoration behind every section.

### Typography and layout

- Retain Manrope for display headings and Inter for reading/interface text. Mockups use locally bundled copies of these existing fonts, with their OFL licenses, solely in the design package.
- Desktop: 12-column composition, roughly 80px outer margin at 1440px, approximately 1280px content width, large spatial artwork permitted to extend beyond the content rail.
- Hero display: approximately 80–96px desktop, 44–48px at 390px mobile; line height 1.05–1.12. Avoid using the largest display size for every section.
- Section headings: roughly 48–66px desktop, 32–39px mobile. Process and reading sections can be smaller.
- Body: implementation target 16–18px desktop, 16px mobile, line height 1.65–1.85, readable measure around 45–65 characters. Some dense storyboard supporting labels are smaller; production reading copy should follow the target rather than screenshot scaling.
- Use sentence case, restrained tracking, and small chapter labels. Letter-spaced metadata is supporting hierarchy, not a paragraph style.
- Keep primary actions substantial and obvious. The proposed straighter button/frame corners replace pervasive pill/card styling; this is a visual choice for review, not an already approved token change.
- Mobile is an editorial re-composition, not a scaled-down desktop scene. Stack text, then a bounded object, then the next readable surface. Never put mandatory copy inside a tilting plane.

### Color and light

| Role | Proposed color | Use |
| --- | --- | --- |
| Midnight navy | #0b1018 | Hero, laptop, About, Process, closing |
| Warm ivory | #eee9df | Services, project gallery, principles/FAQ |
| Primary dark-surface text | #f4f1e9 | Headings/body on navy |
| Secondary dark-surface text | #b4bec8 | Reading copy on navy |
| Primary ivory text | #152233 | Headings/body on ivory |
| Secondary ivory text | #4c5965 | Reading copy on ivory |
| Champagne | #d6b780 | Warm rim light, primary CTA surface, fine geometry |
| Bronze on ivory | #725735 | Small text accents and active markers on light backgrounds |

Calculated solid-color contrast: ivory text/navy 16.89:1; secondary/navy 10.11:1; navy text/ivory 13.26:1; secondary/ivory 5.94:1; bronze/ivory 5.54:1; dark CTA text/champagne 9.37:1. These are palette checks, not a full accessibility certification of gradients, imagery or focus states.

Use a consistent warm key light from the upper/right side, a cooler navy fill and restrained contact shadows. Keep actual 3D laptop lighting unchanged unless separately approved; surrounding light fields should complement it. Avoid full-screen blur, blooming gold everywhere or flat translucent panels filling the reading area.

The navy-to-ivory transition passes through a warm stone exposure while guide geometry persists. Semantic content belongs on settled surfaces. Do not interpolate its foreground color through low-contrast intermediate frames. A later ivory-to-navy boundary uses the same guide line in reverse. The quiet principles/FAQ spread introduces a second deliberate ivory interval before the final navy close.

### Spatial vocabulary

Use open frames, three or four structural ribs, one or two layered interface planes, connective rails, shadows and light pools. Fewer larger relationships should replace many equally weighted small cards. Do not retain a permanent swarm behind all content.

The ten mockup states use the existing Summit/Creative Agency artwork and an unaltered screenshot crop of the existing laptop. The laptop mockup is a placement/composition study, not a model render, camera modification or proof of a new animated GLB. Mobile deliberately shows the current browser-showcase concept instead of pretending the desktop model already runs there.

## 3. Desktop and mobile storyboard

### Experience 1 — Immersive Hero + existing laptop

**Desktop states 01A/01B:** A stable left headline and description occupy their own reading rail. The right-hand aperture has meaningful scale and depth, with a few interface planes interacting with its frame. Attribute copy is a quiet baseline, not four cards. As the user scrolls naturally, the aperture opens visually and its rails align around the protected laptop stage. In the laptop inspection state, reduce the amount of surrounding detail; the working screen should be the most important object.

**Mobile:** Preserve headline, description and both actions first. Place a single simplified aperture below them so typography never wraps around an object. The existing static browser-showcase fallback follows in normal flow. Do not add a 350vh mobile sequence or hide the CTA behind an entrance.

**Choreography:** initial decorative hold through approximately the first 20% of the natural Hero travel; depth change and controlled object reorientation during passage; settle the environment by the laptop's start. During laptop .03–.35 opening, .36–.55 zoom, .63–.84 turn and .87–1 exit, coordinate only surrounding rails/light. Hold those decorations still during the .55–.63 inspection interval. The model and camera retain their existing controller and coordinates. Do not move an ancestor of the Canvas to manufacture a new camera.

**Specific improvements over Batch A:** artwork gets its own designed region instead of being cropped randomly at the viewport edges; no ring plus stat-card plus panel hierarchy competing with the headline; use a coherent aperture rather than four independent panel props; take the model's existing framing as the constraint, not something to override; design the exit composition to feed capabilities before any replacement scene is coded.

### Experience 2 — Capabilities → warm ivory Services

**Desktop states 02A/02B:** In the dark capability state, a persistent set of planes and ribs changes topology. Design: layered surfaces align. Development: the same planes rotate into structural elements and connected rails. Experience: the structure resolves into one completed interface. Short HTML labels remain on a steady reading rail. The terminal horizontal rail continues into the full-width editorial service dividers as navy brightens through stone to ivory.

Services then use three numbered rows with the actual descriptions and all features. A supporting composition may be shared by the rows; it must not become three new bordered cards. A service's optional arrow must be a real, labeled contact link, not a fake control.

**Mobile:** Three short explanations and their stable small compositions appear in reading order; no overlapping absolute text or forced pin. Service descriptions/features remain fully available in vertical rows. The visual transition is shorter and can be a simple settled surface boundary.

**Choreography:** each capability moment starts near 20% arrival / 60% stable hold / 20% transformation. Use these as normalized intervals, not seconds. The entire capability sequence may reuse the current ScrollStory pin budget at a shorter initial target around 180–200vh added travel, subject to readability testing. No Services pin. The final design must be reviewed at ordinary scroll speeds and with scrolling paused in every hold.

### Experience 3 — Large immersive project showcase

**Desktop states 03A/03B:** One 900–1100px-wide website image dominates the light ground. Retain full 1600:1000 source proportions with contain behavior; do not stretch or crop away important site content. Both existing concepts have their own inspection state. Title, year/category, description, concept disclosure, technology list and case-study action sit on a stable HTML rail outside the perspective wrapper. The gallery's real counter, arrows, progress and focus navigation remain.

**Mobile:** Both projects form a normal vertical sequence. Screens fit the available width with only a shallow decorative tilt or none. Each project immediately has its description, disclosure and working case-study link beneath it. Never require a swipe or horizontal scroll to discover the second concept.

**Choreography:** entry image tilt roughly 6–10 degrees becomes approximately 0–2 degrees in the inspection pose. Departure tips/recedes the image as the next image enters along the same spatial axis. At least 55–60% of each local project interval should be a near-front inspection state; do not keep rocking an image while somebody reads its embedded text. Buttons/focus must be able to take the visitor to a project and leave it in a useful inspection pose. No automatic time limit or autoplay. Keep the existing horizontal controller/public behavior; extend visual wrappers and travel mapping only after approval and tests.

### Experience 4 — About and studio values

**Desktop state 04:** Return to navy. A deliberate two-column editorial composition holds the heading on one side and all three existing paragraphs on the other. Strategy First, Premium Design and Performance share a single gold axis with three small nodes. Each value keeps its full copy, without an enclosing card.

**Mobile:** Heading, all paragraphs, then values along a vertical axis. Use natural reading flow and sensible heading wraps.

**Choreography:** a ground line from Projects resolves into the value axis. Restrained line/marker movement may indicate progress; paragraphs never scrub, blur or change scale. No pin. Stop decorative movement near the main reading zone rather than animating all section children.

### Experience 5 — Connected four-stage Process

**Desktop state 05:** Discover, Design, Develop and Launch form one route. Four descriptions are visible, each tied to its node. The active node is indicated by outline/fill plus its number, not color alone. This is a process diagram with content, not four service cards in another arrangement.

**Mobile:** The route turns into one vertical spine. Preserve the exact step order and all copy. No accordion is required to read the process.

**Choreography:** the marker follows document scroll across the path, pausing visually at each stage; line growth connects the stages. Text stays settled and available. No pin and no hiding inactive stages. Hover/focus may emphasize a node but cannot move its paragraph.

### Experience 6 — Calm working principles and FAQ

**Desktop state 06:** An ivory editorial spread: existing truthful principles on the left, FAQ on the right. Use rules and typographic hierarchy, not a new collection of cards or false testimonials. One answer is expanded in the mockup to show reading layout; other answers remain present in the source and available on expansion.

**Mobile:** Principles precede FAQ. Native document flow and full-width controls take priority over spatial effects.

**Choreography:** at most an understated boundary/line arrival; no continuously moving artwork near answers and no reading gate. Accordion interaction is keyboard accessible and respects reduced motion. All answers remain readable for as long as needed.

### Experience 7 — Cinematic Contact + integrated Footer

**Desktop state 07:** Return to navy and reuse a quiet version of the opening aperture. The current final message, primary email action, work link and visible email are foreground content from arrival. Footer navigation and studio copy form the base of the same composition.

**Mobile:** Stable heading, paragraph and email actions first. One small frame may settle below/beside them, followed by a compact footer. No mandatory animation before contact.

**Choreography:** decorative fragments align into the final frame within a short boundary interval, then stop. The message and links never wait for convergence. This closing is original Khizar direction: the third Puture clip does not contain evidence of a final contact scene.

## 4. Continuity, reading and scroll budget

Seven experiences are not seven pinned scenes. Initially retain the existing laptop sticky distance and Projects desktop pin; repurpose, rather than add to, the existing ScrollStory/capabilities pin. Services, About, Process, principles, FAQ and Contact remain normal document flow. If the capability story does not earn its pin in review, remove that pin instead of stretching scroll distance to fill animation.

Coordinate geometry on local decorative layers with shared perspective/light tokens and matched boundary positions. Keep headings, copy, links, navbar and essential controls outside camera-like transforms. One controller owns each decorative transform. A rail may be represented by different SVG nodes in neighboring components; continuity is visual and coordinated, not dependent on a giant global scene graph.

A stable hold means full-opacity, unblurred, untransformed semantic text, with no advancing carousel deadline. Pausing the scroll must produce a usable composition. Users who jump through navigation, refresh, use browser Back or focus a case-study link must not land in invisible content. Reduced motion presents complete static compositions with no pinned cinematic dependency. Mobile uses fewer surfaces and shallow/no perspective; the working laptop fallback remains.

The proposed holds are design starting points. A still mockup cannot prove easing quality, GPU performance or total scroll feel; these require the approved implementation and a subsequent normal-speed visual review. Do not claim a static storyboard is an implemented animation.

## 5. Content and functionality preservation register

| Essential content / behavior | Source / destination |
| --- | --- |
| Brand, canonical URL, public email | src/config/site.ts; keep Khizar Studio and khankhizarht@gmail.com |
| Home, Projects, Services, About, Contact navigation | src/config/navigation.ts; preserve /, #projects, #services, #about, #contact; logo remains Home |
| Hero headline, description and both actions | HeroContent.tsx / HeroActions.tsx; retain full meaning and current working hrefs |
| Purposeful, Intuitive, Optimized, Responsive attributes and labels | src/data/stats.ts; display as an editorial baseline, do not turn into invented business metrics |
| Existing laptop and mobile/reduced alternative | LaptopScene.tsx, BrowserShowcase.tsx and GLBs; protected assets/controller |
| Design / Development / Experience short content | ScrollStory.tsx; keep useful descriptions in capabilities, not replaced by graphics alone |
| Three service descriptions and all nine features | src/data/services.ts; preserve in ivory rows |
| Two independent website concepts, images, descriptions, technology, year, case-study content | src/data/projects.ts and /projects/[slug]; no new client claims or unsupported results |
| Project navigation | Preserve arrows, progress, counter, keyboard focus movement, reverse scroll, reduced-motion vertical list |
| About introduction and values | About.tsx; preserve three paragraphs and Strategy First / Premium Design / Performance descriptions |
| Discover / Design / Develop / Launch | src/data/process.ts; preserve every full description |
| Truthful working principles | Testimonials.tsx; do not introduce client endorsements; retain all three principles/descriptions |
| All FAQ questions/answers and functionality | src/data/faq.ts / FAQItem.tsx; preserve button/region semantics, aria-expanded, keyboard behavior |
| Contact, footer and email enquiry subject | Contact.tsx / Footer.tsx / siteConfig; keep mailto action, work link, footer navigation and studio copy |
| No fake dead controls or missing targets | Make decorative shapes aria-hidden/pointer-events none; action arrows must be real named links/buttons when interactive |

Mockups use existing copy and assets wherever content is shown. Some framing captions and chapter labels are presentation/design annotations, not approved marketing copy. The UI may be reorganized, but omitted lines in a storyboard crop are not permission to remove source content. Final implementation must reconcile this register and keep active source copy unless the owner separately approves edits. No unused "Schedule a Call" control should be promoted without a working destination.

## 6. Implementation plan — after visual approval only

Do not resume the previous Batch B automatically. Record approval of this direction and define the first implementation batch before editing application files. Existing architecture, source/data modules and routes remain the baseline.

| Future batch | Likely files | Risk and acceptance |
| --- | --- | --- |
| 0. Freeze approved design and checkpoint | docs/visual-art-direction.md, existing plan/audit; feature branch | Confirm storyboard, palette, mobile composition, reading behavior and protected laptop before source edits |
| 1. Semantic themes and composition primitives | src/styles/variables.css, globals.css; ui/Container, Section, Heading; background/ArchitecturalGrid, InterfaceSurface, AtmosphericLight, SceneTransition, CinematicEnvironment; design-system/motion.ts | Scoped ivory foregrounds/focus styles, correct navbar theme, no inherited low-contrast text, no new WebGL/pins, static reduced motion |
| 2. Hero and laptop environment composition | Hero.tsx, HeroContent.tsx, HeroActions.tsx, HeroStats.tsx, HeroEnvironment.tsx, lib/opening-motion.ts | New reading/art layout; preserved laptop hashes, camera, hinge, screen fit and progress; immediate CTA; no text drift; normal-speed review |
| 3. Capabilities and ivory Services | ScrollStory.tsx, Services.tsx, ServiceCard.tsx; optional local capabilities-composition helper | Reuse geometry between three states; preserve service data; stable holds; no additional pin; readable final boundary |
| 4. Project stage | Projects.tsx / ProjectCard.tsx / ProjectTech.tsx; unchanged projects data and case-study routes | Large contained screens, controls/links/disclosure intact, keyboard landing and vertical reduced-motion behavior; no perspective on paragraphs |
| 5. About and Process | About.tsx, Process.tsx, ProcessStep.tsx | Editorial text, connected axes, exact copy, no new pins, no continuously transformed reading surfaces |
| 6. Quiet reading and close | Testimonials.tsx, FAQ.tsx, FAQItem.tsx, Contact.tsx, Footer.tsx | Preserve real principles, FAQ semantics, immediate email and footer links; original restrained close |
| 7. Full opening-to-footer QA | shared hooks/controllers only where evidence requires; docs/audit | Check responsive layout, contrast, keyboard, reduced motion, navigation/restoration, reverse scroll, cleanup, loading, WebGL fallback and measured device performance |

File names for possible new helpers are proposals, not instructions to create a parallel app or giant visual-system abstraction. Keep component isolation and the existing data architecture. Add no dependency or rendering context without a concrete need and measured justification. LaptopScene.tsx, BrowserShowcase.tsx and GLB changes remain outside this approval scope.

Each future code batch requires lint, TypeScript, lifecycle/regression checks, production build where possible and a visual comparison. The known Google Fonts build-download failure is a verification limit, not a reason to skip code checks or claim build success. This art-direction-only task does not rerun application builds on unchanged code.

## 7. Design review decisions

Review the overall seven-experience structure, left-reading Hero with architectural artwork, ivory Services/project treatment, large project-screen proportions, connected values/Process, calm FAQ spread, restrained closing, and mobile re-composition. Approve or revise those compositions before implementing their choreography. Confirm whether the straighter frame/button treatment should replace the current heavily rounded card language.

The goal is a coherent presentation whose shapes and motion are designed together. Do not measure success by the number of animated elements. Readability, actual work, contact access and reliable navigation remain the business priorities.

## Reference basis and originality

Primary benchmark: the three user-supplied Puture clips and the recorded analysis in commit 65753c6. The opening shows persistent objects reshaping the reading space; the middle carries geometry through a dark-to-light exposure; project planes tip into and out of steadier inspection poses. Camera behavior is inferred appearance, not verified source architecture or exact easing. Clip 03 continues the project gallery and clears into another atmosphere; it does not document a final footer.

Retain these principles without reproducing Puture's branding, blue cubes, icon artwork, plus-sign floor pattern, copy, exact object arrangement or project visuals. All project imagery in this package comes from the user's own existing source; the architectural frame artwork is original to this study.
