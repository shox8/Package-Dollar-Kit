export const $filter = (array: any[], text: string, key: string) => {
  const txt = text.toLowerCase();
  return array.filter((item) => {
    if (key) {
      return item[key].toLowerCase().includes(txt);
    } else {
      return item.toLowerCase().includes(txt);
    }
  });
};

export const $abc = () => {
  return [...Array(26).keys()].map((_, i) => String.fromCharCode(i + 97));
};

export const $number = (from: number, to: number) => {
  return [...Array(to - from + 1).keys()].map((number) => {
    return number + from;
  });
};

export const $isOdd = (number: number) => {
  return number % 2 !== 0;
};
