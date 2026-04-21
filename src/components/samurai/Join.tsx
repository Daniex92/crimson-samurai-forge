import { motion } from "framer-motion";
import { useState } from "react";

const ranks = ["Bronce", "Plata", "Oro", "Platino", "Diamante", "Maestro", "Leyenda"];
const modes = ["Battle Royale", "Multijugador", "Squad BR", "Sin preferencia"];
const roles = ["Sniper", "Rusher / Asalto", "Soporte / Médico", "IGL / Estratega", "Flex"];

export function Join() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="join" className="relative overflow-hidden py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.55 0.24 25 / 0.12), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3 font-display text-xs uppercase tracking-[0.4em] text-blood">
            <span className="h-px w-8 bg-blood" /> 05 — Alistarse <span className="h-px w-8 bg-blood" />
          </div>
          <h2 className="font-display text-4xl font-bold uppercase leading-tight text-foreground sm:text-5xl">
            Pronuncia el <span className="text-blood text-glow-soft">Juramento.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Presenta tu hoja. El consejo revisa cada solicitud. Los indignos son rechazados.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-12 glass-panel relative p-8 sm:p-10"
        >
          <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-blood" />
          <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-blood" />
          <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-blood" />
          <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-blood" />

          {submitted ? (
            <div className="py-12 text-center">
              <div className="font-brush text-6xl text-blood text-glow">✦</div>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-wider text-foreground">
                Juramento Recibido
              </h3>
              <p className="mt-3 text-muted-foreground">
                El consejo recorre el camino. Vigila tu correo — el juicio llega en 7 días.
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              <Field label="Nombre de Guerrero" name="username">
                <input
                  required
                  name="username"
                  placeholder="kurosawa_47"
                  className="w-full border border-border bg-input/60 px-4 py-3 font-display text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-blood focus:bg-input focus:outline-none focus:shadow-blood-sm"
                />
              </Field>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Juego Principal" name="game">
                  <select
                    required
                    name="game"
                    className="w-full appearance-none border border-border bg-input/60 px-4 py-3 font-display text-foreground transition-all focus:border-blood focus:outline-none focus:shadow-blood-sm"
                  >
                    {["Valorant", "CS2", "Apex Legends", "Rainbow Six", "Otro"].map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Rango Actual" name="rank">
                  <select
                    required
                    name="rank"
                    className="w-full appearance-none border border-border bg-input/60 px-4 py-3 font-display text-foreground transition-all focus:border-blood focus:outline-none focus:shadow-blood-sm"
                  >
                    {ranks.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Tag de Discord" name="discord">
                <input
                  required
                  name="discord"
                  placeholder="guerrero#0001"
                  className="w-full border border-border bg-input/60 px-4 py-3 font-display text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-blood focus:bg-input focus:outline-none focus:shadow-blood-sm"
                />
              </Field>

              <Field label="¿Por qué buscas la hoja?" name="exp">
                <textarea
                  required
                  name="exp"
                  rows={4}
                  placeholder="Cuenta tus pruebas, tus victorias, tu hambre..."
                  className="w-full resize-none border border-border bg-input/60 px-4 py-3 font-display text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-blood focus:bg-input focus:outline-none focus:shadow-blood-sm"
                />
              </Field>

              <button
                type="submit"
                className="group relative mt-2 overflow-hidden border border-blood bg-blood/20 px-10 py-4 font-display text-sm uppercase tracking-[0.3em] text-foreground shadow-blood-sm transition-all hover:bg-blood/40 hover:shadow-blood"
              >
                <span className="relative z-10">Pronunciar Juramento</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blood/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, children }: { label: string; name: string; children: React.ReactNode }) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-2 flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.3em] text-blood">
        <span className="h-px w-3 bg-blood" /> {label}
      </span>
      {children}
    </label>
  );
}
