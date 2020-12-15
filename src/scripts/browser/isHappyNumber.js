// 11. Счастливые числа

const sumOfsquareDigits = (num) => {
  let result = 0;
  for (let i = 0; i < String(num).length; i += 1) {
    result += Number(String(num)[i]) ** 2;
  }
  return result;
};

export const isHappyNumber = (num) => {
  let result = num;
  for (let i = 0; i !== 9; i += 1) {
    if (result === 1) {
      return true;
    }
    result = sumOfsquareDigits(result);
  }
  return false;
};

export default { isHappyNumber };
