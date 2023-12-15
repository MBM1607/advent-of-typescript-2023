import type { Equal, Expect } from "type-testing";
import type { BoxToys as Original } from "./original.js";
import type { BoxToys as Preferred } from "./preferred.js";


type test_doll_original = Original<"doll", 1>;
//   ^?
type test_doll_preferred = Preferred<"doll", 1>;
//   ^?
type test_doll_expected = ["doll"];
type test_doll_0 = Expect<Equal<test_doll_expected, test_doll_original>>;
type test_doll_1 = Expect<Equal<test_doll_expected, test_doll_preferred>>;

type test_nutcracker_original = Original<"nutcracker", 3 | 4>;
//   ^?
type test_nutcracker_preferred = Preferred<"nutcracker", 3 | 4>;
//   ^?
type test_nutcracker_expected =
	| ["nutcracker", "nutcracker", "nutcracker"]
	| ["nutcracker", "nutcracker", "nutcracker", "nutcracker"];
type test_nutcracker_0 = Expect<Equal<test_nutcracker_expected, test_nutcracker_original>>;
type test_nutcracker_1 = Expect<Equal<test_nutcracker_expected, test_nutcracker_preferred>>;
