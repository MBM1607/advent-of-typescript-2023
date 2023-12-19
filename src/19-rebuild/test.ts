import type { Equal, Expect } from "type-testing";
import type { Rebuild } from "./solution.js";

type test_0_original = Rebuild<[2, 1, 3, 3, 1, 1, 2]>;
//   ^?
type test_0_expected = [
	"🛹",
	"🛹",
	"🚲",
	"🛴",
	"🛴",
	"🛴",
	"🏄",
	"🏄",
	"🏄",
	"🛹",
	"🚲",
	"🛴",
	"🛴",
];
type test_0_0 = Expect<Equal<test_0_expected, test_0_original>>;

type test_1_original = Rebuild<[3, 3, 2, 1, 2, 1, 2]>;
//   ^?
type test_1_expected = [
	"🛹",
	"🛹",
	"🛹",
	"🚲",
	"🚲",
	"🚲",
	"🛴",
	"🛴",
	"🏄",
	"🛹",
	"🛹",
	"🚲",
	"🛴",
	"🛴",
];
type test_1_0 = Expect<Equal<test_1_expected, test_1_original>>;

type test_2_original = Rebuild<[2, 3, 3, 5, 1, 1, 2]>;
//   ^?
type test_2_expected = [
	"🛹",
	"🛹",
	"🚲",
	"🚲",
	"🚲",
	"🛴",
	"🛴",
	"🛴",
	"🏄",
	"🏄",
	"🏄",
	"🏄",
	"🏄",
	"🛹",
	"🚲",
	"🛴",
	"🛴",
];
type test_2_0 = Expect<Equal<test_2_expected, test_2_original>>;
