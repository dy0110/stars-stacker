import { useMemo } from "react";
import { Categories, type Category, Points } from "~/constant/point";
import { Theme } from "~/constant/theme";
import type { CardContent } from "~/store/type";
import { calculateCardPoints } from "~/utils/card";
import { CardStatus } from "./CardStatus";
import { CategoryButton } from "./CategoryButton";
import { PointButton } from "./PointButton";

type Props = {
	content: CardContent;
	position: "top" | "bottom";
	index: number;
	categories: Category[];
	onClickPoint?: (
		type: "up" | "down" | "extra" | "bp_up" | "bp_down",
		text: string,
	) => void;
	onClickCategory?: (category: Category) => void;
	effect: "bp_up" | "bp_down" | null;
	onReset?: () => void;
};

export function CardSlot({
	position,
	content,
	index,
	categories,
	onClickPoint,
	onClickCategory,
	effect,
	onReset,
}: Props) {
	const mergePoint = useMemo(() => {
		return calculateCardPoints(content);
	}, [content]);

	const borderStyle = useMemo(() => {
		if (effect === "bp_up") {
			return `border-2 ${Theme.border.bpUp}`;
		}
		if (effect === "bp_down") {
			return `border-2 ${Theme.border.bpDown}`;
		}
		if (mergePoint.type === "extra") {
			return `border-2 ${Theme.border.extra}`;
		}
		return "";
	}, [effect, mergePoint.type]);

	return (
		<div className="flex flex-col gap-1 relative min-w-36 w-36 sm:min-w-36 md:min-w-40 lg:min-w-42 sm:w-36 md:w-40 lg:w-42">
			{position === "top" && (
				<CardStatus
					mergePoint={mergePoint}
					position={position}
					categories={categories}
					onReset={onReset}
				/>
			)}

			<div
				className={`overflow-x-auto w-full aspect-2/3 rounded-lg shadow-sm bg-base-300 ${borderStyle}`}
			>
				<div
					className={`tabs tabs-box h-full ${position === "bottom" ? "tabs-bottom" : "tabs-top"} tabs-xs sm:tabs-xs md:tabs-sm lg:tabs-md`}
				>
					<input
						type="radio"
						name={`tab_slot_${position}_${index}`}
						className={`tab ${position === "bottom" ? "" : "after:rotate-180"}`}
						aria-label="BP"
						defaultChecked
					/>
					<div className="tab-content bg-base-100 border-base-300 p-0.5">
						<div
							className={`flex items-center justify-center-safe h-full flex-wrap gap-1 overflow-y-scroll ${position === "bottom" ? "" : "rotate-180"}`}
						>
							{Points.map((point, pointIndex) => {
								const count = content?.filter(
									(c) => c.type === point.type && c.point === point.text,
								).length;
								return (
									<PointButton
										key={`${point.text}_${index}_${pointIndex}`}
										{...point}
										onClick={onClickPoint}
										count={count}
									/>
								);
							})}
						</div>
					</div>

					<input
						type="radio"
						name={`tab_slot_${position}_${index}`}
						className={`tab ${position === "bottom" ? "" : "after:rotate-180"}`}
						aria-label="属性"
					/>
					<div className="tab-content bg-base-100 border-base-300 p-1">
						<div
							className={`flex items-center justify-center-safe h-full flex-wrap gap-1 overflow-y-scroll ${position === "bottom" ? "" : "rotate-180"}`}
						>
							{Categories.map((category, categoryIndex) => (
								<CategoryButton
									key={`${category.text}_${index}_${categoryIndex}`}
									{...category}
									onClick={() => onClickCategory?.(category)}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			{position === "bottom" && (
				<CardStatus
					mergePoint={mergePoint}
					position={position}
					categories={categories}
					onReset={onReset}
				/>
			)}
		</div>
	);
}
