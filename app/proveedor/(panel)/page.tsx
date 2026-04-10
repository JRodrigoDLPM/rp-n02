import Link from "next/link";

const cards = [
  { label: "Reservas activas", value: "12", hint: "+3 vs. semana anterior" },
  { label: "Ingresos estimados (mes)", value: "$48,200 MXN", hint: "Mock" },
  { label: "Mensajes sin leer", value: "5", hint: "2 urgentes" },
];

export default function ProveedorDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Resumen</h1>
        <p className="mt-1 text-sm text-slate-500">Panel del proveedor — datos simulados.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <div key={c.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{c.label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{c.value}</p>
            <p className="mt-1 text-xs text-slate-500">{c.hint}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Próximas sesiones</h2>
        <ul className="mt-4 divide-y divide-slate-100 text-sm">
          {[
            ["Hoy 16:00", "Auditoría fiscal express — Beta Startups"],
            ["Mañana 09:30", "Revisión de contrato marco — Gamma SA"],
            ["Mañana 14:00", "Due diligence remota — Inversiones Norte"],
          ].map(([t, d]) => (
            <li key={t} className="flex flex-wrap justify-between gap-2 py-3">
              <span className="font-semibold text-slate-800">{t}</span>
              <span className="text-slate-600">{d}</span>
            </li>
          ))}
        </ul>
        <Link href="/proveedor/reservaciones" className="mt-4 inline-block text-sm font-semibold text-[var(--brand)] hover:underline">
          Ver reservaciones
        </Link>
      </div>
    </div>
  );
}
