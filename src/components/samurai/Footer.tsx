export function Footer() {
  const socials = [
    { name: "Discord", href: "#", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09a.1.1 0 0 0-.07-.03 17.5 17.5 0 0 0-4.27 1.33.07.07 0 0 0-.03.03C2.05 9.42 1.31 13.38 1.67 17.3c0 .02.02.04.03.05a17.7 17.7 0 0 0 5.33 2.7.1.1 0 0 0 .11-.03c.41-.56.78-1.15 1.09-1.78a.1.1 0 0 0-.06-.14c-.58-.22-1.13-.49-1.67-.79a.1.1 0 0 1-.01-.16c.11-.08.22-.17.33-.25a.1.1 0 0 1 .1-.01c3.5 1.6 7.29 1.6 10.75 0a.1.1 0 0 1 .1.01c.11.09.22.17.33.26a.1.1 0 0 1-.01.16c-.53.31-1.09.57-1.67.79a.1.1 0 0 0-.06.14c.32.62.69 1.21 1.09 1.78a.1.1 0 0 0 .11.03c1.92-.59 3.78-1.49 5.33-2.7.02-.01.03-.03.03-.05.43-4.53-.72-8.46-3.06-11.94a.07.07 0 0 0-.03-.03ZM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12 0-1.17.84-2.12 1.89-2.12 1.06 0 1.91.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12Zm6.97 0c-1.03 0-1.89-.95-1.89-2.12 0-1.17.84-2.12 1.89-2.12 1.06 0 1.91.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12Z"/></svg>
    ) },
    { name: "TikTok", href: "#", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M19.6 6.69a4.83 4.83 0 0 1-3.77-4.69h-3.16v12.83a2.91 2.91 0 1 1-2.91-2.91c.16 0 .31.03.46.05v-3.2a6.07 6.07 0 0 0-.46-.02 6.1 6.1 0 1 0 6.1 6.1V9.6a8 8 0 0 0 4.66 1.49V7.94a4.81 4.81 0 0 1-.92-1.25Z"/></svg>
    ) },
    { name: "Instagram", href: "#", icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
    ) },
    { name: "Twitch", href: "#", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M4 2 2.5 6v14h5v3h3l3-3h4l5-5V2H4Zm17 11-3 3h-5l-3 3v-3H6V4h15v9ZM16 7h2v6h-2V7Zm-5 0h2v6h-2V7Z"/></svg>
    ) },
    { name: "YouTube", href: "#", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg>
    ) },
  ];

  return (
    <footer className="relative border-t border-blood/30">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blood to-transparent shadow-blood-sm" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-blood bg-blood/10 text-blood font-display text-base">
                侍
              </span>
              <span className="font-display text-base font-bold uppercase tracking-[0.4em]">
                SAMURAI<span className="text-blood">-BS</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Forged in shadow. Bound by blood. Driven by victory. Walk the path or step aside.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="group flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all hover:border-blood hover:bg-blood/10 hover:text-blood hover:shadow-blood-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-display text-xs uppercase tracking-[0.3em] text-blood">Clan</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                { es: "Hermandad", id: "about" },
                { es: "Guerreros", id: "members" },
                { es: "Torneos", id: "tournaments" },
                { es: "Pergaminos", id: "news" },
              ].map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="transition-colors hover:text-blood">
                    {l.es}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-display text-xs uppercase tracking-[0.3em] text-blood">Recibe los Pergaminos</div>
            <p className="mt-4 text-sm text-muted-foreground">
              Reportes de batalla, drops y alertas de torneo.
            </p>
            <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="guerrero@dojo.io"
                className="w-full border border-border bg-input/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-blood focus:outline-none"
              />
              <button className="border border-l-0 border-blood bg-blood/20 px-4 py-2.5 font-display text-xs uppercase tracking-[0.2em] text-foreground hover:bg-blood/40">
                Unir
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} SAMURAI-BS. Todas las hojas afiladas.</div>
          <div className="font-display uppercase tracking-[0.3em]">名誉 · 血 · 勝利</div>
        </div>
      </div>
    </footer>
  );
}
