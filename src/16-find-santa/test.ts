import type { Equal, Expect } from "type-testing";
import type { FindSanta as Original } from "./original.js";
import type { FindSanta as Preferred } from "./preferred.js";

type Forest0 = [
	["🎅🏼", "🎄", "🎄", "🎄"],
	["🎄", "🎄", "🎄", "🎄"],
	["🎄", "🎄", "🎄", "🎄"],
	["🎄", "🎄", "🎄", "🎄"],
];
type test_0_original = Original<Forest0>;
//   ^?
type test_0_preferred = Preferred<Forest0>;
//   ^?
type test_0_expected = [0, 0];
type test_0_0 = Expect<Equal<test_0_expected, test_0_original>>;
type test_0_1 = Expect<Equal<test_0_expected, test_0_preferred>>;

type Forest1 = [
	["🎄", "🎄", "🎅🏼", "🎄"],
	["🎄", "🎄", "🎄", "🎄"],
	["🎄", "🎄", "🎄", "🎄"],
	["🎄", "🎄", "🎄", "🎄"],
];
type test_1_original = Original<Forest1>;
type test_1_preferred = Preferred<Forest1>;
//   ^?
type test_1_expected = [0, 2];
type test_1_0 = Expect<Equal<test_1_expected, test_1_original>>;
type test_1_1 = Expect<Equal<test_1_expected, test_1_preferred>>;

type Forest2 = [
	["🎄", "🎄", "🎄", "🎄"],
	["🎄", "🎄", "🎄", "🎄"],
	["🎄", "🎄", "🎅🏼", "🎄"],
	["🎄", "🎄", "🎄", "🎄"],
];
type test_2_original = Original<Forest2>;
//   ^?
type test_2_preferred = Preferred<Forest2>;
//   ^?
type test_2_expected = [2, 2];
type test_2_0 = Expect<Equal<test_2_expected, test_2_original>>;
type test_2_1 = Expect<Equal<test_2_expected, test_2_preferred>>;

type Forest3 = [
	["🎄", "🎄", "🎄", "🎄"],
	["🎄", "🎄", "🎄", "🎄"],
	["🎄", "🎅🏼", "🎄", "🎄"],
	["🎄", "🎄", "🎄", "🎄"],
];
type test_3_original = Original<Forest3>;
//   ^?
type test_3_preferred = Preferred<Forest3>;
//   ^?
type test_3_expected = [2, 1];
type test_3_0 = Expect<Equal<test_3_expected, test_3_original>>;
type test_3_1 = Expect<Equal<test_3_expected, test_3_preferred>>;

type Forest4 = [
	["🎄", "🎄", "🎄", "🎄"],
	["🎄", "🎄", "🎅🏼", "🎄"],
	["🎄", "🎄", "🎄", "🎄"],
	["🎄", "🎄", "🎄", "🎄"],
];
type test_4_original = Original<Forest4>;
//   ^?
type test_4_preferred = Preferred<Forest4>;
//   ^?
type test_4_expected = [1, 2];
type test_4_0 = Expect<Equal<test_4_expected, test_4_original>>;
type test_4_1 = Expect<Equal<test_4_expected, test_4_preferred>>;
