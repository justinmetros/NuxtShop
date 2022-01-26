<div align="center">
<img src="NuxtShop_logo.png" alt="NuxtShop"/>
</div>

# Introduction

NuxtShop is a highly-customizable open-source blend of Nuxt and Shopify that comes out of the box
with a great developer experience and in-built performance practices as a foundation for a production-quality
eCommerce site.

## Excerpt

The fallout of the Covid-19 pandemic on eCommerce resulted in a meteoric rise in brand revenue and incremental sales. Universal Standard, the world’s most size-inclusive fashion brand, migrated to a headless Shopify storefront with Nuxt.js, running on Layer0. Not only has the clothing company seen a 200% lift in mobile conversion rate and highest revenue day to date with the migration, but the team velocity has improved dramatically.

NuxtShop is a result of how Universal Standard architected the migration and solved for key challenges in headless commerce including:

- Cross-domain communication for cart management
- Optimization for Core Web Vitals
- Apollo client and GraphQL API caching
- Real-time CDN data synchronization
- Developer productivity
- Performance
- seamless migration and proven techniques for server-side rendering (SSR), caching, performance optimization, and deployments with an emphasis on developer experience
- Sensible defaults like Layer0

## What NuxtShop Is

NuxtShop is an open source template/source starter kit for developing headless eCommerce on Shopify with Vue 3, Nuxt 3, Apollo, Tailwind 3, and Pinia. It allows you to use the latest technologies like Nuxt3 and Tailwind 3, with less dependencies for a performant ecommerce site. If you’ve written any Nuxt at all, you will be right at home with NuxtShop.

NuxtShop:

- is a lightweight starting point
- has configurations to help you be productive quickly
- has minimally styled components with basic functionality ready to extend
- is opinionated, but not prescriptive
- provides an opinionated starting point for Nuxt + shopify eCommerce at the edge with Layer0
- has basic eCommerce functionality with a structure that encourages development
- is made for developers embarking on headless shopify eCommerce with Nuxt

## What NuxtShop Isn’t

NuxtShop is not:

- a shopify theme
- a full-featured, plug and play solution/production ready store
- a design system
- tightly coupled to any one tool - swap out what you want, add what you need

## Technologies

NuxtShop uses the following technologies:

- [Nuxt3](https://v3.nuxtjs.org) as the Vue framework
- [Layer0](https://www.layer0.co) for deployment
- [Pinia](https://pinia.vuejs.org/) for state management in Vue
- [Tailwind CSS](https://tailwindcss.com) for CSS styling
- [Apollo](https://www.apollographql.com) for GraphQL
- [Shopify](https://www.shopify.com/online) for Headless eCommerce and as a checkout system
- [TypeScript](https://www.typescriptlang.org) for type safety

## Features/Benefits

- Easy to setup/get started
- Less packages/only necessary packages required to run
- Customizable — minimal styling OOTB and let’s the user customize??
- Cart
- Shopify checkout
- 1-click deploy to Layer0 with features like RUM/CWV

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Getting Started

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

> Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

## Requirements

- Node14 LTS (14.18 recommended)
- VSCode Extensions
- vetur
- tailwind intellisense for class autocomplete
- prettier
- Eslint
- Remember the API keys in env file

## Limitations

Because NuxtShop is built in the open and on the bleeding-edge, there are a few limitations to be aware of:

1. NuxtShop is built on Nuxt3 which at this time is still officially in beta
2. NuxtShop uses the new shopify cart api which does not support shopify scripts on Plus yet. To use scripts, you can adjust to the checkout api

# Notes

### Shopify Setup

- Shopify store with private app
- Make All collection in Shopify

### App Setup

- rename .env.sample to .env
- Add access token and shop name
