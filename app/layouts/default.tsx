import { useStore } from "@nanostores/react";
import { useMediaQuery } from "@react-hookz/web";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { $path } from "safe-routes";
import { $mode } from "~/store/mode";

export default function Layout() {
	const mode = useStore($mode);
	const navigate = useNavigate();
	const isDarkOS = useMediaQuery("(prefers-color-scheme: dark)");

	useEffect(() => {
		if (isDarkOS !== null) {
			$mode.set(isDarkOS ? "dark" : "light");
		}
	}, [isDarkOS]);

	return (
		<div
			className="h-screen w-screen absolute"
			data-theme={mode === "light" ? "garden" : "sunset"}
		>
			<div className="absolute top-2 right-2 z-10 flex items-center gap-2">
				<button
					type="button"
					className="btn btn-link"
					onClick={() => navigate($path("/"))}
				>
					トップに戻る
				</button>
				<label className="flex cursor-pointer gap-2 items-center">
					<Sun className="w-4 h-4" />
					<input
						type="checkbox"
						className="toggle toggle-sm"
						checked={mode === "dark"}
						onChange={(e) => $mode.set(e.target.checked ? "dark" : "light")}
					/>
					<Moon className="w-4 h-4" />
				</label>
			</div>

			<Outlet />
		</div>
	);
}
