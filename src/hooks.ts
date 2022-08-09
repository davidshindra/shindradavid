import type { GetSession, Handle } from '@sveltejs/kit';

import { cookieMaxAge, defaultClientPersonalizations } from '$lib/config';

import { personalizationCookieName } from '$lib/config';

import * as cookie from 'cookie';

export let handle: Handle = async ({ event, resolve }) => {
	const reqCookies: ExtendedCookies = cookie.parse(event.request.headers.get('Cookie') || '');

	if (reqCookies.personalization) {
		const clientPersonalizations: ClientPersonalizations = JSON.parse(reqCookies.personalization);
		event.locals.theme = clientPersonalizations.theme;
		event.locals.accentColor = clientPersonalizations.accentColor;
	} else {
		event.locals.theme = defaultClientPersonalizations.theme;
		event.locals.accentColor = defaultClientPersonalizations.accentColor;
	}

	const response = await resolve(event);

	if (!reqCookies.personalization) {
		response.headers.set(
			'Set-Cookie',
			cookie.serialize(personalizationCookieName, JSON.stringify(defaultClientPersonalizations), {
				path: '/',
				maxAge: cookieMaxAge
			})
		);
	}

	return response;
};

export const getSession: GetSession = ({ locals }) => {
	return {
		theme: locals.theme,
		accentColor: locals.accentColor
	};
};
