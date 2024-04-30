// https://leetcode.com/studyplan/leetcode-75/
const gcd1 = (a: number, b: number): number => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

function gcdOfStrings(str1: string, str2: string): string {
  const g = gcd1(str1.length, str2.length);
  if (str1 + str2 === str2 + str1) {
    return str1.slice(0, g);
  }
  return "";
}

gcdOfStrings("ABACABAC", "ABAC");
gcdOfStrings("ABABABAC", "AB");
