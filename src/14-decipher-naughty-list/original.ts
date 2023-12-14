export type DecipherNaughtyList<
	T extends string,
	Names extends string[] = [],
> = T extends `${infer Name}/${infer Rest}`
	? DecipherNaughtyList<Rest, [...Names, Name]>
	: T extends `${infer Name}`
		? [...Names, Name][number]
		: never;
