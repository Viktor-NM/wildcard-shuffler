# Contribuir

Gracias por el interés. El repo es pequeño; estas son las reglas.

## Flujo

`master` está protegido: no se acepta push directo. Todo cambio entra por pull
request y lo revisa y mergea el mantenedor.

1. Haz fork del repo.
2. Crea una rama: `git switch -c feat/lo-que-sea`.
3. Comprueba que compila antes de abrir el PR:
   ```sh
   pnpm install
   pnpm astro check   # 0 errores
   pnpm build
   ```
4. Abre el PR contra `master` explicando el porqué del cambio.

Los PRs se integran con **squash merge**, así que no hace falta que limpies el
historial de tu rama. La rama se borra sola al mergear.

## Qué se acepta fácil

- **Acciones nuevas para el comodín**: añade una entrada al array `ACTIONS` en
  `src/utils/wildcard.ts`. El segundo argumento (`mercy`) indica si la acción
  favorece a quien la saca — si es `true` se lanza confeti.
  ```ts
  new Action('Todos toman 5 cartas.', false)
  ```
  El texto se ajusta solo al disco de la carta, no toques tamaños de fuente.
- Correcciones de ortografía o de redacción en las acciones existentes.
- Bugs de maquetación en resoluciones concretas: indica navegador y tamaño.

## Qué conviene consultar antes

Cambios grandes de diseño, dependencias nuevas o reescrituras del ajuste de
texto (`fitTextToDisc`) y del tilt 3D. Abre un issue primero.

## Estilo

Imita el código que ya está: sin punto y coma en los `.ts`, Tailwind en las
plantillas, sin comentarios salvo que el porqué no sea obvio. No añadas
formateadores ni linters en un PR de contenido.

## Accesibilidad

El tilt 3D y el confeti respetan `prefers-reduced-motion: reduce`. Si añades
movimiento, respétalo también.

## Marcas de terceros

UNO(R) es marca registrada de Mattel, Inc. y este proyecto no tiene relacion
con Mattel. No envies PRs que copien texto, arte o logotipos oficiales del
juego: las acciones deben ser redaccion original y el diseno de la carta debe
mantenerse generico. Ver NOTICE.
