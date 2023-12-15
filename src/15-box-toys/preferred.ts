export type MakeTuple<
	T,
	Length extends number,
	Tuple extends T[] = [],
> = Tuple["length"] extends Length ? Tuple : MakeTuple<T, Length, [...Tuple, T]>;

export type BoxToys<T, N extends number> = {
	[K in N]: MakeTuple<T, K>;
}[N];
