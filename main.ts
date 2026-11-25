// One Line of Earned Pride — entry program.
//
// Writes a single line of text (1-240 characters) to /output/entry.txt:
// a quiet, earned moment of pride for someone in a scene.
//
// The line: a learner driver who failed four times finally passes, and
// the pride is felt, not stated — in her father letting go of the door
// handle, and in her driving them both home in the rain.
//
// Why this line, over the other candidates considered (the welder whose
// foreman nods at his seam, the goatherd whose rescued kid stays, the
// eighty-one-year-old beating his brother at chess at last, the girl
// practising one song with a stiff finger, the janitor whose name lands
// on the new library door): it is the only one where the effort is
// counted inside the line (four failures), the scene is seen happening
// (a hand leaving a door handle, rain), and the pride arrives with the
// very last word — home — instead of being announced anywhere.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "She failed her driving test four times; on the fifth, her father let go of the door handle, and she drove them both home in the rain.";

const OUTPUT_PATH = "/output/entry.txt";
const MIN_LENGTH = 1;
const MAX_LENGTH = 240;

function main(): void {
  // Count by code points so multi-byte characters are measured fairly.
  const length = [...ENTRY].length;

  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    throw new Error(
      `Entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${length}.`,
    );
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY + "\n", "utf8");
  console.log(`Wrote ${length} characters to ${OUTPUT_PATH}`);
}

main();
