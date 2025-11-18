import { ArrowUpDown } from "lucide-react";
import { useMemo, useRef } from "react";
import { Categories } from "~/constant/point";
import type { CardContent } from "~/store/type";
import { BattlePointModal, Points } from "./BattlePointModal";
import { CategoryButton } from "./CategoryButton";
import { PointButton } from "./PointButton";

type Props = {
	content: CardContent;
	position: "top" | "bottom";
	index: number;
};

export function CardSlot({ position, content, index }: Props) {
	const pointModalRef = useRef<HTMLDialogElement>(null);
	const items = useMemo(
		() => content.filter((item) => item.type === null && item.point === null),
		[content],
	);

	return (
		<div className="flex flex-col gap-1">
			{/* {position === "top" && (
				<div className="tooltip" data-tip="BPの操作">
					<button
						type="button"
						className="btn btn-primary btn-block btn-sm"
						onClick={() => pointModalRef.current?.showModal()}
					>
						<ArrowUpDown />
						BP
					</button>
				</div>
			)} */}

			<div
				className={`overflow-x-auto sm:w-32 md:w-36 lg:w-40 aspect-2/3 rounded-lg shadow-sm relative bg-base-300 `}
			>
				<div
					className={`tabs tabs-box h-full ${position === "bottom" ? "tabs-bottom" : "tabs-top"} sm:tabs-xs tabs-md`}
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
							{Points.map((point) => (
								<PointButton key={point.text} {...point} />
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
							{Categories.map((category) => (
								<CategoryButton key={category.text} {...category} />
							))}
						</div>
					</div>
				</div>
			</div>
			{/* 
			{position === "bottom" && (
				<div className="tooltip tooltip-bottom " data-tip="BPの操作">
					<button
						type="button"
						className="btn btn-primary btn-block btn-sm"
						onClick={() => pointModalRef.current?.showModal()}
					>
						<ArrowUpDown />
						BP
					</button>
				</div>
			)} */}

			<BattlePointModal ref={pointModalRef} />
		</div>
	);
}
