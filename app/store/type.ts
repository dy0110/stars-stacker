import type { Category } from "~/constant/point";

export type CardContent = {
	type: "up" | "down" | "extra" | null;
	point: string | null;
}[];

export type BoredState = {
	points: CardContent;
	category: Category | null;
}[];

export type Mode = "light" | "dark";
