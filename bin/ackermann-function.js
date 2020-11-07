// 8. Функция Аккермана

import promptly from 'promptly';
import { ackermannFunction } from '../src/ackermannFunction.js';

const launchGame = async () => {
  const m = await promptly.prompt('Input m ');
  const n = await promptly.prompt('Input n ');
  const result = ackermannFunction(Number(m), Number(n));
  return console.log(result);
};
launchGame();
