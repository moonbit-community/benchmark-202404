function $unsafe_bytes_sub_string(bytes, byte_offset, byte_length) {
  return new TextDecoder("utf-16").decode(bytes.slice(byte_offset, byte_offset + byte_length));
}
function $raise(a) {
  throw new Error(a);
}
function $compare_int(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
function $compare_char(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
function $f64_reinterpret_i64(a) {
  const buf = new ArrayBuffer(8);
  const view = new DataView(buf);
  view.setBigInt64(0, a);
  return view.getFloat64(0);
}
function Result$Err$1$(param0) {
  this._0 = param0;
}
Result$Err$1$.prototype.$tag = 0;
function Result$Ok$1$(param0) {
  this._0 = param0;
}
Result$Ok$1$.prototype.$tag = 1;
function $i64_extend_i32_s(a) {
  return BigInt(a);
}
function $i32_trunc_i64_s(a) {
  return Number(BigInt.asIntN(32, a)) | 0;
}
function Result$Err$2$(param0) {
  this._0 = param0;
}
Result$Err$2$.prototype.$tag = 0;
function Result$Ok$2$(param0) {
  this._0 = param0;
}
Result$Ok$2$.prototype.$tag = 1;
const Option$None$3$ = { $tag: 0 };
function Option$Some$3$(param0) {
  this._0 = param0;
}
Option$Some$3$.prototype.$tag = 1;
const Option$None$5$ = { $tag: 0 };
function Option$Some$5$(param0) {
  this._0 = param0;
}
Option$Some$5$.prototype.$tag = 1;
const Option$None$6$ = { $tag: 0 };
function Option$Some$6$(param0) {
  this._0 = param0;
}
Option$Some$6$.prototype.$tag = 1;
const Option$None$8$ = { $tag: 0 };
function Option$Some$8$(param0) {
  this._0 = param0;
}
Option$Some$8$.prototype.$tag = 1;
function $f64_convert_i64_s(a) {
  return Number(a);
}
const Option$None$9$ = { $tag: 0 };
function Option$Some$9$(param0) {
  this._0 = param0;
}
Option$Some$9$.prototype.$tag = 1;
const Option$None$10$ = { $tag: 0 };
function Option$Some$10$(param0) {
  this._0 = param0;
}
Option$Some$10$.prototype.$tag = 1;
function $compare_int64(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
const $64$moonbitlang$47$core$47$map$46$Map$Empty$13$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$map$46$Map$Tree$13$(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
$64$moonbitlang$47$core$47$map$46$Map$Tree$13$.prototype.$tag = 1;
function ParseError$InvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
ParseError$InvalidChar.prototype.$tag = 0;
const ParseError$InvalidEof = { $tag: 1 };
function ParseError$InvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
ParseError$InvalidNumber.prototype.$tag = 2;
function ParseError$InvalidIdentEscape(param0) {
  this._0 = param0;
}
ParseError$InvalidIdentEscape.prototype.$tag = 3;
function Result$Err$14$(param0) {
  this._0 = param0;
}
Result$Err$14$.prototype.$tag = 0;
function Result$Ok$14$(param0) {
  this._0 = param0;
}
Result$Ok$14$.prototype.$tag = 1;
function Result$Err$15$(param0) {
  this._0 = param0;
}
Result$Err$15$.prototype.$tag = 0;
function Result$Ok$15$(param0) {
  this._0 = param0;
}
Result$Ok$15$.prototype.$tag = 1;
function Result$Err$16$(param0) {
  this._0 = param0;
}
Result$Err$16$.prototype.$tag = 0;
function Result$Ok$16$(param0) {
  this._0 = param0;
}
Result$Ok$16$.prototype.$tag = 1;
function Result$Err$17$(param0) {
  this._0 = param0;
}
Result$Err$17$.prototype.$tag = 0;
function Result$Ok$17$(param0) {
  this._0 = param0;
}
Result$Ok$17$.prototype.$tag = 1;
function $f64_convert_i32_s(a) {
  return a + 0.0;
}
function Result$Err$18$(param0) {
  this._0 = param0;
}
Result$Err$18$.prototype.$tag = 0;
function Result$Ok$18$(param0) {
  this._0 = param0;
}
Result$Ok$18$.prototype.$tag = 1;
const Token$Null = { $tag: 0 };
const Token$True = { $tag: 1 };
const Token$False = { $tag: 2 };
function Token$Number(param0) {
  this._0 = param0;
}
Token$Number.prototype.$tag = 3;
function Token$String(param0) {
  this._0 = param0;
}
Token$String.prototype.$tag = 4;
const Token$LBrace = { $tag: 5 };
const Token$RBrace = { $tag: 6 };
const Token$LBracket = { $tag: 7 };
const Token$RBracket = { $tag: 8 };
const Token$Comma = { $tag: 9 };
const Token$Colon = { $tag: 10 };
function Result$Err$19$(param0) {
  this._0 = param0;
}
Result$Err$19$.prototype.$tag = 0;
function Result$Ok$19$(param0) {
  this._0 = param0;
}
Result$Ok$19$.prototype.$tag = 1;
const $64$moonbitlang$47$core$47$json$46$JsonValue$Null = { $tag: 0 };
function $64$moonbitlang$47$core$47$json$46$JsonValue$Boolean(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$json$46$JsonValue$Boolean.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$json$46$JsonValue$Number(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$json$46$JsonValue$Number.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$json$46$JsonValue$String(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$json$46$JsonValue$String.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$json$46$JsonValue$Array(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$json$46$JsonValue$Array.prototype.$tag = 4;
function $64$moonbitlang$47$core$47$json$46$JsonValue$Object(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$json$46$JsonValue$Object.prototype.$tag = 5;
function moonbitlang$core$builtin$$op_lt$0$(self_, other) {
  return moonbitlang$core$strconv$$UInt64$compare(self_, other) < 0;
}
function moonbitlang$core$builtin$$op_ge$0$(self_, other) {
  return moonbitlang$core$strconv$$UInt64$compare(self_, other) >= 0;
}
function moonbitlang$core$builtin$$op_le$0$(self_, other) {
  return moonbitlang$core$strconv$$UInt64$compare(self_, other) <= 0;
}
function moonbitlang$core$bytes$$Bytes$unsafe_sub_string(_tmp$0, _tmp$1, _tmp$2) {
  return $unsafe_bytes_sub_string(_tmp$0, _tmp$1, _tmp$2);
}
function moonbitlang$core$builtin$$op_gt$0$(self_, other) {
  return moonbitlang$core$strconv$$UInt64$compare(self_, other) > 0;
}
function moonbitlang$core$bytes$$Bytes$sub_string(self, byte_offset, byte_length) {
  return byte_length < 0 || (byte_offset < 0 || (byte_offset + byte_length | 0) > self.length) ? $raise("sub_string out of bound") : moonbitlang$core$bytes$$Bytes$unsafe_sub_string(self, byte_offset, byte_length);
}
function moonbitlang$core$bytes$$Bytes$set_utf16_char(self, offset, value) {
  const code = value;
  if (code < 65536) {
    self[offset] = code & 255;
    self[offset + 1 | 0] = code >>> 8;
    return 2;
  } else {
    const hi = code - 65536 | 0;
    const lo = hi >>> 10 | 55296;
    const hi$2 = hi & 1023 | 56320;
    self[offset] = lo & 255;
    self[offset + 1 | 0] = lo >>> 8;
    self[offset + 2 | 0] = hi$2 & 255;
    self[offset + 3 | 0] = hi$2 >>> 8;
    return 4;
  }
}
function moonbitlang$core$char$$Char$to_string(self) {
  const bytes = new Uint8Array(4);
  const len = moonbitlang$core$bytes$$Bytes$set_utf16_char(bytes, 0, self);
  return moonbitlang$core$bytes$$Bytes$sub_string(bytes, 0, len);
}
function moonbitlang$core$string$$String$compare(self, other) {
  const len = self.length;
  const _bind = $compare_int(len, other.length);
  if (_bind === 0) {
    let _tmp$3 = 0;
    while (true) {
      const i = _tmp$3;
      if (i < len) {
        const order = $compare_char(self.charCodeAt(i), other.charCodeAt(i));
        if (order !== 0) {
          return order;
        }
        _tmp$3 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return 0;
  } else {
    return _bind;
  }
}
function moonbitlang$core$string$$String$substring(self, start, end) {
  if (start < 0) {
    $raise("String::substring: start index is negative");
  }
  if (end < 0) {
    $raise("String::substring: end index is negative");
  }
  if (start > end) {
    $raise("String::substring: start index is greater than end index");
  }
  if (end > self.length) {
    $raise("String::substring: end index is greater than the length of the string");
  }
  return self.substring(start, end);
}
function moonbitlang$core$string$$String$substring$46$end$46$default(self) {
  return self.length;
}
const moonbitlang$core$int64$$max_val = 9223372036854775807n;
const moonbitlang$core$int64$$min_val = -9223372036854775808n;
function moonbitlang$core$int64$$Int64$max_value() {
  return moonbitlang$core$int64$$max_val;
}
function moonbitlang$core$int64$$Int64$min_value() {
  return moonbitlang$core$int64$$min_val;
}
const moonbitlang$core$double$$not_a_number = $f64_reinterpret_i64(9221120237041090561n);
const moonbitlang$core$double$$positive_infinity = $f64_reinterpret_i64(9218868437227405312n);
const moonbitlang$core$double$$negative_infinity = $f64_reinterpret_i64(-4503599627370496n);
function moonbitlang$core$double$$Double$nan() {
  return moonbitlang$core$double$$not_a_number;
}
function moonbitlang$core$double$$Double$inf(sign) {
  return sign >= 0 ? moonbitlang$core$double$$positive_infinity : moonbitlang$core$double$$negative_infinity;
}
const moonbitlang$core$strconv$$range_err = "value out of range";
const moonbitlang$core$strconv$$syntax_err = "invalid syntax";
function moonbitlang$core$strconv$$check_underscore(str) {
  let s = str;
  let last_char = 33;
  if (s.length > 1 && (s.charCodeAt(0) === 45 || s.charCodeAt(0) === 43)) {
    const arg = s;
    const arg$2 = moonbitlang$core$string$$String$substring$46$end$46$default(arg);
    s = moonbitlang$core$string$$String$substring(arg, 1, arg$2);
  }
  let hex = false;
  if (s.length >= 2 && (s.charCodeAt(0) === 48 && (s.charCodeAt(1) === 98 || (s.charCodeAt(1) === 66 || (s.charCodeAt(1) === 111 || (s.charCodeAt(1) === 79 || (s.charCodeAt(1) === 120 || s.charCodeAt(1) === 88))))))) {
    last_char = 48;
    hex = s.charCodeAt(1) === 120 || s.charCodeAt(1) === 88;
    const arg$3 = s;
    const arg$4 = moonbitlang$core$string$$String$substring$46$end$46$default(arg$3);
    s = moonbitlang$core$string$$String$substring(arg$3, 2, arg$4);
  }
  let _tmp$4 = 0;
  while (true) {
    const i = _tmp$4;
    if (i < s.length) {
      _J$_continue: {
        if (48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57) {
          last_char = 48;
          break _J$_continue;
        }
        if (hex && (97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 102) || 65 <= s.charCodeAt(i) && s.charCodeAt(i) <= 70) {
          last_char = 48;
          break _J$_continue;
        }
        if (s.charCodeAt(i) === 95) {
          if (last_char !== 48) {
            return false;
          }
          last_char = 95;
          break _J$_continue;
        }
        if (last_char === 95) {
          return false;
        }
        last_char = 33;
        break _J$_continue;
      }
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return last_char !== 95;
}
const moonbitlang$core$strconv$$max_shift = 59;
const moonbitlang$core$strconv$$powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
function moonbitlang$core$strconv$$Decimal$new() {
  return { digits: new Uint8Array(800), digits_num: 0, decimal_point: 0, negative: false, truncated: false };
}
function moonbitlang$core$strconv$$Decimal$trim(self) {
  while (true) {
    if (self.digits_num > 0 && self.digits[self.digits_num - 1 | 0] === 0) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$strconv$$Decimal$parse_decimal(str) {
  const d = moonbitlang$core$strconv$$Decimal$new();
  if (str.length <= 0) {
    return new Result$Err$1$(moonbitlang$core$strconv$$syntax_err);
  }
  const i = { val: 0 };
  let has_dp = false;
  const has_digits = { val: false };
  _L$0: while (true) {
    if (i.val < str.length) {
      _L$1: {
        _J$_arm: {
          const _bind = str.charCodeAt(i.val);
          switch (_bind) {
            case 45: {
              if (i.val !== 0) {
                return new Result$Err$1$(moonbitlang$core$strconv$$syntax_err);
              } else {
                d.negative = true;
              }
              break;
            }
            case 43: {
              if (i.val !== 0) {
                return new Result$Err$1$(moonbitlang$core$strconv$$syntax_err);
              }
              break;
            }
            case 95: {
              break;
            }
            case 46: {
              if (has_dp) {
                return new Result$Err$1$(moonbitlang$core$strconv$$syntax_err);
              }
              has_dp = true;
              d.decimal_point = d.digits_num;
              break;
            }
            case 48: {
              break _J$_arm;
            }
            case 49: {
              break _J$_arm;
            }
            case 50: {
              break _J$_arm;
            }
            case 51: {
              break _J$_arm;
            }
            case 52: {
              break _J$_arm;
            }
            case 53: {
              break _J$_arm;
            }
            case 54: {
              break _J$_arm;
            }
            case 55: {
              break _J$_arm;
            }
            case 56: {
              break _J$_arm;
            }
            case 57: {
              break _J$_arm;
            }
            default: {
              break _L$0;
            }
          }
          break _L$1;
        }
        has_digits.val = true;
        if (str.charCodeAt(i.val) === 48 && d.digits_num === 0) {
          d.decimal_point = d.decimal_point - 1 | 0;
          i.val = i.val + 1 | 0;
          continue;
        }
        if (d.digits_num < d.digits.length) {
          d.digits[d.digits_num] = str.charCodeAt(i.val) - 48 | 0;
          d.digits_num = d.digits_num + 1 | 0;
        } else {
          if (str.charCodeAt(i.val) !== 48) {
            d.truncated = true;
          }
        }
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!has_digits.val) {
    return new Result$Err$1$(moonbitlang$core$strconv$$syntax_err);
  }
  if (!has_dp) {
    d.decimal_point = d.digits_num;
  }
  if (i.val < str.length && (str.charCodeAt(i.val) === 101 || str.charCodeAt(i.val) === 69)) {
    i.val = i.val + 1 | 0;
    if (i.val >= str.length) {
      return new Result$Err$1$(moonbitlang$core$strconv$$syntax_err);
    }
    let exp_sign = 1;
    if (str.charCodeAt(i.val) === 43) {
      i.val = i.val + 1 | 0;
    } else {
      if (str.charCodeAt(i.val) === 45) {
        i.val = i.val + 1 | 0;
        exp_sign = -1;
      }
    }
    if (i.val >= str.length || (str.charCodeAt(i.val) < 48 || str.charCodeAt(i.val) > 57)) {
      return new Result$Err$1$(moonbitlang$core$strconv$$syntax_err);
    }
    let exp = 0;
    while (true) {
      if (i.val < str.length && (48 <= str.charCodeAt(i.val) && str.charCodeAt(i.val) <= 57 || str.charCodeAt(i.val) === 95)) {
        if (str.charCodeAt(i.val) === 95) {
          i.val = i.val + 1 | 0;
          continue;
        }
        exp = (Math.imul(exp, 10) | 0) + (str.charCodeAt(i.val) - 48 | 0) | 0;
        i.val = i.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
  }
  moonbitlang$core$strconv$$Decimal$trim(d);
  return i.val !== str.length ? new Result$Err$1$(moonbitlang$core$strconv$$syntax_err) : new Result$Ok$1$(d);
}
const moonbitlang$core$strconv$$double_info = { mantissa_bits: 52, exponent_bits: 11, bias: -1023 };
function moonbitlang$core$strconv$$assemble_bits(mantissa, exponent, negative) {
  const biased_exp = exponent - moonbitlang$core$strconv$$double_info.bias | 0;
  let bits = mantissa & BigInt.asIntN(64, BigInt.asIntN(64, 1n << (BigInt(moonbitlang$core$strconv$$double_info.mantissa_bits) & 63n)) - 1n);
  const exp_bits = $i64_extend_i32_s(biased_exp & ((1 << moonbitlang$core$strconv$$double_info.exponent_bits) - 1 | 0));
  bits = bits | BigInt.asIntN(64, exp_bits << (BigInt(moonbitlang$core$strconv$$double_info.mantissa_bits) & 63n));
  if (negative) {
    bits = bits | BigInt.asIntN(64, BigInt.asIntN(64, 1n << (BigInt(moonbitlang$core$strconv$$double_info.mantissa_bits) & 63n)) << (BigInt(moonbitlang$core$strconv$$double_info.exponent_bits) & 63n));
  }
  return bits;
}
function moonbitlang$core$strconv$$Decimal$should_round_up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  if (self.digits[d] === 5 && (d + 1 | 0) === self.digits_num) {
    if (self.truncated) {
      return true;
    }
    return d > 0 && (self.digits[d - 1 | 0] % 2 | 0) !== 0;
  }
  return self.digits[d] >= 5;
}
function moonbitlang$core$strconv$$Decimal$rounded_integer(self) {
  if (self.decimal_point > 20) {
    return -1n;
  }
  let n = 0n;
  let i = 0;
  while (true) {
    if (i < self.decimal_point && i < self.digits_num) {
      n = BigInt.asIntN(64, BigInt.asIntN(64, n * 10n) + $i64_extend_i32_s(self.digits[i]));
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (i < self.decimal_point) {
      n = BigInt.asIntN(64, n * 10n);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (moonbitlang$core$strconv$$Decimal$should_round_up(self, self.decimal_point)) {
    n = BigInt.asIntN(64, n + 1n);
  }
  return n;
}
function moonbitlang$core$strconv$$Decimal$right_shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = 0n;
  while (true) {
    if (BigInt.asIntN(64, BigInt.asUintN(64, acc) >> (BigInt(s) & 63n)) === 0n) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (BigInt.asIntN(64, BigInt.asUintN(64, acc) >> (BigInt(s) & 63n)) === 0n) {
            acc = BigInt.asIntN(64, acc * 10n);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const d = self.digits[read_index];
      acc = BigInt.asIntN(64, BigInt.asIntN(64, acc * 10n) + $i64_extend_i32_s(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = BigInt.asIntN(64, BigInt.asIntN(64, 1n << (BigInt(s) & 63n)) - 1n);
  while (true) {
    if (read_index < self.digits_num) {
      const out = $i32_trunc_i64_s(BigInt.asIntN(64, BigInt.asUintN(64, acc) >> (BigInt(s) & 63n)));
      self.digits[write_index] = out;
      write_index = write_index + 1 | 0;
      acc = acc & mask;
      const d$2 = self.digits[read_index];
      acc = BigInt.asIntN(64, BigInt.asIntN(64, acc * 10n) + $i64_extend_i32_s(d$2));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (acc > 0n) {
      const out$2 = $i32_trunc_i64_s(BigInt.asIntN(64, BigInt.asUintN(64, acc) >> (BigInt(s) & 63n)));
      if (write_index < self.digits.length) {
        self.digits[write_index] = out$2;
        write_index = write_index + 1 | 0;
      } else {
        if (out$2 > 0) {
          self.truncated = true;
        }
      }
      acc = acc & mask;
      acc = BigInt.asIntN(64, acc * 10n);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  moonbitlang$core$strconv$$Decimal$trim(self);
}
const moonbitlang$core$strconv$$left_shift_cheats = [{ _0: 0, _1: "" }, { _0: 1, _1: "5" }, { _0: 1, _1: "25" }, { _0: 1, _1: "125" }, { _0: 2, _1: "625" }, { _0: 2, _1: "3125" }, { _0: 2, _1: "15625" }, { _0: 3, _1: "78125" }, { _0: 3, _1: "390625" }, { _0: 3, _1: "1953125" }, { _0: 4, _1: "9765625" }, { _0: 4, _1: "48828125" }, { _0: 4, _1: "244140625" }, { _0: 4, _1: "1220703125" }, { _0: 5, _1: "6103515625" }, { _0: 5, _1: "30517578125" }, { _0: 5, _1: "152587890625" }, { _0: 6, _1: "762939453125" }, { _0: 6, _1: "3814697265625" }, { _0: 6, _1: "19073486328125" }, { _0: 7, _1: "95367431640625" }, { _0: 7, _1: "476837158203125" }, { _0: 7, _1: "2384185791015625" }, { _0: 7, _1: "11920928955078125" }, { _0: 8, _1: "59604644775390625" }, { _0: 8, _1: "298023223876953125" }, { _0: 8, _1: "1490116119384765625" }, { _0: 9, _1: "7450580596923828125" }, { _0: 9, _1: "37252902984619140625" }, { _0: 9, _1: "186264514923095703125" }, { _0: 10, _1: "931322574615478515625" }, { _0: 10, _1: "4656612873077392578125" }, { _0: 10, _1: "23283064365386962890625" }, { _0: 10, _1: "116415321826934814453125" }, { _0: 11, _1: "582076609134674072265625" }, { _0: 11, _1: "2910383045673370361328125" }, { _0: 11, _1: "14551915228366851806640625" }, { _0: 12, _1: "72759576141834259033203125" }, { _0: 12, _1: "363797880709171295166015625" }, { _0: 12, _1: "1818989403545856475830078125" }, { _0: 13, _1: "9094947017729282379150390625" }, { _0: 13, _1: "45474735088646411895751953125" }, { _0: 13, _1: "227373675443232059478759765625" }, { _0: 13, _1: "1136868377216160297393798828125" }, { _0: 14, _1: "5684341886080801486968994140625" }, { _0: 14, _1: "28421709430404007434844970703125" }, { _0: 14, _1: "142108547152020037174224853515625" }, { _0: 15, _1: "710542735760100185871124267578125" }, { _0: 15, _1: "3552713678800500929355621337890625" }, { _0: 15, _1: "17763568394002504646778106689453125" }, { _0: 16, _1: "88817841970012523233890533447265625" }, { _0: 16, _1: "444089209850062616169452667236328125" }, { _0: 16, _1: "2220446049250313080847263336181640625" }, { _0: 16, _1: "11102230246251565404236316680908203125" }, { _0: 17, _1: "55511151231257827021181583404541015625" }, { _0: 17, _1: "277555756156289135105907917022705078125" }, { _0: 17, _1: "1387778780781445675529539585113525390625" }, { _0: 18, _1: "6938893903907228377647697925567626953125" }, { _0: 18, _1: "34694469519536141888238489627838134765625" }, { _0: 18, _1: "173472347597680709441192448139190673828125" }, { _0: 19, _1: "867361737988403547205962240695953369140625" }];
function moonbitlang$core$strconv$$Decimal$new_digits(self, s) {
  const new_digits = moonbitlang$core$strconv$$left_shift_cheats[s]._0;
  const cheat_num = moonbitlang$core$strconv$$left_shift_cheats[s]._1;
  let less = false;
  let _tmp$5 = 0;
  while (true) {
    const i = _tmp$5;
    if (i < cheat_num.length) {
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = cheat_num.charCodeAt(i) - 48 | 0;
      if (self.digits[i] !== d) {
        less = self.digits[i] < d;
        break;
      }
      _tmp$5 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function moonbitlang$core$strconv$$Decimal$left_shift(self, s) {
  const new_digits = moonbitlang$core$strconv$$Decimal$new_digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = 0n;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const d = $i64_extend_i32_s(self.digits[read_index]);
      acc = BigInt.asIntN(64, acc + BigInt.asIntN(64, d << (BigInt(s) & 63n)));
      const quo = BigInt.asIntN(64, acc / 10n);
      const rem = $i32_trunc_i64_s(BigInt.asIntN(64, acc - BigInt.asIntN(64, quo * 10n)));
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        self.digits[write_index] = rem;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (acc > 0n) {
      const quo$2 = BigInt.asIntN(64, acc / 10n);
      const rem$2 = $i32_trunc_i64_s(BigInt.asIntN(64, acc - BigInt.asIntN(64, 10n * quo$2)));
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        self.digits[write_index] = rem$2;
      } else {
        if (rem$2 !== 0) {
          self.truncated = true;
        }
      }
      acc = quo$2;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  moonbitlang$core$strconv$$Decimal$trim(self);
}
function moonbitlang$core$strconv$$Decimal$shift(self, s) {
  if (self.digits_num === 0) {
    return;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > moonbitlang$core$strconv$$max_shift) {
        moonbitlang$core$strconv$$Decimal$left_shift(self, moonbitlang$core$strconv$$max_shift);
        s$2 = s$2 - moonbitlang$core$strconv$$max_shift | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$strconv$$Decimal$left_shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -moonbitlang$core$strconv$$max_shift) {
        moonbitlang$core$strconv$$Decimal$right_shift(self, moonbitlang$core$strconv$$max_shift);
        s$2 = s$2 + moonbitlang$core$strconv$$max_shift | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$strconv$$Decimal$right_shift(self, -s$2);
    return;
  } else {
    return;
  }
}
function moonbitlang$core$strconv$$Decimal$to_double(self) {
  let exponent = 0;
  let mantissa = 0n;
  if (self.digits_num === 0 || self.decimal_point < -330) {
    mantissa = 0n;
    exponent = moonbitlang$core$strconv$$double_info.bias;
    const bits = moonbitlang$core$strconv$$assemble_bits(mantissa, exponent, self.negative);
    return new Result$Ok$2$($f64_reinterpret_i64(bits));
  }
  if (self.decimal_point > 310) {
    return new Result$Err$2$(moonbitlang$core$strconv$$range_err);
  }
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= moonbitlang$core$strconv$$powtab.length) {
        n = 60;
      } else {
        n = moonbitlang$core$strconv$$powtab[self.decimal_point];
      }
      moonbitlang$core$strconv$$Decimal$shift(self, -n);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (self.decimal_point < 0 || self.decimal_point === 0 && self.digits[0] < 5) {
      let n$2 = 0;
      if (-self.decimal_point >= moonbitlang$core$strconv$$powtab.length) {
        n$2 = 60;
      } else {
        n$2 = moonbitlang$core$strconv$$powtab[-self.decimal_point];
      }
      moonbitlang$core$strconv$$Decimal$shift(self, n$2);
      exponent = exponent - n$2 | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (moonbitlang$core$strconv$$double_info.bias + 1 | 0)) {
    const n$3 = (moonbitlang$core$strconv$$double_info.bias + 1 | 0) - exponent | 0;
    moonbitlang$core$strconv$$Decimal$shift(self, -n$3);
    exponent = exponent + n$3 | 0;
  }
  if ((exponent - moonbitlang$core$strconv$$double_info.bias | 0) >= ((1 << moonbitlang$core$strconv$$double_info.exponent_bits) - 1 | 0)) {
    return new Result$Err$2$(moonbitlang$core$strconv$$range_err);
  }
  moonbitlang$core$strconv$$Decimal$shift(self, moonbitlang$core$strconv$$double_info.mantissa_bits + 1 | 0);
  mantissa = moonbitlang$core$strconv$$Decimal$rounded_integer(self);
  if (mantissa === BigInt.asIntN(64, 2n << (BigInt(moonbitlang$core$strconv$$double_info.mantissa_bits) & 63n))) {
    mantissa = BigInt.asIntN(64, BigInt.asUintN(64, mantissa) >> (BigInt(1) & 63n));
    exponent = exponent + 1 | 0;
    if ((exponent - moonbitlang$core$strconv$$double_info.bias | 0) >= ((1 << moonbitlang$core$strconv$$double_info.exponent_bits) - 1 | 0)) {
      return new Result$Err$2$(moonbitlang$core$strconv$$range_err);
    }
  }
  if ((mantissa & BigInt.asIntN(64, 1n << (BigInt(moonbitlang$core$strconv$$double_info.mantissa_bits) & 63n))) === 0n) {
    exponent = moonbitlang$core$strconv$$double_info.bias;
  }
  const bits$2 = moonbitlang$core$strconv$$assemble_bits(mantissa, exponent, self.negative);
  return new Result$Ok$2$($f64_reinterpret_i64(bits$2));
}
function moonbitlang$core$strconv$$slice(s, start, end) {
  return { string: s, start: start, end: end };
}
function moonbitlang$core$strconv$$full_slice(s) {
  return moonbitlang$core$strconv$$slice(s, 0, s.length);
}
function moonbitlang$core$strconv$$StringSlice$subfix_unchecked(self, start) {
  return { string: self.string, start: self.start + start | 0, end: self.end };
}
function moonbitlang$core$strconv$$StringSlice$op_get(self, index) {
  return self.string.charCodeAt(self.start + index | 0);
}
function moonbitlang$core$strconv$$StringSlice$length(self) {
  return self.end - self.start | 0;
}
function moonbitlang$core$strconv$$StringSlice$first_is(self, c) {
  return moonbitlang$core$strconv$$StringSlice$length(self) > 0 && moonbitlang$core$strconv$$StringSlice$op_get(self, 0) === c;
}
function moonbitlang$core$strconv$$StringSlice$first_is_either(self, c1, c2) {
  return moonbitlang$core$strconv$$StringSlice$length(self) > 0 && (moonbitlang$core$strconv$$StringSlice$op_get(self, 0) === c1 || moonbitlang$core$strconv$$StringSlice$op_get(self, 0) === c2);
}
function moonbitlang$core$strconv$$is_digit(c) {
  return c >= 48 && c <= 57;
}
function moonbitlang$core$strconv$$StringSlice$first_is_digit(self) {
  return moonbitlang$core$strconv$$StringSlice$length(self) > 0 && moonbitlang$core$strconv$$is_digit(moonbitlang$core$strconv$$StringSlice$op_get(self, 0));
}
function moonbitlang$core$strconv$$StringSlice$step(self, step) {
  let step$2 = step;
  let start = self.start;
  while (true) {
    if (start < self.end && step$2 > 0) {
      if (self.string.charCodeAt(start) !== 95) {
        step$2 = step$2 - 1 | 0;
      }
      start = start + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return step$2 === 0 ? new Option$Some$3$(moonbitlang$core$strconv$$StringSlice$subfix_unchecked(self, start - self.start | 0)) : Option$None$3$;
}
function moonbitlang$core$strconv$$StringSlice$step_1_unchecked(self) {
  return { string: self.string, start: self.start + 1 | 0, end: self.end };
}
function moonbitlang$core$strconv$$StringSlice$is_empty(self) {
  return self.start === self.end;
}
function moonbitlang$core$strconv$$lower(c) {
  return 65 <= c && c <= 90 ? (c + 97 | 0) - 65 | 0 : c;
}
function moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(self, s2) {
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < s2.length && i < moonbitlang$core$strconv$$StringSlice$length(self)) {
      const c1 = moonbitlang$core$strconv$$StringSlice$op_get(self, i);
      const c2 = s2.charCodeAt(i);
      if (moonbitlang$core$strconv$$lower(c1) !== moonbitlang$core$strconv$$lower(c2)) {
        return false;
      }
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$strconv$$to_digit(c) {
  return c - 48 | 0;
}
function moonbitlang$core$strconv$$StringSlice$fold_digits$4$(self, init, f) {
  let ret = init;
  let len = 0;
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < moonbitlang$core$strconv$$StringSlice$length(self)) {
      if (!(moonbitlang$core$strconv$$is_digit(moonbitlang$core$strconv$$StringSlice$op_get(self, i)) || moonbitlang$core$strconv$$StringSlice$op_get(self, i) === 95)) {
        return { _0: moonbitlang$core$strconv$$StringSlice$subfix_unchecked(self, i), _1: ret, _2: len };
      }
      if (moonbitlang$core$strconv$$StringSlice$op_get(self, i) !== 95) {
        len = len + 1 | 0;
        ret = f(moonbitlang$core$strconv$$to_digit(moonbitlang$core$strconv$$StringSlice$op_get(self, i)), ret);
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: moonbitlang$core$strconv$$StringSlice$subfix_unchecked(self, moonbitlang$core$strconv$$StringSlice$length(self)), _1: ret, _2: len };
}
function moonbitlang$core$strconv$$StringSlice$fold_digits$0$(self, init, f) {
  let ret = init;
  let len = 0;
  let _tmp$8 = 0;
  while (true) {
    const i = _tmp$8;
    if (i < moonbitlang$core$strconv$$StringSlice$length(self)) {
      if (!(moonbitlang$core$strconv$$is_digit(moonbitlang$core$strconv$$StringSlice$op_get(self, i)) || moonbitlang$core$strconv$$StringSlice$op_get(self, i) === 95)) {
        return { _0: moonbitlang$core$strconv$$StringSlice$subfix_unchecked(self, i), _1: ret, _2: len };
      }
      if (moonbitlang$core$strconv$$StringSlice$op_get(self, i) !== 95) {
        len = len + 1 | 0;
        ret = f(moonbitlang$core$strconv$$to_digit(moonbitlang$core$strconv$$StringSlice$op_get(self, i)), ret);
      }
      _tmp$8 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: moonbitlang$core$strconv$$StringSlice$subfix_unchecked(self, moonbitlang$core$strconv$$StringSlice$length(self)), _1: ret, _2: len };
}
function moonbitlang$core$strconv$$new_UInt64_Int64(value) {
  return value;
}
const moonbitlang$core$strconv$$min_19digit_int = moonbitlang$core$strconv$$new_UInt64_Int64(1000000000000000000n);
function moonbitlang$core$strconv$$new_UInt64_Int(value) {
  return $i64_extend_i32_s(value);
}
function moonbitlang$core$strconv$$UInt64$op_mul(self, b) {
  return moonbitlang$core$strconv$$new_UInt64_Int64(BigInt.asIntN(64, self * b));
}
function moonbitlang$core$strconv$$UInt64$op_add(self, b) {
  return moonbitlang$core$strconv$$new_UInt64_Int64(BigInt.asIntN(64, self + b));
}
function moonbitlang$core$strconv$$parse_digits(s, x) {
  return moonbitlang$core$strconv$$StringSlice$fold_digits$0$(s, x, function (digit, acc) {
    return moonbitlang$core$strconv$$UInt64$op_add(moonbitlang$core$strconv$$UInt64$op_mul(acc, moonbitlang$core$strconv$$new_UInt64_Int(10)), moonbitlang$core$strconv$$new_UInt64_Int(digit));
  });
}
function moonbitlang$core$strconv$$try_parse_19digits(s, x) {
  let x$2 = x;
  let s$2 = s;
  let len = 0;
  while (true) {
    if (moonbitlang$core$builtin$$op_lt$0$(x$2, moonbitlang$core$strconv$$min_19digit_int) && moonbitlang$core$strconv$$StringSlice$first_is_digit(s$2) || moonbitlang$core$strconv$$StringSlice$first_is(s$2, 95)) {
      if (moonbitlang$core$strconv$$StringSlice$first_is(s$2, 95)) {
        s$2 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$2);
      }
      len = len + 1 | 0;
      x$2 = moonbitlang$core$strconv$$UInt64$op_add(moonbitlang$core$strconv$$UInt64$op_mul(x$2, moonbitlang$core$strconv$$new_UInt64_Int(10)), moonbitlang$core$strconv$$new_UInt64_Int(moonbitlang$core$strconv$$to_digit(moonbitlang$core$strconv$$StringSlice$op_get(s$2, 0))));
      s$2 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$2);
      continue;
    } else {
      break;
    }
  }
  return { _0: s$2, _1: x$2, _2: len };
}
function moonbitlang$core$strconv$$parse_scientific(s) {
  const _bind = moonbitlang$core$strconv$$StringSlice$step(s, 1);
  let s$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    s$2 = _ok._0;
  } else {
    return _bind;
  }
  let neg_exp = false;
  if (moonbitlang$core$strconv$$StringSlice$first_is_either(s$2, 45, 43)) {
    neg_exp = moonbitlang$core$strconv$$StringSlice$op_get(s$2, 0) === 45;
    s$2 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$2);
  }
  if (moonbitlang$core$strconv$$StringSlice$first_is_digit(s$2)) {
    const _bind$2 = moonbitlang$core$strconv$$StringSlice$fold_digits$4$(s$2, 0n, function (digit, exp_num) {
      return exp_num < 65536n ? BigInt.asIntN(64, BigInt.asIntN(64, 10n * exp_num) + $i64_extend_i32_s(digit)) : exp_num;
    });
    const _x = _bind$2._0;
    const _x$2 = _bind$2._1;
    return neg_exp ? new Option$Some$5$({ _0: _x, _1: BigInt.asIntN(64, -_x$2) }) : new Option$Some$5$({ _0: _x, _1: _x$2 });
  } else {
    return Option$None$5$;
  }
}
function moonbitlang$core$strconv$$parse_number(s) {
  let s$2 = moonbitlang$core$strconv$$full_slice(s);
  const start = s$2;
  let negative = false;
  if (moonbitlang$core$strconv$$StringSlice$first_is(s$2, 45)) {
    negative = true;
    s$2 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$2);
  } else {
    if (moonbitlang$core$strconv$$StringSlice$first_is(s$2, 43)) {
      s$2 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$2);
    }
  }
  if (moonbitlang$core$strconv$$StringSlice$is_empty(s$2)) {
    return Option$None$6$;
  }
  const _bind = moonbitlang$core$strconv$$parse_digits(s$2, moonbitlang$core$strconv$$new_UInt64_Int(0));
  const _x = _bind._0;
  const _x$2 = _bind._1;
  const _x$3 = _bind._2;
  let mantissa = _x$2;
  let s$3 = _x;
  let n_digits = _x$3;
  let n_after_dot = 0;
  let exponent = 0n;
  if (moonbitlang$core$strconv$$StringSlice$first_is(s$3, 46)) {
    s$3 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$3);
    const _bind$2 = moonbitlang$core$strconv$$parse_digits(s$3, mantissa);
    const _x$4 = _bind$2._0;
    const _x$5 = _bind$2._1;
    const _x$6 = _bind$2._2;
    s$3 = _x$4;
    mantissa = _x$5;
    n_after_dot = _x$6;
    exponent = BigInt.asIntN(64, -$i64_extend_i32_s(n_after_dot));
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return Option$None$6$;
  }
  if (moonbitlang$core$strconv$$StringSlice$first_is_either(s$3, 101, 69)) {
    const _bind$3 = moonbitlang$core$strconv$$parse_scientific(s$3);
    let _bind$4;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _bind$4 = _ok._0;
    } else {
      return _bind$3;
    }
    const _x$7 = _bind$4._0;
    const _x$8 = _bind$4._1;
    s$3 = _x$7;
    exponent = BigInt.asIntN(64, exponent + _x$8);
  }
  const len = moonbitlang$core$strconv$$StringSlice$length(start) - moonbitlang$core$strconv$$StringSlice$length(s$3) | 0;
  if (n_digits <= 19) {
    return new Option$Some$6$({ _0: { exponent: exponent, mantissa: mantissa, negative: negative, many_digits: false }, _1: len });
  }
  n_digits = n_digits - 19 | 0;
  let many_digits = false;
  let p = start;
  while (true) {
    if (moonbitlang$core$strconv$$StringSlice$first_is_either(p, 48, 46)) {
      n_digits = n_digits - ((moonbitlang$core$strconv$$StringSlice$op_get(p, 0) - 46 | 0) / 2 | 0) | 0;
      p = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(p);
      continue;
    } else {
      break;
    }
  }
  let mantissa$2 = mantissa;
  if (n_digits > 0) {
    many_digits = true;
    mantissa$2 = moonbitlang$core$strconv$$new_UInt64_Int64(0n);
    const _bind$5 = moonbitlang$core$strconv$$try_parse_19digits(start, mantissa$2);
    const _x$9 = _bind$5._0;
    const _x$10 = _bind$5._1;
    const _x$11 = _bind$5._2;
    mantissa$2 = _x$10;
    let _tmp$9;
    if (moonbitlang$core$builtin$$op_ge$0$(mantissa$2, moonbitlang$core$strconv$$min_19digit_int)) {
      _tmp$9 = _x$11;
    } else {
      const _bind$6 = moonbitlang$core$strconv$$StringSlice$step(_x$9, 1);
      let s$4;
      if (_bind$6.$tag === 1) {
        const _ok$2 = _bind$6;
        s$4 = _ok$2._0;
      } else {
        return _bind$6;
      }
      const _bind$7 = moonbitlang$core$strconv$$try_parse_19digits(s$4, mantissa$2);
      const _x$12 = _bind$7._1;
      const _x$13 = _bind$7._2;
      mantissa$2 = _x$12;
      _tmp$9 = _x$13;
    }
    exponent = $i64_extend_i32_s(_tmp$9);
    exponent = BigInt.asIntN(64, exponent + 0n);
  }
  return new Option$Some$6$({ _0: { exponent: exponent, mantissa: mantissa$2, negative: negative, many_digits: many_digits }, _1: len });
}
function moonbitlang$core$strconv$$parse_inf_nan$46$parse_inf_rest$7$(s) {
  return moonbitlang$core$strconv$$StringSlice$length(s) >= 8 && moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(moonbitlang$core$strconv$$StringSlice$subfix_unchecked(s, 3), "inity") ? 8 : 3;
}
function moonbitlang$core$strconv$$parse_inf_nan(s) {
  const s$2 = moonbitlang$core$strconv$$full_slice(s);
  if (moonbitlang$core$strconv$$StringSlice$length(s$2) >= 3) {
    if (moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(s$2, "nan")) {
      return new Option$Some$8$({ _0: moonbitlang$core$double$$Double$nan(), _1: 3 });
    } else {
      if (moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(s$2, "inf")) {
        return new Option$Some$8$({ _0: moonbitlang$core$double$$Double$inf(1), _1: moonbitlang$core$strconv$$parse_inf_nan$46$parse_inf_rest$7$(s$2) });
      } else {
        if (moonbitlang$core$strconv$$StringSlice$length(s$2) >= 4) {
          if (moonbitlang$core$strconv$$StringSlice$first_is(s$2, 43)) {
            const s$3 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$2);
            if (moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(s$3, "nan")) {
              return new Option$Some$8$({ _0: moonbitlang$core$double$$Double$nan(), _1: 4 });
            } else {
              if (moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(s$3, "inf")) {
                return new Option$Some$8$({ _0: moonbitlang$core$double$$Double$inf(1), _1: 1 + moonbitlang$core$strconv$$parse_inf_nan$46$parse_inf_rest$7$(s$3) | 0 });
              }
            }
          } else {
            if (moonbitlang$core$strconv$$StringSlice$first_is(s$2, 45)) {
              const s$4 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$2);
              if (moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(s$4, "nan")) {
                return new Option$Some$8$({ _0: moonbitlang$core$double$$Double$nan(), _1: 4 });
              } else {
                if (moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(s$4, "inf")) {
                  return new Option$Some$8$({ _0: moonbitlang$core$double$$Double$inf(-1), _1: 1 + moonbitlang$core$strconv$$parse_inf_nan$46$parse_inf_rest$7$(s$4) | 0 });
                }
              }
            }
          }
        }
      }
    }
  }
  return Option$None$8$;
}
const moonbitlang$core$strconv$$mantissa_explicit_bits = 52;
const moonbitlang$core$strconv$$min_exponent_fast_path = -22n;
const moonbitlang$core$strconv$$max_exponent_fast_path = 22n;
const moonbitlang$core$strconv$$max_exponent_disguised_fast_path = 37n;
function moonbitlang$core$strconv$$UInt64$lsl(self, b) {
  return moonbitlang$core$strconv$$new_UInt64_Int64(BigInt.asIntN(64, self << (BigInt(b) & 63n)));
}
const moonbitlang$core$strconv$$max_mantissa_fast_path = moonbitlang$core$strconv$$UInt64$lsl(moonbitlang$core$strconv$$new_UInt64_Int(2), moonbitlang$core$strconv$$mantissa_explicit_bits);
const moonbitlang$core$strconv$$table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+12, 1e+13, 1e+14, 1e+15, 1e+16, 1e+17, 1e+18, 1e+19, 1e+20, 1e+21, 1e+22, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function moonbitlang$core$strconv$$pow10_fast_path(exponent) {
  return moonbitlang$core$strconv$$table[exponent & 31];
}
function moonbitlang$core$strconv$$UInt64$to_double(self) {
  return self >= 0n ? $f64_convert_i64_s(self) : $f64_convert_i64_s(moonbitlang$core$int64$$Int64$max_value()) + $f64_convert_i64_s(BigInt.asIntN(64, self - moonbitlang$core$int64$$Int64$min_value())) + 1;
}
const moonbitlang$core$strconv$$int_pow10 = [moonbitlang$core$strconv$$new_UInt64_Int64(1n), moonbitlang$core$strconv$$new_UInt64_Int64(10n), moonbitlang$core$strconv$$new_UInt64_Int64(100n), moonbitlang$core$strconv$$new_UInt64_Int64(1000n), moonbitlang$core$strconv$$new_UInt64_Int64(10000n), moonbitlang$core$strconv$$new_UInt64_Int64(100000n), moonbitlang$core$strconv$$new_UInt64_Int64(1000000n), moonbitlang$core$strconv$$new_UInt64_Int64(10000000n), moonbitlang$core$strconv$$new_UInt64_Int64(100000000n), moonbitlang$core$strconv$$new_UInt64_Int64(1000000000n), moonbitlang$core$strconv$$new_UInt64_Int64(10000000000n), moonbitlang$core$strconv$$new_UInt64_Int64(100000000000n), moonbitlang$core$strconv$$new_UInt64_Int64(1000000000000n), moonbitlang$core$strconv$$new_UInt64_Int64(10000000000000n), moonbitlang$core$strconv$$new_UInt64_Int64(100000000000000n), moonbitlang$core$strconv$$new_UInt64_Int64(1000000000000000n)];
function moonbitlang$core$strconv$$UInt64$checked_mul(self, b) {
  if (self === 0n || b === 0n) {
    return new Option$Some$9$(moonbitlang$core$strconv$$new_UInt64_Int64(0n));
  }
  if (self === 1n) {
    return new Option$Some$9$(b);
  }
  if (b === 1n) {
    return new Option$Some$9$(self);
  }
  if (b < 0n || self < 0n) {
    return Option$None$9$;
  }
  const r = moonbitlang$core$strconv$$new_UInt64_Int64(BigInt.asIntN(64, moonbitlang$core$int64$$Int64$max_value() / b));
  const q = moonbitlang$core$strconv$$new_UInt64_Int64(BigInt.asIntN(64, 1n / b));
  if (moonbitlang$core$builtin$$op_lt$0$(moonbitlang$core$strconv$$UInt64$op_add(moonbitlang$core$strconv$$UInt64$op_add(r, r), q), self)) {
    return Option$None$9$;
  }
  return new Option$Some$9$(moonbitlang$core$strconv$$UInt64$op_mul(self, b));
}
function moonbitlang$core$strconv$$Number$is_fast_path(self) {
  return moonbitlang$core$strconv$$min_exponent_fast_path <= self.exponent && (self.exponent <= moonbitlang$core$strconv$$max_exponent_disguised_fast_path && (moonbitlang$core$builtin$$op_le$0$(self.mantissa, moonbitlang$core$strconv$$max_mantissa_fast_path) && !self.many_digits));
}
function moonbitlang$core$strconv$$Number$try_fast_path(self) {
  if (moonbitlang$core$strconv$$Number$is_fast_path(self)) {
    let value;
    if (self.exponent <= moonbitlang$core$strconv$$max_exponent_fast_path) {
      const value$2 = moonbitlang$core$strconv$$UInt64$to_double(self.mantissa);
      value = self.exponent < 0n ? value$2 / moonbitlang$core$strconv$$pow10_fast_path(-$i32_trunc_i64_s(self.exponent)) : value$2 * moonbitlang$core$strconv$$pow10_fast_path($i32_trunc_i64_s(self.exponent));
    } else {
      const shift = BigInt.asIntN(64, self.exponent - moonbitlang$core$strconv$$max_exponent_fast_path);
      const _bind = moonbitlang$core$strconv$$UInt64$checked_mul(self.mantissa, moonbitlang$core$strconv$$int_pow10[$i32_trunc_i64_s(shift)]);
      let mantissa;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        mantissa = _ok._0;
      } else {
        return _bind;
      }
      if (moonbitlang$core$builtin$$op_gt$0$(mantissa, moonbitlang$core$strconv$$max_mantissa_fast_path)) {
        return Option$None$10$;
      }
      value = moonbitlang$core$strconv$$UInt64$to_double(mantissa) * moonbitlang$core$strconv$$pow10_fast_path($i32_trunc_i64_s(moonbitlang$core$strconv$$max_exponent_fast_path));
    }
    if (self.negative) {
      value = -value;
    }
    return new Option$Some$10$(value);
  } else {
    return Option$None$10$;
  }
}
function moonbitlang$core$strconv$$parse_double(str) {
  if (str.length === 0) {
    return new Result$Err$2$(moonbitlang$core$strconv$$syntax_err);
  }
  if (!moonbitlang$core$strconv$$check_underscore(str)) {
    return new Result$Err$2$(moonbitlang$core$strconv$$syntax_err);
  }
  const _bind = moonbitlang$core$strconv$$parse_number(str);
  let _bind$2;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _x = _Some._0;
    _bind$2 = _x;
  } else {
    const _bind$3 = moonbitlang$core$strconv$$parse_inf_nan(str);
    if (_bind$3.$tag === 1) {
      const _Some$2 = _bind$3;
      const _x$2 = _Some$2._0;
      const _x$3 = _x$2._0;
      const _x$4 = _x$2._1;
      if (str.length !== _x$4) {
        return new Result$Err$2$(moonbitlang$core$strconv$$syntax_err);
      } else {
        return new Result$Ok$2$(_x$3);
      }
    } else {
      return new Result$Err$2$(moonbitlang$core$strconv$$syntax_err);
    }
  }
  const _x$5 = _bind$2._0;
  const _x$6 = _bind$2._1;
  if (str.length !== _x$6) {
    return new Result$Err$2$(moonbitlang$core$strconv$$syntax_err);
  }
  const _bind$4 = moonbitlang$core$strconv$$Number$try_fast_path(_x$5);
  if (_bind$4.$tag === 1) {
    const _Some$3 = _bind$4;
    const _x$7 = _Some$3._0;
    return new Result$Ok$2$(_x$7);
  } else {
    const _bind$5 = moonbitlang$core$strconv$$Decimal$parse_decimal(str);
    let ret;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      ret = _ok._0;
    } else {
      return _bind$5;
    }
    return moonbitlang$core$strconv$$Decimal$to_double(ret);
  }
}
function moonbitlang$core$strconv$$UInt64$compare(self, b) {
  return self >= 0n && b >= 0n || self < 0n && b < 0n ? $compare_int64(self, b) : self < 0n ? 1 : -1;
}
function moonbitlang$core$vec$$Vec$realloc$11$(self) {
  const old_cap = self.len;
  const new_cap = old_cap === 0 ? 8 : Math.imul(old_cap, 2) | 0;
  const new_buf = new Array(new_cap);
  let _tmp$10 = 0;
  while (true) {
    const i = _tmp$10;
    if (i < old_cap) {
      new_buf[i] = self.buf[i];
      _tmp$10 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.buf = new_buf;
}
function moonbitlang$core$vec$$Vec$push$11$(self, value) {
  if (self.len === self.buf.length) {
    moonbitlang$core$vec$$Vec$realloc$11$(self);
  }
  self.buf[self.len] = value;
  self.len = self.len + 1 | 0;
}
function moonbitlang$core$vec$$Vec$new$11$() {
  return { buf: new Array(0), len: 0 };
}
function moonbitlang$core$map$$empty$12$() {
  return $64$moonbitlang$47$core$47$map$46$Map$Empty$13$;
}
function moonbitlang$core$map$$singleton$12$(key, value) {
  return new $64$moonbitlang$47$core$47$map$46$Map$Tree$13$(key, value, 1, $64$moonbitlang$47$core$47$map$46$Map$Empty$13$, $64$moonbitlang$47$core$47$map$46$Map$Empty$13$);
}
function moonbitlang$core$map$$Map$size$12$(self) {
  if (self.$tag === 0) {
    return 0;
  } else {
    const _Tree = self;
    const _x = _Tree._2;
    return _x;
  }
}
function moonbitlang$core$map$$new$12$(key, value, l, r) {
  const size = (moonbitlang$core$map$$Map$size$12$(l) + moonbitlang$core$map$$Map$size$12$(r) | 0) + 1 | 0;
  return new $64$moonbitlang$47$core$47$map$46$Map$Tree$13$(key, value, size, l, r);
}
const moonbitlang$core$map$$ratio = 5;
function moonbitlang$core$map$$balance$12$(key, value, l, r) {
  const ln = moonbitlang$core$map$$Map$size$12$(l);
  const rn = moonbitlang$core$map$$Map$size$12$(r);
  if ((ln + rn | 0) < 2) {
    return moonbitlang$core$map$$new$12$(key, value, l, r);
  } else {
    if (rn > (Math.imul(moonbitlang$core$map$$ratio, ln) | 0)) {
      let _bind$2;
      if (r.$tag === 1) {
        const _Tree = r;
        const _x = _Tree._3;
        const _x$2 = _Tree._4;
        _bind$2 = { _0: _x, _1: _x$2 };
      } else {
        _bind$2 = $raise("unreachable");
      }
      const _x$3 = _bind$2._0;
      const _x$4 = _bind$2._1;
      const rln = moonbitlang$core$map$$Map$size$12$(_x$3);
      const rrn = moonbitlang$core$map$$Map$size$12$(_x$4);
      if (rln < rrn) {
        if (r.$tag === 1) {
          const _Tree$2 = r;
          const _x$5 = _Tree$2._0;
          const _x$6 = _Tree$2._1;
          const _x$7 = _Tree$2._3;
          const _x$8 = _Tree$2._4;
          return moonbitlang$core$map$$new$12$(_x$5, _x$6, moonbitlang$core$map$$new$12$(key, value, l, _x$7), _x$8);
        } else {
          return $raise("single_l error");
        }
      } else {
        _J$_arm: {
          if (r.$tag === 1) {
            const _Tree$3 = r;
            const _x$9 = _Tree$3._0;
            const _x$10 = _Tree$3._1;
            const _x$11 = _Tree$3._3;
            if (_x$11.$tag === 1) {
              const _Tree$4 = _x$11;
              const _x$12 = _Tree$4._0;
              const _x$13 = _Tree$4._1;
              const _x$14 = _Tree$4._3;
              const _x$15 = _Tree$4._4;
              const _x$16 = _Tree$3._4;
              return moonbitlang$core$map$$new$12$(_x$12, _x$13, moonbitlang$core$map$$new$12$(key, value, l, _x$14), moonbitlang$core$map$$new$12$(_x$9, _x$10, _x$15, _x$16));
            } else {
              break _J$_arm;
            }
          } else {
            break _J$_arm;
          }
        }
        return $raise("double_l error");
      }
    } else {
      if (ln > (Math.imul(moonbitlang$core$map$$ratio, rn) | 0)) {
        let _bind;
        if (l.$tag === 1) {
          const _Tree$5 = l;
          const _x$17 = _Tree$5._3;
          const _x$18 = _Tree$5._4;
          _bind = { _0: _x$17, _1: _x$18 };
        } else {
          _bind = $raise("unreachable");
        }
        const _x$19 = _bind._0;
        const _x$20 = _bind._1;
        const lln = moonbitlang$core$map$$Map$size$12$(_x$19);
        const lrn = moonbitlang$core$map$$Map$size$12$(_x$20);
        if (lrn < lln) {
          if (l.$tag === 1) {
            const _Tree$6 = l;
            const _x$21 = _Tree$6._0;
            const _x$22 = _Tree$6._1;
            const _x$23 = _Tree$6._3;
            const _x$24 = _Tree$6._4;
            return moonbitlang$core$map$$new$12$(_x$21, _x$22, _x$23, moonbitlang$core$map$$new$12$(key, value, _x$24, r));
          } else {
            return $raise("single_r error");
          }
        } else {
          _J$_arm$2: {
            if (l.$tag === 1) {
              const _Tree$7 = l;
              const _x$25 = _Tree$7._0;
              const _x$26 = _Tree$7._1;
              const _x$27 = _Tree$7._3;
              const _x$28 = _Tree$7._4;
              if (_x$28.$tag === 1) {
                const _Tree$8 = _x$28;
                const _x$29 = _Tree$8._0;
                const _x$30 = _Tree$8._1;
                const _x$31 = _Tree$8._3;
                const _x$32 = _Tree$8._4;
                return moonbitlang$core$map$$new$12$(_x$29, _x$30, moonbitlang$core$map$$new$12$(_x$25, _x$26, _x$27, _x$31), moonbitlang$core$map$$new$12$(key, value, _x$32, r));
              } else {
                break _J$_arm$2;
              }
            } else {
              break _J$_arm$2;
            }
          }
          return $raise("double_r error");
        }
      } else {
        return moonbitlang$core$map$$new$12$(key, value, l, r);
      }
    }
  }
}
function moonbitlang$core$map$$Map$insert$12$(self, key, value) {
  if (self.$tag === 0) {
    return moonbitlang$core$map$$singleton$12$(key, value);
  } else {
    const _Tree = self;
    const _x = _Tree._0;
    const _x$2 = _Tree._1;
    const _x$3 = _Tree._3;
    const _x$4 = _Tree._4;
    const _bind = moonbitlang$core$string$$String$compare(key, _x);
    switch (_bind) {
      case -1: {
        return moonbitlang$core$map$$balance$12$(_x, _x$2, moonbitlang$core$map$$Map$insert$12$(_x$3, key, value), _x$4);
      }
      case 1: {
        return moonbitlang$core$map$$balance$12$(_x, _x$2, _x$3, moonbitlang$core$map$$Map$insert$12$(_x$4, key, value));
      }
      default: {
        return moonbitlang$core$map$$new$12$(_x, value, _x$3, _x$4);
      }
    }
  }
}
function moonbitlang$core$json5$$offset_to_position(input, offset) {
  let line = 1;
  let column = 0;
  let _tmp$11 = 0;
  while (true) {
    const i = _tmp$11;
    if (i < offset) {
      const c = input.charCodeAt(i);
      if (c === 10) {
        line = line + 1 | 0;
        column = 0;
      } else {
        column = column + 1 | 0;
      }
      _tmp$11 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { line: line, column: column };
}
function moonbitlang$core$json5$$invalid_char(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new ParseError$InvalidChar(moonbitlang$core$json5$$offset_to_position(ctx.input, offset), ctx.input.charCodeAt(offset));
}
function moonbitlang$core$json5$$invalid_char$46$shift$46$default() {
  return 0;
}
function moonbitlang$core$json5$$CharClass$from_array(array) {
  return array;
}
const moonbitlang$core$json5$$non_ascii_whitespace = moonbitlang$core$json5$$CharClass$from_array([{ _0: 160, _1: 160 }, { _0: 5760, _1: 5760 }, { _0: 8192, _1: 8202 }, { _0: 8232, _1: 8233 }, { _0: 8239, _1: 8239 }, { _0: 8287, _1: 8287 }, { _0: 12288, _1: 12288 }, { _0: 65279, _1: 65279 }]);
function moonbitlang$core$json5$$CharClass$contains(self, c) {
  let _tmp$12 = 0;
  let _tmp$13 = self.length;
  while (true) {
    const left = _tmp$12;
    const right = _tmp$13;
    if (left < right) {
      const middle = (left + right | 0) / 2 | 0;
      const _bind = self[middle];
      const _x = _bind._0;
      const _x$2 = _bind._1;
      if (c < _x) {
        _tmp$13 = middle;
        continue;
      } else {
        if (c > _x$2) {
          _tmp$12 = middle + 1 | 0;
          continue;
        } else {
          return true;
        }
      }
    } else {
      return false;
    }
  }
}
function moonbitlang$core$json5$$StringBuilder$to_string(self) {
  return self.buffer;
}
function moonbitlang$core$json5$$StringBuilder$add_char(self, c) {
  self.buffer = `${self.buffer}${moonbitlang$core$char$$Char$to_string(c)}`;
}
function moonbitlang$core$json5$$read_char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const c = ctx.input.charCodeAt(ctx.offset);
    ctx.offset = ctx.offset + 1 | 0;
    const c1 = c;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const c2 = ctx.input.charCodeAt(ctx.offset);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c;
  } else {
    return -1;
  }
}
function moonbitlang$core$json5$$lex_hex_digits(ctx, n) {
  let r = 0;
  let _tmp$14 = 0;
  while (true) {
    const i = _tmp$14;
    if (i < n) {
      const _bind = moonbitlang$core$json5$$read_char(ctx);
      const _Some = _bind;
      if (_bind >= 0) {
        const _x = _Some;
        if (_x >= 65) {
          const d = ((_x & ~32) - 65 | 0) + 10 | 0;
          if (d > 15) {
            return new Result$Err$14$(moonbitlang$core$json5$$invalid_char(ctx, -1));
          }
          r = r << 4 | d;
        } else {
          if (_x >= 48) {
            const d$2 = _x - 48 | 0;
            if (d$2 > 9) {
              return new Result$Err$14$(moonbitlang$core$json5$$invalid_char(ctx, -1));
            }
            r = r << 4 | d$2;
          } else {
            return new Result$Err$14$(moonbitlang$core$json5$$invalid_char(ctx, -1));
          }
        }
      } else {
        return new Result$Err$14$(ParseError$InvalidEof);
      }
      _tmp$14 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$14$(r);
}
function moonbitlang$core$json5$$StringBuilder$add_substring(self, s, start, end) {
  self.buffer = `${self.buffer}${moonbitlang$core$string$$String$substring(s, start, end)}`;
}
function moonbitlang$core$json5$$StringBuilder$make() {
  return { buffer: "" };
}
function moonbitlang$core$json5$$lex_string(ctx, quote) {
  const buf = moonbitlang$core$json5$$StringBuilder$make();
  const start = { val: ctx.offset };
  const flush = function (end) {
    if (start.val > 0 && end > start.val) {
      moonbitlang$core$json5$$StringBuilder$add_substring(buf, ctx.input, start.val, end);
      return;
    } else {
      return;
    }
  };
  while (true) {
    _J$_continue: {
      _L$3: {
        _J$_arm$2: {
          let c;
          _L$2: {
            _J$_arm: {
              const _bind = moonbitlang$core$json5$$read_char(ctx);
              const _Some = _bind;
              if (_bind >= 0) {
                const _x = _Some;
                switch (_x) {
                  case 39: {
                    c = _x;
                    break _J$_arm;
                  }
                  case 34: {
                    c = _x;
                    break _J$_arm;
                  }
                  case 10: {
                    break _J$_arm$2;
                  }
                  case 13: {
                    break _J$_arm$2;
                  }
                  case 92: {
                    flush(ctx.offset - 1 | 0);
                    const _bind$2 = moonbitlang$core$json5$$read_char(ctx);
                    const _Some$2 = _bind$2;
                    if (_bind$2 >= 0) {
                      const _x$2 = _Some$2;
                      switch (_x$2) {
                        case 98: {
                          moonbitlang$core$json5$$StringBuilder$add_char(buf, 8);
                          break;
                        }
                        case 102: {
                          moonbitlang$core$json5$$StringBuilder$add_char(buf, 12);
                          break;
                        }
                        case 110: {
                          moonbitlang$core$json5$$StringBuilder$add_char(buf, 10);
                          break;
                        }
                        case 114: {
                          moonbitlang$core$json5$$StringBuilder$add_char(buf, 13);
                          break;
                        }
                        case 116: {
                          moonbitlang$core$json5$$StringBuilder$add_char(buf, 9);
                          break;
                        }
                        case 118: {
                          moonbitlang$core$json5$$StringBuilder$add_char(buf, 11);
                          break;
                        }
                        case 39: {
                          moonbitlang$core$json5$$StringBuilder$add_char(buf, 39);
                          break;
                        }
                        case 34: {
                          moonbitlang$core$json5$$StringBuilder$add_char(buf, 34);
                          break;
                        }
                        case 92: {
                          moonbitlang$core$json5$$StringBuilder$add_char(buf, 92);
                          break;
                        }
                        case 48: {
                          const _bind$3 = moonbitlang$core$json5$$read_char(ctx);
                          const _Some$3 = _bind$3;
                          if (_bind$3 >= 0) {
                            const _x$3 = _Some$3;
                            ctx.offset = ctx.offset - 1 | 0;
                            if (_x$3 >= 48 && _x$3 <= 57) {
                              return new Result$Err$15$(moonbitlang$core$json5$$invalid_char(ctx, moonbitlang$core$json5$$invalid_char$46$shift$46$default()));
                            }
                          } else {
                            if (_bind$3 === -1) {
                            } else {
                              $raise("match_failure");
                            }
                          }
                          moonbitlang$core$json5$$StringBuilder$add_char(buf, 0);
                          break;
                        }
                        case 120: {
                          const _bind$4 = moonbitlang$core$json5$$lex_hex_digits(ctx, 2);
                          let c$2;
                          if (_bind$4.$tag === 1) {
                            const _ok = _bind$4;
                            c$2 = _ok._0;
                          } else {
                            return _bind$4;
                          }
                          moonbitlang$core$json5$$StringBuilder$add_char(buf, c$2);
                          break;
                        }
                        case 117: {
                          const _bind$5 = moonbitlang$core$json5$$lex_hex_digits(ctx, 4);
                          let c$3;
                          if (_bind$5.$tag === 1) {
                            const _ok$2 = _bind$5;
                            c$3 = _ok$2._0;
                          } else {
                            return _bind$5;
                          }
                          moonbitlang$core$json5$$StringBuilder$add_char(buf, c$3);
                          break;
                        }
                        default: {
                          if (_x$2 >= 49 && _x$2 <= 57) {
                            return new Result$Err$15$(moonbitlang$core$json5$$invalid_char(ctx, -1));
                          }
                          moonbitlang$core$json5$$StringBuilder$add_char(buf, _x$2);
                        }
                      }
                    } else {
                      return new Result$Err$15$(ParseError$InvalidEof);
                    }
                    start.val = ctx.offset;
                    break;
                  }
                  default: {
                    break _J$_continue;
                  }
                }
              } else {
                return new Result$Err$15$(ParseError$InvalidEof);
              }
              break _L$2;
            }
            if (c === quote) {
              flush(ctx.offset - 1 | 0);
              break;
            }
          }
          break _L$3;
        }
        return new Result$Err$15$(moonbitlang$core$json5$$invalid_char(ctx, -1));
      }
      break _J$_continue;
    }
    continue;
  }
  return new Result$Ok$15$(moonbitlang$core$json5$$StringBuilder$to_string(buf));
}
function moonbitlang$core$json5$$lex_assert_char(ctx, c) {
  const _bind = moonbitlang$core$json5$$read_char(ctx);
  const _Some = _bind;
  if (_bind >= 0) {
    const _x = _Some;
    return c === _x ? new Result$Ok$16$(undefined) : new Result$Err$16$(moonbitlang$core$json5$$invalid_char(ctx, -1));
  } else {
    return new Result$Err$16$(ParseError$InvalidEof);
  }
}
function moonbitlang$core$json5$$lex_infinity(ctx) {
  const _bind = moonbitlang$core$json5$$lex_assert_char(ctx, 110);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = moonbitlang$core$json5$$lex_assert_char(ctx, 102);
  if (_bind$2.$tag === 1) {
    const _ok$2 = _bind$2;
    _ok$2._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = moonbitlang$core$json5$$lex_assert_char(ctx, 105);
  if (_bind$3.$tag === 1) {
    const _ok$3 = _bind$3;
    _ok$3._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = moonbitlang$core$json5$$lex_assert_char(ctx, 110);
  if (_bind$4.$tag === 1) {
    const _ok$4 = _bind$4;
    _ok$4._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = moonbitlang$core$json5$$lex_assert_char(ctx, 105);
  if (_bind$5.$tag === 1) {
    const _ok$5 = _bind$5;
    _ok$5._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = moonbitlang$core$json5$$lex_assert_char(ctx, 116);
  if (_bind$6.$tag === 1) {
    const _ok$6 = _bind$6;
    _ok$6._0;
  } else {
    return _bind$6;
  }
  return moonbitlang$core$json5$$lex_assert_char(ctx, 121);
}
function moonbitlang$core$json5$$lex_number_end(ctx, start, end) {
  const s = moonbitlang$core$string$$String$substring(ctx.input, start, end);
  const _bind = moonbitlang$core$strconv$$parse_double(s);
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    const _x = _Ok._0;
    return new Result$Ok$17$(_x);
  } else {
    return new Result$Err$17$(new ParseError$InvalidNumber(moonbitlang$core$json5$$offset_to_position(ctx.input, start), s));
  }
}
function moonbitlang$core$json5$$lex_decimal_exponent_integer(ctx, start) {
  while (true) {
    _J$_continue: {
      const _bind = moonbitlang$core$json5$$read_char(ctx);
      const _Some = _bind;
      if (_bind >= 0) {
        const _x = _Some;
        if (_x >= 48 && _x <= 57) {
          break _J$_continue;
        }
        ctx.offset = ctx.offset - 1 | 0;
        return moonbitlang$core$json5$$lex_number_end(ctx, start, ctx.offset);
      } else {
        return moonbitlang$core$json5$$lex_number_end(ctx, start, ctx.offset);
      }
    }
    continue;
  }
}
function moonbitlang$core$json5$$lex_decimal_exponent_sign(ctx, start) {
  const _bind = moonbitlang$core$json5$$read_char(ctx);
  const _Some = _bind;
  if (_bind >= 0) {
    const _x = _Some;
    if (_x >= 48 && _x <= 57) {
      return moonbitlang$core$json5$$lex_decimal_exponent_integer(ctx, start);
    }
    ctx.offset = ctx.offset - 1 | 0;
    return new Result$Err$17$(moonbitlang$core$json5$$invalid_char(ctx, moonbitlang$core$json5$$invalid_char$46$shift$46$default()));
  } else {
    return new Result$Err$17$(ParseError$InvalidEof);
  }
}
function moonbitlang$core$json5$$lex_decimal_exponent(ctx, start) {
  _J$_arm: {
    const _bind = moonbitlang$core$json5$$read_char(ctx);
    const _Some = _bind;
    if (_bind >= 0) {
      const _x = _Some;
      switch (_x) {
        case 43: {
          break _J$_arm;
        }
        case 45: {
          break _J$_arm;
        }
        default: {
          if (_x >= 48 && _x <= 57) {
            return moonbitlang$core$json5$$lex_decimal_exponent_integer(ctx, start);
          }
          ctx.offset = ctx.offset - 1 | 0;
          return new Result$Err$17$(moonbitlang$core$json5$$invalid_char(ctx, moonbitlang$core$json5$$invalid_char$46$shift$46$default()));
        }
      }
    } else {
      return new Result$Err$17$(ParseError$InvalidEof);
    }
  }
  return moonbitlang$core$json5$$lex_decimal_exponent_sign(ctx, start);
}
function moonbitlang$core$json5$$lex_decimal_fraction(ctx, start) {
  while (true) {
    _J$_continue: {
      _J$_arm: {
        const _bind = moonbitlang$core$json5$$read_char(ctx);
        const _Some = _bind;
        if (_bind >= 0) {
          const _x = _Some;
          switch (_x) {
            case 101: {
              break _J$_arm;
            }
            case 69: {
              break _J$_arm;
            }
            default: {
              if (_x >= 48 && _x <= 57) {
                break _J$_continue;
              }
              ctx.offset = ctx.offset - 1 | 0;
              return moonbitlang$core$json5$$lex_number_end(ctx, start, ctx.offset);
            }
          }
        } else {
          return moonbitlang$core$json5$$lex_number_end(ctx, start, ctx.offset);
        }
      }
      return moonbitlang$core$json5$$lex_decimal_exponent(ctx, start);
    }
    continue;
  }
}
function moonbitlang$core$json5$$lex_decimal_point(ctx, start) {
  _J$_arm: {
    const _bind = moonbitlang$core$json5$$read_char(ctx);
    const _Some = _bind;
    if (_bind >= 0) {
      const _x = _Some;
      switch (_x) {
        case 101: {
          break _J$_arm;
        }
        case 69: {
          break _J$_arm;
        }
        default: {
          if (_x >= 48 && _x <= 57) {
            return moonbitlang$core$json5$$lex_decimal_fraction(ctx, start);
          }
          ctx.offset = ctx.offset - 1 | 0;
          return moonbitlang$core$json5$$lex_number_end(ctx, start, ctx.offset);
        }
      }
    } else {
      return moonbitlang$core$json5$$lex_number_end(ctx, start, ctx.offset);
    }
  }
  return moonbitlang$core$json5$$lex_decimal_exponent(ctx, start);
}
function moonbitlang$core$json5$$lex_decimal_integer(ctx, start) {
  while (true) {
    _J$_continue: {
      _J$_arm: {
        const _bind = moonbitlang$core$json5$$read_char(ctx);
        const _Some = _bind;
        if (_bind >= 0) {
          const _x = _Some;
          switch (_x) {
            case 46: {
              return moonbitlang$core$json5$$lex_decimal_point(ctx, start);
            }
            case 101: {
              break _J$_arm;
            }
            case 69: {
              break _J$_arm;
            }
            default: {
              if (_x >= 48 && _x <= 57) {
                break _J$_continue;
              }
              ctx.offset = ctx.offset - 1 | 0;
              return moonbitlang$core$json5$$lex_number_end(ctx, start, ctx.offset);
            }
          }
        } else {
          return moonbitlang$core$json5$$lex_number_end(ctx, start, ctx.offset);
        }
      }
      return moonbitlang$core$json5$$lex_decimal_exponent(ctx, start);
    }
    continue;
  }
}
function moonbitlang$core$json5$$hex_digit_to_int(c) {
  return c >= 65 ? ((c & ~32) - 65 | 0) + 10 | 0 : c - 48 | 0;
}
function moonbitlang$core$json5$$lex_hexadecimal_integer(ctx, n) {
  let _tmp$15 = $f64_convert_i32_s(n);
  while (true) {
    const n$2 = _tmp$15;
    const _bind = moonbitlang$core$json5$$read_char(ctx);
    const _Some = _bind;
    if (_bind >= 0) {
      const _x = _Some;
      if (_x >= 48 && _x <= 57 || (_x >= 97 && _x <= 102 || _x >= 65 && _x <= 70)) {
        _tmp$15 = n$2 * 16 + $f64_convert_i32_s(moonbitlang$core$json5$$hex_digit_to_int(_x));
        continue;
      }
      ctx.offset = ctx.offset - 1 | 0;
      return new Result$Ok$17$(n$2);
    } else {
      return new Result$Ok$17$(n$2);
    }
  }
}
function moonbitlang$core$json5$$lex_hexadecimal(ctx, neg) {
  const _bind = moonbitlang$core$json5$$read_char(ctx);
  const _Some = _bind;
  if (_bind >= 0) {
    const _x = _Some;
    if (_x >= 48 && _x <= 57 || (_x >= 97 && _x <= 102 || _x >= 65 && _x <= 70)) {
      const _bind$2 = moonbitlang$core$json5$$lex_hexadecimal_integer(ctx, moonbitlang$core$json5$$hex_digit_to_int(_x));
      let n;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        n = _ok._0;
      } else {
        return _bind$2;
      }
      return new Result$Ok$17$(neg ? -n : n);
    }
    ctx.offset = ctx.offset - 1 | 0;
    return new Result$Err$17$(moonbitlang$core$json5$$invalid_char(ctx, moonbitlang$core$json5$$invalid_char$46$shift$46$default()));
  } else {
    return new Result$Err$17$(ParseError$InvalidEof);
  }
}
function moonbitlang$core$json5$$lex_zero(ctx, neg, start) {
  _J$_arm$2: {
    _J$_arm: {
      const _bind = moonbitlang$core$json5$$read_char(ctx);
      const _Some = _bind;
      if (_bind >= 0) {
        const _x = _Some;
        switch (_x) {
          case 46: {
            return moonbitlang$core$json5$$lex_decimal_point(ctx, start);
          }
          case 101: {
            break _J$_arm;
          }
          case 69: {
            break _J$_arm;
          }
          case 120: {
            break _J$_arm$2;
          }
          case 88: {
            break _J$_arm$2;
          }
          default: {
            if (_x >= 48 && _x <= 57) {
              ctx.offset = ctx.offset - 1 | 0;
              return new Result$Err$17$(moonbitlang$core$json5$$invalid_char(ctx, moonbitlang$core$json5$$invalid_char$46$shift$46$default()));
            }
            ctx.offset = ctx.offset - 1 | 0;
            return moonbitlang$core$json5$$lex_number_end(ctx, start, ctx.offset);
          }
        }
      } else {
        return moonbitlang$core$json5$$lex_number_end(ctx, start, ctx.offset);
      }
    }
    return moonbitlang$core$json5$$lex_decimal_exponent(ctx, start);
  }
  return moonbitlang$core$json5$$lex_hexadecimal(ctx, neg);
}
function moonbitlang$core$json5$$lex_decimal_point_leading(ctx, start) {
  const _bind = moonbitlang$core$json5$$read_char(ctx);
  const _Some = _bind;
  if (_bind >= 0) {
    const _x = _Some;
    if (_x >= 48 && _x <= 57) {
      return moonbitlang$core$json5$$lex_decimal_fraction(ctx, start);
    }
    ctx.offset = ctx.offset - 1 | 0;
    return new Result$Err$17$(moonbitlang$core$json5$$invalid_char(ctx, moonbitlang$core$json5$$invalid_char$46$shift$46$default()));
  } else {
    return new Result$Err$17$(ParseError$InvalidEof);
  }
}
function moonbitlang$core$json5$$lex_comment(ctx) {
  const _bind = moonbitlang$core$json5$$read_char(ctx);
  const _Some = _bind;
  if (_bind >= 0) {
    const _x = _Some;
    switch (_x) {
      case 47: {
        while (true) {
          _L$4: {
            _J$_arm: {
              const _bind$2 = moonbitlang$core$json5$$read_char(ctx);
              const _Some$2 = _bind$2;
              if (_bind$2 >= 0) {
                const _x$2 = _Some$2;
                switch (_x$2) {
                  case 10: {
                    break _J$_arm;
                  }
                  case 13: {
                    break _J$_arm;
                  }
                  case 8232: {
                    break _J$_arm;
                  }
                  case 8233: {
                    break _J$_arm;
                  }
                }
              } else {
                return new Result$Ok$16$(undefined);
              }
              break _L$4;
            }
            ctx.offset = ctx.offset - 1 | 0;
            return new Result$Ok$16$(undefined);
          }
          continue;
        }
      }
      case 42: {
        while (true) {
          const _bind$3 = moonbitlang$core$json5$$read_char(ctx);
          const _Some$3 = _bind$3;
          if (_bind$3 >= 0) {
            const _x$3 = _Some$3;
            if (_x$3 === 42) {
              const _bind$4 = moonbitlang$core$json5$$read_char(ctx);
              const _Some$4 = _bind$4;
              if (_bind$4 >= 0) {
                const _x$4 = _Some$4;
                if (_x$4 === 47) {
                  return new Result$Ok$16$(undefined);
                }
              }
            }
          } else {
            return new Result$Err$16$(ParseError$InvalidEof);
          }
          continue;
        }
      }
      default: {
        return new Result$Err$16$(moonbitlang$core$json5$$invalid_char(ctx, -1));
      }
    }
  } else {
    return new Result$Err$16$(ParseError$InvalidEof);
  }
}
function moonbitlang$core$json5$$lex_value(ctx, allow_rbracket) {
  while (true) {
    _J$_continue: {
      _J$_arm$3: {
        let c;
        _J$_arm$2: {
          _J$_arm: {
            const _bind = moonbitlang$core$json5$$read_char(ctx);
            const _Some = _bind;
            if (_bind >= 0) {
              const _x = _Some;
              switch (_x) {
                case 9: {
                  break _J$_arm;
                }
                case 11: {
                  break _J$_arm;
                }
                case 12: {
                  break _J$_arm;
                }
                case 32: {
                  break _J$_arm;
                }
                case 10: {
                  break _J$_arm;
                }
                case 13: {
                  break _J$_arm;
                }
                case 47: {
                  const _bind$2 = moonbitlang$core$json5$$lex_comment(ctx);
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _ok._0;
                  } else {
                    return _bind$2;
                  }
                  break _J$_continue;
                }
                case 123: {
                  return new Result$Ok$18$(Token$LBrace);
                }
                case 91: {
                  return new Result$Ok$18$(Token$LBracket);
                }
                case 93: {
                  if (allow_rbracket) {
                    return new Result$Ok$18$(Token$RBracket);
                  } else {
                    return new Result$Err$18$(moonbitlang$core$json5$$invalid_char(ctx, -1));
                  }
                }
                case 110: {
                  const _bind$3 = moonbitlang$core$json5$$lex_assert_char(ctx, 117);
                  if (_bind$3.$tag === 1) {
                    const _ok$2 = _bind$3;
                    _ok$2._0;
                  } else {
                    return _bind$3;
                  }
                  const _bind$4 = moonbitlang$core$json5$$lex_assert_char(ctx, 108);
                  if (_bind$4.$tag === 1) {
                    const _ok$3 = _bind$4;
                    _ok$3._0;
                  } else {
                    return _bind$4;
                  }
                  const _bind$5 = moonbitlang$core$json5$$lex_assert_char(ctx, 108);
                  if (_bind$5.$tag === 1) {
                    const _ok$4 = _bind$5;
                    _ok$4._0;
                  } else {
                    return _bind$5;
                  }
                  return new Result$Ok$18$(Token$Null);
                }
                case 116: {
                  const _bind$6 = moonbitlang$core$json5$$lex_assert_char(ctx, 114);
                  if (_bind$6.$tag === 1) {
                    const _ok$5 = _bind$6;
                    _ok$5._0;
                  } else {
                    return _bind$6;
                  }
                  const _bind$7 = moonbitlang$core$json5$$lex_assert_char(ctx, 117);
                  if (_bind$7.$tag === 1) {
                    const _ok$6 = _bind$7;
                    _ok$6._0;
                  } else {
                    return _bind$7;
                  }
                  const _bind$8 = moonbitlang$core$json5$$lex_assert_char(ctx, 101);
                  if (_bind$8.$tag === 1) {
                    const _ok$7 = _bind$8;
                    _ok$7._0;
                  } else {
                    return _bind$8;
                  }
                  return new Result$Ok$18$(Token$True);
                }
                case 102: {
                  const _bind$9 = moonbitlang$core$json5$$lex_assert_char(ctx, 97);
                  if (_bind$9.$tag === 1) {
                    const _ok$8 = _bind$9;
                    _ok$8._0;
                  } else {
                    return _bind$9;
                  }
                  const _bind$10 = moonbitlang$core$json5$$lex_assert_char(ctx, 108);
                  if (_bind$10.$tag === 1) {
                    const _ok$9 = _bind$10;
                    _ok$9._0;
                  } else {
                    return _bind$10;
                  }
                  const _bind$11 = moonbitlang$core$json5$$lex_assert_char(ctx, 115);
                  if (_bind$11.$tag === 1) {
                    const _ok$10 = _bind$11;
                    _ok$10._0;
                  } else {
                    return _bind$11;
                  }
                  const _bind$12 = moonbitlang$core$json5$$lex_assert_char(ctx, 101);
                  if (_bind$12.$tag === 1) {
                    const _ok$11 = _bind$12;
                    _ok$11._0;
                  } else {
                    return _bind$12;
                  }
                  return new Result$Ok$18$(Token$False);
                }
                case 45: {
                  c = _x;
                  break _J$_arm$2;
                }
                case 43: {
                  c = _x;
                  break _J$_arm$2;
                }
                case 46: {
                  const _bind$13 = moonbitlang$core$json5$$lex_decimal_point_leading(ctx, ctx.offset - 1 | 0);
                  let n;
                  if (_bind$13.$tag === 1) {
                    const _ok$12 = _bind$13;
                    n = _ok$12._0;
                  } else {
                    return _bind$13;
                  }
                  return new Result$Ok$18$(new Token$Number(n));
                }
                case 48: {
                  const _bind$14 = moonbitlang$core$json5$$lex_zero(ctx, false, ctx.offset - 1 | 0);
                  let n$2;
                  if (_bind$14.$tag === 1) {
                    const _ok$13 = _bind$14;
                    n$2 = _ok$13._0;
                  } else {
                    return _bind$14;
                  }
                  return new Result$Ok$18$(new Token$Number(n$2));
                }
                case 49: {
                  break _J$_arm$3;
                }
                case 50: {
                  break _J$_arm$3;
                }
                case 51: {
                  break _J$_arm$3;
                }
                case 52: {
                  break _J$_arm$3;
                }
                case 53: {
                  break _J$_arm$3;
                }
                case 54: {
                  break _J$_arm$3;
                }
                case 55: {
                  break _J$_arm$3;
                }
                case 56: {
                  break _J$_arm$3;
                }
                case 57: {
                  break _J$_arm$3;
                }
                case 73: {
                  const _bind$15 = moonbitlang$core$json5$$lex_infinity(ctx);
                  if (_bind$15.$tag === 1) {
                    const _ok$14 = _bind$15;
                    _ok$14._0;
                  } else {
                    return _bind$15;
                  }
                  return new Result$Ok$18$(new Token$Number(moonbitlang$core$double$$Double$inf(1)));
                }
                case 78: {
                  const _bind$16 = moonbitlang$core$json5$$lex_assert_char(ctx, 97);
                  if (_bind$16.$tag === 1) {
                    const _ok$15 = _bind$16;
                    _ok$15._0;
                  } else {
                    return _bind$16;
                  }
                  const _bind$17 = moonbitlang$core$json5$$lex_assert_char(ctx, 78);
                  if (_bind$17.$tag === 1) {
                    const _ok$16 = _bind$17;
                    _ok$16._0;
                  } else {
                    return _bind$17;
                  }
                  return new Result$Ok$18$(new Token$Number(moonbitlang$core$double$$Double$nan()));
                }
                case 34: {
                  const _bind$18 = moonbitlang$core$json5$$lex_string(ctx, 34);
                  let s;
                  if (_bind$18.$tag === 1) {
                    const _ok$17 = _bind$18;
                    s = _ok$17._0;
                  } else {
                    return _bind$18;
                  }
                  return new Result$Ok$18$(new Token$String(s));
                }
                case 39: {
                  const _bind$19 = moonbitlang$core$json5$$lex_string(ctx, 39);
                  let s$2;
                  if (_bind$19.$tag === 1) {
                    const _ok$18 = _bind$19;
                    s$2 = _ok$18._0;
                  } else {
                    return _bind$19;
                  }
                  return new Result$Ok$18$(new Token$String(s$2));
                }
                default: {
                  if (_x > 127 && moonbitlang$core$json5$$CharClass$contains(moonbitlang$core$json5$$non_ascii_whitespace, _x)) {
                    break _J$_continue;
                  }
                  return new Result$Err$18$(moonbitlang$core$json5$$invalid_char(ctx, -1));
                }
              }
            } else {
              return new Result$Err$18$(ParseError$InvalidEof);
            }
          }
          break _J$_continue;
        }
        const _bind$20 = moonbitlang$core$json5$$read_char(ctx);
        const _Some$2 = _bind$20;
        if (_bind$20 >= 0) {
          const _x$2 = _Some$2;
          switch (_x$2) {
            case 73: {
              const _bind$21 = moonbitlang$core$json5$$lex_infinity(ctx);
              if (_bind$21.$tag === 1) {
                const _ok$19 = _bind$21;
                _ok$19._0;
              } else {
                return _bind$21;
              }
              return new Result$Ok$18$(new Token$Number(moonbitlang$core$double$$Double$inf(c === 45 ? -1 : 1)));
            }
            case 78: {
              const _bind$22 = moonbitlang$core$json5$$lex_assert_char(ctx, 97);
              if (_bind$22.$tag === 1) {
                const _ok$20 = _bind$22;
                _ok$20._0;
              } else {
                return _bind$22;
              }
              const _bind$23 = moonbitlang$core$json5$$lex_assert_char(ctx, 78);
              if (_bind$23.$tag === 1) {
                const _ok$21 = _bind$23;
                _ok$21._0;
              } else {
                return _bind$23;
              }
              return new Result$Ok$18$(new Token$Number(moonbitlang$core$double$$Double$nan()));
            }
            case 48: {
              const _bind$24 = moonbitlang$core$json5$$lex_zero(ctx, c === 45, ctx.offset - 2 | 0);
              let n$3;
              if (_bind$24.$tag === 1) {
                const _ok$22 = _bind$24;
                n$3 = _ok$22._0;
              } else {
                return _bind$24;
              }
              return new Result$Ok$18$(new Token$Number(n$3));
            }
            case 46: {
              const _bind$25 = moonbitlang$core$json5$$lex_decimal_point_leading(ctx, ctx.offset - 2 | 0);
              let n$4;
              if (_bind$25.$tag === 1) {
                const _ok$23 = _bind$25;
                n$4 = _ok$23._0;
              } else {
                return _bind$25;
              }
              return new Result$Ok$18$(new Token$Number(n$4));
            }
            default: {
              if (_x$2 >= 49 && _x$2 <= 57) {
                const _bind$26 = moonbitlang$core$json5$$lex_decimal_integer(ctx, ctx.offset - 2 | 0);
                let n$5;
                if (_bind$26.$tag === 1) {
                  const _ok$24 = _bind$26;
                  n$5 = _ok$24._0;
                } else {
                  return _bind$26;
                }
                return new Result$Ok$18$(new Token$Number(n$5));
              }
              return new Result$Err$18$(moonbitlang$core$json5$$invalid_char(ctx, -1));
            }
          }
        } else {
          return new Result$Err$18$(ParseError$InvalidEof);
        }
      }
      const _bind$27 = moonbitlang$core$json5$$lex_decimal_integer(ctx, ctx.offset - 1 | 0);
      let n$6;
      if (_bind$27.$tag === 1) {
        const _ok$25 = _bind$27;
        n$6 = _ok$25._0;
      } else {
        return _bind$27;
      }
      return new Result$Ok$18$(new Token$Number(n$6));
    }
    continue;
  }
}
function moonbitlang$core$json5$$lex_value$46$allow_rbracket$46$default() {
  return false;
}
function moonbitlang$core$json5$$ParseContext$make(input) {
  return { offset: 0, input: input, end_offset: input.length };
}
function moonbitlang$core$json5$$lex_skip_whitespace(ctx) {
  while (true) {
    _J$_continue: {
      _J$_arm: {
        const _bind = moonbitlang$core$json5$$read_char(ctx);
        const _Some = _bind;
        if (_bind >= 0) {
          const _x = _Some;
          switch (_x) {
            case 9: {
              break _J$_arm;
            }
            case 11: {
              break _J$_arm;
            }
            case 12: {
              break _J$_arm;
            }
            case 32: {
              break _J$_arm;
            }
            case 10: {
              break _J$_arm;
            }
            case 13: {
              break _J$_arm;
            }
            case 47: {
              const _bind$2 = moonbitlang$core$json5$$lex_comment(ctx);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
              break _J$_continue;
            }
            default: {
              if (_x > 127 && moonbitlang$core$json5$$CharClass$contains(moonbitlang$core$json5$$non_ascii_whitespace, _x)) {
                break _J$_continue;
              }
              ctx.offset = ctx.offset - 1 | 0;
              return new Result$Ok$16$(undefined);
            }
          }
        } else {
          return new Result$Ok$16$(undefined);
        }
      }
      break _J$_continue;
    }
    continue;
  }
}
function moonbitlang$core$json5$$lex_after_array_value(ctx) {
  const _bind = moonbitlang$core$json5$$lex_skip_whitespace(ctx);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = moonbitlang$core$json5$$read_char(ctx);
  const _Some = _bind$2;
  if (_bind$2 >= 0) {
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new Result$Ok$18$(Token$RBracket);
      }
      case 44: {
        return new Result$Ok$18$(Token$Comma);
      }
      default: {
        return new Result$Err$18$(moonbitlang$core$json5$$invalid_char(ctx, -1));
      }
    }
  } else {
    return new Result$Err$18$(ParseError$InvalidEof);
  }
}
function moonbitlang$core$json5$$lex_after_object_value(ctx) {
  const _bind = moonbitlang$core$json5$$lex_skip_whitespace(ctx);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = moonbitlang$core$json5$$read_char(ctx);
  const _Some = _bind$2;
  if (_bind$2 >= 0) {
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new Result$Ok$18$(Token$RBrace);
      }
      case 44: {
        return new Result$Ok$18$(Token$Comma);
      }
      default: {
        return new Result$Err$18$(moonbitlang$core$json5$$invalid_char(ctx, -1));
      }
    }
  } else {
    return new Result$Err$18$(ParseError$InvalidEof);
  }
}
function moonbitlang$core$json5$$lex_after_property_name(ctx) {
  const _bind = moonbitlang$core$json5$$lex_skip_whitespace(ctx);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = moonbitlang$core$json5$$read_char(ctx);
  const _Some = _bind$2;
  if (_bind$2 >= 0) {
    const _x = _Some;
    if (_x === 58) {
      return new Result$Ok$18$(Token$Colon);
    } else {
      return new Result$Err$18$(moonbitlang$core$json5$$invalid_char(ctx, -1));
    }
  } else {
    return new Result$Err$18$(ParseError$InvalidEof);
  }
}
const moonbitlang$core$json5$$non_ascii_id_continue = moonbitlang$core$json5$$CharClass$from_array([{ _0: 170, _1: 170 }, { _0: 181, _1: 181 }, { _0: 186, _1: 186 }, { _0: 192, _1: 214 }, { _0: 216, _1: 246 }, { _0: 248, _1: 705 }, { _0: 710, _1: 721 }, { _0: 736, _1: 740 }, { _0: 748, _1: 748 }, { _0: 750, _1: 750 }, { _0: 768, _1: 884 }, { _0: 886, _1: 887 }, { _0: 890, _1: 893 }, { _0: 895, _1: 895 }, { _0: 902, _1: 902 }, { _0: 904, _1: 906 }, { _0: 908, _1: 908 }, { _0: 910, _1: 929 }, { _0: 931, _1: 1013 }, { _0: 1015, _1: 1153 }, { _0: 1155, _1: 1159 }, { _0: 1162, _1: 1327 }, { _0: 1329, _1: 1366 }, { _0: 1369, _1: 1369 }, { _0: 1377, _1: 1415 }, { _0: 1425, _1: 1469 }, { _0: 1471, _1: 1471 }, { _0: 1473, _1: 1474 }, { _0: 1476, _1: 1477 }, { _0: 1479, _1: 1479 }, { _0: 1488, _1: 1514 }, { _0: 1520, _1: 1522 }, { _0: 1552, _1: 1562 }, { _0: 1568, _1: 1641 }, { _0: 1646, _1: 1747 }, { _0: 1749, _1: 1756 }, { _0: 1759, _1: 1768 }, { _0: 1770, _1: 1788 }, { _0: 1791, _1: 1791 }, { _0: 1808, _1: 1866 }, { _0: 1869, _1: 1969 }, { _0: 1984, _1: 2037 }, { _0: 2042, _1: 2042 }, { _0: 2048, _1: 2093 }, { _0: 2112, _1: 2139 }, { _0: 2144, _1: 2154 }, { _0: 2208, _1: 2228 }, { _0: 2230, _1: 2237 }, { _0: 2260, _1: 2273 }, { _0: 2275, _1: 2403 }, { _0: 2406, _1: 2415 }, { _0: 2417, _1: 2435 }, { _0: 2437, _1: 2444 }, { _0: 2447, _1: 2448 }, { _0: 2451, _1: 2472 }, { _0: 2474, _1: 2480 }, { _0: 2482, _1: 2482 }, { _0: 2486, _1: 2489 }, { _0: 2492, _1: 2500 }, { _0: 2503, _1: 2504 }, { _0: 2507, _1: 2510 }, { _0: 2519, _1: 2519 }, { _0: 2524, _1: 2525 }, { _0: 2527, _1: 2531 }, { _0: 2534, _1: 2545 }, { _0: 2556, _1: 2556 }, { _0: 2561, _1: 2563 }, { _0: 2565, _1: 2570 }, { _0: 2575, _1: 2576 }, { _0: 2579, _1: 2600 }, { _0: 2602, _1: 2608 }, { _0: 2610, _1: 2611 }, { _0: 2613, _1: 2614 }, { _0: 2616, _1: 2617 }, { _0: 2620, _1: 2620 }, { _0: 2622, _1: 2626 }, { _0: 2631, _1: 2632 }, { _0: 2635, _1: 2637 }, { _0: 2641, _1: 2641 }, { _0: 2649, _1: 2652 }, { _0: 2654, _1: 2654 }, { _0: 2662, _1: 2677 }, { _0: 2689, _1: 2691 }, { _0: 2693, _1: 2701 }, { _0: 2703, _1: 2705 }, { _0: 2707, _1: 2728 }, { _0: 2730, _1: 2736 }, { _0: 2738, _1: 2739 }, { _0: 2741, _1: 2745 }, { _0: 2748, _1: 2757 }, { _0: 2759, _1: 2761 }, { _0: 2763, _1: 2765 }, { _0: 2768, _1: 2768 }, { _0: 2784, _1: 2787 }, { _0: 2790, _1: 2799 }, { _0: 2809, _1: 2815 }, { _0: 2817, _1: 2819 }, { _0: 2821, _1: 2828 }, { _0: 2831, _1: 2832 }, { _0: 2835, _1: 2856 }, { _0: 2858, _1: 2864 }, { _0: 2866, _1: 2867 }, { _0: 2869, _1: 2873 }, { _0: 2876, _1: 2884 }, { _0: 2887, _1: 2888 }, { _0: 2891, _1: 2893 }, { _0: 2902, _1: 2903 }, { _0: 2908, _1: 2909 }, { _0: 2911, _1: 2915 }, { _0: 2918, _1: 2927 }, { _0: 2929, _1: 2929 }, { _0: 2946, _1: 2947 }, { _0: 2949, _1: 2954 }, { _0: 2958, _1: 2960 }, { _0: 2962, _1: 2965 }, { _0: 2969, _1: 2970 }, { _0: 2972, _1: 2972 }, { _0: 2974, _1: 2975 }, { _0: 2979, _1: 2980 }, { _0: 2984, _1: 2986 }, { _0: 2990, _1: 3001 }, { _0: 3006, _1: 3010 }, { _0: 3014, _1: 3016 }, { _0: 3018, _1: 3021 }, { _0: 3024, _1: 3024 }, { _0: 3031, _1: 3031 }, { _0: 3046, _1: 3055 }, { _0: 3072, _1: 3075 }, { _0: 3077, _1: 3084 }, { _0: 3086, _1: 3088 }, { _0: 3090, _1: 3112 }, { _0: 3114, _1: 3129 }, { _0: 3133, _1: 3140 }, { _0: 3142, _1: 3144 }, { _0: 3146, _1: 3149 }, { _0: 3157, _1: 3158 }, { _0: 3160, _1: 3162 }, { _0: 3168, _1: 3171 }, { _0: 3174, _1: 3183 }, { _0: 3200, _1: 3203 }, { _0: 3205, _1: 3212 }, { _0: 3214, _1: 3216 }, { _0: 3218, _1: 3240 }, { _0: 3242, _1: 3251 }, { _0: 3253, _1: 3257 }, { _0: 3260, _1: 3268 }, { _0: 3270, _1: 3272 }, { _0: 3274, _1: 3277 }, { _0: 3285, _1: 3286 }, { _0: 3294, _1: 3294 }, { _0: 3296, _1: 3299 }, { _0: 3302, _1: 3311 }, { _0: 3313, _1: 3314 }, { _0: 3328, _1: 3331 }, { _0: 3333, _1: 3340 }, { _0: 3342, _1: 3344 }, { _0: 3346, _1: 3396 }, { _0: 3398, _1: 3400 }, { _0: 3402, _1: 3406 }, { _0: 3412, _1: 3415 }, { _0: 3423, _1: 3427 }, { _0: 3430, _1: 3439 }, { _0: 3450, _1: 3455 }, { _0: 3458, _1: 3459 }, { _0: 3461, _1: 3478 }, { _0: 3482, _1: 3505 }, { _0: 3507, _1: 3515 }, { _0: 3517, _1: 3517 }, { _0: 3520, _1: 3526 }, { _0: 3530, _1: 3530 }, { _0: 3535, _1: 3540 }, { _0: 3542, _1: 3542 }, { _0: 3544, _1: 3551 }, { _0: 3558, _1: 3567 }, { _0: 3570, _1: 3571 }, { _0: 3585, _1: 3642 }, { _0: 3648, _1: 3662 }, { _0: 3664, _1: 3673 }, { _0: 3713, _1: 3714 }, { _0: 3716, _1: 3716 }, { _0: 3719, _1: 3720 }, { _0: 3722, _1: 3722 }, { _0: 3725, _1: 3725 }, { _0: 3732, _1: 3735 }, { _0: 3737, _1: 3743 }, { _0: 3745, _1: 3747 }, { _0: 3749, _1: 3749 }, { _0: 3751, _1: 3751 }, { _0: 3754, _1: 3755 }, { _0: 3757, _1: 3769 }, { _0: 3771, _1: 3773 }, { _0: 3776, _1: 3780 }, { _0: 3782, _1: 3782 }, { _0: 3784, _1: 3789 }, { _0: 3792, _1: 3801 }, { _0: 3804, _1: 3807 }, { _0: 3840, _1: 3840 }, { _0: 3864, _1: 3865 }, { _0: 3872, _1: 3881 }, { _0: 3893, _1: 3893 }, { _0: 3895, _1: 3895 }, { _0: 3897, _1: 3897 }, { _0: 3902, _1: 3911 }, { _0: 3913, _1: 3948 }, { _0: 3953, _1: 3972 }, { _0: 3974, _1: 3991 }, { _0: 3993, _1: 4028 }, { _0: 4038, _1: 4038 }, { _0: 4096, _1: 4169 }, { _0: 4176, _1: 4253 }, { _0: 4256, _1: 4293 }, { _0: 4295, _1: 4295 }, { _0: 4301, _1: 4301 }, { _0: 4304, _1: 4346 }, { _0: 4348, _1: 4680 }, { _0: 4682, _1: 4685 }, { _0: 4688, _1: 4694 }, { _0: 4696, _1: 4696 }, { _0: 4698, _1: 4701 }, { _0: 4704, _1: 4744 }, { _0: 4746, _1: 4749 }, { _0: 4752, _1: 4784 }, { _0: 4786, _1: 4789 }, { _0: 4792, _1: 4798 }, { _0: 4800, _1: 4800 }, { _0: 4802, _1: 4805 }, { _0: 4808, _1: 4822 }, { _0: 4824, _1: 4880 }, { _0: 4882, _1: 4885 }, { _0: 4888, _1: 4954 }, { _0: 4957, _1: 4959 }, { _0: 4992, _1: 5007 }, { _0: 5024, _1: 5109 }, { _0: 5112, _1: 5117 }, { _0: 5121, _1: 5740 }, { _0: 5743, _1: 5759 }, { _0: 5761, _1: 5786 }, { _0: 5792, _1: 5866 }, { _0: 5870, _1: 5880 }, { _0: 5888, _1: 5900 }, { _0: 5902, _1: 5908 }, { _0: 5920, _1: 5940 }, { _0: 5952, _1: 5971 }, { _0: 5984, _1: 5996 }, { _0: 5998, _1: 6000 }, { _0: 6002, _1: 6003 }, { _0: 6016, _1: 6099 }, { _0: 6103, _1: 6103 }, { _0: 6108, _1: 6109 }, { _0: 6112, _1: 6121 }, { _0: 6155, _1: 6157 }, { _0: 6160, _1: 6169 }, { _0: 6176, _1: 6263 }, { _0: 6272, _1: 6314 }, { _0: 6320, _1: 6389 }, { _0: 6400, _1: 6430 }, { _0: 6432, _1: 6443 }, { _0: 6448, _1: 6459 }, { _0: 6470, _1: 6509 }, { _0: 6512, _1: 6516 }, { _0: 6528, _1: 6571 }, { _0: 6576, _1: 6601 }, { _0: 6608, _1: 6617 }, { _0: 6656, _1: 6683 }, { _0: 6688, _1: 6750 }, { _0: 6752, _1: 6780 }, { _0: 6783, _1: 6793 }, { _0: 6800, _1: 6809 }, { _0: 6823, _1: 6823 }, { _0: 6832, _1: 6845 }, { _0: 6912, _1: 6987 }, { _0: 6992, _1: 7001 }, { _0: 7019, _1: 7027 }, { _0: 7040, _1: 7155 }, { _0: 7168, _1: 7223 }, { _0: 7232, _1: 7241 }, { _0: 7245, _1: 7293 }, { _0: 7296, _1: 7304 }, { _0: 7376, _1: 7378 }, { _0: 7380, _1: 7417 }, { _0: 7424, _1: 7673 }, { _0: 7675, _1: 7957 }, { _0: 7960, _1: 7965 }, { _0: 7968, _1: 8005 }, { _0: 8008, _1: 8013 }, { _0: 8016, _1: 8023 }, { _0: 8025, _1: 8025 }, { _0: 8027, _1: 8027 }, { _0: 8029, _1: 8029 }, { _0: 8031, _1: 8061 }, { _0: 8064, _1: 8116 }, { _0: 8118, _1: 8124 }, { _0: 8126, _1: 8126 }, { _0: 8130, _1: 8132 }, { _0: 8134, _1: 8140 }, { _0: 8144, _1: 8147 }, { _0: 8150, _1: 8155 }, { _0: 8160, _1: 8172 }, { _0: 8178, _1: 8180 }, { _0: 8182, _1: 8188 }, { _0: 8204, _1: 8205 }, { _0: 8255, _1: 8256 }, { _0: 8276, _1: 8276 }, { _0: 8305, _1: 8305 }, { _0: 8319, _1: 8319 }, { _0: 8336, _1: 8348 }, { _0: 8400, _1: 8412 }, { _0: 8417, _1: 8417 }, { _0: 8421, _1: 8432 }, { _0: 8450, _1: 8450 }, { _0: 8455, _1: 8455 }, { _0: 8458, _1: 8467 }, { _0: 8469, _1: 8469 }, { _0: 8473, _1: 8477 }, { _0: 8484, _1: 8484 }, { _0: 8486, _1: 8486 }, { _0: 8488, _1: 8488 }, { _0: 8490, _1: 8493 }, { _0: 8495, _1: 8505 }, { _0: 8508, _1: 8511 }, { _0: 8517, _1: 8521 }, { _0: 8526, _1: 8526 }, { _0: 8544, _1: 8584 }, { _0: 11264, _1: 11310 }, { _0: 11312, _1: 11358 }, { _0: 11360, _1: 11492 }, { _0: 11499, _1: 11507 }, { _0: 11520, _1: 11557 }, { _0: 11559, _1: 11559 }, { _0: 11565, _1: 11565 }, { _0: 11568, _1: 11623 }, { _0: 11631, _1: 11631 }, { _0: 11647, _1: 11670 }, { _0: 11680, _1: 11686 }, { _0: 11688, _1: 11694 }, { _0: 11696, _1: 11702 }, { _0: 11704, _1: 11710 }, { _0: 11712, _1: 11718 }, { _0: 11720, _1: 11726 }, { _0: 11728, _1: 11734 }, { _0: 11736, _1: 11742 }, { _0: 11744, _1: 11775 }, { _0: 11823, _1: 11823 }, { _0: 12293, _1: 12295 }, { _0: 12321, _1: 12335 }, { _0: 12337, _1: 12341 }, { _0: 12344, _1: 12348 }, { _0: 12353, _1: 12438 }, { _0: 12441, _1: 12442 }, { _0: 12445, _1: 12447 }, { _0: 12449, _1: 12538 }, { _0: 12540, _1: 12543 }, { _0: 12549, _1: 12590 }, { _0: 12593, _1: 12686 }, { _0: 12704, _1: 12730 }, { _0: 12784, _1: 12799 }, { _0: 13312, _1: 19893 }, { _0: 19968, _1: 40938 }, { _0: 40960, _1: 42124 }, { _0: 42192, _1: 42237 }, { _0: 42240, _1: 42508 }, { _0: 42512, _1: 42539 }, { _0: 42560, _1: 42607 }, { _0: 42612, _1: 42621 }, { _0: 42623, _1: 42737 }, { _0: 42775, _1: 42783 }, { _0: 42786, _1: 42888 }, { _0: 42891, _1: 42926 }, { _0: 42928, _1: 42935 }, { _0: 42999, _1: 43047 }, { _0: 43072, _1: 43123 }, { _0: 43136, _1: 43205 }, { _0: 43216, _1: 43225 }, { _0: 43232, _1: 43255 }, { _0: 43259, _1: 43259 }, { _0: 43261, _1: 43261 }, { _0: 43264, _1: 43309 }, { _0: 43312, _1: 43347 }, { _0: 43360, _1: 43388 }, { _0: 43392, _1: 43456 }, { _0: 43471, _1: 43481 }, { _0: 43488, _1: 43518 }, { _0: 43520, _1: 43574 }, { _0: 43584, _1: 43597 }, { _0: 43600, _1: 43609 }, { _0: 43616, _1: 43638 }, { _0: 43642, _1: 43714 }, { _0: 43739, _1: 43741 }, { _0: 43744, _1: 43759 }, { _0: 43762, _1: 43766 }, { _0: 43777, _1: 43782 }, { _0: 43785, _1: 43790 }, { _0: 43793, _1: 43798 }, { _0: 43808, _1: 43814 }, { _0: 43816, _1: 43822 }, { _0: 43824, _1: 43866 }, { _0: 43868, _1: 43877 }, { _0: 43888, _1: 44010 }, { _0: 44012, _1: 44013 }, { _0: 44016, _1: 44025 }, { _0: 44032, _1: 55203 }, { _0: 55216, _1: 55238 }, { _0: 55243, _1: 55291 }, { _0: 63744, _1: 64109 }, { _0: 64112, _1: 64217 }, { _0: 64256, _1: 64262 }, { _0: 64275, _1: 64279 }, { _0: 64285, _1: 64296 }, { _0: 64298, _1: 64310 }, { _0: 64312, _1: 64316 }, { _0: 64318, _1: 64318 }, { _0: 64320, _1: 64321 }, { _0: 64323, _1: 64324 }, { _0: 64326, _1: 64433 }, { _0: 64467, _1: 64829 }, { _0: 64848, _1: 64911 }, { _0: 64914, _1: 64967 }, { _0: 65008, _1: 65019 }, { _0: 65024, _1: 65039 }, { _0: 65056, _1: 65071 }, { _0: 65075, _1: 65076 }, { _0: 65101, _1: 65103 }, { _0: 65136, _1: 65140 }, { _0: 65142, _1: 65276 }, { _0: 65296, _1: 65305 }, { _0: 65313, _1: 65338 }, { _0: 65343, _1: 65343 }, { _0: 65345, _1: 65370 }, { _0: 65382, _1: 65470 }, { _0: 65474, _1: 65479 }, { _0: 65482, _1: 65487 }, { _0: 65490, _1: 65495 }, { _0: 65498, _1: 65500 }, { _0: 65536, _1: 65547 }, { _0: 65549, _1: 65574 }, { _0: 65576, _1: 65594 }, { _0: 65596, _1: 65597 }, { _0: 65599, _1: 65613 }, { _0: 65616, _1: 65629 }, { _0: 65664, _1: 65786 }, { _0: 65856, _1: 65908 }, { _0: 66045, _1: 66045 }, { _0: 66176, _1: 66204 }, { _0: 66208, _1: 66256 }, { _0: 66272, _1: 66272 }, { _0: 66304, _1: 66335 }, { _0: 66349, _1: 66378 }, { _0: 66384, _1: 66426 }, { _0: 66432, _1: 66461 }, { _0: 66464, _1: 66499 }, { _0: 66504, _1: 66511 }, { _0: 66513, _1: 66517 }, { _0: 66560, _1: 66717 }, { _0: 66720, _1: 66729 }, { _0: 66736, _1: 66771 }, { _0: 66776, _1: 66811 }, { _0: 66816, _1: 66855 }, { _0: 66864, _1: 66915 }, { _0: 67072, _1: 67382 }, { _0: 67392, _1: 67413 }, { _0: 67424, _1: 67431 }, { _0: 67584, _1: 67589 }, { _0: 67592, _1: 67592 }, { _0: 67594, _1: 67637 }, { _0: 67639, _1: 67640 }, { _0: 67644, _1: 67644 }, { _0: 67647, _1: 67669 }, { _0: 67680, _1: 67702 }, { _0: 67712, _1: 67742 }, { _0: 67808, _1: 67826 }, { _0: 67828, _1: 67829 }, { _0: 67840, _1: 67861 }, { _0: 67872, _1: 67897 }, { _0: 67968, _1: 68023 }, { _0: 68030, _1: 68031 }, { _0: 68096, _1: 68099 }, { _0: 68101, _1: 68102 }, { _0: 68108, _1: 68115 }, { _0: 68117, _1: 68119 }, { _0: 68121, _1: 68147 }, { _0: 68152, _1: 68154 }, { _0: 68159, _1: 68159 }, { _0: 68192, _1: 68220 }, { _0: 68224, _1: 68252 }, { _0: 68288, _1: 68295 }, { _0: 68297, _1: 68326 }, { _0: 68352, _1: 68405 }, { _0: 68416, _1: 68437 }, { _0: 68448, _1: 68466 }, { _0: 68480, _1: 68497 }, { _0: 68608, _1: 68680 }, { _0: 68736, _1: 68786 }, { _0: 68800, _1: 68850 }, { _0: 69632, _1: 69702 }, { _0: 69734, _1: 69743 }, { _0: 69759, _1: 69818 }, { _0: 69840, _1: 69864 }, { _0: 69872, _1: 69881 }, { _0: 69888, _1: 69940 }, { _0: 69942, _1: 69951 }, { _0: 69968, _1: 70003 }, { _0: 70006, _1: 70006 }, { _0: 70016, _1: 70084 }, { _0: 70090, _1: 70092 }, { _0: 70096, _1: 70106 }, { _0: 70108, _1: 70108 }, { _0: 70144, _1: 70161 }, { _0: 70163, _1: 70199 }, { _0: 70206, _1: 70206 }, { _0: 70272, _1: 70278 }, { _0: 70280, _1: 70280 }, { _0: 70282, _1: 70285 }, { _0: 70287, _1: 70301 }, { _0: 70303, _1: 70312 }, { _0: 70320, _1: 70378 }, { _0: 70384, _1: 70393 }, { _0: 70400, _1: 70403 }, { _0: 70405, _1: 70412 }, { _0: 70415, _1: 70416 }, { _0: 70419, _1: 70440 }, { _0: 70442, _1: 70448 }, { _0: 70450, _1: 70451 }, { _0: 70453, _1: 70457 }, { _0: 70460, _1: 70468 }, { _0: 70471, _1: 70472 }, { _0: 70475, _1: 70477 }, { _0: 70480, _1: 70480 }, { _0: 70487, _1: 70487 }, { _0: 70493, _1: 70499 }, { _0: 70502, _1: 70508 }, { _0: 70512, _1: 70516 }, { _0: 70656, _1: 70730 }, { _0: 70736, _1: 70745 }, { _0: 70784, _1: 70853 }, { _0: 70855, _1: 70855 }, { _0: 70864, _1: 70873 }, { _0: 71040, _1: 71093 }, { _0: 71096, _1: 71104 }, { _0: 71128, _1: 71133 }, { _0: 71168, _1: 71232 }, { _0: 71236, _1: 71236 }, { _0: 71248, _1: 71257 }, { _0: 71296, _1: 71351 }, { _0: 71360, _1: 71369 }, { _0: 71424, _1: 71449 }, { _0: 71453, _1: 71467 }, { _0: 71472, _1: 71481 }, { _0: 71840, _1: 71913 }, { _0: 71935, _1: 71935 }, { _0: 72192, _1: 72254 }, { _0: 72263, _1: 72263 }, { _0: 72272, _1: 72323 }, { _0: 72326, _1: 72345 }, { _0: 72384, _1: 72440 }, { _0: 72704, _1: 72712 }, { _0: 72714, _1: 72758 }, { _0: 72760, _1: 72768 }, { _0: 72784, _1: 72793 }, { _0: 72818, _1: 72847 }, { _0: 72850, _1: 72871 }, { _0: 72873, _1: 72886 }, { _0: 72960, _1: 72966 }, { _0: 72968, _1: 72969 }, { _0: 72971, _1: 73014 }, { _0: 73018, _1: 73018 }, { _0: 73020, _1: 73021 }, { _0: 73023, _1: 73031 }, { _0: 73040, _1: 73049 }, { _0: 73728, _1: 74649 }, { _0: 74752, _1: 74862 }, { _0: 74880, _1: 75075 }, { _0: 77824, _1: 78894 }, { _0: 82944, _1: 83526 }, { _0: 92160, _1: 92728 }, { _0: 92736, _1: 92766 }, { _0: 92768, _1: 92777 }, { _0: 92880, _1: 92909 }, { _0: 92912, _1: 92916 }, { _0: 92928, _1: 92982 }, { _0: 92992, _1: 92995 }, { _0: 93008, _1: 93017 }, { _0: 93027, _1: 93047 }, { _0: 93053, _1: 93071 }, { _0: 93952, _1: 94020 }, { _0: 94032, _1: 94078 }, { _0: 94095, _1: 94111 }, { _0: 94176, _1: 94177 }, { _0: 94208, _1: 100332 }, { _0: 100352, _1: 101106 }, { _0: 110592, _1: 110878 }, { _0: 110960, _1: 111355 }, { _0: 113664, _1: 113770 }, { _0: 113776, _1: 113788 }, { _0: 113792, _1: 113800 }, { _0: 113808, _1: 113817 }, { _0: 113821, _1: 113822 }, { _0: 119141, _1: 119145 }, { _0: 119149, _1: 119154 }, { _0: 119163, _1: 119170 }, { _0: 119173, _1: 119179 }, { _0: 119210, _1: 119213 }, { _0: 119362, _1: 119364 }, { _0: 119808, _1: 119892 }, { _0: 119894, _1: 119964 }, { _0: 119966, _1: 119967 }, { _0: 119970, _1: 119970 }, { _0: 119973, _1: 119974 }, { _0: 119977, _1: 119980 }, { _0: 119982, _1: 119993 }, { _0: 119995, _1: 119995 }, { _0: 119997, _1: 120003 }, { _0: 120005, _1: 120069 }, { _0: 120071, _1: 120074 }, { _0: 120077, _1: 120084 }, { _0: 120086, _1: 120092 }, { _0: 120094, _1: 120121 }, { _0: 120123, _1: 120126 }, { _0: 120128, _1: 120132 }, { _0: 120134, _1: 120134 }, { _0: 120138, _1: 120144 }, { _0: 120146, _1: 120485 }, { _0: 120488, _1: 120512 }, { _0: 120514, _1: 120538 }, { _0: 120540, _1: 120570 }, { _0: 120572, _1: 120596 }, { _0: 120598, _1: 120628 }, { _0: 120630, _1: 120654 }, { _0: 120656, _1: 120686 }, { _0: 120688, _1: 120712 }, { _0: 120714, _1: 120744 }, { _0: 120746, _1: 120770 }, { _0: 120772, _1: 120779 }, { _0: 120782, _1: 120831 }, { _0: 121344, _1: 121398 }, { _0: 121403, _1: 121452 }, { _0: 121461, _1: 121461 }, { _0: 121476, _1: 121476 }, { _0: 121499, _1: 121503 }, { _0: 121505, _1: 121519 }, { _0: 122880, _1: 122886 }, { _0: 122888, _1: 122904 }, { _0: 122907, _1: 122913 }, { _0: 122915, _1: 122916 }, { _0: 122918, _1: 122922 }, { _0: 124928, _1: 125124 }, { _0: 125136, _1: 125142 }, { _0: 125184, _1: 125258 }, { _0: 125264, _1: 125273 }, { _0: 126464, _1: 126467 }, { _0: 126469, _1: 126495 }, { _0: 126497, _1: 126498 }, { _0: 126500, _1: 126500 }, { _0: 126503, _1: 126503 }, { _0: 126505, _1: 126514 }, { _0: 126516, _1: 126519 }, { _0: 126521, _1: 126521 }, { _0: 126523, _1: 126523 }, { _0: 126530, _1: 126530 }, { _0: 126535, _1: 126535 }, { _0: 126537, _1: 126537 }, { _0: 126539, _1: 126539 }, { _0: 126541, _1: 126543 }, { _0: 126545, _1: 126546 }, { _0: 126548, _1: 126548 }, { _0: 126551, _1: 126551 }, { _0: 126553, _1: 126553 }, { _0: 126555, _1: 126555 }, { _0: 126557, _1: 126557 }, { _0: 126559, _1: 126559 }, { _0: 126561, _1: 126562 }, { _0: 126564, _1: 126564 }, { _0: 126567, _1: 126570 }, { _0: 126572, _1: 126578 }, { _0: 126580, _1: 126583 }, { _0: 126585, _1: 126588 }, { _0: 126590, _1: 126590 }, { _0: 126592, _1: 126601 }, { _0: 126603, _1: 126619 }, { _0: 126625, _1: 126627 }, { _0: 126629, _1: 126633 }, { _0: 126635, _1: 126651 }, { _0: 131072, _1: 173782 }, { _0: 173824, _1: 177972 }, { _0: 177984, _1: 178205 }, { _0: 178208, _1: 183969 }, { _0: 183984, _1: 191456 }, { _0: 194560, _1: 195101 }, { _0: 917760, _1: 917999 }]);
function moonbitlang$core$json5$$lex_ident(ctx, start, buffer) {
  const start$2 = { val: start };
  const flush = function (end) {
    if (start$2.val > 0 && end > start$2.val) {
      moonbitlang$core$json5$$StringBuilder$add_substring(buffer, ctx.input, start$2.val, end);
      return;
    } else {
      return;
    }
  };
  _L$5: while (true) {
    _J$_continue: {
      _J$_arm: {
        const _bind = moonbitlang$core$json5$$read_char(ctx);
        const _Some = _bind;
        if (_bind >= 0) {
          const _x = _Some;
          switch (_x) {
            case 92: {
              flush(ctx.offset - 1 | 0);
              const _bind$2 = moonbitlang$core$json5$$lex_assert_char(ctx, 117);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
              const _bind$3 = moonbitlang$core$json5$$lex_hex_digits(ctx, 4);
              let c;
              if (_bind$3.$tag === 1) {
                const _ok$2 = _bind$3;
                c = _ok$2._0;
              } else {
                return _bind$3;
              }
              const c$2 = c;
              if (c$2 === 36 || (c$2 === 95 || (c$2 >= 97 && c$2 <= 122 || (c$2 >= 65 && c$2 <= 90 || (c$2 >= 48 && c$2 <= 57 || c$2 > 127 && moonbitlang$core$json5$$CharClass$contains(moonbitlang$core$json5$$non_ascii_id_continue, c$2)))))) {
                moonbitlang$core$json5$$StringBuilder$add_char(buffer, c$2);
                start$2.val = ctx.offset;
                break _J$_continue;
              } else {
                return new Result$Err$15$(new ParseError$InvalidIdentEscape(moonbitlang$core$json5$$offset_to_position(ctx.input, ctx.offset - 6 | 0)));
              }
            }
            case 36: {
              break _J$_arm;
            }
            case 95: {
              break _J$_arm;
            }
            default: {
              if (_x >= 97 && _x <= 122 || (_x >= 65 && _x <= 90 || (_x >= 48 && _x <= 57 || _x > 127 && moonbitlang$core$json5$$CharClass$contains(moonbitlang$core$json5$$non_ascii_id_continue, _x)))) {
                break _J$_continue;
              }
              ctx.offset = ctx.offset - 1 | 0;
              break _L$5;
            }
          }
        } else {
          break;
        }
      }
      break _J$_continue;
    }
    continue;
  }
  flush(ctx.offset);
  return new Result$Ok$15$(moonbitlang$core$json5$$StringBuilder$to_string(buffer));
}
function moonbitlang$core$json5$$lex_ident$46$buffer$46$default() {
  return moonbitlang$core$json5$$StringBuilder$make();
}
const moonbitlang$core$json5$$non_ascii_id_start = moonbitlang$core$json5$$CharClass$from_array([{ _0: 170, _1: 170 }, { _0: 181, _1: 181 }, { _0: 186, _1: 186 }, { _0: 192, _1: 214 }, { _0: 216, _1: 246 }, { _0: 248, _1: 705 }, { _0: 710, _1: 721 }, { _0: 736, _1: 740 }, { _0: 748, _1: 748 }, { _0: 750, _1: 750 }, { _0: 880, _1: 884 }, { _0: 886, _1: 887 }, { _0: 890, _1: 893 }, { _0: 895, _1: 895 }, { _0: 902, _1: 902 }, { _0: 904, _1: 906 }, { _0: 908, _1: 908 }, { _0: 910, _1: 929 }, { _0: 931, _1: 1013 }, { _0: 1015, _1: 1153 }, { _0: 1162, _1: 1327 }, { _0: 1329, _1: 1366 }, { _0: 1369, _1: 1369 }, { _0: 1377, _1: 1415 }, { _0: 1488, _1: 1514 }, { _0: 1520, _1: 1522 }, { _0: 1568, _1: 1610 }, { _0: 1646, _1: 1647 }, { _0: 1649, _1: 1747 }, { _0: 1749, _1: 1749 }, { _0: 1765, _1: 1766 }, { _0: 1774, _1: 1775 }, { _0: 1786, _1: 1788 }, { _0: 1791, _1: 1791 }, { _0: 1808, _1: 1808 }, { _0: 1810, _1: 1839 }, { _0: 1869, _1: 1957 }, { _0: 1969, _1: 1969 }, { _0: 1994, _1: 2026 }, { _0: 2036, _1: 2037 }, { _0: 2042, _1: 2042 }, { _0: 2048, _1: 2069 }, { _0: 2074, _1: 2074 }, { _0: 2084, _1: 2084 }, { _0: 2088, _1: 2088 }, { _0: 2112, _1: 2136 }, { _0: 2144, _1: 2154 }, { _0: 2208, _1: 2228 }, { _0: 2230, _1: 2237 }, { _0: 2308, _1: 2361 }, { _0: 2365, _1: 2365 }, { _0: 2384, _1: 2384 }, { _0: 2392, _1: 2401 }, { _0: 2417, _1: 2432 }, { _0: 2437, _1: 2444 }, { _0: 2447, _1: 2448 }, { _0: 2451, _1: 2472 }, { _0: 2474, _1: 2480 }, { _0: 2482, _1: 2482 }, { _0: 2486, _1: 2489 }, { _0: 2493, _1: 2493 }, { _0: 2510, _1: 2510 }, { _0: 2524, _1: 2525 }, { _0: 2527, _1: 2529 }, { _0: 2544, _1: 2545 }, { _0: 2556, _1: 2556 }, { _0: 2565, _1: 2570 }, { _0: 2575, _1: 2576 }, { _0: 2579, _1: 2600 }, { _0: 2602, _1: 2608 }, { _0: 2610, _1: 2611 }, { _0: 2613, _1: 2614 }, { _0: 2616, _1: 2617 }, { _0: 2649, _1: 2652 }, { _0: 2654, _1: 2654 }, { _0: 2674, _1: 2676 }, { _0: 2693, _1: 2701 }, { _0: 2703, _1: 2705 }, { _0: 2707, _1: 2728 }, { _0: 2730, _1: 2736 }, { _0: 2738, _1: 2739 }, { _0: 2741, _1: 2745 }, { _0: 2749, _1: 2749 }, { _0: 2768, _1: 2768 }, { _0: 2784, _1: 2785 }, { _0: 2809, _1: 2809 }, { _0: 2821, _1: 2828 }, { _0: 2831, _1: 2832 }, { _0: 2835, _1: 2856 }, { _0: 2858, _1: 2864 }, { _0: 2866, _1: 2867 }, { _0: 2869, _1: 2873 }, { _0: 2877, _1: 2877 }, { _0: 2908, _1: 2909 }, { _0: 2911, _1: 2913 }, { _0: 2929, _1: 2929 }, { _0: 2947, _1: 2947 }, { _0: 2949, _1: 2954 }, { _0: 2958, _1: 2960 }, { _0: 2962, _1: 2965 }, { _0: 2969, _1: 2970 }, { _0: 2972, _1: 2972 }, { _0: 2974, _1: 2975 }, { _0: 2979, _1: 2980 }, { _0: 2984, _1: 2986 }, { _0: 2990, _1: 3001 }, { _0: 3024, _1: 3024 }, { _0: 3077, _1: 3084 }, { _0: 3086, _1: 3088 }, { _0: 3090, _1: 3112 }, { _0: 3114, _1: 3129 }, { _0: 3133, _1: 3133 }, { _0: 3160, _1: 3162 }, { _0: 3168, _1: 3169 }, { _0: 3200, _1: 3200 }, { _0: 3205, _1: 3212 }, { _0: 3214, _1: 3216 }, { _0: 3218, _1: 3240 }, { _0: 3242, _1: 3251 }, { _0: 3253, _1: 3257 }, { _0: 3261, _1: 3261 }, { _0: 3294, _1: 3294 }, { _0: 3296, _1: 3297 }, { _0: 3313, _1: 3314 }, { _0: 3333, _1: 3340 }, { _0: 3342, _1: 3344 }, { _0: 3346, _1: 3386 }, { _0: 3389, _1: 3389 }, { _0: 3406, _1: 3406 }, { _0: 3412, _1: 3414 }, { _0: 3423, _1: 3425 }, { _0: 3450, _1: 3455 }, { _0: 3461, _1: 3478 }, { _0: 3482, _1: 3505 }, { _0: 3507, _1: 3515 }, { _0: 3517, _1: 3517 }, { _0: 3520, _1: 3526 }, { _0: 3585, _1: 3632 }, { _0: 3634, _1: 3635 }, { _0: 3648, _1: 3654 }, { _0: 3713, _1: 3714 }, { _0: 3716, _1: 3716 }, { _0: 3719, _1: 3720 }, { _0: 3722, _1: 3722 }, { _0: 3725, _1: 3725 }, { _0: 3732, _1: 3735 }, { _0: 3737, _1: 3743 }, { _0: 3745, _1: 3747 }, { _0: 3749, _1: 3749 }, { _0: 3751, _1: 3751 }, { _0: 3754, _1: 3755 }, { _0: 3757, _1: 3760 }, { _0: 3762, _1: 3763 }, { _0: 3773, _1: 3773 }, { _0: 3776, _1: 3780 }, { _0: 3782, _1: 3782 }, { _0: 3804, _1: 3807 }, { _0: 3840, _1: 3840 }, { _0: 3904, _1: 3911 }, { _0: 3913, _1: 3948 }, { _0: 3976, _1: 3980 }, { _0: 4096, _1: 4138 }, { _0: 4159, _1: 4159 }, { _0: 4176, _1: 4181 }, { _0: 4186, _1: 4189 }, { _0: 4193, _1: 4193 }, { _0: 4197, _1: 4198 }, { _0: 4206, _1: 4208 }, { _0: 4213, _1: 4225 }, { _0: 4238, _1: 4238 }, { _0: 4256, _1: 4293 }, { _0: 4295, _1: 4295 }, { _0: 4301, _1: 4301 }, { _0: 4304, _1: 4346 }, { _0: 4348, _1: 4680 }, { _0: 4682, _1: 4685 }, { _0: 4688, _1: 4694 }, { _0: 4696, _1: 4696 }, { _0: 4698, _1: 4701 }, { _0: 4704, _1: 4744 }, { _0: 4746, _1: 4749 }, { _0: 4752, _1: 4784 }, { _0: 4786, _1: 4789 }, { _0: 4792, _1: 4798 }, { _0: 4800, _1: 4800 }, { _0: 4802, _1: 4805 }, { _0: 4808, _1: 4822 }, { _0: 4824, _1: 4880 }, { _0: 4882, _1: 4885 }, { _0: 4888, _1: 4954 }, { _0: 4992, _1: 5007 }, { _0: 5024, _1: 5109 }, { _0: 5112, _1: 5117 }, { _0: 5121, _1: 5740 }, { _0: 5743, _1: 5759 }, { _0: 5761, _1: 5786 }, { _0: 5792, _1: 5866 }, { _0: 5870, _1: 5880 }, { _0: 5888, _1: 5900 }, { _0: 5902, _1: 5905 }, { _0: 5920, _1: 5937 }, { _0: 5952, _1: 5969 }, { _0: 5984, _1: 5996 }, { _0: 5998, _1: 6000 }, { _0: 6016, _1: 6067 }, { _0: 6103, _1: 6103 }, { _0: 6108, _1: 6108 }, { _0: 6176, _1: 6263 }, { _0: 6272, _1: 6276 }, { _0: 6279, _1: 6312 }, { _0: 6314, _1: 6314 }, { _0: 6320, _1: 6389 }, { _0: 6400, _1: 6430 }, { _0: 6480, _1: 6509 }, { _0: 6512, _1: 6516 }, { _0: 6528, _1: 6571 }, { _0: 6576, _1: 6601 }, { _0: 6656, _1: 6678 }, { _0: 6688, _1: 6740 }, { _0: 6823, _1: 6823 }, { _0: 6917, _1: 6963 }, { _0: 6981, _1: 6987 }, { _0: 7043, _1: 7072 }, { _0: 7086, _1: 7087 }, { _0: 7098, _1: 7141 }, { _0: 7168, _1: 7203 }, { _0: 7245, _1: 7247 }, { _0: 7258, _1: 7293 }, { _0: 7296, _1: 7304 }, { _0: 7401, _1: 7404 }, { _0: 7406, _1: 7409 }, { _0: 7413, _1: 7414 }, { _0: 7424, _1: 7615 }, { _0: 7680, _1: 7957 }, { _0: 7960, _1: 7965 }, { _0: 7968, _1: 8005 }, { _0: 8008, _1: 8013 }, { _0: 8016, _1: 8023 }, { _0: 8025, _1: 8025 }, { _0: 8027, _1: 8027 }, { _0: 8029, _1: 8029 }, { _0: 8031, _1: 8061 }, { _0: 8064, _1: 8116 }, { _0: 8118, _1: 8124 }, { _0: 8126, _1: 8126 }, { _0: 8130, _1: 8132 }, { _0: 8134, _1: 8140 }, { _0: 8144, _1: 8147 }, { _0: 8150, _1: 8155 }, { _0: 8160, _1: 8172 }, { _0: 8178, _1: 8180 }, { _0: 8182, _1: 8188 }, { _0: 8305, _1: 8305 }, { _0: 8319, _1: 8319 }, { _0: 8336, _1: 8348 }, { _0: 8450, _1: 8450 }, { _0: 8455, _1: 8455 }, { _0: 8458, _1: 8467 }, { _0: 8469, _1: 8469 }, { _0: 8473, _1: 8477 }, { _0: 8484, _1: 8484 }, { _0: 8486, _1: 8486 }, { _0: 8488, _1: 8488 }, { _0: 8490, _1: 8493 }, { _0: 8495, _1: 8505 }, { _0: 8508, _1: 8511 }, { _0: 8517, _1: 8521 }, { _0: 8526, _1: 8526 }, { _0: 8544, _1: 8584 }, { _0: 11264, _1: 11310 }, { _0: 11312, _1: 11358 }, { _0: 11360, _1: 11492 }, { _0: 11499, _1: 11502 }, { _0: 11506, _1: 11507 }, { _0: 11520, _1: 11557 }, { _0: 11559, _1: 11559 }, { _0: 11565, _1: 11565 }, { _0: 11568, _1: 11623 }, { _0: 11631, _1: 11631 }, { _0: 11648, _1: 11670 }, { _0: 11680, _1: 11686 }, { _0: 11688, _1: 11694 }, { _0: 11696, _1: 11702 }, { _0: 11704, _1: 11710 }, { _0: 11712, _1: 11718 }, { _0: 11720, _1: 11726 }, { _0: 11728, _1: 11734 }, { _0: 11736, _1: 11742 }, { _0: 11823, _1: 11823 }, { _0: 12293, _1: 12295 }, { _0: 12321, _1: 12329 }, { _0: 12337, _1: 12341 }, { _0: 12344, _1: 12348 }, { _0: 12353, _1: 12438 }, { _0: 12445, _1: 12447 }, { _0: 12449, _1: 12538 }, { _0: 12540, _1: 12543 }, { _0: 12549, _1: 12590 }, { _0: 12593, _1: 12686 }, { _0: 12704, _1: 12730 }, { _0: 12784, _1: 12799 }, { _0: 13312, _1: 19893 }, { _0: 19968, _1: 40938 }, { _0: 40960, _1: 42124 }, { _0: 42192, _1: 42237 }, { _0: 42240, _1: 42508 }, { _0: 42512, _1: 42527 }, { _0: 42538, _1: 42539 }, { _0: 42560, _1: 42606 }, { _0: 42623, _1: 42653 }, { _0: 42656, _1: 42735 }, { _0: 42775, _1: 42783 }, { _0: 42786, _1: 42888 }, { _0: 42891, _1: 42926 }, { _0: 42928, _1: 42935 }, { _0: 42999, _1: 43009 }, { _0: 43011, _1: 43013 }, { _0: 43015, _1: 43018 }, { _0: 43020, _1: 43042 }, { _0: 43072, _1: 43123 }, { _0: 43138, _1: 43187 }, { _0: 43250, _1: 43255 }, { _0: 43259, _1: 43259 }, { _0: 43261, _1: 43261 }, { _0: 43274, _1: 43301 }, { _0: 43312, _1: 43334 }, { _0: 43360, _1: 43388 }, { _0: 43396, _1: 43442 }, { _0: 43471, _1: 43471 }, { _0: 43488, _1: 43492 }, { _0: 43494, _1: 43503 }, { _0: 43514, _1: 43518 }, { _0: 43520, _1: 43560 }, { _0: 43584, _1: 43586 }, { _0: 43588, _1: 43595 }, { _0: 43616, _1: 43638 }, { _0: 43642, _1: 43642 }, { _0: 43646, _1: 43695 }, { _0: 43697, _1: 43697 }, { _0: 43701, _1: 43702 }, { _0: 43705, _1: 43709 }, { _0: 43712, _1: 43712 }, { _0: 43714, _1: 43714 }, { _0: 43739, _1: 43741 }, { _0: 43744, _1: 43754 }, { _0: 43762, _1: 43764 }, { _0: 43777, _1: 43782 }, { _0: 43785, _1: 43790 }, { _0: 43793, _1: 43798 }, { _0: 43808, _1: 43814 }, { _0: 43816, _1: 43822 }, { _0: 43824, _1: 43866 }, { _0: 43868, _1: 43877 }, { _0: 43888, _1: 44002 }, { _0: 44032, _1: 55203 }, { _0: 55216, _1: 55238 }, { _0: 55243, _1: 55291 }, { _0: 63744, _1: 64109 }, { _0: 64112, _1: 64217 }, { _0: 64256, _1: 64262 }, { _0: 64275, _1: 64279 }, { _0: 64285, _1: 64285 }, { _0: 64287, _1: 64296 }, { _0: 64298, _1: 64310 }, { _0: 64312, _1: 64316 }, { _0: 64318, _1: 64318 }, { _0: 64320, _1: 64321 }, { _0: 64323, _1: 64324 }, { _0: 64326, _1: 64433 }, { _0: 64467, _1: 64829 }, { _0: 64848, _1: 64911 }, { _0: 64914, _1: 64967 }, { _0: 65008, _1: 65019 }, { _0: 65136, _1: 65140 }, { _0: 65142, _1: 65276 }, { _0: 65313, _1: 65338 }, { _0: 65345, _1: 65370 }, { _0: 65382, _1: 65470 }, { _0: 65474, _1: 65479 }, { _0: 65482, _1: 65487 }, { _0: 65490, _1: 65495 }, { _0: 65498, _1: 65500 }, { _0: 65536, _1: 65547 }, { _0: 65549, _1: 65574 }, { _0: 65576, _1: 65594 }, { _0: 65596, _1: 65597 }, { _0: 65599, _1: 65613 }, { _0: 65616, _1: 65629 }, { _0: 65664, _1: 65786 }, { _0: 65856, _1: 65908 }, { _0: 66176, _1: 66204 }, { _0: 66208, _1: 66256 }, { _0: 66304, _1: 66335 }, { _0: 66349, _1: 66378 }, { _0: 66384, _1: 66421 }, { _0: 66432, _1: 66461 }, { _0: 66464, _1: 66499 }, { _0: 66504, _1: 66511 }, { _0: 66513, _1: 66517 }, { _0: 66560, _1: 66717 }, { _0: 66736, _1: 66771 }, { _0: 66776, _1: 66811 }, { _0: 66816, _1: 66855 }, { _0: 66864, _1: 66915 }, { _0: 67072, _1: 67382 }, { _0: 67392, _1: 67413 }, { _0: 67424, _1: 67431 }, { _0: 67584, _1: 67589 }, { _0: 67592, _1: 67592 }, { _0: 67594, _1: 67637 }, { _0: 67639, _1: 67640 }, { _0: 67644, _1: 67644 }, { _0: 67647, _1: 67669 }, { _0: 67680, _1: 67702 }, { _0: 67712, _1: 67742 }, { _0: 67808, _1: 67826 }, { _0: 67828, _1: 67829 }, { _0: 67840, _1: 67861 }, { _0: 67872, _1: 67897 }, { _0: 67968, _1: 68023 }, { _0: 68030, _1: 68031 }, { _0: 68096, _1: 68096 }, { _0: 68112, _1: 68115 }, { _0: 68117, _1: 68119 }, { _0: 68121, _1: 68147 }, { _0: 68192, _1: 68220 }, { _0: 68224, _1: 68252 }, { _0: 68288, _1: 68295 }, { _0: 68297, _1: 68324 }, { _0: 68352, _1: 68405 }, { _0: 68416, _1: 68437 }, { _0: 68448, _1: 68466 }, { _0: 68480, _1: 68497 }, { _0: 68608, _1: 68680 }, { _0: 68736, _1: 68786 }, { _0: 68800, _1: 68850 }, { _0: 69635, _1: 69687 }, { _0: 69763, _1: 69807 }, { _0: 69840, _1: 69864 }, { _0: 69891, _1: 69926 }, { _0: 69968, _1: 70002 }, { _0: 70006, _1: 70006 }, { _0: 70019, _1: 70066 }, { _0: 70081, _1: 70084 }, { _0: 70106, _1: 70106 }, { _0: 70108, _1: 70108 }, { _0: 70144, _1: 70161 }, { _0: 70163, _1: 70187 }, { _0: 70272, _1: 70278 }, { _0: 70280, _1: 70280 }, { _0: 70282, _1: 70285 }, { _0: 70287, _1: 70301 }, { _0: 70303, _1: 70312 }, { _0: 70320, _1: 70366 }, { _0: 70405, _1: 70412 }, { _0: 70415, _1: 70416 }, { _0: 70419, _1: 70440 }, { _0: 70442, _1: 70448 }, { _0: 70450, _1: 70451 }, { _0: 70453, _1: 70457 }, { _0: 70461, _1: 70461 }, { _0: 70480, _1: 70480 }, { _0: 70493, _1: 70497 }, { _0: 70656, _1: 70708 }, { _0: 70727, _1: 70730 }, { _0: 70784, _1: 70831 }, { _0: 70852, _1: 70853 }, { _0: 70855, _1: 70855 }, { _0: 71040, _1: 71086 }, { _0: 71128, _1: 71131 }, { _0: 71168, _1: 71215 }, { _0: 71236, _1: 71236 }, { _0: 71296, _1: 71338 }, { _0: 71424, _1: 71449 }, { _0: 71840, _1: 71903 }, { _0: 71935, _1: 71935 }, { _0: 72192, _1: 72192 }, { _0: 72203, _1: 72242 }, { _0: 72250, _1: 72250 }, { _0: 72272, _1: 72272 }, { _0: 72284, _1: 72323 }, { _0: 72326, _1: 72329 }, { _0: 72384, _1: 72440 }, { _0: 72704, _1: 72712 }, { _0: 72714, _1: 72750 }, { _0: 72768, _1: 72768 }, { _0: 72818, _1: 72847 }, { _0: 72960, _1: 72966 }, { _0: 72968, _1: 72969 }, { _0: 72971, _1: 73008 }, { _0: 73030, _1: 73030 }, { _0: 73728, _1: 74649 }, { _0: 74752, _1: 74862 }, { _0: 74880, _1: 75075 }, { _0: 77824, _1: 78894 }, { _0: 82944, _1: 83526 }, { _0: 92160, _1: 92728 }, { _0: 92736, _1: 92766 }, { _0: 92880, _1: 92909 }, { _0: 92928, _1: 92975 }, { _0: 92992, _1: 92995 }, { _0: 93027, _1: 93047 }, { _0: 93053, _1: 93071 }, { _0: 93952, _1: 94020 }, { _0: 94032, _1: 94032 }, { _0: 94099, _1: 94111 }, { _0: 94176, _1: 94177 }, { _0: 94208, _1: 100332 }, { _0: 100352, _1: 101106 }, { _0: 110592, _1: 110878 }, { _0: 110960, _1: 111355 }, { _0: 113664, _1: 113770 }, { _0: 113776, _1: 113788 }, { _0: 113792, _1: 113800 }, { _0: 113808, _1: 113817 }, { _0: 119808, _1: 119892 }, { _0: 119894, _1: 119964 }, { _0: 119966, _1: 119967 }, { _0: 119970, _1: 119970 }, { _0: 119973, _1: 119974 }, { _0: 119977, _1: 119980 }, { _0: 119982, _1: 119993 }, { _0: 119995, _1: 119995 }, { _0: 119997, _1: 120003 }, { _0: 120005, _1: 120069 }, { _0: 120071, _1: 120074 }, { _0: 120077, _1: 120084 }, { _0: 120086, _1: 120092 }, { _0: 120094, _1: 120121 }, { _0: 120123, _1: 120126 }, { _0: 120128, _1: 120132 }, { _0: 120134, _1: 120134 }, { _0: 120138, _1: 120144 }, { _0: 120146, _1: 120485 }, { _0: 120488, _1: 120512 }, { _0: 120514, _1: 120538 }, { _0: 120540, _1: 120570 }, { _0: 120572, _1: 120596 }, { _0: 120598, _1: 120628 }, { _0: 120630, _1: 120654 }, { _0: 120656, _1: 120686 }, { _0: 120688, _1: 120712 }, { _0: 120714, _1: 120744 }, { _0: 120746, _1: 120770 }, { _0: 120772, _1: 120779 }, { _0: 124928, _1: 125124 }, { _0: 125184, _1: 125251 }, { _0: 126464, _1: 126467 }, { _0: 126469, _1: 126495 }, { _0: 126497, _1: 126498 }, { _0: 126500, _1: 126500 }, { _0: 126503, _1: 126503 }, { _0: 126505, _1: 126514 }, { _0: 126516, _1: 126519 }, { _0: 126521, _1: 126521 }, { _0: 126523, _1: 126523 }, { _0: 126530, _1: 126530 }, { _0: 126535, _1: 126535 }, { _0: 126537, _1: 126537 }, { _0: 126539, _1: 126539 }, { _0: 126541, _1: 126543 }, { _0: 126545, _1: 126546 }, { _0: 126548, _1: 126548 }, { _0: 126551, _1: 126551 }, { _0: 126553, _1: 126553 }, { _0: 126555, _1: 126555 }, { _0: 126557, _1: 126557 }, { _0: 126559, _1: 126559 }, { _0: 126561, _1: 126562 }, { _0: 126564, _1: 126564 }, { _0: 126567, _1: 126570 }, { _0: 126572, _1: 126578 }, { _0: 126580, _1: 126583 }, { _0: 126585, _1: 126588 }, { _0: 126590, _1: 126590 }, { _0: 126592, _1: 126601 }, { _0: 126603, _1: 126619 }, { _0: 126625, _1: 126627 }, { _0: 126629, _1: 126633 }, { _0: 126635, _1: 126651 }, { _0: 131072, _1: 173782 }, { _0: 173824, _1: 177972 }, { _0: 177984, _1: 178205 }, { _0: 178208, _1: 183969 }, { _0: 183984, _1: 191456 }, { _0: 194560, _1: 195101 }]);
function moonbitlang$core$json5$$lex_property_name(ctx) {
  const _bind = moonbitlang$core$json5$$lex_skip_whitespace(ctx);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  _J$_arm$2: {
    let c;
    _J$_arm: {
      const _bind$2 = moonbitlang$core$json5$$read_char(ctx);
      const _Some = _bind$2;
      if (_bind$2 >= 0) {
        const _x = _Some;
        switch (_x) {
          case 125: {
            return new Result$Ok$18$(Token$RBrace);
          }
          case 39: {
            c = _x;
            break _J$_arm;
          }
          case 34: {
            c = _x;
            break _J$_arm;
          }
          case 36: {
            break _J$_arm$2;
          }
          case 95: {
            break _J$_arm$2;
          }
          case 92: {
            const _bind$3 = moonbitlang$core$json5$$lex_assert_char(ctx, 117);
            if (_bind$3.$tag === 1) {
              const _ok$2 = _bind$3;
              _ok$2._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = moonbitlang$core$json5$$lex_hex_digits(ctx, 4);
            let c$2;
            if (_bind$4.$tag === 1) {
              const _ok$3 = _bind$4;
              c$2 = _ok$3._0;
            } else {
              return _bind$4;
            }
            const c$3 = c$2;
            if (c$3 === 36 || (c$3 === 95 || (c$3 >= 97 && c$3 <= 122 || (c$3 >= 65 && c$3 <= 90 || c$3 > 127 && moonbitlang$core$json5$$CharClass$contains(moonbitlang$core$json5$$non_ascii_id_start, c$3))))) {
              const buffer = moonbitlang$core$json5$$StringBuilder$make();
              moonbitlang$core$json5$$StringBuilder$add_char(buffer, c$3);
              const _bind$5 = moonbitlang$core$json5$$lex_ident(ctx, ctx.offset, buffer);
              let s;
              if (_bind$5.$tag === 1) {
                const _ok$4 = _bind$5;
                s = _ok$4._0;
              } else {
                return _bind$5;
              }
              return new Result$Ok$18$(new Token$String(s));
            } else {
              return new Result$Err$18$(new ParseError$InvalidIdentEscape(moonbitlang$core$json5$$offset_to_position(ctx.input, ctx.offset - 6 | 0)));
            }
          }
          default: {
            if (_x >= 97 && _x <= 122 || (_x >= 65 && _x <= 90 || _x > 127 && moonbitlang$core$json5$$CharClass$contains(moonbitlang$core$json5$$non_ascii_id_start, _x))) {
              const _bind$6 = moonbitlang$core$json5$$lex_ident(ctx, ctx.offset - 1 | 0, moonbitlang$core$json5$$lex_ident$46$buffer$46$default());
              let s$2;
              if (_bind$6.$tag === 1) {
                const _ok$5 = _bind$6;
                s$2 = _ok$5._0;
              } else {
                return _bind$6;
              }
              return new Result$Ok$18$(new Token$String(s$2));
            }
            return new Result$Err$18$(moonbitlang$core$json5$$invalid_char(ctx, -1));
          }
        }
      } else {
        return new Result$Err$18$(ParseError$InvalidEof);
      }
    }
    const _bind$7 = moonbitlang$core$json5$$lex_string(ctx, c);
    let s$3;
    if (_bind$7.$tag === 1) {
      const _ok$6 = _bind$7;
      s$3 = _ok$6._0;
    } else {
      return _bind$7;
    }
    return new Result$Ok$18$(new Token$String(s$3));
  }
  const _bind$8 = moonbitlang$core$json5$$lex_ident(ctx, ctx.offset - 1 | 0, moonbitlang$core$json5$$lex_ident$46$buffer$46$default());
  let s$4;
  if (_bind$8.$tag === 1) {
    const _ok$7 = _bind$8;
    s$4 = _ok$7._0;
  } else {
    return _bind$8;
  }
  return new Result$Ok$18$(new Token$String(s$4));
}
function moonbitlang$core$json5$$parse_value(ctx) {
  const _bind = moonbitlang$core$json5$$lex_value(ctx, moonbitlang$core$json5$$lex_value$46$allow_rbracket$46$default());
  let tok;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    tok = _ok._0;
  } else {
    return _bind;
  }
  return moonbitlang$core$json5$$parse_value2(ctx, tok);
}
function moonbitlang$core$json5$$parse_value2(ctx, tok) {
  switch (tok.$tag) {
    case 0: {
      return new Result$Ok$19$($64$moonbitlang$47$core$47$json$46$JsonValue$Null);
    }
    case 1: {
      return new Result$Ok$19$(new $64$moonbitlang$47$core$47$json$46$JsonValue$Boolean(true));
    }
    case 2: {
      return new Result$Ok$19$(new $64$moonbitlang$47$core$47$json$46$JsonValue$Boolean(false));
    }
    case 3: {
      const _Number = tok;
      const _x = _Number._0;
      return new Result$Ok$19$(new $64$moonbitlang$47$core$47$json$46$JsonValue$Number(_x));
    }
    case 4: {
      const _String = tok;
      const _x$2 = _String._0;
      return new Result$Ok$19$(new $64$moonbitlang$47$core$47$json$46$JsonValue$String(_x$2));
    }
    case 5: {
      return moonbitlang$core$json5$$parse_object(ctx);
    }
    case 7: {
      return moonbitlang$core$json5$$parse_array(ctx);
    }
    default: {
      return $raise("unreachable");
    }
  }
}
function moonbitlang$core$json5$$parse_array(ctx) {
  const vec = moonbitlang$core$vec$$Vec$new$11$();
  _L$6: while (true) {
    _J$_continue: {
      const _bind = moonbitlang$core$json5$$lex_value(ctx, true);
      let tok;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        tok = _ok._0;
      } else {
        return _bind;
      }
      if (tok.$tag === 8) {
        break;
      } else {
        const _bind$2 = moonbitlang$core$json5$$parse_value2(ctx, tok);
        let _tmp$16;
        if (_bind$2.$tag === 1) {
          const _ok$2 = _bind$2;
          _tmp$16 = _ok$2._0;
        } else {
          return _bind$2;
        }
        moonbitlang$core$vec$$Vec$push$11$(vec, _tmp$16);
        const _bind$3 = moonbitlang$core$json5$$lex_after_array_value(ctx);
        let tok2;
        if (_bind$3.$tag === 1) {
          const _ok$3 = _bind$3;
          tok2 = _ok$3._0;
        } else {
          return _bind$3;
        }
        switch (tok2.$tag) {
          case 9: {
            break _J$_continue;
          }
          case 8: {
            break _L$6;
          }
          default: {
            $raise("unreachable");
          }
        }
      }
      break _J$_continue;
    }
    continue;
  }
  return new Result$Ok$19$(new $64$moonbitlang$47$core$47$json$46$JsonValue$Array(vec));
}
function moonbitlang$core$json5$$parse_object(ctx) {
  let map = moonbitlang$core$map$$empty$12$();
  _L$7: while (true) {
    _J$_continue: {
      const _bind = moonbitlang$core$json5$$lex_property_name(ctx);
      let tok;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        tok = _ok._0;
      } else {
        return _bind;
      }
      switch (tok.$tag) {
        case 6: {
          break _L$7;
        }
        case 4: {
          const _String = tok;
          const _x = _String._0;
          const _bind$2 = moonbitlang$core$json5$$lex_after_property_name(ctx);
          let tok2;
          if (_bind$2.$tag === 1) {
            const _ok$2 = _bind$2;
            tok2 = _ok$2._0;
          } else {
            return _bind$2;
          }
          if (tok2.$tag === 10) {
            const _bind$3 = moonbitlang$core$json5$$parse_value(ctx);
            let val;
            if (_bind$3.$tag === 1) {
              const _ok$3 = _bind$3;
              val = _ok$3._0;
            } else {
              return _bind$3;
            }
            map = moonbitlang$core$map$$Map$insert$12$(map, _x, val);
            const _bind$4 = moonbitlang$core$json5$$lex_after_object_value(ctx);
            let tok3;
            if (_bind$4.$tag === 1) {
              const _ok$4 = _bind$4;
              tok3 = _ok$4._0;
            } else {
              return _bind$4;
            }
            switch (tok3.$tag) {
              case 9: {
                break _J$_continue;
              }
              case 6: {
                break _L$7;
              }
              default: {
                $raise("unreachable");
              }
            }
          } else {
            $raise("unreachable");
          }
          break;
        }
        default: {
          $raise("unreachable");
        }
      }
      break _J$_continue;
    }
    continue;
  }
  return new Result$Ok$19$(new $64$moonbitlang$47$core$47$json$46$JsonValue$Object(map));
}
function moonbitlang$core$json5$$parse(input) {
  const ctx = moonbitlang$core$json5$$ParseContext$make(input);
  const _bind = moonbitlang$core$json5$$parse_value(ctx);
  let val;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    val = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = moonbitlang$core$json5$$lex_skip_whitespace(ctx);
  if (_bind$2.$tag === 1) {
    const _ok$2 = _bind$2;
    _ok$2._0;
  } else {
    return _bind$2;
  }
  return ctx.offset >= ctx.end_offset ? new Result$Ok$19$(val) : new Result$Err$19$(moonbitlang$core$json5$$invalid_char(ctx, moonbitlang$core$json5$$invalid_char$46$shift$46$default()));
}
export { moonbitlang$core$json5$$parse as parse }
