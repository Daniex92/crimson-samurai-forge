import { motion } from "framer-motion";

const tenets = [
  { kanji: "義", word: "Honor", desc: "Respondemos al código, no a la multitud." },
  { kanji: "勇", word: "Coraje", desc: "Carga contra la tormenta. Dudar es perder." },
  { kanji: "忠", word: "Lealtad", desc: "Hermandad forjada en píxeles y sangre." },
  { kanji: "克", word: "Disciplina", desc: "Entrenar hasta que la precisión sea instinto." },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid gap-16 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <div className="mb-4 flex items-center gap-3 font-display text-xs uppercase tracking-[0.4em] text-blood">
              <span className="h-px w-8 bg-blood" /> 01 — El Código
            </div>
            <h2 className="font-display text-4xl font-bold uppercase leading-tight text-foreground sm:text-5xl">
              Forjados en <span className="text-blood text-glow-soft">sombra.</span><br />
              Unidos por <span className="text-blood text-glow-soft">sangre.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              SAMURAI-BS no es un equipo. Es una hermandad — una sect­a de guerreros
              competitivos que tratan cada partida como un duelo. No entramos a jugar.
              Entramos a dominar.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 border-l-2 border-blood pl-4 py-2">
              <span className="font-brush text-xl text-blood/80">
                "El camino del guerrero se encuentra en la muerte."
              </span>
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              — Hagakure
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px border border-blood/20 bg-blood/10 sm:grid-cols-2">
              {tenets.map((t, i) => (
                <motion.div
                  key={t.word}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative overflow-hidden bg-background/90 p-8 transition-all hover:bg-blood/5"
                >
                  <div className="font-brush text-7xl text-blood/30 transition-all group-hover:text-blood/60 group-hover:text-glow-soft">
                    {t.kanji}
                  </div>
                  <div className="mt-3 font-display text-lg font-bold uppercase tracking-[0.2em] text-foreground">
                    {t.word}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-blood transition-all duration-500 group-hover:w-full group-hover:shadow-blood-sm" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
