// Принимает на вход число и возвращает сумму квадратов цифр этого числа

export const sumOfsquareDigits = (num) => {
  let result = 0;
  for (let i = 0; i < String(num).length; i += 1) {
    result += Number(String(num)[i]) ** 2;
  }
  return result;
};

export default { sumOfsquareDigits };
