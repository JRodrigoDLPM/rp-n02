export default function ProveedorServiciosPage() {
  const rows = [
    { id: "1", name: "Consulta express 15 min", price: "$750", mode: "Chat" },
    { id: "2", name: "Sesión estrategia M&A 45 min", price: "$3,200", mode: "Video" },
    { id: "3", name: "Revisión de NDA", price: "$1,100", mode: "Documento" },
  ];
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Servicios</h1>
          <p className="mt-1 text-sm text-slate-500">Crea y publica paquetes para clientes.</p>
        </div>
        <button type="button" className="rounded-xl bg-[var(--brand)] px-5 py-2.5 text-sm font-bold text-white hover:bg-[var(--brand-muted)]">
          + Nuevo servicio
        </button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Servicio</th>
              <th className="px-4 py-3">Precio</th>
              <th className="px-4 py-3">Modalidad</th>
              <th className="px-4 py-3"> </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r) => (
              <tr key={r.id}>
                <td className="px-4 py-3 font-medium text-slate-900">{r.name}</td>
                <td className="px-4 py-3 text-slate-600">{r.price}</td>
                <td className="px-4 py-3 text-slate-600">{r.mode}</td>
                <td className="px-4 py-3 text-right">
                  <button type="button" className="text-sm font-semibold text-[var(--brand)]">
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
