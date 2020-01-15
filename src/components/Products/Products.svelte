<script>
  import products from "../../stores/productStore";
  import Product from "./Product.svelte";
  import Loading from "../Loading.svelte";

</script>

<div class="container">
  <br>
  <h3 class='text-center'>All Products</h3>  
  <br>
  <div class="row">
    {#each $products as product}
      <Product {product} />
    {:else}
      <Loading />
    {/each}
  </div>
</div>