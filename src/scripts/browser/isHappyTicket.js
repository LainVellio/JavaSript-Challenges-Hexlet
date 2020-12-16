// 10. Счастливый билет

const isHappyTicket = (num) => {
  if (Number.isNaN(Number(num))) {
    return 'Вы ввели неверное значение';
  }

  if (Number(num) - Math.round(Number(num)) !== 0) {
    return 'Вы ввели дробное число';
  }

  if (Number(num) < 0) {
    return 'Вы ввели отрицательное число';
  }

  let firstHalf = Number(num[0]);
  let secondHalf = Number(num[num.length / 2]);

  for (let i = 1; i < num.length / 2; i += 1) {
    firstHalf += Number(num[i]);
    secondHalf += Number(num[i + num.length / 2]);
  }

  if (firstHalf === secondHalf) {
    return 'Билет счастливый';
  }
  return 'Билет обычный';
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = formInput.a.value;
  document.getElementById('result').textContent = isHappyTicket(a);
};
