import { motion } from "framer-motion";

type Status = "Activo" | "Próximo" | "Finalizado";

const tournaments: { title: string; game: string; date: string; prize: string; status: Status; place?: string }[] = [
  { title: "Copa Carmesí VII", game: "Valorant", date: "12 May, 2026", prize: "$25,000", status: "Activo" },
  { title: "Duelo del Shōgun", game: "CS2", date: "03 Jun, 2026", prize: "$40,000", status: "Próximo" },
  { title: "Bloodmoon Open", game: "Apex Legends", date: "21 Jul, 2026", prize: "$15,000", status: "Próximo" },
  { title: "Liga Katana de Hierro", game: "Valorant", date: "08 Mar, 2026", prize: "$30,000", status: "Finalizado", place: "1°" },
  { title: "Invitacional Onryō", game: "Rainbow Six", date: "14 Feb, 2026", prize: "$18,000", status: "Finalizado", place: "2°" },
  { title: "Copa Kage II", game: "CS2", date: "27 Ene, 2026", prize: "$22,000", status: "Finalizado", place: "1°" },
];

const statusStyle: Record<Status, string> = {
  Activo: "border-blood bg-blood/20 text-blood animate-blood-pulse",
  Próximo: "border-foreground/40 bg-foreground/5 text-foreground",
  Finalizado: "border-muted-foreground/30 bg-muted text-muted-foreground",
};

export function Tournaments() {
  return (
    <section id="tournaments" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 font-display text-xs uppercase tracking-[0.4em] text-blood">
              <span className="h-px w-8 bg-blood" /> 03 — La Arena
            </div>
            <h2 className="font-display text-4xl font-bold uppercase text-foreground sm:text-5xl">
              Batallas y <span className="text-blood text-glow-soft">Conquistas</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Las arenas donde derramamos sangre. Cada estandarte cuenta una historia de dominio.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden border border-border glass-panel glass-panel-hover p-6"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-12 w-12">
                <div className="absolute right-0 top-0 h-px w-12 bg-blood/50" />
                <div className="absolute right-0 top-0 h-12 w-px bg-blood/50" />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {t.game}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold uppercase text-foreground transition-colors group-hover:text-blood">
                    {t.title}
                  </h3>
                </div>
                <span
                  className={`shrink-0 border px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.2em] ${statusStyle[t.status]}`}
                >
                  {t.status}
                </span>
              </div>

              <div className="mt-8 flex items-end justify-between border-t border-border pt-4">
                <div>
                  <div className="font-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {t.status === "Finalizado" ? "Resultado" : "Premio"}
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold text-blood text-glow-soft">
                    {t.status === "Finalizado" ? `${t.place} — ${t.prize}` : t.prize}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Fecha
                  </div>
                  <div className="mt-1 font-display text-sm text-foreground">{t.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
