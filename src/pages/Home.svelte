<script>
  import { link } from "svelte-routing";
  import Featured from "../components/Products/Featured.svelte";

</script>


<div class="jumbotron">
  <div class="container">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a href="/products" class="btn-lg btn-info text-decoration-none" role="button" use:link>Shop now</a>
    </p>
  </div>
</div>
<Featured />

<style>

</style>