// 10. Счастливый билет

export const isHappyTicket = (num) => {
  let firstHalf = Number(num[0]);
  let secondHalf = Number(num[num.length / 2]);

  for (let i = 1; i < num.length / 2; i += 1) {
    firstHalf += Number(num[i]);
    secondHalf += Number(num[i + num.length / 2]);
  }

  if (firstHalf === secondHalf) {
    return true;
  }
  return false;
};

export default { isHappyTicket };
