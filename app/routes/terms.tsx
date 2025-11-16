import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { $path } from "safe-routes";

export const meta = () => {
	return [
		{ title: "Stars Stacker" },
		{ name: "description", content: "利用規約のページ" },
	];
};

export default function Term() {
	const navigate = useNavigate();
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mx-auto">
				<button
					type="button"
					className="btn btn-ghost"
					onClick={() => navigate($path("/"))}
				>
					<MoveLeft className="size-5" />
					ホームに戻る
				</button>

				<div className="card shadow mt-4 overflow-auto h-[760px]">
					<div className="card-body ">
						<h1 className="text-lg bold">Stars Stacker 利用規約</h1>
						<p className="text-sm">最終更新日: 2025年11月16日</p>
						<p>
							本利用規約（以下、「本規約」）は、本サービス（ウルトラマンカードゲームの盤面管理ツール。以下、「本サービス」）の利用条件を定めるものです。
							本サービスを利用した時点で、本規約に同意したものとみなします。
						</p>

						<h2 className="text-lg">第1条（適用）</h2>
						<p>
							1.本規約は、本サービスの利用に関するユーザーと運営者との間の一切に適用されます。
							<br />
							2.運営者は、必要に応じて本規約を改定できます。改定後は、本サービス上に掲載された時点で効力を持つものとします。
						</p>

						<h2 className="text-lg">第2条（禁止事項）</h2>
						<p>
							ユーザーは本サービスの利用にあたり、以下の行為を行ってはなりません。
						</p>
						<ul>
							<li>法令または公序良俗に反する行為</li>
							<li>他者の知的財産権・肖像権・プライバシーを侵害する行為</li>
							<li>不正アクセス・サーバー攻撃・データの書き換え行為</li>
							<li>システムの正常な運営を妨害する行為</li>
							<li>本サービスの一部または全部を無断で再配布・販売する行為</li>
							<li>その他、運営者が不適切と判断する行為</li>
						</ul>

						<h2 className="text-lg">第3条（データ取り扱い）</h2>
						<p>
							1.本サービスは、盤面状態（ラウンド、BP、上昇/下降等）をユーザー端末上で一時的に扱うのみであり、運営者はこれらのデータを保存しません。
							<br />
							2.ユーザー端末の故障、通信状況、ブラウザの仕様等によってデータが消失しても、運営者は責任を負いません。
						</p>

						<h2 className="text-lg">第4条（知的財産）</h2>
						<p>
							1.本サービスのデザイン、構成、プログラム、UI要素等の権利は運営者に帰属します。
							<br />
							2.本サービスはウルトラマンシリーズ公式とは関係なく、関連する著作物のすべての権利は各権利者に帰属します。
						</p>

						<h2 className="text-lg">
							第5条（スクリーンショット・動画利用の許可）
						</h2>
						<p>
							1.ユーザーは、本サービスの画面をキャプチャした画像・動画（以下、「利用素材」）を、SNS投稿、動画コンテンツ、ブログ、配信、個人の創作活動など非営利の範囲で自由に利用できます。
							<br />
							2.利用素材の編集・加工（切り抜き、合成、色調補正等）も自由に行えます。
							<br />
							3.利用素材の公開において、運営者名の表記（クレジット）は任意とします。
							<br />
							4.利用素材に含まれる第三者の著作物（ウルトラマンシリーズのキャラクター等）について、その権利は各権利者に帰属し、利用者の責任において取り扱うものとします。
							<br />
							5.利用素材の利用によりユーザーまたは第三者に損害が発生しても、運営者は責任を負いません。
						</p>

						<h2 className="text-lg">第6条（サービスの変更・停止）</h2>
						<p>
							以下の場合、運営者は事前通知なく本サービスの内容変更または提供停止を行うことがあります。
						</p>
						<ul>
							<li>システム保守・アップデート</li>
							<li> 障害、災害などの不可抗力</li>
							<li>運営継続が困難と判断した場合</li>
						</ul>
						<p>これにより生じた損害について、運営者は責任を負いません。</p>

						<h2 className="text-lg">第7条（免責事項）</h2>
						<p>
							1.本サービスは現状のまま提供され、動作保証、完全性、特定目的への適合性を保証しません。
							<br />
							2.本サービスの利用により生じたいかなる損害についても、運営者は責任を負いません。
						</p>

						<h2 className="text-lg">第8条（準拠法および裁判管轄）</h2>
						<p>
							本規約は日本法に準拠し、本サービスに関して紛争が生じた場合、運営者所在地を管轄する裁判所を専属的合意管轄とします。
						</p>
						<h2 className="text-lg"> 第9条（利用規約の変更）</h2>
						<p>
							本規約は、開発者が必要と判断した場合に、いつでも内容を変更できるものとします。
							変更後の規約は、本アプリ内に表示した時点で効力を生じ、ユーザーが本アプリを継続利用した場合、その変更後の規約に同意したものとみなします。
						</p>

						<div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded">
							<p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
								お問い合わせ
							</p>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								本サービスに関するお問い合わせは、GitHubのIssueよりお願いいたします。
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
