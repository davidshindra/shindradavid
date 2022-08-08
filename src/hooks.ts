import type { Handle, GetSession } from '@sveltejs/kit';
import type { CookiesWithTheme } from '$lib/types';

import * as cookie from 'cookie';

import { defaultTheme, cookieMaxAge, themeCookieName } from '$lib/config';


export const handle: Handle = async({ event, resolve}) => {
  const cookies: CookiesWithTheme = cookie.parse(event.request.headers.get('Cookie') || '')
  if (cookies[themeCookieName]) {
    event.locals.theme = cookies[themeCookieName];
  } else {
    event.locals.theme = defaultTheme;
  }

  const response = await resolve(event);

  if (!cookies['theme']) {
    const cookieOptions = {path: '/', maxAge: cookieMaxAge}
    response.headers.set('Set-Cookie', cookie.serialize(themeCookieName, defaultTheme, {...cookieOptions}))
  }

  return response
}

export const getSession: GetSession = ({locals}) => {
  return { theme: locals.theme }
}