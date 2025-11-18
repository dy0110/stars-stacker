import type { RefObject } from "react";
import { PointButton, type Props as PointButtonProps } from "./PointButton";

export const Points: {
	type: PointButtonProps["type"];
	text: PointButtonProps["text"];
}[] = [
	{
		type: "up",
		text: "BP Up",
	},
	{
		type: "down",
		text: "BP Down",
	},
	{
		type: "up",
		text: "BP 100",
	},
	{
		type: "up",
		text: "BP 200",
	},
	{
		type: "up",
		text: "BP 300",
	},
	{
		type: "down",
		text: "BP 100",
	},
	{
		type: "down",
		text: "BP 200",
	},
	{
		type: "down",
		text: "BP 300",
	},
	{
		type: "extra",
		text: "Extra BP",
	},
];

type Props = {
	ref: RefObject<HTMLDialogElement | null>;
};

export function BattlePointModal({ ref }: Props) {
	return (
		<dialog ref={ref} className="modal">
			<div className="modal-box">
				<h3 className="text-lg font-bold">ステータスを選択</h3>
				<p className="py-4">ステータスを選択してください</p>
				<div className="flex flex-wrap gap-1">
					{Points.map((point) => (
						<PointButton key={point.text} {...point} />
					))}
				</div>
				<div className="modal-action">
					<button
						type="button"
						className="btn"
						onClick={() => ref.current?.close()}
					>
						閉じる
					</button>
				</div>
			</div>
			<form method="dialog" className="modal-backdrop">
				{/** biome-ignore lint/a11y/useButtonType: <daisyuiのお約束なのでtypeは付けない> */}
				<button>close</button>
			</form>
		</dialog>
	);
}
