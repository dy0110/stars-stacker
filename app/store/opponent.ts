import { map } from "nanostores";
import type { BoredState } from "./type";

export const $opponent = map<BoredState>({
	cards: [
		[{ type: null, point: null }],
		[{ type: null, point: null }],
		[{ type: null, point: null }],
	],
});
