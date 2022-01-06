export const stripZeros = (price: number): number => {
  if (price % 1 === 0) {
    return Math.trunc(price);
  }
  return price;
};

export const formatWithCurrency = (
  currencySymbol: string,
  price: number
): string => {
  return `${currencySymbol}${price}`;
};

export const formatLocalePrice = (
  price: number,
  locale: string,
  currency: string
) => {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    price
  );
};
