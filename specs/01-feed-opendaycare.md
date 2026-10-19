# SPEC 01 — Feed de OpenDayCare

> **Estado:** Aprobado
> **Depende de:** Ninguna
> **Fecha:** 2026-10-18
> **Objetivo:** Reemplazar la pantalla inicial de `/` por un feed estático que reproduzca el estilo de `references/pantallas/feed.dc.html` y se adapte a móvil usando Tailwind CSS.

## Alcance

**Incluye:**

- Reemplazar la página inicial de Next.js por el feed de OpenDayCare.
- Usar datos ficticios estáticos definidos en `data/mock.ts` para el perfil, la sala y tres publicaciones.
- Reproducir la composición, paleta, tipografías Fredoka y Nunito, tarjetas e iconografía de la referencia.
- Implementar los estilos de los componentes con Tailwind CSS.
- Adaptar la navegación a móvil con una barra inferior y mantener accesible la acción «Nueva publicación».
- Ajustar los estilos globales, idioma y metadatos necesarios para que la página coincida con la referencia.

**Fuera de alcance (para futuras specs):**

- Autenticación, base de datos, backend y persistencia.
- Rutas o pantallas adicionales.
- Navegación real o acciones para publicar, editar, dar «Me gusta» o comentar.
- Imágenes reales para las publicaciones.

## Modelo de datos

`data/mock.ts` exportará datos estáticos tipados para:

- El perfil ficticio de la maestra y los datos de la sala.
- El saludo, la cantidad de niños y la fecha de muestra.
- Tres publicaciones ficticias de las categorías `logro`, `actividad` y `anuncio`.
- Cada publicación incluirá identificador, hora, autor/contexto, destinatario, texto, contadores de «Me gusta» y comentarios. La publicación de actividad incluirá también el texto descriptivo del placeholder de foto.

Los textos, nombres, horas, destinatarios y contadores reproducirán el contenido mostrado en `references/pantallas/feed.dc.html`. Estos datos solo se usan para presentar la maqueta y no se guardan.

## Plan de implementación

1. Crear `data/mock.ts` con los tipos y los datos ficticios del perfil, la sala y las tres publicaciones.
2. Actualizar `app/layout.tsx` y `app/globals.css` con idioma, metadatos, fuentes y estilos base necesarios para el tema, conservando Tailwind CSS como sistema de estilos.
3. Reemplazar `app/page.tsx` por la composición de escritorio del feed: barra lateral, encabezado, acceso visual a nueva publicación y contenedor central. Usar clases de Tailwind CSS para el diseño de componentes.
4. Añadir las tarjetas de las tres publicaciones a `app/page.tsx`, alimentadas por `data/mock.ts`, incluyendo badges por categoría, contadores y placeholder de foto.
5. Completar los estilos responsive con Tailwind CSS: en móvil, sustituir la barra lateral por navegación inferior, conservar accesible la acción principal y evitar desbordamiento horizontal.

## Criterios de aceptación

- [ ] La ruta `/` muestra el feed de OpenDayCare y no la pantalla inicial de Next.js.
- [ ] El perfil, la sala, el saludo y las tres publicaciones se renderizan desde `data/mock.ts`.
- [ ] En escritorio, la navegación lateral mide 248 px y el feed se presenta centrado con un ancho máximo aproximado de 760 px, como en la referencia.
- [ ] En móvil, se muestra la navegación inferior, la acción «Nueva publicación» sigue visible y no hay desbordamiento horizontal.
- [ ] Se conservan los colores, las tarjetas, las categorías, las tipografías Fredoka y Nunito y el placeholder de foto de la referencia.
- [ ] Los controles y enlaces son solo presentación y no cambian estado ni navegan a pantallas inexistentes.
- [ ] Los estilos de los componentes están implementados con clases de Tailwind CSS; `app/globals.css` queda para estilos globales.
- [ ] `npm run lint` y `npm run build` finalizan correctamente.

## Decisiones

- **Sí:** usar `data/mock.ts` para separar los datos ficticios de la presentación y no introducir persistencia.
- **Sí:** usar Tailwind CSS para los estilos de componentes, ya que forma parte del proyecto.
- **Sí:** mantener los textos de la referencia para conservar fidelidad visual, tratándolos como datos ficticios.
- **Sí:** usar una barra inferior en móvil porque la referencia solo define una composición de escritorio.
- **No:** agregar acciones funcionales, rutas o persistencia; el objetivo de esta entrega es la reproducción visual.
- **No:** agregar fotos reales; la referencia contiene un placeholder ilustrativo.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| La referencia no define una composición móvil. | Mantener la paleta y el estilo de tarjetas, adaptar la navegación con una barra inferior y comprobar que no haya scroll horizontal. |
| Las fuentes externas podrían no cargar en un entorno sin conexión. | Mantener fuentes de respaldo sans-serif en los estilos globales. |

## Qué **no** incluye esta spec

- Autenticación, usuarios reales, base de datos, backend o persistencia.
- Pantallas adicionales ni navegación funcional.
- Publicaciones, comentarios, likes o edición interactivos.
- Imágenes reales.

Estos elementos, si se requieren, se definirán en specs futuras.
