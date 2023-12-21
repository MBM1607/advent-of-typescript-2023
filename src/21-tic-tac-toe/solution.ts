type TicTacToeChip = "❌" | "⭕";
type TicTacToeEndState = "❌ Won" | "⭕ Won" | "Draw";
type TicTacToeState = TicTacToeChip | TicTacToeEndState;
type TicTacToeEmptyCell = "  ";
type TicTacToeCell = TicTacToeChip | TicTacToeEmptyCell;
type TicTacToeYPositions = "top" | "middle" | "bottom";
type YPositionToIndex = {
	top: 0;
	middle: 1;
	bottom: 2;
};
type TicTacToeXPositions = "left" | "center" | "right";
type XPositionToIndex = {
	left: 0;
	center: 1;
	right: 2;
};
type TicTacToePositions = `${TicTacToeYPositions}-${TicTacToeXPositions}`;

type TicTacToeBoard = [
	[TicTacToeCell, TicTacToeCell, TicTacToeCell],
	[TicTacToeCell, TicTacToeCell, TicTacToeCell],
	[TicTacToeCell, TicTacToeCell, TicTacToeCell],
];
type TicTacToeGame = {
	board: TicTacToeBoard;
	state: TicTacToeState;
};

type MakeMoveInRow<
	Row extends [TicTacToeCell, TicTacToeCell, TicTacToeCell],
	XIndex extends number,
	Chip extends TicTacToeChip,
> = XIndex extends 0
	? [Chip, Row[1], Row[2]]
	: XIndex extends 1
		? [Row[0], Chip, Row[2]]
		: [Row[0], Row[1], Chip];

type MakeMove<
	Board extends TicTacToeBoard,
	Chip extends TicTacToeChip,
	YIndex extends number,
	XIndex extends number,
> = YIndex extends 0
	? [MakeMoveInRow<Board[0], XIndex, Chip>, Board[1], Board[2]]
	: YIndex extends 1
		? [Board[0], MakeMoveInRow<Board[1], XIndex, Chip>, Board[2]]
		: [Board[0], Board[1], MakeMoveInRow<Board[2], XIndex, Chip>];

type IsDraw<Board extends TicTacToeBoard> = TicTacToeEmptyCell extends Board[number][number]
	? false
	: true;

type NextChip<Chip extends TicTacToeChip> = Chip extends "❌" ? "⭕" : "❌";

type IsWinInRow<
	Row extends [TicTacToeCell, TicTacToeCell, TicTacToeCell],
	Chip extends TicTacToeChip,
> = Row extends [Chip, Chip, Chip] ? true : false;

type IsWinInColumn<
	Board extends TicTacToeBoard,
	Chip extends TicTacToeChip,
	ColumnIndex extends number,
> = IsWinInRow<[Board[0][ColumnIndex], Board[1][ColumnIndex], Board[2][ColumnIndex]], Chip>;

type IsWinInDiagonal<
	Board extends TicTacToeBoard,
	Chip extends TicTacToeChip,
	Direction extends "left" | "right",
> = Direction extends "left"
	? IsWinInRow<[Board[0][0], Board[1][1], Board[2][2]], Chip>
	: IsWinInRow<[Board[0][2], Board[1][1], Board[2][0]], Chip>;

type IsWin<Board extends TicTacToeBoard, Chip extends TicTacToeChip> = IsWinInRow<
	Board[0],
	Chip
> extends true
	? true
	: IsWinInRow<Board[1], Chip> extends true
		? true
		: IsWinInRow<Board[2], Chip> extends true
			? true
			: IsWinInColumn<Board, Chip, 0> extends true
				? true
				: IsWinInColumn<Board, Chip, 1> extends true
					? true
					: IsWinInColumn<Board, Chip, 2> extends true
						? true
						: IsWinInDiagonal<Board, Chip, "left"> extends true
							? true
							: IsWinInDiagonal<Board, Chip, "right"> extends true
								? true
								: false;

export type TicTacToe<
	Game extends TicTacToeGame,
	Position extends TicTacToePositions,
> = Position extends `${infer Y extends TicTacToeYPositions}-${infer X extends
	TicTacToeXPositions}`
	? Game["board"][YPositionToIndex[Y]][XPositionToIndex[X]] extends TicTacToeEmptyCell
		? Game["state"] extends TicTacToeChip
			? MakeMove<
					Game["board"],
					Game["state"],
					YPositionToIndex[Y],
					XPositionToIndex[X]
				> extends infer NewBoard extends TicTacToeBoard
				? {
						board: NewBoard;
						state: IsDraw<NewBoard> extends true
							? "Draw"
							: IsWin<NewBoard, Game["state"]> extends true
								? `${Game["state"]} Won`
								: NextChip<Game["state"]>;
					}
				: never
			: never
		: Game
	: never;
