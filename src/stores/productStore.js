import localProducts from "../localProducts.js";
import { writable, derived } from "svelte/store";

const store = writable([...localProducts]);

// featured store
export const featuredStore = derived(store, $featured => {
  return $featured.filter(product => product.featured === true);
})
export default store;