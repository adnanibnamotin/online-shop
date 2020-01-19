<script>
  import { link } from "svelte-routing";
  import CartButton from "../Cart/CartButton.svelte";
  import globalStore from "../../stores/globalStore";
  let openSideBar = globalStore.toggleItem;
</script>

<div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="fixed-top navbar navbar-light bg-light">
    <button on:click={() => openSideBar("sideBar", true)} class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/" use:link>Online Shop</a>
    <CartButton />
  </nav>
</div>