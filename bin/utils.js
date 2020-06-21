export const randomNumber = (down, up) => {
  down = Math.ceil(down);
  up = Math.floor(up);
  return Math.floor(Math.random() * (up - down + 1)) + down;
};

export const numberDividers = (value) => {
  const result = [];
  for (let i = 1; i <= value; i += 1) {
    if (value % i === 0) {
      result.push(i);
    }
  }
  return result;
};
