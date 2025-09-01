import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ConvexProvider } from "convex/react";

export const Route = createFileRoute("/_public")({
	component: RouteComponent,
});

function RouteComponent() {
	const { convex } = Route.useRouteContext();

	return (
		<ConvexProvider client={convex}>
			<Outlet />
		</ConvexProvider>
	);
}
