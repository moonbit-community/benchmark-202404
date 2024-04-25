function moonbitlang$core$math$$minimum$0$(x, y) {
  return x > y ? y : x;
}
function bench_iter$$grade(score) {
  return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
}
function bench_iter$$run(data) {
  let _acc = 0;
  const _len = data.length;
  let _tmp$0 = 0;
  while (true) {
    const _i = _tmp$0;
    if (_i < _len) {
      const _p = data[_i];
      const _arr = _p.members;
      const _len$2 = _arr.length;
      let _tmp$1;
      let _tmp$2 = 0;
      while (true) {
        const _i$2 = _tmp$2;
        if (_i$2 < _len$2) {
          const _p$2 = _arr[_i$2];
          if (_p$2.gender) {
            const _p$3 = moonbitlang$core$math$$minimum$0$(100, _p$2.score + 5 | 0);
            const _p$4 = bench_iter$$grade(_p$3);
            if (_p$4 === "A") {
              const _param1 = _acc;
              _acc = _param1 + 1 | 0;
              _tmp$2 = _i$2 + 1 | 0;
              continue;
            } else {
              _tmp$2 = _i$2 + 1 | 0;
              continue;
            }
          } else {
            _tmp$2 = _i$2 + 1 | 0;
            continue;
          }
        } else {
          _tmp$1 = true;
          break;
        }
      }
      if (_tmp$1) {
        _tmp$0 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    } else {
      break;
    }
  }
  return _acc;
}
export { bench_iter$$run as run }
