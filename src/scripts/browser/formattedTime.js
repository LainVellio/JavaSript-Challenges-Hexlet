// 9. Форматированное время

const formattedTime = (num) => {
  if (Number.isNaN(num)) {
    return 'Вы ввели неверное значение';
  }

  if (num - Math.round(num) !== 0) {
    return 'Вы ввели дробное число';
  }

  if (num < 0) {
    return 'Вы ввели отрицательное число';
  }

  const numHours = Math.floor((num % 1440) / 60);
  const numMinutes = num % 60;
  let stringHours = '';
  let stringMinutes = '';

  if (numHours < 10) {
    stringHours = `0${numHours}`;
  } else {
    stringHours = numHours;
  }
  if (numMinutes < 10) {
    stringMinutes = `0${numMinutes}`;
  } else {
    stringMinutes = numMinutes;
  }
  return `${stringHours}:${stringMinutes}`;
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = parseFloat(formInput.a.value);
  document.getElementById('result').textContent = formattedTime(a);
};
