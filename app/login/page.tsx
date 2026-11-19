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
      className="size-[26px]"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4" />
    </svg>
  );
}

export default function LoginPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className="grid min-h-screen w-full overflow-x-clip bg-[#fbf4ec] lg:grid-cols-[1.05fr_1fr]">
      <section
        aria-label="OpenDayCare"
        className="relative flex min-h-[270px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#f6a98e] via-[#f2937a] to-[#ec7e62] px-6 py-8 text-white sm:min-h-[310px] sm:px-10 sm:py-10 lg:min-h-screen lg:px-[60px] lg:py-14"
      >
        <div
          aria-hidden="true"
          className="absolute -right-[120px] -top-[140px] size-[420px] rounded-full bg-white/[0.12]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-[110px] -left-20 size-[300px] rounded-full bg-white/[0.1]"
        />

        <div className="relative flex items-center gap-[13px]">
          <span className="flex size-[46px] flex-none items-center justify-center rounded-[14px] bg-white/[0.22]">
            <SunIcon />
          </span>
          <span className="font-display text-[21px] font-semibold tracking-[0.5px]">
            OpenDayCare
          </span>
        </div>

        <div className="relative my-8 lg:my-0">
          <h1 className="mb-[18px] font-display text-[32px] font-semibold leading-[1.12] sm:text-[38px] lg:text-[42px]">
            El día de cada niño,
            <br className="hidden sm:block" /> compartido con su familia.
          </h1>
          <p className="m-0 max-w-[430px] text-[15px] leading-[1.6] text-white/90 sm:text-[17px]">
            Publicá momentos, gestioná las salas y mantené a las familias cerca,
            desde un solo lugar.
          </p>
        </div>

        <p className="relative m-0 text-sm text-white/90">
          🌿 Guardería Sala Soles
        </p>
      </section>

      <section className="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-10">
        <div className="w-full max-w-[392px]">
          <h2 className="mb-1.5 font-display text-[30px] font-semibold text-[#3f362e]">
            Iniciar sesión
          </h2>
          <p className="mb-7 mt-0 text-[15px] text-[#94887b]">
            Ingresá para ver el día de hoy.
          </p>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="login-email"
              className="mb-2 block text-xs font-bold tracking-[0.7px] text-[#94887b]"
            >
              EMAIL
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              defaultValue="caro@opendaycare.com"
              autoComplete="username"
              className="mb-[18px] w-full rounded-[14px] border-[1.5px] border-[#eadfd0] bg-white px-4 py-[14px] text-[15px] text-[#3f362e] outline-none transition focus:border-[#f2937a] focus:ring-2 focus:ring-[#f2937a]/20"
            />

            <label
              htmlFor="login-password"
              className="mb-2 block text-xs font-bold tracking-[0.7px] text-[#94887b]"
            >
              CONTRASEÑA
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              className="w-full rounded-[14px] border-[1.5px] border-[#eadfd0] bg-white px-4 py-[14px] text-[15px] text-[#3f362e] outline-none transition placeholder:text-[#b6a99b] focus:border-[#f2937a] focus:ring-2 focus:ring-[#f2937a]/20"
            />

            <div className="mb-5 mt-2 text-right">
              <span className="cursor-default text-[13.5px] font-bold text-[#c5503a]">
                ¿Olvidaste tu contraseña?
              </span>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-[15px] bg-gradient-to-b from-[#f4977e] to-[#ee8164] px-4 py-[15px] text-center text-base font-extrabold text-white shadow-[0_10px_22px_-8px_rgba(238,129,100,0.7)] transition hover:brightness-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5503a]"
            >
              Iniciar sesión
            </button>
          </form>

          <p className="mb-0 mt-6 text-center text-[14.5px] text-[#94887b]">
            ¿Te invitó la guardería?{" "}
            <Link
              href="/activate-account"
              className="font-extrabold text-[#c5503a] hover:underline"
            >
              Activá tu cuenta
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
