import type { Equal, Expect } from "type-testing";
import type { Count as Original } from "./original.js";
import type { Count as Preferred } from "./preferred.js";

type ToySack = [
	"🎸",
	"🎧",
	"👟",
	"👟",
	"💻",
	"🪀",
	"🧩",
	"🎮",
	"🎨",
	"🕹️",
	"📱",
	"🧩",
	"🧸",
	"🎧",
	"👟",
	"🚲",
	"📚",
	"⌚",
	"🎨",
	"👟",
	"🎸",
	"🧸",
	"👟",
	"🎸",
	"📱",
	"🎧",
	"🎮",
	"🎒",
	"📱",
	"🧩",
	"🧩",
	"🚲",
	"🕹️",
	"🧵",
	"📱",
	"🕹️",
	"🕰️",
	"🧢",
	"🕹️",
	"👟",
	"🧸",
	"📚",
	"🧁",
	"🧩",
	"🎸",
	"🎮",
	"🧁",
	"📚",
	"💻",
	"⌚",
	"🛹",
	"🧁",
	"🧣",
	"🪁",
	"🎸",
	"🧸",
	"🧸",
	"🧸",
	"🧩",
	"🪁",
	"🏎️",
	"🏎️",
	"🧁",
	"📚",
	"🧸",
	"🕶️",
	"💻",
	"⌚",
	"⌚",
	"🕶️",
	"🎧",
	"🎧",
	"🎧",
	"💻",
	"👟",
	"🎸",
	"💻",
	"🪐",
	"📚",
	"🎨",
	"📱",
	"🎧",
	"📱",
	"🎸",
	"🏎️",
	"👟",
	"🚲",
	"📱",
	"🚲",
	"🎸",
];

type test_0_original = Original<ToySack, "👟">;
//   ^?
type test_0_preferred = Preferred<ToySack, "👟">;
//   ^?
type test_0_expected = 8;
type test_0_0 = Expect<Equal<test_0_expected, test_0_original>>;
type test_0_1 = Expect<Equal<test_0_expected, test_0_preferred>>;

type test_1_original = Original<ToySack, "🧦">;
//   ^?
type test_1_preferred = Preferred<ToySack, "🧦">;
//   ^?
type test_1_expected = 0;
type test_1_0 = Expect<Equal<test_1_expected, test_1_original>>;
type test_1_1 = Expect<Equal<test_1_expected, test_1_preferred>>;

type test_2_original = Original<ToySack, "🧩">;
//   ^?
type test_2_preferred = Preferred<ToySack, "🧩">;
//   ^?
type test_2_expected = 6;
type test_2_0 = Expect<Equal<test_2_expected, test_2_original>>;
type test_2_1 = Expect<Equal<test_2_expected, test_2_preferred>>;

type test_3_original = Original<ToySack, "🛹">;
//   ^?
type test_3_preferred = Preferred<ToySack, "🛹">;
//   ^?
type test_3_expected = 1;
type test_3_0 = Expect<Equal<test_3_expected, test_3_original>>;
type test_3_1 = Expect<Equal<test_3_expected, test_3_preferred>>;

type test_4_original = Original<ToySack, "🏎️">;
//   ^?
type test_4_preferred = Preferred<ToySack, "🏎️">;
//   ^?
type test_4_expected = 3;
type test_4_0 = Expect<Equal<test_4_expected, test_4_original>>;
type test_4_1 = Expect<Equal<test_4_expected, test_4_preferred>>;

type test_5_original = Original<ToySack, "📚">;
//   ^?
type test_5_preferred = Preferred<ToySack, "📚">;
//   ^?
type test_5_expected = 5;
type test_5_0 = Expect<Equal<test_5_expected, test_5_original>>;
type test_5_1 = Expect<Equal<test_5_expected, test_5_preferred>>;
