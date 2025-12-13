import { Circle, Triangle } from "lucide-react";
import { useCallback } from "react";

export function useCategoryItem() {
	const IconSwitcher = useCallback((type: string | null) => {
		switch (type) {
			case "BASIC":
			case "POWER":
			case "SPEED":
			case "ARMED":
				return <Circle className="size-3" />;

			case "HAZARD":
			case "DEVASTATION":
			case "INVASION":
			case "METEO":
				return <Triangle className="size-3" />;

			default:
				return "";
		}
	}, []);

	return { IconSwitcher };
}
