import Link from "next/link";
import { childProfiles } from "@/data/mock";
import AppShell from "@/app/components/app-shell";

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-[18px]"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-[17px]"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-[18px] flex-none"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function KidsPage() {
  const roomName = childProfiles[0]?.roomName ?? "Soles";

  return (
    <AppShell activeSection="kids">
      <div className="mx-auto w-full max-w-[880px] px-4 pb-36 pt-6 sm:px-6 sm:pt-8 lg:px-10 lg:pb-20 lg:pt-[34px]">
        <header className="mb-[22px] flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-1 text-[12.5px] font-extrabold tracking-[0.8px] text-[#d9583c]">
              GESTIÓN
            </p>
            <h1 className="font-display text-[30px] font-semibold text-foreground">
              Niños
            </h1>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-[14px] bg-gradient-to-b from-[#f4977e] to-[#ee8164] px-[18px] py-[11px] text-[14.5px] font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(238,129,100,0.7)]"
          >
            <PlusIcon />
            Agregar niño
          </button>
        </header>

        <div className="mb-[22px] flex items-center gap-[11px] rounded-[14px] border border-border bg-surface px-4 py-3">
          <span className="text-[#b0a290]">
            <SearchIcon />
          </span>
          <label htmlFor="child-search" className="sr-only">
            Buscar niño
          </label>
          <input
            id="child-search"
            type="text"
            placeholder="Buscar niño…"
            className="min-w-0 flex-1 border-0 bg-transparent text-[15px] text-foreground outline-none placeholder:text-[#b6a99b]"
          />
        </div>

        <div className="mb-[14px] flex items-center gap-3">
          <span className="text-[12.5px] font-extrabold tracking-[0.8px] text-foreground">
            SALA {roomName.toUpperCase()}
          </span>
          <span className="text-[13px] text-[#a89a8b]">
            {childProfiles.length} niños
          </span>
          <span className="h-px flex-1 bg-[#e7dac8]" />
        </div>

        <section
          aria-label={`Niños de la sala ${roomName}`}
          className="grid grid-cols-1 gap-[14px] md:grid-cols-2"
        >
          {childProfiles.map((child) => {
            const parentCount = child.parents.length;
            const parentLabel =
              parentCount === 0
                ? "sin padres vinculados"
                : `${parentCount} ${parentCount === 1 ? "padre vinculado" : "padres vinculados"}`;

            return (
              <Link
                key={child.slug}
                href={`/kids/${child.slug}`}
                className="group flex min-w-0 items-center gap-[14px] rounded-[18px] border border-border bg-surface p-4 shadow-[0_4px_14px_-12px_rgba(120,90,60,0.5)] transition-[border-color,transform] duration-150 hover:-translate-y-0.5 hover:border-[#f2a78e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9583c]"
              >
                <span
                  aria-hidden="true"
                  className="flex size-12 flex-none items-center justify-center rounded-full font-display text-[19px] font-semibold"
                  style={{
                    backgroundColor: child.avatarBackground,
                    color: child.avatarForeground,
                  }}
                >
                  {child.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-display text-base font-semibold text-foreground">
                    {child.name}
                  </span>
                  <span className="block text-[13px] text-[#a89a8b]">
                    {child.ageLabel} · {parentLabel}
                  </span>
                </span>
                {child.badge ? (
                  <span
                    className={`flex-none rounded-full px-[9px] py-[5px] text-[11px] font-extrabold ${
                      child.badge.type === "link"
                        ? "bg-[#f9d2de] text-[#c56486]"
                        : "bg-[#fbd8cc] text-[#d9684a]"
                    }`}
                  >
                    {child.badge.label}
                  </span>
                ) : (
                  <span className="text-[#cbb89f]">
                    <ChevronIcon />
                  </span>
                )}
              </Link>
            );
          })}
        </section>
      </div>
    </AppShell>
  );
}
