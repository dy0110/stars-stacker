import { RefreshCcw } from "lucide-react";
import { useMemo } from "react";
import type { Category } from "~/constant/point";
import { useCategoryItem } from "~/hooks/useCategoryItem";

type Props = {
	position: "top" | "bottom";
	category: Category | null;
	mergePoint: {
		point: number;
		type: string | null;
	};
};

export function CardStatus({ category, position, mergePoint }: Props) {
	const { IconSwitcher } = useCategoryItem();
	const categoryColorSwitcher = useMemo(() => {
		switch (category?.type) {
			case "BASIC":
				return "";

			case "SPEED":
				return "badge-info";

			case "POWER":
				return "badge-error";

			case "ARMED":
				return "badge-success";

			case "HAZARD":
			case "DEVASTATION":
			case "INVASION":
			case "METEO":
				return "badge-accent";

			default:
				return "";
		}
	}, [category]);

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
			className={`${position === "bottom" ? "" : "rotate-180"} py-1 border border-base-300 w-full rounded-lg flex items-center justify-center gap-1 relative h-8`}
		>
			{mergePoint.point !== 0 ? (
				<div className={`badge ${pontColorSwitcher} badge-outline badge-sm`}>
					{mergePoint.point}
				</div>
			) : null}
			{category !== null ? (
				<div
					className={`badge ${categoryColorSwitcher} badge-outline badge-sm`}
				>
					{IconSwitcher(category.type)}
					{category.text}
				</div>
			) : null}
			<div
				className="tooltip tooltip-bottom absolute top-0 right-0"
				data-tip="カードの状態をリフレッシュ"
			>
				<button type="button" className="btn btn-circle size-5 btn-ghost ">
					<RefreshCcw className="size-2" />
				</button>
			</div>
		</div>
	);
}
