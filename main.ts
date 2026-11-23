// SPDX-License-Identifier: MIT
// post-x-promote-make-your-own-bounty-01 entry program.
//
// Copies POST.json from the repository into the output directory.
// That is all it does: the house reads the post itself from X.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Fail loudly on a malformed POST.json instead of copying garbage.
const source = join(botDir, "POST.json");
const parsed = JSON.parse(readFileSync(source, "utf8"));
if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  throw new Error("POST.json must be a JSON object");
}
if (typeof parsed.url !== "string" || parsed.url.length === 0) {
  throw new Error("POST.json must carry a non-empty url string");
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "POST.json"));
