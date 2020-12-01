// 2. Сумма квадратов

import readlineSync from 'readline-sync';
import { sumSquareDefference } from '../src/sumSquareDifference.js';

const launch = async () => {
  const value = readlineSync.question('Input n ');
  const result = sumSquareDefference(value);
  return console.log(result);
};
launch();
