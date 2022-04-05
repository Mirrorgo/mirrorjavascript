function solution(s = "babad") {
  if (s.length <= 1) return s;
  let i = 0;
  let pleft, pright;
  let max = s[0];
  while (i < s.length) {
    if (s[i] === s[i + 1]) {
      pleft = i;
      pright = i + 1;
      while (s[pleft] === s[pright]) {
        pleft--;
        pright++;
      }
      if (pright - pleft - 1 > max.length) {
        max = s.substring(pleft + 1, pright);
      }
    }

    pleft = pright = i;
    while (s[pleft] === s[pright]) {
      pleft--;
      pright++;
    }
    if (pright - pleft - 1 > max.length) {
      max = s.substring(pleft + 1, pright);
    }

    i++;
  }

  return max;
}