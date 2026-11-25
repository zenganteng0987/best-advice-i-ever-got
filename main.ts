// The Best Advice I Ever Got — entry program.
// Writes the entry text to stdout and to /output/entry.txt.
// No network access, no dependencies beyond the Node standard library.
// Entry text is fixed: 140 characters, one sentence with an em dash.

import { mkdirSync, writeFileSync } from "node:fs";

function buildEntry(): string {
  const opening =
    "My dad told me, the night I wanted to quit school, to finish what I start";
  const closing =
    "because nobody remembers how you began, only whether you stayed.";
  return `${opening} \u2014 ${closing}`;
}

const ENTRY = buildEntry();

function checkEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(
      `entry is ${text.length} characters, must be 1-200 characters`,
    );
  }
}

function main(): void {
  checkEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
  process.stdout.write(ENTRY + "\n");
}

main();
