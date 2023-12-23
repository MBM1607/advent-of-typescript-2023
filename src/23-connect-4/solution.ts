type Chips = "🔴" | "🟡";
type EmptyCell = "  ";
type Cell = Chips | EmptyCell;

type Row = [Cell, Cell, Cell, Cell, Cell, Cell, Cell];
type Board = [Row, Row, Row, Row, Row, Row];
type InputState = {
	board: Board;
	state: Chips;
};

type IsWinInFour<R extends [Cell, Cell, Cell, Cell], State extends Chips> = R[number] extends State
	? true
	: false;

type IsDraw<B extends Board> = EmptyCell extends B[number][number] ? false : true;

type IsWinInRow<R extends Cell[], State extends Chips> = R extends [
	infer FirstCell extends Cell,
	infer SecondCell extends Cell,
	infer ThirdCell extends Cell,
	infer FourthCell extends Cell,
	...infer Rest extends Cell[],
]
	? IsWinInFour<[FirstCell, SecondCell, ThirdCell, FourthCell], State> extends true
		? true
		: IsWinInRow<[SecondCell, ThirdCell, FourthCell, ...Rest], State>
	: false;

type IsWinInRows<B extends Cell[][], State extends Chips> = B extends [
	infer FirstRow extends Cell[],
	...infer Rest extends Cell[][],
]
	? IsWinInRow<FirstRow, State> extends true
		? true
		: IsWinInRows<Rest, State>
	: false;

type Transpose<B extends Board> = [
	[B[0][0], B[1][0], B[2][0], B[3][0], B[4][0], B[5][0]],
	[B[0][1], B[1][1], B[2][1], B[3][1], B[4][1], B[5][1]],
	[B[0][2], B[1][2], B[2][2], B[3][2], B[4][2], B[5][2]],
	[B[0][3], B[1][3], B[2][3], B[3][3], B[4][3], B[5][3]],
	[B[0][4], B[1][4], B[2][4], B[3][4], B[4][4], B[5][4]],
	[B[0][5], B[1][5], B[2][5], B[3][5], B[4][5], B[5][5]],
	[B[0][6], B[1][6], B[2][6], B[3][6], B[4][6], B[5][6]],
];

type IsWinInColumns<B extends Board, State extends Chips> = IsWinInRows<Transpose<B>, State>;

type FlattenDiagonals<B extends Board> = [
	[B[0][3], B[1][2], B[2][1], B[3][0]],
	[B[0][4], B[1][3], B[2][2], B[3][1], B[4][0]],
	[B[0][5], B[1][4], B[2][3], B[3][2], B[4][1], B[5][0]],
	[B[0][6], B[1][5], B[2][4], B[3][3], B[4][2], B[5][1]],
	[B[1][6], B[2][5], B[3][4], B[4][3], B[5][2]],
	[B[2][6], B[3][5], B[4][4], B[5][3]],
];

type IsWinInDiagonals<B extends Board, State extends Chips> = IsWinInRows<
	FlattenDiagonals<B>,
	State
>;

type IsWin<B extends Board, State extends Chips> = IsWinInRows<B, State> extends true
	? true
	: IsWinInColumns<B, State> extends true
		? true
		: IsWinInDiagonals<B, State> extends true
			? true
			: false;

type MakeMoveInRow<R extends Row, Column extends number, State extends Chips> = Column extends 0
	? [State, R[1], R[2], R[3], R[4], R[5], R[6]]
	: Column extends 1
		? [R[0], State, R[2], R[3], R[4], R[5], R[6]]
		: Column extends 2
			? [R[0], R[1], State, R[3], R[4], R[5], R[6]]
			: Column extends 3
				? [R[0], R[1], R[2], State, R[4], R[5], R[6]]
				: Column extends 4
					? [R[0], R[1], R[2], R[3], State, R[5], R[6]]
					: Column extends 5
						? [R[0], R[1], R[2], R[3], R[4], State, R[6]]
						: [R[0], R[1], R[2], R[3], R[4], R[5], State];

type MakeMove<
	B extends Board,
	State extends Chips,
	Column extends number,
	PendingBoard extends Row[] = B,
	TraversedBoard extends Row[] = [],
> = PendingBoard extends [...infer Rest extends Row[], infer LastRow extends Row]
	? LastRow[Column] extends EmptyCell
		? [...Rest, MakeMoveInRow<LastRow, Column, State>, ...TraversedBoard]
		: MakeMove<B, State, Column, Rest, [LastRow, ...TraversedBoard]>
	: never;

export type Connect4<GameState extends InputState, Column extends number> = IsDraw<
	GameState["board"]
> extends true
	? { board: GameState["board"]; state: "Draw" }
	: EmptyCell extends GameState["board"][number][Column]
		? MakeMove<GameState["board"], GameState["state"], Column> extends infer NewBoard extends Board
			? {
					board: NewBoard;
					state: IsDraw<NewBoard> extends true
						? "Draw"
						: IsWin<NewBoard, GameState["state"]> extends true
							? `${GameState["state"]} Won`
							: GameState["state"] extends "🔴"
								? "🟡"
								: "🔴";
				}
			: 1
		: 2;
