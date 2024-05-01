# Protect the List

[a conversation overhead two elves, Wunorse and Alabaster, at Santa's workshop on a monday
morning after all the elves were forced to work all weekend]

[Wurnose] The world will not know peace until every consultant involved in pushing SOC2 is dead
and in the ground.

[Alabaster] Rough weekend?

[Wurnose] Yes. And now I've just gotten word from the higher-ups that I have to make our entire
codebase's types readonly. DEEP readonly.

[Alabaster] Ouch. But at least it'll be better because something something functional programming
superiority something something..

[Wurnose] That's not the point. The point is that there IS NO POINT. They're saying this is a
requirement of SOC2. This doesn't have the slightest thing to do with SOC2. It's literally
security theater at this point. And we're the puppets.

[Alabaster] Let's try to use this as an excuse to port the codebase to Rust where everything's
immutable by default.

[Wurnose] I already tried that. They said Rust is too new and untested. They're considering Go,
though.

[Alabaster] Lol dafuq? Rust is older than Go by like 3 years. Ok. Sorry I asked. Let's implement
DeepReadonly then!

## The API

`SantaListProtector` takes in an arbitrary type as an input and modifies that type to be
readonly. The trick here is that it must also work for any nested objects.

prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of
[MiTS](https://www.youtube.com/@MichiganTypeScript)
