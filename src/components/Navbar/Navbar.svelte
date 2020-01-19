<script>
  import BigNavBar from "./BigNavBar.svelte";
  import SmallNavBar from "./SmallNavBar.svelte";
  import globalStore from "../../stores/globalStore"
  let screenWidth;

  $: if (screenWidth > 992) {
    globalStore.toggleItem("sideBar", false);
  }
</script>

<svelte:window bind:innerWidth={screenWidth} />


{#if screenWidth > 992}
  <BigNavBar />
{:else}
  <SmallNavBar />
{/if}