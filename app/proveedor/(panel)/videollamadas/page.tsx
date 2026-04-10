export default function ProveedorVideollamadasPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Videollamadas</h1>
        <p className="mt-1 text-sm text-slate-500">Estado del salón y próxima sesión (mock).</p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase text-slate-400">Estado</p>
            <p className="mt-1 text-lg font-bold text-emerald-700">Listo para recibir llamadas</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-800">En línea</span>
        </div>
        <div className="mt-8 aspect-video w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-inner">
          <div className="flex h-full items-center justify-center text-sm font-medium text-slate-400">Vista previa cámara</div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white">
            Entrar al salón
          </button>
          <button type="button" className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700">
            Probar audio
          </button>
        </div>
      </div>
    </div>
  );
}
