const admins = [
  { name: "Super Admin", email: "admin@proconnect.demo", role: "Owner" },
  { name: "Operaciones", email: "ops@proconnect.demo", role: "Editor" },
];

export default function AdminUsuariosPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Usuarios admin</h1>
          <p className="mt-1 text-sm text-slate-500">Roles y accesos al panel (mock).</p>
        </div>
        <button type="button" className="rounded-xl bg-[var(--brand)] px-4 py-2 text-sm font-bold text-white">
          Invitar usuario
        </button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Correo</th>
              <th className="px-4 py-3">Rol</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {admins.map((a) => (
              <tr key={a.email}>
                <td className="px-4 py-3 font-medium text-slate-900">{a.name}</td>
                <td className="px-4 py-3 text-slate-600">{a.email}</td>
                <td className="px-4 py-3 text-slate-600">{a.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
