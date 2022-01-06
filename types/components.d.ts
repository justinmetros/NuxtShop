interface Price {
  amount: number;
  currencyCode: string;
}

interface PriceRange {
  minVariantPrice: Price;
  maxVariantPrice: Price;
}

interface ProductCard {
  availableForSale?: boolean;
  compareAtPriceRange?: PriceRange;
  description?: string;
  handle: string;
  images: { [key: string]: any };
  priceRange?: PriceRange;
  productType?: { [key: string]: any };
  tags: string[];
  title: string;
  variants: object;
}
