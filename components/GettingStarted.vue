<template>
  <div>
    <div class="container mx-auto my-8">
      <h1 class="text-5xl">Getting started</h1>

      <div class="mt-20">
        <h2 class="text-2xl underline">
          <a href="https://github.com/justinmetros/NuxtShop#shopify-setup">Shopify Setup</a>
        </h2>
        <ul>
          <li>
            1. Create a Shopify store Sign up as a <a class="underline" href="https://www.shopify.com/partners">Shopify Partner</a>
            to get access to development stores.
          </li>
          <li>
            2. In your new store, go to Apps, <a class="underline" href="https://help.shopify.com/en/manual/apps/private-apps">
            create a private app</a> and give it Storefront API access
          </li>
          <li>3. Recommended reading:
          <a class="underline" href="https://shopify.dev/api/storefront/getting-started">Getting started with the Shopify Storefront API</a>
          </li>
          <li>
            4. This project references a collection named 'All', but you can adjust that to whatever you like.
          </li>
        </ul>
      </div>


      <div class="mt-20">
        <h2 class="text-2xl underline">
          <a href="https://github.com/justinmetros/NuxtShop#app-setup">App Setup</a>
        </h2>
        <ul>
          <li>1. rename .env.sample to .env</li>
          <li>2. Add your Shopify Access Token and \*.myshopify url to the .env variables</li>
        </ul>
      </div>

    </div>
  </div>
</template>
