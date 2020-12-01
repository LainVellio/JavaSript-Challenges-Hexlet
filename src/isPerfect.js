// 11. Идеальные числа

export const isPerfect = (num) => {
  let result = 1;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      result += i;
    }
  }
  if (result === num) {
    return true;
  }
  return false;
};

export default { isPerfect };
