export type Language = "en" | "pt-br" | "fr" | "es";

const languages: Language[] = ["en", "pt-br", "fr", "es"];
const languageChangeEvent = "portfolio-language-change";

export function subscribeToLanguage(callback: () => void) {
	window.addEventListener(languageChangeEvent, callback);
	return () => window.removeEventListener(languageChangeEvent, callback);
}

export function getLanguageSnapshot(): Language {
	const storedLanguage = window.localStorage.getItem("portfolio-language") as Language | null;
	return storedLanguage && languages.includes(storedLanguage) ? storedLanguage : "en";
}

export function getServerLanguageSnapshot(): Language {
	return "en";
}

export function setLanguage(language: Language) {
	window.localStorage.setItem("portfolio-language", language);
	window.dispatchEvent(new Event(languageChangeEvent));
}
