import type { Equal, Expect } from "type-testing";

type ArrayOfLength<Length extends number, T extends unknown[] = []> = T["length"] extends Length
	? T
	: ArrayOfLength<Length, [...T, T["length"]]>;

type DayCounter<
	StartDay extends number,
	EndDay extends number,
	IncrementingDays extends number[] = ArrayOfLength<StartDay>,
	Days extends number[] = [],
> = Days[0] extends EndDay
	? Days[number]
	: DayCounter<StartDay, EndDay, [...IncrementingDays, 1], [IncrementingDays["length"], ...Days]>;

type TwelveDaysOfChristmas = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type test_0_actual = DayCounter<1, 12>;
//   ^?
type test_0_expected = TwelveDaysOfChristmas;
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

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
type test_1_actual = DayCounter<1, 25>;
//   ^?
type test_1_expected = DaysUntilChristmas;
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = DayCounter<22, 25>;
//   ^?
type test_2_expected = 22 | 23 | 24 | 25;
type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;

type test_3_actual = DayCounter<20, 30>;
//   ^?
type test_3_expected = 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
type test_3 = Expect<Equal<test_2_expected, test_2_actual>>;
