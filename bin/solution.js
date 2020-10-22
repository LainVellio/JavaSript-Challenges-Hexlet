import promptly from 'promptly';
import { solution } from '../src/solution.js';

const launchGame = async () => {
  const num = await promptly.prompt('Input string ');
  const result = solution(num);
  return console.log(result);
};
launchGame();
