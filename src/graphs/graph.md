# Ways to represent a graphs

## Graphs example

```txt
 2 - 0
/ \
1-3
```

### Edge list

```js
const graph = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3]
];
```

### Adjacent List

```js
const graph = [
    [2],
    [2, 3],
    [0, 1, 3],
    [1, 2]
];
```

### Adjacent as hash table

```js
const graph = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2]
};
```

### Adjacent matrix

```js
const graph = [
    [0,0,1,0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
];
```


### Adjacent matrix as hash table

```js
const graph = {
    0: [0,0,1,0]
    1: [0, 0, 1, 1]
    2: [1, 1, 0, 1]
    3: [0, 1, 1, 0]
};
```