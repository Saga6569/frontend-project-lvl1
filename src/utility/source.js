const randomNumber = (down, up) => {
  const min = Math.min(down);
  const max = Math.max(up);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default randomNumber;
