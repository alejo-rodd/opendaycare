# SPEC 03 — Login y activación de cuenta

> **Estado:** Approved
> **Depende de:** SPEC 01
> **Fecha:** 2026-11-18
> **Objetivo:** Añadir las pantallas responsive de login y activación de cuenta en `/login` y `/activate-account`, reproduciendo sus referencias sin autenticación ni backend.

## Alcance

**Incluye:**

- Crear `/login` siguiendo `references/pantallas/login.dc.html`, sin las opciones «Personal» y «Familia».
- Crear `/activate-account` siguiendo `references/pantallas/activar-cuenta.dc.html`.
- Conservar los textos y valores de ejemplo de las referencias, incluida la invitación de Mateo, el código `7K4P9` y el email `lucia.fernandez@gmail.com`.
- Enlazar ambas pantallas entre sí y adaptar sus composiciones a móvil sin desbordamiento horizontal.
- Usar Fredoka, Nunito, Tailwind CSS y los estilos globales existentes.
- Mostrar el checkbox de autorización de fotos marcado inicialmente y permitir cambiar su estado.

**Fuera de alcance (para futuras specs):**

- Autenticación, validación de credenciales, creación de cuentas, backend o persistencia.
- Recuperación de contraseña funcional.
- Selección de tipo de usuario o acceso diferenciado para personal y familia.
- Agregar enlaces a estas pantallas en la navegación existente o implementar otras pantallas.

## Modelo de datos

Esta spec no introduce nuevas estructuras de datos. Los textos y valores de muestra se presentan directamente en las páginas y no se guardan.

## Plan de implementación

1. Crear `app/login/page.tsx` con la composición de escritorio y móvil de la referencia, omitiendo el selector «Personal/Familia». Mantener los campos y valores de ejemplo, un botón de envío sin acción y el enlace a `/activate-account`.
2. Crear `app/activate-account/page.tsx` con la invitación de ejemplo y el formulario de activación de la referencia. El checkbox será interactivo y estará marcado inicialmente; el botón de activación no enviará el formulario ni cambiará de ruta, y el enlace de login conducirá a `/login`.
3. Verificar que ambas páginas usen el tema y las fuentes existentes, que los enlaces entre ellas funcionen y que ninguna acción simule autenticación o activación.

## Criterios de aceptación

- [ ] `/login` muestra la pantalla de inicio de sesión de la referencia y no presenta opciones de «Personal» o «Familia».
- [ ] `/activate-account` muestra la invitación, el código, el email y el consentimiento de ejemplo de la referencia.
- [ ] El checkbox de autorización aparece marcado al cargar y permite marcarse y desmarcarse.
- [ ] «Activá tu cuenta» y «Iniciar sesión» enlazan respectivamente a `/activate-account` y `/login`.
- [ ] Enviar cualquiera de los formularios no autentica, crea cuentas, modifica datos ni navega a otra pantalla.
- [ ] «¿Olvidaste tu contraseña?» se muestra como elemento visual sin navegación ni acción.
- [ ] Ambas pantallas conservan la paleta, las tipografías y la jerarquía visual de sus referencias.
- [ ] Las dos pantallas se adaptan a móvil y no producen desbordamiento horizontal.
- [ ] No se agrega acceso a login a la navegación existente ni se modifica el comportamiento de `/`.
- [ ] `npm run lint` y `npm run build` finalizan correctamente.

## Decisiones

- **Sí:** usar `/login` y `/activate-account` como rutas de las pantallas y enlazarlas mutuamente.
- **Sí:** conservar los textos y los valores de ejemplo de las referencias para mantener fidelidad visual.
- **Sí:** permitir alternar el checkbox de autorización, iniciándolo marcado como en la referencia.
- **No:** implementar autenticación, validaciones, recuperación de contraseña ni activación real; no hay backend definido.
- **No:** conservar el selector de tipo de usuario del login, según lo solicitado.
- **No:** agregar las pantallas a la navegación global; el alcance se limita a las dos rutas y sus enlaces mutuos.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Las referencias describen principalmente una composición de escritorio. | Adaptar ambas páginas a móvil y verificar que sus formularios sigan siendo utilizables sin scroll horizontal. |
| Los datos de invitación y las credenciales de muestra podrían confundirse con información real. | Mantenerlos solo como contenido estático de demostración, sin guardarlos ni usarlos para autenticar. |

## Qué **no** incluye esta spec

- Autenticación, validación de credenciales, creación real de cuentas, backend o persistencia.
- Recuperación funcional de contraseña.
- Selección entre personal y familia.
- Acceso desde la navegación global u otras pantallas.

Estos elementos, si se requieren, se definirán en specs futuras.
