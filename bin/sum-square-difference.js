import promptly from 'promptly';
import { sumSquareDefference } from '../src/sumSquareDifference.js';

const launchGame = async () => {
  const value = await promptly.prompt('Input n ');
  const result = sumSquareDefference(value);
  return console.log(result);
};
launchGame();
