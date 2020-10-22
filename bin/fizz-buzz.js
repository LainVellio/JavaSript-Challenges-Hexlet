import promptly from 'promptly';
import { fizzBuzz } from '../src/fizBuzz.js';

const launchGame = async () => {
  const begin = await promptly.prompt('Input begin number ');
  const end = await promptly.prompt('Input end number ');
  fizzBuzz(Number(begin), Number(end));
};

launchGame();
