export type MakeTuple<
	T,
	Length extends number,
	Tuple extends T[] = [],
> = Length extends Tuple["length"] ? Tuple : MakeTuple<T, Length, [...Tuple, T]>;

export type BoxToys<T, N extends number> = MakeTuple<T, N>;
