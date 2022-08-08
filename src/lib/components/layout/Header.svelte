<script lang="ts">
	// icons
	import Home from '$lib/icons/Home.svelte';
	import Pen from '$lib/icons/Pen.svelte';
	import Adjustments from '$lib/icons/Adjustments.svelte';
	import Grid from '$lib/icons/Grid.svelte';
  import Twitter from '$lib/icons/Twitter.svelte';
  import Github from '$lib/icons/Github.svelte';
  import Phone from '$lib/icons/Phone.svelte';
  import Mail from '$lib/icons/Mail.svelte';
	// components
	import NavLink from '$lib/components/NavLink.svelte';
  import ContactLink from '$lib/components/ContactLink.svelte';
</script>

<div class="header">
	<button class="header__menu">
		<Grid />
	</button>
  
	<nav class="header__nav">
		<NavLink linkTo="/" name="Home">
			<Home slot="icon" />
		</NavLink>

		<NavLink linkTo="/blog" name="Blog">
			<Pen slot="icon" />
		</NavLink>

		<NavLink linkTo="/personalization" name="Personalization">
			<Adjustments slot="icon" />
		</NavLink>
	</nav>

	<ul class="header__socials">
		<li>
      <ContactLink linkTo="https://twitter.com" text="Follow me on Twitter">
        <Twitter slot="icon"/>
      </ContactLink>
    </li>
    <li>
      <ContactLink linkTo="https://github.com" text="Check out my Github">
        <Github slot="icon"/>
      </ContactLink>
    </li>
    <li>
      <ContactLink linkTo="tel:+256702557298" text="Give me a call">
        <Phone slot="icon"/>
      </ContactLink>
    </li>
    <li>
      <ContactLink linkTo="mailto:davidshindra.dev@gmail.com" text="Send me an email">
        <Mail slot="icon"/>
      </ContactLink>
    </li>
	</ul>
</div>

<style lang="scss">
  .header {
    &__menu {
      font-size: var(--fs-lg);
    }
  }
</style>
