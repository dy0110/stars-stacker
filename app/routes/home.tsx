import {
	ExternalLink,
	Palette,
	RefreshCw,
	Sparkle,
	SquarePen,
	TrendingUp,
	Users,
} from "lucide-react";

export const meta = () => {
	return [
		{ title: "Stars Stacker" },
		{ name: "description", content: "Welcome to Stars Stacker" },
	];
};

export default function Home() {
	return (
		<div className="container mx-auto px-4 py-12">
			<div className="mx-auto">
				{/* Hero Section */}
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<Sparkle className="w-24 h-24 text-primary" />
					</div>
					<h1 className="text-5xl mb-4">Stars Stacker</h1>
					<p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
						UCG盤面管理ツール
					</p>
					<button type="button" className="btn btn-primary btn-wide">
						<SquarePen className="size-5" />
						開始
					</button>
				</div>

				{/* Features */}
				<div className="grid md:grid-cols-4 gap-4 mb-12">
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

					<div className="card shadow-sm">
						<div className="pt-6 card-body">
							<Palette className="w-12 h-12 text-slate-400 mb-4 mx-auto" />
							<h3 className="text-center mb-2">カラー・テーマ</h3>
							<p className="text-center text-sm text-gray-600 dark:text-gray-400">
								設定ドロワーから3つのヒーローテーマ（レッド、シルバー、エンジェント）を選択でき、アクセシブルなカラー設定も可能です。
							</p>
						</div>
					</div>
				</div>

				<div className="flex justify-center gap-4">
					<button type="button" className="btn btn-link btn-secondary ">
						<ExternalLink className="size-5" />
						利用規約
					</button>
				</div>
			</div>
		</div>
	);
}
