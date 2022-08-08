<script lang="ts">
  // global styles
  import '$lib/styles/styles.scss';
  // components
  import Header from "$lib/components/layout/Header.svelte";

  import { browser } from '$app/env';
  import { session } from '$app/stores';
  import { theme } from '$lib/stores';
</script>

<div class="app" data-theme={browser ? $theme : $session.theme}>
  <header class="app__header">
    <Header/>
  </header>

  <main class="app__main">
    <slot/>
  </main>
</div>

<style lang="scss"></style>