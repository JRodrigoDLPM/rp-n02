export default function ProveedorPerfilPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Perfil público</h1>
        <p className="mt-1 text-sm text-slate-500">Cambios guardados solo en memoria (demo).</p>
      </div>
      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <label className="block text-sm font-medium text-slate-700">
          Nombre visible
          <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="Dra. Elena Vázquez" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Especialidad
          <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="Abogada mercantil · M&A" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Biografía corta
          <textarea className="mt-1 min-h-[100px] w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="Asesoría societaria y contratos para empresas en crecimiento." />
        </label>
        <button type="button" className="rounded-xl bg-[var(--brand)] px-5 py-2.5 text-sm font-bold text-white hover:bg-[var(--brand-muted)]">
          Guardar cambios
        </button>
      </div>
    </div>
  );
}
