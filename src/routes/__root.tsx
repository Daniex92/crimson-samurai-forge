import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-blood text-glow">404</h1>
        <h2 className="mt-4 font-display text-xl uppercase tracking-[0.3em] text-foreground">Path Lost in Shadow</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          This route has fallen by the blade.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-blood/60 bg-blood/10 px-8 py-3 font-display text-sm uppercase tracking-[0.25em] text-foreground shadow-blood-sm transition-all hover:bg-blood/30 hover:shadow-blood"
          >
            Return to Dojo
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SAMURAI-BS — Honor. Blood. Victory." },
      { name: "description", content: "SAMURAI-BS — Elite esports clan forged in shadow. Join the brotherhood of competitive gaming warriors." },
      { name: "author", content: "SAMURAI-BS" },
      { property: "og:title", content: "SAMURAI-BS — Honor. Blood. Victory." },
      { property: "og:description", content: "Elite esports clan. Discipline. Domination. Brotherhood." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Rampart+One&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
