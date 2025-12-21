import {
	ExternalLink,
	RefreshCw,
	SquarePen,
	TrendingUp,
	Users,
} from "lucide-react";
import { useNavigate } from "react-router";
import { $path } from "safe-routes";

export const meta = () => {
	return [
		{ title: "Stars Stacker" },
		{ name: "description", content: "ホームのページ" },
	];
};

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="container mx-auto px-4 py-12">
			<div className="mx-auto">
				{/* Hero Section */}
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<img
							src="/icon.svg"
							alt="Stars Stacker Logo"
							className="h-40 w-auto drop-shadow-xl"
						/>
					</div>
					<h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-base-content to-base-content/60">
						Stars Stacker
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
						UCG盤面管理ツール
					</p>
					<div className="flex items-center justify-center gap-4 mb-4">
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => navigate($path("/board"))}
						>
							<SquarePen className="size-5" />
							開始
						</button>
						<button
							type="button"
							className="btn btn-primary btn-outline"
							onClick={() => navigate($path("/terms"))}
						>
							<ExternalLink className="size-5" />
							利用規約
						</button>
					</div>
					<p className="text-xs text-gray-600 dark:text-gray-400">
						※本アプリの利用を開始することで利用規約に同意したものとみなします
					</p>
				</div>

				{/* Features */}
				<div className="grid md:grid-cols-3 gap-4 mb-12">
					<div className="card shadow-sm">
						<div className="pt-6 card-body">
							<Users className="w-12 h-12 text-blue-hero mb-4 mx-auto" />
							<h3 className="text-center mb-2">ラウンド管理</h3>
							<p className="text-center text-sm text-gray-600 dark:text-gray-400">
								ラウンドごとにカード枠が自動的に追加されます。画面右側の「追加」ボタンで新しいラウンドを開始できます。
							</p>
						</div>
					</div>

					<div className="card shadow-sm">
						<div className="pt-6 card-body">
							<TrendingUp className="w-12 h-12 text-red-hero mb-4 mx-auto" />
							<h3 className="text-center mb-2">BP操作</h3>
							<p className="text-center text-sm text-gray-600 dark:text-gray-400">
								BPの上げ下げ、グレードアップ、グレードダウンなど、BPの変化を記録できます。
							</p>
						</div>
					</div>

					<div className="card shadow-sm">
						<div className="pt-6 card-body">
							<RefreshCw className="w-12 h-12 text-ancient-hero mb-4 mx-auto" />
							<h3 className="text-center mb-2">先行/後攻切替</h3>
							<p className="text-center text-sm text-gray-600 dark:text-gray-400">
								中央の「先行」または「後攻」ボタンで、自分と相手の順番を切り替えられます。
							</p>
						</div>
					</div>

					{/* <div className="card shadow-sm">
						<div className="pt-6 card-body">
							<Palette className="w-12 h-12 text-slate-400 mb-4 mx-auto" />
							<h3 className="text-center mb-2">カラー・テーマ</h3>
							<p className="text-center text-sm text-gray-600 dark:text-gray-400">
								設定ドロワーから3つのヒーローテーマ（レッド、シルバー、エンジェント）を選択でき、アクセシブルなカラー設定も可能です。
							</p>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}
