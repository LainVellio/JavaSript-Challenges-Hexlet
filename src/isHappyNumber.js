// 11. Счастливые числа

import { sumOfsquareDigits } from './utils.js';

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
