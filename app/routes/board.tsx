import { useStore } from "@nanostores/react";
import { Eye, EyeOff, Plus, Repeat2, RotateCcw } from "lucide-react";
import { useState } from "react";
import { addRound, resetBoard } from "~/store/actions";
import { $mode } from "~/store/mode";
import { $opponent } from "~/store/opponent";
import { $player } from "~/store/player";
import { BoardSection } from "../components/BoardSection";

export const meta = () => {
	return [
		{ title: "Stars Stacker" },
		{ name: "description", content: "ボードのページ" },
	];
};

export default function Board() {
	const [isFirst, setIsFirst] = useState(true);
	const [isOpponentVisible, setIsOpponentVisible] = useState(false);
	const player = useStore($player);
	const opponent = useStore($opponent);

	const mode = useStore($mode);

	return (
		<div className="overflow-x-auto no-scrollbar h-screen w-full">
			<div className="flex flex-col justify-center items-center min-w-full w-fit px-24 h-full">
				{isOpponentVisible && (
					<>
						<div className="flex items-center">
							<p
								className={`text-lg rotate-180 ${mode === "dark" ? "text-white" : "text-neutral"}`}
							>
								{!isFirst ? "先攻" : "後攻"}
							</p>
						</div>
						<BoardSection state={opponent} store={$opponent} position="top" />
					</>
				)}

				<div className="flex justify-between items-center gap-2 px-4 py-1 w-full">
					<div
						className="tooltip tooltip-right"
						data-tip={isOpponentVisible ? "相手を非表示" : "相手を表示"}
					>
						<button
							type="button"
							className="btn btn-circle btn-primary btn-sm"
							onClick={() => setIsOpponentVisible(!isOpponentVisible)}
						>
							{isOpponentVisible ? (
								<Eye className="size-4" />
							) : (
								<EyeOff className="size-4" />
							)}
						</button>
					</div>
					<div className="tooltip tooltip-right" data-tip="先攻/後攻の交代">
						<button
							type="button"
							className="btn btn-circle btn-primary btn-sm"
							onClick={() => {
								setIsFirst(!isFirst);
							}}
						>
							<Repeat2 className="size-4" />
						</button>
					</div>
					<div className="flex-glow bg-primary h-5 w-full rounded-4xl"></div>
					<div className="tooltip tooltip-left" data-tip="ラウンド追加">
						<button
							type="button"
							className="btn btn-circle btn-primary btn-sm"
							onClick={() => {
								addRound($player, $opponent);
							}}
						>
							<Plus className="size-4" />
						</button>
					</div>
					<div className="tooltip tooltip-left" data-tip="盤面リセット">
						<button
							type="button"
							className="btn btn-circle btn-error btn-sm"
							onClick={() => {
								resetBoard($player, $opponent);
							}}
						>
							<RotateCcw className="size-4" />
						</button>
					</div>
				</div>

				<BoardSection state={player} store={$player} position="bottom" />

				<div className="flex items-center">
					<p
						className={`text-lg ${mode === "dark" ? "text-white" : "text-neutral"}`}
					>
						{isFirst ? "先攻" : "後攻"}
					</p>
				</div>
			</div>
		</div>
	);
}
