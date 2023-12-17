type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

type WinMatchup = {
	"👊🏻": "🖐🏾";
	"🖐🏾": "✌🏽";
	"✌🏽": "👊🏻";
};

export type WhoWins<
	Opponent extends RockPaperScissors,
	Player extends RockPaperScissors,
> = Opponent extends Player ? "draw" : Player extends WinMatchup[Opponent] ? "win" : "lose";
