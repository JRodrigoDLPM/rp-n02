import Link from "next/link";
import { categories } from "@/lib/mock-data";

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--brand)] text-sm font-bold text-white">
            PC
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">ProConnect</span>
        </Link>
        <nav className="hidden flex-1 justify-center gap-1 md:flex lg:gap-2">
          {categories.slice(0, 5).map((c) => (
            <Link
              key={c.slug}
              href={`/#categorias`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-[var(--brand)]"
            >
              {c.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/proveedor/registro"
            className="hidden rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[var(--brand)] hover:text-[var(--brand)] sm:inline-flex"
          >
            Soy proveedor
          </Link>
          <Link
            href="/cliente/registro"
            className="rounded-lg bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-muted)]"
          >
            Registrarme
          </Link>
          <Link
            href="/cliente"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:text-[var(--brand)]"
          >
            Entrar
          </Link>
        </div>
      </div>
    </header>
  );
}
