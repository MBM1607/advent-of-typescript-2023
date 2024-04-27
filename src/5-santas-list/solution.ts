export type SantasList<List1 extends readonly unknown[], List2 extends readonly unknown[]> = [
	...List1,
	...List2,
];
