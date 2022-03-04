<div align="center">
<img src=".github/nuxtshop_github.jpg" alt="NuxtShop"/>
</div>

# Introduction

NuxtShop is a highly-customizable, open-source starter kit, introduced at [Vue.js Nation 2022](https://vimeo.com/671090407), for building headless Shopify stores with Nuxt 3. It comes out of the box
with a great developer experience and in-built performance practices as a foundation for a production-quality eCommerce site.

> Read the blog post [NuxtShop: A Nuxt and Shopify eCommerce Starter Kit](https://www.layer0.co/post/nuxtshop-nuxt-shopify-ecommerce-starter-kit) to learn more.

## Technologies

NuxtShop uses the following technologies:

- [Nuxt3](https://v3.nuxtjs.org) as the Vue framework.
- [Pinia](https://pinia.vuejs.org/) for state management in Vue.
- [Tailwind CSS](https://tailwindcss.com) for CSS styling.
- [Apollo](https://www.apollographql.com) for GraphQL.
- [Layer0](https://www.layer0.co) for deployment.
- [Shopify](https://www.shopify.com/online) for Headless eCommerce and as a checkout system.
- [TypeScript](https://www.typescriptlang.org) for type safety.

## Features/Benefits

- Easy to setup/get started.
- Only necessary packages required to run.
- Customizable — minimal styling out of the box.
- Cart.
- Shopify checkout.
- 1-click deploy to Layer0 with features like [Real User Monitoring](https://www.layer0.co/rum)

## 1-click deploy to Layer0

Click the deploy button below to [deploy](https://docs.layer0.co/guides/deploy-to-layer0) NuxtShop to Layer0 in 1-click.

[![Deploy with Layer0](https://docs.layer0.co/button.svg)](https://app.layer0.co/deploy?repo=https%3A%2F%2Fgithub.com%2Fjustinmetros%2FNuxtShop&sgId=470c4986-7644-4416-b4ae-d7cad5814b59)

> NOTE: If you're deploying to Layer0, Layer0 only supports Node.js version 14. See this guide on how to [Install Node.js and npm](https://docs.layer0.co/guides/install-nodejs)

---
## Getting Started
### 1. Fork and clone this repository

Fork this repository to your GitHub account and then clone it to your local environment.

### 2. Install dependencies

Install the dependencies:

```bash
yarn install
```

### 3. Local development

Start the development server on http://localhost:3000:

```bash
yarn dev
```

### 4. Production

Build the application for production:

```bash
yarn build
```

> Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

---

## Shopify Setup

- Create a Shopify store
  - Tip: Sign up as a [Shopify Partner](https://www.shopify.com/partners) to get access to development stores.
- In your new store, go to Apps, [create a private app](https://help.shopify.com/en/manual/apps/private-apps) and give it Storefront API access
- Recommended reading: [Getting started with the Shopify Storefront API](https://shopify.dev/api/storefront/getting-started)
- This project references a collection named 'All', but you can adjust that to whatever you like.
- Optional: [Sample Shopify product CSVs](https://github.com/shopifypartners/product-csvs). The demo uses 'apparel.csv'.

## App Setup

- rename .env.sample to .env
- Add your Shopify Access Token and \*.myshopify url to the .env variables

---
## Dev tooling recommendations

- VSCode Extensions
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
  - [Tailwind intellisense for class autocomplete](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Prettier](https://prettier.io)
- [Eslint](https://eslint.org)

---


## Limitations

Because NuxtShop is built in the open and on the bleeding-edge, there are a few limitations to be aware of:

1. NuxtShop is built on Nuxt3 which at this time is still officially in beta
2. NuxtShop uses the new Shopify Cart API which does not support Shopify Scripts on Plus yet. To use scripts, you can adjust to the Checkout API

---

## Troubleshoot

Deploying to Layer0? [Node 14](https://forum.layer0.co/t/layer0-doesnt-work-with-node-16/577) is the latest supported version.

---

## Recommended resources

1. [Nuxt3 official documentation](https://v3.nuxtjs.org)