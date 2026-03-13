/**
 * BrandLogo — monograma "AA" duplo fiel ao logo oficial Artur Malheiros.
 *
 * Estrutura geométrica:
 *  - "A" externo (mais largo): pernas abertas, travessa alta
 *  - "A" interno (mais estreito): centralizado, sobreposto, mesma travessa
 *  - As 4 pernas criam 2 "X" nos flancos, característica marcante do logo
 */
const BrandLogo = () => {
  const gold = "#A8884A"; // ouro fosco/envelhecido — pedido do cliente
  const sw = 5.2;         // espessura do traço

  // Coordenadas dos dois "A" sobrepostos dentro de um viewBox 80×66
  // A externo (maior, atrás):  ápice em (40, 2), base em (4, 64) e (76, 64)
  // A interno (menor, frente): ápice em (40, 10), base em (16, 64) e (64, 64)
  // Travessa compartilhada na altura ~y=42

  return (
    <div className="flex items-center gap-3 md:gap-4 select-none">
      {/* ── Monograma SVG ── */}
      <svg
        viewBox="0 0 80 68"
        role="img"
        aria-label="Monograma AA — Artur Malheiros"
        className="h-9 w-auto md:h-11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ─── A externo (pernas abertas) ─── */}
        {/* perna esquerda externa */}
        <line x1="4"  y1="66" x2="40" y2="2"  stroke={gold} strokeWidth={sw} strokeLinecap="round" />
        {/* perna direita externa */}
        <line x1="76" y1="66" x2="40" y2="2"  stroke={gold} strokeWidth={sw} strokeLinecap="round" />

        {/* ─── A interno (mais estreito, ápice no mesmo ponto) ─── */}
        {/* perna esquerda interna */}
        <line x1="18" y1="66" x2="40" y2="12" stroke={gold} strokeWidth={sw} strokeLinecap="round" />
        {/* perna direita interna */}
        <line x1="62" y1="66" x2="40" y2="12" stroke={gold} strokeWidth={sw} strokeLinecap="round" />

        {/* ─── Travessa única que corta os dois "A" ─── */}
        <line x1="14" y1="43" x2="66" y2="43" stroke={gold} strokeWidth={sw} strokeLinecap="round" />
      </svg>

      {/* ── Tipografia ── */}
      <div className="leading-[1.1]">
        <div
          className="uppercase font-body font-medium tracking-[0.28em] text-[11px] md:text-[12px]"
          style={{ color: gold }}
        >
          Artur
        </div>
        <div
          className="uppercase font-body font-semibold tracking-[0.28em] text-[13px] md:text-[15px]"
          style={{ color: gold }}
        >
          Malheiros
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
