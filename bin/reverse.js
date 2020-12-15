// 13. Переворот строки

import readlineSync from 'readline-sync';
import { reverse } from '../src/scripts/programs/reverse.js';

const launch = () => {
  const value = readlineSync.question('Input string ');
  const result = reverse(value);
  return console.log(result);
};
launch();
