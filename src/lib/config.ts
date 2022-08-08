import type { Theme } from "$lib/types";

export const themeCookieName = 'theme';
export const defaultTheme: Theme = 'dark';
export const cookieMaxAge = 60 * 60 * 24 * 365;