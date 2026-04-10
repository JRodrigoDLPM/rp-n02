const movements = [
  { id: "P-9001", concept: "Liquidación proveedores", amount: "$182,400", date: "2026-04-09" },
  { id: "P-9002", concept: "Comisiones marketplace", amount: "$24,300", date: "2026-04-09" },
];

export default function AdminPagosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Pagos</h1>
        <p className="mt-1 text-sm text-slate-500">Movimientos y conciliación (mock).</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Concepto</th>
              <th className="px-4 py-3">Monto</th>
              <th className="px-4 py-3">Fecha</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {movements.map((m) => (
              <tr key={m.id}>
                <td className="px-4 py-3 font-mono text-xs">{m.id}</td>
                <td className="px-4 py-3 text-slate-800">{m.concept}</td>
                <td className="px-4 py-3 font-semibold text-slate-900">{m.amount}</td>
                <td className="px-4 py-3 text-slate-600">{m.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
