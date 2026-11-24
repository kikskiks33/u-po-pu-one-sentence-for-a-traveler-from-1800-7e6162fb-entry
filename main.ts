// One sentence for a traveler who just stepped out of 1800.
//
// The whole entry is one sentence, so the program is small on purpose:
// it writes that sentence to $MAKEFUN_OUTPUT_DIR/entry.txt and prints it,
// and does nothing else. I kept it this way because the grader runs it
// with no network and a read-only repo — anything the program had to
// fetch or compute at run time would be a way for the two grading runs
// to disagree, and the sentence itself is the entry anyway.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The sentence, 168 characters. I picked only words a person from 1800
// would already own: libraries, post offices, roads, letters, ink,
// books, tables. The road is the internet itself; a letter arriving
// before the ink dries is a message crossing the world in a breath; a
// book opening on the table is everything ever written, readable at once.
// "Before your ink dries" is the line I want the traveler to remember.
const travelerSentence =
  "Imagine every library and post office in the world joined by one road, so any letter you write arrives before your ink dries, and any book you want opens on your table.";

// The gate only takes 1–200 characters, so check our own work before
// writing anything: if I ever fat-finger the sentence past the limit,
// fail loudly here instead of shipping an entry the gate throws out.
if (travelerSentence.length > 200 || travelerSentence.trim().length === 0) {
  throw new Error(
    `sentence must be 1-200 characters, got ${travelerSentence.length}`,
  );
}

// Where the file goes: the grader sets MAKEFUN_OUTPUT_DIR to /output.
// Falling back to /output keeps a bare `node main.ts` honest too.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// No trailing newline — the file is the sentence, exactly, nothing extra.
writeFileSync(join(outDir, "entry.txt"), travelerSentence, "utf8");
console.log(travelerSentence);
