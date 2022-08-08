// types
import type { Writable } from "svelte/store";
import type { Theme } from "$lib/types";
// svelte
import { writable } from "svelte/store";

import { themeCookieName, defaultTheme } from "$lib/config";

import Cookies from "universal-cookie";

const cookies = new Cookies();
const yearInSeconds = 60 * 60 * 24 * 365;

function cookieStore<T>(key: string, defaultValue: T, maxAge = yearInSeconds): Writable<T> {
  const initialValue: T = cookies.get(key) ?? defaultValue;
  const { set: setStore, ...store} = writable(initialValue);

  return {
    ...store,
    set: (newValue: T) => {
      setStore(newValue);
      cookies.set(key, newValue, { maxAge });
    },
  };
}

export const theme = cookieStore<Theme>(themeCookieName, defaultTheme);