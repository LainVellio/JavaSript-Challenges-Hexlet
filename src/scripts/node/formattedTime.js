// 9. Форматированное время

export const formattedTime = (num) => {
  const numHours = Math.floor((num % 1440) / 60);
  const numMinutes = num % 60;
  let stringHours = '';
  let stringMinutes = '';

  if (numHours < 10) {
    stringHours = `0${numHours}`;
  } else { stringHours = numHours; }
  if (numMinutes < 10) {
    stringMinutes = `0${numMinutes}`;
  } else { stringMinutes = numMinutes; }
  return `${stringHours}:${stringMinutes}`;
};

export default { formattedTime };
