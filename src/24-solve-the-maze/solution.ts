type Alley = "  ";
type MazeItem = "🎄" | "🎅" | Alley;
type DELICIOUS_COOKIES = "🍪";
type MazeMatrix = MazeItem[][];
type Directions = "up" | "down" | "left" | "right";

type TupleOfLength<L extends number, T = 1, U extends T[] = []> = U["length"] extends L
	? U
	: TupleOfLength<L, T, [...U, T]>;
type Increment<T extends number> = [...TupleOfLength<T>, 1]["length"];
type Decrement<A extends number> = TupleOfLength<A> extends [infer _, ...infer Rest]
	? Rest["length"]
	: never;

type Cookified<M extends MazeMatrix> = M extends [
	infer Row extends MazeItem[],
	...infer Rest extends MazeMatrix,
]
	? [TupleOfLength<Row["length"], DELICIOUS_COOKIES>, ...Cookified<Rest>]
	: [];

type FindSanta<
	M extends MazeMatrix,
	XIndex extends 1[] = [],
	YIndex extends 1[] = [],
> = M extends [infer Row extends MazeItem[], ...infer Rest extends MazeMatrix]
	? Row extends [infer First extends MazeItem, ...infer RestRow extends MazeItem[]]
		? First extends "🎅"
			? [YIndex["length"], XIndex["length"]]
			: FindSanta<[RestRow, ...Rest], [...XIndex, 1], YIndex>
		: FindSanta<Rest, [], [...YIndex, 1]>
	: never;

type AddSantaInRow<
	Row extends MazeItem[],
	X extends number,
	Index extends 1[] = [],
> = Row extends [infer First extends MazeItem, ...infer Rest extends MazeItem[]]
	? Index["length"] extends X
		? ["🎅", ...AddSantaInRow<Rest, X, [...Index, 1]>]
		: [First, ...AddSantaInRow<Rest, X, [...Index, 1]>]
	: [];

type AddSanta<
	M extends MazeMatrix,
	Y extends number,
	X extends number,
	Index extends 1[] = [],
> = M extends [infer Row extends MazeItem[], ...infer Rest extends MazeMatrix]
	? Index["length"] extends Y
		? [AddSantaInRow<Row, X>, ...AddSanta<Rest, Y, X, [...Index, 1]>]
		: [Row, ...AddSanta<Rest, Y, X, [...Index, 1]>]
	: [];

type RemoveSantaFromRow<Row extends MazeItem[]> = Row extends [
	infer First extends MazeItem,
	...infer Rest extends MazeItem[],
]
	? First extends "🎅"
		? [Alley, ...RemoveSantaFromRow<Rest>]
		: [First, ...RemoveSantaFromRow<Rest>]
	: [];

type RemoveSanta<M extends MazeMatrix> = M extends [
	infer Row extends MazeItem[],
	...infer Rest extends MazeMatrix,
]
	? [RemoveSantaFromRow<Row>, ...RemoveSanta<Rest>]
	: [];

type MoveSanta<M extends MazeMatrix, Y extends number, X extends number> = AddSanta<
	RemoveSanta<M>,
	Y,
	X
>;

type MoveUp<M extends MazeMatrix, Y extends number, X extends number> = Y extends 0
	? Cookified<M>
	: Decrement<Y> extends infer DecrementedY extends number
		? M[DecrementedY][X] extends "🎄"
			? M
			: MoveSanta<M, DecrementedY, X>
		: never;

type MoveDown<M extends MazeMatrix, Y extends number, X extends number> = Y extends Decrement<
	M["length"]
>
	? Cookified<M>
	: Increment<Y> extends infer IncrementedY extends number
		? M[IncrementedY][X] extends "🎄"
			? M
			: MoveSanta<M, IncrementedY, X>
		: never;

type MoveLeft<M extends MazeMatrix, Y extends number, X extends number> = X extends 0
	? Cookified<M>
	: Decrement<X> extends infer DecrementedX extends number
		? M[Y][DecrementedX] extends "🎄"
			? M
			: MoveSanta<M, Y, DecrementedX>
		: never;

type MoveRight<M extends MazeMatrix, Y extends number, X extends number> = X extends Decrement<
	M[0]["length"]
>
	? Cookified<M>
	: Increment<X> extends infer IncrementedX extends number
		? M[Y][IncrementedX] extends "🎄"
			? M
			: MoveSanta<M, Y, IncrementedX>
		: never;

export type Move<M extends MazeMatrix, D extends Directions> = FindSanta<M> extends [
	infer Y extends number,
	infer X extends number,
]
	? D extends "up"
		? MoveUp<M, Y, X>
		: D extends "down"
			? MoveDown<M, Y, X>
			: D extends "left"
				? MoveLeft<M, Y, X>
				: D extends "right"
					? MoveRight<M, Y, X>
					: never
	: never;
