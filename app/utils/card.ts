import type { CardContent } from "~/store/type";

export function calculateCardPoints(content: CardContent) {
	if (!content) {
		return { point: 0, type: null, hasExtra: false };
	}

	const result = content.reduce(
		(acc, item) => {
			if (!item.point) {
				return acc;
			}

			if (item.type === "extra") {
				acc.hasExtra = true;
			}

			const pointMatch = item.point.match(/\d+/);
			const pointValue = pointMatch ? Number(pointMatch[0]) : 0;
			if (Number.isNaN(pointValue)) {
				return acc;
			}

			if (item.type === "up") {
				acc.point += pointValue;
			} else if (item.type === "down") {
				acc.point -= pointValue;
			}

			return acc;
		},
		{ point: 0, hasExtra: false },
	);

	if (result.hasExtra) {
		return { point: result.point, type: "extra" as const, hasExtra: true };
	}

	if (result.point === 0) {
		return { point: 0, type: null, hasExtra: false };
	}

	return result.point > 0
		? { point: result.point, type: "up" as const, hasExtra: false }
		: { point: result.point, type: "down" as const, hasExtra: false };
}
