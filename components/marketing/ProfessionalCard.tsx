import Image from "next/image";
import Link from "next/link";
import type { Professional } from "@/types/marketplace";
import { IconChat, IconPhone, IconStar, IconVideo } from "@/components/icons/Icons";

function statusLabel(s: Professional["status"]) {
  switch (s) {
    case "online":
      return { text: "En línea", className: "bg-emerald-100 text-emerald-800 ring-emerald-600/20" };
    case "busy":
      return { text: "Ocupado", className: "bg-amber-100 text-amber-900 ring-amber-600/20" };
    default:
      return { text: "Desconectado", className: "bg-slate-100 text-slate-600 ring-slate-500/10" };
  }
}

export function ProfessionalCard({ p }: { p: Professional }) {
  const st = statusLabel(p.status);
  return (
    <Link
      href={`/profesional/${p.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-square w-full bg-slate-100">
        <Image src={p.image} alt={p.name} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
        <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-xs font-bold text-slate-900 shadow-sm ring-1 ring-slate-200/80">
          <IconStar className="h-3.5 w-3.5 text-amber-500" />
          {p.rating.toFixed(1)}
        </div>
        {p.videoAvailable ? (
          <div className="absolute right-2 top-2 rounded-full bg-slate-900/75 p-1.5 text-white backdrop-blur">
            <IconVideo className="h-4 w-4" />
          </div>
        ) : null}
      </div>
      <div className="px-1 pt-2">
        <span
          className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ring-1 ring-inset ${st.className}`}
        >
          {st.text}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 pt-2">
        <p className="font-bold text-slate-900 group-hover:text-[var(--brand)]">{p.name}</p>
        <p className="text-xs font-medium text-slate-500">{p.title}</p>
        <p className="mt-2 line-clamp-3 text-sm leading-snug text-slate-600">{p.bioShort}</p>
        <p className="mt-3 text-sm font-semibold text-slate-800">
          Desde ${p.priceChat.toFixed(2)}
          <span className="font-normal text-slate-500">/min</span>
        </p>
        <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-3 text-slate-400">
          <IconChat className="h-5 w-5" />
          <IconPhone className="h-5 w-5" />
          <IconVideo className={`h-5 w-5 ${p.videoAvailable ? "" : "opacity-30"}`} />
        </div>
      </div>
    </Link>
  );
}
