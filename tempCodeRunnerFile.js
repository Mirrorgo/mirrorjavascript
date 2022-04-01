v1s = version1.split(".");
  v2s = version2.split(".");
  if (v1s.length <= v2s.length) {
    v1s = v1s.concat(new Array(v2s.length - v1s.length).fill(0));
  } else {
    v2s = v2s.concat(new Array(v1s.length - v2s.length).fill(0));
  }
  console.log(v1s, v2s);
  let i = 0;
  res = 0;
  while (i < v1s.length) {
    if (+v1s[i] < +v2s[i]) {
      res = -1;
      break;
    } else if (+v1s[i] > +v2s[i]) {
      res = 1;
      break;
    }
    i++;
  }
  return res;