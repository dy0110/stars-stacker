import { useStore } from "@nanostores/react";
import { AlertTriangle, Minus, Plus, Zap } from "lucide-react";
import { useMemo } from "react";
import { $mode } from "~/store/mode";

export type Props = {
	type: "up" | "down" | "extra" | "bp_up" | "bp_down" | "zetton";
	text: string;
	onClick?: (
		type: "up" | "down" | "extra" | "bp_up" | "bp_down" | "zetton",
		text: string,
	) => void;
	count?: number;
	size?: "btn-xs" | "btn-sm";
};

export function PointButton({
	type,
	text,
	onClick,
	count,
	size = "btn-xs",
}: Props) {
	const mode = useStore($mode);

	const IconSwitcher = useMemo(() => {
		switch (type) {
			case "down":
			case "bp_down":
				return <Minus className={size === "btn-sm" ? "size-3" : "size-2"} />;

			case "up":
			case "bp_up":
				return <Plus className={size === "btn-sm" ? "size-3" : "size-2"} />;

			case "extra":
				return (
					<AlertTriangle className={size === "btn-sm" ? "size-3" : "size-2"} />
				);

			case "zetton":
				return <Zap className={size === "btn-sm" ? "size-3" : "size-2.5"} />;

			default:
				return <div />;
		}
	}, [type, size]);

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

			case "zetton":
				if (mode === "dark") {
					return "border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white active:bg-[#f5a623] active:text-white";
				}
				return "border-[#f5a623] bg-[#f5a623] text-white hover:bg-[#d48c1a] hover:border-[#d48c1a] active:bg-[#d48c1a] active:border-[#d48c1a]";

			default:
				return "";
		}
	}, [type, mode]);

	return (
		<button
			type="button"
			className={`btn ${size} rounded-full ${ColorSwitcher} ${type === "zetton" && mode !== "dark" ? "" : "btn-outline"} ${size === "btn-sm" ? "" : "text-[8px]"} relative`}
			onClick={() => {
				onClick?.(type, text);
			}}
		>
			{IconSwitcher}
			{type === "zetton" ? text.replace("BP ", "") : text}
			{count && count > 0 && type !== "zetton" ? (
				<div className="badge badge-sm badge-neutral absolute -top-2 -right-1 size-4 p-0 text-[8px] z-10">
					{count}
				</div>
			) : null}
		</button>
	);
}
