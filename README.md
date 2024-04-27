# benchmark-202404

This code repository contains the source code for performance benchmark of Moonbit.

The benchmark code for `iter` is in the bench_iter subfolder.

The benchmark code for `json5` is in the bench_json5 subfolder.

## How to run the benchmark

Assuming you already have toolchains of nodejs, moonbit and kotlin.

iter

```
cd bench_iter
pnpm install
pnpm build
pnpm start
```

json5

```
cd bench_json5
pnpm install
pnpm build
pnpm start
```

The code repository already has pre-compiled js uploaded, so you can skip `pnpm build` and directly proceed with the benchmarking.

## Benchmark Results

iter

```
┌─────────┬───────────────────────┬─────────────┬────────────────────┬──────────┬─────────┐
│ (index) │ Task Name             │ ops/sec     │ Average Time (ns)  │ Margin   │ Samples │
├─────────┼───────────────────────┼─────────────┼────────────────────┼──────────┼─────────┤
│ 0       │ 'Moonbit'             │ '2,953,032' │ 338.6349639048244  │ '±0.09%' │ 1476517 │
│ 1       │ 'Plain Js'            │ '383,701'   │ 2606.1919041344527 │ '±0.34%' │ 191851  │
│ 2       │ 'Js Iterator Helpers' │ '117,733'   │ 8493. 782917422399 │ '±3.02%' │ 58867   │
│ 3       │ 'Kotlin Js'           │ '155,935'   │ 6412.914323824735  │ '±0.28%' │ 77968   │
└─────────┴───────────────────────┴─────────────┴────────────────────┴──────────┴─────────┘
```

json5

```
┌─────────┬──────────────────────┬──────────┬───────────────────┬──────────┬─────────┐
│ (index) │ Task Name            │ ops/sec  │ Average Time (ns) │ Margin   │ Samples │
├─────────┼──────────────────────┼──────────┼───────────────────┼──────────┼─────────┤
│ 0       │ 'MoonbitJson5.parse' │ '22,908' │ 43651.83849847224 │ '±0.49%' │ 11455   │
│ 1       │ 'json5.parse'        │ '2,887'  │ 346305.4882271475 │ '±0.22%' │ 1444    │
└─────────┴──────────────────────┴──────────┴───────────────────┴──────────┴─────────┘
```

Tested on node v22.0.0, MBP 2023 Apple M2 Max
