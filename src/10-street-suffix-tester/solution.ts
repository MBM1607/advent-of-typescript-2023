export type StreetSuffixTester<
	TString extends string,
	TSuffix extends string,
> = TString extends `${infer _}${TSuffix}` ? true : false;
