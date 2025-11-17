import { ArrowUpDown } from "lucide-react";
import { useRef } from "react";
import { BattlePointModal } from "./BattlePointModal";

type Props = {
	position: "top" | "bottom";
};

export function CardSlot({ position }: Props) {
	const modalRef = useRef<HTMLDialogElement>(null);
	return (
		<div className="flex flex-col gap-1">
			{position === "top" && (
				<div className="tooltip" data-tip="BPの操作">
					<button
						type="button"
						className="btn btn-primary btn-block"
						onClick={() => modalRef.current?.showModal()}
					>
						<ArrowUpDown />
					</button>
				</div>
			)}

			<div
				className={`w-16 sm:w-20 md:w-24 lg:w-32 aspect-2/3 rounded-lg shadow-sm relative bg-base-300`}
			>
				{/* BP Controls - only show on hover */}
				{/* <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-1 bg-black/10 rounded-lg"> */}
				{/* <Button
						size="icon"
						variant="secondary"
						className="h-8 w-8"
						onClick={() => handleBPClick("up")}
					>
						<Plus className="w-4 h-4" />
					</Button>
					<Button
						size="icon"
						variant="secondary"
						className="h-8 w-8"
						onClick={() => handleBPClick("down")}
					>
						<Minus className="w-4 h-4" />
					</Button>
					<Button
						size="icon"
						variant="secondary"
						className="h-8 w-8"
						onClick={() => handleBPClick("fixed")}
					>
						<Equal className="w-4 h-4" />
					</Button> */}
				{/* </div> */}
			</div>

			{position === "bottom" && (
				<div className="tooltip tooltip-bottom " data-tip="BPの操作">
					<button
						type="button"
						className="btn btn-primary btn-block"
						onClick={() => modalRef.current?.showModal()}
					>
						<ArrowUpDown />
					</button>
				</div>
			)}

			<BattlePointModal ref={modalRef} />
		</div>
	);
}
