import type { RefObject } from "react";
import { PointBadge } from "./PointBadge";

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
					<PointBadge type="up" text="BP Up" />
					<PointBadge type="up" text="BP 100" />
					<PointBadge type="up" text="BP 200" />
					<PointBadge type="up" text="BP 300" />
					<PointBadge type="down" text="BP Down" />
					<PointBadge type="down" text="BP 100" />
					<PointBadge type="down" text="BP 200" />
					<PointBadge type="down" text="BP 300" />
					<PointBadge type="extra" text="Extra BP" />
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
		</dialog>
	);
}
