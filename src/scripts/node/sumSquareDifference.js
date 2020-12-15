// 2. Сумма квадратов

export const sumSquareDefference = (n) => {
  let sumSquare = 0;
  let squareSum = 0;
  for (let i = 1; i <= n; i += 1) {
    sumSquare += (i ** 2);
    squareSum += i;
  }
  return squareSum ** 2 - sumSquare;
};

export default { sumSquareDefference };
