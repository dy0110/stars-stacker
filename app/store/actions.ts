import type { WritableAtom } from "nanostores";
import { initialItem } from "~/constant/bored";
import type { Category } from "~/constant/point";
import type { BoredState } from "./type";

export function updateCardEffect(
	store: WritableAtom<BoredState>,
	index: number,
	effect: "bp_up" | "bp_down",
) {
	const currentState = store.get();
	store.set(
		currentState.map((item, itemIndex) => {
			if (itemIndex !== index) {
				return item;
			}
			return {
				...item,
				effect,
			};
		}),
	);
}

export function updateCardPoint(
	store: WritableAtom<BoredState>,
	index: number,
	type: "up" | "down" | "extra",
	text: string,
) {
	const currentState = store.get();
	store.set(
		currentState.map((item, itemIndex) => {
			if (itemIndex !== index) {
				return item;
			}

			if (type === "extra" && item.points.some((p) => p.type === "extra")) {
				return item;
			}

			return {
				...item,
				points: [
					...item.points.filter((p) => p.type !== null || p.point !== null),
					{ type, point: text },
				],
			};
		}),
	);
}

export function updateCardCategory(
	store: WritableAtom<BoredState>,
	index: number,
	category: Category,
) {
	const currentState = store.get();
	store.set(
		currentState.map((item, itemIndex) => {
			if (itemIndex !== index) {
				return item;
			}
			const isExist = item.categories.some((c) => c.type === category.type);
			return {
				...item,
				categories: isExist
					? item.categories.filter((c) => c.type !== category.type)
					: [...item.categories, category],
			};
		}),
	);
}

export function resetCard(store: WritableAtom<BoredState>, index: number) {
	const currentState = store.get();
	store.set(
		currentState.map((item, itemIndex) => {
			if (itemIndex !== index) {
				return item;
			}
			return {
				...initialItem,
				points: [...initialItem.points],
				categories: [],
			};
		}),
	);
}

export function resetBoard(
	playerStore: WritableAtom<BoredState>,
	opponentStore: WritableAtom<BoredState>,
) {
	const resetState = () => [
		{
			...initialItem,
			points: [...initialItem.points],
			categories: [],
		},
		{
			...initialItem,
			points: [...initialItem.points],
			categories: [],
		},
		{
			...initialItem,
			points: [...initialItem.points],
			categories: [],
		},
	];
	playerStore.set(resetState());
	opponentStore.set(resetState());
}

export function addRound(
	playerStore: WritableAtom<BoredState>,
	opponentStore: WritableAtom<BoredState>,
) {
	const createNextState = (currentState: BoredState) => {
		const resetItems = currentState.map(() => ({
			...initialItem,
			points: initialItem.points.map((p) => ({ ...p })),
		}));
		const newItem = {
			...initialItem,
			points: initialItem.points.map((p) => ({ ...p })),
		};
		return [...resetItems, newItem];
	};

	playerStore.set(createNextState(playerStore.get()));
	opponentStore.set(createNextState(opponentStore.get()));
}
