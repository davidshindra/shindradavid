<script lang="ts">
  export let image: string;
  export let imageAlt: string;
  export let name: string;
  export let description: string;
</script>

<article class="service">
  <header class="service__header">
    <img src={image} alt={imageAlt}>
  </header>
  <div class="service__body">
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
</article>

<style lang="scss">
  @use '../../styles/mixins';
  .service {
    width: 100%;
    padding: .6rem;
    border: 1px solid var(--text-muted);

    @include mixins.screen-md {
      display: flex;
    }

    &__header {
      width: 100%;
      img {
        width: 100%;
        max-height: 260px;
        object-fit: cover;
        @include mixins.screen-md {
          height: 100%;
          max-height: 178px;
        }
      }
    }
    &__body {
      h3 {
        color: var(--text-base);
        font-size: var(--fs-md);
      }
      p {
        color: var(--text-muted);
        font-size: var(--fs-sm);
      }
    }
  }
</style>