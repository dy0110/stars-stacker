import { Circle, Triangle } from "lucide-react";
import { useMemo } from "react";
import type { Category } from "~/constant/point";

export type Props = {
	type: Category["type"];
	text: string;
	onClick?: () => void;
};

export function CategoryButton({ type, text, onClick }: Props) {
	const IconSwitcher = useMemo(() => {
		switch (type) {
			case "BASIC":
			case "POWER":
			case "SPEED":
			case "ARMED":
				return <Circle className="size-2" />;

			case "HAZARD":
			case "DEVASTATION":
			case "INVASION":
			case "METEO":
				return <Triangle className="size-2" />;

			default:
				return <div />;
		}
	}, [type]);

	const ColorSwitcher = useMemo(() => {
		switch (type) {
			case "BASIC":
				return "";

			case "SPEED":
				return "btn-info";

			case "POWER":
				return "btn-error";

			case "ARMED":
				return "btn-success";

			case "HAZARD":
			case "DEVASTATION":
			case "INVASION":
			case "METEO":
				return "btn-accent";

			default:
				return "";
		}
	}, [type]);

	// const text = useMemo(
	// 	() => Categories.find((category) => category.type === type)?.text,
	// 	[type],
	// );

	return (
		<button
			type="button"
			className={`btn btn-xs rounded-full ${ColorSwitcher} btn-outline text-[8px]`}
			onClick={onClick}
		>
			{IconSwitcher}
			{text}
		</button>
	);
}
