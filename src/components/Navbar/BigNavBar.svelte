<script>
  import { link } from "svelte-routing";
  import CartButton from "../Cart/CartButton.svelte";
</script>
<nav class="fixed-top navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/" use:link>Online Shop</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/" use:link>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about" use:link>About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/products" use:link>Products</a>
      </li>
    </ul>
  </div>
  <CartButton />
</nav>