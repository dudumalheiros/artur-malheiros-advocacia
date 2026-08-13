/**
 * Tela exibida quando o Sanity ainda não foi conectado. Serve de lembrete
 * do que falta, em vez de deixar a rota estourando erro 500.
 */
export function StudioSetupNotice() {
  return (
    <main className="min-h-screen bg-navy-deep flex items-center justify-center px-4 py-16">
      <div className="max-w-lg">
        <h1 className="font-display text-2xl font-bold text-gold-light mb-3">
          Painel ainda não conectado
        </h1>
        <div className="w-12 h-px bg-gold mb-5" />
        <p className="font-body text-gold-light/70 text-sm leading-relaxed mb-6">
          Crie um projeto em{" "}
          <a
            href="https://sanity.io/manage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-4"
          >
            sanity.io/manage
          </a>{" "}
          e defina estas variáveis de ambiente (no <code>.env.local</code> para
          rodar local, e em Settings → Environment Variables na Vercel para
          produção):
        </p>
        <pre className="bg-navy border border-gold/20 rounded-lg p-4 text-xs text-gold-light/80 overflow-x-auto">
          {`NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production`}
        </pre>
        <p className="font-body text-gold-light/50 text-xs leading-relaxed mt-6">
          Enquanto isso, o restante do site funciona normalmente — a página de
          artigos apenas aparece vazia.
        </p>
      </div>
    </main>
  );
}
