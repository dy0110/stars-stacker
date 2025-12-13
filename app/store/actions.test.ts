import { atom } from "nanostores";
import { describe, expect, it } from "vitest";
import { initialItem } from "~/constant/bored";
import {
	addRound,
	resetBoard,
	resetCard,
	updateCardCategory,
	updateCardEffect,
	updateCardPoint,
} from "./actions";
import type { BoredState } from "./type";

describe("Store Actions", () => {
	const createStore = (initialState: BoredState) => atom(initialState);

	const defaultState: BoredState = [
		{ ...initialItem, points: [], categories: [] },
		{ ...initialItem, points: [], categories: [] },
		{ ...initialItem, points: [], categories: [] },
	];

	describe("updateCardEffect", () => {
		it("指定したカードのエフェクトを更新できること", () => {
			const store = createStore(defaultState);
			updateCardEffect(store, 1, "bp_up");
			expect(store.get()[1].effect).toBe("bp_up");
			expect(store.get()[0].effect).toBeNull();
		});
	});

	describe("updateCardPoint", () => {
		it("カードにポイントを追加できること", () => {
			const store = createStore(defaultState);
			updateCardPoint(store, 0, "up", "1000");
			expect(store.get()[0].points).toHaveLength(1);
			expect(store.get()[0].points[0]).toEqual({ type: "up", point: "1000" });
		});

		it("すでにExtraポイントが存在する場合は追加しないこと", () => {
			const store = createStore(defaultState);
			updateCardPoint(store, 0, "extra", "Extra");
			updateCardPoint(store, 0, "extra", "Extra 2");
			expect(store.get()[0].points).toHaveLength(1);
			expect(store.get()[0].points[0].point).toBe("Extra");
		});
	});

	describe("updateCardCategory", () => {
		it("カテゴリが存在しない場合は追加すること", () => {
			const store = createStore(defaultState);
			const category = { type: "BASIC", text: "基本" } as const;
			updateCardCategory(store, 0, category);
			expect(store.get()[0].categories).toHaveLength(1);
			expect(store.get()[0].categories[0]).toEqual(category);
		});

		it("カテゴリがすでに存在する場合は削除すること", () => {
			const category = { type: "BASIC", text: "基本" } as const;
			const stateWithCategory = JSON.parse(JSON.stringify(defaultState));
			stateWithCategory[0].categories = [category];
			const store = createStore(stateWithCategory);

			updateCardCategory(store, 0, category);
			expect(store.get()[0].categories).toHaveLength(0);
		});
	});

	describe("resetCard", () => {
		it("指定したカードを初期状態にリセットすること", () => {
			const modifiedState = JSON.parse(JSON.stringify(defaultState));
			modifiedState[0].points = [{ type: "up", point: "1000" }];
			modifiedState[0].effect = "bp_up";
			const store = createStore(modifiedState);

			resetCard(store, 0);
			expect(store.get()[0].points).toHaveLength(1);
			expect(store.get()[0].points[0]).toEqual({ type: null, point: null });
			expect(store.get()[0].effect).toBeNull();
		});
	});

	describe("resetBoard", () => {
		it("プレイヤーと対戦相手のすべてのカードをリセットすること", () => {
			const playerStore = createStore(defaultState);
			const opponentStore = createStore(defaultState);

			updateCardPoint(playerStore, 0, "up", "1000");
			updateCardPoint(opponentStore, 1, "down", "500");

			resetBoard(playerStore, opponentStore);

			expect(playerStore.get()[0].points).toHaveLength(1);
			expect(opponentStore.get()[1].points).toHaveLength(1);
		});
	});

	describe("addRound", () => {
		it("両方のストアに新しいラウンド（カード）を追加すること", () => {
			const playerStore = createStore(defaultState);
			const opponentStore = createStore(defaultState);

			addRound(playerStore, opponentStore);

			expect(playerStore.get()).toHaveLength(4);
			expect(opponentStore.get()).toHaveLength(4);
		});
	});
});
