const rows = [
  { id: "S-1023", client: "Beta Startups", date: "2026-04-08", amount: "$2,400", status: "Completada" },
  { id: "S-1022", client: "Gamma SA", date: "2026-04-05", amount: "$950", status: "Completada" },
  { id: "S-1021", client: "PMI Labs", date: "2026-04-01", amount: "$1,200", status: "Disputa" },
];

export default function ProveedorHistorialPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Historial</h1>
        <p className="mt-1 text-sm text-slate-500">Sesiones y entregables registrados (mock).</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Cliente</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Monto</th>
              <th className="px-4 py-3">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r) => (
              <tr key={r.id}>
                <td className="px-4 py-3 font-mono text-xs text-slate-600">{r.id}</td>
                <td className="px-4 py-3 font-medium text-slate-900">{r.client}</td>
                <td className="px-4 py-3 text-slate-600">{r.date}</td>
                <td className="px-4 py-3 text-slate-600">{r.amount}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                      r.status === "Completada" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
