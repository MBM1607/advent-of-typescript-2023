export type RemoveNaughtyChildren<List> = {
	[k in keyof List as k extends `naughty_${string}` ? never : k]: List[k];
};
