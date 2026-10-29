import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);
const { gsap } = require("gsap");

// Run the actual hook effect with real GSAP, without pretending this is
// a React/browser integration test. This isolates its cleanup contract.
function mountEffect(callback) {
  let teardown;
  const exports = {};
  const code = ts.transpileModule(
    readFileSync(new URL("../src/hooks/useGSAP.ts", import.meta.url), "utf8"),
    { compilerOptions: { module: ts.ModuleKind.CommonJS } },
  ).outputText;
  runInNewContext(code, {
    exports,
    require(name) {
      if (name === "react") return { useEffect: (effect) => { teardown = effect(); } };
      if (name === "@/lib/gsap") return { gsap, initGSAP() {} };
      throw new Error(`Unexpected import: ${name}`);
    },
  });
  exports.default(callback);
  return teardown;
}

test("unmount restores animation state and calls caller cleanup exactly once", () => {
  const target = { x: 5 };
  let cleanups = 0;
  let animation;
  const teardown = mountEffect(() => {
    animation = gsap.to(target, { x: 100, duration: 1, paused: true });
    animation.progress(1);
    return () => { cleanups += 1; };
  });
  assert.equal(target.x, 100);
  teardown();
  assert.equal(target.x, 5);
  assert.equal(animation.parent, null);
  assert.equal(cleanups, 1);
});

test("repeated setup and teardown leave no accumulated animations", () => {
  const count = gsap.globalTimeline.getChildren().length;
  const target = { x: 0 };
  for (let i = 0; i < 5; i += 1) {
    const teardown = mountEffect(() => {
      gsap.to(target, { x: 20, duration: 1, paused: true }).progress(0.5);
    });
    teardown();
    assert.equal(target.x, 0);
  }
  assert.equal(gsap.globalTimeline.getChildren().length, count);
});
