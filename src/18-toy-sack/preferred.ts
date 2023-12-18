export type Count<Array extends unknown[], T extends unknown> = Array extends [
	infer First,
	...infer Rest,
]
	? Array[number] extends T
		? Array["length"]
		: Count<First extends T ? [...Rest, First] : Rest, T>
	: Array["length"];
