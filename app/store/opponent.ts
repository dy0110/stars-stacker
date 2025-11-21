import { map } from "nanostores";
import type { BoredState } from "./type";

const initialItem: BoredState[number] = {
	points: [{ type: null, point: null }],
	category: null,
};

export const $opponent = map<BoredState>([
	initialItem,
	initialItem,
	initialItem,
]);
