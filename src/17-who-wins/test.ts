import type { Equal, Expect } from "type-testing";
import type { WhoWins as Original } from "./original.js";
import type { WhoWins as Preferred } from "./preferred.js";

type test_0_original = Original<"👊🏻", "🖐🏾">;
//   ^?
type test_0_preferred = Preferred<"👊🏻", "🖐🏾">;
//   ^?
type test_0_expected = "win";
type test_0_0 = Expect<Equal<test_0_expected, test_0_original>>;
type test_0_1 = Expect<Equal<test_0_expected, test_0_preferred>>;

type test_1_original = Original<"👊🏻", "✌🏽">;
//   ^?
type test_1_preferred = Preferred<"👊🏻", "✌🏽">;
//   ^?
type test_1_expected = "lose";
type test_1_0 = Expect<Equal<test_1_expected, test_1_original>>;
type test_1_1 = Expect<Equal<test_1_expected, test_1_preferred>>;

type test_2_original = Original<"👊🏻", "👊🏻">;
//   ^?
type test_2_preferred = Preferred<"👊🏻", "👊🏻">;
//   ^?
type test_2_expected = "draw";
type test_2_0 = Expect<Equal<test_2_expected, test_2_original>>;
type test_2_1 = Expect<Equal<test_2_expected, test_2_preferred>>;

type test_3_original = Original<"🖐🏾", "👊🏻">;
//   ^?
type test_3_preferred = Preferred<"🖐🏾", "👊🏻">;
//   ^?
type test_3_expected = "lose";
type test_3_0 = Expect<Equal<test_3_expected, test_3_original>>;
type test_3_1 = Expect<Equal<test_3_expected, test_3_preferred>>;

type test_4_original = Original<"🖐🏾", "✌🏽">;
//   ^?
type test_4_preferred = Preferred<"🖐🏾", "✌🏽">;
//   ^?
type test_4_expected = "win";
type test_4_0 = Expect<Equal<test_4_expected, test_4_original>>;
type test_4_1 = Expect<Equal<test_4_expected, test_4_preferred>>;

type test_5_original = Original<"🖐🏾", "🖐🏾">;
//   ^?
type test_5_preferred = Preferred<"🖐🏾", "🖐🏾">;
//   ^?
type test_5_expected = "draw";
type test_5_0 = Expect<Equal<test_5_expected, test_5_original>>;
type test_5_1 = Expect<Equal<test_5_expected, test_5_preferred>>;

type test_6_original = Original<"✌🏽", "👊🏻">;
//   ^?
type test_6_preferred = Preferred<"✌🏽", "👊🏻">;
//   ^?
type test_6_expected = "win";
type test_6_0 = Expect<Equal<test_6_expected, test_6_original>>;
type test_6_1 = Expect<Equal<test_6_expected, test_6_preferred>>;

type test_7_original = Original<"✌🏽", "✌🏽">;
//   ^?
type test_7_preferred = Preferred<"✌🏽", "✌🏽">;
//   ^?
type test_7_expected = "draw";
type test_7_0 = Expect<Equal<test_7_expected, test_7_original>>;
type test_7_1 = Expect<Equal<test_7_expected, test_7_preferred>>;

type test_8_original = Original<"✌🏽", "🖐🏾">;
//   ^?
type test_8_preferred = Preferred<"✌🏽", "🖐🏾">;
//   ^?
type test_8_expected = "lose";
type test_8_0 = Expect<Equal<test_8_expected, test_8_original>>;
type test_8_1 = Expect<Equal<test_8_expected, test_8_preferred>>;
