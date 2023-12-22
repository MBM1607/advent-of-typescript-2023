export type Prettify<T> = {
	[K in keyof T]: T[K] extends string ? T[K] : Prettify<T[K]>;
};

export type Concat<T extends any[], U extends any[]> = [...T, ...U];

export type TupleOfLength<
	Length extends number,
	T = 1,
	U extends T[] = [],
> = U["length"] extends Length ? U : TupleOfLength<Length, Concat<U, [T]>>;

export type Add<T extends number, U extends number> = [
	...TupleOfLength<T>,
	...TupleOfLength<U>,
]["length"];

export type Multiply<T extends number, U extends number, V extends number[] = [T]> = U extends 0
	? 0
	: V["length"] extends U
		? T
		: Multiply<Add<T, V[0]> & number, U, [...V, 0]>;
