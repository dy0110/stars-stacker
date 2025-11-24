import { useStore } from "@nanostores/react";
import { RefreshCcw } from "lucide-react";
import { useMemo } from "react";
import type { Category } from "~/constant/point";
import { useCategoryItem } from "~/hooks/useCategoryItem";
import { $mode } from "~/store/mode";

type Props = {
	position: "top" | "bottom";
	categories: Category[];
	mergePoint: {
		point: number;
		type: string | null;
	};
	onReset?: () => void;
};

export function CardStatus({
	categories,
	position,
	mergePoint,
	onReset,
}: Props) {
	const { IconSwitcher } = useCategoryItem();
	const mode = useStore($mode);

	const pontColorSwitcher = useMemo(() => {
		switch (mergePoint.type) {
			case "down":
				return "badge-[#4a90e2] text-[#4a90e2]";

			case "up":
				return "badge-[#e50914] text-[#e50914]";

			case "extra":
				return "badge-success ";

			default:
				return "";
		}
	}, [mergePoint.type]);

	return (
		<div
			className={`${position === "bottom" ? "" : "rotate-180"} py-1 border border-base-300 w-full rounded-lg flex flex-wrap items-center justify-center gap-1 relative min-h-8 h-auto ${mode === "dark" ? "bg-base-300" : ""}`}
		>
			{mergePoint.point !== 0 ? (
				<div className={`badge ${pontColorSwitcher} badge-outline badge-sm`}>
					{mergePoint.point > 0 ? "+" : ""}
					{mergePoint.point}
				</div>
			) : null}
			{categories.map((category, index) => {
				let badgeColor = "";
				switch (category.type) {
					case "BASIC":
						badgeColor = "";
						break;
					case "SPEED":
						badgeColor = "badge-info";
						break;
					case "POWER":
						badgeColor = "badge-error";
						break;
					case "ARMED":
						badgeColor = "badge-success";
						break;
					case "HAZARD":
					case "DEVASTATION":
					case "INVASION":
					case "METEO":
						badgeColor = "badge-accent";
						break;
				}

				return (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className={`badge ${badgeColor} badge-outline badge-sm`}
					>
						{IconSwitcher(category.type)}
						{category.text}
					</div>
				);
			})}
			<div
				className="tooltip tooltip-bottom absolute top-0 right-0"
				data-tip="カードの状態をリフレッシュ"
			>
				<button
					type="button"
					className="btn btn-circle size-5 btn-ghost "
					onClick={onReset}
				>
					<RefreshCcw className="size-4" />
				</button>
			</div>
		</div>
	);
}
