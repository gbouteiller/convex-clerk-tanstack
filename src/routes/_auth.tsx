import { useAuth } from "@clerk/tanstack-react-start";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ConvexProviderWithClerk } from "convex/react-clerk";

export const Route = createFileRoute("/_auth")({
	component: RouteComponent,
});

function RouteComponent() {
	const { convex } = Route.useRouteContext();
	return (
		<ConvexProviderWithClerk client={convex} useAuth={useAuth}>
			<Outlet />
		</ConvexProviderWithClerk>
	);
}
