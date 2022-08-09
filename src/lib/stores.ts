// types
import type { Writable } from 'svelte/store';
// svelte
import { writable } from 'svelte/store';
import { browser } from '$app/env';
// 3rd party
import Cookies from 'universal-cookie';
// project
import { cookieMaxAge, defaultClientPersonalizations, personalizationCookieName } from './config';

const cookies = new Cookies();

export const clientPersonalizations: Writable<ClientPersonalizations> = (function () {
	let clientPersonalizations: ClientPersonalizations;
	if (browser) {
		clientPersonalizations = cookies.get(personalizationCookieName);
	} else {
		clientPersonalizations = defaultClientPersonalizations;
	}
	const { set: setStoreTo, ...store } = writable(clientPersonalizations);

	return {
		...store,
		set: (newPersonalizations: ClientPersonalizations) => {
			cookies.set(personalizationCookieName, JSON.stringify(newPersonalizations), {
				path: '/',
				maxAge: cookieMaxAge
			});
			setStoreTo(newPersonalizations);
		}
	};
})();
