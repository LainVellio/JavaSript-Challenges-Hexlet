// 6. Переворот числа

import promptly from 'promptly';
import { invertNumber } from '../src/invertNumber.js';

const launchGame = async () => {
  const num = await promptly.prompt('Input string ');
  const result = invertNumber(num);
  return console.log(result);
};
launchGame();
