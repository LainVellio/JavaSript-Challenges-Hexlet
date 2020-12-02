// 11. Счастливые числа

import readlineSync from 'readline-sync';
import { isHappyNumber } from '../src/isHappyNumber.js';

const launch = () => {
  const value = readlineSync.question('Input number ');
  const result = isHappyNumber(value);
  return console.log(result);
};

launch();
