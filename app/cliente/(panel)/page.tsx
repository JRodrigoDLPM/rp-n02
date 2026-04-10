import Image from "next/image";
import Link from "next/link";
import { ProfessionalCard } from "@/components/marketing/ProfessionalCard";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { professionals } from "@/lib/mock-data";

const heroImage =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80";

export default function ClienteHomePage() {
  const subset = professionals.slice(0, 4);
  return (
    <div className="space-y-10">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-md">
        <div className="relative aspect-[21/9] min-h-[200px] w-full">
          <Image src={heroImage} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 900px" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 py-8 sm:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">Vista cliente</p>
          <h1 className="mt-2 max-w-xl text-2xl font-bold text-white sm:text-3xl">El mismo marketplace, dentro de tu cuenta</h1>
          <p className="mt-2 max-w-lg text-sm text-slate-200">
            Busca consultores, contrata sesiones y gestiona mensajes desde un solo panel.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/cliente/busqueda"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[var(--brand)] shadow-sm"
            >
              Ir a búsqueda
            </Link>
            <Link href="/" className="rounded-xl border border-white/40 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10">
              Ver sitio público completo
            </Link>
          </div>
        </div>
        </div>
      </div>

      <div>
        <SectionHeader title="Sugeridos para ti" actionHref="/cliente/busqueda" />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{subset.map((p) => <ProfessionalCard key={p.id} p={p} />)}</div>
      </div>
    </div>
  );
}
