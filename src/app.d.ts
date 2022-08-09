// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		theme: Theme;
		accentColor: AccentColor;
	}
	// interface Platform {}
	// interface PrivateEnv {}
	// interface PublicEnv {}
	interface Session {
		theme: Theme;
		accentColor: AccentColor;
	}
	// interface Stuff {}
}
