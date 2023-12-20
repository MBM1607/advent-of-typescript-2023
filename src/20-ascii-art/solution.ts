type Letters = {
	A: ["█▀█ ", "█▀█ ", "▀ ▀ "];
	B: ["█▀▄ ", "█▀▄ ", "▀▀  "];
	C: ["█▀▀ ", "█ ░░", "▀▀▀ "];
	E: ["█▀▀ ", "█▀▀ ", "▀▀▀ "];
	H: ["█ █ ", "█▀█ ", "▀ ▀ "];
	I: ["█ ", "█ ", "▀ "];
	M: ["█▄░▄█ ", "█ ▀ █ ", "▀ ░░▀ "];
	N: ["█▄░█ ", "█ ▀█ ", "▀ ░▀ "];
	P: ["█▀█ ", "█▀▀ ", "▀ ░░"];
	R: ["█▀█ ", "██▀ ", "▀ ▀ "];
	S: ["█▀▀ ", "▀▀█ ", "▀▀▀ "];
	T: ["▀█▀ ", "░█ ░", "░▀ ░"];
	Y: ["█ █ ", "▀█▀ ", "░▀ ░"];
	W: ["█ ░░█ ", "█▄▀▄█ ", "▀ ░ ▀ "];
	" ": ["░", "░", "░"];
	":": ["#", "░", "#"];
	"*": ["░", "#", "░"];
};
type Concat<A extends string, B extends string> = `${A}${B}`;
export type ToAsciiArt<
	S extends string,
	CurrentLine extends [string, string, string] = ["", "", ""],
	AsciiArt extends string[] = [],
> = S extends `${infer F}${infer Rest}`
	? Uppercase<F> extends infer UppercaseF extends keyof Letters
		? ToAsciiArt<
				Rest,
				[
					Concat<CurrentLine[0], Letters[UppercaseF][0]>,
					Concat<CurrentLine[1], Letters[UppercaseF][1]>,
					Concat<CurrentLine[2], Letters[UppercaseF][2]>,
				],
				AsciiArt
			>
		: F extends "\n"
			? ToAsciiArt<Rest, ["", "", ""], [...AsciiArt, ...CurrentLine]>
			: never
	: [...AsciiArt, ...CurrentLine];
