<script>
  import products, { featuredStore } from "../../stores/productStore";
  import Product from "./Product.svelte";
  import Loading from "../Loading.svelte";


  // $: featureProducts = $products.filter(product => product.featured === true);
  

</script>

<div class="container">
  <br>
  <h3 class="text-center">Featured Products</h3>
  <br>
  <div class="row">
    {#each $featuredStore as product}
      <Product {product} />
    {:else}
      <Loading />
    {/each}
  </div>
</div>