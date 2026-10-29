import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";
const exports = {};
runInNewContext(ts.transpileModule(
  readFileSync(new URL("../src/lib/opening-motion.ts", import.meta.url), "utf8"),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText, { exports });
const { openingPose } = exports;
const numbers = (pose) => Object.values(pose).flatMap((value) => typeof value === "number" ? [value] : numbers(value));

test("initial reading hold is stationary and handoff is continuous", () => {
  assert.equal(JSON.stringify(openingPose(0, 0)), JSON.stringify(openingPose(0.18, 0)));
  const before = numbers(openingPose(1 - 1e-6, 0));
  const after = numbers(openingPose(1, 1e-6));
  assert(before.every((n, i) => Math.abs(n - after[i]) < 0.01));
});

test("reverse scrubbing is deterministic and poses remain bounded", () => {
  const forward = Array.from({ length: 101 }, (_, i) => JSON.stringify(openingPose(1, i / 100)));
  for (let i = 100; i >= 0; i -= 1) {
    const pose = openingPose(1, i / 100);
    assert.equal(JSON.stringify(pose), forward[i]);
    assert(numbers(pose).every(Number.isFinite));
    for (const surface of pose.surfaces) {
      assert(surface.opacity >= 0 && surface.opacity <= 1);
      assert(surface.scale > 0 && surface.scale <= 1.1);
      assert(Math.abs(surface.z) < 1000);
    }
  }
});

test("laptop inspection interval holds its surrounding geometry", () => {
  assert.equal(JSON.stringify(openingPose(1, 0.56)), JSON.stringify(openingPose(1, 0.62)));
});
