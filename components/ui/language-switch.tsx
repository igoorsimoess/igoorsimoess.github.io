import type { Language } from "@/lib/language";

const languageOptions: Array<{ value: Language; label: string }> = [
	{ value: "en", label: "EN" },
	{ value: "pt-br", label: "PT-BR" },
	{ value: "fr", label: "FR" },
	{ value: "es", label: "ES" },
];

type LanguageSwitchProps = {
	value: Language;
	onChange: (language: Language) => void;
};

export function LanguageSwitch({ value, onChange }: LanguageSwitchProps) {
	return (
		<div className="language-switch" role="group" aria-label="Language">
			{languageOptions.map((option) => (
				<button key={option.value} type="button" aria-pressed={value === option.value} data-state={value === option.value ? "active" : "inactive"} onClick={() => onChange(option.value)}>
					{option.label}
				</button>
			))}
		</div>
	);
}
