import type { Equal, Expect } from "type-testing";
import type { DayCounter as Original } from "./original.js";
import type { DayCounter as Preferred } from "./preferred.js";

type TwelveDaysOfChristmas = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type test_0_original = Original<1, 12>;
//   ^?
type test_0_preferred = Preferred<1, 12>;
//   ^?
type test_0_expected = TwelveDaysOfChristmas;
type test_0_1 = Expect<Equal<test_0_expected, test_0_original>>;
type test_0_2 = Expect<Equal<test_0_expected, test_0_preferred>>;

type DaysUntilChristmas =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25;
type test_1_original = Original<1, 25>;
//   ^?
type test_1_preferred = Original<1, 25>;
//   ^?

type test_1_expected = DaysUntilChristmas;

type test_1_0 = Expect<Equal<test_1_expected, test_1_original>>;
type test_1_1 = Expect<Equal<test_1_expected, test_1_preferred>>;

type test_2_original = Original<22, 25>;
//   ^?
type test_2_preferred = Preferred<22, 25>;
//   ^?
type test_2_expected = 22 | 23 | 24 | 25;
type test_2_0 = Expect<Equal<test_2_expected, test_2_original>>;
type test_2_1 = Expect<Equal<test_2_expected, test_2_preferred>>;

type test_3_original = Original<20, 30>;
//   ^?
type test_3_preferred = Preferred<20, 30>;
//   ^?
type test_3_expected = 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
type test_3_0 = Expect<Equal<test_3_expected, test_3_original>>;
type test_3_1 = Expect<Equal<test_3_expected, test_3_preferred>>;
