# Filtering The Children (part 1)

As you may be aware, kids that are naughty get a lump of coal and kids that are nice get a toy.
Santa's sorta controlling, honestly, and he likes being able to manipulate the data by filtering
out the naughty kids on some days, and filtering out the nice kids on other days.

So, Santa walks over to the (open floorplan) office where the engineering team sits. Although
he's just addressing the engineers, the rest of the office is distracted because they can clearly
hear him since there are no walls.

[Santa] You know, this job is a great opportunity for you elves, even without high pay! You're
gaining valuable experience, which is more important than money!

[elves] grumble grumble ok. cool. do you need something?

[Santa] YES! So glad you asked! I'd like an idea of how many kids have been nice. I want to be
able to filter out all the naughty kids sometimes, and filter out the nice kids other times.

[elf manager] ok. that's fine. we'll add a ticket for the next sprint..

[Santa] Oh! No time for story points and JIRA tickets, I'm afraid! I need this done pronto!

[elf manager] we use Linear, but ok sure. we'll drop everything we're doing.

## Can you help?

You're an engineer too. Can you help the elf team?

The first parameter of FilterChildrenBy is just a union of all the children's naughty/nice
status. The second parameter is the thing we want to exclude from the final resulting type.

Take a look at the tests. There, you'll see some examples.

Note: the engineering team manager triple checked with Santa because this seems like a strange
way to keep track of naughty and nice children, but Santa ensured the manager that this is
exactly what he wants.

prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of
[MiTS](https://www.youtube.com/@MichiganTypeScript)
