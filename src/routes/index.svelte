<script lang="ts">
  import Service from "$lib/components/cards/Service.svelte";
</script>

<svelte:head>
	<title>Shindra David | Web developer and digital marketer based in Uganda.</title>
</svelte:head>

<section class="hero">
	<h1 class="hero__heading">Hi, I'm <span>Shindra David</span>.</h1>
	<p>Software developer | Digital marketer</p>
</section>

<section class="services">
	<h2 class="services__heading">What I do</h2>
  <div class="services__container">
    <Service 
      image="/digital-marketing.jpg" 
      name="Digital Marketing" 
      imageAlt="digital marketing"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare. consectetur adipiscing elit. Vivamus ornare."
    />
    <Service 
      image="/programmer.jpg" 
      name="Web design" 
      imageAlt="web desinger"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare. consectetur adipiscing elit. Vivamus ornare."
    />
  </div>
</section>

<section class="posts">
  <h2 class="posts__heading">Latest blog posts</h2>
</section>

<style lang="scss">
  @use '../lib/styles/mixins';

  .hero {
    @include mixins.section-spacing;
    &__heading {
      font-size: var(--fs-xl);
      font-weight: 900;
      span {
        color: var(--accent-color);
      }
    }
  }
  .services {
    @include mixins.section-spacing;

    &__heading {
      @include mixins.section-heading;
    }
    &__container {
      display: flex;
      flex-wrap: wrap;
      gap: .8rem;

      @include mixins.screen-lg {
        flex-wrap: nowrap;
      }
    }
  }

  .posts {
    @include mixins.section-spacing;
    &__heading {
      @include mixins.section-heading;
    }
  }
</style>
