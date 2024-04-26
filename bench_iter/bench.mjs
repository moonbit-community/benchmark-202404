import Bench from "tinybench";
import * as MoonbitBenchIter from './bench_iter_moonbit.mjs';
import * as PlainJsBenchIter from './bench_iter_js.mjs';
import * as PlainJs2BenchIter from './bench_iter_js2.mjs';
import * as KotlinJsBenchIter from './bench_iter_kotlin_js.cjs';
import data from './data/data.json' with { type: "json" };

const bench = new Bench();
bench.add('Moonbit', () => {
    MoonbitBenchIter.run(data);
});

bench.add('Plain Js', () => {
    PlainJsBenchIter.run(data);
});

bench.add('Js Iterator Helpers', () => {
    PlainJs2BenchIter.run(data);
});

bench.add('Kotlin Js', () => {
    KotlinJsBenchIter.run(data);
});

await bench.warmup();
await bench.run();
console.table(bench.table());
