const BrandLogo = () => {
  return (
    <div className="flex items-center gap-2.5 md:gap-3.5 select-none">
      <svg
        viewBox="0 0 120 120"
        role="img"
        aria-label="Monograma Artur Malheiros"
        className="h-10 w-10 md:h-12 md:w-12"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(43 40% 78%)" />
            <stop offset="48%" stopColor="hsl(43 55% 55%)" />
            <stop offset="100%" stopColor="hsl(43 42% 66%)" />
          </linearGradient>
        </defs>
        <polygon
          points="60,8 112,108 92,108 76,78 44,78 28,108 8,108"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="8"
          strokeLinejoin="round"
        />
        <polygon
          points="60,32 83,75 37,75"
          fill="url(#goldGradient)"
          opacity="0.28"
        />
        <rect x="48" y="78" width="24" height="8" rx="2" fill="url(#goldGradient)" />
      </svg>

      <div className="leading-[0.95]">
        <div className="font-body text-[10px] md:text-[11px] tracking-[0.22em] text-gold-light/85 uppercase">
          Artur
        </div>
        <div className="font-body text-sm md:text-base tracking-[0.22em] text-gold-light font-semibold uppercase">
          Malheiros
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
