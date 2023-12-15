export type MakeTuple<
	T,
	Length extends number,
	Tuple extends T[] = [],
> = Tuple["length"] extends Length ? Tuple : MakeTuple<T, Length, [...Tuple, T]>;

export type BoxToys<T, N extends number> = N extends N ? MakeTuple<T, N> : never;
