import Bench from "tinybench";
import json5 from "json5";
import * as MoonbitJson5 from "./moonbit-core/target/js/release/build/json5/json5.js";
import fs from 'node:fs/promises';

const json5String = await fs.readFile('./data/data.json5', 'utf-8');
const bench = new Bench();

bench.add("MoonbitJson5.parse", () => {
  MoonbitJson5.parse(json5String);
});

bench.add("json5.parse", () => {
  json5.parse(json5String);
});

await bench.warmup();
console.profile('MoonbitJson5.parse');
await bench.run();
console.profileEnd();
console.table(bench.table());
