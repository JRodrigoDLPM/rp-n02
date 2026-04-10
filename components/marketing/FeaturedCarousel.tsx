import Image from "next/image";
import Link from "next/link";
import type { Professional } from "@/types/marketplace";

export function FeaturedCarousel({ items }: { items: Professional[] }) {
  return (
    <div className="scrollbar-hide -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
      {items.map((p) => (
        <Link
          key={p.id}
          href={`/profesional/${p.id}`}
          className="flex w-[88px] shrink-0 flex-col items-center gap-2 text-center"
        >
          <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full border-2 border-white shadow-md ring-2 ring-emerald-800/20">
            <Image src={p.image} alt={p.name} fill className="object-cover" sizes="72px" />
          </div>
          <span className="line-clamp-2 text-[11px] font-semibold leading-tight text-slate-800">{p.name.split(" ")[0]}</span>
        </Link>
      ))}
    </div>
  );
}
