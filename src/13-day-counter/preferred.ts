type ArrayOfLength<
	Length extends number,
	T,
	Accumulator extends T[] = [],
> = Accumulator["length"] extends Length
	? Accumulator
	: ArrayOfLength<Length, T, [...Accumulator, T]>;

export type DayCounter<
	StartDay extends number,
	EndDay extends number,
	Days extends number[] = ArrayOfLength<StartDay, never>,
> = Days["length"] extends EndDay
	? [...Days, EndDay][number]
	: DayCounter<StartDay, EndDay, [...Days, Days["length"]]>;
