// Разница углов

import promptly from 'promptly';
import { diff } from '../src/diff.js';

const launchGame = async () => {
  const firstCorner = await promptly.prompt('Input first corner ');
  const secondCorner = await promptly.prompt('Input second corner');
  const result = diff(firstCorner, secondCorner);
  return console.log(result);
};
launchGame();
