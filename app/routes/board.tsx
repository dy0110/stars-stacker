import { Plus, Repeat2 } from "lucide-react";
import { CardSlot } from "../components/CardSlot";

export const meta = () => {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
};

export default function Board() {
	return (
		<div className="flex flex-col justify-center items-center overflow-x-auto no-scrollbar h-[calc(100%-40px)]">
			<div className="flex items-center">
				<p className="text-lg">後攻</p>
			</div>
			<div className="flex gap-2 p-4 w-full">
				<CardSlot bgColor="bg-white" cardColor="bg-red-400" position="top" />
				<CardSlot bgColor="bg-white" cardColor="bg-red-400" position="top" />
				<CardSlot bgColor="bg-white" cardColor="bg-red-400" position="top" />
				<CardSlot bgColor="bg-white" cardColor="bg-red-400" position="top" />
				<CardSlot bgColor="bg-white" cardColor="bg-red-400" position="top" />
			</div>
			<div className="flex justify-between items-center gap-2 px-4 w-full">
				<div className="tooltip tooltip-right" data-tip="先攻/後攻の交代">
					<button type="button" className="btn btn-circle btn-primary btn-sm">
						<Repeat2 className="size-4" />
					</button>
				</div>
				<div className="flex-glow bg-primary h-5 w-full rounded-4xl"></div>
				<div className="tooltip tooltip-left" data-tip="ラウンド追加">
					<button type="button" className="btn btn-circle btn-primary btn-sm">
						<Plus className="size-4" />
					</button>
				</div>
			</div>
			<div className="flex gap-2 p-4 w-full">
				<CardSlot bgColor="bg-white" cardColor="bg-red-400" position="bottom" />
				<CardSlot bgColor="bg-white" cardColor="bg-red-400" position="bottom" />
				<CardSlot bgColor="bg-white" cardColor="bg-red-400" position="bottom" />
				<CardSlot bgColor="bg-white" cardColor="bg-red-400" position="bottom" />
				<CardSlot bgColor="bg-white" cardColor="bg-red-400" position="bottom" />
			</div>
			<div className="flex items-center">
				<p className="text-lg">先攻</p>
			</div>
		</div>
	);
}
