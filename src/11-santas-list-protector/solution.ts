export type SantaListProtector<T> = T extends Record<string, unknown> | Array<unknown>
	? { readonly [K in keyof T]: SantaListProtector<T[K]> }
	: T;
