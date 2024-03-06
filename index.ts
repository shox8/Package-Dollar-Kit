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
