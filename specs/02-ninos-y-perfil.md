# SPEC 02 — Niños y perfil infantil

> **Estado:** Implementado
> **Depende de:** SPEC 01
> **Fecha:** 2026-10-18
> **Objetivo:** Añadir las pantallas responsive de gestión y perfil de niños en `/kids` y `/kids/[slug]`, usando datos ficticios y el estilo existente de OpenDayCare.

## Alcance

**Incluye:**

- Crear `/kids` con los ocho niños, el campo de búsqueda visual y los estilos de `references/pantallas/ninos.dc.html`.
- Crear `/kids/[slug]` con un perfil para cada niño, siguiendo `references/pantallas/perfil-nino.dc.html`.
- Definir en `data/mock.ts` los datos ficticios tipados del listado y perfiles completos, incluidos padres vinculados, fechas y notas.
- Adaptar ambas pantallas a móvil siguiendo el patrón responsive del feed.
- Compartir la navegación de la aplicación entre Feed y Niños e indicar la sección activa en cada ruta.

**Fuera de alcance (para futuras specs):**

- Base de datos, backend, autenticación y persistencia.
- Filtrado interactivo del buscador.
- Crear, editar o eliminar niños; vincular padres; consultar el resumen del día.
- Implementar las rutas de Avisos, Mi cuenta u otras pantallas no incluidas.

## Modelo de datos

`data/mock.ts` exportará una lista tipada de perfiles. Todos los datos son ficticios y se usan únicamente para presentar las pantallas.

```ts
interface ChildProfile {
  slug: string;
  name: string;
  ageLabel: string;
  roomName: string;
  initials: string;
  avatarBackground: string;
  avatarForeground: string;
  birthDate: string;
  enrollmentDate: string;
  notes: string;
  badge?: { label: string; type: "allergy" | "link" };
  parents: Array<{
    name: string;
    role: string;
    status: "active" | "pending";
  }>;
}
```

La lista contendrá Mateo Fernández, Sofía Méndez, Benjamín Ruiz, Valentina Soto, Tomás Díaz, Emma Castro, Lucas Romero y Olivia Vega. Sus slugs serán `mateo-fernandez`, `sofia-mendez`, `benjamin-ruiz`, `valentina-soto`, `tomas-diaz`, `emma-castro`, `lucas-romero` y `olivia-vega`. Se respetarán las edades, cantidades de padres y etiquetas del listado de referencia. Las fechas, nombres y estados de padres que no aparecen en la referencia serán ficticios y coherentes. Valentina no tendrá padres vinculados. Las notas de alergia corresponderán a las etiquetas MANÍ y LACTOSA; VINCULAR indicará que faltan padres vinculados.

## Plan de implementación

1. Añadir a `data/mock.ts` los tipos y registros ficticios de los ocho niños, sin alterar los datos existentes del feed.
2. Extraer la navegación responsive compartida a `app/components/app-shell.tsx` y adaptar `app/page.tsx` para usarla. Enlazar Feed y Niños entre sí; mantener visuales y sin acción las demás opciones.
3. Crear `app/kids/page.tsx` con la lista desde `data/mock.ts`, tarjetas enlazadas a sus perfiles, campo de búsqueda visual y diseño responsive de una columna en móvil.
4. Crear `app/kids/[slug]/page.tsx` para presentar el perfil correspondiente. Los slugs inexistentes mostrarán el estado 404.

## Criterios de aceptación

- [x] `/kids` muestra los ocho niños con nombre, edad, cantidad de padres y etiquetas de referencia.
- [x] Cada tarjeta navega al perfil correspondiente mediante un slug único.
- [x] `/kids/[slug]` muestra datos propios del niño y conserva la composición visual de la referencia.
- [x] Todos los perfiles tienen fechas, notas y datos ficticios de padres; se respetan las cantidades de padres indicadas en el listado y Valentina no tiene padres vinculados.
- [x] Un slug inexistente responde con el estado 404.
- [x] El campo de búsqueda se muestra, pero escribir en él no filtra ni modifica la lista.
- [x] Agregar, editar, Resumen del día y Vincular otro padre son elementos visuales sin navegación ni cambios de datos.
- [x] Feed y Niños permiten navegar entre sus rutas y muestran correctamente cuál está activa.
- [x] En móvil, la lista se presenta en una columna, el perfil apila sus secciones y no hay desbordamiento horizontal.
- [x] Se mantienen los colores, tipografías, tarjetas e iconografía de las referencias.
- [x] No se introduce base de datos, backend ni persistencia.
- [x] `npm run lint` y `npm run build` finalizan correctamente.

## Decisiones

- **Sí:** usar `data/mock.ts` para todos los datos; esta entrega no tiene base de datos.
- **Sí:** completar los perfiles con información ficticia coherente, respetando los datos resumidos en el listado.
- **Sí:** mantener el buscador y las acciones secundarias como presentación sin comportamiento.
- **Sí:** compartir la navegación para conservar el patrón responsive existente.
- **No:** ampliar el trabajo a otras pantallas o a acciones de gestión reales.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Los datos ficticios de padres y alergias podrían confundirse con información real. | Mantenerlos como datos de muestra en `data/mock.ts`, sin persistencia. |
| La referencia no define perfiles completos para los siete niños restantes. | Completar esos campos con valores ficticios y respetar las edades, cantidades de padres y etiquetas del listado. |

## Qué **no** incluye esta spec

- Persistencia, base de datos, backend o autenticación.
- Búsqueda funcional.
- Alta, edición, eliminación o vinculación real de niños y padres.
- Las rutas de Resumen del día, Avisos, Mi cuenta u otras pantallas.

Estos elementos, si se requieren, se definirán en specs futuras.
