const items = [
  { id: "R-501", who: "Gamma SA", when: "10 abr · 11:00", type: "Video", state: "Confirmada" },
  { id: "R-502", who: "TechFlow", when: "11 abr · 09:30", type: "Llamada", state: "Pendiente" },
];

export default function ProveedorReservacionesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Reservaciones</h1>
        <p className="mt-1 text-sm text-slate-500">Agenda confirmada y solicitudes entrantes.</p>
      </div>
      <ul className="space-y-3">
        {items.map((x) => (
          <li key={x.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div>
              <p className="font-bold text-slate-900">{x.who}</p>
              <p className="text-sm text-slate-500">
                {x.when} · {x.type}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{x.state}</span>
              <button type="button" className="text-sm font-semibold text-[var(--brand)]">
                Ver detalle
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
