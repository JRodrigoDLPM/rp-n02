/*import Image from "next/image";
import Link from "next/link";
import { FeaturedCarousel } from "@/components/marketing/FeaturedCarousel";
import { ProfessionalCard } from "@/components/marketing/ProfessionalCard";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { categories, professionals } from "@/lib/mock-data";

const heroImage =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80";

export default function HomePage() {
  const trending = professionals.slice(0, 4);
  const topRated = [...professionals].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const recommended = professionals.slice(2, 6);

  return (
    <main>
      <section className="relative min-h-[420px] overflow-hidden sm:min-h-[480px]">
        <Image src={heroImage} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/55 to-slate-900/85" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pb-20 pt-16 text-center sm:pt-24">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            La claridad que necesitas para decidir en tu negocio
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-200 sm:text-base">
            Abogados, contadores, ingenieros y consultores verificados. Consulta por chat, voz o videollamada.
          </p>
          <div className="mt-10 flex w-full max-w-xl flex-col gap-2 rounded-2xl bg-white p-2 shadow-xl sm:flex-row sm:items-stretch">
            <input
              type="search"
              name="q"
              placeholder="Buscar especialidad, nombre o tema legal…"
              className="min-h-12 flex-1 rounded-xl border-0 bg-transparent px-4 text-slate-900 outline-none placeholder:text-slate-400"
            />
            <Link
              href="/cliente/busqueda"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--brand)] px-8 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[var(--brand-muted)]"
            >
              Buscar
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-[var(--brand)] py-2.5 text-center text-sm font-semibold text-white">
        Primera consulta: <span className="underline decoration-white/60">10% de descuento</span> en paquetes empresariales
        (promo demo).
      </div>
      <div className="border-b border-slate-200 bg-slate-50 py-2 text-center text-xs text-slate-600">
        Programa <span className="font-semibold text-[var(--brand)]">ProConnect Rewards</span> — acumula créditos por
        sesiones completadas.
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader title="Mejor valorados" actionHref="/cliente/busqueda" />
        <FeaturedCarousel items={professionals.filter((p) => p.rating >= 4.8)} />
      </div>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">¿Por qué ProConnect?</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Profesionales verificados",
                body: "Documentación, experiencia y referencias revisadas antes de activar un perfil público.",
              },
              {
                title: "Flexibilidad real",
                body: "Chat para dudas rápidas, voz para profundizar y video para compartir pantalla o documentos.",
              },
              {
                title: "Enfoque corporativo",
                body: "Pensado para equipos legales, finanzas, obra y consultoría — no para promesas mágicas.",
              },
            ].map((x) => (
              <div key={x.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[var(--brand)] ring-1 ring-emerald-100">
                  <span className="text-lg font-bold">✓</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{x.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="categorias" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader title="Categorías principales" />
        <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-2">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href="/cliente/busqueda"
              className="flex w-[100px] shrink-0 flex-col items-center gap-2 text-center"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-md ${c.color}`}
              >
                {c.label.slice(0, 2).toUpperCase()}
              </div>
              <span className="text-xs font-semibold text-slate-800">{c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="profesionales" className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Tendencias" actionHref="/cliente/busqueda" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{trending.map((p) => <ProfessionalCard key={p.id} p={p} />)}</div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Mejor calificados" actionHref="/cliente/busqueda" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{topRated.map((p) => <ProfessionalCard key={p.id} p={p} />)}</div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Recomendados para tu empresa" actionHref="/cliente/busqueda" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recommended.map((p) => (
              <ProfessionalCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Todos los consultores" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {professionals.map((p) => (
              <ProfessionalCard key={p.id} p={p} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="rounded-xl border border-slate-300 bg-white px-10 py-3 text-sm font-bold uppercase tracking-wide text-slate-700 shadow-sm transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
            >
              Cargar más
            </button>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-center sm:gap-8">
          <Link
            href="/proveedor/registro"
            className="w-full max-w-xs rounded-2xl border-2 border-[var(--brand)] bg-white px-8 py-4 text-sm font-bold text-[var(--brand)] shadow-sm transition hover:bg-emerald-50 sm:w-auto"
          >
            Soy proveedor
          </Link>
          <Link
            href="/cliente/registro"
            className="w-full max-w-xs rounded-2xl bg-[var(--brand)] px-8 py-4 text-sm font-bold text-white shadow-md transition hover:bg-[var(--brand-muted)] sm:w-auto"
          >
            Soy cliente
          </Link>
        </div>
      </section>

      <section id="faq" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-2xl font-bold text-slate-900">Preguntas frecuentes</h2>
          <dl className="mt-10 space-y-6">
            {[
              ["¿Cómo se verifica un profesional?", "Revisamos identidad, cédula profesional (cuando aplica) y referencias comerciales — flujo simulado en esta demo."],
              ["¿Los pagos son seguros?", "En producción usaríamos un proveedor PCI; aquí solo maquetamos el checkout de ejemplo."],
              ["¿Puedo agendar?", "Sí: el detalle de profesional y el portal de cliente incluyen reserva y contratación inmediata (UI mock)."],
            ].map(([q, a]) => (
              <div key={String(q)} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <dt className="font-semibold text-slate-900">{q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contacto" className="py-16">
        <div className="mx-auto max-w-xl px-4 text-center">
          <h2 className="text-xl font-bold text-slate-900">Contacto comercial</h2>
          <p className="mt-2 text-sm text-slate-600">hola@proconnect.demo · +52 (55) 0000-0000</p>
        </div>
      </section>

      <section id="terminos" className="sr-only" aria-hidden>
        Ancla términos — contenido legal en versión productiva.
      </section>
      <section id="privacidad" className="sr-only" aria-hidden>
        Ancla privacidad.
      </section>
    </main>
  );
}
*/

export default function HomePage() {
  return <div>FUNCIONA</div>;
}