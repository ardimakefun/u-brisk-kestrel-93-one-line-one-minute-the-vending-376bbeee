import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Ten years, a thousand snacks, never jammed once — then you walked by, and now my coil's stuck on you.";

const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`entry length ${length} code points is outside the 1–200 range`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
