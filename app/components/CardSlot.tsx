import { useMemo } from "react";
import { Categories, type Category, Points } from "~/constant/point";
import type { CardContent } from "~/store/type";
import { CardStatus } from "./CardStatus";
import { CategoryButton } from "./CategoryButton";
import { PointButton } from "./PointButton";

type Props = {
	content: CardContent;
	position: "top" | "bottom";
	index: number;
	category: Category | null;
};

export function CardSlot({ position, content, index, category }: Props) {
	const mergePoint = useMemo(() => {
		if (!content) {
			return { point: 0, type: null };
		}

		const result = content.reduce(
			(acc, item) => {
				if (!item.point) {
					return acc;
				}

				if (item.type === "extra") {
					acc.hasExtra = true;
				}

				const pointValue = Number(item.point);
				if (Number.isNaN(pointValue)) {
					return acc;
				}

				if (item.type === "up") {
					acc.point += pointValue;
				} else if (item.type === "down") {
					acc.point -= pointValue;
				}

				return acc;
			},
			{ point: 0, hasExtra: false },
		);

		if (result.hasExtra) {
			return { point: result.point, type: "extra" };
		}

		return result.point > 0
			? { point: result.point, type: "up" }
			: { point: result.point, type: "down" };
	}, [content]);

	return (
		<div className="flex flex-col gap-1">
			{position === "top" && (
				<CardStatus
					mergePoint={mergePoint}
					position={position}
					category={category}
				/>
			)}

			<div
				className={`overflow-x-auto min-w-30 w-30 sm:min-w-32 md:min-w-36 lg:min-w-40 sm:w-32 md:w-36 lg:w-40 aspect-2/3 rounded-lg shadow-sm bg-base-300 `}
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
					<div className="tab-content bg-base-100 border-base-300 p-1">
						<div
							className={`flex items-center justify-center-safe h-full flex-wrap gap-1 overflow-y-scroll ${position === "bottom" ? "" : "rotate-180"}`}
						>
							{Points.map((point, pointIndex) => (
								<PointButton
									key={`${point.text}_${index}_${pointIndex}`}
									{...point}
								/>
							))}
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
					category={category}
				/>
			)}
		</div>
	);
}
