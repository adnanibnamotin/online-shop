<script>
  import { link } from "svelte-routing";
  export let product;
  console.log(product);
  let { title, image, id } = product;
</script>

<div class="col-sm-6 col-md-3 col-lg-3">
<div class="card">
  <img src="{image.url}" class="justify-content card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={`/product/${id}`} class="btn btn-primary" use:link>Details</a>
  </div>
</div>
</div>

<style>
  img {
    width: 60%;
    margin:auto;
  }
  .card {
    padding-top: 5px;
    margin:10px 0;
  }
</style>