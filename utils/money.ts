export const stripZeros = (price: number): number => {
  if (price % 1 === 0) {
    return Math.trunc(price);
  }
  return price;
};
