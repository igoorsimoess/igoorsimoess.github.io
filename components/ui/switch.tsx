import type { ButtonHTMLAttributes } from "react";

type SwitchProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
	checked: boolean;
	onCheckedChange: (checked: boolean) => void;
};

export function Switch({ checked, onCheckedChange, className = "", ...props }: SwitchProps) {
	return (
		<button
			className={`theme-switch${className ? ` ${className}` : ""}`}
			data-state={checked ? "checked" : "unchecked"}
			role="switch"
			aria-checked={checked}
			type="button"
			onClick={() => onCheckedChange(!checked)}
			{...props}
		>
			<span className="theme-switch-thumb" />
		</button>
	);
}
