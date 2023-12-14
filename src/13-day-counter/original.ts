type ArrayOfLength<Length extends number, T extends unknown[] = []> = T["length"] extends Length
	? T
	: ArrayOfLength<Length, [...T, T["length"]]>;

export type DayCounter<
	StartDay extends number,
	EndDay extends number,
	IncrementingDays extends number[] = ArrayOfLength<StartDay>,
	Days extends number[] = [],
> = Days[0] extends EndDay
	? Days[number]
	: DayCounter<StartDay, EndDay, [...IncrementingDays, 1], [IncrementingDays["length"], ...Days]>;
