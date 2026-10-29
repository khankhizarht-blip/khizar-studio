<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Approved cinematic redesign workflow

Read `docs/cinematic-redesign-plan.md` and `docs/motion-audit.md` before motion work. Preserve all existing instructions above.

- Verify the owner's latest local source before application edits. The d90e862 cloud snapshot has not been reconciled with the owner's newer local animation work. Do not treat a clean checkout as freshness verification.
- Work on the feature branch in small batches and preserve a checkpoint of the verified source. Do not modify main, push, deploy, or alter live infrastructure without explicit approval.
- During infrastructure repairs preserve the laptop GLB, opening sequence, camera, screen alignment, and scroll-progress contract. Record hashes before and after.
- Maintain one animation owner per property and predictable GSAP cleanup. Support reduced motion with fully readable, reachable static content.
- Text must settle and remain readable; continuous motion belongs primarily to decorative visuals.
- Run lint, TypeScript checks, and production build where possible after each code batch; report failures and browser-verification gaps honestly.
- Show infrastructure repair results before advancing to the shared visual environment. Inspect actual Puture clips before designing new cinematic scenes; do not claim the oversized recording was inspected.
