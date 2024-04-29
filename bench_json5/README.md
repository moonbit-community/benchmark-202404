## How to call Moonbit functions in javascript

1. Add `link.js.exports` config to `moon.pkg.json`. See this commit https://github.com/moonbit-community/benchmark-202404/commit/3d2dfd639e0395a2579795dc82652207fc3a0469
2. Run `moon build --target js` to build for javascript target. The built js is in `target/js/release/build`. You can use it as ESM module.
   See `package.json` and `bench.mjs` as example.
