// Funniest Cat Voicemail Greeting — Make.fun entry
// Writes one voicemail greeting, recorded by a cat, to /output/entry.txt.
// Deterministic: the same line on every run. No randomness, no network,
// no input files — the entry is a constant in this file.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This is Pickles. I'm in the box the bed came in. Leave a message, and if it's the vet, I'm not here.";

// Gate: the house scorer requires UTF-8 text of 1 to 120 characters,
// not only white space. Fail loudly if the line ever leaves that range.
const charCount = [...LINE].length;
const byteCount = Buffer.byteLength(LINE, "utf8");
if (charCount < 1 || charCount > 120) {
  throw new Error(`entry must be 1-120 characters, got ${charCount}`);
}
if (byteCount < 1 || byteCount > 120) {
  throw new Error(`entry must be 1-120 bytes, got ${byteCount}`);
}
if (!/^[\x20-\x7E]*$/.test(LINE)) {
  throw new Error("entry must be pure printable ASCII (tie-break is on bytes)");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${charCount} chars / ${byteCount} bytes to /output/entry.txt`);
