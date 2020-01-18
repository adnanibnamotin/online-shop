<script>
  import BigNavBar from "./BigNavBar.svelte";
  import SmallNavBar from "./SmallNavBar.svelte";
  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth > 992}
  <BigNavBar />
{:else}
  <SmallNavBar />
{/if}