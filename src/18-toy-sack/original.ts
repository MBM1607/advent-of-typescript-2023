export type Count<Array extends unknown[], T, CountArray extends 1[] = []> = Array extends [
	infer Head,
	...infer Rest,
]
	? Head extends T
		? Count<Rest, T, [...CountArray, 1]>
		: Count<Rest, T, CountArray>
	: CountArray["length"];
