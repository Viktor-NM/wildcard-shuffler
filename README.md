# Wildcard Shuffler

Generador de reglas caseras para el comodín: baraja y muestra en pantalla la
acción que toca cumplir. Pensado para partidas de UNO®.

> Proyecto no oficial de aficionados. Sin afiliación con Mattel, Inc.
> Ver [Aviso legal](#aviso-legal).

Cada vez que se carga la página se elige al azar una de las 35 acciones de
`src/utils/wildcard.ts` y se dibuja sobre una carta de comodin estilizada. Las acciones
marcadas como "misericordiosas" (`mercy: true`) disparan confeti con los
colores del juego.

## Cómo funciona

- **Carta**: maquetada con Tailwind CSS v4. Los cuatro colores del juego se definen como
  tokens `@theme` en `src/styles/global.css` (`--color-red-tomato`,
  `--color-blue-crayola`, `--color-yellow-amber`, `--color-green-jade`).
- **Sorteo en cliente**: el sitio se genera estático, así que la elección
  aleatoria vive en el `<script>` del cliente. Si se hiciera en el frontmatter
  de Astro correría en build y toda visita vería la misma acción.
- **Ajuste de texto**: el texto va dentro de un disco elíptico rotado 35°.
  `fitTextToDisc()` hace búsqueda binaria del tamaño de fuente comprobando que
  las esquinas de la caja de texto queden dentro de la elipse. Se recalcula con
  `ResizeObserver` y tras `document.fonts.ready`.
- **Inclinación 3D**: la carta sigue el ratón (`mousemove`) en dispositivos con
  puntero fino y el giroscopio (`deviceorientation`) en móvil, interpolando con
  lerp. Se desactiva con `prefers-reduced-motion: reduce`.

## Estructura

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   └── index.astro     # carta, ajuste de texto, tilt, confeti
│   ├── styles/
│   │   └── global.css      # tokens de color y fondo de rejilla
│   └── utils/
│       └── wildcard.ts     # lista de acciones + pickRandomAction()
└── astro.config.mjs
```

## Añadir o editar acciones

Edita el array `ACTIONS` en `src/utils/wildcard.ts`:

```ts
new Action('Todos toman 5 cartas.', false)
//          texto que se muestra    ¿es favorable? -> confeti
```

No hace falta tocar nada más: el ajuste de tamaño de fuente se adapta solo a
textos cortos (`+10`) y largos.

## Comandos

Requiere Node >= 22.12 y pnpm.

| Comando        | Acción                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Instala dependencias                         |
| `pnpm dev`     | Servidor local en `localhost:4321`           |
| `pnpm build`   | Compila el sitio a `./dist/`                 |
| `pnpm preview` | Previsualiza el build                        |
| `pnpm astro check` | Comprueba tipos de los archivos `.astro` |

## Stack

[Astro 7](https://docs.astro.build) · [Tailwind CSS 4](https://tailwindcss.com) · [canvas-confetti](https://github.com/catdad/canvas-confetti) · TypeScript

## Aviso legal

Proyecto no oficial hecho por aficionados, sin afiliación, patrocinio ni
respaldo de Mattel, Inc. UNO® es marca registrada de Mattel. Este repositorio
no distribuye, reproduce ni sustituye el juego: solo genera reglas caseras
escritas por los colaboradores del proyecto, para usarse con una baraja que ya
tengas.

Las reglas y mecánicas de juego no son objeto de derechos de autor; el texto de
las acciones de `src/utils/wildcard.ts` es original de este proyecto.

La licencia MIT (ver [LICENSE](LICENSE)) cubre el código y el texto de este
repositorio. No otorga derecho alguno sobre marcas, logotipos ni imagen
comercial de terceros. Ver [NOTICE](NOTICE).
