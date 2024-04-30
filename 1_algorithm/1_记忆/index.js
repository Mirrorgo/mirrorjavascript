// 最大公因数
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
