<script lang="ts">
	export let text: string;
	export let linkTo: string;
	export let open: boolean;
</script>

<a href={linkTo} class="contactlink" target="__blank" class:open>
	<span class="contactlink__icon"><slot name="icon" /></span>
	<span class="contactlink__name">{text}</span>
</a>

<style lang="scss">
	.contactlink {
		display: flex;
		align-items: center;
		line-height: 0;

		&:hover {
			color: var(--accent-color);
		}

		&__icon {
			font-size: var(--fs-md);
		}
		&__name {
			display: none;
		}
	}

	.contactlink.open {
		.contactlink__name {
			display: block;
		}
	}
</style>
