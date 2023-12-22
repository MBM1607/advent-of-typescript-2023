/** because "dashing" implies speed */
type Dasher = "💨";

/** representing dancing or grace */
type Dancer = "💃";

/** a deer, prancing */
type Prancer = "🦌";

/** a star for the dazzling, slightly mischievous Vixen */
type Vixen = "🌟";

/** for the celestial body that shares its name */
type Comet = "☄️";

/** symbolizing love, as Cupid is the god of love */
type Cupid = "❤️";

/** representing thunder, as "Donner" means thunder in German */
type Donner = "🌩️";

/** meaning lightning in German, hence the lightning bolt */
type Blitzen = "⚡";

/** for his famous red nose */
type Rudolph = "🔴";

type Reindeer = Dasher | Dancer | Prancer | Vixen | Comet | Cupid | Donner | Blitzen | Rudolph;

type SudokuBoard = [
	[[Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer]],
	[[Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer]],
	[[Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer]],
	[[Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer]],
	[[Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer]],
	[[Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer]],
	[[Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer]],
	[[Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer]],
	[[Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer], [Reindeer, Reindeer, Reindeer]],
];

type FlattenRow<T extends Reindeer[][]> = T extends [
	infer Head extends Reindeer[],
	...infer Tail extends Reindeer[][],
]
	? [...Head, ...FlattenRow<Tail>]
	: [];

type FlattenRows<T extends Reindeer[][][]> = T extends [
	infer Head extends Reindeer[][],
	...infer Tail extends Reindeer[][][],
]
	? [[...FlattenRow<Head>], ...FlattenRows<Tail>]
	: [];

/** Validates that a collection of reindeer contains one of each */
type ValidateCollection<T extends Reindeer[]> = Reindeer extends T[number] ? true : false;

type ValidateRows<T extends SudokuBoard, Index extends 1[] = []> = Index["length"] extends 9
	? true
	: ValidateCollection<FlattenRow<T[Index["length"]]>> extends true
		? ValidateRows<T, [...Index, 1]> extends true
			? true
			: false
		: false;

type FlattenColumn<T extends Reindeer[][], ColumnIndex extends number> = T extends [
	infer Head extends Reindeer[],
	...infer Tail extends Reindeer[][],
]
	? [Head[ColumnIndex], ...FlattenColumn<Tail, ColumnIndex>]
	: [];

type ValidateColumns<T extends Reindeer[][], Index extends 1[] = []> = Index["length"] extends 9
	? true
	: ValidateCollection<FlattenColumn<T, Index["length"]>> extends true
		? ValidateColumns<T, [...Index, 1]> extends true
			? true
			: false
		: false;

type FlattenBoxes<T extends SudokuBoard> = [
	[...T[0][0], ...T[1][0], ...T[2][0]],
	[...T[3][0], ...T[4][0], ...T[5][0]],
	[...T[6][0], ...T[7][0], ...T[8][0]],
	[...T[0][1], ...T[1][1], ...T[2][1]],
	[...T[3][1], ...T[4][1], ...T[5][1]],
	[...T[6][1], ...T[7][1], ...T[8][1]],
	[...T[0][2], ...T[1][2], ...T[2][2]],
	[...T[3][2], ...T[4][2], ...T[5][2]],
	[...T[6][2], ...T[7][2], ...T[8][2]],
];

type ValidateBoxes<T extends Reindeer[][], Index extends 1[] = []> = Index["length"] extends 9
	? true
	: ValidateCollection<T[Index["length"]]> extends true
		? ValidateBoxes<T, [...Index, 1]> extends true
			? true
			: false
		: false;

export type Validate<T extends SudokuBoard> = ValidateRows<T> extends true
	? ValidateColumns<FlattenRows<T>> extends true
		? ValidateBoxes<FlattenBoxes<T>> extends true
			? true
			: false
		: false
	: false;
