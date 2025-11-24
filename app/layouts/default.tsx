import { Settings } from "lucide-react";
import { Outlet } from "react-router";

export default function Layout() {
	return (
		<div className="h-screen w-screen absolute" data-theme="garden">
			<button
				type="button"
				className="absolute top-2 right-2 btn btn-primary btn-circle btn-ghost"
			>
				<Settings className="w-5 h-5" />
			</button>
			<Outlet />
		</div>
	);
}
