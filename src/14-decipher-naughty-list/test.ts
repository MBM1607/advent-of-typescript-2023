import type { Equal, Expect } from "type-testing";
import type { DecipherNaughtyList as Original } from "./original.js";
import type { DecipherNaughtyList as Preferred } from "./preferred.js";

type test_0_original = Original<"timmy/jimmy">;
//   ^?
type test_0_preferred = Preferred<"timmy/jimmy">;
//   ^?
type test_0_expected = "jimmy" | "timmy";
type test_0_0 = Expect<Equal<test_0_expected, test_0_original>>;
type test_0_1 = Expect<Equal<test_0_expected, test_0_preferred>>;

type test_1_original = Original<"elliot">;
type test_1_preferred = Preferred<"elliot">;
//   ^?
type test_1_expected = "elliot";
type test_1_0 = Expect<Equal<test_1_expected, test_1_original>>;
type test_1_1 = Expect<Equal<test_1_expected, test_1_preferred>>;

type test_2_original = Original<"melkey/prime/theo/trash">;
//   ^?
type test_2_preferred = Preferred<"melkey/prime/theo/trash">;
//   ^?
type test_2_expected = "melkey" | "prime" | "theo" | "trash";
type test_2_0 = Expect<Equal<test_2_expected, test_2_original>>;
type test_2_1 = Expect<Equal<test_2_expected, test_2_preferred>>;
