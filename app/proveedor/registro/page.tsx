import Link from "next/link";

export default function ProveedorRegistroPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white px-4 py-4 sm:px-8">
        <Link href="/" className="text-sm font-semibold text-[var(--brand)]">
          ← ProConnect
        </Link>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Alta de proveedor</h1>
        <p className="mt-2 text-sm text-slate-600">
          Completa tu perfil para revisión. No hay backend: todo es demostración.
        </p>

        <div className="mt-10 space-y-10">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Acceso</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Correo
                <input type="email" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="tu@empresa.com" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Contraseña
                <input type="password" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" />
              </label>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Continuar con Google (UI)
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Datos generales</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Nombre completo
                <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Teléfono
                <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" />
              </label>
              <label className="sm:col-span-2 block text-sm font-medium text-slate-700">
                Categorías
                <select className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm">
                  <option>Legal</option>
                  <option>Contabilidad</option>
                  <option>Ingeniería</option>
                  <option>Arquitectura</option>
                </select>
              </label>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Documentos</h2>
            <p className="mt-1 text-sm text-slate-500">Cédula profesional, identificación, carta poder (arrastra archivos — UI).</p>
            <div className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 py-12 text-sm text-slate-500">
              Arrastra PDF o imágenes aquí
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Datos fiscales</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                RFC
                <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Régimen fiscal
                <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" />
              </label>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Pagos</h2>
            <p className="text-sm text-slate-500">Conecta una cuenta para recibir liquidaciones (simulado).</p>
            <button type="button" className="mt-4 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white">
              Conectar pasarela (mock)
            </button>
          </section>

          <label className="flex items-start gap-3 text-sm text-slate-600">
            <input type="checkbox" className="mt-1" defaultChecked />
            Acepto términos del marketplace y la política de comisiones (demo).
          </label>

          <Link
            href="/proveedor/estado"
            className="block w-full rounded-2xl bg-[var(--brand)] py-4 text-center text-sm font-bold text-white shadow-md hover:bg-[var(--brand-muted)]"
          >
            Enviar solicitud
          </Link>
        </div>
      </div>
    </div>
  );
}
