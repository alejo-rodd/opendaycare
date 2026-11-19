"use client";

import Link from "next/link";
import type { FormEvent } from "react";

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-[30px]"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4" />
    </svg>
  );
}

export default function ActivateAccountPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center overflow-x-clip bg-[#fbf4ec] px-4 py-8 sm:px-8 sm:py-10">
      <div className="w-full max-w-[440px]">
        <div className="mb-[22px] flex size-[58px] items-center justify-center rounded-[18px] bg-gradient-to-br from-[#f8c3a8] to-[#f2937a] text-white shadow-[0_12px_26px_-10px_rgba(238,129,100,0.65)]">
          <SunIcon />
        </div>

        <h1 className="mb-2 font-display text-[30px] font-semibold leading-[1.15] text-[#3f362e] sm:text-[32px]">
          Bienvenida a OpenDayCare
        </h1>
        <p className="mb-[26px] mt-0 text-[15.5px] leading-[1.55] text-[#94887b]">
          Te invitaron a seguir el día de tu hijo. Creá tu contraseña para
          activar la cuenta.
        </p>

        <div className="mb-[22px] flex items-center gap-[14px] rounded-2xl border-[1.5px] border-[#eadfd0] bg-white px-4 py-[14px]">
          <span
            aria-hidden="true"
            className="flex size-11 flex-none items-center justify-center rounded-full bg-[#a9d9e8] font-display text-[19px] font-semibold text-[#1f7a93]"
          >
            M
          </span>
          <div>
            <p className="m-0 text-[13px] text-[#94887b]">
              Te invitaron a seguir a
            </p>
            <p className="m-0 font-display text-[17px] font-semibold text-[#3f362e]">
              Mateo · Sala Soles
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="invite-code"
            className="mb-2 block text-xs font-bold tracking-[0.7px] text-[#94887b]"
          >
            CÓDIGO DE INVITACIÓN
          </label>
          <input
            id="invite-code"
            name="inviteCode"
            type="text"
            defaultValue="7K4P9"
            autoComplete="off"
            className="mb-[18px] w-full rounded-[14px] border-[1.5px] border-[#eadfd0] bg-white px-4 py-[14px] font-display text-lg font-bold tracking-[3px] text-[#3f362e] outline-none transition focus:border-[#f2937a] focus:ring-2 focus:ring-[#f2937a]/20"
          />

          <label
            htmlFor="activation-email"
            className="mb-2 block text-xs font-bold tracking-[0.7px] text-[#94887b]"
          >
            EMAIL
          </label>
          <input
            id="activation-email"
            name="email"
            type="email"
            defaultValue="lucia.fernandez@gmail.com"
            autoComplete="email"
            className="mb-[18px] w-full rounded-[14px] border-[1.5px] border-[#eadfd0] bg-white px-4 py-[14px] text-[15px] text-[#3f362e] outline-none transition focus:border-[#f2937a] focus:ring-2 focus:ring-[#f2937a]/20"
          />

          <label
            htmlFor="new-password"
            className="mb-2 block text-xs font-bold tracking-[0.7px] text-[#94887b]"
          >
            CREAR CONTRASEÑA
          </label>
          <input
            id="new-password"
            name="password"
            type="password"
            defaultValue="contraseña"
            autoComplete="new-password"
            className="mb-[18px] w-full rounded-[14px] border-[1.5px] border-[#f2a78e] bg-white px-4 py-[14px] text-[15px] text-[#3f362e] outline-none transition focus:ring-2 focus:ring-[#f2937a]/20"
          />

          <label className="mb-6 flex cursor-pointer items-start gap-3 rounded-[14px] bg-[#fbf1d6] px-4 py-[14px]">
            <input
              type="checkbox"
              name="photoAuthorization"
              defaultChecked
              className="mt-1 size-5 flex-none accent-[#5fb97e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3e9b6c]"
            />
            <span className="text-sm leading-[1.45] text-[#8a7234]">
              Autorizo a la guardería a tomar y compartir fotos de mi hijo
              dentro de la app.
            </span>
          </label>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-[15px] bg-gradient-to-b from-[#f4977e] to-[#ee8164] px-4 py-[15px] text-center text-base font-extrabold text-white shadow-[0_10px_22px_-8px_rgba(238,129,100,0.7)] transition hover:brightness-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5503a]"
          >
            Activar mi cuenta
          </button>
        </form>

        <p className="mb-0 mt-[22px] text-center text-[14.5px] text-[#94887b]">
          ¿Ya tenés cuenta?{" "}
          <Link
            href="/login"
            className="font-extrabold text-[#c5503a] hover:underline"
          >
            Iniciar sesión
          </Link>
        </p>
      </div>
    </main>
  );
}
