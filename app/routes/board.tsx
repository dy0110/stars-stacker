import { Plus, Repeat2 } from "lucide-react";
import { useState } from "react";
import { $opponent } from "~/store/opponent";
import { $player } from "~/store/player";
import { CardSlot } from "../components/CardSlot";

export const meta = () => {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
};

export default function Board() {
	const [isFirst, setIsFirst] = useState(true);
	const player = $player.get();
	const opponent = $opponent.get();

	return (
		<div className="flex flex-col justify-center items-center overflow-x-auto no-scrollbar h-[calc(100%-56px)] px-24">
			<div className="flex items-center">
				<p className="text-lg text-neutral rotate-180">
					{!isFirst ? "先攻" : "後攻"}
				</p>
			</div>
			<div className="flex gap-2 px-4 w-full">
				{player.cards.map((card, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <index使うしかない>
					<CardSlot key={index} position="top" />
				))}
			</div>
			<div className="flex justify-between items-center gap-2 px-4 py-1 w-full">
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
					<button type="button" className="btn btn-circle btn-primary btn-sm">
						<Plus className="size-4" />
					</button>
				</div>
			</div>
			<div className="flex gap-2 px-4 w-full">
				{opponent.cards.map((card, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <index使うしかない>
					<CardSlot key={index} position="bottom" />
				))}
			</div>
			<div className="flex items-center">
				<p className="text-lg text-neutral">{isFirst ? "先攻" : "後攻"}</p>
			</div>
		</div>
	);
}
