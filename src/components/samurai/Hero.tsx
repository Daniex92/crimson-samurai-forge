import { motion } from "framer-motion";
import oniMask from "@/assets/oni-mask.png";
import { EmberField } from "./EmberField";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <EmberField count={30} />

      {/* Scanning red line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blood to-transparent shadow-blood-sm animate-scan" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        {/* Kanji line */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 flex items-center gap-4 font-display text-xs uppercase tracking-[0.5em] text-blood/80"
        >
          <span className="h-px w-12 bg-blood/50" />
          <span>武士道 · BUSHIDŌ</span>
          <span className="h-px w-12 bg-blood/50" />
        </motion.div>

        {/* Mask */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 animate-blood-pulse">
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, oklch(0.62 0.27 25 / 0.55), transparent 60%)" }}
            />
          </div>
          <img
            src={oniMask}
            alt="SAMURAI-BS oni demon mask logo with glowing red eyes"
            width={520}
            height={347}
            className="relative w-[280px] sm:w-[360px] md:w-[460px] animate-mask-glow animate-flicker mix-blend-screen"
            style={{ filter: "drop-shadow(0 0 30px oklch(0.55 0.24 25 / 0.7))" }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="-mt-8 sm:-mt-12 font-brush text-6xl leading-none sm:text-8xl md:text-[10rem] text-glow"
          style={{ color: "oklch(0.62 0.26 25)" }}
        >
          SAMURAI<span className="text-foreground/80">-</span>BS
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 font-display text-base uppercase tracking-[0.4em] text-foreground/70 sm:text-lg"
        >
          Honor. <span className="text-blood text-glow-soft">Blood.</span> Victory.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#join"
            className="group relative overflow-hidden border border-blood bg-blood/20 px-10 py-4 font-display text-sm uppercase tracking-[0.3em] text-foreground shadow-blood-sm transition-all hover:bg-blood/40 hover:shadow-blood"
          >
            <span className="relative z-10">Join the Clan</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blood/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#tournaments"
            className="group relative border border-foreground/30 bg-background/40 px-10 py-4 font-display text-sm uppercase tracking-[0.3em] text-foreground backdrop-blur-sm transition-all hover:border-blood hover:text-blood hover:shadow-blood-sm"
          >
            View Tournaments
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-20 grid w-full max-w-2xl grid-cols-3 gap-px border border-blood/20 bg-blood/10"
        >
          {[
            { v: "47", l: "Tournaments Won" },
            { v: "120+", l: "Active Warriors" },
            { v: "2018", l: "Forged In" },
          ].map((s) => (
            <div key={s.l} className="bg-background/80 px-4 py-5 backdrop-blur-sm">
              <div className="font-display text-2xl font-bold text-blood text-glow-soft sm:text-3xl">{s.v}</div>
              <div className="mt-1 font-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
