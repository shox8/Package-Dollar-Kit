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

export const $getId = (length: number) => {
  const symbols =
    $abc().join("") + $abc().join("").toUpperCase() + $number(0, 9).join("");
  const _length = length ? length : 10;
  let id = "";
  for (let i = 0; i < _length; i++) {
    const random = symbols[Math.floor(Math.random() * symbols.length)];
    id += random;
  }
  return id;
};
