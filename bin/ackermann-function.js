// 8. Функция Аккермана

import readlineSync from 'readline-sync';
import { ackermannFunction } from '../src/scripts/node/ackermannFunction.js';

const launch = () => {
  const m = readlineSync.question('Input m ');
  const n = readlineSync.question('Input n ');
  const result = ackermannFunction(Number(m), Number(n));
  return console.log(result);
};
launch();
