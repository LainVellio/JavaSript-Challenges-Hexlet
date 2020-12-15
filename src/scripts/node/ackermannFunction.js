// 8. Функция Аккермана

// eslint-disable-next-line consistent-return
export const ackermannFunction = (m, n) => {
  if (m > 0 && n > 0) {
    return ackermannFunction(m - 1, ackermannFunction(m, n - 1));
  }
  if (m > 0 && n === 0) {
    return ackermannFunction(m - 1, 1);
  }
  if (m === 0) {
    return n + 1;
  }
};

export default { ackermannFunction };
