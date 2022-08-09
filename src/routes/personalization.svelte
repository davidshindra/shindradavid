<script lang="ts">
	// types
	// icons
	import Check from '$lib/icons/Check.svelte';
	// stores
	import { clientPersonalizations } from '$lib/stores';
	import { session } from '$app/stores';
	import { browser } from '$app/env';
	// svelte
	import { onMount } from 'svelte';

	import AccentColorComponent from '$lib/components/AccentColor.svelte';

	$: currentAccentColor = browser ? $clientPersonalizations.accentColor : $session.accentColor;

	$: selected = currentAccentColor;

	$: changeColor = function (event: any) {
		clientPersonalizations.set({
			accentColor: event.detail.newColor,
			theme: $clientPersonalizations.theme
		});
	};

	let colors: AccentColor[] = ['green', 'yellow', 'pink', 'red', 'blue'];
</script>

<svelte:head>
	<title>Personalization | Shindra David</title>
</svelte:head>

<h1>Personalization</h1>

<section>
	<h2>Accent color: {selected}</h2>
	<div>
		<AccentColorComponent currentColor={currentAccentColor} on:colorChanged={changeColor} />
	</div>
</section>

<style lang="scss"></style>
