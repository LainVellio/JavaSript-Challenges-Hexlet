// 7. Найди Fizz и Buzz

export const fizzBuzz = (beginNum, endNum) => {
  if (beginNum > endNum) {
    return;
  }
  for (let i = beginNum; i <= endNum; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

export default { fizzBuzz };
