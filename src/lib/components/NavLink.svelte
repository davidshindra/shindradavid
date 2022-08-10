<script lang="ts">
	import { page } from '$app/stores';
	// props
	export let name: string;
	export let linkTo: string;
	export let open: boolean;
</script>

<a href={linkTo} class="navlink" class:active={$page.url.pathname === linkTo} class:open>
	<span class="navlink__icon"><slot name="icon" /></span>
	<span class="navlink__name">{name}</span>
</a>

<style lang="scss">
	.navlink {
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 0;
		width: fit-content;
    padding: .6rem;

		&:hover {
			color: var(--accent-color);
      background-color: var(--accent-bg);
		}

		&.active {
			color: var(--accent-color);
      background-color: var(--accent-bg);
		}

		&__icon {
			font-size: var(--fs-md);
		}

		&__name {
			display: none;
		}
	}
	.navlink.open {
		.navlink__name {
			display: block;
		}
	}
</style>
