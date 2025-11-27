import type { WritableAtom } from "nanostores";
import {
	resetCard,
	updateCardCategory,
	updateCardEffect,
	updateCardPoint,
} from "~/store/actions";
import type { BoredState } from "~/store/type";
import { CardSlot } from "./CardSlot";

type Props = {
	state: BoredState;
	store: WritableAtom<BoredState>;
	position: "top" | "bottom";
};

export function BoardSection({ state, store, position }: Props) {
	return (
		<div className="flex gap-4 px-4 w-full">
			{state.map((item, index) => (
				<CardSlot
					content={item.points}
					categories={item.categories}
					// biome-ignore lint/suspicious/noArrayIndexKey: <index使うしかない>
					key={index}
					index={index}
					position={position}
					effect={item.effect}
					onClickPoint={(type, text) => {
						if (type === "bp_up" || type === "bp_down") {
							updateCardEffect(store, index, type);
						} else {
							updateCardPoint(store, index, type, text);
						}
					}}
					onClickCategory={(category) => {
						updateCardCategory(store, index, category);
					}}
					onReset={() => {
						resetCard(store, index);
					}}
				/>
			))}
		</div>
	);
}
