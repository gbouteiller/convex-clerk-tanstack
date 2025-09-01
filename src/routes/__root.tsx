/// <reference types="vite/client" />

import { ClerkProvider } from "@clerk/tanstack-react-start";
import { createRootRouteWithContext, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import type { ConvexHttpClient } from "convex/browser";
import type { ConvexReactClient } from "convex/react";
import type { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import appCss from "@/styles/app.css?url";

export const Route = createRootRouteWithContext<{ convex: ConvexReactClient; convexServer: ConvexHttpClient }>()({
	head: () => ({
		meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "TanStack Start Starter" }],
		links: [{ rel: "stylesheet", href: appCss }],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: PropsWithChildren) {
	return (
		<ClerkProvider>
			<html lang="en">
				<head>
					<HeadContent />
				</head>
				<body>
					<header className="p-2 border-b-1">
						<Button variant="ghost">
							<Link to="/">Home</Link>
						</Button>
						<Button variant="ghost">
							<Link to="/admin">Admin</Link>
						</Button>
					</header>
					<main className="p-10">{children}</main>
					<Scripts />
				</body>
			</html>
		</ClerkProvider>
	);
}
