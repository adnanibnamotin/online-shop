<script>
  import { link } from "svelte-routing";
  import links from "../../constants/links";
  import CartButton from "../Cart/CartButton.svelte";
</script>
<nav class="fixed-top navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/" use:link>Online Shop</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    {#each links as navlink}
      <li class="nav-item">
        <a class="nav-link" href={navlink.url} use:link>{navlink.text} <span class="sr-only">(current)</span></a>
      </li>
    {/each}
    </ul>
  </div>
  <CartButton />
</nav>