// 6. Переворот числа

import readlineSync from 'readline-sync';
import { invertNumber } from '../src/scripts/node/invertNumber.js';

const launch = () => {
  const num = readlineSync.question('Input string ');
  const result = invertNumber(num);
  return console.log(result);
};
launch();
