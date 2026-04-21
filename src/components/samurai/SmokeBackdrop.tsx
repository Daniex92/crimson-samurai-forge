import dragonBg from "@/assets/dragon-bg.jpg";

export function SmokeBackdrop({ intensity = "medium" }: { intensity?: "light" | "medium" | "heavy" }) {
  const opacity = intensity === "heavy" ? 0.18 : intensity === "light" ? 0.06 : 0.10;
  return (
    <>
      {/* Dragon pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${dragonBg})`, opacity, mixBlendMode: "screen" }}
      />
      {/* Smoke layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-1/4 top-0 h-[60vh] w-[80vw] rounded-full blur-3xl animate-smoke"
          style={{ background: "radial-gradient(circle, oklch(0.45 0.22 25 / 0.25), transparent 60%)" }}
        />
        <div
          className="absolute -right-1/4 bottom-0 h-[60vh] w-[80vw] rounded-full blur-3xl animate-smoke"
          style={{
            background: "radial-gradient(circle, oklch(0.55 0.24 25 / 0.20), transparent 60%)",
            animationDelay: "-7s",
          }}
        />
      </div>
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-vignette" />
      {/* Scanline grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0, transparent 2px, oklch(0.62 0.27 25 / 0.04) 2px, oklch(0.62 0.27 25 / 0.04) 3px)",
        }}
      />
    </>
  );
}
