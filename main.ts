import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Ten years, a thousand snacks, never jammed once — then you walked by, and now my coil's stuck on you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
