export type FindSanta<T, Index extends 1[] = []> = T extends [
	infer First extends string,
	...infer Rest extends string[],
]
	? First extends "🎅🏼"
		? Index["length"]
		: FindSanta<Rest, [...Index, 1]>
	: never;
