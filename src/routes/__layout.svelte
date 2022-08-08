<script lang="ts">
  // global styles
  import '$lib/styles/styles.scss';
  // components
  import Header from "$lib/components/layout/Header.svelte";
</script>

<div class="app">
  <header class="app__header">
    <Header/>
  </header>

  <main class="app__main">
    <slot/>
  </main>
</div>

<style lang="scss"></style>