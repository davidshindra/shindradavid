<script lang="ts">
  export let text: string;
  export let linkTo: string;
</script>

<a href={linkTo} class="contactlink" target="__blank">
  <span class="contactlink__icon"><slot name="icon"/></span>
  <span class="contactlink__name">{text}</span>
</a>

<style lang="scss">
  .contactlink {
    display: flex;
    align-items: center;
    line-height: 0;

    &__icon {
      font-size: var(--fs-lg);
    }
  }
</style>