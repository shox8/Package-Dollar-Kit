<code>$filter(array, searchText, key)</code>

```js
const items = ["laptop", "to year", "pen"];

console.log($filter(items, "to"));
// [ 'laptop', 'to year' ]
```

```js
const items = [
  { name: "laptop", key: "property" },
  { name: "to year", key: "property" },
  { name: "pen", key: "property" },
];

console.log($filter(items, "to", "name"));
// [{ name: "laptop" }, { name: "to year" }]
```

---

<code>$abc()</code>

```js
console.log($abc());
// [a, .., z]
```

---

<code>$number(from, to)</code>

```js
console.log($number(-3, 5));
// [-3, -2, -1, 0, 1, 2, 3, 4, 5]
```

---

<code>$getId(length)</code>

```js
console.log($getId(6));
// RlqQta
```

---

<code>$isOdd(number)</code>

```js
console.log($isOdd(3));
// true
```

---

<code>$percentage(number, mainNumber)</code>

```js
console.log($percentage(2, 4));
// 50
```

---

<code>$capitalize(text)</code>

```js
console.log($capitalize("hello world"));
// Hello world
```
