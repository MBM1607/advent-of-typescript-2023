export type AppendGood<List extends { [key: string]: unknown }> = {
	[L in keyof List as `good_${string & L}`]: List[L];
};
