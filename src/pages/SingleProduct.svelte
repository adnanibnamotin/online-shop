<script>
  export let id;
  export let location;

  import products from "../stores/productStore";
  import Loading from "../components/Loading.svelte";
  import { link } from "svelte-routing";

  $: product = $products.find(p => p.id == parseInt(id));
</script>

<svelte:head>
  <title>{ !product ? "Product" : product.title }</title>
</svelte:head>

{#if !product}
  <Loading />
{:else}
  <div class="container">
    <div class="row"> 
      <div class="col">
      <br><a href="/products" use:link class="btn btn-light">Back</a>
      </div>
    </div>
    <div class="row">
      <div class="col col-lg-6"><br>
        <img src={product.image.url} alt="image" >
      </div>
      <div class="col col-lg-6">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p><strong>Price : ${product.price}</strong></p>
        <button class="btn btn-lg btn-block btn-success btn-outlined">Add to cart</button>
      </div>
    </div>
  </div>
{/if}


<style>
  img {
    filter: drop-shadow(10px 10px 16px black);
  }
</style>