<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Check from '$lib/icons/Check.svelte';
	let colors: AccentColor[] = ['green', 'yellow', 'pink', 'red', 'blue'];

	export let currentColor: AccentColor;

	const dispatch = createEventDispatcher();

	function setNewColor(color: AccentColor) {
		console.log('color changed to ', color);
		dispatch('colorChanged', {
			newColor: color
		});
	}
</script>

<div class="accent-color">
	{#each colors as color}
		<div
			class="color"
			on:click={() => setNewColor(color)}
			style="border: {currentColor === color ? '2px solid currentColor' : 'none'};"
		>
			<span class="color__input" style="background-color: var(--{color})">
				<span style="display: {currentColor === color ? 'block' : 'none'};">
					<Check />
				</span>
			</span>
		</div>
	{/each}
</div>

<style lang="scss">
	.accent-color {
		display: flex;
	}
	.color {
		border-radius: 50%;
		width: fit-content;
		padding: 2px;
		&__input {
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: var(--fs-md);
			line-height: 0;
		}
	}
</style>
