export default function AdminConfiguracionPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Configuración</h1>
        <p className="mt-1 text-sm text-slate-500">Categorías y comisiones (solo UI).</p>
      </div>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-400">Categorías</h2>
        <textarea
          className="mt-3 min-h-[100px] w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          defaultValue="Legal, Contabilidad, Ingeniería, Arquitectura, Consultoría, RR. HH."
        />
      </section>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-400">Comisión marketplace (%)</h2>
        <input
          type="number"
          className="mt-3 w-32 rounded-xl border border-slate-200 px-3 py-2 text-sm"
          defaultValue={18}
        />
        <p className="mt-2 text-xs text-slate-500">Aplica sobre el precio público antes de impuestos (demo).</p>
      </section>
      <button type="button" className="rounded-xl bg-[var(--brand)] px-6 py-2.5 text-sm font-bold text-white">
        Guardar cambios
      </button>
    </div>
  );
}
