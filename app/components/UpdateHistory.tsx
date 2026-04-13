export function UpdateHistory() {
	return (
		<div className="mb-12">
			<h2 className="text-3xl font-bold text-center mb-8">更新履歴</h2>
			<div className="card bg-base-100 shadow-sm border border-base-200">
				<div className="card-body p-4 sm:p-6">
					<div className="max-h-48 overflow-y-auto px-2">
						<ul className="steps steps-vertical w-full">
							<li className="step step-primary" data-content="●">
								<div className="text-left">
									<div className="font-bold">2025/12/21</div>
									<div className="text-sm">サービス公開しました</div>
								</div>
							</li>
							<li className="step step-primary" data-content="●">
								<div className="text-left">
									<div className="font-bold">2025/12/24</div>
									<div className="text-sm">
										更新履歴を追加しました
										<br />
										軽微なバグを修正しました
									</div>
								</div>
							</li>
							<li className="step step-primary" data-content="●">
								<div className="text-left">
									<div className="font-bold">2025/12/25</div>
									<div className="text-sm">OGP画像を設置しました</div>
								</div>
							</li>
							<li className="step step-primary" data-content="●">
								<div className="text-left">
									<div className="font-bold">2026/04/14</div>
									<div className="text-sm">
										BP07-062 ゼットン 起動効果に対応しました
									</div>
								</div>
							</li>
							<li className="step step-primary" data-content="●">
								<div className="text-left">
									<div className="font-bold">2026/04/14</div>
									<div className="text-sm">
										BP07-106 三千万年の奇跡 起動効果に対応しました
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
