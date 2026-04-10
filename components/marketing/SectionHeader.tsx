import Link from "next/link";

export function SectionHeader({
  title,
  actionHref,
  actionLabel = "Ver todos",
}: {
  title: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{title}</h2>
      {actionHref ? (
        <Link
          href={actionHref}
          className="shrink-0 text-sm font-semibold uppercase tracking-wide text-[var(--brand)] hover:underline"
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
