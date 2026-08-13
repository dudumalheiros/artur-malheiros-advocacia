import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-navy-deep flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-display text-6xl font-bold text-gold mb-4">404</p>
        <h1 className="font-display text-2xl font-bold text-gold-light mb-3">
          Página não encontrada
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mb-5" />
        <p className="font-body text-gold-light/60 text-sm mb-8">
          O endereço que você acessou não existe ou foi movido.
        </p>
        <Button variant="gold" asChild>
          <Link href="/">Voltar ao início</Link>
        </Button>
      </div>
    </main>
  );
}
