export type Theme = 'dark' | 'light';

/**
 * check {@link https://stackoverflow.com/questions/57208330/extend-a-recordstring-string-with-a-different-type-of-property}
 */
function CookiesWithThemeFactory(fixedProps: { theme?: Theme }, dynamicProps?: Record<string, string>) {
  return Object.assign({}, dynamicProps, fixedProps);
}

type CookiesWithTheme = ReturnType<typeof CookiesWithThemeFactory>;