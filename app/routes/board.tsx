import { useStore } from "@nanostores/react";
import { Plus, Repeat2 } from "lucide-react";
import { useCallback, useState } from "react";
import { initialItem } from "~/constant/bored";
import { $opponent } from "~/store/opponent";
import { $player } from "~/store/player";
import type { BoredState } from "~/store/type";
import { CardSlot } from "../components/CardSlot";

export const meta = () => {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
};

export default function Board() {
	const [isFirst, setIsFirst] = useState(true);
	const player = useStore($player);
	const opponent = useStore($opponent);

	const createNextState = useCallback((currentState: BoredState) => {
		const resetItems = currentState.map(() => ({
			...initialItem,
			points: initialItem.points.map((p) => ({ ...p })),
		}));
		const newItem = {
			...initialItem,
			points: initialItem.points.map((p) => ({ ...p })),
		};
		return [...resetItems, newItem];
	}, []);

	return (
		<div className="overflow-x-auto no-scrollbar h-[calc(100%-56px)] w-full">
			<div className="flex flex-col justify-center items-center min-w-full w-fit px-24 h-full">
				<div className="flex items-center">
					<p className="text-lg text-neutral rotate-180">
						{!isFirst ? "先攻（相手）" : "後攻（相手）"}
					</p>
				</div>
				<div className="flex gap-4 px-4 w-full">
					{opponent.map((item, index) => (
						<CardSlot
							content={item.points}
							category={item.category}
							// biome-ignore lint/suspicious/noArrayIndexKey: <index使うしかない>
							key={index}
							index={index}
							position="top"
							effect={item.effect}
							onClickPoint={(type, text) => {
								if (type === "bp_up" || type === "bp_down") {
									$opponent.set(
										opponent.map((pItem, itemIndex) => {
											if (itemIndex !== index) {
												return pItem;
											}
											return {
												...pItem,
												effect: type,
											};
										}),
									);
									return;
								}

								$opponent.set(
									opponent.map((pItem, itemIndex) => {
										if (itemIndex !== index) {
											return pItem;
										}
										return {
											...pItem,
											points: [
												...pItem.points.filter(
													(p) => p.type !== null || p.point !== null,
												),
												{ type: type as "up" | "down" | "extra", point: text },
											],
										};
									}),
								);
							}}
							onClickCategory={(category) => {
								$opponent.set(
									opponent.map((pItem, itemIndex) => {
										if (itemIndex !== index) {
											return pItem;
										}
										return {
											...pItem,
											category,
										};
									}),
								);
							}}
							onReset={() => {
								$opponent.set(
									opponent.map((pItem, itemIndex) => {
										if (itemIndex !== index) {
											return pItem;
										}
										return {
											...initialItem,
											points: [...initialItem.points],
										};
									}),
								);
							}}
						/>
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
						<button
							type="button"
							className="btn btn-circle btn-primary btn-sm"
							onClick={() => {
								$player.set(createNextState(player));
								$opponent.set(createNextState(opponent));
							}}
						>
							<Plus className="size-4" />
						</button>
					</div>
				</div>
				<div className="flex gap-4 px-4 w-full">
					{player.map((item, index) => (
						<CardSlot
							content={item.points}
							category={item.category}
							// biome-ignore lint/suspicious/noArrayIndexKey: <index使うしかない>
							key={index}
							index={index}
							position="bottom"
							effect={item.effect}
							onClickPoint={(type, text) => {
								if (type === "bp_up" || type === "bp_down") {
									$player.set(
										player.map((pItem, itemIndex) => {
											if (itemIndex !== index) {
												return pItem;
											}
											return {
												...pItem,
												effect: type,
											};
										}),
									);
									return;
								}

								$player.set(
									player.map((pItem, itemIndex) => {
										if (itemIndex !== index) {
											return pItem;
										}
										return {
											...pItem,
											points: [
												...pItem.points.filter(
													(p) => p.type !== null || p.point !== null,
												),
												{ type: type as "up" | "down" | "extra", point: text },
											],
										};
									}),
								);
							}}
							onClickCategory={(category) => {
								$player.set(
									player.map((pItem, itemIndex) => {
										if (itemIndex !== index) {
											return pItem;
										}
										return {
											...pItem,
											category,
										};
									}),
								);
							}}
							onReset={() => {
								$player.set(
									player.map((pItem, itemIndex) => {
										if (itemIndex !== index) {
											return pItem;
										}
										return {
											...initialItem,
											points: [...initialItem.points],
										};
									}),
								);
							}}
						/>
					))}
				</div>
				<div className="flex items-center">
					<p className="text-lg text-neutral">
						{isFirst ? "先攻（自分）" : "後攻（自分）"}
					</p>
				</div>
			</div>
		</div>
	);
}
