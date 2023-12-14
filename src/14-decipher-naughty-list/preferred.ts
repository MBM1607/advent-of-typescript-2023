export type DecipherNaughtyList<T extends string> = T extends `${infer Name}/${infer Rest}`
	? DecipherNaughtyList<Rest> | Name
	: T;
