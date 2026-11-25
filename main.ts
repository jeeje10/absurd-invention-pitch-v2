// One-Sentence Absurd Invention Pitch — make.fun entry (v2).
// Writes one sentence (at most 220 characters) to
// /output/entry.txt: a ridiculous invention that fixes a tiny
// everyday annoyance. A doorbell that asks visitors to state their
// business in a haiku before it rings, then politely declines
// anyone who rhymes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "A doorbell that asks visitors to state their business in a haiku before it rings, then politely declines anyone who rhymes.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 220;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
