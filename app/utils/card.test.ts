import { describe, expect, it } from "vitest";
import type { CardContent } from "~/store/type";
import { calculateCardPoints } from "./card";

describe("calculateCardPoints", () => {
	it("空のコンテンツの場合は0ポイントを返すこと", () => {
		const content: CardContent = [];
		const result = calculateCardPoints(content);
		expect(result).toEqual({ point: 0, type: null, hasExtra: false });
	});

	it("単一の'up'アイテムのポイントを計算できること", () => {
		const content: CardContent = [{ type: "up", point: "1000" }];
		const result = calculateCardPoints(content);
		expect(result).toEqual({ point: 1000, type: "up", hasExtra: false });
	});

	it("単一の'down'アイテムのポイントを計算できること", () => {
		const content: CardContent = [{ type: "down", point: "1000" }];
		const result = calculateCardPoints(content);
		expect(result).toEqual({ point: -1000, type: "down", hasExtra: false });
	});

	it("複数のポイントを正しく合算できること", () => {
		const content: CardContent = [
			{ type: "up", point: "1000" },
			{ type: "up", point: "2000" },
			{ type: "down", point: "500" },
		];
		const result = calculateCardPoints(content);
		expect(result).toEqual({ point: 2500, type: "up", hasExtra: false });
	});

	it("'extra'タイプを正しく処理できること", () => {
		const content: CardContent = [
			{ type: "up", point: "1000" },
			{ type: "extra", point: "Extra" },
		];
		const result = calculateCardPoints(content);
		expect(result).toEqual({ point: 1000, type: "extra", hasExtra: true });
	});

	it("無効なポイント文字列を持つアイテムを無視すること", () => {
		const content: CardContent = [
			{ type: "up", point: "1000" },
			{ type: "up", point: "invalid" },
		];
		const result = calculateCardPoints(content);
		expect(result).toEqual({ point: 1000, type: "up", hasExtra: false });
	});

	it("合計ポイントが負の場合、タイプ'down'を返すこと", () => {
		const content: CardContent = [
			{ type: "up", point: "1000" },
			{ type: "down", point: "2000" },
		];
		const result = calculateCardPoints(content);
		expect(result).toEqual({ point: -1000, type: "down", hasExtra: false });
	});
});
