import { motion } from "framer-motion";
import p1 from "@/assets/player-1.jpg";
import p2 from "@/assets/player-2.jpg";
import p3 from "@/assets/player-3.jpg";
import p4 from "@/assets/player-4.jpg";

const members = [
  { name: "KUROSAWA", tag: "@kuro_san", role: "Clan Leader", img: p1, kanji: "頭" },
  { name: "AKARI", tag: "@akari_98", role: "Sniper", img: p2, kanji: "弓" },
  { name: "YOKAI", tag: "@yokai_x", role: "Assault", img: p3, kanji: "鬼" },
  { name: "RAIJIN", tag: "@raijin", role: "Strategist", img: p4, kanji: "雷" },
];

export function Members() {
  return (
    <section id="members" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3 font-display text-xs uppercase tracking-[0.4em] text-blood">
            <span className="h-px w-8 bg-blood" /> 02 — The Warriors <span className="h-px w-8 bg-blood" />
          </div>
          <h2 className="font-display text-4xl font-bold uppercase text-foreground sm:text-5xl">
            The <span className="text-blood text-glow-soft">Brotherhood</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Each warrior chosen by trial. Each name etched in victory.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden border border-border bg-background/60 transition-all duration-500 hover:border-blood hover:shadow-blood"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={m.img}
                  alt={`${m.name}, ${m.role} of SAMURAI-BS`}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="h-full w-full object-cover grayscale-[40%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                {/* Red wash on hover */}
                <div className="absolute inset-0 bg-blood/0 mix-blend-overlay transition-all duration-500 group-hover:bg-blood/30" />
                {/* Top gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                {/* Kanji */}
                <div className="absolute right-3 top-3 font-brush text-5xl text-blood/40 transition-all group-hover:text-blood group-hover:text-glow-soft">
                  {m.kanji}
                </div>
                {/* Scan line on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-x-0 top-1/2 h-px bg-blood shadow-blood-sm" />
                </div>
              </div>
              {/* Info */}
              <div className="relative z-10 -mt-20 px-5 pb-5">
                <div className="font-display text-[10px] uppercase tracking-[0.3em] text-blood">
                  {m.role}
                </div>
                <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-wider text-foreground">
                  {m.name}
                </h3>
                <div className="mt-1 text-xs text-muted-foreground">{m.tag}</div>
                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                  <div className="flex gap-1.5">
                    <span className="h-1 w-6 bg-blood" />
                    <span className="h-1 w-3 bg-blood/60" />
                    <span className="h-1 w-2 bg-blood/30" />
                  </div>
                  <span className="font-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Active
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
