import { AlertTriangle, Minus, Plus } from "lucide-react";
import { useMemo } from "react";

export type Props = {
	type: "up" | "down" | "extra" | "bp_up" | "bp_down";
	text: string;
	onClick?: (
		type: "up" | "down" | "extra" | "bp_up" | "bp_down",
		text: string,
	) => void;
	count?: number;
};

export function PointButton({ type, text, onClick, count }: Props) {
	const IconSwitcher = useMemo(() => {
		switch (type) {
			case "down":
			case "bp_down":
				return <Minus className="size-2" />;

			case "up":
			case "bp_up":
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
			case "bp_down":
				return "border-[#4a90e2] text-[#4a90e2] hover:bg-[#4a90e2] hover:text-white active:bg-[#4a90e2] active:text-white";

			case "up":
			case "bp_up":
				return "border-[#e50914] text-[#e50914] hover:bg-[#e50914] hover:text-white active:bg-[#e50914] active:text-white";

			case "extra":
				return "btn-success hover:text-white active:text-white";

			default:
				return "";
		}
	}, [type]);

	return (
		<button
			type="button"
			className={`btn btn-xs rounded-full ${ColorSwitcher} btn-outline text-[8px] relative`}
			onClick={() => {
				onClick?.(type, text);
			}}
		>
			{IconSwitcher}
			{text}
			{count && count > 0 ? (
				<div className="badge badge-sm badge-neutral absolute -top-2 -right-2 size-4 p-0 text-[8px]">
					{count}
				</div>
			) : null}
		</button>
	);
}
