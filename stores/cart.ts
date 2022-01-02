import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      loading: false,
      cartOpen: false,
    };
  },
  actions: {
    toggleCart(state?: boolean) {
      if (state) {
        this.cartOpen = state;
      } else {
        this.cartOpen = !this.cartOpen;
      }
    },
  },
});
