<script lang="ts">
  // svelte
  import { browser } from '$app/env';
  import { session } from '$app/stores';
  // icons
	import Check from '$lib/icons/Check.svelte';
  // 3rd party
	import {
		RadioGroup,
		RadioGroupLabel,
		RadioGroupOption,
		RadioGroupDescription
	} from '@rgossiaux/svelte-headlessui';
  // project
	import { clientPersonalizations } from '$lib/stores';

  // state
	$: currentTheme = browser ? $clientPersonalizations.theme : $session.theme;
  // event handlers
	let changeTheme = (newTheme: Theme) => {
		const newPersonalizations: ClientPersonalizations = {
			accentColor: $clientPersonalizations.accentColor,
			theme: newTheme
		};
		clientPersonalizations.set(newPersonalizations);
	};
</script>

<RadioGroup value={currentTheme} on:change={(e) => changeTheme(e.detail)}>
	<RadioGroupLabel>
    <h2>Theme</h2>
  </RadioGroupLabel>
	<div class="theme">
		<RadioGroupOption value="system" let:checked>
			<div class="theme__option" class:checked>
				<span class="theme__option__checkbox">
					<span>
						<Check />
					</span>
				</span>
				<span class="theme__option__name">System</span>
			</div>
		</RadioGroupOption>
		<RadioGroupOption value="dark" let:checked>
			<div class="theme__option" class:checked>
				<span class="theme__option__checkbox">
					<span>
						<Check />
					</span>
				</span>
				<span class="theme__option__name">Dark</span>
			</div>
		</RadioGroupOption>
		<RadioGroupOption value="light" let:checked>
			<div class="theme__option" class:checked>
				<span class="theme__option__checkbox">
					<span>
						<Check />
					</span>
				</span>
				<span class="theme__option__name">Light</span>
			</div>
		</RadioGroupOption>
	</div>
</RadioGroup>

<style lang="scss">
	.theme {
		display: flex;
	}
	:global(.theme__option) {
		display: flex;
		align-items: center;
		gap: 1.2rem;
		padding: 1rem;
    color: currentColor;
	}
	:global(.theme__option.checked) {
		color: currentColor;
		border: 2px solid var(--accent-color);
	}
  :global(.theme__option__name) {
    font-weight: 700;
    font-size: var(--fs-no);
  }
	:global(.theme__option__checkbox) {
		font-size: var(--fs-no);
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid currentColor;
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		span {
			display: none;
		}
	}
	:global(.theme__option.checked .theme__option__checkbox) {
		width: 100%;
		height: 100%;
    border: 2px solid var(--accent-color);

		span {
			display: block;
			display: flex;
			align-items: center;
			justify-content: center;
      color: var(--accent-color);
		}
	}
</style>
