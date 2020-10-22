// 5. Сбалансированы ли скобки?

export const areBracketsBalanced = (str) => {
  if (str.replace(' ', '') === '') {
    return true;
  }
  for (let i = 0; i < str.length / 2; i += 1) {
    if ((str[i] !== '(') || (str[str.length - 1 - i] !== ')')) {
      return false;
    }
  }
  return true;
};

export default { areBracketsBalanced };
