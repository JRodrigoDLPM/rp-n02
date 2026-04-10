const rows = [
  { id: "C-882", pro: "Dra. Elena Vázquez", date: "2026-04-06", amount: "$3,200", tipo: "Video" },
  { id: "C-881", pro: "Ing. Sofía Ramírez", date: "2026-03-28", amount: "$2,100", tipo: "Llamada" },
];

export default function ClienteHistorialPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Historial</h1>
        <p className="mt-1 text-sm text-slate-500">Sesiones contratadas (mock).</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Profesional</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Monto</th>
              <th className="px-4 py-3">Tipo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r) => (
              <tr key={r.id}>
                <td className="px-4 py-3 font-mono text-xs">{r.id}</td>
                <td className="px-4 py-3 font-medium text-slate-900">{r.pro}</td>
                <td className="px-4 py-3 text-slate-600">{r.date}</td>
                <td className="px-4 py-3 text-slate-600">{r.amount}</td>
                <td className="px-4 py-3 text-slate-600">{r.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
