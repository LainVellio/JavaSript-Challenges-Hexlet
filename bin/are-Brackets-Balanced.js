// 5. Сбалансированы ли скобки?

import promptly from 'promptly';
import { areBracketsBalanced } from '../src/areBracketsBalanced.js';

const launchGame = async () => {
  const string = await promptly.prompt('Input string ', { default: ' ' });
  const result = areBracketsBalanced(string);
  return console.log(result);
};
launchGame();
