// 3. Инвертированный регистр

export const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else result += str[i].toUpperCase();
  }
  return result;
};

export default { invertCase };
