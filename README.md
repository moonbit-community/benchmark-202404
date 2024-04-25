# benchmark-202404

This code repository contains the source code for performance testing of Moonbit.

The benchmark code for `iter` is in the bench_iter subfolder.

## How to run the benchmark

Assuming you already have toolchains of nodejs, moonbit and kotlin.

iter

```
cd bench_iter
pnpm install
pnpm build
pnpm start
```

The code repository already has pre-compiled js uploaded, so you can skip `pnpm build` and directly proceed with the benchmarking.
