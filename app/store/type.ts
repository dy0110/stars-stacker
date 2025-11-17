export type BoredState = {
	cards: { type: "up" | "down" | "extra" | null; point: string | null }[][];
};

export type Mode = "light" | "dark";
