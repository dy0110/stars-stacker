import { map } from "nanostores";
import { initialItem } from "~/constant/bored";
import type { BoredState } from "./type";

export const $player = map<BoredState>([
	{ ...initialItem, points: [...initialItem.points], effect: null },
	{ ...initialItem, points: [...initialItem.points], effect: null },
	{ ...initialItem, points: [...initialItem.points], effect: null },
]);
