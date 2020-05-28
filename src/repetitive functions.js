

export const randomnumber = (down, up) => {
  down = Math.ceil(down);
  up = Math.floor(up);
  return Math.floor(Math.random() * (up - down + 1)) + down;
};

export const deliteli = (x) => {    // функция принимает число и возвращает массив делителей числа
  const xdel = [];
  for (let i = 1; i <= x; i += 1) {
    if (x % i === 0) {
      xdel.push(i);
    }
  }
  return xdel;
};


