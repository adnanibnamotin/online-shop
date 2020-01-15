import localProducts from "../localProducts.js";
import { writable } from "svelte/store";

const store = writable([...localProducts]);

export default store;