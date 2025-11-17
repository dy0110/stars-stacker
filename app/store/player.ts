import { map } from "nanostores";
import type { BoredState } from "./type";

export const $player = map<BoredState>({
	cards: [
		[{ type: null, point: null }],
		[{ type: null, point: null }],
		[{ type: null, point: null }],
	],
});
