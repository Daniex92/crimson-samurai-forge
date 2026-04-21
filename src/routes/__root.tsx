import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-blood text-glow">404</h1>
        <h2 className="mt-4 font-display text-xl uppercase tracking-[0.3em] text-foreground">Sendero Perdido en la Sombra</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Esta ruta ha caído ante la hoja.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-blood/60 bg-blood/10 px-8 py-3 font-display text-sm uppercase tracking-[0.25em] text-foreground shadow-blood-sm transition-all hover:bg-blood/30 hover:shadow-blood"
          >
            Volver al Dōjō
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
      { title: "SAMURAI-BS — Clan de Blood Strike · Honor. Sangre. Victoria." },
      { name: "description", content: "SAMURAI-BS — Clan competitivo élite de Blood Strike. Battle Royale, Multijugador y torneos. Únete a la hermandad." },
      { name: "author", content: "SAMURAI-BS" },
      { property: "og:title", content: "SAMURAI-BS — Clan de Blood Strike" },
      { property: "og:description", content: "Clan competitivo de Blood Strike. Disciplina. Dominio. Hermandad." },
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
