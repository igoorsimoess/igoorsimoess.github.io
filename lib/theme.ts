export type Theme = "light" | "dark";

export const themeChangeEvent = "portfolio-theme-change";

export function subscribeToTheme(callback: () => void) {
	window.addEventListener(themeChangeEvent, callback);
	return () => window.removeEventListener(themeChangeEvent, callback);
}

export function getThemeSnapshot(): Theme {
	return window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
}

export function getServerThemeSnapshot(): Theme {
	return "dark";
}

export function setTheme(theme: Theme) {
	window.localStorage.setItem("portfolio-theme", theme);
	window.dispatchEvent(new Event(themeChangeEvent));
}
