import Link from "next/link";
import type { ReactNode } from "react";
import { classroom, teacher } from "@/data/mock";

type AppSection = "feed" | "kids";

const navigationItems = [
  {
    label: "Feed",
    href: "/",
    section: "feed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[19px]">
        <path d="m3 9.5 9-6.5 9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
      </svg>
    ),
  },
  {
    label: "Niños",
    href: "/kids",
    section: "kids",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[19px]">
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 20a5 5 0 0 1 5.5-4.9" />
      </svg>
    ),
  },
  {
    label: "Avisos",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[19px]">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    ),
  },
  {
    label: "Mi cuenta",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[19px]">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[21px]">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[17px]">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function SignOutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14 5-5-5-5m5 5H9" />
    </svg>
  );
}

function Navigation({
  activeSection,
  mobile = false,
}: {
  activeSection: AppSection;
  mobile?: boolean;
}) {
  return (
    <nav
      aria-label="Navegación principal"
      className={mobile ? "mt-2 grid grid-cols-4 gap-1" : "flex flex-1 flex-col gap-1"}
    >
      {navigationItems.map(({ label, href, section, icon }) => {
        const active = section === activeSection;
        const className = mobile
          ? `flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl px-1 text-[10.5px] ${
              active ? "font-extrabold text-[#d9583c]" : "font-semibold text-[#6e6359]"
            }`
          : `flex items-center gap-3 rounded-xl px-3 py-[11px] text-[14.5px] ${
              active
                ? "bg-accent-soft font-extrabold text-[#d9583c]"
                : "font-semibold text-[#6e6359]"
            }`;
        const content = (
          <>
            {icon}
            {mobile ? <span className="whitespace-nowrap">{label}</span> : label}
          </>
        );

        return href ? (
          <Link
            key={label}
            href={href}
            aria-current={active ? "page" : undefined}
            className={className}
          >
            {content}
          </Link>
        ) : (
          <span key={label} aria-disabled="true" className={className}>
            {content}
          </span>
        );
      })}
    </nav>
  );
}

export default function AppShell({
  activeSection,
  children,
}: {
  activeSection: AppSection;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-x-clip bg-background lg:flex-row">
      <aside className="sticky top-0 hidden h-screen w-[248px] flex-none flex-col border-r border-border bg-surface px-4 py-6 lg:flex">
        <div className="flex items-center gap-[11px] px-2 pb-[22px] pt-1">
          <span className="flex size-[38px] flex-none items-center justify-center rounded-xl bg-gradient-to-br from-[#f8c3a8] to-[#f2937a] text-white">
            <SunIcon />
          </span>
          <span>
            <span className="block font-display text-[17px] font-semibold leading-none text-foreground">
              OpenDayCare
            </span>
            <span className="mt-0.5 block text-[11.5px] text-[#a89a8b]">
              Sala {classroom.name}
            </span>
          </span>
        </div>

        <button
          type="button"
          className="mb-[18px] flex w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-b from-[#f4977e] to-[#ee8164] px-3 py-3 text-[14.5px] font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(238,129,100,0.75)]"
        >
          <PlusIcon />
          Nueva publicación
        </button>

        <Navigation activeSection={activeSection} />

        <div className="mt-[10px] border-t border-border pt-[14px]">
          <div className="flex items-center gap-[11px] px-2 py-1.5">
            <span className="flex size-[38px] flex-none items-center justify-center rounded-full bg-[#f2937a] font-display text-base font-semibold text-white">
              {teacher.initials}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-extrabold text-foreground">
                {teacher.name}
              </span>
              <span className="block text-xs text-[#a89a8b]">
                {teacher.role} · {teacher.roomName}
              </span>
            </span>
            <button
              type="button"
              title="Cerrar sesión"
              aria-label="Cerrar sesión"
              className="flex size-8 flex-none items-center justify-center rounded-[10px] bg-background text-[#94887b]"
            >
              <SignOutIcon />
            </button>
          </div>
        </div>
      </aside>

      <main className="min-h-screen min-w-0 w-full flex-1 lg:h-screen lg:min-h-0 lg:overflow-y-auto">
        {children}
      </main>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-surface px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] shadow-[0_-4px_16px_-12px_rgba(120,90,60,0.5)] lg:hidden">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-b from-[#f4977e] to-[#ee8164] px-3 py-2.5 text-sm font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(238,129,100,0.75)]"
        >
          <PlusIcon />
          Nueva publicación
        </button>
        <Navigation activeSection={activeSection} mobile />
      </div>
    </div>
  );
}
