// 2. Сумма квадратов

const sumSquareDefference = (n) => {
  if (Number.isNaN(n)) {
    return 'Вы ввели неверное значение';
  }

  if (n - Math.round(n) !== 0) {
    return 'Вы ввели дробное число';
  }

  let sumSquare = 0;
  let squareSum = 0;
  for (let i = 1; i <= n; i += 1) {
    sumSquare += (i ** 2);
    squareSum += i;
  }
  return squareSum ** 2 - sumSquare;
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = parseFloat(formInput.a.value, 10);
  document.getElementById('result').textContent = sumSquareDefference(a);
};
