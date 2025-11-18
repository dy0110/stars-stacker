import { AlertTriangle, Minus, Plus } from "lucide-react";
import { useMemo } from "react";

export type Props = {
	type: "up" | "down" | "extra";
	text: string;
	onClick?: () => void;
};

export function PointButton({ type, text, onClick }: Props) {
	const IconSwitcher = useMemo(() => {
		switch (type) {
			case "down":
				return <Minus className="size-2" />;

			case "up":
				return <Plus className="size-2" />;

			case "extra":
				return <AlertTriangle className="size-2" />;

			default:
				return <div />;
		}
	}, [type]);

	const ColorSwitcher = useMemo(() => {
		switch (type) {
			case "down":
				return "btn-info";

			case "up":
				return "btn-error";

			case "extra":
				return "btn-success";

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
			{IconSwitcher}
			{text}
		</button>
	);
}
