import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => {
    return {
      selectedVariantId: "",
    };
  },
  actions: {
    setSelectedVariantId(id) {
      this.selectedVariantId = id;
    },
  },
});
