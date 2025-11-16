import { type RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export const useOutsideClick = (
	ref: RefObject<HTMLElement | null>,
	handler: () => void,
) => {
	useEffect(() => {
		const listener = (event: Event) => {
			// ref.currentが存在しない、またはクリックされた要素がref.current内にある場合は何もしない
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			handler();
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
};

// export default useOutsideClick;
