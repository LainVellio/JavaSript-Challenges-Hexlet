export const solution = (num) => {
  let result = '';
  for (let i = 0; i < num.length; i += 1) {
    result += num[num.length - 1 - i];
  }
  return Number(result);
};

export default { solution };
