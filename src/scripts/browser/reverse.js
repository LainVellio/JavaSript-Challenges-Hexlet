// 14. Переворот строки

export const reverse = (str) => {
  if (str.length === 1) {
    return str;
  }
  return str.slice(str.length - 1, str.length) + reverse(str.slice(0, str.length - 1));
};

export default { reverse };
