import {
	index,
	layout,
	type RouteConfig,
	route,
} from "@react-router/dev/routes";

export default [
	layout("layouts/default.tsx", [
		index("routes/home.tsx"),
		route("/terms", "routes/terms.tsx"),
		route("/board", "routes/board.tsx"),
	]),
] satisfies RouteConfig;
