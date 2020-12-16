// 3. Инвертированный регистр

import readlineSync from 'readline-sync';
import { invertCase } from '../src/scripts/node/invertCase.js';

const launch = () => {
  const value = readlineSync.question('Input string ');
  const result = invertCase(value);
  return console.log(result);
};
launch();
