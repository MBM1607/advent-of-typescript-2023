export type Prettify<T> = {
	[K in keyof T]: T[K] extends string ? T[K] : Prettify<T[K]>;
};
