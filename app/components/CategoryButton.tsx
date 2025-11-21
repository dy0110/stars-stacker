import { useMemo } from "react";
import type { Category } from "~/constant/point";
import { useCategoryItem } from "~/hooks/useCategoryItem";

export type Props = {
	type: Category["type"];
	text: string;
	onClick?: () => void;
};

export function CategoryButton({ type, text, onClick }: Props) {
	const { IconSwitcher } = useCategoryItem();

	const ColorSwitcher = useMemo(() => {
		switch (type) {
			case "BASIC":
				return "active:text-white";

			case "SPEED":
				return "btn-info active:text-white";

			case "POWER":
				return "btn-error active:text-white";

			case "ARMED":
				return "btn-success active:text-white";

			case "HAZARD":
			case "DEVASTATION":
			case "INVASION":
			case "METEO":
				return "btn-accent active:text-white";

			default:
				return "";
		}
	}, [type]);

	return (
		<button
			type="button"
			className={`btn btn-xs rounded-full ${ColorSwitcher} btn-outline text-[8px]`}
			onClick={onClick}
		>
			{IconSwitcher(type)}
			{text}
		</button>
	);
}
