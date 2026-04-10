"use client";

import { useState } from "react";
import { adminClients } from "@/lib/mock-data";

export default function AdminClientesPage() {
  const [rows, setRows] = useState(adminClients);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Clientes</h1>
        <p className="mt-1 text-sm text-slate-500">Activar o desactivar cuentas (mock).</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Correo</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r) => (
              <tr key={r.id}>
                <td className="px-4 py-3 font-medium text-slate-900">{r.name}</td>
                <td className="px-4 py-3 text-slate-600">{r.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                      r.active ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {r.active ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    className="text-xs font-bold text-[var(--brand)] hover:underline"
                    onClick={() =>
                      setRows((prev) => prev.map((x) => (x.id === r.id ? { ...x, active: !x.active } : x)))
                    }
                  >
                    {r.active ? "Desactivar" : "Activar"}
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
