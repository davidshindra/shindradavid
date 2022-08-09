<script lang="ts">
	// icons
	import Pen from '$lib/icons/Pen.svelte';
	import Adjustments from '$lib/icons/Adjustments.svelte';
	import Grid from '$lib/icons/Grid.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Phone from '$lib/icons/Phone.svelte';
	import Mail from '$lib/icons/Mail.svelte';
	import Home from '$lib/icons/Home.svelte';
	// components
	import NavLink from '$lib/components/NavLink.svelte';
	import ContactLink from '$lib/components/ContactLink.svelte';
	// state
	let open = false;
</script>

<div class="header">
	<button class="header__menu">
		<Grid />
	</button>

	<hr />

	<nav class="header__nav">
		<NavLink linkTo="/" name="Home" {open}>
			<Home slot="icon" />
		</NavLink>

		<NavLink linkTo="/blog" name="Blog" {open}>
			<Pen slot="icon" />
		</NavLink>

		<NavLink linkTo="/personalization" name="Personalization" {open}>
			<Adjustments slot="icon" />
		</NavLink>
	</nav>

	<hr />

	<ul class="header__socials">
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
			<ContactLink linkTo="tel:+256702557298" text="Give me a call" {open}>
				<Phone slot="icon" />
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
	@keyframes pulse {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.1);
		}
	}
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
			animation: pulse 1s infinite ease-in-out alternate;
		}

		&__nav {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: 100%;
			align-items: center;
			justify-content: center;
		}

		&__socials {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
