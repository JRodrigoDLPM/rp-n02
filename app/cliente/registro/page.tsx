import Link from "next/link";

export default function ClienteRegistroPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white px-4 py-4 sm:px-8">
        <Link href="/" className="text-sm font-semibold text-[var(--brand)]">
          ← ProConnect
        </Link>
      </header>
      <div className="mx-auto max-w-md px-4 py-16">
        <h1 className="text-2xl font-bold text-slate-900">Crea tu cuenta</h1>
        <p className="mt-2 text-sm text-slate-600">Registro simplificado para clientes (solo UI).</p>
        <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <label className="block text-sm font-medium text-slate-700">
            Nombre completo
            <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Correo
            <input type="email" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Contraseña
            <input type="password" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" />
          </label>
          <button type="button" className="w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700">
            Continuar con Google (UI)
          </button>
          <label className="flex items-start gap-2 text-xs text-slate-600">
            <input type="checkbox" className="mt-0.5" defaultChecked />
            Acepto términos y aviso de privacidad.
          </label>
          <Link
            href="/cliente"
            className="block w-full rounded-xl bg-[var(--brand)] py-3 text-center text-sm font-bold text-white hover:bg-[var(--brand-muted)]"
          >
            Entrar al panel (demo)
          </Link>
        </div>
      </div>
    </div>
  );
}
