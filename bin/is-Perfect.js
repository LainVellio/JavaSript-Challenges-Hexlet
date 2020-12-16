// 12. Идеальные числа

import readlineSync from 'readline-sync';
import { isPerfect } from '../src/scripts/node/isPerfect.js';

const launch = () => {
  const value = readlineSync.question('Input number ');
  const result = isPerfect(Number(value));
  return console.log(result);
};

launch();
