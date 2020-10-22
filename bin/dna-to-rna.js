// 1. Преобразование DNA в RNA

/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// eslint-disable-next-line import/extensions
import { dnaToRna } from '../src/dnaToRna.js';

const tests = [['ACGTGGTCTTAA', 'UGCACCAGAAUU'], ['CCGTA', 'GGCAU'], ['', ''], ['ACNTG', null]];

function main() {
  // eslint-disable-next-line no-restricted-syntax
  for (const [idx, test] of Object.entries(tests)) {
    const [source, answer] = test;
    const testNum = parseInt(idx, 10) + 1;
    const result = dnaToRna(source);
    const isPassed = result === answer;
    console.log(`Test ${testNum}`);
    // console.log(`Source: ${source}`);
    // console.log(`Answer: ${answer}`);
    // console.log(`Result: ${result}`);
    console.log(`Passsed: ${isPassed}`);
  // console.log('---');
  }
}

main();
