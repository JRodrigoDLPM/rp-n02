export default function ClientePerfilPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Tu perfil</h1>
        <p className="mt-1 text-sm text-slate-500">Datos personales y fiscales para facturación (demo).</p>
      </div>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-400">Personales</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            Nombre
            <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="Usuario Demo" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Correo
            <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="cliente@demo.com" />
          </label>
        </div>
      </section>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-400">Fiscales</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            RFC
            <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="XAXX010101000" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Razón social
            <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" />
          </label>
        </div>
        <button type="button" className="mt-6 rounded-xl bg-[var(--brand)] px-5 py-2.5 text-sm font-bold text-white">
          Guardar
        </button>
      </section>
    </div>
  );
}
