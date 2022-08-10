<script lang="ts">
	// icons
	import Adjustments from '$lib/icons/Adjustments.svelte';
	import Grid from '$lib/icons/Grid.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Phone from '$lib/icons/Phone.svelte';
	import Mail from '$lib/icons/Mail.svelte';
	import Home from '$lib/icons/Home.svelte';
	import Article from '$lib/icons/Article.svelte';
	import ArrowDown from '$lib/icons/ArrowDown.svelte';
	import WhatsApp from '$lib/icons/WhatsApp.svelte';
	// components
	import NavLink from '$lib/components/NavLink.svelte';
	import ContactLink from '$lib/components/ContactLink.svelte';
  import Logo from '$lib/components/Logo.svelte';
	// state
	let open = false;
</script>

<div class="header">
  <Logo/>
	<button class="header__menu">
		<Grid />
	</button>

	<nav class="header__nav">
		<NavLink linkTo="/" name="Home" {open}>
			<Home slot="icon" />
		</NavLink>

		<NavLink linkTo="/blog" name="Blog" {open}>
			<Article slot="icon" />
		</NavLink>

		<NavLink linkTo="/personalization" name="Personalization" {open}>
			<Adjustments slot="icon" />
		</NavLink>
	</nav>

	<div class="header__contact-me">
		<div class="vl" />
		<p class="contact-me-text">Contact me</p>
		<div class="vl" />
		<ArrowDown />
	</div>

	<ul class="header__socials">
		<li>
			<ContactLink linkTo="tel:+256702557298" text="Give me a call" {open}>
				<Phone slot="icon" />
			</ContactLink>
		</li>
		<li>
			<ContactLink linkTo="tel:+256702557298" text="Give me a call" {open}>
				<WhatsApp slot="icon" />
			</ContactLink>
		</li>
		<li>
			<ContactLink linkTo="https://twitter.com" text="Follow me on Twitter" {open}>
				<Twitter slot="icon" />
			</ContactLink>
		</li>
		<li>
			<ContactLink linkTo="https://github.com" text="Check out my Github" {open}>
				<Github slot="icon" />
			</ContactLink>
		</li>
		<li>
			<ContactLink linkTo="mailto:davidshindra.dev@gmail.com" text="Send me an email" {open}>
				<Mail slot="icon" />
			</ContactLink>
		</li>
	</ul>
</div>

<style lang="scss">
	.header {
		padding-top: 1.2rem;
		width: var(--header-width);
		background-color: var(--bg-elevated);
		height: 100vh;
		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		&__menu {
			font-size: var(--fs-lg);
		}

		&__nav {
			display: flex;
			flex-direction: column;
			width: 100%;
			align-items: center;
			justify-content: center;
		}

		&__contact-me {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
			& > .vl {
				border: 1px solid currentColor;
				height: 3rem;
        width: 0;
        margin-bottom: -2px;
			}
			& > .contact-me-text {
				writing-mode: vertical-lr;
				line-height: 0;
        padding: .8rem 0;
			}
		}

		&__socials {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
