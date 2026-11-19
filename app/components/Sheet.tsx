import type { ReactNode } from "react";

export const TOTAL_FOLHAS = 6;

const zonasH = ["1", "2", "3", "4", "5", "6", "7", "8"];
const zonasV = ["A", "B", "C", "D", "E", "F"];

// Uma folha do jogo de pranchas: margem em traço grosso, zonas nas bordas
// e a etiqueta da folha no canto inferior direito.
export default function Sheet({
  id,
  folha,
  titulo,
  tone = "paper",
  className = "",
  carimbo,
  children,
}: {
  id: string;
  folha: number;
  titulo: string;
  tone?: "paper" | "purple";
  className?: string;
  carimbo?: ReactNode;
  children: ReactNode;
}) {
  const purple = tone === "purple";
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titulo`}
      className={`relative px-2 py-2 sm:px-4 sm:py-4 ${purple ? "bg-purple text-white" : ""}`}
    >
      <div
        className={`relative border-2 ${purple ? "border-purple-ink/70" : "border-ink"} ${className}`}
      >
        {/* Zonas da margem (só em telas largas) */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 -top-px hidden h-4 -translate-y-full grid-cols-8 lg:grid ${purple ? "text-purple-ink/70" : "text-ink-soft"}`}
        >
          {zonasH.map((z) => (
            <span
              key={z}
              className="field-label flex items-end justify-center border-l border-current/30 pb-0.5 first:border-l-0"
            >
              {z}
            </span>
          ))}
        </div>
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 -left-px hidden w-4 -translate-x-full grid-rows-6 lg:grid ${purple ? "text-purple-ink/70" : "text-ink-soft"}`}
        >
          {zonasV.map((z) => (
            <span
              key={z}
              className="field-label flex items-center justify-end border-t border-current/30 pr-1 first:border-t-0"
            >
              {z}
            </span>
          ))}
        </div>

        {children}

        {/* Etiqueta da folha */}
        <div
          className={`flex flex-wrap items-stretch justify-end border-t-2 ${purple ? "border-purple-ink/70" : "border-ink"}`}
        >
          {carimbo && (
            <div
              className={`flex basis-full flex-wrap sm:basis-auto sm:border-l-2 ${purple ? "border-purple-ink/70" : "border-ink"}`}
            >
              {carimbo}
            </div>
          )}
          <div
            className={`flex items-center gap-3 px-4 py-2 sm:border-l-2 ${carimbo ? "max-sm:border-t-2" : "border-l-2"} ${purple ? "border-purple-ink/70" : "border-ink"}`}
          >
            <span className="field-label opacity-70">{titulo}</span>
          </div>
          <div
            className={`flex items-center gap-2 border-l-2 px-4 py-2 ${carimbo ? "max-sm:border-t-2" : ""} ${purple ? "border-purple-ink/70" : "border-ink"}`}
          >
            <span className="field-label opacity-70">Folha</span>
            <span className="text-sm font-bold tabular-nums">
              {String(folha).padStart(2, "0")}/{String(TOTAL_FOLHAS).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
