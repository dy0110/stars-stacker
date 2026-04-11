import { useMemo, useState } from "react";
import {
	Categories,
	type Category,
	Levels,
	Points,
	ZettonPoints,
} from "~/constant/point";
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
		type: "up" | "down" | "extra" | "bp_up" | "bp_down" | "zetton",
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
	const [activeTab, setActiveTab] = useState<
		"BP" | "Grade" | "属性" | "レベル" | "ゼットン"
	>("BP");

	const mergePoint = useMemo(() => {
		return calculateCardPoints(content);
	}, [content]);

	const borderStyle = useMemo(() => {
		if (effect === "bp_up") {
			return `ring-2 ${Theme.border.bpUp}`;
		}
		if (effect === "bp_down") {
			return `ring-2 ${Theme.border.bpDown}`;
		}
		if (mergePoint.type === "extra") {
			return `ring-2 ${Theme.border.extra}`;
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
				className={`flex flex-col w-full aspect-2/3 rounded-lg shadow-sm bg-base-300 ${borderStyle} overflow-hidden`}
			>
				<div
					className={`flex overflow-x-auto no-scrollbar w-full ${position === "bottom" ? "order-last" : ""}`}
				>
					{(["BP", "Grade", "属性", "レベル", "ゼットン"] as const).map(
						(tabName) => (
							<button
								key={tabName}
								type="button"
								className={`tab flex-1 whitespace-nowrap min-w-max px-2 py-1 text-xs font-semibold
								${activeTab === tabName ? "bg-base-100 opacity-100" : "opacity-60 hover:opacity-100"}
								${position === "bottom" ? "rounded-b-none" : "rounded-t-none"}
								${position === "bottom" && activeTab !== tabName ? "border-t border-base-300" : ""}
								${position === "top" && activeTab !== tabName ? "border-b border-base-300" : ""}
							`}
								onClick={() => setActiveTab(tabName)}
							>
								<div className={`${position === "bottom" ? "" : "rotate-180"}`}>
									{tabName}
								</div>
							</button>
						),
					)}
				</div>

				<div className="flex-1 bg-base-100 p-0.5 relative overflow-hidden">
					<div
						className={`flex items-center justify-center h-full w-full flex-wrap gap-1 overflow-y-scroll absolute inset-0 p-1 ${position === "bottom" ? "" : "rotate-180"}`}
					>
						{activeTab === "BP" &&
							Points.filter((p) => ["up", "down"].includes(p.type)).map(
								(point, pointIndex) => {
									const count = content?.filter(
										(c) => c.type === point.type && c.point === point.text,
									).length;
									return (
										<PointButton
											key={`${point.text}_${index}_${pointIndex}_bp`}
											{...point}
											onClick={onClickPoint}
											count={count}
										/>
									);
								},
							)}

						{activeTab === "Grade" &&
							Points.filter((p) =>
								["bp_up", "bp_down", "extra"].includes(p.type),
							).map((point, pointIndex) => {
								const count = content?.filter(
									(c) => c.type === point.type && c.point === point.text,
								).length;
								return (
									<PointButton
										key={`${point.text}_${index}_${pointIndex}_grade`}
										{...point}
										onClick={onClickPoint}
										count={count}
										size="btn-sm"
									/>
								);
							})}

						{activeTab === "属性" &&
							Categories.map((category, categoryIndex) => (
								<CategoryButton
									key={`${category.text}_${index}_${categoryIndex}`}
									{...category}
									onClick={() => onClickCategory?.(category)}
								/>
							))}

						{activeTab === "レベル" &&
							Levels.map((level, levelIndex) => (
								<CategoryButton
									key={`${level.text}_${index}_${levelIndex}`}
									{...level}
									onClick={() => onClickCategory?.(level)}
								/>
							))}

						{activeTab === "ゼットン" &&
							ZettonPoints.map((point, pointIndex) => {
								const count = content?.filter(
									(c) => c.type === point.type && c.point === point.text,
								).length;
								return (
									<PointButton
										key={`${point.text}_${index}_${pointIndex}_zetton`}
										{...point}
										onClick={onClickPoint}
										count={count}
									/>
								);
							})}
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
