<script>
  import { Link } from "svelte-routing";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Online Shop</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-link nav-item active">
        <Link class="" to="/">Home</Link>
      </li>
      <li class="nav-link nav-item">
        <Link to="/about">About</Link>
      </li>
      <li class="nav-link nav-item">
        <Link to="/products">Products</Link>
      </li>
      <li class="nav-link nav-item">
        <Link to="/signin">Sign in</Link>
      </li>
    </ul>
  </div>
</nav>