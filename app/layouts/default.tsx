import { Settings } from "lucide-react";
import { Outlet } from "react-router";

export default function Layout() {
	return (
		<div className="h-screen w-screen" data-theme="garden">
			<header className="px-4 py-2">
				<div className="flex flex-row-reverse ">
					<button
						type="button"
						className="btn btn-primary btn-circle btn-ghost"
					>
						<Settings className="w-5 h-5" />
					</button>
				</div>
			</header>
			<Outlet />
		</div>
	);
}
