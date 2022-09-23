<details>
<summary>Multiples of 3 and 5</summary>

```js
function solution(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (i % 15 === 0) {
      sum += i;
      continue;
    }
    if (i % 3 === 0) {
      sum += i;
      continue;
    }
    if (i % 5 === 0) {
      sum += i;
      continue;
    }
  }
  return sum;
}
```

</details>

<details>
<summary>Even Fibonacci numbers</summary>

```js
function solution() {
  let n1 = 0,
    n2 = 1,
    nextTerm = 0,
    answer = 0;
  while (true) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;

    if (nextTerm > 4000000) {
      break;
    } else if (nextTerm % 2 == 0) {
      answer += nextTerm;
      console.log("welcome");
    }
  }

  return answer;
}
```

</details>

<details>
<summary>Largest prime factor</summary>

```js

```

</details>
# project_euler_solution
