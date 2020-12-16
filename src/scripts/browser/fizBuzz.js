// 7. Найди Fizz и Buzz

const fizzBuzz = (beginNum, endNum) => {
  if (Number.isNaN(beginNum) || Number.isNaN(endNum)) {
    return 'Вы ввели неверное значение';
  }

  if (beginNum - Math.round(beginNum) !== 0 || endNum - Math.round(endNum) !== 0) {
    return 'Вы ввели дробное число';
  }

  if (beginNum < 0 || endNum < 0) {
    return 'Вы ввели отрицательное число';
  }

  if (beginNum > endNum) {
    return 'Начальное значение диапазона больше конечного';
  }

  const arr = [];
  let a = 0;
  for (let i = beginNum; i <= endNum; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr[a] = ' FizzBuzz';
    } else if (i % 3 === 0) {
      arr[a] = ' Fizz';
    } else if (i % 5 === 0) {
      arr[a] = ' Buzz';
    } else {
      arr[a] = ` ${i}`;
    }
    a += 1;
  }
  // eslint-disable-next-line consistent-return
  return arr;
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = parseFloat(formInput.a.value);
  const b = parseFloat(formInput.b.value);
  document.getElementById('result').textContent = fizzBuzz(a, b);
};
