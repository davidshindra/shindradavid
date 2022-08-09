<script lang="ts">
	// global styles
	import '$lib/styles/styles.scss';
	// components
	import Header from '$lib/components/layout/Header.svelte';
	// svelte
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	// project
	import { clientPersonalizations } from '$lib/stores';
</script>

<div
	class="app"
	data-theme={browser ? $clientPersonalizations.theme : $session.theme}
	data-accentColor={browser ? $clientPersonalizations.accentColor : $session.accentColor}
>
	<header class="app__header">
		<Header />
	</header>

	<main class="app__main">
		<slot />
	</main>
</div>

<style lang="scss">
	.app {
		&__main {
			margin-left: var(--header-width);
		}
	}
</style>
