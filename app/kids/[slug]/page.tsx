import Link from "next/link";
import { notFound } from "next/navigation";
import AppShell from "@/app/components/app-shell";
import { childProfiles } from "@/data/mock";

export const instant = false;

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-[18px]"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-[22px]"
    >
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4m0 4h.01" />
    </svg>
  );
}

function SunIcon() {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-[18px]"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function formatBirthDate(value: string) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(new Date(`${value}T12:00:00Z`))
    .replaceAll(".", "");
}

function formatEnrollmentDate(value: string) {
  return new Intl.DateTimeFormat("es-AR", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(new Date(`${value}T12:00:00Z`))
    .replaceAll(".", "");
}

function getParentStatus({
  status,
  role,
}: {
  status: "active" | "pending";
  role: string;
}) {
  const isMother = role === "Madre";
  return {
    text:
      status === "pending"
        ? "invitación enviada"
        : isMother
          ? "activa"
          : "activo",
    badge: status === "pending" ? "PENDIENTE" : isMother ? "ACTIVA" : "ACTIVO",
  };
}

export function generateStaticParams() {
  return childProfiles.map(({ slug }) => ({ slug }));
}

export default async function ChildProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const child = childProfiles.find((profile) => profile.slug === slug);

  if (!child) {
    notFound();
  }

  const hasAllergy = child.badge?.type === "allergy";

  return (
    <AppShell activeSection="kids">
      <div className="mx-auto w-full max-w-[820px] px-4 pb-36 pt-6 sm:px-6 sm:pt-8 lg:px-10 lg:pb-20 lg:pt-[34px]">
        <Link
          href="/kids"
          className="mb-5 inline-flex items-center gap-[7px] text-sm font-bold text-[#94887b] hover:text-[#c5503a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9583c]"
        >
          <ArrowLeftIcon />
          Volver a Niños
        </Link>

        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-[26px]">
          <div className="flex min-w-0 flex-1 flex-col gap-[18px]">
            <header className="flex min-w-0 items-center gap-3 sm:gap-[18px]">
              <span
                aria-hidden="true"
                className="flex size-[68px] flex-none items-center justify-center rounded-full font-display text-[29px] font-semibold sm:size-[84px] sm:text-[34px]"
                style={{
                  backgroundColor: child.avatarBackground,
                  color: child.avatarForeground,
                }}
              >
                {child.initials}
              </span>
              <div className="min-w-0 flex-1">
                <h1 className="break-words font-display text-[23px] font-semibold leading-tight text-foreground sm:text-[28px]">
                  {child.name}
                </h1>
                <p className="mt-[3px] text-[14px] text-[#94887b] sm:text-[15px]">
                  {child.ageLabel} · Sala {child.roomName}
                </p>
              </div>
              <button
                type="button"
                className="flex-none rounded-xl border-[1.5px] border-border bg-surface px-3 py-[9px] text-[13px] font-bold text-[#6e6359] sm:px-4 sm:text-sm"
              >
                Editar
              </button>
            </header>

            <section
              aria-labelledby="notes-heading"
              className={`flex gap-[14px] rounded-2xl px-4 py-4 sm:px-[18px] ${
                hasAllergy ? "bg-[#fbdad6]" : "bg-[#fff8ef]"
              }`}
            >
              <span
                aria-hidden="true"
                className={`flex size-10 flex-none items-center justify-center rounded-[11px] ${
                  hasAllergy
                    ? "bg-[#f4a8a0] text-white"
                    : "bg-[#f4e1c9] text-[#a8875f]"
                }`}
              >
                <AlertIcon />
              </span>
              <div className="min-w-0">
                <h2
                  id="notes-heading"
                  className={`mb-0.5 text-[15px] font-extrabold ${
                    hasAllergy ? "text-[#c5413a]" : "text-[#765f45]"
                  }`}
                >
                  Alergias y notas
                </h2>
                <p
                  className={`m-0 text-[14px] leading-[1.5] ${
                    hasAllergy ? "text-[#b25249]" : "text-[#806c56]"
                  }`}
                >
                  {child.notes}
                </p>
              </div>
            </section>

            <section
              aria-label="Datos del niño"
              className="overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="flex justify-between gap-4 border-b border-[#f0e6d8] px-4 py-[15px] sm:px-[18px]">
                <span className="text-[14px] text-[#94887b]">
                  Fecha de nacimiento
                </span>
                <span className="text-right text-[14px] font-extrabold text-foreground">
                  {formatBirthDate(child.birthDate)}
                </span>
              </div>
              <div className="flex justify-between gap-4 border-b border-[#f0e6d8] px-4 py-[15px] sm:px-[18px]">
                <span className="text-[14px] text-[#94887b]">Sala</span>
                <span className="text-right text-[14px] font-extrabold text-foreground">
                  {child.roomName}
                </span>
              </div>
              <div className="flex justify-between gap-4 px-4 py-[15px] sm:px-[18px]">
                <span className="text-[14px] text-[#94887b]">Ingreso</span>
                <span className="text-right text-[14px] font-extrabold text-foreground">
                  {formatEnrollmentDate(child.enrollmentDate)}
                </span>
              </div>
            </section>
          </div>

          <aside className="flex w-full flex-none flex-col gap-[14px] lg:w-[300px]">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-[9px] rounded-[14px] bg-[#3f362e] px-3 py-[13px] text-[15px] font-extrabold text-white"
            >
              <SunIcon />
              Resumen del día
            </button>

            <section
              aria-labelledby="parents-heading"
              className="rounded-2xl border border-border bg-surface px-4 py-4 sm:px-[18px]"
            >
              <h2
                id="parents-heading"
                className="mb-[14px] text-[12.5px] font-extrabold tracking-[0.8px] text-[#8a7c6d]"
              >
                PADRES VINCULADOS
              </h2>
              <div className="flex flex-col gap-[14px]">
                {child.parents.length > 0 ? (
                  child.parents.map((parent, index) => {
                    const isMother = parent.role === "Madre";
                    const avatarClass = isMother
                      ? "bg-[#c9b6e8]"
                      : "bg-[#a9c7e8]";
                    const status = getParentStatus(parent);

                    return (
                      <div
                        key={`${parent.name}-${parent.role}`}
                        className="flex items-center gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className={`flex size-10 flex-none items-center justify-center rounded-full font-display text-base font-semibold text-white ${avatarClass} ${index > 1 ? "bg-[#b9dec4]" : ""}`}
                        >
                          {parent.name.charAt(0)}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[14.5px] font-extrabold text-foreground">
                            {parent.name}
                          </span>
                          <span className="flex items-center justify-between gap-2">
                            <span className="truncate text-[12.5px] text-[#a89a8b]">
                              {isMother ? "Mamá" : "Papá"} · {status.text}
                            </span>
                            <span
                              className={`flex-none rounded-full px-[9px] py-1 text-[10.5px] font-extrabold ${
                                parent.status === "pending"
                                  ? "bg-[#f7e7a6] text-[#9a7b1e]"
                                  : "bg-[#cfebd8] text-[#3e9b6c]"
                              }`}
                            >
                              {status.badge}
                            </span>
                          </span>
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <p className="m-0 text-sm leading-relaxed text-[#a89a8b]">
                    No hay padres vinculados a este perfil.
                  </p>
                )}

                <button
                  type="button"
                  className="flex items-center gap-3 pt-1 text-left"
                >
                  <span className="flex size-10 flex-none items-center justify-center rounded-full border-[1.5px] border-dashed border-[#d8cbba] text-[#b0a290]">
                    <PlusIcon />
                  </span>
                  <span className="text-[14.5px] font-extrabold text-[#c5503a]">
                    Vincular otro padre
                  </span>
                </button>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </AppShell>
  );
}
