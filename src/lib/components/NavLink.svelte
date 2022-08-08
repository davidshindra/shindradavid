<script lang="ts">
  import { page } from '$app/stores';
  // props
  export let name: string;
  export let linkTo: string;
</script>

<a href={linkTo} class="navlink" class:active={$page.url.pathname === linkTo}>
  <span class="navlink__icon"><slot name="icon"/></span>
  <span class="navlink__name">{name}</span>
</a>

<style lang="scss">
  .navlink {
    display: flex;
    align-items: center;
    line-height: 0;

    &__icon {
      font-size: var(--fs-lg);
    }
  }
</style>