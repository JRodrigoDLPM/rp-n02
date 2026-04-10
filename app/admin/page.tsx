export default function AdminHomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Resumen</h1>
        <p className="mt-1 text-sm text-slate-500">KPIs y alertas operativas (mock).</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Proveedores pendientes", value: "14" },
          { label: "Clientes activos", value: "1,240" },
          { label: "GMV mes", value: "$2.4M" },
          { label: "Tickets abiertos", value: "8" },
        ].map((x) => (
          <div key={x.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase text-slate-400">{x.label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{x.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Actividad reciente</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          <li>• Nuevo proveedor en revisión: Carlos López (Legal)</li>
          <li>• Disputa de pago S-1021 marcada para revisión</li>
          <li>• Categoría &ldquo;Consultoría ESG&rdquo; propuesta por equipo producto</li>
        </ul>
      </div>
    </div>
  );
}
