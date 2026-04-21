import { motion } from "framer-motion";

const news = [
  { date: "Apr 18, 2026", tag: "Victory", title: "SAMURAI-BS claims Iron Katana League crown", body: "Sweeping the finals 3-0 against Reaper Squad, we lifted our 47th major trophy." },
  { date: "Apr 02, 2026", tag: "Roster", title: "AKARI joins the Brotherhood", desc: "Roster", body: "The legendary precision sniper signs a 2-year deal. The clan welcomes a new blade." },
  { date: "Mar 25, 2026", tag: "Drop", title: "New oni-themed merch collection live", body: "Limited run of 300. Hooded warriors only — chains and katanas sold separately." },
  { date: "Mar 11, 2026", tag: "Event", title: "Open Tryouts — Crimson Trial 2026", body: "Apply your blade. Top 8 prospects earn a contract. Trial begins May 1st." },
];

export function News() {
  return (
    <section id="news" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3 font-display text-xs uppercase tracking-[0.4em] text-blood">
            <span className="h-px w-8 bg-blood" /> 04 — The Scrolls <span className="h-px w-8 bg-blood" />
          </div>
          <h2 className="font-display text-4xl font-bold uppercase text-foreground sm:text-5xl">
            News from the <span className="text-blood text-glow-soft">Dojo</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-blood/40 to-transparent md:left-1/2" />

          <div className="space-y-10">
            {news.map((n, i) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>article]:col-start-2" : ""
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 top-3 z-10 h-3 w-3 -translate-x-1/2 rotate-45 border border-blood bg-background shadow-blood-sm md:left-1/2" />

                <article
                  className={`ml-12 md:ml-0 group glass-panel glass-panel-hover p-6 ${
                    i % 2 === 0 ? "md:mr-8 md:text-right" : "md:ml-8"
                  }`}
                >
                  <div className="flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.3em]">
                    <span className="text-blood">{n.tag}</span>
                    <span className="h-px flex-1 bg-border" />
                    <span className="text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold uppercase text-foreground transition-colors group-hover:text-blood">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{n.body}</p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
