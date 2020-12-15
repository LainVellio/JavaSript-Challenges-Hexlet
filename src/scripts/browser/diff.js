// 4. Разница углов

export const diff = (firstCorner, secondCorner) => {
  if (firstCorner < 0 || firstCorner > 360 || secondCorner < 0 || secondCorner > 360) {
    return 'Wrong value';
  }
  const diffCorner = secondCorner - firstCorner;
  if (diffCorner <= 180) {
    return diffCorner;
  } return 360 - diffCorner;
};

export default { diff };
