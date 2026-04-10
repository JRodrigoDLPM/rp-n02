import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IconChat,
  IconHeart,
  IconPhone,
  IconShare,
  IconStar,
  IconThumbUp,
  IconVideo,
  SpecialtyIcon,
} from "@/components/icons/Icons";
import { getProfessionalById } from "@/lib/mock-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = getProfessionalById(id);
  if (!p) return { title: "Profesional" };
  return { title: p.name, description: p.bioShort };
}

function statusBadge(s: "online" | "busy" | "offline") {
  if (s === "online") return { t: "En línea", c: "bg-emerald-500 text-white" };
  if (s === "busy") return { t: "Ocupado", c: "bg-amber-500 text-white" };
  return { t: "Desconectado", c: "bg-slate-400 text-white" };
}

function CalendarMock() {
  const days = ["Lun", "Mar", "Mié", "Jue", "Vie"];
  const slots = ["09:00", "11:00", "13:00", "16:00"];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900">Disponibilidad (simulada)</h3>
      <p className="mt-1 text-sm text-slate-500">Selecciona franja para solicitar reserva — sin backend en demo.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-5">
        {days.map((d) => (
          <div key={d} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <p className="text-center text-xs font-bold uppercase text-slate-500">{d}</p>
            <div className="mt-2 flex flex-col gap-1.5">
              {slots.map((t) => (
                <button
                  key={t}
                  type="button"
                  className="rounded-lg border border-slate-200 bg-white py-1.5 text-xs font-semibold text-slate-700 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-xl bg-[var(--brand)] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[var(--brand-muted)]"
        >
          Contratación inmediata
        </button>
        <button
          type="button"
          className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 hover:border-[var(--brand)]"
        >
          Reservar horario
        </button>
      </div>
    </div>
  );
}

export default async function ProfessionalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getProfessionalById(id);
  if (!p) notFound();
  const st = statusBadge(p.status);
  const thumbPct = Math.min(97, Math.round((p.likes / Math.max(1, p.reviewCount * 20)) * 100));

  return (
    <main className="bg-[var(--background)] pb-20">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-3 text-sm text-slate-600 sm:px-6">
          <Link href="/" className="hover:text-[var(--brand)]">
            Inicio
          </Link>
          <span className="mx-2 text-slate-300">/</span>
          <Link href="/cliente/busqueda" className="hover:text-[var(--brand)]">
            {p.category}
          </Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="font-medium text-slate-900">{p.name}</span>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
        <article className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/50">
          <div className="grid gap-8 p-6 md:grid-cols-[280px_1fr] md:p-10">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl bg-slate-100 shadow-inner">
                <Image src={p.image} alt={p.name} fill className="object-cover" sizes="280px" priority />
              </div>
              <div className="mt-3 flex justify-center md:justify-start">
                <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${st.c}`}>{st.t}</span>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{p.name}</h1>
                  <p className="mt-1 text-sm font-medium text-slate-500">{p.tagline}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    className="rounded-full border border-slate-200 p-2 text-slate-500 hover:bg-slate-50 hover:text-rose-600"
                    aria-label="Guardar"
                  >
                    <IconHeart />
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-slate-200 p-2 text-slate-500 hover:bg-slate-50"
                    aria-label="Compartir"
                  >
                    <IconShare />
                  </button>
                  <div className="flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-sm font-bold text-amber-950 ring-1 ring-amber-200/80">
                    <IconStar className="h-4 w-4 text-amber-600" />
                    {p.rating.toFixed(1)}
                    <span className="font-normal text-amber-800/80">({p.reviewCount})</span>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-600">{p.title}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <button
                  type="button"
                  className="flex flex-col items-center justify-center rounded-2xl bg-emerald-600 px-4 py-4 text-white shadow-md transition hover:bg-emerald-700"
                >
                  <span className="flex items-center gap-2 text-sm font-bold">
                    <IconChat className="h-5 w-5" />
                    Chat
                  </span>
                  <span className="mt-1 text-xs font-medium text-emerald-100">${p.priceChat.toFixed(2)}/min</span>
                </button>
                <button
                  type="button"
                  className="flex flex-col items-center justify-center rounded-2xl bg-[var(--brand)] px-4 py-4 text-white shadow-md transition hover:bg-[var(--brand-muted)]"
                >
                  <span className="flex items-center gap-2 text-sm font-bold">
                    <IconPhone className="h-5 w-5" />
                    Llamada
                  </span>
                  <span className="mt-1 text-xs font-medium text-emerald-100/90">${p.priceVoice.toFixed(2)}/min</span>
                </button>
                <button
                  type="button"
                  className={`flex flex-col items-center justify-center rounded-2xl px-4 py-4 text-white shadow-md transition ${p.videoAvailable ? "bg-[var(--accent-blue)] hover:bg-blue-900" : "cursor-not-allowed bg-slate-300"}`}
                  disabled={!p.videoAvailable}
                >
                  <span className="flex items-center gap-2 text-sm font-bold">
                    <IconVideo className="h-5 w-5" />
                    Video
                  </span>
                  <span className="mt-1 text-xs font-medium text-blue-100">
                    {p.videoAvailable ? `$${p.priceVideo.toFixed(2)}/min` : "No disponible"}
                  </span>
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 border-t border-slate-100 pt-6 text-sm text-slate-600">
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-400">Servicios</p>
                  <p className="mt-0.5 font-bold text-slate-900">{p.servicesCount}+</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-400">Valoraciones</p>
                  <p className="mt-0.5 flex items-center gap-1 font-bold text-slate-900">
                    <IconThumbUp className="h-4 w-4 text-emerald-600" />
                    {p.likes.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-400">Clientes recurrentes</p>
                  <p className="mt-0.5 font-bold text-slate-900">{p.repeatClients}%</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/cliente/contratacion"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800 sm:w-auto sm:px-12"
                >
                  Contratar — desde ${Math.min(p.priceChat, p.priceVoice).toFixed(2)}/min o tarifa fija en checkout (demo)
                </Link>
              </div>
            </div>
          </div>
        </article>

        {p.queueCount > 0 ? (
          <div className="mt-4 rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-3 text-center text-sm font-semibold text-amber-950 ring-1 ring-amber-200/80">
            {p.queueCount} personas en cola para hablar con este profesional en este momento (simulado).
          </div>
        ) : null}

        <div className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-6 text-slate-800 shadow-sm">
          <p className="text-sm font-semibold text-[var(--brand)]">Opinión destacada</p>
          <p className="mt-2 text-base leading-relaxed text-slate-700">&ldquo;{p.featuredReview}&rdquo;</p>
        </div>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-slate-900">Sobre mis servicios</h2>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-600">{p.aboutServices}</p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900">Sobre mí</h2>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-600">{p.aboutMe}</p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900">Especialidades</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-8 sm:justify-start">
            {p.specialties.map((s) => (
              <div key={s.label} className="flex w-24 flex-col items-center gap-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                  <SpecialtyIcon name={s.icon} />
                </div>
                <span className="text-xs font-semibold text-slate-700">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <CalendarMock />
        </section>

        <section className="mt-14">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-bold text-slate-900">Reseñas</h2>
            <span className="text-sm text-slate-500">({p.reviews.length} en vista demo)</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
              <IconThumbUp className="h-3.5 w-3.5 text-emerald-600" />
              {thumbPct}% útiles
            </span>
          </div>
          <ul className="mt-6 space-y-4">
            {p.reviews.map((r) => (
              <li key={r.id} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-slate-600">
                  {r.author[0]}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-semibold text-slate-900">{r.author}</p>
                    <time className="text-xs text-slate-400">{r.date}</time>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
          {p.reviews.length > 0 ? (
            <div className="mt-8 text-center">
              <button type="button" className="text-sm font-semibold text-[var(--brand)] hover:underline">
                Ver más reseñas
              </button>
            </div>
          ) : (
            <p className="mt-4 text-sm text-slate-500">Aún no hay reseñas públicas en esta demo.</p>
          )}
        </section>
      </div>
    </main>
  );
}
