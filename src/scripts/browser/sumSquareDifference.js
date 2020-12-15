// 2. Сумма квадратов

const sumSquareDefference = (n) => {
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
  const a = parseInt(formInput.a.value, 10);
  console.log(a);
  document.getElementById('result').textContent = sumSquareDefference(a);
};
