import { getSizedImageUrl } from "@shopify/theme-images";

export function getShopifyImageUrl(url: string, size: number | string) {
  return getSizedImageUrl(url, size);
}

export function getSrcset(url: string) {
  return `${getShopifyImageUrl(url, "160x")} 160w,
  ${getShopifyImageUrl(url, "175x")} 175w,
  ${getShopifyImageUrl(url, "190x")} 190w,
  ${getShopifyImageUrl(url, "220x")} 220w,
  ${getShopifyImageUrl(url, "240x")} 240w,
  ${getShopifyImageUrl(url, "265x")} 265w,
  ${getShopifyImageUrl(url, "280x")} 280w,
  ${getShopifyImageUrl(url, "300x")} 300w,
  ${getShopifyImageUrl(url, "320x")} 320w,
  ${getShopifyImageUrl(url, "340x")} 340w,
  ${getShopifyImageUrl(url, "360x")} 360w,
  ${getShopifyImageUrl(url, "380x")} 380w,
  ${getShopifyImageUrl(url, "400x")} 400w,
  ${getShopifyImageUrl(url, "420x")} 420w,
  ${getShopifyImageUrl(url, "450x")} 450w,
  ${getShopifyImageUrl(url, "480x")} 480w,
  ${getShopifyImageUrl(url, "500x")} 500w,
  ${getShopifyImageUrl(url, "530x")} 530w,
  ${getShopifyImageUrl(url, "560x")} 560w,
  ${getShopifyImageUrl(url, "600x")} 600w,
  ${getShopifyImageUrl(url, "680x")} 680w,
  ${getShopifyImageUrl(url, "730x")} 730w,
  ${getShopifyImageUrl(url, "760x")} 760w,
  ${getShopifyImageUrl(url, "800x")} 800w,
  ${getShopifyImageUrl(url, "840x")} 840w,
  ${getShopifyImageUrl(url, "930x")} 930w,
  ${getShopifyImageUrl(url, "970x")} 970w,
  ${getShopifyImageUrl(url, "1024x")} 1024w,
  ${getShopifyImageUrl(url, "1280x")} 1280w,
  ${getShopifyImageUrl(url, "1440x")} 1440w,
  ${getShopifyImageUrl(url, "1600x")} 1600w,
  ${getShopifyImageUrl(url, "1920x")} 1920w`;
}
