const thread = [
  { from: "client", text: "Hola, ¿revisan contratos de distribución internacional?", time: "10:12" },
  { from: "me", text: "Sí, trabajamos cláusulas INCOTERMS y compliance. ¿Tienes borrador?", time: "10:14" },
  { from: "client", text: "Adjunto en el siguiente mensaje (simulado).", time: "10:15" },
];

export default function ProveedorMensajesPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] min-h-[420px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:flex-row">
      <aside className="w-full border-b border-slate-100 bg-slate-50 p-3 lg:w-64 lg:border-b-0 lg:border-r">
        <p className="px-2 text-xs font-semibold uppercase text-slate-400">Conversaciones</p>
        <ul className="mt-2 space-y-1">
          {["Beta Startups", "Gamma SA", "Inversiones Norte"].map((name) => (
            <li key={name}>
              <button
                type="button"
                className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-white"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex flex-1 flex-col">
        <div className="border-b border-slate-100 px-4 py-3">
          <h1 className="text-sm font-bold text-slate-900">Beta Startups</h1>
          <p className="text-xs text-slate-500">Último mensaje hoy</p>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {thread.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                  m.from === "me" ? "rounded-br-md bg-[var(--brand)] text-white" : "rounded-bl-md bg-slate-100 text-slate-800"
                }`}
              >
                {m.text}
                <p className={`mt-1 text-[10px] ${m.from === "me" ? "text-emerald-100" : "text-slate-400"}`}>{m.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-100 p-3">
          <div className="flex gap-2">
            <input
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm"
              placeholder="Escribe un mensaje…"
            />
            <button type="button" className="rounded-xl bg-[var(--brand)] px-4 py-2 text-sm font-bold text-white">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
