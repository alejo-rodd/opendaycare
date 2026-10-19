import { classroom, greeting, teacher } from "@/data/mock";

const navigationItems = [
  {
    label: "Feed",
    active: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[19px]">
        <path d="m3 9.5 9-6.5 9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
      </svg>
    ),
  },
  {
    label: "Niños",
    active: false,
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
    active: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[19px]">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    ),
  },
  {
    label: "Mi cuenta",
    active: false,
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

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[19px]">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
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

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="sticky top-0 flex h-screen w-[248px] flex-none flex-col border-r border-border bg-surface px-4 py-6">
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

        <nav aria-label="Navegación principal" className="flex flex-1 flex-col gap-1">
          {navigationItems.map(({ label, active, icon }) => (
            <span
              key={label}
              aria-current={active ? "page" : undefined}
              className={`flex items-center gap-3 rounded-xl px-3 py-[11px] text-[14.5px] ${
                active
                  ? "bg-accent-soft font-extrabold text-[#d9583c]"
                  : "font-semibold text-[#6e6359]"
              }`}
            >
              {icon}
              {label}
            </span>
          ))}
        </nav>

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

      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-[760px] px-10 pb-20 pt-[34px]">
          <header className="mb-6">
            <p className="mb-1 text-[12.5px] font-extrabold tracking-[0.8px] text-[#d9583c]">
              GUARDERÍA · SALA {classroom.name.toUpperCase()}
            </p>
            <h1 className="font-display text-[30px] font-semibold text-foreground">
              {greeting}
            </h1>
            <p className="mt-1 text-[14.5px] text-muted">
              {classroom.childCount} niños · {classroom.displayDate}
            </p>
          </header>

          <button
            type="button"
            className="mb-6 flex w-full items-center gap-[14px] rounded-[18px] border border-border bg-surface px-[18px] py-[14px] text-left shadow-[0_4px_14px_-10px_rgba(120,90,60,0.4)]"
          >
            <span className="flex size-10 flex-none items-center justify-center rounded-full bg-[#f2937a] font-display text-base font-semibold text-white">
              {teacher.initials}
            </span>
            <span className="flex-1 text-[15px] text-[#a89a8b]">
              Compartí un momento…
            </span>
            <span className="flex size-[38px] flex-none items-center justify-center rounded-xl bg-accent-soft text-[#e0654a]">
              <CameraIcon />
            </span>
          </button>

          <div className="mb-[14px] flex items-center gap-[14px]">
            <span className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#8a7c6d]">
              PUBLICADO HOY
            </span>
            <span className="h-px flex-1 bg-[#e7dac8]" />
          </div>
        </div>
      </main>
    </div>
  );
}
