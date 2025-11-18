export type CardContent = {
	type: "up" | "down" | "extra" | null;
	point: string | null;
}[];

export type BoredState = {
	cards: CardContent[];
};

export type Mode = "light" | "dark";
