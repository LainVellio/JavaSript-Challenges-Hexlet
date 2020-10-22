// 3. Инвертированный регистр

import promptly from 'promptly';
import { invertCase } from '../src/invertCase.js';

const launchGame = async () => {
  const value = await promptly.prompt('Input string ');
  const result = invertCase(value);
  return console.log(result);
};
launchGame();
