import { mkdirSync, writeFileSync } from "node:fs";

// Two-Sentence Horror — v2 (revised).
// Revision vs v1: the knock is now an ANSWER to a direct question, not a
// random event. Sentence 1's nightly talking was never one-way: I asked
// whether she was at peace, and something in the urn knocked back. On a
// second read, every night of talking becomes a conversation with something
// awake inside the urn — and "twice" carries the knock-once-for-yes,
// twice-for-no undertone without ever explaining it.
const story =
  "My late wife's ashes sit on the mantelpiece, beside our wedding photo, and I talk to them every night before bed. Last night I asked her if she was at peace, and something knocked twice from inside the urn.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
