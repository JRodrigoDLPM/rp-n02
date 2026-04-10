export default function ClienteMensajesPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] min-h-[420px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:flex-row">
      <aside className="w-full border-b border-slate-100 bg-slate-50 p-3 lg:w-56 lg:border-b-0 lg:border-r">
        <p className="px-2 text-xs font-semibold uppercase text-slate-400">Activos</p>
        <ul className="mt-2 space-y-1">
          {["Dra. Elena Vázquez", "Lic. Miguel Herrera"].map((name) => (
            <li key={name}>
              <button type="button" className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-white">
                {name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex flex-1 flex-col">
        <div className="border-b border-slate-100 px-4 py-3">
          <h1 className="text-sm font-bold text-slate-900">Dra. Elena Vázquez</h1>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-slate-100 px-4 py-2 text-sm text-slate-800">
              ¿Podemos adelantar la revisión del anexo de IPs?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-br-md bg-[var(--brand)] px-4 py-2 text-sm text-white">
              Sí, envíenlo antes de las 18:00 y lo veo hoy.
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100 p-3">
          <div className="flex gap-2">
            <input className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Mensaje…" />
            <button type="button" className="rounded-xl bg-[var(--brand)] px-4 py-2 text-sm font-bold text-white">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
