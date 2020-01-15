<script>
	// Router
	import { Router, Route } from "svelte-routing";

	// Components
	import Navbar from "./components/Navbar.svelte";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Products from "./pages/Products.svelte";
	import SingleProduct from "./pages/SingleProduct.svelte";
	import SignIn from "./pages/SignIn.svelte";

</script>

<Router>
	<Navbar />
	<div>
		<Route path="/" component={Home} />
		<Route path="/about" component={About} />
		<Route path="/products" component={Products} />
		<Route path="/product/:id" component={SingleProduct} />
		<Route path="/signin" component={SignIn} />
	</div>
</Router>

<style>
</style>