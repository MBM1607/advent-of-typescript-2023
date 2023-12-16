export type FindSantaInner<T, Index extends 1[] = []> = T extends [
	infer First extends string,
	...infer Rest extends string[],
]
	? First extends "🎅🏼"
		? Index["length"]
		: FindSantaInner<Rest, [...Index, 1]>
	: never;

export type FindSanta<T extends string[][], Index extends 1[] = []> = T extends [
	infer FirstRow extends string[],
	...infer RestRows extends string[][],
]
	? FindSantaInner<FirstRow> extends infer result
		? [result] extends [never]
			? FindSanta<RestRows, [...Index, 1]>
			: [Index["length"], FindSantaInner<FirstRow>]
		: never
	: never;
