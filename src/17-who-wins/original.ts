type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

export type WhoWins<
	Opponent extends RockPaperScissors,
	Player extends RockPaperScissors,
> = Opponent extends Player
	? "draw"
	: Opponent extends "👊🏻"
		? Player extends "🖐🏾"
			? "win"
			: "lose"
		: Opponent extends "🖐🏾"
			? Player extends "✌🏽"
				? "win"
				: "lose"
			: Opponent extends "✌🏽"
				? Player extends "👊🏻"
					? "win"
					: "lose"
				: never;
