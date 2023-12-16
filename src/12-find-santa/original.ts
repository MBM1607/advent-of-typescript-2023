type StringToNumber<String extends string> = String extends `${infer Number extends number}`
	? Number
	: never;

export type FindSanta<List extends Array<unknown>> = {
	[Index in keyof List]: List[Index] extends "🎅🏼" ? StringToNumber<`${Index}`> : never;
}[number];
