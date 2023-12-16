# Box Toys

The BoxToys type takes two arguments:

1. the name of a toy
2. the number of of boxes we need for this toy

And the type will return a tuple containing that toy that number of times.

But there's one little thing.. We need to support the number of boxes being a union. That means our
resulting tuple can also be a union. Check out test_nutcracker in the tests to see how that works.
