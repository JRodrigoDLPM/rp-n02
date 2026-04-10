"use client";

import { useState } from "react";
import { adminProviders } from "@/lib/mock-data";

export default function AdminProveedoresPage() {
  const [rows, setRows] = useState(adminProviders);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Proveedores</h1>
        <p className="mt-1 text-sm text-slate-500">Aprobar, rechazar y revisar documentación (simulado).</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Correo</th>
              <th className="px-4 py-3">Categoría</th>
              <th className="px-4 py-3">Docs</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r) => (
              <tr key={r.id}>
                <td className="px-4 py-3 font-medium text-slate-900">{r.name}</td>
                <td className="px-4 py-3 text-slate-600">{r.email}</td>
                <td className="px-4 py-3 text-slate-600">{r.category}</td>
                <td className="px-4 py-3 text-slate-600">{r.docs}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                      r.status === "approved" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    {r.status === "approved" ? "Aprobado" : "Pendiente"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="text-xs font-bold text-emerald-700 hover:underline"
                      onClick={() =>
                        setRows((prev) =>
                          prev.map((x) => (x.id === r.id ? { ...x, status: "approved" as const } : x)),
                        )
                      }
                    >
                      Aprobar
                    </button>
                    <button type="button" className="text-xs font-bold text-rose-600 hover:underline">
                      Rechazar
                    </button>
                    <button type="button" className="text-xs font-bold text-slate-600 hover:underline">
                      Ver docs
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
