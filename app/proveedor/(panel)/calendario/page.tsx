import { Fragment } from "react";

const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
const days = ["Lun 7", "Mar 8", "Mié 9", "Jue 10", "Vie 11"];

export default function ProveedorCalendarioPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Disponibilidad</h1>
        <p className="mt-1 text-sm text-slate-500">Marca franjas disponibles (interfaz simulada).</p>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="min-w-[640px]">
          <div className="grid grid-cols-[80px_repeat(5,1fr)] gap-1 text-xs font-semibold text-slate-500">
            <div />
            {days.map((d) => (
              <div key={d} className="py-2 text-center">
                {d}
              </div>
            ))}
            {hours.map((h) => (
              <Fragment key={h}>
                <div className="py-2 pr-2 text-right text-slate-400">{h}</div>
                {days.map((d) => (
                  <button
                    key={`${d}-${h}`}
                    type="button"
                    className="min-h-10 rounded-lg border border-slate-100 bg-slate-50 text-[10px] font-medium text-transparent hover:border-emerald-300 hover:bg-emerald-50"
                  >
                    .
                  </button>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-500">Clic en una celda alterna disponible / no disponible (solo UI).</p>
    </div>
  );
}
