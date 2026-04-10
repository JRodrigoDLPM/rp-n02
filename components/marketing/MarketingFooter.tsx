import Link from "next/link";

const linkCol = (title: string, links: { href: string; label: string }[]) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</p>
    <ul className="mt-4 space-y-2">
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className="text-sm text-slate-600 hover:text-[var(--brand)]">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export function MarketingFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="border-b border-slate-200 bg-white py-3 text-center text-sm text-slate-600">
        <span className="font-medium text-[var(--brand)]">Verificación ProConnect:</span> credenciales, referencias y
        antecedentes revisados antes de publicar un perfil (demo).
      </div>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)] text-sm font-bold text-white">
                PC
              </span>
              <span className="text-xl font-semibold text-slate-900">ProConnect</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Marketplace corporativo para contratar abogados, contadores, ingenieros y consultores con la confianza de
              un perfil verificado.
            </p>
            <div className="mt-6 flex gap-3">
              {["in", "tw", "ig"].map((s) => (
                <span
                  key={s}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-500"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                App Store
              </span>
              <span className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                Google Play
              </span>
            </div>
          </div>
          {linkCol("Explorar", [
            { href: "/#profesionales", label: "Profesionales" },
            { href: "/#categorias", label: "Categorías" },
            { href: "/cliente/busqueda", label: "Búsqueda avanzada" },
          ])}
          {linkCol("Soporte", [
            { href: "/#faq", label: "FAQ" },
            { href: "/#contacto", label: "Contacto" },
            { href: "/proveedor/registro", label: "Alta proveedor" },
          ])}
          {linkCol("Legal", [
            { href: "/#terminos", label: "Términos" },
            { href: "/#privacidad", label: "Privacidad" },
            { href: "/admin", label: "Admin (demo)" },
          ])}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} ProConnect. Maqueta de demostración.</p>
          <div className="flex gap-6">
            <Link href="/#terminos" className="hover:text-[var(--brand)]">
              Términos
            </Link>
            <Link href="/#privacidad" className="hover:text-[var(--brand)]">
              Privacidad
            </Link>
            <Link href="/#contacto" className="hover:text-[var(--brand)]">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
