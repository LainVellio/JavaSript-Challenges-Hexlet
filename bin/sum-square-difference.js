// 2. Сумма квадратов

import readlineSync from 'readline-sync';
import { sumSquareDefference } from '../src/scripts/programs/sumSquareDifference.js';

const launch = () => {
  const value = readlineSync.question('Input n ');
  const result = sumSquareDefference(value);
  return console.log(result);
};
launch();
