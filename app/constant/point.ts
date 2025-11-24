import type { CardContent } from "~/store/type";

export type Category =
	| {
			type: "BASIC";
			text: "基本";
	  }
	| {
			type: "POWER";
			text: "剛力";
	  }
	| {
			type: "SPEED";
			text: "敏速";
	  }
	| {
			type: "ARMED";
			text: "武装";
	  }
	| {
			type: "HAZARD";
			text: "災禍";
	  }
	| {
			type: "DEVASTATION";
			text: "壊滅";
	  }
	| {
			type: "INVASION";
			text: "侵略";
	  }
	| {
			type: "METEO";
			text: "メテオ";
	  };

export const Categories: Category[] = [
	{
		type: "BASIC",
		text: "基本",
	},
	{
		type: "POWER",
		text: "剛力",
	},
	{
		type: "SPEED",
		text: "敏速",
	},
	{
		type: "ARMED",
		text: "武装",
	},
	{
		type: "HAZARD",
		text: "災禍",
	},
	{
		type: "DEVASTATION",
		text: "壊滅",
	},
	{
		type: "INVASION",
		text: "侵略",
	},
	{
		type: "METEO",
		text: "メテオ",
	},
];

export const Points: {
	type: NonNullable<CardContent[number]["type"]> | "bp_up" | "bp_down";
	text: string;
}[] = [
	{
		type: "bp_up",
		text: "BP Up",
	},
	{
		type: "bp_down",
		text: "BP Down",
	},
	{
		type: "up",
		text: "BP 1000",
	},
	{
		type: "up",
		text: "BP 2000",
	},
	{
		type: "up",
		text: "BP 3000",
	},
	{
		type: "down",
		text: "BP 1000",
	},
	{
		type: "down",
		text: "BP 2000",
	},
	{
		type: "down",
		text: "BP 3000",
	},
	{
		type: "extra",
		text: "Extra BP",
	},
];
