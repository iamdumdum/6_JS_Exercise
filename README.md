# String slice() Method

## Article Section

The `slice()` method extracts parts of a string and returns the extracted parts in a new string.

For example:

```
var str = "Hello world!";
str.slice(0, 5) // Hello
```

The `slice()` method has the **start** and **end** parameters.

```
string.slice(start, end)
```

It's important to know that in the programming world, the first number always starts at 0;

The first character is at position 0, the second is at position 1, and so on.

Example:

Extract only the first character.

```
var str = "Hello world!";
str.slice(0, 1) // H
```

Example:

Extract the characters from position 3 to 8.

```
var str = "Hello world!";
str.slice(3, 8) // lo wo
```

## DIY Section

`name` variable is defined by a string `'Alice'`.

Extract characters from the string `'Alice'`.

- firstChar should be equal to the first character of 'Alice'
- middleChar should be equal to the middle character of 'Alice'
- lastChar should be equal to the last character of 'Alice'


