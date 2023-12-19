type Things = ["🛹", "🚲", "🛴", "🏄"];

type Repeat<T, N extends number, R extends T[] = []> = R["length"] extends N
	? R
	: Repeat<T, N, [...R, T]>;

export type Rebuild<
	List extends number[],
	ToyList extends unknown[] = [],
	LoopIndex extends 1[] = [],
> = List extends [infer F extends number, ...infer Rest extends number[]]
	? Rebuild<
			Rest,
			[...ToyList, ...Repeat<Things[LoopIndex["length"]], F>],
			LoopIndex["length"] extends 3 ? [] : [...LoopIndex, 1]
		>
	: List extends [infer F extends number]
		? [...ToyList, ...Repeat<Things[LoopIndex["length"]], F>]
		: ToyList;
