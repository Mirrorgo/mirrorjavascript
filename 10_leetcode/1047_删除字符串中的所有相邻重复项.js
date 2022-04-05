function solution(S = "") {
  if (S.length < 2) return S;
  let stack = [S[0]];
  let i = 1;
  while (i < S.length) {
    if (S[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
    i++;
  }
  return stack.join("");
}
