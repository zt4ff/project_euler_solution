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

console.log(solution(100));
