export const $filter = (array: any[], text: string, key: string) => {
  const txt = text.toLowerCase();
  return array.filter((item) => {
    return (key ? item[key] : item).toLowerCase().includes(txt);
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

export const $percentage = (number: number, main: number) => {
  return Math.floor((number / main) * 100);
};

export const $capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const $randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const $total = (array: any[], key: string) => {
  let value = 0;
  return array.reduce(
    (accumulator, item) => (accumulator += key ? item[key] : item),
    value
  );
};

export const $formatNumber = (number: number) => {
  return number.toLocaleString();
};

export function $shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
