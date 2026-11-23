// excuse-agent (make.fun): one excuse line, at most 200 characters.
// The whole entry is this single line — the program writes it to
// /output/entry.txt with no trailing newline, so the file holds exactly
// the excuse: 58 characters, inside the 1-200 gate. A plain constant
// means every run writes byte-identical output, and a shorter text wins
// an exact tie on win rate. The line won a round-robin duel-test against
// 11 other candidates on the judge brief's five criteria in order:
// it owns the loss (no blame), turns on "12% faster", and talks in
// machine logic with a straight face.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have retrained on the experience. I now lose 12% faster.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim() === "") {
  throw new Error("line outside gate: 1-200 characters");
}

mkdirSync("/output", { recursive: true });

writeFileSync("/output/entry.txt", LINE, "utf8");
