type Theme = 'system' | 'dark' | 'light';

type AccentColor = 'red' | 'blue' | 'green' | 'yellow' | 'pink';

interface ClientPersonalizations {
	theme: Theme;
	accentColor: AccentColor;
}

/**
 * @param fixedProps contains all extra types to be added to the default cookie type
 * @param dynamicProps the default cookie type
 * @returns
 */
function CookieFactory(
	fixedProps: { personalization?: string },
	dynamicProps: Record<string, string>
) {
	return Object.assign({}, dynamicProps, fixedProps);
}

type ExtendedCookies = ReturnType<typeof CookieFactory>;
