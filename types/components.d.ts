interface ShopifyImage {
  altText: string;
  id: string;
  transformedSrc: string;
}

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

interface VariantObject {
  availableForSale: boolean;
  id: string;
  quantityAvailable: number;
  sku: string;
  title: string;
}
interface Variant {
  node: VariantObject;
}

interface Option {
  id: string;
  name: string;
  values: string[];
}

interface Amount {
  amount: string;
  currencyCode: string;
}
