import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-slate-900">Profesional no encontrado</h1>
      <p className="mt-2 text-sm text-slate-600">El ID no existe en los datos de demostración.</p>
      <Link href="/" className="mt-8 inline-block text-sm font-semibold text-[var(--brand)] hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
}
