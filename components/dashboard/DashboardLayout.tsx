import Link from "next/link";

export function DashboardLayout({
  children,
  nav,
  productName,
  badge,
}: {
  children: React.ReactNode;
  nav: readonly { href: string; label: string }[];
  productName: string;
  badge?: string;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 lg:flex-row">
      <nav className="scrollbar-hide flex gap-1 overflow-x-auto border-b border-slate-200 bg-white px-3 py-2 lg:hidden">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-lg px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-emerald-50 hover:text-[var(--brand)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <aside className="hidden w-60 shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
        <div className="flex h-16 items-center gap-2 border-b border-slate-100 px-5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--brand)] text-xs font-bold text-white">
            PC
          </span>
          <div>
            <p className="text-sm font-bold text-slate-900">ProConnect</p>
            <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">{productName}</p>
          </div>
        </div>
        <nav className="flex-1 space-y-0.5 overflow-y-auto p-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-[var(--brand)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-slate-100 p-4">
          <Link href="/" className="text-xs font-semibold text-slate-500 hover:text-[var(--brand)]">
            ← Volver al sitio
          </Link>
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:h-16 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-slate-900 lg:hidden">ProConnect</span>
            {badge ? (
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-900">{badge}</span>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden text-sm text-slate-500 sm:inline">Cuenta demo</span>
            <div className="h-9 w-9 rounded-full bg-slate-200 ring-2 ring-white" title="Usuario" />
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
