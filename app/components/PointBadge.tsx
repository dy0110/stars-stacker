import { Minus, Plus, ShieldAlert } from "lucide-react";
import { useMemo } from "react";

type Props = {
	type: "up" | "down" | "extra";
	text: string;
};

export function PointBadge({ type, text }: Props) {
	const IconSwitcher = useMemo(() => {
		switch (type) {
			case "down":
				return <Minus className="size-3" />;

			case "up":
				return <Plus className="size-3" />;

			case "extra":
				return <ShieldAlert className="size-3" />;

			default:
				return <div />;
		}
	}, [type]);

	const BadgeSwitcher = useMemo(() => {
		switch (type) {
			case "down":
				return "badge-info";

			case "up":
				return "badge-error";

			case "extra":
				return "badge-success";

			default:
				return "";
		}
	}, [type]);

	return (
		<div className={`badge badge-outline ${BadgeSwitcher}`}>
			{IconSwitcher}
			{text}
		</div>
	);
}
