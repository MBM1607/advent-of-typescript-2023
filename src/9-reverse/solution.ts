export type Reverse<TString extends string> = TString extends `${infer TChar}${infer TRest}`
	? `${Reverse<TRest>}${TChar}`
	: TString;
